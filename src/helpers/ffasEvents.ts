import type { FfasEvent } from "@/types/ffasEvent";
import { ffasEvents } from "@/data/ffasEvents";

/**
 * Alle FFAS-Events (rohe Liste).
 * Async, damit später ggf. auf eine andere Quelle (DB, CMS) umgestellt werden kann
 * ohne die Aufrufer anzupassen.
 */
export async function getFfasEvents(): Promise<FfasEvent[]> {
  return ffasEvents;
}

/**
 * Nur künftige Events (heute oder später, basierend auf endDate falls vorhanden,
 * sonst date). Chronologisch sortiert.
 */
export async function getUpcomingFfasEvents(): Promise<FfasEvent[]> {
  const events = await getFfasEvents();
  const today = new Date().toISOString().slice(0, 10);
  return events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return (a.time ?? "").localeCompare(b.time ?? "");
    });
}

/**
 * Events für ein bestimmtes Team:
 * - Vereinsweite Events (kein teamSlugs gesetzt) IMMER eingeschlossen
 * - Plus Events, die explizit dieses Team referenzieren
 */
export async function getFfasEventsForTeam(
  teamSlug: string,
): Promise<FfasEvent[]> {
  const events = await getUpcomingFfasEvents();
  return events.filter(
    (e) =>
      !e.teamSlugs ||
      e.teamSlugs.length === 0 ||
      e.teamSlugs.includes(teamSlug),
  );
}

/**
 * Lesbares Label für eine Kategorie (für UI-Anzeige).
 */
export function getCategoryLabel(category: FfasEvent["category"]): string {
  switch (category) {
    case "Fest":
      return "Fest";
    case "Trainingslager":
      return "Trainingslager";
    case "Sitzung":
      return "Sitzung";
    case "Kurs":
      return "Kurs / Workshop";
    case "Allgemein":
      return "Termin";
  }
}

/**
 * Das nächste kommende Event (oder undefined, wenn keins).
 * Wird als Hero-Card auf der Homepage angezeigt.
 */
export async function getFeaturedFfasEvent(): Promise<FfasEvent | undefined> {
  const events = await getUpcomingFfasEvents();
  return events[0];
}

/**
 * Die nächsten Events ab heute, ohne das featured Event.
 * Für die Homepage-Liste neben dem Hero.
 */
export async function getUpcomingFfasEventsExcludingFeatured(
  count: number,
  excludeSlug?: string,
): Promise<FfasEvent[]> {
  const events = await getUpcomingFfasEvents();
  const filtered = excludeSlug
    ? events.filter((e) => e.slug !== excludeSlug)
    : events;
  return filtered.slice(0, count);
}
