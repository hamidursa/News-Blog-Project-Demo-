import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          Oops! The article or page you're looking for doesn't seem to exist. It may have been moved, deleted, or perhaps the URL is incorrect.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-home-btn">Back to Homepage</Link>
          <Link to="/search" className="not-found-search-btn">Search Articles</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
