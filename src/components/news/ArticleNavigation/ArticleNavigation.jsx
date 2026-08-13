import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../common/Icon/Icon';
import './ArticleNavigation.css';

export const ArticleNavigation = ({ prevArticle, nextArticle }) => {
  if (!prevArticle && !nextArticle) return null;

  return (
    <div className="article-nav-container">
      {prevArticle ? (
        <Link to={`/news/${prevArticle.slug}`} className="article-nav-card prev">
          <div className="nav-direction">
            <span className="arrow-left">‹</span> Previous Article
          </div>
          <h4 className="nav-article-title line-clamp-2">{prevArticle.title}</h4>
        </Link>
      ) : <div className="nav-placeholder"></div>}

      {nextArticle ? (
        <Link to={`/news/${nextArticle.slug}`} className="article-nav-card next">
          <div className="nav-direction">
            Next Article <span className="arrow-right">›</span>
          </div>
          <h4 className="nav-article-title line-clamp-2">{nextArticle.title}</h4>
        </Link>
      ) : <div className="nav-placeholder"></div>}
    </div>
  );
};

export default ArticleNavigation;
