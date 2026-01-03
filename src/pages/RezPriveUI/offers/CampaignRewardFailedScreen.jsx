/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Campaign Reward Failed Screen
 * Why reward was not issued
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface FailureReason {
  id: string;
  issue: string;
  detail: string;
}

interface CampaignRewardFailedScreenProps {
  campaignName?: string;
  brandName?: string;
  expectedReward?: number;
  failureReasons?: FailureReason[];
  canResubmit?: boolean;
  resubmitDeadline?: string;
  onResubmit?: () => void;
  onAppeal?: () => void;
  onContactSupport?: () => void;
}

export const CampaignRewardFailedScreen: React.FC<CampaignRewardFailedScreenProps> = ({
  campaignName = 'Winter Collection Launch',
  brandName = 'Artisan Watch Co',
  expectedReward = 1500,
  failureReasons = [
    { id: '1', issue: 'Missing hashtag', detail: 'Required #ArtisanWatches hashtag not found in caption' },
    { id: '2', issue: 'Content duration', detail: 'Video was 22 seconds, minimum requirement is 30 seconds' },
  ],
  canResubmit = true,
  resubmitDeadline = 'Dec 25, 2025',
  onResubmit,
  onAppeal,
  onContactSupport,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.failIcon}>
            <span style={style={{...styles.failIconText}>✗</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Reward Not Issued
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Your submission did not meet requirements
          </span>
        </div>

        {/* Campaign Info */}
        <Card variant="default" style={style={{...styles.campaignCard}>
          <div style={style={{...styles.campaignHeader}>
            <div>
              <span variant="body" color={colors.text.primary}>{campaignName}</span>
              <span variant="caption" color={colors.text.tertiary}>{brandName}</span>
            </div>
            <div style={style={{...styles.rewardLost}>
              <span variant="caption" color={colors.text.tertiary}>Potential reward</span>
              <span variant="body" style={{ color: '#EF4444', textDecorationLine: 'line-through' }}>
                {expectedReward.toLocaleString()} coins
              </span>
            </div>
          </div>
        </Card>

        {/* Failure Reasons */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Issues Found
          </span>
          {failureReasons.map((reason) => (
            <Card key={reason.id} variant="default" style={style={{...styles.reasonCard}>
              <div style={style={{...styles.reasonHeader}>
                <div style={style={{...styles.reasonIcon}>
                  <span style={style={{...styles.reasonIconText}>!</span>
                </div>
                <span variant="body" color={colors.text.primary}>{reason.issue}</span>
              </div>
              <span variant="body" color={colors.text.secondary} style={style={{...styles.reasonDetail}>
                {reason.detail}
              </span>
            </Card>
          ))}
        </div>

        {/* Resubmit Option */}
        {canResubmit && (
          <div style={style={{...styles.section}>
            <Card variant="goldGlow" style={style={{...styles.resubmitCard}>
              <div style={style={{...styles.resubmitIcon}>
                <span style={style={{...styles.resubmitIconText}>↻</span>
              </div>
              <span variant="bodyLarge" color={colors.text.primary} center>
                You Can Resubmit
              </span>
              <span variant="body" color={colors.text.secondary} center>
                Fix the issues above and submit again before the deadline.
              </span>
              <div style={style={{...styles.deadlineBadge}>
                <span variant="caption" color={colors.text.tertiary}>Deadline: </span>
                <span variant="caption" gold>{resubmitDeadline}</span>
              </div>
            </Card>
          </div>
        )}

        {/* How to Fix */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            How to Fix & Resubmit
          </span>
          <Card variant="default" style={style={{...styles.stepsCard}>
            <div style={style={{...styles.stepItem}>
              <div style={style={{...styles.stepNumber}>
                <span style={style={{...styles.stepNumberText}>1</span>
              </div>
              <span variant="body" color={colors.text.secondary}>
                Review the issues listed above
              </span>
            </div>
            <div style={style={{...styles.stepItem}>
              <div style={style={{...styles.stepNumber}>
                <span style={style={{...styles.stepNumberText}>2</span>
              </div>
              <span variant="body" color={colors.text.secondary}>
                Update or re-create your content
              </span>
            </div>
            <div style={style={{...styles.stepItem}>
              <div style={style={{...styles.stepNumber}>
                <span style={style={{...styles.stepNumberText}>3</span>
              </div>
              <span variant="body" color={colors.text.secondary}>
                Resubmit through the campaign page
              </span>
            </div>
          </Card>
        </div>

        {/* Disagree Option */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.appealCard}>
            <span variant="body" color={colors.text.secondary}>
              Believe this decision is incorrect? You can submit an appeal for review.
            </span>
            <Button
              label="Submit Appeal"
              variant="ghost"
              size="sm"
              onClick={onAppeal || (() => navigate('/prive/Notifications', { screen: 'Appeal' } as never))}
            />
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          {canResubmit && (
            <Button
              label="Resubmit Content"
              variant="gold"
              onClick={onResubmit}
            />
          )}
          <Button
            label="Contact Brand"
            variant="outline"
            onClick={onContactSupport}
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
  failIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderWidth: 2,
    borderColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  failIconText: {
    fontSize: 36,
    color: '#EF4444',
  },
  campaignCard: {
    marginHorizontal: spacing[5],
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardLost: {
    alignItems: 'flex-end',
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
  reasonCard: {
    marginBottom: spacing[3],
    backgroundColor: 'rgba(239, 68, 68, 0.05)',
    borderColor: 'rgba(239, 68, 68, 0.2)',
    gap: spacing[2],
  },
  reasonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  reasonIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIconText: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 14,
  },
  reasonDetail: {
    marginLeft: 32,
  },
  resubmitCard: {
    alignItems: 'center',
    gap: spacing[2],
  },
  resubmitIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.primary,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resubmitIconText: {
    color: colors.gold.primary,
    fontSize: 24,
  },
  deadlineBadge: {
    flexDirection: 'row',
    marginTop: spacing[2],
  },
  stepsCard: {
    gap: spacing[3],
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: colors.background.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  appealCard: {
    backgroundColor: colors.background.tertiary,
    gap: spacing[3],
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

export default CampaignRewardFailedScreen;
