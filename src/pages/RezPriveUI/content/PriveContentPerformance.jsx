/**
 * D2 - Content Performance Screen (Influence Analytics)
 * Purpose: Show results, not vanity metrics
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveContentPerformance = () => {
  const navigate = useNavigate();

  const data = {
    brandName: 'Luxury Café',
    contentType: 'Post',
    reach: '2,450',
    engagement: '324',
    conversions: '12',
    footfall: '8',
    rewardsEarned: '840',
    impactStatement: 'This content influenced 12 verified visits.',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div onClick={() => navigate(-1)} style={{ padding: spacing[4], cursor: 'pointer' }}>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>← Performance</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[6] }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '17px', color: colors.text.secondary }}>{data.brandName.charAt(0)}</div>
          </div>
          <div>
            <div style={{ fontSize: '17px', color: colors.text.primary }}>{data.brandName}</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{data.contentType}</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6], border: `1px solid rgba(201, 169, 98, 0.3)`, textAlign: 'center' }}>
          <div style={{ fontSize: '17px', color: colors.text.primary }}>{data.impactStatement}</div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>PERFORMANCE METRICS</div>

          <div style={{ display: 'flex', gap: spacing[3], marginBottom: spacing[4] }}>
            <div style={{ flex: 1, backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '300', color: colors.text.primary }}>{data.reach}</div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Reach</div>
            </div>
            <div style={{ flex: 1, backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '300', color: colors.text.primary }}>{data.engagement}</div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Engagement</div>
            </div>
            <div style={{ flex: 1, backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid rgba(201, 169, 98, 0.3)`, textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '300', color: colors.gold.primary }}>{data.conversions}</div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Conversions</div>
            </div>
          </div>

          {data.footfall && (
            <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[3] }}>
                <div style={{ fontSize: '17px', color: colors.gold.primary }}>→</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>Verified Footfall</div>
                <div style={{ fontSize: '17px', color: colors.text.primary, marginTop: spacing[1] }}>{data.footfall} visits</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.1), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], border: `1px solid rgba(201, 169, 98, 0.2)` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>Privé Rewards Earned</div>
              <div style={{ fontSize: '34px', fontWeight: '300', color: colors.gold.primary, marginTop: spacing[1] }}>₹{data.rewardsEarned}</div>
            </div>
            <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.full }}>
              <div style={{ fontSize: '11px', color: '#4CAF50' }}>Credited</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveContentPerformance;
