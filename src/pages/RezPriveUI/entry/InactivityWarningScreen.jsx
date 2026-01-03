/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Inactivity Warning Screen
 *
 * "Your Privé access needs 1 action this week."
 *
 * This is a soft nudge before grace period kicks in.
 * Shows clear, actionable steps to retain access.
 * Respectful tone - no sudden removals, no harsh messaging.
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface SuggestedAction {
  id: string;
  icon: string;
  title: string;
  description: string;
  impact: string;
  route: string;
  params?: any;
}

interface InactivityWarningScreenProps {
  daysInactive?: number;
  daysUntilGracePeriod?: number;
  suggestedActions?: SuggestedAction[];
  onDismiss?: () => void;
}

const defaultActions: SuggestedAction[] = [
  {
    id: 'transaction',
    icon: '💳',
    title: 'Complete 1 Transaction',
    description: 'Any purchase at a Privé partner',
    impact: '+15 Engagement',
    route: 'Explore',
    params: { screen: 'X1_ExploreMain' },
  },
  {
    id: 'review',
    icon: '⭐',
    title: 'Leave a Review',
    description: 'Share your experience with a brand',
    impact: '+10 Trust',
    route: 'Content',
    params: { screen: 'D1_ContentHub' },
  },
  {
    id: 'campaign',
    icon: '📢',
    title: 'Accept a Campaign',
    description: 'Join a brand campaign invitation',
    impact: '+20 Brand Affinity',
    route: 'Offers',
    params: { screen: 'C1_OffersFeed' },
  },
];

export const InactivityWarningScreen: React.FC<InactivityWarningScreenProps> = ({
  daysInactive = 12,
  daysUntilGracePeriod = 3,
  suggestedActions = defaultActions,
  onDismiss,
}) => {
  const navigate = useNavigate();

  const handleAction = (action: SuggestedAction) => {
    if (action.params) {
      navigate(action.route, action.params);
    } else {
      navigate(action.route);
    }
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    } else {
      navigate(-1);
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.closeButton} onClick={handleDismiss}>
            <span style={style={{...styles.closeIcon}>×</span>
          </div>
        </div>

        {/* Warning Icon */}
        <div style={style={{...styles.iconContainer}>
          <LinearGradient
            colors={['rgba(255, 193, 7, 0.2)', 'rgba(255, 193, 7, 0.05)']}
            style={style={{...styles.iconGradient}
          >
            <span style={style={{...styles.warningIcon}>⚡</span>
          </LinearGradient>
        </div>

        {/* Title */}
        <span variant="h2" color={colors.text.primary} center style={style={{...styles.title}>
          Stay Active. Stay Privé.
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.subtitle}>
          Your Privé access needs attention this week
        </span>

        {/* Status Card */}
        <div style={style={{...styles.statusCard}>
          <div style={style={{...styles.statusRow}>
            <div style={style={{...styles.statusItem}>
              <span variant="h2" color="#FFC107">{daysInactive}</span>
              <span variant="caption" color={colors.text.tertiary}>Days Inactive</span>
            </div>
            <div style={style={{...styles.statusDivider} />
            <div style={style={{...styles.statusItem}>
              <span variant="h2" color={colors.text.primary}>{daysUntilGracePeriod}</span>
              <span variant="caption" color={colors.text.tertiary}>Days Until Grace</span>
            </div>
          </div>
          <div style={style={{...styles.statusBar}>
            <div style={[style={{...styles.statusBarFill, { width: `${(daysInactive / 15) * 100}%` }]} />
          </div>
          <span variant="caption" color={colors.text.tertiary} center>
            Complete 1 action to reset your status
          </span>
        </div>

        {/* Suggested Actions */}
        <div style={style={{...styles.actionsSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.actionsLabel}>
            SUGGESTED ACTIONS
          </span>
          <span variant="caption" color={colors.text.secondary} style={style={{...styles.actionsSubtitle}>
            Any one of these will secure your access
          </span>

          {suggestedActions.map((action, index) => (
            <div
              key={action.id}
              style={style={{...styles.actionCard}
              onClick={() => handleAction(action)}
              onClick={() => {}}
            >
              <div style={style={{...styles.actionIcon}>
                <span style={style={{...styles.actionEmoji}>{action.icon}</span>
              </div>
              <div style={style={{...styles.actionContent}>
                <span variant="body" color={colors.text.primary}>{action.title}</span>
                <span variant="caption" color={colors.text.tertiary}>{action.description}</span>
              </div>
              <div style={style={{...styles.actionImpact}>
                <span variant="caption" color="#4CAF50">{action.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div style={style={{...styles.reassuranceCard}>
          <span variant="body" color={colors.text.secondary} center>
            Nothing sudden. Nothing harsh.{'\n'}
            We just want to keep you in the circle.
          </span>
        </div>

        {/* CTA */}
        <div
          style={style={{...styles.primaryButton}
          onClick={() => navigate('/prive/Explore', { screen: 'X1_ExploreMain' })}
        >
          <span variant="bodyLarge" color="#0A0A0A">Explore Privé Stores</span>
        </div>

        <div style={style={{...styles.secondaryButton} onClick={handleDismiss}>
          <span variant="body" color={colors.text.tertiary}>Remind Me Later</span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: colors.text.secondary,
  },

  // Icon
  iconContainer: {
    alignItems: 'center',
    marginTop: spacing[4],
    marginBottom: spacing[6],
  },
  iconGradient: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 193, 7, 0.3)',
  },
  warningIcon: {
    fontSize: 40,
  },

  // Title
  title: {
    marginBottom: spacing[2],
  },
  subtitle: {
    marginBottom: spacing[6],
    paddingHorizontal: spacing[4],
    lineHeight: 24,
  },

  // Status Card
  statusCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.2)',
    marginBottom: spacing[6],
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing[4],
  },
  statusItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  statusDivider: {
    width: 1,
    height: 50,
    backgroundColor: '#2A2A2A',
  },
  statusBar: {
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    marginBottom: spacing[3],
    overflow: 'hidden',
  },
  statusBarFill: {
    height: '100%',
    backgroundColor: '#FFC107',
    borderRadius: 2,
  },

  // Actions
  actionsSection: {
    marginBottom: spacing[6],
  },
  actionsLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[1],
  },
  actionsSubtitle: {
    marginBottom: spacing[4],
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionEmoji: {
    fontSize: 22,
  },
  actionContent: {
    flex: 1,
    gap: spacing[1],
  },
  actionImpact: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },

  // Reassurance
  reassuranceCard: {
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
    marginBottom: spacing[6],
  },

  // Buttons
  primaryButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  secondaryButton: {
    paddingVertical: spacing[3],
    alignItems: 'center',
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default InactivityWarningScreen;
