# 📰 Third Angle - Premium Responsive News Blog Application

[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Third Angle** is a premium, state-of-the-art dual-language (English & Bengali) news portal and blogging web application built with **React 19**, **Vite**, and **Tailwind CSS v4**. The application features rich visual aesthetics, interactive micro-animations, touch-enabled carousels, and fluid layout responsiveness optimized for all viewport sizes from small mobile screens (320px) up to ultra-wide desktop monitors.

---

## 🌟 Key Features

* **🌐 Dual-Language Sections (Bilingual)**: Integrates dedicated English and Bengali sections (বাংলা, সর্বাধিক পঠিত) with appropriate localized styling and typography.
* **📱 100% Fluid Responsiveness**: Tested and optimized for flawless viewing across all mobile, tablet, and desktop breakpoints with zero horizontal scrollbars or cutoffs.
* **⚡ Sticky Header with Dropdown & Search Overlay**: Solid backdrop (`bg-[#F2F2F2]`) sticky navigation with relative-positioned desktop "More" dropdowns and a smooth transition-based search toggle.
* **🍔 Sliding Mobile Navigation Drawer**: Sleek slide-in categories navigation panel triggered via hamburger menu, using a highly reliable positional transition and absolute z-indexing.
* **🎠 Touch-Enabled Carousels**: Beautiful, responsive, swipe-capable news carousels powered by `React-Slick` (`slidesToShow: 1` on mobile, `2` on small tablets, `3` on tablets, and `4` on desktop) with automatic control hiding on touchscreens.
* **🎨 Premium Aesthetic Cards**: Clean, uniform news list rows and grid columns utilizing CSS Line-Clamping (`line-clamp-2` / `line-clamp-3`) and fluid images with `object-cover` and `shrink-0` definitions to guarantee consistent block layouts.
* **✨ Dynamic Separation Lines**: Dynamically scaling horizontal separators built with CSS Flexbox (`flex-1 h-px bg-black`) replacing fragile hardcoded pixel dividers.

---

## 🛠️ Technology Stack

| Technology / Library | Description |
| :--- | :--- |
| **React 19** | Core frontend component library |
| **Vite** | Blazing fast next-generation build tool & bundler |
| **Tailwind CSS v4** | Modern utility-first CSS framework with native `@tailwindcss/vite` integration |
| **React Icons** | Premium vector icon packs (Ti, Io, Md, Bs) |
| **React-Slick & Slick-Carousel** | Smooth, high-performance carousel components with full breakpoint customizability |

---

## 📁 Codebase Directory Structure

```text
├── dist/                     # Compiled production-ready web assets
├── public/                   # Static browser assets (Favicons, web manifests)
└── src/
    ├── assets/               # Local media assets (logos, banner pictures, etc.)
    │   └── Image/            # Grid, category and slider images
    ├── Components/           # React Components
    │   ├── Layouts/          # Structural & modular layout modules
    │   │   ├── Container.jsx # Responsive max-width viewport boundary wrapper
    │   │   ├── NewsHead.jsx  # Individual news listing rows
    │   │   ├── TopNews.jsx   # Hero news display card (English)
    │   │   ├── TopNewsBn.jsx # Hero news display card (Bengali)
    │   │   ├── TopHead.jsx   # Block headers & description templates
    │   │   └── ...
    │   ├── UI/               # Reusable visual interfaces
    │   │   ├── Category.jsx  # Mobile drawer and navigation categories
    │   │   ├── MostRead.jsx  # Responsive English touchscreen slider
    │   │   ├── MostReadBn.jsx# Responsive Bengali touchscreen slider
    │   │   └── ...
    │   ├── Header.jsx        # Sticky navigation header
    │   ├── Footer.jsx        # Grid-based clean structured footer
    │   └── Natinal_Addm.jsx  # Grid-based double-column section
    ├── App.jsx               # Entry-level React root orchestrator
    ├── index.css             # Tailwind imports & baseline design tokens
    └── main.jsx              # Main virtual DOM mounting node
```

---

## ⚙️ Installation & Development Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm`.

### 1. Clone the Repository
```bash
git clone https://github.com/hamidursa/News-Blog-Project-Demo-.git
cd News-Blog-Project-Demo-
```

### 2. Install Dependencies
Install the required packages, including development packages and layout UI libraries:
```bash
npm install
```

### 3. Run Development Server
Spin up the local development hot-reloading server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to interact with the application.

### 4. Build for Production
To bundle and optimize the project for production deployment:
```bash
npm run build
```
This generates a highly optimized static build folder under `/dist/`.

---

## 🖥️ Responsive Optimization & UI Audit Details

A meticulous visual audit was performed across desktop, tablet, and narrow-mobile (such as 320px up to 501px viewports) viewports. The following major layout bugs were resolved:

* **Fixed-Pixel Constraints Eliminated**: Hardcoded layout blocks (like `w-[580px]` and `w-[380px]`) were replaced with fluid flexbox percentages (`w-full`, `flex-1`) to enable modular resizing.
* **Headline Truncation Overhauled**: Replaced raw character cutting with dynamic line-clamping CSS styling so that the headlines wrap naturally without breaking, clipping, or text overlapping.
* **Component-Level Overflow Resolved**: Optimized image wrappers with `shrink-0` and `object-cover` so that sidebar and news lists never experience image scaling deformation.
* **Clean Transition Drawer**: Converted category popups to slide out with a beautiful and robust CSS transition on the `left` property.

---

## 📄 License
This project is licensed under the MIT License. Feel free to use and distribute it!

---
*Developed with 💖 to provide a premium reading experience.*
