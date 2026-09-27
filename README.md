# NovaSphere — Next-Generation Cloud Intelligence & Edge Platform

A high-performance, modern static website built with **React** and **Vite**, showcasing autonomous edge computing, zero-trust cryptographic enclaves, and sub-millisecond AI workloads.

---

## 🚀 Technology Stack

| Layer | Technology | Purpose & Implementation Details |
| :--- | :--- | :--- |
| **UI Framework** | [React 19](https://react.dev/) | Component-driven architecture using functional components, modern hooks (`useState`, `useEffect`), and dynamic reactive state. |
| **Build & Tooling** | [Vite 8](https://vite.dev/) | Lightning-fast development environment with Hot Module Replacement (HMR) and optimized Rolldown/ESBuild production bundling. |
| **Styling & Design System** | Vanilla CSS3 (Custom Design System) | Native CSS custom properties (variables), glassmorphism (`backdrop-filter`), responsive CSS grid/flexbox, radial gradient auras, and smooth micro-animations without external heavy CSS frameworks. |
| **Iconography** | [Lucide React](https://lucide.dev/) | Crisp, lightweight SVG icons optimized for tree-shaking and dynamic rendering. |
| **Typography** | Google Fonts | `Plus Jakarta Sans` for modern headings & body copy, and `JetBrains Mono` for real-time telemetry and metric stats. |
| **Linter & Code Quality** | [Oxlint](https://oxc.rs/) | High-speed Rust-based JavaScript/JSX linter for code health and syntax validation. |
| **Assets & Visuals** | 3D Octane Visuals & SVGs | High-resolution 3D holographic cloud computing and cybersecurity enclave digital visual assets. |

---

## 🌟 Key Features & Interactive Components

- **Theme Engine (Dark & Light Mode)**: Dynamic theme switching between sleek midnight dark mode and high-contrast light mode with `localStorage` persistence and instant CSS variable re-binding.
- **Interactive Hero Console**: Real-time simulated telemetry dashboard with tab switching (*Global Traffic*, *AI Compute*, *Zero-Trust Enclave*) and toggleable autonomous auto-scaling.
- **Live Edge Topology & Savings Calculator**: Interactive sliders adjusting *Monthly Request Volume* (1M–50M) and *Edge Regions* (2–18 PoPs) with instant dynamic P99 latency, bandwidth, and legacy cloud cost-savings calculation.
- **Interactive Architecture Showcase**: Dual-column interactive feature highlight of AMD SEV-SNP hardware-attested confidential computing enclaves and Anycast mesh routing.
- **Filterable Capabilities Grid**: Interactive category filters (*All*, *Compute & Edge*, *Security & Enclaves*, *AI & Observability*) with glassmorphism hover lift effects.
- **Flexible Pricing Matrix**: Monthly vs. Annual billing toggle with automatic 25% annual discount calculation and plan selector triggers.
- **Searchable FAQ Accordion**: Real-time query search filtering questions and answers dynamically with smooth expand/collapse transitions.
- **Interactive Walkthrough Modal**: Video/interactive preview modal triggered from the Hero CTA.
- **Dynamic Toast Notification System**: Animated, non-intrusive floating toasts providing immediate user feedback for all interactive buttons and forms.
- **SEO & Accessibility**: Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, single `<h1>`), Open Graph meta tags, meta descriptions, and unique element IDs.

---

## 📁 Project Structure

```text
node-static-app/
├── public/
│   ├── hero-network.jpg          # 3D cloud computing network visual asset
│   └── security-mesh.jpg         # 3D cybersecurity enclave visual asset
├── src/
│   ├── assets/                   # Static icons and logos
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky frosted glass navbar & mobile drawer
│   │   ├── Hero.jsx              # Hero headline, stats, and interactive console
│   │   ├── PartnerRibbon.jsx     # Trusted partner brands ticker
│   │   ├── Features.jsx          # Filterable capabilities cards
│   │   ├── LivePlayground.jsx    # Real-time interactive cloud topology simulator
│   │   ├── ArchitectureShowcase.jsx # Hardware enclave deep-dive component
│   │   ├── Pricing.jsx           # Monthly/Annual pricing calculator
│   │   ├── Testimonials.jsx      # Social proof reviews & rating stars
│   │   ├── FAQ.jsx               # Searchable accordion FAQ
│   │   ├── ContactCTA.jsx        # Sandbox deployment & newsletter form
│   │   ├── Footer.jsx            # Semantic footer with live status indicator
│   │   ├── DemoModal.jsx         # Walkthrough interactive modal popup
│   │   └── Toast.jsx             # Floating animated feedback notifications
│   ├── App.css                   # Component-specific styles and animations
│   ├── App.jsx                   # Main application root & state controller
│   ├── index.css                 # Global CSS design system & theme variables
│   └── main.jsx                  # React DOM root entrypoint
├── index.html                    # HTML5 entry with Google Fonts & SEO metadata
├── package.json                  # Dependencies and execution scripts
├── vite.config.js                # Vite build and plugin configurations
└── README.md                     # Project documentation & tech stack
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js (v18.0.0 or higher)** and **npm** installed:

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
# Install dependencies
npm install
```

### Running Locally

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build

To build the static production bundle:

```bash
npm run build
```

The compiled, minified, and optimized static assets will be output to the `dist/` directory, ready for deployment to any static host (Vercel, Cloudflare Pages, Netlify, GitHub Pages, AWS S3, etc.).

### Preview Production Build

To locally preview the production build from the `dist/` folder:

```bash
npm run preview
```

---

## 📄 License

This project is licensed under the MIT License.
