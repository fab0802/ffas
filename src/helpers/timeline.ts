import { getUpcomingMatches } from "./matches";
import { getUpcomingFfasEvents } from "./ffasEvents";
import { getUpcomingMatchesForTeam } from "./matches";
import { getFfasEventsForTeam } from "./ffasEvents";
import type { TimelineItem } from "@/types/timelineItem";

export async function getUpcomingTimeline(
  count?: number,
): Promise<TimelineItem[]> {
  const [matches, events] = await Promise.all([
    getUpcomingMatches(count ?? 999),
    getUpcomingFfasEvents(),
  ]);

  const items: TimelineItem[] = [
    ...matches.map(
      (m): TimelineItem => ({ kind: "match", data: m, date: m.date }),
    ),
    ...events.map(
      (e): TimelineItem => ({ kind: "event", data: e, date: e.date }),
    ),
  ];

  items.sort((a, b) => a.date.localeCompare(b.date));
  return count ? items.slice(0, count) : items;
}

/**
 * Kombinierte chronologische Timeline für ein Team:
 * Spiele + teamrelevante Events (vereinsweite + team-spezifische).
 */
export async function getUpcomingTimelineForTeam(
  teamSlug: string,
  count = 5,
): Promise<TimelineItem[]> {
  const [matches, events] = await Promise.all([
    getUpcomingMatchesForTeam(teamSlug, 999),
    getFfasEventsForTeam(teamSlug),
  ]);

  const items: TimelineItem[] = [
    ...matches.map(
      (m): TimelineItem => ({
        kind: "match",
        data: m,
        date: m.date,
        time: m.time,
      }),
    ),
    ...events.map(
      (e): TimelineItem => ({
        kind: "event",
        data: e,
        date: e.date,
        time: e.time,
      }),
    ),
  ];

  items.sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return (a.time ?? "").localeCompare(b.time ?? "");
  });

  return items.slice(0, count);
}
