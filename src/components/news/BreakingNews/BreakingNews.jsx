import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../common/Icon/Icon';
import './BreakingNews.css';

export const BreakingNews = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  // Duplicate items array to ensure seamless infinite marquee looping
  const marqueeItems = [...items, ...items];

  return (
    <div className="breaking-news-bar">
      <div className="container breaking-container">
        <div className="breaking-label">
          <Icon name="zap" className="zap-icon" />
          <span>BREAKING NEWS</span>
        </div>

        <div className="breaking-marquee-wrapper">
          <div className="breaking-marquee-track">
            {marqueeItems.map((article, idx) => (
              <Link
                key={`${article.id}-${idx}`}
                to={`/news/${article.slug}`}
                className="breaking-marquee-item"
              >
                <span className="breaking-bullet">•</span>
                <span className="breaking-item-category">[{article.category}]</span>
                <span className="breaking-item-title">{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
