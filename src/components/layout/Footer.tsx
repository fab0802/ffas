import Image from "next/image";
import Link from "next/link";
import { getClubs } from "@/helpers";
import { contactInfo } from "@/data/contact";
import { mainNav } from "@/data/navigation";
import styles from "./Footer.module.css";

export default async function Footer() {
  const clubs = await getClubs();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ═══ BRAND-KOPFZEILE ═══ */}
        <div className={styles.brandRow}>
          <div className={styles.brandLeft}>
            <Image
              src="/ffas-logo.svg"
              alt="Frauenfussball Albis Süd"
              width={56}
              height={56}
              className={styles.logo}
            />
            <div className={styles.wordmark}>
              Frauenfussball <span className={styles.accent}>Albis</span> Süd
            </div>
          </div>

          <div className={styles.social}>
            {contactInfo.social.map((channel) => (
              <a
                key={channel.label}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {channel.label} →
              </a>
            ))}
          </div>
        </div>

        {/* ═══ INHALTS-SPALTEN ═══ */}
        <div className={styles.columns}>
          {/* Gruppierung */}
          <nav className={styles.column} aria-labelledby="footer-ffas">
            <h2 id="footer-ffas" className={styles.heading}>
              Gruppierung
            </h2>
            <ul className={styles.list}>
              {mainNav
                .filter((item) => item.visibleInFooter)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
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
                      width={20}
                      height={20}
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
