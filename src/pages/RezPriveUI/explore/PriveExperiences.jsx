/**
 * Privé Experiences
 * Purpose: Exclusive luxury experiences catalog
 * UI: Premium experiences with booking flow
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveExperiences = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'dining', label: 'Dining' },
    { key: 'wellness', label: 'Wellness' },
    { key: 'travel', label: 'Travel' },
    { key: 'events', label: 'Events' },
  ];

  const experiences = [
    {
      id: '1',
      title: 'Private Chef Tasting Menu',
      brand: 'Michelin Star Chef',
      category: 'dining',
      image: '👨‍🍳',
      location: 'Mumbai',
      duration: '3 hours',
      participants: 'Up to 6 guests',
      coinCost: 15000,
      value: '₹25,000',
      availability: 'Limited',
      featured: true,
    },
    {
      id: '2',
      title: 'Luxury Spa Day',
      brand: 'The Leela Palace',
      category: 'wellness',
      image: '💆‍♀️',
      location: 'Bangalore',
      duration: 'Full day',
      participants: '2 guests',
      coinCost: 8000,
      value: '₹15,000',
      availability: 'Available',
      featured: true,
    },
    {
      id: '3',
      title: 'Helicopter City Tour',
      brand: 'Sky Tours',
      category: 'travel',
      image: '🚁',
      location: 'Delhi',
      duration: '1 hour',
      participants: 'Up to 4 guests',
      coinCost: 20000,
      value: '₹35,000',
      availability: 'Limited',
    },
    {
      id: '4',
      title: 'Wine Tasting at Vineyard',
      brand: 'Sula Vineyards',
      category: 'dining',
      image: '🍷',
      location: 'Nashik',
      duration: '4 hours',
      participants: 'Up to 8 guests',
      coinCost: 12000,
      value: '₹20,000',
      availability: 'Available',
    },
    {
      id: '5',
      title: 'Private Yoga Retreat',
      brand: 'Ananda Himalaya',
      category: 'wellness',
      image: '🧘‍♀️',
      location: 'Rishikesh',
      duration: '2 days',
      participants: '1 guest',
      coinCost: 25000,
      value: '₹45,000',
      availability: 'Limited',
      featured: true,
    },
    {
      id: '6',
      title: 'Luxury Yacht Sunset Cruise',
      brand: 'Prestige Yachts',
      category: 'travel',
      image: '⛵',
      location: 'Goa',
      duration: '3 hours',
      participants: 'Up to 10 guests',
      coinCost: 18000,
      value: '₹30,000',
      availability: 'Available',
    },
    {
      id: '7',
      title: 'Exclusive Art Gallery Tour',
      brand: 'National Gallery',
      category: 'events',
      image: '🎨',
      location: 'Mumbai',
      duration: '2 hours',
      participants: 'Up to 12 guests',
      coinCost: 6000,
      value: '₹10,000',
      availability: 'Available',
    },
    {
      id: '8',
      title: 'Golf with a Pro',
      brand: 'DLF Golf Club',
      category: 'events',
      image: '⛳',
      location: 'Gurgaon',
      duration: '4 hours',
      participants: 'Up to 4 guests',
      coinCost: 10000,
      value: '₹18,000',
      availability: 'Limited',
    },
  ];

  const filteredExperiences = experiences.filter((exp) =>
    selectedCategory === 'all' || exp.category === selectedCategory
  );

  const getAvailabilityColor = (availability) => {
    return availability === 'Available' ? '#10B981' : '#FFC107';
  };

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
          Experiences
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
        background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.1) 0%, rgba(201, 169, 98, 0.05) 100%)',
        borderRadius: borderRadius.lg,
        border: '1px solid rgba(201, 169, 98, 0.2)',
      }}>
        <p style={{ fontSize: '13px', color: colors.gold.primary, textAlign: 'center', lineHeight: '18px', fontWeight: '500' }}>
          ✨ Curated luxury experiences exclusive to Privé members
        </p>
      </div>

      {/* Experiences List */}
      <div style={{ padding: `${spacing[4]}px ${spacing[4]}px` }}>
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            onClick={() => navigate(`/prive/experience/${exp.id}`)}
            style={{
              backgroundColor: colors.background.card,
              borderRadius: borderRadius.lg,
              border: '1px solid #1A1A1A',
              marginBottom: spacing[3],
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative',
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
            {exp.featured && (
              <div style={{
                position: 'absolute',
                top: spacing[3],
                right: spacing[3],
                padding: `${spacing[1]}px ${spacing[2]}px`,
                backgroundColor: 'rgba(201, 169, 98, 0.2)',
                borderRadius: borderRadius.sm,
                border: '1px solid rgba(201, 169, 98, 0.3)',
                zIndex: 1,
              }}>
                <span style={{ fontSize: '10px', color: colors.gold.primary, fontWeight: '500' }}>
                  FEATURED
                </span>
              </div>
            )}

            {/* Image Section */}
            <div style={{
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0F0F0F',
              fontSize: '64px',
              position: 'relative',
            }}>
              {exp.image}

              {/* Availability Badge */}
              <div style={{
                position: 'absolute',
                bottom: spacing[2],
                left: spacing[2],
                padding: `${spacing[1]}px ${spacing[2]}px`,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: borderRadius.sm,
                display: 'flex',
                alignItems: 'center',
                gap: spacing[1],
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: getAvailabilityColor(exp.availability),
                }} />
                <span style={{ fontSize: '11px', color: colors.text.primary, fontWeight: '500' }}>
                  {exp.availability}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: spacing[4] }}>
              <h3 style={{
                fontSize: '17px',
                fontWeight: '500',
                color: colors.text.primary,
                marginBottom: spacing[1],
              }}>
                {exp.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: colors.text.secondary,
                marginBottom: spacing[3],
              }}>
                {exp.brand}
              </p>

              {/* Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: spacing[2],
                marginBottom: spacing[3],
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: '2px' }}>
                    LOCATION
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    📍 {exp.location}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: '2px' }}>
                    DURATION
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    ⏱️ {exp.duration}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: spacing[3] }}>
                <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: '2px' }}>
                  PARTICIPANTS
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                  👥 {exp.participants}
                </div>
              </div>

              {/* Divider */}
              <div style={{
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                margin: `${spacing[3]}px 0`,
              }} />

              {/* Pricing */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '18px', color: colors.gold.primary, fontWeight: '500', marginBottom: '2px' }}>
                    {exp.coinCost.toLocaleString()} coins
                  </div>
                  <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
                    Worth {exp.value}
                  </div>
                </div>
                <div style={{
                  padding: `${spacing[2]}px ${spacing[4]}px`,
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  borderRadius: borderRadius.lg,
                  border: '1px solid rgba(201, 169, 98, 0.2)',
                }}>
                  <span style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '500' }}>
                    Book Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredExperiences.length === 0 && (
        <div style={{ padding: `${spacing[12]}px ${spacing[4]}px`, textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: spacing[3] }}>✨</div>
          <p style={{ fontSize: '15px', color: colors.text.tertiary }}>
            No experiences in this category
          </p>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default PriveExperiences;
