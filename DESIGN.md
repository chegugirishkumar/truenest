# TrueNest Design System: Biophilic Urbanism

## 🌿 Brand Vision
TrueNest is a manifestation of **Biophilic Urbanism** in Bangalore. The design philosophy is where **Brutalist honesty** meets the **quietude of high-end living**. It is "Truly In Nature," offering grounded luxury and a silent dialogue between stone and sky.

---

## 🎨 Color Palette (Tailwind Design Tokens)
The colors are derived from natural elements: stone, earth, and light. Defined as custom properties in `assets/js/tailwind.config.js`.

- **Primary**: `#685d4a` — Earthy Brown/Stone. The core brand color.
- **Secondary**: `#6a5e33` — Deep Olive/Moss. Used for accents and sub-headers.
- **Background**: `#fbf9f8` — Soft Off-white/Stone. Provides a high-end, gallery-like feel.
- **On-Surface**: `#1b1c1c` — Deep Charcoal/Shadow. High contrast for readability.
- **On-Surface-Variant**: `#4b463d` — Muted Earth. Used for body text and metadata.
- **Outline**: `#7d766c` — Warm Gray. Used for borders and blueprint lines.
- **Primary-Container**: `#f7e7ce` — Warm Sand. Used for highlighting specific containers.

---

## 🖋️ Typography
A high-contrast pairing that balances historical elegance with modern precision.

- **Headlines/Display**: `EB Garamond` (Google Fonts)
  - *Serif, elegant, timeless, sophisticated.*
  - Used for large display titles and section headers.
  - Utility Classes: `font-display-xl`, `font-headline-lg`.
- **Body/Labels**: `Metropolis` (Local/Google Fonts)
  - *Geometric Sans-serif, clean, modern, legible.*
  - Used for body text, navigation, and technical labels.
  - Utility Classes: `font-body-md`, `font-label-caps` (all-caps tracking).

---

## ✨ Design Principles
- **Monolithic Visuals**: Large, cinematic imagery showing architectural integrity and raw textures.
- **Quiet Luxury**: Minimalist but premium. Focus on "tactile quality" (sandstone walls, concrete pillars).
- **Blueprint Aesthetic**: 
  - Subtle grid lines and blueprint dividers (`blueprint-line`).
  - Technical markers like `TN-0824` and GPS coordinates.
- **Chromo-Revelatory Entrance**: 
  - Images begin in grayscale and smoothly transition to full color over **3 seconds** (`animate-color-reveal`).
- **Glassmorphism**: Backdrop blurs (`backdrop-blur-xl`) and translucent surfaces for navigation and overlays.

---

## 🏗️ Component Architecture

### 1. Project Detail Templates
- **Hero**: Immersive 16:9 imagery or video with minimalist headline typography.
- **Specification Bento**: A grid of unit variants (e.g., 1 BHK studio types) with clear pricing and area breakdowns.
- **Amenity Grid**: Minimalist icons (Material Symbols) with subtle hover effects.

### 2. Location Intelligence
- **Data-Driven Distance**: Location cards using `data-lat` and `data-lng` attributes.
- **Haversine Implementation**: JavaScript logic to calculate precise aerial distances from project site to landmarks.

### 3. Navigation & Interaction
- **Modular Header**: Glassmorphic fixed navigation with height-scaled logo (40px-48px).
- **Dynamic Carousel**: Tabbed interface for Elevation, Interior, Floor Plans, and Amenities.
- **Micro-interactions**: Subtle `arrow_outward` translations on hover.

---

## 📐 Spacing & Layout
- **Container Max**: 1440px.
- **Section Gap**: 128px (`py-section-gap`).
- **Margins**: 
  - Mobile: 24px (`px-margin-mobile`).
  - Desktop: 80px (`px-margin-desktop`).

---
*Last Updated: May 2026 — Refined for Project Portfolio Expansion.*
