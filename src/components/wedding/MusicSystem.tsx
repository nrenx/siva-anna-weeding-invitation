import { useRef, useState, useEffect, useCallback } from "react";
import { triggerParticleBurst } from "./GoldParticleBurst";

export function MusicSystem() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptDismissed, setPromptDismissed] = useState(false);

  const tryPlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
      setShowPrompt(false);
      setPromptDismissed(true);
    } catch {
      setShowPrompt(true);
    }
  }, []);

  useEffect(() => {
    // Attempt autoplay after a short delay
    const t = setTimeout(() => tryPlay(), 500);
    return () => clearTimeout(t);
  }, [tryPlay]);

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    triggerParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    tryPlay();
  };

  const handleSkip = () => {
    setShowPrompt(false);
    setPromptDismissed(true);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" style={{ display: "none" }} />

      {/* Music Prompt Overlay */}
      {showPrompt && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 10001, background: "rgba(0,0,0,0.6)" }}
        >
          <div
            className="bg-white rounded-3xl p-10 text-center"
            style={{ maxWidth: "360px", width: "90%" }}
          >
            <div className="flex justify-center mb-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ animation: "opacityPulse 2s infinite" }}>
                <path d="M9 18V5l12-2v13" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="6" cy="18" r="3" fill="#C9A84C" />
                <circle cx="18" cy="16" r="3" fill="#C9A84C" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "28px",
                color: "#2C2C2C",
                marginBottom: "8px",
              }}
            >
              Start with Music 🎵
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "#8B6914",
                marginBottom: "24px",
              }}
            >
              Play romantic background music for the full experience.
            </p>
            <button
              onClick={handlePlay}
              className="w-full rounded-full py-3 text-white font-medium mb-3 cursor-pointer"
              style={{
                background: "#C9A84C",
                fontFamily: "'Lato', sans-serif",
                fontSize: "16px",
              }}
            >
              Play Music ♪
            </button>
            <button
              onClick={handleSkip}
              className="w-full py-2 cursor-pointer bg-transparent border-none"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: "#8B6914",
                opacity: 0.7,
              }}
            >
              Continue without music
            </button>
          </div>
        </div>
      )}

      {/* Floating Music Toggle */}
      {promptDismissed && (
        <button
          onClick={toggleMusic}
          className="fixed cursor-pointer border-none"
          style={{
            bottom: "24px",
            right: "24px",
            zIndex: 9998,
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "#C9A84C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.background = "#8B6914";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = "#C9A84C";
          }}
        >
          {isPlaying && (
            <span
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid #C9A84C",
                animation: "pulseRing 2s ease-out infinite",
              }}
            />
          )}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            {isPlaying ? (
              <>
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </>
            ) : (
              <polygon points="5,3 19,12 5,21" />
            )}
          </svg>
        </button>
      )}
    </>
  );
}
