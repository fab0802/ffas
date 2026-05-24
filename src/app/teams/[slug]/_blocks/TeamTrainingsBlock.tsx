import type { Team } from "@/types/team";
import { formatTrainingSlot } from "@/helpers";
import styles from "./TeamTrainingsBlock.module.css";

export type TeamTrainingsBlockProps = {
  team: Team;
};

export default function TeamTrainingsBlock({ team }: TeamTrainingsBlockProps) {
  if (team.trainings.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Trainings</h2>

      <ul className={styles.list}>
        {team.trainings.map((slot, i) => {
          const t = formatTrainingSlot(slot);
          return (
            <li key={i} className={styles.row}>
              <span className={styles.day}>{t.day}</span>
              <span className={styles.time}>{t.time}</span>
              <span className={styles.location}>
                {t.locationName ?? "—"}
                {t.fieldName && (
                  <>
                    <span className={styles.separator}>·</span>
                    <span className={styles.field}>{t.fieldName}</span>
                  </>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
