import type { Team } from "@/types/team";
export const teams: Team[] = [
  {
    slug: "frauen-1",
    name: "Aktive",
    emphasis: "1",
    ageRange: "FFAS · 1. Mannschaft",
    liga: "3. Liga Frauen",
    description:
      "Unsere Vorzeige-Elf. Trainiert dreimal die Woche, spielt für den Aufstieg.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "moos",
        fieldSlug: "moos-1",
      },
      {
        day: "Donnerstag",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "moos",
        fieldSlug: "moos-1",
      },
    ],
  },
  {
    slug: "frauen-2",
    name: "Aktive",
    emphasis: "2",
    ageRange: "FFAS · 2. Mannschaft",
    liga: "5. Liga Frauen",
    description:
      "Spass am Spiel, Anspruch im Training. Quereinsteigerinnen jederzeit willkommen.",
    trainings: [
      {
        day: "Montag",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "suerenloh",
        fieldSlug: "suerenloh-1",
      },
      {
        day: "Mittwoch",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "suerenloh",
        fieldSlug: "suerenloh-2",
      },
    ],
  },
  {
    slug: "juniorinnen-c",
    name: "Juniorinnen",
    emphasis: "C",
    ageRange: "U15 · Jahrgang 2012–2013",
    liga: "Juniorinnen C · Stärkeklasse 2",
    description:
      "Technik, Taktik, Teamgeist. Die Brücke zum Aktivbereich beginnt hier.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "jonentaeli",
        fieldSlug: "jonentaeli-1",
      },
      {
        day: "Donnerstag",
        startTime: "19:30",
        endTime: "21:00",
        locationSlug: "knonau",
        fieldSlug: "knonau-1",
      },
    ],
  },
  {
    slug: "juniorinnen-d9a",
    name: "Juniorinnen",
    emphasis: "D9a",
    ageRange: "U13 · Jahrgang 2014–2015",
    liga: "Juniorinnen D/9 · Stärkeklasse 1",
    description:
      "Erstes 9er-Feld, neue Dimensionen. Unsere ambitionierte D-Truppe.",
    trainings: [
      {
        day: "Montag",
        startTime: "18:00",
        endTime: "19:30",
        locationSlug: "moos",
        fieldSlug: "moos-2",
      },
      {
        day: "Mittwoch",
        startTime: "18:00",
        endTime: "19:30",
        locationSlug: "moos",
        fieldSlug: "moos-3",
      },
    ],
  },
  {
    slug: "juniorinnen-d9b",
    name: "Juniorinnen",
    emphasis: "D9b",
    ageRange: "U13 · Jahrgang 2014–2015",
    liga: "Juniorinnen D/9 · Stärkeklasse 2",
    description: "Spielen, lachen, lernen. Hier wächst die Freude am Fussball.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "18:00",
        endTime: "19:30",
        locationSlug: "schlag",
        fieldSlug: "schlag-1",
      },
      {
        day: "Donnerstag",
        startTime: "18:00",
        endTime: "19:30",
        locationSlug: "schlag",
        fieldSlug: "schlag-1",
      },
    ],
  },
  {
    slug: "juniorinnen-d7a",
    name: "Juniorinnen",
    emphasis: "D7a",
    ageRange: "U13 · Jahrgang 2014–2015",
    liga: "Juniorinnen D/7 · Stärkeklasse 1",
    description: "Schnell, mutig, ballverliebt. Auf dem Weg zum 9er-Format.",
    trainings: [
      {
        day: "Montag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "wygarten",
        fieldSlug: "wygarten-1",
      },
      {
        day: "Mittwoch",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "wygarten",
        fieldSlug: "wygarten-1",
      },
    ],
  },
  {
    slug: "juniorinnen-d7b",
    name: "Juniorinnen",
    emphasis: "D7b",
    ageRange: "U13 · Jahrgang 2014–2015",
    liga: "Juniorinnen D/7 · Stärkeklasse 2",
    description:
      "Mit Spielwitz und Spass. Jede Trainerin merkt: Hier wird's nie langweilig.",
    trainings: [
      {
        day: "Dienstag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "jonentaeli",
        fieldSlug: "jonentaeli-2",
      },
      {
        day: "Donnerstag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "jonentaeli",
        fieldSlug: "jonentaeli-2",
      },
    ],
  },
  {
    slug: "juniorinnen-ea",
    name: "Juniorinnen",
    emphasis: "Ea",
    ageRange: "U11 · Jahrgang 2016–2017",
    liga: "Juniorinnen E · Stärkeklasse 1",
    description:
      "Erste Turniere, erste Tore, erste Teamfotos. Hier beginnt die Reise.",
    trainings: [
      {
        day: "Montag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "suerenloh",
        fieldSlug: "suerenloh-2",
      },
      {
        day: "Freitag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "suerenloh",
        fieldSlug: "suerenloh-2",
      },
    ],
  },
  {
    slug: "juniorinnen-eb",
    name: "Juniorinnen",
    emphasis: "Eb",
    ageRange: "U11 · Jahrgang 2016–2017",
    liga: "Juniorinnen E · Stärkeklasse 2",
    description:
      "Spielerisch ans runde Leder. Bewegung, Begegnung, Begeisterung.",
    trainings: [
      {
        day: "Mittwoch",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "schlag",
        fieldSlug: "schlag-1",
      },
      {
        day: "Freitag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "schlag",
        fieldSlug: "schlag-1",
      },
    ],
  },
  {
    slug: "juniorinnen-f",
    name: "Juniorinnen",
    emphasis: "F",
    ageRange: "U9 · Jahrgang 2018 und jünger",
    liga: "Juniorinnen F · Plauschturniere",
    description:
      "Die Kleinsten ganz gross. Wir starten mit Spielformen, Lachen und ganz viel Bewegung.",
    trainings: [
      {
        day: "Mittwoch",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "knonau",
        fieldSlug: "knonau-1",
      },
      {
        day: "Freitag",
        startTime: "17:30",
        endTime: "19:00",
        locationSlug: "jonentaeli",
        fieldSlug: "jonentaeli-1",
      },
    ],
  },
];
