import Link from "next/link";
import { getAdjacentTeams } from "@/helpers";
import styles from "./TeamNavigationBlock.module.css";

export type TeamNavigationBlockProps = {
  currentSlug: string;
};

export default function TeamNavigationBlock({
  currentSlug,
}: TeamNavigationBlockProps) {
  const { previous, next } = getAdjacentTeams(currentSlug);

  if (!previous && !next) return null;

  return (
    <nav className={styles.block} aria-label="Team-Navigation">
      {previous && (
        <Link href={`/teams/${previous.slug}`} className={styles.link}>
          <span className={styles.direction}>← Vorheriges Team</span>
          <span className={styles.name}>
            {previous.name} <em>{previous.emphasis}</em>
          </span>
        </Link>
      )}

      {next && (
        <Link
          href={`/teams/${next.slug}`}
          className={`${styles.link} ${styles.linkRight}`}
        >
          <span className={styles.direction}>Nächstes Team →</span>
          <span className={styles.name}>
            {next.name} <em>{next.emphasis}</em>
          </span>
        </Link>
      )}
    </nav>
  );
}
