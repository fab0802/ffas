import { getNews, getFeaturedNews, getNewsExcluding } from "@/helpers";
import PageHeader from "@/components/layout/PageHeader";
import NewsCard from "@/components/cards/NewsCard";
import styles from "./news.module.css";

export const metadata = {
  title: "News · FFAS",
  description:
    "Aktuelles aus dem FFAS-Vereinsleben, Spielberichte und Ankündigungen.",
};

export default async function NewsPage() {
  const featured = await getFeaturedNews();
  const rest = featured
    ? await getNewsExcluding(featured.slug)
    : await getNews();

  return (
    <>
      <PageHeader
        eyebrow="News"
        title={
          <>
            Aus dem <em>Klub</em>
          </>
        }
      />

      <section className={styles.section}>
        {featured && (
          <div className={styles.featuredWrapper}>
            <NewsCard item={featured} />
          </div>
        )}

        {rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((item) => (
              <NewsCard key={item.slug} item={{ ...item, featured: false }} />
            ))}
          </div>
        )}

        {!featured && rest.length === 0 && (
          <p className={styles.empty}>Aktuell keine News.</p>
        )}
      </section>
    </>
  );
}
