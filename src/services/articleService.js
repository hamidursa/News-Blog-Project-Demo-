import { articles } from '../data/articles';

const parseViews = (str) => {
  if (!str) return 0;
  let num = parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
  if (str.includes('K') || str.includes('k') || str.includes('হাজার')) {
    num *= 1000;
  }
  return num;
};

export const articleService = {
  getAll: () => [...articles],
  
  getBySlug: (slug) => {
    if (!slug) return null;
    return articles.find(article => article.slug.toLowerCase() === slug.toLowerCase()) || null;
  },

  getByCategory: (categorySlug) => {
    if (!categorySlug || categorySlug === 'all') return [...articles];
    const cleanSlug = categorySlug.toLowerCase().trim();
    return articles.filter(article => article.categorySlug.toLowerCase() === cleanSlug);
  },

  getHeroArticle: () => {
    return articles.find(a => a.isHero) || articles[0];
  },

  getFeatured: (limit = 4) => {
    return articles.filter(a => a.isFeatured && !a.isHero).slice(0, limit);
  },

  getBreaking: () => {
    return articles.filter(a => a.isBreaking);
  },

  getTrending: (limit = 5) => {
    return articles.filter(a => a.isTrending).slice(0, limit);
  },

  getMostRead: (limit = 6) => {
    return [...articles]
      .sort((a, b) => parseViews(b.viewCount) - parseViews(a.viewCount))
      .slice(0, limit);
  },

  getLatest: (limit = 12) => {
    return [...articles].slice(0, limit);
  },

  getEditorPicks: (limit = 4) => {
    // Pick diverse featured/trending articles across different categories
    const picks = articles.filter(a => a.isFeatured && !a.isHero);
    return picks.length >= limit ? picks.slice(1, 1 + limit) : articles.slice(3, 3 + limit);
  },

  getRelated: (currentArticleId, categorySlug, limit = 3) => {
    return articles
      .filter(a => a.id !== currentArticleId && a.categorySlug === categorySlug)
      .slice(0, limit);
  },

  search: (query) => {
    if (!query || query.trim() === '') return [];
    const q = query.toLowerCase().trim();
    return articles.filter(article => 
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      (article.topic && article.topic.toLowerCase().includes(q)) ||
      (article.tags && article.tags.some(t => t.toLowerCase().includes(q)))
    );
  }
};

export default articleService;
