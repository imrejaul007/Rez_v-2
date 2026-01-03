/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G6 - Privé Trust & Integrity Screen
 * Purpose: Reassure members their status is protected and meaningful
 * Shows: Anti-fraud commitment, fair evaluation, manual review
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  PriveBadge,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface G6_TrustIntegrityScreenProps {
  onBack?: () => void;
}

export const G6_TrustIntegrityScreen: React.FC<G6_TrustIntegrityScreenProps> = ({
  onBack,
}) => {
  const commitments = [
    {
      icon: '\u2713',
      title: 'Anti-Fraud Protection',
      description: 'We actively monitor and prevent fraudulent activity to protect genuine members.',
    },
    {
      icon: '\u2696',
      title: 'Fair Evaluation',
      description: 'All members are evaluated on the same transparent criteria, without bias.',
    },
    {
      icon: '\u270E',
      title: 'Manual Review',
      description: 'Important decisions are reviewed by humans, not just algorithms.',
    },
    {
      icon: '\uD83D\uDD12',
      title: 'Privacy Protected',
      description: 'Your data and activity are kept confidential and secure.',
    },
  ];

  return (
    <ScreenContainer>
      <PriveHeader title="Trust & Integrity" showBack onBack={onBack} />

      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.badgeContainer}>
          <PriveBadge size="lg" />
        </div>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.headerTitle}>
          Protecting Privé Value
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.headerText}>
          Privé access is protected to preserve its value.
        </span>
      </div>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Commitments */}
      <div style={style={{...styles.commitmentsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Our Commitments
        </span>

        {commitments.map((commitment, index) => (
          <Card key={index} variant="default" style={style={{...styles.commitmentCard}>
            <div style={style={{...styles.commitmentContent}>
              <div style={style={{...styles.commitmentIcon}>
                <span variant="body" gold>
                  {commitment.icon}
                </span>
              </div>
              <div style={style={{...styles.commitmentText}>
                <span variant="bodyLarge" color={colors.text.primary}>
                  {commitment.title}
                </span>
                <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.commitmentDescription}>
                  {commitment.description}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Statement */}
      <Card variant="goldGlow" style={style={{...styles.trustCard}>
        <span variant="body" color={colors.text.primary} center style={style={{...styles.trustText}>
          Your Privé status is earned through genuine engagement. We protect this achievement.
        </span>
      </Card>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        Integrity is the foundation of Privé
      </span>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    alignItems: 'center',
    marginTop: spacing[4],
  },
  badgeContainer: {
    padding: spacing[3],
    marginBottom: spacing[4],
  },
  headerTitle: {
    marginBottom: spacing[2],
  },
  headerText: {
    paddingHorizontal: spacing[4],
  },
  commitmentsSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  commitmentCard: {
    marginBottom: spacing[3],
  },
  commitmentContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  commitmentIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  commitmentText: {
    flex: 1,
    gap: spacing[1],
  },
  commitmentDescription: {
    lineHeight: 20,
  },
  trustCard: {
    marginTop: spacing[6],
  },
  trustText: {
    lineHeight: 24,
  },
  note: {
    marginTop: spacing[6],
  },
};

export default G6_TrustIntegrityScreen;
