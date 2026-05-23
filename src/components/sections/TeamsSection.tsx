import TeamCard from "@/components/cards/TeamCard";
import { getTeams, getTeamsCountWord } from "@/helpers";
import styles from "./TeamsSection.module.css";

export default function TeamsSection() {
  const teams = getTeams();

  return (
    <section className={styles.section} id="teams">
      <div className={styles.head}>
        <h2 className={styles.heading}>
          {getTeamsCountWord()} Teams.
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
