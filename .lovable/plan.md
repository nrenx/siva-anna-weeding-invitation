# Premium Telugu-English Wedding Invitation Website 

## Overview

Build a complete, single-page premium wedding invitation website for **Bollineni Siva & Sahithi**.

This is NOT a generic website. It must strictly follow the provided specification to achieve a cinematic, culturally rich, luxury experience that represents both families with dignity.

No simplifications, no deviations.

---

## Implementation Plan

### Phase 1: Design System (STRICT FOUNDATION)

- Install dependencies: `framer-motion`, `embla-carousel-react`
- Add music file to `public/wedding-music.mp3`
- Load Google Fonts via CSS:
  - Cormorant Garamond
  - Playfair Display
  - Lato
- Define ALL color tokens as CSS variables:
  - ivory, cream, gold, gold-light, gold-dark, charcoal, charcoal-deep
- Enforce GLOBAL RULES:
  - Smooth scroll (`scroll-behavior: smooth`)
  - Custom gold scrollbar
  - `overflow-x: hidden` globally
  - Minimum 44px touch targets
- Enforce DESIGN DISCIPLINE:
  - Section backgrounds MUST alternate:  
  ivory → cream → ivory → charcoal → repeat
  - Typography rules strictly applied
  - ALL placeholders use `[ ]` format with italic gold styling

---

### Phase 2: Global Animation & Utility Systems (BUILD FIRST)

Implement BEFORE building UI:

- Scroll Reveal System:
  - whileInView: opacity + translateY
  - exact timing and easing from spec
- Stagger Animation Utility:
  - staggerChildren: 0.15
- Floating Petals System:
  - 12 animated petals
  - randomized positions, delay, duration
  - disabled on small screens
- Scroll Progress Bar:
  - fixed top bar
  - width based on scroll percentage
- Gold Particle Burst Utility:
  - reusable function
  - 20 particles, radial animation

---

### Phase 3: Audio System (STRICT LOGIC)

- Use `audioRef` with autoplay attempt
- Handle autoplay rejection:
  - If success → play automatically
  - If blocked → show overlay
- Music Prompt Overlay:
  - Play button triggers audio + particle burst
  - Skip option hides overlay
- Floating Music Toggle:
  - Fixed bottom-right
  - Shows play/pause state
  - Pulsing ring animation when playing

---

### Phase 4: Opening Door Experience

- Full-screen overlay with two panels
- Telugu text: "శుభ లగ్నం"

Animation sequence:

- Click triggers:
  - 3D rotateY door open (left + right)
  - Particle burst at click position
- After animation:
  - Fade out overlay
  - Remove from DOM
- Trigger audio attempt on click

---

### Phase 5: Section Implementation (STRICT ORDER)

Each section MUST:

- Follow exact layout from spec
- Include Telugu text
- Include `<GoldDivider />` between sections
- Use scroll reveal animations

Sections:

1. Hero (home)
2. Countdown
3. Couple Introduction
4. Pre-Wedding Events
5. Ceremony & Reception
6. Family Blessings
7. Gallery
8. RSVP
9. Footer

---

### Phase 6: Component Architecture (MANDATORY)

Create reusable components:

- GoldDivider
- SectionHeading
- CountdownBox
- EventCard
- FamilyMemberRow
- MessageCard
- FloatingPetals
- ParticleBurst
- Toast
- AudioPlayer

DO NOT keep everything inside a single file.

---

### Phase 7: Interactions & Features

- Countdown Timer:
  - Real-time update every second
- Gallery:
  - Auto-slide every 4s
  - Navigation arrows
  - Dot indicators
  - Swipe support on mobile
- RSVP Form:
  - Validation (name + attendance required)
  - Store submissions in local state
  - Display submitted messages
  - Trigger particle burst on submit
  - Show success toast
- Footer:
  - WhatsApp share
  - Copy link to clipboard
  - Toast feedback

---

### Phase 8: Navigation & UI Polish

- Sticky Header:
  - Appears after scrolling past first section
  - Glassmorphism effect
  - Desktop: navigation dots
  - Mobile: simplified layout
- Scroll Progress Bar active at top

---

### Phase 9: Mobile Optimization (NON-NEGOTIABLE)

- Use `clamp()` for ALL typography
- Grid rules:
  - Countdown: 2x2 mobile, 4x1 desktop
  - Events: 1 → 2 → 3 columns
  - Ceremony: stacked on mobile
  - Family: stacked on mobile
- Disable petals on small screens
- Implement swipe gestures for gallery
- Ensure zero horizontal overflow

---

### Phase 10: Final QA Checklist (MANDATORY)

Before completion, verify:

- Door animation works with 3D effect
- Music system (autoplay + fallback) works
- Scroll progress bar updates correctly
- Sticky header triggers correctly
- All sections animate on scroll
- Mobile layouts are correct
- Gallery swipe works
- RSVP submissions display correctly
- Toast notifications work
- WhatsApp + copy link work
- No horizontal overflow on small screens
- All placeholders use `[ ]` format
- Telugu text present in all sections
- GoldDivider between every section
- Floating petals active (desktop only)
- Footer animation working

---

## Technical Notes

- Single-page scroll website
- Use React + TypeScript + Tailwind CSS
- Components stored in `src/components/wedding/`
- Main page orchestrates sections
- All state handled via React (no backend)
- Framer Motion used for ALL animations

---

## Final Instruction

This is a premium, long-term family website.

Focus on precision, consistency, and polish — not shortcuts.