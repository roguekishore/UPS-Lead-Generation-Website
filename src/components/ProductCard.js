import React from 'react';
import { useInquiry } from '../context/InquiryContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { openInquiry } = useInquiry();

  const handleRequestQuote = () => {
    openInquiry(product);
  };

  return (
    <article className="product-card" aria-label={`Product: ${product.name}`}>
      {/* Product Image */}
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="product-card__image"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="product-card__badge">
          <span className="product-card__badge-text">
            {product.specifications?.brand || 'Honda'}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="product-card__details">
        {/* Product Name */}
        <h3 className="product-card__name">{product.name}</h3>

        {/* Model Number */}
        <p className="product-card__model">Model: {product.model}</p>

        {/* Description */}
        <p className="product-card__description">{product.description}</p>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="product-card__features">
            <div className="product-card__features-list">
              {product.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="product-card__feature">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleRequestQuote}
          className="btn-primary product-card__button"
          aria-label={`Request quote for ${product.name}`}
        >
          Request Quote
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
