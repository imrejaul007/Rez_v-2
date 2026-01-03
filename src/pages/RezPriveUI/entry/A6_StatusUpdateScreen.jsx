/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A6 - Privé Access Revoked / Paused Screen
 * Purpose: Even removal must feel dignified
 * Tone: No shame, no anger, respect preserved
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  PriveHeader,
  Card,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type StatusType = 'paused' | 'revoked' | 'review';

interface A6_StatusUpdateScreenProps {
  status?: StatusType;
  reason?: string;
  onContinue?: () => void;
}

export const A6_StatusUpdateScreen: React.FC<A6_StatusUpdateScreenProps> = ({
  status = 'paused',
  reason = 'reduced engagement',
  onContinue,
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'paused':
        return {
          icon: '\u23F8',
          title: 'Privé Status Paused',
          message: `Your Privé access is currently paused due to ${reason}.`,
          subtext: 'You can regain access by continuing meaningful activity on ReZ.',
          ctaText: 'Continue with ReZ',
        };
      case 'revoked':
        return {
          icon: '\u2212',
          title: 'Privé Status Update',
          message: 'Your Privé membership has been updated.',
          subtext: 'You may re-enter Privé through continued meaningful engagement.',
          ctaText: 'Continue with ReZ',
        };
      case 'review':
        return {
          icon: '\u2022\u2022\u2022',
          title: 'Under Review',
          message: 'Your Privé access is being reviewed to ensure quality and fairness.',
          subtext: 'You can continue using ReZ while we complete the review.',
          ctaText: 'Continue with ReZ',
        };
      default:
        return {
          icon: '\u2022',
          title: 'Status Update',
          message: 'There has been an update to your Privé status.',
          subtext: 'Please continue with ReZ.',
          ctaText: 'Continue',
        };
    }
  };

  const config = getStatusConfig();

  return (
    <ScreenContainer scrollable={false}>
      <PriveHeader title="Privé Status" showBadge={false} />

      <div style={style={{...styles.container}>
        <div style={style={{...styles.content}>
          {/* Status Icon */}
          <div style={style={{...styles.iconContainer}>
            <span variant="h2" color={colors.text.secondary}>
              {config.icon}
            </span>
          </div>

          {/* Title */}
          <span variant="h3" color={colors.text.primary} center style={style={{...styles.title}>
            {config.title}
          </span>

          {/* Message Card */}
          <Card variant="default" style={style={{...styles.messageCard}>
            <span variant="body" color={colors.text.primary} center>
              {config.message}
            </span>
          </Card>

          {/* Subtext */}
          <span variant="bodySmall" color={colors.text.secondary} center style={style={{...styles.subtext}>
            {config.subtext}
          </span>
        </div>

        {/* CTA */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title={config.ctaText}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.background.tertiary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  title: {
    marginBottom: spacing[6],
  },
  messageCard: {
    width: '100%',
    marginBottom: spacing[4],
  },
  subtext: {
    paddingHorizontal: spacing[4],
    lineHeight: 22,
  },
  ctaContainer: {
    paddingBottom: spacing[8],
  },
};

export default A6_StatusUpdateScreen;
