/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C3 - Brand Invitation Screen (Personal Invite)
 * Purpose: Feel like a direct brand invitation, not an ad
 * UI: Invitation-style card, brand message tone, minimal
 */

import React, { useState } from 'react';
// React Native imports removed
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveBadge,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface InvitationData {
  id: string;
  brandName: string;
  brandLogo?: string;
  message: string;
  rewardRange: string;
  actionExpected: string;
  duration: string;
  campaignId?: string;
}

interface C3_BrandInvitationScreenProps {
  invitation?: InvitationData;
  onAccept?: () => void;
  onDecline?: () => void;
}

const defaultInvitation: InvitationData = {
  id: 'inv1',
  brandName: 'Luxury Café',
  message: "We'd love you to experience our new seasonal menu and share your perspective with your community.",
  rewardRange: '20-45%',
  actionExpected: 'Visit + Share Experience',
  duration: '2 weeks',
  campaignId: 'camp1',
};

export const C3_BrandInvitationScreen: React.FC<C3_BrandInvitationScreenProps> = ({
  invitation = defaultInvitation,
  onAccept,
  onDecline,
}) => {
  const navigate = useNavigate();
  const [isAccepting, setIsAccepting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (onAccept) {
      onAccept();
      return;
    }

    setIsAccepting(true);

    // Simulate API call
    setTimeout(() => {
      setIsAccepting(false);
      setIsAccepted(true);

      // Show success and navigate to offer details
      setTimeout(() => {
        navigate('/prive/C2_OfferDetail', {
          offerId: invitation.campaignId,
          brandName: invitation.brandName,
        };
      }, 1500);
    }, 1000);
  };

  const handleDecline = () => {
    if (onDecline) {
      onDecline();
      return;
    }

    Alert.alert(
      'Decline Invitation',
      `Are you sure you want to decline the invitation from ${invitation.brandName}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Decline',
          style: 'destructive',
          onPress: () => {
            // Navigate back after declining
            navigate(-1);
          },
        },
      ]
    );
  };

  if (isAccepted) {
    return (
      <ScreenContainer scrollable={false}>
        <div style={style={{...styles.successContainer}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.2)', 'transparent']}
            style={style={{...styles.successGradient}
          />
          <div style={style={{...styles.successIcon}>
            <span style={style={{...styles.successIconText}>✓</span>
          </div>
          <span variant="h2" gold center style={style={{...styles.successTitle}>
            Invitation Accepted!
          </span>
          <span variant="body" color={colors.text.secondary} center>
            You've joined the {invitation.brandName} campaign
          </span>
          <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.successNote}>
            Redirecting to campaign details...
          </span>
        </div>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer scrollable={false}>
      <div style={style={{...styles.container}>
        {/* Header with Badge */}
        <div style={style={{...styles.header}>
          <div
            style={style={{...styles.closeBtn}
            onClick={() => navigate(-1)}
          >
            <span variant="body" color={colors.text.secondary}>✕</span>
          </div>
          <div style={style={{...styles.headerCenter}>
            <PriveBadge size="sm" />
            <span variant="caption" color={colors.text.tertiary}>
              Personal Invitation
            </span>
          </div>
          <div style={{ width: 40 }} />
        </div>

        {/* Invitation Card */}
        <div style={style={{...styles.invitationContainer}>
          {/* Decorative Elements */}
          <div style={style={{...styles.decorTop} />
          <div style={style={{...styles.decorBottom} />

          <Card variant="goldGlow" style={style={{...styles.invitationCard}>
            {/* Brand Logo */}
            <div style={style={{...styles.brandSection}>
              {invitation.brandLogo ? (
                <img src={{ uri: invitation.brandLogo }} style={style={{...styles.brandLogo} />
              ) : (
                <div style={style={{...styles.brandLogoPlaceholder}>
                  <span variant="h3" color={colors.text.secondary}>
                    {invitation.brandName.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Headline */}
            <span variant="h3" color={colors.text.primary} center style={style={{...styles.headline}>
              You've been invited by
            </span>
            <span variant="h2" gold center style={style={{...styles.brandName}>
              {invitation.brandName}
            </span>

            {/* Message */}
            <span variant="body" color={colors.text.secondary} center style={style={{...styles.message}>
              "{invitation.message}"
            </span>

            {/* Campaign Snapshot */}
            <div style={style={{...styles.snapshotContainer}>
              <div style={style={{...styles.snapshotItem}>
                <span variant="caption" color={colors.text.tertiary}>
                  Reward Range
                </span>
                <span variant="bodyLarge" gold>
                  {invitation.rewardRange}
                </span>
              </div>
              <div style={style={{...styles.snapshotDivider} />
              <div style={style={{...styles.snapshotItem}>
                <span variant="caption" color={colors.text.tertiary}>
                  Action
                </span>
                <span variant="body" color={colors.text.primary} center>
                  {invitation.actionExpected}
                </span>
              </div>
              <div style={style={{...styles.snapshotDivider} />
              <div style={style={{...styles.snapshotItem}>
                <span variant="caption" color={colors.text.tertiary}>
                  Duration
                </span>
                <span variant="bodyLarge" color={colors.text.primary}>
                  {invitation.duration}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* What happens next */}
        <div style={style={{...styles.nextSteps}>
          <span variant="caption" color={colors.text.tertiary} center>
            When you accept, you'll get exclusive access to this campaign and can start earning rewards.
          </span>
        </div>

        {/* CTAs */}
        <div style={style={{...styles.ctaContainer}>
          <Button
            title={isAccepting ? "Accepting..." : "Accept Invitation"}
            onClick={handleAccept}
            variant="primary"
            disabled={isAccepting}
          />
          <Button
            title="Decline"
            onClick={handleDecline}
            variant="ghost"
            style={style={{...styles.declineButton}
          />
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[4],
    paddingHorizontal: spacing[4],
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  invitationContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing[4],
    position: 'relative',
  },
  decorTop: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.gold.glow,
    opacity: 0.3,
  },
  decorBottom: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.gold.glow,
    opacity: 0.2,
  },
  invitationCard: {
    paddingVertical: spacing[8],
    paddingHorizontal: spacing[5],
  },
  brandSection: {
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  brandLogo: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.xl,
  },
  brandLogoPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.xl,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    marginBottom: spacing[1],
  },
  brandName: {
    marginBottom: spacing[4],
  },
  message: {
    lineHeight: 24,
    marginBottom: spacing[6],
    paddingHorizontal: spacing[2],
    fontStyle: 'italic',
  },
  snapshotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border.goldMuted,
  },
  snapshotItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  snapshotDivider: {
    width: 1,
    backgroundColor: colors.border.secondary,
  },
  nextSteps: {
    paddingHorizontal: spacing[6],
    paddingBottom: spacing[4],
  },
  ctaContainer: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[6],
  },
  declineButton: {
    marginTop: spacing[2],
  },
  // Success state
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[5],
  },
  successGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  successIconText: {
    fontSize: 40,
    color: '#4CAF50',
  },
  successTitle: {
    marginBottom: spacing[3],
  },
  successNote: {
    marginTop: spacing[4],
  },
};

export default C3_BrandInvitationScreen;
