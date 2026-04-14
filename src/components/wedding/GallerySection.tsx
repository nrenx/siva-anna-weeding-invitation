import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const TOTAL_SLIDES = 5;

function PlaceholderSlide({ index }: { index: number }) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      style={{
        aspectRatio: "16/10",
        background: "radial-gradient(circle at center, #C9A84C, #8B6914)",
        borderRadius: "16px",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(48px, 10vw, 80px)",
          color: "#FAF7F2",
        }}
      >
        S ♥ S
      </span>
      <span
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "rgba(255,255,255,0.5)",
          marginTop: "8px",
        }}
      >
        {/* TODO: Replace with actual photo */}
        [ Photo Slot #{index + 1} ]
      </span>
    </div>
  );
}

export function GallerySection() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL_SLIDES), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL_SLIDES) % TOTAL_SLIDES), []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
    touchStart.current = null;
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 md:py-24 px-4"
      style={{ backgroundColor: "#2C2C2C" }}
    >
      <SectionHeading
        title="Our Story"
        subtitle="A love story worth every photograph"
        light
      />

      <div
        className="relative max-w-[800px] mx-auto overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            <PlaceholderSlide index={current} />
          </motion.div>
        </AnimatePresence>

        {/* Left arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer border-none"
          style={{
            width: "44px",
            height: "44px",
            background: "rgba(0,0,0,0.35)",
            color: "white",
            fontSize: "22px",
            transition: "background 0.2s",
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.35)"; }}
        >
          ‹
        </button>

        {/* Right arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full cursor-pointer border-none"
          style={{
            width: "44px",
            height: "44px",
            background: "rgba(0,0,0,0.35)",
            color: "white",
            fontSize: "22px",
            transition: "background 0.2s",
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.5)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.35)"; }}
        >
          ›
        </button>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex" style={{ height: "3px", gap: "2px" }}>
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <div
              key={i}
              className="flex-1 cursor-pointer"
              onClick={() => setCurrent(i)}
              style={{
                background: i === current
                  ? "#C9A84C"
                  : "rgba(255,255,255,0.2)",
                transition: "background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
