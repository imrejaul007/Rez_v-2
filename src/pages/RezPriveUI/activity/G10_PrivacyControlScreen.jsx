/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G10 - Privé Privacy & Data Control
 * Purpose: Luxury users expect control
 * Controls: Data visibility, content usage, brand limits, tracking
 */

import React, { useState } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface PrivacySettings {
  dataVisibility: boolean;
  contentUsagePermission: boolean;
  brandInteractionLimits: boolean;
  activityTracking: boolean;
  analyticsSharing: boolean;
}

interface G10_PrivacyControlScreenProps {
  settings?: PrivacySettings;
  onSave?: (settings: PrivacySettings) => void;
  onBack?: () => void;
}

export const G10_PrivacyControlScreen: React.FC<G10_PrivacyControlScreenProps> = ({
  settings: initialSettings = {
    dataVisibility: true,
    contentUsagePermission: true,
    brandInteractionLimits: false,
    activityTracking: true,
    analyticsSharing: false,
  },
  onSave,
  onBack,
}) => {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (key: keyof PrivacySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    onSave?.(newSettings);
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Privacy & Data" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Control how your data is used and shared within the Privé ecosystem.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Data Visibility */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Data Visibility
        </span>
        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Profile data visible to brands
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Brands can see your category preferences
              </span>
            </div>
            <Switch
              value={settings.dataVisibility}
              onValueChange={() => toggleSetting('dataVisibility')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.dataVisibility ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Content Usage */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Content Usage
        </span>
        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Allow content in brand marketing
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Brands may feature your reviews
              </span>
            </div>
            <Switch
              value={settings.contentUsagePermission}
              onValueChange={() => toggleSetting('contentUsagePermission')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.contentUsagePermission ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Brand Interaction */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Brand Interaction
        </span>
        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Limit brand invitations
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Receive fewer brand collaboration requests
              </span>
            </div>
            <Switch
              value={settings.brandInteractionLimits}
              onValueChange={() => toggleSetting('brandInteractionLimits')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.brandInteractionLimits ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Tracking */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Tracking & Analytics
        </span>
        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Activity tracking for personalization
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Better offers based on your activity
              </span>
            </div>
            <Switch
              value={settings.activityTracking}
              onValueChange={() => toggleSetting('activityTracking')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.activityTracking ? colors.gold.primary : colors.text.tertiary}
            />
          </div>

          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Share anonymized analytics
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Help improve Privé for everyone
              </span>
            </div>
            <Switch
              value={settings.analyticsSharing}
              onValueChange={() => toggleSetting('analyticsSharing')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.analyticsSharing ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Note */}
      <Card variant="gold" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="body" gold>
              {'\uD83D\uDD12'}
            </span>
          </div>
          <span variant="bodySmall" color={colors.text.secondary}>
            Your data is encrypted and protected. These controls give you additional granular control over sharing.
          </span>
        </div>
      </Card>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  settingsCard: {
    padding: 0,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  settingRowBorder: {
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing[3],
    gap: spacing[1],
  },
  noteCard: {
    marginTop: spacing[6],
  },
  noteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
};

export default G10_PrivacyControlScreen;
