import { getClubs, getLocationBySlug } from "@/helpers";
import styles from "./TraegervereineBlock.module.css";

export default async function TraegervereineBlock() {
  const clubs = await getClubs();

  return (
    <section
      id="traegervereine"
      className={styles.block}
      aria-labelledby="traegervereine-title"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>02 — Trägervereine</p>
        <h2 id="traegervereine-title" className={styles.title}>
          Fünf Vereine, <em>eine Plattform</em>
        </h2>
        <p className={styles.lead}>
          Die FFAS wird getragen von fünf eigenständigen Fussballvereinen aus
          Säuliamt und Umgebung. Jeder Club bringt seine Heimstätte, seine
          Strukturen und seine Geschichte ein.
        </p>
      </header>

      <ol className={styles.list}>
        {await Promise.all(
          clubs.map(async (club, i) => {
            const homeGround = club.homeGroundSlugs[0]
              ? await getLocationBySlug(club.homeGroundSlugs[0])
              : null;

            return (
              <li key={club.slug} className={styles.item}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.content}>
                  <h3 className={styles.name}>{club.name}</h3>
                  {homeGround && (
                    <p className={styles.meta}>{homeGround.name}</p>
                  )}
                </div>
              </li>
            );
          }),
        )}
      </ol>
    </section>
  );
}
