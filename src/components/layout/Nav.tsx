import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
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
      <ul className={styles.links}>
        {mainNav.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
