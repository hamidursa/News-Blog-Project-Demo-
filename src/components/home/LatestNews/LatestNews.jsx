import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import NewsCard from '../../news/NewsCard/NewsCard';
import MostRead from '../MostRead/MostRead';
import AdBanner from '../../advertisement/AdBanner';
import './LatestNews.css';

export const LatestNews = ({ articles = [] }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [displayCount, setDisplayCount] = useState(9);

  const tabs = [
    { label: t('all'), slug: 'all' },
    { label: t('national'), slug: 'national' },
    { label: t('politics'), slug: 'politics' },
    { label: t('scienceTech'), slug: 'science-tech' },
    { label: t('economy'), slug: 'economy' },
    { label: t('sports'), slug: 'sports' },
    { label: t('world'), slug: 'world' }
  ];

  const filtered = useMemo(() => {
    if (activeTab === 'all') return articles;
    return articles.filter(a => a.categorySlug === activeTab);
  }, [articles, activeTab]);

  const visibleArticles = filtered.slice(0, displayCount);

  const handleTabChange = (slug) => {
    setActiveTab(slug);
    setDisplayCount(9);
  };

  return (
    <section className="latest-news-section">
      <div className="container latest-news-container">
        <div className="latest-news-main">
          <div className="latest-news-header">
            <SectionTitle title={t('latestNews')} />
            <div className="latest-tabs" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.slug}
                  role="tab"
                  aria-selected={activeTab === tab.slug}
                  className={`latest-tab-btn ${activeTab === tab.slug ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.slug)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3 latest-grid">
            {visibleArticles.map((art) => (
              <NewsCard key={art.id} article={art} variant="vertical" />
            ))}
          </div>

          {visibleArticles.length < filtered.length && (
            <div className="latest-load-more-wrap">
              <button
                className="latest-load-more-btn"
                onClick={() => setDisplayCount(prev => prev + 6)}
              >
                {t('loadMore')} ({filtered.length - visibleArticles.length} {t('remaining')})
              </button>
            </div>
          )}

          <div className="explore-all-categories-banner">
            <div>
              <h4>{t('exploreByCategory')}</h4>
              <p>{t('exploreCategoryDesc')}</p>
            </div>
            <div className="category-chips-inline">
              <Link to="/category/national" className="cat-chip-link">{t('national')}</Link>
              <Link to="/category/politics" className="cat-chip-link">{t('politics')}</Link>
              <Link to="/category/hill-tracts" className="cat-chip-link">{t('hillTracts')}</Link>
              <Link to="/category/science-tech" className="cat-chip-link">{t('scienceTech')}</Link>
              <Link to="/category/education" className="cat-chip-link">{t('education')}</Link>
              <Link to="/category/world" className="cat-chip-link">{t('world')}</Link>
              <Link to="/category/economy" className="cat-chip-link">{t('economy')}</Link>
              <Link to="/category/sports" className="cat-chip-link">{t('sports')}</Link>
              <Link to="/category/entertainment" className="cat-chip-link">{t('entertainment')}</Link>
              <Link to="/category/lifestyle" className="cat-chip-link">{t('lifestyle')}</Link>
            </div>
          </div>
        </div>

        <aside className="latest-news-sidebar">
          <MostRead title={t('mostRead')} />
          <AdBanner slot="sidebar" />
        </aside>
      </div>
    </section>
  );
};

export default LatestNews;
