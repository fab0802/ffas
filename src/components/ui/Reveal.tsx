"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Reveal.module.css";

export type RevealProps = {
  children: ReactNode;
  /** Verzögerung in ms (für gestaffelte Reveals) */
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <div ref={ref} className={styles.reveal} data-visible={visible} style={style}>
      {children}
    </div>
  );
}
