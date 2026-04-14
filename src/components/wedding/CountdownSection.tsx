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

function CountdownBox({ value, label, pulse }: { value: number; label: string; pulse?: boolean }) {
  return (
    <motion.div
      className="rounded-2xl text-center"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8D5A3",
        boxShadow: "0 4px 32px rgba(201,168,76,0.12)",
        padding: "28px 20px",
      }}
      animate={pulse ? { scale: [1, 1.04, 1] } : undefined}
      transition={pulse ? { duration: 1, repeat: Infinity } : undefined}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(48px, 7vw, 80px)",
          color: "#2C2C2C",
          lineHeight: 1,
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "11px",
          color: "#C9A84C",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginTop: "8px",
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

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <CountdownBox value={time.days} label="Days" />
        <CountdownBox value={time.hours} label="Hours" />
        <CountdownBox value={time.minutes} label="Minutes" />
        <CountdownBox value={time.seconds} label="Seconds" pulse />
      </motion.div>
    </section>
  );
}
