import type { FfasEvent } from "@/types/ffasEvent";

export const ffasEvents: FfasEvent[] = [
  {
    slug: "saisoneroeffnung-2026",
    date: "2026-08-15",
    time: "18:00",
    title: "Saisoneröffnungsfest",
    description: "Auftakt zur neuen Saison mit allen FFAS-Teams.",
    locationSlug: "moos",
    category: "Fest",
  },
  {
    slug: "trainingslager-frauen-1-2026",
    date: "2026-07-04",
    endDate: "2026-07-06",
    title: "Trainingslager Frauen 1",
    locationSlug: "moos",
    category: "Trainingslager",
    teamSlugs: ["frauen-1"],
  },
];
