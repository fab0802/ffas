import type { Match } from "@/types/match";

const stubMatches: Match[] = [
  {
    date: "2026-05-24",
    time: "13:00",
    teamSlug: "frauen-1",
    opponent: "FC Wallisellen 2",
    home: true,
    locationSlug: "moos",
    kind: "Meisterschaft",
  },
  {
    date: "2026-05-31",
    time: "14:00",
    teamSlug: "frauen-1",
    opponent: "SV Höngg",
    home: false,
    venueText: "Sportplatz Hönggerberg",
    kind: "Meisterschaft",
  },
  {
    date: "2026-06-07",
    time: "13:00",
    teamSlug: "frauen-1",
    opponent: "FC Glattbrugg",
    home: true,
    locationSlug: "moos",
    kind: "Meisterschaft",
  },
  {
    date: "2026-06-14",
    teamSlug: "juniorinnen-c",
    opponent: "FC Wettswil-Bonstetten",
    home: true,
    locationSlug: "jonentaeli", // ← Annahme; passe an wenn jun-c woanders spielt
    kind: "Testspiel",
  },
  {
    date: "2026-06-21",
    time: "10:30",
    teamSlug: "juniorinnen-b",
    opponent: "FC Bülach",
    home: false,
    venueText: "Sportplatz Erachfeld",
    kind: "Meisterschaft",
  },
];

export async function getMatches(): Promise<Match[]> {
  return stubMatches;
}
