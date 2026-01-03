/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A7 - Privé Orientation Screen (After Red Carpet)
 *
 * Purpose: Educate user about what makes Privé different
 * Shows:
 * - What makes Privé different
 * - How Privé Rewards Work (Privé Coin ≠ Cashback)
 * - What You Can Unlock (Gift cards, Experiences, Access)
 * - How Brands See You (Trust & influence explanation)
 */

import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  PriveBadge,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface OrientationSection {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  points: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const orientationSections: OrientationSection[] = [
  {
    id: 'different',
    icon: '✦',
    title: 'What Makes Privé Different',
    subtitle: 'This isn\'t a loyalty program — it\'s recognition.',
    points: [
      {
        icon: '◎',
        title: 'Invite-Only Access',
        description: 'You earned this through genuine impact, not points.',
      },
      {
        icon: '◇',
        title: 'Premium Partners',
        description: 'Curated brands that value quality over quantity.',
      },
      {
        icon: '★',
        title: 'Authentic Rewards',
        description: 'No tricks, no gimmicks — real value for real influence.',
      },
    ],
  },
  {
    id: 'coins',
    icon: '◈',
    title: 'Your Coin Types',
    subtitle: 'Three ways to earn and spend at checkout.',
    points: [
      {
        icon: '◈',
        title: 'ReZ Coins',
        description: 'Universal coins accepted everywhere. Earn on every purchase.',
      },
      {
        icon: '◇',
        title: 'Privé Coins',
        description: 'Premium coins with higher value. Exclusive to Privé members.',
      },
      {
        icon: '★',
        title: 'Branded Coins',
        description: 'Brand-specific rewards from your favorite partners.',
      },
    ],
  },
  {
    id: 'earn',
    icon: '↑',
    title: 'How to Earn Coins',
    subtitle: 'Shop, share, and watch your balance grow.',
    points: [
      {
        icon: '◎',
        title: 'Make a Purchase',
        description: 'Earn 15-50% back in coins on every transaction.',
      },
      {
        icon: '◇',
        title: 'Share Your Experience',
        description: 'Post on social, submit your link, get bonus cashback.',
      },
      {
        icon: '✦',
        title: 'Complete Campaigns',
        description: 'Accept brand invitations and earn premium rewards.',
      },
    ],
  },
  {
    id: 'pay',
    icon: '◇',
    title: 'Pay with Your Coins',
    subtitle: 'Use any combination at checkout.',
    points: [
      {
        icon: '★',
        title: 'Mix & Match',
        description: 'Combine ReZ, Privé, and Branded coins for any purchase.',
      },
      {
        icon: '✦',
        title: 'Save Real Money',
        description: 'Coins reduce your bill — pay less, keep more.',
      },
      {
        icon: '◈',
        title: 'Earn While You Spend',
        description: 'Even coin payments earn you more coins back.',
      },
    ],
  },
  {
    id: 'brands',
    icon: '★',
    title: 'How Brands See You',
    subtitle: 'Your trust score matters.',
    points: [
      {
        icon: '◎',
        title: 'Influence, Not Followers',
        description: 'Brands value conversion, not vanity metrics.',
      },
      {
        icon: '◇',
        title: 'Quality Signal',
        description: 'Being Privé tells brands you\'re worth investing in.',
      },
      {
        icon: '✦',
        title: 'Direct Invitations',
        description: 'Premium campaigns reach you before the crowd.',
      },
    ],
  },
];

export const A7_PriveOrientationScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const scrollViewRef = useRef<div>(null);

  const handleNext = () => {
    if (currentSection < orientationSections.length - 1) {
      const nextSection = currentSection + 1;
      setCurrentSection(nextSection);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true };
    } else {
      // Navigate to main app
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main' }],
      };
    }
  };

  const handleSkip = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    };
  };

  const section = orientationSections[currentSection];
  const isLastSection = currentSection === orientationSections.length - 1;

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <PriveBadge size="sm" />
        <div onClick={handleSkip}>
          <span variant="bodySmall" color={colors.text.tertiary}>Skip</span>
        </div>
      </div>

      {/* Progress Indicator */}
      <div style={style={{...styles.progressContainer}>
        {orientationSections.map((_, index) => (
          <div
            key={index}
            style={[
              style={{...styles.progressDot,
              index === currentSection && style={{...styles.progressDotActive,
              index < currentSection && style={{...styles.progressDotComplete,
            ]}
          />
        ))}
      </div>

      <div
        ref={scrollViewRef}
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* Section Icon */}
        <div style={style={{...styles.iconContainer}>
          <LinearGradient
            colors={[colors.transparent.gold20, colors.transparent.gold10]}
            style={style={{...styles.iconGradient}
          >
            <span style={style={{...styles.sectionIcon}>{section.icon}</span>
          </LinearGradient>
        </div>

        {/* Section Title */}
        <span variant="h2" color={colors.text.primary} center style={style={{...styles.title}>
          {section.title}
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.subtitle}>
          {section.subtitle}
        </span>

        <Divider variant="gold" spacing={spacing[6]} />

        {/* Points */}
        <div style={style={{...styles.pointsContainer}>
          {section.points.map((point, index) => (
            <div key={index} style={style={{...styles.pointCard}>
              <div style={style={{...styles.pointIcon}>
                <span style={style={{...styles.pointIconText}>{point.icon}</span>
              </div>
              <div style={style={{...styles.pointContent}>
                <span variant="body" color={colors.text.primary}>
                  {point.title}
                </span>
                <span variant="bodySmall" color={colors.text.secondary}>
                  {point.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={handleNext}
          onClick={() => {}}
        >
          <span variant="bodyLarge" color={colors.background.primary}>
            {isLastSection ? 'Enter Privé' : 'Continue'}
          </span>
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[12],
    paddingBottom: spacing[4],
  },

  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing[2],
    paddingBottom: spacing[6],
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.background.tertiary,
  },
  progressDotActive: {
    width: 24,
    backgroundColor: colors.gold.primary,
  },
  progressDotComplete: {
    backgroundColor: colors.gold.muted,
  },

  scrollContent: {
    paddingHorizontal: spacing[5],
    paddingBottom: 120,
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  iconGradient: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.border.goldMuted,
  },
  sectionIcon: {
    fontSize: 36,
    color: colors.gold.primary,
  },

  title: {
    marginBottom: spacing[3],
  },
  subtitle: {
    paddingHorizontal: spacing[4],
    lineHeight: 24,
  },

  pointsContainer: {
    gap: spacing[4],
  },
  pointCard: {
    flexDirection: 'row',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    gap: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  pointIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointIconText: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  pointContent: {
    flex: 1,
    gap: spacing[1],
    justifyContent: 'center',
  },

  bottomSpace: {
    height: spacing[8],
  },

  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
};

export default A7_PriveOrientationScreen;
