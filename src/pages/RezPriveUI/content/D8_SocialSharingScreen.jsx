/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D8 - Privé Social Sharing Control
 * Purpose: Let Privé users control exposure
 * Keeps control in user's hands
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

interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  isConnected: boolean;
  isEnabled: boolean;
}

interface SharingSettings {
  autoTagReZ: boolean;
  manualShareOnly: boolean;
  privateOnlyCampaigns: boolean;
}

interface D8_SocialSharingScreenProps {
  platforms?: SocialPlatform[];
  settings?: SharingSettings;
  onSave?: (settings: SharingSettings, platforms: SocialPlatform[]) => void;
  onBack?: () => void;
}

export const D8_SocialSharingScreen: React.FC<D8_SocialSharingScreenProps> = ({
  platforms: initialPlatforms = [
    { id: '1', name: 'Instagram', icon: '\uD83D\uDCF7', isConnected: true, isEnabled: true },
    { id: '2', name: 'Twitter', icon: '\uD83D\uDC26', isConnected: true, isEnabled: false },
    { id: '3', name: 'Facebook', icon: 'f', isConnected: false, isEnabled: false },
    { id: '4', name: 'LinkedIn', icon: 'in', isConnected: false, isEnabled: false },
  ],
  settings: initialSettings = {
    autoTagReZ: true,
    manualShareOnly: false,
    privateOnlyCampaigns: false,
  },
  onSave,
  onBack,
}) => {
  const [platforms, setPlatforms] = useState(initialPlatforms);
  const [settings, setSettings] = useState(initialSettings);

  const togglePlatform = (id: string) => {
    setPlatforms(platforms.map((p) =>
      p.id === id && p.isConnected ? { ...p, isEnabled: !p.isEnabled } : p
    ));
  };

  const updateSetting = (key: keyof SharingSettings) => {
    setSettings({ ...settings, [key]: !settings[key] };
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Sharing Controls" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Control how your Privé content is shared across platforms.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Platform Selection */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Connected Platforms
        </span>

        {platforms.map((platform) => (
          <Card
            key={platform.id}
            variant={platform.isEnabled ? 'gold' : 'default'}
            style={style={{...styles.platformCard}
          >
            <div style={style={{...styles.platformContent}>
              <div style={style={{...styles.platformInfo}>
                <div style={[
                  style={{...styles.platformIcon,
                  platform.isConnected && style={{...styles.platformIconConnected,
                ]}>
                  <span variant="body" color={platform.isConnected ? colors.text.primary : colors.text.tertiary}>
                    {platform.icon}
                  </span>
                </div>
                <div>
                  <span variant="body" color={colors.text.primary}>
                    {platform.name}
                  </span>
                  <span variant="caption" color={platform.isConnected ? colors.status.success : colors.text.tertiary}>
                    {platform.isConnected ? 'Connected' : 'Not connected'}
                  </span>
                </div>
              </div>
              {platform.isConnected ? (
                <Switch
                  value={platform.isEnabled}
                  onValueChange={() => togglePlatform(platform.id)}
                  trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
                  thumbColor={platform.isEnabled ? colors.gold.primary : colors.text.tertiary}
                />
              ) : (
                <div style={style={{...styles.connectButton}>
                  <span variant="bodySmall" gold>
                    Connect
                  </span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Sharing Preferences */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Sharing Preferences
        </span>

        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Auto-tag ReZ
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Automatically include ReZ mention in posts
              </span>
            </div>
            <Switch
              value={settings.autoTagReZ}
              onValueChange={() => updateSetting('autoTagReZ')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.autoTagReZ ? colors.gold.primary : colors.text.tertiary}
            />
          </div>

          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Manual share only
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Require confirmation before each share
              </span>
            </div>
            <Switch
              value={settings.manualShareOnly}
              onValueChange={() => updateSetting('manualShareOnly')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.manualShareOnly ? colors.gold.primary : colors.text.tertiary}
            />
          </div>

          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Private campaigns only
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Only participate in non-public campaigns
              </span>
            </div>
            <Switch
              value={settings.privateOnlyCampaigns}
              onValueChange={() => updateSetting('privateOnlyCampaigns')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.privateOnlyCampaigns ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Control Note */}
      <Card variant="gold" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
          </div>
          <span variant="bodySmall" color={colors.text.secondary}>
            You're always in control. These settings can be changed anytime.
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
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  platformCard: {
    marginBottom: spacing[3],
  },
  platformContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  platformInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  platformIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  platformIconConnected: {
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  connectButton: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
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
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
};

export default D8_SocialSharingScreen;
