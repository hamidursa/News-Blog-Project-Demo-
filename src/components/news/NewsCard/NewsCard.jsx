import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import Icon from '../../common/Icon/Icon';
import './NewsCard.css';

export const NewsCard = ({
  article,
  variant = 'vertical', // 'vertical', 'horizontal', 'compact'
  className = ''
}) => {
  const { translateArticle, t } = useLanguage();
  if (!article) return null;

  const translated = translateArticle(article);
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
  } = translated;

  return (
    <article className={`news-card card-${variant} ${className}`}>
      <div className="card-image-wrapper">
        <Link to={`/news/${slug}`} className="image-link" aria-label={`Read: ${title}`}>
          <img
            src={image}
            alt={title}
            className="card-image"
            loading="lazy"
            width="400"
            height="225"
          />
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
          <Link to={`/news/${slug}`} className="card-title-link" title={title}>
            {title}
          </Link>
        </h3>

        {excerpt && variant !== 'compact' && (
          <p className="card-excerpt">{excerpt}</p>
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
          </div>
        </div>

        <Link to={`/news/${slug}`} className="card-read-more" aria-label={`Read full article: ${title}`}>
          {t('readMore')} <Icon name="arrowRight" className="read-more-arrow" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
