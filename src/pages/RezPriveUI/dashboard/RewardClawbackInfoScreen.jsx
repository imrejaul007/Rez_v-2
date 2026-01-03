/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Reward Clawback Info Screen
 * Explains reward reversal (fraud / rejection)
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ClawbackEvent {
  id: string;
  date: string;
  amount: number;
  coinType: 'rez' | 'branded' | 'prive';
  reason: string;
  campaign?: string;
}

interface RewardClawbackInfoScreenProps {
  clawbackEvents?: ClawbackEvent[];
  totalClawedBack?: number;
  onAppeal?: (eventId: string) => void;
  onContactSupport?: () => void;
}

export const RewardClawbackInfoScreen: React.FC<RewardClawbackInfoScreenProps> = ({
  clawbackEvents = [
    { id: '1', date: 'Dec 15, 2025', amount: 500, coinType: 'rez', reason: 'Content did not meet brand guidelines', campaign: 'Winter Collection' },
    { id: '2', date: 'Dec 10, 2025', amount: 200, coinType: 'branded', reason: 'Engagement metrics flagged as inauthentic', campaign: 'Café Exclusive' },
  ],
  totalClawedBack = 700,
  onAppeal,
  onContactSupport,
}) => {
  const navigate = useNavigate();

  const getReasonIcon = (reason: string) => {
    if (reason.includes('guidelines')) return '📋';
    if (reason.includes('inauthentic') || reason.includes('fraud')) return '⚠';
    if (reason.includes('deadline')) return '⏰';
    return '❌';
  };

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.iconContainer}>
            <span style={style={{...styles.icon}>↩</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Reward Reversals
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Understanding why rewards were reversed
          </span>
        </div>

        {/* Summary */}
        <Card variant="default" style={style={{...styles.summaryCard}>
          <span variant="caption" color={colors.text.tertiary}>
            Total Reversed
          </span>
          <span variant="h2" style={{ color: '#EF4444' }}>
            -{totalClawedBack.toLocaleString()} coins
          </span>
        </Card>

        {/* What is Clawback */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What is Reward Reversal?
          </span>
          <Card variant="default" style={style={{...styles.infoCard}>
            <span variant="body" color={colors.text.secondary}>
              Reward reversal (clawback) occurs when coins previously credited to your wallet
              are removed due to policy violations, content rejection, or detected fraudulent activity.
            </span>
          </Card>
        </div>

        {/* Common Reasons */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Common Reasons
          </span>
          <Card variant="default" style={style={{...styles.reasonsCard}>
            <div style={style={{...styles.reasonItem}>
              <span style={style={{...styles.reasonIcon}>📋</span>
              <div style={style={{...styles.reasonContent}>
                <span variant="body" color={colors.text.primary}>Content Rejection</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Submitted content didn't meet brand guidelines
                </span>
              </div>
            </div>
            <div style={style={{...styles.reasonDivider} />
            <div style={style={{...styles.reasonItem}>
              <span style={style={{...styles.reasonIcon}>⚠</span>
              <div style={style={{...styles.reasonContent}>
                <span variant="body" color={colors.text.primary}>Fraudulent Activity</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Fake engagement or manipulation detected
                </span>
              </div>
            </div>
            <div style={style={{...styles.reasonDivider} />
            <div style={style={{...styles.reasonItem}>
              <span style={style={{...styles.reasonIcon}>⏰</span>
              <div style={style={{...styles.reasonContent}>
                <span variant="body" color={colors.text.primary}>Deadline Violation</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Content removed before required posting period
                </span>
              </div>
            </div>
            <div style={style={{...styles.reasonDivider} />
            <div style={style={{...styles.reasonItem}>
              <span style={style={{...styles.reasonIcon}>🚫</span>
              <div style={style={{...styles.reasonContent}>
                <span variant="body" color={colors.text.primary}>Policy Violation</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Breach of Privé or brand terms
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Clawback Events */}
        {clawbackEvents.length > 0 && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Your Reversal History
            </span>
            {clawbackEvents.map((event) => (
              <Card key={event.id} variant="default" style={style={{...styles.eventCard}>
                <div style={style={{...styles.eventHeader}>
                  <div style={style={{...styles.eventInfo}>
                    <span style={style={{...styles.eventIcon}>{getReasonIcon(event.reason)}</span>
                    <div>
                      <span variant="body" color={colors.text.primary}>
                        -{event.amount} coins
                      </span>
                      <span variant="caption" color={colors.text.tertiary}>
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <Button
                    label="Appeal"
                    variant="ghost"
                    size="sm"
                    onClick={() => onAppeal?.(event.id)}
                  />
                </div>
                <span variant="caption" color={colors.text.secondary}>
                  {event.reason}
                </span>
                {event.campaign && (
                  <span variant="caption" color={colors.text.tertiary}>
                    Campaign: {event.campaign}
                  </span>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Prevention Tips */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            How to Avoid Reversals
          </span>
          <Card variant="default" style={style={{...styles.tipsCard}>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Read campaign guidelines carefully before accepting
              </span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Submit authentic, original content only
              </span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Keep content posted for the required duration
              </span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Never use bots or fake engagement
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Contact Concierge"
            variant="gold"
            onClick={onContactSupport || (() => navigate('/prive/Notifications', { screen: 'G4_Concierge' } as never))}
          />
          <Button
            label="Back to Wallet"
            variant="outline"
            onClick={() => navigate(-1)}
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
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(239, 68, 68, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  icon: {
    fontSize: 32,
    color: '#EF4444',
  },
  summaryCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
    borderColor: 'rgba(239, 68, 68, 0.3)',
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
  infoCard: {
    backgroundColor: colors.background.tertiary,
  },
  reasonsCard: {
    gap: spacing[3],
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  reasonIcon: {
    fontSize: 20,
    marginTop: 2,
  },
  reasonContent: {
    flex: 1,
    gap: spacing[1],
  },
  reasonDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
  },
  eventCard: {
    marginBottom: spacing[3],
    gap: spacing[2],
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  eventIcon: {
    fontSize: 24,
  },
  tipsCard: {
    gap: spacing[3],
    backgroundColor: 'rgba(34, 197, 94, 0.05)',
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  tipIcon: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '700',
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

export default RewardClawbackInfoScreen;
