import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../../data/siteConfig';
import { useLanguage } from '../../../context/LanguageContext';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import './Footer.css';

export const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: t('home'), path: '/' },
    { name: t('aboutUs'), path: '/about' },
    { name: t('contactUs'), path: '/contact' },
    { name: t('privacyPolicy'), path: '/privacy' },
    { name: t('termsOfService'), path: '/terms' },
  ];

  const categoryLinks = [
    { name: t('national'), path: '/category/national' },
    { name: t('politics'), path: '/category/politics' },
    { name: t('hillTracts'), path: '/category/hill-tracts' },
    { name: t('scienceTech'), path: '/category/science-tech' },
    { name: t('education'), path: '/category/education' },
    { name: t('world'), path: '/category/world' },
    { name: t('economy'), path: '/category/economy' },
    { name: t('sports'), path: '/category/sports' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Footer Top Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & About */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <span className="brand-name light">{siteConfig.name}</span>
              <span className="brand-badge">NEWS</span>
            </Link>
            <p className="footer-about-text">
              {t('footerAbout')}
            </p>
            <div className="footer-social-box">
              <span className="social-box-title">{t('exploreByCategory')}</span>
              <div className="footer-social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Icon name="twitter" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t('quickLinks')}</h3>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t('categories')}</h3>
            <ul className="footer-link-list">
              {categoryLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-col-title">{t('newsletterTitle')}</h3>
            <p className="newsletter-desc">
              {t('newsletterSubtitle')}
            </p>

            {isSubscribed ? (
              <div className="footer-subscribe-success">
                <span>✓ {t('subscribedSuccess')}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletterPlaceholder')}
                  required
                  className="footer-email-input"
                />
                <Button type="submit" variant="primary" size="sm">
                  {t('subscribeButton')}
                </Button>
              </form>
            )}

            <div className="footer-contact-info">
              <div className="contact-item">
                <Icon name="mapPin" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="contact-item">
                <Icon name="mail" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">{t('allRightsReserved')}</p>
          <div className="legal-links">
            <Link to="/privacy">{t('privacyPolicy')}</Link>
            <span className="dot">•</span>
            <Link to="/terms">{t('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
