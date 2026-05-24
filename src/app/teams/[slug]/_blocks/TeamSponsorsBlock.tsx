import Image from "next/image";
import type { Team } from "@/types/team";
import { getSponsorsByTeam } from "@/helpers";
import styles from "./TeamSponsorsBlock.module.css";

export type TeamSponsorsBlockProps = {
  team: Team;
};

export default function TeamSponsorsBlock({ team }: TeamSponsorsBlockProps) {
  const sponsors = getSponsorsByTeam(team.slug);

  if (sponsors.length === 0) return null;

  return (
    <section className={styles.block}>
      <h2 className={styles.heading}>Team-Sponsoren</h2>

      <ul className={styles.grid}>
        {sponsors.map((sponsor) => {
          const inner = (
            <>
              <Image
                src={sponsor.logoSrc}
                alt={sponsor.name}
                width={160}
                height={80}
                className={styles.logo}
              />
            </>
          );
          return (
            <li key={sponsor.slug} className={styles.item}>
              {sponsor.websiteUrl ? (
                <a
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={sponsor.name}
                >
                  {inner}
                </a>
              ) : (
                <div className={styles.link}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
