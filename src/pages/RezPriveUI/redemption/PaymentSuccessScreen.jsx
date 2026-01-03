/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Post-Payment Reward Screen
 * Shows transaction success with coins earned
 */

import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing } from '../../theme';

interface PaymentSuccessScreenProps {
  onBack?: () => void;
  onShare?: () => void;
}

export const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({ onBack, onShare }) => {
  const navigate = useNavigate();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const coinsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate success
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(coinsAnim, {
        toValue: 1,
        tension: 40,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const earnings = {
    rezCoins: 125,
    brandCoins: 50,
    priveCoins: 375,
    totalSaved: 1500,
  };

  return (
    <div style={style={{...styles.container}>
      <div style={style={{...styles.content}>
        {/* Success Icon */}
        <Animated.View
          style={[
            style={{...styles.successIcon,
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <span style={style={{...styles.successIconText}>✓</span>
        </Animated.View>

        {/* Success Message */}
        <Animated.View style={[style={{...styles.messageContainer, { opacity: fadeAnim }]}>
          <span variant="h2" gold style={style={{...styles.successTitle}>Payment Successful!</span>
          <span variant="body" color={colors.text.secondary} center>
            Your Privé transaction is complete
          </span>
        </Animated.View>

        {/* Coins Earned */}
        <Animated.View
          style={[
            style={{...styles.coinsContainer,
            {
              opacity: coinsAnim,
              transform: [{ scale: coinsAnim }]
            }
          ]}
        >
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.coinsLabel}>
            YOU EARNED
          </span>

          <div style={style={{...styles.coinsGrid}>
            <div style={style={{...styles.coinEarned}>
              <div style={[style={{...styles.coinIconSmall, { backgroundColor: 'rgba(76, 175, 80, 0.2)' }]}>
                <span style={{ color: '#4CAF50', fontSize: 16 }}>◉</span>
              </div>
              <span variant="h3" style={{ color: '#4CAF50' }}>+{earnings.rezCoins}</span>
              <span variant="caption" color={colors.text.tertiary}>ReZ Coins</span>
            </div>

            <div style={style={{...styles.coinEarned}>
              <div style={[style={{...styles.coinIconSmall, { backgroundColor: 'rgba(100, 181, 246, 0.2)' }]}>
                <span style={{ color: '#64B5F6', fontSize: 16 }}>◉</span>
              </div>
              <span variant="h3" style={{ color: '#64B5F6' }}>+{earnings.brandCoins}</span>
              <span variant="caption" color={colors.text.tertiary}>Brand Coins</span>
            </div>

            <div style={style={{...styles.coinEarned}>
              <div style={[style={{...styles.coinIconSmall, { backgroundColor: 'rgba(201, 169, 98, 0.2)' }]}>
                <span style={{ color: '#C9A962', fontSize: 16 }}>◉</span>
              </div>
              <span variant="h3" gold>+{earnings.priveCoins}</span>
              <span variant="caption" color={colors.text.tertiary}>Privé Coins</span>
            </div>
          </div>

          {/* Total Saved */}
          <div style={style={{...styles.savedCard}>
            <span variant="caption" color={colors.text.tertiary}>TOTAL SAVED</span>
            <span variant="h2" gold>₹{earnings.totalSaved.toLocaleString()}</span>
          </div>
        </Animated.View>

        {/* Earn More Section */}
        <div style={style={{...styles.earnMoreSection}>
          <span variant="body" color={colors.text.secondary} center>
            Share your experience to earn more Privé Coins!
          </span>

          <div
            style={style={{...styles.shareButton}
            onClick={() => navigate('/prive/Offers', {
              screen: 'C6_ContentSubmission',
              params: { type: 'social_post' }
            })}
          >
            <span variant="body" gold>Share Experience → +50 Privé Coins</span>
          </div>

          <div
            style={style={{...styles.reviewButton}
            onClick={() => navigate('/prive/Offers', {
              screen: 'C6_ContentSubmission',
              params: { type: 'review' }
            })}
          >
            <span variant="body" color={colors.text.primary}>Leave a Review → +25 Privé Coins</span>
          </div>
        </div>
      </div>

      {/* Done Button */}
      <div style={style={{...styles.buttonContainer}>
        <div
          style={style={{...styles.doneButton}
          onClick={onBack || (() => navigate('/prive/Main', { screen: 'Home' }))}
        >
          <span variant="bodyLarge" color="#0A0A0A">Done</span>
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
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[10],
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    borderWidth: 3,
    borderColor: '#C9A962',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[6],
  },
  successIconText: {
    fontSize: 48,
    color: '#C9A962',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  successTitle: {
    marginBottom: spacing[2],
  },
  coinsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  coinsLabel: {
    marginBottom: spacing[4],
    letterSpacing: 1,
  },
  coinsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: spacing[6],
  },
  coinEarned: {
    alignItems: 'center',
    gap: spacing[2],
  },
  coinIconSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  savedCard: {
    backgroundColor: '#181818',
    borderRadius: 16,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    alignItems: 'center',
    gap: spacing[2],
    width: '100%',
  },
  earnMoreSection: {
    marginTop: spacing[8],
    width: '100%',
    alignItems: 'center',
    gap: spacing[4],
  },
  shareButton: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[6],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    width: '100%',
    alignItems: 'center',
  },
  reviewButton: {
    backgroundColor: '#181818',
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[6],
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    padding: spacing[5],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  doneButton: {
    backgroundColor: '#C9A962',
    paddingVertical: spacing[4],
    borderRadius: 12,
    alignItems: 'center',
  },
};

export default PaymentSuccessScreen;
