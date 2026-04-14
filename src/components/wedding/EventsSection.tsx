import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

interface EventCardProps {
  icon: React.ReactNode;
  telugu: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

function EventCard({ icon, telugu, title, date, venue, description }: EventCardProps) {
  return (
    <motion.div
      className="rounded-3xl bg-white overflow-hidden"
      style={{
        borderTop: "4px solid #C9A84C",
        padding: "32px",
        boxShadow: "0 8px 40px rgba(201,168,76,0.10)",
        transition: "all 0.3s ease",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4, boxShadow: "0 12px 48px rgba(201,168,76,0.18)" }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <p
        className="text-center mb-1"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "14px",
          color: "#8B6914",
        }}
      >
        {telugu}
      </p>
      <h3
        className="text-center mb-3"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: "22px",
          color: "#2C2C2C",
        }}
      >
        {title}
      </h3>
      {/* TODO: Replace with actual date and time */}
      <p
        className="text-center mb-2"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "#C9A84C",
          fontStyle: "italic",
        }}
      >
        {date}
      </p>
      {/* TODO: Replace with actual venue */}
      <p
        className="text-center mb-4"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          color: "#2C2C2C",
        }}
      >
        {venue}
      </p>
      <p
        className="text-center"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "#2C2C2C",
          opacity: 0.7,
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function MehendiIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M26 4c0 16-12 20-12 32a12 12 0 0024 0C38 24 26 20 26 4z" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <circle cx="26" cy="28" r="4" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M22 18c2 2 6 2 8 0" stroke="#C9A84C" strokeWidth="1" fill="none" />
      <path d="M20 24c3 2 9 2 12 0" stroke="#C9A84C" strokeWidth="1" fill="none" />
    </svg>
  );
}

function MarigoldIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
        <ellipse key={r} cx="26" cy="26" rx="5" ry="14" fill="none" stroke="#C9A84C" strokeWidth="1.2" transform={`rotate(${r} 26 26)`} />
      ))}
      <circle cx="26" cy="26" r="6" fill="#C9A84C" opacity="0.3" />
      <circle cx="26" cy="26" r="3" fill="#C9A84C" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M18 38V14l20-4v24" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="38" r="4" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <circle cx="34" cy="34" r="4" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
      <path d="M10 22c4-2 8-1 12 1" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M30 18c4-2 8-1 12 1" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5" />
    </svg>
  );
}

export function EventsSection() {
  return (
    <section
      id="events"
      className="py-16 sm:py-20 md:py-24 px-4"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 40px)`,
        backgroundColor: "#FDF6E3",
      }}
    >
      <SectionHeading
        title="Pre-Wedding Celebrations"
        telugu="పెళ్ళి పూర్వ వేడుకలు"
        font="playfair"
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1100px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <EventCard
          icon={<MehendiIcon />}
          telugu="మెహందీ"
          title="Mehendi Ceremony"
          date="[ Date ] · [ Time ]"
          venue="[ Venue Name, City ]"
          description="An evening of beautiful henna art, music, and laughter as we begin the auspicious wedding festivities."
        />
        <EventCard
          icon={<MarigoldIcon />}
          telugu="పసుపు కార్యక్రమం"
          title="Haldi Ceremony"
          date="[ Date ] · [ Time ]"
          venue="[ Venue Name, City ]"
          description="A joyful turmeric ritual blessing the couple with radiance, health, and lifelong prosperity."
        />
        <EventCard
          icon={<MusicIcon />}
          telugu="పెళ్ళి కూతురు"
          title="Pellikuthuru · Sangeet"
          date="[ Date ] · [ Time ]"
          venue="[ Venue Name, City ]"
          description="A vibrant evening of traditional Telugu songs, classical dance, and joyful celebration with both families."
        />
      </motion.div>
    </section>
  );
}
