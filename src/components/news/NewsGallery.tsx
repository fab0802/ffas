"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { NewsImage } from "@/types/newsImage";
import styles from "./NewsGallery.module.css";

export type NewsGalleryProps = {
  images: NewsImage[];
};

export default function NewsGallery({ images }: NewsGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  if (images.length === 0) return null;

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt ?? "",
    description: img.caption,
  }));

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.thumb}
            onClick={() => setOpenIndex(idx)}
            aria-label={
              img.caption ? `Bild öffnen: ${img.caption}` : "Bild öffnen"
            }
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              fill
              sizes="(max-width: 700px) 100vw, 33vw"
              className={styles.thumbImg}
            />
            <span className={styles.zoomIcon} aria-hidden="true">
              ⤢
            </span>
            {img.caption && (
              <span className={styles.thumbCaption}>{img.caption}</span>
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        index={openIndex}
        close={() => setOpenIndex(-1)}
        slides={slides}
      />
    </>
  );
}
