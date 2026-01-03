/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A9 - Red Carpet Welcome Screen (First Time Experience)
 *
 * Cinematic welcome for new Privé members
 * Shows:
 * - Full-screen welcome animation
 * - Privé Identity Card
 * - Influence/tier summary
 * - "What you unlock" section
 *
 * User understands in <10 seconds:
 * "I earn more because I bring more value."
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

const { width: window.innerWidth, height: SCREEN_HEIGHT } = Dimensions.get('window');

type WelcomeStep = 'intro' | 'identity' | 'unlocks' | 'ready';

interface UserIdentity {
  name: string;
  tier: 'entry' | 'elite';
  category: string;
  memberSince: string;
  influenceLevel: string;
  totalScore: number;
}

interface UnlockItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const mockIdentity: UserIdentity = {
  name: 'Rahul Sharma',
  tier: 'entry',
  category: 'Power User',
  memberSince: 'December 2024',
  influenceLevel: 'Rising',
  totalScore: 74.5,
};

const unlockItems: UnlockItem[] = [
  {
    icon: '🎁',
    title: 'Premium Rewards',
    description: 'Up to 50% value on exclusive offers',
    color: '#C9A962',
  },
  {
    icon: '🖤',
    title: 'Privé Coin',
    description: 'Bonus currency only for members',
    color: '#9C27B0',
  },
  {
    icon: '📢',
    title: 'Brand Campaigns',
    description: 'Direct invitations from premium brands',
    color: '#E91E63',
  },
  {
    icon: '✨',
    title: 'Early Access',
    description: 'First look at new partners & offers',
    color: '#2196F3',
  },
];

interface A9_RedCarpetWelcomeScreenProps {
  identity?: UserIdentity;
  onComplete?: () => void;
}

export const A9_RedCarpetWelcomeScreen: React.FC<A9_RedCarpetWelcomeScreenProps> = ({
  identity = mockIdentity,
  onComplete,
}) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<WelcomeStep>('intro');

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const cardSlideAnim = useRef(new Animated.Value(50)).current;
  const unlocksFadeAnim = useRef(new Animated.Value(0)).current;
  const unlocksSlideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Initial intro animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-advance from intro after delay
    const timer = setTimeout(() => {
      if (currentStep === 'intro') {
        handleAdvance();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const animateCardEntry = () => {
    Animated.parallel([
      Animated.spring(cardSlideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateUnlocksEntry = () => {
    unlockItems.forEach((_, index) => {
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(unlocksFadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.spring(unlocksSlideAnim, {
            toValue: 0,
            tension: 50,
            friction: 8,
            useNativeDriver: true,
          }),
        ]).start();
      }, index * 150);
    };
  };

  const handleAdvance = () => {
    const steps: WelcomeStep[] = ['intro', 'identity', 'unlocks', 'ready'];
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      setCurrentStep(nextStep);

      if (nextStep === 'identity') {
        animateCardEntry();
      } else if (nextStep === 'unlocks') {
        animateUnlocksEntry();
      }
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    if (onComplete) {
      onComplete();
    } else {
      navigate('/prive/A7_PriveOrientation');
    }
  };

  const renderIntro = () => (
    <Animated.View
      style={[
        style={{...styles.stepContainer,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <div style={style={{...styles.introContent}>
        {/* Glowing badge */}
        <div style={style={{...styles.glowContainer}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.3)', 'rgba(201, 169, 98, 0.1)', 'transparent']}
            style={style={{...styles.glowGradient}
          />
          <div style={style={{...styles.priveBadgeLarge}>
            <span style={style={{...styles.priveBadgeText}>PRIVÉ</span>
          </div>
        </div>

        <span variant="h1" gold style={style={{...styles.welcomeTitle}>
          Welcome to the Inner Circle
        </span>

        <span variant="bodyLarge" color={colors.text.secondary} center style={style={{...styles.welcomeSubtitle}>
          You've earned access to ReZ Privé
        </span>

        <div style={style={{...styles.tapHint}>
          <span variant="caption" color={colors.text.tertiary}>
            Tap to continue
          </span>
        </div>
      </div>
    </Animated.View>
  );

  const renderIdentityCard = () => (
    <Animated.View
      style={[
        style={{...styles.stepContainer,
        {
          transform: [{ translateY: cardSlideAnim }],
        },
      ]}
    >
      <span variant="label" color={colors.text.tertiary} style={style={{...styles.stepLabel}>
        YOUR PRIVÉ IDENTITY
      </span>

      {/* Identity Card */}
      <div style={style={{...styles.identityCard}>
        <LinearGradient
          colors={['#1A1A1A', '#0F0F0F']}
          style={style={{...styles.cardGradient}
        >
          {/* Card Header */}
          <div style={style={{...styles.cardHeader}>
            <div style={style={{...styles.priveLogo}>
              <span style={style={{...styles.priveLogoText}>PRIVÉ</span>
            </div>
            <div style={[
              style={{...styles.tierBadge,
              identity.tier === 'elite' && style={{...styles.tierBadgeElite,
            ]}>
              <span variant="caption" style={style={{...styles.tierText}>
                {identity.tier === 'elite' ? 'ELITE' : 'MEMBER'}
              </span>
            </div>
          </div>

          {/* Member Info */}
          <div style={style={{...styles.memberInfo}>
            <span variant="h2" color={colors.text.primary}>
              {identity.name}
            </span>
            <span variant="body" color={colors.text.secondary}>
              {identity.category}
            </span>
          </div>

          {/* Score & Stats */}
          <div style={style={{...styles.cardStats}>
            <div style={style={{...styles.cardStat}>
              <span variant="h3" gold>{identity.totalScore.toFixed(0)}</span>
              <span variant="caption" color={colors.text.tertiary}>Score</span>
            </div>
            <div style={style={{...styles.statDivider} />
            <div style={style={{...styles.cardStat}>
              <span variant="body" color={colors.text.primary}>{identity.influenceLevel}</span>
              <span variant="caption" color={colors.text.tertiary}>Influence</span>
            </div>
            <div style={style={{...styles.statDivider} />
            <div style={style={{...styles.cardStat}>
              <span variant="body" color={colors.text.primary}>{identity.memberSince}</span>
              <span variant="caption" color={colors.text.tertiary}>Since</span>
            </div>
          </div>

          {/* Gold Line */}
          <div style={style={{...styles.goldLine} />
        </LinearGradient>
      </div>

      <span variant="body" color={colors.text.secondary} center style={style={{...styles.cardCaption}>
        Your status. Your access. Your rewards.
      </span>

      <div style={style={{...styles.continueButton} onClick={handleAdvance}>
        <span variant="bodyLarge" color="#0A0A0A">Continue</span>
      </div>
    </Animated.View>
  );

  const renderUnlocks = () => (
    <div style={style={{...styles.stepContainer}>
      <span variant="label" color={colors.text.tertiary} style={style={{...styles.stepLabel}>
        WHAT YOU UNLOCK
      </span>

      <span variant="h2" color={colors.text.primary} center style={style={{...styles.unlocksTitle}>
        As a Privé Member
      </span>

      <div style={style={{...styles.unlocksGrid}>
        {unlockItems.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              style={{...styles.unlockCard,
              {
                opacity: unlocksFadeAnim,
                transform: [{ translateY: unlocksSlideAnim }],
              },
            ]}
          >
            <div style={[style={{...styles.unlockIcon, { backgroundColor: `${item.color}20` }]}>
              <span style={style={{...styles.unlockEmoji}>{item.icon}</span>
            </div>
            <span variant="body" color={colors.text.primary} style={style={{...styles.unlockTitle}>
              {item.title}
            </span>
            <span variant="caption" color={colors.text.secondary} center>
              {item.description}
            </span>
          </Animated.View>
        ))}
      </div>

      <div style={style={{...styles.continueButton} onClick={handleAdvance}>
        <span variant="bodyLarge" color="#0A0A0A">Continue</span>
      </div>
    </div>
  );

  const renderReady = () => (
    <div style={style={{...styles.stepContainer}>
      <div style={style={{...styles.readyContent}>
        <div style={style={{...styles.readyIcon}>
          <span style={style={{...styles.readyCheckmark}>✓</span>
        </div>

        <span variant="h1" gold style={style={{...styles.readyTitle}>
          You're Ready
        </span>

        <span variant="bodyLarge" color={colors.text.secondary} center style={style={{...styles.readySubtitle}>
          Remember: You earn more because you bring more value.
        </span>

        <div style={style={{...styles.valueCard}>
          <span variant="body" color={colors.text.primary} center>
            "This is not a discount app. This is status + access + higher rewards."
          </span>
        </div>
      </div>

      <div style={style={{...styles.enterButton} onClick={handleComplete}>
        <LinearGradient
          colors={[colors.gold.primary, colors.gold.dark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={style={{...styles.enterButtonGradient}
        >
          <span variant="h3" color="#0A0A0A">Enter Privé</span>
        </LinearGradient>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return renderIntro();
      case 'identity':
        return renderIdentityCard();
      case 'unlocks':
        return renderUnlocks();
      case 'ready':
        return renderReady();
      default:
        return renderIntro();
    }
  };

  return (
    <div style={style={{...styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background gradient */}
      <LinearGradient
        colors={['#0A0A0A', '#111111', '#0A0A0A']}
        style={style={{...styles.backgroundGradient}
      />

      {/* Decorative elements */}
      <div style={style={{...styles.decorativeTop}>
        <LinearGradient
          colors={['rgba(201, 169, 98, 0.15)', 'transparent']}
          style={style={{...styles.decorativeGradient}
        />
      </div>

      <div style={style={{...styles.safeArea}>
        {/* Progress indicator */}
        {currentStep !== 'intro' && (
          <div style={style={{...styles.progressContainer}>
            {['identity', 'unlocks', 'ready'].map((step, index) => (
              <div
                key={step}
                style={[
                  style={{...styles.progressDot,
                  currentStep === step && style={{...styles.progressDotActive,
                  ['identity', 'unlocks', 'ready'].indexOf(currentStep) > index && style={{...styles.progressDotComplete,
                ]}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div
          activeOpacity={currentStep === 'intro' ? 0.9 : 1}
          onClick={currentStep === 'intro' ? handleAdvance : undefined}
          style={style={{...styles.contentContainer}
        >
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  decorativeTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.4,
    overflow: 'hidden',
  },
  decorativeGradient: {
    flex: 1,
    borderBottomLeftRadius: window.innerWidth,
    borderBottomRightRadius: window.innerWidth,
  },
  safeArea: {
    flex: 1,
  },

  // Progress
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing[2],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2A2A2A',
  },
  progressDotActive: {
    width: 24,
    backgroundColor: colors.gold.primary,
  },
  progressDotComplete: {
    backgroundColor: colors.gold.muted,
  },

  contentContainer: {
    flex: 1,
  },
  stepContainer: {
    flex: 1,
    paddingHorizontal: spacing[5],
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    letterSpacing: 2,
    marginBottom: spacing[4],
  },

  // Intro
  introContent: {
    alignItems: 'center',
  },
  glowContainer: {
    marginBottom: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowGradient: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  priveBadgeLarge: {
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[4],
    borderWidth: 2,
    borderColor: colors.gold.primary,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  priveBadgeText: {
    fontSize: 32,
    fontWeight: '300',
    letterSpacing: 8,
    color: colors.gold.primary,
  },
  welcomeTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: spacing[3],
  },
  welcomeSubtitle: {
    maxWidth: 280,
    lineHeight: 26,
  },
  tapHint: {
    marginTop: spacing[12],
    opacity: 0.6,
  },

  // Identity Card
  identityCard: {
    width: '100%',
    maxWidth: 340,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gold.primary,
    marginBottom: spacing[4],
  },
  cardGradient: {
    padding: spacing[5],
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[6],
  },
  priveLogo: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderWidth: 1,
    borderColor: colors.gold.primary,
    borderRadius: borderRadius.sm,
  },
  priveLogoText: {
    fontSize: 14,
    fontWeight: '300',
    letterSpacing: 4,
    color: colors.gold.primary,
  },
  tierBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  tierBadgeElite: {
    backgroundColor: 'rgba(156, 39, 176, 0.2)',
  },
  tierText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    color: colors.gold.primary,
  },
  memberInfo: {
    marginBottom: spacing[5],
  },
  cardStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  cardStat: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2A2A2A',
  },
  goldLine: {
    height: 2,
    backgroundColor: colors.gold.primary,
    marginTop: spacing[2],
    borderRadius: 1,
  },
  cardCaption: {
    maxWidth: 280,
    lineHeight: 24,
  },

  // Unlocks
  unlocksTitle: {
    marginBottom: spacing[6],
  },
  unlocksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing[3],
    marginBottom: spacing[6],
  },
  unlockCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2 - 8,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  unlockIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  unlockEmoji: {
    fontSize: 24,
  },
  unlockTitle: {
    marginBottom: spacing[1],
    textAlign: 'center',
  },

  // Ready
  readyContent: {
    alignItems: 'center',
  },
  readyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderWidth: 2,
    borderColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  readyCheckmark: {
    fontSize: 36,
    color: '#4CAF50',
  },
  readyTitle: {
    fontSize: 32,
    marginBottom: spacing[3],
  },
  readySubtitle: {
    maxWidth: 300,
    lineHeight: 26,
    marginBottom: spacing[6],
  },
  valueCard: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    marginHorizontal: spacing[4],
  },

  // Buttons
  continueButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[8],
    borderRadius: borderRadius.lg,
    marginTop: spacing[4],
  },
  enterButton: {
    position: 'absolute',
    bottom: spacing[8],
    left: spacing[5],
    right: spacing[5],
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  enterButtonGradient: {
    paddingVertical: spacing[5],
    alignItems: 'center',
  },
};

export default A9_RedCarpetWelcomeScreen;
