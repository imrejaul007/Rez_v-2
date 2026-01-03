/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A4 - Privé Onboarding Flow (4 Slides)
 * Purpose: Private briefing, not typical onboarding
 * Feel: Exclusive, confident, informative
 */

import React, { useState, useRef } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  PriveBadge,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface OnboardingSlide {
  headline: string;
  text: string;
  icon?: string;
}

interface A4_OnboardingScreenProps {
  onComplete?: () => void;
  onBack?: () => void;
}

export const A4_OnboardingScreen: React.FC<A4_OnboardingScreenProps> = ({
  onComplete,
  onBack,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<div>(null);

  const slides: OnboardingSlide[] = [
    {
      headline: 'Welcome to ReZ Privé',
      text: 'An invite-only rewards circle for people who create real impact — not just spend.',
      icon: '\u2605',
    },
    {
      headline: 'Earn up to 50% in Privé Rewards',
      text: 'Rewards are based on your engagement, influence, and real-world conversions.',
      icon: '\u2191',
    },
    {
      headline: 'Not Everyone Sees What You See',
      text: 'Privé members unlock private offers, early access, and brand invitations invisible to others.',
      icon: '\u2302',
    },
    {
      headline: 'Privé Is Earned Daily',
      text: 'Access depends on quality engagement and genuine activity. Privé status can be upgraded or withdrawn.',
      icon: '\u2713',
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / window.innerWidth);
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentSlide + 1) * window.innerWidth,
        animated: true,
      };
    } else {
      onComplete?.();
    }
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <ScreenContainer scrollable={false} padded={false}>
      <div style={style={{...styles.container}>
        {/* Badge Header */}
        <div style={style={{...styles.header}>
          <PriveBadge size="md" />
        </div>

        {/* Slides */}
        <div
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={style={{...styles.scrollView}
        >
          {slides.map((slide, index) => (
            <div key={index} style={style={{...styles.slide}>
              {/* Icon */}
              <div style={style={{...styles.iconContainer}>
                <span variant="h1" gold>
                  {slide.icon}
                </span>
              </div>

              {/* Content */}
              <span variant="h2" color={colors.text.primary} center style={style={{...styles.headline}>
                {slide.headline}
              </span>
              <span variant="bodyLarge" color={colors.text.secondary} center style={style={{...styles.text}>
                {slide.text}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div style={style={{...styles.dotsContainer}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={[
                style={{...styles.dot,
                currentSlide === index && style={{...styles.dotActive,
              ]}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title={isLastSlide ? 'Enter Privé Dashboard' : 'Continue'}
            onClick={goToNextSlide}
            variant="primary"
          />
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: spacing[12],
    paddingBottom: spacing[6],
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: window.innerWidth,
    paddingHorizontal: spacing[6],
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[8],
  },
  headline: {
    marginBottom: spacing[4],
    paddingHorizontal: spacing[4],
  },
  text: {
    paddingHorizontal: spacing[2],
    lineHeight: 26,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing[6],
    gap: spacing[2],
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.background.tertiary,
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.gold.primary,
  },
  ctaContainer: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[8],
  },
};

export default A4_OnboardingScreen;
