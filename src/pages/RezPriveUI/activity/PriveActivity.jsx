/**
 * Privé Activity History
 * Purpose: Transparency without noise
 * UI: Clean chronological list, muted icons, gold for completed
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveActivity = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const activities = [
    {
      id: '1',
      type: 'reward',
      title: 'Campaign Reward Credited',
      description: 'Luxury Café collaboration',
      value: '+₹840',
      date: '2 hours ago',
      isGold: true,
    },
    {
      id: '2',
      type: 'campaign',
      title: 'Campaign Completed',
      description: 'Summer Collection review',
      date: 'Yesterday',
    },
    {
      id: '3',
      type: 'tier',
      title: 'Tier Upgraded',
      description: 'Welcome to Privé Signature',
      date: '3 days ago',
      isGold: true,
    },
    {
      id: '4',
      type: 'redemption',
      title: 'Rewards Redeemed',
      description: 'Taj Gift Card',
      value: '-₹5,000',
      date: '1 week ago',
    },
    {
      id: '5',
      type: 'reward',
      title: 'Brand Reward',
      description: 'Premium Spa visit',
      value: '+₹450',
      date: '2 weeks ago',
      isGold: true,
    },
    {
      id: '6',
      type: 'campaign',
      title: 'Campaign Joined',
      description: 'Artisan Watch Co. campaign',
      date: '3 weeks ago',
    },
    {
      id: '7',
      type: 'reward',
      title: 'Cashback Earned',
      description: 'Maison de Luxe purchase',
      value: '+₹675',
      date: '1 month ago',
      isGold: true,
    },
    {
      id: '8',
      type: 'status',
      title: 'Score Updated',
      description: 'Privé score increased to 74.5',
      date: '1 month ago',
    },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'rewards', label: 'Rewards' },
    { key: 'campaigns', label: 'Campaigns' },
    { key: 'redemptions', label: 'Redemptions' },
  ];

  const filteredActivities = activities.filter((activity) => {
    if (filter === 'all') return true;
    if (filter === 'rewards') return activity.type === 'reward';
    if (filter === 'campaigns') return activity.type === 'campaign';
    if (filter === 'redemptions') return activity.type === 'redemption';
    return true;
  });

  const getActivityIcon = (type) => {
    const icons = {
      reward: '◇',
      campaign: '★',
      redemption: '◈',
      tier: '▲',
      status: '◎',
    };
    return icons[type] || '◇';
  };

  const getActivityColor = (type) => {
    const colors = {
      reward: '#C9A962',
      campaign: '#4CAF50',
      redemption: '#64B5F6',
      tier: '#9C27B0',
      status: '#FF9800',
    };
    return colors[type] || '#C9A962';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${spacing[3]}px ${spacing[4]}px`,
        borderBottom: '1px solid #1A1A1A',
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
          <span style={{ fontSize: '18px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
          Activity
        </h1>
        <div style={{ width: '40px' }} />
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: spacing[2],
        padding: `${spacing[4]}px ${spacing[4]}px 0`,
      }}>
        {filters.map((f) => (
          <div
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              padding: `${spacing[2]}px ${spacing[4]}px`,
              borderRadius: borderRadius.full,
              backgroundColor: filter === f.key ? 'rgba(201, 169, 98, 0.1)' : '#141414',
              border: filter === f.key ? '1px solid rgba(201, 169, 98, 0.3)' : 'none',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '14px', color: filter === f.key ? colors.gold.primary : colors.text.secondary }}>
              {f.label}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        margin: `${spacing[4]}px 0`,
      }} />

      {/* Activity List */}
      <div style={{ padding: `0 ${spacing[4]}px` }}>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: `${spacing[4]}px 0`,
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Icon */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: getActivityColor(activity.type) + '15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: spacing[3],
                flexShrink: 0,
              }}>
                <span style={{ color: getActivityColor(activity.type), fontSize: '16px' }}>
                  {getActivityIcon(activity.type)}
                </span>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: '500',
                  color: activity.isGold ? colors.gold.primary : colors.text.primary,
                  marginBottom: '4px',
                }}>
                  {activity.title}
                </h3>
                {activity.description && (
                  <p style={{
                    fontSize: '14px',
                    color: colors.text.secondary,
                    marginBottom: '4px',
                  }}>
                    {activity.description}
                  </p>
                )}
                <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
                  {activity.date}
                </p>
              </div>

              {/* Value */}
              {activity.value && (
                <div style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: activity.value.startsWith('+') ? colors.gold.primary : colors.text.secondary,
                  flexShrink: 0,
                  marginLeft: spacing[3],
                }}>
                  {activity.value}
                </div>
              )}
            </div>
          ))
        ) : (
          <div style={{ padding: `${spacing[12]}px 0`, textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: colors.text.tertiary }}>
              No activity to show
            </p>
          </div>
        )}
      </div>

      {/* Info Note */}
      <div style={{
        margin: `${spacing[6]}px ${spacing[4]}px 0`,
        padding: spacing[4],
        backgroundColor: 'rgba(201, 169, 98, 0.05)',
        borderRadius: borderRadius.lg,
        border: '1px solid rgba(201, 169, 98, 0.1)',
      }}>
        <p style={{
          fontSize: '13px',
          color: colors.text.tertiary,
          textAlign: 'center',
          lineHeight: '18px',
        }}>
          Your Privé activity log - transparent, complete, always accessible.
        </p>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveActivity;
