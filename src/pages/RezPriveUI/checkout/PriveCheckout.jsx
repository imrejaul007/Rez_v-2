/**
 * Privé Checkout
 * Purpose: Unified checkout for gift cards and other redemptions
 * UI: Order summary, payment with coins, confirmation
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { type, item, denomination, quantity, totalCost, totalSavings } = location.state || {};

  const [email, setEmail] = useState('user@example.com');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock user wallet data
  const userWallet = {
    priveCoins: 25000,
    rezCoins: 15000,
    brandedCoins: 8000,
  };

  const hasEnoughCoins = userWallet.priveCoins >= totalCost;

  const handleCheckout = async () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    if (!hasEnoughCoins) {
      alert('Insufficient coins. Please top up your wallet.');
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/prive/checkout-success', {
        state: {
          type,
          item,
          denomination,
          quantity,
          totalCost,
          orderNumber: `ORD${Date.now()}`,
        }
      });
    }, 2000);
  };

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: spacing[4] }}>
          <div style={{ fontSize: '48px', marginBottom: spacing[3] }}>❌</div>
          <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: spacing[4] }}>
            No checkout data found
          </p>
          <div
            onClick={() => navigate('/prive/redeem')}
            style={{
              padding: `${spacing[3]}px ${spacing[5]}px`,
              backgroundColor: colors.gold.primary,
              borderRadius: borderRadius.lg,
              cursor: 'pointer',
              display: 'inline-block',
            }}
          >
            <span style={{ fontSize: '15px', color: '#000', fontWeight: '500' }}>
              Browse Redemptions
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
            Checkout
          </h1>
          <div style={{ width: '40px' }} />
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: spacing[4] }}>
        {/* Order Summary */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Order Summary
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Item Header */}
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
                {item.image || item.logo}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  color: colors.text.primary,
                  marginBottom: spacing[1],
                }}>
                  {item.brand || item.title}
                </h3>
                <p style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: spacing[1] }}>
                  {item.category}
                </p>
                {type === 'gift_card' && denomination && (
                  <p style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '500' }}>
                    ₹{denomination.toLocaleString()} × {quantity}
                  </p>
                )}
              </div>
            </div>

            {/* Price Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: colors.text.secondary }}>
                  Subtotal
                </span>
                <span style={{ fontSize: '14px', color: colors.text.primary }}>
                  {(totalCost + totalSavings).toLocaleString()} coins
                </span>
              </div>

              {totalSavings > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', color: '#10B981' }}>
                    Privé Member Discount
                  </span>
                  <span style={{ fontSize: '14px', color: '#10B981', fontWeight: '500' }}>
                    -{totalSavings.toLocaleString()} coins
                  </span>
                </div>
              )}

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                margin: `${spacing[2]}px 0`,
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '16px', color: colors.text.primary, fontWeight: '500' }}>
                  Total
                </span>
                <span style={{ fontSize: '20px', color: colors.gold.primary, fontWeight: '500' }}>
                  {totalCost.toLocaleString()} coins
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Details */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Delivery Details
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            <div style={{ marginBottom: spacing[3] }}>
              <label style={{
                display: 'block',
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div style={{
              display: 'flex',
              gap: spacing[2],
              padding: spacing[3],
              backgroundColor: 'rgba(201, 169, 98, 0.05)',
              borderRadius: borderRadius.lg,
              border: '1px solid rgba(201, 169, 98, 0.1)',
            }}>
              <span style={{ fontSize: '16px' }}>⚡</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', color: colors.gold.primary, fontWeight: '500', marginBottom: '2px' }}>
                  Instant Delivery
                </div>
                <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
                  Your gift card will be delivered to your email immediately
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div style={{ marginBottom: spacing[5] }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '500',
            color: colors.text.primary,
            marginBottom: spacing[3],
          }}>
            Payment Method
          </h2>

          <div style={{
            backgroundColor: colors.background.card,
            borderRadius: borderRadius.lg,
            border: '1px solid #1A1A1A',
            padding: spacing[4],
          }}>
            {/* Privé Coins */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.2) 0%, rgba(201, 169, 98, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}>
                  💎
                </div>
                <div>
                  <div style={{ fontSize: '15px', color: colors.text.primary, fontWeight: '500', marginBottom: '2px' }}>
                    Privé Coins
                  </div>
                  <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
                    Available: {userWallet.priveCoins.toLocaleString()}
                  </div>
                </div>
              </div>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '10px',
                border: `2px solid ${colors.gold.primary}`,
                backgroundColor: colors.gold.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontSize: '12px' }}>✓</span>
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
                marginBottom: spacing[3],
              }}>
                <span style={{ fontSize: '16px' }}>⚠️</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', color: '#EF4444', fontWeight: '500', marginBottom: '2px' }}>
                    Insufficient Balance
                  </div>
                  <div style={{ fontSize: '12px', color: colors.text.tertiary }}>
                    You need {(totalCost - userWallet.priveCoins).toLocaleString()} more coins
                  </div>
                </div>
              </div>
            )}

            {/* Top Up Link */}
            {!hasEnoughCoins && (
              <div
                onClick={() => navigate('/prive/wallet')}
                style={{
                  padding: `${spacing[3]}px`,
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  borderRadius: borderRadius.lg,
                  border: '1px solid rgba(201, 169, 98, 0.2)',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '500' }}>
                  Top Up Coins →
                </span>
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
          onClick={handleCheckout}
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
            {isProcessing ? 'Processing...' : `Pay ${totalCost.toLocaleString()} Coins`}
          </span>
        </div>

        <p style={{
          fontSize: '11px',
          color: colors.text.tertiary,
          textAlign: 'center',
          marginTop: spacing[2],
        }}>
          🔒 Secure payment • Your coins will be deducted after confirmation
        </p>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveCheckout;
