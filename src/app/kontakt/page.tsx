import { getAllFunctionaries, getTrainersForTeam, getTeams } from "@/helpers";
import PageHeader from "@/components/layout/PageHeader";
import ContactGeneralBlock from "@/components/sections/ContactGeneralBlock";
import ContactPersonGroup from "@/components/sections/ContactPersonGroup";
import styles from "./kontakt.module.css";

export const metadata = {
  title: "Kontakt · FFAS",
  description:
    "Ansprechpartner:innen der FFAS — Leitung, Trainerteams und allgemeine Kontaktdaten.",
};

export default async function KontaktPage() {
  const functionaries = getAllFunctionaries();
  const teams = await getTeams();

  // Pro Team die Trainer:innen sammeln
  const teamsWithTrainers = teams
    .map((team) => ({
      team,
      trainers: getTrainersForTeam(team.slug),
    }))
    .filter((t) => t.trainers.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title={
          <>
            So erreichst du <em>uns</em>
          </>
        }
      />

      <div className={styles.sections}>
        <ContactGeneralBlock />

        {functionaries.length > 0 && (
          <ContactPersonGroup
            id="leitungsteam"
            heading="Leitungsteam"
            persons={functionaries.map((f) => ({
              person: f,
              roleLabel: f.role,
            }))}
          />
        )}

        {teamsWithTrainers.map(({ team, trainers }) => (
          <ContactPersonGroup
            key={team.slug}
            heading={team.name + " " + team.emphasis}
            subheading="Trainerteam"
            persons={trainers.map((t) => ({
              person: t,
              roleLabel: t.role,
            }))}
          />
        ))}
      </div>
    </>
  );
}
