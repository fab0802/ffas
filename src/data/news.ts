import type { NewsItem } from "@/types/newsItem";

export const newsItems: NewsItem[] = [
  {
    slug: "gruendungsversammlung-2026",
    category: "FFAS",
    date: "2026-04-28",
    title: "Wir sind da. Die Gründungsversammlung in zwölf Bildern.",
    excerpt:
      "Über siebzig Frauen, ein Festzelt in Bonstetten, ein einstimmiger Beschluss — und ein Logo, an dem ein halbes Jahr gefeilt wurde. So entsteht FFAS.",
    featured: true,
    authorSlug: "lena-keller",
  },
  {
    slug: "u15-saisonstart-drei-siege",
    category: "Juniorinnen",
    date: "2026-04-22",
    title: "Saisonstart der U15: drei Siege in Folge.",
    excerpt:
      "Die Mädels haben sich pünktlich zum Frühling warmgespielt. Nächster Gegner: FC Bülach.",
    authorText: "Leitung",
  },
  {
    slug: "raiffeisen-albis-hauptsponsor",
    category: "Sponsoring",
    date: "2026-04-15",
    title: "Raiffeisen Albis steigt als Hauptsponsor ein.",
    excerpt:
      "Ein dreijähriger Vertrag, der den Aufbau der Juniorinnen-Abteilung absichert.",
    authorText: "Leitung",
  },
  {
    slug: "saisonstart-2026-2027",
    category: "FFAS",
    date: "2026-08-12",
    title: "Auftakt zur Saison 2026/27",
    excerpt: "Alle FFAS-Teams sind ins Training gestartet...",
    featured: true,
    content: `## Endlich wieder Fussball

Nach einer kurzen Sommerpause ist die FFAS in die Saison 2026/27 gestartet. Alle sechs Teams sind im Training, die ersten Testspiele stehen an, und am **15. August** geht es mit dem traditionellen Saisoneröffnungsfest los.

## Was diese Saison anders ist

Mit der Aufnahme von **FC Uitikon** als fünftem Trägerverein ist die FFAS noch breiter aufgestellt. Insgesamt spielen über 80 Mädchen und Frauen in unseren Mannschaften.

## Was uns wichtig ist

Die FFAS ist mehr als ein Spielplan — sie ist eine Gemeinschaft. Wir freuen uns darauf, gemeinsam zu wachsen.`,
    authorText: "Leitung",
    additionalImages: [
      {
        src: "/images/news/saisonabschluss/foto-1.png",
        caption: "Pokal-Übergabe an die Frauen 1",
        alt: "Spielerinnen mit Pokal",
      },
      {
        src: "/images/news/saisonabschluss/foto-2.png",
        caption: "Gruppenfoto aller Teams",
        alt: "Mannschaftsfoto FFAS",
      },
      {
        src: "/images/news/saisonabschluss/foto-3.png",
      },
    ],
  },
];
