import React from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../../data/siteConfig';
import { useLanguage } from '../../../context/LanguageContext';
import Icon from '../../common/Icon/Icon';
import LanguageSelector from '../../common/LanguageSelector/LanguageSelector';
import './MobileMenu.css';

export const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const allLinks = [
    { name: t('home'), path: '/' },
    { name: t('national'), path: '/category/national' },
    { name: t('politics'), path: '/category/politics' },
    { name: t('hillTracts'), path: '/category/hill-tracts' },
    { name: t('scienceTech'), path: '/category/science-tech' },
    { name: t('education'), path: '/category/education' },
    { name: t('world'), path: '/category/world' },
    { name: t('economy'), path: '/category/economy' },
    { name: t('sports'), path: '/category/sports' },
    { name: t('entertainment'), path: '/category/entertainment' },
    { name: t('lifestyle'), path: '/category/lifestyle' },
  ];

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

        <div className="mobile-menu-lang-section">
          <LanguageSelector />
        </div>

        <div className="mobile-menu-body">
          <h4 className="mobile-menu-title">{t('categories')}</h4>
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
