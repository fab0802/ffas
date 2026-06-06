"use client";

import { useState, useMemo } from "react";
import type { FfasEvent } from "@/types/ffasEvent";
import type { FfasEventCategory } from "@/types/ffasEventCategory";
import type { Team } from "@/types/team";
import EventsFilter from "./EventsFilter";
import EventsList from "./EventsList";
import styles from "./EventsClient.module.css";

export type EventsClientProps = {
  events: FfasEvent[];
  categories: FfasEventCategory[];
  teams: Team[];
};

export default function EventsClient({
  events,
  categories,
  teams,
}: EventsClientProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<FfasEventCategory | null>(null);
  const [selectedTeamSlug, setSelectedTeamSlug] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Kategorie-Filter
      if (selectedCategory && event.category !== selectedCategory) {
        return false;
      }
      // Team-Filter: vereinsweite Events bleiben immer dabei,
      // teamspezifische nur wenn das Team referenziert wird
      if (selectedTeamSlug) {
        const isClubWide = !event.teamSlugs || event.teamSlugs.length === 0;
        const isForThisTeam = event.teamSlugs?.includes(selectedTeamSlug);
        if (!isClubWide && !isForThisTeam) return false;
      }
      return true;
    });
  }, [events, selectedCategory, selectedTeamSlug]);

  return (
    <section className={styles.section}>
      <EventsFilter
        categories={categories}
        teams={teams}
        selectedCategory={selectedCategory}
        selectedTeamSlug={selectedTeamSlug}
        onCategoryChange={setSelectedCategory}
        onTeamChange={setSelectedTeamSlug}
      />
      <EventsList events={filteredEvents} />
    </section>
  );
}
