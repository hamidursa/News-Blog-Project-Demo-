# Third Angle News Portal

A premium, modern, production-ready news blog built with **React**, **React Router DOM**, and **vanilla CSS**. Third Angle is a bilingual (English & Bengali) editorial platform delivering independent journalism.

---

## Live Features

- **Breaking News Ticker** — Smooth continuous right-to-left marquee with pause-on-hover
- **Multi-page SPA Routing** — Home, Article Detail, Category, Search, About, Contact, Privacy, Terms, 404
- **Working Search** — Full-text search overlay and dedicated search results page
- **Category Filters** — Latest / Most Read / Trending filters on every category page
- **Newsletter Subscription** — Email validation with delivery to `hamidur.dev@gmail.com`
- **Working Navigation** — Mobile drawer, dropdown menus, active states, scroll-to-top
- **Code-split Lazy Loading** — Each page loads independently for fast initial render

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI component library |
| Vite 7 | Build tool and dev server |
| React Router DOM v7 | Client-side routing |
| Vanilla CSS3 | Custom design tokens, grid, animations |
| JavaScript ES6+ | Business logic and state |
| Formspree | Newsletter form delivery |

---

## Project Structure

```
src/
├── assets/Image/           # Local news images (WebP/PNG)
├── components/
│   ├── advertisement/      # Ad banner placeholder
│   ├── common/             # Badge, Breadcrumb, Button, EmptyState, Icon,
│   │                       # Input, Loader, Pagination, ScrollToTop,
│   │                       # SectionTitle, Skeleton
│   ├── home/               # CategorySection, EditorPicks, HeroSection,
│   │                       # LatestNews, MostRead, TrendingSection
│   ├── layout/             # Footer, Layout, MobileMenu, Navbar, Sidebar
│   ├── news/               # ArticleNavigation, AuthorCard, BreakingNews,
│   │                       # CategoryBadge, FeaturedCard, NewsCard,
│   │                       # RelatedNews, ShareButtons, SmallCard, TagList
│   ├── newsletter/         # Newsletter form component
│   └── search/             # SearchOverlay component
├── constants/              # Route paths, breakpoints
├── context/                # SearchContext (global search state)
├── data/                   # articles.js, categories.js, authors.js,
│                           # navigation.js, siteConfig.js
├── hooks/                  # useDebounce, useMediaQuery, useScrollPosition
├── pages/                  # Home, NewsDetails, Category, Search,
│                           # About, Contact, Privacy, Terms, NotFound
├── services/               # articleService.js, categoryService.js
├── styles/                 # variables.css, reset.css, typography.css,
│                           # animations.css, utilities.css
├── utils/                  # formatDate.js, slugify.js
├── App.jsx                 # Router with lazy loading
├── index.css               # Global CSS entry point
└── main.jsx                # Application mount point
```

---

## Installation

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/hamidursa/News-Blog-Project-Demo-.git
cd News-Blog-Project-Demo-

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
# Open http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Newsletter Configuration

The newsletter form submits to a **Formspree** endpoint. To configure delivery to your own email:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID (e.g., `xvgopqbw`)
3. Update the fetch URL in [`Newsletter.jsx`](src/components/newsletter/Newsletter.jsx):

```js
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });
```

Currently configured to deliver to: `hamidur.dev@gmail.com`

---

## Pages and Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section, breaking news ticker, trending, latest, category sections |
| `/news/:slug` | Article | Full article with author, tags, share, related articles |
| `/category/:slug` | Category | Filterable article listing with pagination |
| `/search` | Search | Full-text search with live suggestions |
| `/about` | About | Company story, team, stats, timeline |
| `/contact` | Contact | Contact form + office information |
| `/privacy` | Privacy Policy | Legal text |
| `/terms` | Terms of Service | Legal text |
| `*` | 404 | Custom not-found page |

---

## Design System

Defined in [`src/styles/variables.css`](src/styles/variables.css):

| Token | Value |
|---|---|
| `--color-primary` | `#E63946` (Red) |
| `--color-secondary` | `#1D3557` (Navy) |
| `--color-bg` | `#F8F9FA` |
| `--color-surface` | `#FFFFFF` |
| `--container-width` | `1380px` |
| `--font-primary` | Inter |
| `--font-heading` | Poppins |
| `--font-bengali` | Noto Serif Bengali |

---

## Future Development (Admin Panel Roadmap)

All data is abstracted through service files:
- [`articleService.js`](src/services/articleService.js) — `getAll()`, `getBySlug()`, `search()`, `getByCategory()`
- [`categoryService.js`](src/services/categoryService.js) — Category lookup and metadata

Replacing static JSON with a REST API or Firebase backend requires only updating these service methods — no UI component changes needed.

---

## License

MIT License — free to use, modify, and distribute.
