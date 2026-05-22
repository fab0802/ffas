import { getMatches } from "@/data/matches";
import { teams } from "@/data/teams";
import { getLocationBySlug } from "./locations";
import type { Match } from "@/types/match";
import type { Team } from "@/types/team";

export function getTeamForMatch(match: Match): Team | undefined {
  return teams.find((t) => t.slug === match.teamSlug);
}

export function getDisplayLeague(match: Match): string | undefined {
  if (match.kind !== "Meisterschaft") return undefined;
  return getTeamForMatch(match)?.liga;
}

/**
 * Anzeigename für den Spielort.
 * Bevorzugt locationSlug (intern referenziert), sonst venueText (Freitext).
 */
export function getMatchVenueName(match: Match): string | undefined {
  if (match.locationSlug) {
    return getLocationBySlug(match.locationSlug)?.name;
  }
  return match.venueText;
}

/** Soonest match from today onward, or undefined wenn keine zukünftigen. */
export async function getNextMatch(): Promise<Match | undefined> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  return matches
    .filter((m) => m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}

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
