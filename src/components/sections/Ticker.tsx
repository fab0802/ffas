import styles from "./Ticker.module.css";
import { getTickerItems, formatTickerItem } from "@/helpers";

export default async function Ticker() {
  const items = await getTickerItems();
  // Inhalt verdoppeln für den nahtlosen Loop.
  // Die Duplikate sind aria-hidden, damit Screen Reader sie nicht doppelt vorlesen.
  const doubled = [...items, ...items];

  return (
    <section
      className={styles.ticker}
      aria-label="Aktuelles aus dem FFAS-Umfeld"
    >
      <div className={styles.track}>
        {doubled.map((item, i) => {
          const isDuplicate = i >= items.length;
          return (
            <div
              key={i}
              className={`${styles.item} ${isDuplicate ? styles.duplicate : ""}`}
              aria-hidden={isDuplicate || undefined}
            >
              <span className={styles.text}>{formatTickerItem(item)}</span>
              <span className={styles.separator} aria-hidden="true">
                ◆
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
