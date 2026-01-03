/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Privé Payment Screen
 * Shows coin breakdown and payment options
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing } from '../../theme';

interface PaymentScreenProps {
  onBack?: () => void;
  onComplete?: () => void;
}

interface CoinBalance {
  type: 'rez' | 'branded' | 'prive';
  name: string;
  balance: number;
  usable: number;
  color: string;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({ onBack, onComplete }) => {
  const navigate = useNavigate();
  const [selectedCoins, setSelectedCoins] = useState<string[]>(['rez', 'prive']);

  const orderAmount = 2500;

  const coins: CoinBalance[] = [
    { type: 'rez', name: 'ReZ Coin', balance: 850, usable: 500, color: '#4CAF50' },
    { type: 'branded', name: 'Luxury Café Coin', balance: 200, usable: 200, color: '#64B5F6' },
    { type: 'prive', name: 'Privé Coin', balance: 1200, usable: 800, color: '#C9A962' },
  ];

  const totalCoinValue = coins
    .filter(c => selectedCoins.includes(c.type))
    .reduce((sum, c) => sum + c.usable, 0);

  const remainingAmount = Math.max(0, orderAmount - totalCoinValue);

  const toggleCoin = (type: string) => {
    setSelectedCoins(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const paymentMethods = [
    { id: 'upi', name: 'UPI', subtitle: 'GPay, PhonePe, Paytm', bonus: '+2% Privé Coins' },
    { id: 'card', name: 'Credit/Debit Card', subtitle: 'Visa, Mastercard, RuPay', bonus: null },
    { id: 'bnpl', name: 'Pay Later', subtitle: 'LazyPay, Simpl', bonus: '+5% Privé Coins' },
  ];

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={onBack || (() => navigate(-1))}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Payment</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Order Summary */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            ORDER SUMMARY
          </span>
          <div style={style={{...styles.orderCard}>
            <div style={style={{...styles.orderRow}>
              <span variant="body" color={colors.text.secondary}>Order Total</span>
              <span variant="h3" color={colors.text.primary}>₹{orderAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Coin Selection */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            USE YOUR COINS
          </span>

          {coins.map((coin) => (
            <div
              key={coin.type}
              style={[
                style={{...styles.coinCard,
                selectedCoins.includes(coin.type) && style={{...styles.coinCardSelected,
                { borderColor: selectedCoins.includes(coin.type) ? coin.color : '#2A2A2A' }
              ]}
              onClick={() => toggleCoin(coin.type)}
            >
              <div style={style={{...styles.coinLeft}>
                <div style={[style={{...styles.coinIcon, { backgroundColor: coin.color + '20' }]}>
                  <span style={[style={{...styles.coinIconText, { color: coin.color }]}>◉</span>
                </div>
                <div>
                  <span variant="body" color={colors.text.primary}>{coin.name}</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Balance: {coin.balance} · Usable: {coin.usable}
                  </span>
                </div>
              </div>
              <div style={style={{...styles.coinRight}>
                <span variant="bodyLarge" style={{ color: coin.color }}>
                  -₹{coin.usable}
                </span>
                <div style={[
                  style={{...styles.checkbox,
                  selectedCoins.includes(coin.type) && { backgroundColor: coin.color, borderColor: coin.color }
                ]}>
                  {selectedCoins.includes(coin.type) && (
                    <span style={style={{...styles.checkmark}>✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Coin Summary */}
          <div style={style={{...styles.coinSummary}>
            <span variant="body" color={colors.text.secondary}>Total Coin Value</span>
            <span variant="bodyLarge" gold>-₹{totalCoinValue.toLocaleString()}</span>
          </div>
        </div>

        {/* Remaining Amount */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.remainingCard}>
            <span variant="body" color={colors.text.secondary}>Amount to Pay</span>
            <span variant="h2" gold>₹{remainingAmount.toLocaleString()}</span>
          </div>
        </div>

        {/* Payment Methods */}
        {remainingAmount > 0 && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              PAYMENT METHOD
            </span>

            {paymentMethods.map((method) => (
              <div key={method.id} style={style={{...styles.methodCard}>
                <div>
                  <span variant="body" color={colors.text.primary}>{method.name}</span>
                  <span variant="caption" color={colors.text.tertiary}>{method.subtitle}</span>
                </div>
                {method.bonus && (
                  <div style={style={{...styles.bonusBadge}>
                    <span variant="caption" gold>{method.bonus}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Earnings Preview */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.earningsCard}>
            <span variant="label" color={colors.text.tertiary}>YOU'LL EARN</span>
            <div style={style={{...styles.earningsRow}>
              <div style={style={{...styles.earningItem}>
                <span variant="h3" style={{ color: '#4CAF50' }}>+125</span>
                <span variant="caption" color={colors.text.tertiary}>ReZ Coins</span>
              </div>
              <div style={style={{...styles.earningItem}>
                <span variant="h3" style={{ color: '#64B5F6' }}>+50</span>
                <span variant="caption" color={colors.text.tertiary}>Brand Coins</span>
              </div>
              <div style={style={{...styles.earningItem}>
                <span variant="h3" gold>+375</span>
                <span variant="caption" color={colors.text.tertiary}>Privé Coins</span>
              </div>
            </div>
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.earningsNote}>
              15% Privé Reward based on your engagement tier
            </span>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Pay Button */}
      <div style={style={{...styles.payButtonContainer}>
        <div
          style={style={{...styles.payButton}
          onClick={onComplete || (() => navigate('/prive/Redemption', { screen: 'PaymentSuccess' }))}
        >
          <span variant="bodyLarge" color="#0A0A0A">
            {remainingAmount > 0 ? `Pay ₹${remainingAmount.toLocaleString()}` : 'Complete Order'}
          </span>
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
  section: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    letterSpacing: 1,
  },
  orderCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinCardSelected: {
    backgroundColor: '#1A1A1A',
  },
  coinLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinIconText: {
    fontSize: 20,
  },
  coinRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    color: '#0A0A0A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  coinSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  remainingCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    alignItems: 'center',
    gap: spacing[2],
  },
  methodCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bonusBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  earningsCard: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    alignItems: 'center',
  },
  earningsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: spacing[4],
  },
  earningItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  earningsNote: {
    marginTop: spacing[3],
    fontStyle: 'italic',
  },
  bottomSpace: {
    height: 100,
  },
  payButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  payButton: {
    backgroundColor: '#C9A962',
    paddingVertical: spacing[4],
    borderRadius: 12,
    alignItems: 'center',
  },
};

export default PaymentScreen;
