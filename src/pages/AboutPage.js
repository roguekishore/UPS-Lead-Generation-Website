import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Target, Heart } from 'lucide-react';
import Timeline from '../components/Timeline';
import AnimatedStatCard from '../components/AnimatedStatCard';
import { companyInfo } from '../config/themeConfig';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We provide only genuine Honda products and maintain the highest standards in service delivery.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We build long-term relationships through trust and reliability.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We continuously adapt to evolving technologies to provide modern, sustainable power solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent business practices and honest communication are at the core of everything we do.',
    },
  ];

  return (
    <main className="page">
      {/* Hero Section */}
      <section className="page-section page-section--gradient">
        <div className="page-section__container">
          <div className="page-content-grid">
            {/* Content */}
            <div>
              <span className="page-section__badge">About Us</span>
              <h1 className="page-section__title page-section__title--large">
                Powering Progress <span style={{ color: 'var(--primary)' }}>Since 1997</span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--neutral-600)', marginBottom: '1.5rem', lineHeight: '1.625' }}>
                Universal Power Systems is a trusted provider of reliable and innovative
                power solutions, committed to delivering high-quality products and services
                to meet diverse energy needs.
              </p>
              <p style={{ color: 'var(--neutral-600)', marginBottom: '2rem', lineHeight: '1.625' }}>
                With a strong focus on performance, safety, and efficiency, we serve
                residential, commercial, and industrial customers with dependable power
                system solutions. Our approach combines technical expertise, industry best
                practices, and customer-centric service.
              </p>

              {/* Stats */}
              <div className="stats-grid">
                <AnimatedStatCard 
                  value={companyInfo.yearsOfExperience} 
                  label="Years Experience" 
                  suffix="+"
                />
                <AnimatedStatCard 
                  value={companyInfo.hondaDealerYears} 
                  label="Years as Honda Dealer" 
                  suffix="+"
                />
                <AnimatedStatCard 
                  value={100} 
                  label="Genuine Parts" 
                  suffix="%"
                />
              </div>
            </div>

            {/* Image */}
            <div className="page-image-container">
              <img
                src="https://placehold.co/600x500/DC2626/FFFFFF?text=About+UPS"
                alt="Universal Power Systems Team"
                className="page-image"
              />
              {/* Honda Badge */}
              <div className="page-image-badge page-image-badge--bottom-left">
                <div className="page-image-badge__icon">
                  <Award size={24} />
                </div>
                <div>
                  <div className="page-image-badge__title">Authorized Dealer</div>
                  <div className="page-image-badge__subtitle">Honda Power Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="page-section page-section--white">
        <div className="page-section__container">
          <div className="prose-content">
            <h2 className="page-section__title">Company Overview</h2>
            <p>
              We specialize in the supply, installation, maintenance, and servicing of
              power systems, ensuring uninterrupted and efficient energy support for our
              clients. Our approach combines technical expertise, industry best practices,
              and customer-centric service to deliver solutions that are both cost-effective
              and long-lasting.
            </p>
            <p>
              At Universal Power Systems, quality and reliability are at the core of
              everything we do. We continuously adapt to evolving technologies and standards
              to provide modern, sustainable, and compliant power solutions.
            </p>
            <p>
              Our commitment to excellence, timely support, and transparent business
              practices has helped us build long-term relationships with our customers.
              Driven by professionalism and integrity, Universal Power Systems aims to be
              a dependable partner for all power-related requirements, delivering solutions
              that empower growth, productivity, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="page-section page-section--gray">
        <div className="page-section__container">
          <div className="page-section__header">
            <span className="page-section__badge">Our Values</span>
            <h2 className="page-section__title">What Drives Us Forward</h2>
          </div>

          <div className="page-grid page-grid--4-cols">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-card__icon-wrapper">
                    <IconComponent className="value-card__icon" size={28} />
                  </div>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Why Choose Us */}
      <section className="page-section page-section--dark">
        <div className="page-section__container">
          <div className="page-content-grid">
            <div>
              <span className="page-section__badge page-section__badge--white">Why Choose Us</span>
              <h2 className="page-section__title page-section__title--white">Your Trusted Power Partner</h2>
              <p style={{ color: 'var(--neutral-300)', marginBottom: '2rem', lineHeight: '1.625' }}>
                With decades of experience and a commitment to excellence, we've become
                the preferred choice for power solutions across various industries.
              </p>

              <ul className="check-list">
                {[
                  'Authorized Honda Power Products Dealer',
                  'Factory-trained service technicians',
                  'Genuine spare parts guarantee',
                  '24/7 emergency breakdown support',
                  'Comprehensive warranty coverage',
                  'On-site doorstep service',
                ].map((item, index) => (
                  <li key={index} className="check-list__item">
                    <CheckCircle className="check-list__icon check-list__icon--primary" size={20} />
                    <span className="check-list__text check-list__text--light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="page-image-container">
              <img
                src="https://placehold.co/600x500/FFFFFF/DC2626?text=Why+Choose+UPS"
                alt="Why Choose Universal Power Systems"
                className="page-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__container">
          <h2 className="cta-section__title">Ready to Experience the Difference?</h2>
          <p className="cta-section__description">
            Partner with Universal Power Systems for reliable, efficient, and
            professional power solutions.
          </p>
          <Link to="/contact" className="cta-btn--white">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
