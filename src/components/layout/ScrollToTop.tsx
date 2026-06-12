"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Wenn ein Anker-Hash in der URL steht (z.B. /kontakt#leitungsteam),
    // NICHT nach oben scrollen — sonst wird der Anker-Sprung überschrieben.
    if (window.location.hash) return;
    const behavior = window.scrollY > 100 ? "smooth" : "instant";
    window.scrollTo({ top: 0, behavior });
  }, [pathname]);

  return null;
}
