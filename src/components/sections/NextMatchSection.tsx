import Link from "next/link";
import MatchCard from "@/components/cards/MatchCard";
import {
  getFeaturedMatch,
  getMatchesInNextDays,
  groupMatchesByDay,
  limitGroupsForHomepage,
  getTeamForMatch,
  getMatchTeamCrestLabel,
  getShortVenueName,
  formatDayHeader,
  getMatchStatusLabel,
} from "@/helpers";
import styles from "./NextMatchSection.module.css";

const NEXT_DAYS_WINDOW = 7;

export default async function NextMatchSection() {
  const featured = await getFeaturedMatch();
  const allUpcoming = await getMatchesInNextDays(NEXT_DAYS_WINDOW, featured);

  const allGroups = groupMatchesByDay(allUpcoming);
  const groups = limitGroupsForHomepage(allGroups);
  const shownCount = groups.reduce((n, g) => n + g.matches.length, 0);
  const totalCount = allUpcoming.length;
  const hasMore = totalCount > shownCount;

  return (
    <section className={styles.section} id="spielplan">
      <div className={styles.text}>
        <div className={styles.eyebrow}>Nächste Spiele</div>
        <h2 className={styles.title}>
          Der <em>Spielplan</em>
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
                    const statusLabel = getMatchStatusLabel(match);
                    const isCancelled = match.status === "Nullwertung";

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
                        className={`${styles.row} ${isCancelled ? styles.cancelled : ""}`}
                      >
                        <span className={styles.time}>{match.time ?? ""}</span>
                        <span className={styles.opp}>
                          {middleLabel}
                          {statusLabel && (
                            <span className={styles.statusBadge}>
                              {statusLabel}
                            </span>
                          )}
                        </span>{" "}
                        <span className={styles.loc}>{venue ?? ""}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {hasMore && (
              <Link href="/spielplan" className={styles.moreLink}>
                Alle {totalCount} Spiele →
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
