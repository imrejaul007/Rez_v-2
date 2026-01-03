/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A5 - Access Status Screen
 * Shows current access status, history, and re-qualification path
 * "Your Privé journey at a glance"
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type AccessState = 'active' | 'paused' | 'review' | 'revoked' | 'expired';

interface PillarData {
  id: string;
  name: string;
  shortName: string;
  score: number;
  weight: number;
  trend: 'up' | 'down' | 'stable';
  icon: string;
  color: string;
}

interface AccessStatusData {
  state: AccessState;
  accessType: 'permanent' | 'time_bound' | 'brand_specific' | 'trial';
  category: string;
  grantedDate: string;
  expiresDate?: string;
  totalScore: number;
  tier: 'none' | 'entry' | 'elite';
  pillars: PillarData[];
  recentActivity: { date: string; action: string; impact: 'positive' | 'negative' | 'neutral' }[];
  warnings?: string[];
  requalificationPath?: { step: string; progress: number }[];
}

// Re-evaluation triggers from the PEE spec
const reEvaluationTriggers = [
  { event: 'Inactive 30 days', action: '-15 Engagement', color: '#FFC107' },
  { event: 'Trust violation', action: 'Immediate review', color: '#F44336' },
  { event: 'Missed 2 campaigns', action: '-20 Brand', color: '#FF9800' },
  { event: 'No transactions 45 days', action: 'Grace period', color: '#FFC107' },
];

const defaultStatus: AccessStatusData = {
  state: 'active',
  accessType: 'permanent',
  category: 'Power User',
  grantedDate: 'March 15, 2024',
  totalScore: 74.5,
  tier: 'entry',
  pillars: [
    { id: 'engagement', name: 'Engagement', shortName: 'Engage', score: 78, weight: 0.25, trend: 'up', icon: '📊', color: '#4CAF50' },
    { id: 'trust', name: 'Trust & Integrity', shortName: 'Trust', score: 92, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
    { id: 'influence', name: 'Influence', shortName: 'Influence', score: 65, weight: 0.20, trend: 'up', icon: '📢', color: '#E91E63' },
    { id: 'economic', name: 'Economic Value', shortName: 'Economic', score: 70, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
    { id: 'brand_affinity', name: 'Brand Affinity', shortName: 'Brand', score: 60, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
    { id: 'network', name: 'Network & Community', shortName: 'Network', score: 55, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
  ],
  recentActivity: [
    { date: 'Today', action: 'Redeemed 500 Privé coins', impact: 'positive' },
    { date: 'Yesterday', action: 'Referred 2 new users', impact: 'positive' },
    { date: '3 days ago', action: 'Completed 5 transactions', impact: 'positive' },
    { date: '1 week ago', action: 'Weekly review passed', impact: 'neutral' },
  ],
};

const pausedStatus: AccessStatusData = {
  state: 'paused',
  accessType: 'time_bound',
  category: 'Premium Consumer',
  grantedDate: 'January 10, 2024',
  totalScore: 58.2,
  tier: 'none',
  pillars: [
    { id: 'engagement', name: 'Engagement', shortName: 'Engage', score: 45, weight: 0.25, trend: 'down', icon: '📊', color: '#4CAF50' },
    { id: 'trust', name: 'Trust & Integrity', shortName: 'Trust', score: 90, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
    { id: 'influence', name: 'Influence', shortName: 'Influence', score: 55, weight: 0.20, trend: 'down', icon: '📢', color: '#E91E63' },
    { id: 'economic', name: 'Economic Value', shortName: 'Economic', score: 80, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
    { id: 'brand_affinity', name: 'Brand Affinity', shortName: 'Brand', score: 40, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
    { id: 'network', name: 'Network & Community', shortName: 'Network', score: 35, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
  ],
  recentActivity: [
    { date: '2 weeks ago', action: 'Access paused - score below 70', impact: 'negative' },
    { date: '3 weeks ago', action: 'Warning issued - engagement drop', impact: 'negative' },
  ],
  warnings: [
    'Score dropped below 70 threshold',
    'Engagement pillar critical (45/100)',
    'No transactions in 14 days',
  ],
  requalificationPath: [
    { step: 'Complete 5 transactions', progress: 20 },
    { step: 'Maintain daily activity for 7 days', progress: 0 },
    { step: 'Reach 70+ total score', progress: 83 },
  ],
};

interface A5_AccessStatusScreenProps {
  status?: AccessStatusData;
  isPaused?: boolean;
}

export const A5_AccessStatusScreen: React.FC<A5_AccessStatusScreenProps> = ({
  status,
  isPaused = false,
}) => {
  const navigate = useNavigate();
  const currentStatus = status || (isPaused ? pausedStatus : defaultStatus);

  const getStateInfo = (state: AccessState) => {
    switch (state) {
      case 'active':
        return { label: 'Active', color: '#4CAF50', icon: '✓', bg: 'rgba(76, 175, 80, 0.15)' };
      case 'paused':
        return { label: 'Paused', color: '#FFC107', icon: '⏸', bg: 'rgba(255, 193, 7, 0.15)' };
      case 'review':
        return { label: 'Under Review', color: '#FF9800', icon: '⏳', bg: 'rgba(255, 152, 0, 0.15)' };
      case 'revoked':
        return { label: 'Revoked', color: '#F44336', icon: '✕', bg: 'rgba(244, 67, 54, 0.15)' };
      case 'expired':
        return { label: 'Expired', color: '#9E9E9E', icon: '⏱', bg: 'rgba(158, 158, 158, 0.15)' };
    }
  };

  const getAccessTypeInfo = (type: string) => {
    switch (type) {
      case 'permanent':
        return { label: 'Permanent', icon: '∞', color: '#4CAF50' };
      case 'time_bound':
        return { label: 'Time-bound', icon: '⏱', color: '#FFC107' };
      case 'brand_specific':
        return { label: 'Brand-specific', icon: '🎯', color: '#2196F3' };
      default:
        return { label: 'Trial', icon: '✨', color: '#9C27B0' };
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return { icon: '↑', color: '#4CAF50' };
      case 'down':
        return { icon: '↓', color: '#F44336' };
      default:
        return { icon: '→', color: '#9E9E9E' };
    }
  };

  const stateInfo = getStateInfo(currentStatus.state);
  const accessTypeInfo = getAccessTypeInfo(currentStatus.accessType);

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div
          style={style={{...styles.backButton}
          onClick={() => navigate(-1)}
        >
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <div style={style={{...styles.headerContent}>
          <span variant="h2" color={colors.text.primary}>Access Status</span>
          <span variant="caption" color={colors.text.tertiary}>
            Your Privé membership details
          </span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Status Card */}
        <div style={[style={{...styles.statusCard, { borderColor: stateInfo.color }]}>
          {/* Status Badge */}
          <div style={[style={{...styles.statusBadge, { backgroundColor: stateInfo.bg }]}>
            <span style={[style={{...styles.statusIcon, { color: stateInfo.color }]}>{stateInfo.icon}</span>
            <span variant="bodyLarge" style={{ color: stateInfo.color }}>{stateInfo.label}</span>
          </div>

          {/* Access Info */}
          <div style={style={{...styles.accessInfo}>
            <div style={style={{...styles.accessRow}>
              <span variant="caption" color={colors.text.tertiary}>Category</span>
              <span variant="body" gold>{currentStatus.category}</span>
            </div>
            <div style={style={{...styles.accessRow}>
              <span variant="caption" color={colors.text.tertiary}>Access Type</span>
              <div style={style={{...styles.accessTypeTag}>
                <span style={{ fontSize: 12 }}>{accessTypeInfo.icon}</span>
                <span variant="caption" style={{ color: accessTypeInfo.color }}>
                  {accessTypeInfo.label}
                </span>
              </div>
            </div>
            <div style={style={{...styles.accessRow}>
              <span variant="caption" color={colors.text.tertiary}>Member Since</span>
              <span variant="body" color={colors.text.primary}>{currentStatus.grantedDate}</span>
            </div>
            {currentStatus.expiresDate && (
              <div style={style={{...styles.accessRow}>
                <span variant="caption" color={colors.text.tertiary}>Expires</span>
                <span variant="body" color="#FFC107">{currentStatus.expiresDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Warnings */}
        {currentStatus.warnings && currentStatus.warnings.length > 0 && (
          <div style={style={{...styles.warningsCard}>
            <div style={style={{...styles.warningHeader}>
              <span style={style={{...styles.warningIcon}>⚠️</span>
              <span variant="label" color="#FFC107">ATTENTION NEEDED</span>
            </div>
            {currentStatus.warnings.map((warning, index) => (
              <div key={index} style={style={{...styles.warningItem}>
                <div style={style={{...styles.warningDot} />
                <span variant="body" color={colors.text.secondary}>{warning}</span>
              </div>
            ))}
          </div>
        )}

        {/* Re-qualification Path */}
        {currentStatus.requalificationPath && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              PATH TO REACTIVATION
            </span>
            <div style={style={{...styles.requalCard}>
              {currentStatus.requalificationPath.map((step, index) => (
                <div key={index} style={style={{...styles.requalStep}>
                  <div style={style={{...styles.requalStepHeader}>
                    <div style={[
                      style={{...styles.requalStepNumber,
                      step.progress === 100 && style={{...styles.requalStepComplete,
                    ]}>
                      {step.progress === 100 ? (
                        <span style={style={{...styles.requalCheckmark}>✓</span>
                      ) : (
                        <span variant="caption" color={colors.text.tertiary}>{index + 1}</span>
                      )}
                    </div>
                    <span variant="body" color={colors.text.primary} style={style={{...styles.requalStepText}>
                      {step.step}
                    </span>
                  </div>
                  <div style={style={{...styles.requalProgress}>
                    <div style={style={{...styles.requalProgressTrack}>
                      <div
                        style={[
                          style={{...styles.requalProgressFill,
                          { width: `${step.progress}%` },
                          step.progress === 100 && style={{...styles.requalProgressComplete,
                        ]}
                      />
                    </div>
                    <span variant="caption" color={colors.text.tertiary}>{step.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Privé Score Overview */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            PRIVÉ SCORE
          </span>
          <div style={style={{...styles.scoreOverviewCard}>
            <div style={style={{...styles.scoreOverviewMain}>
              <span variant="h1" gold>{currentStatus.totalScore.toFixed(1)}</span>
              <span variant="caption" color={colors.text.tertiary}>/100</span>
            </div>
            <div style={style={{...styles.scoreOverviewInfo}>
              <span variant="body" color={colors.text.primary}>
                {currentStatus.tier === 'elite' ? 'Elite' : currentStatus.tier === 'entry' ? 'Entry' : 'Below Threshold'}
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                {currentStatus.tier === 'elite' ? 'Top-tier access' : currentStatus.tier === 'entry' ? '70+ achieved' : 'Need 70+ to qualify'}
              </span>
            </div>
          </div>
        </div>

        {/* 6 Pillars Health */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            THE 6 PILLARS
          </span>
          <div style={style={{...styles.signalsCard}>
            {currentStatus.pillars.map((pillar, index) => {
              const trend = getTrendIcon(pillar.trend);
              const weightPercent = (pillar.weight * 100).toFixed(0);

              return (
                <div key={index} style={style={{...styles.signalItem}>
                  <div style={style={{...styles.signalHeader}>
                    <div style={style={{...styles.pillarNameRow}>
                      <div style={[style={{...styles.pillarIconSmall, { backgroundColor: `${pillar.color}20` }]}>
                        <span style={style={{...styles.pillarIconEmoji}>{pillar.icon}</span>
                      </div>
                      <div>
                        <span variant="body" color={colors.text.primary}>{pillar.name}</span>
                        <span variant="caption" color={colors.text.tertiary}>{weightPercent}% weight</span>
                      </div>
                    </div>
                    <div style={style={{...styles.signalScore}>
                      <span variant="body" color={colors.text.primary}>
                        {pillar.score}
                      </span>
                      <span style={[style={{...styles.trendIcon, { color: trend.color }]}>{trend.icon}</span>
                    </div>
                  </div>
                  <div style={style={{...styles.signalBar}>
                    <div
                      style={[
                        style={{...styles.signalBarFill,
                        { width: `${Math.min(pillar.score, 100)}%`, backgroundColor: pillar.color },
                      ]}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Re-evaluation Triggers */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            RE-EVALUATION TRIGGERS
          </span>
          <div style={style={{...styles.triggersCard}>
            {reEvaluationTriggers.map((trigger, index) => (
              <div key={index} style={style={{...styles.triggerItem}>
                <div style={[style={{...styles.triggerDot, { backgroundColor: trigger.color }]} />
                <div style={style={{...styles.triggerInfo}>
                  <span variant="body" color={colors.text.primary}>{trigger.event}</span>
                  <span variant="caption" style={{ color: trigger.color }}>{trigger.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            RECENT ACTIVITY
          </span>
          <div style={style={{...styles.activityCard}>
            {currentStatus.recentActivity.map((activity, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.activityItem,
                  index < currentStatus.recentActivity.length - 1 && style={{...styles.activityItemBorder,
                ]}
              >
                <div style={[
                  style={{...styles.activityDot,
                  activity.impact === 'positive' && style={{...styles.activityDotPositive,
                  activity.impact === 'negative' && style={{...styles.activityDotNegative,
                ]} />
                <div style={style={{...styles.activityContent}>
                  <span variant="body" color={colors.text.primary}>{activity.action}</span>
                  <span variant="caption" color={colors.text.tertiary}>{activity.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access States Explained */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ABOUT ACCESS STATES
          </span>
          <div style={style={{...styles.statesCard}>
            {[
              { state: 'active', label: 'Active', desc: 'Full access to all Privé features', color: '#4CAF50' },
              { state: 'paused', label: 'Paused', desc: 'Temporary hold while signals recover', color: '#FFC107' },
              { state: 'review', label: 'Under Review', desc: 'Access being evaluated', color: '#FF9800' },
              { state: 'revoked', label: 'Revoked', desc: 'Access removed for violations', color: '#F44336' },
            ].map((item, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.stateItem,
                  currentStatus.state === item.state && style={{...styles.stateItemActive,
                ]}
              >
                <div style={[style={{...styles.stateIndicator, { backgroundColor: item.color }]} />
                <div style={style={{...styles.stateInfo}>
                  <span variant="body" color={colors.text.primary}>{item.label}</span>
                  <span variant="caption" color={colors.text.tertiary}>{item.desc}</span>
                </div>
                {currentStatus.state === item.state && (
                  <div style={style={{...styles.currentBadge}>
                    <span variant="caption" gold>Current</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Note */}
        <div style={style={{...styles.philosophyCard}>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.philosophyText}>
            "Access isn't static. It ebbs and flows with the value you bring. Stay engaged, stay valuable, stay Privé."
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      {currentStatus.state !== 'active' && (
        <div style={style={{...styles.ctaContainer}>
          <div
            style={style={{...styles.ctaButton}
            onClick={() => navigate('/prive/A1_Eligibility')}
          >
            <span variant="bodyLarge" color="#0A0A0A">View Requalification Path</span>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  backIcon: {
    fontSize: 18,
    color: colors.text.primary,
  },
  headerContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing[5],
    paddingBottom: 120,
  },

  // Status Card
  statusCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 2,
    marginBottom: spacing[4],
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    marginBottom: spacing[4],
  },
  statusIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accessInfo: {
    gap: spacing[3],
  },
  accessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accessTypeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },

  // Warnings
  warningsCard: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.3)',
    marginBottom: spacing[4],
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[3],
  },
  warningIcon: {
    fontSize: 16,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  warningDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFC107',
    marginTop: 6,
  },

  // Section
  section: {
    marginBottom: spacing[4],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },

  // Score Overview
  scoreOverviewCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scoreOverviewMain: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[1],
  },
  scoreOverviewInfo: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },

  // Pillar Name Row
  pillarNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  pillarIconSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillarIconEmoji: {
    fontSize: 18,
  },

  // Re-evaluation Triggers
  triggersCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  triggerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  triggerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  triggerInfo: {
    flex: 1,
    gap: spacing[1],
  },

  // Requalification
  requalCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[4],
  },
  requalStep: {
    gap: spacing[2],
  },
  requalStepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  requalStepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  requalStepComplete: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
  requalCheckmark: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  requalStepText: {
    flex: 1,
  },
  requalProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    gap: spacing[2],
  },
  requalProgressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  requalProgressFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: 2,
  },
  requalProgressComplete: {
    backgroundColor: '#4CAF50',
  },

  // Signals
  signalsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[4],
  },
  signalItem: {
    gap: spacing[2],
  },
  signalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signalScore: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  trendIcon: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: spacing[1],
  },
  signalBar: {
    height: 6,
    backgroundColor: '#2A2A2A',
    borderRadius: 3,
    overflow: 'visible',
    position: 'relative',
  },
  signalBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  signalBarDanger: {
    backgroundColor: '#F44336',
  },
  signalThreshold: {
    position: 'absolute',
    top: -2,
    width: 2,
    height: 10,
    backgroundColor: colors.gold.primary,
  },

  // Activity
  activityCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: spacing[4],
    gap: spacing[3],
  },
  activityItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#9E9E9E',
    marginTop: 4,
  },
  activityDotPositive: {
    backgroundColor: '#4CAF50',
  },
  activityDotNegative: {
    backgroundColor: '#F44336',
  },
  activityContent: {
    flex: 1,
    gap: spacing[1],
  },

  // States
  statesCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  stateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  stateItemActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  stateIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  stateInfo: {
    flex: 1,
    gap: spacing[1],
  },
  currentBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Philosophy
  philosophyCard: {
    padding: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
  },
  philosophyText: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  bottomSpace: {
    height: spacing[8],
  },

  // CTA
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default A5_AccessStatusScreen;
