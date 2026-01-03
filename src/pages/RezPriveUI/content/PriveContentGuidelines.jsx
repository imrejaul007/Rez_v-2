/**
 * D5 - Privé Content Guidelines Screen
 * Purpose: Maintain quality without sounding strict
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveContentGuidelines = () => {
  const navigate = useNavigate();

  const whatWorks = [
    'Clear, well-lit photos and videos',
    'Honest, detailed descriptions of your experience',
    'Specific mentions of what stood out',
    'Natural, conversational tone',
    'Context about when and why you visited',
  ];

  const whatToAvoid = [
    'Blurry or poorly lit content',
    'Generic or copied text',
    'Misleading claims about products or services',
    'Overly promotional language',
    "Content that doesn't reflect genuine experience",
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div onClick={() => navigate(-1)} style={{ padding: spacing[4], cursor: 'pointer' }}>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>← Content Guidelines</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: '24px', marginBottom: spacing[6] }}>
          Quality content builds trust and unlocks higher rewards. Here's what helps your content succeed.
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>WHAT WORKS BEST</div>
          <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.1), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid rgba(201, 169, 98, 0.2)` }}>
            {whatWorks.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: spacing[3], borderBottom: index < whatWorks.length - 1 ? `1px solid ${colors.border.secondary}` : 'none', marginBottom: index < whatWorks.length - 1 ? spacing[3] : 0 }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '12px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[3] }}>
                  <div style={{ fontSize: '13px', color: '#4CAF50' }}>✓</div>
                </div>
                <div style={{ fontSize: '15px', color: colors.text.primary, flex: 1 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>WHAT TO AVOID</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}` }}>
            {whatToAvoid.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', paddingBottom: spacing[3], borderBottom: index < whatToAvoid.length - 1 ? `1px solid ${colors.border.secondary}` : 'none', marginBottom: index < whatToAvoid.length - 1 ? spacing[3] : 0 }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '12px', backgroundColor: colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[3] }}>
                  <div style={{ fontSize: '13px', color: '#EF4444' }}>−</div>
                </div>
                <div style={{ fontSize: '15px', color: colors.text.secondary, flex: 1 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], border: `1px solid rgba(201, 169, 98, 0.3)` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: spacing[4] }}>
              <div style={{ fontSize: '24px', color: colors.gold.primary }}>⋆</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '17px', color: colors.text.primary, marginBottom: spacing[2] }}>Authenticity is key</div>
              <div style={{ fontSize: '13px', color: colors.text.secondary, lineHeight: '20px' }}>
                The most successful Privé content comes from genuine experiences. Share what you truly feel, and your audience will respond.
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveContentGuidelines;
