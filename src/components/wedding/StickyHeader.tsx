import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          exit={{ y: -60 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 flex items-center justify-center px-4 sm:px-6"
          style={{
            zIndex: 9990,
            height: "56px",
            background: "rgba(250,247,242,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #E8D5A3",
          }}
        >
          <div className="w-full flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap leading-none">
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(30px, 6.4vw, 40px)",
                color: "#C9A84C",
              }}
            >
              Siva
            </span>

            <span
              aria-hidden="true"
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.6)",
              }}
            />

            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "clamp(20px, 3.8vw, 26px)",
                color: "#8B6914",
                letterSpacing: "0.03em",
                transform: "translateY(1px)",
              }}
            >
              weds
            </span>

            <span
              aria-hidden="true"
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.6)",
              }}
            />

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(30px, 6.4vw, 40px)",
                color: "#C9A84C",
              }}
            >
              Sahithi
            </span>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
