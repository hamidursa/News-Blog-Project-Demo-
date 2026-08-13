import React from 'react';
import './Loader.css';

export const Loader = ({ fullPage = false, size = 'md' }) => {
  const content = (
    <div className={`spinner spinner-${size}`}>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );

  if (fullPage) {
    return <div className="loader-fullpage">{content}</div>;
  }

  return content;
};

export default Loader;
