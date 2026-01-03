/**
 * Privé Recognition & Achievements - Web Version
 * Purpose: Recognize quality and consistency, not volume
 * Earned badges, achievements, progress tracking
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

// Mock Data
const mockAchievements = [
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

const getRarityConfig = (rarity) => {
  const configs = {
    common: { label: 'Common', color: '#9CA3AF', bgColor: 'rgba(156, 163, 175, 0.1)' },
    rare: { label: 'Rare', color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.1)' },
    epic: { label: 'Epic', color: '#8B5CF6', bgColor: 'rgba(139, 92, 246, 0.1)' },
    legendary: { label: 'Legendary', color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.1)' },
  };
  return configs[rarity];
};

const PriveRecognition = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('earned');

  const earnedAchievements = mockAchievements.filter(a => a.earned);
  const progressAchievements = mockAchievements.filter(a => !a.earned);

  const totalEarned = earnedAchievements.length;
  const totalPossible = mockAchievements.length;
  const legendaryCount = earnedAchievements.filter(a => a.rarity === 'legendary').length;
  const epicCount = earnedAchievements.filter(a => a.rarity === 'epic').length;

  return (
    <div style={styles.container}>
      <BottomNavManager />

      <div style={styles.scrollView}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.backButton} onClick={() => navigate('/prive/profile')}>
            <span style={styles.backIcon}>←</span>
          </div>
          <h1 style={styles.title}>Achievements</h1>
          <div style={styles.headerSpacer} />
        </div>

        {/* Summary Card */}
        <div style={styles.summaryCard}>
          <div style={styles.summaryMain}>
            <div style={styles.summaryScore}>{totalEarned}</div>
            <p style={styles.summaryCaption}>of {totalPossible} Earned</p>
          </div>

          <div style={styles.summaryStats}>
            <div style={styles.summaryStat}>
              <div style={{ ...styles.summaryStatIcon, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                <span style={styles.summaryStatEmoji}>👑</span>
              </div>
              <p style={styles.statNumber}>{legendaryCount}</p>
              <p style={styles.statLabel}>Legendary</p>
            </div>
            <div style={styles.summaryStatDivider} />
            <div style={styles.summaryStat}>
              <div style={{ ...styles.summaryStatIcon, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                <span style={styles.summaryStatEmoji}>💎</span>
              </div>
              <p style={styles.statNumber}>{epicCount}</p>
              <p style={styles.statLabel}>Epic</p>
            </div>
            <div style={styles.summaryStatDivider} />
            <div style={styles.summaryStat}>
              <div style={{ ...styles.summaryStatIcon, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                <span style={styles.summaryStatEmoji}>⭐</span>
              </div>
              <p style={styles.statNumber}>
                {earnedAchievements.filter(a => a.rarity === 'rare').length}
              </p>
              <p style={styles.statLabel}>Rare</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={styles.tabContainer}>
          <div
            style={{ ...styles.tab, ...(activeTab === 'earned' && styles.tabActive) }}
            onClick={() => setActiveTab('earned')}
          >
            <span style={{ ...styles.tabText, color: activeTab === 'earned' ? colors.gold.primary : colors.text.tertiary }}>
              Earned ({totalEarned})
            </span>
          </div>
          <div
            style={{ ...styles.tab, ...(activeTab === 'progress' && styles.tabActive) }}
            onClick={() => setActiveTab('progress')}
          >
            <span style={{ ...styles.tabText, color: activeTab === 'progress' ? colors.gold.primary : colors.text.tertiary }}>
              In Progress ({progressAchievements.length})
            </span>
          </div>
        </div>

        {/* Achievements Grid */}
        {activeTab === 'earned' ? (
          <div style={styles.achievementsGrid}>
            {earnedAchievements.map((achievement) => {
              const rarity = getRarityConfig(achievement.rarity);
              return (
                <div key={achievement.id} style={styles.achievementCard}>
                  <div style={{ ...styles.achievementIcon, borderColor: rarity.color }}>
                    <span style={styles.achievementEmoji}>{achievement.icon}</span>
                  </div>
                  <p style={styles.achievementTitle}>{achievement.title}</p>
                  <div style={{ ...styles.rarityBadge, backgroundColor: rarity.bgColor }}>
                    <span style={{ color: rarity.color, fontSize: '10px' }}>{rarity.label}</span>
                  </div>
                  <p style={styles.achievementDate}>{achievement.earnedDate}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={styles.progressList}>
            {progressAchievements.map((achievement) => {
              const rarity = getRarityConfig(achievement.rarity);
              const progress = achievement.progress && achievement.progressMax
                ? (achievement.progress / achievement.progressMax) * 100
                : 0;

              return (
                <div key={achievement.id} style={styles.progressCard}>
                  <div style={styles.progressCardLeft}>
                    <div style={{ ...styles.progressIcon, borderColor: rarity.color, opacity: 0.5 }}>
                      <span style={{ ...styles.progressEmoji, opacity: 0.5 }}>{achievement.icon}</span>
                    </div>
                  </div>
                  <div style={styles.progressCardRight}>
                    <div style={styles.progressHeader}>
                      <p style={styles.progressTitle}>{achievement.title}</p>
                      <div style={{ ...styles.rarityBadge, backgroundColor: rarity.bgColor }}>
                        <span style={{ color: rarity.color, fontSize: '10px' }}>{rarity.label}</span>
                      </div>
                    </div>
                    <p style={styles.progressDesc}>{achievement.description}</p>
                    <div style={styles.progressBarContainer}>
                      <div style={styles.progressBar}>
                        <div style={{ ...styles.progressBarFill, width: `${progress}%`, backgroundColor: rarity.color }} />
                      </div>
                      <p style={styles.progressText}>
                        {achievement.progress}/{achievement.progressMax} {achievement.progressLabel}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note */}
        <div style={styles.noteCard}>
          <span style={styles.noteIcon}>✨</span>
          <p style={styles.noteText}>
            Achievements reflect quality, not quantity. Focus on meaningful engagement to unlock more.
          </p>
        </div>

        <div style={{ height: spacing[10] }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0A0A0A',
    paddingBottom: '80px',
  },
  scrollView: {
    padding: `0 ${spacing[5]}px`,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  backIcon: {
    fontSize: '20px',
    color: colors.text.primary,
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: colors.text.primary,
    margin: 0,
  },
  headerSpacer: {
    width: '40px',
  },
  summaryCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    border: '1px solid rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[4],
  },
  summaryMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: spacing[5],
  },
  summaryScore: {
    fontSize: '56px',
    fontWeight: '700',
    color: colors.gold.primary,
  },
  summaryCaption: {
    fontSize: '12px',
    color: colors.text.tertiary,
    margin: 0,
  },
  summaryStats: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: spacing[4],
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  summaryStat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing[1],
  },
  summaryStatIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[1],
  },
  summaryStatEmoji: {
    fontSize: '18px',
  },
  statNumber: {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text.primary,
    margin: 0,
  },
  statLabel: {
    fontSize: '12px',
    color: colors.text.tertiary,
    margin: 0,
  },
  summaryStatDivider: {
    width: '1px',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabContainer: {
    display: 'flex',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[1],
    marginBottom: spacing[5],
  },
  tab: {
    flex: 1,
    padding: `${spacing[3]}px 0`,
    textAlign: 'center',
    borderRadius: borderRadius.md,
    cursor: 'pointer',
  },
  tabActive: {
    backgroundColor: '#2A2A2A',
  },
  tabText: {
    fontSize: '16px',
    fontWeight: '500',
  },
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: spacing[3],
    marginBottom: spacing[5],
  },
  achievementCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing[2],
  },
  achievementIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '32px',
    backgroundColor: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
  },
  achievementEmoji: {
    fontSize: '28px',
  },
  achievementTitle: {
    fontSize: '13px',
    fontWeight: '500',
    color: colors.text.primary,
    textAlign: 'center',
    lineHeight: '16px',
    margin: 0,
  },
  rarityBadge: {
    padding: `2px ${spacing[2]}px`,
    borderRadius: '4px',
  },
  achievementDate: {
    fontSize: '12px',
    color: colors.text.tertiary,
    textAlign: 'center',
    margin: 0,
  },
  progressList: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[3],
    marginBottom: spacing[5],
  },
  progressCard: {
    display: 'flex',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[4],
  },
  progressCardLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  progressIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '28px',
    backgroundColor: '#2A2A2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed',
  },
  progressEmoji: {
    fontSize: '24px',
  },
  progressCardRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[2],
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: colors.text.primary,
    margin: 0,
  },
  progressDesc: {
    fontSize: '12px',
    color: colors.text.tertiary,
    margin: 0,
  },
  progressBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  progressBar: {
    height: '4px',
    backgroundColor: '#2A2A2A',
    borderRadius: '2px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '2px',
  },
  progressText: {
    fontSize: '12px',
    color: colors.text.tertiary,
    margin: 0,
  },
  noteCard: {
    display: 'flex',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    gap: spacing[3],
    border: '1px solid rgba(201, 169, 98, 0.1)',
  },
  noteIcon: {
    fontSize: '20px',
  },
  noteText: {
    fontSize: '12px',
    color: colors.text.secondary,
    margin: 0,
  },
};

export default PriveRecognition;
