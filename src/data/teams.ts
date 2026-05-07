import type { Team } from "./types/team";

export const teams: Team[] = [
  {
    slug: "frauen-1",
    name: "Frauen 1",
    emphasis: "1",
    ageRange: "Aktive",
    liga: "3. Liga",
    description:
      "Unsere Vorzeige-Elf. Trainiert dreimal die Woche, spielt für den Aufstieg.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "19:45",
        endTime: "21:30",
        locationSlug: "suerenloh-uitikon",
        fieldSlug: "2",
      },
      {
        day: "Donnerstag",
        startTime: "19:45",
        endTime: "21:30",
        locationSlug: "moos-wettswil",
        fieldSlug: "2",
      },
    ],
  },
  {
    slug: "frauen-2",
    name: "Frauen 2",
    emphasis: "2",
    ageRange: "Aktive",
    liga: "4. Liga",
    description:
      "Spass am Spiel, Anspruch im Training. Quereinsteigerinnen jederzeit willkommen.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "19:45",
        endTime: "21:30",
        locationSlug: "suerenloh-uitikon",
        fieldSlug: "2",
      },
      {
        day: "Donnerstag",
        startTime: "19:45",
        endTime: "21:30",
        locationSlug: "moos-wettswil",
        fieldSlug: "2",
      },
    ],
  },
];
