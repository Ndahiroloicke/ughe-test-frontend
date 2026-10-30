"use client";

import { useCallback, useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/types";
import styles from "./HeroSlideshow.module.css";

type Props = {
  slides: HeroSlide[];
};

export default function HeroSlideshow({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const next = useCallback(() => {
    if (count <= 1) return;
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [count, next]);

  if (!count) return null;

  const slide = slides[index];

  return (
    <section className={styles.hero} aria-label="Featured stories">
      <div className={styles.mediaLayer}>
        {slides.map((s, i) =>
          s.media_type === "video" ? (
            <video
              key={s.id}
              className={`${styles.media} ${i === index ? styles.mediaActive : ""}`}
              src={s.media_url}
              autoPlay={i === index}
              muted
              loop
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.id}
              className={`${styles.media} ${i === index ? styles.mediaActive : ""}`}
              src={s.media_url}
              alt=""
            />
          )
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>{slide.headline}</h1>
        <a
          href={slide.cta_url}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          {slide.cta_label}
        </a>
      </div>

      {count > 1 && (
        <div className={styles.dots}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
