import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image
            src="/ffas-logo.svg"
            alt="FFAS"
            width={80}
            height={80}
            className={styles.logo}
          />
          <h4>
            Frauenfussball
            <br />
            <em style={{ color: "var(--pink)", fontStyle: "italic" }}>
              Albis
            </em>{" "}
            Süd
          </h4>
          <p>
            Postfach 47 · 8907 Wettswil am Albis
            <br />
            Sportplatz Erlenmoos · 8906 Bonstetten
          </p>
        </div>

        <div className={styles.col}>
          <h5>Verein</h5>
          <ul>
            <li>
              <a href="#manifest">Über uns</a>
            </li>
            <li>
              <a href="#teams">Teams</a>
            </li>
            <li>
              <a href="#">Trainerinnen</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Verein</h5>
          <ul>
            <li>
              <a href="#manifest">Über uns</a>
            </li>
            <li>
              <a href="#teams">Teams</a>
            </li>
            <li>
              <a href="#">Trainerinnen</a>
            </li>
          </ul>
        </div>

        {/* … weitere Spalten */}
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Frauenfussball Albis Süd · Alle Rechte vorbehalten</span>
        <span>
          <a href="/impressum">Impressum</a> ·{" "}
          <a href="/datenschutz">Datenschutz</a>
        </span>
      </div>
    </footer>
  );
}
