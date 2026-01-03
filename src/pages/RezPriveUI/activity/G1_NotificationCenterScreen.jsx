/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G1 - Privé Notification Center
 *
 * Purpose: Private updates, not alerts. Minimal, meaningful.
 * - Grouped by time (Today, Yesterday, Earlier)
 * - Categories (Invitations, Rewards, Campaigns, Status, General)
 * - Rich notification cards with quick actions
 * - Read/Unread states with gold accent
 *
 * Design: Dark background, no red badges, respectful feel
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

type NotificationType = 'invitation' | 'reward' | 'campaign' | 'tier' | 'privilege' | 'activity' | 'system';
type NotificationGroup = 'today' | 'yesterday' | 'this_week' | 'earlier';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  timestamp: Date;
  isUnread: boolean;
  isGold: boolean;
  actionLabel?: string;
  actionRoute?: string;
  icon: string;
  brandName?: string;
  amount?: number;
}

// ============================================
// MOCK DATA
// ============================================

const mockNotifications: Notification[] = [
  // Today
  {
    id: '1',
    type: 'invitation',
    title: 'Brand Invitation',
    message: 'Luxury Café has invited you to their exclusive weekend brunch campaign',
    time: '2 hours ago',
    timestamp: new Date(),
    isUnread: true,
    isGold: true,
    actionLabel: 'View Invitation',
    actionRoute: 'C3_BrandInvitation',
    icon: '✉️',
    brandName: 'Luxury Café',
  },
  {
    id: '2',
    type: 'reward',
    title: 'Coins Credited',
    message: 'You earned 250 ReZ coins from your purchase at Premium Spa',
    time: '4 hours ago',
    timestamp: new Date(),
    isUnread: true,
    isGold: true,
    icon: '💰',
    amount: 250,
    brandName: 'Premium Spa',
  },
  // Yesterday
  {
    id: '3',
    type: 'campaign',
    title: 'Campaign Approved',
    message: 'Your content for StyleHub campaign has been approved',
    time: 'Yesterday',
    timestamp: new Date(Date.now() - 86400000),
    isUnread: true,
    isGold: true,
    actionLabel: 'View Campaign',
    actionRoute: 'C5_CampaignStatus',
    icon: '✓',
    brandName: 'StyleHub',
  },
  {
    id: '4',
    type: 'privilege',
    title: 'Privilege Unlocked',
    message: 'You now have access to priority reservations at partner restaurants',
    time: 'Yesterday',
    timestamp: new Date(Date.now() - 86400000),
    isUnread: false,
    isGold: true,
    icon: '🎁',
  },
  // This Week
  {
    id: '5',
    type: 'tier',
    title: 'Score Updated',
    message: 'Your Privé score increased to 74.5. Keep going!',
    time: '3 days ago',
    timestamp: new Date(Date.now() - 259200000),
    isUnread: false,
    isGold: true,
    actionLabel: 'View Score',
    actionRoute: 'A1_Eligibility',
    icon: '📊',
  },
  {
    id: '6',
    type: 'activity',
    title: 'Streak Milestone',
    message: 'Amazing! You\'ve maintained a 7-day activity streak',
    time: '4 days ago',
    timestamp: new Date(Date.now() - 345600000),
    isUnread: false,
    isGold: false,
    icon: '🔥',
  },
  {
    id: '7',
    type: 'reward',
    title: 'Expiry Reminder',
    message: '500 coins will expire in 7 days. Use them before Dec 27',
    time: '5 days ago',
    timestamp: new Date(Date.now() - 432000000),
    isUnread: false,
    isGold: false,
    actionLabel: 'View Wallet',
    actionRoute: 'E10_Wallet',
    icon: '⏰',
    amount: 500,
  },
  // Earlier
  {
    id: '8',
    type: 'system',
    title: 'Welcome to Privé',
    message: 'Your application has been approved. Explore your exclusive benefits',
    time: '2 weeks ago',
    timestamp: new Date(Date.now() - 1209600000),
    isUnread: false,
    isGold: true,
    icon: '✨',
  },
  {
    id: '9',
    type: 'campaign',
    title: 'Campaign Completed',
    message: 'Your TechGear Pro campaign has been completed. Rewards credited.',
    time: '2 weeks ago',
    timestamp: new Date(Date.now() - 1209600000),
    isUnread: false,
    isGold: false,
    icon: '✓',
    brandName: 'TechGear Pro',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

const getNotificationIcon = (type: NotificationType) => {
  const icons = {
    invitation: { icon: '✉️', color: colors.gold.primary, bg: 'rgba(201, 169, 98, 0.15)' },
    reward: { icon: '💰', color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
    campaign: { icon: '📢', color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.15)' },
    tier: { icon: '📊', color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.15)' },
    privilege: { icon: '🎁', color: colors.gold.primary, bg: 'rgba(201, 169, 98, 0.15)' },
    activity: { icon: '🔥', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
    system: { icon: '✨', color: colors.gold.primary, bg: 'rgba(201, 169, 98, 0.15)' },
  };
  return icons[type];
};

const groupNotifications = (notifications: Notification[]) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 86400000);
  const weekAgo = new Date(today.getTime() - 604800000);

  const groups: Record<NotificationGroup, Notification[]> = {
    today: [],
    yesterday: [],
    this_week: [],
    earlier: [],
  };

  notifications.forEach((notification) => {
    const notifDate = new Date(notification.timestamp);
    if (notifDate >= today) {
      groups.today.push(notification);
    } else if (notifDate >= yesterday) {
      groups.yesterday.push(notification);
    } else if (notifDate >= weekAgo) {
      groups.this_week.push(notification);
    } else {
      groups.earlier.push(notification);
    }
  };

  return groups;
};

const getGroupLabel = (group: NotificationGroup) => {
  const labels = {
    today: 'Today',
    yesterday: 'Yesterday',
    this_week: 'This Week',
    earlier: 'Earlier',
  };
  return labels[group];
};

// ============================================
// COMPONENT
// ============================================

export const G1_NotificationCenterScreen: React.FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activeFilter, setActiveFilter] = useState<'all' | NotificationType>('all');

  const unreadCount = notifications.filter((n) => n.isUnread).length;
  const groupedNotifications = groupNotifications(
    activeFilter === 'all'
      ? notifications
      : notifications.filter(n => n.type === activeFilter)
  );

  const handleBack = () => navigate(-1);

  const handleNotificationPress = (notification: Notification) => {
    // Mark as read
    setNotifications(prev =>
      prev.map(n => n.id === notification.id ? { ...n, isUnread: false } : n)
    );

    // Navigate if action available
    if (notification.actionRoute) {
      navigate(notification.actionRoute);
    }
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const filters: { key: 'all' | NotificationType; label: string; icon: string }[] = [
    { key: 'all', label: 'All', icon: '◎' },
    { key: 'invitation', label: 'Invites', icon: '✉️' },
    { key: 'reward', label: 'Rewards', icon: '💰' },
    { key: 'campaign', label: 'Campaigns', icon: '📢' },
    { key: 'tier', label: 'Status', icon: '📊' },
  ];

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backButton} onClick={handleBack}>
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Notifications</span>
        {unreadCount > 0 ? (
          <div onClick={handleMarkAllRead}>
            <span variant="caption" gold>Mark All Read</span>
          </div>
        ) : (
          <div style={style={{...styles.headerSpacer} />
        )}
      </div>

      {/* Unread Badge */}
      {unreadCount > 0 && (
        <div style={style={{...styles.unreadBadge}>
          <div style={style={{...styles.unreadDot} />
          <span variant="bodySmall" gold>{unreadCount} new updates</span>
        </div>
      )}

      {/* Filters */}
      <div
        horizontal
        
        contentContainerStyle={style={{...styles.filtersScroll}
      >
        {filters.map((filter) => (
          <div
            key={filter.key}
            style={[
              style={{...styles.filterChip,
              activeFilter === filter.key && style={{...styles.filterChipActive,
            ]}
            onClick={() => setActiveFilter(filter.key)}
          >
            <span style={style={{...styles.filterIcon}>{filter.icon}</span>
            <Text
              variant="caption"
              color={activeFilter === filter.key ? colors.gold.primary : colors.text.tertiary}
            >
              {filter.label}
            </span>
          </div>
        ))}
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Notification Groups */}
        {(['today', 'yesterday', 'this_week', 'earlier'] as NotificationGroup[]).map((group) => {
          const groupNotifs = groupedNotifications[group];
          if (groupNotifs.length === 0) return null;

          return (
            <div key={group} style={style={{...styles.group}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.groupLabel}>
                {getGroupLabel(group).toUpperCase()}
              </span>

              {groupNotifs.map((notification) => {
                const iconConfig = getNotificationIcon(notification.type);
                return (
                  <div
                    key={notification.id}
                    style={[
                      style={{...styles.notificationCard,
                      notification.isUnread && style={{...styles.notificationCardUnread,
                    ]}
                    onClick={() => handleNotificationPress(notification)}
                    onClick={() => {}}
                  >
                    <div style={style={{...styles.notificationLeft}>
                      <div style={[style={{...styles.notificationIcon, { backgroundColor: iconConfig.bg }]}>
                        <span style={style={{...styles.notificationEmoji}>{notification.icon}</span>
                      </div>
                      {notification.isUnread && <div style={style={{...styles.unreadIndicator} />}
                    </div>

                    <div style={style={{...styles.notificationContent}>
                      <div style={style={{...styles.notificationHeader}>
                        <Text
                          variant="body"
                          color={notification.isGold ? colors.gold.primary : colors.text.primary}
                        >
                          {notification.title}
                        </span>
                        <span variant="caption" color={colors.text.tertiary}>
                          {notification.time}
                        </span>
                      </div>

                      <Text
                        variant="bodySmall"
                        color={colors.text.secondary}
                        numberOfLines={2}
                        style={style={{...styles.notificationMessage}
                      >
                        {notification.message}
                      </span>

                      {notification.brandName && (
                        <div style={style={{...styles.brandTag}>
                          <span variant="caption" color={colors.text.tertiary}>
                            {notification.brandName}
                          </span>
                        </div>
                      )}

                      {notification.amount && (
                        <div style={style={{...styles.amountBadge}>
                          <span variant="caption" color="#10B981">
                            +{notification.amount} coins
                          </span>
                        </div>
                      )}

                      {notification.actionLabel && (
                        <div
                          style={style={{...styles.actionButton}
                          onClick={() => handleNotificationPress(notification)}
                        >
                          <span variant="caption" gold>{notification.actionLabel} →</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Empty State */}
        {notifications.length === 0 && (
          <div style={style={{...styles.emptyState}>
            <span style={style={{...styles.emptyEmoji}>🔔</span>
            <span variant="body" color={colors.text.secondary} center>
              No notifications yet
            </span>
            <span variant="caption" color={colors.text.tertiary} center>
              We keep notifications minimal and meaningful
            </span>
          </div>
        )}

        {/* Settings Link */}
        <div
          style={style={{...styles.settingsLink}
          onClick={() => navigate('/prive/Profile', { screen: 'F11_Settings' })}
        >
          <div style={style={{...styles.settingsIcon}>
            <span style={style={{...styles.settingsEmoji}>⚙️</span>
          </div>
          <div style={style={{...styles.settingsContent}>
            <span variant="body" color={colors.text.primary}>Notification Preferences</span>
            <span variant="caption" color={colors.text.tertiary}>
              Manage what you receive
            </span>
          </div>
          <span style={style={{...styles.settingsArrow}>›</span>
        </div>

        {/* Philosophy Note */}
        <div style={style={{...styles.philosophyCard}>
          <span variant="caption" color={colors.text.tertiary} center>
            Privé members never feel spammed.{'\n'}
            We only notify what truly matters.
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

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[2],
    paddingBottom: spacing[3],
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
    width: 80,
  },

  // Unread Badge
  unreadBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: spacing[5],
    marginBottom: spacing[3],
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    gap: spacing[2],
  },
  unreadDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.gold.primary,
  },

  // Filters
  filtersScroll: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
    gap: spacing[2],
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[2],
    gap: spacing[2],
  },
  filterChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  filterIcon: {
    fontSize: 12,
  },

  // Scroll
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
  },

  // Groups
  group: {
    marginBottom: spacing[5],
  },
  groupLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },

  // Notification Cards
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  notificationCardUnread: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  notificationLeft: {
    position: 'relative',
  },
  notificationIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationEmoji: {
    fontSize: 20,
  },
  unreadIndicator: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.gold.primary,
    borderWidth: 2,
    borderColor: '#181818',
  },
  notificationContent: {
    flex: 1,
    gap: spacing[2],
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  notificationMessage: {
    lineHeight: 18,
  },
  brandTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  amountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  actionButton: {
    alignSelf: 'flex-start',
    marginTop: spacing[1],
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing[10],
    gap: spacing[3],
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: spacing[2],
  },

  // Settings Link
  settingsLink: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginTop: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  settingsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsEmoji: {
    fontSize: 18,
  },
  settingsContent: {
    flex: 1,
    gap: spacing[1],
  },
  settingsArrow: {
    fontSize: 24,
    color: colors.text.tertiary,
  },

  // Philosophy Card
  philosophyCard: {
    marginTop: spacing[6],
    padding: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default G1_NotificationCenterScreen;
