/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * D4 - Privé Recommended Label (Authority Feature)
 * Purpose: Give Privé users authority, not popularity
 * UI: Shows how Privé badge appears on reviews
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

interface D4_RecommendedLabelScreenProps {
  onBack?: () => void;
}

export const D4_RecommendedLabelScreen: React.FC<D4_RecommendedLabelScreenProps> = ({
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Privé Recommended" showBack onBack={onBack} />

      {/* Explanation */}
      <div style={style={{...styles.header}>
        <span variant="body" color={colors.text.secondary} style={style={{...styles.headerText}>
          Your reviews carry the Privé Recommended label, signaling trust and authority to users and brands.
        </span>
      </div>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Preview Section */}
      <div style={style={{...styles.previewSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          How It Appears
        </span>

        {/* Normal Review */}
        <Card variant="default" style={style={{...styles.reviewCard}>
          <div style={style={{...styles.reviewHeader}>
            <div style={style={{...styles.avatar}>
              <span variant="bodySmall" color={colors.text.secondary}>
                J
              </span>
            </div>
            <div style={style={{...styles.reviewerInfo}>
              <span variant="body" color={colors.text.primary}>
                John Doe
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Regular user
              </span>
            </div>
          </div>
          <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.reviewText}>
            "Great experience, would recommend..."
          </span>
        </Card>

        <div style={style={{...styles.vsContainer}>
          <div style={style={{...styles.vsLine} />
          <span variant="caption" color={colors.text.tertiary}>
            vs
          </span>
          <div style={style={{...styles.vsLine} />
        </div>

        {/* Privé Review */}
        <Card variant="goldGlow" style={style={{...styles.reviewCard}>
          <div style={style={{...styles.priveLabel}>
            <PriveBadge size="sm" />
            <span variant="caption" gold>
              Privé Recommended
            </span>
          </div>
          <div style={style={{...styles.reviewHeader}>
            <div style={[style={{...styles.avatar, style={{...styles.priveAvatar]}>
              <span variant="bodySmall" color={colors.gold.primary}>
                R
              </span>
            </div>
            <div style={style={{...styles.reviewerInfo}>
              <span variant="body" color={colors.text.primary}>
                Rejaul Karim
              </span>
              <span variant="caption" gold>
                Privé Signature
              </span>
            </div>
          </div>
          <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.reviewText}>
            "An exceptional dining experience with attention to detail..."
          </span>
          <div style={style={{...styles.goldUnderline} />
        </Card>
      </div>

      <Divider variant="light" spacing={spacing[6]} />

      {/* Tooltip */}
      <div style={style={{...styles.tooltipSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          What Users See
        </span>
        <Card variant="default">
          <div style={style={{...styles.tooltipContent}>
            <div style={style={{...styles.tooltipIcon}>
              <span variant="body" gold>
                ?
              </span>
            </div>
            <div style={style={{...styles.tooltipText}>
              <span variant="body" color={colors.text.primary}>
                "Trusted perspective from a Privé member"
              </span>
              <span variant="bodySmall" color={colors.text.tertiary} style={style={{...styles.tooltipSubtext}>
                Displayed when users tap the Privé badge
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Benefits */}
      <div style={style={{...styles.benefitsSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Your Authority Benefits
        </span>
        <div style={style={{...styles.benefitsList}>
          <div style={style={{...styles.benefitItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="bodySmall" color={colors.text.secondary}>
              Positioned above regular reviews
            </span>
          </div>
          <div style={style={{...styles.benefitItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="bodySmall" color={colors.text.secondary}>
              Subtle gold underline for distinction
            </span>
          </div>
          <div style={style={{...styles.benefitItem}>
            <span variant="body" gold>
              {'\u2713'}
            </span>
            <span variant="bodySmall" color={colors.text.secondary}>
              Higher trust from potential customers
            </span>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    marginTop: spacing[4],
  },
  headerText: {
    lineHeight: 24,
  },
  previewSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  reviewCard: {
    marginBottom: spacing[2],
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  priveAvatar: {
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  reviewerInfo: {
    gap: spacing[1],
  },
  reviewText: {
    fontStyle: 'italic',
  },
  priveLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[3],
  },
  goldUnderline: {
    height: 2,
    backgroundColor: colors.gold.muted,
    marginTop: spacing[3],
    borderRadius: 1,
    opacity: 0.5,
  },
  vsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing[3],
    gap: spacing[3],
  },
  vsLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border.secondary,
  },
  tooltipSection: {
    marginTop: spacing[2],
  },
  tooltipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tooltipIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  tooltipText: {
    flex: 1,
  },
  tooltipSubtext: {
    marginTop: spacing[1],
  },
  benefitsSection: {
    marginTop: spacing[6],
  },
  benefitsList: {
    gap: spacing[3],
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
};

export default D4_RecommendedLabelScreen;
