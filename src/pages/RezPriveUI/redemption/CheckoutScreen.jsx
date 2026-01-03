/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Checkout Screen
 * Address, delivery options, coin selection, final payment
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// SafeAreaView removed
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface CoinBalance {
  type: 'rez' | 'branded' | 'prive';
  name: string;
  balance: number;
  color: string;
}

export const CheckoutScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<any>();

  const subtotal = route.params?.subtotal || 7300;
  const totalReward = route.params?.totalReward || 1095;

  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [selectedCoins, setSelectedCoins] = useState<string[]>(['rez', 'prive']);

  const coins: CoinBalance[] = [
    { type: 'rez', name: 'ReZ Coins', balance: 850, color: colors.gold.primary },
    { type: 'prive', name: 'Privé Coins', balance: 1200, color: '#B8860B' },
    { type: 'branded', name: 'Brand Coins', balance: 200, color: '#64B5F6' },
  ];

  const addresses = [
    { id: 'home', label: 'Home', address: '123 Park Street, Apartment 4B, Mumbai 400001' },
    { id: 'office', label: 'Office', address: '456 Business Tower, Floor 12, Mumbai 400051' },
  ];

  const deliveryOptions = [
    { id: 'standard', label: 'Standard Delivery', time: '5-7 days', price: 0 },
    { id: 'express', label: 'Express Delivery', time: '2-3 days', price: 99 },
    { id: 'premium', label: 'Premium (Same Day)', time: 'Today', price: 249 },
  ];

  const toggleCoin = (type: string) => {
    setSelectedCoins(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const totalCoinValue = coins
    .filter(c => selectedCoins.includes(c.type))
    .reduce((sum, c) => sum + c.balance, 0);

  const deliveryCharge = deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0;
  const orderTotal = subtotal + deliveryCharge;
  const coinDiscount = Math.min(totalCoinValue, orderTotal * 0.5); // Max 50%
  const finalAmount = orderTotal - coinDiscount;

  const handlePayment = () => {
    navigate('/prive/Payment', {
      orderTotal,
      coinDiscount,
      finalAmount,
      selectedCoins,
      totalReward,
    };
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={() => navigate(-1)}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Checkout</span>
        <div style={{ width: 50 }} />
      </div>

      <div
        style={style={{...styles.scrollView}
        
      >
        {/* Delivery Address */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              DELIVERY ADDRESS
            </span>
            <div>
              <span variant="caption" gold>+ Add New</span>
            </div>
          </div>

          {addresses.map((addr) => (
            <div
              key={addr.id}
              style={[
                style={{...styles.addressCard,
                selectedAddress === addr.id && style={{...styles.addressCardSelected,
              ]}
              onClick={() => setSelectedAddress(addr.id)}
            >
              <div style={style={{...styles.radioOuter}>
                {selectedAddress === addr.id && <div style={style={{...styles.radioInner} />}
              </div>
              <div style={style={{...styles.addressContent}>
                <span variant="body" color={colors.text.primary}>{addr.label}</span>
                <span variant="caption" color={colors.text.tertiary}>{addr.address}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Options */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            DELIVERY OPTIONS
          </span>

          {deliveryOptions.map((option) => (
            <div
              key={option.id}
              style={[
                style={{...styles.deliveryCard,
                selectedDelivery === option.id && style={{...styles.deliveryCardSelected,
              ]}
              onClick={() => setSelectedDelivery(option.id)}
            >
              <div style={style={{...styles.radioOuter}>
                {selectedDelivery === option.id && <div style={style={{...styles.radioInner} />}
              </div>
              <div style={style={{...styles.deliveryContent}>
                <span variant="body" color={colors.text.primary}>{option.label}</span>
                <span variant="caption" color={colors.text.tertiary}>{option.time}</span>
              </div>
              <span variant="body" color={option.price === 0 ? '#4CAF50' : colors.text.primary}>
                {option.price === 0 ? 'FREE' : `₹${option.price}`}
              </span>
            </div>
          ))}
        </div>

        {/* Pay with Coins */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            PAY WITH COINS
          </span>
          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.coinSubtext}>
            Select coins to reduce your bill (up to 50%)
          </span>

          {coins.map((coin) => (
            <div
              key={coin.type}
              style={[
                style={{...styles.coinCard,
                selectedCoins.includes(coin.type) && style={{...styles.coinCardSelected,
                { borderColor: selectedCoins.includes(coin.type) ? coin.color : '#2A2A2A' },
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
                    Balance: {coin.balance}
                  </span>
                </div>
              </div>
              <div style={style={{...styles.coinRight}>
                <span variant="bodyLarge" style={{ color: coin.color }}>
                  -₹{coin.balance}
                </span>
                <div style={[
                  style={{...styles.checkbox,
                  selectedCoins.includes(coin.type) && { backgroundColor: coin.color, borderColor: coin.color },
                ]}>
                  {selectedCoins.includes(coin.type) && (
                    <span style={style={{...styles.checkmark}>✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div style={style={{...styles.coinSummary}>
            <span variant="body" color={colors.text.secondary}>Coin Discount</span>
            <span variant="bodyLarge" gold>-₹{coinDiscount.toLocaleString()}</span>
          </div>
        </div>

        {/* Order Summary */}
        <div style={style={{...styles.summaryCard}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.summaryLabel}>
            ORDER SUMMARY
          </span>

          <div style={style={{...styles.summaryRow}>
            <span variant="body" color={colors.text.secondary}>Subtotal</span>
            <span variant="body" color={colors.text.primary}>₹{subtotal.toLocaleString()}</span>
          </div>

          <div style={style={{...styles.summaryRow}>
            <span variant="body" color={colors.text.secondary}>Delivery</span>
            <span variant="body" color={deliveryCharge === 0 ? '#4CAF50' : colors.text.primary}>
              {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
            </span>
          </div>

          <div style={style={{...styles.summaryRow}>
            <span variant="body" color={colors.text.secondary}>Coin Discount</span>
            <span variant="body" color="#4CAF50">-₹{coinDiscount.toLocaleString()}</span>
          </div>

          <div style={style={{...styles.summaryDivider} />

          <div style={style={{...styles.summaryRow}>
            <span variant="bodyLarge" color={colors.text.primary}>Amount to Pay</span>
            <span variant="h2" gold>₹{finalAmount.toLocaleString()}</span>
          </div>

          {/* Earnings Preview */}
          <div style={style={{...styles.earningsPreview}>
            <span variant="caption" color={colors.text.tertiary}>YOU'LL EARN</span>
            <span variant="body" color="#4CAF50">+{totalReward} coins</span>
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Pay Button */}
      <div style={style={{...styles.ctaContainer}>
        <div style={style={{...styles.payBtn} onClick={handlePayment}>
          <span variant="bodyLarge" color="#0A0A0A">
            Pay ₹{finalAmount.toLocaleString()}
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
    padding: spacing[5],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  addressCard: {
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
  addressCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.gold.primary,
  },
  addressContent: {
    flex: 1,
    gap: spacing[1],
  },
  deliveryCard: {
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
  deliveryCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  deliveryContent: {
    flex: 1,
    gap: spacing[1],
  },
  coinSubtext: {
    marginTop: -spacing[2],
    marginBottom: spacing[3],
  },
  coinCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
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
  summaryCard: {
    margin: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  summaryLabel: {
    marginBottom: spacing[4],
    letterSpacing: 1,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginVertical: spacing[3],
  },
  earningsPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  bottomSpace: {
    height: 100,
  },
  ctaContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  payBtn: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
};

export default CheckoutScreen;
