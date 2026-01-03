/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G9 - Privé Exit Summary Screen
 * Purpose: If Privé access ends, dignity stays
 * Content: Reason (generic, calm), what remains, how to re-qualify
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

interface G9_ExitSummaryScreenProps {
  onContinue?: () => void;
  onBack?: () => void;
}

export const G9_ExitSummaryScreen: React.FC<G9_ExitSummaryScreenProps> = ({
  onContinue,
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Privé Summary" showBack onBack={onBack} showBadge={false} />

      {/* Header */}
      <div style={style={{...styles.header}>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.title}>
          Thank You for Being Part of Privé
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.subtitle}>
          Your Privé journey has contributed to the community.
        </span>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* What Happened */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Status Update
        </span>
        <Card variant="default">
          <span variant="body" color={colors.text.secondary}>
            Privé access reflects ongoing engagement quality. Your access has been updated based on recent activity patterns.
          </span>
        </Card>
      </div>

      {/* What Remains */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What Continues
        </span>
        <Card variant="gold">
          <div style={style={{...styles.remainsItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="body" color={colors.text.primary}>
              Full ReZ app access
            </span>
          </div>
          <div style={style={{...styles.remainsItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="body" color={colors.text.primary}>
              ReZ Coins balance preserved
            </span>
          </div>
          <div style={style={{...styles.remainsItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="body" color={colors.text.primary}>
              Standard rewards and offers
            </span>
          </div>
          <div style={style={{...styles.remainsItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="body" color={colors.text.primary}>
              Your review and content history
            </span>
          </div>
        </Card>
      </div>

      {/* How to Re-qualify */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Returning to Privé
        </span>
        <Card variant="default">
          <span variant="body" color={colors.text.secondary} style={style={{...styles.requalifyText}>
            You may re-enter Privé through continued meaningful engagement. Focus on:
          </span>
          <div style={style={{...styles.requalifyList}>
            <div style={style={{...styles.requalifyItem}>
              <span variant="bodySmall" color={colors.text.tertiary}>
                {'\u2022'}
              </span>
              <span variant="bodySmall" color={colors.text.secondary}>
                Consistent app engagement
              </span>
            </div>
            <div style={style={{...styles.requalifyItem}>
              <span variant="bodySmall" color={colors.text.tertiary}>
                {'\u2022'}
              </span>
              <span variant="bodySmall" color={colors.text.secondary}>
                Quality reviews and content
              </span>
            </div>
            <div style={style={{...styles.requalifyItem}>
              <span variant="bodySmall" color={colors.text.tertiary}>
                {'\u2022'}
              </span>
              <span variant="bodySmall" color={colors.text.secondary}>
                Genuine brand interactions
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Continue with ReZ"
          onClick={onContinue || (() => {})}
          variant="primary"
        />
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        We look forward to welcoming you back to Privé
      </span>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    marginTop: spacing[4],
  },
  title: {
    marginBottom: spacing[3],
  },
  subtitle: {
    paddingHorizontal: spacing[4],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  remainsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  requalifyText: {
    marginBottom: spacing[3],
    lineHeight: 24,
  },
  requalifyList: {
    gap: spacing[2],
  },
  requalifyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  ctaContainer: {
    marginTop: spacing[8],
  },
  note: {
    marginTop: spacing[4],
  },
};

export default G9_ExitSummaryScreen;
