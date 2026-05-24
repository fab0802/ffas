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

/** Alle zukünftigen Spiele eines bestimmten Teams, chronologisch sortiert. */
export async function getUpcomingMatchesForTeam(
  teamSlug: string,
  count?: number,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  const filtered = matches
    .filter((m) => m.teamSlug === teamSlug && m.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  return count !== undefined ? filtered.slice(0, count) : filtered;
}

/** Vergangene Spiele eines Teams mit Resultat, neueste zuerst. */
export async function getRecentResultsForTeam(
  teamSlug: string,
  count?: number,
): Promise<Match[]> {
  const matches = await getMatches();
  const today = new Date().toISOString().slice(0, 10);
  const filtered = matches
    .filter((m) => m.teamSlug === teamSlug && m.date < today && m.result)
    .sort((a, b) => b.date.localeCompare(a.date));
  return count !== undefined ? filtered.slice(0, count) : filtered;
}

/**
 * Resultat aus FFAS-Sicht: { ffas, opponent, outcome }.
 * Liefert undefined, wenn kein Result auf dem Match.
 */
export type FfasResult = {
  ffas: number;
  opponent: number;
  outcome: "win" | "draw" | "loss";
};

export function getFfasResult(match: Match): FfasResult | undefined {
  if (!match.result) return undefined;
  const ffas = match.home ? match.result.home : match.result.away;
  const opponent = match.home ? match.result.away : match.result.home;
  const outcome: FfasResult["outcome"] =
    ffas > opponent ? "win" : ffas < opponent ? "loss" : "draw";
  return { ffas, opponent, outcome };
}
