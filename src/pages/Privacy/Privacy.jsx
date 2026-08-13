import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy = () => (
  <div className="static-page">
    <div className="static-hero">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2026</p>
      </div>
    </div>
    <div className="container static-content section-padding">
      <div className="static-body">
        <section>
          <h2>1. Information We Collect</h2>
          <p>Third Angle collects information you provide directly to us, such as when you subscribe to our newsletter, submit a comment, or contact us via forms. This may include your name, email address, and message content.</p>
          <p>We also collect anonymized usage data through analytics tools to understand how visitors interact with our site and improve our editorial experience.</p>
        </section>
        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use collected information to deliver newsletter content, respond to inquiries, improve our platform, and comply with legal obligations. We do not sell, rent, or trade your personal data to third parties.</p>
        </section>
        <section>
          <h2>3. Cookies</h2>
          <p>Third Angle uses essential cookies to ensure the website functions correctly, and optional analytics cookies to understand traffic patterns. You may manage cookie preferences through your browser settings.</p>
        </section>
        <section>
          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures including SSL encryption, secure server infrastructure, and access controls. However, no internet transmission is completely secure and we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h2>5. Your Rights</h2>
          <p>You have the right to request access to your personal data, correction of inaccuracies, or deletion from our records. Contact us at <a href="mailto:privacy@thirdanglenews.com">privacy@thirdanglenews.com</a> to exercise these rights.</p>
        </section>
        <section>
          <h2>6. Contact</h2>
          <p>For privacy-related questions: <Link to="/contact">Contact Us</Link></p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
