/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * B2 - Privé Wallet Screen
 * Shows all 3 coin types: ReZ, Branded, Privé
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

interface WalletScreenProps {
  onBack?: () => void;
}

interface CoinType {
  id: string;
  name: string;
  balance: number;
  color: string;
  icon: string;
  description: string;
}

interface Transaction {
  id: string;
  type: 'earn' | 'spend';
  coinType: string;
  amount: number;
  description: string;
  date: string;
}

export const B2_WalletScreen: React.FC<WalletScreenProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'all' | 'rez' | 'branded' | 'prive'>('all');

  const coins: CoinType[] = [
    {
      id: 'rez',
      name: 'ReZ Coin',
      balance: 2450,
      color: '#4CAF50',
      icon: '◉',
      description: 'Universal rewards currency',
    },
    {
      id: 'branded',
      name: 'Branded Coins',
      balance: 850,
      color: '#64B5F6',
      icon: '◈',
      description: 'Store-specific rewards',
    },
    {
      id: 'prive',
      name: 'Privé Coin',
      balance: 3200,
      color: '#C9A962',
      icon: '✦',
      description: 'Premium rewards currency',
    },
  ];

  const totalValue = coins.reduce((sum, c) => sum + c.balance, 0);

  const transactions: Transaction[] = [
    { id: '1', type: 'earn', coinType: 'prive', amount: 375, description: 'Purchase at Luxury Café', date: 'Today' },
    { id: '2', type: 'earn', coinType: 'rez', amount: 125, description: 'Purchase at Luxury Café', date: 'Today' },
    { id: '3', type: 'spend', coinType: 'prive', amount: 500, description: 'Amazon Gift Card', date: 'Yesterday' },
    { id: '4', type: 'earn', coinType: 'branded', amount: 200, description: 'Bonus from Summer Collection', date: '2 days ago' },
    { id: '5', type: 'earn', coinType: 'prive', amount: 50, description: 'Social share bonus', date: '3 days ago' },
  ];

  const filteredTransactions = activeTab === 'all'
    ? transactions
    : transactions.filter(t => t.coinType === activeTab);

  const getCoinColor = (type: string) => {
    const coin = coins.find(c => c.id === type);
    return coin?.color || '#FFFFFF';
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div onClick={onBack || (() => navigate(-1))}>
          <span variant="body" gold>← Back</span>
        </div>
        <span variant="h3" color={colors.text.primary}>Privé Wallet</span>
        <div style={{ width: 50 }} />
      </div>

      <div style={style={{...styles.scrollView} >
        {/* Total Balance */}
        <div style={style={{...styles.totalCard}>
          <span variant="caption" color={colors.text.tertiary}>TOTAL WALLET VALUE</span>
          <span variant="h1" gold style={style={{...styles.totalAmount}>₹{totalValue.toLocaleString()}</span>
        </div>

        {/* Coin Cards */}
        <div style={style={{...styles.coinsSection}>
          {coins.map((coin) => (
            <div key={coin.id} style={style={{...styles.coinCard}>
              <div style={style={{...styles.coinLeft}>
                <div style={[style={{...styles.coinIcon, { backgroundColor: coin.color + '20' }]}>
                  <span style={[style={{...styles.coinIconText, { color: coin.color }]}>{coin.icon}</span>
                </div>
                <div>
                  <span variant="bodyLarge" color={colors.text.primary}>{coin.name}</span>
                  <span variant="caption" color={colors.text.tertiary}>{coin.description}</span>
                </div>
              </div>
              <span variant="h3" style={{ color: coin.color }}>{coin.balance.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* Privé Info */}
        <div style={style={{...styles.priveInfoCard}>
          <span variant="body" gold>✦ Privé Coin Benefits</span>
          <span variant="caption" color={colors.text.secondary} style={{ marginTop: spacing[2] }}>
            Redeem for gift cards, luxury experiences, and exclusive products.
          </span>
        </div>

        {/* Filter Tabs */}
        <div style={style={{...styles.filterSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>ACTIVITY</span>
          <div style={style={{...styles.filterTabs}>
            {['all', 'prive', 'rez', 'branded'].map((tab) => (
              <div
                key={tab}
                style={[style={{...styles.filterTab, activeTab === tab && style={{...styles.filterTabActive]}
                onClick={() => setActiveTab(tab as any)}
              >
                <span variant="caption" color={activeTab === tab ? '#0A0A0A' : colors.text.secondary}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div style={style={{...styles.transactionsSection}>
          {filteredTransactions.map((tx) => (
            <div key={tx.id} style={style={{...styles.transactionItem}>
              <div style={style={{...styles.txLeft}>
                <div style={[style={{...styles.txIcon, { backgroundColor: tx.type === 'earn' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(239, 83, 80, 0.2)' }]}>
                  <span style={{ color: tx.type === 'earn' ? '#4CAF50' : '#EF5350' }}>
                    {tx.type === 'earn' ? '↓' : '↑'}
                  </span>
                </div>
                <div>
                  <span variant="body" color={colors.text.primary}>{tx.description}</span>
                  <span variant="caption" color={colors.text.tertiary}>{tx.date}</span>
                </div>
              </div>
              <span variant="bodyLarge" style={{ color: tx.type === 'earn' ? getCoinColor(tx.coinType) : '#EF5350' }}>
                {tx.type === 'earn' ? '+' : '-'}{tx.amount}
              </span>
            </div>
          ))}
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* Redeem Button */}
      <div style={style={{...styles.redeemContainer}>
        <div style={style={{...styles.redeemButton}>
          <span variant="bodyLarge" color="#0A0A0A">Redeem Coins</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#0A0A0A' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  scrollView: { flex: 1 },
  totalCard: {
    alignItems: 'center',
    paddingVertical: spacing[8],
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  totalAmount: { fontSize: 48, marginTop: spacing[2] },
  coinsSection: { padding: spacing[5], gap: spacing[3] },
  coinCard: {
    backgroundColor: '#181818',
    borderRadius: 16,
    padding: spacing[4],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  coinLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing[3] },
  coinIcon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  coinIconText: { fontSize: 24 },
  priveInfoCard: {
    marginHorizontal: spacing[5],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: 12,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  filterSection: { paddingHorizontal: spacing[5], paddingTop: spacing[6] },
  sectionLabel: { marginBottom: spacing[3], letterSpacing: 1 },
  filterTabs: { flexDirection: 'row', gap: spacing[2] },
  filterTab: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: 20,
    backgroundColor: '#181818',
  },
  filterTabActive: { backgroundColor: '#C9A962' },
  transactionsSection: { paddingHorizontal: spacing[5], paddingTop: spacing[4] },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  txLeft: { flexDirection: 'row', alignItems: 'center', gap: spacing[3] },
  txIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  bottomSpace: { height: 100 },
  redeemContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  redeemButton: { backgroundColor: '#C9A962', paddingVertical: spacing[4], borderRadius: 12, alignItems: 'center' },
};

export default B2_WalletScreen;
