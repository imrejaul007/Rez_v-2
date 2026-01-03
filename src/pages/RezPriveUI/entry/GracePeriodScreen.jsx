/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Grace Period Screen
 * "Your Privé access is under review"
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface GracePeriodScreenProps {
  daysRemaining?: number;
  reason?: string;
  requirements?: string[];
  onViewDetails?: () => void;
  onContactSupport?: () => void;
}

export const GracePeriodScreen: React.FC<GracePeriodScreenProps> = ({
  daysRemaining = 14,
  reason = 'Your engagement metrics have dropped below the required threshold.',
  requirements = [
    'Complete at least 2 campaigns',
    'Maintain 80%+ task completion rate',
    'Submit quality content on time',
  ],
  onViewDetails,
  onContactSupport,
}) => {
  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.warningIcon}>
            <span style={style={{...styles.warningIconText}>⏳</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Grace Period Active
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Your Privé access is under review
          </span>
        </div>

        {/* Timer Card */}
        <Card variant="default" style={style={{...styles.timerCard}>
          <span variant="caption" color={colors.text.tertiary}>
            Time Remaining
          </span>
          <div style={style={{...styles.timerValue}>
            <span variant="h1" gold>{daysRemaining}</span>
            <span variant="body" color={colors.text.secondary}> days</span>
          </div>
          <div style={style={{...styles.timerBar}>
            <div style={[style={{...styles.timerProgress, { width: `${(daysRemaining / 30) * 100}%` }]} />
          </div>
        </Card>

        {/* Reason */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Why You're in Grace Period
          </span>
          <Card variant="default" style={style={{...styles.reasonCard}>
            <span variant="body" color={colors.text.secondary}>
              {reason}
            </span>
          </Card>
        </div>

        {/* Requirements */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            To Retain Your Privé Status
          </span>
          {requirements.map((req, index) => (
            <Card key={index} variant="default" style={style={{...styles.requirementCard}>
              <div style={style={{...styles.requirementIcon}>
                <span style={style={{...styles.checkmark}>○</span>
              </div>
              <span variant="body" color={colors.text.primary} style={style={{...styles.requirementText}>
                {req}
              </span>
            </Card>
          ))}
        </div>

        {/* What Happens */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What Happens Next
          </span>
          <Card variant="default" style={style={{...styles.infoCard}>
            <div style={style={{...styles.infoRow}>
              <span style={style={{...styles.infoIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Meet requirements → Full access restored
              </span>
            </div>
            <div style={style={{...styles.infoDivider} />
            <div style={style={{...styles.infoRow}>
              <span style={style={{...styles.infoIconWarning}>!</span>
              <span variant="body" color={colors.text.secondary}>
                Grace period expires → Access paused
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="View Detailed Requirements"
            variant="gold"
            onClick={onViewDetails}
          />
          <Button
            label="Contact Concierge"
            variant="outline"
            onClick={onContactSupport}
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
    paddingTop: spacing[8],
    paddingBottom: spacing[6],
  },
  warningIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderWidth: 2,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  warningIconText: {
    fontSize: 36,
  },
  timerCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
    paddingVertical: spacing[5],
  },
  timerValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: spacing[2],
  },
  timerBar: {
    width: '100%',
    height: 4,
    backgroundColor: colors.background.tertiary,
    borderRadius: 2,
    marginTop: spacing[3],
    overflow: 'hidden',
  },
  timerProgress: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: 2,
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
  reasonCard: {
    backgroundColor: 'rgba(251, 191, 36, 0.05)',
    borderColor: 'rgba(251, 191, 36, 0.2)',
  },
  requirementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
    gap: spacing[3],
  },
  requirementIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.gold.muted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: colors.gold.muted,
    fontSize: 14,
  },
  requirementText: {
    flex: 1,
  },
  infoCard: {
    gap: spacing[3],
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  infoIcon: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '700',
  },
  infoIconWarning: {
    color: '#F59E0B',
    fontSize: 16,
    fontWeight: '700',
  },
  infoDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
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

export default GracePeriodScreen;
