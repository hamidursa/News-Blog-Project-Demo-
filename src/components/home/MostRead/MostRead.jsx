import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallCard from '../../news/SmallCard/SmallCard';
import { articleService } from '../../../services/articleService';
import './MostRead.css';

export const MostRead = ({ title = "Most Read", dark = false }) => {
  const articles = articleService.getMostRead(5);

  return (
    <div className={`most-read-widget ${dark ? 'dark' : ''}`}>
      <SectionTitle title={title} dark={dark} />
      <div className="most-read-list">
        {articles.map((art, index) => (
          <SmallCard
            key={art.id}
            article={art}
            rankNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default MostRead;
