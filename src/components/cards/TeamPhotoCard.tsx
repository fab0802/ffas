import Link from "next/link";
import Image from "next/image";
import type { Team } from "@/types/team";
import styles from "./TeamPhotoCard.module.css";

export type TeamPhotoCardProps = {
  team: Team;
};

export default function TeamPhotoCard({ team }: TeamPhotoCardProps) {
  return (
    <Link href={`/teams/${team.slug}`} className={styles.card}>
      <div className={styles.photoWrap}>
        {team.photo ? (
          <Image
            src={team.photo}
            alt=""
            fill
            sizes="(max-width: 880px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.photo}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderInitial}>{team.emphasis}</span>
          </div>
        )}
      </div>

      <div className={styles.text}>
        <h3 className={styles.title}>
          {team.name} <em>{team.emphasis}</em>
        </h3>
        <p className={styles.liga}>{team.liga}</p>
      </div>
    </Link>
  );
}
