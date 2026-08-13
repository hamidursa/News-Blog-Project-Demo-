import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import NewsCard from '../../news/NewsCard/NewsCard';
import './CategorySection.css';

export const CategorySection = ({ title, categorySlug, articles = [], dark = false }) => {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section className={`category-section ${dark ? 'dark-section' : ''}`}>
      <div className="container">
        <SectionTitle
          title={title}
          linkTo={`/category/${categorySlug}`}
          dark={dark}
        />

        <div className="category-section-grid">
          <div className="lead-col">
            <NewsCard article={leadArticle} variant="vertical" />
          </div>
          <div className="list-col">
            {sideArticles.map((art) => (
              <NewsCard key={art.id} article={art} variant="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
