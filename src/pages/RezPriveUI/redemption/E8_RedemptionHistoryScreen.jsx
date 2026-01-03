/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E8 - Redemption History Screen
 * Purpose: Transparency and prestige tracking
 * Feel: Statement, not just history
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

type RedemptionType = 'gift_card' | 'experience' | 'privilege';

interface RedemptionRecord {
  id: string;
  type: RedemptionType;
  brandName: string;
  title: string;
  value?: string;
  date: string;
}

interface RedemptionStats {
  totalRedemptions: number;
  totalValue: string;
  uniqueBrands: number;
}

interface E8_RedemptionHistoryScreenProps {
  redemptions?: RedemptionRecord[];
  stats?: RedemptionStats;
  onBack?: () => void;
}

export const E8_RedemptionHistoryScreen: React.FC<E8_RedemptionHistoryScreenProps> = ({
  redemptions = [
    { id: '1', type: 'gift_card', brandName: 'Taj Experiences', title: 'Gift Card', value: '\u20B95,000', date: 'Dec 15, 2025' },
    { id: '2', type: 'experience', brandName: 'Chef\'s Table', title: 'Dining Experience', value: '\u20B98,000', date: 'Dec 1, 2025' },
    { id: '3', type: 'gift_card', brandName: 'Premium Retail', title: 'Gift Card', value: '\u20B92,500', date: 'Nov 20, 2025' },
    { id: '4', type: 'privilege', brandName: 'Luxury Hotel', title: 'Room Upgrade', date: 'Nov 10, 2025' },
  ],
  stats = {
    totalRedemptions: 12,
    totalValue: '\u20B945,000',
    uniqueBrands: 8,
  },
  onBack,
}) => {
  const getTypeIcon = (type: RedemptionType) => {
    switch (type) {
      case 'gift_card':
        return '\uD83C\uDF81';
      case 'experience':
        return '\u2605';
      case 'privilege':
        return '\uD83D\uDD11';
      default:
        return '\u2022';
    }
  };

  const getTypeLabel = (type: RedemptionType) => {
    switch (type) {
      case 'gift_card':
        return 'Gift Card';
      case 'experience':
        return 'Experience';
      case 'privilege':
        return 'Privilege';
      default:
        return 'Other';
    }
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Redemption History" showBack onBack={onBack} />

      {/* Stats Summary */}
      <Card variant="goldGlow" style={style={{...styles.statsCard}>
        <div style={style={{...styles.statsRow}>
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.totalRedemptions}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Redemptions
            </span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.totalValue}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Total Value
            </span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span variant="h3" gold>
              {stats.uniqueBrands}
            </span>
            <span variant="caption" color={colors.text.secondary}>
              Brands
            </span>
          </div>
        </div>
      </Card>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Redemption List */}
      <div style={style={{...styles.listSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Your Redemptions
        </span>

        {redemptions.map((redemption) => (
          <Card key={redemption.id} variant="default" style={style={{...styles.redemptionCard}>
            <div style={style={{...styles.redemptionContent}>
              <div style={style={{...styles.redemptionIcon}>
                <span variant="body">
                  {getTypeIcon(redemption.type)}
                </span>
              </div>
              <div style={style={{...styles.redemptionInfo}>
                <div style={style={{...styles.redemptionHeader}>
                  <span variant="body" color={colors.text.primary}>
                    {redemption.brandName}
                  </span>
                  {redemption.value && (
                    <span variant="body" gold>
                      {redemption.value}
                    </span>
                  )}
                </div>
                <div style={style={{...styles.redemptionMeta}>
                  <span variant="caption" color={colors.text.tertiary}>
                    {getTypeLabel(redemption.type)}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {'\u2022'}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {redemption.date}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        Your redemption history reflects your Privé journey
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
  listSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  redemptionCard: {
    marginBottom: spacing[3],
  },
  redemptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redemptionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  redemptionInfo: {
    flex: 1,
  },
  redemptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  redemptionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  note: {
    marginTop: spacing[6],
  },
};

export default E8_RedemptionHistoryScreen;
