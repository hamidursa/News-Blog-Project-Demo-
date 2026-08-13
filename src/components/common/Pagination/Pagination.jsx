import React from 'react';
import './Pagination.css';

export const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination-nav">
      <button
        className="pagination-btn prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <div className="pagination-numbers">
        {pages.map(page => (
          <button
            key={page}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-btn next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
