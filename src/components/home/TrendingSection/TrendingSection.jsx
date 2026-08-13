import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CategoryBadge from '../../news/CategoryBadge/CategoryBadge';
import Icon from '../../common/Icon/Icon';
import './TrendingSection.css';

export const TrendingSection = ({ articles = [] }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="trending-section">
      <div className="container">
        <SectionTitle title="Trending Now" linkTo="/search?q=trending" />
        <div className="trending-grid">
          {articles.map((art, index) => (
            <Link to={`/news/${art.slug}`} key={art.id} className="trending-card">
              <span className="trending-rank">{String(index + 1).padStart(2, '0')}</span>
              <div className="trending-card-body">
                <CategoryBadge category={art.category} categorySlug={art.categorySlug} className="trending-badge" />
                <h3 className="trending-title line-clamp-2">{art.title}</h3>
                <div className="trending-meta">
                  <span><Icon name="clock" /> {art.readingTime}</span>
                  <span><Icon name="eye" /> {art.viewCount}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
