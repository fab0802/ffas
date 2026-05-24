import type { Team } from "@/types/team";
import {
  getUpcomingMatchesForTeam,
  getMatchVenueName,
  formatDateLongUpper,
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
          const venue = getMatchVenueName(match);
          return (
            <li key={`${match.date}-${match.teamSlug}`} className={styles.row}>
              <span className={styles.date}>
                {formatDateLongUpper(match.date)}
              </span>

              <span className={styles.opponent}>
                {match.home ? "vs." : "@"} {match.opponent}
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
