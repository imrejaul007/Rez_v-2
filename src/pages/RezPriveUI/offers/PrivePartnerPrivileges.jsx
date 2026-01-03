/**
 * Privé Partner Privileges
 * Purpose: Exclusive partner benefits and perks
 * UI: Partner benefits organized by tier and category
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PrivePartnerPrivileges = () => {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState('all');

  const tiers = [
    { key: 'all', label: 'All Tiers' },
    { key: 'signature', label: 'Signature' },
    { key: 'elite', label: 'Elite' },
    { key: 'icon', label: 'Icon' },
  ];

  const privileges = [
    {
      id: '1',
      partner: 'Taj Hotels',
      logo: '🏨',
      tier: 'signature',
      category: 'Hospitality',
      benefits: [
        'Room upgrade (subject to availability)',
        'Late checkout until 4 PM',
        'Complimentary breakfast for 2',
        '15% off spa services',
      ],
      locations: '45+ properties',
      validUntil: 'Dec 2025',
      featured: true,
    },
    {
      id: '2',
      partner: 'Oberoi Hotels',
      logo: '🏛️',
      tier: 'elite',
      category: 'Hospitality',
      benefits: [
        'Guaranteed room upgrade',
        'Late checkout until 6 PM',
        'Complimentary airport transfer',
        '20% off F&B and spa',
      ],
      locations: '35+ properties',
      validUntil: 'Dec 2025',
      featured: true,
    },
    {
      id: '3',
      partner: 'Louis Vuitton',
      logo: '👜',
      tier: 'icon',
      category: 'Fashion',
      benefits: [
        'Private shopping appointments',
        'First access to new collections',
        'Complimentary alterations',
        'VIP event invitations',
      ],
      locations: '12 stores',
      validUntil: 'Dec 2025',
      featured: true,
    },
    {
      id: '4',
      partner: 'The Leela Spa',
      logo: '💆',
      tier: 'signature',
      category: 'Wellness',
      benefits: [
        '20% off all treatments',
        'Priority booking',
        'Complimentary consultation',
        'Extended session duration',
      ],
      locations: '25+ locations',
      validUntil: 'Dec 2025',
    },
    {
      id: '5',
      partner: 'Indian Accent',
      logo: '🍽️',
      tier: 'elite',
      category: 'Dining',
      benefits: [
        'Priority reservations',
        'Chef\'s table experience',
        'Complimentary wine pairing',
        '15% off total bill',
      ],
      locations: '3 locations',
      validUntil: 'Dec 2025',
    },
    {
      id: '6',
      partner: 'Burberry',
      logo: '🧥',
      tier: 'elite',
      category: 'Fashion',
      benefits: [
        'Personal stylist service',
        'Early sale access',
        '10% off full-price items',
        'Free monogramming',
      ],
      locations: '8 stores',
      validUntil: 'Dec 2025',
    },
    {
      id: '7',
      partner: 'Ananda Spa',
      logo: '🧘',
      tier: 'icon',
      category: 'Wellness',
      benefits: [
        'Complimentary wellness consultation',
        '25% off packages',
        'Private yoga sessions',
        'Ayurveda treatment upgrade',
      ],
      locations: '5 properties',
      validUntil: 'Dec 2025',
    },
    {
      id: '8',
      partner: 'DLF Golf Club',
      logo: '⛳',
      tier: 'signature',
      category: 'Sports & Recreation',
      benefits: [
        'Guest privileges',
        'Priority tee times',
        '15% off F&B',
        'Complimentary equipment rental',
      ],
      locations: '6 courses',
      validUntil: 'Dec 2025',
    },
  ];

  const filteredPrivileges = privileges.filter((priv) =>
    selectedTier === 'all' || priv.tier === selectedTier
  );

  const getTierColor = (tier) => {
    const colors = {
      signature: '#C9A962',
      elite: '#9C27B0',
      icon: '#FF6B6B',
    };
    return colors[tier] || '#C9A962';
  };

  const getTierLabel = (tier) => {
    return tier.charAt(0).toUpperCase() + tier.slice(1);
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
          Partner Privileges
        </h1>
        <div style={{ width: '40px' }} />
      </div>

      {/* Tier Filters */}
      <div style={{
        display: 'flex',
        gap: spacing[2],
        padding: `${spacing[4]}px ${spacing[4]}px 0`,
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {tiers.map((tier) => (
          <div
            key={tier.key}
            onClick={() => setSelectedTier(tier.key)}
            style={{
              padding: `${spacing[2]}px ${spacing[4]}px`,
              borderRadius: borderRadius.full,
              backgroundColor: selectedTier === tier.key ? 'rgba(201, 169, 98, 0.1)' : '#141414',
              border: selectedTier === tier.key ? '1px solid rgba(201, 169, 98, 0.3)' : 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '14px', color: selectedTier === tier.key ? colors.gold.primary : colors.text.secondary }}>
              {tier.label}
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
          🏆 Exclusive privileges from premium partners
        </p>
      </div>

      {/* Privileges List */}
      <div style={{ padding: `${spacing[4]}px ${spacing[4]}px` }}>
        {filteredPrivileges.map((priv) => (
          <div
            key={priv.id}
            onClick={() => navigate(`/prive/store/${priv.id}`)}
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
            {/* Header Section */}
            <div style={{
              padding: spacing[4],
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing[3] }}>
                {/* Logo */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  backgroundColor: '#0F0F0F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  flexShrink: 0,
                }}>
                  {priv.logo}
                </div>

                {/* Partner Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[1] }}>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: '500',
                      color: colors.text.primary,
                      margin: 0,
                    }}>
                      {priv.partner}
                    </h3>
                    {priv.featured && (
                      <span style={{
                        fontSize: '10px',
                        color: colors.gold.primary,
                        padding: `2px ${spacing[2]}px`,
                        backgroundColor: 'rgba(201, 169, 98, 0.1)',
                        borderRadius: borderRadius.sm,
                        fontWeight: '500',
                      }}>
                        FEATURED
                      </span>
                    )}
                  </div>

                  <p style={{
                    fontSize: '13px',
                    color: colors.text.secondary,
                    marginBottom: spacing[2],
                  }}>
                    {priv.category}
                  </p>

                  {/* Tier Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: spacing[1],
                    padding: `${spacing[1]}px ${spacing[2]}px`,
                    backgroundColor: getTierColor(priv.tier) + '15',
                    borderRadius: borderRadius.sm,
                    border: `1px solid ${getTierColor(priv.tier)}30`,
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '3px',
                      backgroundColor: getTierColor(priv.tier),
                    }} />
                    <span style={{
                      fontSize: '11px',
                      color: getTierColor(priv.tier),
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}>
                      {getTierLabel(priv.tier)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div style={{ padding: spacing[4] }}>
              <h4 style={{
                fontSize: '12px',
                color: colors.text.tertiary,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: spacing[2],
              }}>
                Your Benefits
              </h4>

              <div style={{ marginBottom: spacing[3] }}>
                {priv.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: spacing[2],
                      marginBottom: spacing[2],
                    }}
                  >
                    <span style={{ color: colors.gold.primary, fontSize: '14px', marginTop: '2px' }}>
                      ✓
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: colors.text.secondary,
                      flex: 1,
                      lineHeight: '20px',
                    }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: spacing[3],
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: '2px' }}>
                    LOCATIONS
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    📍 {priv.locations}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: '2px' }}>
                    VALID UNTIL
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>
                    📅 {priv.validUntil}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div
                style={{
                  marginTop: spacing[3],
                  padding: `${spacing[3]}px`,
                  backgroundColor: 'rgba(201, 169, 98, 0.1)',
                  borderRadius: borderRadius.lg,
                  border: '1px solid rgba(201, 169, 98, 0.2)',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle activate action
                }}
              >
                <span style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '500' }}>
                  Activate Privilege
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredPrivileges.length === 0 && (
        <div style={{ padding: `${spacing[12]}px ${spacing[4]}px`, textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: spacing[3] }}>🏆</div>
          <p style={{ fontSize: '15px', color: colors.text.tertiary }}>
            No privileges available for this tier
          </p>
        </div>
      )}

      <BottomNavManager />
    </div>
  );
};

export default PrivePartnerPrivileges;
