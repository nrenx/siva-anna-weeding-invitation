import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Family", href: "#family" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

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
          className="fixed top-0 left-0 right-0 flex items-center justify-center md:justify-between px-4 sm:px-6"
          style={{
            zIndex: 9990,
            height: "56px",
            background: "rgba(250,247,242,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #E8D5A3",
          }}
        >
          <span
            className="w-full text-center md:w-auto md:text-left text-[clamp(24px,7vw,32px)] md:text-[20px] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              color: "#C9A84C",
            }}
          >
            Siva ♥ Sahithi
          </span>

          {/* Desktop nav dots */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "12px",
                  color: "#C9A84C",
                  letterSpacing: "0.15em",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span
            className="hidden sm:block"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "#2C2C2C",
              fontStyle: "italic",
              opacity: 0.7,
            }}
          >
            {/* TODO: Replace with actual wedding date */}
            <i style={{ color: "#8B6914" }}>[ Wedding Date ]</i>
          </span>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
