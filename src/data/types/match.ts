import { MatchKind } from "./matchKind";

export type Match = {
  date: string; // ISO: "2026-05-17"
  time?: string; // "14:30" — optional
  teamSlug: string; // Referenz auf teams.ts
  opponent: string;
  home: boolean;
  venue?: string;
  kind: MatchKind;
};
