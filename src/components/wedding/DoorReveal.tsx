import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerParticleBurst } from "./GoldParticleBurst";

interface DoorRevealProps {
  onOpen: () => void;
}

export function DoorReveal({ onOpen }: DoorRevealProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [removed, setRemoved] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isOpen) return;
    triggerParticleBurst(e.clientX, e.clientY);
    setIsOpen(true);
    onOpen();
    setTimeout(() => setRemoved(true), 1700);
  };

  if (removed) return null;

  const mandala = (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" opacity="0.7">
      {[0, 45, 90, 135].map((r) => (
        <ellipse key={r} cx="30" cy="30" rx="8" ry="22" stroke="#FAF7F2" strokeWidth="0.8" transform={`rotate(${r} 30 30)`} fill="none" />
      ))}
      <circle cx="30" cy="30" r="6" stroke="#FAF7F2" strokeWidth="0.8" fill="none" />
      <circle cx="30" cy="30" r="2" fill="#FAF7F2" opacity="0.5" />
    </svg>
  );

  return (
    <AnimatePresence>
      {!removed && (
        <motion.div
          className="fixed inset-0 cursor-pointer select-none"
          style={{ zIndex: 10000, perspective: "1200px" }}
          onClick={handleClick}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 1.2 : 0, duration: 0.5 }}
        >
          {/* Left door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8D5A3)",
              transformOrigin: "left center",
              boxShadow: "inset -10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? -90 : 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                color: "#FAF7F2",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "0.15em",
              }}
            >
              శుభ లగ్నం
            </p>
            <div className="mt-4">{mandala}</div>
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(225deg, #8B6914, #C9A84C, #E8D5A3)",
              transformOrigin: "right center",
              boxShadow: "inset 10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? 90 : 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-4">{mandala}</div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#FAF7F2",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              With Blessings
            </p>
          </motion.div>

          {/* Touch to Open */}
          {!isOpen && (
            <div
              className="absolute bottom-12 left-0 right-0 text-center"
              style={{ zIndex: 10001 }}
            >
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "#FAF7F2",
                  letterSpacing: "0.3em",
                  animation: "opacityPulse 2s ease-in-out infinite",
                }}
              >
                ✦ Touch to Open ✦
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
