import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Layout from './components/layout/Layout';
import Loader from './components/common/Loader/Loader';

// Lazy loading pages for optimized performance
const Home = lazy(() => import('./pages/Home/Home'));
const NewsDetails = lazy(() => import('./pages/NewsDetails/NewsDetails'));
const Category = lazy(() => import('./pages/Category/Category'));
const Search = lazy(() => import('./pages/Search/Search'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

// Scroll to top on route change helper
const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <ScrollToTopOnRoute />
        <Layout>
          <Suspense fallback={<Loader fullPage={true} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news/:slug" element={<NewsDetails />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </SearchProvider>
    </Router>
  );
};

export default App;
