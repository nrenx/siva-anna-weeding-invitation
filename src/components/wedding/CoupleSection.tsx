import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

function CoupleCard({ name, monogram, label, teluguLabel, father, mother, location, italic }: {
  name: string; monogram: string; label: string; teluguLabel: string;
  father: string; mother: string; location: string; italic?: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Circular frame */}
      <div
        className="flex items-center justify-center rounded-full mb-6"
        style={{
          width: "200px",
          height: "200px",
          border: "3px solid #C9A84C",
          outline: "6px solid rgba(201,168,76,0.2)",
          outlineOffset: "4px",
          background: "radial-gradient(circle, #FDF6E3, #E8D5A3)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "72px",
            color: "#C9A84C",
            fontStyle: italic ? "italic" : "normal",
          }}
        >
          {monogram}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "32px",
          color: "#2C2C2C",
          marginBottom: "4px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "12px",
          color: "#C9A84C",
          letterSpacing: "0.3em",
          marginBottom: "16px",
        }}
      >
        {label} · {teluguLabel}
      </p>
      <div style={{ width: "60px", height: "2px", background: "#C9A84C", margin: "0 auto 16px" }} />
      <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "15px", color: "#2C2C2C" }}>
        S/o Sri. <i style={{ color: "#8B6914", opacity: 0.7 }}>{father}</i>
      </p>
      <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "15px", color: "#8B6914" }}>
        & Smt. <i style={{ color: "#8B6914", opacity: 0.7 }}>{mother}</i>
      </p>
      <p
        className="mt-2"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "#C9A84C",
        }}
      >
        {location}
      </p>
    </motion.div>
  );
}

export function CoupleSection() {
  return (
    <section id="couple" className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <SectionHeading title="The Couple" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[900px] mx-auto">
        <CoupleCard
          name="Bollineni Siva"
          monogram="S"
          label="Groom"
          teluguLabel="వరుడు"
          father="[ Father's Name ]"
          mother="[ Mother's Name ]"
          location="Tirupati, Andhra Pradesh"
        />

        {/* Center connector - desktop only */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div style={{ width: "1px", height: "80px", background: "#E8D5A3" }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="my-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#C9A84C">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
          <div style={{ width: "1px", height: "80px", background: "#E8D5A3" }} />
        </div>

        <CoupleCard
          name="Sahithi"
          monogram="S"
          italic
          label="Bride"
          teluguLabel="వధువు"
          father="[ Father's Name ]"
          mother="[ Mother's Name ]"
          location="[ City, State ]"
        />
      </div>
    </section>
  );
}
