/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F12 - User Analytics Dashboard
 *
 * Comprehensive analytics with:
 * - Earnings overview (daily, weekly, monthly)
 * - Activity heatmap
 * - Reward breakdown by category
 * - Spending vs earning trends
 * - Engagement metrics
 * - Growth insights
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
// LinearGradient will use CSS
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// ============================================
// TYPES
// ============================================

type TimePeriod = 'week' | 'month' | 'year';
type TabType = 'overview' | 'earnings' | 'activity';

interface EarningData {
  label: string;
  value: number;
  change: number;
}

interface CategoryBreakdown {
  category: string;
  icon: string;
  amount: number;
  percentage: number;
  color: string;
}

interface ActivityDay {
  day: string;
  level: 0 | 1 | 2 | 3 | 4; // 0 = none, 4 = highest
}

interface InsightCard {
  id: string;
  icon: string;
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

// ============================================
// MOCK DATA
// ============================================

const earningsData: Record<TimePeriod, EarningData> = {
  week: { label: 'This Week', value: 2450, change: 12.5 },
  month: { label: 'This Month', value: 8750, change: 8.2 },
  year: { label: 'This Year', value: 45200, change: 23.4 },
};

const categoryBreakdown: CategoryBreakdown[] = [
  { category: 'Dining', icon: '🍽️', amount: 3250, percentage: 35, color: '#F59E0B' },
  { category: 'Fashion', icon: '👗', amount: 2480, percentage: 27, color: '#EC4899' },
  { category: 'Wellness', icon: '🧖', amount: 1850, percentage: 20, color: '#10B981' },
  { category: 'Lifestyle', icon: '✨', amount: 1170, percentage: 13, color: '#8B5CF6' },
  { category: 'Other', icon: '📦', amount: 450, percentage: 5, color: '#6B7280' },
];

const weeklyActivity: ActivityDay[] = [
  { day: 'M', level: 3 },
  { day: 'T', level: 4 },
  { day: 'W', level: 2 },
  { day: 'T', level: 3 },
  { day: 'F', level: 4 },
  { day: 'S', level: 1 },
  { day: 'S', level: 2 },
];

const monthlyTrend = [45, 62, 38, 71, 55, 83, 67, 92, 78, 85, 95, 88];

const insights: InsightCard[] = [
  { id: '1', icon: '🔥', title: 'Streak', value: '12 days', change: '+5 days', positive: true },
  { id: '2', icon: '💰', title: 'Avg. Reward', value: '42%', change: '+8%', positive: true },
  { id: '3', icon: '🎯', title: 'Redemption Rate', value: '87%', change: '+12%', positive: true },
  { id: '4', icon: '⭐', title: 'Partner Rating', value: '4.9', change: 'Top 5%', positive: true },
];

const topPartners = [
  { id: '1', name: 'The Grand Café', visits: 12, earned: 1250, icon: '🍽️' },
  { id: '2', name: 'Maison Luxe', visits: 8, earned: 980, icon: '👗' },
  { id: '3', name: 'Premium Spa', visits: 6, earned: 720, icon: '🧖' },
];

// ============================================
// COMPONENT
// ============================================

export const F12_AnalyticsDashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('month');
  const [selectedTab, setSelectedTab] = useState<TabType>('overview');

  const handleBack = () => navigate(-1);

  const currentEarnings = earningsData[selectedPeriod];

  const getActivityColor = (level: number) => {
    switch (level) {
      case 0: return '#1A1A1A';
      case 1: return 'rgba(201, 169, 98, 0.2)';
      case 2: return 'rgba(201, 169, 98, 0.4)';
      case 3: return 'rgba(201, 169, 98, 0.7)';
      case 4: return colors.gold.primary;
      default: return '#1A1A1A';
    }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backButton} onClick={handleBack}>
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Analytics</span>
        <div style={style={{...styles.exportButton}>
          <span style={{ fontSize: 18 }}>📤</span>
        </div>
      </div>

      {/* Period Selector */}
      <div style={style={{...styles.periodSelector}>
        {(['week', 'month', 'year'] as TimePeriod[]).map(period => (
          <div
            key={period}
            style={[
              style={{...styles.periodChip,
              selectedPeriod === period && style={{...styles.periodChipActive,
            ]}
            onClick={() => setSelectedPeriod(period)}
          >
            <Text
              variant="bodySmall"
              color={selectedPeriod === period ? colors.gold.primary : colors.text.secondary}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </span>
          </div>
        ))}
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Earnings Hero Card */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.2)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.heroCard}
        >
          <span variant="label" color={colors.text.tertiary}>{currentEarnings.label.toUpperCase()}</span>
          <div style={style={{...styles.heroValue}>
            <span style={style={{...styles.heroAmount}>{currentEarnings.value.toLocaleString()}</span>
            <span variant="body" gold> ReZ</span>
          </div>
          <div style={style={{...styles.heroChange}>
            <span variant="body" style={{ color: '#10B981' }}>
              ↑ {currentEarnings.change}%
            </span>
            <span variant="caption" color={colors.text.tertiary}> vs previous {selectedPeriod}</span>
          </div>

          {/* Mini Chart */}
          <div style={style={{...styles.miniChart}>
            {monthlyTrend.map((value, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.chartBar,
                  {
                    height: (value / 100) * 50,
                    backgroundColor: index === monthlyTrend.length - 1
                      ? colors.gold.primary
                      : 'rgba(201, 169, 98, 0.3)',
                  },
                ]}
              />
            ))}
          </div>
        </LinearGradient>

        {/* Quick Insights */}
        <div style={style={{...styles.insightsGrid}>
          {insights.map(insight => (
            <div key={insight.id} style={style={{...styles.insightCard}>
              <span style={style={{...styles.insightIcon}>{insight.icon}</span>
              <span variant="caption" color={colors.text.tertiary}>{insight.title}</span>
              <span variant="h4" color={colors.text.primary}>{insight.value}</span>
              <Text
                variant="caption"
                style={{ color: insight.positive ? '#10B981' : '#EF4444' }}
              >
                {insight.change}
              </span>
            </div>
          ))}
        </div>

        {/* Category Breakdown */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            EARNINGS BY CATEGORY
          </span>
          <div style={style={{...styles.categoryCard}>
            {/* Bar Chart */}
            <div style={style={{...styles.barChartContainer}>
              {categoryBreakdown.map((cat, index) => (
                <div key={cat.category} style={style={{...styles.barRow}>
                  <div style={style={{...styles.barLabel}>
                    <span style={{ fontSize: 16 }}>{cat.icon}</span>
                    <span variant="bodySmall" color={colors.text.primary}>{cat.category}</span>
                  </div>
                  <div style={style={{...styles.barContainer}>
                    <div
                      style={[
                        style={{...styles.bar,
                        {
                          width: `${cat.percentage}%`,
                          backgroundColor: cat.color,
                        },
                      ]}
                    />
                  </div>
                  <span variant="bodySmall" color={colors.text.secondary}>
                    {cat.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Heatmap */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WEEKLY ACTIVITY
          </span>
          <div style={style={{...styles.activityCard}>
            <div style={style={{...styles.activityRow}>
              {weeklyActivity.map((day, index) => (
                <div key={index} style={style={{...styles.activityDay}>
                  <div
                    style={[
                      style={{...styles.activityDot,
                      { backgroundColor: getActivityColor(day.level) },
                    ]}
                  />
                  <span variant="caption" color={colors.text.tertiary}>{day.day}</span>
                </div>
              ))}
            </div>
            <div style={style={{...styles.activityLegend}>
              <span variant="caption" color={colors.text.tertiary}>Less</span>
              {[0, 1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  style={[style={{...styles.legendDot, { backgroundColor: getActivityColor(level) }]}
                />
              ))}
              <span variant="caption" color={colors.text.tertiary}>More</span>
            </div>
          </div>
        </div>

        {/* Top Partners */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              TOP PARTNERS
            </span>
            <div>
              <span variant="caption" gold>View All</span>
            </div>
          </div>
          {topPartners.map((partner, index) => (
            <div key={partner.id} style={style={{...styles.partnerCard}>
              <div style={style={{...styles.partnerRank}>
                <span variant="bodySmall" gold>#{index + 1}</span>
              </div>
              <div style={style={{...styles.partnerIcon}>
                <span style={{ fontSize: 20 }}>{partner.icon}</span>
              </div>
              <div style={style={{...styles.partnerInfo}>
                <span variant="body" color={colors.text.primary}>{partner.name}</span>
                <span variant="caption" color={colors.text.tertiary}>
                  {partner.visits} visits
                </span>
              </div>
              <div style={style={{...styles.partnerEarned}>
                <span variant="body" gold>{partner.earned}</span>
                <span variant="caption" color={colors.text.tertiary}>ReZ earned</span>
              </div>
            </div>
          ))}
        </div>

        {/* Goals Progress */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            MONTHLY GOALS
          </span>
          <div style={style={{...styles.goalsCard}>
            <div style={style={{...styles.goalItem}>
              <div style={style={{...styles.goalHeader}>
                <span variant="body" color={colors.text.primary}>Earn 10,000 ReZ</span>
                <span variant="bodySmall" gold>87%</span>
              </div>
              <div style={style={{...styles.goalBar}>
                <div style={[style={{...styles.goalProgress, { width: '87%' }]} />
              </div>
            </div>
            <div style={style={{...styles.goalItem}>
              <div style={style={{...styles.goalHeader}>
                <span variant="body" color={colors.text.primary}>Visit 15 Partners</span>
                <span variant="bodySmall" gold>60%</span>
              </div>
              <div style={style={{...styles.goalBar}>
                <div style={[style={{...styles.goalProgress, { width: '60%' }]} />
              </div>
            </div>
            <div style={style={{...styles.goalItem}>
              <div style={style={{...styles.goalHeader}>
                <span variant="body" color={colors.text.primary}>Complete 3 Campaigns</span>
                <span variant="bodySmall" gold>100%</span>
              </div>
              <div style={style={{...styles.goalBar}>
                <div style={[style={{...styles.goalProgress, { width: '100%' }]} />
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div style={style={{...styles.tipCard}>
          <span style={style={{...styles.tipIcon}>💡</span>
          <div style={style={{...styles.tipContent}>
            <span variant="bodySmall" color={colors.text.primary}>Pro Tip</span>
            <span variant="caption" color={colors.text.secondary}>
              Visit during happy hours (2-5 PM) for bonus rewards at participating partners.
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

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
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
  exportButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Period Selector
  periodSelector: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
    gap: spacing[2],
  },
  periodChip: {
    flex: 1,
    paddingVertical: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  periodChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Hero Card
  heroCard: {
    marginHorizontal: spacing[5],
    marginBottom: spacing[5],
    padding: spacing[5],
    borderRadius: borderRadius['2xl'],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  heroValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: spacing[2],
  },
  heroAmount: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.gold.primary,
  },
  heroChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  miniChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: spacing[5],
    height: 50,
    gap: spacing[1],
  },
  chartBar: {
    flex: 1,
    borderRadius: 2,
  },

  // Insights Grid
  insightsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[5],
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  insightCard: {
    width: '47%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[1],
  },
  insightIcon: {
    fontSize: 24,
    marginBottom: spacing[2],
  },

  // Sections
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },

  // Category Breakdown
  categoryCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
  },
  barChartContainer: {
    gap: spacing[4],
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  barLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    gap: spacing[2],
  },
  barContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },

  // Activity
  activityCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[5],
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing[4],
  },
  activityDay: {
    alignItems: 'center',
    gap: spacing[2],
  },
  activityDot: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  activityLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 3,
  },

  // Partners
  partnerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    marginBottom: spacing[2],
  },
  partnerRank: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  partnerIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  partnerInfo: {
    flex: 1,
  },
  partnerEarned: {
    alignItems: 'flex-end',
  },

  // Goals
  goalsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    gap: spacing[4],
  },
  goalItem: {
    gap: spacing[2],
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  goalBar: {
    height: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 4,
    overflow: 'hidden',
  },
  goalProgress: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: 4,
  },

  // Tip Card
  tipCard: {
    flexDirection: 'row',
    marginHorizontal: spacing[5],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  tipIcon: {
    fontSize: 24,
    marginRight: spacing[3],
  },
  tipContent: {
    flex: 1,
    gap: spacing[1],
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default F12_AnalyticsDashboardScreen;
