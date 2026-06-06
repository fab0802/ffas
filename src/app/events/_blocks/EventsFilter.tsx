"use client";

import type { FfasEventCategory } from "@/types/ffasEventCategory";
import type { Team } from "@/types/team";
import { getMatchTeamCrestLabel, getCategoryLabel } from "@/helpers";
import styles from "./EventsFilter.module.css";

export type EventsFilterProps = {
  categories: FfasEventCategory[];
  teams: Team[];
  selectedCategory: FfasEventCategory | null;
  selectedTeamSlug: string | null;
  onCategoryChange: (category: FfasEventCategory | null) => void;
  onTeamChange: (slug: string | null) => void;
};

export default function EventsFilter({
  categories,
  teams,
  selectedCategory,
  selectedTeamSlug,
  onCategoryChange,
  onTeamChange,
}: EventsFilterProps) {
  return (
    <div className={styles.filters}>
      {categories.length > 0 && (
        <div className={styles.row}>
          <div className={styles.label}>Kategorie</div>
          <nav className={styles.tabs} aria-label="Kategorie-Filter">
            <button
              type="button"
              className={`${styles.tab} ${selectedCategory === null ? styles.active : ""}`}
              onClick={() => onCategoryChange(null)}
            >
              Alle
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.tab} ${selectedCategory === category ? styles.active : ""}`}
                onClick={() => onCategoryChange(category)}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </nav>
        </div>
      )}

      {teams.length > 0 && (
        <div className={styles.row}>
          <div className={styles.label}>Team</div>
          <nav className={styles.tabs} aria-label="Team-Filter">
            <button
              type="button"
              className={`${styles.tab} ${selectedTeamSlug === null ? styles.active : ""}`}
              onClick={() => onTeamChange(null)}
            >
              Alle Teams
            </button>
            {teams.map((team) => (
              <button
                key={team.slug}
                type="button"
                className={`${styles.tab} ${selectedTeamSlug === team.slug ? styles.active : ""}`}
                onClick={() => onTeamChange(team.slug)}
              >
                {getMatchTeamCrestLabel(team)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
