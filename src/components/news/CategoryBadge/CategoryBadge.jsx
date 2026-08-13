import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../../data/categories';
import './CategoryBadge.css';

export const CategoryBadge = ({ category, categorySlug, className = '' }) => {
  const catObj = categories.find(c => c.slug === categorySlug || c.name === category);
  const color = catObj ? catObj.color : '#E63946';

  return (
    <Link
      to={`/category/${categorySlug || 'national'}`}
      className={`category-badge ${className}`}
      style={{ backgroundColor: color }}
    >
      {category || 'News'}
    </Link>
  );
};

export default CategoryBadge;
