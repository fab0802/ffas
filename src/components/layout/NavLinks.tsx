"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import styles from "./Nav.module.css";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={styles.links}>
      {mainNav
        .filter((item) => item.visibleInNav)
        .map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
