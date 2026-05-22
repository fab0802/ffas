import type { Weekday } from "@/types/weekday";

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

/** "2026-04-28" → "28. APRIL 2026" (für Featured-News o.ä.) */
export function formatDateLongUpper(isoDate: string): string {
  const date = parseIsoDate(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS_LONG[date.getMonth()].toUpperCase();
  return `${day}. ${month} ${date.getFullYear()}`;
}

/** "2026-04-28" → "28. APRIL" */
export function formatDateShortUpper(isoDate: string): string {
  const date = parseIsoDate(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS_LONG[date.getMonth()].toUpperCase();
  return `${day}. ${month}`;
}
