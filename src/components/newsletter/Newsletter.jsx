import React, { useState } from 'react';
import Button from '../common/Button/Button';
import './Newsletter.css';

export const Newsletter = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <div className={`newsletter-card ${compact ? 'compact' : ''}`}>
      <div className="newsletter-badge">NEWSLETTER</div>
      <h3 className="newsletter-title">Get Daily News Briefings Delivered</h3>
      <p className="newsletter-subtitle">
        Stay informed with curated highlights, political digests, and major world events directly in your inbox.
      </p>

      {subscribed ? (
        <div className="newsletter-success">
          ✓ Thank you for subscribing! Check your inbox for confirmation.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <Button type="submit" variant="primary" fullWidth={compact}>
            Subscribe Now
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
