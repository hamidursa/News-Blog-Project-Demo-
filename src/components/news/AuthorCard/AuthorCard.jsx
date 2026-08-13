import React from 'react';
import './AuthorCard.css';

export const AuthorCard = ({ author }) => {
  if (!author) return null;

  return (
    <div className="author-card">
      <img src={author.avatar} alt={author.name} className="author-avatar" />
      <div className="author-info">
        <h4 className="author-name">{author.name}</h4>
        <span className="author-role">{author.role}</span>
        <p className="author-bio">{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
