/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B4 - Privé Tier Progress Screen
 * Purpose: Show tier journey, current benefits, and path to next tier
 * UI: Progress visualization, milestones, benefits comparison
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
// SafeAreaView removed
// LinearGradient will use CSS
import { Text, ProgressBar } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface TierInfo {
  id: string;
  name: string;
  shortName: string;
  status: 'completed' | 'current' | 'locked';
  pointsRequired: number;
  color: string;
  benefits: {
    rewardCeiling: string;
    offerAccess: string;
    campaignPriority: string;
    exclusivePerks: string[];
  };
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  points: number;
  type: 'purchase' | 'campaign' | 'referral' | 'content' | 'tier_unlock';
}

interface UserTierData {
  currentTier: string;
  currentPoints: number;
  pointsToNext: number;
  nextTier: string;
  progress: number;
  memberSince: string;
  totalEarned: number;
}

const tiers: TierInfo[] = [
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

const mockMilestones: Milestone[] = [
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

const mockUserData: UserTierData = {
  currentTier: 'Signature',
  currentPoints: 8450,
  pointsToNext: 6550,
  nextTier: 'Elite',
  progress: 0.56,
  memberSince: 'Aug 2025',
  totalEarned: 12500,
};

export const B4_TierProgressScreen: React.FC = () => {
  const navigate = useNavigate();
  const [expandedTier, setExpandedTier] = useState<string | null>('signature');
  const [showAllMilestones, setShowAllMilestones] = useState(false);

  const currentTierData = tiers.find(t => t.status === 'current');
  const nextTierData = tiers.find(t => t.status === 'locked');

  const getMilestoneIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'purchase': return '◇';
      case 'campaign': return '★';
      case 'referral': return '✦';
      case 'content': return '◎';
      case 'tier_unlock': return '◈';
      default: return '•';
    }
  };

  const getMilestoneColor = (type: Milestone['type']) => {
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
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Tier Progress</span>
        <div style={{ width: 40 }} />
      </div>

      <div
        style={style={{...styles.scrollView}
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* Current Tier Hero */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.2)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.heroCard}
        >
          <div style={style={{...styles.heroIcon}>
            <span style={style={{...styles.heroIconText}>◈</span>
          </div>
          <span variant="caption" color={colors.text.tertiary}>YOUR CURRENT TIER</span>
          <span style={style={{...styles.heroTitle}>Privé {mockUserData.currentTier}</span>
          <span variant="caption" color={colors.text.tertiary}>
            Member since {mockUserData.memberSince}
          </span>

          {/* Points Display */}
          <div style={style={{...styles.pointsDisplay}>
            <div style={style={{...styles.pointItem}>
              <span style={style={{...styles.pointValue}>{mockUserData.currentPoints.toLocaleString()}</span>
              <span variant="caption" color={colors.text.tertiary}>Points Earned</span>
            </div>
            <div style={style={{...styles.pointDivider} />
            <div style={style={{...styles.pointItem}>
              <span style={style={{...styles.pointValue}>{mockUserData.totalEarned.toLocaleString()}</span>
              <span variant="caption" color={colors.text.tertiary}>Total Coins</span>
            </div>
          </div>
        </LinearGradient>

        {/* Progress to Next Tier */}
        {nextTierData && (
          <div style={style={{...styles.nextTierCard}>
            <div style={style={{...styles.nextTierHeader}>
              <span variant="label" color={colors.text.tertiary}>PATH TO {nextTierData.shortName.toUpperCase()}</span>
              <span variant="body" color={colors.text.secondary}>
                {mockUserData.pointsToNext.toLocaleString()} pts away
              </span>
            </div>

            <div style={style={{...styles.progressSection}>
              <ProgressBar
                progress={mockUserData.progress}
                height={12}
                showGlow
              />
              <div style={style={{...styles.progressLabels}>
                <span variant="caption" gold>
                  {mockUserData.currentPoints.toLocaleString()} pts
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  {nextTierData.pointsRequired.toLocaleString()} pts
                </span>
              </div>
            </div>

            {/* How to Earn More */}
            <div style={style={{...styles.earnMoreSection}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.earnMoreLabel}>
                WAYS TO EARN POINTS
              </span>
              <div style={style={{...styles.earnWays}>
                <div style={style={{...styles.earnWayItem}>
                  <div style={[style={{...styles.earnWayIcon, { backgroundColor: 'rgba(201, 169, 98, 0.15)' }]}>
                    <span variant="caption" gold>◇</span>
                  </div>
                  <span variant="caption" color={colors.text.secondary}>Shop & Earn</span>
                </div>
                <div style={style={{...styles.earnWayItem}>
                  <div style={[style={{...styles.earnWayIcon, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
                    <span variant="caption" color="#4CAF50">★</span>
                  </div>
                  <span variant="caption" color={colors.text.secondary}>Campaigns</span>
                </div>
                <div style={style={{...styles.earnWayItem}>
                  <div style={[style={{...styles.earnWayIcon, { backgroundColor: 'rgba(100, 181, 246, 0.15)' }]}>
                    <span variant="caption" color="#64B5F6">✦</span>
                  </div>
                  <span variant="caption" color={colors.text.secondary}>Referrals</span>
                </div>
                <div style={style={{...styles.earnWayItem}>
                  <div style={[style={{...styles.earnWayIcon, { backgroundColor: 'rgba(255, 152, 0, 0.15)' }]}>
                    <span variant="caption" color="#FF9800">◎</span>
                  </div>
                  <span variant="caption" color={colors.text.secondary}>Content</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tier Journey / Milestones */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary}>YOUR JOURNEY</span>
            {mockMilestones.length > 4 && (
              <div onClick={() => setShowAllMilestones(!showAllMilestones)}>
                <span variant="caption" gold>
                  {showAllMilestones ? 'Show Less' : 'View All'}
                </span>
              </div>
            )}
          </div>

          <div style={style={{...styles.timeline}>
            {displayedMilestones.map((milestone, index) => (
              <div key={milestone.id} style={style={{...styles.milestoneItem}>
                <div style={style={{...styles.milestoneLeft}>
                  <div
                    style={[
                      style={{...styles.milestoneIcon,
                      { backgroundColor: getMilestoneColor(milestone.type) + '20' },
                    ]}
                  >
                    <span style={{ color: getMilestoneColor(milestone.type), fontSize: 14 }}>
                      {getMilestoneIcon(milestone.type)}
                    </span>
                  </div>
                  {index < displayedMilestones.length - 1 && (
                    <div style={style={{...styles.timelineLine} />
                  )}
                </div>
                <div style={style={{...styles.milestoneContent}>
                  <span variant="body" color={colors.text.primary}>{milestone.title}</span>
                  <span variant="caption" color={colors.text.tertiary}>{milestone.description}</span>
                  <div style={style={{...styles.milestoneMeta}>
                    <span variant="caption" color={colors.text.tertiary}>{milestone.date}</span>
                    {milestone.points > 0 && (
                      <span variant="caption" gold>+{milestone.points} pts</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Tiers Comparison */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ALL TIERS
          </span>

          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              style={[
                style={{...styles.tierCard,
                tier.status === 'current' && style={{...styles.tierCardCurrent,
                tier.status === 'locked' && style={{...styles.tierCardLocked,
              ]}
              onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
              onClick={() => {}}
            >
              <div style={style={{...styles.tierHeader}>
                <div style={style={{...styles.tierHeaderLeft}>
                  <div
                    style={[
                      style={{...styles.tierBadge,
                      { backgroundColor: tier.color + '20', borderColor: tier.color + '40' },
                    ]}
                  >
                    <span style={{ color: tier.color, fontSize: 16 }}>◈</span>
                  </div>
                  <div>
                    <span variant="body" color={colors.text.primary}>{tier.name}</span>
                    <span variant="caption" color={colors.text.tertiary}>
                      {tier.pointsRequired.toLocaleString()} pts required
                    </span>
                  </div>
                </div>
                <div style={style={{...styles.tierStatus}>
                  {tier.status === 'completed' && (
                    <div style={style={{...styles.statusCompleted}>
                      <span variant="caption" color="#4CAF50">✓ Achieved</span>
                    </div>
                  )}
                  {tier.status === 'current' && (
                    <div style={style={{...styles.statusCurrent}>
                      <span variant="caption" gold>Current</span>
                    </div>
                  )}
                  {tier.status === 'locked' && (
                    <div style={style={{...styles.statusLocked}>
                      <span variant="caption" color={colors.text.tertiary}>Locked</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Expanded Benefits */}
              {expandedTier === tier.id && (
                <div style={style={{...styles.tierExpanded}>
                  <div style={style={{...styles.benefitRow}>
                    <span variant="caption" color={colors.text.tertiary}>Reward Ceiling</span>
                    <span variant="body" gold>{tier.benefits.rewardCeiling}</span>
                  </div>
                  <div style={style={{...styles.benefitRow}>
                    <span variant="caption" color={colors.text.tertiary}>Offer Access</span>
                    <span variant="body" color={colors.text.primary}>{tier.benefits.offerAccess}</span>
                  </div>
                  <div style={style={{...styles.benefitRow}>
                    <span variant="caption" color={colors.text.tertiary}>Campaign Priority</span>
                    <span variant="body" color={colors.text.primary}>{tier.benefits.campaignPriority}</span>
                  </div>

                  <div style={style={{...styles.perksSection}>
                    <span variant="caption" color={colors.text.tertiary} style={style={{...styles.perksLabel}>
                      EXCLUSIVE PERKS
                    </span>
                    {tier.benefits.exclusivePerks.map((perk, i) => (
                      <div key={i} style={style={{...styles.perkItem}>
                        <span variant="caption" gold>✓</span>
                        <span variant="caption" color={colors.text.secondary}>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div style={style={{...styles.noteCard}>
          <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.noteText}>
            Progress at your own pace. No pressure, no deadlines.{'\n'}
            Your tier never expires once achieved.
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[5],
  },

  // Hero Card
  heroCard: {
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    alignItems: 'center',
    marginBottom: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  heroIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  heroIconText: {
    fontSize: 28,
    color: colors.gold.primary,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: colors.gold.primary,
    marginVertical: spacing[2],
  },
  pointsDisplay: {
    flexDirection: 'row',
    marginTop: spacing[5],
    width: '100%',
    justifyContent: 'center',
  },
  pointItem: {
    alignItems: 'center',
    paddingHorizontal: spacing[6],
  },
  pointValue: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.text.primary,
    marginBottom: spacing[1],
  },
  pointDivider: {
    width: 1,
    height: '100%',
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Next Tier Card
  nextTierCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    marginBottom: spacing[6],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  nextTierHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  progressSection: {
    marginBottom: spacing[5],
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[2],
  },
  earnMoreSection: {
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    paddingTop: spacing[4],
  },
  earnMoreLabel: {
    marginBottom: spacing[3],
  },
  earnWays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  earnWayItem: {
    alignItems: 'center',
    gap: spacing[2],
  },
  earnWayIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Section
  section: {
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },

  // Timeline
  timeline: {
    paddingLeft: spacing[2],
  },
  milestoneItem: {
    flexDirection: 'row',
    marginBottom: spacing[4],
  },
  milestoneLeft: {
    alignItems: 'center',
    width: 40,
  },
  milestoneIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#2A2A2A',
    marginTop: spacing[2],
  },
  milestoneContent: {
    flex: 1,
    marginLeft: spacing[3],
    paddingBottom: spacing[2],
  },
  milestoneMeta: {
    flexDirection: 'row',
    gap: spacing[3],
    marginTop: spacing[1],
  },

  // Tier Cards
  tierCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  tierCardCurrent: {
    borderColor: 'rgba(201, 169, 98, 0.4)',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  tierCardLocked: {
    opacity: 0.7,
  },
  tierHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tierHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  tierBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  tierStatus: {},
  statusCompleted: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  statusCurrent: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  statusLocked: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  tierExpanded: {
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  benefitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  perksSection: {
    marginTop: spacing[4],
  },
  perksLabel: {
    marginBottom: spacing[3],
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingVertical: spacing[1],
  },

  // Note
  noteCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  noteText: {
    lineHeight: 20,
  },
  bottomSpace: {
    height: spacing[10],
  },
};

export default B4_TierProgressScreen;
