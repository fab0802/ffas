import type { Team } from "@/types/team";
import {
  getUpcomingTimelineForTeam,
  getMatchVenueName,
  getShortVenueName,
  getMatchStatusLabel,
  formatDateLongUpper,
  formatDateRangeUpper,
  getCategoryLabel,
  getLocationBySlug,
} from "@/helpers";
import styles from "./TeamUpcomingBlock.module.css";

export type TeamUpcomingBlockProps = {
  team: Team;
};

export default async function TeamUpcomingBlock({
  team,
}: TeamUpcomingBlockProps) {
  const items = await getUpcomingTimelineForTeam(team.slug, 5);
  if (items.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Kommende Termine</h2>
      <ul className={styles.list}>
        {items.map((item) => {
          if (item.kind === "match") {
            const match = item.data;
            const statusLabel = getMatchStatusLabel(match);
            const isCancelled = match.status === "Nullwertung";

            const middle =
              match.kind === "Turnier"
                ? (match.tournamentTitle ?? "Turnier")
                : `${match.home ? "vs." : "@"} ${match.opponent ?? "—"}`;

            const venue =
              match.kind === "Turnier"
                ? getMatchVenueName(match)
                : getShortVenueName(match);

            return (
              <li
                key={
                  match.matchNumber ??
                  `match-${match.teamSlug}-${match.date}-${match.time ?? ""}`
                }
                className={`${styles.row} ${isCancelled ? styles.cancelled : ""}`}
              >
                <span className={styles.date}>
                  {formatDateLongUpper(match.date)}
                </span>
                <span className={styles.title}>
                  {middle}
                  {statusLabel && (
                    <span className={styles.statusBadge}>{statusLabel}</span>
                  )}
                </span>
                <span className={styles.venue}>
                  {venue ?? (match.home ? "Heim" : "Auswärts")}
                </span>
                <span className={styles.time}>{match.time ?? "—"}</span>
              </li>
            );
          }

          // Event
          const event = item.data;
          const eventLocation = event.locationSlug
            ? getLocationBySlug(event.locationSlug)
            : undefined;
          const eventVenue = event.venueText ?? eventLocation?.name ?? "";
          return (
            <li key={`event-${event.slug}`} className={styles.row}>
              <span className={styles.date}>
                {formatDateRangeUpper(event.date, event.endDate)}
              </span>
              <span className={styles.title}>
                {event.title}
                <span className={styles.categoryBadge}>
                  {getCategoryLabel(event.category)}
                </span>
              </span>
              <span className={styles.venue}>{eventVenue}</span>
              <span className={styles.time}>{event.time ?? "—"}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
