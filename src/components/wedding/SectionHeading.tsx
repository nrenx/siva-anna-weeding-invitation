import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  telugu?: string;
  subtitle?: string;
  light?: boolean;
  font?: "cormorant" | "playfair";
}

export function SectionHeading({ title, telugu, subtitle, light, font = "cormorant" }: SectionHeadingProps) {
  const titleColor = light ? "#FAF7F2" : "#2C2C2C";
  const subColor = light ? "#E8D5A3" : "#8B6914";
  const fontFamily = font === "playfair" ? "'Playfair Display', serif" : "'Cormorant Garamond', serif";

  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h2
        className="font-semibold"
        style={{
          fontFamily,
          fontSize: "clamp(28px, 5vw, 52px)",
          color: titleColor,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {telugu && (
        <p
          className="mt-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "20px",
            color: "#C9A84C",
          }}
        >
          {telugu}
        </p>
      )}
      {subtitle && (
        <p
          className="mt-3"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: subColor,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
