import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { categoryService } from '../../services/categoryService';
import { articleService } from '../../services/articleService';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import NewsCard from '../../components/news/NewsCard/NewsCard';
import MostRead from '../../components/home/MostRead/MostRead';
import Pagination from '../../components/common/Pagination/Pagination';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import AdBanner from '../../components/advertisement/AdBanner';
import Newsletter from '../../components/newsletter/Newsletter';
import './Category.css';

const ARTICLES_PER_PAGE = 6;

const Category = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('latest'); // 'latest', 'most-read', 'trending'

  const category = categoryService.getBySlug(slug);
  const rawArticles = articleService.getByCategory(slug);

  // Dynamic filter & sort logic
  const filteredArticles = useMemo(() => {
    let list = [...rawArticles];
    if (activeFilter === 'most-read') {
      return list.sort((a, b) => {
        const viewsA = parseFloat(a.viewCount) || 0;
        const viewsB = parseFloat(b.viewCount) || 0;
        return viewsB - viewsA;
      });
    } else if (activeFilter === 'trending') {
      const trending = list.filter(a => a.isTrending);
      return trending.length > 0 ? trending : list;
    }
    return list;
  }, [rawArticles, activeFilter]);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
    setCurrentPage(1);
  };

  return (
    <div className="category-page">
      {/* Category Banner */}
      <div className="category-banner" style={{ borderBottomColor: category.color }}>
        <div className="container">
          <Breadcrumb items={[{ label: category.name }]} />
          <h1 className="category-banner-title" style={{ color: category.color }}>
            {category.name}
          </h1>
          <p className="category-banner-desc">{category.description}</p>
        </div>
      </div>

      <div className="container category-layout">
        <div className="category-main">
          {/* Functional Filter Bar */}
          <div className="filter-bar">
            <span className="filter-label">
              Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </span>
            <div className="filter-controls">
              <button
                className={`filter-btn ${activeFilter === 'latest' ? 'active' : ''}`}
                onClick={() => handleFilterChange('latest')}
              >
                Latest
              </button>
              <button
                className={`filter-btn ${activeFilter === 'most-read' ? 'active' : ''}`}
                onClick={() => handleFilterChange('most-read')}
              >
                Most Read
              </button>
              <button
                className={`filter-btn ${activeFilter === 'trending' ? 'active' : ''}`}
                onClick={() => handleFilterChange('trending')}
              >
                Trending
              </button>
            </div>
          </div>

          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid-3">
                {paginatedArticles.map((art) => (
                  <NewsCard key={art.id} article={art} variant="vertical" />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              />
            </>
          ) : (
            <EmptyState
              title="No Articles Found"
              message={`No articles currently match the "${activeFilter}" filter in ${category.name}.`}
            />
          )}
        </div>

        <aside className="category-sidebar">
          <MostRead title="Most Read" />
          <AdBanner slot="sidebar" />
          <Newsletter compact={true} />
        </aside>
      </div>
    </div>
  );
};

export default Category;
