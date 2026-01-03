/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D1 - Privé Influence Hub (Your Power Center)
 * Purpose: Track and grow your influence
 * UI: Dark + gold luxury with performance metrics
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
import { Text, ProgressBar } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type TabType = 'active' | 'pending' | 'completed';
type ContentStatus = 'live' | 'review' | 'approved' | 'draft' | 'rejected';

interface ContentItem {
  id: string;
  brandName: string;
  brandInitial: string;
  title: string;
  contentType: 'post' | 'reel' | 'story' | 'review';
  status: ContentStatus;
  rewardPotential?: number;
  rewardsEarned?: number;
  reach?: number;
  engagement?: number;
  submittedDate?: string;
  approvedDate?: string;
}

interface InfluenceStats {
  score: number;
  level: string;
  rank: string;
  totalReach: number;
  totalEngagement: number;
  avgEngagementRate: number;
  totalEarnings: number;
  monthlyEarnings: number;
  activeCampaigns: number;
  completedCampaigns: number;
  pendingReview: number;
  categoryAuthority: string[];
}

const mockStats: InfluenceStats = {
  score: 847,
  level: 'Strong',
  rank: 'Top 15%',
  totalReach: 124500,
  totalEngagement: 8920,
  avgEngagementRate: 7.2,
  totalEarnings: 45600,
  monthlyEarnings: 8400,
  activeCampaigns: 3,
  completedCampaigns: 47,
  pendingReview: 2,
  categoryAuthority: ['Lifestyle', 'Fashion', 'Dining'],
};

const mockContent: ContentItem[] = [
  {
    id: '1',
    brandName: 'Luxury Café',
    brandInitial: 'L',
    title: 'Weekend Brunch Experience',
    contentType: 'post',
    status: 'live',
    rewardPotential: 800,
    reach: 2450,
    engagement: 186,
    submittedDate: 'Dec 15',
  },
  {
    id: '2',
    brandName: 'Summer Collection',
    brandInitial: 'S',
    title: 'New Arrivals Showcase',
    contentType: 'reel',
    status: 'review',
    rewardPotential: 1200,
    submittedDate: 'Dec 18',
  },
  {
    id: '3',
    brandName: 'Premium Spa',
    brandInitial: 'P',
    title: 'Wellness Day Review',
    contentType: 'review',
    status: 'draft',
    rewardPotential: 600,
  },
  {
    id: '4',
    brandName: 'Urban Bistro',
    brandInitial: 'U',
    title: "Chef's Special Review",
    contentType: 'post',
    status: 'approved',
    rewardsEarned: 680,
    reach: 1820,
    engagement: 142,
    approvedDate: 'Dec 10',
  },
  {
    id: '5',
    brandName: 'Artisan Watch',
    brandInitial: 'A',
    title: 'Collection Preview',
    contentType: 'story',
    status: 'approved',
    rewardsEarned: 1500,
    reach: 3200,
    engagement: 245,
    approvedDate: 'Dec 5',
  },
];

const tabs: { key: TabType; label: string; count?: number }[] = [
  { key: 'active', label: 'Active' },
  { key: 'pending', label: 'Pending' },
  { key: 'completed', label: 'Completed' },
];

export const D1_ContentHubScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('active');
  const stats = mockStats;

  const getStatusConfig = (status: ContentStatus) => {
    switch (status) {
      case 'live':
        return { color: '#4CAF50', label: 'Live', icon: '●' };
      case 'review':
        return { color: '#FFC107', label: 'Under Review', icon: '◐' };
      case 'approved':
        return { color: colors.gold.primary, label: 'Approved', icon: '✓' };
      case 'draft':
        return { color: colors.text.tertiary, label: 'Draft', icon: '○' };
      case 'rejected':
        return { color: '#FF6B6B', label: 'Rejected', icon: '✕' };
      default:
        return { color: colors.text.tertiary, label: 'Unknown', icon: '?' };
    }
  };

  const getContentTypeLabel = (type: string) => {
    switch (type) {
      case 'post': return 'Post';
      case 'reel': return 'Reel';
      case 'story': return 'Story';
      case 'review': return 'Review';
      default: return type;
    }
  };

  const filteredContent = mockContent.filter((item) => {
    switch (activeTab) {
      case 'active':
        return item.status === 'live';
      case 'pending':
        return item.status === 'review' || item.status === 'draft';
      case 'completed':
        return item.status === 'approved';
      default:
        return true;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" style={style={{...styles.headerTitle}>Influence</span>
          <span variant="caption" color={colors.text.tertiary}>
            Your content performance hub
          </span>
        </div>

        {/* Influence Score Hero */}
        <div
          style={style={{...styles.scoreCard}
          onClick={() => navigate('/prive/D7_InfluenceScore')}
          onClick={() => {}}
        >
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.12)', 'rgba(201, 169, 98, 0.04)', '#141414']}
            style={style={{...styles.scoreGradient}
          >
            <div style={style={{...styles.scoreHeader}>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.scoreLabel}>
                INFLUENCE SCORE
              </span>
              <div style={style={{...styles.rankBadge}>
                <span variant="caption" gold>{stats.rank}</span>
              </div>
            </div>

            <div style={style={{...styles.scoreRow}>
              <span style={style={{...styles.scoreNumber}>{stats.score}</span>
              <div style={style={{...styles.scoreMeta}>
                <span variant="bodyLarge" gold>{stats.level}</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Influence Level
                </span>
              </div>
            </div>

            <div style={style={{...styles.scoreProgress}>
              <ProgressBar progress={stats.score / 1000} height={4} showGlow />
              <div style={style={{...styles.scoreProgressLabels}>
                <span variant="caption" color={colors.text.tertiary}>0</span>
                <span variant="caption" color={colors.text.tertiary}>1000</span>
              </div>
            </div>

            <span variant="caption" gold style={style={{...styles.viewDetails}>
              View Score Breakdown →
            </span>
          </LinearGradient>
        </div>

        {/* Quick Stats */}
        <div style={style={{...styles.statsGrid}>
          <div style={style={{...styles.statCard}>
            <span style={style={{...styles.statNumber}>{formatNumber(stats.totalReach)}</span>
            <span variant="caption" color={colors.text.tertiary}>Total Reach</span>
          </div>
          <div style={style={{...styles.statCard}>
            <span style={style={{...styles.statNumber}>{stats.avgEngagementRate}%</span>
            <span variant="caption" color={colors.text.tertiary}>Avg Engagement</span>
          </div>
          <div style={style={{...styles.statCard}>
            <span style={style={{...styles.statNumber}>{stats.completedCampaigns}</span>
            <span variant="caption" color={colors.text.tertiary}>Campaigns</span>
          </div>
        </div>

        {/* Earnings Card */}
        <div style={style={{...styles.earningsCard}>
          <div style={style={{...styles.earningsHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.earningsLabel}>
              EARNINGS
            </span>
            <div onClick={() => navigate('/prive/B2_Wallet')}>
              <span variant="caption" gold>View Wallet →</span>
            </div>
          </div>
          <div style={style={{...styles.earningsRow}>
            <div style={style={{...styles.earningsItem}>
              <span style={style={{...styles.earningsNumber}>
                {stats.totalEarnings.toLocaleString()}
              </span>
              <span variant="caption" color={colors.text.tertiary}>Total Coins</span>
            </div>
            <div style={style={{...styles.earningsDivider} />
            <div style={style={{...styles.earningsItem}>
              <span style={[style={{...styles.earningsNumber, style={{...styles.monthlyNumber]}>
                +{stats.monthlyEarnings.toLocaleString()}
              </span>
              <span variant="caption" color={colors.text.tertiary}>This Month</span>
            </div>
          </div>
        </div>

        {/* Category Authority */}
        <div style={style={{...styles.authoritySection}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              CATEGORY AUTHORITY
            </span>
            <div onClick={() => navigate('/prive/D6_CategoryAuthority')}>
              <span variant="caption" gold>Details →</span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.authorityScroll}
          >
            {stats.categoryAuthority.map((category, index) => (
              <div key={category} style={style={{...styles.authorityBadge}>
                <span style={style={{...styles.authorityIcon}>◆</span>
                <span variant="body" color={colors.text.primary}>{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <div style={style={{...styles.tabsSection}>
          <div style={style={{...styles.tabsContainer}>
            {tabs.map((tab) => {
              const count = mockContent.filter((item) => {
                if (tab.key === 'active') return item.status === 'live';
                if (tab.key === 'pending') return item.status === 'review' || item.status === 'draft';
                if (tab.key === 'completed') return item.status === 'approved';
                return false;
              }).length;

              return (
                <div
                  key={tab.key}
                  style={[style={{...styles.tab, activeTab === tab.key && style={{...styles.tabActive]}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <Text
                    variant="body"
                    color={activeTab === tab.key ? colors.gold.primary : colors.text.secondary}
                  >
                    {tab.label}
                  </span>
                  {count > 0 && (
                    <div style={[style={{...styles.tabCount, activeTab === tab.key && style={{...styles.tabCountActive]}>
                      <span style={style={{...styles.tabCountText}>{count}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content List */}
        <div style={style={{...styles.contentSection}>
          {filteredContent.length === 0 ? (
            <div style={style={{...styles.emptyState}>
              <span style={style={{...styles.emptyIcon}>○</span>
              <span variant="body" color={colors.text.tertiary} center>
                No content in this category
              </span>
              <span variant="caption" color={colors.text.tertiary} center>
                {activeTab === 'active' && 'Your live content will appear here'}
                {activeTab === 'pending' && 'Content awaiting review will appear here'}
                {activeTab === 'completed' && 'Approved content will appear here'}
              </span>
            </div>
          ) : (
            filteredContent.map((item) => {
              const statusConfig = getStatusConfig(item.status);
              return (
                <div
                  key={item.id}
                  style={style={{...styles.contentCard}
                  onClick={() => navigate('/prive/D2_ContentPerformance', { contentId: item.id })}
                  onClick={() => {}}
                >
                  <div style={style={{...styles.contentHeader}>
                    <div style={style={{...styles.contentBrandRow}>
                      <div style={style={{...styles.brandCircle}>
                        <span style={style={{...styles.brandInitial}>{item.brandInitial}</span>
                      </div>
                      <div style={style={{...styles.contentBrandInfo}>
                        <span variant="body" color={colors.text.primary}>{item.brandName}</span>
                        <span variant="caption" color={colors.text.tertiary}>
                          {getContentTypeLabel(item.contentType)}
                        </span>
                      </div>
                    </div>
                    <div style={[style={{...styles.statusBadge, { backgroundColor: `${statusConfig.color}15` }]}>
                      <span style={[style={{...styles.statusIcon, { color: statusConfig.color }]}>
                        {statusConfig.icon}
                      </span>
                      <span variant="caption" style={{ color: statusConfig.color }}>
                        {statusConfig.label}
                      </span>
                    </div>
                  </div>

                  <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.contentTitle}>
                    {item.title}
                  </span>

                  {/* Performance Stats (for live/approved) */}
                  {(item.status === 'live' || item.status === 'approved') && item.reach && (
                    <div style={style={{...styles.performanceRow}>
                      <div style={style={{...styles.performanceStat}>
                        <span variant="body" gold>{formatNumber(item.reach)}</span>
                        <span variant="caption" color={colors.text.tertiary}>Reach</span>
                      </div>
                      <div style={style={{...styles.performanceDivider} />
                      <div style={style={{...styles.performanceStat}>
                        <span variant="body" color={colors.text.primary}>{formatNumber(item.engagement || 0)}</span>
                        <span variant="caption" color={colors.text.tertiary}>Engagement</span>
                      </div>
                      <div style={style={{...styles.performanceDivider} />
                      <div style={style={{...styles.performanceStat}>
                        <span variant="body" color={colors.text.primary}>
                          {((item.engagement || 0) / (item.reach || 1) * 100).toFixed(1)}%
                        </span>
                        <span variant="caption" color={colors.text.tertiary}>Rate</span>
                      </div>
                    </div>
                  )}

                  {/* Reward Info */}
                  <div style={style={{...styles.contentFooter}>
                    <div style={style={{...styles.rewardInfo}>
                      {item.rewardsEarned ? (
                        <>
                          <span variant="caption" color={colors.text.tertiary}>Earned</span>
                          <span variant="body" gold> {item.rewardsEarned.toLocaleString()} coins</span>
                        </>
                      ) : item.rewardPotential ? (
                        <>
                          <span variant="caption" color={colors.text.tertiary}>Potential</span>
                          <span variant="body" color={colors.text.secondary}> {item.rewardPotential.toLocaleString()} coins</span>
                        </>
                      ) : null}
                    </div>
                    <span variant="caption" color={colors.text.tertiary}>
                      {item.approvedDate || item.submittedDate || 'Draft'}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Quick Actions */}
        <div style={style={{...styles.actionsSection}>
          <div
            style={style={{...styles.actionCard}
            onClick={() => navigate('/prive/D5_ContentGuidelines')}
          >
            <div style={style={{...styles.actionIcon}>
              <span style={style={{...styles.actionIconText}>📋</span>
            </div>
            <div style={style={{...styles.actionContent}>
              <span variant="body" color={colors.text.primary}>Content Guidelines</span>
              <span variant="caption" color={colors.text.tertiary}>
                Best practices for high-performing content
              </span>
            </div>
            <span variant="body" gold>→</span>
          </div>

          <div
            style={style={{...styles.actionCard}
            onClick={() => navigate('/prive/D3_VisibilityBoost')}
          >
            <div style={style={{...styles.actionIcon}>
              <span style={style={{...styles.actionIconText}>✨</span>
            </div>
            <div style={style={{...styles.actionContent}>
              <span variant="body" color={colors.text.primary}>Boost Visibility</span>
              <span variant="caption" color={colors.text.tertiary}>
                Increase your content reach
              </span>
            </div>
            <span variant="body" gold>→</span>
          </div>
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

  // Header
  header: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.text.primary,
  },

  // Score Card
  scoreCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  scoreGradient: {
    padding: spacing[5],
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  scoreLabel: {
    letterSpacing: 1.5,
  },
  rankBadge: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderRadius: borderRadius.full,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing[4],
    marginBottom: spacing[4],
  },
  scoreNumber: {
    fontSize: 56,
    fontWeight: '200',
    color: colors.gold.primary,
    lineHeight: 60,
  },
  scoreMeta: {
    paddingBottom: spacing[2],
  },
  scoreProgress: {
    marginBottom: spacing[3],
  },
  scoreProgressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[1],
  },
  viewDetails: {
    textAlign: 'center',
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    marginTop: spacing[4],
    gap: spacing[3],
  },
  statCard: {
    flex: 1,
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.gold.primary,
    marginBottom: spacing[1],
  },

  // Earnings
  earningsCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  earningsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  earningsLabel: {
    letterSpacing: 1.5,
  },
  earningsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningsItem: {
    flex: 1,
    alignItems: 'center',
  },
  earningsNumber: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.text.primary,
    marginBottom: spacing[1],
  },
  monthlyNumber: {
    color: '#4CAF50',
  },
  earningsDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },

  // Authority
  authoritySection: {
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
    letterSpacing: 1.5,
  },
  authorityScroll: {
    paddingHorizontal: spacing[5],
  },
  authorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginRight: spacing[3],
  },
  authorityIcon: {
    fontSize: 12,
    color: colors.gold.primary,
  },

  // Tabs
  tabsSection: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[5],
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[1],
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.md,
  },
  tabActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  tabCount: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.full,
  },
  tabCountActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
  },
  tabCountText: {
    fontSize: 11,
    color: colors.text.secondary,
  },

  // Content
  contentSection: {
    marginTop: spacing[4],
    paddingHorizontal: spacing[5],
  },
  contentCard: {
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[3],
  },
  contentBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  brandCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  brandInitial: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gold.primary,
  },
  contentBrandInfo: {
    gap: spacing[1],
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  statusIcon: {
    fontSize: 10,
  },
  contentTitle: {
    marginBottom: spacing[3],
  },
  performanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    marginBottom: spacing[2],
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  performanceStat: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  performanceDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  emptyState: {
    paddingVertical: spacing[12],
    alignItems: 'center',
    gap: spacing[2],
  },
  emptyIcon: {
    fontSize: 32,
    color: colors.text.tertiary,
    marginBottom: spacing[2],
  },

  // Actions
  actionsSection: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIconText: {
    fontSize: 20,
  },
  actionContent: {
    flex: 1,
    gap: spacing[1],
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default D1_ContentHubScreen;
