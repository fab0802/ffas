import styles from "./GeschichteBlock.module.css";

const timeline = [
  {
    year: "2023",
    event:
      "Erste Gespräche zwischen den Trägervereinen über eine Bündelung des Frauen- und Mädchenfussballs im Säuliamt.",
  },
  {
    year: "2024",
    event:
      "Gründung der FFAS — Frauenfussball Albis Süd — als Vereinigung von fünf eigenständigen Trägervereinen.",
  },
  {
    year: "2025",
    event:
      "Erste Saison unter gemeinsamem Auftritt. Aktive und Juniorinnen-Teams nehmen den Spielbetrieb auf.",
  },
  {
    year: "2026",
    event:
      "Ausbau der Strukturen und gemeinsame Sichtbarkeit auf einer Plattform.",
  },
];

export default function GeschichteBlock() {
  return (
    <section
      id="geschichte"
      className={styles.block}
      aria-labelledby="geschichte-title"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>04 — Geschichte</p>
        <h2 id="geschichte-title" className={styles.title}>
          Wie es <em>begann</em>
        </h2>
      </header>

      <ol className={styles.timeline}>
        {timeline.map((entry) => (
          <li key={entry.year} className={styles.entry}>
            <div className={styles.year}>{entry.year}</div>
            <div className={styles.event}>{entry.event}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
