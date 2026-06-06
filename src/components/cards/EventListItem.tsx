import Image from "next/image";
import type { FfasEvent } from "@/types/ffasEvent";
import { getCategoryLabel } from "@/helpers";
import styles from "./EventListItem.module.css";

export type EventListItemProps = {
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

function formatCompactDate(date: string, endDate?: string): string {
  const [, mm, dd] = date.split("-").map((n) => parseInt(n, 10));
  const dayStr = `${dd}. ${MONTHS_SHORT[mm - 1]}`;

  if (!endDate) return dayStr;

  const [, emm, edd] = endDate.split("-").map((n) => parseInt(n, 10));
  if (mm === emm) {
    return `${dd}. – ${edd}. ${MONTHS_SHORT[mm - 1]}`;
  }
  return `${dayStr} – ${edd}. ${MONTHS_SHORT[emm - 1]}`;
}

export default function EventListItem({ event }: EventListItemProps) {
  const dateText = formatCompactDate(event.date, event.endDate);

  return (
    <article className={styles.row} data-category={event.category}>
      <div className={styles.thumb}>
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt=""
            fill
            sizes="56px"
            className={styles.thumbImage}
          />
        ) : (
          <div className={styles.thumbFallback} />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.date}>{dateText}</span>
          <span className={styles.category}>
            {getCategoryLabel(event.category)}
          </span>
        </div>
        <h4 className={styles.title}>{event.title}</h4>
      </div>
    </article>
  );
}
