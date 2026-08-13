import React from 'react';
import { Link } from 'react-router-dom';
import { mainNavLinks, moreCategoryLinks, footerQuickLinks } from '../../../data/navigation';
import { siteConfig } from '../../../data/siteConfig';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import './Footer.css';

export const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Third Angle newsletter!');
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
              {siteConfig.description}
            </p>
            <div className="footer-social-box">
              <span className="social-box-title">Follow Third Angle</span>
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
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-link-list">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="footer-col">
            <h3 className="footer-col-title">Top Categories</h3>
            <ul className="footer-link-list">
              {[...mainNavLinks, ...moreCategoryLinks].slice(1, 8).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-col-title">Newsletter</h3>
            <p className="newsletter-desc">
              Subscribe to receive breaking news alerts and exclusive daily editorial briefings.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="footer-email-input"
              />
              <Button type="submit" variant="primary" size="sm">
                Subscribe
              </Button>
            </form>

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
          <p className="copyright-text">{siteConfig.copyright}</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
