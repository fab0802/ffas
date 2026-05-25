import Image from "next/image";
import type { Team } from "@/types/team";
import { getTrainersForTeam } from "@/helpers";
import styles from "./TeamTrainersBlock.module.css";

export type TeamTrainersBlockProps = {
  team: Team;
};

export default function TeamTrainersBlock({ team }: TeamTrainersBlockProps) {
  const trainers = getTrainersForTeam(team.slug);

  if (trainers.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Trainerinnen</h2>

      <ul className={styles.grid}>
        {trainers.map((trainer) => (
          <li key={trainer.slug} className={styles.card}>
            <div className={styles.photoWrap}>
              {trainer.image ? (
                <Image
                  src={trainer.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 50vw, 220px"
                  className={styles.photo}
                />
              ) : (
                <span className={styles.initials} aria-hidden="true">
                  {`${trainer.firstName[0] ?? ""}${trainer.lastName[0] ?? ""}`.toUpperCase()}
                </span>
              )}
            </div>
            <div className={styles.text}>
              <p className={styles.role}>{trainer.role}</p>
              <h3 className={styles.name}>
                {trainer.firstName} {trainer.lastName}
              </h3>
              <p className={styles.contact}>
                <a
                  href={`mailto:${trainer.email}`}
                  className={styles.contactLink}
                >
                  {trainer.email}
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
