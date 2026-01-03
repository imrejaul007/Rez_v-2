/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G2 - Privé Push Notification Style
 * Purpose: Push notifications feel like a discreet tap on the shoulder
 * Tone: Never promotional, never loud, never frequent
 * This screen shows the notification style guide
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

interface NotificationExample {
  title: string;
  body: string;
  type: 'good' | 'avoid';
}

interface G2_PushNotificationStyleScreenProps {
  onBack?: () => void;
}

export const G2_PushNotificationStyleScreen: React.FC<G2_PushNotificationStyleScreenProps> = ({
  onBack,
}) => {
  const goodExamples: NotificationExample[] = [
    { title: 'Privé', body: "You've unlocked a Privé reward.", type: 'good' },
    { title: 'Privé', body: 'A private offer is available for you.', type: 'good' },
    { title: 'Privé', body: 'Your impact has been recognized.', type: 'good' },
  ];

  const avoidExamples: NotificationExample[] = [
    { title: 'LIMITED TIME!', body: "DON'T MISS OUT! 50% OFF NOW!", type: 'avoid' },
    { title: 'Hey there!', body: 'Check out these amazing deals!', type: 'avoid' },
  ];

  return (
    <ScreenContainer>
      <PriveHeader title="Notification Style" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Privé notifications are designed to feel like a discreet tap on the shoulder, not a loud interruption.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Tone Rules */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Notification Principles
        </span>

        <Card variant="gold">
          <div style={style={{...styles.ruleItem}>
            <div style={style={{...styles.ruleIcon}>
              <span variant="bodySmall" gold>
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.primary}>
              Never promotional
            </span>
          </div>
          <div style={style={{...styles.ruleItem}>
            <div style={style={{...styles.ruleIcon}>
              <span variant="bodySmall" gold>
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.primary}>
              Never loud
            </span>
          </div>
          <div style={style={{...styles.ruleItem}>
            <div style={style={{...styles.ruleIcon}>
              <span variant="bodySmall" gold>
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.primary}>
              Never frequent
            </span>
          </div>
        </Card>
      </div>

      {/* Good Examples */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.status.success} style={style={{...styles.sectionLabel}>
          How Privé Notifications Sound
        </span>

        {goodExamples.map((example, index) => (
          <Card key={index} variant="default" style={style={{...styles.exampleCard}>
            <div style={style={{...styles.notificationPreview}>
              <div style={style={{...styles.previewHeader}>
                <div style={style={{...styles.appIcon}>
                  <span variant="caption" gold>
                    P
                  </span>
                </div>
                <span variant="bodySmall" color={colors.text.secondary}>
                  {example.title}
                </span>
              </div>
              <span variant="body" color={colors.text.primary}>
                {example.body}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Avoid Examples */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.status.error} style={style={{...styles.sectionLabel}>
          What We Avoid
        </span>

        {avoidExamples.map((example, index) => (
          <Card key={index} variant="default" style={[style={{...styles.exampleCard, style={{...styles.avoidCard]}>
            <div style={style={{...styles.notificationPreview}>
              <div style={style={{...styles.previewHeader}>
                <div style={style={{...styles.crossIcon}>
                  <span variant="caption" color={colors.status.error}>
                    {'\u2717'}
                  </span>
                </div>
                <span variant="bodySmall" color={colors.text.tertiary}>
                  {example.title}
                </span>
              </div>
              <span variant="body" color={colors.text.tertiary}>
                {example.body}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        Respect your attention. That's the Privé way.
      </span>
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
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  ruleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  exampleCard: {
    marginBottom: spacing[2],
  },
  avoidCard: {
    opacity: 0.6,
  },
  notificationPreview: {},
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
    gap: spacing[2],
  },
  appIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    marginTop: spacing[6],
  },
};

export default G2_PushNotificationStyleScreen;
