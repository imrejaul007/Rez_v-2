/**
 * Privé Tier Progress Screen
 * Shows tier journey, current benefits, and path to next tier
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveTierProgress = () => {
  const navigate = useNavigate();
  const [expandedTier, setExpandedTier] = useState('signature');
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  const tiers = [
    {
      id: 'access',
      name: 'Privé Access',
      shortName: 'Access',
      status: 'completed',
      pointsRequired: 0,
      color: '#8B7355',
      benefits: {
        rewardCeiling: 'Up to 20%',
        offerAccess: 'Select offers',
        campaignPriority: 'Standard',
        exclusivePerks: [
          'Access to Privé marketplace',
          'Earn on purchases',
          'Basic campaign access',
        ],
      },
    },
    {
      id: 'signature',
      name: 'Privé Signature',
      shortName: 'Signature',
      status: 'current',
      pointsRequired: 5000,
      color: colors.gold.primary,
      benefits: {
        rewardCeiling: 'Up to 35%',
        offerAccess: 'Premium offers',
        campaignPriority: 'Priority access',
        exclusivePerks: [
          'All Access benefits',
          'Priority campaign invitations',
          'Higher reward multipliers',
          'Exclusive brand events',
          'Personal concierge support',
        ],
      },
    },
    {
      id: 'elite',
      name: 'Privé Elite',
      shortName: 'Elite',
      status: 'locked',
      pointsRequired: 15000,
      color: '#FFD700',
      benefits: {
        rewardCeiling: 'Up to 50%',
        offerAccess: 'All offers + Exclusive',
        campaignPriority: 'First access',
        exclusivePerks: [
          'All Signature benefits',
          'First access to all campaigns',
          'Maximum reward potential',
          'Private shopping events',
          'Dedicated relationship manager',
          'Exclusive Elite-only offers',
          'Birthday & Anniversary rewards',
        ],
      },
    },
  ];

  const mockMilestones = [
    {
      id: 'm1',
      title: 'Joined Privé',
      description: 'Accepted invitation and became a member',
      date: 'Aug 2025',
      points: 0,
      type: 'tier_unlock',
    },
    {
      id: 'm2',
      title: 'First Purchase',
      description: 'Completed first transaction at Luxury Café',
      date: 'Aug 2025',
      points: 450,
      type: 'purchase',
    },
    {
      id: 'm3',
      title: 'First Campaign',
      description: 'Participated in Weekend Dining campaign',
      date: 'Sep 2025',
      points: 1200,
      type: 'campaign',
    },
    {
      id: 'm4',
      title: 'Referral Bonus',
      description: 'Amit Sharma joined through your invite',
      date: 'Oct 2025',
      points: 500,
      type: 'referral',
    },
    {
      id: 'm5',
      title: 'Content Creator',
      description: 'First content reached 1K engagement',
      date: 'Nov 2025',
      points: 800,
      type: 'content',
    },
    {
      id: 'm6',
      title: 'Reached Signature',
      description: 'Unlocked Privé Signature tier',
      date: 'Nov 2025',
      points: 5000,
      type: 'tier_unlock',
    },
  ];

  const mockUserData = {
    currentTier: 'Signature',
    currentPoints: 8450,
    pointsToNext: 6550,
    nextTier: 'Elite',
    progress: 0.56,
    memberSince: 'Aug 2025',
    totalEarned: 12500,
  };

  const currentTierData = tiers.find(t => t.status === 'current');
  const nextTierData = tiers.find(t => t.status === 'locked');

  const getMilestoneIcon = (type) => {
    switch (type) {
      case 'purchase': return '◇';
      case 'campaign': return '★';
      case 'referral': return '✦';
      case 'content': return '◎';
      case 'tier_unlock': return '◈';
      default: return '•';
    }
  };

  const getMilestoneColor = (type) => {
    switch (type) {
      case 'purchase': return colors.gold.primary;
      case 'campaign': return '#4CAF50';
      case 'referral': return '#64B5F6';
      case 'content': return '#FF9800';
      case 'tier_unlock': return colors.gold.primary;
      default: return colors.text.tertiary;
    }
  };

  const displayedMilestones = showAllMilestones
    ? mockMilestones
    : mockMilestones.slice(-4);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[5], borderBottom: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => navigate(-1)} style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: colors.text.primary, cursor: 'pointer' }}>←</div>
        <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>Tier Progress</div>
        <div style={{ width: '40px' }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: spacing[5] }}>
        {/* Current Tier Hero */}
        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.2), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[6], textAlign: 'center', marginBottom: spacing[5], border: '1px solid rgba(201, 169, 98, 0.2)' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '32px', backgroundColor: 'rgba(201, 169, 98, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[4]}` }}>
            <div style={{ fontSize: '28px', color: colors.gold.primary }}>◈</div>
          </div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[2] }}>YOUR CURRENT TIER</div>
          <div style={{ fontSize: '32px', fontWeight: '300', color: colors.gold.primary, margin: `${spacing[2]} 0` }}>Privé {mockUserData.currentTier}</div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Member since {mockUserData.memberSince}</div>

          {/* Points Display */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: spacing[5] }}>
            <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}` }}>
              <div style={{ fontSize: '24px', fontWeight: '300', color: colors.text.primary, marginBottom: spacing[1] }}>{mockUserData.currentPoints.toLocaleString()}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Points Earned</div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'rgba(201, 169, 98, 0.3)' }} />
            <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}` }}>
              <div style={{ fontSize: '24px', fontWeight: '300', color: colors.text.primary, marginBottom: spacing[1] }}>{mockUserData.totalEarned.toLocaleString()}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Total Coins</div>
            </div>
          </div>
        </div>

        {/* Progress to Next Tier */}
        {nextTierData && (
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6], border: `1px solid ${colors.border.secondary}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>PATH TO {nextTierData.shortName.toUpperCase()}</div>
              <div style={{ fontSize: '15px', color: colors.text.secondary }}>{mockUserData.pointsToNext.toLocaleString()} pts away</div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: spacing[5] }}>
              <div style={{ height: '12px', backgroundColor: '#2A2A2A', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ width: `${mockUserData.progress * 100}%`, height: '100%', background: `linear-gradient(90deg, ${colors.gold.dark}, ${colors.gold.primary})`, boxShadow: '0 0 12px rgba(201, 169, 98, 0.5)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing[2] }}>
                <div style={{ fontSize: '13px', color: colors.gold.primary }}>{mockUserData.currentPoints.toLocaleString()} pts</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{nextTierData.pointsRequired.toLocaleString()} pts</div>
              </div>
            </div>

            {/* How to Earn More */}
            <div style={{ borderTop: `1px solid ${colors.border.secondary}`, paddingTop: spacing[4] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>WAYS TO EARN POINTS</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(201, 169, 98, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[2]}` }}>
                    <div style={{ fontSize: '14px', color: colors.gold.primary }}>◇</div>
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>Shop & Earn</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(76, 175, 80, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[2]}` }}>
                    <div style={{ fontSize: '14px', color: '#4CAF50' }}>★</div>
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>Campaigns</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(100, 181, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[2]}` }}>
                    <div style={{ fontSize: '14px', color: '#64B5F6' }}>✦</div>
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>Referrals</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: 'rgba(255, 152, 0, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: `0 auto ${spacing[2]}` }}>
                    <div style={{ fontSize: '14px', color: '#FF9800' }}>◎</div>
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary }}>Content</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tier Journey / Milestones */}
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>YOUR JOURNEY</div>
            {mockMilestones.length > 4 && (
              <div onClick={() => setShowAllMilestones(!showAllMilestones)} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>
                {showAllMilestones ? 'Show Less' : 'View All'}
              </div>
            )}
          </div>

          <div style={{ paddingLeft: spacing[2] }}>
            {displayedMilestones.map((milestone, index) => (
              <div key={milestone.id} style={{ display: 'flex', marginBottom: spacing[4] }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '18px', backgroundColor: `${getMilestoneColor(milestone.type)}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ color: getMilestoneColor(milestone.type), fontSize: '14px' }}>
                      {getMilestoneIcon(milestone.type)}
                    </div>
                  </div>
                  {index < displayedMilestones.length - 1 && (
                    <div style={{ width: '2px', flex: 1, backgroundColor: colors.border.secondary, marginTop: spacing[2] }} />
                  )}
                </div>
                <div style={{ flex: 1, marginLeft: spacing[3], paddingBottom: spacing[2] }}>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{milestone.title}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>{milestone.description}</div>
                  <div style={{ display: 'flex', gap: spacing[3], marginTop: spacing[1] }}>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{milestone.date}</div>
                    {milestone.points > 0 && (
                      <div style={{ fontSize: '13px', color: colors.gold.primary }}>+{milestone.points} pts</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Tiers Comparison */}
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>ALL TIERS</div>

          {tiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
              style={{
                backgroundColor: tier.status === 'current' ? 'rgba(201, 169, 98, 0.05)' : colors.background.card,
                borderRadius: borderRadius.xl,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: tier.status === 'current' ? '1px solid rgba(201, 169, 98, 0.4)' : `1px solid ${colors.border.secondary}`,
                opacity: tier.status === 'locked' ? 0.7 : 1,
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: `${tier.color}20`, border: `1px solid ${tier.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ color: tier.color, fontSize: '16px' }}>◈</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', color: colors.text.primary }}>{tier.name}</div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{tier.pointsRequired.toLocaleString()} pts required</div>
                  </div>
                </div>
                <div>
                  {tier.status === 'completed' && (
                    <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.full }}>
                      <div style={{ fontSize: '13px', color: '#4CAF50' }}>✓ Achieved</div>
                    </div>
                  )}
                  {tier.status === 'current' && (
                    <div style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)', padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.full }}>
                      <div style={{ fontSize: '13px', color: colors.gold.primary }}>Current</div>
                    </div>
                  )}
                  {tier.status === 'locked' && (
                    <div style={{ backgroundColor: colors.border.secondary, padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.full }}>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Locked</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Benefits */}
              {expandedTier === tier.id && (
                <div style={{ marginTop: spacing[4], paddingTop: spacing[4], borderTop: `1px solid ${colors.border.secondary}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Reward Ceiling</div>
                    <div style={{ fontSize: '15px', color: colors.gold.primary }}>{tier.benefits.rewardCeiling}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Offer Access</div>
                    <div style={{ fontSize: '15px', color: colors.text.primary }}>{tier.benefits.offerAccess}</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} 0` }}>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Campaign Priority</div>
                    <div style={{ fontSize: '15px', color: colors.text.primary }}>{tier.benefits.campaignPriority}</div>
                  </div>

                  <div style={{ marginTop: spacing[4] }}>
                    <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>EXCLUSIVE PERKS</div>
                    {tier.benefits.exclusivePerks.map((perk, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing[2], padding: `${spacing[1]} 0` }}>
                        <div style={{ fontSize: '13px', color: colors.gold.primary }}>✓</div>
                        <div style={{ fontSize: '13px', color: colors.text.secondary }}>{perk}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.secondary}`, textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, lineHeight: '20px' }}>
            Progress at your own pace. No pressure, no deadlines.<br />
            Your tier never expires once achieved.
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveTierProgress;
