/**
 * C5 - Campaign Status Tracker
 * Purpose: Track campaign progress with clarity
 */

import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveCampaignStatus = () => {
  const navigate = useNavigate();
  const { campaignId } = useParams();

  const status = {
    campaign: 'Weekend Tasting Experience',
    brand: 'The Grand Café',
    currentStatus: 'under_review',
    submittedAt: 'Dec 18, 2025 at 2:30 PM',
    estimatedTime: '24-48 hours',
  };

  const steps = [
    { id: 'submitted', label: 'Submitted', icon: '◎' },
    { id: 'under_review', label: 'Under Review', icon: '◇' },
    { id: 'approved', label: 'Approved', icon: '✓' },
    { id: 'rewarded', label: 'Rewarded', icon: '✦' },
  ];

  const currentIndex = steps.findIndex(s => s.id === status.currentStatus);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '140px' }}>
      <div onClick={() => navigate(-1)} style={{ padding: spacing[4], cursor: 'pointer' }}>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>← Campaign Status</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], padding: spacing[5], marginBottom: spacing[6] }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: 'rgba(201, 169, 98, 0.15)', border: `2px solid rgba(201, 169, 98, 0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '20px', color: colors.gold.primary }}>{status.brand.charAt(0)}</div>
          </div>
          <div>
            <div style={{ fontSize: '15px', color: colors.text.primary }}>{status.campaign}</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>{status.brand}</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[6], padding: `0 ${spacing[2]}` }}>
          {steps.map((step, index) => (
            <div key={step.id} style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {index > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '-50%',
                  right: '50%',
                  height: '2px',
                  backgroundColor: index <= currentIndex ? colors.gold.primary : colors.border.primary,
                  zIndex: -1,
                }} />
              )}
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '18px',
                backgroundColor: index < currentIndex ? colors.gold.primary : index === currentIndex ? 'rgba(201, 169, 98, 0.1)' : colors.border.primary,
                border: `2px solid ${index === currentIndex ? colors.gold.primary : index < currentIndex ? colors.gold.primary : colors.border.primary}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ fontSize: '16px', color: index <= currentIndex ? (index === currentIndex ? colors.gold.primary : '#FFFFFF') : colors.text.tertiary }}>
                  {index < currentIndex ? '✓' : step.icon}
                </div>
              </div>
              <div style={{ fontSize: '11px', color: index === currentIndex ? colors.gold.primary : (index < currentIndex ? colors.text.secondary : colors.text.tertiary), marginTop: spacing[2], textAlign: 'center' }}>
                {step.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6], border: `1px solid rgba(255, 193, 7, 0.3)`, borderLeft: `4px solid #FFC107` }}>
          <div style={{ fontSize: '20px', color: colors.text.primary, marginBottom: spacing[2] }}>Under Review</div>
          <div style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: '22px' }}>
            Our team is reviewing your submission. This usually takes {status.estimatedTime}.
          </div>
          <div style={{ marginTop: spacing[4] }}>
            <div style={{ height: '4px', backgroundColor: colors.border.primary, borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '50%', backgroundColor: colors.gold.primary, borderRadius: '2px' }} />
            </div>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[2] }}>Review in progress</div>
          </div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>UPDATES</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, display: 'flex', gap: spacing[3] }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '14px', backgroundColor: colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '14px', color: colors.text.tertiary }}>◎</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>Your submission has been received and is being reviewed by our team.</div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>{status.submittedAt}</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>SUBMISSION DETAILS</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[3] }}>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Submitted</div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>{status.submittedAt}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: spacing[5], backgroundColor: colors.background.primary, borderTop: `1px solid ${colors.border.primary}` }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: colors.background.card,
            padding: `${spacing[4]} 0`,
            borderRadius: borderRadius.xl,
            textAlign: 'center',
            color: colors.text.primary,
            fontSize: '17px',
            border: `1px solid ${colors.border.primary}`,
            cursor: 'pointer',
          }}
        >
          Back to Campaigns
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveCampaignStatus;
