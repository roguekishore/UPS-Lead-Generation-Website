import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="category-card"
      aria-label={`View ${category.name}`}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="category-card__image"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="category-card__overlay" />

      {/* Content */}
      <div className="category-card__content">
        <h3 className="category-card__title">{category.name}</h3>
        <p className="category-card__description">{category.description}</p>
        <div className="category-card__link">
          <span>View Products</span>
          <svg
            className="category-card__link-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
