import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../../data/categories';
import { useLanguage } from '../../../context/LanguageContext';
import './CategoryBadge.css';

export const CategoryBadge = ({ category, categorySlug, className = '' }) => {
  const { translateCategory } = useLanguage();
  const slug = categorySlug || 'national';
  const catObj = categories.find(c => c.slug === slug || c.name === category);
  const color = catObj ? catObj.color : '#E63946';

  const translated = translateCategory(slug);
  const displayName = translated?.name || category || 'News';

  return (
    <Link
      to={`/category/${slug}`}
      className={`category-badge ${className}`}
      style={{ backgroundColor: color }}
    >
      {displayName}
    </Link>
  );
};

export default CategoryBadge;
