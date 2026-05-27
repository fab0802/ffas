import {
  getTeamForMatch,
  getDisplayLeague,
  formatDateLong,
  getMatchVenueName,
  getMatchTeamDisplayName,
  getMatchTeamCrestLabel,
} from "@/helpers";
import type { Match } from "@/types/match";
import styles from "./MatchCard.module.css";

export type MatchCardProps = { match: Match };

/**
 * Pill-Label oben rechts: kontextabhängig nach MatchKind.
 */
function getPillLabel(match: Match): string {
  switch (match.kind) {
    case "Meisterschaft":
      return "Matchday";
    case "Cup":
      return "Cup";
    case "Testspiel":
      return "Testspiel";
    case "Turnier":
      return "Turnier";
  }
}

/**
 * Crest-Initialen aus dem Namen (max. 2 Zeichen).
 * "FC Dietikon" → "DI", "FFAS Frauen 1" → "FF"
 */
function initials(name: string): string {
  const cleaned = name.replace(/^FC\s+|^SC\s+|^SV\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  // Bei mehreren Wörtern: erster Buchstabe jedes Wortes (max 3)
  return parts
    .slice(0, 3)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function MatchCard({ match }: MatchCardProps) {
  const team = getTeamForMatch(match);
  const league = getDisplayLeague(match);
  const venueName = getMatchVenueName(match);

  const ffasName = team ? getMatchTeamDisplayName(team) : "FFAS";
  const ffasCrest = team ? getMatchTeamCrestLabel(team) : "FF";
  const ffasSub = "Albis Süd";

  // ─── Turnier-Branch ──────────────────────────────────────────────────
  if (match.kind === "Turnier") {
    const timeLine =
      match.time && match.endTime
        ? `${match.time}–${match.endTime}`
        : match.time;

    const dateLine = [formatDateLong(match.date), timeLine, venueName]
      .filter(Boolean)
      .join(" · ");

    return (
      <article className={styles.card} data-pill={getPillLabel(match)}>
        <div className={styles.date}>{dateLine}</div>

        <div className={styles.tournament}>
          <div className={styles.tournamentTitle}>
            {match.tournamentTitle ?? "Turnier"}
          </div>
          {match.competition && (
            <div className={styles.tournamentMeta}>{match.competition}</div>
          )}
          <div className={styles.tournamentTeam}>
            {ffasName} <span className={styles.tournamentSub}>· {ffasSub}</span>
          </div>
        </div>

        <div className={styles.info}>
          <span>
            Wettbewerb
            <strong>Turnier</strong>
          </span>
          {match.organizerText && (
            <span>
              Organisator
              <strong>{match.organizerText}</strong>
            </span>
          )}
          {venueName && (
            <span>
              Ort
              <strong>{venueName}</strong>
            </span>
          )}
        </div>
      </article>
    );
  }

  // ─── Reguläres Spiel (Meisterschaft / Cup / Testspiel) ───────────────
  // Bei regulären Spielen ist opponent immer gesetzt — wir setzen einen Fallback,
  // damit TypeScript glücklich ist.
  const opponent = match.opponent ?? "TBD";

  const homeName = match.home ? ffasName : opponent;
  const homeSub = match.home ? ffasSub : "Gast";
  const awayName = match.home ? opponent : ffasName;
  const awaySub = match.home ? "Gast" : ffasSub;

  const dateLine = [
    formatDateLong(match.date),
    match.time,
    match.home && venueName ? venueName : undefined,
    !match.home ? "Auswärts" : undefined,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className={styles.card} data-pill={getPillLabel(match)}>
      <div className={styles.date}>{dateLine}</div>

      <div className={styles.teams}>
        <div className={`${styles.team} ${styles.home}`}>
          <div className={styles.crest}>
            {match.home ? ffasCrest : initials(homeName)}
          </div>{" "}
          <div className={styles.name}>{homeName}</div>
          <div className={styles.sub}>{homeSub}</div>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={`${styles.team} ${styles.away}`}>
          <div className={styles.crest}>
            {match.home ? initials(awayName) : ffasCrest}+{" "}
          </div>{" "}
          <div className={styles.name}>{awayName}</div>
          <div className={styles.sub}>{awaySub}</div>
        </div>
      </div>

      <div className={styles.info}>
        <span>
          Wettbewerb
          <strong>{match.kind}</strong>
        </span>
        {league && (
          <span>
            Liga
            <strong>{league}</strong>
          </span>
        )}
        <span>
          Ort
          <strong>{match.home ? "Heim" : "Auswärts"}</strong>
        </span>
      </div>
    </article>
  );
}
