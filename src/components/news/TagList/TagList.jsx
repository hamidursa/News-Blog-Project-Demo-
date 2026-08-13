import React from 'react';
import { Link } from 'react-router-dom';
import './TagList.css';

export const TagList = ({ tags = [] }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="tag-list-container">
      <span className="tag-list-label">Tags:</span>
      <div className="tags-wrapper">
        {tags.map((tag, idx) => (
          <Link key={idx} to={`/search?q=${encodeURIComponent(tag)}`} className="tag-item">
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagList;
