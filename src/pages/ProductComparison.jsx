/**
 * Product Comparison
 * Purpose: Compare multiple products side-by-side
 * UI: Comparison table, add/remove products, specifications
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductComparison = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedProducts, setSelectedProducts] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: '📱',
      price: 134900,
      rating: 4.8,
      specs: {
        display: '6.7" OLED',
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB',
        camera: '48MP',
        battery: '4422 mAh',
        os: 'iOS 17',
      },
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      image: '📱',
      price: 129999,
      rating: 4.7,
      specs: {
        display: '6.8" AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '200MP',
        battery: '5000 mAh',
        os: 'Android 14',
      },
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      brand: 'Google',
      image: '📱',
      price: 106999,
      rating: 4.6,
      specs: {
        display: '6.7" OLED',
        processor: 'Google Tensor G3',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP',
        battery: '5050 mAh',
        os: 'Android 14',
      },
    },
  ]);

  const specRows = [
    { key: 'price', label: 'Price' },
    { key: 'rating', label: 'Rating' },
    { key: 'display', label: 'Display' },
    { key: 'processor', label: 'Processor' },
    { key: 'ram', label: 'RAM' },
    { key: 'storage', label: 'Storage' },
    { key: 'camera', label: 'Camera' },
    { key: 'battery', label: 'Battery' },
    { key: 'os', label: 'Operating System' },
  ];

  const handleRemoveProduct = (productId) => {
    if (selectedProducts.length <= 2) {
      alert('You need at least 2 products to compare');
      return;
    }
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const handleAddProduct = () => {
    navigate('/search', { state: { comparisonMode: true } });
  };

  const getBestValue = (specKey) => {
    if (specKey === 'price') {
      return Math.min(...selectedProducts.map(p => p.price));
    }
    if (specKey === 'rating') {
      return Math.max(...selectedProducts.map(p => p.rating));
    }
    // For numeric specs in strings
    const numericValues = selectedProducts.map(p => {
      const value = p.specs[specKey];
      if (!value) return 0;
      const numeric = parseInt(value.toString().replace(/[^0-9]/g, ''));
      return numeric || 0;
    });
    return Math.max(...numericValues);
  };

  const isBestValue = (product, specKey) => {
    const bestValue = getBestValue(specKey);
    if (specKey === 'price') return product.price === bestValue;
    if (specKey === 'rating') return product.rating === bestValue;

    const value = product.specs[specKey];
    if (!value) return false;
    const numeric = parseInt(value.toString().replace(/[^0-9]/g, ''));
    return numeric === bestValue;
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      paddingBottom: '80px',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
          </button>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              Compare Products
            </h1>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              {selectedProducts.length} products selected
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div style={{
        backgroundColor: '#EFF6FF',
        padding: '12px 20px',
        borderBottom: '1px solid #DBEAFE',
      }}>
        <div style={{ fontSize: '13px', color: '#1E3A8A' }}>
          💡 Green highlights show the best value in each category
        </div>
      </div>

      {/* Comparison Table - Mobile Optimized */}
      <div style={{ padding: '20px', overflowX: 'auto' }}>
        <div style={{
          minWidth: `${selectedProducts.length * 180 + 150}px`,
        }}>
          {/* Product Headers */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '150px', flexShrink: 0 }} />
            {selectedProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  width: '180px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  padding: '16px',
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => handleRemoveProduct(product.id)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '12px',
                    backgroundColor: '#FEE2E2',
                    color: '#DC2626',
                    border: 'none',
                    fontSize: '14px',
                    cursor: 'pointer',
                  }}
                >
                  ×
                </button>

                <div style={{
                  fontSize: '48px',
                  marginBottom: '12px',
                }}>
                  {product.image}
                </div>

                <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>
                  {product.brand}
                </div>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
                  {product.name}
                </div>

                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    backgroundColor: '#10B981',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  View Details
                </button>
              </div>
            ))}

            {selectedProducts.length < 4 && (
              <button
                onClick={handleAddProduct}
                style={{
                  width: '180px',
                  height: '220px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '2px dashed #D1D5DB',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#6B7280',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>+</div>
                <div style={{ fontSize: '13px', fontWeight: '500' }}>Add Product</div>
              </button>
            )}
          </div>

          {/* Specification Rows */}
          {specRows.map((spec, index) => (
            <div
              key={spec.key}
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '8px',
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              <div style={{
                width: '150px',
                flexShrink: 0,
                fontSize: '13px',
                fontWeight: '600',
                color: '#374151',
                display: 'flex',
                alignItems: 'center',
              }}>
                {spec.label}
              </div>

              {selectedProducts.map((product) => {
                const value = spec.key === 'price'
                  ? `₹${product.price.toLocaleString()}`
                  : spec.key === 'rating'
                  ? `${product.rating} ⭐`
                  : product.specs[spec.key] || 'N/A';

                const isHighlighted = isBestValue(product, spec.key);

                return (
                  <div
                    key={product.id}
                    style={{
                      width: '180px',
                      padding: '12px',
                      backgroundColor: isHighlighted ? '#D1FAE5' : 'transparent',
                      border: isHighlighted ? '2px solid #10B981' : '1px solid #E5E7EB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: isHighlighted ? '600' : '400',
                      color: isHighlighted ? '#047857' : '#1F2937',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        padding: '16px 20px',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              const compareUrl = window.location.href;
              if (navigator.share) {
                navigator.share({
                  title: 'Product Comparison',
                  text: `Compare ${selectedProducts.map(p => p.name).join(' vs ')}`,
                  url: compareUrl,
                });
              } else {
                navigator.clipboard.writeText(compareUrl);
                alert('Comparison link copied!');
              }
            }}
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
            Share Comparison
          </button>
          <button
            onClick={() => setSelectedProducts([])}
            style={{
              flex: 1,
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
            Start New Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComparison;
