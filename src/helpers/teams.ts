import { teams } from "@/data/teams";
import type { Team } from "@/types/team";

const GERMAN_NUMBERS = [
  "Null",
  "Eins",
  "Zwei",
  "Drei",
  "Vier",
  "Fünf",
  "Sechs",
  "Sieben",
  "Acht",
  "Neun",
  "Zehn",
  "Elf",
  "Zwölf",
  "Dreizehn",
  "Vierzehn",
  "Fünfzehn",
  "Sechzehn",
  "Siebzehn",
  "Achtzehn",
  "Neunzehn",
  "Zwanzig",
] as const;

export function getTeams(): Team[] {
  return teams;
}

export function getTeamsCount(): number {
  return teams.length;
}

/**
 * "Zehn", "Sieben", ... – ausgeschrieben für Fliesstext.
 * Fallback auf Ziffer ab 21.
 */
export function getTeamsCountWord(): string {
  const n = teams.length;
  return GERMAN_NUMBERS[n] ?? String(n);
}

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}
