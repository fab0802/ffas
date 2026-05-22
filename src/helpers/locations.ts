import { locations } from "@/data/locations";
import { clubs } from "@/data/clubs";
import type { Location } from "@/types/location";
import type { Field } from "@/types/field";

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/**
 * Sucht ein Feld über alle Locations hinweg.
 * Field-Slugs müssen global eindeutig sein (Konvention: location-slug-Prefix,
 * z.B. "moos-1", "jonentaeli-2").
 */
export function getFieldBySlug(slug: string): Field | undefined {
  for (const location of locations) {
    const field = location.fields.find((f) => f.slug === slug);
    if (field) return field;
  }
  return undefined;
}

/**
 * Alle Heimplätze eines Trägervereins.
 */
export function getLocationsForClub(clubSlug: string): Location[] {
  const club = clubs.find((c) => c.slug === clubSlug);
  if (!club) return [];
  return club.homeGroundSlugs
    .map((s) => getLocationBySlug(s))
    .filter((l): l is Location => l !== undefined);
}
