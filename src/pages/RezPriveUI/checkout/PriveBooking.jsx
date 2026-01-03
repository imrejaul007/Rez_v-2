/**
 * Privé Booking
 * Purpose: Booking flow for experiences
 * UI: Guest details, special requests, payment confirmation
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { experience, date } = location.state || {};

  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'user@example.com',
    phone: '+91 98765 43210',
    guests: 2,
    specialRequests: '',
    dietaryRestrictions: '',
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock user wallet data
  const userWallet = {
    priveCoins: 25000,
  };

  const hasEnoughCoins = experience && userWallet.priveCoins >= experience.coinCost;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = async () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!hasEnoughCoins) {
      alert('Insufficient coins. Please top up your wallet.');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/prive/booking-success', {
        state: {
          experience,
          date,
          formData,
          bookingNumber: `BKG${Date.now()}`,
        }
      });
    }, 2000);
  };

  if (!experience || !date) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: spacing[4] }}>
          <div style={{ fontSize: '48px', marginBottom: spacing[3] }}>❌</div>
          <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: spacing[4] }}>
            No booking data found
          </p>
          <div
            onClick={() => navigate('/prive/experiences')}
            style={{
              padding: `${spacing[3]}px ${spacing[5]}px`,
              backgroundColor: colors.gold.primary,
              borderRadius: borderRadius.lg,
              cursor: 'pointer',
              display: 'inline-block',
            }}
          >
            <span style={{ fontSize: '15px', color: '#000', fontWeight: '500' }}>
              Browse Experiences
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '180px' }}>
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
          <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
            Complete Booking
          </h1>
          <div style={{ width: '40px' }} />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: spacing[4] }}>
        {/* Booking Summary */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Booking Summary
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Experience Header */}
            <div style={{ display: 'flex', gap: spacing[3], marginBottom: spacing[4], paddingBottom: spacing[4], borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: borderRadius.lg,
                backgroundColor: '#0F0F0F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                flexShrink: 0,
              }}>
                {experience.image}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  color: colors.text.primary,
                  marginBottom: spacing[1],
                }}>
                  {experience.title}
                </h3>
                <p style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: spacing[1] }}>
                  by {experience.brand}
                </p>
              </div>
            </div>

            {/* Booking Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Date</span>
                <span style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                  {new Date(date).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Duration</span>
                <span style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                  {experience.duration}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Location</span>
                <span style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
                  {experience.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Details */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Guest Details
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Name */}
            <div style={{ marginBottom: spacing[4] }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: `${spacing[3]}px ${spacing[4]}px`,
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #333',
                  borderRadius: borderRadius.lg,
                  fontSize: '15px',
                  color: colors.text.primary,
                  outline: 'none',
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: spacing[4] }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: `${spacing[3]}px ${spacing[4]}px`,
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #333',
                  borderRadius: borderRadius.lg,
                  fontSize: '15px',
                  color: colors.text.primary,
                  outline: 'none',
                }}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: spacing[4] }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                style={{
                  width: '100%',
                  padding: `${spacing[3]}px ${spacing[4]}px`,
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #333',
                  borderRadius: borderRadius.lg,
                  fontSize: '15px',
                  color: colors.text.primary,
                  outline: 'none',
                }}
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Number of Guests
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[3],
                padding: `${spacing[3]}px ${spacing[4]}px`,
                backgroundColor: '#0F0F0F',
                border: '1px solid #333',
                borderRadius: borderRadius.lg,
              }}>
                <div
                  onClick={() => formData.guests > 1 && handleInputChange('guests', formData.guests - 1)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '18px',
                    backgroundColor: formData.guests > 1 ? '#181818' : '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: formData.guests > 1 ? 'pointer' : 'not-allowed',
                    border: '1px solid #333',
                  }}
                >
                  <span style={{ fontSize: '18px', color: formData.guests > 1 ? colors.text.primary : colors.text.tertiary }}>
                    −
                  </span>
                </div>
                <div style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: '18px',
                  color: colors.text.primary,
                  fontWeight: '500',
                }}>
                  {formData.guests}
                </div>
                <div
                  onClick={() => formData.guests < 10 && handleInputChange('guests', formData.guests + 1)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '18px',
                    backgroundColor: formData.guests < 10 ? '#181818' : '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: formData.guests < 10 ? 'pointer' : 'not-allowed',
                    border: '1px solid #333',
                  }}
                >
                  <span style={{ fontSize: '18px', color: formData.guests < 10 ? colors.text.primary : colors.text.tertiary }}>
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Additional Information
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Dietary Restrictions */}
            <div style={{ marginBottom: spacing[4] }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Dietary Restrictions
              </label>
              <textarea
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                placeholder="Please mention any dietary restrictions or allergies"
                rows={3}
                style={{
                  width: '100%',
                  padding: `${spacing[3]}px ${spacing[4]}px`,
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #333',
                  borderRadius: borderRadius.lg,
                  fontSize: '14px',
                  color: colors.text.primary,
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            {/* Special Requests */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any special requests or preferences?"
                rows={3}
                style={{
                  width: '100%',
                  padding: `${spacing[3]}px ${spacing[4]}px`,
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #333',
                  borderRadius: borderRadius.lg,
                  fontSize: '14px',
                  color: colors.text.primary,
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                }}
              />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Payment
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Wallet Balance */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: spacing[3],
              backgroundColor: 'rgba(201, 169, 98, 0.05)',
              borderRadius: borderRadius.lg,
              border: '1px solid rgba(201, 169, 98, 0.2)',
              marginBottom: spacing[3],
            }}>
              <div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '2px' }}>
                  Privé Coins Balance
                </div>
                <div style={{ fontSize: '18px', color: colors.gold.primary, fontWeight: '500' }}>
                  {userWallet.priveCoins.toLocaleString()} coins
                </div>
              </div>
              <div
                onClick={() => navigate('/prive/wallet')}
                style={{
                  padding: `${spacing[2]}px ${spacing[3]}px`,
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  borderRadius: borderRadius.lg,
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '13px', color: colors.gold.primary, fontWeight: '500' }}>
                  View Wallet
                </span>
              </div>
            </div>

            {/* Price Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2], marginBottom: spacing[3] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: colors.text.secondary }}>
                  Experience Cost
                </span>
                <span style={{ fontSize: '14px', color: colors.text.primary }}>
                  {experience.coinCost.toLocaleString()} coins
                </span>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                margin: `${spacing[1]}px 0`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: colors.text.primary, fontWeight: '500' }}>
                  Total Amount
                </span>
                <span style={{ fontSize: '20px', color: colors.gold.primary, fontWeight: '500' }}>
                  {experience.coinCost.toLocaleString()} coins
                </span>
              </div>
            </div>

            {/* Insufficient Balance Warning */}
            {!hasEnoughCoins && (
              <div style={{
                display: 'flex',
                gap: spacing[2],
                padding: spacing[3],
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}>
                <span style={{ fontSize: '16px' }}>⚠️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: '#EF4444', fontWeight: '500', marginBottom: '2px' }}>
                    Insufficient Balance
                  </div>
                  <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
                    You need {(experience.coinCost - userWallet.priveCoins).toLocaleString()} more coins
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div style={{ marginBottom: spacing[5] }}>
          <div
            onClick={() => setAgreeToTerms(!agreeToTerms)}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: spacing[3],
              padding: spacing[4],
              backgroundColor: colors.background.card,
              borderRadius: borderRadius.lg,
              border: '1px solid #1A1A1A',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              border: `2px solid ${agreeToTerms ? colors.gold.primary : '#333'}`,
              backgroundColor: agreeToTerms ? colors.gold.primary : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              {agreeToTerms && (
                <span style={{ color: '#000', fontSize: '12px' }}>✓</span>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '1.5' }}>
                I agree to the{' '}
                <span style={{ color: colors.gold.primary, textDecoration: 'underline', cursor: 'pointer' }}>
                  Terms & Conditions
                </span>
                {' '}and{' '}
                <span style={{ color: colors.gold.primary, textDecoration: 'underline', cursor: 'pointer' }}>
                  Cancellation Policy
                </span>
              </p>
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
        <div
          onClick={handleBooking}
          style={{
            width: '100%',
            padding: `${spacing[4]}px`,
            backgroundColor: (hasEnoughCoins && agreeToTerms && !isProcessing) ? colors.gold.primary : '#333',
            borderRadius: borderRadius.lg,
            cursor: (hasEnoughCoins && agreeToTerms && !isProcessing) ? 'pointer' : 'not-allowed',
            textAlign: 'center',
            transition: 'all 0.2s',
          }}
        >
          <span style={{
            fontSize: '16px',
            color: (hasEnoughCoins && agreeToTerms && !isProcessing) ? '#000' : colors.text.tertiary,
            fontWeight: '500',
          }}>
            {isProcessing ? 'Processing...' : 'Confirm Booking'}
          </span>
        </div>

        <p style={{
          fontSize: '11px',
          color: colors.text.tertiary,
          textAlign: 'center',
          marginTop: spacing[2],
        }}>
          🔒 Secure booking • Confirmation will be sent to your email
        </p>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveBooking;
