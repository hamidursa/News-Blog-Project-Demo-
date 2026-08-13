import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import NewsCard from '../NewsCard/NewsCard';
import './RelatedNews.css';

export const RelatedNews = ({ articles = [] }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="related-news-section">
      <SectionTitle title="Related Coverage" />
      <div className="grid-3">
        {articles.map((art) => (
          <NewsCard key={art.id} article={art} variant="vertical" />
        ))}
      </div>
    </section>
  );
};

export default RelatedNews;
