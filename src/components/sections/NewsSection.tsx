import Link from "next/link";
import NewsCard from "@/components/cards/NewsCard";
import { getFeaturedNews, getRecentNews } from "@/helpers";
import styles from "./NewsSection.module.css";

export default async function NewsSection() {
  const featured = await getFeaturedNews();
  const rest = featured
    ? await getRecentNews(2, [featured.slug])
    : await getRecentNews(3);

  const items = featured ? [featured, ...rest] : rest;

  if (items.length === 0) return null;

  return (
    <section className={styles.section} id="news">
      <div className={styles.head}>
        <h2 className={styles.title}>
          Aus dem <em>Klub</em>.
        </h2>
        <Link href="/news" className={styles.ghostBtn}>
          Alle Beiträge →
        </Link>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
