import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerParticleBurst } from "./GoldParticleBurst";

interface DoorRevealProps {
  onOpen: () => void;
}

export function DoorReveal({ onOpen }: DoorRevealProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [removed, setRemoved] = useState(false);
  const revealTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    triggerParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    setIsOpen(true);

    // Let the doors complete opening before revealing the invitation content.
    revealTimeoutRef.current = window.setTimeout(() => {
      setRemoved(true);
      onOpen();
    }, 2250);
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
          className="fixed inset-0 select-none"
          style={{ zIndex: 10000, perspective: "1200px" }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 1.6 : 0, duration: 0.6 }}
        >
          {/* Left door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8D5A3)",
              transformOrigin: "left center",
              boxShadow: "inset -10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? -110 : 0 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
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
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(225deg, #8B6914, #C9A84C, #E8D5A3)",
              transformOrigin: "right center",
              boxShadow: "inset 10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? 110 : 0 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center"
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
          </motion.div>

          {/* Center ornamental button */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 10001 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <button
                onClick={handleOpen}
                className="relative cursor-pointer border-none rounded-full flex flex-col items-center justify-center group"
                style={{
                  width: "clamp(108px, 22vw, 144px)",
                  height: "clamp(108px, 22vw, 144px)",
                  background: "radial-gradient(circle, rgba(250,247,242,0.14) 0%, rgba(201,168,76,0.06) 100%)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(250,247,242,0.28)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.18), inset 0 0 20px rgba(201,168,76,0.08)",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Rotating outer ring */}
                <motion.svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 180 180"
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="90" cy="90" r="85" stroke="rgba(250,247,242,0.14)" strokeWidth="0.4" fill="none" />
                  <circle cx="90" cy="90" r="80" stroke="rgba(201,168,76,0.22)" strokeWidth="0.45" fill="none" strokeDasharray="6 14" />
                </motion.svg>

                {/* Pulsing inner ring */}
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    width: "90%",
                    height: "90%",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                  animate={{ scale: [1, 1.04, 1], opacity: [0.34, 0.58, 0.34] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "4px" }}>
                  <path d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L17.12 19.02L12 15.77L6.88 19.02L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z" fill="#C9A84C" opacity="0.9" />
                </svg>

                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: "clamp(12px, 2vw, 16px)",
                    color: "#FAF7F2",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  OPEN
                </span>
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(8px, 1.2vw, 10px)",
                    color: "rgba(250,247,242,0.62)",
                    letterSpacing: "0.16em",
                    marginTop: "2px",
                  }}
                >
                  INVITATION
                </span>
              </button>
            </motion.div>
          )}

          {/* Bottom hint */}
          {!isOpen && (
            <motion.div
              className="absolute bottom-10 left-0 right-0 text-center"
              style={{ zIndex: 10001 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  color: "rgba(250,247,242,0.5)",
                  letterSpacing: "0.25em",
                }}
              >
                ✦ TAP THE BUTTON TO BEGIN ✦
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
