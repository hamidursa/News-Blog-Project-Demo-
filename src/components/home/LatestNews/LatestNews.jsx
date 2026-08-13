import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import NewsCard from '../../news/NewsCard/NewsCard';
import Sidebar from '../../layout/Sidebar/Sidebar';
import MostRead from '../MostRead/MostRead';
import AdBanner from '../../advertisement/AdBanner';
import './LatestNews.css';

export const LatestNews = ({ articles = [] }) => {
  return (
    <section className="latest-news-section">
      <div className="container latest-news-container">
        <div className="latest-news-main">
          <SectionTitle title="Latest News" linkTo="/category/national" />
          <div className="grid-3">
            {articles.map((art) => (
              <NewsCard key={art.id} article={art} variant="vertical" />
            ))}
          </div>
        </div>
        <div className="latest-news-sidebar">
          <MostRead title="Most Read" />
          <AdBanner slot="sidebar" />
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
