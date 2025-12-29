import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, companyInfo } from '../config/themeConfig';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : 'navbar--default'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <div className="navbar__content">
          {/* Logo */}
          <Link
            to="/"
            className="navbar__logo"
            aria-label="Universal Power Systems - Home"
          >
            <div className="navbar__logo-text">
              <span className="navbar__brand-name">
                Universal Power Systems
              </span>
              <span className="navbar__tagline">
                Since 1997
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar__nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__nav-link ${
                  isActiveLink(link.path) ? 'navbar__nav-link--active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="navbar__cta-desktop">
            <a
              href={`tel:${companyInfo.phone}`}
              className="navbar__phone-link"
              aria-label="Call us"
            >
              <Phone className="navbar__phone-icon" />
              <span className="navbar__phone-number">{companyInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary navbar__quote-btn"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X className="navbar__mobile-icon" />
            ) : (
              <Menu className="navbar__mobile-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`navbar__nav-mobile ${
            isOpen ? 'navbar__nav-mobile--open' : 'navbar__nav-mobile--closed'
          }`}
        >
          <div className="navbar__mobile-menu">
            <div className="navbar__mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar__mobile-link ${
                    isActiveLink(link.path) ? 'navbar__mobile-link--active' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="navbar__mobile-cta">
              <a
                href={`tel:${companyInfo.phone}`}
                className="navbar__mobile-phone"
              >
                <Phone size={18} />
                <span className="navbar__mobile-phone-text">{companyInfo.phone}</span>
              </a>
              <Link
                to="/contact"
                className="btn-primary navbar__mobile-quote-btn"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
