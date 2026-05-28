import { clubLogoIds } from "@/data/clubLogoIds";

const LOGO_BASE_URL =
  "https://asanisdatapublicprd01.blob.core.windows.net/logos/Verein";

/**
 * Normalisiert einen Team-Namen aus dem iCal auf den Vereins-Grundnamen,
 * um ihn gegen die clubLogoIds-Tabelle zu matchen.
 *
 * Wichtig: Team-Suffixe wie " 1", " a", " a_", " d/7" werden entfernt,
 * aber Kantons-Kürzel wie "ZH" (gross) bleiben erhalten.
 * Reihenfolge: erst Suffix-Strip am Original-Case, dann lowercase.
 */
function normalizeClubName(name: string): string {
  let n = name.trim();
  // Team-Nummer am Ende: " 1", " 2"
  n = n.replace(/\s+\d+$/, "");
  // Team-Buchstabe (klein) am Ende, evtl. mit "_": " a", " b", " a_"
  n = n.replace(/\s+[a-z]_?$/, "");
  // Junioren-Format am Ende: " d/7", " e/5"
  n = n.replace(/\s+[a-z]\/\d+$/i, "");
  // "Academy"-Zusatz
  n = n.replace(/\s+academy$/i, "");
  return n.trim().toLowerCase();
}

// Lookup-Map einmalig aufbauen: normalisierter Name → ID
const normalizedLookup: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  for (const [name, id] of Object.entries(clubLogoIds)) {
    map[normalizeClubName(name)] = id;
  }
  return map;
})();

/**
 * Findet die SFV-Logo-ID für einen Team-Namen.
 * Gibt undefined zurück, wenn kein Verein matched.
 */
export function resolveClubLogoId(teamName: string): string | undefined {
  return normalizedLookup[normalizeClubName(teamName)];
}

/**
 * Baut die volle Logo-URL für einen Team-Namen.
 * Gibt undefined zurück, wenn kein Logo gefunden wird (→ Buchstaben-Fallback).
 */
export function getClubLogoUrl(teamName: string): string | undefined {
  const id = resolveClubLogoId(teamName);
  return id ? `${LOGO_BASE_URL}/${id}.gif` : undefined;
}
