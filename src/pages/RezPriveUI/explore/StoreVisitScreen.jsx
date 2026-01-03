/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Store Visit Screen
 * For offline merchant/restaurant/store visits
 * Check-in, scan QR, and earn coins
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface StoreData {
  id: string;
  name: string;
  category: string;
  address: string;
  distance: string;
  rating: number;
  isOpen: boolean;
  openHours: string;
  offers: {
    id: string;
    title: string;
    reward: string;
    type: 'visit' | 'purchase' | 'share';
  }[];
  coinReward: {
    checkIn: number;
    minPurchase: number;
    purchaseReward: string;
    shareBonus: number;
  };
}

const defaultStore: StoreData = {
  id: '1',
  name: 'The Grand Café',
  category: 'Fine Dining',
  address: '45 Park Avenue, Bandra West, Mumbai',
  distance: '1.2 km',
  rating: 4.8,
  isOpen: true,
  openHours: '11:00 AM - 11:00 PM',
  offers: [
    { id: '1', title: 'Check-in Reward', reward: '+50 coins', type: 'visit' },
    { id: '2', title: 'Spend ₹2,000+', reward: '30% back', type: 'purchase' },
    { id: '3', title: 'Share Experience', reward: '+150 coins', type: 'share' },
  ],
  coinReward: {
    checkIn: 50,
    minPurchase: 2000,
    purchaseReward: '30%',
    shareBonus: 150,
  },
};

export const StoreVisitScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);

  const store = defaultStore;

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    // In real app: Call API, verify location, credit coins
  };

  const handleScanReceipt = () => {
    // Navigate to receipt scanner or upload
    navigate('/prive/Offers', {
      screen: 'C6_ContentSubmission',
      params: { type: 'visit_proof', brandName: store.name },
    };
  };

  const handleShareExperience = () => {
    navigate('/prive/Offers', {
      screen: 'C6_ContentSubmission',
      params: { type: 'social_post', brandName: store.name },
    };
  };

  const handleViewPayment = () => {
    navigate('/prive/Redemption', {
      screen: 'Payment',
      params: { storeName: store.name },
    };
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={() => navigate(-1)}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Store Visit</span>
        <div style={{ width: 50 }} />
      </div>

      <div
        style={style={{...styles.scrollView}
        
      >
        {/* Store Hero */}
        <div style={style={{...styles.heroSection}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.12)', 'rgba(201, 169, 98, 0.04)', 'transparent']}
            style={style={{...styles.heroGradient}
          />

          <div style={style={{...styles.storeIcon}>
            <span style={style={{...styles.storeInitial}>{store.name.charAt(0)}</span>
          </div>

          <span variant="caption" gold>{store.category}</span>
          <span variant="h2" color={colors.text.primary} style={style={{...styles.storeName}>
            {store.name}
          </span>

          <div style={style={{...styles.storeInfo}>
            <span variant="caption" color={colors.text.tertiary}>{store.address}</span>
            <div style={style={{...styles.storeInfoRow}>
              <span variant="body" gold>★ {store.rating}</span>
              <span variant="caption" color={colors.text.tertiary}>· {store.distance}</span>
              <div style={[style={{...styles.openBadge, { backgroundColor: store.isOpen ? 'rgba(76, 175, 80, 0.15)' : 'rgba(244, 67, 54, 0.15)' }]}>
                <span variant="caption" color={store.isOpen ? '#4CAF50' : '#F44336'}>
                  {store.isOpen ? 'Open' : 'Closed'}
                </span>
              </div>
            </div>
            <span variant="caption" color={colors.text.tertiary}>{store.openHours}</span>
          </div>
        </div>

        {/* Check-in Section */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            STEP 1: VERIFY YOUR VISIT
          </span>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.sectionSubtext}>
            Prove you're here to earn check-in reward
          </span>

          {isCheckedIn ? (
            <div style={style={{...styles.checkedInCard}>
              <div style={style={{...styles.checkIcon}>
                <span style={style={{...styles.checkIconText}>✓</span>
              </div>
              <div style={style={{...styles.checkedInContent}>
                <span variant="body" color="#4CAF50">Visit Verified!</span>
                <span variant="caption" color={colors.text.tertiary}>
                  +{store.coinReward.checkIn} coins credited
                </span>
              </div>
            </div>
          ) : (
            <>
              {/* Option 1: Share on Social Media */}
              <div
                style={style={{...styles.verifyOptionCard}
                onClick={() => navigate('/prive/Offers', {
                  screen: 'C6_ContentSubmission',
                  params: { type: 'social_post', brandName: store.name }
                })}
              >
                <div style={[style={{...styles.verifyOptionIcon, { backgroundColor: 'rgba(201, 169, 98, 0.15)' }]}>
                  <span style={[style={{...styles.verifyOptionIconText, { color: colors.gold.primary }]}>◎</span>
                </div>
                <div style={style={{...styles.verifyOptionContent}>
                  <span variant="body" color={colors.text.primary}>Share Photo & Tag</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Post store photo on social media with @{store.name.replace(/\s/g, '')}
                  </span>
                </div>
                <div style={style={{...styles.verifyOptionReward}>
                  <span variant="body" gold>+{store.coinReward.checkIn}</span>
                </div>
              </div>

              <div style={style={{...styles.orDivider}>
                <div style={style={{...styles.orLine} />
                <span variant="caption" color={colors.text.tertiary}>OR</span>
                <div style={style={{...styles.orLine} />
              </div>

              {/* Option 2: Upload Receipt */}
              <div
                style={style={{...styles.verifyOptionCard}
                onClick={() => navigate('/prive/Offers', {
                  screen: 'C6_ContentSubmission',
                  params: { type: 'visit_proof', brandName: store.name }
                })}
              >
                <div style={[style={{...styles.verifyOptionIcon, { backgroundColor: 'rgba(100, 181, 246, 0.15)' }]}>
                  <span style={[style={{...styles.verifyOptionIconText, { color: '#64B5F6' }]}>⬡</span>
                </div>
                <div style={style={{...styles.verifyOptionContent}>
                  <span variant="body" color={colors.text.primary}>Upload Receipt</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Share your bill or payment receipt
                  </span>
                </div>
                <div style={style={{...styles.verifyOptionReward}>
                  <span variant="body" gold>+{store.coinReward.checkIn}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Make Purchase Section */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            STEP 2: MAKE A PURCHASE
          </span>

          <div style={style={{...styles.purchaseCard}>
            <div style={style={{...styles.purchaseInfo}>
              <span variant="body" color={colors.text.primary}>
                Spend ₹{store.coinReward.minPurchase.toLocaleString()}+
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                Earn {store.coinReward.purchaseReward} back in coins
              </span>
            </div>

            <div
              style={style={{...styles.payWithCoinsBtn}
              onClick={handleViewPayment}
            >
              <span variant="bodySmall" gold>Pay with Coins</span>
            </div>
          </div>

          <div style={style={{...styles.scanReceiptBtn} onClick={handleScanReceipt}>
            <div style={style={{...styles.scanIcon}>
              <span style={style={{...styles.scanIconText}>⬡</span>
            </div>
            <div style={style={{...styles.scanContent}>
              <span variant="body" color={colors.text.primary}>Upload Receipt</span>
              <span variant="caption" color={colors.text.tertiary}>
                Submit proof of purchase for rewards
              </span>
            </div>
            <span variant="body" gold>→</span>
          </div>
        </div>

        {/* Share Experience Section */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            STEP 3: SHARE & EARN MORE
          </span>

          <div style={style={{...styles.shareCard} onClick={handleShareExperience}>
            <LinearGradient
              colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
              style={style={{...styles.shareGradient}
            >
              <div style={style={{...styles.shareIcon}>
                <span style={style={{...styles.shareIconText}>◎</span>
              </div>
              <div style={style={{...styles.shareContent}>
                <span variant="body" color={colors.text.primary}>Share Your Experience</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Post on social media, submit link, earn bonus
                </span>
              </div>
              <div style={style={{...styles.shareReward}>
                <span variant="h3" gold>+{store.coinReward.shareBonus}</span>
                <span variant="caption" color={colors.text.tertiary}>coins</span>
              </div>
            </LinearGradient>
          </div>
        </div>

        {/* Available Offers */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            AVAILABLE REWARDS
          </span>

          {store.offers.map((offer) => (
            <div key={offer.id} style={style={{...styles.offerItem}>
              <div style={[
                style={{...styles.offerIcon,
                {
                  backgroundColor: offer.type === 'visit'
                    ? 'rgba(76, 175, 80, 0.15)'
                    : offer.type === 'purchase'
                      ? 'rgba(201, 169, 98, 0.15)'
                      : 'rgba(100, 181, 246, 0.15)',
                },
              ]}>
                <span style={[
                  style={{...styles.offerIconText,
                  {
                    color: offer.type === 'visit'
                      ? '#4CAF50'
                      : offer.type === 'purchase'
                        ? colors.gold.primary
                        : '#64B5F6',
                  },
                ]}>
                  {offer.type === 'visit' ? '◎' : offer.type === 'purchase' ? '◇' : '★'}
                </span>
              </div>
              <div style={style={{...styles.offerContent}>
                <span variant="body" color={colors.text.primary}>{offer.title}</span>
              </div>
              <span variant="body" gold>{offer.reward}</span>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div style={style={{...styles.howItWorksCard}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.howItWorksLabel}>
            HOW IT WORKS
          </span>
          <div style={style={{...styles.howItWorksSteps}>
            <div style={style={{...styles.howItWorksStep}>
              <div style={style={{...styles.stepNumber}>
                <span variant="caption" color={colors.gold.primary}>1</span>
              </div>
              <span variant="caption" color={colors.text.secondary}>Check in at the store</span>
            </div>
            <div style={style={{...styles.stepArrow}>
              <span variant="caption" color={colors.text.tertiary}>→</span>
            </div>
            <div style={style={{...styles.howItWorksStep}>
              <div style={style={{...styles.stepNumber}>
                <span variant="caption" color={colors.gold.primary}>2</span>
              </div>
              <span variant="caption" color={colors.text.secondary}>Make a purchase</span>
            </div>
            <div style={style={{...styles.stepArrow}>
              <span variant="caption" color={colors.text.tertiary}>→</span>
            </div>
            <div style={style={{...styles.howItWorksStep}>
              <div style={style={{...styles.stepNumber}>
                <span variant="caption" color={colors.gold.primary}>3</span>
              </div>
              <span variant="caption" color={colors.text.secondary}>Share & earn more</span>
            </div>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[6],
    alignItems: 'center',
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  storeIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  storeInitial: {
    fontSize: 32,
    color: colors.gold.primary,
  },
  storeName: {
    marginTop: spacing[2],
    marginBottom: spacing[3],
  },
  storeInfo: {
    alignItems: 'center',
    gap: spacing[2],
  },
  storeInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  openBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  section: {
    padding: spacing[5],
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[2],
  },
  sectionSubtext: {
    marginBottom: spacing[4],
  },
  verifyOptionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  verifyOptionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyOptionIconText: {
    fontSize: 22,
  },
  verifyOptionContent: {
    flex: 1,
    gap: spacing[1],
  },
  verifyOptionReward: {
    alignItems: 'center',
  },
  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing[3],
    gap: spacing[3],
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2A2A2A',
  },
  checkInBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.gold.primary,
    gap: spacing[3],
  },
  checkInIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkInIconText: {
    fontSize: 22,
    color: colors.gold.primary,
  },
  checkInContent: {
    flex: 1,
    gap: spacing[1],
  },
  checkInReward: {
    alignItems: 'center',
  },
  checkedInCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
    gap: spacing[3],
  },
  checkIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIconText: {
    fontSize: 24,
    color: '#4CAF50',
  },
  checkedInContent: {
    flex: 1,
    gap: spacing[1],
  },
  purchaseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginBottom: spacing[3],
  },
  purchaseInfo: {
    gap: spacing[1],
  },
  payWithCoinsBtn: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },
  scanReceiptBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  scanIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(100, 181, 246, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIconText: {
    fontSize: 20,
    color: '#64B5F6',
  },
  scanContent: {
    flex: 1,
    gap: spacing[1],
  },
  shareCard: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  shareGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  shareIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIconText: {
    fontSize: 22,
    color: colors.gold.primary,
  },
  shareContent: {
    flex: 1,
    gap: spacing[1],
  },
  shareReward: {
    alignItems: 'center',
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  offerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerIconText: {
    fontSize: 18,
  },
  offerContent: {
    flex: 1,
  },
  howItWorksCard: {
    margin: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  howItWorksLabel: {
    letterSpacing: 1,
    marginBottom: spacing[4],
    textAlign: 'center',
  },
  howItWorksSteps: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  howItWorksStep: {
    alignItems: 'center',
    gap: spacing[2],
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepArrow: {
    marginHorizontal: spacing[2],
  },
  bottomSpace: {
    height: 50,
  },
};

export default StoreVisitScreen;
