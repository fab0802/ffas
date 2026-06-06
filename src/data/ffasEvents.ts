import type { FfasEvent } from "@/types/ffasEvent";

// Dummy-Termine
export const ffasEvents: FfasEvent[] = [
  // ─── Feste ───────────────────────────────────────────────────
  {
    slug: "saisoneroeffnung-2026",
    date: "2026-08-15",
    time: "18:00",
    endTime: "23:00",
    title: "Saisoneröffnungsfest",
    description: "Auftakt zur neuen Saison mit allen FFAS-Teams.",
    locationSlug: "moos",
    category: "Fest",
    imageUrl: "/images/events/saisoneroeffnung-2026.png",
  },
  {
    slug: "sommernachtsfest-2026",
    date: "2026-06-21",
    time: "17:00",
    endTime: "00:00",
    title: "Sommernachtsfest",
    description: "Grill, Musik und gemütliches Beisammensein am Saisonende.",
    locationSlug: "jonentaeli",
    category: "Fest",
  },
  {
    slug: "weihnachtsapero-2026",
    date: "2026-12-13",
    time: "16:00",
    endTime: "19:00",
    title: "Weihnachtsapéro",
    description: "Glühwein, Marroni und Jahresrückblick.",
    venueText: "Vereinslokal Hausen",
    category: "Fest",
  },

  // ─── Trainingslager ──────────────────────────────────────────
  {
    slug: "trainingslager-frauen-1-2026",
    date: "2026-07-04",
    endDate: "2026-07-06",
    title: "Trainingslager Frauen 1",
    description: "Drei-Tages-Lager zur Saisonvorbereitung.",
    locationSlug: "moos",
    category: "Trainingslager",
    teamSlugs: ["frauen-1"],
  },
  {
    slug: "d-juniorinnen-camp-2026",
    date: "2026-10-12",
    endDate: "2026-10-16",
    title: "Herbstcamp D-Juniorinnen",
    description: "Trainingswoche in den Herbstferien für alle D-Teams.",
    venueText: "Sportzentrum Tenero",
    category: "Trainingslager",
    teamSlugs: [
      "juniorinnen-d9a",
      "juniorinnen-d9b",
      "juniorinnen-d7a",
      "juniorinnen-d7b",
    ],
  },

  // ─── Sitzungen ───────────────────────────────────────────────
  {
    slug: "trainersitzung-juli-2026",
    date: "2026-07-15",
    time: "19:30",
    endTime: "21:30",
    title: "Trainersitzung Saisonstart",
    description: "Saisonvorbereitung, Trainingspläne und Materialbestellung.",
    venueText: "Vereinslokal Hausen",
    category: "Sitzung",
  },
  {
    slug: "elternabend-d-juniorinnen",
    date: "2026-08-22",
    time: "19:00",
    title: "Elternabend D-Juniorinnen",
    description: "Vorstellung des Trainerteams, Saisonplanung und Fragen.",
    locationSlug: "moos",
    category: "Sitzung",
    teamSlugs: [
      "juniorinnen-d9a",
      "juniorinnen-d9b",
      "juniorinnen-d7a",
      "juniorinnen-d7b",
    ],
  },

  // ─── Kurs / Workshop ─────────────────────────────────────────
  {
    slug: "schirikurs-2026",
    date: "2026-09-05",
    time: "09:00",
    endTime: "17:00",
    title: "Junior-Schiedsrichterkurs",
    description: "Tageskurs für alle Spielerinnen ab 14 Jahren.",
    venueText: "Sportanlage Buchlern, Zürich",
    category: "Kurs",
  },
  {
    slug: "torwart-workshop-2026",
    date: "2026-10-25",
    time: "10:00",
    endTime: "13:00",
    title: "Torwart-Workshop",
    description: "Spezialtraining mit Gast-Trainerin Julia Steiger.",
    locationSlug: "moos",
    category: "Kurs",
  },

  // ─── Allgemein ───────────────────────────────────────────────
  {
    slug: "fototermin-saisonstart",
    date: "2026-08-29",
    time: "10:00",
    endTime: "12:00",
    title: "Fototermin Teamfotos",
    description: "Mannschaftsfotos für alle Teams.",
    locationSlug: "moos",
    category: "Allgemein",
  },
  {
    slug: "vereinsausflug-2026",
    date: "2026-09-12",
    endDate: "2026-09-13",
    title: "Vereinsausflug",
    description: "Zwei-Tages-Ausflug für alle aktiven Mitglieder.",
    venueText: "Region Tessin",
    category: "Allgemein",
  },
];
