/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E7 - Redemption Confirmation Screen
 * Purpose: Celebrate without noise
 * UI: Dark background, gold tick animation, calm success
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveBadge,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface RedemptionDetails {
  type: 'gift_card' | 'experience' | 'privilege';
  brandName: string;
  value?: string;
  description?: string;
}

interface E7_RedemptionConfirmationScreenProps {
  redemption?: RedemptionDetails;
  onViewDetails?: () => void;
  onReturn?: () => void;
}

export const E7_RedemptionConfirmationScreen: React.FC<E7_RedemptionConfirmationScreenProps> = ({
  redemption = {
    type: 'gift_card',
    brandName: 'Taj Experiences',
    value: '\u20B95,000',
    description: 'Gift card details have been sent to your email',
  },
  onViewDetails,
  onReturn,
}) => {
  return (
    <ScreenContainer scrollable={false}>
      <div style={style={{...styles.container}>
        {/* Success Animation Area */}
        <div style={style={{...styles.successArea}>
          {/* Glow Effects */}
          <div style={style={{...styles.glowOuter} />
          <div style={style={{...styles.glowInner} />

          {/* Success Icon */}
          <div style={style={{...styles.successIcon}>
            <span variant="h1" gold>
              {'\u2713'}
            </span>
          </div>

          {/* Success Message */}
          <span variant="h2" color={colors.text.primary} center style={style={{...styles.successTitle}>
            Privé reward unlocked
          </span>
          <span variant="body" color={colors.text.secondary} center style={style={{...styles.successSubtext}>
            Details have been shared with you.
          </span>
        </div>

        {/* Redemption Details Card */}
        <Card variant="goldGlow" style={style={{...styles.detailsCard}>
          <div style={style={{...styles.detailsContent}>
            <div style={style={{...styles.brandSection}>
              <div style={style={{...styles.brandIcon}>
                <span variant="bodyLarge" color={colors.text.secondary}>
                  {redemption.brandName.charAt(0)}
                </span>
              </div>
              <div style={style={{...styles.brandInfo}>
                <span variant="bodySmall" color={colors.text.tertiary}>
                  {redemption.type === 'gift_card' ? 'Gift Card' :
                   redemption.type === 'experience' ? 'Experience' : 'Privilege'}
                </span>
                <span variant="bodyLarge" color={colors.text.primary}>
                  {redemption.brandName}
                </span>
              </div>
            </div>

            {redemption.value && (
              <div style={style={{...styles.valueSection}>
                <span variant="h3" gold>
                  {redemption.value}
                </span>
              </div>
            )}
          </div>
        </Card>

        {/* CTAs */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title="View Details"
            onClick={onViewDetails || (() => {})}
            variant="primary"
          />
          <Button
            title="Return to Privé"
            onClick={onReturn || (() => {})}
            variant="ghost"
            style={style={{...styles.secondaryButton}
          />
        </div>

        {/* Badge */}
        <div style={style={{...styles.badgeContainer}>
          <PriveBadge size="sm" />
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
  },
  successArea: {
    alignItems: 'center',
    marginBottom: spacing[8],
    position: 'relative',
  },
  glowOuter: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.gold.glow,
    opacity: 0.3,
  },
  glowInner: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.transparent.gold20,
    opacity: 0.5,
  },
  successIcon: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
    zIndex: 1,
  },
  successTitle: {
    marginBottom: spacing[2],
  },
  successSubtext: {},
  detailsCard: {
    width: '100%',
    marginBottom: spacing[6],
  },
  detailsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  brandInfo: {
    gap: spacing[1],
  },
  valueSection: {},
  ctaContainer: {
    width: '100%',
  },
  secondaryButton: {
    marginTop: spacing[2],
  },
  badgeContainer: {
    position: 'absolute',
    bottom: spacing[8],
  },
};

export default E7_RedemptionConfirmationScreen;
