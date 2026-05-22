import { teams } from "@/data/teams";
import TeamCard from "@/components/cards/TeamCard";
import styles from "./TeamsSection.module.css";

export default function TeamsSection() {
  return (
    <section className={styles.section} id="teams">
      <div className={styles.head}>
        <h2 className={styles.heading}>
          Zehn Teams.
          <br />
          Eine <em>Farbe</em>.
        </h2>
        <div className={styles.meta}>
          Saison 2026/27
          <br />
          Stand: 01. Mai 2026
        </div>
      </div>

      <div className={styles.grid}>
        {teams.map((team) => (
          <TeamCard key={team.slug} team={team} />
        ))}
      </div>
    </section>
  );
}
