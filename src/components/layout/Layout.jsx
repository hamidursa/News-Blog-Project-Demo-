import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ScrollToTop from '../common/ScrollToTop/ScrollToTop';
import SearchOverlay from '../search/SearchOverlay/SearchOverlay';
import './Layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <SearchOverlay />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
