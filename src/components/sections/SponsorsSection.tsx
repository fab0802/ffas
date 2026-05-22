import { getSponsorsByTier } from "@/helpers";
import SponsorCard from "@/components/cards/SponsorCard";
import styles from "./SponsorsSection.module.css";

export default function SponsorsSection() {
  const haupt = getSponsorsByTier("haupt");
  const premium = getSponsorsByTier("premium");
  const ausruester = getSponsorsByTier("ausruester");
  const supporting = [...premium, ...ausruester];

  return (
    <section className={styles.section}>
      <header className={styles.header}>{/* ... unverändert ... */}</header>

      {haupt.length > 0 && (
        <div className={styles.hauptWrapper}>
          <p className={styles.hauptLabel}>
            <em>Hauptpartner</em>
          </p>
          <div className={styles.hauptRow}>
            {haupt.map((s) => (
              <SponsorCard key={s.slug} sponsor={s} variant="haupt" />
            ))}
          </div>
        </div>
      )}

      {supporting.length > 0 && (
        <div className={styles.supportingGrid}>
          {supporting.map((s) => (
            <SponsorCard key={s.slug} sponsor={s} />
          ))}
        </div>
      )}
    </section>
  );
}
