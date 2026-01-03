/**
 * Privé Gift Card Detail
 * Purpose: Detailed view of a gift card with purchase options
 * UI: Brand info, denominations, terms, checkout CTA
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveGiftCardDetail = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [selectedDenomination, setSelectedDenomination] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Mock gift card data (in production, fetch based on cardId)
  const giftCard = {
    id: cardId,
    brand: 'Taj Hotels',
    category: 'Travel',
    image: '🏨',
    logo: '🏨',
    denominations: [2000, 5000, 10000, 20000],
    discount: 10,
    rating: 4.8,
    reviewCount: 342,
    description: 'Experience luxury and elegance at Taj Hotels across India. This gift card can be redeemed at any Taj property for room bookings, dining, spa services, and more.',
    features: [
      'Valid at 100+ Taj properties across India',
      'Redeemable for rooms, dining, spa & more',
      'No expiry date',
      '10% discount for Privé members',
      'Instant digital delivery',
      'Can be combined with other offers',
    ],
    terms: [
      'Valid for 12 months from date of purchase',
      'Cannot be redeemed for cash',
      'Not valid during blackout dates (Dec 24-Jan 2)',
      'Prior reservation required for room bookings',
      'Gift card balance is non-refundable',
      'Can be used for partial payments',
    ],
    howToUse: [
      'Present the gift card code at the time of booking or checkout',
      'For online bookings, enter code in the payment section',
      'For in-person redemptions, show the digital card to staff',
      'Check remaining balance anytime in your wallet',
    ],
    locations: '100+ properties across India',
    deliveryTime: 'Instant',
    coinType: 'Privé Coins',
  };

  const calculateCoinCost = (denomination) => {
    if (!denomination) return 0;
    const baseCoins = denomination;
    const discountedCoins = baseCoins * (1 - giftCard.discount / 100);
    return Math.round(discountedCoins);
  };

  const totalCost = calculateCoinCost(selectedDenomination) * quantity;
  const totalSavings = (selectedDenomination * quantity) - totalCost;

  const handleCheckout = () => {
    if (!selectedDenomination) {
      alert('Please select a denomination');
      return;
    }
    navigate('/prive/checkout', {
      state: {
        type: 'gift_card',
        item: giftCard,
        denomination: selectedDenomination,
        quantity,
        totalCost,
        totalSavings,
      }
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '140px' }}>
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

      {/* Hero Section */}
      <div style={{
        height: '280px',
        backgroundColor: '#0F0F0F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div style={{ fontSize: '96px', marginBottom: spacing[3] }}>
          {giftCard.logo}
        </div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '500',
          color: colors.text.primary,
          marginBottom: spacing[2],
        }}>
          {giftCard.brand}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          <span style={{
            fontSize: '11px',
            color: colors.text.tertiary,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            padding: `${spacing[1]}px ${spacing[2]}px`,
            backgroundColor: '#141414',
            borderRadius: borderRadius.sm,
          }}>
            {giftCard.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
            <span style={{ color: colors.gold.primary }}>⭐</span>
            <span style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
              {giftCard.rating}
            </span>
            <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
              ({giftCard.reviewCount})
            </span>
          </div>
        </div>

        {/* Discount Badge */}
        {giftCard.discount > 0 && (
          <div style={{
            position: 'absolute',
            top: spacing[3],
            right: spacing[3],
            padding: `${spacing[2]}px ${spacing[3]}px`,
            background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.2) 0%, rgba(201, 169, 98, 0.1) 100%)',
            borderRadius: borderRadius.lg,
            border: '1px solid rgba(201, 169, 98, 0.3)',
          }}>
            <span style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '500' }}>
              {giftCard.discount}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ padding: spacing[4] }}>
        {/* Description */}
        <div style={{ marginBottom: spacing[5] }}>
          <p style={{
            fontSize: '15px',
            color: colors.text.secondary,
            lineHeight: '1.6',
          }}>
            {giftCard.description}
          </p>
        </div>

        {/* Select Denomination */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Select Amount
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: spacing[3],
          }}>
            {giftCard.denominations.map((amount) => (
              <div
                key={amount}
                onClick={() => setSelectedDenomination(amount)}
                style={{
                  padding: spacing[4],
                  backgroundColor: selectedDenomination === amount ? 'rgba(201, 169, 98, 0.1)' : colors.background.card,
                  borderRadius: borderRadius.lg,
                  border: selectedDenomination === amount ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid #1A1A1A',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: '22px',
                  color: selectedDenomination === amount ? colors.gold.primary : colors.text.primary,
                  fontWeight: '500',
                  marginBottom: spacing[1],
                }}>
                  ₹{amount.toLocaleString()}
                </div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                  {calculateCoinCost(amount).toLocaleString()} coins
                </div>
                {giftCard.discount > 0 && (
                  <div style={{ fontSize: '11px', color: '#10B981', fontWeight: '500' }}>
                    Save {Math.round(amount * giftCard.discount / 100)} coins
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        {selectedDenomination && (
          <div style={{ marginBottom: spacing[5] }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: '500',
              color: colors.text.primary,
              marginBottom: spacing[3],
            }}>
              Quantity
            </h2>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing[3],
              padding: spacing[4],
              backgroundColor: colors.background.card,
              borderRadius: borderRadius.lg,
              border: '1px solid #1A1A1A',
            }}>
              <div
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '20px',
                  backgroundColor: quantity > 1 ? '#181818' : '#0F0F0F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: quantity > 1 ? 'pointer' : 'not-allowed',
                  border: '1px solid #333',
                }}
              >
                <span style={{ fontSize: '20px', color: quantity > 1 ? colors.text.primary : colors.text.tertiary }}>
                  −
                </span>
              </div>
              <div style={{
                flex: 1,
                textAlign: 'center',
                fontSize: '20px',
                color: colors.text.primary,
                fontWeight: '500',
              }}>
                {quantity}
              </div>
              <div
                onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '20px',
                  backgroundColor: quantity < 10 ? '#181818' : '#0F0F0F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: quantity < 10 ? 'pointer' : 'not-allowed',
                  border: '1px solid #333',
                }}
              >
                <span style={{ fontSize: '20px', color: quantity < 10 ? colors.text.primary : colors.text.tertiary }}>
                  +
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Features & Benefits
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
            {giftCard.features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: spacing[2] }}>
                <span style={{ color: colors.gold.primary, fontSize: '16px', marginTop: '2px' }}>✓</span>
                <span style={{ fontSize: '15px', color: colors.text.secondary, flex: 1 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            How to Use
          </h2>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            {giftCard.howToUse.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: spacing[3],
                  padding: `${spacing[2]}px 0`,
                  borderBottom: idx < giftCard.howToUse.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  border: '1px solid rgba(201, 169, 98, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.gold.primary,
                  fontSize: '12px',
                  fontWeight: '500',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {idx + 1}
                </div>
                <span style={{ fontSize: '14px', color: colors.text.secondary, flex: 1 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Terms & Conditions
          </h2>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
          }}>
            {giftCard.terms.map((term, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: spacing[2],
                  padding: `${spacing[2]}px 0`,
                  borderBottom: idx < giftCard.terms.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                }}
              >
                <span style={{ color: '#FFC107', fontSize: '14px', marginTop: '2px' }}>•</span>
                <span style={{ fontSize: '13px', color: colors.text.secondary, flex: 1, lineHeight: '1.5' }}>
                  {term}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: spacing[3],
        }}>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: spacing[2] }}>📍</div>
            <div style={{ fontSize: '12px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
              LOCATIONS
            </div>
            <div style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
              {giftCard.locations}
            </div>
          </div>
          <div style={{
            padding: spacing[4],
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: spacing[2] }}>⚡</div>
            <div style={{ fontSize: '12px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
              DELIVERY
            </div>
            <div style={{ fontSize: '14px', color: colors.text.primary, fontWeight: '500' }}>
              {giftCard.deliveryTime}
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
        {selectedDenomination && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: spacing[2],
            padding: `${spacing[2]}px 0`,
          }}>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
              {quantity} × ₹{selectedDenomination.toLocaleString()}
            </div>
            <div style={{ fontSize: '13px', color: '#10B981', fontWeight: '500' }}>
              You save {totalSavings.toLocaleString()} coins
            </div>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '12px', color: colors.text.tertiary, marginBottom: '2px' }}>
              Total Cost
            </div>
            <div style={{ fontSize: '24px', color: colors.gold.primary, fontWeight: '500' }}>
              {selectedDenomination ? `${totalCost.toLocaleString()} coins` : '—'}
            </div>
          </div>
          <div
            onClick={handleCheckout}
            style={{
              padding: `${spacing[3]}px ${spacing[6]}px`,
              backgroundColor: selectedDenomination ? colors.gold.primary : '#333',
              borderRadius: borderRadius.lg,
              cursor: selectedDenomination ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            <span style={{
              fontSize: '16px',
              color: selectedDenomination ? '#000' : colors.text.tertiary,
              fontWeight: '500',
            }}>
              Purchase
            </span>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveGiftCardDetail;
