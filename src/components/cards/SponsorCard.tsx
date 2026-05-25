import Image from "next/image";
import type { Sponsor } from "@/types/sponsor";
import styles from "./SponsorCard.module.css";

export type SponsorCardProps = {
  sponsor: Sponsor;
  variant?: "haupt" | "supporting";
};

export default function SponsorCard({
  sponsor,
  variant = "supporting",
}: SponsorCardProps) {
  const isHaupt = variant === "haupt";
  return (
    <a
      href={sponsor.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${isHaupt ? styles.haupt : styles.supporting}`}
      aria-label={`${sponsor.name} (öffnet in neuem Tab)`}
    >
      <Image
        src={sponsor.logoSrc}
        alt={sponsor.name}
        width={0}
        height={0}
        className={styles.logo}
      />
    </a>
  );
}
