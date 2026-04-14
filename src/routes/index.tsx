import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { DoorReveal } from "@/components/wedding/DoorReveal";
import { MusicSystem } from "@/components/wedding/MusicSystem";
import { ScrollProgressBar } from "@/components/wedding/ScrollProgressBar";
import { StickyHeader } from "@/components/wedding/StickyHeader";
import { FloatingPetals } from "@/components/wedding/FloatingPetals";
import { HeroSection } from "@/components/wedding/HeroSection";
import { CountdownSection } from "@/components/wedding/CountdownSection";
import { CoupleSection } from "@/components/wedding/CoupleSection";
import { EventsSection } from "@/components/wedding/EventsSection";
import { CeremonySection } from "@/components/wedding/CeremonySection";
import { FamilySection } from "@/components/wedding/FamilySection";
import { GallerySection } from "@/components/wedding/GallerySection";

import { FooterSection } from "@/components/wedding/FooterSection";
import { GoldDivider } from "@/components/wedding/GoldDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bollineni Siva & Sahithi — Wedding Invitation" },
      { name: "description", content: "You are cordially invited to the wedding celebration of Bollineni Siva and Sahithi. Join us for a beautiful Telugu wedding in Tirupati." },
      { property: "og:title", content: "Bollineni Siva & Sahithi — Wedding Invitation" },
      { property: "og:description", content: "Celebrating the union of Bollineni Siva and Sahithi with love, tradition, and joy." },
    ],
  }),
  component: WeddingPage,
});

function WeddingPage() {
  const [doorOpen, setDoorOpen] = useState(false);

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#C9A84C",
            color: "#FFFFFF",
            borderRadius: "9999px",
            fontFamily: "'Lato', sans-serif",
          },
        }}
      />

      {/* Door Reveal */}
      {!doorOpen && <DoorReveal onOpen={() => setDoorOpen(true)} />}

      {/* Global layers */}
      <ScrollProgressBar />
      <StickyHeader />
      <FloatingPetals />
      <MusicSystem />

      {/* Main content */}
      <main className="overflow-x-hidden">
        <HeroSection />
        <GoldDivider />
        <CountdownSection />
        <GoldDivider />
        <CoupleSection />
        <GoldDivider />
        <EventsSection />
        <GoldDivider />
        <CeremonySection />
        <GoldDivider />
        <FamilySection />
        <GoldDivider />
        <GallerySection />
        <GoldDivider />
        <FooterSection />
      </main>
    </>
  );
}
