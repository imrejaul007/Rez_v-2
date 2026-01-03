/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A6 - Why Privé Screen
 * Explains the philosophy and principles behind Privé
 * "The story we tell ourselves about who belongs"
 */

import React from 'react';
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

interface Principle {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const principles: Principle[] = [
  {
    icon: '◈',
    title: 'Earned, Not Downloaded',
    description: 'Privé isn\'t something you sign up for. It\'s something you earn through demonstrated value. We recognize your contributions, not just your interest.',
    color: colors.gold.primary,
  },
  {
    icon: '📊',
    title: 'Signal-Based Selection',
    description: 'We look at what you do, not what you say. Your engagement, spending patterns, influence, trustworthiness, and network value tell us who you are.',
    color: '#4CAF50',
  },
  {
    icon: '🔄',
    title: 'Dynamic Access',
    description: 'Access isn\'t static. It can be granted, paused, reviewed, or revoked based on ongoing behavior. Stay valuable, stay Privé.',
    color: '#2196F3',
  },
  {
    icon: '🎯',
    title: 'Multiple Paths',
    description: 'There\'s no single way to Privé. Whether you\'re a power user, creator, premium consumer, or category expert — your unique value matters.',
    color: '#E91E63',
  },
  {
    icon: '⚖️',
    title: 'Fair but Not Equal',
    description: 'Everyone has an opportunity, but not everyone will qualify. This isn\'t exclusion for its own sake — it\'s recognition of real value.',
    color: '#FF9800',
  },
  {
    icon: '🤝',
    title: 'Mutual Value',
    description: 'Privé members get more because they give more. Brands offer exclusives because Privé members are worth the investment.',
    color: '#9C27B0',
  },
];

interface Comparison {
  wrong: string;
  right: string;
}

const comparisons: Comparison[] = [
  { wrong: 'Pay to join', right: 'Earn to belong' },
  { wrong: 'Vanity metrics', right: 'Real value signals' },
  { wrong: 'One-time unlock', right: 'Continuous qualification' },
  { wrong: 'Exclusive by design', right: 'Selective by merit' },
  { wrong: 'Gaming the system', right: 'Being genuinely valuable' },
];

const whoWontGetIn = [
  'Users who only chase discounts without loyalty',
  'Fake accounts or fraudulent activity',
  'Low-trust users with high dispute rates',
  'Those who game referrals without genuine engagement',
  'Inactive users hoping for automatic access',
];

const whyThisMatters = [
  {
    forUser: 'For You',
    benefit: 'Access to exclusive offers, higher rewards, and brand partnerships that wouldn\'t exist in an open system.',
  },
  {
    forUser: 'For Brands',
    benefit: 'Confidence that their exclusives reach valuable, engaged customers who appreciate quality.',
  },
  {
    forUser: 'For The Ecosystem',
    benefit: 'A virtuous cycle where value begets value, and quality rises to the top.',
  },
];

export const A6_WhyPriveScreen: React.FC = () => {
  const navigate = useNavigate();

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
          <span variant="h2" color={colors.text.primary}>Why Privé?</span>
          <span variant="caption" color={colors.text.tertiary}>
            The philosophy behind exclusivity
          </span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Hero Quote */}
        <div style={style={{...styles.heroSection}>
          <div style={style={{...styles.heroGlow} />
          <div style={style={{...styles.heroBadge}>
            <span style={style={{...styles.heroBadgeIcon}>◈</span>
          </div>
          <span variant="h1" color={colors.text.primary} style={style={{...styles.heroTitle}>
            Not Everyone Gets In.
          </span>
          <span variant="h3" gold style={style={{...styles.heroSubtitle}>
            That's The Point.
          </span>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.heroDescription}>
            Privé exists to recognize and reward users who create genuine value for the ecosystem. It's a promise: if you contribute, you'll be rewarded in kind.
          </span>
        </div>

        {/* Core Principles */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            CORE PRINCIPLES
          </span>
          {principles.map((principle, index) => (
            <div key={index} style={style={{...styles.principleCard}>
              <div style={[style={{...styles.principleIcon, { backgroundColor: `${principle.color}20` }]}>
                <span style={[style={{...styles.principleEmoji, { color: principle.color }]}>
                  {principle.icon}
                </span>
              </div>
              <div style={style={{...styles.principleContent}>
                <span variant="bodyLarge" color={colors.text.primary}>{principle.title}</span>
                <span variant="body" color={colors.text.secondary} style={style={{...styles.principleDescription}>
                  {principle.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* How We're Different */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            NOT THIS, BUT THAT
          </span>
          <div style={style={{...styles.comparisonCard}>
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.comparisonRow,
                  index < comparisons.length - 1 && style={{...styles.comparisonRowBorder,
                ]}
              >
                <div style={style={{...styles.comparisonWrong}>
                  <span style={style={{...styles.comparisonX}>✕</span>
                  <span variant="body" color={colors.text.tertiary}>{comparison.wrong}</span>
                </div>
                <div style={style={{...styles.comparisonArrow}>
                  <span style={style={{...styles.arrowIcon}>→</span>
                </div>
                <div style={style={{...styles.comparisonRight}>
                  <span style={style={{...styles.comparisonCheck}>✓</span>
                  <span variant="body" color="#4CAF50">{comparison.right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Won't Get In */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHO WON'T GET IN
          </span>
          <div style={style={{...styles.exclusionCard}>
            <div style={style={{...styles.exclusionHeader}>
              <span style={style={{...styles.exclusionIcon}>🚫</span>
              <span variant="body" color="#F44336">Be honest about who we're not for</span>
            </div>
            {whoWontGetIn.map((item, index) => (
              <div key={index} style={style={{...styles.exclusionItem}>
                <div style={style={{...styles.exclusionDot} />
                <span variant="body" color={colors.text.secondary}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            WHY THIS MATTERS
          </span>
          <div style={style={{...styles.benefitsGrid}>
            {whyThisMatters.map((item, index) => (
              <div key={index} style={style={{...styles.benefitCard}>
                <span variant="label" gold style={style={{...styles.benefitLabel}>{item.forUser}</span>
                <span variant="body" color={colors.text.secondary}>{item.benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Promise */}
        <div style={style={{...styles.promiseCard}>
          <span variant="h3" gold style={style={{...styles.promiseTitle}>Our Promise</span>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.promiseText}>
            If you're reading this, you either have access or you're curious about earning it. Either way, know this: Privé rewards genuine value. Contribute to the ecosystem — through engagement, spending, influence, or trust — and the doors will open.
          </span>
          <div style={style={{...styles.promiseDivider} />
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.promiseQuote}>
            "Exclusivity isn't about keeping people out. It's about recognizing those who create value within."
          </span>
        </div>

        {/* Access Types Summary */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ACCESS IS A SPECTRUM
          </span>
          <div style={style={{...styles.accessSpectrum}>
            {[
              { type: 'Trial', icon: '✨', desc: 'Short window to prove yourself', color: '#9C27B0' },
              { type: 'Brand-specific', icon: '🎯', desc: 'Access from brand invitation', color: '#2196F3' },
              { type: 'Time-bound', icon: '⏱', desc: 'Renewable based on activity', color: '#FFC107' },
              { type: 'Permanent', icon: '∞', desc: 'Earned through sustained value', color: '#4CAF50' },
            ].map((item, index) => (
              <div key={index} style={style={{...styles.spectrumItem}>
                <div style={[style={{...styles.spectrumIcon, { backgroundColor: `${item.color}20` }]}>
                  <span style={{ fontSize: 16 }}>{item.icon}</span>
                </div>
                <div style={style={{...styles.spectrumInfo}>
                  <span variant="body" style={{ color: item.color }}>{item.type}</span>
                  <span variant="caption" color={colors.text.tertiary}>{item.desc}</span>
                </div>
                {index < 3 && <div style={[style={{...styles.spectrumLine, { backgroundColor: item.color }]} />}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Quote */}
        <div style={style={{...styles.finalQuote}>
          <span style={style={{...styles.finalQuoteIcon}>◈</span>
          <span variant="bodyLarge" gold style={style={{...styles.finalQuoteText}>
            Privé is earned, not downloaded.
          </span>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={() => navigate('/prive/A1_Eligibility')}
        >
          <span variant="bodyLarge" color="#0A0A0A">Check My Eligibility</span>
        </div>
        <div
          style={style={{...styles.secondaryCta}
          onClick={() => navigate('/prive/AccessCategories')}
        >
          <span variant="body" color={colors.gold.primary}>View Access Paths</span>
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
    paddingBottom: 160,
  },

  // Hero Section
  heroSection: {
    alignItems: 'center',
    paddingTop: spacing[8],
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[6],
    position: 'relative',
  },
  heroGlow: {
    position: 'absolute',
    top: 60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
  },
  heroBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[5],
    zIndex: 1,
  },
  heroBadgeIcon: {
    fontSize: 28,
    color: colors.gold.primary,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: spacing[1],
  },
  heroSubtitle: {
    marginBottom: spacing[4],
  },
  heroDescription: {
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: spacing[2],
  },

  // Section
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },

  // Principles
  principleCard: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    gap: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  principleIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  principleEmoji: {
    fontSize: 22,
  },
  principleContent: {
    flex: 1,
    gap: spacing[2],
  },
  principleDescription: {
    lineHeight: 22,
  },

  // Comparisons
  comparisonCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    overflow: 'hidden',
  },
  comparisonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
  },
  comparisonRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  comparisonWrong: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  comparisonX: {
    color: '#F44336',
    fontSize: 12,
  },
  comparisonArrow: {
    paddingHorizontal: spacing[3],
  },
  arrowIcon: {
    color: colors.text.tertiary,
    fontSize: 14,
  },
  comparisonRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  comparisonCheck: {
    color: '#4CAF50',
    fontSize: 12,
  },

  // Exclusions
  exclusionCard: {
    backgroundColor: 'rgba(244, 67, 54, 0.05)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(244, 67, 54, 0.2)',
  },
  exclusionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[3],
  },
  exclusionIcon: {
    fontSize: 16,
  },
  exclusionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  exclusionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F44336',
    marginTop: 6,
  },

  // Benefits
  benefitsGrid: {
    gap: spacing[3],
  },
  benefitCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[2],
  },
  benefitLabel: {
    letterSpacing: 0.5,
  },

  // Promise
  promiseCard: {
    marginHorizontal: spacing[5],
    marginBottom: spacing[5],
    padding: spacing[5],
    backgroundColor: 'rgba(201, 169, 98, 0.08)',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
  },
  promiseTitle: {
    marginBottom: spacing[3],
  },
  promiseText: {
    textAlign: 'center',
    lineHeight: 24,
  },
  promiseDivider: {
    width: 40,
    height: 1,
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
    marginVertical: spacing[4],
  },
  promiseQuote: {
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },

  // Access Spectrum
  accessSpectrum: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  spectrumItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3],
    position: 'relative',
  },
  spectrumIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  spectrumInfo: {
    flex: 1,
    gap: spacing[1],
  },
  spectrumLine: {
    position: 'absolute',
    left: 19,
    top: 52,
    width: 2,
    height: 24,
    opacity: 0.3,
  },

  // Final Quote
  finalQuote: {
    alignItems: 'center',
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[5],
  },
  finalQuoteIcon: {
    fontSize: 32,
    color: colors.gold.primary,
    marginBottom: spacing[3],
  },
  finalQuoteText: {
    textAlign: 'center',
    fontStyle: 'italic',
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
    alignItems: 'center',
  },
  ctaButton: {
    width: '100%',
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  secondaryCta: {
    paddingVertical: spacing[2],
  },
};

export default A6_WhyPriveScreen;
