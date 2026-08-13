import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './SectionTitle.css';

export const SectionTitle = ({
  title,
  linkTo,
  linkText = 'Read More',
  dark = false,
  className = ''
}) => {
  return (
    <div className={`section-header ${dark ? 'dark' : ''} ${className}`}>
      <div className="section-title-wrapper">
        <h2 className="section-title">{title}</h2>
        <div className="section-title-line"></div>
      </div>
      {linkTo && (
        <Link to={linkTo} className="section-more-link">
          <span>{linkText}</span>
          <Icon name="arrowUpRight" />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
