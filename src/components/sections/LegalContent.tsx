import type { ReactNode } from "react";
import styles from "./LegalContent.module.css";

export type LegalContentProps = {
  children: ReactNode;
  updated?: string;
};

export default function LegalContent({ children, updated }: LegalContentProps) {
  return (
    <div className={styles.wrap}>
      <article className={styles.prose}>
        <p className={styles.note}>
          Hinweis: FFAS ist ein Demo- und Portfolio-Projekt. Sämtliche Angaben
          auf dieser Seite sind Platzhalter und rechtlich nicht verbindlich.
        </p>
        {children}
        {updated && <p className={styles.meta}>Stand: {updated}</p>}
      </article>
    </div>
  );
}
