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
  const REVEAL_TOTAL_MS = 2550;

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

    // Keep overlay long enough for anticipation -> open -> glow hold sequence.
    revealTimeoutRef.current = window.setTimeout(() => {
      setRemoved(true);
      onOpen();
    }, REVEAL_TOTAL_MS);
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
          transition={{ delay: isOpen ? 2.1 : 0, duration: 0.45 }}
        >
          {/* Center glow during reveal hold */}
          {isOpen && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 10000, pointerEvents: "none" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.42, 0.2, 0], scale: [0.8, 1.08, 1.12, 1.16] }}
              transition={{ delay: 0.35, duration: 1.85, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div
                style={{
                  width: "min(64vw, 620px)",
                  height: "min(64vw, 620px)",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(253,246,227,0.34) 0%, rgba(201,168,76,0.16) 38%, rgba(201,168,76,0.03) 70%, transparent 100%)",
                  filter: "blur(1px)",
                }}
              />
            </motion.div>
          )}

          {/* Left door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8D5A3)",
              transformOrigin: "left center",
              boxShadow: "inset -10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? [0, 4, -102] : 0 }}
            transition={{
              duration: 1.45,
              delay: isOpen ? 0.2 : 0,
              times: isOpen ? [0, 0.14, 1] : undefined,
              ease: [0.22, 0.61, 0.36, 1],
            }}
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
            animate={{ rotateY: isOpen ? [0, -4, 108] : 0 }}
            transition={{
              duration: 1.52,
              delay: isOpen ? 0.2 : 0,
              times: isOpen ? [0, 0.14, 1] : undefined,
              ease: [0.22, 0.61, 0.36, 1],
            }}
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
                type="button"
                style={{
                  width: "clamp(92px, 18vw, 106px)",
                  height: "clamp(92px, 18vw, 106px)",
                  background: "radial-gradient(circle at 30% 28%, #fffdf8 0%, #f9f1dd 52%, #ead5a4 100%)",
                  border: "1px solid rgba(139,105,20,0.38)",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -8px 14px rgba(201,168,76,0.18)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Outer crisp ring for contrast against gold door */}
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgba(255,248,228,0.62)",
                  }}
                />

                {/* Subtle breathing inner ring */}
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    width: "84%",
                    height: "84%",
                    border: "1px solid rgba(139,105,20,0.36)",
                  }}
                  animate={{ scale: [1, 1.018, 1], opacity: [0.62, 0.95, 0.62] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Tiny ornament */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: 1,
                    color: "rgba(139,105,20,0.5)",
                    marginBottom: "2px",
                  }}
                >
                  ✦
                </span>

                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "clamp(10px, 1.5vw, 12px)",
                    color: "#6B4F12",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: 1.1,
                  }}
                >
                  OPEN
                </span>
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(7px, 1vw, 8px)",
                    color: "rgba(107,79,18,0.86)",
                    letterSpacing: "0.12em",
                    marginTop: "1px",
                    textTransform: "uppercase",
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
