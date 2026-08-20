import React from 'react';
import BreakingNews from '../../components/news/BreakingNews/BreakingNews';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import LatestNews from '../../components/home/LatestNews/LatestNews';
import TrendingSection from '../../components/home/TrendingSection/TrendingSection';
import CategorySection from '../../components/home/CategorySection/CategorySection';
import EditorPicks from '../../components/home/EditorPicks/EditorPicks';
import Newsletter from '../../components/newsletter/Newsletter';
import AdBanner from '../../components/advertisement/AdBanner';
import { articleService } from '../../services/articleService';
import './Home.css';

const Home = () => {
  const heroArticle = articleService.getHeroArticle();
  const sideArticles = articleService.getFeatured(2);
  const breakingNews = articleService.getBreaking();
  const allArticles = articleService.getAll();
  const trendingArticles = articleService.getTrending(5);
  const hillTractsArticles = articleService.getByCategory('hill-tracts');
  const banglaArticles = articleService.getByCategory('politics');
  const nationalArticles = articleService.getByCategory('national');
  const techArticles = articleService.getByCategory('science-tech');
  const sportsArticles = articleService.getByCategory('sports');
  const editorPicksArticles = articleService.getEditorPicks(4);

  return (
    <div className="home-page">
      <BreakingNews items={breakingNews} />
      <HeroSection heroArticle={heroArticle} sideArticles={sideArticles} />
      <AdBanner slot="leaderboard" />
      <TrendingSection articles={trendingArticles} />
      <LatestNews articles={allArticles} />
      <CategorySection
        title="Hill Districts"
        categorySlug="hill-tracts"
        articles={hillTractsArticles}
      />
      <CategorySection
        title="বাংলা রাজনীতি ও প্রশাসন"
        categorySlug="politics"
        articles={banglaArticles}
        dark={true}
      />
      <CategorySection
        title="Science & Tech Innovations"
        categorySlug="science-tech"
        articles={techArticles}
      />
      <CategorySection
        title="National & Public Affairs"
        categorySlug="national"
        articles={nationalArticles}
      />
      <CategorySection
        title="Sports Arena"
        categorySlug="sports"
        articles={sportsArticles}
        dark={true}
      />
      <EditorPicks articles={editorPicksArticles} />
      <div className="newsletter-section">
        <div className="container">
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Home;
