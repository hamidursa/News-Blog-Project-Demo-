import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import CategoryBadge from '../../news/CategoryBadge/CategoryBadge';
import Icon from '../../common/Icon/Icon';
import './TrendingSection.css';

export const TrendingSection = ({ articles = [] }) => {
  const { t, translateArticle } = useLanguage();
  if (!articles || articles.length === 0) return null;

  return (
    <section className="trending-section">
      <div className="container">
        <SectionTitle title={t('trendingNews')} linkTo="/search?q=trending" />
        <div className="trending-grid">
          {articles.map((art, index) => {
            const translated = translateArticle(art);
            return (
              <Link to={`/news/${translated.slug}`} key={translated.id} className="trending-card">
                <span className="trending-rank">{String(index + 1).padStart(2, '0')}</span>
                <div className="trending-card-body">
                  <CategoryBadge category={translated.category} categorySlug={translated.categorySlug} className="trending-badge" />
                  <h3 className="trending-title line-clamp-2">{translated.title}</h3>
                  <div className="trending-meta">
                    <span><Icon name="clock" /> {translated.readingTime}</span>
                    <span><Icon name="eye" /> {translated.viewCount}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
