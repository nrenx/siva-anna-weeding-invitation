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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) { setPetals([]); return; }
    const p: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      duration: `${8 + Math.random() * 10}s`,
      delay: `${Math.random() * 12}s`,
      opacity: 0.4 + Math.random() * 0.4,
      size: 10 + Math.random() * 8,
      color: i % 3 === 0 ? "#FAF7F2" : i % 3 === 1 ? "#f4c2c2" : "#E8D5A3",
    }));
    setPetals(p);
  }, [isMobile]);

  if (isMobile || petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
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
