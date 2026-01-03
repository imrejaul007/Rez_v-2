/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F6 - Privé Invitations & Referrals
 * Purpose: Show all invitations from merchants and referral tracking
 * Includes: Pending invitations, accepted campaigns, referral data
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
// SafeAreaView removed
// LinearGradient will use CSS
import { Text, Card } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type TabType = 'invitations' | 'referrals';

interface BrandInvitation {
  id: string;
  brandName: string;
  brandLogo?: string;
  campaignTitle: string;
  rewardRange: string;
  actionRequired: string;
  duration: string;
  expiresIn: string;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
  receivedDate: string;
}

interface ReferralData {
  code: string;
  totalInvited: number;
  joined: number;
  pending: number;
  totalEarned: number;
  pendingEarnings: number;
  referrals: {
    id: string;
    name: string;
    joinedDate?: string;
    status: 'joined' | 'pending';
    earnedCoins?: number;
  }[];
}

const mockInvitations: BrandInvitation[] = [
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

const mockReferralData: ReferralData = {
  code: 'PRIVE-RAHUL2025',
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

export const F6_InvitationsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('invitations');

  const pendingInvitations = mockInvitations.filter(i => i.status === 'pending');
  const acceptedInvitations = mockInvitations.filter(i => i.status === 'accepted');
  const expiredInvitations = mockInvitations.filter(i => i.status === 'expired' || i.status === 'declined');

  const handleShareCode = async () => {
    try {
      await Share.share({
        message: `Join ReZ Privé with my invite code: ${mockReferralData.code}\n\nGet exclusive access to luxury rewards and earn coins on your purchases!`,
      };
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleViewInvitation = (invitation: BrandInvitation) => {
    navigate('/prive/Offers', {
      screen: 'C3_BrandInvitation',
      params: { invitation },
    };
  };

  const renderInvitationsTab = () => (
    <>
      {/* Pending Invitations */}
      {pendingInvitations.length > 0 && (
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary}>
              PENDING INVITATIONS
            </span>
            <div style={style={{...styles.countBadge}>
              <span variant="caption" gold>{pendingInvitations.length}</span>
            </div>
          </div>

          {pendingInvitations.map((invitation) => (
            <div
              key={invitation.id}
              style={style={{...styles.invitationCard}
              onClick={() => handleViewInvitation(invitation)}
              onClick={() => {}}
            >
              <div style={style={{...styles.invitationHeader}>
                <div style={style={{...styles.brandLogo}>
                  <span variant="body" gold>{invitation.brandName.charAt(0)}</span>
                </div>
                <div style={style={{...styles.invitationInfo}>
                  <span variant="body" color={colors.text.primary}>
                    {invitation.brandName}
                  </span>
                  <span variant="caption" color={colors.text.secondary}>
                    {invitation.campaignTitle}
                  </span>
                </div>
                <div style={style={{...styles.expiryBadge}>
                  <span variant="caption" color="#FFC107">
                    {invitation.expiresIn}
                  </span>
                </div>
              </div>

              <div style={style={{...styles.invitationDetails}>
                <div style={style={{...styles.detailItem}>
                  <span variant="caption" color={colors.text.tertiary}>Reward</span>
                  <span variant="body" gold>{invitation.rewardRange}</span>
                </div>
                <div style={style={{...styles.detailDivider} />
                <div style={style={{...styles.detailItem}>
                  <span variant="caption" color={colors.text.tertiary}>Action</span>
                  <span variant="caption" color={colors.text.secondary}>
                    {invitation.actionRequired}
                  </span>
                </div>
                <div style={style={{...styles.detailDivider} />
                <div style={style={{...styles.detailItem}>
                  <span variant="caption" color={colors.text.tertiary}>Duration</span>
                  <span variant="caption" color={colors.text.secondary}>
                    {invitation.duration}
                  </span>
                </div>
              </div>

              <div style={style={{...styles.invitationActions}>
                <div
                  style={style={{...styles.acceptBtn}
                  onClick={() => handleViewInvitation(invitation)}
                >
                  <span variant="body" color="#0A0A0A">View & Accept</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Active Campaigns */}
      {acceptedInvitations.length > 0 && (
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ACTIVE CAMPAIGNS
          </span>

          {acceptedInvitations.map((invitation) => (
            <div
              key={invitation.id}
              style={[style={{...styles.invitationCard, style={{...styles.acceptedCard]}
              onClick={() => navigate('/prive/Offers', {
                screen: 'C2_OfferDetail',
                params: { offerId: invitation.id },
              })}
            >
              <div style={style={{...styles.invitationHeader}>
                <div style={[style={{...styles.brandLogo, style={{...styles.brandLogoActive]}>
                  <span variant="body" color="#4CAF50">{invitation.brandName.charAt(0)}</span>
                </div>
                <div style={style={{...styles.invitationInfo}>
                  <span variant="body" color={colors.text.primary}>
                    {invitation.brandName}
                  </span>
                  <span variant="caption" color={colors.text.secondary}>
                    {invitation.campaignTitle}
                  </span>
                </div>
                <div style={style={{...styles.activeBadge}>
                  <span variant="caption" color="#4CAF50">Active</span>
                </div>
              </div>

              <div style={style={{...styles.progressSection}>
                <div style={style={{...styles.progressBar}>
                  <div style={[style={{...styles.progressFill, { width: '30%' }]} />
                </div>
                <span variant="caption" color={colors.text.tertiary}>
                  In Progress · {invitation.duration} remaining
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expired/Declined */}
      {expiredInvitations.length > 0 && (
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            EXPIRED
          </span>

          {expiredInvitations.map((invitation) => (
            <div key={invitation.id} style={[style={{...styles.invitationCard, style={{...styles.expiredCard]}>
              <div style={style={{...styles.invitationHeader}>
                <div style={[style={{...styles.brandLogo, style={{...styles.brandLogoExpired]}>
                  <span variant="body" color={colors.text.tertiary}>
                    {invitation.brandName.charAt(0)}
                  </span>
                </div>
                <div style={style={{...styles.invitationInfo}>
                  <span variant="body" color={colors.text.tertiary}>
                    {invitation.brandName}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {invitation.campaignTitle}
                  </span>
                </div>
                <span variant="caption" color={colors.text.tertiary}>
                  {invitation.receivedDate}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {pendingInvitations.length === 0 && acceptedInvitations.length === 0 && (
        <div style={style={{...styles.emptyState}>
          <span variant="h3" color={colors.text.secondary} center>
            No Invitations Yet
          </span>
          <span variant="body" color={colors.text.tertiary} center style={style={{...styles.emptyText}>
            Keep engaging with Privé partners to receive exclusive brand invitations
          </span>
        </div>
      )}
    </>
  );

  const renderReferralsTab = () => (
    <>
      {/* Referral Summary */}
      <LinearGradient
        colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
        style={style={{...styles.referralSummary}
      >
        <span variant="caption" color={colors.text.tertiary}>YOUR NETWORK VALUE</span>
        <span style={style={{...styles.summaryAmount}>
          +{mockReferralData.totalEarned.toLocaleString()}
        </span>
        <span variant="caption" color={colors.text.tertiary}>coins earned from referrals</span>

        {mockReferralData.pendingEarnings > 0 && (
          <div style={style={{...styles.pendingEarningsBadge}>
            <span variant="caption" color="#FFC107">
              +{mockReferralData.pendingEarnings} pending
            </span>
          </div>
        )}
      </LinearGradient>

      {/* Stats Row */}
      <div style={style={{...styles.statsRow}>
        <div style={style={{...styles.statCard}>
          <span variant="h2" gold>{mockReferralData.joined}</span>
          <span variant="caption" color={colors.text.tertiary}>Joined</span>
        </div>
        <div style={style={{...styles.statDivider} />
        <div style={style={{...styles.statCard}>
          <span variant="h2" color="#FFC107">{mockReferralData.pending}</span>
          <span variant="caption" color={colors.text.tertiary}>Pending</span>
        </div>
        <div style={style={{...styles.statDivider} />
        <div style={style={{...styles.statCard}>
          <span variant="h2" color={colors.text.primary}>{mockReferralData.totalInvited}</span>
          <span variant="caption" color={colors.text.tertiary}>Total</span>
        </div>
      </div>

      {/* Referral Code */}
      <div style={style={{...styles.referralCodeSection}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          YOUR INVITE CODE
        </span>
        <div style={style={{...styles.referralCodeCard}>
          <div style={style={{...styles.codeDisplay}>
            <span variant="h3" gold>{mockReferralData.code}</span>
          </div>
          <div style={style={{...styles.shareBtn} onClick={handleShareCode}>
            <span variant="body" color="#0A0A0A">Share Code</span>
          </div>
        </div>
        <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.codeNote}>
          Earn 500 coins for each friend who joins Privé
        </span>
      </div>

      {/* Referral List */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          YOUR REFERRALS
        </span>

        {mockReferralData.referrals.map((referral) => (
          <div key={referral.id} style={style={{...styles.referralCard}>
            <div style={style={{...styles.referralAvatar}>
              <span variant="body" color={colors.text.secondary}>
                {referral.name.charAt(0)}
              </span>
            </div>
            <div style={style={{...styles.referralInfo}>
              <span variant="body" color={colors.text.primary}>{referral.name}</span>
              <span variant="caption" color={colors.text.tertiary}>
                {referral.status === 'joined'
                  ? `Joined ${referral.joinedDate}`
                  : 'Invite sent'}
              </span>
            </div>
            {referral.status === 'joined' ? (
              <div style={style={{...styles.earnedBadge}>
                <span variant="caption" color="#4CAF50">
                  +{referral.earnedCoins} earned
                </span>
              </div>
            ) : (
              <div style={style={{...styles.pendingBadge}>
                <span variant="caption" color="#FFC107">Pending</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Invite More */}
      <div style={style={{...styles.inviteMoreCard} onClick={handleShareCode}>
        <div style={style={{...styles.inviteMoreIcon}>
          <span style={style={{...styles.inviteMoreIconText}>+</span>
        </div>
        <div style={style={{...styles.inviteMoreContent}>
          <span variant="body" color={colors.text.primary}>Invite More Friends</span>
          <span variant="caption" color={colors.text.tertiary}>
            Share your code and grow your network
          </span>
        </div>
        <span variant="body" gold>→</span>
      </div>
    </>
  );

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Invitations & Referrals</span>
        <div style={{ width: 40 }} />
      </div>

      {/* Tabs */}
      <div style={style={{...styles.tabs}>
        <div
          style={[style={{...styles.tab, activeTab === 'invitations' && style={{...styles.tabActive]}
          onClick={() => setActiveTab('invitations')}
        >
          <Text
            variant="body"
            color={activeTab === 'invitations' ? colors.gold.primary : colors.text.tertiary}
          >
            Brand Invitations
          </span>
          {pendingInvitations.length > 0 && (
            <div style={style={{...styles.tabBadge}>
              <span variant="caption" color="#0A0A0A">{pendingInvitations.length}</span>
            </div>
          )}
        </div>
        <div
          style={[style={{...styles.tab, activeTab === 'referrals' && style={{...styles.tabActive]}
          onClick={() => setActiveTab('referrals')}
        >
          <Text
            variant="body"
            color={activeTab === 'referrals' ? colors.gold.primary : colors.text.tertiary}
          >
            My Referrals
          </span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {activeTab === 'invitations' ? renderInvitationsTab() : renderReferralsTab()}
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
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    gap: spacing[3],
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
    backgroundColor: '#181818',
    gap: spacing[2],
  },
  tabActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  tabBadge: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[8],
  },
  section: {
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  countBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  invitationCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  acceptedCard: {
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  expiredCard: {
    opacity: 0.6,
  },
  invitationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  brandLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  brandLogoActive: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  brandLogoExpired: {
    backgroundColor: '#2A2A2A',
    borderColor: 'transparent',
  },
  invitationInfo: {
    flex: 1,
    gap: spacing[1],
  },
  expiryBadge: {
    backgroundColor: 'rgba(255, 193, 7, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  activeBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  invitationDetails: {
    flexDirection: 'row',
    backgroundColor: '#0A0A0A',
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    marginBottom: spacing[4],
  },
  detailItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  detailDivider: {
    width: 1,
    backgroundColor: '#2A2A2A',
  },
  invitationActions: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  acceptBtn: {
    flex: 1,
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  progressSection: {
    gap: spacing[2],
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2A2A2A',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  emptyState: {
    paddingVertical: spacing[10],
    gap: spacing[3],
  },
  emptyText: {
    paddingHorizontal: spacing[4],
  },

  // Referrals Tab
  referralSummary: {
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    alignItems: 'center',
    marginBottom: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  summaryAmount: {
    fontSize: 42,
    fontWeight: '200',
    color: colors.gold.primary,
    marginVertical: spacing[2],
  },
  pendingEarningsBadge: {
    marginTop: spacing[3],
    backgroundColor: 'rgba(255, 193, 7, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[6],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  statDivider: {
    width: 1,
    backgroundColor: '#2A2A2A',
  },
  referralCodeSection: {
    marginBottom: spacing[6],
  },
  referralCodeCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  codeDisplay: {
    backgroundColor: '#0A0A0A',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  shareBtn: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[3],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  codeNote: {
    marginTop: spacing[3],
  },
  referralCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  referralAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  referralInfo: {
    flex: 1,
    gap: spacing[1],
  },
  earnedBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  pendingBadge: {
    backgroundColor: 'rgba(255, 193, 7, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  inviteMoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    gap: spacing[3],
  },
  inviteMoreIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteMoreIconText: {
    fontSize: 24,
    color: colors.gold.primary,
  },
  inviteMoreContent: {
    flex: 1,
    gap: spacing[1],
  },
};

export default F6_InvitationsScreen;
