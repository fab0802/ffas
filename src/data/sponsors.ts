import type { Sponsor } from "./types/sponsor";

export const sponsors: Sponsor[] = [
  // Hauptsponsor
  {
    slug: "saeuliamt-bank",
    name: "Säuliamt Bank",
    tier: "haupt",
    logoSrc: "/sponsors/saeuliamt-bank.svg",
    websiteUrl: "https://www.saeuliamt-bank.example",
    description:
      "Hauptpartner von FFAS seit 2023. Eine starke Bank für eine starke Region.",
  },
  // Premium
  {
    slug: "brunner-bau",
    name: "Brunner Bau AG",
    tier: "premium",
    logoSrc: "/sponsors/brunner-bau.svg",
    websiteUrl: "https://www.brunner-bau.example",
  },
  {
    slug: "albis-versicherungen",
    name: "Albis Versicherungen",
    tier: "premium",
    logoSrc: "/sponsors/albis-versicherungen.svg",
    websiteUrl: "https://www.albis-vers.example",
  },
  // Ausrüster
  {
    slug: "aemtler-sport",
    name: "Aemtler Sport",
    tier: "ausruester",
    logoSrc: "/sponsors/aemtler-sport.svg",
    websiteUrl: "https://www.aemtler-sport.example",
    teamSlugs: ["frauen-1"], // sponsert zusätzlich ein spezifisches Team
  },
  // Basic — kommt NICHT auf die Startseite, nur auf die Sponsoren-Seite
  {
    slug: "holzer-druck",
    name: "Holzer Druckerei",
    tier: "basic",
    logoSrc: "/sponsors/holzer-druck.svg",
    websiteUrl: "https://www.holzer-druck.example",
  },
];
