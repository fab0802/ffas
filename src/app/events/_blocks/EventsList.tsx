import type { FfasEvent } from "@/types/ffasEvent";
import EventCard from "./EventCard";
import styles from "./EventsList.module.css";

export type EventsListProps = {
  events: FfasEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  if (events.length === 0) {
    return (
      <p className={styles.empty}>
        Keine kommenden Termine für die aktuelle Auswahl.
      </p>
    );
  }

  return (
    <div className={styles.grid}>
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}
