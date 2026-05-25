import Link from "next/link";
import styles from "./AnchorNav.module.css";

export type AnchorNavItem = {
  id: string;
  label: string;
};

export type AnchorNavProps = {
  anchors: AnchorNavItem[];
};

export default function AnchorNav({ anchors }: AnchorNavProps) {
  return (
    <nav className={styles.nav} aria-label="FFAS — Sprungnavigation">
      <ol className={styles.list}>
        {anchors.map((anchor, i) => (
          <li key={anchor.id} className={styles.item}>
            <Link href={`#${anchor.id}`} className={styles.link}>
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.label}>{anchor.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
