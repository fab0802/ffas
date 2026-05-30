import type { MatchDayGroup } from "@/types/matchDayGroup";
import { formatDayHeader } from "@/helpers";
import SpielplanMatchCard from "./SpielplanMatchCard";
import styles from "./SpielplanList.module.css";

export type SpielplanListProps = {
  groups: MatchDayGroup[];
};

export default function SpielplanList({ groups }: SpielplanListProps) {
  if (groups.length === 0) {
    return (
      <p className={styles.empty}>
        Keine kommenden Spiele für die aktuelle Auswahl.
      </p>
    );
  }

  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <div key={group.date} className={styles.dayGroup}>
          <h3 className={styles.dayHeader}>{formatDayHeader(group.date)}</h3>
          <div className={styles.grid}>
            {group.matches.map((match) => (
              <SpielplanMatchCard
                key={
                  match.matchNumber ??
                  `${match.teamSlug}-${match.date}-${match.time ?? ""}`
                }
                match={match}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
