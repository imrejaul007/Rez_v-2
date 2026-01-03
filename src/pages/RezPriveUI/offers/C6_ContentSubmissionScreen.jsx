/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C6 - Privé Content Submission Screen
 *
 * Purpose: Submit proof of campaign participation
 * Shows:
 * - Post link submission
 * - Visit confirmation/proof
 * - Photo/video upload
 * - Quality checklist before submission
 * - Preview before final submit
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { OffersStackParamList } from '../../navigation/types';

type ContentType = 'social_post' | 'story' | 'review' | 'video' | 'visit_proof';

interface ContentOption {
  type: ContentType;
  icon: string;
  label: string;
  description: string;
  requiresLink: boolean;
  requiresUpload: boolean;
}

interface QualityCheck {
  id: string;
  text: string;
  isChecked: boolean;
}

const contentOptions: ContentOption[] = [
  {
    type: 'social_post',
    icon: '◎',
    label: 'Social Post',
    description: 'Instagram, Facebook, or X post',
    requiresLink: true,
    requiresUpload: false,
  },
  {
    type: 'story',
    icon: '◇',
    label: 'Story/Reel',
    description: 'Instagram/Facebook Story or Reel',
    requiresLink: true,
    requiresUpload: true,
  },
  {
    type: 'review',
    icon: '★',
    label: 'Written Review',
    description: 'Google, Yelp, or platform review',
    requiresLink: true,
    requiresUpload: false,
  },
  {
    type: 'video',
    icon: '▶',
    label: 'YouTube Video',
    description: 'YouTube video or short',
    requiresLink: true,
    requiresUpload: false,
  },
  {
    type: 'visit_proof',
    icon: '✓',
    label: 'Visit Proof',
    description: 'Receipt or check-in confirmation',
    requiresLink: false,
    requiresUpload: true,
  },
];

const initialQualityChecks: QualityCheck[] = [
  { id: '1', text: 'Content is authentic and represents my real experience', isChecked: false },
  { id: '2', text: 'Brand is properly tagged/mentioned', isChecked: false },
  { id: '3', text: 'Required hashtags are included (if any)', isChecked: false },
  { id: '4', text: 'Paid partnership disclosure added (if required)', isChecked: false },
  { id: '5', text: 'Content meets quality guidelines', isChecked: false },
];

interface C6_ContentSubmissionScreenProps {
  brandName?: string;
}

export const C6_ContentSubmissionScreen: React.FC<C6_ContentSubmissionScreenProps> = ({
  brandName = 'The Grand Café',
}) => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<OffersStackParamList, 'C6_ContentSubmission'>>();

  const [selectedType, setSelectedType] = useState<ContentType | null>(null);
  const [contentLink, setContentLink] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [qualityChecks, setQualityChecks] = useState<QualityCheck[]>(initialQualityChecks);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const selectedOption = contentOptions.find(o => o.type === selectedType);

  const toggleQualityCheck = (id: string) => {
    setQualityChecks(prev =>
      prev.map(check =>
        check.id === id ? { ...check, isChecked: !check.isChecked } : check
      )
    );
  };

  const allChecksComplete = qualityChecks.every(check => check.isChecked);
  const canSubmit = selectedType && (
    (selectedOption?.requiresLink && contentLink.trim()) ||
    (selectedOption?.requiresUpload && uploadedImage) ||
    (!selectedOption?.requiresLink && !selectedOption?.requiresUpload)
  ) && allChecksComplete;

  const handleSubmit = () => {
    navigate('/prive/C5_CampaignStatus', {
      campaignId: route.params?.campaignId || '1',
      status: 'pending',
    };
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title="Submit Content"
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* REWARD PREVIEW - Shows cashback user will earn */}
        {/* ============================================ */}
        <div style={style={{...styles.rewardPreviewCard}>
          <div style={style={{...styles.rewardPreviewHeader}>
            <div style={style={{...styles.rewardPreviewIcon}>
              <span style={style={{...styles.rewardPreviewIconText}>↑</span>
            </div>
            <div style={style={{...styles.rewardPreviewContent}>
              <span variant="caption" color={colors.text.tertiary}>
                SHARE & EARN CASHBACK
              </span>
              <span variant="h3" gold>+250 Privé Coins</span>
            </div>
          </div>
          <div style={style={{...styles.rewardPreviewDetails}>
            <div style={style={{...styles.rewardDetailItem}>
              <span variant="caption" color={colors.text.tertiary}>Base Reward</span>
              <span variant="body" color={colors.text.secondary}>+150 coins</span>
            </div>
            <div style={style={{...styles.rewardDetailDivider} />
            <div style={style={{...styles.rewardDetailItem}>
              <span variant="caption" color={colors.text.tertiary}>Quality Bonus</span>
              <span variant="body" style={{ color: '#4CAF50' }}>+100 coins</span>
            </div>
          </div>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.rewardNote}>
            Submit your social post link to claim your cashback reward
          </span>
        </div>

        {/* ============================================ */}
        {/* BRAND CONTEXT */}
        {/* ============================================ */}
        <div style={style={{...styles.contextSection}>
          <span variant="body" color={colors.text.secondary}>
            Submit your content for <span variant="body" gold>{brandName}</span> campaign
          </span>
        </div>

        {/* ============================================ */}
        {/* CONTENT TYPE SELECTION */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Select Content Type
          </span>

          <div style={style={{...styles.optionsGrid}>
            {contentOptions.map((option) => (
              <div
                key={option.type}
                style={[
                  style={{...styles.optionCard,
                  selectedType === option.type && style={{...styles.optionCardSelected,
                ]}
                onClick={() => setSelectedType(option.type)}
                onClick={() => {}}
              >
                <span style={[
                  style={{...styles.optionIcon,
                  { color: selectedType === option.type ? colors.gold.primary : colors.text.secondary },
                ]}>
                  {option.icon}
                </span>
                <Text
                  variant="bodySmall"
                  color={selectedType === option.type ? colors.text.primary : colors.text.secondary}
                >
                  {option.label}
                </span>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.optionDesc}>
                  {option.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {selectedType && (
          <>
            <Divider variant="light" spacing={spacing[4]} />

            {/* ============================================ */}
            {/* CONTENT LINK INPUT */}
            {/* ============================================ */}
            {selectedOption?.requiresLink && (
              <div style={style={{...styles.section}>
                <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                  Content Link
                </span>
                <div style={style={{...styles.inputContainer}>
                  <TextInput
                    style={style={{...styles.linkInput}
                    placeholder="Paste your content URL here..."
                    placeholderTextColor={colors.text.tertiary}
                    value={contentLink}
                    onChangeText={setContentLink}
                    autoCapitalize="none"
                    keyboardType="url"
                  />
                  {contentLink.length > 0 && (
                    <div style={style={{...styles.linkValidation}>
                      <span style={style={{...styles.checkMark}>✓</span>
                    </div>
                  )}
                </div>
                <span variant="caption" color={colors.text.tertiary} style={style={{...styles.inputHint}>
                  Make sure your content is set to public
                </span>
              </div>
            )}

            {/* ============================================ */}
            {/* UPLOAD SECTION */}
            {/* ============================================ */}
            {selectedOption?.requiresUpload && (
              <div style={style={{...styles.section}>
                <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                  {selectedType === 'visit_proof' ? 'Upload Proof' : 'Upload Screenshot'}
                </span>

                {uploadedImage ? (
                  <div style={style={{...styles.uploadedContainer}>
                    <img src={{ uri: uploadedImage }} style={style={{...styles.uploadedImage} />
                    <div
                      style={style={{...styles.removeButton}
                      onClick={() => setUploadedImage(null)}
                    >
                      <span variant="caption" color={colors.text.primary}>✕</span>
                    </div>
                  </div>
                ) : (
                  <div
                    style={style={{...styles.uploadArea}
                    onClick={() => setUploadedImage('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400')}
                  >
                    <span style={style={{...styles.uploadIcon}>+</span>
                    <span variant="body" color={colors.text.tertiary}>
                      Tap to upload
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>
                      JPG, PNG up to 10MB
                    </span>
                  </div>
                )}
              </div>
            )}

            <Divider variant="light" spacing={spacing[4]} />

            {/* ============================================ */}
            {/* ADDITIONAL NOTES */}
            {/* ============================================ */}
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                Additional Notes (Optional)
              </span>
              <TextInput
                style={style={{...styles.notesInput}
                placeholder="Any context you want to share..."
                placeholderTextColor={colors.text.tertiary}
                value={additionalNotes}
                onChangeText={setAdditionalNotes}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />
            </div>

            <Divider variant="light" spacing={spacing[4]} />

            {/* ============================================ */}
            {/* QUALITY CHECKLIST */}
            {/* ============================================ */}
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                Quality Checklist
              </span>
              <span variant="caption" color={colors.text.tertiary} style={style={{...styles.checklistSubtext}>
                Please confirm before submitting
              </span>

              <Card variant="default" style={style={{...styles.checklistCard}>
                {qualityChecks.map((check, index) => (
                  <div
                    key={check.id}
                    style={[
                      style={{...styles.checkItem,
                      index < qualityChecks.length - 1 && style={{...styles.checkItemBorder,
                    ]}
                    onClick={() => toggleQualityCheck(check.id)}
                    onClick={() => {}}
                  >
                    <div style={[
                      style={{...styles.checkbox,
                      check.isChecked && style={{...styles.checkboxChecked,
                    ]}>
                      {check.isChecked && (
                        <span style={style={{...styles.checkboxIcon}>✓</span>
                      )}
                    </div>
                    <Text
                      variant="bodySmall"
                      color={check.isChecked ? colors.text.primary : colors.text.secondary}
                      style={style={{...styles.checkText}
                    >
                      {check.text}
                    </span>
                  </div>
                ))}
              </Card>

              {!allChecksComplete && (
                <span variant="caption" color={colors.status.warning} style={style={{...styles.checklistWarning}>
                  Complete all checks to submit
                </span>
              )}
            </div>

            {/* ============================================ */}
            {/* SUBMISSION NOTE */}
            {/* ============================================ */}
            <Card variant="default" style={style={{...styles.submissionNote}>
              <div style={style={{...styles.noteContent}>
                <span style={style={{...styles.noteIcon}>◈</span>
                <div style={style={{...styles.noteText}>
                  <span variant="bodySmall" color={colors.text.secondary}>
                    Your submission will be reviewed within 24-48 hours.
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Rewards are credited after approval.
                  </span>
                </div>
              </div>
            </Card>
          </>
        )}

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTONS */}
      {/* ============================================ */}
      {selectedType && (
        <div style={style={{...styles.ctaContainer}>
          <div
            style={[style={{...styles.ctaButton, !canSubmit && style={{...styles.ctaButtonDisabled]}
            onClick={handleSubmit}
            onClick={() => {}}
            disabled={!canSubmit}
          >
            <span variant="bodyLarge" color={canSubmit ? colors.background.primary : colors.text.tertiary}>
              Submit for Review
            </span>
          </div>
        </div>
      )}
    </ScreenContainer>
  );
};

const styles = {
  scrollContent: {
    paddingBottom: 120,
  },

  // Reward Preview Card
  rewardPreviewCard: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    backgroundColor: colors.transparent.gold10,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  rewardPreviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  rewardPreviewIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardPreviewIconText: {
    fontSize: 22,
    color: '#4CAF50',
  },
  rewardPreviewContent: {
    flex: 1,
    gap: spacing[1],
  },
  rewardPreviewDetails: {
    flexDirection: 'row',
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.border.goldMuted,
  },
  rewardDetailItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  rewardDetailDivider: {
    width: 1,
    backgroundColor: colors.border.goldMuted,
  },
  rewardNote: {
    marginTop: spacing[3],
    textAlign: 'center',
    fontStyle: 'italic',
  },

  contextSection: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
  },

  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  optionCard: {
    width: '47%',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  optionCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: colors.transparent.gold10,
  },
  optionIcon: {
    fontSize: 24,
  },
  optionDesc: {
    textAlign: 'center',
    lineHeight: 16,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkInput: {
    flex: 1,
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    color: colors.text.primary,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  linkValidation: {
    marginLeft: spacing[2],
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.status.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  inputHint: {
    marginTop: spacing[2],
  },

  uploadArea: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.border.primary,
    borderStyle: 'dashed',
    padding: spacing[8],
    alignItems: 'center',
    gap: spacing[2],
  },
  uploadIcon: {
    fontSize: 32,
    color: colors.text.tertiary,
  },
  uploadedContainer: {
    position: 'relative',
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.lg,
  },
  removeButton: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notesInput: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    color: colors.text.primary,
    fontSize: 15,
    minHeight: 80,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },

  checklistSubtext: {
    marginTop: -spacing[2],
    marginBottom: spacing[3],
  },
  checklistCard: {
    padding: 0,
    overflow: 'hidden',
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  checkItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.gold.primary,
    borderColor: colors.gold.primary,
  },
  checkboxIcon: {
    color: colors.background.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  checkText: {
    flex: 1,
    lineHeight: 20,
  },
  checklistWarning: {
    marginTop: spacing[3],
    textAlign: 'center',
  },

  submissionNote: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[4],
  },
  noteContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  noteIcon: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  noteText: {
    flex: 1,
    gap: spacing[1],
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
  ctaButtonDisabled: {
    backgroundColor: colors.background.tertiary,
  },
};

export default C6_ContentSubmissionScreen;
