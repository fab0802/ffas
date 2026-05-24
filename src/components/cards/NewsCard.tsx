import type { NewsItem } from "@/types/news";
import { formatDateLongUpper, formatDateShortUpper } from "@/helpers";
import styles from "./NewsCard.module.css";

export type NewsCardProps = { item: NewsItem };

export default function NewsCard({ item }: NewsCardProps) {
  const featured = !!item.featured;
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.cat}>
        <span className={styles.catTag}>{item.category}</span>
        <span className={styles.catDate}>
          {featured
            ? formatDateLongUpper(item.date)
            : formatDateShortUpper(item.date)}{" "}
        </span>
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.excerpt}>{item.excerpt}</p>
      <span className={styles.read}>
        {featured ? "Beitrag lesen →" : "Lesen →"}
      </span>
    </article>
  );
}
