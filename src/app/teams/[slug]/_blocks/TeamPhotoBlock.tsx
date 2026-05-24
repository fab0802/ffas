import Image from "next/image";
import type { Team } from "@/types/team";
import styles from "./TeamPhotoBlock.module.css";

export type TeamPhotoBlockProps = {
  team: Team;
};

export default function TeamPhotoBlock({ team }: TeamPhotoBlockProps) {
  return (
    <section
      className={styles.block}
      aria-label={`Foto ${team.name} ${team.emphasis}`}
    >
      {team.photo ? (
        <Image
          src={team.photo}
          alt=""
          width={1100}
          height={733}
          sizes="(max-width: 1100px) 100vw, 1100px"
          priority
          className={styles.photo}
        />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span className={styles.placeholderInitial}>{team.emphasis}</span>
        </div>
      )}
    </section>
  );
}
