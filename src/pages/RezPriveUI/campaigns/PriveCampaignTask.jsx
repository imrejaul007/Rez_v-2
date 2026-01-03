/**
 * C4 - Campaign Task Details
 * Purpose: Tell Privé user exactly what brand expects
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveCampaignTask = () => {
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const [isAccepted, setIsAccepted] = useState(false);

  const campaign = {
    brandName: 'The Grand Café',
    title: 'Weekend Tasting Experience',
    description: 'Experience our signature weekend tasting menu and share your authentic journey with your community.',
    deadline: 'Dec 31, 2025',
    spotsLeft: 8,
    totalSpots: 20,
    tasks: [
      { id: '1', title: 'Visit & Experience', description: 'Dine at The Grand Café and enjoy the tasting menu', required: true },
      { id: '2', title: 'Create Content', description: 'Share your experience via post, story, or review', required: true },
      { id: '3', title: 'Submit Proof', description: 'Upload your content link for verification', required: true },
      { id: '4', title: 'Engage Community', description: 'Respond to comments and questions authentically', required: false },
    ],
    rewardTiers: [
      { tier: 'Base', requirement: 'Complete required tasks', reward: '500 Privé Coins', color: colors.text.secondary },
      { tier: 'Quality', requirement: 'High-quality content', reward: '800 Privé Coins', color: '#B8860B' },
      { tier: 'Premium', requirement: 'Exceptional engagement', reward: '1,200 Privé Coins', color: colors.gold.primary },
    ],
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '140px' }}>
      <div onClick={() => navigate(-1)} style={{ padding: spacing[4], cursor: 'pointer' }}>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>← {campaign.brandName}</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ background: `linear-gradient(to bottom, rgba(201, 169, 98, 0.1), ${colors.background.primary})`, borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6] }}>
          <div style={{ fontSize: '24px', color: colors.text.primary, marginBottom: spacing[2] }}>{campaign.title}</div>
          <div style={{ display: 'flex', gap: spacing[4], marginTop: spacing[3] }}>
            <div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Deadline</div>
              <div style={{ fontSize: '15px', color: colors.text.secondary, marginTop: spacing[1] }}>{campaign.deadline}</div>
            </div>
            <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
            <div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Spots Left</div>
              <div style={{ fontSize: '15px', color: colors.gold.primary, marginTop: spacing[1] }}>{campaign.spotsLeft}/{campaign.totalSpots}</div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[6], border: `1px solid ${colors.border.primary}` }}>
          <div style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: '24px' }}>{campaign.description}</div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>WHAT YOU NEED TO DO</div>
          {campaign.tasks.map((task, index) => (
            <div key={task.id} style={{ display: 'flex', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[2], border: `1px solid ${colors.border.primary}` }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '14px',
                backgroundColor: task.required ? 'rgba(201, 169, 98, 0.15)' : colors.border.primary,
                border: task.required ? `1px solid rgba(201, 169, 98, 0.3)` : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: spacing[3],
              }}>
                <div style={{ fontSize: '13px', color: task.required ? colors.gold.primary : colors.text.tertiary }}>{index + 1}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[1] }}>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{task.title}</div>
                  {!task.required && (
                    <div style={{ backgroundColor: colors.border.primary, padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                      <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Bonus</div>
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{task.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>REWARD TIERS</div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: spacing[3] }}>Higher quality content unlocks better rewards</div>
          {campaign.rewardTiers.map((tier, index) => (
            <div
              key={tier.tier}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: index === campaign.rewardTiers.length - 1 ? 'rgba(201, 169, 98, 0.1)' : colors.background.card,
                borderRadius: borderRadius.lg,
                padding: spacing[4],
                marginBottom: spacing[2],
                border: `1px solid ${index === campaign.rewardTiers.length - 1 ? 'rgba(201, 169, 98, 0.3)' : colors.border.primary}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '5px', backgroundColor: tier.color }} />
                <div>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{tier.tier}</div>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>{tier.requirement}</div>
                </div>
              </div>
              <div style={{ fontSize: '17px', color: tier.color }}>{tier.reward}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: spacing[5], backgroundColor: colors.background.primary, borderTop: `1px solid ${colors.border.primary}` }}>
        <div
          onClick={() => isAccepted ? navigate(`/prive/campaign-submit/${campaignId}`) : setIsAccepted(true)}
          style={{
            backgroundColor: isAccepted ? '#4CAF50' : colors.gold.primary,
            padding: `${spacing[4]} 0`,
            borderRadius: borderRadius.xl,
            textAlign: 'center',
            color: '#0A0A0A',
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          {isAccepted ? 'Submit Content →' : 'Accept Campaign'}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveCampaignTask;
