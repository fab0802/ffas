import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav aria-label="Hauptnavigation" className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/ffas-logo-letters-only.svg"
          alt="Frauenfussball Albis Süd"
          width={36}
          height={36}
          priority
        />
      </Link>
      <NavLinks />
    </nav>
  );
}
