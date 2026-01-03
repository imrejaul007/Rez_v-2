/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G8 - Privé Suspension / Review Screen
 * Purpose: Even discipline must feel respectful
 * Tone: No blame, no shaming
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

interface G8_SuspensionScreenProps {
  onContinue?: () => void;
  onBack?: () => void;
}

export const G8_SuspensionScreen: React.FC<G8_SuspensionScreenProps> = ({
  onContinue,
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Status Update" showBack onBack={onBack} showBadge={false} />

      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.iconContainer}>
          <span variant="h3" color={colors.text.secondary}>
            {'\u23F8'}
          </span>
        </div>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.title}>
          Activity Under Review
        </span>
      </div>

      {/* Message */}
      <Card variant="default" style={style={{...styles.messageCard}>
        <span variant="body" color={colors.text.primary} center>
          Your Privé activity is under review to ensure quality and fairness.
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
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Your ReZ account continues to work normally
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <div style={style={{...styles.meaningIcon}>
              <span variant="bodySmall" gold>
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Existing rewards remain available
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <div style={style={{...styles.meaningIcon}>
              <span variant="bodySmall" color={colors.text.tertiary}>
                {'\u23F3'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              New Privé offers are paused during review
            </span>
          </div>
        </Card>
      </div>

      {/* Timeline */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What Happens Next
        </span>
        <span variant="body" color={colors.text.secondary} style={style={{...styles.timelineText}>
          Reviews typically complete within 7-14 days. We'll notify you of the outcome via the notification center.
        </span>
      </div>

      {/* No Blame Note */}
      <Card variant="default" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="bodySmall" color={colors.text.tertiary}>
              {'\u2022'}
            </span>
          </div>
          <span variant="bodySmall" color={colors.text.tertiary}>
            This is a routine quality review, not a penalty. We conduct these to maintain Privé standards for everyone.
          </span>
        </div>
      </Card>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Continue with ReZ"
          onClick={onContinue || (() => {})}
          variant="secondary"
        />
      </div>
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
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  title: {
    marginBottom: spacing[4],
  },
  messageCard: {},
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  meaningItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  meaningIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  timelineText: {
    lineHeight: 24,
  },
  noteCard: {
    marginTop: spacing[6],
  },
  noteContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  noteIcon: {
    width: 20,
    marginRight: spacing[2],
    marginTop: spacing[1],
  },
  ctaContainer: {
    marginTop: spacing[6],
    paddingBottom: spacing[4],
  },
};

export default G8_SuspensionScreen;
