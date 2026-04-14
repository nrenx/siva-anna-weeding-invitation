import { useRef, useState, useEffect } from "react";

export function MusicSystem() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // Auto-play music on first user interaction (click/touch anywhere)
  useEffect(() => {
    const playAudio = async () => {
      const audio = audioRef.current;
      if (!audio || isPlaying) return;
      try {
        await audio.play();
        setIsPlaying(true);
        setReady(true);
      } catch {
        // ignore
      }
    };

    // Try autoplay immediately
    playAudio();

    // Fallback: play on first user interaction
    const handleInteraction = () => {
      playAudio();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) setReady(true);
  }, [isPlaying]);

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

      {/* Floating Music Toggle — always visible */}
      {ready && (
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
