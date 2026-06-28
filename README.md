# FFAS — Frauenfussball Albis Süd

Eigenständige, nicht offizielle Demo- und Portfolio-Umsetzung einer Website für
«Frauenfussball Albis Süd» — eine reale Kooperation von fünf Vereinen im
Säuliamt (FC Wettswil-Bonstetten, FC Hausen a/A, FC Knonau-Mettmenstetten,
FC Uitikon, SC Hedingen).

> **Hinweis:** Dies ist ein privates, nicht-kommerzielles Portfolio-Projekt. Es
> ist **nicht** der offizielle Webauftritt und wurde weder von der Kooperation
> noch von den beteiligten Vereinen in Auftrag gegeben. Der offizielle Auftritt
> findet sich unter [ff-albissued.ch](https://ff-albissued.ch).

**Live-Demo:** [ffas-demo.netlify.app](https://ffas-demo.netlify.app)

## Features

- Responsives Magazin-Layout mit Slide-in-Mobilnavigation (≤ 880 px)
- Spielplan & Resultate, serverseitig aus öffentlichen football.ch-iCal-Feeds
- News mit Markdown-Inhalten und Lightbox-Galerie
- Vollständige Barrierefreiheit: Skip-Link, sichtbarer Tastatur-Fokus,
  `prefers-reduced-motion`, semantische Landmarks
- SEO/Metadaten: OpenGraph & Twitter-Cards, dynamisch generiertes OG-Bild,
  `sitemap.xml`, `robots.txt`, Web-App-Manifest
- Rechtliche Seiten (Impressum, Datenschutz nach revDSG) und ein Colophon

## Tech-Stack

- **Framework:** Next.js 16 (App Router) · React 19
- **Sprache:** TypeScript
- **Styling:** CSS Modules + CSS Custom Properties (kein Utility-Framework)
- **Schriften:** Fraunces, Manrope, JetBrains Mono — selbst gehostet via `next/font`
- **Daten:** football.ch iCal-Feeds (`ical.js`)
- **Weitere:** `react-markdown`, `yet-another-react-lightbox`
- **Hosting:** Netlify

## Lokale Entwicklung

Voraussetzung: Node.js 20+.

```bash
npm install
npm run dev
```

Anschliessend [http://localhost:3000](http://localhost:3000) öffnen.

Weitere Skripte:

```bash
npm run build   # Produktions-Build
npm run start   # Produktions-Server
npm run lint    # ESLint
```

## Umgebungsvariablen

| Variable               | Zweck                                        | Fallback                        |
| ---------------------- | -------------------------------------------- | ------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Basis-URL für Metadaten, Sitemap und OG-Bild | `https://ffas-demo.netlify.app` |

Für den Produktiv-Deploy auf die echte Domain setzen — sonst zeigen die
OpenGraph- und Sitemap-URLs auf den Fallback.

## Projektstruktur

```text
src/
├─ app/          # Routen (App Router), Layout, Metadata, sitemap/robots/manifest
├─ components/   # layout/, sections/, cards/, ui/
├─ data/         # statische Konstanten
├─ helpers/      # asynchrone Datenzugriffe (Teams, News, Spielplan …)
└─ types/        # Domain-Typen
```

## Bilder & Datenschutz

Aus Gründen des Persönlichkeitsschutzes werden auf den Teamseiten **keine
realen Personenfotos** gezeigt, sondern grafische Platzhalter. Das Bildmaterial
in den News-Beiträgen ist KI-generiert.

## Lizenz

Der Quellcode steht unter der [MIT-Lizenz](./LICENSE).

Davon ausgenommen sind die Marken und Logos von «Frauenfussball Albis Süd»
sowie der fünf beteiligten Vereine — diese bleiben Eigentum der jeweiligen
Rechteinhaber und werden hier ausschliesslich zu Demonstrationszwecken
verwendet.
