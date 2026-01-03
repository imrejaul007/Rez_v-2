/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F8 - Privé Profile Edit (Limited)
 * Purpose: Keep profile controlled
 * Editable: Photo, categories, social links
 * Not Editable: Tier, influence, recognition
 */

import React, { useState } from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
  CategoryTag,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface ProfileEditData {
  photo?: string;
  categoryInterests: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
  };
}

interface F8_ProfileEditScreenProps {
  profile?: ProfileEditData;
  onSave?: (profile: ProfileEditData) => void;
  onBack?: () => void;
}

export const F8_ProfileEditScreen: React.FC<F8_ProfileEditScreenProps> = ({
  profile: initialProfile = {
    categoryInterests: ['Dining', 'Luxury', 'Travel'],
    socialLinks: {
      instagram: '@rejaul',
      twitter: '@rejaul',
    },
  },
  onSave,
  onBack,
}) => {
  const [profile, setProfile] = useState(initialProfile);
  const allCategories = ['Dining', 'Luxury', 'Travel', 'Fashion', 'Wellness', 'Tech', 'Lifestyle', 'Entertainment'];

  const toggleCategory = (category: string) => {
    const current = profile.categoryInterests;
    const updated = current.includes(category)
      ? current.filter((c) => c !== category)
      : [...current, category];
    setProfile({ ...profile, categoryInterests: updated };
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Edit Profile" showBack onBack={onBack} />

      {/* Photo Section */}
      <div style={style={{...styles.photoSection}>
        <div style={style={{...styles.photoContainer}>
          {profile.photo ? (
            <img src={{ uri: profile.photo }} style={style={{...styles.photo} />
          ) : (
            <div style={style={{...styles.photoPlaceholder}>
              <span variant="h2" color={colors.text.tertiary}>
                +
              </span>
            </div>
          )}
          <div style={style={{...styles.photoRing} />
        </div>
        <span variant="bodySmall" gold style={style={{...styles.changePhotoText}>
          Change Photo
        </span>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Category Interests */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Category Interests
        </span>
        <span variant="caption" color={colors.text.secondary} style={style={{...styles.sectionSubtext}>
          Select categories that match your interests
        </span>
        <div style={style={{...styles.categoriesGrid}>
          {allCategories.map((category) => (
            <div
              key={category}
              onClick={() => toggleCategory(category)}
            >
              <CategoryTag
                category={category}
                isActive={profile.categoryInterests.includes(category)}
                isTop={false}
              />
            </div>
          ))}
        </div>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Social Links */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Social Links
        </span>

        <div style={style={{...styles.socialInputContainer}>
          <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.socialLabel}>
            Instagram
          </span>
          <TextInput
            style={style={{...styles.socialInput}
            value={profile.socialLinks.instagram}
            onChangeText={(text) =>
              setProfile({
                ...profile,
                socialLinks: { ...profile.socialLinks, instagram: text },
              })
            }
            placeholder="@username"
            placeholderTextColor={colors.text.tertiary}
          />
        </div>

        <div style={style={{...styles.socialInputContainer}>
          <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.socialLabel}>
            Twitter
          </span>
          <TextInput
            style={style={{...styles.socialInput}
            value={profile.socialLinks.twitter}
            onChangeText={(text) =>
              setProfile({
                ...profile,
                socialLinks: { ...profile.socialLinks, twitter: text },
              })
            }
            placeholder="@username"
            placeholderTextColor={colors.text.tertiary}
          />
        </div>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Not Editable Note */}
      <Card variant="default" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="bodySmall" color={colors.text.tertiary}>
              {'\u2022'}
            </span>
          </div>
          <div style={style={{...styles.noteText}>
            <span variant="bodySmall" color={colors.text.secondary}>
              Tier, influence level, and recognition are earned through activity and cannot be edited.
            </span>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="Save Changes"
          onClick={() => onSave?.(profile)}
          variant="primary"
        />
      </div>
    </ScreenContainer>
  );
};

const styles = {
  photoSection: {
    alignItems: 'center',
    marginTop: spacing[4],
  },
  photoContainer: {
    position: 'relative',
    marginBottom: spacing[2],
  },
  photo: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  photoPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoRing: {
    position: 'absolute',
    top: -3,
    left: -3,
    right: -3,
    bottom: -3,
    borderRadius: 47,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    borderStyle: 'dashed',
  },
  changePhotoText: {},
  section: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[1],
  },
  sectionSubtext: {
    marginBottom: spacing[4],
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  socialInputContainer: {
    marginBottom: spacing[4],
  },
  socialLabel: {
    marginBottom: spacing[2],
  },
  socialInput: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    color: colors.text.primary,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  noteCard: {},
  noteContent: {
    flexDirection: 'row',
  },
  noteIcon: {
    marginRight: spacing[2],
    marginTop: spacing[1],
  },
  noteText: {
    flex: 1,
  },
  ctaContainer: {
    marginTop: spacing[6],
    paddingBottom: spacing[4],
  },
};

export default F8_ProfileEditScreen;
