/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Re-Entry Screen
 * How to regain Privé after exit
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ReEntryStep {
  id: string;
  step: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
}

interface ReEntryScreenProps {
  exitReason?: string;
  cooldownDays?: number;
  cooldownRemaining?: number;
  steps?: ReEntryStep[];
  canReapply?: boolean;
  onApply?: () => void;
  onLearnMore?: () => void;
}

export const ReEntryScreen: React.FC<ReEntryScreenProps> = ({
  exitReason = 'Inactivity - No campaign participation for 90 days',
  cooldownDays = 30,
  cooldownRemaining = 12,
  steps = [
    { id: '1', step: 1, title: 'Cooldown Period', description: 'Wait for the cooldown period to complete', status: 'current' },
    { id: '2', step: 2, title: 'Submit Re-application', description: 'Complete the Privé re-application form', status: 'pending' },
    { id: '3', step: 3, title: 'Eligibility Review', description: 'Our team reviews your updated profile', status: 'pending' },
    { id: '4', step: 4, title: 'Onboarding', description: 'Complete refreshed Privé orientation', status: 'pending' },
  ],
  canReapply = false,
  onApply,
  onLearnMore,
}) => {
  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed': return '#22C55E';
      case 'current': return colors.gold.primary;
      case 'pending': return colors.text.tertiary;
      default: return colors.text.tertiary;
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.iconContainer}>
            <span style={style={{...styles.icon}>↻</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Return to Privé
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Your path back to exclusive access
          </span>
        </div>

        {/* Exit Reason */}
        <Card variant="default" style={style={{...styles.reasonCard}>
          <span variant="caption" color={colors.text.tertiary}>
            Previous Exit Reason
          </span>
          <span variant="body" color={colors.text.secondary}>
            {exitReason}
          </span>
        </Card>

        {/* Cooldown Status */}
        {cooldownRemaining > 0 && (
          <Card variant="goldGlow" style={style={{...styles.cooldownCard}>
            <span variant="caption" color={colors.text.tertiary}>
              Cooldown Period
            </span>
            <div style={style={{...styles.cooldownValue}>
              <span variant="h2" gold>{cooldownRemaining}</span>
              <span variant="body" color={colors.text.secondary}> days remaining</span>
            </div>
            <div style={style={{...styles.cooldownBar}>
              <div
                style={[
                  style={{...styles.cooldownProgress,
                  { width: `${((cooldownDays - cooldownRemaining) / cooldownDays) * 100}%` }
                ]}
              />
            </div>
            <span variant="caption" color={colors.text.tertiary}>
              You can reapply after the cooldown period
            </span>
          </Card>
        )}

        {/* Re-entry Steps */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Re-Entry Process
          </span>

          {steps.map((step, index) => (
            <div key={step.id} style={style={{...styles.stepContainer}>
              {/* Step Line */}
              {index < steps.length - 1 && (
                <div style={[style={{...styles.stepLine, { backgroundColor: getStepColor(step.status) }]} />
              )}

              <Card variant="default" style={style={{...styles.stepCard}>
                <div style={style={{...styles.stepHeader}>
                  <div style={[style={{...styles.stepNumber, { backgroundColor: getStepColor(step.status) }]}>
                    <span style={style={{...styles.stepNumberText}>
                      {step.status === 'completed' ? '✓' : step.step}
                    </span>
                  </div>
                  <div style={style={{...styles.stepContent}>
                    <span variant="body" color={colors.text.primary}>
                      {step.title}
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>
                      {step.description}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* What You'll Regain */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What You'll Regain
          </span>
          <Card variant="default" style={style={{...styles.benefitsCard}>
            <div style={style={{...styles.benefitItem}>
              <span style={style={{...styles.benefitIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Exclusive brand campaigns
              </span>
            </div>
            <div style={style={{...styles.benefitItem}>
              <span style={style={{...styles.benefitIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Privé coin earning opportunities
              </span>
            </div>
            <div style={style={{...styles.benefitItem}>
              <span style={style={{...styles.benefitIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Premium rewards & experiences
              </span>
            </div>
            <div style={style={{...styles.benefitItem}>
              <span style={style={{...styles.benefitIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Concierge support
              </span>
            </div>
          </Card>
        </div>

        {/* Note */}
        <div style={style={{...styles.noteContainer}>
          <span variant="caption" color={colors.text.tertiary} center>
            Note: Previous coin balances may not be restored.{'\n'}
            Check with concierge for specific cases.
          </span>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          {canReapply ? (
            <Button
              label="Apply for Re-Entry"
              variant="gold"
              onClick={onApply}
            />
          ) : (
            <Button
              label="Apply for Re-Entry"
              variant="gold"
              disabled
              onClick={() => {}}
            />
          )}
          <Button
            label="Learn More"
            variant="outline"
            onClick={onLearnMore}
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
    backgroundColor: colors.background.card,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  icon: {
    fontSize: 32,
    color: colors.gold.primary,
  },
  reasonCard: {
    marginHorizontal: spacing[5],
    backgroundColor: colors.background.tertiary,
    gap: spacing[1],
  },
  cooldownCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    alignItems: 'center',
  },
  cooldownValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: spacing[2],
  },
  cooldownBar: {
    width: '100%',
    height: 4,
    backgroundColor: colors.background.primary,
    borderRadius: 2,
    marginVertical: spacing[2],
    overflow: 'hidden',
  },
  cooldownProgress: {
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
  stepContainer: {
    position: 'relative',
    marginBottom: spacing[2],
  },
  stepLine: {
    position: 'absolute',
    left: 27,
    top: 48,
    width: 2,
    height: 24,
  },
  stepCard: {
    marginLeft: 0,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: colors.background.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  stepContent: {
    flex: 1,
    gap: spacing[1],
  },
  benefitsCard: {
    gap: spacing[3],
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  benefitIcon: {
    color: colors.gold.primary,
    fontSize: 14,
  },
  noteContainer: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
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

export default ReEntryScreen;
