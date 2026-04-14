import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

function CeremonyCard({ topText, telugu, label, dateText, timeText, venueName, address }: {
  topText: string; telugu: string; label: string; dateText: string;
  timeText: string; venueName: string; address: string;
}) {
  return (
    <motion.div
      className="rounded-3xl overflow-hidden"
      style={{ background: "#FFFFFF", boxShadow: "0 8px 40px rgba(201,168,76,0.10)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Gold top band */}
      <div
        className="flex items-center justify-center"
        style={{
          height: "60px",
          background: "linear-gradient(90deg, #8B6914, #C9A84C, #E8D5A3)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontSize: "18px",
            color: "#FFFFFF",
          }}
        >
          {topText}
        </span>
      </div>

      <div className="p-8 text-center">
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "18px", color: "#C9A84C", marginBottom: "8px" }}>
          {telugu}
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "11px", letterSpacing: "0.3em", color: "#8B6914", textTransform: "uppercase", marginBottom: "16px" }}>
          {label}
        </p>

        {/* TODO: Replace with actual date */}
        <div
          className="inline-block rounded-full mx-auto mb-4"
          style={{ border: "1px solid #C9A84C", padding: "8px 24px" }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "20px", color: "#8B6914", fontStyle: "italic", opacity: 0.7 }}>
            {dateText}
          </span>
        </div>

        {/* TODO: Replace with actual time */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, fontSize: "15px", color: "#2C2C2C", fontStyle: "italic", opacity: 0.7 }}>
            Muhurtham: <i style={{ color: "#8B6914" }}>{timeText}</i>
          </span>
        </div>

        <div style={{ width: "80px", height: "1px", background: "#C9A84C", margin: "16px auto" }} />

        {/* TODO: Replace with actual venue */}
        <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "22px", color: "#2C2C2C", fontStyle: "italic", marginBottom: "8px" }}>
          <i style={{ color: "#8B6914", opacity: 0.7 }}>{venueName}</i>
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "14px", color: "#2C2C2C", opacity: 0.6, lineHeight: 1.6, marginBottom: "20px" }}>
          <i style={{ color: "#8B6914", opacity: 0.7 }}>{address}</i>
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full text-center text-white no-underline"
          style={{
            background: "#C9A84C",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            padding: "12px",
            transition: "all 0.2s ease",
            minHeight: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#8B6914";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#C9A84C";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          📍 Get Directions
        </a>
      </div>
    </motion.div>
  );
}

export function CeremonySection() {
  return (
    <section id="ceremony" className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <SectionHeading
        title="The Auspicious Day"
        telugu="శుభ ముహూర్తం"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-[980px] mx-auto">
        <CeremonyCard
          topText="✦ Vivah Kalyanam ✦"
          telugu="వివాహ మహోత్సవం"
          label="WEDDING CEREMONY"
          dateText="[ DD Month YYYY ]"
          timeText="[ Time AM/PM ]"
          venueName="[ Kalyana Mandapam Name ]"
          address="[ Full Address, Tirupati, Andhra Pradesh ]"
        />
        <CeremonyCard
          topText="✦ Wedding Reception ✦"
          telugu="సత్కార సభ"
          label="WEDDING RECEPTION"
          dateText="[ DD Month YYYY ]"
          timeText="[ Time PM ]"
          venueName="[ Reception Venue Name ]"
          address="[ Full Address, Tirupati, Andhra Pradesh ]"
        />
      </div>
    </section>
  );
}
