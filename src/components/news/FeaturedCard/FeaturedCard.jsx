import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import Icon from '../../common/Icon/Icon';
import './FeaturedCard.css';

export const FeaturedCard = ({ article }) => {
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
    authorName
  } = article;

  return (
    <article className="featured-card">
      <div className="featured-image-wrapper">
        <img src={image} alt={title} className="featured-image" />
        <div className="featured-overlay"></div>
      </div>

      <div className="featured-content">
        <div className="featured-top-meta">
          <CategoryBadge category={category} categorySlug={categorySlug} />
          {topic && <span className="featured-topic">{topic}</span>}
        </div>

        <h2 className="featured-title">
          <Link to={`/news/${slug}`} className="featured-title-link">
            {title}
          </Link>
        </h2>

        {excerpt && <p className="featured-excerpt line-clamp-3">{excerpt}</p>}

        <div className="featured-bottom-meta">
          <span>{authorName}</span>
          <span className="dot-sep">•</span>
          <span>{publishDate}</span>
          {readingTime && (
            <>
              <span className="dot-sep">•</span>
              <span className="read-time"><Icon name="clock" /> {readingTime}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;
