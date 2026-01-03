/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B5 - Privé Activity History
 * Purpose: Transparency without noise
 * UI: Clean chronological list, muted icons, gold for completed
 */

import React, { useState } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  PriveHeader,
  ActivityItem,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type ActivityFilter = 'all' | 'rewards' | 'campaigns' | 'redemptions';

interface Activity {
  id: string;
  type: 'reward' | 'campaign' | 'redemption' | 'tier' | 'status';
  title: string;
  description?: string;
  value?: string;
  date: string;
  isGold?: boolean;
}

interface B5_ActivityHistoryScreenProps {
  activities?: Activity[];
  onBack?: () => void;
}

export const B5_ActivityHistoryScreen: React.FC<B5_ActivityHistoryScreenProps> = ({
  activities = [
    {
      id: '1',
      type: 'reward',
      title: 'Campaign Reward Credited',
      description: 'Luxury Café collaboration',
      value: '+\u20B9840',
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
      value: '-\u20B95,000',
      date: '1 week ago',
    },
    {
      id: '5',
      type: 'reward',
      title: 'Brand Reward',
      description: 'Premium Spa visit',
      value: '+\u20B9450',
      date: '2 weeks ago',
      isGold: true,
    },
  ],
  onBack,
}) => {
  const [filter, setFilter] = useState<ActivityFilter>('all');

  const filters: { key: ActivityFilter; label: string }[] = [
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
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Activity" showBack onBack={onBack} />

      {/* Filter Tabs */}
      <div style={style={{...styles.filterContainer}>
        {filters.map((f) => (
          <div
            key={f.key}
            style={[
              style={{...styles.filterTab,
              filter === f.key && style={{...styles.filterTabActive,
            ]}
            onClick={() => setFilter(f.key)}
          >
            <Text
              variant="bodySmall"
              color={filter === f.key ? colors.gold.primary : colors.text.secondary}
            >
              {f.label}
            </span>
          </div>
        ))}
      </div>

      <Divider variant="light" spacing={spacing[4]} />

      {/* Activity List */}
      <div style={style={{...styles.activityList}>
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <ActivityItem
              key={activity.id}
              type={activity.type}
              title={activity.title}
              description={activity.description}
              value={activity.value}
              date={activity.date}
              isGold={activity.isGold}
            />
          ))
        ) : (
          <div style={style={{...styles.emptyState}>
            <span variant="body" color={colors.text.tertiary} center>
              No activity to show
            </span>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

const styles = {
  filterContainer: {
    flexDirection: 'row',
    marginTop: spacing[4],
    gap: spacing[2],
  },
  filterTab: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: colors.background.card,
  },
  filterTabActive: {
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  activityList: {
    marginTop: spacing[2],
  },
  emptyState: {
    paddingVertical: spacing[12],
  },
};

export default B5_ActivityHistoryScreen;
