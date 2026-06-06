import { getUpcomingFfasEvents } from "@/helpers";
import { teams } from "@/data/teams";
import PageHeader from "@/components/layout/PageHeader";
import EventsClient from "./_blocks/EventsClient";

export const metadata = {
  title: "Events · FFAS",
  description: "Vereinstermine, Feste, Trainingslager und mehr.",
};

export default async function EventsPage() {
  const events = await getUpcomingFfasEvents();

  // Kategorien mit mindestens einem künftigen Event
  const categoriesWithEvents = Array.from(
    new Set(events.map((e) => e.category)),
  );

  // Teams, die in mindestens einem Event explizit vorkommen
  const teamSlugsInEvents = new Set<string>();
  for (const event of events) {
    event.teamSlugs?.forEach((slug) => teamSlugsInEvents.add(slug));
  }
  const teamsWithEvents = teams.filter((team) =>
    teamSlugsInEvents.has(team.slug),
  );

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            Kommende <em>Termine</em>
          </>
        }
      />
      <EventsClient
        events={events}
        categories={categoriesWithEvents}
        teams={teamsWithEvents}
      />
    </>
  );
}
