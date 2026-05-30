"use client";

import { useState, useMemo } from "react";
import type { Match } from "@/types/match";
import type { Team } from "@/types/team";
import { groupMatchesByDay } from "@/helpers";
import SpielplanFilter from "./SpielplanFilter";
import SpielplanList from "./SpielplanList";
import styles from "./SpielplanClient.module.css";

export type SpielplanClientProps = {
  matches: Match[];
  teams: Team[];
};

export default function SpielplanClient({
  matches,
  teams,
}: SpielplanClientProps) {
  const [selectedTeamSlug, setSelectedTeamSlug] = useState<string | null>(null);

  // Gefilterte Matches (memoized — nur neu berechnen, wenn sich Filter ändert)
  const filteredMatches = useMemo(() => {
    if (!selectedTeamSlug) return matches;
    return matches.filter((m) => m.teamSlug === selectedTeamSlug);
  }, [matches, selectedTeamSlug]);

  const groups = useMemo(
    () => groupMatchesByDay(filteredMatches),
    [filteredMatches],
  );

  return (
    <section className={styles.section}>
      <SpielplanFilter
        teams={teams}
        selectedTeamSlug={selectedTeamSlug}
        onChange={setSelectedTeamSlug}
      />
      <SpielplanList groups={groups} />
    </section>
  );
}
