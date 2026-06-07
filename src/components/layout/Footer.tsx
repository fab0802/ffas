import Image from "next/image";
import Link from "next/link";
import { getClubs, getSponsorsByTier } from "@/helpers";
import styles from "./Footer.module.css";

export default async function Footer() {
  const clubs = await getClubs();
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
              alt="Frauenfussball Albis Süd"
              width={56}
              height={56}
              className={styles.logo}
            />
            <div className={styles.wordmark}>
              Frauenfussball
              <br />
              <span className={styles.accent}>Albis</span> Süd
            </div>
            <address className={styles.address}>info@ffas.ch</address>
          </div>

          {/* Gruppierung */}
          <nav className={styles.column} aria-labelledby="footer-ffas">
            <h2 id="footer-ffas" className={styles.heading}>
              Gruppierung
            </h2>
            <ul className={styles.list}>
              <li>
                <Link href="/ffas">FFAS</Link>
              </li>
              <li>
                <Link href="/teams">Teams</Link>
              </li>
              <li>
                <Link href="/spielplan">Spielplan</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
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
            <ul className={styles.clubList}>
              {clubs.map((club) => {
                const inner = (
                  <>
                    <Image
                      src={club.logo}
                      alt=""
                      width={28}
                      height={28}
                      className={styles.clubLogo}
                    />
                    <span>{club.name}</span>
                  </>
                );
                return (
                  <li key={club.slug} className={styles.clubItem}>
                    {club.website ? (
                      <a
                        href={club.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.clubLink}
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className={styles.clubLink}>{inner}</span>
                    )}
                  </li>
                );
              })}
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
