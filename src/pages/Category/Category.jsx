import React, { useState } from 'react';
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

  const category = categoryService.getBySlug(slug);
  const allArticles = articleService.getByCategory(slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = allArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

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
          {/* Filter Bar (UI only) */}
          <div className="filter-bar">
            <span className="filter-label">{allArticles.length} articles found</span>
            <div className="filter-controls">
              <button className="filter-btn active">Latest</button>
              <button className="filter-btn">Most Read</button>
              <button className="filter-btn">Trending</button>
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
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <EmptyState
              title="No Articles Yet"
              message={`We haven't published any articles in the ${category.name} category yet.`}
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
