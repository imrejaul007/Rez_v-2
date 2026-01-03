/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D3 - Privé Visibility Boost Screen
 * Purpose: Explain why Privé content ranks higher
 * UI: Clean explanation with visibility indicators
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
  PriveBadge,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface VisibilityLocation {
  name: string;
  description: string;
  isActive: boolean;
}

interface D3_VisibilityBoostScreenProps {
  locations?: VisibilityLocation[];
  onBack?: () => void;
}

export const D3_VisibilityBoostScreen: React.FC<D3_VisibilityBoostScreenProps> = ({
  locations = [
    { name: 'Store Pages', description: 'Your content appears prominently on brand pages', isActive: true },
    { name: 'Explore Feed', description: 'Prioritized in discovery sections', isActive: true },
    { name: 'Recommendations', description: 'Featured in personalized recommendations', isActive: true },
    { name: 'Search Results', description: 'Higher ranking in search', isActive: false },
  ],
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Visibility Boost" showBack onBack={onBack} />

      {/* Explanation Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.badgeContainer}>
          <PriveBadge size="lg" />
        </div>
        <span variant="h3" color={colors.text.primary} center style={style={{...styles.headline}>
          Your Voice Carries Weight
        </span>
        <span variant="body" color={colors.text.secondary} center style={style={{...styles.subtext}>
          Privé content is prioritized for relevance, trust, and impact.
        </span>
      </div>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Where Content Appears */}
      <div style={style={{...styles.locationsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Where Your Content Appears
        </span>

        {locations.map((location, index) => (
          <Card
            key={index}
            variant={location.isActive ? 'gold' : 'default'}
            style={style={{...styles.locationCard}
          >
            <div style={style={{...styles.locationContent}>
              <div style={style={{...styles.locationIcon}>
                <Text
                  variant="body"
                  color={location.isActive ? colors.gold.primary : colors.text.tertiary}
                >
                  {location.isActive ? '\u2713' : '\u2022'}
                </span>
              </div>
              <div style={style={{...styles.locationText}>
                <Text
                  variant="body"
                  color={location.isActive ? colors.text.primary : colors.text.secondary}
                >
                  {location.name}
                </span>
                <span variant="bodySmall" color={colors.text.tertiary}>
                  {location.description}
                </span>
              </div>
              {location.isActive && (
                <div style={style={{...styles.activeBadge}>
                  <span variant="caption" gold>
                    Active
                  </span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Why This Matters */}
      <div style={style={{...styles.whySection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Why This Matters
        </span>
        <Card variant="default">
          <div style={style={{...styles.benefitItem}>
            <div style={style={{...styles.benefitIcon}>
              <span variant="bodySmall" gold>
                {'\u2191'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Your reviews are seen first by potential customers
            </span>
          </div>
          <div style={style={{...styles.benefitItem}>
            <div style={style={{...styles.benefitIcon}>
              <span variant="bodySmall" gold>
                {'\u2605'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Brands value your authentic perspective more
            </span>
          </div>
          <div style={style={{...styles.benefitItem}>
            <div style={style={{...styles.benefitIcon}>
              <span variant="bodySmall" gold>
                {'\u2713'}
              </span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              Higher visibility leads to higher reward potential
            </span>
          </div>
        </Card>
      </div>

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        Visibility is earned through consistent quality engagement
      </span>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    alignItems: 'center',
    marginTop: spacing[6],
  },
  badgeContainer: {
    marginBottom: spacing[4],
  },
  headline: {
    marginBottom: spacing[2],
  },
  subtext: {
    paddingHorizontal: spacing[4],
  },
  locationsSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  locationCard: {
    marginBottom: spacing[3],
  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  locationText: {
    flex: 1,
    gap: spacing[1],
  },
  activeBadge: {
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  whySection: {
    marginTop: spacing[2],
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  benefitIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  note: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[4],
  },
};

export default D3_VisibilityBoostScreen;
