import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
  size: number;
  drift: number;
  rotation: number;
  color: string;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const isMobile = window.innerWidth < 640;
      const count = isMobile ? 18 : 32;

      const p: Petal[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${2 + Math.random() * 96}%`,
        duration: `${isMobile ? 11 + Math.random() * 7 : 9 + Math.random() * 8}s`,
        delay: `${Math.random() * 10}s`,
        opacity: isMobile ? 0.56 + Math.random() * 0.26 : 0.62 + Math.random() * 0.28,
        size: isMobile ? 11 + Math.random() * 7 : 13 + Math.random() * 10,
        drift: (Math.random() - 0.5) * (isMobile ? 48 : 72),
        rotation: (Math.random() - 0.5) * 120,
        color: i % 4 === 0 ? "#FAF7F2" : i % 4 === 1 ? "#f4c2c2" : i % 4 === 2 ? "#E8D5A3" : "#f6dada",
      }));
      setPetals(p);
    };

    createPetals();
    window.addEventListener("resize", createPetals);
    return () => window.removeEventListener("resize", createPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 15 }}>
      {petals.map((p) => (
        <svg
          key={p.id}
          width={p.size}
          height={p.size * 1.5}
          viewBox="0 0 10 15"
          className="absolute"
          style={{
            left: p.left,
            top: "-20px",
            animation: `petalFall ${p.duration} ${p.delay} linear infinite`,
            ["--petal-opacity" as string]: p.opacity,
            ["--petal-drift" as string]: `${p.drift}px`,
            ["--petal-rotation" as string]: `${p.rotation}deg`,
            filter: "drop-shadow(0 0 2px rgba(201, 168, 76, 0.35))",
          }}
        >
          <ellipse cx="5" cy="7.5" rx="4" ry="7" fill={p.color} opacity={p.opacity} />
        </svg>
      ))}
    </div>
  );
}
