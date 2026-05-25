import styles from "./ManifestBlock.module.css";

export default function ManifestBlock() {
  return (
    <section
      id="manifest"
      className={styles.block}
      aria-labelledby="manifest-title"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>01 — Manifest</p>
        <h2 id="manifest-title" className={styles.title}>
          Eine <em>Spielfläche</em>, fünf Vereine
        </h2>
      </header>

      <div className={styles.body}>
        <p className={styles.lead}>
          FFAS ist keine Konkurrenz, sondern ein Zusammenschluss. Fünf
          Säuliämtler Fussballvereine bündeln ihren Frauen- und Mädchenfussball
          auf einer gemeinsamen Plattform — damit jedes Mädchen im Albis-Süd ein
          seiner Nähe findet, ohne dass ein einzelner Klub das alleine stemmen
          muss.
        </p>

        <p>
          Die Trägervereine bleiben eigenständig. FFAS ist die Klammer:
          gemeinsame Trainings- und Spielstrukturen, abgestimmte Altersklassen,
          ein einheitlicher Auftritt nach aussen.
        </p>

        <blockquote className={styles.quote}>
          Frauenfussball wächst dort, wo Vereine zusammenrücken — nicht dort, wo
          sie sich abgrenzen.
        </blockquote>

        <p>
          Wofür wir stehen: Zugang ohne Hürden. Sportliche Qualität in jeder
          Altersklasse. Regionale Verwurzelung bei den Trägervereinen. Und
          Sichtbarkeit für ein Spiel, das im Säuliamt zu lange im Hintergrund
          stand.
        </p>
      </div>
    </section>
  );
}
