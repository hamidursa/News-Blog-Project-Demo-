import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainNavLinks, moreCategoryLinks } from '../../../data/navigation';
import { siteConfig } from '../../../data/siteConfig';
import Icon from '../../common/Icon/Icon';
import './MobileMenu.css';

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const allLinks = [...mainNavLinks, ...moreCategoryLinks];

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <div className="mobile-brand">
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-badge">NEWS</span>
          </div>
          <button className="close-menu-btn" onClick={onClose} aria-label="Close menu">
            <Icon name="close" />
          </button>
        </div>

        <div className="mobile-menu-body">
          <h4 className="mobile-menu-title">Categories</h4>
          <ul className="mobile-nav-list">
            {allLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={onClose}
                  end={link.path === '/'}
                >
                  <span>{link.name}</span>
                  <Icon name="chevronRight" className="mobile-nav-arrow" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-menu-footer">
          <p className="mobile-tagline">{siteConfig.tagline}</p>
          <div className="mobile-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Icon name="facebook" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Icon name="twitter" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Icon name="youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
