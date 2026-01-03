/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E10 - Wallet Screen
 *
 * Unified wallet view showing:
 * - Three coin types (ReZ, Branded, Privé)
 * - Clear breakdown of each
 * - Where coins came from
 * - Where they can be used
 * - What expires when
 *
 * Key principle: "No confusion"
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
import {
  WalletData,
  CoinBalance,
  CoinSource,
  COIN_TYPES,
  buildMockWalletData,
  formatCoinBalance,
  getExpiryMessage,
} from '../../utils/habitLoops';

type WalletTab = 'overview' | 'rez' | 'branded' | 'prive';

export const E10_WalletScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<WalletTab>('overview');
  const walletData = buildMockWalletData();

  const tabs: { id: WalletTab; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'rez', label: 'ReZ' },
    { id: 'branded', label: 'Branded' },
    { id: 'prive', label: 'Privé' },
  ];

  const formatDate = (date: Date): string => {
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' };
  };

  const renderCoinCard = (coin: CoinBalance) => {
    const coinInfo = COIN_TYPES[coin.type];
    const expiryMessage = getExpiryMessage(coin.expiringAmount, coin.expiringDate);

    return (
      <div
        key={coin.type}
        style={style={{...styles.coinCard}
        onClick={() => setActiveTab(coin.type)}
        onClick={() => {}}
      >
        <LinearGradient
          colors={[`${coin.color}15`, `${coin.color}05`]}
          style={style={{...styles.coinCardGradient}
        >
          {/* Header */}
          <div style={style={{...styles.coinCardHeader}>
            <div style={[style={{...styles.coinIcon, { backgroundColor: `${coin.color}20` }]}>
              <span style={style={{...styles.coinEmoji}>{coin.icon}</span>
            </div>
            <div style={style={{...styles.coinInfo}>
              <span variant="body" color={colors.text.primary}>{coin.name}</span>
              <span variant="caption" color={colors.text.tertiary}>{coinInfo.description}</span>
            </div>
          </div>

          {/* Balance */}
          <div style={style={{...styles.coinBalance}>
            <span variant="h2" style={{ color: coin.color }}>
              {formatCoinBalance(coin.balance)}
            </span>
            {coin.pendingBalance > 0 && (
              <span variant="caption" color={colors.text.tertiary}>
                +{coin.pendingBalance} pending
              </span>
            )}
          </div>

          {/* Weekly Earnings */}
          <div style={style={{...styles.coinEarnings}>
            <span variant="caption" color={colors.text.secondary}>
              Earned this week: +{coin.earnedThisWeek}
            </span>
          </div>

          {/* Expiry Warning */}
          {expiryMessage && (
            <div style={style={{...styles.expiryWarning}>
              <span variant="caption" color="#FFC107">
                {expiryMessage}
              </span>
            </div>
          )}
        </LinearGradient>
      </div>
    );
  };

  const renderOverview = () => (
    <>
      {/* Total Value */}
      <div style={style={{...styles.totalCard}>
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.totalGradient}
        >
          <span variant="label" color={colors.text.tertiary}>TOTAL WALLET VALUE</span>
          <div style={style={{...styles.totalValue}>
            <span variant="h1" gold>₹{walletData.totalValue.toLocaleString()}</span>
          </div>
          <span variant="caption" color={colors.text.secondary}>
            Combined value of all your coins
          </span>
        </LinearGradient>
      </div>

      {/* Coin Cards */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          YOUR COINS
        </span>
        {walletData.coins.map(renderCoinCard)}
      </div>

      {/* Recent Activity */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          RECENT ACTIVITY
        </span>
        <div style={style={{...styles.activityCard}>
          {walletData.recentActivity.slice(0, 5).map((activity, index) => {
            const coinInfo = COIN_TYPES[activity.type];
            return (
              <div
                key={index}
                style={[
                  style={{...styles.activityItem,
                  index < 4 && style={{...styles.activityItemBorder,
                ]}
              >
                <div style={[style={{...styles.activityIcon, { backgroundColor: `${coinInfo.color}20` }]}>
                  <span style={style={{...styles.activityEmoji}>{coinInfo.icon}</span>
                </div>
                <div style={style={{...styles.activityContent}>
                  <span variant="body" color={colors.text.primary}>
                    {activity.description}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {formatDate(activity.date)}
                  </span>
                </div>
                <span variant="body" style={{ color: coinInfo.color }}>
                  +{activity.amount}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Usage Info */}
      <div style={style={{...styles.infoCard}>
        <span variant="body" color={colors.text.secondary} center>
          "One wallet. Three coin types. Clear breakdown. No confusion."
        </span>
      </div>
    </>
  );

  const renderCoinDetail = (coinType: 'rez' | 'branded' | 'prive') => {
    const coin = walletData.coins.find(c => c.type === coinType)!;
    const coinInfo = COIN_TYPES[coinType];
    const expiryMessage = getExpiryMessage(coin.expiringAmount, coin.expiringDate);

    return (
      <>
        {/* Coin Header */}
        <div style={style={{...styles.detailHeader}>
          <LinearGradient
            colors={[`${coin.color}20`, `${coin.color}08`]}
            style={style={{...styles.detailGradient}
          >
            <div style={[style={{...styles.detailIcon, { backgroundColor: `${coin.color}25` }]}>
              <span style={style={{...styles.detailEmoji}>{coin.icon}</span>
            </div>
            <span variant="h1" style={{ color: coin.color }}>
              {formatCoinBalance(coin.balance)}
            </span>
            <span variant="body" color={colors.text.primary}>{coin.name}</span>
            <span variant="caption" color={colors.text.secondary}>{coinInfo.description}</span>
          </LinearGradient>
        </div>

        {/* Stats Grid */}
        <div style={style={{...styles.statsGrid}>
          <div style={style={{...styles.statCard}>
            <span variant="h3" color={colors.text.primary}>{coin.pendingBalance}</span>
            <span variant="caption" color={colors.text.tertiary}>Pending</span>
          </div>
          <div style={style={{...styles.statCard}>
            <span variant="h3" color={colors.text.primary}>+{coin.earnedThisWeek}</span>
            <span variant="caption" color={colors.text.tertiary}>This Week</span>
          </div>
          <div style={style={{...styles.statCard}>
            <span variant="h3" color={coin.expiringAmount > 0 ? '#FFC107' : colors.text.primary}>
              {coin.expiringAmount}
            </span>
            <span variant="caption" color={colors.text.tertiary}>Expiring</span>
          </div>
        </div>

        {/* Expiry Warning */}
        {expiryMessage && (
          <div style={style={{...styles.expiryBanner}>
            <span style={style={{...styles.expiryBannerIcon}>⏱</span>
            <span variant="body" color="#FFC107">{expiryMessage}</span>
          </div>
        )}

        {/* Where to Use */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHERE TO USE
          </span>
          <div style={style={{...styles.usageCard}>
            {coinType === 'rez' && (
              <>
                <span variant="body" color={colors.text.primary}>Accepted everywhere</span>
                <span variant="caption" color={colors.text.secondary}>
                  All ReZ partners, gift cards, and experiences
                </span>
              </>
            )}
            {coinType === 'branded' && (
              <>
                <span variant="body" color={colors.text.primary}>Partner-specific</span>
                <span variant="caption" color={colors.text.secondary}>
                  Only at the merchants that issued them
                </span>
              </>
            )}
            {coinType === 'prive' && (
              <>
                <span variant="body" color={colors.text.primary}>Premium rewards only</span>
                <span variant="caption" color={colors.text.secondary}>
                  Gift cards, exclusive experiences, Privé privileges
                </span>
              </>
            )}
          </div>
        </div>

        {/* Transaction History */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            TRANSACTION HISTORY
          </span>
          <div style={style={{...styles.activityCard}>
            {coin.sources.map((source, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.activityItem,
                  index < coin.sources.length - 1 && style={{...styles.activityItemBorder,
                ]}
              >
                <div style={style={{...styles.activityContent}>
                  <span variant="body" color={colors.text.primary}>
                    {source.description}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {formatDate(source.date)}
                  </span>
                </div>
                <span variant="body" style={{ color: coin.color }}>
                  +{source.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div
          style={style={{...styles.backButton}
          onClick={() => navigate(-1)}
        >
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <span variant="h2" color={colors.text.primary}>Wallet</span>
        <div style={style={{...styles.placeholder} />
      </div>

      {/* Tabs */}
      <div style={style={{...styles.tabsContainer}>
        <div
          horizontal
          
          contentContainerStyle={style={{...styles.tabsContent}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={[style={{...styles.tab, activeTab === tab.id && style={{...styles.tabActive]}
              onClick={() => setActiveTab(tab.id)}
            >
              <Text
                variant="body"
                color={activeTab === tab.id ? colors.gold.primary : colors.text.tertiary}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'rez' && renderCoinDetail('rez')}
        {activeTab === 'branded' && renderCoinDetail('branded')}
        {activeTab === 'prive' && renderCoinDetail('prive')}

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Redeem CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={() => navigate('/prive/E1_RedemptionHome')}
        >
          <span variant="bodyLarge" color="#0A0A0A">Redeem Coins</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 18,
    color: colors.text.primary,
  },
  placeholder: {
    width: 40,
  },

  // Tabs
  tabsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  tabsContent: {
    paddingHorizontal: spacing[5],
    gap: spacing[4],
    paddingVertical: spacing[3],
  },
  tab: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.gold.primary,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing[5],
  },

  // Total Card
  totalCard: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing[5],
  },
  totalGradient: {
    padding: spacing[5],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    borderRadius: borderRadius.lg,
  },
  totalValue: {
    marginVertical: spacing[2],
  },

  // Section
  section: {
    marginBottom: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },

  // Coin Card
  coinCard: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing[3],
  },
  coinCardGradient: {
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: borderRadius.lg,
  },
  coinCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[3],
  },
  coinIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinEmoji: {
    fontSize: 22,
  },
  coinInfo: {
    flex: 1,
    gap: spacing[1],
  },
  coinBalance: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  coinEarnings: {
    marginBottom: spacing[2],
  },
  expiryWarning: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },

  // Activity
  activityCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  activityItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityEmoji: {
    fontSize: 16,
  },
  activityContent: {
    flex: 1,
    gap: spacing[1],
  },

  // Info Card
  infoCard: {
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.15)',
  },

  // Detail Header
  detailHeader: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing[5],
  },
  detailGradient: {
    padding: spacing[6],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: borderRadius.lg,
  },
  detailIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  detailEmoji: {
    fontSize: 32,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[5],
  },
  statCard: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[1],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  // Expiry Banner
  expiryBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    marginBottom: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
  },
  expiryBannerIcon: {
    fontSize: 20,
  },

  // Usage Card
  usageCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[1],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  bottomSpace: {
    height: 100,
  },

  // CTA
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default E10_WalletScreen;
