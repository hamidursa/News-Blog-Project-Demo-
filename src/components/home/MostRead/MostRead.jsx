import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SmallCard from '../../news/SmallCard/SmallCard';
import { articleService } from '../../../services/articleService';
import './MostRead.css';

export const MostRead = ({ title, dark = false }) => {
  const { t } = useLanguage();
  const articles = articleService.getMostRead(5);
  const displayTitle = title || t('mostRead');

  return (
    <div className={`most-read-widget ${dark ? 'dark' : ''}`}>
      <SectionTitle title={displayTitle} dark={dark} />
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
