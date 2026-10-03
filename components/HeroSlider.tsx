"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides, site } from "@/lib/site";
import { IconClock, IconPen } from "./Icons";

const ROTATE_MS = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, ROTATE_MS);
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  return (
    <>
      <section
        className="hero"
        aria-roledescription="carousel"
        aria-label="Must Junk Removal highlights"
        onMouseEnter={() => timer.current && clearInterval(timer.current)}
        onMouseLeave={restart}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            className={`hero-slide${i === index ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${heroSlides.length}`}
            aria-hidden={i !== index}
          >
            <span
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />
            <span className="slide-veil" aria-hidden="true" />
            <div className="wrap">
              <div className="hero-slide-inner">
                <h2>{slide.headline}</h2>
                <div className="btn-row">
                  <a className="btn btn-ghost btn-lg" href="#schedule" tabIndex={i === index ? 0 : -1}>
                    <IconClock size={18} />
                    Schedule Junk Removal Now
                  </a>
                  <a className="btn btn-ghost btn-lg" href="#reviews" tabIndex={i === index ? 0 : -1}>
                    <IconPen size={18} />
                    Our Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                go(i);
                restart();
              }}
            />
          ))}
        </div>
      </section>
      <div className="hero-bar" aria-hidden="true" />
      <span className="sr-only">{site.tagline}</span>
    </>
  );
}
