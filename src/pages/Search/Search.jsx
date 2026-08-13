import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { articleService } from '../../services/articleService';
import NewsCard from '../../components/news/NewsCard/NewsCard';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import Icon from '../../components/common/Icon/Icon';
import './Search.css';

const SUGGESTED = ['Politics', 'Hill Tracts', 'National', 'Boishabi', 'Economy', 'Cricket'];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryParam);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (queryParam) {
      setResults(articleService.search(queryParam));
      setQuery(queryParam);
    } else {
      setResults([]);
    }
  }, [queryParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <div className="search-page">
      <div className="search-hero">
        <div className="container">
          <h1 className="search-hero-title">Search Third Angle</h1>
          <form onSubmit={handleSubmit} className="search-main-form">
            <div className="search-input-wrapper">
              <Icon name="search" className="search-input-icon" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for news, topics, regions..."
                className="search-main-input"
              />
              <button type="submit" className="search-main-btn">Search</button>
            </div>
          </form>
          <div className="search-suggestions-bar">
            <span>Trending:</span>
            {SUGGESTED.map((s) => (
              <button key={s} className="suggestion-chip" onClick={() => setSearchParams({ q: s })}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container search-results-section">
        {queryParam && (
          <div className="results-header">
            <h2 className="results-title">
              {results.length > 0
                ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${queryParam}"`
                : `No results for "${queryParam}"`}
            </h2>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid-3">
            {results.map((art) => (
              <NewsCard key={art.id} article={art} variant="vertical" />
            ))}
          </div>
        )}

        {queryParam && results.length === 0 && (
          <EmptyState
            title="No Results Found"
            message={`We couldn't find articles matching "${queryParam}". Try a different keyword or browse categories below.`}
            icon="search"
          />
        )}

        {!queryParam && (
          <div className="search-browse-prompt">
            <p>Start typing to search across all articles. Or browse by category:</p>
            <div className="browse-category-chips">
              {['National', 'Politics', 'Hill Districts', 'Science & Tech', 'Economy', 'Sports'].map((cat) => (
                <Link key={cat} to={`/category/${cat.toLowerCase().replace(/ & /g, '-').replace(' ', '-')}`} className="browse-chip">
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
