import React from 'react';
import { Link } from 'react-router-dom';
import '../Privacy/Privacy.css';

const Terms = () => (
  <div className="static-page">
    <div className="static-hero">
      <div className="container">
        <h1>Terms of Service</h1>
        <p>Last updated: August 2026</p>
      </div>
    </div>
    <div className="container static-content section-padding">
      <div className="static-body">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using Third Angle ("Site"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>
        </section>
        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>All content, including news articles, graphics, logos, photos, videos, and layout designs published on Third Angle, are protected by copyright laws. You may not reproduce, distribute, or modify content without prior written permission.</p>
        </section>
        <section>
          <h2>3. User Conduct & Comments</h2>
          <p>When interacting with Third Angle, you agree not to post defamatory, obscene, hateful, or unlawful content. We reserve the right to moderate, edit, or remove user-submitted material at our sole discretion.</p>
        </section>
        <section>
          <h2>4. Disclaimers</h2>
          <p>Articles and opinions published on Third Angle are provided for general informational purposes. While we strive for accuracy, we make no guarantees regarding complete timeliness or error-free content.</p>
        </section>
        <section>
          <h2>5. Limitation of Liability</h2>
          <p>Third Angle and its authors shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
        </section>
        <section>
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website following changes constitutes acceptance of the new terms.</p>
        </section>
        <section>
          <h2>7. Contact</h2>
          <p>For legal inquiries: <Link to="/contact">Contact Us</Link></p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
