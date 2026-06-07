import type { NewsItem } from "@/types/newsItem";
import { newsItems } from "@/data/news";
import { getPersonBySlug } from "./persons";

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

/**
 * Eine News per Slug. Für Detailseiten.
 */
export async function getNewsBySlug(
  slug: string,
): Promise<NewsItem | undefined> {
  const news = await getNews();
  return news.find((n) => n.slug === slug);
}

/**
 * Alle News ausser einer (für "Weitere News"-Bereich auf Detailseite oder
 * "drumherum"-Cards auf Listenseite, z.B. ausgenommen Featured).
 */
export async function getNewsExcluding(slug: string): Promise<NewsItem[]> {
  const news = await getNews();
  return news.filter((n) => n.slug !== slug);
}

/**
 * Liefert den Anzeige-Namen des Autors einer News.
 * Bevorzugt authorSlug (Person), Fallback auf authorText (Freitext),
 * sonst undefined (kein Autor sichtbar).
 */
export function getNewsAuthorDisplay(item: NewsItem): string | undefined {
  if (item.authorSlug) {
    const person = getPersonBySlug(item.authorSlug);
    if (person) return `${person.firstName} ${person.lastName}`;
  }
  return item.authorText;
}

/**
 * Alle News, sortiert nach Datum (neueste zuerst).
 * Async, damit später ggf. auf eine andere Quelle (DB, CMS) umgestellt werden kann.
 */
export async function getNews(): Promise<NewsItem[]> {
  return [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
}
