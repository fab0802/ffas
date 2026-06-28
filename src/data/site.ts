// Zentrale Site-Metadaten — Single Source of Truth für Layout-Metadata,
// Sitemap, Robots, Manifest und das OG-Bild.
// URL der veröffentlichten Site — bei Domainwechsel hier anpassen.
// Override per Umgebungsvariable NEXT_PUBLIC_SITE_URL möglich; sonst Fallback.

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ffas-demo.netlify.app"
).replace(/\/$/, "");

export const site = {
  url: siteUrl,
  name: "FFAS — Frauenfussball Albis Süd",
  shortName: "FFAS",
  description: "Der Frauenfussball im Säuliamt. Fünf Vereine, eine Farbe.",
  locale: "de_CH",
} as const;
