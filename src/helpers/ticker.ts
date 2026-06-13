import type { Match } from "@/types/match";
import {
  getTeamForMatch,
  getMatchesInNextDays,
  formatDateWithWeekday,
} from "@/helpers";

const TICKER_DAYS_WINDOW = 7;

export type TickerMatchParts = {
  date: string; // "SA 13.06."
  time: string; // "12:00" oder ""
  teamName: string; // "Juniorinnen" / "Aktive" — Standardfarbe
  teamEmphasis: string; // "D7b" / "1" — pink hervorgehoben
  opponent?: string; // "FC Richterswil b"
  home: boolean;
  isTournament: boolean;
  tournamentTitle?: string;
};

export async function getTickerMatches(): Promise<TickerMatchParts[]> {
  const matches = await getMatchesInNextDays(TICKER_DAYS_WINDOW);
  return matches.map(toTickerParts);
}

function toTickerParts(match: Match): TickerMatchParts {
  const team = getTeamForMatch(match);

  return {
    date: formatDateWithWeekday(match.date),
    time: match.time ?? "",
    teamName: team?.name ?? match.teamSlug,
    teamEmphasis: team?.emphasis ?? "",
    opponent: match.opponent,
    home: match.home,
    isTournament: match.kind === "Turnier",
    tournamentTitle: match.tournamentTitle,
  };
}
