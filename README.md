# 📰 Third Angle — Premium News Portal & Editorial Blog

> **Third Angle (তৃতীয় কোণ)** is a high-performance, responsive, dual-language (English & Bengali) digital news portal and editorial blog. Built with **React 19**, **React Router DOM**, **Vanilla CSS (Design Tokens)**, and **JavaScript (ES6+)**, it delivers a clean, modern, and readable news experience inspired by leading editorial outlets like *BBC*, *Bloomberg*, *CNN*, and *TechCrunch*.

---

## ✨ Features & Highlights

- **🎨 Modern Editorial Design System**: Pure Vanilla CSS implementation using CSS Custom Properties (`:root`), modular stylesheets, crisp typography scale (*Inter*, *Poppins*, *Roboto*, *Noto Serif Bengali*), and curated color system.
- **⚡ Zero UI Library Overhead**: Built completely without Tailwind CSS, Bootstrap, Material UI, Redux, or third-party UI component libraries for optimal bundle size and full stylistic control.
- **🌐 Dual-Language Support**: Dedicated sections and components tailored for bilingual English and Bengali (বাংলা) editorial content.
- **📱 100% Fluid Responsiveness**: Optimized across all viewports (from 320px mobile devices up to 4K desktop screens) with flexible CSS Grid, Flexbox layouts, and slide-in drawer mobile menu.
- **🚀 React Router DOM Routing & Lazy Loading**: Page routing with code-splitting (`React.lazy` & `Suspense`) across 9 page views:
  - **Home**: Hero banner, breaking news bar, trending articles grid, category highlights, editor's picks, and newsletter widget.
  - **News Details**: Full article layout, author card, reading time, view count, social share buttons, tag lists, prev/next navigation, and related stories.
  - **Category Page**: Filterable category listing with pagination.
  - **Search Page & Overlay**: Live search modal overlay and full search results view with query suggestions.
  - **About Page**: Company story, mission & vision, interactive stats, editorial team showcase, and company timeline.
  - **Contact Page**: Interactive contact form, newsroom office cards, and map indicator.
  - **Privacy & Terms**: Comprehensive static legal pages.
  - **404 Page**: Custom animated empty state page.
- **🔍 Advanced SEO & Open Graph**: Full Meta tag optimization, Open Graph (`og:*`), Twitter Cards, canonical URL tags, and Schema.org `NewsMediaOrganization` JSON-LD structured data.
- **🔌 Future-Ready Architecture**: Centralized data services (`articleService.js`, `categoryService.js`) abstracting data fetching logic to allow seamless backend / Admin Panel integration without UI code refactoring.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component library with Hooks and Context |
| **Vite 7** | Next-generation frontend build tool and dev server |
| **React Router DOM v7** | Single Page Application (SPA) client-side routing |
| **Vanilla CSS3** | Custom design tokens, CSS variables, keyframe animations, and flex/grid layouts |
| **JavaScript (ES6+)** | Pure functional logic and state management |
| **HTML5 & SVG** | Semantic structure, accessibility markup, and custom inline vector icons |

---

## 📁 Project Directory Structure

```text
src/
├── assets/                  # Local WebP images and branding media
├── components/
│   ├── advertisement/       # AdBanner.jsx + AdBanner.css (Ad placeholders)
│   ├── common/              # Badge, Breadcrumb, Button, EmptyState, Icon, Input,
│   │                        # Loader, Pagination, ScrollToTop, SectionTitle, Skeleton
│   ├── home/                # CategorySection, EditorPicks, HeroSection, LatestNews, MostRead
│   ├── layout/              # Footer, Header, Layout, MobileMenu, Navbar, Sidebar
│   ├── news/                # ArticleNavigation, AuthorCard, BreakingNews, CategoryBadge,
│   │                        # FeaturedCard, NewsCard, RelatedNews, ShareButtons, SmallCard, TagList
│   ├── newsletter/          # Newsletter.jsx + Newsletter.css
│   └── search/              # SearchOverlay.jsx + SearchOverlay.css
├── constants/               # Route path definitions & breakpoint constants
├── context/                 # SearchContext.jsx (Global search state)
├── data/                    # Articles, categories, authors, navigation, and site config JSON/JS
├── hooks/                   # Custom hooks (useDebounce, useMediaQuery, useScrollPosition)
├── pages/                   # Home, NewsDetails, Category, Search, About, Contact, Privacy, Terms, NotFound
├── services/                # Data access layers (articleService, categoryService)
├── styles/                  # Design tokens (variables, reset, typography, animations, utilities)
├── utils/                   # Formatting helpers (formatDate, slugify)
├── App.jsx                  # Main React Router setup with lazy loading
├── index.css                # Style entry point
└── main.jsx                 # Application entry point
```

---

## ⚙️ Installation & Local Setup Guide

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### 1. Clone Repository
```bash
git clone https://github.com/hamidursa/News-Blog-Project-Demo-.git
cd News-Blog-Project-Demo-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your web browser.

### 4. Production Build & Preview
```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🎯 SEO & Site Optimization Details

1. **Title & Meta Tag Structure**: Title tags are formatted cleanly as `Title | Category` without double-hyphen (`--`) breaks.
2. **Open Graph & Twitter Cards**: Native social preview image support for shared news URLs.
3. **Structured Data**: Embedded Schema.org JSON-LD script for rich snippets on Google Search.
4. **Performance Optimization**: Code-splitting via `React.lazy` ensures fast initial page loads (bundle initial JS gzip size < 90kB).

---

## 🔒 Future Phase: Admin Panel Roadmap

The application architecture is structured to prepare for a headless backend integration (Node.js/Express, Supabase, Firebase, or REST API):
- **API Layer Isolation**: `src/services/articleService.js` contains methods like `getAll()`, `getBySlug()`, `search()`. In Phase 2, replacing static data returns with `fetch()` calls requires zero refactoring on UI components.
- **Role Scoping**: Public website operates independently of user authentication. The upcoming Admin Panel will reside under secure authentication guards.

---

## 📄 License
This project is licensed under the **MIT License**.
