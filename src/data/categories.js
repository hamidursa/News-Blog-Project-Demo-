export const categories = [
  {
    id: "national",
    name: "National",
    nameBn: "জাতীয়",
    slug: "national",
    description: "Latest news, administration updates, and national affairs from across Bangladesh.",
    color: "#E63946"
  },
  {
    id: "politics",
    name: "Politics",
    nameBn: "রাজনীতি",
    slug: "politics",
    description: "In-depth political analysis, government policies, and election updates.",
    color: "#1D3557"
  },
  {
    id: "hill-tracts",
    name: "Hill Districts",
    nameBn: "হিল ট্র্যাক্টস",
    slug: "hill-tracts",
    description: "Specialized coverage of news, culture, tourism, and community life in Chittagong Hill Tracts.",
    color: "#2A9D8F"
  },
  {
    id: "science-tech",
    name: "Science & Tech",
    nameBn: "বিজ্ঞান ও প্রযুক্তি",
    slug: "science-tech",
    description: "Discover tech innovations, artificial intelligence, gadgets, and scientific breakthroughs.",
    color: "#E76F51"
  },
  {
    id: "education",
    name: "Education",
    nameBn: "শিক্ষা",
    slug: "education",
    description: "Updates on schools, university admissions, exam schedules, and education policies.",
    color: "#457B9D"
  },
  {
    id: "economy",
    name: "Economy & Finance",
    nameBn: "অর্থনীতি",
    slug: "economy",
    description: "Market trends, trade, banking, inflation, business insights, and fiscal policies.",
    color: "#F4A261"
  },
  {
    id: "world",
    name: "World News",
    nameBn: "আন্তর্জাতিক",
    slug: "world",
    description: "Global headlines, international diplomacy, regional geopolitics, and global affairs.",
    color: "#3D5A80"
  },
  {
    id: "sports",
    name: "Sports",
    nameBn: "খেলাধুলা",
    slug: "sports",
    description: "Cricket, football, Olympics, match reports, player statistics, and sports commentary.",
    color: "#E63946"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    nameBn: "বিনোদন",
    slug: "entertainment",
    description: "Movies, music, drama, celebrity news, pop culture, and media reviews.",
    color: "#9C89B8"
  },
  {
    id: "lifestyle",
    name: "Lifestyle & Health",
    nameBn: "জীবনযাপন",
    slug: "lifestyle",
    description: "Wellness, food, travel, fashion, relationships, and healthy living tips.",
    color: "#52B788"
  }
];

export const getCategoryBySlug = (slug) => categories.find(cat => cat.slug === slug);
