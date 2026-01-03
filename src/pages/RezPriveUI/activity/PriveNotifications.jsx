/**
 * Privé Notification Center
 *
 * Purpose: Private updates, not alerts. Minimal, meaningful.
 * - Grouped by time (Today, Yesterday, Earlier)
 * - Categories (Invitations, Rewards, Campaigns, Status, General)
 * - Rich notification cards with quick actions
 * - Read/Unread states with gold accent
 *
 * Design: Dark background, no red badges, respectful feel
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveNotifications = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data - in production, fetch from API
  const mockNotifications = [
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
      actionRoute: '/prive/brand-invitation',
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
      actionRoute: '/prive/campaign-status',
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
      actionRoute: '/prive/tier-progress',
      icon: '📊',
    },
    {
      id: '6',
      type: 'activity',
      title: 'Streak Milestone',
      message: "Amazing! You've maintained a 7-day activity streak",
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
      actionRoute: '/prive/wallet',
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

  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  const getNotificationIcon = (type) => {
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

  const groupNotifications = (notifs) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today.getTime() - 86400000);
    const weekAgo = new Date(today.getTime() - 604800000);

    const groups = {
      today: [],
      yesterday: [],
      this_week: [],
      earlier: [],
    };

    notifs.forEach((notification) => {
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
    });

    return groups;
  };

  const getGroupLabel = (group) => {
    const labels = {
      today: 'Today',
      yesterday: 'Yesterday',
      this_week: 'This Week',
      earlier: 'Earlier',
    };
    return labels[group];
  };

  const filteredNotifications = activeFilter === 'all'
    ? notifications
    : notifications.filter(n => n.type === activeFilter);

  const groupedNotifications = groupNotifications(filteredNotifications);

  const handleNotificationPress = (notification) => {
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

  const filters = [
    { key: 'all', label: 'All', icon: '◎' },
    { key: 'invitation', label: 'Invites', icon: '✉️' },
    { key: 'reward', label: 'Rewards', icon: '💰' },
    { key: 'campaign', label: 'Campaigns', icon: '📢' },
    { key: 'tier', label: 'Status', icon: '📊' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${spacing[2]}px ${spacing[5]}px ${spacing[3]}px`,
      }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#181818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '20px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
          Notifications
        </h1>
        {unreadCount > 0 ? (
          <div onClick={handleMarkAllRead} style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: '13px', color: colors.gold.primary }}>Mark All Read</span>
          </div>
        ) : (
          <div style={{ width: '80px' }} />
        )}
      </div>

      {/* Unread Badge */}
      {unreadCount > 0 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginLeft: spacing[5],
          marginBottom: spacing[3],
          padding: `${spacing[2]}px ${spacing[3]}px`,
          backgroundColor: 'rgba(201, 169, 98, 0.1)',
          borderRadius: borderRadius.full,
          border: '1px solid rgba(201, 169, 98, 0.2)',
          gap: spacing[2],
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '3px',
            backgroundColor: colors.gold.primary,
          }} />
          <span style={{ fontSize: '13px', color: colors.gold.primary }}>{unreadCount} new updates</span>
        </div>
      )}

      {/* Filters */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        padding: `0 ${spacing[5]}px ${spacing[4]}px`,
        gap: spacing[2],
      }}>
        {filters.map((filter) => (
          <div
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: `${spacing[2]}px ${spacing[3]}px`,
              backgroundColor: activeFilter === filter.key ? 'rgba(201, 169, 98, 0.1)' : '#181818',
              borderRadius: borderRadius.full,
              border: `1px solid ${activeFilter === filter.key ? 'rgba(201, 169, 98, 0.3)' : '#2A2A2A'}`,
              gap: spacing[2],
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ fontSize: '12px' }}>{filter.icon}</span>
            <span style={{ fontSize: '13px', color: activeFilter === filter.key ? colors.gold.primary : colors.text.tertiary }}>
              {filter.label}
            </span>
          </div>
        ))}
      </div>

      {/* Notification Groups */}
      <div style={{ padding: `0 ${spacing[5]}px` }}>
        {['today', 'yesterday', 'this_week', 'earlier'].map((group) => {
          const groupNotifs = groupedNotifications[group];
          if (groupNotifs.length === 0) return null;

          return (
            <div key={group} style={{ marginBottom: spacing[5] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>
                {getGroupLabel(group).toUpperCase()}
              </div>

              {groupNotifs.map((notification) => {
                const iconConfig = getNotificationIcon(notification.type);
                return (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationPress(notification)}
                    style={{
                      display: 'flex',
                      backgroundColor: notification.isUnread ? 'rgba(201, 169, 98, 0.05)' : '#181818',
                      borderRadius: borderRadius.lg,
                      padding: spacing[4],
                      marginBottom: spacing[3],
                      border: `1px solid ${notification.isUnread ? 'rgba(201, 169, 98, 0.3)' : '#2A2A2A'}`,
                      gap: spacing[3],
                      cursor: 'pointer',
                    }}
                  >
                    {/* Icon + Unread Indicator */}
                    <div style={{ position: 'relative' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '22px',
                        backgroundColor: iconConfig.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: '20px' }}>{notification.icon}</span>
                      </div>
                      {notification.isUnread && (
                        <div style={{
                          position: 'absolute',
                          top: '-2px',
                          right: '-2px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '5px',
                          backgroundColor: colors.gold.primary,
                          border: '2px solid #181818',
                        }} />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{
                          fontSize: '15px',
                          color: notification.isGold ? colors.gold.primary : colors.text.primary,
                        }}>
                          {notification.title}
                        </span>
                        <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
                          {notification.time}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '14px',
                        color: colors.text.secondary,
                        margin: 0,
                        lineHeight: '18px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {notification.message}
                      </p>

                      {notification.brandName && (
                        <div style={{
                          alignSelf: 'flex-start',
                          backgroundColor: '#2A2A2A',
                          padding: `2px ${spacing[2]}px`,
                          borderRadius: borderRadius.sm,
                        }}>
                          <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
                            {notification.brandName}
                          </span>
                        </div>
                      )}

                      {notification.amount && (
                        <div style={{
                          alignSelf: 'flex-start',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          padding: `2px ${spacing[2]}px`,
                          borderRadius: borderRadius.sm,
                        }}>
                          <span style={{ fontSize: '13px', color: '#10B981' }}>
                            +{notification.amount} coins
                          </span>
                        </div>
                      )}

                      {notification.actionLabel && (
                        <div style={{ alignSelf: 'flex-start', marginTop: spacing[1] }}>
                          <span style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>
                            {notification.actionLabel} →
                          </span>
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
          <div style={{ padding: `${spacing[10]}px 0`, textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: spacing[2] }}>🔔</div>
            <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: spacing[1] }}>
              No notifications yet
            </p>
            <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
              We keep notifications minimal and meaningful
            </p>
          </div>
        )}

        {/* Settings Link */}
        <div
          onClick={() => navigate('/profile/settings')}
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#181818',
            borderRadius: borderRadius.lg,
            padding: spacing[4],
            marginTop: spacing[4],
            border: '1px solid #2A2A2A',
            gap: spacing[3],
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#2A2A2A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '18px' }}>⚙️</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>
              Notification Preferences
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
              Manage what you receive
            </div>
          </div>
          <span style={{ fontSize: '24px', color: colors.text.tertiary }}>›</span>
        </div>

        {/* Philosophy Note */}
        <div style={{
          marginTop: spacing[6],
          padding: spacing[4],
          backgroundColor: 'rgba(201, 169, 98, 0.05)',
          borderRadius: borderRadius.lg,
          border: '1px solid rgba(201, 169, 98, 0.1)',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: '13px', color: colors.text.tertiary, margin: 0, lineHeight: '18px' }}>
            Privé members never feel spammed.<br />
            We only notify what truly matters.
          </p>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveNotifications;
