import Link from "next/link";
import type { Team } from "@/types/team";
import styles from "./TeamCard.module.css";

export type TeamCardProps = {
  team: Team;
};

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/teams/${team.slug}`} className={styles.card}>
      <div className={styles.age}>
        <span>{team.ageRange}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <h3 className={styles.title}>
        {team.name} <em>{team.emphasis}</em>
      </h3>

      <div className={styles.liga}>{team.liga}</div>

      <p className={styles.description}>{team.description}</p>
    </Link>
  );
}
