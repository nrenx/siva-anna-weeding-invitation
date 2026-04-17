import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { triggerParticleBurst } from "./GoldParticleBurst";

export function DoorReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [removed, setRemoved] = useState(false);
  const removeTimeoutRef = useRef<number | null>(null);
  const REVEAL_TOTAL_MS = 2450;

  const ambientOrbs = [
    { top: "16%", x: 18, size: 8, blur: "0px", delay: 0.2, opacity: 0.42 },
    { top: "28%", x: 40, size: 12, blur: "1px", delay: 0.8, opacity: 0.28 },
    { top: "44%", x: 22, size: 10, blur: "0px", delay: 1.2, opacity: 0.33 },
    { top: "61%", x: 36, size: 7, blur: "0px", delay: 0.45, opacity: 0.35 },
    { top: "72%", x: 14, size: 13, blur: "1px", delay: 1.6, opacity: 0.24 },
    { top: "84%", x: 30, size: 9, blur: "0px", delay: 1.05, opacity: 0.3 },
  ];

  useEffect(() => {
    return () => {
      if (removeTimeoutRef.current !== null) {
        window.clearTimeout(removeTimeoutRef.current);
      }
    };
  }, []);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    triggerParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    setIsOpen(true);

    // Keep overlay long enough for anticipation -> open -> glow hold sequence.
    removeTimeoutRef.current = window.setTimeout(() => {
      setRemoved(true);
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
          style={{ zIndex: 10000, perspective: "1200px", background: "#8B6914" }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ delay: isOpen ? 1.75 : 0, duration: 0.7 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 105%, rgba(253,246,227,0.32) 0%, rgba(253,246,227,0.16) 22%, rgba(253,246,227,0.02) 52%, transparent 76%), radial-gradient(circle at 50% -15%, rgba(253,246,227,0.2) 0%, transparent 56%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(250,247,242,0.02) 0px, rgba(250,247,242,0.02) 1px, transparent 1px, transparent 140px)",
              pointerEvents: "none",
            }}
          />

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
              background: "linear-gradient(150deg, #7C5B12 0%, #A98328 36%, #C9A84C 60%, #DFC57F 100%)",
              transformOrigin: "left center",
              boxShadow: "inset -10px 0 30px rgba(0,0,0,0.15)",
            }}
            animate={{ rotateY: isOpen ? [0, 4, -102] : 0 }}
            transition={{
              duration: 1.85,
              delay: isOpen ? 0.2 : 0,
              times: isOpen ? [0, 0.14, 1] : undefined,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <div
              className="absolute inset-[16px] sm:inset-[20px]"
              style={{
                border: "1px solid rgba(250,247,242,0.18)",
                boxShadow: "inset 0 0 0 1px rgba(250,247,242,0.08)",
              }}
            />
            <div
              className="absolute inset-[26px] sm:inset-[34px]"
              style={{
                border: "1px solid rgba(250,247,242,0.12)",
              }}
            />

            {ambientOrbs.map((orb, idx) => (
              <motion.span
                key={`left-orb-${idx}`}
                className="absolute rounded-full"
                style={{
                  top: orb.top,
                  left: `${orb.x}%`,
                  width: `${orb.size}px`,
                  height: `${orb.size}px`,
                  background: "rgba(250,247,242,0.55)",
                  opacity: orb.opacity,
                  filter: `blur(${orb.blur})`,
                }}
                animate={{ y: [0, -10, 0], opacity: [orb.opacity * 0.7, orb.opacity, orb.opacity * 0.7] }}
                transition={{ duration: 3.8, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            <svg
              viewBox="0 0 200 120"
              className="pointer-events-none absolute left-6 top-6 w-[120px] opacity-70 sm:left-10 sm:top-8 sm:w-[150px]"
              fill="none"
            >
              <path d="M6 6C54 8 86 30 106 64" stroke="#FAF7F2" strokeWidth="0.9" opacity="0.5" />
              <path d="M32 6C82 18 116 46 142 84" stroke="#FAF7F2" strokeWidth="0.7" opacity="0.45" />
              <circle cx="78" cy="44" r="10" stroke="#FAF7F2" strokeWidth="0.75" opacity="0.55" />
              <circle cx="78" cy="44" r="3" fill="#FAF7F2" opacity="0.45" />
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(26px, 4.2vw, 40px)",
                  color: "#FAF7F2",
                  fontWeight: 300,
                  fontStyle: "italic",
                  letterSpacing: "0.12em",
                  textShadow: "0 2px 14px rgba(0,0,0,0.18)",
                }}
              >
                శుభ లగ్నం
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "11px",
                  color: "rgba(250,247,242,0.76)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: "8px",
                }}
              >
                Auspicious Union
              </p>
              <div className="mt-4">{mandala}</div>
            </motion.div>
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(210deg, #7C5B12 0%, #A98328 36%, #C9A84C 60%, #DFC57F 100%)",
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
            <div
              className="absolute inset-[16px] sm:inset-[20px]"
              style={{
                border: "1px solid rgba(250,247,242,0.18)",
                boxShadow: "inset 0 0 0 1px rgba(250,247,242,0.08)",
              }}
            />
            <div
              className="absolute inset-[26px] sm:inset-[34px]"
              style={{
                border: "1px solid rgba(250,247,242,0.12)",
              }}
            />

            {ambientOrbs.map((orb, idx) => (
              <motion.span
                key={`right-orb-${idx}`}
                className="absolute rounded-full"
                style={{
                  top: orb.top,
                  right: `${orb.x}%`,
                  width: `${orb.size}px`,
                  height: `${orb.size}px`,
                  background: "rgba(250,247,242,0.55)",
                  opacity: orb.opacity,
                  filter: `blur(${orb.blur})`,
                }}
                animate={{ y: [0, -10, 0], opacity: [orb.opacity * 0.7, orb.opacity, orb.opacity * 0.7] }}
                transition={{ duration: 3.8, delay: orb.delay + 0.15, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            <svg
              viewBox="0 0 200 120"
              className="pointer-events-none absolute right-6 top-6 w-[120px] opacity-70 sm:right-10 sm:top-8 sm:w-[150px]"
              fill="none"
            >
              <path d="M194 6C146 8 114 30 94 64" stroke="#FAF7F2" strokeWidth="0.9" opacity="0.5" />
              <path d="M168 6C118 18 84 46 58 84" stroke="#FAF7F2" strokeWidth="0.7" opacity="0.45" />
              <circle cx="122" cy="44" r="10" stroke="#FAF7F2" strokeWidth="0.75" opacity="0.55" />
              <circle cx="122" cy="44" r="3" fill="#FAF7F2" opacity="0.45" />
            </svg>

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
                  fontSize: "clamp(22px, 3.2vw, 30px)",
                  color: "#FAF7F2",
                  fontWeight: 300,
                  fontStyle: "italic",
                  textShadow: "0 2px 14px rgba(0,0,0,0.18)",
                }}
              >
                With Blessings
              </p>
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "11px",
                  color: "rgba(250,247,242,0.76)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginTop: "8px",
                }}
              >
                Family Invitation
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-0 h-full"
            style={{
              width: "1px",
              zIndex: 10000,
              background: "linear-gradient(to bottom, rgba(250,247,242,0.24), rgba(250,247,242,0.08) 30%, rgba(250,247,242,0.2) 50%, rgba(250,247,242,0.08) 70%, rgba(250,247,242,0.24))",
              transform: "translateX(-0.5px)",
              pointerEvents: "none",
            }}
            animate={{ opacity: isOpen ? [1, 0.58, 0] : [0.86, 1, 0.86] }}
            transition={{ duration: isOpen ? 0.9 : 3.2, repeat: isOpen ? 0 : Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="pointer-events-none absolute left-1/2 top-[17%] hidden md:block"
            style={{ transform: "translateX(-50%)", zIndex: 10001 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                color: "rgba(250,247,242,0.74)",
                fontSize: "10px",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              WEDDING CELEBRATION INVITATION
            </p>
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
                  width: "clamp(84px, 15vw, 104px)",
                  height: "clamp(84px, 15vw, 104px)",
                  background: "radial-gradient(circle at 30% 28%, #fffdf8 0%, #f9f1dd 52%, #ead5a4 100%)",
                  border: "1px solid rgba(139,105,20,0.38)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.82), inset 0 -8px 14px rgba(201,168,76,0.18)",
                  transition: "all 0.3s ease",
                }}
              >
                <motion.span
                  className="absolute rounded-full"
                  style={{
                    width: "116%",
                    height: "116%",
                    border: "1px solid rgba(250,247,242,0.46)",
                  }}
                  animate={{ scale: [1, 1.025, 1], opacity: [0.5, 0.85, 0.5] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />

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
                      fontSize: "11px",
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
                      fontSize: "clamp(9px, 1.25vw, 11px)",
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
                      fontSize: "clamp(7px, 0.95vw, 8px)",
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
                  color: "rgba(250,247,242,0.62)",
                  letterSpacing: "0.24em",
                }}
              >
                ✦ TAP THE BUTTON TO BEGIN ✦
              </p>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "18px",
                  color: "rgba(250,247,242,0.78)",
                  marginTop: "10px",
                }}
              >
                A graceful beginning to a sacred celebration
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
