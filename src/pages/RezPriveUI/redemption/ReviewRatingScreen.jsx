/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Review & Rating Screen
 *
 * Premium review experience with:
 * - Star rating system
 * - Category-specific ratings
 * - Photo upload
 * - Review text with tips
 * - Reward for quality reviews
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// SafeAreaView removed
// LinearGradient will use CSS
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// ============================================
// TYPES
// ============================================

interface CategoryRating {
  id: string;
  label: string;
  icon: string;
  rating: number;
}

interface ReviewTag {
  id: string;
  label: string;
  selected: boolean;
  positive: boolean;
}

// ============================================
// MOCK DATA
// ============================================

const storeInfo = {
  id: '1',
  name: 'The Grand Café',
  category: 'Fine Dining',
  image: 'https://placeholder.com/store.jpg',
  visitDate: 'December 18, 2024',
};

const initialCategories: CategoryRating[] = [
  { id: '1', label: 'Service', icon: '👨‍🍳', rating: 0 },
  { id: '2', label: 'Quality', icon: '✨', rating: 0 },
  { id: '3', label: 'Ambiance', icon: '🏛️', rating: 0 },
  { id: '4', label: 'Value', icon: '💎', rating: 0 },
];

const positiveTags: ReviewTag[] = [
  { id: 'p1', label: 'Excellent Service', selected: false, positive: true },
  { id: 'p2', label: 'Great Ambiance', selected: false, positive: true },
  { id: 'p3', label: 'Worth Every Penny', selected: false, positive: true },
  { id: 'p4', label: 'Would Recommend', selected: false, positive: true },
  { id: 'p5', label: 'Memorable Experience', selected: false, positive: true },
  { id: 'p6', label: 'Quick & Efficient', selected: false, positive: true },
];

const improvementTags: ReviewTag[] = [
  { id: 'n1', label: 'Long Wait Time', selected: false, positive: false },
  { id: 'n2', label: 'Noisy Environment', selected: false, positive: false },
  { id: 'n3', label: 'Limited Options', selected: false, positive: false },
  { id: 'n4', label: 'Pricey', selected: false, positive: false },
];

const reviewTips = [
  'What made your experience special?',
  'Would you recommend this to others?',
  'What stood out about the service?',
  'How did the quality match your expectations?',
];

// ============================================
// COMPONENT
// ============================================

export const ReviewRatingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [overallRating, setOverallRating] = useState(0);
  const [categoryRatings, setCategoryRatings] = useState(initialCategories);
  const [tags, setTags] = useState([...positiveTags, ...improvementTags]);
  const [reviewText, setReviewText] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBack = () => navigate(-1);

  const handleOverallRating = (rating: number) => {
    setOverallRating(rating);
  };

  const handleCategoryRating = (categoryId: string, rating: number) => {
    setCategoryRatings(prev =>
      prev.map(cat => cat.id === categoryId ? { ...cat, rating } : cat)
    );
  };

  const handleTagToggle = (tagId: string) => {
    setTags(prev =>
      prev.map(tag => tag.id === tagId ? { ...tag, selected: !tag.selected } : tag)
    );
  };

  const handleAddPhoto = () => {
    if (photos.length < 5) {
      setPhotos([...photos, `photo_${photos.length + 1}`]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const canSubmit = overallRating > 0 && reviewText.length >= 20;

  const getRewardAmount = () => {
    let base = 25;
    if (reviewText.length >= 100) base += 15;
    if (photos.length > 0) base += 10;
    if (categoryRatings.every(c => c.rating > 0)) base += 10;
    return base;
  };

  // ============================================
  // RENDER: SUBMITTED
  // ============================================

  if (isSubmitted) {
    return (
      <div style={style={{...styles.container}>
        <div style={style={{...styles.submittedContainer}>
          <div style={style={{...styles.successIcon}>
            <span style={{ fontSize: 48 }}>⭐</span>
          </div>
          <span variant="h2" color={colors.text.primary} center style={style={{...styles.successTitle}>
            Thank You!
          </span>
          <span variant="body" color={colors.text.secondary} center style={style={{...styles.successMessage}>
            Your review helps the Privé community discover exceptional experiences.
          </span>

          <LinearGradient
            colors={['rgba(201, 169, 98, 0.2)', 'rgba(201, 169, 98, 0.05)']}
            style={style={{...styles.rewardCard}
          >
            <span variant="caption" color={colors.text.tertiary}>REWARD EARNED</span>
            <div style={style={{...styles.rewardAmount}>
              <span style={style={{...styles.rewardValue}>{getRewardAmount()}</span>
              <span variant="body" gold> ReZ</span>
            </div>
            <span variant="caption" color={colors.text.secondary}>
              Added to your wallet
            </span>
          </LinearGradient>

          <div
            style={style={{...styles.doneButton}
            onClick={() => navigate(-1)}
          >
            <span variant="body" color="#000">Done</span>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // MAIN RENDER
  // ============================================

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backButton} onClick={handleBack}>
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Write Review</span>
        <div style={style={{...styles.headerSpacer} />
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Store Info */}
        <div style={style={{...styles.storeCard}>
          <div style={style={{...styles.storeIcon}>
            <span style={{ fontSize: 28 }}>🍽️</span>
          </div>
          <div style={style={{...styles.storeInfo}>
            <span variant="h4" color={colors.text.primary}>{storeInfo.name}</span>
            <span variant="caption" color={colors.text.tertiary}>
              {storeInfo.category} • Visited {storeInfo.visitDate}
            </span>
          </div>
        </div>

        {/* Overall Rating */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            OVERALL RATING
          </span>
          <div style={style={{...styles.starsContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <div
                key={star}
                onClick={() => handleOverallRating(star)}
                style={style={{...styles.starButton}
              >
                <span style={[
                  style={{...styles.star,
                  star <= overallRating && style={{...styles.starActive,
                ]}>
                  ★
                </span>
              </div>
            ))}
          </div>
          <span variant="body" color={colors.text.secondary} center>
            {overallRating === 0 && 'Tap to rate'}
            {overallRating === 1 && 'Poor'}
            {overallRating === 2 && 'Fair'}
            {overallRating === 3 && 'Good'}
            {overallRating === 4 && 'Great'}
            {overallRating === 5 && 'Exceptional'}
          </span>
        </div>

        {/* Category Ratings */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            RATE BY CATEGORY
          </span>
          <div style={style={{...styles.categoryGrid}>
            {categoryRatings.map(category => (
              <div key={category.id} style={style={{...styles.categoryCard}>
                <span style={{ fontSize: 24 }}>{category.icon}</span>
                <span variant="bodySmall" color={colors.text.primary}>{category.label}</span>
                <div style={style={{...styles.categoryStars}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <div
                      key={star}
                      onClick={() => handleCategoryRating(category.id, star)}
                    >
                      <span style={[
                        style={{...styles.categoryStar,
                        star <= category.rating && style={{...styles.categoryStarActive,
                      ]}>
                        ★
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tags */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            HIGHLIGHTS
          </span>
          <div style={style={{...styles.tagsContainer}>
            {tags.filter(t => t.positive).map(tag => (
              <div
                key={tag.id}
                style={[style={{...styles.tag, tag.selected && style={{...styles.tagSelected]}
                onClick={() => handleTagToggle(tag.id)}
              >
                <Text
                  variant="caption"
                  color={tag.selected ? colors.gold.primary : colors.text.secondary}
                >
                  {tag.label}
                </span>
              </div>
            ))}
          </div>

          <span variant="label" color={colors.text.tertiary} style={[style={{...styles.sectionLabel, { marginTop: spacing[4] }]}>
            COULD IMPROVE
          </span>
          <div style={style={{...styles.tagsContainer}>
            {tags.filter(t => !t.positive).map(tag => (
              <div
                key={tag.id}
                style={[style={{...styles.tag, tag.selected && style={{...styles.tagSelectedNegative]}
                onClick={() => handleTagToggle(tag.id)}
              >
                <Text
                  variant="caption"
                  color={tag.selected ? '#F59E0B' : colors.text.secondary}
                >
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            YOUR REVIEW
          </span>
          <div style={style={{...styles.reviewCard}>
            <TextInput
              style={style={{...styles.reviewInput}
              value={reviewText}
              onChangeText={setReviewText}
              placeholder={reviewTips[Math.floor(Math.random() * reviewTips.length)]}
              placeholderTextColor={colors.text.tertiary}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
            <div style={style={{...styles.reviewFooter}>
              <Text
                variant="caption"
                color={reviewText.length >= 20 ? colors.text.tertiary : '#EF4444'}
              >
                {reviewText.length}/500 (min 20)
              </span>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ADD PHOTOS (OPTIONAL)
          </span>
          <div style={style={{...styles.photosRow}>
            {photos.map((photo, index) => (
              <div key={photo} style={style={{...styles.photoItem}>
                <div style={style={{...styles.photoPlaceholder}>
                  <span style={{ fontSize: 24 }}>📷</span>
                </div>
                <div
                  style={style={{...styles.photoRemove}
                  onClick={() => handleRemovePhoto(index)}
                >
                  <span style={{ fontSize: 12, color: '#fff' }}>×</span>
                </div>
              </div>
            ))}
            {photos.length < 5 && (
              <div style={style={{...styles.addPhotoButton} onClick={handleAddPhoto}>
                <span style={{ fontSize: 24 }}>+</span>
                <span variant="caption" color={colors.text.tertiary}>Add</span>
              </div>
            )}
          </div>
          <span variant="caption" color={colors.text.tertiary}>
            Add up to 5 photos to earn bonus ReZ
          </span>
        </div>

        {/* Reward Preview */}
        <div style={style={{...styles.rewardPreview}>
          <div style={style={{...styles.rewardPreviewIcon}>
            <span style={{ fontSize: 20 }}>🎁</span>
          </div>
          <div style={style={{...styles.rewardPreviewInfo}>
            <span variant="body" color={colors.text.primary}>Earn {getRewardAmount()} ReZ</span>
            <span variant="caption" color={colors.text.tertiary}>
              For submitting this review
            </span>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Submit Button */}
      <div style={style={{...styles.bottomAction}>
        <div
          style={[style={{...styles.submitButton, !canSubmit && style={{...styles.submitButtonDisabled]}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          <span variant="body" color={canSubmit ? '#000' : colors.text.tertiary}>
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================
// STYLES
// ============================================

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: colors.text.primary,
  },
  headerSpacer: {
    width: 40,
  },

  // Store Card
  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginBottom: spacing[6],
    padding: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
  },
  storeIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  storeInfo: {
    flex: 1,
  },

  // Sections
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[6],
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },

  // Stars
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing[3],
  },
  starButton: {
    padding: spacing[2],
  },
  star: {
    fontSize: 40,
    color: '#2A2A2A',
  },
  starActive: {
    color: colors.gold.primary,
  },

  // Category Ratings
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  categoryCard: {
    width: '47%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
  },
  categoryStars: {
    flexDirection: 'row',
  },
  categoryStar: {
    fontSize: 16,
    color: '#2A2A2A',
    marginHorizontal: 2,
  },
  categoryStarActive: {
    color: colors.gold.primary,
  },

  // Tags
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  tag: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
  },
  tagSelected: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  tagSelectedNegative: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },

  // Review Input
  reviewCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
  },
  reviewInput: {
    color: colors.text.primary,
    fontSize: 15,
    minHeight: 120,
  },
  reviewFooter: {
    alignItems: 'flex-end',
    marginTop: spacing[2],
    paddingTop: spacing[2],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },

  // Photos
  photosRow: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[2],
  },
  photoItem: {
    position: 'relative',
  },
  photoPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.lg,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoRemove: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhotoButton: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.lg,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2A2A2A',
    borderStyle: 'dashed',
  },

  // Reward Preview
  rewardPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    padding: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  rewardPreviewIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  rewardPreviewInfo: {
    flex: 1,
  },

  // Bottom Action
  bottomAction: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
  },
  submitButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#2A2A2A',
  },

  // Submitted
  submittedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  successTitle: {
    marginBottom: spacing[3],
  },
  successMessage: {
    marginBottom: spacing[6],
    paddingHorizontal: spacing[4],
  },
  rewardCard: {
    width: '100%',
    alignItems: 'center',
    padding: spacing[6],
    borderRadius: borderRadius['2xl'],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[6],
  },
  rewardAmount: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: spacing[2],
    marginBottom: spacing[2],
  },
  rewardValue: {
    fontSize: 48,
    fontWeight: '700',
    color: colors.gold.primary,
  },
  doneButton: {
    width: '100%',
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },

  bottomSpace: {
    height: spacing[4],
  },
};

export default ReviewRatingScreen;
