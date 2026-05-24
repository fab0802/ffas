import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import TeamPhotoCard from "@/components/cards/TeamPhotoCard";
import { getTeams, getTeamsCountWord } from "@/helpers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Teams — FFAS",
  description: "Aktive und Juniorinnen-Teams des Frauenfussball Albis Süd.",
};

export default function TeamsPage() {
  const teams = getTeams();
  const aktive = teams.filter((t) => t.name === "Aktive");
  const juniorinnen = teams.filter((t) => t.name === "Juniorinnen");
  const totalWord = getTeamsCountWord();

  return (
    <>
      <PageHeader
        eyebrow="Teams"
        title={
          <>
            {totalWord} <em>Teams</em>.
          </>
        }
        lead="Von den Kleinsten bis zur Aktiv-Mannschaft. Fünf Vereine, ein Trainingsplan."
      />

      <div className={styles.page}>
        {aktive.length > 0 && (
          <section className={styles.aktiveSection}>
            <div className={styles.aktiveGrid}>
              {aktive.map((team) => (
                <TeamPhotoCard key={team.slug} team={team} />
              ))}
            </div>
          </section>
        )}

        {juniorinnen.length > 0 && (
          <section className={styles.juniorinnenSection}>
            <div className={styles.juniorinnenGrid}>
              {juniorinnen.map((team) => (
                <TeamPhotoCard key={team.slug} team={team} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
