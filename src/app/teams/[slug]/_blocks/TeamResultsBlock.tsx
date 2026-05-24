import type { Team } from "@/types/team";
import {
  getRecentResultsForTeam,
  getFfasResult,
  formatDateLongUpper,
} from "@/helpers";
import styles from "./TeamResultsBlock.module.css";

export type TeamResultsBlockProps = {
  team: Team;
};

export default async function TeamResultsBlock({
  team,
}: TeamResultsBlockProps) {
  const matches = await getRecentResultsForTeam(team.slug, 5);

  if (matches.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Letzte Resultate</h2>

      <ul className={styles.list}>
        {matches.map((match) => {
          const result = getFfasResult(match);
          if (!result) return null;
          return (
            <li
              key={`${match.date}-${match.teamSlug}`}
              className={`${styles.row} ${styles[result.outcome]}`}
            >
              <span className={styles.date}>
                {formatDateLongUpper(match.date)}
              </span>

              <span className={styles.opponent}>
                {match.home ? "vs." : "@"} {match.opponent}
              </span>

              <span className={styles.outcome}>
                {result.outcome === "win" && "Sieg"}
                {result.outcome === "draw" && "Unentschieden"}
                {result.outcome === "loss" && "Niederlage"}
              </span>

              <span className={styles.score}>
                {result.ffas}:{result.opponent}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
