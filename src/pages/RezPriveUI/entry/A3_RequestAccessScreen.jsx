/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A3 - Privé Request Access Screen
 * For users who want to join but aren't qualified yet
 * Allows them to add signals (social profiles, spending info)
 * "Privé is earned, not downloaded"
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface SocialProfile {
  platform: string;
  icon: string;
  handle: string;
  connected: boolean;
  followers?: number;
}

interface AccessPath {
  id: string;
  name: string;
  icon: string;
  description: string;
  requirements: string[];
  yourStatus: 'not_started' | 'in_progress' | 'close' | 'qualified';
  progress: number;
}

const accessPaths: AccessPath[] = [
  {
    id: 'power_user',
    name: 'Power User',
    icon: '⚡',
    description: 'Consistent ReZ engagement',
    requirements: ['50+ transactions', 'Regular wallet usage', '3+ months active'],
    yourStatus: 'in_progress',
    progress: 45,
  },
  {
    id: 'creator',
    name: 'Creator / Influencer',
    icon: '✨',
    description: '1,000+ followers with engagement',
    requirements: ['1,000+ followers', 'Clean profile', 'Category relevance'],
    yourStatus: 'close',
    progress: 80,
  },
  {
    id: 'premium_consumer',
    name: 'Premium Consumer',
    icon: '💎',
    description: 'High-spending user',
    requirements: ['High ticket size', 'Premium categories', 'Low disputes'],
    yourStatus: 'not_started',
    progress: 15,
  },
  {
    id: 'category_authority',
    name: 'Category Authority',
    icon: '🏆',
    description: 'Recognized expert in a niche',
    requirements: ['Niche consistency', 'Peer recognition', 'Quality reviews'],
    yourStatus: 'not_started',
    progress: 10,
  },
  {
    id: 'brand_invited',
    name: 'Brand Invited',
    icon: '🎯',
    description: 'Invited by a partner brand',
    requirements: ['Brand-fit', 'Campaign relevance', 'Performance'],
    yourStatus: 'not_started',
    progress: 0,
  },
  {
    id: 'special_access',
    name: 'Special Access',
    icon: '🔑',
    description: 'Founders, investors, leaders',
    requirements: ['Network value', 'Strategic partnerships', 'Industry influence'],
    yourStatus: 'not_started',
    progress: 0,
  },
];

export const A3_RequestAccessScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isOnWaitlist, setIsOnWaitlist] = useState(false);
  const [socialProfiles, setSocialProfiles] = useState<SocialProfile[]>([
    { platform: 'Instagram', icon: '📸', handle: '', connected: false },
    { platform: 'YouTube', icon: '▶️', handle: '', connected: false },
    { platform: 'X (Twitter)', icon: '𝕏', handle: '', connected: false },
    { platform: 'LinkedIn', icon: '💼', handle: '', connected: false },
  ]);
  const [selectedPath, setSelectedPath] = useState<string | null>('creator');
  const [monthlySpend, setMonthlySpend] = useState('');

  const handleConnectSocial = (index: number) => {
    const updated = [...socialProfiles];
    updated[index].connected = !updated[index].connected;
    if (updated[index].connected) {
      updated[index].followers = Math.floor(Math.random() * 5000) + 500;
    }
    setSocialProfiles(updated);
  };

  const handleJoinWaitlist = () => {
    setIsOnWaitlist(true);
  };

  const getStatusColor = (status: AccessPath['yourStatus']) => {
    switch (status) {
      case 'qualified': return '#4CAF50';
      case 'close': return colors.gold.primary;
      case 'in_progress': return '#FFC107';
      default: return colors.text.tertiary;
    }
  };

  const getStatusLabel = (status: AccessPath['yourStatus']) => {
    switch (status) {
      case 'qualified': return 'Qualified!';
      case 'close': return 'Almost there';
      case 'in_progress': return 'In progress';
      default: return 'Not started';
    }
  };

  if (isOnWaitlist) {
    return (
      <div style={style={{...styles.container}>
        <div style={style={{...styles.successContainer}>
          <div style={style={{...styles.successIcon}>
            <span style={style={{...styles.successEmoji}>✓</span>
          </div>
          <span variant="h2" color={colors.text.primary} style={style={{...styles.successTitle}>
            You're on the Watchlist
          </span>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.successDescription}>
            We're tracking your signals. Keep engaging with ReZ and you'll be notified when you qualify for Privé.
          </span>

          <div style={style={{...styles.successCard}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.successCardLabel}>
              YOUR CLOSEST PATH
            </span>
            <div style={style={{...styles.successPathItem}>
              <div style={style={{...styles.successPathIcon}>
                <span style={style={{...styles.successPathEmoji}>✨</span>
              </div>
              <div style={style={{...styles.successPathInfo}>
                <span variant="body" color={colors.text.primary}>Creator / Influencer</span>
                <span variant="caption" color={colors.gold.primary}>80% complete</span>
              </div>
            </div>
          </div>

          <div style={style={{...styles.tipsCard}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.tipsLabel}>
              TIPS TO QUALIFY FASTER
            </span>
            <div style={style={{...styles.tipItem}>
              <span variant="caption" gold>•</span>
              <span variant="caption" color={colors.text.secondary}>Connect your social profiles</span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span variant="caption" gold>•</span>
              <span variant="caption" color={colors.text.secondary}>Make more transactions on ReZ</span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span variant="caption" gold>•</span>
              <span variant="caption" color={colors.text.secondary}>Share reviews and content</span>
            </div>
          </div>

          <div
            style={style={{...styles.backButton}
            onClick={() => navigate(-1)}
          >
            <span variant="body" gold>Back to ReZ</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Request Access</span>
        <div style={style={{...styles.placeholder} />
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Hero */}
        <div style={style={{...styles.heroSection}>
          <span variant="h2" color={colors.text.primary} style={style={{...styles.heroTitle}>
            Privé is Earned
          </span>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.heroSubtitle}>
            We review members based on signals: engagement, spending power, influence, and trust.
          </span>
        </div>

        {/* Access Paths */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            6 WAYS TO GET PRIVÉ ACCESS
          </span>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.sectionSubtext}>
            Tap to select your target path
          </span>

          <div style={style={{...styles.pathsContainer}>
            {accessPaths.map((path) => (
              <div
                key={path.id}
                style={[
                  style={{...styles.pathCard,
                  selectedPath === path.id && style={{...styles.pathCardSelected,
                ]}
                onClick={() => setSelectedPath(path.id)}
              >
                <div style={style={{...styles.pathHeader}>
                  <div style={[
                    style={{...styles.pathIcon,
                    selectedPath === path.id && style={{...styles.pathIconSelected,
                  ]}>
                    <span style={style={{...styles.pathEmoji}>{path.icon}</span>
                  </div>
                  <div style={[
                    style={{...styles.pathStatus,
                    { backgroundColor: getStatusColor(path.yourStatus) + '20' }
                  ]}>
                    <span variant="caption" style={{ color: getStatusColor(path.yourStatus) }}>
                      {getStatusLabel(path.yourStatus)}
                    </span>
                  </div>
                </div>
                <span variant="body" color={colors.text.primary}>{path.name}</span>
                <span variant="caption" color={colors.text.tertiary}>{path.description}</span>

                {/* Progress Bar */}
                <div style={style={{...styles.pathProgress}>
                  <div style={style={{...styles.pathProgressBg}>
                    <div
                      style={[
                        style={{...styles.pathProgressFill,
                        {
                          width: `${path.progress}%`,
                          backgroundColor: getStatusColor(path.yourStatus),
                        },
                      ]}
                    />
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>{path.progress}%</span>
                </div>

                {selectedPath === path.id && (
                  <div style={style={{...styles.pathRequirements}>
                    {path.requirements.map((req, idx) => (
                      <div key={idx} style={style={{...styles.requirementItem}>
                        <span variant="caption" color={colors.text.tertiary}>•</span>
                        <span variant="caption" color={colors.text.secondary}>{req}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add Your Signals */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ADD YOUR SIGNALS
          </span>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.sectionSubtext}>
            Help us evaluate your eligibility faster
          </span>

          {/* Social Profiles */}
          <div style={style={{...styles.signalsCard}>
            <span variant="body" color={colors.text.primary} style={style={{...styles.signalsCardTitle}>
              Social Profiles
            </span>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.signalsCardSubtitle}>
              Connect accounts with 1,000+ followers
            </span>

            {socialProfiles.map((profile, index) => (
              <div key={index} style={style={{...styles.socialItem}>
                <div style={style={{...styles.socialIcon}>
                  <span style={style={{...styles.socialEmoji}>{profile.icon}</span>
                </div>
                <div style={style={{...styles.socialInfo}>
                  <span variant="body" color={colors.text.primary}>{profile.platform}</span>
                  {profile.connected && profile.followers && (
                    <span variant="caption" color="#4CAF50">
                      {profile.followers.toLocaleString()} followers
                    </span>
                  )}
                </div>
                <div
                  style={[
                    style={{...styles.connectBtn,
                    profile.connected && style={{...styles.connectedBtn,
                  ]}
                  onClick={() => handleConnectSocial(index)}
                >
                  <Text
                    variant="caption"
                    color={profile.connected ? '#4CAF50' : colors.gold.primary}
                  >
                    {profile.connected ? '✓ Connected' : 'Connect'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Spending Info */}
          <div style={style={{...styles.signalsCard}>
            <span variant="body" color={colors.text.primary} style={style={{...styles.signalsCardTitle}>
              Spending Profile
            </span>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.signalsCardSubtitle}>
              Optional: helps with Premium Consumer path
            </span>

            <div style={style={{...styles.inputContainer}>
              <span variant="caption" color={colors.text.tertiary}>Monthly spend (approx)</span>
              <div style={style={{...styles.inputWrapper}>
                <span variant="body" color={colors.text.tertiary}>₹</span>
                <TextInput
                  style={style={{...styles.input}
                  value={monthlySpend}
                  onChangeText={setMonthlySpend}
                  placeholder="e.g., 50000"
                  placeholderTextColor={colors.text.tertiary}
                  keyboardType="numeric"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Who Won't Get Access */}
        <div style={style={{...styles.warningCard}>
          <div style={style={{...styles.warningIcon}>
            <span style={style={{...styles.warningEmoji}>🚫</span>
          </div>
          <div style={style={{...styles.warningInfo}>
            <span variant="body" color={colors.text.primary}>Who Won't Get Access</span>
            <span variant="caption" color={colors.text.tertiary}>
              Deal hunters, cashback abusers, fake followers, users with disputes or fraud history
            </span>
          </div>
        </div>

        {/* Philosophy */}
        <div style={style={{...styles.philosophyCard}>
          <span variant="caption" color={colors.gold.primary} style={style={{...styles.philosophyQuote}>
            "Privé is reserved for users who create value for the ecosystem, not just consume it."
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div style={style={{...styles.ctaButton} onClick={handleJoinWaitlist}>
          <span variant="bodyLarge" color="#0A0A0A">Join Waitlist</span>
        </div>
        <span variant="caption" color={colors.text.tertiary} style={style={{...styles.ctaSubtext}>
          We'll notify you when you qualify
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 140,
  },

  // Hero
  heroSection: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[5],
  },
  heroTitle: {
    marginBottom: spacing[2],
  },
  heroSubtitle: {
    lineHeight: 22,
  },

  // Section
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[1],
  },
  sectionSubtext: {
    marginBottom: spacing[4],
  },

  // Paths
  pathsContainer: {
    gap: spacing[3],
  },
  pathCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[2],
  },
  pathCardSelected: {
    borderColor: 'rgba(201, 169, 98, 0.4)',
    backgroundColor: 'rgba(201, 169, 98, 0.03)',
  },
  pathHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pathIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pathIconSelected: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
  },
  pathEmoji: {
    fontSize: 20,
  },
  pathStatus: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  pathProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginTop: spacing[1],
  },
  pathProgressBg: {
    flex: 1,
    height: 4,
    backgroundColor: '#2A2A2A',
    borderRadius: 2,
    overflow: 'hidden',
  },
  pathProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  pathRequirements: {
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    gap: spacing[2],
  },
  requirementItem: {
    flexDirection: 'row',
    gap: spacing[2],
  },

  // Signals
  signalsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: spacing[3],
  },
  signalsCardTitle: {
    marginBottom: spacing[1],
  },
  signalsCardSubtitle: {
    marginBottom: spacing[4],
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
    gap: spacing[3],
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialEmoji: {
    fontSize: 18,
  },
  socialInfo: {
    flex: 1,
    gap: spacing[1],
  },
  connectBtn: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },
  connectedBtn: {
    borderColor: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
  },
  inputContainer: {
    gap: spacing[2],
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242424',
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    gap: spacing[2],
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 16,
  },

  // Warning
  warningCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    padding: spacing[4],
    backgroundColor: 'rgba(244, 67, 54, 0.05)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(244, 67, 54, 0.2)',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  warningIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(244, 67, 54, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningEmoji: {
    fontSize: 20,
  },
  warningInfo: {
    flex: 1,
    gap: spacing[1],
  },

  // Philosophy
  philosophyCard: {
    marginHorizontal: spacing[5],
    padding: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.1)',
  },
  philosophyQuote: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  bottomSpace: {
    height: spacing[8],
  },

  // CTA
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    paddingBottom: spacing[6],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    alignItems: 'center',
  },
  ctaButton: {
    width: '100%',
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  ctaSubtext: {
    marginTop: spacing[2],
  },

  // Success State
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[5],
  },
  successEmoji: {
    fontSize: 36,
    color: '#4CAF50',
  },
  successTitle: {
    marginBottom: spacing[3],
    textAlign: 'center',
  },
  successDescription: {
    textAlign: 'center',
    marginBottom: spacing[6],
    paddingHorizontal: spacing[4],
  },
  successCard: {
    width: '100%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: spacing[4],
  },
  successCardLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  successPathItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  successPathIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successPathEmoji: {
    fontSize: 22,
  },
  successPathInfo: {
    gap: spacing[1],
  },
  tipsCard: {
    width: '100%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: spacing[6],
  },
  tipsLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  tipItem: {
    flexDirection: 'row',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  backButton: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
  },
};

export default A3_RequestAccessScreen;
