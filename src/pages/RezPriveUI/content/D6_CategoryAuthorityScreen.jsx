/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D6 - Privé Category Authority Screen
 * Purpose: Show where the user is strongest
 * Drives: Ego + Focus
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  ProgressBar,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface CategoryAuthority {
  name: string;
  influenceScore: number; // 0-100
  rewardsEarned: string;
  isTop: boolean;
}

interface D6_CategoryAuthorityScreenProps {
  categories?: CategoryAuthority[];
  onBack?: () => void;
}

export const D6_CategoryAuthorityScreen: React.FC<D6_CategoryAuthorityScreenProps> = ({
  categories = [
    { name: 'Dining', influenceScore: 92, rewardsEarned: '\u20B94,200', isTop: true },
    { name: 'Luxury', influenceScore: 78, rewardsEarned: '\u20B92,800', isTop: false },
    { name: 'Travel', influenceScore: 65, rewardsEarned: '\u20B91,450', isTop: false },
    { name: 'Fashion', influenceScore: 45, rewardsEarned: '\u20B9680', isTop: false },
  ],
  onBack,
}) => {
  const topCategory = categories.find((c) => c.isTop);

  return (
    <ScreenContainer>
      <PriveHeader title="Category Authority" showBack onBack={onBack} />

      {/* Top Voice Highlight */}
      {topCategory && (
        <Card variant="goldGlow" style={style={{...styles.topCard}>
          <div style={style={{...styles.topBadge}>
            <span variant="h3" gold>
              {'\u2605'}
            </span>
          </div>
          <span variant="h3" color={colors.text.primary} center>
            You are a top voice in
          </span>
          <span variant="h2" gold center style={style={{...styles.topCategory}>
            {topCategory.name}
          </span>
          <span variant="bodySmall" color={colors.text.secondary} center>
            Based on engagement, conversions, and content quality
          </span>
        </Card>
      )}

      <Divider variant="gold" spacing={spacing[6]} />

      {/* All Categories */}
      <div style={style={{...styles.categoriesSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Your Influence by Category
        </span>

        {categories.map((category, index) => (
          <Card
            key={index}
            variant={category.isTop ? 'gold' : 'default'}
            style={style={{...styles.categoryCard}
          >
            <div style={style={{...styles.categoryHeader}>
              <div style={style={{...styles.categoryInfo}>
                {category.isTop && (
                  <div style={style={{...styles.topIndicator}>
                    <span variant="caption" gold>
                      {'\u2605'}
                    </span>
                  </div>
                )}
                <span variant="bodyLarge" color={colors.text.primary}>
                  {category.name}
                </span>
              </div>
              <span variant="body" gold>
                {category.rewardsEarned}
              </span>
            </div>

            <div style={style={{...styles.scoreContainer}>
              <div style={style={{...styles.scoreBar}>
                <ProgressBar
                  progress={category.influenceScore / 100}
                  showGlow={category.isTop}
                />
              </div>
              <span variant="bodySmall" color={colors.text.secondary}>
                {category.influenceScore}%
              </span>
            </div>

            {category.isTop && (
              <div style={style={{...styles.topLabel}>
                <span variant="caption" gold>
                  Top Voice
                </span>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* How This Helps */}
      <div style={style={{...styles.helpSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          How This Helps You
        </span>
        <Card variant="default">
          <div style={style={{...styles.helpItem}>
            <span variant="body" color={colors.text.secondary}>
              Brands in your top categories will invite you more often
            </span>
          </div>
          <div style={style={{...styles.helpItem}>
            <span variant="body" color={colors.text.secondary}>
              Higher authority means higher reward potential
            </span>
          </div>
          <div style={style={{...styles.helpItem}>
            <span variant="body" color={colors.text.secondary}>
              Your content ranks higher in these categories
            </span>
          </div>
        </Card>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  topCard: {
    marginTop: spacing[4],
    alignItems: 'center',
    paddingVertical: spacing[6],
  },
  topBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  topCategory: {
    marginVertical: spacing[2],
  },
  categoriesSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  categoryCard: {
    marginBottom: spacing[3],
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  topIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  scoreBar: {
    flex: 1,
  },
  topLabel: {
    position: 'absolute',
    top: spacing[3],
    right: spacing[4],
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  helpSection: {
    marginTop: spacing[6],
  },
  helpItem: {
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
};

export default D6_CategoryAuthorityScreen;
