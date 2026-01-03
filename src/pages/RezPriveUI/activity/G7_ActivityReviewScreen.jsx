/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G7 - Privé Activity Review Transparency
 * Purpose: Show what's being evaluated, without exposing algorithms
 * Displays: Engagement, content quality, conversion authenticity
 * Uses icons + labels, not numbers
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

type EvaluationLevel = 'Excellent' | 'Good' | 'Building' | 'Needs Attention';

interface EvaluationFactor {
  name: string;
  description: string;
  level: EvaluationLevel;
  icon: string;
}

interface G7_ActivityReviewScreenProps {
  factors?: EvaluationFactor[];
  onBack?: () => void;
}

export const G7_ActivityReviewScreen: React.FC<G7_ActivityReviewScreenProps> = ({
  factors = [
    {
      name: 'Engagement Consistency',
      description: 'Regular, meaningful interactions',
      level: 'Excellent',
      icon: '\u2605',
    },
    {
      name: 'Content Quality',
      description: 'Authentic, valuable contributions',
      level: 'Good',
      icon: '\u270E',
    },
    {
      name: 'Conversion Authenticity',
      description: 'Genuine impact on decisions',
      level: 'Good',
      icon: '\u2713',
    },
  ],
  onBack,
}) => {
  const getLevelConfig = (level: EvaluationLevel) => {
    switch (level) {
      case 'Excellent':
        return { color: colors.gold.primary, progress: 1 };
      case 'Good':
        return { color: colors.text.primary, progress: 0.75 };
      case 'Building':
        return { color: colors.status.warning, progress: 0.5 };
      case 'Needs Attention':
        return { color: colors.status.error, progress: 0.25 };
      default:
        return { color: colors.text.tertiary, progress: 0.5 };
    }
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Activity Review" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        These factors shape your Privé standing. Focus on authentic engagement for the best results.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Evaluation Factors */}
      <div style={style={{...styles.factorsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What We Evaluate
        </span>

        {factors.map((factor, index) => {
          const config = getLevelConfig(factor.level);
          return (
            <Card key={index} variant="default" style={style={{...styles.factorCard}>
              <div style={style={{...styles.factorHeader}>
                <div style={style={{...styles.factorIcon}>
                  <span variant="body" gold>
                    {factor.icon}
                  </span>
                </div>
                <div style={style={{...styles.factorInfo}>
                  <span variant="bodyLarge" color={colors.text.primary}>
                    {factor.name}
                  </span>
                  <span variant="bodySmall" color={colors.text.tertiary}>
                    {factor.description}
                  </span>
                </div>
              </div>

              <div style={style={{...styles.levelContainer}>
                <div style={style={{...styles.progressBar}>
                  <ProgressBar
                    progress={config.progress}
                    showGlow={factor.level === 'Excellent'}
                  />
                </div>
                <Text
                  variant="bodySmall"
                  color={factor.level === 'Excellent' ? colors.gold.primary : colors.text.secondary}
                >
                  {factor.level}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* What We Don't Show */}
      <div style={style={{...styles.noteSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          How This Works
        </span>
        <Card variant="gold">
          <div style={style={{...styles.noteItem}>
            <div style={style={{...styles.noteBullet}>
              <span variant="caption" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Exact algorithms are not shared to prevent gaming
            </span>
          </div>
          <div style={style={{...styles.noteItem}>
            <div style={style={{...styles.noteBullet}>
              <span variant="caption" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Focus on authentic engagement, not optimization
            </span>
          </div>
          <div style={style={{...styles.noteItem}>
            <div style={style={{...styles.noteBullet}>
              <span variant="caption" gold>
                {'\u2022'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Evaluations update based on ongoing activity
            </span>
          </div>
        </Card>
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.footerNote}>
        Transparency builds trust
      </span>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
    lineHeight: 24,
  },
  factorsSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  factorCard: {
    marginBottom: spacing[3],
  },
  factorHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing[4],
  },
  factorIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  factorInfo: {
    flex: 1,
    gap: spacing[1],
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  progressBar: {
    flex: 1,
  },
  noteSection: {
    marginTop: spacing[6],
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  noteBullet: {
    width: 20,
    marginRight: spacing[2],
    marginTop: spacing[1],
  },
  footerNote: {
    marginTop: spacing[6],
  },
};

export default G7_ActivityReviewScreen;
