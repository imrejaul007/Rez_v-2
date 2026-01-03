/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F11 - Settings Screen
 *
 * App settings, notifications, preferences, and account management
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// ============================================
// TYPES
// ============================================

interface SettingToggle {
  id: string;
  icon: string;
  label: string;
  description?: string;
  value: boolean;
}

interface SettingLink {
  id: string;
  icon: string;
  label: string;
  description?: string;
  screen?: string;
  action?: () => void;
  destructive?: boolean;
}

// ============================================
// COMPONENT
// ============================================

export const F11_SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  // Toggle States
  const [notifications, setNotifications] = useState({
    pushEnabled: true,
    offers: true,
    campaigns: true,
    reminders: false,
    marketing: false,
  };

  const [preferences, setPreferences] = useState({
    biometricLogin: true,
    darkMode: true,
    hapticFeedback: true,
    autoSync: true,
  };

  const handleBack = () => navigate(-1);

  // Settings Sections
  const notificationToggles: SettingToggle[] = [
    { id: 'pushEnabled', icon: '🔔', label: 'Push Notifications', description: 'Enable all notifications', value: notifications.pushEnabled },
    { id: 'offers', icon: '🎁', label: 'Offers & Deals', description: 'New offers from Privé partners', value: notifications.offers },
    { id: 'campaigns', icon: '📢', label: 'Campaign Invites', description: 'Brand campaign opportunities', value: notifications.campaigns },
    { id: 'reminders', icon: '⏰', label: 'Activity Reminders', description: 'Stay active reminders', value: notifications.reminders },
    { id: 'marketing', icon: '📧', label: 'Marketing Updates', description: 'News and announcements', value: notifications.marketing },
  ];

  const preferenceToggles: SettingToggle[] = [
    { id: 'biometricLogin', icon: '🔐', label: 'Face ID / Touch ID', description: 'Quick secure login', value: preferences.biometricLogin },
    { id: 'darkMode', icon: '🌙', label: 'Dark Mode', description: 'Always use dark theme', value: preferences.darkMode },
    { id: 'hapticFeedback', icon: '📳', label: 'Haptic Feedback', description: 'Vibration on actions', value: preferences.hapticFeedback },
    { id: 'autoSync', icon: '🔄', label: 'Auto Sync', description: 'Sync data automatically', value: preferences.autoSync },
  ];

  const accountLinks: SettingLink[] = [
    { id: 'profile', icon: '👤', label: 'Edit Profile', screen: 'F8_ProfileEdit' },
    { id: 'visibility', icon: '👁️', label: 'Privacy & Visibility', screen: 'F4_VisibilityControl' },
    { id: 'connected', icon: '🔗', label: 'Connected Accounts', screen: 'ConnectedAccounts' },
    { id: 'password', icon: '🔑', label: 'Change Password', screen: 'ChangePassword' },
  ];

  const supportLinks: SettingLink[] = [
    { id: 'help', icon: '❓', label: 'Help Center', screen: 'Help' },
    { id: 'contact', icon: '💬', label: 'Contact Support', screen: 'ContactSupport' },
    { id: 'feedback', icon: '📝', label: 'Send Feedback', screen: 'Feedback' },
    { id: 'about', icon: 'ℹ️', label: 'About Privé', screen: 'About' },
  ];

  const legalLinks: SettingLink[] = [
    { id: 'terms', icon: '📄', label: 'Terms of Service', screen: 'Terms' },
    { id: 'privacy', icon: '🛡️', label: 'Privacy Policy', screen: 'Privacy' },
    { id: 'licenses', icon: '📜', label: 'Open Source Licenses', screen: 'Licenses' },
  ];

  const dangerLinks: SettingLink[] = [
    { id: 'logout', icon: '🚪', label: 'Log Out', destructive: false, action: () => console.log('Logout') },
    { id: 'deactivate', icon: '⚠️', label: 'Deactivate Account', destructive: true, screen: 'F7_Exit' },
    { id: 'delete', icon: '🗑️', label: 'Delete Account', destructive: true, screen: 'DeleteAccount' },
  ];

  const handleToggle = (section: 'notifications' | 'preferences', id: string) => {
    if (section === 'notifications') {
      setNotifications(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }));
    } else {
      setPreferences(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }));
    }
  };

  const renderToggleSection = (title: string, items: SettingToggle[], section: 'notifications' | 'preferences') => (
    <div style={style={{...styles.section}>
      <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
        {title}
      </span>
      {items.map((item, index) => (
        <div
          key={item.id}
          style={[
            style={{...styles.settingRow,
            index === items.length - 1 && style={{...styles.settingRowLast,
          ]}
        >
          <div style={style={{...styles.settingLeft}>
            <div style={style={{...styles.settingIcon}>
              <span style={style={{...styles.settingEmoji}>{item.icon}</span>
            </div>
            <div style={style={{...styles.settingInfo}>
              <span variant="body" color={colors.text.primary}>{item.label}</span>
              {item.description && (
                <span variant="caption" color={colors.text.tertiary}>{item.description}</span>
              )}
            </div>
          </div>
          <Switch
            value={item.value}
            onValueChange={() => handleToggle(section, item.id)}
            trackColor={{ false: '#3A3A3A', true: `${colors.gold.primary}50` }}
            thumbColor={item.value ? colors.gold.primary : '#6B7280'}
            ios_backgroundColor="#3A3A3A"
          />
        </div>
      ))}
    </div>
  );

  const renderLinkSection = (title: string, items: SettingLink[]) => (
    <div style={style={{...styles.section}>
      <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
        {title}
      </span>
      {items.map((item, index) => (
        <div
          key={item.id}
          style={[
            style={{...styles.settingRow,
            index === items.length - 1 && style={{...styles.settingRowLast,
          ]}
          onClick={() => item.action ? item.action() : item.screen && navigate(item.screen)}
        >
          <div style={style={{...styles.settingLeft}>
            <div style={[style={{...styles.settingIcon, item.destructive && style={{...styles.settingIconDestructive]}>
              <span style={style={{...styles.settingEmoji}>{item.icon}</span>
            </div>
            <div style={style={{...styles.settingInfo}>
              <Text
                variant="body"
                color={item.destructive ? '#EF4444' : colors.text.primary}
              >
                {item.label}
              </span>
              {item.description && (
                <span variant="caption" color={colors.text.tertiary}>{item.description}</span>
              )}
            </div>
          </div>
          <span style={[style={{...styles.settingArrow, item.destructive && style={{...styles.settingArrowDestructive]}>›</span>
        </div>
      ))}
    </div>
  );

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.backButton} onClick={handleBack}>
            <span style={style={{...styles.backIcon}>←</span>
          </div>
          <span variant="h3" color={colors.text.primary}>Settings</span>
          <div style={style={{...styles.headerSpacer} />
        </div>

        {/* Notifications */}
        {renderToggleSection('NOTIFICATIONS', notificationToggles, 'notifications')}

        {/* Preferences */}
        {renderToggleSection('PREFERENCES', preferenceToggles, 'preferences')}

        {/* Account */}
        {renderLinkSection('ACCOUNT', accountLinks)}

        {/* Support */}
        {renderLinkSection('SUPPORT', supportLinks)}

        {/* Legal */}
        {renderLinkSection('LEGAL', legalLinks)}

        {/* Danger Zone */}
        {renderLinkSection('', dangerLinks)}

        {/* App Version */}
        <div style={style={{...styles.versionSection}>
          <span variant="caption" color={colors.text.tertiary} center>
            ReZ Privé v1.0.0
          </span>
          <span variant="caption" color={colors.text.tertiary} center>
            Made with care for the discerning few
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

// ============================================
// STYLES
// ============================================

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: colors.text.primary,
  },
  headerSpacer: {
    width: 40,
  },

  // Sections
  section: {
    marginBottom: spacing[6],
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },

  // Setting Rows
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
    marginBottom: 1,
  },
  settingRowLast: {
    borderBottomLeftRadius: borderRadius.lg,
    borderBottomRightRadius: borderRadius.lg,
    marginBottom: 0,
  },
  settingLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingIconDestructive: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  settingEmoji: {
    fontSize: 18,
  },
  settingInfo: {
    flex: 1,
    gap: 2,
  },
  settingArrow: {
    fontSize: 24,
    color: colors.text.tertiary,
  },
  settingArrowDestructive: {
    color: '#EF4444',
  },

  // Version
  versionSection: {
    alignItems: 'center',
    paddingVertical: spacing[6],
    gap: spacing[2],
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default F11_SettingsScreen;
