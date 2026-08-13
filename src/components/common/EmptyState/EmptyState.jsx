import React from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './EmptyState.css';

export const EmptyState = ({
  title = "No Articles Found",
  message = "We couldn't find any news articles matching your criteria.",
  actionText,
  onAction,
  icon = "search"
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon-box">
        <Icon name={icon} className="empty-state-icon" />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction} className="empty-state-btn">
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
