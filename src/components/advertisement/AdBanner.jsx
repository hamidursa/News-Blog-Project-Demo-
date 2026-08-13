import React from 'react';
import './AdBanner.css';

export const AdBanner = ({ slot = 'leaderboard' }) => {
  return (
    <div className={`ad-banner ad-slot-${slot}`}>
      <span className="ad-label">ADVERTISEMENT</span>
      <div className="ad-box">
        <span className="ad-placeholder-text">
          {slot === 'leaderboard' ? 'Leaderboard Banner Ad Space (728 x 90)' : 'Sidebar Ad Space (300 x 250)'}
        </span>
      </div>
    </div>
  );
};

export default AdBanner;
