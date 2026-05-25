// src/data/news.ts
import type { NewsItem } from "@/types/news";

const stubNews: NewsItem[] = [
  {
    slug: "gruendungsversammlung-2026",
    category: "FFAS",
    date: "2026-04-28",
    title: "Wir sind da. Die Gründungsversammlung in zwölf Bildern.",
    excerpt:
      "Über siebzig Frauen, ein Festzelt in Bonstetten, ein einstimmiger Beschluss — und ein Logo, an dem ein halbes Jahr gefeilt wurde. So entsteht FFAS.",
    featured: true,
  },
  {
    slug: "u15-saisonstart-drei-siege",
    category: "Juniorinnen",
    date: "2026-04-22",
    title: "Saisonstart der U15: drei Siege in Folge.",
    excerpt:
      "Die Mädels haben sich pünktlich zum Frühling warmgespielt. Nächster Gegner: FC Bülach.",
  },
  {
    slug: "raiffeisen-albis-hauptsponsor",
    category: "Sponsoring",
    date: "2026-04-15",
    title: "Raiffeisen Albis steigt als Hauptsponsor ein.",
    excerpt:
      "Ein dreijähriger Vertrag, der den Aufbau der Juniorinnen-Abteilung absichert.",
  },
];

export async function getNews(): Promise<NewsItem[]> {
  return stubNews;
}
