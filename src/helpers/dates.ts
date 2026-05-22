// src/helpers/dates.ts
import type { Weekday } from "@/types/weekday";

/**
 * Index entspricht JS-`Date.getDay()`: 0 = Sonntag, 1 = Montag, ...
 * Bewusst als `readonly Weekday[]` getypt — wenn der `Weekday`-Type
 * irgendwann einen Wert verliert oder umbenennt, bricht es hier sofort.
 */
const WEEKDAYS: readonly Weekday[] = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const MONTHS_LONG = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
] as const;

const MONTHS_SHORT = [
  "JAN",
  "FEB",
  "MÄR",
  "APR",
  "MAI",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OKT",
  "NOV",
  "DEZ",
] as const;

/**
 * Parst "YYYY-MM-DD" ohne `new Date(isoString)` — das interpretiert
 * je nach Browser UTC und kann am Monatsrand einen Tag zurückspringen.
 */
function parseIsoDate(isoDate: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** "2026-05-10" → "Sonntag, 10. Mai" */
export function formatDateLong(isoDate: string): string {
  const date = parseIsoDate(isoDate);
  return `${WEEKDAYS[date.getDay()]}, ${date.getDate()}. ${MONTHS_LONG[date.getMonth()]}`;
}

/** "2026-05-10" → "10. MAI" */
export function formatDateShort(isoDate: string): string {
  const date = parseIsoDate(isoDate);
  return `${date.getDate()}. ${MONTHS_SHORT[date.getMonth()]}`;
}
