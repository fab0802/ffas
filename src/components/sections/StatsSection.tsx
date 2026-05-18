import { stats } from "@/data/stats";
import styles from "./StatsSection.module.css";

function formatValue(value: number): string {
  return String(value).padStart(2, "0");
}

export function StatsSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.grid}>
        {stats.map((stat) => (
          <li
            key={stat.slug}
            className={`${styles.item} ${stat.featured ? styles.featured : ""}`}
          >
            <div className={styles.value}>
              {formatValue(stat.value)}
              {stat.suffix && (
                <span className={styles.suffix}>{stat.suffix}</span>
              )}
            </div>
            <div className={styles.labels}>
              <div className={styles.label}>{stat.label}</div>
              {stat.sublabel && (
                <div className={styles.sublabel}>{stat.sublabel}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
