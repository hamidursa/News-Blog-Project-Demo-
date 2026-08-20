import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import Icon from '../../common/Icon/Icon';
import './SmallCard.css';

export const SmallCard = ({ article, rankNumber }) => {
  const { translateArticle } = useLanguage();
  if (!article) return null;

  const translated = translateArticle(article);
  const { slug, title, publishDate, viewCount, image } = translated;

  return (
    <div className="small-card">
      {rankNumber && <span className="small-card-rank">{rankNumber}</span>}
      {image && (
        <div className="small-card-img-wrap">
          <img src={image} alt={title} className="small-card-img" />
        </div>
      )}
      <div className="small-card-body">
        <h4 className="small-card-title">
          <Link to={`/news/${slug}`} className="small-card-link">
            {title}
          </Link>
        </h4>
        <div className="small-card-meta">
          <span>{publishDate}</span>
          {viewCount && (
            <span className="views-count">
              <Icon name="eye" /> {viewCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
