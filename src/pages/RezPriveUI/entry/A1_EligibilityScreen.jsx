/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A1 - Privé Eligibility Screen
 *
 * Shows the 6-pillar Privé Eligibility Engine (PEE) scoring:
 * - Engagement (25%) - How deeply you use ReZ
 * - Trust & Integrity (20%) - Your reliability for brands
 * - Influence (20%) - Your real social influence
 * - Economic Value (15%) - Value you bring to ecosystem
 * - Brand Affinity (10%) - How brands perceive you
 * - Network & Community (10%) - Ecosystem expansion impact
 *
 * "Privé is earned through value creation, not app usage alone."
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';
import {
  PillarScore,
  PRIVE_THRESHOLDS,
  PILLAR_WEIGHTS,
  formatScoreForDisplay,
} from '../../utils/eligibilityEngine';

type EligibilityType = 'auto_invite' | 'application' | 'brand_triggered' | 'event_based';
type PriveTier = 'none' | 'entry' | 'elite';

interface EligibilityData {
  totalScore: number;
  tier: PriveTier;
  tierLabel: string;
  eligibilityType: EligibilityType | null;
  pillars: PillarScore[];
  isBlocked: boolean;
  blockReason?: string;
  nextReviewDate: string;
  improvementTips: string[];
}

// Mock data - in production, this comes from the eligibility engine
const mockEligibilityData: EligibilityData = {
  totalScore: 74.5,
  tier: 'entry',
  tierLabel: 'Privé Entry',
  eligibilityType: 'auto_invite',
  pillars: [
    {
      id: 'engagement',
      name: 'Engagement',
      shortName: 'Engage',
      score: 78,
      weight: PILLAR_WEIGHTS.ENGAGEMENT,
      weightedScore: 78 * PILLAR_WEIGHTS.ENGAGEMENT,
      trend: 'up',
      icon: '📊',
      color: '#4CAF50',
      description: 'Transaction frequency, wallet usage, multi-category activity',
      improvementTips: ['Complete 2 more purchases', 'Explore a new category'],
    },
    {
      id: 'trust',
      name: 'Trust & Integrity',
      shortName: 'Trust',
      score: 92,
      weight: PILLAR_WEIGHTS.TRUST,
      weightedScore: 92 * PILLAR_WEIGHTS.TRUST,
      trend: 'stable',
      icon: '🛡️',
      color: '#2196F3',
      description: 'Zero fraud flags, low dispute rate, genuine reviews',
      improvementTips: ['Maintain clean transaction history'],
    },
    {
      id: 'influence',
      name: 'Influence',
      shortName: 'Influence',
      score: 65,
      weight: PILLAR_WEIGHTS.INFLUENCE,
      weightedScore: 65 * PILLAR_WEIGHTS.INFLUENCE,
      trend: 'up',
      icon: '📢',
      color: '#E91E63',
      description: 'Social followers, engagement rate, content consistency',
      improvementTips: ['Connect social accounts', 'Complete a brand campaign'],
    },
    {
      id: 'economic',
      name: 'Economic Value',
      shortName: 'Economic',
      score: 70,
      weight: PILLAR_WEIGHTS.ECONOMIC,
      weightedScore: 70 * PILLAR_WEIGHTS.ECONOMIC,
      trend: 'stable',
      icon: '💰',
      color: '#9C27B0',
      description: 'GMV driven, average order value, premium category spend',
      improvementTips: ['Shop in premium categories', 'Increase order value'],
    },
    {
      id: 'brand_affinity',
      name: 'Brand Affinity',
      shortName: 'Brand',
      score: 60,
      weight: PILLAR_WEIGHTS.BRAND_AFFINITY,
      weightedScore: 60 * PILLAR_WEIGHTS.BRAND_AFFINITY,
      trend: 'down',
      icon: '🎯',
      color: '#FF9800',
      description: 'Brand invitations, campaign completion, brand ratings',
      improvementTips: ['Accept a brand invitation', 'Complete campaigns on time'],
    },
    {
      id: 'network',
      name: 'Network & Community',
      shortName: 'Network',
      score: 55,
      weight: PILLAR_WEIGHTS.NETWORK,
      weightedScore: 55 * PILLAR_WEIGHTS.NETWORK,
      trend: 'stable',
      icon: '🔗',
      color: '#00BCD4',
      description: 'Referrals, event participation, community roles',
      improvementTips: ['Refer a friend', 'Join a community event'],
    },
  ],
  isBlocked: false,
  nextReviewDate: 'Weekly (Sundays)',
  improvementTips: [
    'Complete 2 more purchases this week',
    'Accept a brand campaign invitation',
    'Refer a friend to ReZ',
  ],
};

export const A1_EligibilityScreen: React.FC = () => {
  const navigate = useNavigate();
  const [eligibility] = useState(mockEligibilityData);
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const getTierInfo = (tier: PriveTier) => {
    switch (tier) {
      case 'elite':
        return { label: 'Privé Elite', color: '#4CAF50', bg: 'rgba(76, 175, 80, 0.15)', icon: '◈◈' };
      case 'entry':
        return { label: 'Privé Entry', color: colors.gold.primary, bg: 'rgba(201, 169, 98, 0.15)', icon: '◈' };
      default:
        return { label: 'Not Yet Eligible', color: colors.text.tertiary, bg: 'rgba(255, 255, 255, 0.1)', icon: '○' };
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return { icon: '↑', color: '#4CAF50' };
      case 'down':
        return { icon: '↓', color: '#F44336' };
      default:
        return { icon: '→', color: '#9E9E9E' };
    }
  };

  const getScoreLevel = (score: number) => {
    const display = formatScoreForDisplay(score);
    return display;
  };

  const tierInfo = getTierInfo(eligibility.tier);
  const pointsToElite = Math.max(0, PRIVE_THRESHOLDS.ELITE - eligibility.totalScore);
  const progressToElite = Math.min((eligibility.totalScore / PRIVE_THRESHOLDS.ELITE) * 100, 100);

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Privé Eligibility</span>
        <div onClick={() => navigate('/prive/WhyPrive')}>
          <span variant="caption" gold>Why Privé?</span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Hero Card - Status Overview */}
        <div style={style={{...styles.heroCard}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
            style={style={{...styles.heroGradient}
          >
            {/* Tier Badge */}
            <div style={[style={{...styles.tierBadge, { backgroundColor: tierInfo.bg }]}>
              <span style={[style={{...styles.tierIcon, { color: tierInfo.color }]}>{tierInfo.icon}</span>
              <span variant="label" style={{ color: tierInfo.color }}>{tierInfo.label}</span>
            </div>

            {/* Status Message */}
            <div style={style={{...styles.statusSection}>
              <span variant="h2" color={colors.text.primary}>
                {eligibility.tier === 'elite'
                  ? "You're Privé Elite"
                  : eligibility.tier === 'entry'
                  ? "You're Eligible"
                  : "Almost There"}
              </span>
              <span variant="body" color={colors.text.tertiary}>
                {eligibility.tier === 'elite'
                  ? 'Top-tier access unlocked'
                  : eligibility.tier === 'entry'
                  ? `${pointsToElite.toFixed(1)} points to Elite`
                  : 'Keep building your profile'}
              </span>
            </div>

            {/* Progress to Elite */}
            {eligibility.tier !== 'elite' && (
              <div style={style={{...styles.progressSection}>
                <div style={style={{...styles.progressLabels}>
                  <span variant="caption" color={colors.text.tertiary}>Entry (70)</span>
                  <span variant="caption" gold>Elite (85)</span>
                </div>
                <div style={style={{...styles.progressTrack}>
                  <div style={[style={{...styles.progressFill, { width: `${progressToElite}%` }]} />
                  <div style={[style={{...styles.progressMarker, { left: `${(PRIVE_THRESHOLDS.ENTRY / PRIVE_THRESHOLDS.ELITE) * 100}%` }]} />
                </div>
                <div style={style={{...styles.progressScore}>
                  <span variant="caption" color={colors.text.tertiary}>Your Score</span>
                  <span variant="bodyLarge" gold>{eligibility.totalScore.toFixed(1)}</span>
                </div>
              </div>
            )}

            {/* Philosophy Quote */}
            <div style={style={{...styles.quoteContainer}>
              <span variant="caption" color={colors.gold.primary} style={style={{...styles.quoteText}>
                "Privé is earned through value creation, not app usage alone."
              </span>
            </div>
          </LinearGradient>
        </div>

        {/* 6 Pillars Section */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                THE 6 PILLARS
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Weighted composite score
              </span>
            </div>
            <div onClick={() => navigate('/prive/AccessCategories')}>
              <span variant="caption" gold>Learn More →</span>
            </div>
          </div>

          {/* Pillar Cards */}
          <div style={style={{...styles.pillarsList}>
            {eligibility.pillars.map((pillar) => {
              const trend = getTrendIcon(pillar.trend);
              const scoreLevel = getScoreLevel(pillar.score);
              const isExpanded = expandedPillar === pillar.id;
              const weightPercent = (pillar.weight * 100).toFixed(0);

              return (
                <div
                  key={pillar.id}
                  style={[style={{...styles.pillarCard, isExpanded && style={{...styles.pillarCardExpanded]}
                  onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                  onClick={() => {}}
                >
                  <div style={style={{...styles.pillarHeader}>
                    <div style={[style={{...styles.pillarIcon, { backgroundColor: `${pillar.color}20` }]}>
                      <span style={style={{...styles.pillarEmoji}>{pillar.icon}</span>
                    </div>
                    <div style={style={{...styles.pillarInfo}>
                      <div style={style={{...styles.pillarTitleRow}>
                        <span variant="body" color={colors.text.primary}>{pillar.name}</span>
                        <div style={style={{...styles.weightBadge}>
                          <span variant="caption" color={colors.text.tertiary}>{weightPercent}%</span>
                        </div>
                      </div>
                      <div style={style={{...styles.pillarScoreRow}>
                        <span variant="caption" style={{ color: pillar.color }}>{scoreLevel.label}</span>
                        <span style={[style={{...styles.trendIcon, { color: trend.color }]}>{trend.icon}</span>
                      </div>
                    </div>
                    <div style={style={{...styles.pillarScoreCircle}>
                      <span variant="bodyLarge" color={colors.text.primary}>{pillar.score}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={style={{...styles.pillarProgress}>
                    <div style={style={{...styles.pillarProgressTrack}>
                      <div
                        style={[
                          style={{...styles.pillarProgressFill,
                          { width: `${pillar.score}%`, backgroundColor: pillar.color },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div style={style={{...styles.pillarExpanded}>
                      <span variant="caption" color={colors.text.secondary} style={style={{...styles.pillarDescription}>
                        {pillar.description}
                      </span>

                      {/* Improvement Tips */}
                      <div style={style={{...styles.tipsSection}>
                        <span variant="label" color={colors.text.tertiary} style={style={{...styles.tipsLabel}>
                          TO IMPROVE
                        </span>
                        {pillar.improvementTips.map((tip, idx) => (
                          <div key={idx} style={style={{...styles.tipItem}>
                            <span style={[style={{...styles.tipDot, { color: pillar.color }]}>•</span>
                            <span variant="caption" color={colors.text.secondary}>{tip}</span>
                          </div>
                        ))}
                      </div>

                      {/* Weighted Contribution */}
                      <div style={style={{...styles.contributionRow}>
                        <span variant="caption" color={colors.text.tertiary}>
                          Contributes to total:
                        </span>
                        <span variant="caption" gold>
                          +{pillar.weightedScore.toFixed(1)} pts
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            QUICK WINS
          </span>
          <div style={style={{...styles.tipsCard}>
            {eligibility.improvementTips.map((tip, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.quickTipItem,
                  index < eligibility.improvementTips.length - 1 && style={{...styles.quickTipBorder,
                ]}
              >
                <div style={style={{...styles.quickTipNumber}>
                  <span variant="caption" gold>{index + 1}</span>
                </div>
                <span variant="body" color={colors.text.secondary}>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Block Warning (if trust is low) */}
        {eligibility.isBlocked && (
          <div style={style={{...styles.blockCard}>
            <div style={style={{...styles.blockIcon}>
              <span style={style={{...styles.blockEmoji}>⚠️</span>
            </div>
            <div style={style={{...styles.blockInfo}>
              <span variant="body" color="#F44336">Access Blocked</span>
              <span variant="caption" color={colors.text.tertiary}>
                {eligibility.blockReason || 'Trust score below minimum threshold'}
              </span>
            </div>
          </div>
        )}

        {/* Trust Warning */}
        <div style={style={{...styles.trustWarning}>
          <span variant="caption" color={colors.text.tertiary}>
            <span variant="caption" color="#F44336">Important: </span>
            Trust below 60 = Privé blocked regardless of total score
          </span>
        </div>

        {/* Eligibility Types */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            HOW ELIGIBILITY WORKS
          </span>
          <div style={style={{...styles.eligibilityTypesCard}>
            {[
              { type: 'Auto-Invite', desc: 'Score crosses threshold', icon: '✓', active: eligibility.eligibilityType === 'auto_invite' },
              { type: 'Application', desc: 'Apply + manual review', icon: '📝', active: eligibility.eligibilityType === 'application' },
              { type: 'Brand-Triggered', desc: 'Brand invites you', icon: '🎯', active: eligibility.eligibilityType === 'brand_triggered' },
              { type: 'Event-Based', desc: 'Limited-time access', icon: '🎪', active: eligibility.eligibilityType === 'event_based' },
            ].map((item, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.eligibilityTypeItem,
                  item.active && style={{...styles.eligibilityTypeActive,
                ]}
              >
                <span style={style={{...styles.eligibilityTypeIcon}>{item.icon}</span>
                <div style={style={{...styles.eligibilityTypeInfo}>
                  <span variant="caption" color={item.active ? colors.gold.primary : colors.text.primary}>
                    {item.type}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>{item.desc}</span>
                </div>
                {item.active && (
                  <div style={style={{...styles.yourTypeBadge}>
                    <span variant="caption" gold>You</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Re-evaluation Info */}
        <div style={style={{...styles.reviewCard}>
          <div style={style={{...styles.reviewIcon}>
            <span style={style={{...styles.reviewEmoji}>🔄</span>
          </div>
          <div style={style={{...styles.reviewInfo}>
            <span variant="body" color={colors.text.primary}>Ongoing Eligibility</span>
            <span variant="caption" color={colors.text.tertiary}>
              Re-evaluated {eligibility.nextReviewDate}. Access can be paused if signals drop.
            </span>
          </div>
        </div>

        {/* Thresholds Reference */}
        <div style={style={{...styles.thresholdsCard}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.thresholdsLabel}>
            SCORE THRESHOLDS
          </span>
          <div style={style={{...styles.thresholdsRow}>
            <div style={style={{...styles.thresholdItem}>
              <span variant="h3" color={colors.text.tertiary}>&lt;70</span>
              <span variant="caption" color={colors.text.tertiary}>Not Eligible</span>
            </div>
            <div style={style={{...styles.thresholdDivider} />
            <div style={style={{...styles.thresholdItem}>
              <span variant="h3" gold>70+</span>
              <span variant="caption" gold>Privé Entry</span>
            </div>
            <div style={style={{...styles.thresholdDivider} />
            <div style={style={{...styles.thresholdItem}>
              <span variant="h3" color="#4CAF50">85+</span>
              <span variant="caption" color="#4CAF50">Privé Elite</span>
            </div>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        {eligibility.tier !== 'none' ? (
          <div
            style={style={{...styles.ctaButton}
            onClick={() => navigate('/prive/A2_Invitation')}
          >
            <span variant="bodyLarge" color="#0A0A0A">Continue to Privé</span>
          </div>
        ) : (
          <div
            style={style={{...styles.ctaButtonSecondary}
            onClick={() => navigate('/prive/A3_RequestAccess')}
          >
            <span variant="bodyLarge" gold>Request Access</span>
          </div>
        )}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
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
    paddingBottom: 120,
  },

  // Hero Card
  heroCard: {
    marginHorizontal: spacing[5],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  heroGradient: {
    padding: spacing[5],
  },
  tierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing[2],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    marginBottom: spacing[4],
  },
  tierIcon: {
    fontSize: 14,
  },
  statusSection: {
    marginBottom: spacing[5],
  },
  progressSection: {
    marginBottom: spacing[4],
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[2],
  },
  progressTrack: {
    height: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 4,
    overflow: 'visible',
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: 4,
  },
  progressMarker: {
    position: 'absolute',
    top: -2,
    width: 3,
    height: 12,
    backgroundColor: '#FFF',
    borderRadius: 1.5,
  },
  progressScore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  quoteContainer: {
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  quoteText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },

  // Section
  section: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[5],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[1],
  },

  // Pillars
  pillarsList: {
    gap: spacing[3],
  },
  pillarCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  pillarCardExpanded: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  pillarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  pillarIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarEmoji: {
    fontSize: 20,
  },
  pillarInfo: {
    flex: 1,
  },
  pillarTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  weightBadge: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  pillarScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  trendIcon: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  pillarScoreCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarProgress: {
    marginTop: spacing[3],
  },
  pillarProgressTrack: {
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  pillarProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  pillarExpanded: {
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  pillarDescription: {
    lineHeight: 20,
    marginBottom: spacing[3],
  },
  tipsSection: {
    marginBottom: spacing[3],
  },
  tipsLabel: {
    letterSpacing: 0.5,
    marginBottom: spacing[2],
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
    marginBottom: spacing[1],
  },
  tipDot: {
    fontSize: 14,
    lineHeight: 18,
  },
  contributionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242424',
    padding: spacing[3],
    borderRadius: borderRadius.sm,
  },

  // Tips Card
  tipsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    overflow: 'hidden',
  },
  quickTipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  quickTipBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  quickTipNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Block Card
  blockCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[5],
    padding: spacing[4],
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(244, 67, 54, 0.3)',
    gap: spacing[3],
  },
  blockIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(244, 67, 54, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockEmoji: {
    fontSize: 22,
  },
  blockInfo: {
    flex: 1,
    gap: spacing[1],
  },

  // Trust Warning
  trustWarning: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },

  // Eligibility Types
  eligibilityTypesCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  eligibilityTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  eligibilityTypeActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  eligibilityTypeIcon: {
    fontSize: 18,
  },
  eligibilityTypeInfo: {
    flex: 1,
    gap: spacing[1],
  },
  yourTypeBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Review Card
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[5],
    padding: spacing[4],
    backgroundColor: 'rgba(255, 193, 7, 0.05)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
    gap: spacing[3],
  },
  reviewIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewEmoji: {
    fontSize: 22,
  },
  reviewInfo: {
    flex: 1,
    gap: spacing[1],
  },

  // Thresholds
  thresholdsCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[5],
    padding: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  thresholdsLabel: {
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: spacing[4],
  },
  thresholdsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  thresholdItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  thresholdDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2A2A2A',
  },

  bottomSpace: {
    height: spacing[8],
  },

  // CTA
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  ctaButtonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default A1_EligibilityScreen;
