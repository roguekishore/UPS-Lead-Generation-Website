import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, productCategories, getProductsByCategory } from '../data/products';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Update selected category when URL changes
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      result = getProductsByCategory(selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const searchTerms = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerms) ||
          product.model.toLowerCase().includes(searchTerms) ||
          product.description.toLowerCase().includes(searchTerms)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Get current category details
  const currentCategory = productCategories.find((cat) => cat.id === selectedCategory);

  return (
    <main className="page">
      {/* Header Section */}
      <section className="products-header">
        <div className="products-header__container">
          <span className="products-header__badge">Our Products</span>
          <h1 className="products-header__title">Honda Power Products</h1>
          <p className="products-header__description">
            Discover our comprehensive range of genuine Honda power products for
            every application and industry need.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      {selectedCategory === 'all' && (
        <section className="categories-overview">
          <div className="categories-overview__container">
            <h2 className="categories-overview__title">Browse by Category</h2>
            <div className="categories-overview__grid">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className="category-button"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-button__image"
                  />
                  <div className="category-button__overlay" />
                  <div className="category-button__content">
                    <h3 className="category-button__title">{category.name}</h3>
                    <p className="category-button__count">
                      {getProductsByCategory(category.id).length} Products
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="products-filters">
        <div className="products-filters__container">
          <div className="products-filters__inner">
            {/* Search */}
            <div className="products-search">
              <Search className="products-search__icon" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="products-search__input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="products-search__clear"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Controls */}
            <div className="products-controls">
              {/* Category Filter - Mobile Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="products-filter-toggle"
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>

              {/* Category Filter - Desktop */}
              <div className="products-category-select">
                <span className="products-category-select__label">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="products-category-select__dropdown"
                >
                  <option value="all">All Products</option>
                  {productCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="products-view-toggle">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`products-view-toggle__btn ${
                    viewMode === 'grid' ? 'products-view-toggle__btn--active' : ''
                  }`}
                  aria-label="Grid view"
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`products-view-toggle__btn ${
                    viewMode === 'list' ? 'products-view-toggle__btn--active' : ''
                  }`}
                  aria-label="List view"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="products-mobile-filters">
              <label className="products-mobile-filters__label">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="products-mobile-filters__select"
              >
                <option value="all">All Products</option>
                {productCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Category Header */}
      {currentCategory && selectedCategory !== 'all' && (
        <section className="current-category">
          <div className="current-category__container">
            <div className="current-category__info">
              <h2>{currentCategory.name}</h2>
              <p>{currentCategory.description}</p>
            </div>
            <button
              onClick={() => handleCategoryChange('all')}
              className="current-category__clear"
            >
              View All
            </button>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="products-section">
        <div className="products-section__container">
          {/* Results Count */}
          <p className="products-section__count">
            Showing <span>{filteredProducts.length}</span>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
            {searchQuery && (
              <span>
                {' '}
                for "<span>{searchQuery}</span>"
              </span>
            )}
          </p>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' ? 'products-grid' : 'products-grid--list'}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-no-results">
              <div className="products-no-results__icon">🔍</div>
              <h3 className="products-no-results__title">No products found</h3>
              <p className="products-no-results__text">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section page-section--dark">
        <div className="page-section__container" style={{ textAlign: 'center' }}>
          <h2 className="page-section__title page-section__title--white">
            Can't Find What You're Looking For?
          </h2>
          <p className="page-section__description page-section__description--white">
            Contact us directly and our team will help you find the perfect power
            solution for your needs.
          </p>
          <Link to="/contact" className="btn-primary" style={{ marginTop: '2rem' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
