// src/data/matches.ts
import type { Match } from "@/types/match";

const stubMatches: Match[] = [
  {
    date: "2026-05-24",
    time: "13:00",
    teamSlug: "frauen-1",
    opponent: "FC Wallisellen 2",
    home: true,
    venue: "Sportplatz Erlenmoos",
    kind: "Meisterschaft",
  },
  {
    date: "2026-05-31",
    time: "14:00",
    teamSlug: "frauen-1",
    opponent: "SV Höngg",
    home: false,
    kind: "Meisterschaft",
  },
  {
    date: "2026-06-07",
    time: "13:00",
    teamSlug: "frauen-1",
    opponent: "FC Glattbrugg",
    home: true,
    venue: "Sportplatz Erlenmoos",
    kind: "Meisterschaft",
  },
  {
    date: "2026-06-14",
    teamSlug: "juniorinnen-c",
    opponent: "FC Wettswil-Bonstetten",
    home: true,
    venue: "Sportplatz Türgi",
    kind: "Testspiel",
  },
  {
    date: "2026-06-21",
    time: "10:30",
    teamSlug: "juniorinnen-b",
    opponent: "FC Bülach",
    home: false,
    kind: "Meisterschaft",
  },
];

/**
 * Async-Wrapper — späterer Wechsel auf Scraping bleibt ein
 * Einzeiler-Diff, kein Aufruferseiten-Refactoring nötig.
 */
export async function getMatches(): Promise<Match[]> {
  return stubMatches;
}
