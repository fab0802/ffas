// Zentrale Site-Metadaten — Single Source of Truth für Layout-Metadata,
// Sitemap, Robots, Manifest und das OG-Bild.
//
// In Produktion via Umgebungsvariable setzen (z.B. auf Netlify):
//   NEXT_PUBLIC_SITE_URL=https://deine-domain.ch
// Fallback dient nur der lokalen Entwicklung / dem Demo-Deploy.

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
