import React, { createContext, useContext, useState } from 'react';
import { articleService } from '../services/articleService';

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleSearch = () => setIsSearchOpen(prev => !prev);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query && query.trim().length > 0) {
      const results = articleService.search(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        searchQuery,
        searchResults,
        toggleSearch,
        openSearch,
        closeSearch,
        handleSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
