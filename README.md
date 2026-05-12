# TrueNest | Truly In Nature

A high-fidelity web platform for **TrueNest**, a boutique real estate collective specializing in **Biophilic Urbanism** and "Quiet Luxury" residential sanctuaries in Bangalore.

## 🌿 Philosophy: Biophilic Urbanism
TrueNest is built on the intersection of brutalist architectural honesty and the restorative power of nature. Every screen and interaction reflects our commitment to:
- **Tactile Materiality**: Sandstone, concrete, and earth-toned palettes.
- **Ethereal Atmosphere**: Misty mountain vistas and sunset-facing orientations.
- **Grounded Luxury**: Luxury found in the essential, not the excessive.

---

## 🚀 Tech Stack & Infrastructure

- **Core**: Semantic HTML5, Vanilla JavaScript (ES6+).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design system.
- **Tooling**: [Vite](https://vitejs.dev/) for high-performance local development and asset bundling.
- **Architecture**: Modular component-based structure using dynamic JavaScript injection for shared elements (Header/Footer).

### Design Tokens
- **Typography**: 
  - *Display*: EB Garamond (Serif, Elegant)
  - *Body/Labels*: Metropolis (Sans-serif, Modern)
- **Palette**: A curated set of surface-container levels, primary ambers, and neutral outlines defined in `assets/js/tailwind.config.js`.

---

## 📂 Project Structure

```text
truenest-1/
├── assets/
│   ├── images/         # Unified local media repository (elevations, interiors, icons)
│   ├── js/
│   │   ├── components.js   # Shared component injection logic
│   │   └── tailwind.config.js # Custom Tailwind theme & design tokens
├── index.html          # Landing Experience
├── projects.html       # Portfolio Gallery
├── retreat76.html      # Project Detail: Retreat 76
├── hillsandskies.html  # Project Detail: Hills & Skies
├── story.html          # Narrative & Leadership
├── inquiries.html      # High-fidelity lead capture
└── package.json        # Project dependencies and scripts
```

---

## 🛠️ Development & Deployment

### Local Development
The project uses Vite for a lightning-fast development experience.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   # OR
   npx vite
   ```

### Offline Capability
All project imagery has been localized to `assets/images/`. To maintain full offline functionality:
- Ensure the `hero-fog.mp4` video is present in `assets/images/`.
- For 100% offline styling, replace the Tailwind CDN script with a local build using the Tailwind CLI.

---

## ✨ Key Features
- **Haversine Distance Engine**: Real-time aerial distance calculation from project coordinates to key landmarks.
- **Compass Layout**: Grayscale-to-color reveal animations (3s duration) for editorial storytelling.
- **Modular Injection**: Shared header and footer logic to ensure DRY code across all pages.
- **Bento-Style Grids**: Modern, responsive layouts for amenities and unit specifications.

---

## 🏗️ Future Roadmap
- [ ] Integration of a backend email handler for the "Download Brochure" lead capture.
- [ ] Implementation of a local Tailwind CSS build process.

---
*© 2026 TrueNest. Crafted with intention in Bangalore.*
