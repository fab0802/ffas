"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import styles from "./MobileNav.module.css";

const PANEL_ID = "mobile-nav-panel";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Schliessen gibt den Fokus an den Toggle-Button zurueck.
  // Bewusst kein pathname-Effect: die Panel-Links rufen close() direkt beim
  // Klick auf, dadurch entfaellt ein setState-im-Effect-Lint-Problem.
  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    // Scroll-Lock auf dem Body
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Fokus in den Panel verschieben
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }

      // Fokus-Falle: Tab innerhalb des Panels halten
      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const items = mainNav.filter((item) => item.visibleInNav);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label="Menü öffnen"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        onClick={() => setOpen(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="3" y1="16" x2="21" y2="16" />
        </svg>
      </button>

      <div
        className={styles.backdrop}
        data-open={open}
        onClick={close}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        id={PANEL_ID}
        className={styles.panel}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        inert={!open ? true : undefined}
      >
        <div className={styles.panelHead}>
          <span className={styles.panelLabel}>Menü</span>
          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            aria-label="Menü schliessen"
            onClick={close}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <ul className={styles.list}>
          {items.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={isActive ? "page" : undefined}
                  onClick={close}
                >
                  <span className={styles.index}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.label}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
