/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C7 - Rejected / Feedback Screen
 * Purpose: Protect dignity, encourage improvement
 * Tone: No shame, constructive guidance
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type RejectionReason = 'low_engagement' | 'incomplete' | 'duplicate' | 'quality' | 'other';

interface C7_RejectionScreenProps {
  brandName?: string;
  reason?: RejectionReason;
  customReason?: string;
  onResubmit?: () => void;
  onViewTips?: () => void;
  onBack?: () => void;
}

export const C7_RejectionScreen: React.FC<C7_RejectionScreenProps> = ({
  brandName = 'Luxury Café',
  reason = 'quality',
  customReason,
  onResubmit,
  onViewTips,
  onBack,
}) => {
  const getReasonConfig = () => {
    switch (reason) {
      case 'low_engagement':
        return {
          title: 'Low Engagement',
          description: 'The content did not generate sufficient engagement to qualify for rewards.',
          tip: 'Try creating more engaging content that resonates with your audience.',
        };
      case 'incomplete':
        return {
          title: 'Incomplete Task',
          description: 'Some required tasks were not completed for this campaign.',
          tip: 'Review the campaign requirements and complete all required steps.',
        };
      case 'duplicate':
        return {
          title: 'Duplicate Content',
          description: 'Similar content was previously submitted for this campaign.',
          tip: 'Create original content that showcases a unique perspective.',
        };
      case 'quality':
        return {
          title: 'Quality Guidelines',
          description: 'The submission did not meet our content quality standards.',
          tip: 'Focus on clear visuals, authentic messaging, and genuine experience sharing.',
        };
      default:
        return {
          title: 'Submission Update',
          description: customReason || 'Your submission requires attention.',
          tip: 'Review the guidelines and try again.',
        };
    }
  };

  const config = getReasonConfig();

  return (
    <ScreenContainer>
      <PriveHeader title={brandName} showBack onBack={onBack} showBadge={false} />

      <div style={style={{...styles.container}>
        {/* Header Message */}
        <div style={style={{...styles.headerSection}>
          <div style={style={{...styles.iconContainer}>
            <span variant="h3" color={colors.status.warning}>
              !
            </span>
          </div>
          <span variant="body" color={colors.text.primary} center style={style={{...styles.headerText}>
            Your submission didn't meet campaign quality guidelines.
          </span>
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* Reason Card */}
        <div style={style={{...styles.reasonSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Reason
          </span>
          <Card variant="default">
            <div style={style={{...styles.reasonHeader}>
              <div style={style={{...styles.reasonDot} />
              <span variant="bodyLarge" color={colors.text.primary}>
                {config.title}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary} style={style={{...styles.reasonDescription}>
              {config.description}
            </span>
          </Card>
        </div>

        {/* Improvement Tip */}
        <div style={style={{...styles.tipSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            How to Improve
          </span>
          <Card variant="gold">
            <div style={style={{...styles.tipContent}>
              <div style={style={{...styles.tipIcon}>
                <span variant="bodySmall" gold>
                  {'\u2605'}
                </span>
              </div>
              <span variant="body" color={colors.text.primary} style={style={{...styles.tipText}>
                {config.tip}
              </span>
            </div>
          </Card>
        </div>

        {/* Note */}
        <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
          This feedback is meant to help you succeed. Your Privé status remains unchanged.
        </span>

        {/* CTAs */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title="Resubmit"
            onClick={onResubmit || (() => {})}
            variant="primary"
          />
          <Button
            title="View Tips"
            onClick={onViewTips || (() => {})}
            variant="ghost"
            style={style={{...styles.secondaryButton}
          />
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: spacing[6],
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.status.warning,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  headerText: {
    paddingHorizontal: spacing[4],
    lineHeight: 24,
  },
  reasonSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  reasonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  reasonDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.status.warning,
    marginRight: spacing[2],
  },
  reasonDescription: {
    paddingLeft: spacing[3],
    lineHeight: 22,
  },
  tipSection: {
    marginTop: spacing[6],
  },
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
    marginTop: spacing[1],
  },
  tipText: {
    flex: 1,
    lineHeight: 22,
  },
  note: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
  ctaContainer: {
    marginTop: spacing[8],
    paddingBottom: spacing[4],
  },
  secondaryButton: {
    marginTop: spacing[2],
  },
};

export default C7_RejectionScreen;
