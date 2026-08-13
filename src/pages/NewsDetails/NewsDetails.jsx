import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { articleService } from '../../services/articleService';
import { getAuthorById } from '../../data/authors';
import { articles } from '../../data/articles';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import CategoryBadge from '../../components/news/CategoryBadge/CategoryBadge';
import ShareButtons from '../../components/news/ShareButtons/ShareButtons';
import AuthorCard from '../../components/news/AuthorCard/AuthorCard';
import TagList from '../../components/news/TagList/TagList';
import ArticleNavigation from '../../components/news/ArticleNavigation/ArticleNavigation';
import RelatedNews from '../../components/news/RelatedNews/RelatedNews';
import MostRead from '../../components/home/MostRead/MostRead';
import Newsletter from '../../components/newsletter/Newsletter';
import Icon from '../../components/common/Icon/Icon';
import './NewsDetails.css';

const NewsDetails = () => {
  const { slug } = useParams();
  const article = articleService.getBySlug(slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  const author = getAuthorById(article.authorId);
  const relatedArticles = articleService.getRelated(article.id, article.categorySlug, 3);
  const currentIndex = articles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  return (
    <div className="news-details-page">
      {/* Hero Image */}
      <div className="article-hero">
        <img src={article.image} alt={article.title} className="article-hero-img" />
        <div className="article-hero-overlay"></div>
        <div className="article-hero-meta container">
          <CategoryBadge category={article.category} categorySlug={article.categorySlug} />
        </div>
      </div>

      <div className="container article-layout">
        <div className="article-main">
          <Breadcrumb items={[
            { label: article.category, path: `/category/${article.categorySlug}` },
            { label: article.title }
          ]} />

          {article.topic && (
            <span className="article-topic">{article.topic}</span>
          )}

          <h1 className="article-title">{article.title}</h1>

          <div className="article-meta-bar">
            <div className="article-meta-left">
              <span className="meta-author-name">
                <Icon name="share" style={{ width: 14, height: 14 }} /> {article.authorName}
              </span>
              <span className="meta-sep">·</span>
              <span>{article.publishDate}</span>
              <span className="meta-sep">·</span>
              <span><Icon name="clock" /> {article.readingTime}</span>
            </div>
            <div className="article-meta-right">
              <span className="view-count"><Icon name="eye" /> {article.viewCount} views</span>
            </div>
          </div>

          <ShareButtons title={article.title} />

          {/* Article Body */}
          <div className="article-body">
            <p className="article-excerpt-lead">{article.excerpt}</p>
            <div className="article-content">
              {article.content && article.content.split('\n').filter(p => p.trim()).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>

          <TagList tags={article.tags} />
          <ShareButtons title={article.title} />
          <AuthorCard author={author} />
          <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
          <RelatedNews articles={relatedArticles} />
        </div>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <MostRead title="Most Read" />
          <div className="sidebar-newsletter">
            <Newsletter compact={true} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;
