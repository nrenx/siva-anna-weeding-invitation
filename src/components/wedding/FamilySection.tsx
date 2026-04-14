import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GoldDivider } from "./GoldDivider";

interface FamilyMemberRowProps {
  relationship: string;
  names: string;
}

function FamilyMemberRow({ relationship, names }: FamilyMemberRowProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <span style={{ color: "#C9A84C", fontSize: "8px", marginTop: "6px" }}>◆</span>
      <div>
        <p style={{
          fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "11px",
          letterSpacing: "0.2em", color: "#8B6914", textTransform: "uppercase", marginBottom: "2px",
        }}>
          {relationship}
        </p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
          fontStyle: "italic", fontSize: "18px", color: "#2C2C2C",
        }}>
          {names}
        </p>
      </div>
    </div>
  );
}

function FamilyColumn({ teluguTitle, englishTitle, members }: {
  teluguTitle: string; englishTitle: string; members: FamilyMemberRowProps[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "26px", color: "#C9A84C" }}>
        {teluguTitle}
      </h3>
      <p style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "13px", letterSpacing: "0.3em", color: "#8B6914", marginBottom: "8px" }}>
        {englishTitle}
      </p>
      <div style={{ width: "60px", height: "2px", background: "#C9A84C", marginBottom: "32px" }} />
      {members.map((m, i) => (
        <FamilyMemberRow key={i} {...m} />
      ))}
    </motion.div>
  );
}

export function FamilySection() {
  const groomFamily: FamilyMemberRowProps[] = [
    { relationship: "Paternal Grandparents", names: "Sri. [ Thatha Name ] & Smt. [ Ammamma Name ]" },
    { relationship: "Maternal Grandparents", names: "Sri. [ Thatha Name ] & Smt. [ Ammamma Name ]" },
    { relationship: "Parents", names: "Sri. [ Father's Name ] & Smt. [ Mother's Name ]" },
    { relationship: "Uncles & Aunts", names: "Sri. [ Uncle's Name ] & Smt. [ Aunt's Name ]" },
    { relationship: "Other Relatives", names: "[ As required ]" },
  ];

  const brideFamily: FamilyMemberRowProps[] = [
    { relationship: "Paternal Grandparents", names: "Sri. [ Thatha Name ] & Smt. [ Ammamma Name ]" },
    { relationship: "Maternal Grandparents", names: "Sri. [ Thatha Name ] & Smt. [ Ammamma Name ]" },
    { relationship: "Parents", names: "Sri. [ Father's Name ] & Smt. [ Mother's Name ]" },
    { relationship: "Uncles & Aunts", names: "Sri. [ Uncle's Name ] & Smt. [ Aunt's Name ]" },
    { relationship: "Other Relatives", names: "[ As required ]" },
  ];

  return (
    <section
      id="family"
      className="relative py-16 sm:py-20 md:py-24 px-4"
      style={{ backgroundColor: "#FDF6E3" }}
    >
      {/* Faded mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" opacity="0.03">
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <ellipse key={r} cx="250" cy="250" rx="40" ry="180" stroke="#C9A84C" strokeWidth="2" transform={`rotate(${r} 250 250)`} fill="none" />
          ))}
          <circle cx="250" cy="250" r="80" stroke="#C9A84C" strokeWidth="2" fill="none" />
          <circle cx="250" cy="250" r="30" fill="#C9A84C" />
        </svg>
      </div>

      <SectionHeading
        title="With the Blessings of Our Families"
        telugu="కుటుంబాల ఆశీర్వాదాలతో"
        font="playfair"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[1000px] mx-auto">
        <FamilyColumn teluguTitle="వరుని పరివారం" englishTitle="Bollineni Family" members={groomFamily} />

        {/* Mobile divider */}
        <div className="md:hidden">
          <GoldDivider />
        </div>

        {/* Desktop vertical divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2" style={{ width: "1px", background: "#E8D5A3" }} />

        <FamilyColumn teluguTitle="వధువు పరివారం" englishTitle="Sahithi's Family" members={brideFamily} />
      </div>
    </section>
  );
}
