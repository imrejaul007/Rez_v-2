/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B1 - Privé Home Page
 * Luxury invite-only experience
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text, Card, ProgressBar, ModeSwitcher, AppMode } from '../../components';
import {
  DailyCheckInCard,
  DailyProgressOverview,
  WeeklyEarningsCard,
  StatusSecuredCard,
} from '../../components/HabitLoopComponents';
import { colors, spacing, borderRadius } from '../../theme';
import { buildMockDailyProgress, DailyProgress } from '../../utils/habitLoops';

interface B1_DashboardScreenProps {
  onBack?: () => void;
}

// Mock data
const userData = {
  name: 'Rejaul Karim',
  tier: 'Signature',
  tierProgress: 0.72,
  nextTier: 'Elite',
  pointsToNext: 2800,
  totalCoins: 12450,
  rezCoins: 8200,
  priveCoins: 3150,
  brandedCoins: 1100,
  monthlyEarnings: 2840,
  activeCampaigns: 3,
  completedCampaigns: 47,
  memberId: '4829 7156 3842 0917',
  memberSince: '12/23',
  validThru: '12/28',
  // Access & 6-Pillar Signal Data (PEE - Privé Eligibility Engine)
  // All scores are now unified under the 6-pillar system
  accessType: 'permanent',
  accessState: 'active',
  accessCategory: 'Power User',
  totalScore: 74.5,
  accessTier: 'entry', // 'none' | 'entry' | 'elite'
  pillars: [
    { id: 'engagement', name: 'Engagement', shortName: 'Engage', score: 78, weight: 0.25, trend: 'up', icon: '📊', color: '#4CAF50' },
    { id: 'trust', name: 'Trust & Integrity', shortName: 'Trust', score: 92, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
    { id: 'influence', name: 'Influence', shortName: 'Influence', score: 65, weight: 0.20, trend: 'up', icon: '📢', color: '#E91E63' },
    { id: 'economic', name: 'Economic Value', shortName: 'Economic', score: 70, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
    { id: 'brand_affinity', name: 'Brand Affinity', shortName: 'Brand', score: 60, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
    { id: 'network', name: 'Network & Community', shortName: 'Network', score: 55, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
  ],
};

const featuredOffers = [
  {
    id: '1',
    brand: 'Artisan Watch Co',
    title: 'Private Preview Event',
    subtitle: 'Exclusive collection launch',
    reward: '500 Privé Coins',
    expiresIn: '2 days',
    isExclusive: true,
  },
  {
    id: '2',
    brand: 'Luxury Café',
    title: 'Weekend Dining Experience',
    subtitle: 'Complimentary tasting menu',
    reward: '300 ReZ Coins',
    expiresIn: '5 days',
    isExclusive: false,
  },
  {
    id: '3',
    brand: 'Premium Spa',
    title: 'Wellness Retreat',
    subtitle: 'Full day spa package',
    reward: '750 Privé Coins',
    expiresIn: '7 days',
    isExclusive: true,
  },
];

const quickActions = [
  { id: 'wallet', label: 'Wallet', icon: '◈', route: 'B2_Wallet' },
  { id: 'earnings', label: 'Earnings', icon: '↑', route: 'Earnings' },
  { id: 'redeem', label: 'Redeem', icon: '◇', route: 'E1_RedemptionHome' },
  { id: 'invite', label: 'Invite', icon: '✦', route: 'F6_Invitations' },
];

// Today's Highlights - Privé Check-In Loop content
const todaysHighlights = {
  curatedOffer: {
    id: 'offer1',
    type: 'offer' as const,
    icon: '🎁',
    title: 'Up to 40% at StyleHub',
    subtitle: 'Privé members only',
    badge: 'Limited',
    badgeColor: '#E91E63',
  },
  nearbyStore: {
    id: 'store1',
    type: 'store' as const,
    icon: '📍',
    title: 'Café Artisan - 0.5km',
    subtitle: '25% Privé bonus today',
    badge: 'Nearby',
    badgeColor: '#4CAF50',
  },
  opportunity: {
    id: 'campaign1',
    type: 'campaign' as const,
    icon: '📢',
    title: 'Brand Campaign',
    subtitle: 'Earn 500 Privé Coins',
    badge: 'New',
    badgeColor: '#FF9800',
  },
};

export const B1_DashboardScreen: React.FC<B1_DashboardScreenProps> = () => {
  const navigate = useNavigate();
  const [appMode, setAppMode] = useState<AppMode>('prive');
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [dailyProgress] = useState<DailyProgress>(buildMockDailyProgress());

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    // In real app: trigger check-in API, show success toast, award coins
  };

  const handleLoopPress = (loopId: string) => {
    // Navigate to loop detail or relevant action
    if (loopId === 'smart_spend') {
      navigate('/prive/Offers');
    } else if (loopId === 'influence') {
      navigate('/prive/Content', { screen: 'D1_ContentHub' };
    } else if (loopId === 'redemption_pride') {
      navigation.getParent()?.navigate('Redemption', { screen: 'E1_RedemptionHome' };
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const getTrendInfo = (trend: string) => {
    switch (trend) {
      case 'up':
        return { icon: '↑', color: '#4CAF50' };
      case 'down':
        return { icon: '↓', color: '#F44336' };
      default:
        return { icon: '→', color: '#9E9E9E' };
    }
  };

  const getAccessStateColor = () => {
    switch (userData.accessState) {
      case 'active':
        return '#4CAF50';
      case 'paused':
        return '#FFC107';
      default:
        return '#FF9800';
    }
  };

  return (
    <div style={style={{...styles.container}>
      {/* Mode Switcher */}
      <ModeSwitcher activeMode={appMode} onModeChange={setAppMode} />

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Premium Member Card */}
        <div
          style={style={{...styles.memberCardContainer}
          onClick={() => navigate('/prive/B4_TierProgress')}
          onClick={() => {}}
        >
          <LinearGradient
            colors={['#1A1A1A', '#0D0D0D', '#1A1A1A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style={{...styles.memberCard}
          >
            {/* Card Background Pattern */}
            <div style={style={{...styles.cardPattern}>
              <div style={style={{...styles.cardPatternCircle1} />
              <div style={style={{...styles.cardPatternCircle2} />
            </div>

            {/* Card Header */}
            <div style={style={{...styles.cardHeader}>
              <div style={style={{...styles.cardBrand}>
                <span style={style={{...styles.cardLogo}>◈</span>
                <div>
                  <span style={style={{...styles.cardBrandName}>REZ PRIVÉ</span>
                  <span style={style={{...styles.cardBrandSub}>{userData.tier.toUpperCase()} MEMBER</span>
                </div>
              </div>
              <div style={style={{...styles.cardContactless}>
                <span style={style={{...styles.contactlessIcon}>))))</span>
              </div>
            </div>

            {/* Card Chip */}
            <div style={style={{...styles.cardChip}>
              <div style={style={{...styles.chipInner}>
                <div style={style={{...styles.chipLine1} />
                <div style={style={{...styles.chipLine2} />
                <div style={style={{...styles.chipLine3} />
              </div>
            </div>

            {/* Card Number */}
            <span style={style={{...styles.cardNumber}>{userData.memberId}</span>

            {/* Card Details */}
            <div style={style={{...styles.cardDetails}>
              <div style={style={{...styles.cardDetailItem}>
                <span style={style={{...styles.cardDetailLabel}>MEMBER</span>
                <span style={style={{...styles.cardDetailValue}>{userData.name.toUpperCase()}</span>
              </div>
              <div style={style={{...styles.cardDetailItem}>
                <span style={style={{...styles.cardDetailLabel}>VALID THRU</span>
                <span style={style={{...styles.cardDetailValue}>{userData.validThru}</span>
              </div>
              <div style={style={{...styles.cardDetailItem}>
                <span style={style={{...styles.cardDetailLabel}>SCORE</span>
                <span style={style={{...styles.cardScoreValue}>{userData.totalScore}</span>
              </div>
            </div>

            {/* Card Footer - Tier Progress */}
            <div style={style={{...styles.cardFooter}>
              <div style={style={{...styles.cardProgressContainer}>
                <div style={style={{...styles.cardProgressTrack}>
                  <LinearGradient
                    colors={[colors.gold.primary, colors.gold.dark]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[style={{...styles.cardProgressFill, { width: `${userData.tierProgress * 100}%` }]}
                  />
                </div>
                <div style={style={{...styles.cardProgressLabels}>
                  <span style={style={{...styles.cardProgressLabel}>{userData.tier}</span>
                  <span style={style={{...styles.cardProgressLabel}>{userData.pointsToNext.toLocaleString()} pts to {userData.nextTier}</span>
                </div>
              </div>
            </div>

            {/* Gold Accent Line */}
            <LinearGradient
              colors={['transparent', colors.gold.primary, 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={style={{...styles.cardAccentLine}
            />
          </LinearGradient>
        </div>

        {/* Welcome Text */}
        <div style={style={{...styles.welcomeSection}>
          <span variant="body" color={colors.text.secondary}>
            Welcome back, <span variant="body" gold>{userData.name.split(' ')[0]}</span>
          </span>
        </div>

        {/* Daily Habit Loops Section */}
        <div style={style={{...styles.habitsSection}>
          {/* Daily Check-In */}
          <DailyCheckInCard
            isCheckedIn={isCheckedIn}
            streak={dailyProgress.loops.find(l => l.loopId === 'check_in')?.streak || 0}
            onCheckIn={handleCheckIn}
          />

          {/* Today's Progress */}
          <div style={style={{...styles.todaysLoops}>
            <DailyProgressOverview
              progress={dailyProgress}
              onLoopPress={handleLoopPress}
            />
          </div>

          {/* Weekly Earnings + Status */}
          <div style={style={{...styles.habitsRow}>
            <div style={style={{...styles.habitsRowItem}>
              <WeeklyEarningsCard
                earnings={dailyProgress.weeklyEarnings}
                trend="up"
                onClick={() => navigate('/prive/B2_Wallet')}
              />
            </div>
          </div>

          {/* Status Secured */}
          {dailyProgress.priveSecuredUntil && (
            <StatusSecuredCard
              securedUntil={dailyProgress.priveSecuredUntil}
              onClick={() => navigate('/prive/Entry', { screen: 'A5_AccessStatus' })}
            />
          )}
        </div>

        {/* Today's Highlights - Privé Check-In Loop */}
        <div style={style={{...styles.highlightsSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.highlightsLabel}>
            TODAY'S PRIVÉ HIGHLIGHTS
          </span>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.highlightsScroll}
          >
            {/* Curated Offer */}
            <div
              style={style={{...styles.highlightCard}
              onClick={() => navigate('/prive/Offers', {
                screen: 'C2_OfferDetail',
                params: { offerId: todaysHighlights.curatedOffer.id }
              })}
              onClick={() => {}}
            >
              <div style={[style={{...styles.highlightBadge, { backgroundColor: `${todaysHighlights.curatedOffer.badgeColor}20` }]}>
                <span variant="caption" style={{ color: todaysHighlights.curatedOffer.badgeColor }}>
                  {todaysHighlights.curatedOffer.badge}
                </span>
              </div>
              <div style={style={{...styles.highlightIcon}>
                <span style={style={{...styles.highlightEmoji}>{todaysHighlights.curatedOffer.icon}</span>
              </div>
              <span variant="body" color={colors.text.primary} style={style={{...styles.highlightTitle}>
                {todaysHighlights.curatedOffer.title}
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                {todaysHighlights.curatedOffer.subtitle}
              </span>
            </div>

            {/* Nearby Store */}
            <div
              style={style={{...styles.highlightCard}
              onClick={() => navigate('/prive/Explore', {
                screen: 'X4_StoreDetail',
                params: { storeId: todaysHighlights.nearbyStore.id }
              })}
              onClick={() => {}}
            >
              <div style={[style={{...styles.highlightBadge, { backgroundColor: `${todaysHighlights.nearbyStore.badgeColor}20` }]}>
                <span variant="caption" style={{ color: todaysHighlights.nearbyStore.badgeColor }}>
                  {todaysHighlights.nearbyStore.badge}
                </span>
              </div>
              <div style={style={{...styles.highlightIcon}>
                <span style={style={{...styles.highlightEmoji}>{todaysHighlights.nearbyStore.icon}</span>
              </div>
              <span variant="body" color={colors.text.primary} style={style={{...styles.highlightTitle}>
                {todaysHighlights.nearbyStore.title}
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                {todaysHighlights.nearbyStore.subtitle}
              </span>
            </div>

            {/* Opportunity */}
            <div
              style={style={{...styles.highlightCard}
              onClick={() => navigate('/prive/Offers', {
                screen: 'C3_BrandInvitation',
                params: { invitationId: todaysHighlights.opportunity.id }
              })}
              onClick={() => {}}
            >
              <div style={[style={{...styles.highlightBadge, { backgroundColor: `${todaysHighlights.opportunity.badgeColor}20` }]}>
                <span variant="caption" style={{ color: todaysHighlights.opportunity.badgeColor }}>
                  {todaysHighlights.opportunity.badge}
                </span>
              </div>
              <div style={style={{...styles.highlightIcon}>
                <span style={style={{...styles.highlightEmoji}>{todaysHighlights.opportunity.icon}</span>
              </div>
              <span variant="body" color={colors.text.primary} style={style={{...styles.highlightTitle}>
                {todaysHighlights.opportunity.title}
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                {todaysHighlights.opportunity.subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Coin Balance Card */}
        <div
          style={style={{...styles.balanceCard}
          onClick={() => navigate('/prive/B2_Wallet')}
          onClick={() => {}}
        >
          <LinearGradient
            colors={['#1A1A1A', '#141414']}
            style={style={{...styles.balanceGradient}
          >
            <div style={style={{...styles.balanceHeader}>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.balanceLabel}>
                TOTAL BALANCE
              </span>
              <span variant="caption" gold>View Wallet →</span>
            </div>

            <span style={style={{...styles.totalBalance}>{formatNumber(userData.totalCoins)}</span>
            <span variant="caption" color={colors.text.tertiary}>coins</span>

            <div style={style={{...styles.coinBreakdown}>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: colors.gold.primary }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {formatNumber(userData.rezCoins)} ReZ
                </span>
              </div>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: '#B8860B' }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {formatNumber(userData.priveCoins)} Privé
                </span>
              </div>
              <div style={style={{...styles.coinType}>
                <div style={[style={{...styles.coinDot, { backgroundColor: '#8B7355' }]} />
                <span variant="caption" color={colors.text.secondary}>
                  {formatNumber(userData.brandedCoins)} Branded
                </span>
              </div>
            </div>

            {/* Monthly Earnings */}
            <div style={style={{...styles.monthlyEarnings}>
              <span variant="caption" color={colors.text.tertiary}>This month</span>
              <span variant="body" gold>+{formatNumber(userData.monthlyEarnings)}</span>
            </div>
          </LinearGradient>
        </div>

        {/* Quick Actions */}
        <div style={style={{...styles.quickActions}>
          {quickActions.map((action) => (
            <div
              key={action.id}
              style={style={{...styles.quickActionItem}
              onClick={() => {
                // Handle different navigation patterns
                switch (action.id) {
                  case 'wallet':
                    // Wallet is in CoreStack (current stack)
                    navigate('/prive/B2_Wallet');
                    break;
                  case 'earnings':
                    // Earnings is in CoreStack (current stack)
                    navigate('/prive/Earnings');
                    break;
                  case 'redeem':
                    // Redemption is a root-level modal stack
                    navigation.getParent()?.navigate('Redemption', {
                      screen: 'E1_RedemptionHome'
                    };
                    break;
                  case 'invite':
                    // Invitations is in Profile tab
                    navigate('/prive/Profile', {
                      screen: 'F6_Invitations'
                    };
                    break;
                  default:
                    navigate(action.route as never);
                }
              }}
            >
              <div style={style={{...styles.quickActionIcon}>
                <span style={style={{...styles.quickActionIconText}>{action.icon}</span>
              </div>
              <span variant="caption" color={colors.text.secondary}>{action.label}</span>
            </div>
          ))}
        </div>

        {/* 6-Pillar Signal Health (Unified Score System) */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.signalHeaderLeft}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                THE 6 PILLARS
              </span>
              <div style={[style={{...styles.accessStatusBadge, { backgroundColor: `${getAccessStateColor()}20` }]}>
                <div style={[style={{...styles.accessStatusDot, { backgroundColor: getAccessStateColor() }]} />
                <span variant="caption" style={{ color: getAccessStateColor() }}>
                  {userData.accessState.charAt(0).toUpperCase() + userData.accessState.slice(1)}
                </span>
              </div>
            </div>
            <div onClick={() => navigate('/prive/Entry', { screen: 'A1_Eligibility' })}>
              <span variant="caption" gold>View Details →</span>
            </div>
          </div>

          {/* Privé Score Card */}
          <div style={style={{...styles.accessCategoryCard}>
            <div style={style={{...styles.accessCategoryInfo}>
              <span variant="caption" color={colors.text.tertiary}>Privé Score</span>
              <span variant="h2" gold>{userData.totalScore.toFixed(1)}</span>
            </div>
            <div style={style={{...styles.accessScoreInfo}>
              <div style={style={{...styles.accessTypeBadge}>
                <span style={{ fontSize: 12 }}>◈</span>
                <span variant="caption" color={colors.gold.primary}>
                  {userData.tier === 'elite' ? 'Elite' : userData.tier === 'entry' ? 'Entry' : 'Building'}
                </span>
              </div>
              <span variant="caption" color={colors.text.tertiary}>
                {userData.tier === 'elite' ? '85+ achieved' : `${(85 - userData.totalScore).toFixed(1)} to Elite`}
              </span>
            </div>
          </div>

          {/* 6 Pillar Grid - 2x3 */}
          <div style={style={{...styles.signalGrid}>
            {userData.pillars.map((pillar) => {
              const trend = getTrendInfo(pillar.trend);
              const weightPercent = (pillar.weight * 100).toFixed(0);

              return (
                <div key={pillar.id} style={style={{...styles.signalCard}>
                  <div style={style={{...styles.signalCardHeader}>
                    <div style={[style={{...styles.pillarIconBg, { backgroundColor: `${pillar.color}20` }]}>
                      <span style={style={{...styles.signalIcon}>{pillar.icon}</span>
                    </div>
                    <div style={style={{...styles.signalScoreContainer}>
                      <span variant="bodyLarge" color={colors.text.primary}>
                        {pillar.score}
                      </span>
                      <span style={[style={{...styles.signalTrendIcon, { color: trend.color }]}>
                        {trend.icon}
                      </span>
                    </div>
                  </div>
                  <span variant="caption" color={colors.text.secondary} style={style={{...styles.signalName}>
                    {pillar.shortName}
                  </span>
                  <div style={style={{...styles.pillarWeightRow}>
                    <span variant="caption" color={colors.text.tertiary}>{weightPercent}% weight</span>
                  </div>
                  <div style={style={{...styles.signalProgressContainer}>
                    <div style={style={{...styles.signalProgressTrack}>
                      <div
                        style={[
                          style={{...styles.signalProgressFill,
                          { width: `${pillar.score}%`, backgroundColor: pillar.color },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Warning */}
          <div style={style={{...styles.trustWarningCard}>
            <span variant="caption" color={colors.text.tertiary}>
              <span variant="caption" color="#F44336">Note: </span>
              Trust below 60 = Privé blocked regardless of total score
            </span>
          </div>
        </div>

        {/* Featured Offers */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              CURATED FOR YOU
            </span>
            <div onClick={() => navigate('/prive/Offers')}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>

          <div
            horizontal
            
            contentContainerStyle={style={{...styles.offersScroll}
          >
            {featuredOffers.map((offer) => (
              <div
                key={offer.id}
                style={style={{...styles.offerCard}
                onClick={() => navigate('/prive/Offers', {
                  screen: 'C2_OfferDetail',
                  params: { offerId: offer.id }
                })}
                onClick={() => {}}
              >
                {offer.isExclusive && (
                  <div style={style={{...styles.exclusiveBadge}>
                    <span variant="caption" style={style={{...styles.exclusiveText}>EXCLUSIVE</span>
                  </div>
                )}
                <span variant="caption" gold>{offer.brand}</span>
                <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.offerTitle}>
                  {offer.title}
                </span>
                <span variant="caption" color={colors.text.tertiary}>{offer.subtitle}</span>

                <div style={style={{...styles.offerFooter}>
                  <span variant="body" gold>{offer.reward}</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Expires in {offer.expiresIn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Summary */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            YOUR ACTIVITY
          </span>

          <div style={style={{...styles.activityCard}>
            <div style={style={{...styles.activityRow}>
              <div style={style={{...styles.activityItem}>
                <span style={style={{...styles.activityNumber}>{userData.activeCampaigns}</span>
                <span variant="caption" color={colors.text.tertiary}>Active</span>
              </div>
              <div style={style={{...styles.activityDivider} />
              <div style={style={{...styles.activityItem}>
                <span style={style={{...styles.activityNumber}>{userData.completedCampaigns}</span>
                <span variant="caption" color={colors.text.tertiary}>Completed</span>
              </div>
              <div style={style={{...styles.activityDivider} />
              <div style={style={{...styles.activityItem}>
                <span style={style={{...styles.activityNumber}>4.9</span>
                <span variant="caption" color={colors.text.tertiary}>Avg Rating</span>
              </div>
            </div>

            <div
              style={style={{...styles.viewActivityBtn}
              onClick={() => navigate('/prive/B5_ActivityHistory')}
            >
              <span variant="body" gold>View Full History</span>
            </div>
          </div>
        </div>

        {/* Brand Invitation Highlight */}
        <div
          style={style={{...styles.invitationCard}
          onClick={() => navigate('/prive/Offers', {
            screen: 'C3_BrandInvitation',
            params: { invitationId: '1' }
          })}
          onClick={() => {}}
        >
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
            style={style={{...styles.invitationGradient}
          >
            <div style={style={{...styles.invitationBadge}>
              <span variant="caption" gold>NEW INVITATION</span>
            </div>
            <span variant="bodyLarge" color={colors.text.primary}>
              Artisan Watch Co wants to partner with you
            </span>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.invitationSubtext}>
              Premium watch brand · 1,500 Privé Coins potential
            </span>
            <div style={style={{...styles.invitationAction}>
              <span variant="body" gold>View Invitation →</span>
            </div>
          </LinearGradient>
        </div>

        {/* How It Works Section */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            HOW REZ PRIVÉ WORKS
          </span>

          <div style={style={{...styles.howItWorksCard}>
            {/* Step 1: Earn */}
            <div
              style={style={{...styles.howItWorksStep}
              onClick={() => navigate('/prive/Content', { screen: 'D1_ContentHub' })}
            >
              <div style={[style={{...styles.howItWorksIcon, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
                <span style={[style={{...styles.howItWorksIconText, { color: '#4CAF50' }]}>↑</span>
              </div>
              <div style={style={{...styles.howItWorksContent}>
                <span variant="body" color={colors.text.primary}>Earn Coins</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Shop, share content, & complete campaigns
                </span>
              </div>
              <div style={style={{...styles.howItWorksBadge}>
                <span variant="caption" style={{ color: '#4CAF50' }}>+15-50%</span>
              </div>
            </div>

            <div style={style={{...styles.howItWorksDivider} />

            {/* Step 2: Share */}
            <div
              style={style={{...styles.howItWorksStep}
              onClick={() => navigate('/prive/Offers', { screen: 'C6_ContentSubmission' })}
            >
              <div style={[style={{...styles.howItWorksIcon, { backgroundColor: 'rgba(100, 181, 246, 0.15)' }]}>
                <span style={[style={{...styles.howItWorksIconText, { color: '#64B5F6' }]}>◎</span>
              </div>
              <div style={style={{...styles.howItWorksContent}>
                <span variant="body" color={colors.text.primary}>Share & Earn More</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Post your experience, submit link, get bonus
                </span>
              </div>
              <div style={style={{...styles.howItWorksBadge}>
                <span variant="caption" style={{ color: '#64B5F6' }}>Cashback</span>
              </div>
            </div>

            <div style={style={{...styles.howItWorksDivider} />

            {/* Step 3: Pay */}
            <div
              style={style={{...styles.howItWorksStep}
              onClick={() => navigation.getParent()?.navigate('Redemption', { screen: 'E1_RedemptionHome' })}
            >
              <div style={[style={{...styles.howItWorksIcon, { backgroundColor: 'rgba(201, 169, 98, 0.15)' }]}>
                <span style={[style={{...styles.howItWorksIconText, { color: colors.gold.primary }]}>◈</span>
              </div>
              <div style={style={{...styles.howItWorksContent}>
                <span variant="body" color={colors.text.primary}>Pay with Coins</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Use ReZ, Branded, or Privé coins at checkout
                </span>
              </div>
              <div style={style={{...styles.howItWorksBadge}>
                <span variant="caption" gold>Save ₹₹</span>
              </div>
            </div>
          </div>

          {/* Coin Types Explainer */}
          <div style={style={{...styles.coinTypesCard}>
            <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.coinTypesTitle}>
              Your Coin Types:
            </span>
            <div style={style={{...styles.coinTypesRow}>
              <div style={style={{...styles.coinTypeItem}>
                <div style={[style={{...styles.coinTypeDot, { backgroundColor: colors.gold.primary }]} />
                <span variant="caption" color={colors.text.secondary}>ReZ</span>
                <span variant="caption" color={colors.text.tertiary}>Universal</span>
              </div>
              <div style={style={{...styles.coinTypeItem}>
                <div style={[style={{...styles.coinTypeDot, { backgroundColor: '#B8860B' }]} />
                <span variant="caption" color={colors.text.secondary}>Privé</span>
                <span variant="caption" color={colors.text.tertiary}>Premium</span>
              </div>
              <div style={style={{...styles.coinTypeItem}>
                <div style={[style={{...styles.coinTypeDot, { backgroundColor: '#64B5F6' }]} />
                <span variant="caption" color={colors.text.secondary}>Branded</span>
                <span variant="caption" color={colors.text.tertiary}>Brand-specific</span>
              </div>
            </div>
          </div>
        </div>

        {/* Concierge CTA */}
        <div
          style={style={{...styles.conciergeCard}
          onClick={() => navigate('/prive/Notifications', { screen: 'G4_Concierge' })}
        >
          <div style={style={{...styles.conciergeIcon}>
            <span style={style={{...styles.conciergeIconText}>◆</span>
          </div>
          <div style={style={{...styles.conciergeContent}>
            <span variant="body" color={colors.text.primary}>Need Assistance?</span>
            <span variant="caption" color={colors.text.tertiary}>
              Your Privé Concierge is available 24/7
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
    paddingBottom: 120,
  },

  // Premium Member Card
  memberCardContainer: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
  },
  memberCard: {
    aspectRatio: 1.586, // Standard card ratio
    borderRadius: 20,
    padding: spacing[5],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    position: 'relative',
  },
  cardPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  cardPatternCircle1: {
    position: 'absolute',
    top: -50,
    right: -30,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(201, 169, 98, 0.03)',
  },
  cardPatternCircle2: {
    position: 'absolute',
    bottom: -80,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(201, 169, 98, 0.02)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  cardBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  cardLogo: {
    fontSize: 28,
    color: colors.gold.primary,
  },
  cardBrandName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gold.primary,
    letterSpacing: 2,
  },
  cardBrandSub: {
    fontSize: 9,
    color: colors.text.tertiary,
    letterSpacing: 1.5,
    marginTop: 2,
  },
  cardContactless: {
    transform: [{ rotate: '90deg' }],
  },
  contactlessIcon: {
    fontSize: 16,
    color: colors.gold.primary,
    opacity: 0.7,
  },
  cardChip: {
    width: 45,
    height: 35,
    borderRadius: 6,
    backgroundColor: '#C9A962',
    marginBottom: spacing[4],
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.5)',
  },
  chipInner: {
    flex: 1,
    padding: 4,
    justifyContent: 'space-between',
  },
  chipLine1: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 3,
  },
  chipLine2: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 3,
  },
  chipLine3: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginVertical: 3,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    letterSpacing: 3,
    marginBottom: spacing[4],
    fontFamily: 'monospace',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[3],
  },
  cardDetailItem: {
    gap: 2,
  },
  cardDetailLabel: {
    fontSize: 8,
    color: colors.text.tertiary,
    letterSpacing: 1,
  },
  cardDetailValue: {
    fontSize: 11,
    color: colors.text.primary,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  cardScoreValue: {
    fontSize: 14,
    color: colors.gold.primary,
    fontWeight: '700',
  },
  cardFooter: {
    marginTop: 'auto',
  },
  cardProgressContainer: {
    gap: spacing[2],
  },
  cardProgressTrack: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  cardProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  cardProgressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardProgressLabel: {
    fontSize: 9,
    color: colors.text.tertiary,
  },
  cardAccentLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
  },
  welcomeSection: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },

  // Balance Card
  balanceCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  balanceGradient: {
    padding: spacing[5],
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  balanceLabel: {
    letterSpacing: 1.5,
  },
  totalBalance: {
    fontSize: 42,
    fontWeight: '200',
    color: colors.gold.primary,
    letterSpacing: -1,
  },
  coinBreakdown: {
    flexDirection: 'row',
    gap: spacing[4],
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
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
  monthlyEarnings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
  },
  quickActionItem: {
    alignItems: 'center',
    gap: spacing[2],
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  quickActionIconText: {
    fontSize: 22,
    color: colors.gold.primary,
  },

  // Section
  section: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[5],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sectionLabel: {
    letterSpacing: 1.5,
  },

  // Offers
  offersScroll: {
    paddingRight: spacing[5],
  },
  offerCard: {
    width: window.innerWidth * 0.7,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginRight: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  exclusiveBadge: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  exclusiveText: {
    fontSize: 9,
    fontWeight: '600',
    color: colors.gold.primary,
    letterSpacing: 0.5,
  },
  offerTitle: {
    marginVertical: spacing[2],
  },
  offerFooter: {
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Activity Card
  activityCard: {
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  activityItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  activityNumber: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.gold.primary,
  },
  activityDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  viewActivityBtn: {
    alignItems: 'center',
    marginTop: spacing[4],
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },

  // Invitation Card
  invitationCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  invitationGradient: {
    padding: spacing[5],
  },
  invitationBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    marginBottom: spacing[3],
  },
  invitationSubtext: {
    marginTop: spacing[2],
  },
  invitationAction: {
    marginTop: spacing[4],
  },

  // Concierge Card
  conciergeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  conciergeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conciergeIconText: {
    fontSize: 18,
    color: colors.gold.primary,
  },
  conciergeContent: {
    flex: 1,
    gap: spacing[1],
  },

  bottomSpace: {
    height: spacing[8],
  },

  // Habits Section
  habitsSection: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    gap: spacing[3],
  },
  todaysLoops: {
    marginTop: spacing[1],
  },
  habitsRow: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  habitsRowItem: {
    flex: 1,
  },

  // Today's Highlights
  highlightsSection: {
    marginTop: spacing[4],
  },
  highlightsLabel: {
    letterSpacing: 1.5,
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },
  highlightsScroll: {
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  highlightCard: {
    width: 140,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  highlightBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    marginBottom: spacing[3],
  },
  highlightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  highlightEmoji: {
    fontSize: 20,
  },
  highlightTitle: {
    marginBottom: spacing[1],
  },

  // How It Works Section
  howItWorksCard: {
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  howItWorksStep: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  howItWorksIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  howItWorksIconText: {
    fontSize: 20,
  },
  howItWorksContent: {
    flex: 1,
    gap: spacing[1],
  },
  howItWorksBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: borderRadius.sm,
  },
  howItWorksDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginHorizontal: spacing[4],
  },
  coinTypesCard: {
    marginTop: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  coinTypesTitle: {
    marginBottom: spacing[3],
  },
  coinTypesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  coinTypeItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  coinTypeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: spacing[1],
  },

  // Signal Health Section
  signalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  accessStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: 20,
  },
  accessStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  accessCategoryCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  accessCategoryInfo: {
    gap: spacing[1],
  },
  accessTypeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.sm,
  },
  signalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  signalCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[2] * 2) / 3,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  signalCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  signalIcon: {
    fontSize: 16,
  },
  signalScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  signalTrendIcon: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  signalName: {
    marginBottom: spacing[2],
  },
  signalProgressContainer: {
    marginTop: 'auto',
  },
  signalProgressTrack: {
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'visible',
    position: 'relative',
  },
  signalProgressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
  signalProgressDanger: {
    backgroundColor: '#F44336',
  },
  signalThreshold: {
    position: 'absolute',
    top: -1,
    width: 2,
    height: 6,
    backgroundColor: colors.gold.primary,
  },
  accessScoreInfo: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  pillarIconBg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarWeightRow: {
    marginTop: spacing[1],
  },
  trustWarningCard: {
    marginTop: spacing[3],
    padding: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default B1_DashboardScreen;
