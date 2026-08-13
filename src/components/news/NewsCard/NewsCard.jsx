import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import Icon from '../../common/Icon/Icon';
import './NewsCard.css';

export const NewsCard = ({
  article,
  variant = 'vertical', // 'vertical', 'horizontal', 'compact'
  className = ''
}) => {
  if (!article) return null;

  const {
    slug,
    title,
    topic,
    excerpt,
    image,
    category,
    categorySlug,
    publishDate,
    readingTime,
    viewCount,
    authorName
  } = article;

  return (
    <article className={`news-card card-${variant} ${className}`}>
      <div className="card-image-wrapper">
        <Link to={`/news/${slug}`} className="image-link">
          <img src={image} alt={title} className="card-image" loading="lazy" />
        </Link>
        {category && variant !== 'compact' && (
          <div className="card-badge-pos">
            <CategoryBadge category={category} categorySlug={categorySlug} />
          </div>
        )}
      </div>

      <div className="card-content">
        {topic && <span className="card-topic">{topic}</span>}
        <h3 className="card-title">
          <Link to={`/news/${slug}`} className="card-title-link">
            {title}
          </Link>
        </h3>

        {excerpt && variant === 'vertical' && (
          <p className="card-excerpt line-clamp-2">{excerpt}</p>
        )}

        <div className="card-meta">
          <div className="meta-left">
            {authorName && <span className="meta-author">{authorName}</span>}
            {publishDate && <span className="meta-date">{publishDate}</span>}
          </div>
          <div className="meta-right">
            {readingTime && (
              <span className="meta-item">
                <Icon name="clock" /> {readingTime}
              </span>
            )}
            {viewCount && (
              <span className="meta-item">
                <Icon name="eye" /> {viewCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
