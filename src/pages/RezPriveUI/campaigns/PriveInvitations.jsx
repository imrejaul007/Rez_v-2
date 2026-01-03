/**
 * Privé Invitations & Referrals
 * Purpose: Show all invitations from merchants and referral tracking
 * Includes: Pending invitations, accepted campaigns, referral data
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const mockInvitations = [
  {
    id: 'inv1',
    brandName: 'Luxury Café',
    campaignTitle: 'Weekend Brunch Experience',
    rewardRange: '20-45%',
    actionRequired: 'Visit + Share Experience',
    duration: '2 weeks',
    expiresIn: '5 days',
    status: 'pending',
    receivedDate: 'Today',
  },
  {
    id: 'inv2',
    brandName: 'Maison de Luxe',
    campaignTitle: 'New Collection Launch',
    rewardRange: '25-50%',
    actionRequired: 'Purchase + Review',
    duration: '1 month',
    expiresIn: '12 days',
    status: 'pending',
    receivedDate: 'Yesterday',
  },
  {
    id: 'inv3',
    brandName: 'The Grand Pavilion',
    campaignTitle: 'Holiday Special Menu',
    rewardRange: '30-40%',
    actionRequired: 'Dine + Share Story',
    duration: '3 weeks',
    expiresIn: '8 days',
    status: 'pending',
    receivedDate: '2 days ago',
  },
  {
    id: 'inv4',
    brandName: 'Artisan Watch Co',
    campaignTitle: 'Limited Edition Preview',
    rewardRange: '35-55%',
    actionRequired: 'Store Visit + Content',
    duration: '2 weeks',
    expiresIn: 'Accepted',
    status: 'accepted',
    receivedDate: '5 days ago',
  },
  {
    id: 'inv5',
    brandName: 'Premium Spa',
    campaignTitle: 'Wellness Week',
    rewardRange: '15-30%',
    actionRequired: 'Treatment + Review',
    duration: '1 week',
    expiresIn: 'Expired',
    status: 'expired',
    receivedDate: '2 weeks ago',
  },
];

const mockReferralData = {
  code: 'PRIVE-REJAUL2025',
  totalInvited: 12,
  joined: 8,
  pending: 4,
  totalEarned: 4000,
  pendingEarnings: 1000,
  referrals: [
    { id: 'r1', name: 'Amit Sharma', status: 'joined', joinedDate: 'Nov 2025', earnedCoins: 500 },
    { id: 'r2', name: 'Priya Patel', status: 'joined', joinedDate: 'Dec 2025', earnedCoins: 500 },
    { id: 'r3', name: 'Vikram Singh', status: 'joined', joinedDate: 'Dec 2025', earnedCoins: 500 },
    { id: 'r4', name: 'Neha Gupta', status: 'pending' },
    { id: 'r5', name: 'Raj Malhotra', status: 'joined', joinedDate: 'Oct 2025', earnedCoins: 500 },
  ],
};

const PriveInvitations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('invitations');

  const pendingInvitations = mockInvitations.filter(i => i.status === 'pending');
  const acceptedInvitations = mockInvitations.filter(i => i.status === 'accepted');
  const expiredInvitations = mockInvitations.filter(i => i.status === 'expired' || i.status === 'declined');

  const handleShareCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join ReZ Privé',
        text: `Join ReZ Privé with my invite code: ${mockReferralData.code}\n\nGet exclusive access to luxury rewards and earn coins on your purchases!`,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(mockReferralData.code);
      alert('Code copied to clipboard!');
    }
  };

  const handleViewInvitation = (invitation) => {
    navigate(`/prive/offer/${invitation.id}`);
  };

  const renderInvitationsTab = () => (
    <div>
      {pendingInvitations.length > 0 && (
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[4] }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>PENDING INVITATIONS</div>
            <div style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.full }}>
              <div style={{ fontSize: '11px', color: colors.gold.primary }}>{pendingInvitations.length}</div>
            </div>
          </div>

          {pendingInvitations.map((invitation) => (
            <div
              key={invitation.id}
              onClick={() => handleViewInvitation(invitation)}
              style={{
                backgroundColor: colors.background.card,
                borderRadius: borderRadius.xl,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: `1px solid ${colors.border.primary}`,
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing[4] }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(201, 169, 98, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: spacing[3],
                  border: `1px solid rgba(201, 169, 98, 0.3)`,
                }}>
                  <div style={{ fontSize: '17px', color: colors.gold.primary }}>{invitation.brandName.charAt(0)}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{invitation.brandName}</div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: spacing[1] }}>{invitation.campaignTitle}</div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.15)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                  <div style={{ fontSize: '11px', color: '#FFC107' }}>{invitation.expiresIn}</div>
                </div>
              </div>

              <div style={{ display: 'flex', backgroundColor: colors.background.primary, borderRadius: borderRadius.lg, padding: spacing[3], marginBottom: spacing[4] }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Reward</div>
                  <div style={{ fontSize: '15px', color: colors.gold.primary, marginTop: spacing[1] }}>{invitation.rewardRange}</div>
                </div>
                <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Action</div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: spacing[1] }}>{invitation.actionRequired}</div>
                </div>
                <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Duration</div>
                  <div style={{ fontSize: '11px', color: colors.text.secondary, marginTop: spacing[1] }}>{invitation.duration}</div>
                </div>
              </div>

              <div style={{ backgroundColor: colors.gold.primary, padding: `${spacing[3]} 0`, borderRadius: borderRadius.lg, textAlign: 'center', color: '#0A0A0A', fontSize: '15px' }}>
                View & Accept
              </div>
            </div>
          ))}
        </div>
      )}

      {acceptedInvitations.length > 0 && (
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>ACTIVE CAMPAIGNS</div>

          {acceptedInvitations.map((invitation) => (
            <div
              key={invitation.id}
              onClick={() => navigate(`/prive/offer/${invitation.id}`)}
              style={{
                backgroundColor: colors.background.card,
                borderRadius: borderRadius.xl,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: `1px solid rgba(76, 175, 80, 0.3)`,
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing[3] }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(76, 175, 80, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: spacing[3],
                  border: `1px solid rgba(76, 175, 80, 0.3)`,
                }}>
                  <div style={{ fontSize: '17px', color: '#4CAF50' }}>{invitation.brandName.charAt(0)}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{invitation.brandName}</div>
                  <div style={{ fontSize: '13px', color: colors.text.secondary, marginTop: spacing[1] }}>{invitation.campaignTitle}</div>
                </div>
                <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                  <div style={{ fontSize: '11px', color: '#4CAF50' }}>Active</div>
                </div>
              </div>

              <div style={{ marginBottom: spacing[2] }}>
                <div style={{ height: '6px', backgroundColor: colors.border.primary, borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '30%', backgroundColor: '#4CAF50', borderRadius: '3px' }} />
                </div>
                <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>
                  In Progress · {invitation.duration} remaining
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {expiredInvitations.length > 0 && (
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>EXPIRED</div>

          {expiredInvitations.map((invitation) => (
            <div
              key={invitation.id}
              style={{
                backgroundColor: colors.background.card,
                borderRadius: borderRadius.xl,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: `1px solid ${colors.border.primary}`,
                opacity: 0.6,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '24px',
                  backgroundColor: colors.border.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: spacing[3],
                }}>
                  <div style={{ fontSize: '17px', color: colors.text.tertiary }}>{invitation.brandName.charAt(0)}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', color: colors.text.tertiary }}>{invitation.brandName}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>{invitation.campaignTitle}</div>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{invitation.receivedDate}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {pendingInvitations.length === 0 && acceptedInvitations.length === 0 && (
        <div style={{ textAlign: 'center', padding: `${spacing[10]} 0` }}>
          <div style={{ fontSize: '20px', color: colors.text.secondary, marginBottom: spacing[3] }}>No Invitations Yet</div>
          <div style={{ fontSize: '15px', color: colors.text.tertiary, padding: `0 ${spacing[4]}` }}>
            Keep engaging with Privé partners to receive exclusive brand invitations
          </div>
        </div>
      )}
    </div>
  );

  const renderReferralsTab = () => (
    <div>
      {/* Referral Summary */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))',
        borderRadius: borderRadius.xl,
        padding: spacing[6],
        textAlign: 'center',
        marginBottom: spacing[4],
        border: `1px solid rgba(201, 169, 98, 0.2)`,
      }}>
        <div style={{ fontSize: '11px', color: colors.text.tertiary }}>YOUR NETWORK VALUE</div>
        <div style={{ fontSize: '42px', fontWeight: '200', color: colors.gold.primary, margin: `${spacing[2]} 0` }}>
          +{mockReferralData.totalEarned.toLocaleString()}
        </div>
        <div style={{ fontSize: '11px', color: colors.text.tertiary }}>coins earned from referrals</div>

        {mockReferralData.pendingEarnings > 0 && (
          <div style={{ marginTop: spacing[3], backgroundColor: 'rgba(255, 193, 7, 0.15)', padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.full, display: 'inline-block' }}>
            <div style={{ fontSize: '11px', color: '#FFC107' }}>+{mockReferralData.pendingEarnings} pending</div>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', backgroundColor: colors.background.card, borderRadius: borderRadius.xl, padding: spacing[4], marginBottom: spacing[6], border: `1px solid ${colors.border.primary}` }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>{mockReferralData.joined}</div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Joined</div>
        </div>
        <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: '300', color: '#FFC107' }}>{mockReferralData.pending}</div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Pending</div>
        </div>
        <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: '300', color: colors.text.primary }}>{mockReferralData.totalInvited}</div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Total</div>
        </div>
      </div>

      {/* Referral Code */}
      <div style={{ marginBottom: spacing[6] }}>
        <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>YOUR INVITE CODE</div>
        <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.xl, padding: spacing[4], border: `1px solid rgba(201, 169, 98, 0.2)` }}>
          <div style={{ backgroundColor: colors.background.primary, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center', marginBottom: spacing[4] }}>
            <div style={{ fontSize: '20px', fontWeight: '600', color: colors.gold.primary }}>{mockReferralData.code}</div>
          </div>
          <div onClick={handleShareCode} style={{ backgroundColor: colors.gold.primary, padding: `${spacing[3]} 0`, borderRadius: borderRadius.lg, textAlign: 'center', color: '#0A0A0A', fontSize: '15px', cursor: 'pointer' }}>
            Share Code
          </div>
        </div>
        <div style={{ fontSize: '11px', color: colors.text.tertiary, textAlign: 'center', marginTop: spacing[3] }}>
          Earn 500 coins for each friend who joins Privé
        </div>
      </div>

      {/* Referral List */}
      <div>
        <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>YOUR REFERRALS</div>

        {mockReferralData.referrals.map((referral) => (
          <div
            key={referral.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: colors.background.card,
              borderRadius: borderRadius.lg,
              padding: spacing[4],
              marginBottom: spacing[3],
              border: `1px solid ${colors.border.primary}`,
            }}
          >
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '22px',
              backgroundColor: colors.border.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: spacing[3],
            }}>
              <div style={{ fontSize: '15px', color: colors.text.secondary }}>{referral.name.charAt(0)}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', color: colors.text.primary }}>{referral.name}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>
                {referral.status === 'joined' ? `Joined ${referral.joinedDate}` : 'Invite sent'}
              </div>
            </div>
            {referral.status === 'joined' ? (
              <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                <div style={{ fontSize: '11px', color: '#4CAF50' }}>+{referral.earnedCoins} earned</div>
              </div>
            ) : (
              <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.15)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                <div style={{ fontSize: '11px', color: '#FFC107' }}>Pending</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Invite More */}
      <div
        onClick={handleShareCode}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: colors.background.card,
          borderRadius: borderRadius.xl,
          padding: spacing[4],
          border: `1px solid rgba(201, 169, 98, 0.2)`,
          cursor: 'pointer',
          gap: spacing[3],
        }}
      >
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '22px',
          backgroundColor: 'rgba(201, 169, 98, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ fontSize: '24px', color: colors.gold.primary }}>+</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '15px', color: colors.text.primary }}>Invite More Friends</div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>Share your code and grow your network</div>
        </div>
        <div style={{ fontSize: '15px', color: colors.gold.primary }}>→</div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: spacing[4], borderBottom: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => navigate(-1)} style={{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          backgroundColor: colors.background.card,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '20px', color: colors.text.primary }}>←</div>
        </div>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>Invitations & Referrals</div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', padding: spacing[5], gap: spacing[3] }}>
        <div
          onClick={() => setActiveTab('invitations')}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${spacing[3]} 0`,
            borderRadius: borderRadius.lg,
            backgroundColor: activeTab === 'invitations' ? 'rgba(201, 169, 98, 0.15)' : colors.background.card,
            border: `1px solid ${activeTab === 'invitations' ? 'rgba(201, 169, 98, 0.3)' : colors.border.primary}`,
            cursor: 'pointer',
            gap: spacing[2],
          }}
        >
          <div style={{ fontSize: '15px', color: activeTab === 'invitations' ? colors.gold.primary : colors.text.tertiary }}>
            Brand Invitations
          </div>
          {pendingInvitations.length > 0 && (
            <div style={{ backgroundColor: colors.gold.primary, padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.full }}>
              <div style={{ fontSize: '11px', color: '#0A0A0A' }}>{pendingInvitations.length}</div>
            </div>
          )}
        </div>
        <div
          onClick={() => setActiveTab('referrals')}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${spacing[3]} 0`,
            borderRadius: borderRadius.lg,
            backgroundColor: activeTab === 'referrals' ? 'rgba(201, 169, 98, 0.15)' : colors.background.card,
            border: `1px solid ${activeTab === 'referrals' ? 'rgba(201, 169, 98, 0.3)' : colors.border.primary}`,
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: '15px', color: activeTab === 'referrals' ? colors.gold.primary : colors.text.tertiary }}>
            My Referrals
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: `0 ${spacing[5]}` }}>
        {activeTab === 'invitations' ? renderInvitationsTab() : renderReferralsTab()}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveInvitations;
