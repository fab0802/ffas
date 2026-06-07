import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { NewsItem } from "@/types/newsItem";
import { formatDateLongUpper, getNewsAuthorDisplay } from "@/helpers";
import styles from "./NewsArticleView.module.css";
import NewsGallery from "@/components/news/NewsGallery";

export type NewsArticleViewProps = {
  item: NewsItem;
};

export default function NewsArticleView({ item }: NewsArticleViewProps) {
  return (
    <article className={styles.article}>
      <Link href="/news" className={styles.backLink}>
        ← Alle News
      </Link>

      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>{item.category}</span>
          <span className={styles.sep}>·</span>
          <span className={styles.date}>{formatDateLongUpper(item.date)}</span>
          {(item.authorSlug || item.authorText) && (
            <>
              <span className={styles.sep}>·</span>
              <span className={styles.author}>
                {getNewsAuthorDisplay(item)}
              </span>
            </>
          )}
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.lead}>{item.excerpt}</p>
      </header>

      {item.imageUrl && (
        <div className={styles.hero}>
          <Image
            src={item.imageUrl}
            alt=""
            fill
            sizes="(max-width: 880px) 100vw, 1024px"
            className={styles.heroImage}
            priority
          />
        </div>
      )}

      {item.content && (
        <div className={styles.content}>
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>
      )}

      {item.additionalImages && item.additionalImages.length > 0 && (
        <NewsGallery images={item.additionalImages} />
      )}
    </article>
  );
}
