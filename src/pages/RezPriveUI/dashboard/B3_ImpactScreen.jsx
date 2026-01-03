/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B3 - Privé Impact Dashboard (Influence Portfolio)
 * Purpose: Replace ego metrics with credible impact
 * UI: Portfolio-like layout, thin gold lines, calm typography
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  StatTile,
  CategoryTag,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface CampaignPerformance {
  brand: string;
  action: string;
  engagement: 'High' | 'Medium' | 'Low';
  rewards: string;
}

interface ImpactData {
  totalInfluenced: string;
  totalConversions: string;
  avgRewardPercent: string;
  campaigns: CampaignPerformance[];
  categoryStrengths: Array<{ name: string; isTop: boolean }>;
}

interface B3_ImpactScreenProps {
  data?: ImpactData;
  onBack?: () => void;
}

export const B3_ImpactScreen: React.FC<B3_ImpactScreenProps> = ({
  data = {
    totalInfluenced: '\u20B92,45,000',
    totalConversions: '156',
    avgRewardPercent: '32%',
    campaigns: [
      { brand: 'Luxury Café', action: 'Visit + Review', engagement: 'High', rewards: '\u20B9840' },
      { brand: 'Summer Collection', action: 'Content', engagement: 'High', rewards: '\u20B91,200' },
      { brand: 'Premium Spa', action: 'Visit', engagement: 'Medium', rewards: '\u20B9450' },
    ],
    categoryStrengths: [
      { name: 'Dining', isTop: true },
      { name: 'Luxury', isTop: false },
      { name: 'Travel', isTop: false },
      { name: 'Fashion', isTop: false },
    ],
  },
  onBack,
}) => {
  const getEngagementColor = (level: string) => {
    switch (level) {
      case 'High':
        return colors.status.success;
      case 'Medium':
        return colors.status.warning;
      default:
        return colors.text.tertiary;
    }
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Impact Portfolio" showBack onBack={onBack} />

      {/* Overall Impact Summary */}
      <div style={style={{...styles.summarySection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Overall Impact
        </span>
        <div style={style={{...styles.statsRow}>
          <StatTile
            value={data.totalInfluenced}
            label="Value Influenced"
            gold
          />
          <div style={style={{...styles.statGap} />
          <StatTile
            value={data.totalConversions}
            label="Conversions"
          />
          <div style={style={{...styles.statGap} />
          <StatTile
            value={data.avgRewardPercent}
            label="Avg Reward"
          />
        </div>
      </div>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Campaign-wise Performance */}
      <div style={style={{...styles.campaignSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Campaign Performance
        </span>

        {data.campaigns.map((campaign, index) => (
          <Card key={index} variant="default" style={style={{...styles.campaignCard}>
            <div style={style={{...styles.campaignHeader}>
              <span variant="body" color={colors.text.primary}>
                {campaign.brand}
              </span>
              <span variant="body" gold>
                {campaign.rewards}
              </span>
            </div>
            <div style={style={{...styles.campaignDetails}>
              <span variant="bodySmall" color={colors.text.secondary}>
                {campaign.action}
              </span>
              <div style={style={{...styles.engagementBadge}>
                <div
                  style={[
                    style={{...styles.engagementDot,
                    { backgroundColor: getEngagementColor(campaign.engagement) },
                  ]}
                />
                <span variant="caption" color={colors.text.secondary}>
                  {campaign.engagement}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Category Influence */}
      <div style={style={{...styles.categorySection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Category Influence
        </span>
        <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.categorySubtext}>
          Areas where your voice carries the most weight
        </span>
        <div style={style={{...styles.categoryTags}>
          {data.categoryStrengths.map((category, index) => (
            <CategoryTag
              key={index}
              category={category.name}
              isTop={category.isTop}
              isActive={!category.isTop}
            />
          ))}
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  summarySection: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  statsRow: {
    flexDirection: 'row',
  },
  statGap: {
    width: spacing[3],
  },
  campaignSection: {
    marginTop: spacing[2],
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
  campaignDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  engagementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  engagementDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categorySection: {
    marginTop: spacing[2],
  },
  categorySubtext: {
    marginBottom: spacing[4],
  },
  categoryTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};

export default B3_ImpactScreen;
