import styles from "./StatutenBlock.module.css";

export default function StatutenBlock() {
  return (
    <section
      id="statuten"
      className={styles.block}
      aria-labelledby="statuten-title"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>05 — Statuten</p>
        <h2 id="statuten-title" className={styles.title}>
          Reglement & <em>Trägerschaft</em>
        </h2>
        <p className={styles.lead}>
          FFAS ist keine eigenständige Organisation, sondern eine Trägerschaft
          fünf bestehender Vereine. Die Zusammenarbeit ist in einer gemeinsamen
          Vereinbarung festgehalten.
        </p>
      </header>

      <a href="/statuten.pdf" download className={styles.download}>
        <span className={styles.downloadIcon} aria-hidden="true">
          ↓
        </span>
        <span className={styles.downloadInfo}>
          <span className={styles.downloadLabel}>PDF</span>
          <span className={styles.downloadTitle}>
            Trägerschaftsvereinbarung FFAS
          </span>
        </span>
      </a>
    </section>
  );
}
