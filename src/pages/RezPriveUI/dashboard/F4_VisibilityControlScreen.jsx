/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F4 - Privé Public Visibility Control
 * Purpose: Give control over prestige
 * Luxury = Control
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

interface VisibilitySettings {
  showPriveBadge: boolean;
  showCategoryAuthority: boolean;
  hideRewardsEarned: boolean;
  anonymousReviews: boolean;
}

interface F4_VisibilityControlScreenProps {
  settings?: VisibilitySettings;
  onSave?: (settings: VisibilitySettings) => void;
  onBack?: () => void;
}

export const F4_VisibilityControlScreen: React.FC<F4_VisibilityControlScreenProps> = ({
  settings: initialSettings = {
    showPriveBadge: true,
    showCategoryAuthority: true,
    hideRewardsEarned: false,
    anonymousReviews: false,
  },
  onSave,
  onBack,
}) => {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (key: keyof VisibilitySettings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    onSave?.(newSettings);
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Visibility" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Control what others see about your Privé status.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Public Settings */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Public Profile
        </span>

        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Show Privé badge publicly
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Display badge on your profile and reviews
              </span>
            </div>
            <Switch
              value={settings.showPriveBadge}
              onValueChange={() => toggleSetting('showPriveBadge')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.showPriveBadge ? colors.gold.primary : colors.text.tertiary}
            />
          </div>

          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Show category authority
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Display your top categories to others
              </span>
            </div>
            <Switch
              value={settings.showCategoryAuthority}
              onValueChange={() => toggleSetting('showCategoryAuthority')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.showCategoryAuthority ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Privacy Settings */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Privacy
        </span>

        <Card variant="default" style={style={{...styles.settingsCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Hide rewards earned
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Don't show total rewards on your profile
              </span>
            </div>
            <Switch
              value={settings.hideRewardsEarned}
              onValueChange={() => toggleSetting('hideRewardsEarned')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.hideRewardsEarned ? colors.gold.primary : colors.text.tertiary}
            />
          </div>

          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>
                Anonymous reviews mode
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Post reviews without showing your name
              </span>
            </div>
            <Switch
              value={settings.anonymousReviews}
              onValueChange={() => toggleSetting('anonymousReviews')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={settings.anonymousReviews ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      {/* Note */}
      <Card variant="gold" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
          </div>
          <span variant="bodySmall" color={colors.text.secondary}>
            Luxury means control. These settings let you manage your visibility.
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
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
};

export default F4_VisibilityControlScreen;
