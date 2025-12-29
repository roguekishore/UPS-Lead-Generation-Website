import React from 'react';
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
} from 'lucide-react';
import { services } from '../config/themeConfig';
import './ServiceGrid.css';

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

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon] || Zap;

  return (
    <article
      className="service-card"
      style={{ animationDelay: `${index * 100}ms` }}
      aria-label={service.title}
    >
      {/* Icon */}
      <div className="service-card__icon-wrapper">
        <IconComponent size={28} className="service-card__icon" />
      </div>

      {/* Title */}
      <h3 className="service-card__title">{service.title}</h3>

      {/* Description */}
      <p className="service-card__description">{service.description}</p>
    </article>
  );
};

const ServiceGrid = ({ showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="service-section" aria-label="Our Services">
      <div className="service-section__container">
        {/* Section Header */}
        <div className="service-section__header">
          <span className="service-section__badge">Our Services</span>
          <h2 className="service-section__title">Comprehensive Power Solutions</h2>
          <p className="service-section__description">
            From sales to servicing, we provide end-to-end solutions for all your
            power equipment needs with genuine Honda support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="service-section__grid">
          {displayedServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* View All Link */}
        {!showAll && services.length > 6 && (
          <div className="service-section__view-all">
            <a href="/services" className="btn-outline">
              View All Services
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceGrid;
