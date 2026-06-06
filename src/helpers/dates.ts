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

const WEEKDAYS_LONG = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
] as const;

/**
 * Formatiert ein einzelnes Datum oder einen Bereich für Listen-Zeilen.
 * "2026-06-21" → "21. JUN 2026"
 * "2026-07-04" + "2026-07-06" → "04. – 06. JUL 2026"
 * "2026-07-30" + "2026-08-02" → "30. JUL – 02. AUG 2026"
 */
export function formatDateRangeUpper(date: string, endDate?: string): string {
  const [yyyy, mm, dd] = date.split("-").map((n) => parseInt(n, 10));
  if (!yyyy || !mm || !dd) return date;

  const dayStr = String(dd).padStart(2, "0");

  if (!endDate) {
    return `${dayStr}. ${MONTHS_SHORT[mm - 1]} ${yyyy}`;
  }

  const [eyyyy, emm, edd] = endDate.split("-").map((n) => parseInt(n, 10));
  const eDayStr = String(edd).padStart(2, "0");

  if (yyyy === eyyyy && mm === emm) {
    // Gleicher Monat: "04. – 06. JUL 2026"
    return `${dayStr}. – ${eDayStr}. ${MONTHS_SHORT[mm - 1]} ${yyyy}`;
  }
  if (yyyy === eyyyy) {
    // Gleiches Jahr, anderer Monat: "30. JUL – 02. AUG 2026"
    return `${dayStr}. ${MONTHS_SHORT[mm - 1]} – ${eDayStr}. ${MONTHS_SHORT[emm - 1]} ${yyyy}`;
  }
  // Verschiedene Jahre: kommt selten vor, aber lieber sauber abhandeln
  return `${dayStr}. ${MONTHS_SHORT[mm - 1]} ${yyyy} – ${eDayStr}. ${MONTHS_SHORT[emm - 1]} ${eyyyy}`;
}

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

const WEEKDAYS_SHORT = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"] as const;

/**
 * Format: "SA 30.05."  (Wochentag-Abkürzung + Tag.Monat. ohne Jahr)
 */
export function formatDateWithWeekday(isoDate: string): string {
  // isoDate = "YYYY-MM-DD"
  const [yyyy, mm, dd] = isoDate.split("-").map((n) => parseInt(n, 10));
  if (!yyyy || !mm || !dd) return isoDate;

  // Date in lokaler Zeit, UTC vermeiden (sonst Tag-Verschiebung)
  const date = new Date(yyyy, mm - 1, dd);
  const weekday = WEEKDAYS_SHORT[date.getDay()];

  const ddStr = String(dd).padStart(2, "0");
  const mmStr = String(mm).padStart(2, "0");
  return `${weekday} ${ddStr}.${mmStr}.`;
}

/**
 * Format: "Samstag, 30.05."  — für Tages-Gruppen-Header
 */
export function formatDayHeader(isoDate: string): string {
  const [yyyy, mm, dd] = isoDate.split("-").map((n) => parseInt(n, 10));
  if (!yyyy || !mm || !dd) return isoDate;
  const date = new Date(yyyy, mm - 1, dd);
  const weekday = WEEKDAYS_LONG[date.getDay()];
  const ddStr = String(dd).padStart(2, "0");
  const mmStr = String(mm).padStart(2, "0");
  return `${weekday}, ${ddStr}.${mmStr}.`;
}
