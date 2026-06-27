import type { ReactNode } from "react";
import styles from "./LegalContent.module.css";

const DEFAULT_NOTE =
  "Hinweis: FFAS ist ein Demo- und Portfolio-Projekt. Sämtliche Angaben auf dieser Seite sind Platzhalter und rechtlich nicht verbindlich.";

export type LegalContentProps = {
  children: ReactNode;
  updated?: string;
  // note === undefined → Standard-Hinweis (Legal-Seiten)
  // note === null       → kein Hinweis (z.B. Colophon)
  note?: ReactNode | null;
};

export default function LegalContent({
  children,
  updated,
  note,
}: LegalContentProps) {
  const resolvedNote = note === undefined ? DEFAULT_NOTE : note;

  return (
    <div className={styles.wrap}>
      <article className={styles.prose}>
        {resolvedNote ? (
          <p className={styles.note}>{resolvedNote}</p>
        ) : null}
        {children}
        {updated && <p className={styles.meta}>Stand: {updated}</p>}
      </article>
    </div>
  );
}
