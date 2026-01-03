/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Campaign Reward Released Screen
 * Confirmation + breakdown
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface RewardBreakdown {
  type: 'rez' | 'branded' | 'prive';
  amount: number;
  label: string;
}

interface CampaignRewardReleasedScreenProps {
  campaignName?: string;
  brandName?: string;
  totalCoins?: number;
  breakdown?: RewardBreakdown[];
  bonusMessage?: string;
  onViewWallet?: () => void;
  onShareSuccess?: () => void;
}

const coinConfig = {
  rez: { icon: '◈', color: '#22C55E', label: 'ReZ Coin' },
  branded: { icon: '◇', color: '#3B82F6', label: 'Branded Coin' },
  prive: { icon: '✦', color: colors.gold.primary, label: 'Privé Coin' },
};

export const CampaignRewardReleasedScreen: React.FC<CampaignRewardReleasedScreenProps> = ({
  campaignName = 'Winter Collection Launch',
  brandName = 'Artisan Watch Co',
  totalCoins = 1500,
  breakdown = [
    { type: 'rez', amount: 800, label: 'Base Reward' },
    { type: 'branded', amount: 500, label: 'Brand Bonus' },
    { type: 'prive', amount: 200, label: 'Quality Bonus' },
  ],
  bonusMessage = 'Excellent content quality! +200 Privé bonus applied.',
  onViewWallet,
  onShareSuccess,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.successIcon}>
            <span style={style={{...styles.successIconText}>✓</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Reward Released!
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Your coins have been credited
          </span>
        </div>

        {/* Total Reward */}
        <Card variant="goldGlow" style={style={{...styles.totalCard}>
          <span variant="caption" color={colors.text.tertiary}>Total Earned</span>
          <div style={style={{...styles.totalAmount}>
            <span style={style={{...styles.coinSymbol}>◈</span>
            <span variant="h1" gold>{totalCoins.toLocaleString()}</span>
          </div>
          <span variant="body" color={colors.text.secondary}>
            {campaignName}
          </span>
          <span variant="caption" gold>{brandName}</span>
        </Card>

        {/* Bonus Message */}
        {bonusMessage && (
          <div style={style={{...styles.bonusBanner}>
            <span style={style={{...styles.bonusIcon}>🎉</span>
            <span variant="body" color={colors.gold.primary}>{bonusMessage}</span>
          </div>
        )}

        {/* Breakdown */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Reward Breakdown
          </span>
          <Card variant="default" style={style={{...styles.breakdownCard}>
            {breakdown.map((item, index) => {
              const config = coinConfig[item.type];
              return (
                <React.Fragment key={item.type}>
                  {index > 0 && <div style={style={{...styles.breakdownDivider} />}
                  <div style={style={{...styles.breakdownItem}>
                    <div style={style={{...styles.breakdownLeft}>
                      <div style={[style={{...styles.coinIcon, { backgroundColor: config.color + '20' }]}>
                        <span style={[style={{...styles.coinIconText, { color: config.color }]}>
                          {config.icon}
                        </span>
                      </div>
                      <div>
                        <span variant="body" color={colors.text.primary}>
                          {config.label}
                        </span>
                        <span variant="caption" color={colors.text.tertiary}>
                          {item.label}
                        </span>
                      </div>
                    </div>
                    <span variant="bodyLarge" style={{ color: config.color }}>
                      +{item.amount.toLocaleString()}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </Card>
        </div>

        {/* What's Next */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What's Next
          </span>
          <Card variant="default" style={style={{...styles.nextCard}>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>💳</span>
              <span variant="body" color={colors.text.secondary}>
                Use coins for exclusive rewards & experiences
              </span>
            </div>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>📈</span>
              <span variant="body" color={colors.text.secondary}>
                This contributes to your tier progress
              </span>
            </div>
            <div style={style={{...styles.nextItem}>
              <span style={style={{...styles.nextIcon}>⭐</span>
              <span variant="body" color={colors.text.secondary}>
                Quality work unlocks more brand invitations
              </span>
            </div>
          </Card>
        </div>

        {/* Impact Summary */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.impactCard}>
            <span variant="label" color={colors.text.tertiary}>Campaign Impact</span>
            <div style={style={{...styles.impactRow}>
              <div style={style={{...styles.impactItem}>
                <span variant="h3" color={colors.text.primary}>4.8K</span>
                <span variant="caption" color={colors.text.tertiary}>Reach</span>
              </div>
              <div style={style={{...styles.impactItem}>
                <span variant="h3" color={colors.text.primary}>12.5%</span>
                <span variant="caption" color={colors.text.tertiary}>Engagement</span>
              </div>
              <div style={style={{...styles.impactItem}>
                <span variant="h3" gold>A+</span>
                <span variant="caption" color={colors.text.tertiary}>Quality</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="View in Wallet"
            variant="gold"
            onClick={onViewWallet || (() => navigate('/prive/Main', { screen: 'Home', params: { screen: 'B2_Wallet' } } as never))}
          />
          <Button
            label="Share My Success"
            variant="outline"
            onClick={onShareSuccess}
          />
          <Button
            label="Find More Campaigns"
            variant="ghost"
            onClick={() => navigate('/prive/Main', { screen: 'Offers' } as never)}
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
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    borderWidth: 2,
    borderColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  successIconText: {
    fontSize: 36,
    color: '#22C55E',
  },
  totalCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
    gap: spacing[1],
  },
  totalAmount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginVertical: spacing[2],
  },
  coinSymbol: {
    fontSize: 28,
    color: colors.gold.primary,
  },
  bonusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    padding: spacing[3],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  bonusIcon: {
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
  breakdownCard: {
    gap: spacing[3],
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  breakdownLeft: {
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
  breakdownDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
  },
  nextCard: {
    gap: spacing[3],
  },
  nextItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  nextIcon: {
    fontSize: 18,
    marginTop: 2,
  },
  impactCard: {
    gap: spacing[3],
  },
  impactRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  impactItem: {
    alignItems: 'center',
    gap: spacing[1],
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

export default CampaignRewardReleasedScreen;
