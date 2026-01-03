/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F2 - Privé Recognition & Achievements
 *
 * Purpose: Recognize quality and consistency, not volume
 * - Earned badges & achievements
 * - Progress toward locked achievements
 * - Rarity system (Common, Rare, Epic, Legendary)
 * - Category grouping
 *
 * Design: Badge-style, muted gold/platinum, no gamification
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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

type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary';
type AchievementCategory = 'engagement' | 'influence' | 'trust' | 'community' | 'special';

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  rarity: AchievementRarity;
  category: AchievementCategory;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
  progressMax?: number;
  progressLabel?: string;
}

// ============================================
// MOCK DATA
// ============================================

const mockAchievements: Achievement[] = [
  // Earned
  { id: '1', icon: '🏆', title: 'First Steps', description: 'Made your first Privé purchase', rarity: 'common', category: 'engagement', earned: true, earnedDate: 'Aug 2024' },
  { id: '2', icon: '🔥', title: '7-Day Streak', description: 'Active for 7 consecutive days', rarity: 'rare', category: 'engagement', earned: true, earnedDate: 'Sep 2024' },
  { id: '3', icon: '⭐', title: 'Top Reviewer', description: 'Left 10 quality reviews', rarity: 'rare', category: 'influence', earned: true, earnedDate: 'Oct 2024' },
  { id: '4', icon: '🤝', title: 'Trusted Partner', description: 'Completed 5 brand campaigns', rarity: 'epic', category: 'trust', earned: true, earnedDate: 'Nov 2024' },
  { id: '5', icon: '💫', title: 'Rising Star', description: 'Reached Strong influence level', rarity: 'rare', category: 'influence', earned: true, earnedDate: 'Nov 2024' },
  { id: '6', icon: '🎯', title: 'Perfect Score', description: 'Achieved 5-star rating on a campaign', rarity: 'epic', category: 'trust', earned: true, earnedDate: 'Dec 2024' },

  // In Progress
  { id: '7', icon: '👑', title: 'Elite Status', description: 'Reach Elite tier', rarity: 'legendary', category: 'special', earned: false, progress: 74, progressMax: 85, progressLabel: 'Score' },
  { id: '8', icon: '🌟', title: 'Centurion', description: 'Complete 100 transactions', rarity: 'epic', category: 'engagement', earned: false, progress: 47, progressMax: 100, progressLabel: 'Transactions' },
  { id: '9', icon: '🔗', title: 'Network Builder', description: 'Refer 10 friends', rarity: 'rare', category: 'community', earned: false, progress: 5, progressMax: 10, progressLabel: 'Referrals' },
  { id: '10', icon: '📢', title: 'Icon Status', description: 'Reach Icon influence level', rarity: 'legendary', category: 'influence', earned: false, progress: 60, progressMax: 100, progressLabel: 'Progress' },
  { id: '11', icon: '💎', title: 'Diamond Member', description: 'Member for 1 year', rarity: 'legendary', category: 'special', earned: false, progress: 4, progressMax: 12, progressLabel: 'Months' },
  { id: '12', icon: '🎖️', title: 'Campaign Master', description: 'Complete 25 campaigns', rarity: 'epic', category: 'trust', earned: false, progress: 8, progressMax: 25, progressLabel: 'Campaigns' },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

const getRarityConfig = (rarity: AchievementRarity) => {
  const configs = {
    common: { label: 'Common', color: '#9CA3AF', bgColor: 'rgba(156, 163, 175, 0.1)' },
    rare: { label: 'Rare', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    epic: { label: 'Epic', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.1)' },
    legendary: { label: 'Legendary', color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.1)' },
  };
  return configs[rarity];
};

const getCategoryConfig = (category: AchievementCategory) => {
  const configs = {
    engagement: { label: 'Engagement', icon: '📊' },
    influence: { label: 'Influence', icon: '📢' },
    trust: { label: 'Trust', icon: '🛡️' },
    community: { label: 'Community', icon: '🔗' },
    special: { label: 'Special', icon: '✨' },
  };
  return configs[category];
};

// ============================================
// COMPONENT
// ============================================

export const F2_RecognitionScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'earned' | 'progress'>('earned');

  const earnedAchievements = mockAchievements.filter(a => a.earned);
  const progressAchievements = mockAchievements.filter(a => !a.earned);

  const handleBack = () => navigate(-1);

  // Stats
  const totalEarned = earnedAchievements.length;
  const totalPossible = mockAchievements.length;
  const legendaryCount = earnedAchievements.filter(a => a.rarity === 'legendary').length;
  const epicCount = earnedAchievements.filter(a => a.rarity === 'epic').length;

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.backButton} onClick={handleBack}>
            <span style={style={{...styles.backIcon}>←</span>
          </div>
          <span variant="h3" color={colors.text.primary}>Achievements</span>
          <div style={style={{...styles.headerSpacer} />
        </div>

        {/* Summary Card */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.summaryCard}
        >
          <div style={style={{...styles.summaryMain}>
            <span style={style={{...styles.summaryScore}>{totalEarned}</span>
            <span variant="caption" color={colors.text.tertiary}>of {totalPossible} Earned</span>
          </div>

          <div style={style={{...styles.summaryStats}>
            <div style={style={{...styles.summaryStat}>
              <div style={[style={{...styles.summaryStatIcon, { backgroundColor: 'rgba(245, 158, 11, 0.1)' }]}>
                <span style={style={{...styles.summaryStatEmoji}>👑</span>
              </div>
              <span variant="body" color={colors.text.primary}>{legendaryCount}</span>
              <span variant="caption" color={colors.text.tertiary}>Legendary</span>
            </div>
            <div style={style={{...styles.summaryStatDivider} />
            <div style={style={{...styles.summaryStat}>
              <div style={[style={{...styles.summaryStatIcon, { backgroundColor: 'rgba(139, 92, 246, 0.1)' }]}>
                <span style={style={{...styles.summaryStatEmoji}>💎</span>
              </div>
              <span variant="body" color={colors.text.primary}>{epicCount}</span>
              <span variant="caption" color={colors.text.tertiary}>Epic</span>
            </div>
            <div style={style={{...styles.summaryStatDivider} />
            <div style={style={{...styles.summaryStat}>
              <div style={[style={{...styles.summaryStatIcon, { backgroundColor: 'rgba(59, 130, 246, 0.1)' }]}>
                <span style={style={{...styles.summaryStatEmoji}>⭐</span>
              </div>
              <span variant="body" color={colors.text.primary}>
                {earnedAchievements.filter(a => a.rarity === 'rare').length}
              </span>
              <span variant="caption" color={colors.text.tertiary}>Rare</span>
            </div>
          </div>
        </LinearGradient>

        {/* Tab Navigation */}
        <div style={style={{...styles.tabContainer}>
          <div
            style={[style={{...styles.tab, activeTab === 'earned' && style={{...styles.tabActive]}
            onClick={() => setActiveTab('earned')}
          >
            <Text
              variant="body"
              color={activeTab === 'earned' ? colors.gold.primary : colors.text.tertiary}
            >
              Earned ({totalEarned})
            </span>
          </div>
          <div
            style={[style={{...styles.tab, activeTab === 'progress' && style={{...styles.tabActive]}
            onClick={() => setActiveTab('progress')}
          >
            <Text
              variant="body"
              color={activeTab === 'progress' ? colors.gold.primary : colors.text.tertiary}
            >
              In Progress ({progressAchievements.length})
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        {activeTab === 'earned' ? (
          <div style={style={{...styles.achievementsGrid}>
            {earnedAchievements.map((achievement) => {
              const rarity = getRarityConfig(achievement.rarity);
              return (
                <div key={achievement.id} style={style={{...styles.achievementCard}>
                  <div style={[style={{...styles.achievementIcon, { borderColor: rarity.color }]}>
                    <span style={style={{...styles.achievementEmoji}>{achievement.icon}</span>
                  </div>
                  <span variant="bodySmall" color={colors.text.primary} style={style={{...styles.achievementTitle}>
                    {achievement.title}
                  </span>
                  <div style={[style={{...styles.rarityBadge, { backgroundColor: rarity.bgColor }]}>
                    <span variant="caption" style={{ color: rarity.color, fontSize: 10 }}>
                      {rarity.label}
                    </span>
                  </div>
                  <span variant="caption" color={colors.text.tertiary} style={style={{...styles.achievementDate}>
                    {achievement.earnedDate}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={style={{...styles.progressList}>
            {progressAchievements.map((achievement) => {
              const rarity = getRarityConfig(achievement.rarity);
              const progress = achievement.progress && achievement.progressMax
                ? (achievement.progress / achievement.progressMax) * 100
                : 0;

              return (
                <div key={achievement.id} style={style={{...styles.progressCard}>
                  <div style={style={{...styles.progressCardLeft}>
                    <div style={[style={{...styles.progressIcon, { borderColor: rarity.color, opacity: 0.5 }]}>
                      <span style={[style={{...styles.progressEmoji, { opacity: 0.5 }]}>{achievement.icon}</span>
                    </div>
                  </div>
                  <div style={style={{...styles.progressCardRight}>
                    <div style={style={{...styles.progressHeader}>
                      <span variant="body" color={colors.text.primary}>{achievement.title}</span>
                      <div style={[style={{...styles.rarityBadge, { backgroundColor: rarity.bgColor }]}>
                        <span variant="caption" style={{ color: rarity.color, fontSize: 10 }}>
                          {rarity.label}
                        </span>
                      </div>
                    </div>
                    <span variant="caption" color={colors.text.tertiary}>{achievement.description}</span>
                    <div style={style={{...styles.progressBarContainer}>
                      <div style={style={{...styles.progressBar}>
                        <div style={[style={{...styles.progressBarFill, { width: `${progress}%`, backgroundColor: rarity.color }]} />
                      </div>
                      <span variant="caption" color={colors.text.tertiary}>
                        {achievement.progress}/{achievement.progressMax} {achievement.progressLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note */}
        <div style={style={{...styles.noteCard}>
          <span style={style={{...styles.noteIcon}>✨</span>
          <span variant="caption" color={colors.text.secondary}>
            Achievements reflect quality, not quantity. Focus on meaningful engagement to unlock more.
          </span>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
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
    fontSize: 20,
    color: colors.text.primary,
  },
  headerSpacer: {
    width: 40,
  },

  // Summary Card
  summaryCard: {
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[4],
  },
  summaryMain: {
    alignItems: 'center',
    marginBottom: spacing[5],
  },
  summaryScore: {
    fontSize: 56,
    fontWeight: '700',
    color: colors.gold.primary,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  summaryStat: {
    alignItems: 'center',
    gap: spacing[1],
  },
  summaryStatIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[1],
  },
  summaryStatEmoji: {
    fontSize: 18,
  },
  summaryStatDivider: {
    width: 1,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },

  // Tabs
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[1],
    marginBottom: spacing[5],
  },
  tab: {
    flex: 1,
    paddingVertical: spacing[3],
    alignItems: 'center',
    borderRadius: borderRadius.md,
  },
  tabActive: {
    backgroundColor: '#2A2A2A',
  },

  // Achievements Grid
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
    marginBottom: spacing[5],
  },
  achievementCard: {
    width: (width - spacing[5] * 2 - spacing[3] * 2) / 3,
    alignItems: 'center',
    gap: spacing[2],
  },
  achievementIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  achievementEmoji: {
    fontSize: 28,
  },
  achievementTitle: {
    textAlign: 'center',
    lineHeight: 16,
  },
  achievementDate: {
    textAlign: 'center',
  },
  rarityBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: 4,
  },

  // Progress List
  progressList: {
    gap: spacing[3],
    marginBottom: spacing[5],
  },
  progressCard: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[4],
  },
  progressCardLeft: {
    alignItems: 'center',
  },
  progressIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  progressEmoji: {
    fontSize: 24,
  },
  progressCardRight: {
    flex: 1,
    gap: spacing[2],
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBarContainer: {
    gap: spacing[1],
    marginTop: spacing[1],
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
  },

  // Note
  noteCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
  },
  noteIcon: {
    fontSize: 20,
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default F2_RecognitionScreen;
