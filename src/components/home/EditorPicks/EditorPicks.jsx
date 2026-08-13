import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import NewsCard from '../../news/NewsCard/NewsCard';
import './EditorPicks.css';

export const EditorPicks = ({ articles = [] }) => {
  if (!articles || articles.length === 0) return null;

  const [featured, ...rest] = articles;

  return (
    <section className="editor-picks-section">
      <div className="container">
        <SectionTitle title="Editor's Picks" />
        <div className="editor-picks-grid">
          <div className="picks-featured">
            <NewsCard article={featured} variant="vertical" />
          </div>
          <div className="picks-list">
            {rest.map((art) => (
              <NewsCard key={art.id} article={art} variant="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPicks;
