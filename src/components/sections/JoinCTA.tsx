import Link from "next/link";
import styles from "./JoinCTA.module.css";

export default function JoinCTA() {
  return (
    <section
      id="join"
      className={styles.joinCta}
      aria-labelledby="join-heading"
    >
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Mitmachen</p>
        <h2 id="join-heading" className={styles.heading}>
          Lust auf Fussball?
          <br />
          <em>
            Komm <span className={styles.outlined}>vorbei.</span>
          </em>
        </h2>
        <p className={styles.lead}>
          Egal, ob du als Kind zum ersten Mal in Stollen stehst oder als Aktive
          eine neue sportliche Heimat suchst — bei uns gibt es ein Team für
          dich. Komm zu einem Schnuppertraining, lerne die Trainerinnen kennen,
          spiel mit, und entscheide danach in Ruhe.
        </p>

        <div className={styles.actions}>
          <Link href="/mitspielen" className={styles.primary}>
            Schnuppertraining buchen
          </Link>
          <Link href="/kontakt" className={styles.secondary}>
            Fragen? Schreib uns
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
