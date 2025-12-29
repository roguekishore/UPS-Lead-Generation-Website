import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';
import CategoryCard from '../components/CategoryCard';
import { productCategories } from '../data/products';
import { companyInfo } from '../config/themeConfig';
import useCountUp from '../hooks/useCountUp';

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="page-section page-section--white" aria-label="Product Categories">
        <div className="page-section__container">
          {/* Section Header */}
          <div className="page-section__header">
            <span className="page-section__badge">Our Products</span>
            <h2 className="page-section__title">Power Solutions for Every Need</h2>
            <p className="page-section__description">
              Explore our comprehensive range of Honda power products designed for
              residential, commercial, and industrial applications.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="categories-grid">
            {productCategories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="view-all-container">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceGrid showAll={false} />

      {/* About Preview Section */}
      <section className="page-section page-section--white" aria-label="About Us Preview">
        <div className="page-section__container">
          <div className="page-content-grid">
            {/* Image */}
            <div className="page-image-container">
              <img
                src="https://placehold.co/600x500/171717/FFFFFF?text=Universal+Power+Systems"
                alt="Universal Power Systems - Trusted Power Solutions"
                className="page-image"
              />
              {/* Experience Badge */}
              <ExperienceBadge years={companyInfo.yearsOfExperience} />
            </div>

            {/* Content */}
            <div>
              <span className="page-section__badge">About Us</span>
              <h2 className="page-section__title">Your Trusted Partner in Power Solutions</h2>
              <p style={{ color: 'var(--neutral-600)', marginBottom: '1.5rem', lineHeight: '1.625' }}>
                Universal Power Systems is a trusted provider of reliable and innovative
                power solutions, committed to delivering high-quality products and services
                to meet diverse energy needs. With a strong focus on performance, safety,
                and efficiency, we serve residential, commercial, and industrial customers.
              </p>

              {/* Key Points */}
              <ul className="check-list" style={{ marginBottom: '2rem' }}>
                {[
                  'Authorized Honda Power Products Dealer',
                  '25+ Years of Industry Experience',
                  'Genuine Parts & Professional Service',
                  'On-Site & Doorstep Service Available',
                ].map((point, index) => (
                  <li key={index} className="check-list__item">
                    <CheckCircle className="check-list__icon" size={20} />
                    <span className="check-list__text">{point}</span>
                  </li>
                ))}
              </ul>

              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="cta-section__container">
          <h2 className="cta-section__title">Ready to Power Up?</h2>
          <p className="cta-section__description">
            Get in touch with us today for expert consultation and competitive quotes
            on Honda power products.
          </p>
          <div className="cta-section__buttons">
            <Link to="/contact" className="cta-btn--white">
              Request a Quote
            </Link>
            <a href={`tel:${companyInfo.phone}`} className="cta-btn--outline">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

function ExperienceBadge({ years }) {
  const { count, elementRef } = useCountUp(parseInt(years, 10) || 0, 1800);
  return (
    <div className="experience-badge" ref={elementRef}>
      <div className="experience-badge__value">{count}+</div>
      <div className="experience-badge__label">Years of Excellence</div>
    </div>
  );
}
