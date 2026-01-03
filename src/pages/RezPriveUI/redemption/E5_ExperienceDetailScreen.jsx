/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E5 - Experience Detail Screen
 * Purpose: Experience story, what's included, tier requirements
 * Some experiences require approval - adds prestige
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface ExperienceDetail {
  title: string;
  category: string;
  story: string;
  included: string[];
  tierRequired: string;
  dateAvailability: string;
  rewardCost: string;
  requiresApproval: boolean;
}

interface E5_ExperienceDetailScreenProps {
  experience?: ExperienceDetail;
  userTier?: string;
  userBalance?: string;
  onRequest?: () => void;
  onUnlock?: () => void;
  onBack?: () => void;
}

export const E5_ExperienceDetailScreen: React.FC<E5_ExperienceDetailScreenProps> = ({
  experience = {
    title: "Chef's Table Experience",
    category: 'Signature Dining',
    story: "An intimate evening at the chef's table, featuring a bespoke tasting menu crafted exclusively for you. Experience culinary artistry at its finest with direct interaction with the chef throughout the evening.",
    included: [
      '7-course tasting menu',
      'Wine pairing',
      'Chef interaction',
      'Exclusive recipe card',
    ],
    tierRequired: 'Privé Signature',
    dateAvailability: 'Weekends, by reservation',
    rewardCost: '\u20B98,000',
    requiresApproval: true,
  },
  userTier = 'Privé Signature',
  userBalance = '\u20B912,450',
  onRequest,
  onUnlock,
  onBack,
}) => {
  const isEligible = true; // Would check tier logic

  return (
    <ScreenContainer padded={false}>
      {/* Hero Image Area */}
      <div style={style={{...styles.heroContainer}>
        <div style={style={{...styles.heroBackground} />
        <div style={style={{...styles.heroOverlay} />
        <div style={style={{...styles.heroContent}>
          <div style={style={{...styles.headerOverlay}>
            <PriveHeader showBack onBack={onBack} showBadge={false} />
          </div>
          <div style={style={{...styles.heroTextContent}>
            <span variant="caption" color={colors.text.tertiary}>
              {experience.category}
            </span>
            <span variant="h2" color={colors.text.primary}>
              {experience.title}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={style={{...styles.content}>
        {/* Experience Story */}
        <div style={style={{...styles.section}>
          <span variant="body" color={colors.text.secondary} style={style={{...styles.story}>
            {experience.story}
          </span>
        </div>

        <Divider variant="gold" spacing={spacing[6]} />

        {/* What's Included */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What's Included
          </span>
          <Card variant="default">
            {experience.included.map((item, index) => (
              <div key={index} style={style={{...styles.includedItem}>
                <div style={style={{...styles.checkIcon}>
                  <span variant="bodySmall" gold>
                    {'\u2713'}
                  </span>
                </div>
                <span variant="body" color={colors.text.primary}>
                  {item}
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Details */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Details
          </span>
          <Card variant="default">
            <div style={style={{...styles.detailRow}>
              <span variant="bodySmall" color={colors.text.secondary}>
                Tier Required
              </span>
              <span variant="body" gold>
                {experience.tierRequired}
              </span>
            </div>
            <div style={style={{...styles.detailRow}>
              <span variant="bodySmall" color={colors.text.secondary}>
                Availability
              </span>
              <span variant="body" color={colors.text.primary}>
                {experience.dateAvailability}
              </span>
            </div>
            <div style={style={{...styles.detailRow}>
              <span variant="bodySmall" color={colors.text.secondary}>
                Reward Cost
              </span>
              <span variant="body" gold>
                {experience.rewardCost}
              </span>
            </div>
          </Card>
        </div>

        {/* Approval Note */}
        {experience.requiresApproval && (
          <Card variant="gold" style={style={{...styles.approvalCard}>
            <div style={style={{...styles.approvalContent}>
              <div style={style={{...styles.approvalIcon}>
                <span variant="body" gold>
                  !
                </span>
              </div>
              <div style={style={{...styles.approvalText}>
                <span variant="bodySmall" color={colors.text.primary}>
                  This experience requires approval
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Adds to the prestige
                </span>
              </div>
            </div>
          </Card>
        )}

        {/* CTA */}
        <div style={style={{...styles.ctaContainer}>
          {experience.requiresApproval ? (
            <Button
              title="Request Booking"
              onClick={onRequest || (() => {})}
              variant="secondary"
            />
          ) : (
            <Button
              title="Unlock with Privé Rewards"
              onClick={onUnlock || (() => {})}
              variant="primary"
            />
          )}
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  heroContainer: {
    height: 250,
    position: 'relative',
  },
  heroBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.tertiary,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerOverlay: {
    paddingHorizontal: spacing[5],
  },
  heroTextContent: {
    padding: spacing[5],
    gap: spacing[1],
  },
  content: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[8],
  },
  section: {},
  sectionLabel: {
    marginBottom: spacing[3],
  },
  story: {
    lineHeight: 26,
  },
  includedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  approvalCard: {
    marginTop: spacing[4],
  },
  approvalContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  approvalIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  approvalText: {
    flex: 1,
    gap: spacing[1],
  },
  ctaContainer: {
    marginTop: spacing[6],
  },
};

export default E5_ExperienceDetailScreen;
