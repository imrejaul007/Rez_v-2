/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Warning Screen
 * Soft warning for policy violations
 */

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing } from '../../theme';

interface WarningScreenProps {
  onBack?: () => void;
  onAcknowledge?: () => void;
}

export const WarningScreen: React.FC<WarningScreenProps> = ({ onBack, onAcknowledge }) => {
  const navigate = useNavigate();

  const warningDetails = {
    type: 'Content Quality',
    reason: 'Recent content submissions did not meet Privé quality standards.',
    impact: 'Your Privé Coin earning rate has been temporarily reduced by 10%.',
    actions: [
      'Review Privé Content Guidelines',
      'Ensure authentic engagement only',
      'Maintain quality in future submissions',
    ],
    gracePeriod: '7 days',
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={onBack || (() => navigate(-1))}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Notice</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Warning Icon */}
        <div style={style={{...styles.iconContainer}>
          <div style={style={{...styles.warningIcon}>
            <span style={style={{...styles.warningIconText}>⚠</span>
          </div>
        </div>

        {/* Warning Title */}
        <div style={style={{...styles.titleSection}>
          <span variant="h2" color="#FF9800" center>Attention Required</span>
          <span variant="body" color={colors.text.secondary} center style={style={{...styles.subtitle}>
            We noticed something that needs your attention
          </span>
        </div>

        {/* Warning Details */}
        <div style={style={{...styles.detailsCard}>
          <div style={style={{...styles.detailRow}>
            <span variant="caption" color={colors.text.tertiary}>TYPE</span>
            <span variant="body" color={colors.text.primary}>{warningDetails.type}</span>
          </div>

          <div style={style={{...styles.divider} />

          <div style={style={{...styles.detailRow}>
            <span variant="caption" color={colors.text.tertiary}>REASON</span>
            <span variant="body" color={colors.text.primary}>{warningDetails.reason}</span>
          </div>

          <div style={style={{...styles.divider} />

          <div style={style={{...styles.detailRow}>
            <span variant="caption" color={colors.text.tertiary}>IMPACT</span>
            <span variant="body" color="#FF9800">{warningDetails.impact}</span>
          </div>
        </div>

        {/* What To Do */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHAT YOU CAN DO
          </span>

          {warningDetails.actions.map((action, index) => (
            <div key={index} style={style={{...styles.actionItem}>
              <div style={style={{...styles.actionNumber}>
                <span variant="caption" color="#0A0A0A">{index + 1}</span>
              </div>
              <span variant="body" color={colors.text.primary}>{action}</span>
            </div>
          ))}
        </div>

        {/* Grace Period */}
        <div style={style={{...styles.gracePeriodCard}>
          <span variant="caption" color={colors.text.tertiary}>RECOVERY PERIOD</span>
          <span variant="h3" color="#4CAF50">{warningDetails.gracePeriod}</span>
          <span variant="caption" color={colors.text.secondary}>
            Maintain good standing to restore full benefits
          </span>
        </div>

        {/* Reassurance */}
        <div style={style={{...styles.reassuranceSection}>
          <span variant="body" color={colors.text.tertiary} center style={style={{...styles.reassuranceText}>
            This is a soft warning. Your Privé access remains active.{'\n'}
            We believe in supporting your journey, not punishing mistakes.
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Acknowledge Button */}
      <div style={style={{...styles.buttonContainer}>
        <div style={style={{...styles.guidelinesButton}>
          <span variant="body" gold>View Guidelines</span>
        </div>
        <div
          style={style={{...styles.acknowledgeButton}
          onClick={onAcknowledge || (() => navigate(-1))}
        >
          <span variant="bodyLarge" color="#0A0A0A">I Understand</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#0A0A0A' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  scrollView: { flex: 1 },
  iconContainer: { alignItems: 'center', paddingTop: spacing[8] },
  warningIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 152, 0, 0.2)',
    borderWidth: 2,
    borderColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningIconText: { fontSize: 36, color: '#FF9800' },
  titleSection: { paddingVertical: spacing[6], paddingHorizontal: spacing[5] },
  subtitle: { marginTop: spacing[2] },
  detailsCard: {
    marginHorizontal: spacing[5],
    backgroundColor: '#181818',
    borderRadius: 16,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  detailRow: { gap: spacing[2] },
  divider: { height: 1, backgroundColor: '#2A2A2A', marginVertical: spacing[4] },
  section: { paddingHorizontal: spacing[5], paddingTop: spacing[6] },
  sectionLabel: { marginBottom: spacing[4], letterSpacing: 1 },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[3],
  },
  actionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#C9A962',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gracePeriodCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 12,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
    alignItems: 'center',
    gap: spacing[2],
  },
  reassuranceSection: { paddingHorizontal: spacing[5], paddingTop: spacing[6] },
  reassuranceText: { fontStyle: 'italic', lineHeight: 22 },
  bottomSpace: { height: 150 },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    gap: spacing[3],
  },
  guidelinesButton: {
    paddingVertical: spacing[3],
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  acknowledgeButton: {
    backgroundColor: '#C9A962',
    paddingVertical: spacing[4],
    borderRadius: 12,
    alignItems: 'center',
  },
};

export default WarningScreen;
