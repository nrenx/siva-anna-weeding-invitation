import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { triggerParticleBurst } from "./GoldParticleBurst";

interface Message {
  name: string;
  attendance: string;
  message: string;
}

const ATTENDANCE_OPTIONS = [
  "Joyfully Attending 🎉",
  "Attending with Family 👨‍👩‍👧‍👦",
  "Sending Blessings from Afar 🙏",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "12px",
  border: "1px solid #E8D5A3",
  padding: "12px 16px",
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
  fontSize: "15px",
  color: "#2C2C2C",
  outline: "none",
  transition: "all 0.2s ease",
  background: "transparent",
  minHeight: "44px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Lato', sans-serif",
  fontWeight: 300,
  fontSize: "12px",
  color: "#8B6914",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "6px",
  display: "block",
};

export function RSVPSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guests, setGuests] = useState("1");
  const [blessing, setBlessing] = useState("");

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#C9A84C";
    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.15)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#E8D5A3";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !attendance) {
      toast.error("Please enter your name and select attendance.");
      return;
    }
    const btn = (e.target as HTMLFormElement).querySelector("button[type=submit]") as HTMLElement;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      triggerParticleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
    setMessages((prev) => [{ name: name.trim(), attendance, message: blessing.trim() }, ...prev]);
    toast.success("🙏 Blessings received! Thank you.");
    setName(""); setPhone(""); setAttendance(""); setGuests("1"); setBlessing("");
  };

  return (
    <section id="rsvp" className="py-16 sm:py-20 md:py-24 px-4" style={{ backgroundColor: "#FAF7F2" }}>
      <SectionHeading
        title="Send Your Blessings"
        telugu="మీ ఆశీర్వాదాలు పంపండి"
        subtitle="Your words of love mean the world to both families."
      />

      <motion.div
        className="mx-auto rounded-3xl bg-white p-8 sm:p-10"
        style={{
          maxWidth: "560px",
          border: "1px solid #E8D5A3",
          boxShadow: "0 8px 48px rgba(201,168,76,0.12)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label style={labelStyle}>Your Name *</label>
            <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Full Name" onFocus={handleFocus} onBlur={handleBlur} />
          </div>
          <div>
            <label style={labelStyle}>Phone (Optional)</label>
            <input style={inputStyle} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp / Phone" onFocus={handleFocus} onBlur={handleBlur} />
          </div>
          <div>
            <label style={labelStyle}>Attendance *</label>
            <select
              style={{ ...inputStyle, appearance: "auto" as React.CSSProperties["appearance"] }}
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLSelectElement>}
              onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLSelectElement>}
            >
              <option value="">Select your response</option>
              {ATTENDANCE_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Number of Guests</label>
            <select
              style={{ ...inputStyle, appearance: "auto" as React.CSSProperties["appearance"] }}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLSelectElement>}
              onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLSelectElement>}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Your Blessings</label>
            <textarea
              rows={4}
              style={{ ...inputStyle, resize: "none" } as React.CSSProperties}
              value={blessing}
              onChange={(e) => setBlessing(e.target.value)}
              placeholder="Write your heartfelt blessings and wishes for the couple..."
              onFocus={handleFocus as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
              onBlur={handleBlur as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full text-white cursor-pointer border-none"
            style={{
              background: "linear-gradient(135deg, #8B6914, #C9A84C)",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "20px",
              padding: "14px",
              transition: "all 0.2s ease",
              minHeight: "44px",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "scale(1.02)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            ✦ Send Blessings ✦
          </button>
        </form>
      </motion.div>

      {/* Submitted messages */}
      {messages.length > 0 && (
        <div className="mt-16 max-w-[560px] mx-auto">
          <h3
            className="text-center mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: "24px",
              color: "#C9A84C",
            }}
          >
            Blessings from Loved Ones
          </h3>
          <div className="flex flex-col gap-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl"
                style={{
                  background: "#FDF6E3",
                  padding: "20px 24px",
                  borderLeft: "3px solid #C9A84C",
                }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "18px", color: "#C9A84C", marginBottom: "4px" }}>
                  {m.name}
                </p>
                <span
                  className="inline-block rounded-full mb-2"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 300,
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    padding: "2px 10px",
                    color: "#8B6914",
                  }}
                >
                  {m.attendance}
                </span>
                {m.message && (
                  <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "15px", color: "#2C2C2C", fontStyle: "italic", lineHeight: 1.7, marginTop: "8px" }}>
                    {m.message}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
