/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A2 - Privé Invitation Screen
 * Shows invitation details with access type (Permanent, Time-bound, Brand-specific, Trial)
 * "You've been invited" - moment of pride
 */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type AccessType = 'permanent' | 'time_bound' | 'brand_specific' | 'trial';

interface InvitationData {
  accessType: AccessType;
  invitedBy: 'system' | 'brand' | 'referral';
  brandName?: string;
  duration?: number; // days for time_bound/trial
  accessCategory: string;
  privileges: { icon: string; title: string; description: string }[];
  qualifyingReasons: string[];
  expiresAt?: string;
}

const defaultInvitation: InvitationData = {
  accessType: 'permanent',
  invitedBy: 'system',
  accessCategory: 'Power User',
  privileges: [
    { icon: '↑', title: 'Higher Rewards', description: 'Up to 50% more coins on every transaction' },
    { icon: '✦', title: 'Private Offers', description: 'Exclusive deals from premium brands' },
    { icon: '✉', title: 'Brand Invitations', description: 'Direct campaigns from top brands' },
    { icon: '◈', title: 'Privé Coins', description: 'Earn special coins with premium value' },
  ],
  qualifyingReasons: [
    'Consistent engagement over 6 months',
    'High transaction frequency',
    'Strong trust score',
    'Quality content contributions',
  ],
};

const getAccessTypeInfo = (type: AccessType, duration?: number, brandName?: string) => {
  switch (type) {
    case 'permanent':
      return {
        label: 'PERMANENT ACCESS',
        color: '#4CAF50',
        bg: 'rgba(76, 175, 80, 0.15)',
        description: 'You\'ve earned lifetime Privé access based on your consistent value.',
        icon: '∞',
      };
    case 'time_bound':
      return {
        label: `${duration}-DAY ACCESS`,
        color: '#FFC107',
        bg: 'rgba(255, 193, 7, 0.15)',
        description: `Your access is valid for ${duration} days. Maintain activity to convert to permanent.`,
        icon: '⏱',
      };
    case 'brand_specific':
      return {
        label: 'BRAND INVITATION',
        color: '#2196F3',
        bg: 'rgba(33, 150, 243, 0.15)',
        description: `${brandName || 'A premium brand'} has invited you to Privé.`,
        icon: '🎯',
      };
    case 'trial':
      return {
        label: 'TRIAL ACCESS',
        color: '#9C27B0',
        bg: 'rgba(156, 39, 176, 0.15)',
        description: `You have ${duration || 14} days to explore Privé. Show us your value!`,
        icon: '✨',
      };
  }
};

interface A2_InvitationScreenProps {
  invitation?: InvitationData;
  onEnterPrive?: () => void;
}

export const A2_InvitationScreen: React.FC<A2_InvitationScreenProps> = ({
  invitation = defaultInvitation,
  onEnterPrive,
}) => {
  const navigate = useNavigate();
  const accessInfo = getAccessTypeInfo(invitation.accessType, invitation.duration, invitation.brandName);

  const handleEnterPrive = () => {
    if (onEnterPrive) {
      onEnterPrive();
    } else {
      navigate('/prive/A1_Eligibility');
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Glow Background */}
        <div style={style={{...styles.glowContainer}>
          <div style={style={{...styles.glowOuter} />
          <div style={style={{...styles.glowMiddle} />
          <div style={style={{...styles.glowInner} />
        </div>

        {/* Hero Section */}
        <div style={style={{...styles.heroSection}>
          {/* Privé Badge */}
          <div style={style={{...styles.priveBadge}>
            <span style={style={{...styles.priveIcon}>◈</span>
          </div>

          {/* Access Type Badge */}
          <div style={[style={{...styles.accessTypeBadge, { backgroundColor: accessInfo.bg }]}>
            <span style={[style={{...styles.accessTypeIcon, { color: accessInfo.color }]}>{accessInfo.icon}</span>
            <span variant="caption" style={{ color: accessInfo.color }}>{accessInfo.label}</span>
          </div>

          {/* Headline */}
          <span variant="h1" color={colors.text.primary} style={style={{...styles.headline}>
            You've Been Invited
          </span>
          <span variant="h3" gold style={style={{...styles.subheadline}>
            to ReZ Privé
          </span>

          {/* Access Description */}
          <span variant="body" color={colors.text.secondary} style={style={{...styles.accessDescription}>
            {accessInfo.description}
          </span>

          {/* Qualifying Category */}
          <div style={style={{...styles.categoryBadge}>
            <span variant="caption" color={colors.text.tertiary}>Qualified as </span>
            <span variant="caption" gold>{invitation.accessCategory}</span>
          </div>
        </div>

        {/* Why You're Invited */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHY YOU'RE INVITED
          </span>
          <div style={style={{...styles.reasonsCard}>
            {invitation.qualifyingReasons.map((reason, index) => (
              <div key={index} style={style={{...styles.reasonItem}>
                <div style={style={{...styles.reasonCheck}>
                  <span variant="caption" color="#4CAF50">✓</span>
                </div>
                <span variant="body" color={colors.text.secondary}>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Privileges */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            YOUR PRIVÉ PRIVILEGES
          </span>
          <div style={style={{...styles.privilegesGrid}>
            {invitation.privileges.map((privilege, index) => (
              <div key={index} style={style={{...styles.privilegeCard}>
                <div style={style={{...styles.privilegeIcon}>
                  <span style={style={{...styles.privilegeEmoji}>{privilege.icon}</span>
                </div>
                <span variant="body" color={colors.text.primary}>{privilege.title}</span>
                <span variant="caption" color={colors.text.tertiary}>{privilege.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Access Types Explained */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ACCESS TYPES
          </span>
          <div style={style={{...styles.accessTypesCard}>
            {[
              { type: 'permanent' as AccessType, label: 'Permanent', desc: 'Earned via sustained signals', icon: '∞' },
              { type: 'time_bound' as AccessType, label: 'Time-bound', desc: 'Campaign/event access', icon: '⏱' },
              { type: 'brand_specific' as AccessType, label: 'Brand-specific', desc: 'Limited to certain brands', icon: '🎯' },
              { type: 'trial' as AccessType, label: 'Trial', desc: 'Short evaluation window', icon: '✨' },
            ].map((item, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.accessTypeItem,
                  invitation.accessType === item.type && style={{...styles.accessTypeItemActive,
                  index < 3 && style={{...styles.accessTypeItemBorder,
                ]}
              >
                <div style={[
                  style={{...styles.accessTypeItemIcon,
                  invitation.accessType === item.type && style={{...styles.accessTypeItemIconActive,
                ]}>
                  <span style={style={{...styles.accessTypeItemEmoji}>{item.icon}</span>
                </div>
                <div style={style={{...styles.accessTypeItemInfo}>
                  <span variant="body" color={invitation.accessType === item.type ? colors.gold.primary : colors.text.primary}>
                    {item.label}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>{item.desc}</span>
                </div>
                {invitation.accessType === item.type && (
                  <div style={style={{...styles.yourAccessBadge}>
                    <span variant="caption" gold>You</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Note */}
        <div style={style={{...styles.philosophyCard}>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.philosophyQuote}>
            "Privé is reserved for users who create value for the ecosystem, not just consume it."
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div style={style={{...styles.ctaButton} onClick={handleEnterPrive}>
          <span variant="bodyLarge" color="#0A0A0A">Enter Privé</span>
        </div>
        <span variant="caption" color={colors.text.tertiary} style={style={{...styles.ctaSubtext}>
          View your full eligibility breakdown
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 140,
  },

  // Glow Effect
  glowContainer: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowOuter: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
    position: 'absolute',
  },
  glowMiddle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
    position: 'absolute',
  },
  glowInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(201, 169, 98, 0.12)',
    position: 'absolute',
  },

  // Hero Section
  heroSection: {
    alignItems: 'center',
    paddingTop: spacing[8],
    paddingHorizontal: spacing[5],
    marginBottom: spacing[6],
  },
  priveBadge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(201, 169, 98, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[5],
    zIndex: 1,
  },
  priveIcon: {
    fontSize: 40,
    color: colors.gold.primary,
  },
  accessTypeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    marginBottom: spacing[4],
  },
  accessTypeIcon: {
    fontSize: 14,
  },
  headline: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: spacing[1],
  },
  subheadline: {
    marginBottom: spacing[4],
  },
  accessDescription: {
    textAlign: 'center',
    marginBottom: spacing[4],
    paddingHorizontal: spacing[4],
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
  },

  // Section
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },

  // Reasons
  reasonsCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  reasonCheck: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Privileges
  privilegesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  privilegeCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[2],
  },
  privilegeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  privilegeEmoji: {
    fontSize: 18,
    color: colors.gold.primary,
  },

  // Access Types
  accessTypesCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  accessTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  accessTypeItemActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  accessTypeItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  accessTypeItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessTypeItemIconActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
  },
  accessTypeItemEmoji: {
    fontSize: 18,
  },
  accessTypeItemInfo: {
    flex: 1,
    gap: spacing[1],
  },
  yourAccessBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
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
};

export default A2_InvitationScreen;
