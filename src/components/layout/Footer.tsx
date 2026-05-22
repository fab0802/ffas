import Image from "next/image";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { getSponsorsByTier } from "@/helpers";
import styles from "./Footer.module.css";

export default function Footer() {
  const hauptpartner = getSponsorsByTier("haupt");
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ═══ TOP: 3 Spalten ═══ */}
        <div className={styles.columns}>
          {/* Marke */}
          <div className={styles.brand}>
            <Image
              src="/ffas-logo.svg"
              alt="FFAS"
              width={56}
              height={56}
              className={styles.logo}
            />
            <div className={styles.wordmark}>
              Frauenfussball
              <br />
              <span className={styles.accent}>Albis</span> Süd
            </div>
            <address className={styles.address}>
              Postfach 47 · 8907 Wettswil am Albis
              <br />
              Sportplatz Erlenmoos · 8906 Bonstetten
            </address>
          </div>

          {/* Gruppierung */}
          <nav className={styles.column} aria-labelledby="footer-verein">
            <h2 id="footer-verein" className={styles.heading}>
              Gruppierung
            </h2>
            <ul className={styles.list}>
              <li>
                <Link href="/ueber-uns">Über uns</Link>
              </li>
              <li>
                <Link href="/teams">Teams</Link>
              </li>
              <li>
                <Link href="/trainerinnen">Trainerinnen</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>

          {/* Partnervereine */}
          <nav className={styles.column} aria-labelledby="footer-clubs">
            <h2 id="footer-clubs" className={styles.heading}>
              Partnervereine
            </h2>
            <ul className={styles.list}>
              {clubs.map((club) => (
                <li key={club.slug}>
                  {club.website ? (
                    <a
                      href={club.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {club.name}
                    </a>
                  ) : (
                    <span>{club.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Hauptpartner */}
          <div className={styles.column}>
            <h2 id="footer-partners" className={styles.heading}>
              Hauptpartner
            </h2>
            <ul
              className={styles.sponsorList}
              aria-labelledby="footer-partners"
            >
              {hauptpartner.map((sponsor) => (
                <li key={sponsor.slug}>
                  {sponsor.websiteUrl ? (
                    <a
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sponsorLink}
                      aria-label={sponsor.name}
                    >
                      <Image
                        src={sponsor.logoSrc}
                        alt={sponsor.name}
                        width={140}
                        height={36}
                        className={styles.sponsorLogo}
                      />
                    </a>
                  ) : (
                    <Image
                      src={sponsor.logoSrc}
                      alt={sponsor.name}
                      width={140}
                      height={36}
                      className={styles.sponsorLogo}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══ BOTTOM-BAR ═══ */}
        <div className={styles.bottom}>
          <span>© {year} Frauenfussball Albis Süd</span>
          <div className={styles.legalLinks}>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
