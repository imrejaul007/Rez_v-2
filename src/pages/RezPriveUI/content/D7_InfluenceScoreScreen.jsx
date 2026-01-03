/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D7 - Privé Influence Score Screen (Upgraded)
 *
 * Purpose: Comprehensive influence dashboard showing:
 * - Connected social platforms & sync status
 * - Real engagement metrics (not vanity numbers)
 * - Content performance breakdown
 * - Campaign impact history
 * - Improvement actions
 *
 * Design: Mystery = Value (show levels, not raw algorithm)
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
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

type InfluenceLevel = 'Building' | 'Growing' | 'Strong' | 'Elite' | 'Icon';

interface ConnectedPlatform {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  followers?: number;
  engagementRate?: number;
  lastSync?: string;
  verified?: boolean;
}

interface ContentMetric {
  id: string;
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  trendValue?: string;
}

interface CampaignImpact {
  id: string;
  brandName: string;
  brandLogo: string;
  completedDate: string;
  rating: number;
  impactScore: number;
  type: 'review' | 'post' | 'story' | 'video';
}

interface InfluenceCategory {
  id: string;
  name: string;
  icon: string;
  level: 'low' | 'medium' | 'high' | 'expert';
  contentCount: number;
}

interface ImprovementAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  impact: string;
  route?: string;
  completed?: boolean;
}

// ============================================
// MOCK DATA
// ============================================

const mockPlatforms: ConnectedPlatform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: '📸',
    connected: true,
    followers: 12500,
    engagementRate: 4.2,
    lastSync: '2 hours ago',
    verified: false,
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '▶️',
    connected: true,
    followers: 3200,
    engagementRate: 6.8,
    lastSync: '1 day ago',
    verified: false,
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    icon: '𝕏',
    connected: false,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: '💼',
    connected: false,
  },
];

const mockContentMetrics: ContentMetric[] = [
  { id: 'reach', label: 'Monthly Reach', value: '45.2K', trend: 'up', trendValue: '+12%' },
  { id: 'engagement', label: 'Avg Engagement', value: '4.8%', trend: 'up', trendValue: '+0.6%' },
  { id: 'saves', label: 'Content Saves', value: '892', trend: 'stable' },
  { id: 'shares', label: 'Total Shares', value: '2.1K', trend: 'up', trendValue: '+8%' },
];

const mockCampaigns: CampaignImpact[] = [
  {
    id: '1',
    brandName: 'StyleHub',
    brandLogo: '👗',
    completedDate: 'Dec 15',
    rating: 5,
    impactScore: 92,
    type: 'post',
  },
  {
    id: '2',
    brandName: 'TechGear Pro',
    brandLogo: '🎧',
    completedDate: 'Dec 8',
    rating: 4,
    impactScore: 78,
    type: 'review',
  },
  {
    id: '3',
    brandName: 'Café Artisan',
    brandLogo: '☕',
    completedDate: 'Nov 28',
    rating: 5,
    impactScore: 85,
    type: 'story',
  },
];

const mockCategories: InfluenceCategory[] = [
  { id: 'fashion', name: 'Fashion & Style', icon: '👗', level: 'high', contentCount: 45 },
  { id: 'tech', name: 'Tech & Gadgets', icon: '📱', level: 'medium', contentCount: 23 },
  { id: 'food', name: 'Food & Dining', icon: '🍽️', level: 'high', contentCount: 38 },
  { id: 'lifestyle', name: 'Lifestyle', icon: '✨', level: 'expert', contentCount: 67 },
];

const mockActions: ImprovementAction[] = [
  {
    id: 'connect_twitter',
    icon: '🔗',
    title: 'Connect X (Twitter)',
    description: 'Unlock cross-platform influence tracking',
    impact: '+15 Influence',
    completed: false,
  },
  {
    id: 'complete_campaign',
    icon: '📢',
    title: 'Complete a Campaign',
    description: 'Accept and finish a brand campaign',
    impact: '+20 Influence',
    route: 'Offers',
    completed: false,
  },
  {
    id: 'post_review',
    icon: '⭐',
    title: 'Post an Authentic Review',
    description: 'Share your experience with a Privé brand',
    impact: '+10 Influence',
    route: 'Content',
    completed: false,
  },
  {
    id: 'grow_engagement',
    icon: '💬',
    title: 'Boost Engagement Rate',
    description: 'Reach 5%+ engagement on next 3 posts',
    impact: '+25 Influence',
    completed: false,
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

const formatFollowers = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

const getLevelConfig = (level: InfluenceLevel) => {
  const configs = {
    Building: { progress: 0.15, color: '#6B7280', index: 0 },
    Growing: { progress: 0.35, color: '#F59E0B', index: 1 },
    Strong: { progress: 0.60, color: colors.gold.primary, index: 2 },
    Elite: { progress: 0.85, color: '#10B981', index: 3 },
    Icon: { progress: 1.0, color: '#8B5CF6', index: 4 },
  };
  return configs[level];
};

const getCategoryLevelColor = (level: string) => {
  const levelColors = {
    low: '#6B7280',
    medium: '#F59E0B',
    high: colors.gold.primary,
    expert: '#10B981',
  };
  return levelColors[level as keyof typeof levelColors] || colors.text.tertiary;
};

// ============================================
// COMPONENT
// ============================================

interface D7_InfluenceScoreScreenProps {
  influenceLevel?: InfluenceLevel;
  influenceScore?: number;
  platforms?: ConnectedPlatform[];
  contentMetrics?: ContentMetric[];
  campaigns?: CampaignImpact[];
  categories?: InfluenceCategory[];
  actions?: ImprovementAction[];
}

export const D7_InfluenceScoreScreen: React.FC<D7_InfluenceScoreScreenProps> = ({
  influenceLevel = 'Strong',
  influenceScore = 72,
  platforms = mockPlatforms,
  contentMetrics = mockContentMetrics,
  campaigns = mockCampaigns,
  categories = mockCategories,
  actions = mockActions,
}) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'platforms' | 'campaigns'>('overview');

  const levelConfig = getLevelConfig(influenceLevel);
  const connectedCount = platforms.filter(p => p.connected).length;
  const totalFollowers = platforms
    .filter(p => p.connected && p.followers)
    .reduce((sum, p) => sum + (p.followers || 0), 0);

  const handleBack = () => navigate(-1);

  const handleConnectPlatform = (platform: ConnectedPlatform) => {
    // Navigate to platform connection flow
    console.log('Connect platform:', platform.name);
  };

  const handleAction = (action: ImprovementAction) => {
    if (action.route) {
      navigate(action.route);
    }
  };

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
          <span variant="h3" color={colors.text.primary}>Influence Score</span>
          <div style={style={{...styles.headerSpacer} />
        </div>

        {/* Main Score Card */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.scoreCard}
        >
          <div style={style={{...styles.scoreHeader}>
            <span variant="caption" color={colors.text.tertiary}>YOUR INFLUENCE LEVEL</span>
            <div style={style={{...styles.pillarsIndicator}>
              <span variant="caption" color={colors.gold.primary}>20% of Privé Score</span>
            </div>
          </div>

          {/* Level Display */}
          <div style={style={{...styles.levelDisplay}>
            <span style={style={{...styles.levelEmoji}>📢</span>
            <span variant="h1" gold style={style={{...styles.levelText}>{influenceLevel}</span>
          </div>

          {/* Level Progress Bar */}
          <div style={style={{...styles.levelProgress}>
            <div style={style={{...styles.levelTrack}>
              <LinearGradient
                colors={[levelConfig.color, colors.gold.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={[style={{...styles.levelFill, { width: `${levelConfig.progress * 100}%` }]}
              />
            </div>
            <div style={style={{...styles.levelMarkers}>
              {['Building', 'Growing', 'Strong', 'Elite', 'Icon'].map((level, index) => (
                <div
                  key={level}
                  style={[
                    style={{...styles.levelMarker,
                    index <= levelConfig.index && style={{...styles.levelMarkerActive,
                  ]}
                />
              ))}
            </div>
            <div style={style={{...styles.levelLabels}>
              <span variant="caption" color={colors.text.tertiary}>Building</span>
              <span variant="caption" color={colors.text.tertiary}>Icon</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div style={style={{...styles.quickStats}>
            <div style={style={{...styles.quickStat}>
              <span variant="h3" color={colors.text.primary}>{formatFollowers(totalFollowers)}</span>
              <span variant="caption" color={colors.text.tertiary}>Total Reach</span>
            </div>
            <div style={style={{...styles.quickStatDivider} />
            <div style={style={{...styles.quickStat}>
              <span variant="h3" color={colors.text.primary}>{connectedCount}</span>
              <span variant="caption" color={colors.text.tertiary}>Platforms</span>
            </div>
            <div style={style={{...styles.quickStatDivider} />
            <div style={style={{...styles.quickStat}>
              <span variant="h3" color={colors.text.primary}>{campaigns.length}</span>
              <span variant="caption" color={colors.text.tertiary}>Campaigns</span>
            </div>
          </div>
        </LinearGradient>

        {/* Tab Navigation */}
        <div style={style={{...styles.tabContainer}>
          {(['overview', 'platforms', 'campaigns'] as const).map((tab) => (
            <div
              key={tab}
              style={[style={{...styles.tab, activeTab === tab && style={{...styles.tabActive]}
              onClick={() => setActiveTab(tab)}
            >
              <Text
                variant="bodySmall"
                color={activeTab === tab ? colors.gold.primary : colors.text.tertiary}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Content Metrics */}
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                CONTENT PERFORMANCE
              </span>
              <div style={style={{...styles.metricsGrid}>
                {contentMetrics.map((metric) => (
                  <div key={metric.id} style={style={{...styles.metricCard}>
                    <div style={style={{...styles.metricHeader}>
                      <span variant="caption" color={colors.text.tertiary}>{metric.label}</span>
                      {metric.trend === 'up' && metric.trendValue && (
                        <span variant="caption" color="#10B981">{metric.trendValue} ↑</span>
                      )}
                      {metric.trend === 'down' && metric.trendValue && (
                        <span variant="caption" color="#EF4444">{metric.trendValue} ↓</span>
                      )}
                    </div>
                    <span variant="h3" color={colors.text.primary}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category Authority */}
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                CATEGORY AUTHORITY
              </span>
              <span variant="caption" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
                Your influence strength by niche
              </span>
              {categories.map((category) => (
                <div key={category.id} style={style={{...styles.categoryCard}>
                  <div style={style={{...styles.categoryIcon}>
                    <span style={style={{...styles.categoryEmoji}>{category.icon}</span>
                  </div>
                  <div style={style={{...styles.categoryInfo}>
                    <span variant="body" color={colors.text.primary}>{category.name}</span>
                    <div style={style={{...styles.categoryMeta}>
                      <span variant="caption" color={colors.text.tertiary}>
                        {category.contentCount} posts
                      </span>
                    </div>
                  </div>
                  <div style={[style={{...styles.categoryLevel, { backgroundColor: `${getCategoryLevelColor(category.level)}20` }]}>
                    <span variant="caption" style={{ color: getCategoryLevelColor(category.level) }}>
                      {category.level.charAt(0).toUpperCase() + category.level.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Improvement Actions */}
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                BOOST YOUR INFLUENCE
              </span>
              <span variant="caption" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
                Complete these to level up faster
              </span>
              {actions.slice(0, 3).map((action) => (
                <div
                  key={action.id}
                  style={style={{...styles.actionCard}
                  onClick={() => handleAction(action)}
                  onClick={() => {}}
                >
                  <div style={style={{...styles.actionIcon}>
                    <span style={style={{...styles.actionEmoji}>{action.icon}</span>
                  </div>
                  <div style={style={{...styles.actionContent}>
                    <span variant="body" color={colors.text.primary}>{action.title}</span>
                    <span variant="caption" color={colors.text.tertiary}>{action.description}</span>
                  </div>
                  <div style={style={{...styles.actionImpact}>
                    <span variant="caption" color="#10B981">{action.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'platforms' && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              CONNECTED PLATFORMS
            </span>
            <span variant="caption" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
              More platforms = stronger influence signal
            </span>

            {platforms.map((platform) => (
              <div key={platform.id} style={style={{...styles.platformCard}>
                <div style={style={{...styles.platformIcon}>
                  <span style={style={{...styles.platformEmoji}>{platform.icon}</span>
                </div>
                <div style={style={{...styles.platformInfo}>
                  <div style={style={{...styles.platformHeader}>
                    <span variant="body" color={colors.text.primary}>{platform.name}</span>
                    {platform.verified && (
                      <div style={style={{...styles.verifiedBadge}>
                        <span style={style={{...styles.verifiedIcon}>✓</span>
                      </div>
                    )}
                  </div>
                  {platform.connected ? (
                    <div style={style={{...styles.platformStats}>
                      <span variant="caption" color={colors.text.tertiary}>
                        {formatFollowers(platform.followers || 0)} followers
                      </span>
                      <span variant="caption" color={colors.text.tertiary}> • </span>
                      <span variant="caption" color="#10B981">
                        {platform.engagementRate}% ER
                      </span>
                    </div>
                  ) : (
                    <span variant="caption" color={colors.text.tertiary}>Not connected</span>
                  )}
                </div>
                {platform.connected ? (
                  <div style={style={{...styles.syncStatus}>
                    <div style={style={{...styles.syncDot} />
                    <span variant="caption" color={colors.text.tertiary}>{platform.lastSync}</span>
                  </div>
                ) : (
                  <div
                    style={style={{...styles.connectButton}
                    onClick={() => handleConnectPlatform(platform)}
                  >
                    <span variant="caption" color={colors.gold.primary}>Connect</span>
                  </div>
                )}
              </div>
            ))}

            {/* Platform Benefits */}
            <div style={style={{...styles.benefitsCard}>
              <span variant="body" color={colors.text.primary} style={style={{...styles.benefitsTitle}>
                Why Connect More Platforms?
              </span>
              <div style={style={{...styles.benefitItem}>
                <span style={style={{...styles.benefitIcon}>📊</span>
                <span variant="caption" color={colors.text.secondary}>
                  Cross-platform reach calculation
                </span>
              </div>
              <div style={style={{...styles.benefitItem}>
                <span style={style={{...styles.benefitIcon}>🎯</span>
                <span variant="caption" color={colors.text.secondary}>
                  Better brand matching for campaigns
                </span>
              </div>
              <div style={style={{...styles.benefitItem}>
                <span style={style={{...styles.benefitIcon}>📈</span>
                <span variant="caption" color={colors.text.secondary}>
                  Faster influence score growth
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              CAMPAIGN HISTORY
            </span>
            <span variant="caption" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
              Your brand collaboration impact
            </span>

            {campaigns.length > 0 ? (
              <>
                {campaigns.map((campaign) => (
                  <div key={campaign.id} style={style={{...styles.campaignCard}>
                    <div style={style={{...styles.campaignIcon}>
                      <span style={style={{...styles.campaignEmoji}>{campaign.brandLogo}</span>
                    </div>
                    <div style={style={{...styles.campaignInfo}>
                      <span variant="body" color={colors.text.primary}>{campaign.brandName}</span>
                      <div style={style={{...styles.campaignMeta}>
                        <span variant="caption" color={colors.text.tertiary}>
                          {campaign.completedDate}
                        </span>
                        <span variant="caption" color={colors.text.tertiary}> • </span>
                        <span variant="caption" color={colors.text.tertiary}>
                          {campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div style={style={{...styles.campaignScore}>
                      <div style={style={{...styles.campaignRating}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Text
                            key={star}
                            style={[
                              style={{...styles.starIcon,
                              star <= campaign.rating && style={{...styles.starFilled,
                            ]}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span variant="caption" color="#10B981">+{campaign.impactScore} Impact</span>
                    </div>
                  </div>
                ))}

                {/* Campaign Summary */}
                <div style={style={{...styles.campaignSummary}>
                  <div style={style={{...styles.summaryItem}>
                    <span variant="h3" color={colors.gold.primary}>{campaigns.length}</span>
                    <span variant="caption" color={colors.text.tertiary}>Completed</span>
                  </div>
                  <div style={style={{...styles.summaryDivider} />
                  <div style={style={{...styles.summaryItem}>
                    <span variant="h3" color={colors.text.primary}>
                      {(campaigns.reduce((sum, c) => sum + c.rating, 0) / campaigns.length).toFixed(1)}
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>Avg Rating</span>
                  </div>
                  <div style={style={{...styles.summaryDivider} />
                  <div style={style={{...styles.summaryItem}>
                    <span variant="h3" color="#10B981">
                      +{campaigns.reduce((sum, c) => sum + c.impactScore, 0)}
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>Total Impact</span>
                  </div>
                </div>
              </>
            ) : (
              <div style={style={{...styles.emptyState}>
                <span style={style={{...styles.emptyEmoji}>📢</span>
                <span variant="body" color={colors.text.secondary} center>
                  No campaigns completed yet
                </span>
                <span variant="caption" color={colors.text.tertiary} center>
                  Accept a brand campaign to start building your influence
                </span>
                <div
                  style={style={{...styles.exploreCampaignsButton}
                  onClick={() => navigate('/prive/Offers')}
                >
                  <span variant="body" color="#0A0A0A">Explore Campaigns</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mystery Note */}
        <div style={style={{...styles.mysteryCard}>
          <div style={style={{...styles.mysteryIcon}>
            <span style={style={{...styles.mysteryEmoji}>✨</span>
          </div>
          <div style={style={{...styles.mysteryContent}>
            <span variant="bodySmall" color={colors.text.secondary}>
              Your influence score is calculated from authentic engagement signals across platforms.
              Focus on creating genuine value — the score will follow.
            </span>
          </div>
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

  // Score Card
  scoreCard: {
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[4],
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  pillarsIndicator: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  levelDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  levelEmoji: {
    fontSize: 32,
  },
  levelText: {
    fontSize: 36,
  },

  // Level Progress
  levelProgress: {
    marginBottom: spacing[5],
  },
  levelTrack: {
    height: 6,
    backgroundColor: '#2A2A2A',
    borderRadius: 3,
    overflow: 'hidden',
  },
  levelFill: {
    height: '100%',
    borderRadius: 3,
  },
  levelMarkers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[2],
    paddingHorizontal: spacing[1],
  },
  levelMarker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2A2A2A',
  },
  levelMarkerActive: {
    backgroundColor: colors.gold.primary,
  },
  levelLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[1],
  },

  // Quick Stats
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  quickStat: {
    alignItems: 'center',
    gap: spacing[1],
  },
  quickStatDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2A2A2A',
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

  // Sections
  section: {
    marginBottom: spacing[6],
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[1],
  },
  sectionSubtext: {
    marginBottom: spacing[4],
  },

  // Content Metrics Grid
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  metricCard: {
    width: (width - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },

  // Category Cards
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryEmoji: {
    fontSize: 20,
  },
  categoryInfo: {
    flex: 1,
    gap: spacing[1],
  },
  categoryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  categoryLevel: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Action Cards
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionEmoji: {
    fontSize: 20,
  },
  actionContent: {
    flex: 1,
    gap: spacing[1],
  },
  actionImpact: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Platform Cards
  platformCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  platformIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  platformEmoji: {
    fontSize: 22,
  },
  platformInfo: {
    flex: 1,
    gap: spacing[1],
  },
  platformHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedIcon: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  platformStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  syncStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  syncDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10B981',
  },
  connectButton: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },

  // Benefits Card
  benefitsCard: {
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginTop: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
  },
  benefitsTitle: {
    marginBottom: spacing[3],
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[2],
  },
  benefitIcon: {
    fontSize: 16,
  },

  // Campaign Cards
  campaignCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  campaignIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campaignEmoji: {
    fontSize: 22,
  },
  campaignInfo: {
    flex: 1,
    gap: spacing[1],
  },
  campaignMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  campaignScore: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  campaignRating: {
    flexDirection: 'row',
    gap: 2,
  },
  starIcon: {
    fontSize: 12,
    color: '#3A3A3A',
  },
  starFilled: {
    color: '#F59E0B',
  },

  // Campaign Summary
  campaignSummary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    marginTop: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  summaryItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2A2A2A',
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing[8],
    gap: spacing[3],
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: spacing[2],
  },
  exploreCampaignsButton: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
    marginTop: spacing[4],
  },

  // Mystery Card
  mysteryCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
    gap: spacing[3],
    marginTop: spacing[2],
  },
  mysteryIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mysteryEmoji: {
    fontSize: 18,
  },
  mysteryContent: {
    flex: 1,
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default D7_InfluenceScoreScreen;
