/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F9 - Privé Account Review / Warning Screen
 * Purpose: Protect ecosystem integrity without embarrassment
 * Tone: Calm, authoritative
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

interface F9_AccountReviewScreenProps {
  onViewGuidelines?: () => void;
  onContinue?: () => void;
  onBack?: () => void;
}

export const F9_AccountReviewScreen: React.FC<F9_AccountReviewScreenProps> = ({
  onViewGuidelines,
  onContinue,
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Account Status" showBack onBack={onBack} showBadge={false} />

      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.iconContainer}>
          <span variant="h3" color={colors.status.warning}>
            !
          </span>
        </div>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.title}>
          Privé Access Under Review
        </span>
      </div>

      {/* Message */}
      <Card variant="default" style={style={{...styles.messageCard}>
        <span variant="body" color={colors.text.primary} center>
          We've noticed a drop in engagement quality.
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.subMessage}>
          Privé access is under review.
        </span>
      </Card>

      <Divider variant="light" spacing={spacing[6]} />

      {/* What This Means */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What This Means
        </span>
        <Card variant="gold">
          <div style={style={{...styles.meaningItem}>
            <div style={style={{...styles.meaningIcon}>
              <span variant="bodySmall" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Your Privé benefits continue during review
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <div style={style={{...styles.meaningIcon}>
              <span variant="bodySmall" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Consistent engagement will resolve the review
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <div style={style={{...styles.meaningIcon}>
              <span variant="bodySmall" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              No immediate action required
            </span>
          </div>
        </Card>
      </div>

      {/* Reassurance */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Why We Review
        </span>
        <span variant="body" color={colors.text.secondary} style={style={{...styles.reassuranceText}>
          Privé maintains its value by ensuring quality engagement. This review helps us support members who create meaningful impact.
        </span>
      </div>

      {/* CTAs */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="View Guidelines"
          onClick={onViewGuidelines || (() => {})}
          variant="secondary"
        />
        <Button
          title="Continue with ReZ"
          onClick={onContinue || (() => {})}
          variant="ghost"
          style={style={{...styles.secondaryButton}
        />
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        This is not a penalty. It's how we ensure Privé quality.
      </span>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    alignItems: 'center',
    marginTop: spacing[6],
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.status.warning,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  title: {
    marginBottom: spacing[4],
  },
  messageCard: {
    marginBottom: spacing[2],
  },
  subMessage: {
    marginTop: spacing[2],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  meaningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  meaningIcon: {
    width: 20,
    marginRight: spacing[2],
    marginTop: spacing[1],
  },
  reassuranceText: {
    lineHeight: 24,
  },
  ctaContainer: {
    marginTop: spacing[8],
  },
  secondaryButton: {
    marginTop: spacing[2],
  },
  note: {
    marginTop: spacing[4],
    paddingHorizontal: spacing[4],
  },
};

export default F9_AccountReviewScreen;
