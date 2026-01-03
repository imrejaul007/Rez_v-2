/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E4 - Privé Experiences Screen (High Emotion)
 * Purpose: Most aspirational screen
 * UI: Full-width images, minimal overlay, dark gradient
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  PriveHeader,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface Experience {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  isInviteOnly?: boolean;
}

interface E4_ExperiencesScreenProps {
  experiences?: Experience[];
  onSelectExperience?: (id: string) => void;
  onBack?: () => void;
}

export const E4_ExperiencesScreen: React.FC<E4_ExperiencesScreenProps> = ({
  experiences = [
    { id: '1', title: "Chef's Table Experience", category: 'Signature Dining', isInviteOnly: true },
    { id: '2', title: 'Private Island Retreat', category: 'Luxury Getaways', isInviteOnly: false },
    { id: '3', title: 'Art Gallery Preview', category: 'Private Events', isInviteOnly: true },
    { id: '4', title: 'Wellness Weekend', category: 'Wellness & Lifestyle', isInviteOnly: false },
  ],
  onSelectExperience,
  onBack,
}) => {
  const categories = ['Signature Dining', 'Luxury Getaways', 'Private Events', 'Wellness & Lifestyle'];

  return (
    <ScreenContainer padded={false}>
      <div style={style={{...styles.headerContainer}>
        <PriveHeader title="Experiences" showBack onBack={onBack} />
      </div>

      {/* Category Pills */}
      <div style={style={{...styles.categoriesContainer}>
        {categories.map((category, index) => (
          <div key={index} style={style={{...styles.categoryPill}>
            <span variant="bodySmall" color={colors.text.secondary}>
              {category}
            </span>
          </div>
        ))}
      </div>

      {/* Experience Cards */}
      <div style={style={{...styles.experiencesContainer}>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            style={style={{...styles.experienceCard}
            onClick={() => onSelectExperience?.(experience.id)}
            onClick={() => {}}
          >
            {/* Background placeholder */}
            <div style={style={{...styles.cardBackground}>
              <div style={style={{...styles.gradientOverlay} />
            </div>

            {/* Content */}
            <div style={style={{...styles.cardContent}>
              {experience.isInviteOnly && (
                <div style={style={{...styles.inviteBadge}>
                  <span variant="caption" gold>
                    Invite Only
                  </span>
                </div>
              )}
              <div style={style={{...styles.cardTextContent}>
                <span variant="caption" color={colors.text.tertiary}>
                  {experience.category}
                </span>
                <span variant="h3" color={colors.text.primary} style={style={{...styles.experienceTitle}>
                  {experience.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div style={style={{...styles.noteContainer}>
        <span variant="caption" color={colors.text.tertiary} center>
          Some experiences require approval or higher Privé tier
        </span>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  headerContainer: {
    paddingHorizontal: spacing[5],
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    gap: spacing[2],
    flexWrap: 'wrap',
  },
  categoryPill: {
    backgroundColor: colors.background.card,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  experiencesContainer: {
    paddingHorizontal: spacing[5],
    gap: spacing[4],
  },
  experienceCard: {
    height: 200,
    borderRadius: borderRadius['2xl'],
    overflow: 'hidden',
    position: 'relative',
  },
  cardBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.tertiary,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  cardContent: {
    flex: 1,
    padding: spacing[5],
    justifyContent: 'space-between',
  },
  inviteBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.transparent.gold20,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },
  cardTextContent: {
    gap: spacing[1],
  },
  experienceTitle: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  noteContainer: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
  },
};

export default E4_ExperiencesScreen;
