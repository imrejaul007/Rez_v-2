/**
 * Privé Offer Detail Screen
 * Shows detailed campaign information, requirements, and rewards
 */

import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveOfferDetail = () => {
  const navigate = useNavigate();
  const { offerId } = useParams();

  // Mock offer data - in production this would come from API/context based on offerId
  const offer = {
    brandName: 'Luxury Café',
    brandLogo: null,
    campaignName: 'Weekend Dining Experience',
    rewardPercent: '40%',
    requirements: [
      'Visit store or shop online',
      'Share your experience',
      'Drive engagement (optional)',
    ],
    rewardLogic: 'Final rewards depend on engagement quality and verified transactions.',
    startDate: 'Dec 15, 2025',
    endDate: 'Dec 31, 2025',
    rewardCap: '₹2,000',
  };

  const handleUnlock = () => {
    // Navigate to redemption flow
    navigate('/prive/redeem', { state: { storeName: offer.brandName } });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[5], borderBottom: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => navigate(-1)} style={{ fontSize: '15px', color: colors.gold.primary, cursor: 'pointer' }}>← Back</div>
        <div style={{ fontSize: '20px', fontWeight: '600', color: colors.text.primary }}>Offer Details</div>
        <div style={{ width: '50px' }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: spacing[5] }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: spacing[6] }}>
          {offer.brandLogo ? (
            <img src={offer.brandLogo} alt={offer.brandName} style={{ width: '64px', height: '64px', borderRadius: borderRadius.lg, marginBottom: spacing[3] }} />
          ) : (
            <div style={{ width: '64px', height: '64px', borderRadius: borderRadius.lg, backgroundColor: colors.background.tertiary, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[3]}` }}>
              <div style={{ fontSize: '28px', color: colors.text.secondary }}>
                {offer.brandName.charAt(0)}
              </div>
            </div>
          )}
          <div style={{ fontSize: '14px', color: colors.text.secondary, marginBottom: spacing[2] }}>{offer.brandName}</div>
          <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary, padding: `0 ${spacing[4]}` }}>{offer.campaignName}</div>
        </div>

        {/* Reward Highlight */}
        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[6], textAlign: 'center', marginBottom: spacing[6], border: '1px solid rgba(201, 169, 98, 0.3)', boxShadow: '0 0 20px rgba(201, 169, 98, 0.1)' }}>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: spacing[2] }}>Earn up to</div>
          <div style={{ fontSize: '56px', fontWeight: '300', color: colors.gold.primary, margin: `${spacing[2]} 0` }}>{offer.rewardPercent}</div>
          <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: spacing[2] }}>Privé Rewards</div>
          <div style={{ fontSize: '12px', color: colors.text.tertiary, marginTop: spacing[2] }}>Based on engagement & conversions</div>
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[6]} 0` }} />

        {/* What's Required */}
        <div style={{ marginBottom: spacing[5] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>WHAT'S REQUIRED</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}` }}>
            {offer.requirements.map((req, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', padding: `${spacing[3]} 0`, borderBottom: index < offer.requirements.length - 1 ? `1px solid ${colors.border.secondary}` : 'none' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '12px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[3] }}>
                  <div style={{ fontSize: '13px', color: colors.gold.primary }}>✓</div>
                </div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>{req}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reward Logic */}
        <div style={{ marginBottom: spacing[5] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>REWARD LOGIC</div>
          <div style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: '22px' }}>
            {offer.rewardLogic}
          </div>
        </div>

        {/* Campaign Validity */}
        <div style={{ marginBottom: spacing[5] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>VALIDITY</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
              <div style={{ fontSize: '14px', color: colors.text.secondary }}>Start</div>
              <div style={{ fontSize: '15px', color: colors.text.primary }}>{offer.startDate}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
              <div style={{ fontSize: '14px', color: colors.text.secondary }}>End</div>
              <div style={{ fontSize: '15px', color: colors.text.primary }}>{offer.endDate}</div>
            </div>
            {offer.rewardCap && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
                <div style={{ fontSize: '14px', color: colors.text.secondary }}>Max Reward</div>
                <div style={{ fontSize: '15px', color: colors.gold.primary }}>{offer.rewardCap}</div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginTop: spacing[8], paddingBottom: spacing[4] }}>
          <div onClick={handleUnlock} style={{ padding: spacing[4], backgroundColor: colors.gold.primary, borderRadius: borderRadius.xl, textAlign: 'center', fontSize: '17px', color: '#0A0A0A', fontWeight: '600', cursor: 'pointer' }}>
            Unlock This Offer
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveOfferDetail;
