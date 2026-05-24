import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

export type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
};

export default function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </header>
  );
}
