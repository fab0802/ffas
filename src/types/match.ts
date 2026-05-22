import type { MatchKind } from "./matchKind";

export type Match = {
  date: string;
  time?: string;
  teamSlug: string;
  opponent: string;
  home: boolean;
  locationSlug?: string;
  venueText?: string;
  kind: MatchKind;
};
