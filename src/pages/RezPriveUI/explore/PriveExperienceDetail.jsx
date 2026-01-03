/**
 * Privé Experience Detail
 * Purpose: Detailed view of a luxury experience with booking
 * UI: Full experience info, image gallery, booking CTA
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveExperienceDetail = () => {
  const navigate = useNavigate();
  const { experienceId } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock experience data (in production, fetch based on experienceId)
  const experience = {
    id: experienceId,
    title: 'Private Chef Tasting Menu',
    brand: 'Michelin Star Chef',
    category: 'Dining',
    image: '👨‍🍳',
    gallery: ['👨‍🍳', '🍽️', '🍷', '🥘'],
    location: 'Mumbai',
    address: 'The Oberoi, Nariman Point, Mumbai 400021',
    duration: '3 hours',
    participants: 'Up to 6 guests',
    coinCost: 15000,
    value: '₹25,000',
    availability: 'Limited',
    rating: 4.9,
    reviewCount: 127,
    description: 'Experience an unforgettable culinary journey with our award-winning Michelin star chef. This exclusive private dining experience features a 7-course tasting menu crafted from the finest seasonal ingredients, paired with premium wines selected by our sommelier.',
    highlights: [
      '7-course gourmet tasting menu',
      'Wine pairing by expert sommelier',
      'Private dining room with city views',
      'Meet & greet with the chef',
      'Personalized menu adjustments available',
      'Complimentary welcome champagne',
    ],
    whatToExpect: [
      'Arrive and enjoy champagne in our private lounge',
      'Meet the chef and discuss the evening\'s menu',
      'Experience 7 exquisite courses over 3 hours',
      'Learn about cooking techniques and ingredient sourcing',
      'Receive a personalized recipe booklet to take home',
    ],
    includes: [
      'All food and beverages',
      'Wine pairing',
      'Service charges',
      'Recipe booklet',
    ],
    restrictions: [
      'Dietary restrictions must be mentioned 48 hours in advance',
      'Minimum age requirement: 18 years',
      'Smart casual dress code required',
      'Cancellation must be made 72 hours in advance for full refund',
    ],
    availableDates: [
      { date: '2024-01-15', slots: 2 },
      { date: '2024-01-20', slots: 1 },
      { date: '2024-01-25', slots: 3 },
      { date: '2024-02-01', slots: 2 },
    ],
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert('Please select a date to continue');
      return;
    }
    navigate('/prive/booking', {
      state: {
        experience,
        date: selectedDate
      }
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: `${spacing[3]}px ${spacing[4]}px`,
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
          <div style={{ display: 'flex', gap: spacing[2] }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: '#181818',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '18px' }}>🔖</span>
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: '#181818',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '18px' }}>↗️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <div style={{
        height: '300px',
        backgroundColor: '#0F0F0F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          gap: spacing[2],
          fontSize: '80px',
        }}>
          {experience.gallery.map((img, idx) => (
            <div key={idx} style={{ opacity: idx === 0 ? 1 : 0.4 }}>
              {img}
            </div>
          ))}
        </div>

        {/* Availability Badge */}
        <div style={{
          position: 'absolute',
          top: spacing[3],
          right: spacing[3],
          padding: `${spacing[2]}px ${spacing[3]}px`,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          borderRadius: borderRadius.lg,
          border: '1px solid rgba(201, 169, 98, 0.3)',
        }}>
          <span style={{ fontSize: '13px', color: colors.gold.primary, fontWeight: '500' }}>
            {experience.availability}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: spacing[4] }}>
        {/* Title & Rating */}
        <div style={{ marginBottom: spacing[4] }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[2] }}>
            <span style={{
              fontSize: '11px',
              color: colors.text.tertiary,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: `${spacing[1]}px ${spacing[2]}px`,
              backgroundColor: '#141414',
              borderRadius: borderRadius.sm,
            }}>
              {experience.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
              <span style={{ color: colors.gold.primary }}>⭐</span>
              <span style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                {experience.rating}
              </span>
              <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
                ({experience.reviewCount} reviews)
              </span>
            </div>
          </div>

          <h1 style={{
            fontSize: '28px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[2],
            lineHeight: '1.3',
          }}>
            {experience.title}
          </h1>

          <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: spacing[3] }}>
            by {experience.brand}
          </p>

          {/* Quick Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing[3],
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            <div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                DURATION
              </div>
              <div style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                {experience.duration}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                GUESTS
              </div>
              <div style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                {experience.participants}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                LOCATION
              </div>
              <div style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            About This Experience
          </h2>
          <p style={{
            fontSize: '15px',
            color: colors.text.secondary,
            lineHeight: '1.6',
          }}>
            {experience.description}
          </p>
        </div>

        {/* Highlights */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Experience Highlights
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
            {experience.highlights.map((highlight, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: spacing[2] }}>
                <span style={{ color: colors.gold.primary, fontSize: '16px', marginTop: '2px' }}>✓</span>
                <span style={{ fontSize: '15px', color: colors.text.secondary, flex: 1 }}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            What to Expect
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            {experience.whatToExpect.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: spacing[3] }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  border: '1px solid rgba(201, 169, 98, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.gold.primary,
                  fontSize: '14px',
                  fontWeight: '500',
                  flexShrink: 0,
                }}>
                  {idx + 1}
                </div>
                <p style={{ fontSize: '15px', color: colors.text.secondary, flex: 1, marginTop: '4px' }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            What's Included
          </h2>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            {experience.includes.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing[2],
                  padding: `${spacing[2]}px 0`,
                  borderBottom: idx < experience.includes.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                }}
              >
                <span style={{ color: '#10B981', fontSize: '16px' }}>✓</span>
                <span style={{ fontSize: '14px', color: colors.text.secondary }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Important Information
          </h2>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            {experience.restrictions.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: spacing[2],
                  padding: `${spacing[2]}px 0`,
                  borderBottom: idx < experience.restrictions.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                }}
              >
                <span style={{ color: '#FFC107', fontSize: '16px', marginTop: '2px' }}>ℹ️</span>
                <span style={{ fontSize: '14px', color: colors.text.secondary, flex: 1 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Available Dates */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Select Date
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
            {experience.availableDates.map((dateOption) => (
              <div
                key={dateOption.date}
                onClick={() => setSelectedDate(dateOption.date)}
                style={{
                  padding: spacing[4],
                  backgroundColor: selectedDate === dateOption.date ? 'rgba(201, 169, 98, 0.1)' : colors.background.card,
                  borderRadius: borderRadius.lg,
                  border: selectedDate === dateOption.date ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid #1A1A1A',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{
                      fontSize: '15px',
                      color: selectedDate === dateOption.date ? colors.gold.primary : colors.text.primary,
                      fontWeight: '500',
                      marginBottom: spacing[1],
                    }}>
                      {new Date(dateOption.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
                      {dateOption.slots} {dateOption.slots === 1 ? 'slot' : 'slots'} available
                    </div>
                  </div>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '10px',
                    border: `2px solid ${selectedDate === dateOption.date ? colors.gold.primary : '#333'}`,
                    backgroundColor: selectedDate === dateOption.date ? colors.gold.primary : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {selectedDate === dateOption.date && (
                      <span style={{ color: '#000', fontSize: '12px' }}>✓</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Location
          </h2>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            <div style={{ display: 'flex', gap: spacing[2], marginBottom: spacing[2] }}>
              <span style={{ fontSize: '18px' }}>📍</span>
              <div>
                <div style={{ fontSize: '15px', color: colors.text.primary, fontWeight: '500', marginBottom: spacing[1] }}>
                  {experience.location}
                </div>
                <div style={{ fontSize: '14px', color: colors.text.secondary }}>
                  {experience.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div style={{
        position: 'fixed',
        bottom: '80px',
        left: 0,
        right: 0,
        padding: spacing[4],
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid #1A1A1A',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing[3] }}>
          <div>
            <div style={{ fontSize: '12px', color: colors.text.tertiary, marginBottom: '2px' }}>
              Total Cost
            </div>
            <div style={{ fontSize: '24px', color: colors.gold.primary, fontWeight: '500' }}>
              {experience.coinCost.toLocaleString()} coins
            </div>
            <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
              Worth {experience.value}
            </div>
          </div>
          <div
            onClick={handleBooking}
            style={{
              padding: `${spacing[3]}px ${spacing[6]}px`,
              backgroundColor: selectedDate ? colors.gold.primary : '#333',
              borderRadius: borderRadius.lg,
              cursor: selectedDate ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            <span style={{
              fontSize: '16px',
              color: selectedDate ? '#000' : colors.text.tertiary,
              fontWeight: '500',
            }}>
              Book Now
            </span>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveExperienceDetail;
