import { motion } from "framer-motion";
import { toast } from "sonner";

export function FooterSection() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent("You're invited to Siva & Sahithi's Wedding! " + window.location.href)}`,
      "_blank"
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("📋 Link copied to clipboard!");
  };

  return (
    <footer
      className="py-16 px-4 text-center"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Lotus ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          {[0, 45, 90, 135].map((r) => (
            <ellipse key={r} cx="26" cy="26" rx="6" ry="18" stroke="#C9A84C" strokeWidth="0.8" fill="none" transform={`rotate(${r} 26 26)`} />
          ))}
          <circle cx="26" cy="26" r="4" fill="#C9A84C" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Monogram */}
      <div className="flex items-center justify-center gap-2">
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 7vw, 72px)",
            color: "#C9A84C",
          }}
        >
          S{" "}
        </span>
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 7vw, 72px)",
            color: "#C9A84C",
          }}
        >
          ♥
        </motion.span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 7vw, 72px)",
            color: "#C9A84C",
          }}
        >
          {" "}S
        </span>
      </div>

      <p
        className="mt-2"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "22px",
          color: "#FAF7F2",
        }}
      >
        Bollineni Siva weds Sahithi
      </p>

      {/* Date badge */}
      {/* TODO: Replace with actual date */}
      <div
        className="inline-block rounded-full mt-4"
        style={{
          border: "1px solid #C9A84C",
          padding: "8px 28px",
        }}
      >
        <span
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            color: "#C9A84C",
            fontStyle: "italic",
            opacity: 0.7,
          }}
        >
          [ DD Month YYYY · Tirupati ]
        </span>
      </div>

      {/* Gold HR */}
      <div
        className="mx-auto my-8"
        style={{ width: "120px", height: "1px", background: "#C9A84C", opacity: 0.4 }}
      />

      {/* Share buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 rounded-full cursor-pointer border-none text-white"
          style={{
            background: "#25D366",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            padding: "10px 24px",
            minHeight: "44px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.506 3.932 1.395 5.607L0 24l6.573-1.353A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.653-.503-5.182-1.387l-.372-.22-3.855.794.82-3.753-.242-.384A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
          </svg>
          Share Invite
        </button>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 rounded-full cursor-pointer"
          style={{
            background: "transparent",
            border: "1px solid #C9A84C",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#C9A84C",
            padding: "10px 24px",
            minHeight: "44px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
          Copy Link
        </button>
      </div>

      {/* Credit */}
      <a
        href="#home"
        className="mt-10 block text-center transition-colors hover:opacity-100"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "12px",
          color: "rgba(250,247,242,0.78)",
          textDecoration: "none",
          letterSpacing: "0.12em",
        }}
      >
        Made with ♥ for a celebration that lasts forever
      </a>

    </footer>
  );
}
