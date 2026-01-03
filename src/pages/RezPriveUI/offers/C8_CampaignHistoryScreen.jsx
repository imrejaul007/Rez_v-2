/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C8 - Privé Campaign History
 * Purpose: Show professionalism and track record
 * Feel: Portfolio, not just history
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface CampaignRecord {
  id: string;
  brandName: string;
  brandLogo?: string;
  campaignName: string;
  completedDate: string;
  rewardsEarned: string;
  status: 'completed' | 'pending' | 'active';
}

interface CampaignHistoryStats {
  totalCampaigns: number;
  totalRewards: string;
  brandsCollaborated: number;
}

interface C8_CampaignHistoryScreenProps {
  campaigns?: CampaignRecord[];
  stats?: CampaignHistoryStats;
  onBack?: () => void;
}

export const C8_CampaignHistoryScreen: React.FC<C8_CampaignHistoryScreenProps> = ({
  campaigns = [
    {
      id: '1',
      brandName: 'Luxury Café',
      campaignName: 'Weekend Dining Experience',
      completedDate: 'Dec 15, 2025',
      rewardsEarned: '\u20B9840',
      status: 'completed',
    },
    {
      id: '2',
      brandName: 'Summer Collection',
      campaignName: 'Early Access Preview',
      completedDate: 'Dec 10, 2025',
      rewardsEarned: '\u20B91,200',
      status: 'completed',
    },
    {
      id: '3',
      brandName: 'Premium Spa',
      campaignName: 'Wellness Review',
      completedDate: 'Dec 5, 2025',
      rewardsEarned: '\u20B9450',
      status: 'completed',
    },
    {
      id: '4',
      brandName: 'Urban Bistro',
      campaignName: "Chef's Table Campaign",
      completedDate: 'Nov 28, 2025',
      rewardsEarned: '\u20B9680',
      status: 'completed',
    },
  ],
  stats = {
    totalCampaigns: 12,
    totalRewards: '\u20B98,450',
    brandsCollaborated: 6,
  },
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Campaign Portfolio" showBack onBack={onBack} />

      {/* Portfolio Stats */}
      <Card variant="goldGlow" style={style={{...styles.statsCard}>
        <div style={style={{...styles.statsRow}>
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.totalCampaigns}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Campaigns
            </span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.totalRewards}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Earned
            </span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.brandsCollaborated}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Brands
            </span>
          </div>
        </div>
      </Card>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Campaign List */}
      <div style={style={{...styles.campaignSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Completed Campaigns
        </span>

        {campaigns.map((campaign) => (
          <Card key={campaign.id} variant="default" style={style={{...styles.campaignCard}>
            <div style={style={{...styles.campaignHeader}>
              <div style={style={{...styles.brandInfo}>
                {campaign.brandLogo ? (
                  <img src={{ uri: campaign.brandLogo }} style={style={{...styles.brandLogo} />
                ) : (
                  <div style={style={{...styles.brandLogoPlaceholder}>
                    <span variant="bodySmall" color={colors.text.secondary}>
                      {campaign.brandName.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <span variant="body" color={colors.text.primary}>
                    {campaign.brandName}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {campaign.completedDate}
                  </span>
                </div>
              </div>
              <div style={style={{...styles.rewardBadge}>
                <span variant="body" gold>
                  {campaign.rewardsEarned}
                </span>
              </div>
            </div>
            <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.campaignName}>
              {campaign.campaignName}
            </span>
          </Card>
        ))}
      </div>

      {/* Portfolio Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.portfolioNote}>
        Your campaign history builds your Privé reputation
      </span>
    </ScreenContainer>
  );
};

const styles = {
  statsCard: {
    marginTop: spacing[4],
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border.goldMuted,
  },
  campaignSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  campaignCard: {
    marginBottom: spacing[3],
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  brandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  brandLogo: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
  },
  brandLogoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardBadge: {
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  campaignName: {
    paddingLeft: spacing[12] + spacing[1],
  },
  portfolioNote: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
};

export default C8_CampaignHistoryScreen;
