/**
 * Privé Gift Cards
 * Purpose: Premium gift card redemption catalog
 * UI: Grid of luxury brand gift cards with filters
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveGiftCards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'dining', label: 'Dining' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'wellness', label: 'Wellness' },
    { key: 'travel', label: 'Travel' },
  ];

  const giftCards = [
    {
      id: '1',
      brand: 'Taj Hotels',
      category: 'travel',
      image: '🏨',
      denominations: [2000, 5000, 10000],
      coinCost: 4500,
      coinType: 'privé',
      discount: '10%',
      featured: true,
    },
    {
      id: '2',
      brand: 'The Oberoi',
      category: 'dining',
      image: '🍽️',
      denominations: [1000, 2500, 5000],
      coinCost: 2250,
      coinType: 'privé',
      discount: '10%',
      featured: true,
    },
    {
      id: '3',
      brand: 'Louis Vuitton',
      category: 'fashion',
      image: '👜',
      denominations: [10000, 25000, 50000],
      coinCost: 22500,
      coinType: 'privé',
      discount: '10%',
    },
    {
      id: '4',
      brand: 'Gucci',
      category: 'fashion',
      image: '👗',
      denominations: [5000, 10000, 25000],
      coinCost: 11250,
      coinType: 'privé',
      discount: '10%',
    },
    {
      id: '5',
      brand: 'The Leela Spa',
      category: 'wellness',
      image: '💆',
      denominations: [2000, 5000, 10000],
      coinCost: 4500,
      coinType: 'privé',
      discount: '10%',
    },
    {
      id: '6',
      brand: 'Four Seasons',
      category: 'travel',
      image: '🏖️',
      denominations: [5000, 10000, 25000],
      coinCost: 11250,
      coinType: 'privé',
      discount: '10%',
    },
    {
      id: '7',
      brand: 'Burberry',
      category: 'fashion',
      image: '🧥',
      denominations: [10000, 20000, 50000],
      coinCost: 22500,
      coinType: 'privé',
      discount: '10%',
    },
    {
      id: '8',
      brand: 'Indian Accent',
      category: 'dining',
      image: '🍷',
      denominations: [2000, 5000, 10000],
      coinCost: 4500,
      coinType: 'privé',
      discount: '10%',
    },
  ];

  const filteredCards = giftCards.filter((card) =>
    selectedCategory === 'all' || card.category === selectedCategory
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${spacing[3]}px ${spacing[4]}px`,
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#181818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '18px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
          Gift Cards
        </h1>
        <div style={{ width: '40px' }} />
      </div>

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        gap: spacing[2],
        padding: `${spacing[4]}px ${spacing[4]}px 0`,
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            style={{
              padding: `${spacing[2]}px ${spacing[4]}px`,
              borderRadius: borderRadius.full,
              backgroundColor: selectedCategory === cat.key ? 'rgba(201, 169, 98, 0.1)' : '#141414',
              border: selectedCategory === cat.key ? '1px solid rgba(201, 169, 98, 0.3)' : 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '14px', color: selectedCategory === cat.key ? colors.gold.primary : colors.text.secondary }}>
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div style={{
        margin: `${spacing[4]}px ${spacing[4]}px 0`,
        padding: spacing[4],
        backgroundColor: 'rgba(201, 169, 98, 0.05)',
        borderRadius: borderRadius.lg,
        border: '1px solid rgba(201, 169, 98, 0.1)',
      }}>
        <p style={{ fontSize: '13px', color: colors.text.tertiary, textAlign: 'center', lineHeight: '18px' }}>
          Premium gift cards at 10% discount - Exclusive to Privé members
        </p>
      </div>

      {/* Gift Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: spacing[3],
        padding: `${spacing[4]}px ${spacing[4]}px`,
      }}>
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(`/prive/gift-card/${card.id}`)}
            style={{
              backgroundColor: colors.background.card,
              borderRadius: borderRadius.lg,
              border: '1px solid #1A1A1A',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#1A1A1A';
            }}
          >
            {/* Featured Badge */}
            {card.featured && (
              <div style={{
                position: 'absolute',
                top: spacing[2],
                right: spacing[2],
                padding: `${spacing[1]}px ${spacing[2]}px`,
                backgroundColor: 'rgba(201, 169, 98, 0.2)',
                borderRadius: borderRadius.sm,
                border: '1px solid rgba(201, 169, 98, 0.3)',
              }}>
                <span style={{ fontSize: '10px', color: colors.gold.primary, fontWeight: '500' }}>
                  FEATURED
                </span>
              </div>
            )}

            {/* Card Image */}
            <div style={{
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0F0F0F',
              fontSize: '48px',
            }}>
              {card.image}
            </div>

            {/* Card Info */}
            <div style={{ padding: spacing[3] }}>
              <h3 style={{
                fontSize: '15px',
                fontWeight: '500',
                color: colors.text.primary,
                marginBottom: spacing[1],
              }}>
                {card.brand}
              </h3>

              {/* Denominations */}
              <div style={{
                display: 'flex',
                gap: spacing[1],
                marginBottom: spacing[2],
                flexWrap: 'wrap',
              }}>
                {card.denominations.slice(0, 2).map((denom, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      color: colors.text.tertiary,
                      padding: `2px ${spacing[1]}px`,
                      backgroundColor: '#0A0A0A',
                      borderRadius: borderRadius.sm,
                    }}
                  >
                    ₹{denom.toLocaleString()}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '13px', color: colors.gold.primary, fontWeight: '500' }}>
                    {card.coinCost} coins
                  </div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>
                    Save {card.discount}
                  </div>
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '14px' }}>→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div style={{ padding: `${spacing[12]}px ${spacing[4]}px`, textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: spacing[3] }}>🎁</div>
          <p style={{ fontSize: '15px', color: colors.text.tertiary }}>
            No gift cards in this category
          </p>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default PriveGiftCards;
