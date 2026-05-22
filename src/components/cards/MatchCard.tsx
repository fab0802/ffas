import {
  getTeamForMatch,
  getDisplayLeague,
  formatDateLong,
  getMatchVenueName,
} from "@/helpers";
import type { Match } from "@/types/match";
import styles from "./MatchCard.module.css";

type Props = {
  match: Match;
};

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
  }
}

/**
 * Crest-Initialen aus dem Namen (max. 2 Zeichen).
 * "FC Dietikon" → "DI", "FFAS Frauen 1" → "FF"
 * Später durch echte Logos ersetzbar.
 */
function initials(name: string): string {
  const cleaned = name.replace(/^FC\s+|^SC\s+|^SV\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function MatchCard({ match }: Props) {
  const team = getTeamForMatch(match);
  const league = getDisplayLeague(match);
  const venueName = getMatchVenueName(match);

  const ffasName = team?.name ?? "FFAS";
  const ffasSub = team?.emphasis ?? "Albis Süd";

  const homeName = match.home ? ffasName : match.opponent;
  const homeSub = match.home ? ffasSub : "Gast";
  const awayName = match.home ? match.opponent : ffasName;
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
          <div className={styles.crest}>{initials(homeName)}</div>
          <div className={styles.name}>{homeName}</div>
          <div className={styles.sub}>{homeSub}</div>
        </div>

        <div className={styles.vs}>VS</div>

        <div className={`${styles.team} ${styles.away}`}>
          <div className={styles.crest}>{initials(awayName)}</div>
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
