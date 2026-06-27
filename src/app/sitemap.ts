import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getTeams, getNews } from "@/helpers";

// Statische Routen der App (ohne dynamische [slug]-Segmente).
const STATIC_PATHS = [
  "",
  "/ffas",
  "/teams",
  "/spielplan",
  "/events",
  "/news",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/colophon",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const teamEntries: MetadataRoute.Sitemap = getTeams().map((team) => ({
    url: `${base}/teams/${team.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const news = await getNews();
  const newsEntries: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${base}/news/${item.slug}`,
    // ISO-Date-String direkt uebergeben — vermeidet new Date()-UTC-Kanten.
    lastModified: item.date,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...teamEntries, ...newsEntries];
}
