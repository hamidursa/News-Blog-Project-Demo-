import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../../context/SearchContext';
import { useDebounce } from '../../../hooks/useDebounce';
import Icon from '../../common/Icon/Icon';
import './SearchOverlay.css';

export const SearchOverlay = () => {
  const { isSearchOpen, searchQuery, searchResults, closeSearch, handleSearch } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) closeSearch();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      closeSearch();
    }
  };

  const suggestedSearches = ['Politics', 'Hill Tracts', 'National', 'Economy', 'Boishabi'];

  return (
    <div className="search-overlay" onClick={closeSearch}>
      <div className="search-overlay-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-overlay-header">
          <form onSubmit={handleSubmit} className="search-overlay-form">
            <Icon name="search" className="overlay-search-icon" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for news, topics, categories..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="overlay-search-input"
            />
            {searchQuery && (
              <button type="button" onClick={() => handleSearch('')} className="overlay-clear-btn">
                <Icon name="close" />
              </button>
            )}
          </form>
          <button onClick={closeSearch} className="overlay-close-btn" aria-label="Close search">
            <Icon name="close" />
          </button>
        </div>

        <div className="search-overlay-body">
          {!searchQuery && (
            <div className="suggested-searches">
              <p className="suggested-label">Suggested Searches</p>
              <div className="suggested-tags">
                {suggestedSearches.map((s) => (
                  <button key={s} onClick={() => handleSearch(s)} className="suggested-tag">
                    <Icon name="search" /> {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchQuery && searchResults.length > 0 && (
            <div className="overlay-results">
              <p className="results-count">{searchResults.length} result(s) for "<strong>{searchQuery}</strong>"</p>
              <ul className="overlay-results-list">
                {searchResults.slice(0, 5).map((art) => (
                  <li key={art.id}>
                    <a
                      href={`/news/${art.slug}`}
                      className="overlay-result-item"
                      onClick={closeSearch}
                    >
                      <img src={art.image} alt={art.title} className="result-thumb" />
                      <div>
                        <span className="result-category">{art.category}</span>
                        <p className="result-title">{art.title}</p>
                        <span className="result-date">{art.publishDate}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              {searchResults.length > 5 && (
                <button
                  onClick={() => {
                    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                    closeSearch();
                  }}
                  className="see-all-results-btn"
                >
                  See all {searchResults.length} results →
                </button>
              )}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <div className="no-results-overlay">
              <p>No results for "<strong>{searchQuery}</strong>". Try different keywords.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
