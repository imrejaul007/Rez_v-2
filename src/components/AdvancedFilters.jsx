/**
 * Advanced Filters Component
 * Purpose: Reusable filtering component for product search/browsing
 * UI: Price range, categories, brands, ratings, sort options
 */

import { useState } from 'react';

const AdvancedFilters = ({ onApplyFilters, onClose, initialFilters = {} }) => {
  const [filters, setFilters] = useState({
    priceRange: initialFilters.priceRange || [0, 100000],
    categories: initialFilters.categories || [],
    brands: initialFilters.brands || [],
    rating: initialFilters.rating || 0,
    sortBy: initialFilters.sortBy || 'popularity',
    inStock: initialFilters.inStock ?? true,
    cashbackMin: initialFilters.cashbackMin || 0,
    discount: initialFilters.discount || 0,
  });

  const categories = [
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'fashion', name: 'Fashion', icon: '👗' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'grocery', name: 'Grocery', icon: '🛒' },
    { id: 'food', name: 'Food & Dining', icon: '🍽️' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'home', name: 'Home Services', icon: '🏠' },
    { id: 'healthcare', name: 'Healthcare', icon: '⚕️' },
  ];

  const brands = [
    'Apple', 'Samsung', 'Nike', 'Adidas', 'Zara', 'H&M', 'Lakme', 'Maybelline',
    'Big Bazaar', 'More', 'Swiggy', 'Zomato', 'Cult.fit', 'Urban Company',
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Popularity', icon: '🔥' },
    { id: 'price_low', label: 'Price: Low to High', icon: '↑' },
    { id: 'price_high', label: 'Price: High to Low', icon: '↓' },
    { id: 'rating', label: 'Highest Rated', icon: '⭐' },
    { id: 'cashback', label: 'Highest Cashback', icon: '💰' },
    { id: 'discount', label: 'Highest Discount', icon: '🏷️' },
    { id: 'newest', label: 'Newest First', icon: '🆕' },
  ];

  const handlePriceChange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(value);
    setFilters({ ...filters, priceRange: newRange });
  };

  const toggleCategory = (categoryId) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(c => c !== categoryId)
      : [...filters.categories, categoryId];
    setFilters({ ...filters, categories: newCategories });
  };

  const toggleBrand = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const handleApply = () => {
    onApplyFilters(filters);
    if (onClose) onClose();
  };

  const handleReset = () => {
    const resetFilters = {
      priceRange: [0, 100000],
      categories: [],
      brands: [],
      rating: 0,
      sortBy: 'popularity',
      inStock: true,
      cashbackMin: 0,
      discount: 0,
    };
    setFilters(resetFilters);
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.brands.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000 ? 1 : 0) +
    (filters.cashbackMin > 0 ? 1 : 0) +
    (filters.discount > 0 ? 1 : 0);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-end',
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        width: '100%',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: '0 0 4px 0' }}>
              Filters
            </h2>
            {activeFiltersCount > 0 && (
              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '16px',
              backgroundColor: '#F3F4F6',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
        }}>
          {/* Sort By */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Sort By
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFilters({ ...filters, sortBy: option.id })}
                  style={{
                    padding: '10px 12px',
                    backgroundColor: filters.sortBy === option.id ? '#10B981' : '#F9FAFB',
                    color: filters.sortBy === option.id ? '#FFFFFF' : '#374151',
                    border: filters.sortBy === option.id ? 'none' : '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{option.icon}</span>
                  <span style={{ fontSize: '12px' }}>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Price Range
            </h3>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px', display: 'block' }}>
                  Min Price
                </label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(0, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '13px',
                  }}
                  placeholder="₹0"
                />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px', display: 'block' }}>
                  Max Price
                </label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(1, e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '13px',
                  }}
                  placeholder="₹100000"
                />
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center' }}>
              ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
            </div>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Categories
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  style={{
                    padding: '8px 14px',
                    backgroundColor: filters.categories.includes(category.id) ? '#D1FAE5' : '#F9FAFB',
                    color: filters.categories.includes(category.id) ? '#047857' : '#374151',
                    border: filters.categories.includes(category.id) ? '1px solid #10B981' : '1px solid #E5E7EB',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                  {filters.categories.includes(category.id) && <span>✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Brands
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  style={{
                    padding: '8px 14px',
                    backgroundColor: filters.brands.includes(brand) ? '#D1FAE5' : '#F9FAFB',
                    color: filters.brands.includes(brand) ? '#047857' : '#374151',
                    border: filters.brands.includes(brand) ? '1px solid #10B981' : '1px solid #E5E7EB',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{brand}</span>
                  {filters.brands.includes(brand) && <span>✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Minimum Rating
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[0, 3, 3.5, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilters({ ...filters, rating })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: filters.rating === rating ? '#10B981' : '#F9FAFB',
                    color: filters.rating === rating ? '#FFFFFF' : '#374151',
                    border: filters.rating === rating ? 'none' : '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  {rating === 0 ? 'All' : `${rating}+ ⭐`}
                </button>
              ))}
            </div>
          </div>

          {/* Minimum Cashback */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Minimum Cashback
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[0, 5, 10, 15, 20].map((cashback) => (
                <button
                  key={cashback}
                  onClick={() => setFilters({ ...filters, cashbackMin: cashback })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: filters.cashbackMin === cashback ? '#10B981' : '#F9FAFB',
                    color: filters.cashbackMin === cashback ? '#FFFFFF' : '#374151',
                    border: filters.cashbackMin === cashback ? 'none' : '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  {cashback === 0 ? 'All' : `${cashback}%+`}
                </button>
              ))}
            </div>
          </div>

          {/* Minimum Discount */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Minimum Discount
            </h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[0, 10, 20, 30, 50].map((discount) => (
                <button
                  key={discount}
                  onClick={() => setFilters({ ...filters, discount })}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: filters.discount === discount ? '#10B981' : '#F9FAFB',
                    color: filters.discount === discount ? '#FFFFFF' : '#374151',
                    border: filters.discount === discount ? 'none' : '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  {discount === 0 ? 'All' : `${discount}%+`}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Availability */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}>
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                style={{
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                }}
              />
              <span style={{ fontSize: '14px', color: '#1F2937', fontWeight: '500' }}>
                Show only items in stock
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #E5E7EB',
          display: 'flex',
          gap: '12px',
          backgroundColor: '#FFFFFF',
        }}>
          <button
            onClick={handleReset}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#FFFFFF',
              color: '#374151',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Reset All
          </button>
          <button
            onClick={handleApply}
            style={{
              flex: 2,
              padding: '14px',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Apply Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
