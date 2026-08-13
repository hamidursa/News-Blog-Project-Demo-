import React from 'react';
import './Skeleton.css';

export const Skeleton = ({
  width = '100%',
  height = '20px',
  borderRadius = 'var(--radius-sm)',
  className = ''
}) => {
  return (
    <div
      className={`skeleton-loader ${className}`}
      style={{ width, height, borderRadius }}
    ></div>
  );
};

export const NewsCardSkeleton = () => (
  <div className="skeleton-card">
    <Skeleton height="200px" borderRadius="var(--radius-lg)" />
    <div className="skeleton-content">
      <Skeleton width="30%" height="16px" />
      <Skeleton width="90%" height="24px" />
      <Skeleton width="100%" height="14px" />
      <Skeleton width="70%" height="14px" />
    </div>
  </div>
);

export default Skeleton;
