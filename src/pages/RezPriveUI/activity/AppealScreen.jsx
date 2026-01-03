/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Appeal Screen
 * Submit appeal for rejected content or warnings
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing } from '../../theme';

interface AppealScreenProps {
  onBack?: () => void;
  onSubmit?: () => void;
}

export const AppealScreen: React.FC<AppealScreenProps> = ({ onBack, onSubmit }) => {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [explanation, setExplanation] = useState('');

  const appealReasons = [
    { id: 'mistake', label: 'I believe this was a mistake', icon: '?' },
    { id: 'context', label: 'Context was misunderstood', icon: '💬' },
    { id: 'first_time', label: 'This is my first violation', icon: '1' },
    { id: 'other', label: 'Other reason', icon: '...' },
  ];

  const rejectionDetails = {
    type: 'Campaign Rejection',
    campaign: 'Summer Collection Preview',
    brand: 'Fashion Brand X',
    reason: 'Content did not meet brand guidelines',
    date: 'Dec 18, 2024',
  };

  const canSubmit = selectedReason && explanation.length >= 20;

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={onBack || (() => navigate(-1))}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Submit Appeal</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Rejection Summary */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            REGARDING
          </span>
          <div style={style={{...styles.rejectionCard}>
            <div style={style={{...styles.rejectionHeader}>
              <div style={style={{...styles.rejectionIcon}>
                <span style={{ color: '#EF5350', fontSize: 18 }}>✕</span>
              </div>
              <div style={style={{...styles.rejectionInfo}>
                <span variant="bodyLarge" color={colors.text.primary}>{rejectionDetails.type}</span>
                <span variant="caption" color={colors.text.tertiary}>{rejectionDetails.date}</span>
              </div>
            </div>
            <div style={style={{...styles.rejectionDetails}>
              <div style={style={{...styles.rejectionRow}>
                <span variant="caption" color={colors.text.tertiary}>Campaign</span>
                <span variant="body" color={colors.text.primary}>{rejectionDetails.campaign}</span>
              </div>
              <div style={style={{...styles.rejectionRow}>
                <span variant="caption" color={colors.text.tertiary}>Brand</span>
                <span variant="body" color={colors.text.primary}>{rejectionDetails.brand}</span>
              </div>
              <div style={style={{...styles.rejectionRow}>
                <span variant="caption" color={colors.text.tertiary}>Reason</span>
                <span variant="body" color="#EF5350">{rejectionDetails.reason}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Appeal Reason */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHY ARE YOU APPEALING?
          </span>

          {appealReasons.map((reason) => (
            <div
              key={reason.id}
              style={[
                style={{...styles.reasonCard,
                selectedReason === reason.id && style={{...styles.reasonCardSelected,
              ]}
              onClick={() => setSelectedReason(reason.id)}
            >
              <div style={style={{...styles.reasonLeft}>
                <div style={[
                  style={{...styles.reasonIcon,
                  selectedReason === reason.id && style={{...styles.reasonIconSelected,
                ]}>
                  <span style={{ color: selectedReason === reason.id ? '#0A0A0A' : colors.text.tertiary }}>
                    {reason.icon}
                  </span>
                </div>
                <span variant="body" color={colors.text.primary}>{reason.label}</span>
              </div>
              <div style={[
                style={{...styles.radioOuter,
                selectedReason === reason.id && style={{...styles.radioOuterSelected,
              ]}>
                {selectedReason === reason.id && <div style={style={{...styles.radioInner} />}
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            EXPLAIN YOUR CASE
          </span>
          <div style={style={{...styles.textAreaContainer}>
            <TextInput
              style={style={{...styles.textArea}
              placeholder="Provide details about your appeal (minimum 20 characters)..."
              placeholderTextColor={colors.text.tertiary}
              value={explanation}
              onChangeText={setExplanation}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.charCount}>
              {explanation.length}/500
            </span>
          </div>
        </div>

        {/* Guidelines */}
        <div style={style={{...styles.guidelinesCard}>
          <span variant="body" gold>Appeal Guidelines</span>
          <div style={style={{...styles.guidelinesList}>
            <span variant="caption" color={colors.text.secondary}>• Be honest and specific</span>
            <span variant="caption" color={colors.text.secondary}>• Provide context if relevant</span>
            <span variant="caption" color={colors.text.secondary}>• One appeal per rejection</span>
            <span variant="caption" color={colors.text.secondary}>• Response within 48-72 hours</span>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Submit Button */}
      <div style={style={{...styles.buttonContainer}>
        <div
          style={[style={{...styles.submitButton, !canSubmit && style={{...styles.submitButtonDisabled]}
          onClick={canSubmit ? (onSubmit || (() => navigate(-1))) : undefined}
          disabled={!canSubmit}
        >
          <span variant="bodyLarge" color={canSubmit ? '#0A0A0A' : colors.text.tertiary}>
            Submit Appeal
          </span>
        </div>
        <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.disclaimer}>
          Appeals are reviewed by our team. Final decisions are binding.
        </span>
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
  section: { paddingHorizontal: spacing[5], paddingTop: spacing[6] },
  sectionLabel: { marginBottom: spacing[3], letterSpacing: 1 },
  rejectionCard: {
    backgroundColor: '#181818',
    borderRadius: 16,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(239, 83, 80, 0.3)',
  },
  rejectionHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] },
  rejectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(239, 83, 80, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectionInfo: { gap: spacing[1] },
  rejectionDetails: { gap: spacing[3], borderTopWidth: 1, borderTopColor: '#2A2A2A', paddingTop: spacing[4] },
  rejectionRow: { gap: spacing[1] },
  reasonCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[4],
    marginBottom: spacing[3],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  reasonCardSelected: { borderColor: '#C9A962', backgroundColor: 'rgba(201, 169, 98, 0.1)' },
  reasonLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing[3] },
  reasonIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIconSelected: { backgroundColor: '#C9A962' },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: { borderColor: '#C9A962' },
  radioInner: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#C9A962' },
  textAreaContainer: {
    backgroundColor: '#181818',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    padding: spacing[4],
  },
  textArea: {
    color: colors.text.primary,
    fontSize: 16,
    minHeight: 100,
  },
  charCount: { textAlign: 'right', marginTop: spacing[2] },
  guidelinesCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: 12,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  guidelinesList: { marginTop: spacing[3], gap: spacing[2] },
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
  },
  submitButton: { backgroundColor: '#C9A962', paddingVertical: spacing[4], borderRadius: 12, alignItems: 'center' },
  submitButtonDisabled: { backgroundColor: '#2A2A2A' },
  disclaimer: { marginTop: spacing[3] },
};

export default AppealScreen;
