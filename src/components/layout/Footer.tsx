import Image from "next/image";
import Link from "next/link";
import { clubs } from "@/data/clubs";
import { sponsors } from "@/data/sponsors";
import styles from "./Footer.module.css";

export default function Footer() {
  const hauptpartner = sponsors.filter((s) => s.tier === "haupt");
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

          {/* Verein */}
          <nav className={styles.column} aria-labelledby="footer-verein">
            <h2 id="footer-verein" className={styles.heading}>
              Verein
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

          {/* Trägervereine */}
          <nav className={styles.column} aria-labelledby="footer-clubs">
            <h2 id="footer-clubs" className={styles.heading}>
              Trägervereine
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
        </div>

        {/* ═══ SPONSOREN-STREIFEN ═══ */}
        <div className={styles.sponsors}>
          <span className={styles.sponsorsLabel}>Hauptpartner</span>
          <div className={styles.sponsorsList}>
            {hauptpartner.map((sponsor) => {
              const content = (
                <>
                  <Image
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    width={32}
                    height={32}
                    className={styles.sponsorLogo}
                  />
                  <div className={styles.sponsorText}>
                    <span className={styles.sponsorName}>{sponsor.name}</span>
                    {sponsor.description && (
                      <span className={styles.sponsorTagline}>
                        {sponsor.description}
                      </span>
                    )}
                  </div>
                </>
              );

              return sponsor.websiteUrl ? (
                <a
                  key={sponsor.slug}
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sponsorCard}
                >
                  {content}
                </a>
              ) : (
                <div key={sponsor.slug} className={styles.sponsorCard}>
                  {content}
                </div>
              );
            })}
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
