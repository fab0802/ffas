"use client";

import type { Team } from "@/types/team";
import { getMatchTeamCrestLabel } from "@/helpers";
import styles from "./SpielplanFilter.module.css";

export type SpielplanFilterProps = {
  teams: Team[];
  selectedTeamSlug: string | null;
  onChange: (slug: string | null) => void;
};

export default function SpielplanFilter({
  teams,
  selectedTeamSlug,
  onChange,
}: SpielplanFilterProps) {
  return (
    <nav className={styles.tabs} aria-label="Team-Filter">
      <button
        type="button"
        className={`${styles.tab} ${selectedTeamSlug === null ? styles.active : ""}`}
        onClick={() => onChange(null)}
      >
        Alle Teams
      </button>
      {teams.map((team) => (
        <button
          key={team.slug}
          type="button"
          className={`${styles.tab} ${selectedTeamSlug === team.slug ? styles.active : ""}`}
          onClick={() => onChange(team.slug)}
        >
          {getMatchTeamCrestLabel(team)}
        </button>
      ))}
    </nav>
  );
}
