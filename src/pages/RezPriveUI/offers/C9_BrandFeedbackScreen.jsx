/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C9 - Brand Feedback & Approval Screen
 *
 * Purpose: Detailed brand communication for campaigns
 * Shows:
 * - Brand feedback on submission
 * - What needs to be improved (if revision needed)
 * - Approval message with rewards
 * - Communication history
 * - Action buttons based on status
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';
import { OffersStackParamList } from '../../navigation/types';

type FeedbackType = 'approval' | 'revision' | 'rejection' | 'info';

interface FeedbackItem {
  id: string;
  type: FeedbackType;
  title: string;
  message: string;
  timestamp: string;
  details?: string[];
}

interface BrandFeedbackData {
  campaignId: string;
  brandName: string;
  brandLogo: string;
  campaignTitle: string;
  feedbackItems: FeedbackItem[];
  currentStatus: 'approved' | 'needs_revision' | 'rejected';
  rewardAmount?: string;
}

const defaultFeedbackData: BrandFeedbackData = {
  campaignId: '1',
  brandName: 'The Grand Café',
  brandLogo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop',
  campaignTitle: 'Weekend Tasting Experience',
  currentStatus: 'needs_revision',
  feedbackItems: [
    {
      id: '1',
      type: 'revision',
      title: 'Content Revision Requested',
      message: 'Thank you for your submission. We appreciate your effort, but a few adjustments would help align with our brand guidelines.',
      timestamp: 'Dec 19, 2025 at 10:30 AM',
      details: [
        'Please include our brand hashtag #TheGrandCafe in your post',
        'The image quality could be improved - try better lighting',
        'Add a disclosure tag for sponsored content',
      ],
    },
    {
      id: '2',
      type: 'info',
      title: 'Submission Received',
      message: 'Your content has been submitted and is being reviewed.',
      timestamp: 'Dec 18, 2025 at 2:35 PM',
    },
  ],
};

const approvedFeedbackData: BrandFeedbackData = {
  campaignId: '2',
  brandName: 'The Grand Café',
  brandLogo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop',
  campaignTitle: 'Weekend Tasting Experience',
  currentStatus: 'approved',
  rewardAmount: '800 Privé Coins',
  feedbackItems: [
    {
      id: '1',
      type: 'approval',
      title: 'Content Approved',
      message: 'Excellent work! Your content perfectly captures the essence of our brand. We love the authentic storytelling and high-quality visuals.',
      timestamp: 'Dec 20, 2025 at 9:15 AM',
      details: [
        'Quality Tier: Premium',
        'Engagement: Above Average',
        'Brand Alignment: Excellent',
      ],
    },
    {
      id: '2',
      type: 'info',
      title: 'Submission Received',
      message: 'Your content has been submitted and is being reviewed.',
      timestamp: 'Dec 18, 2025 at 2:35 PM',
    },
  ],
};

export const C9_BrandFeedbackScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<OffersStackParamList, 'C5_CampaignStatus'>>();

  // In production, fetch based on campaignId
  const feedbackData = defaultFeedbackData; // or approvedFeedbackData

  const getFeedbackIcon = (type: FeedbackType) => {
    switch (type) {
      case 'approval': return '✓';
      case 'revision': return '!';
      case 'rejection': return '✕';
      case 'info': return '◎';
    }
  };

  const getFeedbackColor = (type: FeedbackType) => {
    switch (type) {
      case 'approval': return colors.status.success;
      case 'revision': return colors.status.warning;
      case 'rejection': return colors.status.error;
      case 'info': return colors.text.tertiary;
    }
  };

  const getStatusBadge = () => {
    switch (feedbackData.currentStatus) {
      case 'approved':
        return { text: 'Approved', color: colors.status.success };
      case 'needs_revision':
        return { text: 'Revision Needed', color: colors.status.warning };
      case 'rejected':
        return { text: 'Not Approved', color: colors.status.error };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title="Brand Feedback"
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* CAMPAIGN HEADER */}
        {/* ============================================ */}
        <div style={style={{...styles.header}>
          <img src={{ uri: feedbackData.brandLogo }} style={style={{...styles.brandLogo} />
          <div style={style={{...styles.headerInfo}>
            <span variant="body" color={colors.text.primary}>
              {feedbackData.campaignTitle}
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              {feedbackData.brandName}
            </span>
          </div>
          <div style={[style={{...styles.statusBadge, { backgroundColor: statusBadge.color + '20' }]}>
            <span variant="caption" style={{ color: statusBadge.color }}>
              {statusBadge.text}
            </span>
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* REWARD INFO (if approved) */}
        {/* ============================================ */}
        {feedbackData.currentStatus === 'approved' && feedbackData.rewardAmount && (
          <>
            <div style={style={{...styles.section}>
              <Card variant="goldGlow" style={style={{...styles.rewardCard}>
                <div style={style={{...styles.rewardContent}>
                  <span style={style={{...styles.rewardIcon}>✦</span>
                  <div style={style={{...styles.rewardInfo}>
                    <span variant="caption" color={colors.text.tertiary}>REWARD EARNED</span>
                    <span variant="h3" gold>{feedbackData.rewardAmount}</span>
                  </div>
                </div>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.rewardNote}>
                  Credited to your Privé Wallet
                </span>
              </Card>
            </div>
            <Divider variant="light" spacing={spacing[4]} />
          </>
        )}

        {/* ============================================ */}
        {/* FEEDBACK TIMELINE */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Feedback History
          </span>

          {feedbackData.feedbackItems.map((item, index) => {
            const iconColor = getFeedbackColor(item.type);
            const isLatest = index === 0;

            return (
              <div
                key={item.id}
                style={[
                  style={{...styles.feedbackCard,
                  isLatest && style={{...styles.feedbackCardLatest,
                  item.type === 'revision' && style={{...styles.feedbackCardRevision,
                  item.type === 'approval' && style={{...styles.feedbackCardApproval,
                ]}
              >
                {/* Header */}
                <div style={style={{...styles.feedbackHeader}>
                  <div style={[style={{...styles.feedbackIconCircle, { backgroundColor: iconColor + '20' }]}>
                    <span style={[style={{...styles.feedbackIconText, { color: iconColor }]}>
                      {getFeedbackIcon(item.type)}
                    </span>
                  </div>
                  <div style={style={{...styles.feedbackHeaderInfo}>
                    <span variant="body" color={colors.text.primary}>
                      {item.title}
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>
                      {item.timestamp}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.feedbackMessage}>
                  {item.message}
                </span>

                {/* Details (if any) */}
                {item.details && item.details.length > 0 && (
                  <div style={style={{...styles.detailsContainer}>
                    {item.type === 'revision' ? (
                      <span variant="caption" color={colors.text.tertiary} style={style={{...styles.detailsLabel}>
                        What to improve:
                      </span>
                    ) : item.type === 'approval' ? (
                      <span variant="caption" color={colors.text.tertiary} style={style={{...styles.detailsLabel}>
                        Performance highlights:
                      </span>
                    ) : null}

                    {item.details.map((detail, idx) => (
                      <div key={idx} style={style={{...styles.detailItem}>
                        <span style={[style={{...styles.detailBullet, { color: iconColor }]}>
                          {item.type === 'revision' ? '•' : '✓'}
                        </span>
                        <span variant="caption" color={colors.text.secondary} style={style={{...styles.detailText}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ============================================ */}
        {/* HELP SECTION */}
        {/* ============================================ */}
        <Card variant="default" style={style={{...styles.helpCard}>
          <div style={style={{...styles.helpContent}>
            <span style={style={{...styles.helpIcon}>?</span>
            <div style={style={{...styles.helpText}>
              <span variant="bodySmall" color={colors.text.secondary}>
                Questions about feedback?
              </span>
              <div>
                <span variant="bodySmall" gold>
                  Contact Privé Concierge →
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTON */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        {feedbackData.currentStatus === 'needs_revision' ? (
          <div
            style={style={{...styles.ctaButton}
            onClick={() => navigate('/prive/C6_ContentSubmission', { campaignId: feedbackData.campaignId })}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.background.primary}>
              Revise & Resubmit
            </span>
          </div>
        ) : feedbackData.currentStatus === 'approved' ? (
          <div style={style={{...styles.ctaRow}>
            <div
              style={[style={{...styles.ctaButton, style={{...styles.ctaButtonHalf]}
              onClick={() => navigate('/prive/Profile', { screen: 'F10_Wallet' })}
              onClick={() => {}}
            >
              <span variant="bodyLarge" color={colors.background.primary}>
                View Wallet
              </span>
            </div>
            <div
              style={[style={{...styles.ctaButtonSecondary, style={{...styles.ctaButtonHalf]}
              onClick={() => navigate('/prive/C1_OffersFeed')}
              onClick={() => {}}
            >
              <span variant="bodyLarge" color={colors.text.primary}>
                More Campaigns
              </span>
            </div>
          </div>
        ) : (
          <div
            style={style={{...styles.ctaButtonSecondary}
            onClick={() => navigate(-1)}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.text.primary}>
              Back
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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[5],
    gap: spacing[3],
  },
  brandLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.border.goldMuted,
  },
  headerInfo: {
    flex: 1,
    gap: spacing[1],
  },
  statusBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },

  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  rewardCard: {
    padding: spacing[5],
    alignItems: 'center',
    gap: spacing[3],
  },
  rewardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
  rewardIcon: {
    fontSize: 32,
    color: colors.gold.primary,
  },
  rewardInfo: {
    alignItems: 'center',
    gap: spacing[1],
  },
  rewardNote: {
    marginTop: spacing[2],
  },

  feedbackCard: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
    gap: spacing[3],
  },
  feedbackCardLatest: {
    borderColor: colors.border.goldMuted,
  },
  feedbackCardRevision: {
    backgroundColor: colors.status.warning + '08',
    borderColor: colors.status.warning + '30',
  },
  feedbackCardApproval: {
    backgroundColor: colors.status.success + '08',
    borderColor: colors.status.success + '30',
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  feedbackIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackIconText: {
    fontSize: 18,
    fontWeight: '600',
  },
  feedbackHeaderInfo: {
    flex: 1,
    gap: spacing[1],
  },
  feedbackMessage: {
    lineHeight: 22,
  },

  detailsContainer: {
    backgroundColor: colors.background.tertiary,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[2],
  },
  detailsLabel: {
    marginBottom: spacing[1],
    fontWeight: '600',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
  },
  detailBullet: {
    fontSize: 14,
    marginTop: 2,
  },
  detailText: {
    flex: 1,
    lineHeight: 18,
  },

  helpCard: {
    marginHorizontal: spacing[5],
    padding: spacing[4],
  },
  helpContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  helpIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.border.primary,
    color: colors.text.tertiary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 28,
  },
  helpText: {
    flex: 1,
    gap: spacing[1],
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
  ctaRow: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  ctaButtonHalf: {
    flex: 1,
  },
  ctaButtonSecondary: {
    backgroundColor: colors.background.card,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
};

export default C9_BrandFeedbackScreen;
