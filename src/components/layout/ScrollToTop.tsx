"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const behavior = window.scrollY > 100 ? "smooth" : "instant";
    window.scrollTo({ top: 0, behavior });
  }, [pathname]);

  return null;
}
