import { articles } from '../data/articles';

export const articleService = {
  getAll: () => [...articles],
  
  getBySlug: (slug) => {
    return articles.find(article => article.slug === slug) || null;
  },

  getByCategory: (categorySlug) => {
    if (!categorySlug || categorySlug === 'all') return [...articles];
    return articles.filter(article => article.categorySlug === categorySlug);
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
    return [...articles].sort((a, b) => parseFloat(b.viewCount) - parseFloat(a.viewCount)).slice(0, limit);
  },

  getEditorPicks: (limit = 4) => {
    return articles.slice(2, 2 + limit);
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
      (article.tags && article.tags.some(t => t.toLowerCase().includes(q)))
    );
  }
};
