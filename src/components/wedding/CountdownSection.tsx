import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

// TODO: Replace with actual wedding datetime
const TARGET_DATE = new Date("2025-12-31T00:00:00");

function getTimeLeft() {
  const now = new Date().getTime();
  const diff = TARGET_DATE.getTime() - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBox({ value, label, pulse, delay }: { value: number; label: string; pulse?: boolean; delay: number }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl text-center"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #FDF6E3 100%)",
        border: "1px solid #E8D5A3",
        boxShadow: "0 8px 40px rgba(201,168,76,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
        padding: "clamp(20px, 4vw, 36px) clamp(12px, 3vw, 24px)",
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Decorative corner accents */}
      <span className="absolute top-2 left-2 w-4 h-4 border-t border-l" style={{ borderColor: "rgba(201,168,76,0.3)" }} />
      <span className="absolute top-2 right-2 w-4 h-4 border-t border-r" style={{ borderColor: "rgba(201,168,76,0.3)" }} />
      <span className="absolute bottom-2 left-2 w-4 h-4 border-b border-l" style={{ borderColor: "rgba(201,168,76,0.3)" }} />
      <span className="absolute bottom-2 right-2 w-4 h-4 border-b border-r" style={{ borderColor: "rgba(201,168,76,0.3)" }} />

      <motion.div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(42px, 8vw, 72px)",
          color: "#2C2C2C",
          lineHeight: 1,
        }}
        animate={pulse ? { scale: [1, 1.03, 1] } : undefined}
        transition={pulse ? { duration: 1, repeat: Infinity } : undefined}
      >
        {String(value).padStart(2, "0")}
      </motion.div>

      {/* Gold shimmer line */}
      <div
        className="mx-auto my-2"
        style={{
          width: "24px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
        }}
      />

      <div
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "clamp(9px, 1.5vw, 12px)",
          color: "#C9A84C",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="countdown"
      className="py-16 sm:py-20 md:py-24 px-4"
      style={{ backgroundColor: "#FDF6E3" }}
    >
      <SectionHeading
        title="Counting Every Moment"
        subtitle="Until Siva & Sahithi begin their forever"
        font="playfair"
      />

      {/* Telugu text */}
      <motion.p
        className="text-center mb-8"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "16px",
          color: "#C9A84C",
          marginTop: "-16px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ప్రతి క్షణం లెక్కిస్తూ...
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 max-w-[680px] mx-auto">
        <CountdownBox value={time.days} label="Days" delay={0} />
        <CountdownBox value={time.hours} label="Hours" delay={0.1} />
        <CountdownBox value={time.minutes} label="Minutes" delay={0.2} />
        <CountdownBox value={time.seconds} label="Seconds" pulse delay={0.3} />
      </div>
    </section>
  );
}
