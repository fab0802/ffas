/**
 * Mapping von football.ch-LOCATION-Strings zu unseren FFAS-locationSlugs.
 * Nur FFAS-Heimplätze — Auswärtsorte bleiben als venueText.
 *
 * football.ch-Format: "Platzname, Ort - Platzbezeichnung (optional)"
 * Wir matchen Case-insensitiv auf einem Substring des Platznamens.
 */
export type VenueMapping = {
  match: string; // Substring, lowercased, der drin sein muss
  locationSlug: string; // unser interner Slug
};

export const footballChVenueMappings: VenueMapping[] = [
  // FC Hausen a/A
  { match: "jonentäli", locationSlug: "jonentaeli" },

  // FC Wettswil-Bonstetten — Heimplätze ergänzen:
  { match: "moos", locationSlug: "moos" },

  // FC Knonau-Mettmenstetten
  { match: "schlag", locationSlug: "schlag" },

  // Sportclub Hedingen — Heimplätze hier
  { match: "süerenloh", locationSlug: "suerenloh" },
  { match: "suerenloh", locationSlug: "suerenloh" }, // ohne Umlaut

  // FC Uitikon
  { match: "wygarten", locationSlug: "wygarten" },

  // KMO weitere
  { match: "knonau", locationSlug: "knonau" },
];

/**
 * Sucht für einen football.ch-LOCATION-String den passenden FFAS-locationSlug.
 * Gibt undefined zurück, wenn kein FFAS-Heimplatz matched (= Auswärtsspiel).
 */
export function resolveLocationSlug(
  footballChLocation: string,
): string | undefined {
  const haystack = footballChLocation.toLowerCase();
  for (const mapping of footballChVenueMappings) {
    if (haystack.includes(mapping.match)) {
      return mapping.locationSlug;
    }
  }
  return undefined;
}
