import { getAllUpcomingMatches } from "@/helpers";
import { teams } from "@/data/teams";
import PageHeader from "@/components/layout/PageHeader";
import SpielplanClient from "./_blocks/SpielplanClient";

export const metadata = {
  title: "Spielplan · FFAS",
  description: "Alle kommenden Spiele und Turniere der FFAS-Mannschaften.",
};

export default async function SpielplanPage() {
  const matches = await getAllUpcomingMatches();

  // Welche Teams haben überhaupt kommende Spiele? Nur die zeigen wir als Tabs.
  const teamsWithMatches = teams.filter((team) =>
    matches.some((m) => m.teamSlug === team.slug),
  );

  return (
    <>
      <PageHeader
        eyebrow="Spielplan"
        title={
          <>
            Kommende <em>Spiele</em>
          </>
        }
      />
      <SpielplanClient matches={matches} teams={teamsWithMatches} />
    </>
  );
}
