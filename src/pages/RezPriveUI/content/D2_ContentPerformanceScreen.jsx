/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D2 - Content Performance Screen (Influence Analytics)
 * Purpose: Show results, not vanity metrics
 * UI: Thin gold lines, calm charts, no flashing stats
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
  ProgressBar,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface PerformanceData {
  brandName: string;
  contentType: string;
  reach: string;
  engagement: string;
  conversions: string;
  footfall?: string;
  rewardsEarned: string;
  impactStatement: string;
}

interface D2_ContentPerformanceScreenProps {
  data?: PerformanceData;
  onBack?: () => void;
}

export const D2_ContentPerformanceScreen: React.FC<D2_ContentPerformanceScreenProps> = ({
  data = {
    brandName: 'Luxury Café',
    contentType: 'Post',
    reach: '2,450',
    engagement: '324',
    conversions: '12',
    footfall: '8',
    rewardsEarned: '\u20B9840',
    impactStatement: 'This content influenced 12 verified visits.',
  },
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Performance" showBack onBack={onBack} showBadge={false} />

      {/* Content Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.brandBadge}>
          <span variant="body" color={colors.text.secondary}>
            {data.brandName.charAt(0)}
          </span>
        </div>
        <div>
          <span variant="h4" color={colors.text.primary}>
            {data.brandName}
          </span>
          <span variant="caption" color={colors.text.tertiary}>
            {data.contentType}
          </span>
        </div>
      </div>

      {/* Impact Statement */}
      <Card variant="goldGlow" style={style={{...styles.impactCard}>
        <span variant="bodyLarge" color={colors.text.primary} center>
          {data.impactStatement}
        </span>
      </Card>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Metrics */}
      <div style={style={{...styles.metricsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Performance Metrics
        </span>

        {/* Primary Stats */}
        <div style={style={{...styles.statsRow}>
          <StatTile value={data.reach} label="Reach" />
          <div style={style={{...styles.statGap} />
          <StatTile value={data.engagement} label="Engagement" />
          <div style={style={{...styles.statGap} />
          <StatTile value={data.conversions} label="Conversions" gold />
        </div>

        {/* Footfall if available */}
        {data.footfall && (
          <Card variant="default" style={style={{...styles.footfallCard}>
            <div style={style={{...styles.footfallContent}>
              <div style={style={{...styles.footfallIcon}>
                <span variant="body" gold>
                  {'\u2192'}
                </span>
              </div>
              <div style={style={{...styles.footfallText}>
                <span variant="bodySmall" color={colors.text.secondary}>
                  Verified Footfall
                </span>
                <span variant="h4" color={colors.text.primary}>
                  {data.footfall} visits
                </span>
              </div>
            </div>
          </Card>
        )}
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Engagement Quality */}
      <div style={style={{...styles.qualitySection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Engagement Quality
        </span>
        <Card variant="default">
          <div style={style={{...styles.qualityItem}>
            <span variant="body" color={colors.text.primary}>
              Authenticity
            </span>
            <div style={style={{...styles.qualityBar}>
              <ProgressBar progress={0.9} showGlow />
            </div>
          </div>
          <div style={style={{...styles.qualityItem}>
            <span variant="body" color={colors.text.primary}>
              Relevance
            </span>
            <div style={style={{...styles.qualityBar}>
              <ProgressBar progress={0.85} />
            </div>
          </div>
          <div style={style={{...styles.qualityItem}>
            <span variant="body" color={colors.text.primary}>
              Conversion Rate
            </span>
            <div style={style={{...styles.qualityBar}>
              <ProgressBar progress={0.75} />
            </div>
          </div>
        </Card>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Rewards Earned */}
      <Card variant="gold" style={style={{...styles.rewardsCard}>
        <div style={style={{...styles.rewardsContent}>
          <div>
            <span variant="label" color={colors.text.secondary}>
              Privé Rewards Earned
            </span>
            <span variant="h2" gold style={style={{...styles.rewardsAmount}>
              {data.rewardsEarned}
            </span>
          </div>
          <div style={style={{...styles.rewardsBadge}>
            <span variant="caption" color={colors.status.success}>
              Credited
            </span>
          </div>
        </div>
      </Card>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginTop: spacing[4],
    marginBottom: spacing[6],
  },
  brandBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  impactCard: {
    paddingVertical: spacing[5],
  },
  metricsSection: {
    marginTop: spacing[2],
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
  footfallCard: {
    marginTop: spacing[4],
  },
  footfallContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footfallIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  footfallText: {
    gap: spacing[1],
  },
  qualitySection: {
    marginTop: spacing[2],
  },
  qualityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  qualityBar: {
    width: 100,
  },
  rewardsCard: {
    marginTop: spacing[2],
  },
  rewardsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardsAmount: {
    marginTop: spacing[1],
  },
  rewardsBadge: {
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
};

export default D2_ContentPerformanceScreen;
