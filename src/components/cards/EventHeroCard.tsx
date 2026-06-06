import Image from "next/image";
import type { FfasEvent } from "@/types/ffasEvent";
import { getCategoryLabel } from "@/helpers";
import styles from "./EventHeroCard.module.css";

export type EventHeroCardProps = {
  event: FfasEvent;
};

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
];

function formatDateRange(date: string, endDate?: string): string {
  const [, mm, dd] = date.split("-").map((n) => parseInt(n, 10));
  const dayStr = `${dd}. ${MONTHS_LONG[mm - 1]}`;

  if (!endDate) return dayStr;

  const [, emm, edd] = endDate.split("-").map((n) => parseInt(n, 10));
  if (mm === emm) {
    return `${dd}. – ${edd}. ${MONTHS_LONG[mm - 1]}`;
  }
  return `${dayStr} – ${edd}. ${MONTHS_LONG[emm - 1]}`;
}

function formatTimeRange(time?: string, endTime?: string): string {
  if (!time) return "";
  if (!endTime) return time;
  return `${time} – ${endTime}`;
}

export default function EventHeroCard({ event }: EventHeroCardProps) {
  const dateText = formatDateRange(event.date, event.endDate);
  const timeText = formatTimeRange(event.time, event.endTime);
  const venue = event.venueText;

  return (
    <article className={styles.card} data-category={event.category}>
      <div className={styles.banner}>
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt=""
            fill
            sizes="(max-width: 880px) 100vw, 50vw"
            className={styles.bannerImage}
            priority
          />
        ) : (
          <div className={styles.bannerFallback} />
        )}
        <span className={styles.categoryBadge}>
          {getCategoryLabel(event.category)}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.dateLine}>
          <span className={styles.date}>{dateText}</span>
          {timeText && (
            <>
              <span className={styles.sep}>·</span>
              <span className={styles.time}>{timeText}</span>
            </>
          )}
        </div>

        <h3 className={styles.title}>{event.title}</h3>

        {event.description && (
          <p className={styles.description}>{event.description}</p>
        )}

        {venue && (
          <div className={styles.meta}>
            <span className={styles.venue}>{venue}</span>
          </div>
        )}
      </div>
    </article>
  );
}
