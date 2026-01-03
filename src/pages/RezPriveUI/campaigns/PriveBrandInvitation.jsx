/**
 * Brand Invitation Screen (Personal Invite)
 * Purpose: Feel like a direct brand invitation, not an ad
 * UI: Invitation-style card, brand message tone, minimal
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';

const { colors, spacing, borderRadius } = priveTheme;

const PriveBrandInvitation = () => {
  const navigate = useNavigate();
  const { invitationId } = useParams();
  const [isAccepting, setIsAccepting] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  // Mock data - in production, fetch from API based on invitationId
  const invitation = {
    id: invitationId || 'inv1',
    brandName: 'Luxury Café',
    brandInitial: 'L',
    message: "We'd love you to experience our new seasonal menu and share your perspective with your community.",
    rewardRange: '20-45%',
    actionExpected: 'Visit + Share Experience',
    duration: '2 weeks',
    campaignId: 'camp1',
  };

  const handleAccept = () => {
    setIsAccepting(true);

    // Simulate API call
    setTimeout(() => {
      setIsAccepting(false);
      setIsAccepted(true);

      // Show success and navigate to offer details
      setTimeout(() => {
        navigate(`/prive/offer/${invitation.campaignId}`);
      }, 1500);
    }, 1000);
  };

  const handleDecline = () => {
    if (window.confirm(`Are you sure you want to decline the invitation from ${invitation.brandName}?`)) {
      navigate(-1);
    }
  };

  if (isAccepted) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: colors.background.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing[5],
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.2), transparent)',
        }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '40px',
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: `0 auto ${spacing[6]}px`,
          }}>
            <span style={{ fontSize: '40px', color: '#4CAF50' }}>✓</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[3] }}>
            Invitation Accepted!
          </h2>
          <p style={{ fontSize: '15px', color: colors.text.secondary, marginBottom: spacing[4] }}>
            You've joined the {invitation.brandName} campaign
          </p>
          <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
            Redirecting to campaign details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: colors.background.primary,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${spacing[4]}px ${spacing[4]}px`,
      }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#181818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '18px', color: colors.text.secondary }}>✕</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          <div style={{
            padding: `${spacing[1]}px ${spacing[3]}px`,
            backgroundColor: 'rgba(201, 169, 98, 0.15)',
            borderRadius: borderRadius.full,
            border: '1px solid rgba(201, 169, 98, 0.3)',
          }}>
            <span style={{ fontSize: '11px', color: colors.gold.primary, letterSpacing: '1px' }}>PRIVÉ</span>
          </div>
          <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Personal Invitation</span>
        </div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Invitation Card */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        padding: spacing[4],
        position: 'relative',
      }}>
        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'radial-gradient(circle, rgba(201, 169, 98, 0.3), transparent)',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '40px',
          background: 'radial-gradient(circle, rgba(201, 169, 98, 0.3), transparent)',
          opacity: 0.2,
        }} />

        <div style={{
          background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.08), rgba(201, 169, 98, 0.02))',
          borderRadius: borderRadius.xl,
          padding: `${spacing[8]}px ${spacing[5]}px`,
          border: '1px solid rgba(201, 169, 98, 0.3)',
          boxShadow: '0 0 40px rgba(201, 169, 98, 0.15)',
          maxWidth: '500px',
          width: '100%',
          margin: '0 auto',
        }}>
          {/* Brand Logo */}
          <div style={{ textAlign: 'center', marginBottom: spacing[4] }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: borderRadius.xl,
              backgroundColor: 'rgba(201, 169, 98, 0.1)',
              border: '1px solid rgba(201, 169, 98, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              <span style={{ fontSize: '28px', color: colors.gold.primary }}>{invitation.brandInitial}</span>
            </div>
          </div>

          {/* Headline */}
          <h3 style={{
            fontSize: '18px',
            fontWeight: '400',
            color: colors.text.primary,
            textAlign: 'center',
            marginBottom: spacing[1],
          }}>
            You've been invited by
          </h3>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '300',
            color: colors.gold.primary,
            textAlign: 'center',
            marginBottom: spacing[4],
          }}>
            {invitation.brandName}
          </h2>

          {/* Message */}
          <p style={{
            fontSize: '15px',
            color: colors.text.secondary,
            textAlign: 'center',
            lineHeight: '24px',
            marginBottom: spacing[6],
            padding: `0 ${spacing[2]}px`,
            fontStyle: 'italic',
          }}>
            "{invitation.message}"
          </p>

          {/* Campaign Snapshot */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: spacing[4],
            borderTop: '1px solid rgba(201, 169, 98, 0.2)',
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                Reward Range
              </p>
              <p style={{ fontSize: '17px', fontWeight: '500', color: colors.gold.primary }}>
                {invitation.rewardRange}
              </p>
            </div>
            <div style={{ width: '1px', backgroundColor: colors.border.secondary }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                Action
              </p>
              <p style={{ fontSize: '15px', color: colors.text.primary }}>
                {invitation.actionExpected}
              </p>
            </div>
            <div style={{ width: '1px', backgroundColor: colors.border.secondary }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
                Duration
              </p>
              <p style={{ fontSize: '17px', fontWeight: '500', color: colors.text.primary }}>
                {invitation.duration}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What happens next */}
      <div style={{ padding: `0 ${spacing[6]}px ${spacing[4]}px`, textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: colors.text.tertiary, lineHeight: '18px' }}>
          When you accept, you'll get exclusive access to this campaign and can start earning rewards.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ padding: `0 ${spacing[5]}px ${spacing[6]}px` }}>
        <button
          onClick={handleAccept}
          disabled={isAccepting}
          style={{
            width: '100%',
            padding: `${spacing[4]}px`,
            backgroundColor: colors.gold.primary,
            color: colors.background.primary,
            fontSize: '16px',
            fontWeight: '500',
            borderRadius: borderRadius.lg,
            border: 'none',
            cursor: isAccepting ? 'not-allowed' : 'pointer',
            opacity: isAccepting ? 0.7 : 1,
            marginBottom: spacing[2],
          }}
        >
          {isAccepting ? "Accepting..." : "Accept Invitation"}
        </button>
        <button
          onClick={handleDecline}
          style={{
            width: '100%',
            padding: `${spacing[3]}px`,
            backgroundColor: 'transparent',
            color: colors.text.secondary,
            fontSize: '15px',
            fontWeight: '400',
            borderRadius: borderRadius.lg,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default PriveBrandInvitation;
