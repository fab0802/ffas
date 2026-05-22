import MatchCard from "@/components/cards/MatchCard";
import {
  getNextMatch,
  getUpcomingMatches,
  formatDateShort,
  getMatchVenueName,
} from "@/helpers";
import styles from "./NextMatchSection.module.css";

export default async function NextMatchSection() {
  const featured = await getNextMatch();
  const upcoming = featured
    ? await getUpcomingMatches(4, featured.date, featured.teamSlug)
    : await getUpcomingMatches(4);

  return (
    <section className={styles.section} id="spielplan">
      <div className={styles.text}>
        {upcoming.length > 0 && (
          <ul className={styles.list}>
            {upcoming.map((match) => {
              const venueName = getMatchVenueName(match);
              return (
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
                      ? `Heim${venueName ? ` · ${venueName}` : ""}`
                      : "Auswärts"}
                  </span>
                </li>
              );
            })}
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
