// src/components/sections/NextMatchSection.tsx
import MatchCard from "@/components/cards/MatchCard";
import { getNextMatch, getUpcomingMatches, formatDateShort } from "@/helpers";
import styles from "./NextMatchSection.module.css";

export default async function NextMatchSection() {
  const featured = await getNextMatch();
  const upcoming = featured
    ? await getUpcomingMatches(4, featured.date, featured.teamSlug)
    : await getUpcomingMatches(4);

  return (
    <section className={styles.section} id="spielplan">
      <div className={styles.text}>
        <div className={styles.eyebrow}>Spielplan</div>
        <h2 className={styles.title}>
          Die nächsten <em>Spiele</em>.
        </h2>
        <p className={styles.lead}>
          Komm vorbei, bring Lärm mit. Bratwurst gibt&apos;s ab 12 Uhr, Anpfiff
          meistens um 13. Eintritt: ein Lächeln und gute Laune.
        </p>

        {upcoming.length > 0 && (
          <ul className={styles.list}>
            {upcoming.map((match) => (
              <li
                key={`${match.teamSlug}-${match.date}`}
                className={styles.row}
              >
                <span className={styles.date}>
                  {formatDateShort(match.date)}
                </span>
                <span className={styles.opp}>{match.opponent}</span>
                <span className={styles.loc}>
                  {match.home
                    ? `Heim${match.venue ? ` · ${match.venue}` : ""}`
                    : "Auswärts"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {featured && (
        <div className={styles.cardWrap}>
          <MatchCard match={featured} />
        </div>
      )}
    </section>
  );
}
