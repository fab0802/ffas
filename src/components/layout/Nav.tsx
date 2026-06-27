import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav aria-label="Hauptnavigation" className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/ffas-logo-letters-only.svg"
            alt="Frauenfussball Albis Süd"
            width={36}
            height={36}
            priority
          />
        </Link>
        <Link href="/colophon" className={styles.demoBadge}>
          Demo
        </Link>
      </div>
      <NavLinks />
      <MobileNav />
    </nav>
  );
}
