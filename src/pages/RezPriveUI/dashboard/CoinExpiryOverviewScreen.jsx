/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Coin Expiry Overview Screen
 * Expiring ReZ / Branded / Privé coins
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ExpiringCoin {
  id: string;
  type: 'rez' | 'branded' | 'prive';
  amount: number;
  expiryDate: string;
  daysLeft: number;
  source: string;
}

interface CoinExpiryOverviewScreenProps {
  expiringCoins?: ExpiringCoin[];
  onUseCoins?: () => void;
  onBack?: () => void;
}

const coinTypeConfig = {
  rez: { icon: '◈', color: '#22C55E', label: 'ReZ Coin' },
  branded: { icon: '◇', color: '#3B82F6', label: 'Branded Coin' },
  prive: { icon: '✦', color: colors.gold.primary, label: 'Privé Coin' },
};

export const CoinExpiryOverviewScreen: React.FC<CoinExpiryOverviewScreenProps> = ({
  expiringCoins = [
    { id: '1', type: 'rez', amount: 500, expiryDate: 'Dec 31, 2025', daysLeft: 11, source: 'Campaign Reward' },
    { id: '2', type: 'branded', amount: 200, expiryDate: 'Jan 15, 2026', daysLeft: 26, source: 'Artisan Watch Co' },
    { id: '3', type: 'prive', amount: 150, expiryDate: 'Jan 31, 2026', daysLeft: 42, source: 'Tier Bonus' },
    { id: '4', type: 'rez', amount: 300, expiryDate: 'Feb 15, 2026', daysLeft: 57, source: 'Referral Bonus' },
  ],
  onUseCoins,
  onBack,
}) => {
  const navigate = useNavigate();

  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 7) return '#EF4444';
    if (daysLeft <= 30) return '#F59E0B';
    return '#22C55E';
  };

  const totalExpiring = expiringCoins.reduce((sum, coin) => sum + coin.amount, 0);
  const urgentCoins = expiringCoins.filter(c => c.daysLeft <= 7);

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Expiring Coins
          </span>
          <span variant="body" color={colors.text.secondary}>
            Use them before they expire
          </span>
        </div>

        {/* Summary Card */}
        <Card variant="goldGlow" style={style={{...styles.summaryCard}>
          <div style={style={{...styles.summaryRow}>
            <div style={style={{...styles.summaryItem}>
              <span variant="caption" color={colors.text.tertiary}>
                Total Expiring
              </span>
              <span variant="h2" gold>{totalExpiring.toLocaleString()}</span>
            </div>
            <div style={style={{...styles.summaryDivider} />
            <div style={style={{...styles.summaryItem}>
              <span variant="caption" color={colors.text.tertiary}>
                Urgent (7 days)
              </span>
              <span variant="h2" style={{ color: urgentCoins.length > 0 ? '#EF4444' : colors.text.primary }}>
                {urgentCoins.reduce((sum, c) => sum + c.amount, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </Card>

        {/* Warning Banner */}
        {urgentCoins.length > 0 && (
          <div style={style={{...styles.warningBanner}>
            <span style={style={{...styles.warningIcon}>⚠</span>
            <span variant="body" color="#EF4444">
              {urgentCoins.length} coin batch{urgentCoins.length > 1 ? 'es' : ''} expiring within 7 days!
            </span>
          </div>
        )}

        {/* Expiring Coins List */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Expiry Schedule
          </span>

          {expiringCoins.map((coin) => {
            const config = coinTypeConfig[coin.type];
            return (
              <Card key={coin.id} variant="default" style={style={{...styles.coinCard}>
                <div style={style={{...styles.coinHeader}>
                  <div style={style={{...styles.coinInfo}>
                    <div style={[style={{...styles.coinIcon, { backgroundColor: config.color + '20' }]}>
                      <span style={[style={{...styles.coinIconText, { color: config.color }]}>
                        {config.icon}
                      </span>
                    </div>
                    <div>
                      <span variant="body" color={colors.text.primary}>
                        {coin.amount.toLocaleString()} {config.label}
                      </span>
                      <span variant="caption" color={colors.text.tertiary}>
                        {coin.source}
                      </span>
                    </div>
                  </div>
                  <div style={style={{...styles.expiryInfo}>
                    <span variant="bodyLarge" style={{ color: getUrgencyColor(coin.daysLeft) }}>
                      {coin.daysLeft}d
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>
                      {coin.expiryDate}
                    </span>
                  </div>
                </div>
                <div style={style={{...styles.expiryBar}>
                  <div
                    style={[
                      style={{...styles.expiryProgress,
                      {
                        width: `${Math.min(100, (coin.daysLeft / 90) * 100)}%`,
                        backgroundColor: getUrgencyColor(coin.daysLeft),
                      }
                    ]}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.infoCard}>
            <span variant="label" color={colors.text.tertiary}>
              Why Coins Expire
            </span>
            <span variant="body" color={colors.text.secondary} style={style={{...styles.infoText}>
              Coins have expiry dates to encourage active participation in the Privé ecosystem.
              Use your coins for exclusive rewards, experiences, or gift cards before they expire.
            </span>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Redeem Coins Now"
            variant="gold"
            onClick={onUseCoins || (() => navigate('/prive/Redemption' as never))}
          />
          <Button
            label="Back to Wallet"
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
  summaryCard: {
    marginHorizontal: spacing[5],
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  summaryItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border.goldMuted,
  },
  warningBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: spacing[3],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  warningIcon: {
    fontSize: 18,
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
  coinCard: {
    marginBottom: spacing[3],
    gap: spacing[3],
  },
  coinHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinIconText: {
    fontSize: 18,
  },
  expiryInfo: {
    alignItems: 'flex-end',
  },
  expiryBar: {
    height: 4,
    backgroundColor: colors.background.tertiary,
    borderRadius: 2,
    overflow: 'hidden',
  },
  expiryProgress: {
    height: '100%',
    borderRadius: 2,
  },
  infoCard: {
    backgroundColor: colors.background.tertiary,
    gap: spacing[2],
  },
  infoText: {
    lineHeight: 22,
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

export default CoinExpiryOverviewScreen;
