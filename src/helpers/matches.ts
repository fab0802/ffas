import { getMatches } from "./matchesProvider";
import { teams } from "@/data/teams";
import { getLocationBySlug } from "./locations";
import type { Match } from "@/types/match";
import type { Team } from "@/types/team";
import type { MatchDayGroup } from "@/types/matchDayGroup";

export function getTeamForMatch(match: Match): Team | undefined {
  return teams.find((t) => t.slug === match.teamSlug);
}

export function getDisplayLeague(match: Match): string | undefined {
  if (match.kind !== "Meisterschaft") return undefined;
  return getTeamForMatch(match)?.liga;
}

/**
 * Anzeigename für den Spielort.
 * Bevorzugt locationSlug (intern referenziert), sonst venueText (Freitext).
 */
export function getMatchVenueName(match: Match): string | undefined {
  if (match.locationSlug) {
    return getLocationBySlug(match.locationSlug)?.name;
  }
  return match.venueText;
}

/** Soonest match from today onward, or undefined wenn keine zukünftigen. */
export async function getNextMatch(): Promise<Match | undefined> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  return matches
    .filter((m) => m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}

export async function getUpcomingMatches(
  count: number,
  excludeDate?: string,
  excludeTeamSlug?: string,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  return matches
    .filter((m) => m.date >= today)
    .filter((m) => !(m.date === excludeDate && m.teamSlug === excludeTeamSlug))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}

/** Alle zukünftigen Spiele eines bestimmten Teams, chronologisch sortiert. */
export async function getUpcomingMatchesForTeam(
  teamSlug: string,
  count?: number,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  const filtered = matches
    .filter((m) => m.teamSlug === teamSlug && m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return count !== undefined ? filtered.slice(0, count) : filtered;
}

/** Vergangene Spiele eines Teams mit Resultat, neueste zuerst. */
export async function getRecentResultsForTeam(
  teamSlug: string,
  count?: number,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  const filtered = matches
    .filter((m) => m.teamSlug === teamSlug && m.date < today && m.result)
    .sort((a, b) => b.date.localeCompare(a.date));
  return count !== undefined ? filtered.slice(0, count) : filtered;
}

/**
 * Resultat aus FFAS-Sicht: { ffas, opponent, outcome }.
 * Liefert undefined, wenn kein Result auf dem Match.
 */
export type FfasResult = {
  ffas: number;
  opponent: number;
  outcome: "win" | "draw" | "loss";
};

export function getFfasResult(match: Match): FfasResult | undefined {
  if (!match.result) return undefined;
  const ffas = match.home ? match.result.home : match.result.away;
  const opponent = match.home ? match.result.away : match.result.home;
  const outcome: FfasResult["outcome"] =
    ffas > opponent ? "win" : ffas < opponent ? "loss" : "draw";
  return { ffas, opponent, outcome };
}

const FEATURED_TEAM_PRIORITY: readonly string[] = ["frauen-1", "frauen-2"];

/**
 * Featured-Match für die Hero-Card: erst nächstes Frauen-1-Spiel,
 * wenn keines da, Frauen-2, sonst nächstes Match eines beliebigen Teams.
 */
export async function getFeaturedMatch(): Promise<Match | undefined> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = matches
    .filter((m) => m.date >= today)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return (a.time ?? "").localeCompare(b.time ?? "");
    });

  for (const slug of FEATURED_TEAM_PRIORITY) {
    const match = upcoming.find((m) => m.teamSlug === slug);
    if (match) return match;
  }

  return upcoming[0];
}

/**
 * Alle Matches in den nächsten N Tagen ab heute (inkl. heute),
 * chronologisch sortiert. Schliesst optional ein bestimmtes Match aus
 * (z.B. das featured-Match, das schon in der Hero-Card erscheint).
 */
export async function getMatchesInNextDays(
  days: number,
  excludeMatch?: Match,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date();
  const todayIso = today.toISOString().slice(0, 10);
  const limit = new Date(today);
  limit.setDate(today.getDate() + days);
  const limitIso = limit.toISOString().slice(0, 10);

  return matches
    .filter((m) => m.date >= todayIso && m.date <= limitIso)
    .filter((m) => {
      if (!excludeMatch) return true;
      // Bevorzugt matchNumber-Vergleich (eindeutig); sonst date+teamSlug
      if (excludeMatch.matchNumber && m.matchNumber) {
        return m.matchNumber !== excludeMatch.matchNumber;
      }
      return !(
        m.date === excludeMatch.date && m.teamSlug === excludeMatch.teamSlug
      );
    })
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return (a.time ?? "").localeCompare(b.time ?? "");
    });
}

/**
 * Gekürzter Venue-Name für kompakte Listen.
 * Schneidet alles ab dem ersten " - " ab.
 * "Flüeli, Winterthur - Platz 3 (Kunstrasen)" → "Flüeli, Winterthur"
 */
export function getShortVenueName(match: Match): string | undefined {
  const full = getMatchVenueName(match);
  if (!full) return undefined;
  const dashIdx = full.indexOf(" - ");
  return dashIdx === -1 ? full : full.substring(0, dashIdx).trim();
}

/**
 * Gruppiert Matches nach Datum, chronologisch.
 * Innerhalb eines Tages nach Zeit sortiert.
 */
export function groupMatchesByDay(matches: Match[]): MatchDayGroup[] {
  const map = new Map<string, Match[]>();
  for (const m of matches) {
    const arr = map.get(m.date) ?? [];
    arr.push(m);
    map.set(m.date, arr);
  }

  return Array.from(map.entries())
    .map(([date, dayMatches]) => ({
      date,
      matches: dayMatches.sort((a, b) =>
        (a.time ?? "").localeCompare(b.time ?? ""),
      ),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getMatchStatusLabel(match: Match): string | undefined {
  switch (match.status) {
    case "Nullwertung":
      return "Abgesagt";
    case "Verschoben":
      return "Verschoben";
    default:
      return undefined;
  }
}
