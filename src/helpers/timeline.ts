import { getUpcomingMatches } from "./matches";
import { getUpcomingFfasEvents } from "./ffasEvents";
import type { Match } from "@/types/match";
import type { FfasEvent } from "@/types/ffasEvent";

export type TimelineItem =
  | { kind: "match"; data: Match; date: string }
  | { kind: "event"; data: FfasEvent; date: string };

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
