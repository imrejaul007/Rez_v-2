/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D5 - Privé Content Guidelines Screen
 * Purpose: Maintain quality without sounding strict
 * Tone: Clear, calm, professional
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface D5_ContentGuidelinesScreenProps {
  onBack?: () => void;
}

export const D5_ContentGuidelinesScreen: React.FC<D5_ContentGuidelinesScreenProps> = ({
  onBack,
}) => {
  const whatWorks = [
    'Clear, well-lit photos and videos',
    'Honest, detailed descriptions of your experience',
    'Specific mentions of what stood out',
    'Natural, conversational tone',
    'Context about when and why you visited',
  ];

  const whatToAvoid = [
    'Blurry or poorly lit content',
    'Generic or copied text',
    'Misleading claims about products or services',
    'Overly promotional language',
    'Content that doesn\'t reflect genuine experience',
  ];

  const brandSafeRules = [
    'Respect brand guidelines when provided',
    'Maintain professional representation',
    'Disclose Privé partnership when required',
    'Avoid controversial or divisive content',
  ];

  return (
    <ScreenContainer>
      <PriveHeader title="Content Guidelines" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Quality content builds trust and unlocks higher rewards. Here's what helps your content succeed.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* What Works Best */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What Works Best
        </span>
        <Card variant="gold">
          {whatWorks.map((item, index) => (
            <div key={index} style={style={{...styles.guidelineItem}>
              <div style={style={{...styles.checkIcon}>
                <span variant="bodySmall" color={colors.status.success}>
                  {'\u2713'}
                </span>
              </div>
              <span variant="body" color={colors.text.primary}>
                {item}
              </span>
            </div>
          ))}
        </Card>
      </div>

      {/* What to Avoid */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What to Avoid
        </span>
        <Card variant="default">
          {whatToAvoid.map((item, index) => (
            <div key={index} style={style={{...styles.guidelineItem}>
              <div style={style={{...styles.crossIcon}>
                <span variant="bodySmall" color={colors.status.error}>
                  {'\u2212'}
                </span>
              </div>
              <span variant="body" color={colors.text.secondary}>
                {item}
              </span>
            </div>
          ))}
        </Card>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Brand-Safe Rules */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Brand-Safe Guidelines
        </span>
        <Card variant="default">
          {brandSafeRules.map((item, index) => (
            <div key={index} style={style={{...styles.guidelineItem}>
              <div style={style={{...styles.bulletIcon}>
                <span variant="caption" gold>
                  {'\u2022'}
                </span>
              </div>
              <span variant="body" color={colors.text.secondary}>
                {item}
              </span>
            </div>
          ))}
        </Card>
      </div>

      {/* Authenticity Note */}
      <Card variant="goldGlow" style={style={{...styles.authenticityCard}>
        <div style={style={{...styles.authenticityContent}>
          <div style={style={{...styles.authenticityIcon}>
            <span variant="h4" gold>
              {'\u2605'}
            </span>
          </div>
          <div style={style={{...styles.authenticityText}>
            <span variant="bodyLarge" color={colors.text.primary}>
              Authenticity is key
            </span>
            <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.authenticitySubtext}>
              The most successful Privé content comes from genuine experiences. Share what you truly feel, and your audience will respond.
            </span>
          </div>
        </div>
      </Card>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
    lineHeight: 24,
  },
  section: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  guidelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  crossIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  bulletIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  authenticityCard: {
    marginTop: spacing[6],
  },
  authenticityContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  authenticityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  authenticityText: {
    flex: 1,
  },
  authenticitySubtext: {
    marginTop: spacing[2],
    lineHeight: 20,
  },
};

export default D5_ContentGuidelinesScreen;
