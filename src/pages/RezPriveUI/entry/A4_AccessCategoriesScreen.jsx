/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A4 - Access Categories Screen
 * Shows all 6 access paths to Privé with detailed requirements
 * "Many paths to the same destination"
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface AccessCategory {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  signals: { name: string; weight: string; icon: string }[];
  requirements: string[];
  examples: string[];
  accessType: 'permanent' | 'time_bound' | 'brand_specific';
}

const accessCategories: AccessCategory[] = [
  {
    id: 'power_user',
    name: 'Power User',
    icon: '⚡',
    tagline: 'The Engaged Loyalist',
    description: 'Users who demonstrate consistent, meaningful engagement over time. You don\'t just use the app — you live it.',
    color: '#4CAF50',
    signals: [
      { name: 'Engagement', weight: 'Primary', icon: '📊' },
      { name: 'Trust', weight: 'Secondary', icon: '🛡️' },
      { name: 'Network Value', weight: 'Supporting', icon: '🔗' },
    ],
    requirements: [
      '6+ months consistent daily activity',
      'High transaction frequency (5+ per week)',
      'Strong redemption history',
      'Low refund/dispute ratio',
      'Active in multiple categories',
    ],
    examples: [
      'Someone who checks offers daily',
      'Makes regular purchases through ReZ',
      'Has redeemed 20+ rewards',
      'Refers friends organically',
    ],
    accessType: 'permanent',
  },
  {
    id: 'creator',
    name: 'Creator / Influencer',
    icon: '🎨',
    tagline: 'The Amplifier',
    description: 'You have a following. You create content that inspires action. Brands notice when you speak.',
    color: '#E91E63',
    signals: [
      { name: 'Influence', weight: 'Primary', icon: '📢' },
      { name: 'Trust', weight: 'Secondary', icon: '🛡️' },
      { name: 'Engagement', weight: 'Supporting', icon: '📊' },
    ],
    requirements: [
      '10K+ followers on any platform',
      'Verified social accounts',
      '3%+ engagement rate',
      'Authentic content creation',
      'Brand collaboration history',
    ],
    examples: [
      'Instagram lifestyle influencer',
      'YouTube reviewer with loyal audience',
      'Twitter/X thought leader',
      'TikTok creator with viral reach',
    ],
    accessType: 'permanent',
  },
  {
    id: 'premium_consumer',
    name: 'Premium Consumer',
    icon: '💎',
    tagline: 'The High-Value Spender',
    description: 'Your spending patterns reveal premium taste. Brands want to reward customers like you.',
    color: '#9C27B0',
    signals: [
      { name: 'Spending Power', weight: 'Primary', icon: '💰' },
      { name: 'Trust', weight: 'Secondary', icon: '🛡️' },
      { name: 'Engagement', weight: 'Supporting', icon: '📊' },
    ],
    requirements: [
      'High average transaction value',
      'Premium brand affinity',
      'Consistent spending pattern',
      'Low returns, high satisfaction',
      'Multi-category premium purchases',
    ],
    examples: [
      'Fine dining regular',
      'Luxury retail shopper',
      'Premium service subscriber',
      'High-ticket experience seeker',
    ],
    accessType: 'permanent',
  },
  {
    id: 'category_authority',
    name: 'Category Authority',
    icon: '👑',
    tagline: 'The Expert',
    description: 'You\'re the go-to person in your domain. When you recommend something, people listen.',
    color: '#FF9800',
    signals: [
      { name: 'Influence', weight: 'Primary', icon: '📢' },
      { name: 'Trust', weight: 'Primary', icon: '🛡️' },
      { name: 'Engagement', weight: 'Secondary', icon: '📊' },
    ],
    requirements: [
      'Deep expertise in specific category',
      'Quality reviews and recommendations',
      'Community recognition',
      'Consistent engagement in category',
      'Trusted by other users',
    ],
    examples: [
      'Food critic with trusted reviews',
      'Fashion expert with curated taste',
      'Tech reviewer with deep knowledge',
      'Wellness advocate with proven results',
    ],
    accessType: 'permanent',
  },
  {
    id: 'brand_invited',
    name: 'Brand-Invited',
    icon: '🎯',
    tagline: 'The Chosen One',
    description: 'A premium brand selected you specifically. They see value in you as their customer.',
    color: '#2196F3',
    signals: [
      { name: 'Brand Affinity', weight: 'Primary', icon: '🏷️' },
      { name: 'Spending Power', weight: 'Secondary', icon: '💰' },
      { name: 'Engagement', weight: 'Supporting', icon: '📊' },
    ],
    requirements: [
      'Existing relationship with premium brand',
      'Brand identifies you as VIP customer',
      'History of premium purchases with brand',
      'Brand-specific loyalty metrics',
      'Selected for exclusive programs',
    ],
    examples: [
      'Hotel\'s platinum member',
      'Airline\'s frequent flyer elite',
      'Retailer\'s top-tier customer',
      'Restaurant\'s regular VIP guest',
    ],
    accessType: 'brand_specific',
  },
  {
    id: 'special_access',
    name: 'Special Access',
    icon: '✨',
    tagline: 'The Exception',
    description: 'Sometimes value isn\'t quantifiable. You bring something unique to the ecosystem.',
    color: '#00BCD4',
    signals: [
      { name: 'Unique Value', weight: 'Primary', icon: '💫' },
      { name: 'Network Value', weight: 'Secondary', icon: '🔗' },
      { name: 'Trust', weight: 'Supporting', icon: '🛡️' },
    ],
    requirements: [
      'Exceptional circumstances',
      'Unique contribution to ecosystem',
      'Special partnership connections',
      'Event-based qualification',
      'Manual review and approval',
    ],
    examples: [
      'Event attendee at Privé launch',
      'Early beta tester with feedback',
      'Industry professional with insights',
      'Partner company employee',
    ],
    accessType: 'time_bound',
  },
];

export const A4_AccessCategoriesScreen: React.FC = () => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const getAccessTypeLabel = (type: string) => {
    switch (type) {
      case 'permanent':
        return { label: 'Permanent', color: '#4CAF50', icon: '∞' };
      case 'time_bound':
        return { label: 'Time-bound', color: '#FFC107', icon: '⏱' };
      case 'brand_specific':
        return { label: 'Brand-specific', color: '#2196F3', icon: '🎯' };
      default:
        return { label: 'Trial', color: '#9C27B0', icon: '✨' };
    }
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div
          style={style={{...styles.backButton}
          onClick={() => navigate(-1)}
        >
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <div style={style={{...styles.headerContent}>
          <span variant="h2" color={colors.text.primary}>Access Paths</span>
          <span variant="caption" color={colors.text.tertiary}>
            6 ways to earn Privé access
          </span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Philosophy Banner */}
        <div style={style={{...styles.philosophyBanner}>
          <div style={style={{...styles.philosophyIcon}>
            <span style={style={{...styles.philosophyEmoji}>◈</span>
          </div>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.philosophyText}>
            Privé isn't one-size-fits-all. Different users bring different value, and we recognize that through multiple access paths.
          </span>
        </div>

        {/* Categories */}
        {accessCategories.map((category, index) => {
          const isExpanded = expandedCategory === category.id;
          const accessType = getAccessTypeLabel(category.accessType);

          return (
            <div
              key={category.id}
              style={[
                style={{...styles.categoryCard,
                isExpanded && style={{...styles.categoryCardExpanded,
                { borderLeftColor: category.color },
              ]}
              onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
              onClick={() => {}}
            >
              {/* Category Header */}
              <div style={style={{...styles.categoryHeader}>
                <div style={[style={{...styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                  <span style={style={{...styles.categoryEmoji}>{category.icon}</span>
                </div>
                <div style={style={{...styles.categoryInfo}>
                  <div style={style={{...styles.categoryTitleRow}>
                    <span variant="bodyLarge" color={colors.text.primary}>{category.name}</span>
                    <div style={[style={{...styles.accessTypeBadge, { backgroundColor: `${accessType.color}20` }]}>
                      <span style={{ fontSize: 10 }}>{accessType.icon}</span>
                      <span variant="caption" style={{ color: accessType.color, fontSize: 10 }}>
                        {accessType.label}
                      </span>
                    </div>
                  </div>
                  <span variant="caption" gold>{category.tagline}</span>
                </div>
                <div style={style={{...styles.expandIcon}>
                  <span style={[style={{...styles.expandArrow, isExpanded && style={{...styles.expandArrowUp]}>
                    ↓
                  </span>
                </div>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div style={style={{...styles.expandedContent}>
                  {/* Description */}
                  <span variant="body" color={colors.text.secondary} style={style={{...styles.categoryDescription}>
                    {category.description}
                  </span>

                  {/* Signal Weights */}
                  <div style={style={{...styles.signalSection}>
                    <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                      KEY SIGNALS
                    </span>
                    <div style={style={{...styles.signalList}>
                      {category.signals.map((signal, sIndex) => (
                        <div key={sIndex} style={style={{...styles.signalItem}>
                          <span style={style={{...styles.signalEmoji}>{signal.icon}</span>
                          <span variant="caption" color={colors.text.primary}>{signal.name}</span>
                          <div style={[
                            style={{...styles.weightBadge,
                            signal.weight === 'Primary' && style={{...styles.weightPrimary,
                            signal.weight === 'Secondary' && style={{...styles.weightSecondary,
                          ]}>
                            <span variant="caption" style={style={{...styles.weightText}>{signal.weight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div style={style={{...styles.requirementsSection}>
                    <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                      REQUIREMENTS
                    </span>
                    {category.requirements.map((req, rIndex) => (
                      <div key={rIndex} style={style={{...styles.requirementItem}>
                        <div style={[style={{...styles.requirementDot, { backgroundColor: category.color }]} />
                        <span variant="caption" color={colors.text.secondary}>{req}</span>
                      </div>
                    ))}
                  </div>

                  {/* Examples */}
                  <div style={style={{...styles.examplesSection}>
                    <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                      EXAMPLES
                    </span>
                    <div style={style={{...styles.examplesList}>
                      {category.examples.map((example, eIndex) => (
                        <div key={eIndex} style={style={{...styles.exampleChip}>
                          <span variant="caption" color={colors.text.secondary}>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Bottom Note */}
        <div style={style={{...styles.bottomNote}>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.bottomNoteText}>
            Access categories aren't mutually exclusive. You may qualify through multiple paths, and we'll recognize the strongest one.
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={() => navigate(-1)}
        >
          <span variant="bodyLarge" color="#0A0A0A">Check My Eligibility</span>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  backIcon: {
    fontSize: 18,
    color: colors.text.primary,
  },
  headerContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing[5],
    paddingBottom: 120,
  },

  // Philosophy Banner
  philosophyBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[5],
    gap: spacing[3],
  },
  philosophyIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  philosophyEmoji: {
    fontSize: 18,
    color: colors.gold.primary,
  },
  philosophyText: {
    flex: 1,
    lineHeight: 22,
  },

  // Category Card
  categoryCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderLeftWidth: 3,
    overflow: 'hidden',
  },
  categoryCardExpanded: {
    borderColor: '#3A3A3A',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryInfo: {
    flex: 1,
    gap: spacing[1],
  },
  categoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  accessTypeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  expandIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandArrow: {
    fontSize: 14,
    color: colors.text.tertiary,
  },
  expandArrowUp: {
    transform: [{ rotate: '180deg' }],
  },

  // Expanded Content
  expandedContent: {
    padding: spacing[4],
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    marginTop: spacing[1],
  },
  categoryDescription: {
    marginTop: spacing[3],
    marginBottom: spacing[4],
    lineHeight: 22,
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[2],
  },

  // Signals
  signalSection: {
    marginBottom: spacing[4],
  },
  signalList: {
    gap: spacing[2],
  },
  signalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  signalEmoji: {
    fontSize: 14,
  },
  weightBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    backgroundColor: '#2A2A2A',
  },
  weightPrimary: {
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
  },
  weightSecondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  weightText: {
    fontSize: 10,
    color: colors.text.tertiary,
  },

  // Requirements
  requirementsSection: {
    marginBottom: spacing[4],
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  requirementDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },

  // Examples
  examplesSection: {},
  examplesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  exampleChip: {
    backgroundColor: '#242424',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
  },

  // Bottom Note
  bottomNote: {
    marginTop: spacing[4],
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
  },
  bottomNoteText: {
    textAlign: 'center',
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
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default A4_AccessCategoriesScreen;
