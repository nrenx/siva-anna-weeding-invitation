import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
  size: number;
  color: string;
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const isMobile = window.innerWidth < 640;
      const count = isMobile ? 7 : 12;

      const p: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      duration: `${isMobile ? 9 + Math.random() * 9 : 8 + Math.random() * 10}s`,
      delay: `${Math.random() * 12}s`,
      opacity: isMobile ? 0.28 + Math.random() * 0.24 : 0.4 + Math.random() * 0.4,
      size: isMobile ? 7 + Math.random() * 5 : 10 + Math.random() * 8,
      color: i % 3 === 0 ? "#FAF7F2" : i % 3 === 1 ? "#f4c2c2" : "#E8D5A3",
    }));
      setPetals(p);
    };

    createPetals();
    window.addEventListener("resize", createPetals);
    return () => window.removeEventListener("resize", createPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
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
          }}
        >
          <ellipse cx="5" cy="7.5" rx="4" ry="7" fill={p.color} opacity={p.opacity} />
        </svg>
      ))}
    </div>
  );
}
