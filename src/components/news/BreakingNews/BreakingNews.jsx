import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../common/Icon/Icon';
import './BreakingNews.css';

export const BreakingNews = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const currentArticle = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="breaking-news-bar">
      <div className="container breaking-container">
        <div className="breaking-label">
          <Icon name="zap" className="zap-icon" />
          <span>BREAKING</span>
        </div>

        <div className="breaking-content">
          <Link to={`/news/${currentArticle.slug}`} className="breaking-link">
            <span className="breaking-category">[{currentArticle.category}]</span>
            <span className="breaking-title">{currentArticle.title}</span>
          </Link>
        </div>

        <div className="breaking-controls">
          <button onClick={handlePrev} className="breaking-arrow" aria-label="Previous headline">
            ‹
          </button>
          <span className="breaking-counter">{currentIndex + 1}/{items.length}</span>
          <button onClick={handleNext} className="breaking-arrow" aria-label="Next headline">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
