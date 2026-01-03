/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B6 - Privé Settings (Core Only)
 * Purpose: Clean and intentional settings
 * Rule: No advanced settings, keep it minimal
 */

import React, { useState } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  CategoryTag,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface SettingsData {
  preferredCategories: string[];
  brandInterests: string[];
  isPublicProfile: boolean;
  notifications: {
    rewards: boolean;
    campaigns: boolean;
    brandInvites: boolean;
  };
}

interface B6_SettingsScreenProps {
  settings?: SettingsData;
  onSave?: (settings: SettingsData) => void;
  onBack?: () => void;
}

export const B6_SettingsScreen: React.FC<B6_SettingsScreenProps> = ({
  settings = {
    preferredCategories: ['Dining', 'Luxury', 'Travel'],
    brandInterests: ['Fashion', 'Wellness', 'Tech'],
    isPublicProfile: true,
    notifications: {
      rewards: true,
      campaigns: true,
      brandInvites: true,
    },
  },
  onSave,
  onBack,
}) => {
  const [localSettings, setLocalSettings] = useState(settings);

  const allCategories = ['Dining', 'Luxury', 'Travel', 'Fashion', 'Wellness', 'Tech', 'Lifestyle', 'Entertainment'];

  const toggleCategory = (category: string) => {
    const current = localSettings.preferredCategories;
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setLocalSettings({ ...localSettings, preferredCategories: updated };
  };

  const toggleNotification = (key: keyof typeof localSettings.notifications) => {
    setLocalSettings({
      ...localSettings,
      notifications: {
        ...localSettings.notifications,
        [key]: !localSettings.notifications[key],
      },
    };
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Settings" showBack onBack={onBack} />

      {/* Preferred Categories */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Preferred Categories
        </span>
        <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
          Select categories that match your interests
        </span>
        <div style={style={{...styles.categoryGrid}>
          {allCategories.map((category) => (
            <div
              key={category}
              onClick={() => toggleCategory(category)}
            >
              <CategoryTag
                category={category}
                isActive={localSettings.preferredCategories.includes(category)}
                isTop={false}
              />
            </div>
          ))}
        </div>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Visibility */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Visibility
        </span>
        <Card variant="default" style={style={{...styles.settingCard}>
          <div style={style={{...styles.settingRow}>
            <div style={style={{...styles.settingText}>
              <span variant="body" color={colors.text.primary}>
                Public Profile
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Show Privé badge on your profile
              </span>
            </div>
            <Switch
              value={localSettings.isPublicProfile}
              onValueChange={(value) =>
                setLocalSettings({ ...localSettings, isPublicProfile: value })
              }
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={localSettings.isPublicProfile ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Notifications */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Notifications
        </span>
        <Card variant="default" style={style={{...styles.settingCard}>
          <div style={style={{...styles.settingRow}>
            <span variant="body" color={colors.text.primary}>
              Reward Updates
            </span>
            <Switch
              value={localSettings.notifications.rewards}
              onValueChange={() => toggleNotification('rewards')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={localSettings.notifications.rewards ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <span variant="body" color={colors.text.primary}>
              Campaign Updates
            </span>
            <Switch
              value={localSettings.notifications.campaigns}
              onValueChange={() => toggleNotification('campaigns')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={localSettings.notifications.campaigns ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
          <div style={[style={{...styles.settingRow, style={{...styles.settingRowBorder]}>
            <span variant="body" color={colors.text.primary}>
              Brand Invitations
            </span>
            <Switch
              value={localSettings.notifications.brandInvites}
              onValueChange={() => toggleNotification('brandInvites')}
              trackColor={{ false: colors.background.tertiary, true: colors.gold.muted }}
              thumbColor={localSettings.notifications.brandInvites ? colors.gold.primary : colors.text.tertiary}
            />
          </div>
        </Card>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[2],
  },
  sectionSubtext: {
    marginBottom: spacing[4],
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  settingCard: {
    padding: 0,
    overflow: 'hidden',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing[4],
  },
  settingRowBorder: {
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
  },
  settingText: {
    flex: 1,
    gap: spacing[1],
  },
};

export default B6_SettingsScreen;
