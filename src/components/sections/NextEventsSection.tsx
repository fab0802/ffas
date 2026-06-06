import {
  getFeaturedFfasEvent,
  getUpcomingFfasEventsExcludingFeatured,
} from "@/helpers";
import Link from "next/link";
import EventHeroCard from "@/components/cards/EventHeroCard";
import EventListItem from "@/components/cards/EventListItem";
import styles from "./NextEventsSection.module.css";

const LIST_COUNT = 5;

export default async function NextEventsSection() {
  const featured = await getFeaturedFfasEvent();
  if (!featured) return null;

  const listEvents = await getUpcomingFfasEventsExcludingFeatured(
    LIST_COUNT,
    featured.slug,
  );

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.eyebrow}>Nächste Termine</div>
        <h2 className={styles.title}>Termine</h2>
      </header>

      <div className={styles.grid}>
        <div className={styles.heroSide}>
          <EventHeroCard event={featured} />
        </div>

        <div className={styles.listSide}>
          {listEvents.length > 0 ? (
            <>
              <ul className={styles.list}>
                {listEvents.map((event) => (
                  <li key={event.slug} className={styles.listRow}>
                    <EventListItem event={event} />
                  </li>
                ))}
              </ul>
              <Link href="/events" className={styles.moreLink}>
                Alle Termine →
              </Link>
            </>
          ) : (
            <p className={styles.empty}>Keine weiteren Termine geplant.</p>
          )}
        </div>
      </div>
    </section>
  );
}
