/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Campaign Approval Pending Screen
 * Waiting for brand review
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface CampaignApprovalPendingScreenProps {
  campaignName?: string;
  brandName?: string;
  submittedDate?: string;
  estimatedReview?: string;
  submissionType?: string;
  onViewSubmission?: () => void;
  onContactBrand?: () => void;
}

export const CampaignApprovalPendingScreen: React.FC<CampaignApprovalPendingScreenProps> = ({
  campaignName = 'Winter Collection Launch',
  brandName = 'Artisan Watch Co',
  submittedDate = 'Dec 18, 2025',
  estimatedReview = '2-3 business days',
  submissionType = 'Instagram Post + Story',
  onViewSubmission,
  onContactBrand,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.iconContainer}>
            <div style={style={{...styles.iconPulse} />
            <div style={style={{...styles.iconInner}>
              <span style={style={{...styles.icon}>⏳</span>
            </div>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Under Review
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Your submission is being reviewed
          </span>
        </div>

        {/* Campaign Info */}
        <Card variant="goldGlow" style={style={{...styles.campaignCard}>
          <span variant="caption" color={colors.text.tertiary}>Campaign</span>
          <span variant="h3" color={colors.text.primary}>{campaignName}</span>
          <span variant="body" gold>{brandName}</span>
        </Card>

        {/* Status Details */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Submission Details
          </span>
          <Card variant="default" style={style={{...styles.detailsCard}>
            <div style={style={{...styles.detailRow}>
              <span variant="body" color={colors.text.tertiary}>Submitted</span>
              <span variant="body" color={colors.text.primary}>{submittedDate}</span>
            </div>
            <div style={style={{...styles.detailDivider} />
            <div style={style={{...styles.detailRow}>
              <span variant="body" color={colors.text.tertiary}>Content Type</span>
              <span variant="body" color={colors.text.primary}>{submissionType}</span>
            </div>
            <div style={style={{...styles.detailDivider} />
            <div style={style={{...styles.detailRow}>
              <span variant="body" color={colors.text.tertiary}>Est. Review Time</span>
              <span variant="body" gold>{estimatedReview}</span>
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Review Process
          </span>
          <Card variant="default" style={style={{...styles.timelineCard}>
            <div style={style={{...styles.timelineItem}>
              <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotComplete]} />
              <div style={style={{...styles.timelineContent}>
                <span variant="body" color={colors.text.primary}>Submitted</span>
                <span variant="caption" color={colors.text.tertiary}>Your content has been received</span>
              </div>
              <span style={style={{...styles.checkmark}>✓</span>
            </div>
            <div style={style={{...styles.timelineLine} />
            <div style={style={{...styles.timelineItem}>
              <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotActive]} />
              <div style={style={{...styles.timelineContent}>
                <span variant="body" color={colors.gold.primary}>Brand Review</span>
                <span variant="caption" color={colors.text.tertiary}>Being reviewed by {brandName}</span>
              </div>
            </div>
            <div style={[style={{...styles.timelineLine, style={{...styles.timelineLinePending]} />
            <div style={style={{...styles.timelineItem}>
              <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotPending]} />
              <div style={style={{...styles.timelineContent}>
                <span variant="body" color={colors.text.tertiary}>Decision</span>
                <span variant="caption" color={colors.text.tertiary}>Approval or feedback</span>
              </div>
            </div>
          </Card>
        </div>

        {/* What's Next */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What Happens Next
          </span>
          <Card variant="default" style={style={{...styles.nextCard}>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                If approved, your reward will be credited immediately
              </span>
            </div>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>↻</span>
              <span variant="body" color={colors.text.secondary}>
                If revision needed, you'll receive specific feedback
              </span>
            </div>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>🔔</span>
              <span variant="body" color={colors.text.secondary}>
                You'll be notified once review is complete
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="View My Submission"
            variant="gold"
            onClick={onViewSubmission}
          />
          <Button
            label="Message Brand"
            variant="outline"
            onClick={onContactBrand}
          />
          <Button
            label="Back to Campaigns"
            variant="ghost"
            onClick={() => navigate(-1)}
          />
        </div>

        <div style={style={{...styles.bottomPadding} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  iconPulse: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.gold.muted,
    opacity: 0.5,
  },
  iconInner: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.background.card,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 32,
  },
  campaignCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
    gap: spacing[1],
  },
  section: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  detailsCard: {
    gap: spacing[3],
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
  },
  timelineCard: {
    gap: spacing[2],
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
  },
  timelineDotComplete: {
    backgroundColor: '#22C55E',
    borderColor: '#22C55E',
  },
  timelineDotActive: {
    backgroundColor: colors.gold.primary,
    borderColor: colors.gold.primary,
  },
  timelineDotPending: {
    backgroundColor: 'transparent',
    borderColor: colors.text.tertiary,
  },
  timelineContent: {
    flex: 1,
    gap: spacing[1],
  },
  timelineLine: {
    width: 2,
    height: 24,
    backgroundColor: '#22C55E',
    marginLeft: 7,
  },
  timelineLinePending: {
    backgroundColor: colors.border.primary,
  },
  checkmark: {
    color: '#22C55E',
    fontSize: 16,
  },
  nextCard: {
    gap: spacing[3],
  },
  nextItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  nextIcon: {
    fontSize: 16,
    marginTop: 2,
  },
  actions: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
    gap: spacing[3],
  },
  bottomPadding: {
    height: spacing[8],
  },
};

export default CampaignApprovalPendingScreen;
