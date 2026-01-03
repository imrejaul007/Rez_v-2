/**
 * Privé Public Visibility Control - Web Version
 * Purpose: Give control over prestige
 * Luxury = Control
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveVisibilityControl = () => {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    showPriveBadge: true,
    showCategoryAuthority: true,
    hideRewardsEarned: false,
    anonymousReviews: false,
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleSwitch = ({ value, onChange }) => (
    <div
      style={{
        ...styles.switch,
        backgroundColor: value ? 'rgba(201, 169, 98, 0.3)' : '#3A3A3A',
      }}
      onClick={onChange}
    >
      <div style={{
        ...styles.switchThumb,
        backgroundColor: value ? colors.gold.primary : '#6B7280',
        transform: value ? 'translateX(20px)' : 'translateX(2px)',
      }} />
    </div>
  );

  return (
    <div style={styles.container}>
      <BottomNavManager />

      <div style={styles.scrollView}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.backButton} onClick={() => navigate('/prive/profile')}>
            <span style={styles.backIcon}>←</span>
          </div>
          <h1 style={styles.title}>Visibility</h1>
          <div style={styles.headerSpacer} />
        </div>

        {/* Introduction */}
        <p style={styles.intro}>
          Control what others see about your Privé status.
        </p>

        <div style={styles.divider} />

        {/* Public Settings */}
        <div style={styles.section}>
          <p style={styles.sectionLabel}>PUBLIC PROFILE</p>

          <div style={styles.settingsCard}>
            <div style={styles.settingRow}>
              <div style={styles.settingInfo}>
                <p style={styles.settingTitle}>Show Privé badge publicly</p>
                <p style={styles.settingDesc}>Display badge on your profile and reviews</p>
              </div>
              <ToggleSwitch
                value={settings.showPriveBadge}
                onChange={() => toggleSetting('showPriveBadge')}
              />
            </div>

            <div style={{ ...styles.settingRow, borderTop: '1px solid #2A2A2A' }}>
              <div style={styles.settingInfo}>
                <p style={styles.settingTitle}>Show category authority</p>
                <p style={styles.settingDesc}>Display your top categories to others</p>
              </div>
              <ToggleSwitch
                value={settings.showCategoryAuthority}
                onChange={() => toggleSetting('showCategoryAuthority')}
              />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div style={styles.section}>
          <p style={styles.sectionLabel}>PRIVACY</p>

          <div style={styles.settingsCard}>
            <div style={styles.settingRow}>
              <div style={styles.settingInfo}>
                <p style={styles.settingTitle}>Hide rewards earned</p>
                <p style={styles.settingDesc}>Don't show total rewards on your profile</p>
              </div>
              <ToggleSwitch
                value={settings.hideRewardsEarned}
                onChange={() => toggleSetting('hideRewardsEarned')}
              />
            </div>

            <div style={{ ...styles.settingRow, borderTop: '1px solid #2A2A2A' }}>
              <div style={styles.settingInfo}>
                <p style={styles.settingTitle}>Anonymous reviews mode</p>
                <p style={styles.settingDesc}>Post reviews without showing your name</p>
              </div>
              <ToggleSwitch
                value={settings.anonymousReviews}
                onChange={() => toggleSetting('anonymousReviews')}
              />
            </div>
          </div>
        </div>

        {/* Note */}
        <div style={styles.noteCard}>
          <div style={styles.noteContent}>
            <div style={styles.noteIcon}>
              <span style={{ color: colors.gold.primary }}>✓</span>
            </div>
            <p style={styles.noteText}>
              Luxury means control. These settings let you manage your visibility.
            </p>
          </div>
        </div>

        <div style={{ height: spacing[10] }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0A0A0A',
    paddingBottom: '80px',
  },
  scrollView: {
    padding: `0 ${spacing[5]}px`,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  backIcon: {
    fontSize: '20px',
    color: '#FFFFFF',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#FFFFFF',
    margin: 0,
  },
  headerSpacer: {
    width: '40px',
  },
  intro: {
    fontSize: '16px',
    color: colors.text.secondary,
    marginTop: spacing[4],
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
    margin: `${spacing[6]}px 0`,
  },
  section: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    color: colors.text.tertiary,
    marginBottom: spacing[3],
    fontWeight: '600',
  },
  settingsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing[4],
    border: '1px solid #2A2A2A',
  },
  settingRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  settingInfo: {
    flex: 1,
    marginRight: spacing[3],
  },
  settingTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: colors.text.primary,
    margin: 0,
    marginBottom: spacing[1],
  },
  settingDesc: {
    fontSize: '12px',
    color: colors.text.tertiary,
    margin: 0,
  },
  switch: {
    width: '44px',
    height: '24px',
    borderRadius: '12px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  switchThumb: {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    position: 'absolute',
    top: '2px',
    transition: 'all 0.2s',
  },
  noteCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    border: '1px solid rgba(201, 169, 98, 0.2)',
    marginTop: spacing[6],
  },
  noteContent: {
    display: 'flex',
    alignItems: 'center',
  },
  noteIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '14px',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
    fontSize: '14px',
  },
  noteText: {
    fontSize: '13px',
    color: colors.text.secondary,
    margin: 0,
  },
};

export default PriveVisibilityControl;
