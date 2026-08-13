import { categories } from '../data/categories';

export const categoryService = {
  getAll: () => [...categories],
  getBySlug: (slug) => categories.find(c => c.slug === slug) || null
};
