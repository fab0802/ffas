import type { MatchStatus } from "@/types/matchStatus";

/**
 * Manuell gepflegte Liste von Spielen mit Sonderstatus.
 * iCal-Feeds liefern keine Nullwertung/Verschiebung — diese Info
 * stammt vom football.ch-Matchcenter und wird hier per Spielnummer ergänzt.
 *
 * Key: matchNumber, Value: Status
 */
export const matchStatusOverrides: Record<string, MatchStatus> = {
  "222002": "Nullwertung", // D7b vs FFC Lionesses, ersetzt durch Testspiel Langnau
};
