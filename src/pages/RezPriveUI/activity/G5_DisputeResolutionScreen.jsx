/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G5 - Privé Dispute Resolution Screen
 * Purpose: Protect trust without confrontation
 * UI: Structured form, calm tone, no accusation language
 */

import React, { useState } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type IssueType = 'reward' | 'campaign' | 'brand' | 'privilege' | 'other';

interface G5_DisputeResolutionScreenProps {
  onSubmit?: (data: { type: IssueType; reference: string; description: string }) => void;
  onBack?: () => void;
}

export const G5_DisputeResolutionScreen: React.FC<G5_DisputeResolutionScreenProps> = ({
  onSubmit,
  onBack,
}) => {
  const [selectedType, setSelectedType] = useState<IssueType | null>(null);
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const issueTypes: { type: IssueType; label: string; icon: string }[] = [
    { type: 'reward', label: 'Reward Issue', icon: '+' },
    { type: 'campaign', label: 'Campaign Issue', icon: '\u2605' },
    { type: 'brand', label: 'Brand Concern', icon: '\u2709' },
    { type: 'privilege', label: 'Privilege Issue', icon: '\uD83D\uDD11' },
    { type: 'other', label: 'Other', icon: '\u2022' },
  ];

  const handleSubmit = () => {
    if (selectedType && description) {
      onSubmit?.({ type: selectedType, reference, description };
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <ScreenContainer scrollable={false}>
        <PriveHeader title="Request Submitted" showBack onBack={onBack} showBadge={false} />

        <div style={style={{...styles.confirmationContainer}>
          <div style={style={{...styles.confirmIcon}>
            <span variant="h2" gold>
              {'\u2713'}
            </span>
          </div>
          <span variant="h3" color={colors.text.primary} center style={style={{...styles.confirmTitle}>
            Request Received
          </span>
          <span variant="body" color={colors.text.secondary} center style={style={{...styles.confirmText}>
            Your request has been received and is under review.
          </span>
          <Card variant="gold" style={style={{...styles.confirmCard}>
            <span variant="bodySmall" color={colors.text.secondary} center>
              We'll respond within 24-48 hours via the notification center.
            </span>
          </Card>
        </div>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <PriveHeader title="Resolve an Issue" showBack onBack={onBack} showBadge={false} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        We're here to help resolve any concerns with your Privé experience.
      </span>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Issue Type */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Issue Type
        </span>
        <div style={style={{...styles.typeGrid}>
          {issueTypes.map((issue) => (
            <div
              key={issue.type}
              style={[
                style={{...styles.typeCard,
                selectedType === issue.type && style={{...styles.typeCardSelected,
              ]}
              onClick={() => setSelectedType(issue.type)}
              onClick={() => {}}
            >
              <div style={[
                style={{...styles.typeIcon,
                selectedType === issue.type && style={{...styles.typeIconSelected,
              ]}>
                <Text
                  variant="body"
                  color={selectedType === issue.type ? colors.gold.primary : colors.text.secondary}
                >
                  {issue.icon}
                </span>
              </div>
              <Text
                variant="bodySmall"
                color={selectedType === issue.type ? colors.gold.primary : colors.text.primary}
              >
                {issue.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Reference */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Campaign/Order Reference (Optional)
        </span>
        <TextInput
          style={style={{...styles.textInput}
          value={reference}
          onChangeText={setReference}
          placeholder="e.g., Campaign ID or brand name"
          placeholderTextColor={colors.text.tertiary}
        />
      </div>

      {/* Description */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Description
        </span>
        <TextInput
          style={[style={{...styles.textInput, style={{...styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Please describe your concern..."
          placeholderTextColor={colors.text.tertiary}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} style={style={{...styles.note}>
        All disputes are handled confidentially and fairly.
      </span>

      {/* Submit Button */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Submit Request"
          onClick={handleSubmit}
          variant="primary"
          disabled={!selectedType || !description}
        />
      </div>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
    lineHeight: 24,
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  typeCard: {
    width: '30%',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  typeCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: colors.transparent.gold10,
  },
  typeIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  typeIconSelected: {
    backgroundColor: colors.transparent.gold10,
  },
  textInput: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    color: colors.text.primary,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  textArea: {
    minHeight: 120,
  },
  note: {
    marginTop: spacing[4],
  },
  ctaContainer: {
    marginTop: spacing[6],
    paddingBottom: spacing[4],
  },
  // Confirmation styles
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing[6],
  },
  confirmIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  confirmTitle: {
    marginBottom: spacing[3],
  },
  confirmText: {
    marginBottom: spacing[6],
  },
  confirmCard: {
    width: '100%',
  },
};

export default G5_DisputeResolutionScreen;
