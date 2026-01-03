/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A8 - Privé Re-qualification / Grace Period Screen
 *
 * Purpose: Handle access review with calm, respectful messaging
 * Shows:
 * - "Your Privé access is in review" state
 * - Grace period explanation
 * - What can be done to maintain access
 * - Clear timeline without anxiety
 * - Supportive, not punitive tone
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  PriveBadge,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type ReviewStatus = 'under_review' | 'grace_period' | 'action_needed' | 'restored';

interface ReviewData {
  status: ReviewStatus;
  daysRemaining?: number;
  gracePeriodEnd?: string;
  currentScore: number;
  requiredScore: number;
  impactAreas: {
    area: string;
    status: 'ok' | 'needs_improvement' | 'critical';
    suggestion: string;
  }[];
  supportMessage: string;
}

const defaultReviewData: ReviewData = {
  status: 'grace_period',
  daysRemaining: 21,
  gracePeriodEnd: 'January 15, 2026',
  currentScore: 58,
  requiredScore: 65,
  impactAreas: [
    {
      area: 'Engagement Frequency',
      status: 'needs_improvement',
      suggestion: 'Participate in 2-3 more campaigns this month',
    },
    {
      area: 'Content Quality',
      status: 'ok',
      suggestion: 'Your content quality remains strong',
    },
    {
      area: 'Brand Interactions',
      status: 'needs_improvement',
      suggestion: 'Respond to brand feedback within 48 hours',
    },
  ],
  supportMessage: 'We believe in your potential. This is a pause, not an end.',
};

export const A8_RequalificationScreen: React.FC = () => {
  const navigate = useNavigate();
  const reviewData = defaultReviewData;

  const getStatusConfig = () => {
    switch (reviewData.status) {
      case 'under_review':
        return {
          icon: '◎',
          title: 'Access Under Review',
          subtitle: 'We\'re reviewing your recent activity',
          color: colors.status.info,
        };
      case 'grace_period':
        return {
          icon: '◈',
          title: 'Grace Period Active',
          subtitle: 'You have time to strengthen your standing',
          color: colors.status.warning,
        };
      case 'action_needed':
        return {
          icon: '!',
          title: 'Action Needed',
          subtitle: 'A few improvements will restore full access',
          color: colors.status.warning,
        };
      case 'restored':
        return {
          icon: '✦',
          title: 'Access Restored',
          subtitle: 'Welcome back to Privé',
          color: colors.status.success,
        };
    }
  };

  const getAreaStatusConfig = (status: 'ok' | 'needs_improvement' | 'critical') => {
    switch (status) {
      case 'ok':
        return { icon: '✓', color: colors.status.success, label: 'On Track' };
      case 'needs_improvement':
        return { icon: '◎', color: colors.status.warning, label: 'Improve' };
      case 'critical':
        return { icon: '!', color: colors.status.error, label: 'Urgent' };
    }
  };

  const config = getStatusConfig();
  const progressPercent = (reviewData.currentScore / reviewData.requiredScore) * 100;

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <PriveBadge size="sm" />
        <span variant="bodySmall" color={colors.text.tertiary}>
          Status Update
        </span>
      </div>

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* STATUS CARD */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <Card variant="goldGlow" style={style={{...styles.statusCard}>
            <div style={[style={{...styles.statusIcon, { backgroundColor: config.color + '20' }]}>
              <span style={[style={{...styles.statusIconText, { color: config.color }]}>
                {config.icon}
              </span>
            </div>

            <span variant="h3" color={colors.text.primary} center>
              {config.title}
            </span>
            <span variant="body" color={colors.text.secondary} center>
              {config.subtitle}
            </span>

            {/* Grace Period Timer */}
            {reviewData.status === 'grace_period' && reviewData.daysRemaining && (
              <div style={style={{...styles.timerContainer}>
                <LinearGradient
                  colors={[colors.transparent.gold10, colors.transparent.gold20]}
                  style={style={{...styles.timerGradient}
                >
                  <span variant="h2" gold>{reviewData.daysRemaining}</span>
                  <span variant="caption" color={colors.text.tertiary}>days remaining</span>
                </LinearGradient>
                <span variant="caption" color={colors.text.tertiary}>
                  Until {reviewData.gracePeriodEnd}
                </span>
              </div>
            )}
          </Card>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* SCORE PROGRESS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Your Progress
          </span>

          <Card variant="default" style={style={{...styles.scoreCard}>
            <div style={style={{...styles.scoreHeader}>
              <div>
                <span variant="h3" color={colors.text.primary}>
                  {reviewData.currentScore}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Current Score
                </span>
              </div>
              <div style={style={{...styles.scoreDivider} />
              <div style={style={{...styles.scoreTarget}>
                <span variant="h3" gold>
                  {reviewData.requiredScore}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Required
                </span>
              </div>
            </div>

            <div style={style={{...styles.progressBarContainer}>
              <div style={style={{...styles.progressBar}>
                <div
                  style={[
                    style={{...styles.progressFill,
                    { width: `${Math.min(progressPercent, 100)}%` },
                  ]}
                />
                <div style={[style={{...styles.progressMarker, { left: '100%' }]} />
              </div>
              <span variant="caption" color={colors.text.tertiary}>
                {Math.round(reviewData.requiredScore - reviewData.currentScore)} points needed
              </span>
            </div>
          </Card>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* IMPROVEMENT AREAS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Areas to Focus On
          </span>

          {reviewData.impactAreas.map((area, index) => {
            const areaConfig = getAreaStatusConfig(area.status);

            return (
              <div key={index} style={style={{...styles.areaCard}>
                <div style={style={{...styles.areaHeader}>
                  <div style={[style={{...styles.areaIcon, { backgroundColor: areaConfig.color + '20' }]}>
                    <span style={[style={{...styles.areaIconText, { color: areaConfig.color }]}>
                      {areaConfig.icon}
                    </span>
                  </div>
                  <div style={style={{...styles.areaInfo}>
                    <span variant="body" color={colors.text.primary}>
                      {area.area}
                    </span>
                    <div style={[style={{...styles.areaStatusBadge, { backgroundColor: areaConfig.color + '15' }]}>
                      <span variant="caption" style={{ color: areaConfig.color }}>
                        {areaConfig.label}
                      </span>
                    </div>
                  </div>
                </div>
                <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.areaSuggestion}>
                  {area.suggestion}
                </span>
              </div>
            );
          })}
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* REASSURANCE MESSAGE */}
        {/* ============================================ */}
        <Card variant="default" style={style={{...styles.supportCard}>
          <div style={style={{...styles.supportContent}>
            <span style={style={{...styles.supportIcon}>◈</span>
            <div style={style={{...styles.supportText}>
              <span variant="body" color={colors.text.secondary}>
                {reviewData.supportMessage}
              </span>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.supportNote}>
                No harsh downgrades. We're here to help.
              </span>
            </div>
          </div>
        </Card>

        {/* ============================================ */}
        {/* HELP LINK */}
        {/* ============================================ */}
        <div style={style={{...styles.helpLink}>
          <span variant="bodySmall" gold>
            Questions? Talk to Privé Concierge →
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={() => navigate('/prive/Main')}
          onClick={() => {}}
        >
          <span variant="bodyLarge" color={colors.background.primary}>
            View Campaigns
          </span>
        </div>
        <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.ctaNote}>
          Participating in campaigns helps improve your score
        </span>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[12],
    paddingBottom: spacing[4],
  },

  scrollContent: {
    paddingBottom: 160,
  },

  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  statusCard: {
    padding: spacing[6],
    alignItems: 'center',
    gap: spacing[3],
  },
  statusIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  statusIconText: {
    fontSize: 28,
  },
  timerContainer: {
    alignItems: 'center',
    marginTop: spacing[4],
    gap: spacing[2],
  },
  timerGradient: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },

  scoreCard: {
    padding: spacing[5],
    gap: spacing[4],
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border.secondary,
  },
  scoreTarget: {
    alignItems: 'flex-end',
  },
  progressBarContainer: {
    gap: spacing[2],
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.background.tertiary,
    borderRadius: borderRadius.full,
    overflow: 'visible',
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: borderRadius.full,
  },
  progressMarker: {
    position: 'absolute',
    top: -4,
    width: 2,
    height: 16,
    backgroundColor: colors.status.success,
    marginLeft: -1,
  },

  areaCard: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
    gap: spacing[3],
  },
  areaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  areaIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaIconText: {
    fontSize: 18,
  },
  areaInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  areaStatusBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  areaSuggestion: {
    paddingLeft: 52,
    lineHeight: 20,
  },

  supportCard: {
    marginHorizontal: spacing[5],
    padding: spacing[5],
    marginBottom: spacing[4],
  },
  supportContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[4],
  },
  supportIcon: {
    fontSize: 24,
    color: colors.gold.primary,
  },
  supportText: {
    flex: 1,
    gap: spacing[2],
  },
  supportNote: {
    fontStyle: 'italic',
  },

  helpLink: {
    alignItems: 'center',
    paddingVertical: spacing[4],
  },

  bottomSpace: {
    height: spacing[8],
  },

  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
    gap: spacing[2],
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  ctaNote: {
    marginTop: spacing[1],
  },
};

export default A8_RequalificationScreen;
