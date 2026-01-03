/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F10 - Wallet Screen with 4-Mode Switcher
 *
 * Purpose: Unified wallet across all ReZ experiences
 *
 * 4 Modes:
 * 1. ReZ Rewards Near You - Light, green (#00C06A), savings-focused
 * 2. ReZ Mall - Neutral white/gray, brand-led, shopping utility
 * 3. Cash Store - Clean data-first, cashback tracking
 * 4. ReZ Privé - Dark, gold, luxury privilege vault
 *
 * Shared Coins:
 * - ReZ Coin (main currency)
 * - Branded Coin (partner rewards)
 * - Promo Coin (promotional rewards)
 * - Privé Coin (exclusive rewards)
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';

// Wallet Modes
type WalletMode = 'nearYou' | 'mall' | 'cashStore' | 'prive';

interface ModeConfig {
  id: WalletMode;
  name: string;
  shortName: string;
  icon: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  gradientColors: readonly [string, string, ...string[]];
  textColor: string;
  subtextColor: string;
}

const MODES: ModeConfig[] = [
  {
    id: 'nearYou',
    name: 'ReZ Rewards Near You',
    shortName: 'Near You',
    icon: '◎',
    primaryColor: '#00C06A',
    secondaryColor: '#00A85A',
    backgroundColor: '#F8FFF8',
    gradientColors: ['#00C06A', '#00A85A'],
    textColor: '#1A1A1A',
    subtextColor: '#666666',
  },
  {
    id: 'mall',
    name: 'ReZ Mall',
    shortName: 'Mall',
    icon: '◇',
    primaryColor: '#4A90D9',
    secondaryColor: '#3A7BC8',
    backgroundColor: '#FFFFFF',
    gradientColors: ['#F5F5F5', '#FFFFFF'],
    textColor: '#1A1A1A',
    subtextColor: '#888888',
  },
  {
    id: 'cashStore',
    name: 'Cash Store',
    shortName: 'Cash',
    icon: '◈',
    primaryColor: '#FF6B35',
    secondaryColor: '#E55A2B',
    backgroundColor: '#FFFAF8',
    gradientColors: ['#FF6B35', '#E55A2B'],
    textColor: '#1A1A1A',
    subtextColor: '#666666',
  },
  {
    id: 'prive',
    name: 'ReZ Privé',
    shortName: 'Privé',
    icon: '✦',
    primaryColor: colors.gold.primary,
    secondaryColor: colors.gold.dark,
    backgroundColor: colors.background.primary,
    gradientColors: [colors.gold.primary, colors.gold.dark],
    textColor: colors.text.primary,
    subtextColor: colors.text.tertiary,
  },
];

// Shared coin balances
interface CoinBalance {
  rezCoin: number;
  brandedCoin: number;
  promoCoin: number;
  priveCoin: number;
}

const coinBalances: CoinBalance = {
  rezCoin: 12450,
  brandedCoin: 3200,
  promoCoin: 850,
  priveCoin: 5600,
};

// Activity data for each mode
interface Activity {
  id: string;
  title: string;
  description: string;
  amount: string;
  isCredit: boolean;
  date: string;
}

const nearYouActivities: Activity[] = [
  { id: '1', title: 'Coffee House', description: 'Nearby reward earned', amount: '+120', isCredit: true, date: 'Today' },
  { id: '2', title: 'Local Diner', description: 'Savings bonus', amount: '+85', isCredit: true, date: 'Yesterday' },
  { id: '3', title: 'Redeemed at Cafe', description: 'Coffee purchase', amount: '-50', isCredit: false, date: '2 days ago' },
];

const mallActivities: Activity[] = [
  { id: '1', title: 'Fashion Brand', description: 'Shopping reward', amount: '+340', isCredit: true, date: 'Today' },
  { id: '2', title: 'Electronics Store', description: 'Purchase bonus', amount: '+520', isCredit: true, date: 'Yesterday' },
  { id: '3', title: 'Beauty Counter', description: 'Brand reward', amount: '+180', isCredit: true, date: '3 days ago' },
];

const cashStoreActivities: Activity[] = [
  { id: '1', title: 'Online Purchase', description: 'Cashback pending', amount: '+₹245', isCredit: true, date: 'Processing' },
  { id: '2', title: 'Grocery Store', description: 'Cashback confirmed', amount: '+₹120', isCredit: true, date: 'Yesterday' },
  { id: '3', title: 'Fuel Station', description: 'Cashback credited', amount: '+₹85', isCredit: true, date: '2 days ago' },
];

const priveActivities: Activity[] = [
  { id: '1', title: 'The Grand Café', description: 'Privé privilege earned', amount: '+350', isCredit: true, date: 'Today' },
  { id: '2', title: 'Luxury Spa', description: 'Exclusive reward', amount: '+520', isCredit: true, date: 'Yesterday' },
  { id: '3', title: 'Fine Dining', description: 'Signature bonus', amount: '+280', isCredit: true, date: '3 days ago' },
];

export const F10_WalletScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<WalletMode>('prive');

  const currentMode = MODES.find(m => m.id === activeMode) || MODES[3];
  const isPriveMode = activeMode === 'prive';

  const getActivities = () => {
    switch (activeMode) {
      case 'nearYou': return nearYouActivities;
      case 'mall': return mallActivities;
      case 'cashStore': return cashStoreActivities;
      case 'prive': return priveActivities;
      default: return priveActivities;
    }
  };

  return (
    <div style={[
      style={{...styles.container,
      { backgroundColor: isPriveMode ? colors.background.primary : currentMode.backgroundColor }
    ]}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div
          style={[style={{...styles.backButton, !isPriveMode && style={{...styles.backButtonLight]}
          onClick={() => navigate(-1)}
        >
          <span style={[style={{...styles.backButtonText, { color: isPriveMode ? colors.text.primary : '#1A1A1A' }]}>
            ←
          </span>
        </div>

        <div style={style={{...styles.headerCenter}>
          <span style={[style={{...styles.headerTitle, { color: isPriveMode ? colors.text.primary : '#1A1A1A' }]}>
            My Wallet
          </span>
        </div>

        <div style={style={{...styles.headerRight} />
      </div>

      {/* Mode Switcher */}
      <div style={[style={{...styles.modeSwitcher, !isPriveMode && style={{...styles.modeSwitcherLight]}>
        {MODES.map((mode) => (
          <div
            key={mode.id}
            style={[
              style={{...styles.modeTab,
              activeMode === mode.id && [
                style={{...styles.modeTabActive,
                { backgroundColor: mode.primaryColor },
              ],
            ]}
            onClick={() => setActiveMode(mode.id)}
          >
            <span style={[
              style={{...styles.modeTabIcon,
              { color: activeMode === mode.id ? '#FFFFFF' : (isPriveMode ? colors.text.tertiary : '#888888') },
            ]}>
              {mode.icon}
            </span>
            <span style={[
              style={{...styles.modeTabText,
              { color: activeMode === mode.id ? '#FFFFFF' : (isPriveMode ? colors.text.tertiary : '#888888') },
            ]}>
              {mode.shortName}
            </span>
          </div>
        ))}
      </div>

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* Main Balance Card */}
        <LinearGradient
          colors={currentMode.gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={style={{...styles.balanceCard}
        >
          <span style={style={{...styles.balanceLabel}>{currentMode.name}</span>
          <span style={style={{...styles.balanceAmount}>
            {activeMode === 'cashStore' ? '₹' : ''}{coinBalances.rezCoin.toLocaleString()}
          </span>
          <span style={style={{...styles.balanceSubtext}>
            {activeMode === 'cashStore' ? 'Total Cashback Earned' : 'ReZ Coins Available'}
          </span>
        </LinearGradient>

        {/* Coin Breakdown */}
        <div style={[style={{...styles.coinsSection, !isPriveMode && style={{...styles.coinsSectionLight]}>
          <span style={[style={{...styles.sectionLabel, { color: isPriveMode ? colors.text.tertiary : '#888888' }]}>
            Coin Balances
          </span>

          <div style={style={{...styles.coinsGrid}>
            <CoinCard
              name="ReZ Coin"
              balance={coinBalances.rezCoin}
              icon="◎"
              color={currentMode.primaryColor}
              isPriveMode={isPriveMode}
            />
            <CoinCard
              name="Branded"
              balance={coinBalances.brandedCoin}
              icon="◇"
              color="#4A90D9"
              isPriveMode={isPriveMode}
            />
            <CoinCard
              name="Promo"
              balance={coinBalances.promoCoin}
              icon="✧"
              color="#FF6B35"
              isPriveMode={isPriveMode}
            />
            <CoinCard
              name="Privé"
              balance={coinBalances.priveCoin}
              icon="✦"
              color={colors.gold.primary}
              isPriveMode={isPriveMode}
            />
          </div>
        </div>

        {/* Mode-Specific Content */}
        {activeMode === 'nearYou' && <NearYouContent mode={currentMode} />}
        {activeMode === 'mall' && <MallContent mode={currentMode} />}
        {activeMode === 'cashStore' && <CashStoreContent mode={currentMode} />}
        {activeMode === 'prive' && <PriveContent mode={currentMode} />}

        {/* Recent Activity */}
        <div style={[style={{...styles.activitySection, !isPriveMode && style={{...styles.activitySectionLight]}>
          <div style={style={{...styles.activityHeader}>
            <span style={[style={{...styles.sectionLabel, { color: isPriveMode ? colors.text.tertiary : '#888888' }]}>
              Recent Activity
            </span>
            <div>
              <span style={{ color: currentMode.primaryColor, fontSize: 13 }}>View All →</span>
            </div>
          </div>

          {getActivities().map((activity) => (
            <div
              key={activity.id}
              style={[style={{...styles.activityItem, !isPriveMode && style={{...styles.activityItemLight]}
            >
              <div style={style={{...styles.activityInfo}>
                <span style={[style={{...styles.activityTitle, { color: isPriveMode ? colors.text.primary : '#1A1A1A' }]}>
                  {activity.title}
                </span>
                <span style={[style={{...styles.activityDesc, { color: isPriveMode ? colors.text.tertiary : '#888888' }]}>
                  {activity.description}
                </span>
              </div>
              <div style={style={{...styles.activityRight}>
                <span style={[
                  style={{...styles.activityAmount,
                  { color: activity.isCredit ? currentMode.primaryColor : '#FF4444' }
                ]}>
                  {activity.amount}
                </span>
                <span style={[style={{...styles.activityDate, { color: isPriveMode ? colors.text.tertiary : '#888888' }]}>
                  {activity.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={style={{...styles.bottomPadding} />
      </div>
    </div>
  );
};

// Coin Card Component
interface CoinCardProps {
  name: string;
  balance: number;
  icon: string;
  color: string;
  isPriveMode: boolean;
}

const CoinCard: React.FC<CoinCardProps> = ({ name, balance, icon, color, isPriveMode }) => (
  <div style={[style={{...styles.coinCard, !isPriveMode && style={{...styles.coinCardLight]}>
    <div style={[style={{...styles.coinIcon, { backgroundColor: color + '20', borderColor: color + '40' }]}>
      <span style={[style={{...styles.coinIconText, { color }]}>{icon}</span>
    </div>
    <span style={[style={{...styles.coinBalance, { color: isPriveMode ? colors.text.primary : '#1A1A1A' }]}>
      {balance.toLocaleString()}
    </span>
    <span style={[style={{...styles.coinName, { color: isPriveMode ? colors.text.tertiary : '#888888' }]}>
      {name}
    </span>
  </div>
);

// Mode-Specific Content Components

// Mode 1: Near You
const NearYouContent: React.FC<{ mode: ModeConfig }> = ({ mode }) => (
  <div style={[style={{...styles.modeContent, style={{...styles.modeContentLight]}>
    <span style={[style={{...styles.sectionLabel, { color: '#888888' }]}>Savings Snapshot</span>

    <div style={style={{...styles.savingsCard}>
      <div style={style={{...styles.savingsItem}>
        <span style={[style={{...styles.savingsIcon, { color: mode.primaryColor }]}>◎</span>
        <div style={style={{...styles.savingsInfo}>
          <span style={style={{...styles.savingsTitle}>This Month</span>
          <span style={[style={{...styles.savingsValue, { color: mode.primaryColor }]}>₹2,450 saved</span>
        </div>
      </div>
      <div style={style={{...styles.savingsDivider} />
      <div style={style={{...styles.savingsItem}>
        <span style={[style={{...styles.savingsIcon, { color: mode.primaryColor }]}>◈</span>
        <div style={style={{...styles.savingsInfo}>
          <span style={style={{...styles.savingsTitle}>Nearby Stores</span>
          <span style={[style={{...styles.savingsValue, { color: mode.primaryColor }]}>12 with rewards</span>
        </div>
      </div>
    </div>

    <div style={[style={{...styles.ctaButton, { backgroundColor: mode.primaryColor }]}>
      <span style={style={{...styles.ctaButtonText}>Find Rewards Near Me</span>
    </div>
  </div>
);

// Mode 2: Mall
const MallContent: React.FC<{ mode: ModeConfig }> = ({ mode }) => (
  <div style={[style={{...styles.modeContent, style={{...styles.modeContentLight]}>
    <span style={[style={{...styles.sectionLabel, { color: '#888888' }]}>Smart Suggestions</span>

    <div style={style={{...styles.suggestionsContainer}>
      <div style={[style={{...styles.suggestionCard, { borderColor: mode.primaryColor + '40' }]}>
        <span style={[style={{...styles.suggestionIcon, { color: mode.primaryColor }]}>◇</span>
        <span style={style={{...styles.suggestionTitle}>Fashion Week Sale</span>
        <span style={style={{...styles.suggestionDesc}>3x rewards on branded items</span>
      </div>
      <div style={[style={{...styles.suggestionCard, { borderColor: mode.primaryColor + '40' }]}>
        <span style={[style={{...styles.suggestionIcon, { color: mode.primaryColor }]}>✧</span>
        <span style={style={{...styles.suggestionTitle}>Electronics Bonus</span>
        <span style={style={{...styles.suggestionDesc}>Extra 500 coins on ₹5K+</span>
      </div>
    </div>

    <div style={[style={{...styles.ctaButton, { backgroundColor: mode.primaryColor }]}>
      <span style={style={{...styles.ctaButtonText}>Explore Mall Rewards</span>
    </div>
  </div>
);

// Mode 3: Cash Store
const CashStoreContent: React.FC<{ mode: ModeConfig }> = ({ mode }) => (
  <div style={[style={{...styles.modeContent, style={{...styles.modeContentLight]}>
    <span style={[style={{...styles.sectionLabel, { color: '#888888' }]}>Cashback Status</span>

    <div style={style={{...styles.cashbackGrid}>
      <div style={style={{...styles.cashbackCard}>
        <span style={style={{...styles.cashbackLabel}>Pending</span>
        <span style={[style={{...styles.cashbackValue, { color: '#FFB020' }]}>₹485</span>
        <span style={style={{...styles.cashbackSubtext}>2 transactions</span>
      </div>
      <div style={style={{...styles.cashbackCard}>
        <span style={style={{...styles.cashbackLabel}>Confirmed</span>
        <span style={[style={{...styles.cashbackValue, { color: mode.primaryColor }]}>₹1,250</span>
        <span style={style={{...styles.cashbackSubtext}>This week</span>
      </div>
      <div style={style={{...styles.cashbackCard}>
        <span style={style={{...styles.cashbackLabel}>Lifetime</span>
        <span style={[style={{...styles.cashbackValue, { color: '#00C06A' }]}>₹18,650</span>
        <span style={style={{...styles.cashbackSubtext}>Total earned</span>
      </div>
    </div>

    <div style={[style={{...styles.ctaButton, { backgroundColor: mode.primaryColor }]}>
      <span style={style={{...styles.ctaButtonText}>View Cashback Timeline</span>
    </div>
  </div>
);

// Mode 4: Privé
const PriveContent: React.FC<{ mode: ModeConfig }> = ({ mode }) => (
  <div style={style={{...styles.modeContent}>
    <span style={[style={{...styles.sectionLabel, { color: colors.text.tertiary }]}>Privé Vault</span>

    <div style={style={{...styles.priveVaultCard}>
      <LinearGradient
        colors={[colors.transparent.gold10, colors.transparent.gold20]}
        style={style={{...styles.priveVaultGradient}
      >
        <div style={style={{...styles.priveVaultHeader}>
          <span style={style={{...styles.priveVaultIcon}>✦</span>
          <span style={style={{...styles.priveVaultTitle}>Signature Status</span>
        </div>

        <div style={style={{...styles.priveVaultStats}>
          <div style={style={{...styles.priveVaultStat}>
            <span style={style={{...styles.priveVaultStatValue}>5</span>
            <span style={style={{...styles.priveVaultStatLabel}>Active Privileges</span>
          </div>
          <div style={style={{...styles.priveVaultDivider} />
          <div style={style={{...styles.priveVaultStat}>
            <span style={style={{...styles.priveVaultStatValue}>12</span>
            <span style={style={{...styles.priveVaultStatLabel}>Exclusive Offers</span>
          </div>
        </div>

        <div style={style={{...styles.priveVaultBadge}>
          <span style={style={{...styles.priveVaultBadgeText}>Tier: Signature</span>
        </div>
      </LinearGradient>
    </div>

    <div style={style={{...styles.privilegesSnapshot}>
      <span style={[style={{...styles.sectionLabel, { color: colors.text.tertiary }]}>Quick Access</span>
      <div style={style={{...styles.privilegesGrid}>
        <div style={style={{...styles.privilegeItem}>
          <div style={style={{...styles.privilegeIcon}>
            <span style={style={{...styles.privilegeIconText}>◈</span>
          </div>
          <span style={style={{...styles.privilegeLabel}>Priority</span>
        </div>
        <div style={style={{...styles.privilegeItem}>
          <div style={style={{...styles.privilegeIcon}>
            <span style={style={{...styles.privilegeIconText}>✧</span>
          </div>
          <span style={style={{...styles.privilegeLabel}>Upgrades</span>
        </div>
        <div style={style={{...styles.privilegeItem}>
          <div style={style={{...styles.privilegeIcon}>
            <span style={style={{...styles.privilegeIconText}>◇</span>
          </div>
          <span style={style={{...styles.privilegeLabel}>Invites</span>
        </div>
      </div>
    </div>

    <div style={[style={{...styles.ctaButton, { backgroundColor: mode.primaryColor }]}>
      <span style={[style={{...styles.ctaButtonText, { color: colors.background.primary }]}>Unlock More Privileges</span>
    </div>
  </div>
);

const styles = {
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[12],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonLight: {
    backgroundColor: '#F0F0F0',
  },
  backButtonText: {
    fontSize: 20,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },

  modeSwitcher: {
    flexDirection: 'row',
    marginHorizontal: spacing[5],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[1],
    marginBottom: spacing[4],
  },
  modeSwitcherLight: {
    backgroundColor: '#F0F0F0',
  },
  modeTab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[1],
    borderRadius: borderRadius.lg,
    gap: 2,
  },
  modeTabActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  modeTabIcon: {
    fontSize: 16,
  },
  modeTabText: {
    fontSize: 10,
    fontWeight: '500',
  },

  scrollContent: {
    paddingHorizontal: spacing[5],
    paddingBottom: floatingTabBarTotalHeight + spacing[4],
  },

  balanceCard: {
    borderRadius: borderRadius['2xl'],
    padding: spacing[6],
    alignItems: 'center',
    marginBottom: spacing[5],
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: spacing[2],
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '700',
    marginBottom: spacing[1],
  },
  balanceSubtext: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
  },

  coinsSection: {
    marginBottom: spacing[5],
  },
  coinsSectionLight: {},
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  coinsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  coinCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
  },
  coinCardLight: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  coinIconText: {
    fontSize: 18,
  },
  coinBalance: {
    fontSize: 18,
    fontWeight: '700',
  },
  coinName: {
    fontSize: 12,
  },

  modeContent: {
    marginBottom: spacing[5],
  },
  modeContentLight: {},

  // Near You styles
  savingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: spacing[4],
  },
  savingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  savingsIcon: {
    fontSize: 24,
  },
  savingsInfo: {
    flex: 1,
  },
  savingsTitle: {
    color: '#1A1A1A',
    fontSize: 14,
    marginBottom: 2,
  },
  savingsValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  savingsDivider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: spacing[3],
  },

  // Mall styles
  suggestionsContainer: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  suggestionCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    alignItems: 'center',
    gap: spacing[2],
  },
  suggestionIcon: {
    fontSize: 24,
  },
  suggestionTitle: {
    color: '#1A1A1A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  suggestionDesc: {
    color: '#888888',
    fontSize: 11,
    textAlign: 'center',
  },

  // Cash Store styles
  cashbackGrid: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  cashbackCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cashbackLabel: {
    color: '#888888',
    fontSize: 11,
    marginBottom: spacing[1],
  },
  cashbackValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  cashbackSubtext: {
    color: '#AAAAAA',
    fontSize: 10,
    marginTop: spacing[1],
  },

  // Privé styles
  priveVaultCard: {
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    marginBottom: spacing[5],
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  priveVaultGradient: {
    padding: spacing[5],
  },
  priveVaultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  priveVaultIcon: {
    fontSize: 28,
    color: colors.gold.primary,
  },
  priveVaultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  priveVaultStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing[4],
  },
  priveVaultStat: {
    alignItems: 'center',
  },
  priveVaultStatValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.gold.primary,
  },
  priveVaultStatLabel: {
    fontSize: 12,
    color: colors.text.tertiary,
    marginTop: spacing[1],
  },
  priveVaultDivider: {
    width: 1,
    backgroundColor: colors.border.goldMuted,
  },
  priveVaultBadge: {
    alignSelf: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    backgroundColor: colors.transparent.gold10,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  priveVaultBadgeText: {
    color: colors.gold.primary,
    fontSize: 12,
    fontWeight: '500',
  },
  privilegesSnapshot: {
    marginBottom: spacing[4],
  },
  privilegesGrid: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  privilegeItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[2],
  },
  privilegeIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  privilegeIconText: {
    fontSize: 22,
    color: colors.gold.primary,
  },
  privilegeLabel: {
    fontSize: 12,
    color: colors.text.secondary,
  },

  ctaButton: {
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  activitySection: {
    marginTop: spacing[2],
  },
  activitySectionLight: {},
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[2],
  },
  activityItemLight: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  activityInfo: {
    flex: 1,
    gap: spacing[1],
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  activityDesc: {
    fontSize: 12,
  },
  activityRight: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  activityAmount: {
    fontSize: 15,
    fontWeight: '600',
  },
  activityDate: {
    fontSize: 11,
  },

  bottomPadding: {
    height: spacing[8],
  },
};

export default F10_WalletScreen;
