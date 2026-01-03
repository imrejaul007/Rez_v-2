/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C4 - Privé Campaign Detail Page
 *
 * Purpose: Tell Privé user exactly what brand expects
 * Shows:
 * - Campaign overview & brand story
 * - What counts as valid engagement
 * - Reward tiers based on quality
 * - Content guidelines & do's/don'ts
 * - Timeline & deadlines
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { OffersStackParamList } from '../../navigation/types';

interface Task {
  id: string;
  title: string;
  description: string;
  isRequired: boolean;
  isCompleted: boolean;
}

interface RewardTier {
  tier: string;
  requirement: string;
  reward: string;
  color: string;
}

interface ContentGuideline {
  type: 'do' | 'dont';
  text: string;
}

interface CampaignData {
  id: string;
  brandName: string;
  brandLogo: string;
  brandImage: string;
  campaignTitle: string;
  campaignDescription: string;
  campaignGoal: string;
  deadline: string;
  spotsLeft: number;
  totalSpots: number;
  tasks: Task[];
  rewardTiers: RewardTier[];
  guidelines: ContentGuideline[];
  validEngagements: string[];
  invalidEngagements: string[];
}

const defaultCampaign: CampaignData = {
  id: '1',
  brandName: 'The Grand Café',
  brandLogo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop',
  brandImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
  campaignTitle: 'Weekend Tasting Experience',
  campaignDescription: 'Experience our signature weekend tasting menu and share your authentic journey with your community.',
  campaignGoal: 'Generate authentic reviews and social proof from trusted Privé members.',
  deadline: 'Dec 31, 2025',
  spotsLeft: 8,
  totalSpots: 20,
  tasks: [
    {
      id: '1',
      title: 'Visit & Experience',
      description: 'Dine at The Grand Café and enjoy the tasting menu',
      isRequired: true,
      isCompleted: false,
    },
    {
      id: '2',
      title: 'Create Content',
      description: 'Share your experience via post, story, or review',
      isRequired: true,
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Submit Proof',
      description: 'Upload your content link for verification',
      isRequired: true,
      isCompleted: false,
    },
    {
      id: '4',
      title: 'Engage Community',
      description: 'Respond to comments and questions authentically',
      isRequired: false,
      isCompleted: false,
    },
  ],
  rewardTiers: [
    { tier: 'Base', requirement: 'Complete required tasks', reward: '500 Privé Coins', color: colors.text.secondary },
    { tier: 'Quality', requirement: 'High-quality content', reward: '800 Privé Coins', color: colors.gold.muted },
    { tier: 'Premium', requirement: 'Exceptional engagement', reward: '1,200 Privé Coins', color: colors.gold.primary },
  ],
  guidelines: [
    { type: 'do', text: 'Share your honest, authentic experience' },
    { type: 'do', text: 'Use high-quality visuals (good lighting, clear focus)' },
    { type: 'do', text: 'Tag the brand and use campaign hashtags' },
    { type: 'do', text: 'Respond to genuine comments from your audience' },
    { type: 'dont', text: 'Use stock images or others\' content' },
    { type: 'dont', text: 'Make false claims about the experience' },
    { type: 'dont', text: 'Delete content within 30 days of posting' },
    { type: 'dont', text: 'Use engagement pods or fake interactions' },
  ],
  validEngagements: [
    'Instagram Post (feed)',
    'Instagram Story (with link)',
    'Google Review (detailed)',
    'Blog Post (300+ words)',
    'YouTube Video/Short',
  ],
  invalidEngagements: [
    'Private account posts',
    'Stories without brand tag',
    'Reviews under 50 words',
    'Paid promotion disclosure missing',
  ],
};

export const C4_CampaignTaskScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<OffersStackParamList, 'C4_CampaignTask'>>();
  const [isAccepted, setIsAccepted] = useState(false);

  const campaign = defaultCampaign;

  const handleAcceptCampaign = () => {
    setIsAccepted(true);
  };

  const handleStartSubmission = () => {
    navigate('/prive/C6_ContentSubmission', { campaignId: campaign.id };
  };

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title={campaign.brandName}
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* HERO IMAGE & CAMPAIGN TITLE */}
        {/* ============================================ */}
        <ImageBackground
          src={{ uri: campaign.brandImage }}
          style={style={{...styles.heroImage}
          imageStyle={style={{...styles.heroImageStyle}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)', colors.background.primary]}
            style={style={{...styles.heroGradient}
          >
            <div style={style={{...styles.heroContent}>
              <Image
                src={{ uri: campaign.brandLogo }}
                style={style={{...styles.brandLogo}
              />
              <span variant="h3" color={colors.text.primary}>
                {campaign.campaignTitle}
              </span>
              <div style={style={{...styles.campaignMeta}>
                <div style={style={{...styles.metaItem}>
                  <span variant="caption" color={colors.text.tertiary}>Deadline</span>
                  <span variant="bodySmall" color={colors.text.secondary}>{campaign.deadline}</span>
                </div>
                <div style={style={{...styles.metaDivider} />
                <div style={style={{...styles.metaItem}>
                  <span variant="caption" color={colors.text.tertiary}>Spots Left</span>
                  <span variant="bodySmall" gold>{campaign.spotsLeft}/{campaign.totalSpots}</span>
                </div>
              </div>
            </div>
          </LinearGradient>
        </ImageBackground>

        {/* ============================================ */}
        {/* CAMPAIGN DESCRIPTION */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.descriptionCard}>
            <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
              {campaign.campaignDescription}
            </span>
            <div style={style={{...styles.goalSection}>
              <span variant="caption" gold style={style={{...styles.goalLabel}>
                BRAND GOAL
              </span>
              <span variant="bodySmall" color={colors.text.tertiary}>
                {campaign.campaignGoal}
              </span>
            </div>
          </Card>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* REQUIRED TASKS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What You Need to Do
          </span>

          {campaign.tasks.map((task, index) => (
            <div key={task.id} style={style={{...styles.taskCard}>
              <div style={[
                style={{...styles.taskNumber,
                task.isRequired && style={{...styles.taskNumberRequired,
              ]}>
                <Text
                  variant="bodySmall"
                  color={task.isRequired ? colors.gold.primary : colors.text.tertiary}
                >
                  {index + 1}
                </span>
              </div>
              <div style={style={{...styles.taskContent}>
                <div style={style={{...styles.taskTitleRow}>
                  <span variant="body" color={colors.text.primary}>
                    {task.title}
                  </span>
                  {!task.isRequired && (
                    <div style={style={{...styles.optionalBadge}>
                      <span variant="caption" color={colors.text.tertiary}>Bonus</span>
                    </div>
                  )}
                </div>
                <span variant="bodySmall" color={colors.text.secondary}>
                  {task.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* REWARD TIERS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Reward Tiers
          </span>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.sectionSubtext}>
            Higher quality content unlocks better rewards
          </span>

          <div style={style={{...styles.rewardTiersContainer}>
            {campaign.rewardTiers.map((tier, index) => (
              <div
                key={tier.tier}
                style={[
                  style={{...styles.rewardTierCard,
                  index === campaign.rewardTiers.length - 1 && style={{...styles.rewardTierCardBest,
                ]}
              >
                <div style={style={{...styles.rewardTierLeft}>
                  <div style={[style={{...styles.tierDot, { backgroundColor: tier.color }]} />
                  <div>
                    <span variant="body" color={colors.text.primary}>{tier.tier}</span>
                    <span variant="caption" color={colors.text.tertiary}>{tier.requirement}</span>
                  </div>
                </div>
                <span variant="bodyLarge" style={{ color: tier.color }}>{tier.reward}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* VALID ENGAGEMENTS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What Counts as Valid
          </span>

          <div style={style={{...styles.engagementGrid}>
            <div style={style={{...styles.engagementColumn}>
              <div style={style={{...styles.engagementHeader}>
                <span style={style={{...styles.checkIcon}>✓</span>
                <span variant="bodySmall" color={colors.status.success}>Accepted</span>
              </div>
              {campaign.validEngagements.map((item, index) => (
                <span key={index} variant="caption" color={colors.text.secondary} style={style={{...styles.engagementItem}>
                  • {item}
                </span>
              ))}
            </div>

            <div style={style={{...styles.engagementColumn}>
              <div style={style={{...styles.engagementHeader}>
                <span style={style={{...styles.crossIcon}>✕</span>
                <span variant="bodySmall" color={colors.status.error}>Not Accepted</span>
              </div>
              {campaign.invalidEngagements.map((item, index) => (
                <span key={index} variant="caption" color={colors.text.tertiary} style={style={{...styles.engagementItem}>
                  • {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* CONTENT GUIDELINES */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Content Guidelines
          </span>

          <Card variant="default" style={style={{...styles.guidelinesCard}>
            <div style={style={{...styles.guidelinesSection}>
              <span variant="bodySmall" color={colors.status.success} style={style={{...styles.guidelineHeader}>
                ✓ Do's
              </span>
              {campaign.guidelines.filter(g => g.type === 'do').map((g, index) => (
                <span key={index} variant="caption" color={colors.text.secondary} style={style={{...styles.guidelineItem}>
                  {g.text}
                </span>
              ))}
            </div>

            <div style={style={{...styles.guidelinesDivider} />

            <div style={style={{...styles.guidelinesSection}>
              <span variant="bodySmall" color={colors.status.error} style={style={{...styles.guidelineHeader}>
                ✕ Don'ts
              </span>
              {campaign.guidelines.filter(g => g.type === 'dont').map((g, index) => (
                <span key={index} variant="caption" color={colors.text.tertiary} style={style={{...styles.guidelineItem}>
                  {g.text}
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom spacing */}
        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTON */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        {!isAccepted ? (
          <div
            style={style={{...styles.ctaButton}
            onClick={handleAcceptCampaign}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.background.primary}>
              Accept Campaign
            </span>
          </div>
        ) : (
          <div
            style={[style={{...styles.ctaButton, style={{...styles.ctaButtonActive]}
            onClick={handleStartSubmission}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.background.primary}>
              Submit Content →
            </span>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

const styles = {
  scrollContent: {
    paddingBottom: 120,
  },

  heroImage: {
    height: 280,
    marginBottom: spacing[4],
  },
  heroImageStyle: {
    borderBottomLeftRadius: borderRadius['2xl'],
    borderBottomRightRadius: borderRadius['2xl'],
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing[5],
    borderBottomLeftRadius: borderRadius['2xl'],
    borderBottomRightRadius: borderRadius['2xl'],
  },
  heroContent: {
    gap: spacing[2],
  },
  brandLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    marginBottom: spacing[2],
  },
  campaignMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[2],
    gap: spacing[4],
  },
  metaItem: {
    gap: spacing[1],
  },
  metaDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border.primary,
  },

  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionSubtext: {
    marginTop: -spacing[2],
    marginBottom: spacing[3],
  },

  descriptionCard: {
    padding: spacing[5],
  },
  description: {
    lineHeight: 24,
    marginBottom: spacing[4],
  },
  goalSection: {
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
    gap: spacing[2],
  },
  goalLabel: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[2],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  taskNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  taskNumberRequired: {
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  taskContent: {
    flex: 1,
    gap: spacing[1],
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionalBadge: {
    backgroundColor: colors.background.tertiary,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  rewardTiersContainer: {
    gap: spacing[2],
  },
  rewardTierCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  rewardTierCardBest: {
    borderColor: colors.border.goldMuted,
    backgroundColor: colors.transparent.gold10,
  },
  rewardTierLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  tierDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  engagementGrid: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  engagementColumn: {
    flex: 1,
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  engagementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[3],
    paddingBottom: spacing[2],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  checkIcon: {
    fontSize: 14,
    color: colors.status.success,
  },
  crossIcon: {
    fontSize: 14,
    color: colors.status.error,
  },
  engagementItem: {
    marginBottom: spacing[2],
    lineHeight: 18,
  },

  guidelinesCard: {
    padding: spacing[4],
  },
  guidelinesSection: {
    gap: spacing[2],
  },
  guidelinesDivider: {
    height: 1,
    backgroundColor: colors.border.secondary,
    marginVertical: spacing[4],
  },
  guidelineHeader: {
    marginBottom: spacing[1],
    fontWeight: '600',
  },
  guidelineItem: {
    marginLeft: spacing[2],
    lineHeight: 20,
  },

  bottomSpace: {
    height: spacing[8],
  },

  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  ctaButtonActive: {
    backgroundColor: colors.status.success,
  },
};

export default C4_CampaignTaskScreen;
