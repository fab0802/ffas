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

/**
 * Formatiert das Datum für die News-Card.
 * - "long"  → "28. APRIL 2026"   (für Featured)
 * - "short" → "22. APRIL"        (Standard)
 */
export function formatNewsDate(
  item: NewsItem,
  variant: "long" | "short" = "short",
): string {
  const d = new Date(item.date);
  const months = [
    "JANUAR",
    "FEBRUAR",
    "MÄRZ",
    "APRIL",
    "MAI",
    "JUNI",
    "JULI",
    "AUGUST",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DEZEMBER",
  ];
  const day = String(d.getDate()).padStart(2, "0");
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  return variant === "long" ? `${day}. ${month} ${year}` : `${day}. ${month}`;
}
