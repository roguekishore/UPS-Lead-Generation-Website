import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from 'lucide-react';
import { navLinks, companyInfo } from '../config/themeConfig';
import { productCategories } from '../data/products';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              Universal Power Systems
            </Link>
            <p className="footer__brand-description">
              {companyInfo.yearsOfExperience}+ years of excellence in delivering reliable
              and innovative power solutions. Authorized Honda Power Products Dealer.
            </p>

            {/* Social Links */}
            <div className="footer__social">
              <a
                href={companyInfo.social.facebook}
                className="footer__social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              <a
                href={companyInfo.social.instagram}
                className="footer__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                className="footer__social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer__column">
            <h4 className="footer__column-title">Products</h4>
            <ul className="footer__links">
              {productCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="footer__link"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h4 className="footer__column-title">Contact Us</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <MapPin size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">
                  {companyInfo.address.line1}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.state}
                  <br />
                  {companyInfo.address.pincode}
                </span>
              </li>
              <li>
                <a href={`tel:${companyInfo.phone}`} className="footer__contact-link">
                  <Phone size={18} className="footer__contact-icon" />
                  <span className="footer__contact-text">{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="footer__contact-link">
                  <Mail size={18} className="footer__contact-icon" />
                  <span className="footer__contact-text">{companyInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Universal Power Systems. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer__legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="footer__scroll-top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
