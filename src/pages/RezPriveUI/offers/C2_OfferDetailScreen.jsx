/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C2 - Privé Offer Detail Screen
 * Purpose: Explain value + expectations clearly, without cheapening it
 * UI: Clean structure with reward highlight
 */

import React from 'react';
// React Native imports removed
import { useNavigate } from 'react-router-dom';
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface OfferDetail {
  brandName: string;
  brandLogo?: string;
  campaignName: string;
  rewardPercent: string;
  requirements: string[];
  rewardLogic: string;
  startDate: string;
  endDate: string;
  rewardCap?: string;
  terms?: string[];
}

interface C2_OfferDetailScreenProps {
  offer?: OfferDetail;
  onUnlock?: () => void;
  onBack?: () => void;
}

export const C2_OfferDetailScreen: React.FC<C2_OfferDetailScreenProps> = ({
  offer = {
    brandName: 'Luxury Café',
    campaignName: 'Weekend Dining Experience',
    rewardPercent: '40%',
    requirements: [
      'Visit store or shop online',
      'Share your experience',
      'Drive engagement (optional)',
    ],
    rewardLogic: 'Final rewards depend on engagement quality and verified transactions.',
    startDate: 'Dec 15, 2025',
    endDate: 'Dec 31, 2025',
    rewardCap: '\u20B92,000',
  },
  onUnlock,
  onBack,
}) => {
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (onUnlock) {
      onUnlock();
    } else {
      // Navigate to payment/redemption flow
      navigate('/prive/Redemption', {
        screen: 'Payment',
        params: { storeName: offer.brandName }
      };
    }
  };
  return (
    <ScreenContainer>
      <PriveHeader showBack onBack={onBack} showBadge={false} />

      {/* Header */}
      <div style={style={{...styles.header}>
        {offer.brandLogo ? (
          <img src={{ uri: offer.brandLogo }} style={style={{...styles.brandLogo} />
        ) : (
          <div style={style={{...styles.brandLogoPlaceholder}>
            <span variant="h3" color={colors.text.secondary}>
              {offer.brandName.charAt(0)}
            </span>
          </div>
        )}
        <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.brandName}>
          {offer.brandName}
        </span>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.campaignName}>
          {offer.campaignName}
        </span>
      </div>

      {/* Reward Highlight */}
      <Card variant="goldGlow" style={style={{...styles.rewardCard}>
        <span variant="label" color={colors.text.secondary} center>
          Earn up to
        </span>
        <span variant="h1" gold center style={style={{...styles.rewardPercent}>
          {offer.rewardPercent}
        </span>
        <span variant="label" color={colors.text.secondary} center>
          Privé Rewards
        </span>
        <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.rewardSubtext}>
          Based on engagement & conversions
        </span>
      </Card>

      <Divider variant="light" spacing={spacing[6]} />

      {/* What's Required */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What's Required
        </span>
        <Card variant="default">
          {offer.requirements.map((req, index) => (
            <div key={index} style={style={{...styles.requirementItem}>
              <div style={style={{...styles.checkIcon}>
                <span variant="caption" gold>
                  {'\u2713'}
                </span>
              </div>
              <span variant="body" color={colors.text.primary}>
                {req}
              </span>
            </div>
          ))}
        </Card>
      </div>

      {/* Reward Logic */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Reward Logic
        </span>
        <span variant="bodySmall" color={colors.text.secondary}>
          {offer.rewardLogic}
        </span>
      </div>

      {/* Campaign Validity */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Validity
        </span>
        <Card variant="default" padding="md">
          <div style={style={{...styles.validityRow}>
            <span variant="bodySmall" color={colors.text.secondary}>
              Start
            </span>
            <span variant="body" color={colors.text.primary}>
              {offer.startDate}
            </span>
          </div>
          <div style={style={{...styles.validityRow}>
            <span variant="bodySmall" color={colors.text.secondary}>
              End
            </span>
            <span variant="body" color={colors.text.primary}>
              {offer.endDate}
            </span>
          </div>
          {offer.rewardCap && (
            <div style={style={{...styles.validityRow}>
              <span variant="bodySmall" color={colors.text.secondary}>
                Max Reward
              </span>
              <span variant="body" gold>
                {offer.rewardCap}
              </span>
            </div>
          )}
        </Card>
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Unlock This Offer"
          onClick={handleUnlock}
          variant="primary"
        />
      </div>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  brandLogo: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
    marginBottom: spacing[3],
  },
  brandLogoPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  brandName: {
    marginBottom: spacing[2],
  },
  campaignName: {
    paddingHorizontal: spacing[4],
  },
  rewardCard: {
    paddingVertical: spacing[6],
  },
  rewardPercent: {
    marginVertical: spacing[2],
  },
  rewardSubtext: {
    marginTop: spacing[2],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  validityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  ctaContainer: {
    marginTop: spacing[8],
    paddingBottom: spacing[4],
  },
};

export default C2_OfferDetailScreen;
