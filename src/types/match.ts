import type { MatchKind } from "./matchKind";

export type Match = {
  date: string;
  time?: string;
  endTime?: string;
  teamSlug: string;
  opponent?: string;
  home: boolean;
  locationSlug?: string;
  venueText?: string;
  kind: MatchKind;
  competition?: string;
  matchNumber?: string;
  tournamentTitle?: string;
  organizerText?: string;
  result?: {
    home: number;
    away: number;
  };
};
