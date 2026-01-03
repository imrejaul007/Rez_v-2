/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F7 - Privé Downgrade / Exit Screen
 * Purpose: Even exit must feel respectful
 * Tone: No guilt, no pressure
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface F7_ExitScreenProps {
  reason?: string;
  onContinue?: () => void;
  onBack?: () => void;
}

export const F7_ExitScreen: React.FC<F7_ExitScreenProps> = ({
  reason = 'reduced engagement',
  onContinue,
  onBack,
}) => {
  return (
    <ScreenContainer scrollable={false}>
      <PriveHeader title="Status Update" showBack onBack={onBack} showBadge={false} />

      <div style={style={{...styles.container}>
        <div style={style={{...styles.content}>
          {/* Icon */}
          <div style={style={{...styles.iconContainer}>
            <span variant="h2" color={colors.text.secondary}>
              {'\u2212'}
            </span>
          </div>

          {/* Message */}
          <span variant="h3" color={colors.text.primary} center style={style={{...styles.title}>
            Privé Access Update
          </span>

          <Card variant="default" style={style={{...styles.messageCard}>
            <span variant="body" color={colors.text.primary} center>
              Privé access reflects ongoing impact.
            </span>
            <span variant="body" color={colors.text.secondary} center style={style={{...styles.subMessage}>
              You may continue enjoying ReZ benefits at any time.
            </span>
          </Card>

          {/* What Remains */}
          <div style={style={{...styles.remainsSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              What Continues
            </span>
            <Card variant="gold">
              <div style={style={{...styles.remainsItem}>
                <span variant="body" gold>
                  {'\u2713'}
                </span>
                <span variant="body" color={colors.text.secondary}>
                  Full ReZ app access
                </span>
              </div>
              <div style={style={{...styles.remainsItem}>
                <span variant="body" gold>
                  {'\u2713'}
                </span>
                <span variant="body" color={colors.text.secondary}>
                  ReZ Coins and rewards
                </span>
              </div>
              <div style={style={{...styles.remainsItem}>
                <span variant="body" gold>
                  {'\u2713'}
                </span>
                <span variant="body" color={colors.text.secondary}>
                  Standard offers and deals
                </span>
              </div>
            </Card>
          </div>

          {/* Re-qualify Note */}
          <span variant="bodySmall" color={colors.text.tertiary} center style={style={{...styles.requalifyNote}>
            You may re-enter Privé through continued meaningful engagement.
          </span>
        </div>

        {/* CTA */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title="Continue with ReZ"
            onClick={onContinue || (() => {})}
            variant="secondary"
          />
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingTop: spacing[8],
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing[6],
  },
  title: {
    marginBottom: spacing[4],
  },
  messageCard: {
    marginBottom: spacing[6],
  },
  subMessage: {
    marginTop: spacing[2],
  },
  remainsSection: {},
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
  requalifyNote: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[4],
    lineHeight: 22,
  },
  ctaContainer: {
    paddingBottom: spacing[8],
  },
};

export default F7_ExitScreen;
