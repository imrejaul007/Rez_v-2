/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F1 - Privé Profile (Premium Identity Dashboard)
 *
 * Purpose: Your Privé identity at a glance
 * - Premium identity card with tier & score
 * - Full 6-pillar visualization
 * - Weekly activity summary
 * - Achievements & badges
 * - Quick actions & settings
 *
 * Design: Luxury identity card, not a social profile
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

const { width } = Dimensions.get('window');

// ============================================
// TYPES
// ============================================

type PriveTier = 'none' | 'entry' | 'elite';
type AccessState = 'active' | 'grace' | 'paused' | 'review';

interface PillarScore {
  id: string;
  name: string;
  shortName: string;
  score: number;
  weight: number;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: string;
}

interface Achievement {
  id: string;
  icon: string;
  name: string;
  description: string;
  earned: boolean;
  earnedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface WeeklyActivity {
  day: string;
  active: boolean;
  coins: number;
}

interface ProfileData {
  name: string;
  photo?: string;
  tier: PriveTier;
  tierName: string;
  memberSince: string;
  memberId: string;
  accessState: AccessState;
  totalScore: number;
  pillars: PillarScore[];
  weeklyActivity: WeeklyActivity[];
  achievements: Achievement[];
  stats: {
    totalTransactions: number;
    totalCoinsEarned: number;
    campaignsCompleted: number;
    invitesSent: number;
    invitesRemaining: number;
    currentStreak: number;
  };
}

// ============================================
// MOCK DATA
// ============================================

const mockProfile: ProfileData = {
  name: 'Rejaul Karim',
  tier: 'entry',
  tierName: 'Privé Signature',
  memberSince: 'Aug 2024',
  memberId: 'PV-2024-08-1247',
  accessState: 'active',
  totalScore: 74.5,
  pillars: [
    { id: 'engagement', name: 'Engagement', shortName: 'Engage', score: 78, weight: 0.25, trend: 'up', icon: '📊', color: '#4CAF50' },
    { id: 'trust', name: 'Trust & Integrity', shortName: 'Trust', score: 92, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
    { id: 'influence', name: 'Influence', shortName: 'Influence', score: 65, weight: 0.20, trend: 'up', icon: '📢', color: '#E91E63' },
    { id: 'economic', name: 'Economic Value', shortName: 'Economic', score: 70, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
    { id: 'brand_affinity', name: 'Brand Affinity', shortName: 'Brand', score: 60, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
    { id: 'network', name: 'Network', shortName: 'Network', score: 55, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
  ],
  weeklyActivity: [
    { day: 'M', active: true, coins: 45 },
    { day: 'T', active: true, coins: 30 },
    { day: 'W', active: false, coins: 0 },
    { day: 'T', active: true, coins: 60 },
    { day: 'F', active: true, coins: 25 },
    { day: 'S', active: false, coins: 0 },
    { day: 'S', active: true, coins: 50 },
  ],
  achievements: [
    { id: '1', icon: '🏆', name: 'First Transaction', description: 'Made your first Privé purchase', earned: true, earnedDate: 'Aug 2024', rarity: 'common' },
    { id: '2', icon: '🔥', name: '7-Day Streak', description: 'Active for 7 consecutive days', earned: true, earnedDate: 'Sep 2024', rarity: 'rare' },
    { id: '3', icon: '⭐', name: 'Top Reviewer', description: 'Left 10 quality reviews', earned: true, earnedDate: 'Oct 2024', rarity: 'rare' },
    { id: '4', icon: '👑', name: 'Elite Status', description: 'Reach Elite tier', earned: false, rarity: 'legendary' },
  ],
  stats: {
    totalTransactions: 47,
    totalCoinsEarned: 12450,
    campaignsCompleted: 8,
    invitesSent: 5,
    invitesRemaining: 3,
    currentStreak: 5,
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

const getTierColor = (tier: PriveTier) => {
  switch (tier) {
    case 'elite': return '#10B981';
    case 'entry': return colors.gold.primary;
    default: return colors.text.tertiary;
  }
};

const getAccessStateInfo = (state: AccessState) => {
  const states = {
    active: { label: 'Active', color: '#10B981', icon: '●' },
    grace: { label: 'Grace Period', color: '#F59E0B', icon: '◐' },
    paused: { label: 'Paused', color: '#6B7280', icon: '○' },
    review: { label: 'Under Review', color: '#EF4444', icon: '◌' },
  };
  return states[state];
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up': return { icon: '↑', color: '#10B981' };
    case 'down': return { icon: '↓', color: '#EF4444' };
    default: return { icon: '→', color: '#6B7280' };
  }
};

const getRarityColor = (rarity: string) => {
  const colors = {
    common: '#9CA3AF',
    rare: '#3B82F6',
    epic: '#8B5CF6',
    legendary: '#F59E0B',
  };
  return colors[rarity as keyof typeof colors] || '#9CA3AF';
};

// ============================================
// COMPONENT
// ============================================

interface F1_ProfileScreenProps {
  profile?: ProfileData;
}

export const F1_ProfileScreen: React.FC<F1_ProfileScreenProps> = ({
  profile = mockProfile,
}) => {
  const navigate = useNavigate();
  const [showAllPillars, setShowAllPillars] = useState(false);

  const accessState = getAccessStateInfo(profile.accessState);
  const weeklyCoins = profile.weeklyActivity.reduce((sum, d) => sum + d.coins, 0);
  const activeDays = profile.weeklyActivity.filter(d => d.active).length;

  // Quick Actions
  const quickActions = [
    { id: 'wallet', icon: '💰', label: 'Wallet', screen: 'F10_Wallet' },
    { id: 'invites', icon: '✉️', label: 'Invites', screen: 'F6_Invitations', badge: profile.stats.invitesRemaining },
    { id: 'activity', icon: '📋', label: 'Activity', screen: 'F5_ActivityStatement' },
    { id: 'settings', icon: '⚙️', label: 'Settings', screen: 'F11_Settings' },
  ];

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h3" color={colors.text.primary}>Profile</span>
          <div
            style={style={{...styles.editButton}
            onClick={() => navigate('/prive/F8_ProfileEdit')}
          >
            <span style={style={{...styles.editIcon}>✎</span>
          </div>
        </div>

        {/* Identity Card */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.identityCard}
        >
          {/* Card Header */}
          <div style={style={{...styles.cardHeader}>
            <div style={style={{...styles.cardBrand}>
              <span style={style={{...styles.brandLogo}>◈</span>
              <span variant="caption" gold>PRIVÉ</span>
            </div>
            <div style={[style={{...styles.accessBadge, { backgroundColor: `${accessState.color}20` }]}>
              <span style={{ color: accessState.color, fontSize: 8 }}>{accessState.icon}</span>
              <span variant="caption" style={{ color: accessState.color }}>{accessState.label}</span>
            </div>
          </div>

          {/* Profile Info */}
          <div style={style={{...styles.profileInfo}>
            <div style={style={{...styles.avatarContainer}>
              {profile.photo ? (
                <img src={{ uri: profile.photo }} style={style={{...styles.avatar} />
              ) : (
                <div style={style={{...styles.avatarPlaceholder}>
                  <span style={style={{...styles.avatarInitial}>{profile.name.charAt(0)}</span>
                </div>
              )}
              <div style={style={{...styles.avatarRing} />
              <div style={style={{...styles.tierBadge}>
                <span style={style={{...styles.tierIcon}>
                  {profile.tier === 'elite' ? '👑' : '✦'}
                </span>
              </div>
            </div>

            <div style={style={{...styles.profileDetails}>
              <span variant="h2" color={colors.text.primary}>{profile.name}</span>
              <span variant="body" gold>{profile.tierName}</span>
              <span variant="caption" color={colors.text.tertiary}>
                Member since {profile.memberSince}
              </span>
            </div>
          </div>

          {/* Score Display */}
          <div style={style={{...styles.scoreSection}>
            <div style={style={{...styles.scoreMain}>
              <span variant="caption" color={colors.text.tertiary}>PRIVÉ SCORE</span>
              <span style={style={{...styles.scoreValue}>{profile.totalScore.toFixed(1)}</span>
            </div>
            <div style={style={{...styles.scoreDivider} />
            <div style={style={{...styles.scoreSecondary}>
              <div style={style={{...styles.scoreItem}>
                <span variant="h3" color={colors.text.primary}>{profile.stats.currentStreak}</span>
                <span variant="caption" color={colors.text.tertiary}>Day Streak</span>
              </div>
              <div style={style={{...styles.scoreItem}>
                <span variant="h3" color={colors.text.primary}>{profile.stats.campaignsCompleted}</span>
                <span variant="caption" color={colors.text.tertiary}>Campaigns</span>
              </div>
            </div>
          </div>

          {/* Member ID */}
          <div style={style={{...styles.memberIdRow}>
            <span variant="caption" color={colors.text.tertiary}>{profile.memberId}</span>
          </div>
        </LinearGradient>

        {/* Quick Actions */}
        <div style={style={{...styles.quickActionsRow}>
          {quickActions.map((action) => (
            <div
              key={action.id}
              style={style={{...styles.quickAction}
              onClick={() => navigate(action.screen)}
            >
              <div style={style={{...styles.quickActionIcon}>
                <span style={style={{...styles.quickActionEmoji}>{action.icon}</span>
                {action.badge && action.badge > 0 && (
                  <div style={style={{...styles.quickActionBadge}>
                    <span style={style={{...styles.quickActionBadgeText}>{action.badge}</span>
                  </div>
                )}
              </div>
              <span variant="caption" color={colors.text.secondary}>{action.label}</span>
            </div>
          ))}
        </div>

        {/* 6-Pillar Score */}
        <div style={style={{...styles.section}>
          <div
            style={style={{...styles.sectionHeader}
            onClick={() => navigate('/prive/A5_AccessStatus')}
          >
            <span variant="label" color={colors.text.tertiary}>6-PILLAR SCORE</span>
            <span variant="caption" gold>View Details →</span>
          </div>

          <div style={style={{...styles.pillarsGrid}>
            {(showAllPillars ? profile.pillars : profile.pillars.slice(0, 3)).map((pillar) => {
              const trend = getTrendIcon(pillar.trend);
              return (
                <div key={pillar.id} style={style={{...styles.pillarCard}>
                  <div style={[style={{...styles.pillarIcon, { backgroundColor: `${pillar.color}20` }]}>
                    <span style={style={{...styles.pillarEmoji}>{pillar.icon}</span>
                  </div>
                  <div style={style={{...styles.pillarInfo}>
                    <span variant="caption" color={colors.text.tertiary}>{pillar.shortName}</span>
                    <div style={style={{...styles.pillarScoreRow}>
                      <span variant="bodyLarge" color={colors.text.primary}>{pillar.score}</span>
                      <span style={[style={{...styles.pillarTrend, { color: trend.color }]}>{trend.icon}</span>
                    </div>
                  </div>
                  <div style={style={{...styles.pillarProgress}>
                    <div style={style={{...styles.pillarProgressTrack}>
                      <div
                        style={[
                          style={{...styles.pillarProgressFill,
                          { width: `${pillar.score}%`, backgroundColor: pillar.color },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAllPillars && (
            <div
              style={style={{...styles.showMoreButton}
              onClick={() => setShowAllPillars(true)}
            >
              <span variant="caption" gold>Show All 6 Pillars</span>
            </div>
          )}
        </div>

        {/* Weekly Activity */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary}>THIS WEEK</span>
            <span variant="caption" color="#10B981">+{weeklyCoins} coins</span>
          </div>

          <div style={style={{...styles.weeklyCard}>
            <div style={style={{...styles.weeklyDays}>
              {profile.weeklyActivity.map((day, index) => (
                <div key={index} style={style={{...styles.weeklyDay}>
                  <div
                    style={[
                      style={{...styles.weeklyDot,
                      day.active && style={{...styles.weeklyDotActive,
                    ]}
                  >
                    {day.active && <span style={style={{...styles.weeklyDotCheck}>✓</span>}
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>{day.day}</span>
                </div>
              ))}
            </div>
            <div style={style={{...styles.weeklySummary}>
              <div style={style={{...styles.weeklyStat}>
                <span variant="h3" gold>{activeDays}/7</span>
                <span variant="caption" color={colors.text.tertiary}>Active Days</span>
              </div>
              <div style={style={{...styles.weeklyStatDivider} />
              <div style={style={{...styles.weeklyStat}>
                <span variant="h3" color={colors.text.primary}>{weeklyCoins}</span>
                <span variant="caption" color={colors.text.tertiary}>Coins Earned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div style={style={{...styles.section}>
          <div
            style={style={{...styles.sectionHeader}
            onClick={() => navigate('/prive/F2_Recognition')}
          >
            <span variant="label" color={colors.text.tertiary}>ACHIEVEMENTS</span>
            <span variant="caption" gold>View All →</span>
          </div>

          <div
            horizontal
            
            style={style={{...styles.achievementsScroll}
          >
            {profile.achievements.filter(a => a.earned).map((achievement) => (
              <div key={achievement.id} style={style={{...styles.achievementCard}>
                <div style={[style={{...styles.achievementIcon, { borderColor: getRarityColor(achievement.rarity) }]}>
                  <span style={style={{...styles.achievementEmoji}>{achievement.icon}</span>
                </div>
                <span variant="caption" color={colors.text.primary} style={style={{...styles.achievementName}>
                  {achievement.name}
                </span>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.achievementDate}>
                  {achievement.earnedDate}
                </span>
              </div>
            ))}

            {/* Locked Achievement Preview */}
            {profile.achievements.filter(a => !a.earned).slice(0, 1).map((achievement) => (
              <div key={achievement.id} style={[style={{...styles.achievementCard, style={{...styles.achievementLocked]}>
                <div style={[style={{...styles.achievementIcon, style={{...styles.achievementIconLocked]}>
                  <span style={style={{...styles.achievementEmoji}>🔒</span>
                </div>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.achievementName}>
                  {achievement.name}
                </span>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.achievementDate}>
                  Locked
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            YOUR JOURNEY
          </span>

          <div style={style={{...styles.statsGrid}>
            <div style={style={{...styles.statCard}>
              <span variant="h2" gold>{profile.stats.totalTransactions}</span>
              <span variant="caption" color={colors.text.tertiary}>Transactions</span>
            </div>
            <div style={style={{...styles.statCard}>
              <span variant="h2" color={colors.text.primary}>
                {(profile.stats.totalCoinsEarned / 1000).toFixed(1)}K
              </span>
              <span variant="caption" color={colors.text.tertiary}>Coins Earned</span>
            </div>
            <div style={style={{...styles.statCard}>
              <span variant="h2" color={colors.text.primary}>{profile.stats.invitesSent}</span>
              <span variant="caption" color={colors.text.tertiary}>Friends Invited</span>
            </div>
            <div style={style={{...styles.statCard}>
              <span variant="h2" gold>{profile.stats.campaignsCompleted}</span>
              <span variant="caption" color={colors.text.tertiary}>Campaigns</span>
            </div>
          </div>
        </div>

        {/* Profile Options */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ACCOUNT
          </span>

          {[
            { icon: '👤', label: 'Edit Profile', screen: 'F8_ProfileEdit' },
            { icon: '🔐', label: 'Privacy & Visibility', screen: 'F4_VisibilityControl' },
            { icon: '📊', label: 'Category Authority', screen: 'F3_Authority' },
            { icon: '📜', label: 'Activity Statement', screen: 'F5_ActivityStatement' },
            { icon: '⚙️', label: 'Settings', screen: 'F11_Settings' },
            { icon: '❓', label: 'Help & Support', screen: 'Help' },
          ].map((item, index) => (
            <div
              key={index}
              style={style={{...styles.optionRow}
              onClick={() => navigate(item.screen)}
            >
              <div style={style={{...styles.optionLeft}>
                <span style={style={{...styles.optionIcon}>{item.icon}</span>
                <span variant="body" color={colors.text.primary}>{item.label}</span>
              </div>
              <span style={style={{...styles.optionArrow}>›</span>
            </div>
          ))}
        </div>

        {/* Exit Option */}
        <div
          style={style={{...styles.exitButton}
          onClick={() => navigate('/prive/F7_Exit')}
        >
          <span variant="body" color="#EF4444">Leave Privé</span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

// ============================================
// STYLES
// ============================================

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: 18,
    color: colors.gold.primary,
  },

  // Identity Card
  identityCard: {
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    marginBottom: spacing[4],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  cardBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  brandLogo: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  accessBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: 20,
  },

  // Profile Info
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
    marginBottom: spacing[5],
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  avatarPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    fontSize: 28,
    color: colors.gold.primary,
    fontWeight: '600',
  },
  avatarRing: {
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: colors.gold.primary,
  },
  tierBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0A0A0A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.gold.primary,
  },
  tierIcon: {
    fontSize: 12,
  },
  profileDetails: {
    flex: 1,
    gap: spacing[1],
  },

  // Score Section
  scoreSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  scoreMain: {
    alignItems: 'center',
    paddingRight: spacing[5],
  },
  scoreValue: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.gold.primary,
  },
  scoreDivider: {
    width: 1,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scoreSecondary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: spacing[4],
  },
  scoreItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  memberIdRow: {
    alignItems: 'center',
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },

  // Quick Actions
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[5],
  },
  quickAction: {
    alignItems: 'center',
    gap: spacing[2],
  },
  quickActionIcon: {
    position: 'relative',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionEmoji: {
    fontSize: 20,
  },
  quickActionBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  quickActionBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#0A0A0A',
  },

  // Sections
  section: {
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    letterSpacing: 1.5,
  },

  // Pillars Grid
  pillarsGrid: {
    gap: spacing[3],
  },
  pillarCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[3],
  },
  pillarIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarEmoji: {
    fontSize: 20,
  },
  pillarInfo: {
    flex: 1,
    gap: spacing[1],
  },
  pillarScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  pillarTrend: {
    fontSize: 14,
    fontWeight: '600',
  },
  pillarProgress: {
    width: 60,
  },
  pillarProgressTrack: {
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  pillarProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  showMoreButton: {
    alignItems: 'center',
    paddingVertical: spacing[3],
    marginTop: spacing[2],
  },

  // Weekly Activity
  weeklyCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
  },
  weeklyDays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing[4],
  },
  weeklyDay: {
    alignItems: 'center',
    gap: spacing[2],
  },
  weeklyDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weeklyDotActive: {
    backgroundColor: colors.gold.primary,
  },
  weeklyDotCheck: {
    fontSize: 14,
    color: '#0A0A0A',
    fontWeight: '700',
  },
  weeklySummary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  weeklyStat: {
    alignItems: 'center',
    paddingHorizontal: spacing[6],
  },
  weeklyStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2A2A2A',
  },

  // Achievements
  achievementsScroll: {
    marginHorizontal: -spacing[5],
    paddingHorizontal: spacing[5],
  },
  achievementCard: {
    width: 100,
    alignItems: 'center',
    marginRight: spacing[3],
    gap: spacing[2],
  },
  achievementLocked: {
    opacity: 0.5,
  },
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  achievementIconLocked: {
    borderColor: '#3A3A3A',
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementName: {
    textAlign: 'center',
  },
  achievementDate: {
    textAlign: 'center',
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  statCard: {
    width: (width - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[1],
  },

  // Options
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[2],
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  optionIcon: {
    fontSize: 20,
  },
  optionArrow: {
    fontSize: 24,
    color: colors.text.tertiary,
  },

  // Exit
  exitButton: {
    alignItems: 'center',
    paddingVertical: spacing[4],
    marginTop: spacing[4],
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default F1_ProfileScreen;
