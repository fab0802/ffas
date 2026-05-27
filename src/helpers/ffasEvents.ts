import { ffasEvents } from "@/data/ffasEvents";
import type { FfasEvent } from "@/types/ffasEvent";

export async function getFfasEvents(): Promise<FfasEvent[]> {
  return ffasEvents;
}

/**
 * Nur Termine ab heute, chronologisch sortiert.
 */
export async function getUpcomingFfasEvents(): Promise<FfasEvent[]> {
  const events = await getFfasEvents();
  const today = new Date().toISOString().slice(0, 10);
  return events
    .filter((e) => (e.endDate ?? e.date) >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

/**
 * Alle Termine eines bestimmten Teams (oder allgemeine ohne teamSlugs).
 */
export async function getFfasEventsForTeam(
  teamSlug: string,
): Promise<FfasEvent[]> {
  const events = await getFfasEvents();
  return events.filter(
    (e) =>
      !e.teamSlugs ||
      e.teamSlugs.length === 0 ||
      e.teamSlugs.includes(teamSlug),
  );
}
