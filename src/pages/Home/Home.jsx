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
  const latestArticles = articleService.getAll().slice(0, 9);
  const trendingArticles = articleService.getTrending(5);
  const hillTractsArticles = articleService.getByCategory('hill-tracts');
  const banglaArticles = articleService.getByCategory('politics');
  const nationalArticles = articleService.getByCategory('national');
  const editorPicksArticles = articleService.getEditorPicks(4);

  return (
    <div className="home-page">
      <BreakingNews items={breakingNews} />
      <HeroSection heroArticle={heroArticle} sideArticles={sideArticles} />
      <AdBanner slot="leaderboard" />
      <TrendingSection articles={trendingArticles} />
      <LatestNews articles={latestArticles} />
      <CategorySection
        title="Hill Districts"
        categorySlug="hill-tracts"
        articles={hillTractsArticles}
      />
      <CategorySection
        title="বাংলা রাজনীতি"
        categorySlug="politics"
        articles={banglaArticles}
        dark={true}
      />
      <CategorySection
        title="National Affairs"
        categorySlug="national"
        articles={nationalArticles}
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
