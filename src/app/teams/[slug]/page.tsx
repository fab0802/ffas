import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { getTeams } from "@/helpers";
import styles from "./page.module.css";

import TeamPhotoBlock from "./_blocks/TeamPhotoBlock";
import TeamTrainingsBlock from "./_blocks/TeamTrainingsBlock";
import TeamTrainersBlock from "./_blocks/TeamTrainersBlock";
import TeamUpcomingBlock from "./_blocks/TeamUpcomingBlock";
import TeamResultsBlock from "./_blocks/TeamResultsBlock";
import TeamSponsorsBlock from "./_blocks/TeamSponsorsBlock";
import TeamNavigationBlock from "./_blocks/TeamNavigationBlock";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getTeams().map((team) => ({ slug: team.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeams().find((t) => t.slug === slug);
  if (!team) return {};
  return {
    title: `${team.name} ${team.emphasis} — FFAS`,
    description: team.description,
  };
}

export default async function TeamDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const team = getTeams().find((t) => t.slug === slug);

  if (!team) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={team.ageRange}
        title={
          <>
            {team.name} <em>{team.emphasis}</em>
          </>
        }
        lead={team.description}
      />

      <div className={styles.page}>
        <Reveal>
          <TeamPhotoBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamTrainingsBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamTrainersBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamUpcomingBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamResultsBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamSponsorsBlock team={team} />
        </Reveal>
        <Reveal>
          <TeamNavigationBlock currentSlug={team.slug} />
        </Reveal>
      </div>
    </>
  );
}
