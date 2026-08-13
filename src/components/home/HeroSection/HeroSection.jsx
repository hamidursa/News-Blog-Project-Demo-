import React from 'react';
import FeaturedCard from '../../news/FeaturedCard/FeaturedCard';
import NewsCard from '../../news/NewsCard/NewsCard';
import './HeroSection.css';

export const HeroSection = ({ heroArticle, sideArticles = [] }) => {
  if (!heroArticle) return null;

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-main">
          <FeaturedCard article={heroArticle} />
        </div>
        <div className="hero-sidebar-grid">
          {sideArticles.map((art) => (
            <NewsCard key={art.id} article={art} variant="vertical" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
