import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  BadgeCheck,
  Zap,
  Package,
  Calendar,
  AlertTriangle,
  MapPin,
  Shield,
  Activity,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { services, companyInfo } from '../config/themeConfig';

// Icon mapping
const iconMap = {
  ShoppingBag,
  BadgeCheck,
  Zap,
  Package,
  Calendar,
  AlertTriangle,
  MapPin,
  Shield,
  Activity,
};

const ServicesPage = () => {
  return (
    <main className="page">
      {/* Hero Section */}
      <section className="services-header">
        <div className="services-header__container">
          <span className="services-header__badge">Our Services</span>
          <h1 className="services-header__title">
            Comprehensive <span style={{ color: 'var(--primary)' }}>Power Solutions</span>
          </h1>
          <p className="services-header__description">
            From sales to servicing, we provide end-to-end solutions for all your
            power equipment needs. With authorized Honda support and factory-trained
            technicians, your equipment is in expert hands.
          </p>
          <div className="services-header__highlights">
            {['Authorized Honda Dealer', 'Factory-Trained Technicians', 'Genuine Parts'].map((item, index) => (
              <div key={index} className="services-highlight">
                <CheckCircle size={16} className="services-highlight__icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="page-section page-section--white">
        <div className="page-section__container">
          <div className="page-section__header">
            <h2 className="page-section__title">What We Offer</h2>
            <p className="page-section__description">
              Explore our complete range of services designed to keep your power
              equipment running at peak performance.
            </p>
          </div>

          <div className="page-grid page-grid--3-cols">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Zap;
              return (
                <article key={service.id} className="service-card">
                  <div className="service-card__icon-wrapper">
                    <IconComponent size={32} className="service-card__icon" />
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <Link
                    to="/contact#contact-form"
                    style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: '500', fontSize: '0.875rem', marginTop: '1rem' }}
                  >
                    Get This Service
                    <ArrowRight size={16} style={{ marginLeft: '0.25rem' }} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="featured-services">
        <div className="featured-services__container">
          <div className="featured-services__header">
            <span className="featured-services__badge">Featured</span>
            <h2 className="featured-services__title">Key Service Highlights</h2>
          </div>

          <div className="featured-services__grid">
            {/* On-Site Service */}
            <div className="featured-service-card">
              <img
                src="https://placehold.co/400x250/171717/FFFFFF?text=On-Site+Service"
                alt="On-Site Doorstep Service"
                className="featured-service-card__image"
              />
              <div className="featured-service-card__content">
                <h3 className="featured-service-card__title">On-Site / Doorstep Service</h3>
                <p className="featured-service-card__description">
                  No need to transport heavy equipment. Our technicians come to your
                  location for convenient service, minimizing your downtime.
                </p>
                <ul className="featured-service-card__list">
                  {['Service at your location', 'Flexible scheduling', 'Minimal disruption'].map((item, index) => (
                    <li key={index} className="featured-service-card__list-item">
                      <span className="featured-service-card__list-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Authorized Honda Support */}
            <div className="featured-service-card">
              <img
                src="https://placehold.co/400x250/DC2626/FFFFFF?text=Honda+Authorized"
                alt="Authorized Honda Support"
                className="featured-service-card__image"
              />
              <div className="featured-service-card__content">
                <h3 className="featured-service-card__title">Authorized Honda Support</h3>
                <p className="featured-service-card__description">
                  As an authorized Honda dealer, we provide factory-trained expertise
                  and genuine parts for all Honda power products.
                </p>
                <ul className="featured-service-card__list">
                  {['Factory-trained technicians', '100% genuine parts', 'Warranty support'].map((item, index) => (
                    <li key={index} className="featured-service-card__list-item">
                      <span className="featured-service-card__list-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Testing */}
            <div className="featured-service-card">
              <img
                src="https://placehold.co/400x250/171717/FFFFFF?text=Load+Testing"
                alt="Performance Inspection & Load Testing"
                className="featured-service-card__image"
              />
              <div className="featured-service-card__content">
                <h3 className="featured-service-card__title">Performance Inspection & Load Testing</h3>
                <p className="featured-service-card__description">
                  Comprehensive testing to ensure your generators perform optimally
                  when you need them most.
                </p>
                <ul className="featured-service-card__list">
                  {['Full load testing', 'Performance reports', 'Preventive recommendations'].map((item, index) => (
                    <li key={index} className="featured-service-card__list-item">
                      <span className="featured-service-card__list-dot" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <div className="service-process__container">
          <div className="service-process__header">
            <span className="service-process__badge">How It Works</span>
            <h2 className="service-process__title">Simple Service Process</h2>
          </div>

          <div className="service-process__grid">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Reach out via phone, email, or WhatsApp to discuss your service needs.',
              },
              {
                step: '02',
                title: 'Get Quote',
                description: 'Receive a detailed, transparent quote for the required services.',
              },
              {
                step: '03',
                title: 'Schedule Service',
                description: 'Choose a convenient time for on-site service or drop-off.',
              },
              {
                step: '04',
                title: 'Expert Service',
                description: 'Our trained technicians complete the work with quality guaranteed.',
              },
            ].map((item, index) => (
              <div key={index} className="process-step">
                {index < 3 && <div className="process-step__connector" />}
                <div className="process-step__number">{item.step}</div>
                <h3 className="process-step__title">{item.title}</h3>
                <p className="process-step__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__container">
          <h2 className="cta-section__title">Ready to Schedule a Service?</h2>
          <p className="cta-section__description">
            Contact us today for professional service from authorized Honda technicians.
          </p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="cta-btn--white">
              Schedule Now
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="cta-btn--outline">
              <Phone size={18} style={{ marginRight: '0.5rem' }} />
              Emergency Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;