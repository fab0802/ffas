import Link from "next/link";
import MatchCard from "@/components/cards/MatchCard";
import {
  getFeaturedMatch,
  getMatchesInNextDays,
  groupMatchesByDay,
  getTeamForMatch,
  getMatchTeamCrestLabel,
  getShortVenueName,
  formatDayHeader,
} from "@/helpers";
import styles from "./NextMatchSection.module.css";

const NEXT_DAYS_WINDOW = 7;
const MAX_MATCHES_HOMEPAGE = 5;

export default async function NextMatchSection() {
  const featured = await getFeaturedMatch();
  const allUpcoming = await getMatchesInNextDays(NEXT_DAYS_WINDOW, featured);

  const limited = allUpcoming.slice(0, MAX_MATCHES_HOMEPAGE);
  const groups = groupMatchesByDay(limited);
  const hasMore = allUpcoming.length > MAX_MATCHES_HOMEPAGE;

  return (
    <section className={styles.section} id="spielplan">
      <div className={styles.text}>
        <div className={styles.eyebrow}>Nächste Spiele</div>
        <h2 className={styles.title}>
          Diese <em>Woche</em>
        </h2>

        {groups.length > 0 ? (
          <div className={styles.groups}>
            {groups.map((group) => (
              <div key={group.date} className={styles.dayGroup}>
                <div className={styles.dayHeader}>
                  {formatDayHeader(group.date)}
                </div>
                <ul className={styles.list}>
                  {group.matches.map((match) => {
                    const team = getTeamForMatch(match);
                    const teamLabel = team ? getMatchTeamCrestLabel(team) : "";
                    const venue = getShortVenueName(match);

                    const middleLabel =
                      match.kind === "Turnier"
                        ? `${teamLabel} · ${match.tournamentTitle ?? "Turnier"}`
                        : match.opponent
                          ? `${teamLabel} · ${match.opponent}`
                          : teamLabel;

                    return (
                      <li
                        key={
                          match.matchNumber ??
                          `${match.teamSlug}-${match.date}-${match.time ?? ""}`
                        }
                        className={styles.row}
                      >
                        <span className={styles.time}>{match.time ?? ""}</span>
                        <span className={styles.opp}>{middleLabel}</span>
                        <span className={styles.loc}>{venue ?? ""}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {hasMore && (
              <Link href="/spielplan" className={styles.moreLink}>
                Alle Spiele →
              </Link>
            )}
          </div>
        ) : (
          <p className={styles.lead}>
            Diese Woche stehen keine Spiele an. Schau bald wieder vorbei.
          </p>
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
