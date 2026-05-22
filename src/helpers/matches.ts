// src/helpers/matches.ts
import { getMatches } from "@/data/matches";
import { teams } from "@/data/teams";
import type { Match } from "@/types/match";
import type { Team } from "@/types/team";

export function getTeamForMatch(match: Match): Team | undefined {
  return teams.find((t) => t.slug === match.teamSlug);
}

export function getDisplayLeague(match: Match): string | undefined {
  if (match.kind !== "Meisterschaft") return undefined;
  return getTeamForMatch(match)?.liga;
}

/** Soonest match from today onward, or undefined wenn keine zukünftigen. */
export async function getNextMatch(): Promise<Match | undefined> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  return matches
    .filter((m) => m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}

/**
 * Nächste N Spiele. Optional ein Spiel ausschliessen (für den Fall,
 * dass das Featured-Match in der Card schon gezeigt wird).
 */
export async function getUpcomingMatches(
  count: number,
  excludeDate?: string,
  excludeTeamSlug?: string,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  return matches
    .filter((m) => m.date >= today)
    .filter((m) => !(m.date === excludeDate && m.teamSlug === excludeTeamSlug))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}
