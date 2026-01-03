/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Wallet Limit Info Screen
 * Max redemption, caps, restrictions
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card, ProgressBar } from '../../components';
import { colors, spacing } from '../../theme';

interface WalletLimit {
  id: string;
  label: string;
  current: number;
  limit: number;
  period: string;
  unit: string;
}

interface WalletLimitInfoScreenProps {
  limits?: WalletLimit[];
  tier?: string;
  onUpgradeTier?: () => void;
  onBack?: () => void;
}

export const WalletLimitInfoScreen: React.FC<WalletLimitInfoScreenProps> = ({
  limits = [
    { id: '1', label: 'Daily Redemption', current: 1500, limit: 5000, period: 'per day', unit: 'coins' },
    { id: '2', label: 'Monthly Redemption', current: 12000, limit: 50000, period: 'per month', unit: 'coins' },
    { id: '3', label: 'Gift Card Limit', current: 2, limit: 5, period: 'per week', unit: 'cards' },
    { id: '4', label: 'Experience Booking', current: 1, limit: 3, period: 'per month', unit: 'bookings' },
  ],
  tier = 'Signature',
  onUpgradeTier,
  onBack,
}) => {
  const navigate = useNavigate();

  const getProgressColor = (current: number, limit: number) => {
    const percentage = (current / limit) * 100;
    if (percentage >= 90) return '#EF4444';
    if (percentage >= 70) return '#F59E0B';
    return colors.gold.primary;
  };

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Wallet Limits
          </span>
          <span variant="body" color={colors.text.secondary}>
            Your current redemption caps
          </span>
        </div>

        {/* Tier Badge */}
        <Card variant="goldGlow" style={style={{...styles.tierCard}>
          <div style={style={{...styles.tierBadge}>
            <span style={style={{...styles.tierIcon}>✦</span>
            <span variant="bodyLarge" gold>{tier} Tier</span>
          </div>
          <span variant="caption" color={colors.text.tertiary} center>
            Higher tiers unlock increased limits
          </span>
        </Card>

        {/* Limits */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Current Limits
          </span>

          {limits.map((limit) => {
            const percentage = (limit.current / limit.limit) * 100;
            return (
              <Card key={limit.id} variant="default" style={style={{...styles.limitCard}>
                <div style={style={{...styles.limitHeader}>
                  <span variant="body" color={colors.text.primary}>
                    {limit.label}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {limit.period}
                  </span>
                </div>
                <ProgressBar
                  progress={limit.current / limit.limit}
                  color={getProgressColor(limit.current, limit.limit)}
                  style={style={{...styles.progressBar}
                />
                <div style={style={{...styles.limitValues}>
                  <span variant="bodyLarge" style={{ color: getProgressColor(limit.current, limit.limit) }}>
                    {limit.current.toLocaleString()}
                  </span>
                  <span variant="body" color={colors.text.tertiary}>
                    / {limit.limit.toLocaleString()} {limit.unit}
                  </span>
                </div>
                {percentage >= 90 && (
                  <div style={style={{...styles.warningBadge}>
                    <span variant="caption" style={{ color: '#EF4444' }}>
                      Approaching limit
                    </span>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Tier Comparison */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Limits by Tier
          </span>
          <Card variant="default" style={style={{...styles.comparisonCard}>
            <div style={style={{...styles.comparisonHeader}>
              <span variant="caption" color={colors.text.tertiary} style={{ flex: 1 }}>
                Tier
              </span>
              <span variant="caption" color={colors.text.tertiary} style={{ flex: 1, textAlign: 'center' }}>
                Daily
              </span>
              <span variant="caption" color={colors.text.tertiary} style={{ flex: 1, textAlign: 'right' }}>
                Monthly
              </span>
            </div>
            <div style={style={{...styles.comparisonDivider} />

            {[
              { name: 'Access', daily: '2,000', monthly: '20,000', current: false },
              { name: 'Signature', daily: '5,000', monthly: '50,000', current: tier === 'Signature' },
              { name: 'Elite', daily: '15,000', monthly: '150,000', current: tier === 'Elite' },
              { name: 'Icon', daily: 'Unlimited', monthly: 'Unlimited', current: tier === 'Icon' },
            ].map((row, index) => (
              <div
                key={row.name}
                style={[
                  style={{...styles.comparisonRow,
                  row.current && style={{...styles.comparisonRowCurrent,
                ]}
              >
                <div style={[style={{...styles.comparisonCell, { flex: 1 }]}>
                  <span variant="body" color={row.current ? colors.gold.primary : colors.text.secondary}>
                    {row.name}
                  </span>
                  {row.current && <span variant="caption" gold> (You)</span>}
                </div>
                <Text
                  variant="body"
                  color={row.current ? colors.gold.primary : colors.text.tertiary}
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  {row.daily}
                </span>
                <Text
                  variant="body"
                  color={row.current ? colors.gold.primary : colors.text.tertiary}
                  style={{ flex: 1, textAlign: 'right' }}
                >
                  {row.monthly}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Restrictions */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Additional Restrictions
          </span>
          <Card variant="default" style={style={{...styles.restrictionsCard}>
            <div style={style={{...styles.restrictionItem}>
              <span style={style={{...styles.restrictionIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Branded coins can only be used with issuing brand
              </span>
            </div>
            <div style={style={{...styles.restrictionItem}>
              <span style={style={{...styles.restrictionIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Privé coins cannot be transferred to other users
              </span>
            </div>
            <div style={style={{...styles.restrictionItem}>
              <span style={style={{...styles.restrictionIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Some experiences require minimum tier level
              </span>
            </div>
            <div style={style={{...styles.restrictionItem}>
              <span style={style={{...styles.restrictionIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Limits reset at midnight local time
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="View Tier Benefits"
            variant="gold"
            onClick={onUpgradeTier || (() => navigate('/prive/Main', { screen: 'Home', params: { screen: 'B4_TierProgress' } } as never))}
          />
          <Button
            label="Back"
            variant="outline"
            onClick={onBack || (() => navigate(-1))}
          />
        </div>

        <div style={style={{...styles.bottomPadding} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
  tierCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
  },
  tierBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  tierIcon: {
    color: colors.gold.primary,
    fontSize: 20,
  },
  section: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  limitCard: {
    marginBottom: spacing[3],
    gap: spacing[2],
  },
  limitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressBar: {
    marginVertical: spacing[1],
  },
  limitValues: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  warningBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  comparisonCard: {
    padding: 0,
    overflow: 'hidden',
  },
  comparisonHeader: {
    flexDirection: 'row',
    padding: spacing[4],
    backgroundColor: colors.background.tertiary,
  },
  comparisonDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
  },
  comparisonRow: {
    flexDirection: 'row',
    padding: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
  },
  comparisonRowCurrent: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  comparisonCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restrictionsCard: {
    gap: spacing[3],
    backgroundColor: colors.background.tertiary,
  },
  restrictionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
  },
  restrictionIcon: {
    color: colors.text.tertiary,
    fontSize: 16,
    marginTop: 2,
  },
  actions: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
    gap: spacing[3],
  },
  bottomPadding: {
    height: spacing[8],
  },
};

export default WalletLimitInfoScreen;
