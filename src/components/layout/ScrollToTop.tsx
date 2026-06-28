"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Bei einem Anker-Hash (z.B. /spielplan#tabelle) NICHT nach oben springen,
    // sonst wird der Anker-Sprung überschrieben.
    if (window.location.hash) return;

    // Bewusst "instant": ein animiertes (smooth) Scrollen kollidiert beim
    // Seitenwechsel mit der Höhenänderung des Dokuments — auf kürzeren Seiten
    // bliebe der Browser sonst am unteren Rand kleben. "instant" überschreibt
    // hier zugleich das globale scroll-behavior: smooth für diesen Sprung.
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
