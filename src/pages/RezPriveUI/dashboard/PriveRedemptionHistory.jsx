/**
 * E8 - Redemption History Screen
 * Purpose: Transparency and prestige tracking
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveRedemptionHistory = () => {
  const navigate = useNavigate();

  const stats = {
    totalRedemptions: 12,
    totalValue: '₹45,000',
    uniqueBrands: 8,
  };

  const redemptions = [
    { id: '1', type: 'gift_card', brandName: 'Taj Experiences', title: 'Gift Card', value: '₹5,000', date: 'Dec 15, 2025' },
    { id: '2', type: 'experience', brandName: "Chef's Table", title: 'Dining Experience', value: '₹8,000', date: 'Dec 1, 2025' },
    { id: '3', type: 'gift_card', brandName: 'Premium Retail', title: 'Gift Card', value: '₹2,500', date: 'Nov 20, 2025' },
    { id: '4', type: 'privilege', brandName: 'Luxury Hotel', title: 'Room Upgrade', date: 'Nov 10, 2025' },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'gift_card': return '🎁';
      case 'experience': return '⋆';
      case 'privilege': return '🔑';
      default: return '•';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'gift_card': return 'Gift Card';
      case 'experience': return 'Experience';
      case 'privilege': return 'Privilege';
      default: return 'Other';
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div onClick={() => navigate(-1)} style={{ padding: spacing[4], cursor: 'pointer' }}>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>← Redemption History</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6], border: `1px solid rgba(201, 169, 98, 0.3)` }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>{stats.totalRedemptions}</div>
              <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: spacing[1] }}>Redemptions</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(201, 169, 98, 0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>{stats.totalValue}</div>
              <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: spacing[1] }}>Total Value</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(201, 169, 98, 0.3)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>{stats.uniqueBrands}</div>
              <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: spacing[1] }}>Brands</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>YOUR REDEMPTIONS</div>

          {redemptions.map((redemption) => (
            <div
              key={redemption.id}
              style={{
                backgroundColor: colors.background.card,
                borderRadius: borderRadius.lg,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: `1px solid ${colors.border.primary}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[3] }}>
                  <div style={{ fontSize: '17px' }}>{getTypeIcon(redemption.type)}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[1] }}>
                    <div style={{ fontSize: '15px', color: colors.text.primary }}>{redemption.brandName}</div>
                    {redemption.value && (
                      <div style={{ fontSize: '15px', color: colors.gold.primary }}>{redemption.value}</div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: spacing[2], alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', color: colors.text.tertiary }}>{getTypeLabel(redemption.type)}</div>
                    <div style={{ fontSize: '11px', color: colors.text.tertiary }}>•</div>
                    <div style={{ fontSize: '11px', color: colors.text.tertiary }}>{redemption.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '11px', color: colors.text.tertiary, textAlign: 'center' }}>
          Your redemption history reflects your Privé journey
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveRedemptionHistory;
