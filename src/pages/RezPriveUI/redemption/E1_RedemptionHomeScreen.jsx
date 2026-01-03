/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E1 - Privé Redemption Home
 * Complete redemption hub with wallet, categories, featured rewards
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// Wallet data
const walletData = {
  rezCoins: 12450,
  priveCoins: 3200,
  brandedCoins: 850,
  totalValue: 16500,
  expiringCoins: 500,
  expiringDays: 14,
};

// Categories
const categories = [
  { id: 'gift-cards', name: 'Gift Cards', icon: '🎁', count: 24, screen: 'E2_GiftCards' },
  { id: 'experiences', name: 'Experiences', icon: '✨', count: 18, screen: 'E4_Experiences' },
  { id: 'privileges', name: 'Partner Access', icon: '🔑', count: 12, screen: 'E6_PartnerPrivileges' },
  { id: 'history', name: 'History', icon: '📋', count: null, screen: 'E8_RedemptionHistory' },
];

// Featured redemptions
const featuredRedemptions = [
  {
    id: 'fr1',
    type: 'experience',
    title: 'Spa Day Package',
    brand: 'Four Seasons',
    value: 8000,
    coins: 6400,
    discount: 20,
    image: '🧖',
    isPriveExclusive: true,
    expiresIn: 5,
  },
  {
    id: 'fr2',
    type: 'giftcard',
    title: 'Dining Voucher',
    brand: 'The Oberoi',
    value: 5000,
    coins: 4500,
    discount: 10,
    image: '🍽️',
    isPriveExclusive: false,
    expiresIn: 10,
  },
  {
    id: 'fr3',
    type: 'privilege',
    title: 'Airport Lounge',
    brand: 'Priority Pass',
    value: 3500,
    coins: 2800,
    discount: 20,
    image: '✈️',
    isPriveExclusive: true,
    expiresIn: 30,
  },
];

// Popular gift cards
const popularGiftCards = [
  { id: 'gc1', brand: 'Amazon', value: 1000, coins: 950, logo: 'A' },
  { id: 'gc2', brand: 'Flipkart', value: 1000, coins: 920, logo: 'F' },
  { id: 'gc3', brand: 'Swiggy', value: 500, coins: 475, logo: 'S' },
  { id: 'gc4', brand: 'Zomato', value: 500, coins: 460, logo: 'Z' },
  { id: 'gc5', brand: 'BookMyShow', value: 500, coins: 480, logo: 'B' },
];

// Recent redemptions
const recentRedemptions = [
  { id: 'rr1', title: 'Starbucks ₹500', date: '2 days ago', status: 'completed', coins: 475 },
  { id: 'rr2', title: 'Spa Treatment', date: '1 week ago', status: 'completed', coins: 3200 },
  { id: 'rr3', title: 'Amazon ₹2000', date: '2 weeks ago', status: 'completed', coins: 1900 },
];

export const E1_RedemptionHomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryPress = (screen: string) => {
    navigate(screen);
  };

  const handleFeaturedPress = (item: typeof featuredRedemptions[0]) => {
    switch (item.type) {
      case 'experience':
        navigate('/prive/E5_ExperienceDetail', { experienceId: item.id };
        break;
      case 'giftcard':
        navigate('/prive/E3_GiftCardDetail', { giftCardId: item.id };
        break;
      case 'privilege':
        navigate('/prive/E6_PartnerPrivileges');
        break;
    }
  };

  const handleGiftCardPress = (giftCard: typeof popularGiftCards[0]) => {
    navigate('/prive/E3_GiftCardDetail', { giftCardId: giftCard.id };
  };

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div>
            <span variant="h2" style={style={{...styles.headerTitle}>Redeem</span>
            <span variant="caption" color={colors.text.tertiary}>
              Use your coins for exclusive rewards
            </span>
          </div>
          <div
            style={style={{...styles.historyBtn}
            onClick={() => navigate('/prive/E8_RedemptionHistory')}
          >
            <span style={style={{...styles.historyIcon}>📋</span>
          </div>
        </div>

        {/* Wallet Card */}
        <div style={style={{...styles.walletCard}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
            style={style={{...styles.walletGradient}
          >
            <div style={style={{...styles.walletHeader}>
              <span variant="label" color={colors.text.tertiary}>YOUR BALANCE</span>
              <div onClick={() => navigation.getParent()?.getParent()?.navigate('Home', { screen: 'B2_Wallet' })}>
                <span variant="caption" gold>View Wallet →</span>
              </div>
            </div>

            <div style={style={{...styles.walletBalance}>
              <span style={style={{...styles.totalCoins}>{walletData.totalValue.toLocaleString()}</span>
              <span variant="body" color={colors.text.tertiary}>total coins</span>
            </div>

            <div style={style={{...styles.coinBreakdown}>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: colors.gold.primary }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {walletData.rezCoins.toLocaleString()} ReZ
                </span>
              </div>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: '#B8860B' }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {walletData.priveCoins.toLocaleString()} Privé
                </span>
              </div>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: '#64B5F6' }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {walletData.brandedCoins.toLocaleString()} Brand
                </span>
              </div>
            </div>

            {walletData.expiringCoins > 0 && (
              <div style={style={{...styles.expiryWarning}>
                <span variant="caption" color="#FFC107">
                  ⚠️ {walletData.expiringCoins} coins expiring in {walletData.expiringDays} days
                </span>
              </div>
            )}
          </LinearGradient>
        </div>

        {/* Categories */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            CATEGORIES
          </span>
          <div style={style={{...styles.categoriesGrid}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                style={style={{...styles.categoryCard}
                onClick={() => handleCategoryPress(cat.screen)}
              >
                <div style={style={{...styles.categoryIcon}>
                  <span style={style={{...styles.categoryEmoji}>{cat.icon}</span>
                </div>
                <span variant="body" color={colors.text.primary}>{cat.name}</span>
                {cat.count && (
                  <span variant="caption" color={colors.text.tertiary}>{cat.count} items</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Redemptions */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              FEATURED REWARDS
            </span>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.featuredScroll}
          >
            {featuredRedemptions.map((item) => (
              <div
                key={item.id}
                style={[
                  style={{...styles.featuredCard,
                  item.isPriveExclusive && style={{...styles.featuredCardExclusive,
                ]}
                onClick={() => handleFeaturedPress(item)}
              >
                {item.isPriveExclusive && (
                  <div style={style={{...styles.exclusiveBadge}>
                    <span variant="caption" gold>✦ PRIVÉ</span>
                  </div>
                )}

                <div style={style={{...styles.featuredImageContainer}>
                  <span style={style={{...styles.featuredEmoji}>{item.image}</span>
                </div>

                <div style={style={{...styles.featuredInfo}>
                  <span variant="caption" color={colors.gold.primary}>{item.brand}</span>
                  <span variant="body" color={colors.text.primary}>{item.title}</span>

                  <div style={style={{...styles.featuredPricing}>
                    <div>
                      <span variant="bodyLarge" gold>{item.coins.toLocaleString()}</span>
                      <span variant="caption" color={colors.text.tertiary}>coins</span>
                    </div>
                    <div style={style={{...styles.featuredValue}>
                      <span variant="caption" color={colors.text.tertiary}>Worth</span>
                      <span variant="body" color={colors.text.secondary}>₹{item.value.toLocaleString()}</span>
                    </div>
                  </div>

                  {item.discount > 0 && (
                    <div style={style={{...styles.discountBadge}>
                      <span variant="caption" color="#4CAF50">{item.discount}% OFF</span>
                    </div>
                  )}
                </div>

                <div style={style={{...styles.featuredFooter}>
                  <span variant="caption" color={item.expiresIn <= 7 ? '#FF6B6B' : colors.text.tertiary}>
                    Expires in {item.expiresIn} days
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Gift Cards */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              POPULAR GIFT CARDS
            </span>
            <div onClick={() => navigate('/prive/E2_GiftCards')}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.giftCardsScroll}
          >
            {popularGiftCards.map((gc) => (
              <div
                key={gc.id}
                style={style={{...styles.giftCardCard}
                onClick={() => handleGiftCardPress(gc)}
              >
                <div style={style={{...styles.giftCardLogo}>
                  <span style={style={{...styles.giftCardLogoText}>{gc.logo}</span>
                </div>
                <span variant="body" color={colors.text.primary}>{gc.brand}</span>
                <span variant="caption" color={colors.text.tertiary}>₹{gc.value}</span>
                <div style={style={{...styles.giftCardCoins}>
                  <span variant="body" gold>{gc.coins}</span>
                  <span variant="caption" color={colors.text.tertiary}>coins</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Redeem */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            QUICK REDEEM
          </span>
          <div style={style={{...styles.quickRedeemGrid}>
            <div
              style={style={{...styles.quickRedeemCard}
              onClick={() => navigate('/prive/E2_GiftCards')}
            >
              <LinearGradient
                colors={['rgba(76, 175, 80, 0.15)', 'rgba(76, 175, 80, 0.05)']}
                style={style={{...styles.quickRedeemGradient}
              >
                <span style={style={{...styles.quickRedeemIcon}>🎁</span>
                <span variant="body" color={colors.text.primary}>₹500 Gift Card</span>
                <span variant="caption" color="#4CAF50">From 475 coins</span>
              </LinearGradient>
            </div>

            <div
              style={style={{...styles.quickRedeemCard}
              onClick={() => navigate('/prive/E4_Experiences')}
            >
              <LinearGradient
                colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
                style={style={{...styles.quickRedeemGradient}
              >
                <span style={style={{...styles.quickRedeemIcon}>☕</span>
                <span variant="body" color={colors.text.primary}>Coffee Treat</span>
                <span variant="caption" gold>From 200 coins</span>
              </LinearGradient>
            </div>
          </div>
        </div>

        {/* Recent Redemptions */}
        {recentRedemptions.length > 0 && (
          <div style={style={{...styles.section}>
            <div style={style={{...styles.sectionHeader}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                RECENT REDEMPTIONS
              </span>
              <div onClick={() => navigate('/prive/E8_RedemptionHistory')}>
                <span variant="caption" gold>View All →</span>
              </div>
            </div>
            <div style={style={{...styles.recentList}>
              {recentRedemptions.map((item) => (
                <div key={item.id} style={style={{...styles.recentItem}>
                  <div style={style={{...styles.recentInfo}>
                    <span variant="body" color={colors.text.primary}>{item.title}</span>
                    <span variant="caption" color={colors.text.tertiary}>{item.date}</span>
                  </div>
                  <div style={style={{...styles.recentRight}>
                    <span variant="body" color={colors.text.secondary}>-{item.coins}</span>
                    <div style={[
                      style={{...styles.statusBadge,
                      item.status === 'completed' && style={{...styles.statusCompleted,
                    ]}>
                      <span variant="caption" color={item.status === 'completed' ? '#4CAF50' : colors.text.tertiary}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Card */}
        <div style={style={{...styles.helpCard}>
          <div style={style={{...styles.helpIcon}>
            <span style={style={{...styles.helpEmoji}>💡</span>
          </div>
          <div style={style={{...styles.helpContent}>
            <span variant="body" color={colors.text.primary}>How Redemption Works</span>
            <span variant="caption" color={colors.text.tertiary}>
              Learn about coin values, expiry, and best ways to use your rewards
            </span>
          </div>
          <span variant="body" gold>→</span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.text.primary,
  },
  historyBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  historyIcon: {
    fontSize: 20,
  },

  // Wallet Card
  walletCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  walletGradient: {
    padding: spacing[5],
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  walletBalance: {
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  totalCoins: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.gold.primary,
  },
  coinBreakdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing[4],
  },
  coinType: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  coinDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  expiryWarning: {
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },

  // Section
  section: {
    marginTop: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },
  sectionLabel: {
    letterSpacing: 1,
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },

  // Categories
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  categoryCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[1],
  },
  categoryEmoji: {
    fontSize: 28,
  },

  // Featured
  featuredScroll: {
    paddingHorizontal: spacing[5],
  },
  featuredCard: {
    width: window.innerWidth * 0.65,
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    marginRight: spacing[3],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  featuredCardExclusive: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  exclusiveBadge: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    zIndex: 1,
  },
  featuredImageContainer: {
    height: 100,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredEmoji: {
    fontSize: 48,
  },
  featuredInfo: {
    padding: spacing[4],
    gap: spacing[1],
  },
  featuredPricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: spacing[2],
  },
  featuredValue: {
    alignItems: 'flex-end',
  },
  discountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    marginTop: spacing[2],
  },
  featuredFooter: {
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[4],
  },

  // Gift Cards
  giftCardsScroll: {
    paddingHorizontal: spacing[5],
  },
  giftCardCard: {
    width: 100,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    alignItems: 'center',
    gap: spacing[1],
    marginRight: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  giftCardLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[1],
  },
  giftCardLogoText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  giftCardCoins: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[1],
    marginTop: spacing[1],
  },

  // Quick Redeem
  quickRedeemGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  quickRedeemCard: {
    flex: 1,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  quickRedeemGradient: {
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
  },
  quickRedeemIcon: {
    fontSize: 32,
  },

  // Recent
  recentList: {
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  recentInfo: {
    gap: spacing[1],
  },
  recentRight: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  statusBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  statusCompleted: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
  },

  // Help Card
  helpCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    padding: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  helpIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helpEmoji: {
    fontSize: 22,
  },
  helpContent: {
    flex: 1,
    gap: spacing[1],
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default E1_RedemptionHomeScreen;
