/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X5 - Privé Offer Detail
 *
 * Purpose: Explain value without overwhelming.
 *
 * Content:
 * - Offer headline
 * - Reward % (highlighted)
 * - Eligibility
 * - Expiry
 * - Redemption method
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { ExploreStackParamList } from '../../navigation/types';

interface OfferData {
  id: string;
  brandName: string;
  title: string;
  description: string;
  rewardPercent: string;
  estimatedReward: string;
  eligibility: string[];
  expiry: string;
  redemptionMethod: string;
  terms: string[];
}

const defaultOfferData: OfferData = {
  id: '1',
  brandName: 'The Grand Café',
  title: 'Weekend Tasting Menu',
  description: 'Experience our signature 7-course tasting menu featuring seasonal ingredients and wine pairings curated by our sommelier.',
  rewardPercent: '35%',
  estimatedReward: 'Up to \u20B92,500',
  eligibility: [
    'Privé Signature tier or above',
    'Minimum spend \u20B95,000',
    'Valid for dine-in only',
  ],
  expiry: 'December 31, 2025',
  redemptionMethod: 'Show your Privé QR code at the restaurant. Rewards credited within 24 hours.',
  terms: [
    'Cannot be combined with other offers',
    'Reservation required 48 hours in advance',
    'Subject to availability',
  ],
};

export const X5_OfferDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<ExploreStackParamList, 'X5_OfferDetail'>>();
  const [isSaved, setIsSaved] = useState(false);

  const offer = defaultOfferData; // In production, fetch by route.params.offerId

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title={offer.brandName}
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <div style={style={{...styles.heroSection}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.12)', 'rgba(201, 169, 98, 0.04)', 'transparent']}
            style={style={{...styles.heroGradient}
          />

          {/* Offer Title */}
          <span variant="h2" color={colors.text.primary} style={style={{...styles.offerTitle}>
            {offer.title}
          </span>

          {/* Reward Highlight */}
          <div style={style={{...styles.rewardHighlight}>
            <span variant="h1" gold style={style={{...styles.rewardPercent}>
              {offer.rewardPercent}
            </span>
            <span variant="body" color={colors.text.secondary}>
              Privé Rewards
            </span>
          </div>

          {/* Estimated Reward */}
          <Card variant="gold" style={style={{...styles.estimatedCard}>
            <span variant="caption" color={colors.text.tertiary}>
              Estimated Reward
            </span>
            <span variant="h3" gold>
              {offer.estimatedReward}
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              Based on engagement & transaction
            </span>
          </Card>
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* ============================================ */}
        {/* DESCRIPTION */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
            {offer.description}
          </span>
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* ============================================ */}
        {/* ELIGIBILITY */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Eligibility
          </span>

          {offer.eligibility.map((item, index) => (
            <div key={index} style={style={{...styles.listItem}>
              <div style={style={{...styles.listDot} />
              <span variant="body" color={colors.text.secondary}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* ============================================ */}
        {/* EXPIRY */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Valid Until
          </span>
          <span variant="bodyLarge" color={colors.text.primary}>
            {offer.expiry}
          </span>
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* ============================================ */}
        {/* REDEMPTION METHOD */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            How to Redeem
          </span>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.redemptionText}>
            {offer.redemptionMethod}
          </span>
        </div>

        <Divider variant="light" spacing={spacing[6]} />

        {/* ============================================ */}
        {/* TERMS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Terms & Conditions
          </span>

          {offer.terms.map((term, index) => (
            <div key={index} style={style={{...styles.listItem}>
              <span variant="caption" color={colors.text.tertiary}>•</span>
              <span variant="caption" color={colors.text.tertiary}>
                {term}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Space */}
        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTONS */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.saveButton}
          onClick={() => setIsSaved(!isSaved)}
        >
          <span variant="body" color={isSaved ? colors.gold.primary : colors.text.secondary}>
            {isSaved ? '★ Saved' : '☆ Save'}
          </span>
        </div>

        <div
          style={style={{...styles.useButton}
          onClick={() => {}}
          onClick={() => navigate('/prive/Redemption', {
            screen: 'Payment',
            params: { offerId: offer.id, storeName: offer.brandName }
          })}
        >
          <span variant="bodyLarge" color={colors.background.primary}>
            Use Offer
          </span>
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  scrollContent: {
    paddingBottom: 120,
  },

  heroSection: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
    alignItems: 'center',
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  offerTitle: {
    textAlign: 'center',
    marginBottom: spacing[6],
  },
  rewardHighlight: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  rewardPercent: {
    fontSize: 56,
    lineHeight: 64,
  },
  estimatedCard: {
    width: '100%',
    alignItems: 'center',
    gap: spacing[1],
    paddingVertical: spacing[5],
  },

  section: {
    paddingHorizontal: spacing[5],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    lineHeight: 24,
  },
  redemptionText: {
    lineHeight: 22,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
    marginBottom: spacing[2],
  },
  listDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold.muted,
    marginTop: 8,
  },

  bottomSpace: {
    height: spacing[8],
  },

  ctaContainer: {
    position: 'absolute',
    bottom: floatingTabBarTotalHeight,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
    gap: spacing[3],
  },
  saveButton: {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[5],
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.card,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  useButton: {
    flex: 1,
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
};

export default X5_OfferDetailScreen;
