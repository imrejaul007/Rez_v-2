/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Earnings Screen
 * Comprehensive view of all earnings: cashback, invitations, campaigns, content, and more
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

type TabType = 'all' | 'cashback' | 'invitations' | 'campaigns' | 'content';
type StatusFilter = 'all' | 'pending' | 'completed';

interface EarningSource {
  id: string;
  label: string;
  icon: string;
  color: string;
  total: number;
  pending: number;
}

interface Earning {
  id: string;
  type: 'cashback' | 'invitation' | 'campaign' | 'content' | 'referral' | 'bonus' | 'store_visit';
  title: string;
  subtitle: string;
  amount: number;
  coinType: 'rez' | 'prive' | 'branded';
  status: 'pending' | 'completed' | 'processing';
  date: string;
  estimatedDate?: string;
  icon?: string;
}

const earningSources: EarningSource[] = [
  { id: 'cashback', label: 'Cashback', icon: '◇', color: colors.gold.primary, total: 4850, pending: 1200 },
  { id: 'invitations', label: 'Invitations', icon: '✦', color: '#64B5F6', total: 2500, pending: 500 },
  { id: 'campaigns', label: 'Campaigns', icon: '★', color: '#4CAF50', total: 3200, pending: 800 },
  { id: 'content', label: 'Content', icon: '◎', color: '#FF9800', total: 1850, pending: 350 },
];

const mockEarnings: Earning[] = [
  // Cashback earnings
  {
    id: '1',
    type: 'cashback',
    title: 'Purchase at Maison de Luxe',
    subtitle: 'Artisan Leather Wallet',
    amount: 675,
    coinType: 'prive',
    status: 'pending',
    date: 'Today',
    estimatedDate: 'Dec 22, 2025',
  },
  {
    id: '2',
    type: 'store_visit',
    title: 'Store Visit Reward',
    subtitle: 'The Grand Café',
    amount: 320,
    coinType: 'rez',
    status: 'pending',
    date: 'Today',
    estimatedDate: 'Dec 21, 2025',
  },
  {
    id: '3',
    type: 'cashback',
    title: 'Weekend Dining',
    subtitle: 'Luxury Café',
    amount: 450,
    coinType: 'rez',
    status: 'completed',
    date: 'Dec 15, 2025',
  },
  // Invitation/Referral earnings
  {
    id: '4',
    type: 'referral',
    title: 'Referral Bonus',
    subtitle: 'Amit Sharma joined Privé',
    amount: 500,
    coinType: 'rez',
    status: 'completed',
    date: 'Dec 10, 2025',
  },
  {
    id: '5',
    type: 'referral',
    title: 'Referral Bonus',
    subtitle: 'Priya Patel joined Privé',
    amount: 500,
    coinType: 'rez',
    status: 'completed',
    date: 'Dec 5, 2025',
  },
  {
    id: '6',
    type: 'invitation',
    title: 'Campaign Invitation Bonus',
    subtitle: 'Accepted Artisan Watch Co invite',
    amount: 200,
    coinType: 'prive',
    status: 'pending',
    date: 'Dec 18, 2025',
    estimatedDate: 'Dec 25, 2025',
  },
  // Campaign earnings
  {
    id: '7',
    type: 'campaign',
    title: 'Campaign Completion',
    subtitle: 'Weekend Dining Experience',
    amount: 1500,
    coinType: 'prive',
    status: 'processing',
    date: 'Dec 12, 2025',
    estimatedDate: 'Dec 25, 2025',
  },
  {
    id: '8',
    type: 'campaign',
    title: 'Campaign Milestone',
    subtitle: 'Luxury Café Holiday Special',
    amount: 800,
    coinType: 'prive',
    status: 'completed',
    date: 'Dec 8, 2025',
  },
  // Content earnings
  {
    id: '9',
    type: 'content',
    title: 'Social Share Bonus',
    subtitle: 'Instagram Story - 2.5K views',
    amount: 350,
    coinType: 'prive',
    status: 'pending',
    date: 'Yesterday',
    estimatedDate: 'Dec 23, 2025',
  },
  {
    id: '10',
    type: 'content',
    title: 'Review Reward',
    subtitle: 'Premium Spa - Featured Review',
    amount: 250,
    coinType: 'branded',
    status: 'completed',
    date: 'Dec 5, 2025',
  },
  {
    id: '11',
    type: 'content',
    title: 'UGC Video Bonus',
    subtitle: 'Elegance Boutique - 5K engagement',
    amount: 500,
    coinType: 'prive',
    status: 'completed',
    date: 'Dec 1, 2025',
  },
  // Bonus earnings
  {
    id: '12',
    type: 'bonus',
    title: 'Tier Upgrade Bonus',
    subtitle: 'Reached Privé Signature',
    amount: 1000,
    coinType: 'rez',
    status: 'completed',
    date: 'Nov 28, 2025',
  },
];

const getTypeIcon = (type: Earning['type']): string => {
  switch (type) {
    case 'cashback': return '◇';
    case 'store_visit': return '◇';
    case 'invitation': return '✦';
    case 'referral': return '✦';
    case 'campaign': return '★';
    case 'content': return '◎';
    case 'bonus': return '◈';
    default: return '◇';
  }
};

const getTypeColor = (type: Earning['type']): string => {
  switch (type) {
    case 'cashback': return colors.gold.primary;
    case 'store_visit': return colors.gold.primary;
    case 'invitation': return '#64B5F6';
    case 'referral': return '#64B5F6';
    case 'campaign': return '#4CAF50';
    case 'content': return '#FF9800';
    case 'bonus': return '#9C27B0';
    default: return colors.gold.primary;
  }
};

const getCoinColor = (coinType: Earning['coinType']): string => {
  switch (coinType) {
    case 'rez': return colors.gold.primary;
    case 'prive': return '#B8860B';
    case 'branded': return '#64B5F6';
    default: return colors.gold.primary;
  }
};

const getStatusColor = (status: Earning['status']): string => {
  switch (status) {
    case 'completed': return '#4CAF50';
    case 'pending': return '#FFC107';
    case 'processing': return '#64B5F6';
    default: return colors.text.tertiary;
  }
};

export const EarningsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  // Calculate totals
  const totalEarned = mockEarnings.reduce((sum, e) => sum + e.amount, 0);
  const pendingTotal = mockEarnings
    .filter(e => e.status === 'pending' || e.status === 'processing')
    .reduce((sum, e) => sum + e.amount, 0);
  const completedTotal = mockEarnings
    .filter(e => e.status === 'completed')
    .reduce((sum, e) => sum + e.amount, 0);

  // Filter earnings based on tab and status
  const filteredEarnings = mockEarnings.filter(e => {
    // Tab filter
    if (activeTab === 'cashback' && e.type !== 'cashback' && e.type !== 'store_visit') return false;
    if (activeTab === 'invitations' && e.type !== 'invitation' && e.type !== 'referral') return false;
    if (activeTab === 'campaigns' && e.type !== 'campaign') return false;
    if (activeTab === 'content' && e.type !== 'content') return false;

    // Status filter
    if (statusFilter === 'pending' && e.status !== 'pending' && e.status !== 'processing') return false;
    if (statusFilter === 'completed' && e.status !== 'completed') return false;

    return true;
  };

  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'all', label: 'All', icon: '◈' },
    { id: 'cashback', label: 'Cashback', icon: '◇' },
    { id: 'invitations', label: 'Invitations', icon: '✦' },
    { id: 'campaigns', label: 'Campaigns', icon: '★' },
    { id: 'content', label: 'Content', icon: '◎' },
  ];

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>My Earnings</span>
        <div style={{ width: 40 }} />
      </div>

      <div
        style={style={{...styles.scrollView}
        
      >
        {/* Total Earnings Hero */}
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.2)', 'rgba(201, 169, 98, 0.05)']}
          style={style={{...styles.heroCard}
        >
          <span variant="caption" color={colors.text.tertiary}>TOTAL EARNED THIS MONTH</span>
          <span style={style={{...styles.heroAmount}>+{totalEarned.toLocaleString()}</span>
          <span variant="caption" color={colors.text.tertiary}>coins</span>

          <div style={style={{...styles.heroStats}>
            <div style={style={{...styles.heroStatItem}>
              <div style={[style={{...styles.statusDot, { backgroundColor: '#4CAF50' }]} />
              <span variant="caption" color={colors.text.tertiary}>Received</span>
              <span variant="bodyLarge" color="#4CAF50">+{completedTotal.toLocaleString()}</span>
            </div>
            <div style={style={{...styles.heroStatDivider} />
            <div style={style={{...styles.heroStatItem}>
              <div style={[style={{...styles.statusDot, { backgroundColor: '#FFC107' }]} />
              <span variant="caption" color={colors.text.tertiary}>Pending</span>
              <span variant="bodyLarge" color="#FFC107">+{pendingTotal.toLocaleString()}</span>
            </div>
          </div>
        </LinearGradient>

        {/* Earning Sources Breakdown */}
        <div style={style={{...styles.sourcesSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            EARNINGS BY SOURCE
          </span>
          <div style={style={{...styles.sourcesGrid}>
            {earningSources.map((source) => (
              <div
                key={source.id}
                style={[
                  style={{...styles.sourceCard,
                  activeTab === source.id && style={{...styles.sourceCardActive,
                ]}
                onClick={() => setActiveTab(source.id as TabType)}
              >
                <div style={[style={{...styles.sourceIcon, { backgroundColor: source.color + '20' }]}>
                  <span style={{ color: source.color, fontSize: 16 }}>{source.icon}</span>
                </div>
                <span variant="caption" color={colors.text.tertiary}>{source.label}</span>
                <span variant="body" style={{ color: source.color }}>
                  +{source.total.toLocaleString()}
                </span>
                {source.pending > 0 && (
                  <span variant="caption" color="#FFC107">
                    {source.pending.toLocaleString()} pending
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          horizontal
          
          style={style={{...styles.tabsScroll}
          contentContainerStyle={style={{...styles.tabsContent}
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={[style={{...styles.tab, activeTab === tab.id && style={{...styles.tabActive]}
              onClick={() => setActiveTab(tab.id)}
            >
              <Text
                variant="caption"
                color={activeTab === tab.id ? colors.gold.primary : colors.text.tertiary}
              >
                {tab.icon} {tab.label}
              </span>
            </div>
          ))}
        </div>

        {/* Status Filter */}
        <div style={style={{...styles.statusFilters}>
          {(['all', 'pending', 'completed'] as StatusFilter[]).map((status) => (
            <div
              key={status}
              style={[
                style={{...styles.statusFilter,
                statusFilter === status && style={{...styles.statusFilterActive,
              ]}
              onClick={() => setStatusFilter(status)}
            >
              <Text
                variant="caption"
                color={statusFilter === status ? colors.gold.primary : colors.text.tertiary}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          ))}
        </div>

        {/* How to Earn More */}
        <div
          style={style={{...styles.earnMoreCard}
          onClick={() => navigate('/prive/Explore')}
        >
          <div style={style={{...styles.earnMoreIcon}>
            <span style={style={{...styles.earnMoreIconText}>↑</span>
          </div>
          <div style={style={{...styles.earnMoreContent}>
            <span variant="body" color={colors.text.primary}>Earn More Coins</span>
            <span variant="caption" color={colors.text.tertiary}>
              Shop, invite friends, complete campaigns, share content
            </span>
          </div>
          <span variant="body" gold>→</span>
        </div>

        {/* Earnings List */}
        <div style={style={{...styles.earningsList}>
          <div style={style={{...styles.listHeader}>
            <span variant="label" color={colors.text.tertiary}>
              {activeTab === 'all' ? 'ALL EARNINGS' : activeTab.toUpperCase()}
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              {filteredEarnings.length} transactions
            </span>
          </div>

          {filteredEarnings.length === 0 ? (
            <div style={style={{...styles.emptyState}>
              <span variant="body" color={colors.text.tertiary} center>
                No earnings in this category yet
              </span>
            </div>
          ) : (
            filteredEarnings.map((earning) => (
              <div key={earning.id} style={style={{...styles.earningItem}>
                <div
                  style={[
                    style={{...styles.earningIcon,
                    { backgroundColor: getTypeColor(earning.type) + '20' },
                  ]}
                >
                  <span style={{ color: getTypeColor(earning.type), fontSize: 16 }}>
                    {getTypeIcon(earning.type)}
                  </span>
                </div>

                <div style={style={{...styles.earningContent}>
                  <span variant="body" color={colors.text.primary}>{earning.title}</span>
                  <span variant="caption" color={colors.text.tertiary}>{earning.subtitle}</span>
                  <div style={style={{...styles.earningMeta}>
                    <span variant="caption" color={colors.text.tertiary}>{earning.date}</span>
                    {earning.estimatedDate && (
                      <span variant="caption" color={colors.text.tertiary}>
                        · Expected: {earning.estimatedDate}
                      </span>
                    )}
                  </div>
                </div>

                <div style={style={{...styles.earningRight}>
                  <span variant="bodyLarge" style={{ color: getCoinColor(earning.coinType) }}>
                    +{earning.amount}
                  </span>
                  <div
                    style={[
                      style={{...styles.statusBadge,
                      { backgroundColor: getStatusColor(earning.status) + '20' },
                    ]}
                  >
                    <span variant="caption" style={{ color: getStatusColor(earning.status) }}>
                      {earning.status.charAt(0).toUpperCase() + earning.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Card */}
        <div style={style={{...styles.infoCard}>
          <div style={style={{...styles.infoIconContainer}>
            <span variant="body" color={colors.text.tertiary}>ℹ️</span>
          </div>
          <div style={style={{...styles.infoContent}>
            <span variant="body" color={colors.text.secondary}>About Earnings</span>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.infoText}>
              <span variant="caption" gold>Pending earnings</span> are verified within 24-48 hours.
              {'\n'}
              <span variant="caption" color="#64B5F6">Referral bonuses</span> are credited when your friend makes their first purchase.
              {'\n'}
              <span variant="caption" color="#4CAF50">Campaign rewards</span> are processed after content verification.
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div style={style={{...styles.quickLinks}>
          <div
            style={style={{...styles.quickLink}
            onClick={() => navigate('/prive/Profile', { screen: 'F6_Invitations' })}
          >
            <div style={[style={{...styles.quickLinkIcon, { backgroundColor: 'rgba(100, 181, 246, 0.15)' }]}>
              <span variant="body" color="#64B5F6">✦</span>
            </div>
            <span variant="caption" color={colors.text.secondary}>Invite Friends</span>
          </div>

          <div
            style={style={{...styles.quickLink}
            onClick={() => navigate('/prive/Offers')}
          >
            <div style={[style={{...styles.quickLinkIcon, { backgroundColor: 'rgba(76, 175, 80, 0.15)' }]}>
              <span variant="body" color="#4CAF50">★</span>
            </div>
            <span variant="caption" color={colors.text.secondary}>View Campaigns</span>
          </div>

          <div
            style={style={{...styles.quickLink}
            onClick={() => navigate('/prive/Content')}
          >
            <div style={[style={{...styles.quickLinkIcon, { backgroundColor: 'rgba(255, 152, 0, 0.15)' }]}>
              <span variant="body" color="#FF9800">◎</span>
            </div>
            <span variant="caption" color={colors.text.secondary}>Create Content</span>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },

  // Hero Card
  heroCard: {
    margin: spacing[5],
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  heroAmount: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.gold.primary,
    marginVertical: spacing[2],
  },
  heroStats: {
    flexDirection: 'row',
    marginTop: spacing[5],
    width: '100%',
    justifyContent: 'center',
  },
  heroStatItem: {
    alignItems: 'center',
    paddingHorizontal: spacing[6],
    gap: spacing[1],
  },
  heroStatDivider: {
    width: 1,
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // Sources Section
  sourcesSection: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[5],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  sourcesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  sourceCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  sourceCardActive: {
    borderColor: 'rgba(201, 169, 98, 0.4)',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  sourceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Tabs
  tabsScroll: {
    marginBottom: spacing[3],
  },
  tabsContent: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  tab: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  tabActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Status Filters
  statusFilters: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  statusFilter: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    backgroundColor: '#181818',
  },
  statusFilterActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },

  // Earn More Card
  earnMoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginBottom: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  earnMoreIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  earnMoreIconText: {
    fontSize: 20,
    color: '#4CAF50',
  },
  earnMoreContent: {
    flex: 1,
    gap: spacing[1],
  },

  // Earnings List
  earningsList: {
    paddingHorizontal: spacing[5],
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  emptyState: {
    paddingVertical: spacing[8],
    alignItems: 'center',
  },
  earningItem: {
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
  earningIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  earningContent: {
    flex: 1,
    gap: spacing[1],
  },
  earningMeta: {
    flexDirection: 'row',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  earningRight: {
    alignItems: 'flex-end',
    gap: spacing[2],
  },
  statusBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Info Card
  infoCard: {
    flexDirection: 'row',
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  infoIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
    gap: spacing[2],
  },
  infoText: {
    lineHeight: 20,
  },

  // Quick Links
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
    marginTop: spacing[4],
  },
  quickLink: {
    alignItems: 'center',
    gap: spacing[2],
  },
  quickLinkIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSpace: {
    height: 100,
  },
};

export default EarningsScreen;
