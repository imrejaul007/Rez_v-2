/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Content Appeal Status Screen
 * Appeal pending / approved / rejected
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

type AppealStatus = 'pending' | 'approved' | 'rejected';

interface ContentAppealStatusScreenProps {
  status?: AppealStatus;
  contentType?: string;
  appealDate?: string;
  decisionDate?: string;
  originalIssue?: string;
  decision?: string;
  nextSteps?: string[];
  onContactSupport?: () => void;
  onBack?: () => void;
}

const statusConfig: Record<AppealStatus, { icon: string; color: string; title: string; subtitle: string }> = {
  pending: {
    icon: '⏳',
    color: '#F59E0B',
    title: 'Appeal Under Review',
    subtitle: 'Our team is reviewing your appeal',
  },
  approved: {
    icon: '✓',
    color: '#22C55E',
    title: 'Appeal Approved',
    subtitle: 'Your content has been restored',
  },
  rejected: {
    icon: '✕',
    color: '#EF4444',
    title: 'Appeal Denied',
    subtitle: 'Original decision stands',
  },
};

export const ContentAppealStatusScreen: React.FC<ContentAppealStatusScreenProps> = ({
  status = 'pending',
  contentType = 'Instagram Post',
  appealDate = 'Dec 18, 2025',
  decisionDate,
  originalIssue = 'Guideline Violation - Misleading claims',
  decision,
  nextSteps = [],
  onContactSupport,
  onBack,
}) => {
  const navigate = useNavigate();
  const config = statusConfig[status];

  const defaultNextSteps: Record<AppealStatus, string[]> = {
    pending: [
      'Review typically takes 3-5 business days',
      'You\'ll receive a notification when decided',
      'No further action needed from you',
    ],
    approved: [
      'Your content is now visible again',
      'Any paused rewards have been restored',
      'This will not affect your standing',
    ],
    rejected: [
      'The original removal decision remains',
      'Review our guidelines to prevent future issues',
      'You may contact support for clarification',
    ],
  };

  const stepsToShow = nextSteps.length > 0 ? nextSteps : defaultNextSteps[status];

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={[style={{...styles.statusIcon, { borderColor: config.color, backgroundColor: config.color + '15' }]}>
            <span style={[style={{...styles.statusIconText, { color: config.color }]}>{config.icon}</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            {config.title}
          </span>
          <span variant="body" color={colors.text.secondary} center>
            {config.subtitle}
          </span>
        </div>

        {/* Appeal Details */}
        <Card variant="default" style={style={{...styles.detailsCard}>
          <div style={style={{...styles.detailRow}>
            <span variant="body" color={colors.text.tertiary}>Content Type</span>
            <span variant="body" color={colors.text.primary}>{contentType}</span>
          </div>
          <div style={style={{...styles.detailDivider} />
          <div style={style={{...styles.detailRow}>
            <span variant="body" color={colors.text.tertiary}>Appeal Submitted</span>
            <span variant="body" color={colors.text.primary}>{appealDate}</span>
          </div>
          {decisionDate && (
            <>
              <div style={style={{...styles.detailDivider} />
              <div style={style={{...styles.detailRow}>
                <span variant="body" color={colors.text.tertiary}>Decision Date</span>
                <span variant="body" color={colors.text.primary}>{decisionDate}</span>
              </div>
            </>
          )}
          <div style={style={{...styles.detailDivider} />
          <div style={style={{...styles.detailRow}>
            <span variant="body" color={colors.text.tertiary}>Status</span>
            <div style={[style={{...styles.statusBadge, { backgroundColor: config.color + '20' }]}>
              <span variant="caption" style={{ color: config.color }}>
                {status.toUpperCase()}
              </span>
            </div>
          </div>
        </Card>

        {/* Original Issue */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Original Issue
          </span>
          <Card variant="default" style={style={{...styles.issueCard}>
            <span variant="body" color={colors.text.secondary}>
              {originalIssue}
            </span>
          </Card>
        </div>

        {/* Decision (if made) */}
        {decision && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Decision Details
            </span>
            <Card
              variant="default"
              style={[
                style={{...styles.decisionCard,
                { borderColor: config.color + '40', backgroundColor: config.color + '08' }
              ]}
            >
              <span variant="body" color={colors.text.secondary}>
                {decision}
              </span>
            </Card>
          </div>
        )}

        {/* Timeline (for pending) */}
        {status === 'pending' && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Appeal Timeline
            </span>
            <Card variant="default" style={style={{...styles.timelineCard}>
              <div style={style={{...styles.timelineItem}>
                <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotComplete]} />
                <span variant="body" color={colors.text.primary}>Appeal Submitted</span>
                <span style={style={{...styles.checkmark}>✓</span>
              </div>
              <div style={style={{...styles.timelineLine} />
              <div style={style={{...styles.timelineItem}>
                <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotActive]} />
                <span variant="body" color={colors.gold.primary}>Under Review</span>
              </div>
              <div style={[style={{...styles.timelineLine, style={{...styles.timelineLinePending]} />
              <div style={style={{...styles.timelineItem}>
                <div style={[style={{...styles.timelineDot, style={{...styles.timelineDotPending]} />
                <span variant="body" color={colors.text.tertiary}>Decision</span>
              </div>
            </Card>
          </div>
        )}

        {/* Next Steps */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What's Next
          </span>
          <Card variant="default" style={style={{...styles.stepsCard}>
            {stepsToShow.map((step, index) => (
              <div key={index} style={style={{...styles.stepItem}>
                <div style={style={{...styles.stepNumber}>
                  <span style={style={{...styles.stepNumberText}>{index + 1}</span>
                </div>
                <span variant="body" color={colors.text.secondary} style={style={{...styles.stepText}>
                  {step}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Contact Support"
            variant="gold"
            onClick={onContactSupport || (() => navigate('/prive/Notifications', { screen: 'G4_Concierge' } as never))}
          />
          <Button
            label="Back to Content"
            variant="outline"
            onClick={onBack || (() => navigate(-1))}
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
  statusIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  statusIconText: {
    fontSize: 32,
  },
  detailsCard: {
    marginHorizontal: spacing[5],
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
    marginVertical: spacing[3],
  },
  statusBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: 4,
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
  issueCard: {
    backgroundColor: colors.background.tertiary,
  },
  decisionCard: {
    borderWidth: 1,
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
    width: 14,
    height: 14,
    borderRadius: 7,
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
  timelineLine: {
    width: 2,
    height: 20,
    backgroundColor: '#22C55E',
    marginLeft: 6,
  },
  timelineLinePending: {
    backgroundColor: colors.border.primary,
  },
  checkmark: {
    color: '#22C55E',
    fontSize: 14,
    marginLeft: 'auto',
  },
  stepsCard: {
    gap: spacing[3],
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: colors.background.primary,
    fontWeight: '700',
    fontSize: 12,
  },
  stepText: {
    flex: 1,
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

export default ContentAppealStatusScreen;
