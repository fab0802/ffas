import type { Team } from "@/types/team";
import {
  getUpcomingMatchesForTeam,
  getMatchVenueName,
  getShortVenueName,
  formatDateLongUpper,
  getMatchStatusLabel,
} from "@/helpers";
import styles from "./TeamUpcomingBlock.module.css";

export type TeamUpcomingBlockProps = {
  team: Team;
};

export default async function TeamUpcomingBlock({
  team,
}: TeamUpcomingBlockProps) {
  const matches = await getUpcomingMatchesForTeam(team.slug, 5);
  if (matches.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Kommende Spiele</h2>
      <ul className={styles.list}>
        {matches.map((match) => {
          const statusLabel = getMatchStatusLabel(match);
          const isCancelled = match.status === "Nullwertung";

          // Mittelspalte: bei Turnieren der Titel, sonst vs./@ Gegner
          const middle =
            match.kind === "Turnier"
              ? (match.tournamentTitle ?? "Turnier")
              : `${match.home ? "vs." : "@"} ${match.opponent ?? "—"}`;

          // Venue: bei Turnieren ausführlicher (füllt den Gegner-Platz mit),
          // sonst kompakt
          const venue =
            match.kind === "Turnier"
              ? getMatchVenueName(match)
              : getShortVenueName(match);

          return (
            <li
              key={
                match.matchNumber ??
                `${match.teamSlug}-${match.date}-${match.time ?? ""}`
              }
              className={`${styles.row} ${isCancelled ? styles.cancelled : ""}`}
            >
              <span className={styles.date}>
                {formatDateLongUpper(match.date)}
              </span>
              <span className={styles.opponent}>
                {middle}
                {statusLabel && (
                  <span className={styles.statusBadge}>{statusLabel}</span>
                )}
              </span>
              <span className={styles.venue}>
                {venue ?? (match.home ? "Heim" : "Auswärts")}
              </span>
              <span className={styles.time}>{match.time ?? "—"}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
