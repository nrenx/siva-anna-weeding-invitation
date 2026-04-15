import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start md:justify-center px-4 text-center overflow-hidden pt-32 sm:pt-36 md:pt-0 pb-10 md:pb-0"
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAF7F2",
        backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.04) 0px, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 40px)`,
      }}
    >
      {/* Mobile ornamental crown */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30vh] md:hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 18%, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 18%, transparent 42%), radial-gradient(circle at 50% 30%, rgba(232,213,163,0.22) 0%, rgba(232,213,163,0.08) 14%, transparent 34%)",
          }}
        />

        <svg
          viewBox="0 0 360 180"
          className="absolute left-1/2 top-2 w-[92vw] max-w-[320px] -translate-x-1/2"
          fill="none"
        >
          <path
            d="M52 84C98 46 141 30 180 30C219 30 262 46 308 84"
            stroke="#E8D5A3"
            strokeWidth="1"
            opacity="0.65"
          />
          <path
            d="M72 96C112 68 148 55 180 55C212 55 248 68 288 96"
            stroke="#C9A84C"
            strokeWidth="1"
            opacity="0.48"
          />
          <circle cx="180" cy="78" r="13" stroke="#C9A84C" strokeWidth="0.9" opacity="0.68" />
          <circle cx="180" cy="78" r="5.5" fill="#C9A84C" opacity="0.62" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
            <ellipse
              key={r}
              cx="180"
              cy="78"
              rx="8"
              ry="20"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.45"
              opacity="0.42"
              transform={`rotate(${r} 180 78)`}
            />
          ))}
          <line x1="34" y1="132" x2="126" y2="132" stroke="#E8D5A3" strokeWidth="0.9" />
          <line x1="234" y1="132" x2="326" y2="132" stroke="#E8D5A3" strokeWidth="0.9" />
        </svg>
      </div>

      {/* Ornamental top SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hidden md:block mb-4"
      >
        <svg width="280" height="40" viewBox="0 0 280 40" fill="none" className="mb-6 max-w-[80vw]">
          <line x1="0" y1="20" x2="80" y2="20" stroke="#E8D5A3" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="280" y2="20" stroke="#E8D5A3" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <ellipse key={r} cx="140" cy="20" rx="6" ry="16" stroke="#C9A84C" strokeWidth="0.5" fill="none" transform={`rotate(${r} 140 20)`} />
          ))}
          <circle cx="140" cy="20" r="3" fill="#C9A84C" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Marriage Invitation label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "#C9A84C",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          marginTop: "28px",
          marginBottom: "32px",
        }}
      >
        🌸 Marriage Invitation 🌸
      </motion.p>

      {/* Groom Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(36px, 6vw, 72px)",
          color: "#2C2C2C",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Bollineni Siva
      </motion.h1>

      {/* Weds label lockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="my-8 flex items-center justify-center gap-3"
      >
        <span
          style={{
            width: "36px",
            height: "1px",
            background: "#C9A84C",
            opacity: 0.55,
          }}
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ opacity: 0.7 }}
        >
          <circle cx="7" cy="7" r="2.2" fill="#C9A84C" />
        </svg>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: "clamp(26px, 3.8vw, 38px)",
            color: "#C9A84C",
            lineHeight: 1,
            letterSpacing: "0.04em",
            textTransform: "lowercase",
          }}
        >
          weds
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ opacity: 0.7 }}
        >
          <circle cx="7" cy="7" r="2.2" fill="#C9A84C" />
        </svg>
        <span
          style={{
            width: "36px",
            height: "1px",
            background: "#C9A84C",
            opacity: 0.55,
          }}
        />
      </motion.div>

      {/* Bride Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(36px, 6vw, 72px)",
          color: "#2C2C2C",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Sahithi
      </motion.h1>

      {/* Supporting line */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.02, duration: 0.55 }}
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "13px",
          color: "#8B6914",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginTop: "12px",
        }}
      >
        A Celebration of Love and Tradition
      </motion.p>

      {/* Primary actions */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.08, duration: 0.55 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#events"
          style={{
            background: "#C9A84C",
            color: "#FAF7F2",
            borderRadius: "999px",
            padding: "11px 22px",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          View Events
        </a>
        <a
          href="#gallery"
          style={{
            background: "transparent",
            color: "#8B6914",
            border: "1px solid #C9A84C",
            borderRadius: "999px",
            padding: "11px 22px",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Explore Gallery
        </a>
      </motion.div>

      {/* Gold rule */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.18, duration: 0.5 }}
        className="my-8"
        style={{ width: "100px", height: "1px", background: "#C9A84C" }}
      />

      {/* Telugu blessing */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "18px",
          color: "#8B6914",
          maxWidth: "400px",
          marginTop: "12px",
          marginBottom: "42px",
        }}
      >
        వివాహ మహోత్సవమునకు హార్దిక స్వాగతం
      </motion.p>

      {/* Date badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="inline-block rounded-2xl text-center"
        style={{
          border: "1px solid #C9A84C",
          padding: "12px 32px",
          background: "rgba(201,168,76,0.06)",
          marginBottom: "40px",
        }}
      >
        {/* TODO: Replace with actual wedding date */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: "22px",
            color: "#8B6914",
            opacity: 0.7,
          }}
        >
          [ Date to be Announced ]
        </p>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "13px",
            color: "#C9A84C",
            letterSpacing: "0.2em",
            marginTop: "4px",
          }}
        >
          Tirupati, Andhra Pradesh
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-6 flex flex-col items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ animation: "bounceDown 1.5s ease-in-out infinite" }}
        >
          <polyline points="6,9 12,15 18,9" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            color: "#C9A84C",
            opacity: 0.6,
            letterSpacing: "0.15em",
            marginTop: "4px",
          }}
        >
          scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
