import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { mainNavLinks, moreCategoryLinks } from '../../../data/navigation';
import { siteConfig } from '../../../data/siteConfig';
import { getFormattedCurrentDate } from '../../../utils/formatDate';
import { useSearch } from '../../../context/SearchContext';
import Icon from '../../common/Icon/Icon';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Navbar.css';

export const Navbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localQuery, setLocalQuery] = useState('');
  const { isSearchOpen, toggleSearch, handleSearch } = useSearch();
  const navigate = useNavigate();

  const currentDate = getFormattedCurrentDate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      handleSearch(localQuery);
      navigate(`/search?q=${encodeURIComponent(localQuery)}`);
    }
  };

  return (
    <header className="site-header sticky">
      {/* Top utility bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-date">
            <Icon name="clock" className="date-icon" />
            <span>{currentDate}</span>
          </div>

          <div className="top-bar-center">
            <span className="live-tag">LIVE</span>
            <span className="top-headline-text">Independent Editorial Reporting & In-depth Analysis</span>
          </div>

          <div className="top-bar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon name="twitter" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="youtube" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav className="main-navbar">
        <div className="container navbar-container">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Icon name="menu" />
          </button>

          {/* Site Logo */}
          <Link to="/" className="brand-logo">
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-badge">NEWS</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="desktop-nav-links">
            {mainNavLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={link.path === '/'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Dropdown for More Categories */}
            <li className="nav-item dropdown-item">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsMoreOpen(prev => !prev)}
                onBlur={() => setTimeout(() => setIsMoreOpen(false), 200)}
              >
                <span>More</span>
                <Icon name="chevronDown" className={`dropdown-icon ${isMoreOpen ? 'open' : ''}`} />
              </button>

              {isMoreOpen && (
                <ul className="dropdown-menu">
                  {moreCategoryLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="dropdown-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Search Toggle & Search Bar */}
          <div className="navbar-actions">
            <form onSubmit={handleSearchSubmit} className={`inline-search-form ${isSearchOpen ? 'open' : ''}`}>
              <input
                type="text"
                placeholder="Search news..."
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="inline-search-input"
              />
              <button type="submit" className="search-submit-btn" aria-label="Search">
                <Icon name="search" />
              </button>
            </form>

            <button
              className="search-toggle-btn"
              onClick={toggleSearch}
              aria-label="Toggle search input"
            >
              <Icon name={isSearchOpen ? 'close' : 'search'} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
