import MatchCard from "@/components/cards/MatchCard";
import {
  getFeaturedMatch,
  getMatchesInNextDays,
  getTeamForMatch,
  getMatchTeamCrestLabel,
  formatDateWithWeekday,
  getMatchVenueName,
} from "@/helpers";
import styles from "./NextMatchSection.module.css";

const NEXT_DAYS_WINDOW = 7;

export default async function NextMatchSection() {
  const featured = await getFeaturedMatch();
  const upcoming = await getMatchesInNextDays(NEXT_DAYS_WINDOW, featured);

  return (
    <section className={styles.section} id="spielplan">
      <div className={styles.text}>
        {upcoming.length > 0 && (
          <ul className={styles.list}>
            {upcoming.map((match) => {
              const venueName = getMatchVenueName(match);
              const team = getTeamForMatch(match);
              const teamDisplay = team ? getMatchTeamCrestLabel(team) : "";

              // Datum + Zeit kombiniert
              const dateLine = match.time
                ? `${formatDateWithWeekday(match.date)} · ${match.time}`
                : formatDateWithWeekday(match.date);

              // Mittelspalte: FFAS-Team · Gegner (oder Turnier-Titel)
              const middleLabel = (() => {
                if (match.kind === "Turnier") {
                  return `${teamDisplay} · ${match.tournamentTitle ?? "Turnier"}`;
                }
                return match.opponent
                  ? `${teamDisplay} · ${match.opponent}`
                  : teamDisplay;
              })();

              // Ort-Spalte: nur noch Spielort (Heim/Auswärts implizit)
              const locLine = venueName ?? (match.home ? "Heim" : "");

              return (
                <li
                  key={
                    match.matchNumber ??
                    `${match.teamSlug}-${match.date}-${match.time ?? ""}`
                  }
                  className={styles.row}
                >
                  <span className={styles.date}>{dateLine}</span>
                  <span className={styles.opp}>{middleLabel}</span>
                  <span className={styles.loc}>{locLine}</span>
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
