import ICAL from "ical.js";
import type { Match } from "@/types/match";
import type { MatchKind } from "@/types/matchKind";
import { resolveLocationSlug } from "@/data/footballChVenueToLocationSlug";
import { matchStatusOverrides } from "@/data/cancelledMatches";

const FFAS_VEREIN_NAMES = [
  "FC Hausen",
  "FC Knonau-Mettmenstetten",
  "Sportclub Hedingen",
  "FC Wettswil-Bonstetten",
  "FC Uitikon",
  // Falls football.ch kürzere Namen verwendet, hier ergänzen.
  "Hausen a/A",
  "KMO",
  "Hedingen",
  "FCWB",
  "Uitikon",
];

/**
 * Erkennt, ob ein Team-Name zu einem FFAS-Trägerverein gehört.
 */
function isFfasTeam(teamName: string): boolean {
  const lower = teamName.toLowerCase();
  return FFAS_VEREIN_NAMES.some((name) => lower.includes(name.toLowerCase()));
}

/**
 * Entfernt Liga-Suffixe wie "(4.L(F))" oder Team-Nummern wie "1" am Ende.
 * "FC Wallisellen 1 (4.L(F))" → "FC Wallisellen 1"
 */
function cleanTeamName(name: string): string {
  const trimmed = name.trim();
  // Erst Klammer-Suffix entfernen, dann Trailing Unterstrich (football.ch-Datenfehler)
  let result = trimmed;

  if (result.endsWith(")")) {
    let depth = 0;
    for (let i = result.length - 1; i >= 0; i--) {
      const ch = result[i];
      if (ch === ")") depth++;
      else if (ch === "(") {
        depth--;
        if (depth === 0) {
          result = result.substring(0, i).trim();
          break;
        }
      }
    }
  }

  // Trailing Unterstrich(e) entfernen: "FC Horgen a_" → "FC Horgen a"
  return result.replace(/_+$/, "").trim();
}

/**
 * Erkennt anhand des SUMMARY-Felds, ob ein Event ein Turnier ist.
 * Turniere haben kein "Team A - Team B"-Muster, sondern Texte wie
 * "JE/FF-11 - Stärkeklasse 1 - Turnier Junior*innen E-F-G / ..."
 */
function isTournament(summary: string): boolean {
  const lower = summary.toLowerCase();
  return lower.includes("turnier");
}

/**
 * Parsed das SUMMARY-Feld "Team A - Team B" in zwei Team-Namen.
 * Beachtet, dass Team-Namen Klammer-Suffixe enthalten können wie "(J-D-9)" oder "(4.L(F))",
 * deren interne Bindestriche NICHT als Trenner gelten dürfen.
 *
 * Algorithmus: finde das Trenn-" - ", das ausserhalb aller Klammern liegt.
 */
function parseSummary(
  summary: string,
): { teamA: string; teamB: string } | null {
  const normalized = summary.replace(/\s+/g, " ").trim();

  let depth = 0;
  for (let i = 0; i < normalized.length - 2; i++) {
    const ch = normalized[i];
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    else if (
      depth === 0 &&
      ch === " " &&
      normalized[i + 1] === "-" &&
      normalized[i + 2] === " "
    ) {
      // Trenn-" - " ausserhalb aller Klammern gefunden
      const teamA = normalized.substring(0, i);
      const teamB = normalized.substring(i + 3);
      return {
        teamA: cleanTeamName(teamA),
        teamB: cleanTeamName(teamB),
      };
    }
  }

  return null;
}

/**
 * DESCRIPTION-Format:
 *   "Meisterschaft\n  Frauen 4. Liga - ... - Gruppe 1\n\nSpielnummer 197558\n..."
 *
 * Zeile 1 = Wettbewerbs-Kategorie (Meisterschaft / Cup / Trainingsspiele / ...)
 * Zeile 2 = Liga-Detail
 * "Spielnummer NNNNNN" irgendwo drin
 */
function parseDescription(description: string): {
  kind: MatchKind;
  competition: string | undefined;
  matchNumber: string | undefined;
} {
  // football.ch DESCRIPTION enthält LITERALE "\n"-Sequenzen (Backslash + n)
  // zusätzlich zu echten Newlines. Beides normalisieren:
  const normalized = description
    .replace(/\\n/g, "\n") // literal "\n" → echtes Newline
    .replace(/\r/g, "") // CR raus
    .trim();

  // Jetzt auf echten Newlines splitten
  const lines = normalized
    .split(/\n+/) // mehrere Newlines am Stück = ein Trennzeichen
    .map((l) => l.trim())
    .filter(Boolean);

  // Erwartete Struktur nach Splitten:
  //   Zeile 0: Kategorie ("Meisterschaft" / "Cup..." / "Trainingsspiele")
  //   Zeile 1: Liga-Details
  //   Zeile 2+: Spielnummer, Status, Link
  //
  // ABER: die ersten zwei Zeilen sind im Roh-iCal mit nur einem Space getrennt,
  // ical.js merged sie evtl. zu einer Zeile. Heuristik:
  // - Wenn Zeile 0 nur "Meisterschaft"/"Cup"/"Trainingsspiele" enthält, ist Zeile 1 die Liga
  // - Wenn Zeile 0 beides enthält, splitten wir intern

  let categoryLine = lines[0] ?? "";
  let competitionLine = lines[1] ?? "";

  // Falls Zeile 0 schon Kategorie + Liga zusammen enthält (durch Folding gemerged):
  // z.B. "Meisterschaft  Frauen 4. Liga - ..."
  // Erkennbar: enthält "Liga" oder Klammer-Konstrukte und ist sehr lang
  const categoryWords = [
    "Meisterschaft",
    "Cup",
    "Trainingsspiele",
    "Testspiel",
  ];
  for (const word of categoryWords) {
    if (
      categoryLine.startsWith(word) &&
      categoryLine.length > word.length + 5
    ) {
      // Splitte nach der Kategorie
      competitionLine = categoryLine.substring(word.length).trim();
      categoryLine = word;
      break;
    }
  }

  const kind: MatchKind = (() => {
    const lower = categoryLine.toLowerCase();
    if (lower.includes("cup")) return "Cup";
    if (lower.includes("trainings") || lower.includes("testspiel"))
      return "Testspiel";
    return "Meisterschaft";
  })();

  const matchNumberMatch = normalized.match(/Spielnummer\s+(\d+)/);
  const matchNumber = matchNumberMatch ? matchNumberMatch[1] : undefined;

  // competition ist nur bei Meisterschaft sinnvoll (Liga-Detail).
  // Bei Cup/Testspiel wäre lines[1] oft die Spielnummer-Zeile — die wollen wir nicht.
  const cleanedCompetition =
    kind === "Meisterschaft" ? competitionLine.replace(/\s+/g, " ") : undefined;

  return {
    kind,
    competition: cleanedCompetition,
    matchNumber,
  };
}

/**
 * Parsed eine Turnier-DESCRIPTION wie:
 *   "Organisator: FC Räterschen - Turnier BRACK.CH pmf (FVRZ, JE/FF-11, 2025/2026)"
 *
 * Extrahiert Organisator-Namen und Turnier-Titel.
 */
function parseTournamentDescription(description: string): {
  organizerText?: string;
  tournamentTitle?: string;
} {
  const normalized = description
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",") // iCal escapes Kommas
    .replace(/\r/g, "")
    .trim();

  const firstLine = normalized.split(/\n+/)[0]?.trim() ?? "";
  // Format: "Organisator: <NAME> - <TITEL> (META)"
  const match = firstLine.match(
    /^Organisator:\s*(.+?)\s+-\s+(.+?)(?:\s*\([^)]+\))?$/,
  );
  if (!match) return {};

  return {
    organizerText: match[1].trim(),
    tournamentTitle: match[2].trim(),
  };
}

/**
 * Wandelt einen ICAL.Time in einen ISO-Datums-String (YYYY-MM-DD) und Zeit (HH:MM).
 * Beachtet die Timezone des Events.
 */
function formatDateTime(time: ICAL.Time): { date: string; time: string } {
  const jsDate = time.toJSDate();
  // toJSDate konvertiert via Timezone-Info, gibt korrekten Wallclock-Moment zurück
  // Für FFAS reicht lokale (Schweizer) Repräsentation
  const yyyy = jsDate.getFullYear();
  const mm = String(jsDate.getMonth() + 1).padStart(2, "0");
  const dd = String(jsDate.getDate()).padStart(2, "0");
  const hh = String(jsDate.getHours()).padStart(2, "0");
  const min = String(jsDate.getMinutes()).padStart(2, "0");
  return { date: `${yyyy}-${mm}-${dd}`, time: `${hh}:${min}` };
}

/**
 * Liest einen iCal-Feed-Body und gibt Match[] für das gegebene FFAS-Team zurück.
 */
export function parseFootballChIcal(
  teamSlug: string,
  icsBody: string,
): Match[] {
  const jcalData = ICAL.parse(icsBody);
  const vcalendar = new ICAL.Component(jcalData);
  const vevents = vcalendar.getAllSubcomponents("vevent");

  const matches: Match[] = [];

  for (const vevent of vevents) {
    const event = new ICAL.Event(vevent);

    const summary = event.summary ?? "";
    const description = event.description ?? "";
    const location = event.location ?? "";

    const startTime = event.startDate;
    const { date, time } = formatDateTime(startTime);

    // ─── Turnier-Branch ────────────────────────────────────────────────
    if (isTournament(summary)) {
      const endTime = event.endDate
        ? formatDateTime(event.endDate).time
        : undefined;

      const { organizerText, tournamentTitle } =
        parseTournamentDescription(description);

      const locationSlug = resolveLocationSlug(location);
      const venueText = locationSlug ? undefined : location || undefined;

      matches.push({
        date,
        time,
        endTime,
        teamSlug,
        home: locationSlug !== undefined, // Heim wenn FFAS-Heimplatz
        kind: "Turnier",
        competition: summary.replace(/\s+/g, " "), // SUMMARY ist hier die Kategorie
        tournamentTitle,
        organizerText,
        locationSlug,
        venueText,
      });
      continue;
    }

    // ─── Reguläres Spiel ───────────────────────────────────────────────
    const teams = parseSummary(summary);
    if (!teams) continue;

    const aIsFfas = isFfasTeam(teams.teamA);
    const bIsFfas = isFfasTeam(teams.teamB);
    if (!aIsFfas && !bIsFfas) continue;

    const home = aIsFfas;
    const opponent = home ? teams.teamB : teams.teamA;

    const { kind, competition, matchNumber } = parseDescription(description);

    const locationSlug = home ? resolveLocationSlug(location) : undefined;
    const venueText = locationSlug ? undefined : location || undefined;

    const status = matchNumber ? matchStatusOverrides[matchNumber] : undefined;

    matches.push({
      date,
      time,
      teamSlug,
      opponent,
      home,
      kind,
      competition,
      matchNumber,
      locationSlug,
      venueText,
      status,
    });
  }

  return matches;
}
