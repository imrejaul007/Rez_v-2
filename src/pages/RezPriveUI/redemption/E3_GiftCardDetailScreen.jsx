/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E3 - Gift Card Detail Screen
 * Purpose: Build confidence before redemption
 * UI: Brand overview, redemption options, clear value display
 */

import React, { useState } from 'react';
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

interface GiftCardDetail {
  brandName: string;
  brandLogo?: string;
  description: string;
  whereToUse: string[];
  valueOptions: string[];
  validity: string;
  terms?: string[];
}

interface E3_GiftCardDetailScreenProps {
  card?: GiftCardDetail;
  userBalance?: string;
  onRedeem?: (value: string) => void;
  onBack?: () => void;
}

export const E3_GiftCardDetailScreen: React.FC<E3_GiftCardDetailScreenProps> = ({
  card = {
    brandName: 'Taj Experiences',
    description: 'Indulge in world-class hospitality with Taj gift cards. Valid across all Taj properties for dining, stays, and spa experiences.',
    whereToUse: ['All Taj Hotels', 'Taj Restaurants', 'Jiva Spa'],
    valueOptions: ['\u20B92,500', '\u20B95,000', '\u20B910,000', '\u20B925,000'],
    validity: '12 months from purchase',
  },
  userBalance = '\u20B912,450',
  onRedeem,
  onBack,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <ScreenContainer>
      <PriveHeader showBack onBack={onBack} showBadge={false} />

      {/* Brand Header */}
      <div style={style={{...styles.brandHeader}>
        {card.brandLogo ? (
          <img src={{ uri: card.brandLogo }} style={style={{...styles.brandLogo} />
        ) : (
          <div style={style={{...styles.brandLogoPlaceholder}>
            <span variant="h2" color={colors.text.secondary}>
              {card.brandName.charAt(0)}
            </span>
          </div>
        )}
        <span variant="h3" color={colors.text.primary} style={style={{...styles.brandName}>
          {card.brandName}
        </span>
      </div>

      {/* Brand Overview */}
      <Card variant="default" style={style={{...styles.overviewCard}>
        <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
          {card.description}
        </span>
      </Card>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Where to Use */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Where to Use
        </span>
        <div style={style={{...styles.locationTags}>
          {card.whereToUse.map((location, index) => (
            <div key={index} style={style={{...styles.locationTag}>
              <span variant="bodySmall" color={colors.text.primary}>
                {location}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Value Options */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Select Value
        </span>
        <div style={style={{...styles.valueOptions}>
          {card.valueOptions.map((value) => (
            <div
              key={value}
              style={[
                style={{...styles.valueOption,
                selectedValue === value && style={{...styles.valueOptionSelected,
              ]}
              onClick={() => setSelectedValue(value)}
            >
              <Text
                variant="bodyLarge"
                color={selectedValue === value ? colors.gold.primary : colors.text.primary}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Validity */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Validity
        </span>
        <span variant="body" color={colors.text.secondary}>
          {card.validity}
        </span>
      </div>

      {/* Terms (Collapsed) */}
      <div
        style={style={{...styles.termsHeader}
        onClick={() => setShowTerms(!showTerms)}
      >
        <span variant="bodySmall" color={colors.text.tertiary}>
          Terms & Conditions
        </span>
        <span variant="bodySmall" color={colors.text.tertiary}>
          {showTerms ? '\u2212' : '+'}
        </span>
      </div>

      {showTerms && (
        <Card variant="default" style={style={{...styles.termsCard}>
          <span variant="caption" color={colors.text.tertiary}>
            • Non-refundable and non-transferable{'\n'}
            • Cannot be exchanged for cash{'\n'}
            • Valid only at participating locations{'\n'}
            • Subject to availability
          </span>
        </Card>
      )}

      {/* Requirement Display */}
      {selectedValue && (
        <Card variant="goldGlow" style={style={{...styles.requirementCard}>
          <div style={style={{...styles.requirementContent}>
            <div>
              <span variant="label" color={colors.text.secondary}>
                Required
              </span>
              <span variant="h3" gold>
                {selectedValue} Privé Rewards
              </span>
            </div>
            <div style={style={{...styles.balanceInfo}>
              <span variant="caption" color={colors.text.tertiary}>
                Your Balance
              </span>
              <span variant="body" color={colors.text.primary}>
                {userBalance}
              </span>
            </div>
          </div>
        </Card>
      )}

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Redeem Privé Rewards"
          onClick={() => selectedValue && onRedeem?.(selectedValue)}
          variant="primary"
          disabled={!selectedValue}
        />
      </div>
    </ScreenContainer>
  );
};

const styles = {
  brandHeader: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  brandLogo: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.xl,
    marginBottom: spacing[3],
  },
  brandLogoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  brandName: {},
  overviewCard: {},
  description: {
    lineHeight: 24,
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  locationTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  locationTag: {
    backgroundColor: colors.background.card,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  valueOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  valueOption: {
    width: '47%',
    backgroundColor: colors.background.card,
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  valueOptionSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: colors.transparent.gold10,
  },
  termsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[4],
    marginTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
  },
  termsCard: {
    marginTop: spacing[2],
  },
  requirementCard: {
    marginTop: spacing[6],
  },
  requirementContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceInfo: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  ctaContainer: {
    marginTop: spacing[6],
    paddingBottom: spacing[4],
  },
};

export default E3_GiftCardDetailScreen;
