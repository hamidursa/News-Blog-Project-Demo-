import React from 'react';
import MostRead from '../../home/MostRead/MostRead';
import AdBanner from '../../advertisement/AdBanner';
import Newsletter from '../../newsletter/Newsletter';
import './Sidebar.css';

export const Sidebar = ({ children, className = '' }) => {
  return (
    <aside className={`sidebar ${className}`}>
      {children ? children : (
        <>
          <MostRead />
          <AdBanner slot="sidebar" />
          <Newsletter compact={true} />
        </>
      )}
    </aside>
  );
};

export default Sidebar;
