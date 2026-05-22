import type { NewsItem } from "@/types/news";
import { formatNewsDate } from "@/helpers";
import styles from "./NewsCard.module.css";

type Props = { item: NewsItem };

export default function NewsCard({ item }: Props) {
  const featured = !!item.featured;
  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.cat}>
        <span className={styles.catTag}>{item.category}</span>
        <span className={styles.catDate}>
          {formatNewsDate(item, featured ? "long" : "short")}
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
