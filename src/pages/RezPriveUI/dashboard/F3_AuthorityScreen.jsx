/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F3 - Privé Authority & Reputation Screen
 * Purpose: Show how much weight the user's voice carries
 * Shows: Trust score, brand confidence, community credibility
 * No numeric scores shown publicly
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  ProgressBar,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type AuthorityLevel = 'High' | 'Very High' | 'Elite';

interface AuthorityData {
  trustScore: AuthorityLevel;
  brandConfidence: AuthorityLevel;
  communityCredibility: AuthorityLevel;
}

interface F3_AuthorityScreenProps {
  authority?: AuthorityData;
  onBack?: () => void;
}

export const F3_AuthorityScreen: React.FC<F3_AuthorityScreenProps> = ({
  authority = {
    trustScore: 'Very High',
    brandConfidence: 'High',
    communityCredibility: 'Very High',
  },
  onBack,
}) => {
  const getLevelProgress = (level: AuthorityLevel) => {
    switch (level) {
      case 'Elite':
        return 1;
      case 'Very High':
        return 0.85;
      case 'High':
        return 0.7;
      default:
        return 0.5;
    }
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Authority" showBack onBack={onBack} />

      {/* Header Statement */}
      <Card variant="goldGlow" style={style={{...styles.headerCard}>
        <div style={style={{...styles.headerContent}>
          <div style={style={{...styles.headerIcon}>
            <span variant="h3" gold>
              {'\u2713'}
            </span>
          </div>
          <span variant="bodyLarge" color={colors.text.primary} center style={style={{...styles.headerText}>
            Your recommendations are trusted by brands and users.
          </span>
        </div>
      </Card>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Authority Metrics */}
      <div style={style={{...styles.metricsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Your Authority
        </span>

        {/* Trust Score */}
        <Card variant="default" style={style={{...styles.metricCard}>
          <div style={style={{...styles.metricHeader}>
            <div style={style={{...styles.metricIcon}>
              <span variant="body" gold>
                {'\u2605'}
              </span>
            </div>
            <div style={style={{...styles.metricInfo}>
              <span variant="body" color={colors.text.primary}>
                Trust Score
              </span>
              <span variant="bodySmall" color={colors.text.tertiary}>
                Based on content authenticity
              </span>
            </div>
            <span variant="bodyLarge" gold>
              {authority.trustScore}
            </span>
          </div>
          <div style={style={{...styles.progressContainer}>
            <ProgressBar progress={getLevelProgress(authority.trustScore)} showGlow />
          </div>
        </Card>

        {/* Brand Confidence */}
        <Card variant="default" style={style={{...styles.metricCard}>
          <div style={style={{...styles.metricHeader}>
            <div style={style={{...styles.metricIcon}>
              <span variant="body" color={colors.text.secondary}>
                {'\u2606'}
              </span>
            </div>
            <div style={style={{...styles.metricInfo}>
              <span variant="body" color={colors.text.primary}>
                Brand Confidence
              </span>
              <span variant="bodySmall" color={colors.text.tertiary}>
                How brands perceive your influence
              </span>
            </div>
            <span variant="bodyLarge" color={colors.text.primary}>
              {authority.brandConfidence}
            </span>
          </div>
          <div style={style={{...styles.progressContainer}>
            <ProgressBar progress={getLevelProgress(authority.brandConfidence)} />
          </div>
        </Card>

        {/* Community Credibility */}
        <Card variant="default" style={style={{...styles.metricCard}>
          <div style={style={{...styles.metricHeader}>
            <div style={style={{...styles.metricIcon}>
              <span variant="body" color={colors.text.secondary}>
                {'\u2665'}
              </span>
            </div>
            <div style={style={{...styles.metricInfo}>
              <span variant="body" color={colors.text.primary}>
                Community Credibility
              </span>
              <span variant="bodySmall" color={colors.text.tertiary}>
                How users respond to your content
              </span>
            </div>
            <span variant="bodyLarge" color={colors.text.primary}>
              {authority.communityCredibility}
            </span>
          </div>
          <div style={style={{...styles.progressContainer}>
            <ProgressBar progress={getLevelProgress(authority.communityCredibility)} />
          </div>
        </Card>
      </div>

      {/* What This Means */}
      <div style={style={{...styles.meaningSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What This Means
        </span>
        <Card variant="gold">
          <div style={style={{...styles.meaningItem}>
            <span variant="body" color={colors.text.secondary}>
              Brands seek your endorsement
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <span variant="body" color={colors.text.secondary}>
              Your reviews rank higher
            </span>
          </div>
          <div style={style={{...styles.meaningItem}>
            <span variant="body" color={colors.text.secondary}>
              Users trust your recommendations
            </span>
          </div>
        </Card>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  headerCard: {
    marginTop: spacing[4],
  },
  headerContent: {
    alignItems: 'center',
  },
  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  headerText: {
    paddingHorizontal: spacing[2],
  },
  metricsSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  metricCard: {
    marginBottom: spacing[3],
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  metricIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  metricInfo: {
    flex: 1,
    gap: spacing[1],
  },
  progressContainer: {
    marginTop: spacing[2],
  },
  meaningSection: {
    marginTop: spacing[6],
  },
  meaningItem: {
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
};

export default F3_AuthorityScreen;
