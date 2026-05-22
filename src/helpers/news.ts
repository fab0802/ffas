// src/helpers/news.ts
import { getNews } from "@/data/news";
import type { NewsItem } from "@/types/news";

/**
 * Liefert den `featured`-Beitrag — oder, falls keiner markiert ist,
 * den neuesten.
 */
export async function getFeaturedNews(): Promise<NewsItem | undefined> {
  const news = await getNews();
  const flagged = news.find((n) => n.featured);
  if (flagged) return flagged;
  return [...news].sort((a, b) => b.date.localeCompare(a.date))[0];
}

/**
 * Liefert die `limit` neuesten Beiträge, optional unter Ausschluss
 * bestimmter Slugs (z. B. den bereits separat gezeigten Featured-Beitrag).
 * Sortierung über ISO-Date-String — alphabetisch == chronologisch.
 */
export async function getRecentNews(
  limit: number,
  excludeSlugs: string[] = [],
): Promise<NewsItem[]> {
  const news = await getNews();
  return [...news]
    .filter((n) => !excludeSlugs.includes(n.slug))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
