import styles from "./Ticker.module.css";
import { getTickerMatches } from "@/helpers";

export default async function Ticker() {
  const items = await getTickerMatches();
  if (items.length === 0) return null;

  const doubled = [...items, ...items];

  return (
    <section
      className={styles.ticker}
      aria-label="Nächste Spiele der FFAS-Teams"
    >
      <div className={styles.track}>
        {doubled.map((item, i) => {
          const isDuplicate = i >= items.length;

          // FFAS-Team: Name in Standardfarbe, emphasis pink
          const ffasTeam = (
            <span className={styles.ffasTeam}>
              {item.teamName}
              {item.teamEmphasis && (
                <>
                  {" "}
                  <span className={styles.emphasis}>{item.teamEmphasis}</span>
                </>
              )}
            </span>
          );

          return (
            <div
              key={i}
              className={`${styles.item} ${isDuplicate ? styles.duplicate : ""}`}
              aria-hidden={isDuplicate || undefined}
            >
              <span className={styles.date}>{item.date}</span>
              {item.time && <span className={styles.time}>{item.time}</span>}

              <span className={styles.matchup}>
                {item.isTournament ? (
                  <>
                    {ffasTeam}
                    <span className={styles.vs}>
                      {" · "}
                      {item.tournamentTitle ?? "Turnier"}
                    </span>
                  </>
                ) : item.opponent ? (
                  item.home ? (
                    <>
                      {ffasTeam}
                      <span className={styles.vs}> – </span>
                      <span className={styles.opponent}>{item.opponent}</span>
                    </>
                  ) : (
                    <>
                      <span className={styles.opponent}>{item.opponent}</span>
                      <span className={styles.vs}> – </span>
                      {ffasTeam}
                    </>
                  )
                ) : (
                  ffasTeam
                )}
              </span>

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
