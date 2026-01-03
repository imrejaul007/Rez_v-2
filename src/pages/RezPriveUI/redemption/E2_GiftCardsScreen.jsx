/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E2 - Privé Gift Cards Screen (Luxury Selection)
 * Purpose: Make gift cards feel like privileges, not vouchers
 * UI: No clutter, curated brands only
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface GiftCard {
  id: string;
  brandName: string;
  brandLogo?: string;
  startingValue: string;
  isPriveExclusive: boolean;
}

interface E2_GiftCardsScreenProps {
  giftCards?: GiftCard[];
  onSelectCard?: (id: string) => void;
  onBack?: () => void;
}

export const E2_GiftCardsScreen: React.FC<E2_GiftCardsScreenProps> = ({
  giftCards = [
    { id: '1', brandName: 'Taj Experiences', startingValue: '\u20B95,000', isPriveExclusive: true },
    { id: '2', brandName: 'Luxury Collection', startingValue: '\u20B93,000', isPriveExclusive: true },
    { id: '3', brandName: 'Fine Dining Club', startingValue: '\u20B92,500', isPriveExclusive: true },
    { id: '4', brandName: 'Premium Retail', startingValue: '\u20B92,000', isPriveExclusive: false },
    { id: '5', brandName: 'Wellness Spa', startingValue: '\u20B91,500', isPriveExclusive: true },
  ],
  onSelectCard,
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Gift Cards" showBack onBack={onBack} />

      {/* Rule Note */}
      <Card variant="gold" style={style={{...styles.ruleCard}>
        <div style={style={{...styles.ruleContent}>
          <div style={style={{...styles.ruleIcon}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
          </div>
          <div style={style={{...styles.ruleText}>
            <span variant="bodySmall" color={colors.text.primary}>
              Redeemable with Privé Rewards
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              Cannot be purchased with ReZ Coin or Brand Coin
            </span>
          </div>
        </div>
      </Card>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Gift Cards Grid */}
      <div style={style={{...styles.cardsContainer}>
        {giftCards.map((card) => (
          <div
            key={card.id}
            style={style={{...styles.giftCard}
            onClick={() => onSelectCard?.(card.id)}
            onClick={() => {}}
          >
            {/* Brand Logo */}
            <div style={style={{...styles.logoContainer}>
              {card.brandLogo ? (
                <img src={{ uri: card.brandLogo }} style={style={{...styles.brandLogo} />
              ) : (
                <div style={style={{...styles.brandLogoPlaceholder}>
                  <span variant="h2" color={colors.text.secondary}>
                    {card.brandName.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Brand Info */}
            <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.brandName}>
              {card.brandName}
            </span>
            <span variant="bodySmall" color={colors.text.secondary}>
              Starting from
            </span>
            <span variant="h4" gold>
              {card.startingValue}
            </span>

            {/* Exclusive Badge */}
            {card.isPriveExclusive && (
              <div style={style={{...styles.exclusiveBadge}>
                <span variant="caption" gold>
                  Privé Exclusive
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </ScreenContainer>
  );
};

const styles = {
  ruleCard: {
    marginTop: spacing[4],
  },
  ruleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ruleIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  ruleText: {
    flex: 1,
    gap: spacing[1],
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  giftCard: {
    width: '47%',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  logoContainer: {
    marginBottom: spacing[3],
  },
  brandLogo: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
  },
  brandLogoPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    marginBottom: spacing[2],
  },
  exclusiveBadge: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
};

export default E2_GiftCardsScreen;
