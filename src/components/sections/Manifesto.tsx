import { values } from "@/data/values";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
  return (
    <section className={styles.manifesto} aria-labelledby="manifesto-heading">
      <div className={styles.grid}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Manifest</p>
          <h2 id="manifesto-heading" className={styles.heading}>
            Wir sind kein Anhängsel.
            <br />
            Wir sind <em>der</em> Frauenfussball
            <br />
            <em>im Säuliamt.</em>
          </h2>
          <div className={styles.body}>
            <p>
              FF Albis Süd ist kein neunter Verein im Tal. Wir sind die Klammer
              um fünf, die gemerkt haben, dass Mädchen- und Frauenfussball zu
              wichtig geworden ist, um ihn in jedem Dorf für sich allein zu
              organisieren.
            </p>
            <p>
              Wir bündeln Trainings, Trainer:innen, Plätze und Wissen – damit
              jede, die im Säuliamt Fussball spielen will, ein Team findet. Vom
              ersten Pass bis zur Aktivmannschaft. Aus Hausen, aus
              Mettmenstetten, aus Hedingen, aus Wettswil-Bonstetten und aus
              Uitikon. Eine Idee, fünf Vereine, ein Spielbetrieb.
            </p>
            <p>Was uns trägt, steht rechts.</p>
          </div>
        </div>

        <ol className={styles.values}>
          {values.map((value) => (
            <li key={value.number} className={styles.value}>
              <span className={styles.valueNumber} aria-hidden="true">
                {String(value.number).padStart(2, "0")}
              </span>
              <div className={styles.valueBody}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
