import Image from "next/image";
import type { FfasEvent } from "@/types/ffasEvent";
import { getCategoryLabel } from "@/helpers";
import styles from "./EventCard.module.css";

export type EventCardProps = {
  event: FfasEvent;
};

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "März",
  "Apr",
  "Mai",
  "Juni",
  "Juli",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dez",
];

function formatDateRange(date: string, endDate?: string): string {
  const [, mm, dd] = date.split("-").map((n) => parseInt(n, 10));
  const dayStr = `${dd}. ${MONTHS_SHORT[mm - 1]}`;

  if (!endDate) return dayStr;

  const [, emm, edd] = endDate.split("-").map((n) => parseInt(n, 10));
  if (mm === emm) {
    return `${dd}. – ${edd}. ${MONTHS_SHORT[mm - 1]}`;
  }
  return `${dayStr} – ${edd}. ${MONTHS_SHORT[emm - 1]}`;
}

function formatTimeRange(time?: string, endTime?: string): string {
  if (!time) return "";
  if (!endTime) return time;
  return `${time} – ${endTime}`;
}

export default function EventCard({ event }: EventCardProps) {
  const dateText = formatDateRange(event.date, event.endDate);
  const timeText = formatTimeRange(event.time, event.endTime);
  const isClubWide = !event.teamSlugs || event.teamSlugs.length === 0;
  const venue = event.venueText; // locationSlug-Resolution kann später dazukommen

  return (
    <article className={styles.card} data-category={event.category}>
      {/* Banner: Bild oder farbiger Verlauf */}
      <div className={styles.banner}>
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, 33vw"
            className={styles.bannerImage}
          />
        ) : (
          <div className={styles.bannerFallback} />
        )}
        <span className={styles.categoryBadge}>
          {getCategoryLabel(event.category)}
        </span>
      </div>

      {/* Body */}
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

        {(venue || !isClubWide) && (
          <div className={styles.meta}>
            {venue && <span className={styles.venue}>{venue}</span>}
            {!isClubWide && event.teamSlugs && (
              <span className={styles.teams}>
                {event.teamSlugs.join(" · ")}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
