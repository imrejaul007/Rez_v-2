/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C5 - Campaign Status Tracker
 *
 * Purpose: Track campaign progress with clarity and calm
 * Shows:
 * - Visual status timeline (Submitted → Under Review → Approved → Rewarded)
 * - Current status with explanation
 * - Brand feedback (if any)
 * - Reward details
 * - Next steps
 */

import React, { useState } from 'react';
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

type CampaignStatus = 'submitted' | 'under_review' | 'needs_revision' | 'approved' | 'rewarded';

interface StatusStep {
  id: CampaignStatus;
  label: string;
  icon: string;
}

interface BrandFeedback {
  message: string;
  timestamp: string;
  type: 'approval' | 'revision' | 'info';
}

interface CampaignStatusData {
  campaignId: string;
  brandName: string;
  brandLogo: string;
  campaignTitle: string;
  currentStatus: CampaignStatus;
  submittedAt: string;
  reviewedAt?: string;
  approvedAt?: string;
  rewardedAt?: string;
  rewardAmount?: string;
  rewardType?: string;
  feedback?: BrandFeedback[];
  contentLink?: string;
  estimatedReviewTime: string;
}

const statusSteps: StatusStep[] = [
  { id: 'submitted', label: 'Submitted', icon: '◎' },
  { id: 'under_review', label: 'Under Review', icon: '◇' },
  { id: 'approved', label: 'Approved', icon: '✓' },
  { id: 'rewarded', label: 'Rewarded', icon: '✦' },
];

const defaultStatusData: CampaignStatusData = {
  campaignId: '1',
  brandName: 'The Grand Café',
  brandLogo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop',
  campaignTitle: 'Weekend Tasting Experience',
  currentStatus: 'under_review',
  submittedAt: 'Dec 18, 2025 at 2:30 PM',
  estimatedReviewTime: '24-48 hours',
  contentLink: 'https://instagram.com/p/example',
  feedback: [
    {
      message: 'Your submission has been received and is being reviewed by our team.',
      timestamp: 'Dec 18, 2025 at 2:35 PM',
      type: 'info',
    },
  ],
};

export const C5_CampaignStatusScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<OffersStackParamList, 'C5_CampaignStatus'>>();

  // In production, fetch status based on route.params.campaignId
  const [statusData, setStatusData] = useState<CampaignStatusData>(defaultStatusData);

  const getStatusIndex = (status: CampaignStatus): number => {
    if (status === 'needs_revision') return 1; // Same position as under_review
    return statusSteps.findIndex(s => s.id === status);
  };

  const currentIndex = getStatusIndex(statusData.currentStatus);

  const getStatusConfig = () => {
    switch (statusData.currentStatus) {
      case 'submitted':
        return {
          title: 'Submission Received',
          message: 'Your content has been submitted and is queued for review.',
          color: colors.status.info,
          showProgress: true,
        };
      case 'under_review':
        return {
          title: 'Under Review',
          message: 'Our team is reviewing your submission. This usually takes ' + statusData.estimatedReviewTime + '.',
          color: colors.status.warning,
          showProgress: true,
        };
      case 'needs_revision':
        return {
          title: 'Revision Needed',
          message: 'Your submission needs some adjustments. Please review the feedback below.',
          color: colors.status.warning,
          showProgress: false,
        };
      case 'approved':
        return {
          title: 'Approved',
          message: 'Great work! Your content has been approved. Rewards are being processed.',
          color: colors.status.success,
          showProgress: true,
        };
      case 'rewarded':
        return {
          title: 'Reward Credited',
          message: 'Your reward has been added to your wallet. Thank you for your authentic contribution!',
          color: colors.gold.primary,
          showProgress: false,
        };
      default:
        return {
          title: 'Status Unknown',
          message: 'Please check back later.',
          color: colors.text.tertiary,
          showProgress: false,
        };
    }
  };

  const config = getStatusConfig();

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title="Campaign Status"
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* CAMPAIGN INFO */}
        {/* ============================================ */}
        <div style={style={{...styles.campaignInfo}>
          <img src={{ uri: statusData.brandLogo }} style={style={{...styles.brandLogo} />
          <div style={style={{...styles.campaignDetails}>
            <span variant="body" color={colors.text.primary}>
              {statusData.campaignTitle}
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              {statusData.brandName}
            </span>
          </div>
        </div>

        {/* ============================================ */}
        {/* STATUS TIMELINE */}
        {/* ============================================ */}
        <div style={style={{...styles.timelineSection}>
          <div style={style={{...styles.timeline}>
            {statusSteps.map((step, index) => {
              const isCompleted = index < currentIndex;
              const isCurrent = index === currentIndex;
              const isPending = index > currentIndex;

              return (
                <div key={step.id} style={style={{...styles.timelineStep}>
                  {/* Connector Line */}
                  {index > 0 && (
                    <div style={[
                      style={{...styles.timelineConnector,
                      isCompleted && style={{...styles.timelineConnectorComplete,
                    ]} />
                  )}

                  {/* Step Circle */}
                  <div style={[
                    style={{...styles.stepCircle,
                    isCompleted && style={{...styles.stepCircleComplete,
                    isCurrent && style={{...styles.stepCircleCurrent,
                  ]}>
                    <span style={[
                      style={{...styles.stepIcon,
                      {
                        color: isCompleted || isCurrent
                          ? (isCurrent ? colors.gold.primary : '#FFFFFF')
                          : colors.text.tertiary
                      },
                    ]}>
                      {isCompleted ? '✓' : step.icon}
                    </span>
                  </div>

                  {/* Step Label */}
                  <Text
                    variant="caption"
                    color={isCurrent ? colors.gold.primary : (isCompleted ? colors.text.secondary : colors.text.tertiary)}
                    style={style={{...styles.stepLabel}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* CURRENT STATUS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <Card variant="goldGlow" style={style={{...styles.statusCard}>
            <div style={[style={{...styles.statusIndicator, { backgroundColor: config.color }]} />
            <div style={style={{...styles.statusContent}>
              <span variant="h3" color={colors.text.primary}>
                {config.title}
              </span>
              <span variant="body" color={colors.text.secondary} style={style={{...styles.statusMessage}>
                {config.message}
              </span>

              {config.showProgress && statusData.currentStatus === 'under_review' && (
                <div style={style={{...styles.progressContainer}>
                  <div style={style={{...styles.progressBar}>
                    <div style={[style={{...styles.progressFill, { width: '50%' }]} />
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>
                    Review in progress
                  </span>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* ============================================ */}
        {/* REWARD SECTION (if rewarded) */}
        {/* ============================================ */}
        {statusData.currentStatus === 'rewarded' && statusData.rewardAmount && (
          <div style={style={{...styles.section}>
            <Card variant="goldGlow" style={style={{...styles.rewardCard}>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.rewardLabel}>
                REWARD EARNED
              </span>
              <span variant="h2" gold style={style={{...styles.rewardAmount}>
                {statusData.rewardAmount}
              </span>
              {statusData.rewardType && (
                <span variant="bodySmall" color={colors.text.secondary}>
                  {statusData.rewardType}
                </span>
              )}
            </Card>
          </div>
        )}

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* BRAND FEEDBACK */}
        {/* ============================================ */}
        {statusData.feedback && statusData.feedback.length > 0 && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Updates
            </span>

            {statusData.feedback.map((item, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.feedbackItem,
                  item.type === 'revision' && style={{...styles.feedbackItemRevision,
                  item.type === 'approval' && style={{...styles.feedbackItemApproval,
                ]}
              >
                <div style={style={{...styles.feedbackIcon}>
                  <span style={[
                    style={{...styles.feedbackIconText,
                    { color: item.type === 'revision' ? colors.status.warning :
                             item.type === 'approval' ? colors.status.success :
                             colors.text.tertiary }
                  ]}>
                    {item.type === 'revision' ? '!' :
                     item.type === 'approval' ? '✓' : '◎'}
                  </span>
                </div>
                <div style={style={{...styles.feedbackContent}>
                  <span variant="bodySmall" color={colors.text.secondary}>
                    {item.message}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {item.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ============================================ */}
        {/* SUBMISSION DETAILS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Submission Details
          </span>

          <Card variant="default" style={style={{...styles.detailsCard}>
            <div style={style={{...styles.detailRow}>
              <span variant="bodySmall" color={colors.text.tertiary}>Submitted</span>
              <span variant="bodySmall" color={colors.text.secondary}>{statusData.submittedAt}</span>
            </div>
            {statusData.contentLink && (
              <div style={style={{...styles.detailRow}>
                <span variant="bodySmall" color={colors.text.tertiary}>Content Link</span>
                <span variant="bodySmall" gold numberOfLines={1} style={style={{...styles.linkText}>
                  {statusData.contentLink}
                </span>
              </div>
            )}
            {statusData.approvedAt && (
              <div style={style={{...styles.detailRow}>
                <span variant="bodySmall" color={colors.text.tertiary}>Approved</span>
                <span variant="bodySmall" color={colors.status.success}>{statusData.approvedAt}</span>
              </div>
            )}
            {statusData.rewardedAt && (
              <div style={style={{...styles.detailRow}>
                <span variant="bodySmall" color={colors.text.tertiary}>Rewarded</span>
                <span variant="bodySmall" color={colors.gold.primary}>{statusData.rewardedAt}</span>
              </div>
            )}
          </Card>
        </div>

        {/* ============================================ */}
        {/* HELP NOTE */}
        {/* ============================================ */}
        <Card variant="default" style={style={{...styles.helpCard}>
          <div style={style={{...styles.helpContent}>
            <span style={style={{...styles.helpIcon}>?</span>
            <span variant="caption" color={colors.text.tertiary}>
              Need help? Contact our Privé Concierge for assistance with your submission.
            </span>
          </div>
        </Card>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTONS */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        {statusData.currentStatus === 'needs_revision' ? (
          <div
            style={style={{...styles.ctaButton}
            onClick={() => navigate('/prive/C6_ContentSubmission', { campaignId: statusData.campaignId })}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.background.primary}>
              Revise Submission
            </span>
          </div>
        ) : statusData.currentStatus === 'rewarded' ? (
          <div
            style={style={{...styles.ctaButton}
            onClick={() => navigate('/prive/Profile', { screen: 'F10_Wallet' })}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.background.primary}>
              View Wallet
            </span>
          </div>
        ) : (
          <div
            style={style={{...styles.ctaButtonSecondary}
            onClick={() => navigate(-1)}
            onClick={() => {}}
          >
            <span variant="bodyLarge" color={colors.text.primary}>
              Back to Campaigns
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

  campaignInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[5],
    gap: spacing[4],
  },
  brandLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.border.goldMuted,
  },
  campaignDetails: {
    flex: 1,
    gap: spacing[1],
  },

  timelineSection: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
  },
  timeline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  timelineStep: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  timelineConnector: {
    position: 'absolute',
    top: 16,
    left: -50,
    right: 50,
    height: 2,
    backgroundColor: colors.border.primary,
    zIndex: -1,
  },
  timelineConnectorComplete: {
    backgroundColor: colors.gold.primary,
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.border.primary,
  },
  stepCircleComplete: {
    backgroundColor: colors.gold.primary,
    borderColor: colors.gold.primary,
  },
  stepCircleCurrent: {
    backgroundColor: colors.transparent.gold10,
    borderColor: colors.gold.primary,
  },
  stepIcon: {
    fontSize: 16,
  },
  stepLabel: {
    marginTop: spacing[2],
    textAlign: 'center',
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

  statusCard: {
    flexDirection: 'row',
    padding: 0,
    overflow: 'hidden',
  },
  statusIndicator: {
    width: 4,
  },
  statusContent: {
    flex: 1,
    padding: spacing[5],
    gap: spacing[2],
  },
  statusMessage: {
    lineHeight: 22,
  },
  progressContainer: {
    marginTop: spacing[3],
    gap: spacing[2],
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.background.tertiary,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: borderRadius.full,
  },

  rewardCard: {
    alignItems: 'center',
    padding: spacing[6],
    gap: spacing[2],
  },
  rewardLabel: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  rewardAmount: {
    fontSize: 36,
  },

  feedbackItem: {
    flexDirection: 'row',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[2],
    gap: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  feedbackItemRevision: {
    borderColor: colors.status.warning + '40',
    backgroundColor: colors.status.warning + '10',
  },
  feedbackItemApproval: {
    borderColor: colors.status.success + '40',
    backgroundColor: colors.status.success + '10',
  },
  feedbackIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedbackIconText: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedbackContent: {
    flex: 1,
    gap: spacing[1],
  },

  detailsCard: {
    padding: spacing[4],
    gap: spacing[3],
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    maxWidth: 180,
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
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.border.primary,
    color: colors.text.tertiary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 24,
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
  ctaButtonSecondary: {
    backgroundColor: colors.background.card,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
};

export default C5_CampaignStatusScreen;
