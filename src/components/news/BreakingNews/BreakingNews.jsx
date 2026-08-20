import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import Icon from '../../common/Icon/Icon';
import './BreakingNews.css';

export const BreakingNews = ({ items = [] }) => {
  const { t, translateArticle, translateCategory } = useLanguage();
  if (!items || items.length === 0) return null;

  // Translate articles
  const translatedItems = items.map(art => translateArticle(art));
  const marqueeItems = [...translatedItems, ...translatedItems];

  return (
    <div className="breaking-news-bar">
      <div className="container breaking-container">
        <div className="breaking-label">
          <Icon name="zap" className="zap-icon" />
          <span>{t('breakingNews')}</span>
        </div>

        <div className="breaking-marquee-wrapper">
          <div className="breaking-marquee-track">
            {marqueeItems.map((article, idx) => {
              const catObj = translateCategory(article.categorySlug);
              const catName = catObj?.name || article.category;
              return (
                <Link
                  key={`${article.id}-${idx}`}
                  to={`/news/${article.slug}`}
                  className="breaking-marquee-item"
                >
                  <span className="breaking-bullet">•</span>
                  <span className="breaking-item-category">[{catName}]</span>
                  <span className="breaking-item-title">{article.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
