import React, { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <Icon name="arrowUp" />
    </button>
  );
};

export default ScrollToTop;
