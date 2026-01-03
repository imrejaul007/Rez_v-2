/**
 * Enhanced Wishlist
 * Purpose: Wishlist with collections, sharing, and price alerts
 * UI: Product cards, collections, share wishlist, price drop alerts
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnhancedWishlist = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const wishlistItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      brand: 'Apple',
      image: '📱',
      currentPrice: 134900,
      originalPrice: 159900,
      discount: 16,
      collection: 'electronics',
      priceDropAlert: true,
      inStock: true,
      addedDate: '2024-12-15',
    },
    {
      id: 2,
      name: 'Nike Air Max 270',
      brand: 'Nike',
      image: '👟',
      currentPrice: 12995,
      originalPrice: 14995,
      discount: 13,
      collection: 'fashion',
      priceDropAlert: false,
      inStock: true,
      addedDate: '2024-12-18',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      brand: 'Sony',
      image: '🎧',
      currentPrice: 29990,
      originalPrice: 34990,
      discount: 14,
      collection: 'electronics',
      priceDropAlert: true,
      inStock: false,
      addedDate: '2024-12-10',
    },
    {
      id: 4,
      name: 'MAC Ruby Woo Lipstick',
      brand: 'MAC',
      image: '💄',
      currentPrice: 1800,
      originalPrice: 2100,
      discount: 14,
      collection: 'beauty',
      priceDropAlert: false,
      inStock: true,
      addedDate: '2024-12-20',
    },
  ];

  const collections = [
    { id: 'all', name: 'All Items', count: wishlistItems.length, icon: '📦' },
    { id: 'electronics', name: 'Electronics', count: 2, icon: '📱' },
    { id: 'fashion', name: 'Fashion', count: 1, icon: '👗' },
    { id: 'beauty', name: 'Beauty', count: 1, icon: '💄' },
  ];

  const filteredItems = activeTab === 'all'
    ? wishlistItems
    : wishlistItems.filter(item => item.collection === activeTab);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My ReZ Wishlist',
        text: `Check out my wishlist! ${filteredItems.length} items I'm saving up for.`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Wishlist link copied to clipboard!');
    }
  };

  const handleRemove = (itemId) => {
    alert(`Item ${itemId} removed from wishlist`);
  };

  const handleMoveToCart = (itemId) => {
    navigate('/mall/cart', { state: { addedItem: itemId } });
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
              My Wishlist
            </h1>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </div>
          </div>
          <button
            onClick={handleShare}
            style={{
              padding: '8px 16px',
              backgroundColor: '#F9FAFB',
              color: '#374151',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>↗</span>
            Share
          </button>
        </div>

        {/* Collections Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none',
        }}>
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setActiveTab(collection.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: activeTab === collection.id ? '#10B981' : '#FFFFFF',
                color: activeTab === collection.id ? '#FFFFFF' : '#6B7280',
                border: activeTab === collection.id ? 'none' : '1px solid #E5E7EB',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>{collection.icon}</span>
              {collection.name}
              <span style={{
                padding: '2px 6px',
                backgroundColor: activeTab === collection.id ? 'rgba(255,255,255,0.2)' : '#F3F4F6',
                borderRadius: '10px',
                fontSize: '11px',
              }}>
                {collection.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Price Drop Alerts */}
        {wishlistItems.some(item => item.priceDropAlert) && (
          <div style={{
            backgroundColor: '#FEF3C7',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #FDE68A',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>🔔</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400E', marginBottom: '2px' }}>
                  Price Drop Alert!
                </div>
                <div style={{ fontSize: '12px', color: '#B45309' }}>
                  {wishlistItems.filter(i => i.priceDropAlert).length} item{wishlistItems.filter(i => i.priceDropAlert).length !== 1 ? 's' : ''} in your wishlist got cheaper
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
            {filteredItems.length} Result{filteredItems.length !== 1 ? 's' : ''}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '8px',
                backgroundColor: viewMode === 'grid' ? '#10B981' : '#FFFFFF',
                color: viewMode === 'grid' ? '#FFFFFF' : '#6B7280',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              ⊞
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '8px',
                backgroundColor: viewMode === 'list' ? '#10B981' : '#FFFFFF',
                color: viewMode === 'list' ? '#FFFFFF' : '#6B7280',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '60px 20px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>💝</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              No items in {activeTab === 'all' ? 'wishlist' : collections.find(c => c.id === activeTab)?.name}
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
              Start adding items you love!
            </p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '12px 24px',
                backgroundColor: '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Start Shopping
            </button>
          </div>
        )}

        {/* Wishlist Items */}
        {viewMode === 'grid' ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '16px',
          }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Price Drop Badge */}
                {item.priceDropAlert && (
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    padding: '4px 8px',
                    backgroundColor: '#FEF3C7',
                    color: '#92400E',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '600',
                    zIndex: 1,
                  }}>
                    💰 Price ↓
                  </div>
                )}

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px',
                    zIndex: 1,
                  }}
                >
                  ×
                </button>

                {/* Product Image */}
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{
                    height: '160px',
                    backgroundColor: '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px',
                    cursor: 'pointer',
                  }}
                >
                  {item.image}
                </div>

                {/* Product Info */}
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                    {item.brand}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#1F2937',
                    marginBottom: '8px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.name}
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                        ₹{item.currentPrice.toLocaleString()}
                      </span>
                      {item.discount > 0 && (
                        <span style={{
                          fontSize: '11px',
                          color: '#DC2626',
                          backgroundColor: '#FEE2E2',
                          padding: '2px 4px',
                          borderRadius: '4px',
                        }}>
                          -{item.discount}%
                        </span>
                      )}
                    </div>
                    {item.originalPrice > item.currentPrice && (
                      <div style={{ fontSize: '11px', color: '#9CA3AF', textDecoration: 'line-through' }}>
                        ₹{item.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    disabled={!item.inStock}
                    style={{
                      width: '100%',
                      padding: '8px',
                      backgroundColor: item.inStock ? '#10B981' : '#F3F4F6',
                      color: item.inStock ? '#FFFFFF' : '#9CA3AF',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500',
                      cursor: item.inStock ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  gap: '16px',
                }}
              >
                {/* Product Image */}
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '8px',
                    backgroundColor: '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    flexShrink: 0,
                    cursor: 'pointer',
                  }}
                >
                  {item.image}
                </div>

                {/* Product Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                        {item.brand}
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
                        {item.name}
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '16px',
                        backgroundColor: '#F9FAFB',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '18px',
                      }}
                    >
                      ×
                    </button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#10B981' }}>
                      ₹{item.currentPrice.toLocaleString()}
                    </span>
                    {item.originalPrice > item.currentPrice && (
                      <>
                        <span style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'line-through' }}>
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          color: '#DC2626',
                          backgroundColor: '#FEE2E2',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: '500',
                        }}>
                          -{item.discount}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {item.priceDropAlert && (
                    <div style={{
                      padding: '6px 10px',
                      backgroundColor: '#FEF3C7',
                      color: '#92400E',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      marginBottom: '12px',
                      display: 'inline-block',
                    }}>
                      💰 Price dropped recently!
                    </div>
                  )}

                  <button
                    onClick={() => handleMoveToCart(item.id)}
                    disabled={!item.inStock}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: item.inStock ? '#10B981' : '#F3F4F6',
                      color: item.inStock ? '#FFFFFF' : '#9CA3AF',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '500',
                      cursor: item.inStock ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedWishlist;
