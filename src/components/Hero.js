import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award } from 'lucide-react';
import { companyInfo } from '../config/themeConfig';
import './Hero.css';
import useCountUp from '../hooks/useCountUp';

const Hero = () => {
  const { count: expCount, elementRef: expRef } = useCountUp(parseInt(companyInfo.yearsOfExperience, 10) || 0, 1800);
  const { count: dealerCount, elementRef: dealerRef } = useCountUp(parseInt(companyInfo.hondaDealerYears, 10) || 0, 1800);
  const { count: partsCount, elementRef: partsRef } = useCountUp(100, 1800);

  return (
    <section className="hero" aria-label="Hero section">
      {/* Background Pattern */}
      <div className="hero__background">
        <div className="hero__pattern" />
      </div>

      {/* Decorative Elements */}
      <div className="hero__blur-1" />
      <div className="hero__blur-2" />

      <div className="hero__container">
        <div className="hero__grid">
          {/* Content */}
          <div className="hero__content">
            {/* Honda Badge */}
            <div className="hero__badge">
              <Award className="hero__badge-icon" />
              <span className="hero__badge-text">Authorized Honda Dealer</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__headline">
              Trusted Power{' '}
              <span className="hero__headline-accent">Solutions</span>{' '}
              <br className="hero__headline-break" />
              Since 1997
            </h1>

            {/* Subheadline */}
            <p className="hero__subheadline">
              {companyInfo.yearsOfExperience}+ years of excellence in delivering reliable 
              and innovative power solutions for residential, commercial, and industrial needs.
            </p>

            {/* Stats */}
            <div className="hero__stats">
              <div className="hero__stat" ref={expRef}>
                <div className="hero__stat-value">{expCount}+</div>
                <div className="hero__stat-label">Years Experience</div>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat" ref={dealerRef}>
                <div className="hero__stat-value">{dealerCount}+</div>
                <div className="hero__stat-label">Years Honda Dealer</div>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat" ref={partsRef}>
                <div className="hero__stat-value">{partsCount}%</div>
                <div className="hero__stat-label">Genuine Parts</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero__cta">
              <Link to="/products" className="btn-primary hero__cta-primary">
                Explore Products
                <ArrowRight size={18} className="hero__cta-icon" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="hero__trust">
              <Shield className="hero__trust-icon" />
              <span className="hero__trust-text">Warranty & Post-Warranty Support Available</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              {/* Main Image Placeholder */}
              <div className="hero__image-container">
                <img
                  src="https://placehold.co/600x600/DC2626/FFFFFF?text=Honda+Power+Products"
                  alt="Honda Power Products - Generators, Pumps, Tillers, and more"
                  className="hero__image"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="hero__floating-card hero__floating-card--bottom-left">
                <div className="hero__card-content">
                  <div className="hero__card-icon-wrapper hero__card-icon-wrapper--primary">
                    <Award className="hero__card-icon--primary" />
                  </div>
                  <div>
                    <div className="hero__card-title">Honda Authorized</div>
                    <div className="hero__card-subtitle">Certified Dealer</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="hero__floating-card hero__floating-card--top-right">
                <div className="hero__card-content">
                  <div className="hero__card-icon-wrapper hero__card-icon-wrapper--success">
                    <Shield className="hero__card-icon--success" />
                  </div>
                  <div>
                    <div className="hero__card-title">Quality Assured</div>
                    <div className="hero__card-subtitle">Genuine Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
