import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import Icon from '../../components/common/Icon/Icon';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-sub">Have a tip, correction, or want to collaborate? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="container contact-layout section-padding">
        {/* Contact Form */}
        <div className="contact-form-col">
          <h2 className="contact-section-title">Send Us a Message</h2>
          {submitted ? (
            <div className="form-success">
              ✓ Thank you! Your message has been received. We'll respond within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" rows="6" required value={form.message} onChange={handleChange} placeholder="Tell us more..."></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info-col">
          <h2 className="contact-section-title">Contact Information</h2>
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-card-icon"><Icon name="mapPin" /></div>
              <div>
                <h4>Newsroom Address</h4>
                <p>{siteConfig.contact.address}</p>
                <p>{siteConfig.contact.addressBn}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><Icon name="phone" /></div>
              <div>
                <h4>Phone</h4>
                <p>{siteConfig.contact.phone}</p>
                <p className="info-hours">Mon – Sat, 9am – 6pm BST</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><Icon name="mail" /></div>
              <div>
                <h4>Editorial Email</h4>
                <p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
                <p><a href={`mailto:${siteConfig.contact.newsroomEmail}`}>{siteConfig.contact.newsroomEmail}</a></p>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <Icon name="mapPin" className="map-pin-icon" />
            <span>Kawran Bazar, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
