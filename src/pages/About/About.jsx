import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import './About.css';

const teamMembers = [
  { name: 'Arif Hossain', role: 'Editor-in-Chief', bio: 'Veteran journalist with 18 years covering South Asian politics and geopolitics.' },
  { name: 'Sharmin Akter', role: 'Hill Tracts Correspondent', bio: 'Indigenous rights advocate and specialized correspondent for Chittagong Hill Tracts reporting.' },
  { name: 'Tanvir Hasan', role: 'Senior Political Reporter', bio: 'Expert on Bangladeshi parliamentary affairs, electoral policies, and governance reform.' },
  { name: 'Rahim Chowdhury', role: 'Tech & Economy Analyst', bio: 'Former financial analyst turned journalist focusing on technology, trade, and economic policy.' }
];

const stats = [
  { value: '2M+', label: 'Monthly Readers' },
  { value: '50+', label: 'Staff Journalists' },
  { value: '10+', label: 'Years of Journalism' },
  { value: '12', label: 'Categories Covered' }
];

const timeline = [
  { year: '2014', event: 'Third Angle founded as a digital-first news outlet covering hill district affairs.' },
  { year: '2016', event: 'Launched bilingual (English & Bengali) editorial desk.' },
  { year: '2019', event: 'Expanded to national coverage. Monthly readership crossed 500K.' },
  { year: '2022', event: 'Launched investigative reporting unit and multimedia journalism team.' },
  { year: '2026', event: 'Complete platform redesign with modern editorial UI and mobile-first experience.' }
];

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">Who We Are</h1>
          <p className="about-hero-sub">
            Third Angle: Delivering unbiased perspectives and independent journalism for over a decade.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-story section-padding">
        <div className="container about-story-grid">
          <div>
            <h2 className="about-section-heading">Our Story</h2>
            <p>
              Third Angle was born from a simple belief: that journalism should give voice to those often overlooked by mainstream media. We began in 2014 focusing on the Chittagong Hill Tracts, and today we cover the full spectrum of national and international news with the same independent spirit.
            </p>
            <p>
              We are a bilingual editorial platform committed to fair, fact-based reporting. Every story we publish reflects our commitment to truth, accuracy, and community-first journalism.
            </p>
          </div>
          <div className="about-mission-vision">
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>To empower citizens with credible, independent, and timely news that serves the public interest without political bias.</p>
            </div>
            <div className="vision-box">
              <h3>Our Vision</h3>
              <p>To be the most trusted digital news platform in South Asia, renowned for ethical journalism, diverse voices, and investigative excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-team section-padding">
        <div className="container">
          <h2 className="about-section-heading centered">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar-placeholder">{m.name.charAt(0)}</div>
                <h3 className="team-name">{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section-padding">
        <div className="container">
          <h2 className="about-section-heading centered">Our Journey</h2>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{t.year}</span>
                  <p className="timeline-event">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
