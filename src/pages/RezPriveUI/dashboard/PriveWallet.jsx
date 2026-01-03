/**
 * Privé Wallet Screen
 * Shows all 3 coin types: ReZ, Branded, Privé
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveWallet = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const coins = [
    { id: 'rez', name: 'ReZ Coin', balance: 2450, color: '#4CAF50', icon: '◉', description: 'Universal rewards currency' },
    { id: 'branded', name: 'Branded Coins', balance: 850, color: '#64B5F6', icon: '◈', description: 'Store-specific rewards' },
    { id: 'prive', name: 'Privé Coin', balance: 3200, color: colors.gold.primary, icon: '✦', description: 'Premium rewards currency' },
  ];

  const totalValue = coins.reduce((sum, c) => sum + c.balance, 0);

  const transactions = [
    { id: '1', type: 'earn', coinType: 'prive', amount: 375, description: 'Purchase at Luxury Café', date: 'Today' },
    { id: '2', type: 'earn', coinType: 'rez', amount: 125, description: 'Purchase at Luxury Café', date: 'Today' },
    { id: '3', type: 'spend', coinType: 'prive', amount: 500, description: 'Amazon Gift Card', date: 'Yesterday' },
    { id: '4', type: 'earn', coinType: 'branded', amount: 200, description: 'Bonus from Summer Collection', date: '2 days ago' },
    { id: '5', type: 'earn', coinType: 'prive', amount: 50, description: 'Social share bonus', date: '3 days ago' },
  ];

  const filteredTransactions = activeTab === 'all' ? transactions : transactions.filter(t => t.coinType === activeTab);

  const getCoinColor = (type) => {
    const coin = coins.find(c => c.id === type);
    return coin?.color || '#FFFFFF';
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[5], borderBottom: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => navigate(-1)} style={{ fontSize: '15px', color: colors.gold.primary, cursor: 'pointer' }}>← Back</div>
        <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>Privé Wallet</div>
        <div style={{ width: '50px' }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Total Balance */}
        <div style={{ textAlign: 'center', padding: spacing[8] }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>TOTAL WALLET VALUE</div>
          <div style={{ fontSize: '48px', fontWeight: '300', color: colors.gold.primary }}>₹{totalValue.toLocaleString()}</div>
        </div>

        {/* Coin Cards */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[6] }}>
          {coins.map((coin) => (
            <div key={coin.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[5], backgroundColor: colors.background.card, borderRadius: borderRadius.lg, border: `1px solid ${colors.border.primary}`, marginBottom: spacing[3], cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: `${coin.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '24px', color: coin.color }}>{coin.icon}</div>
                </div>
                <div>
                  <div style={{ fontSize: '17px', color: colors.text.primary, marginBottom: spacing[1] }}>{coin.name}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{coin.description}</div>
                </div>
              </div>
              <div style={{ fontSize: '28px', fontWeight: '600', color: coin.color }}>{coin.balance.toLocaleString()}</div>
            </div>
          ))}
        </div>

        {/* Privé Info */}
        <div style={{ margin: `0 ${spacing[5]} ${spacing[6]}`, padding: spacing[5], backgroundColor: 'rgba(201, 169, 98, 0.1)', borderRadius: borderRadius.lg, border: `1px solid ${colors.border.goldMuted}` }}>
          <div style={{ fontSize: '15px', color: colors.gold.primary, marginBottom: spacing[2] }}>✦ Privé Coin Benefits</div>
          <div style={{ fontSize: '13px', color: colors.text.secondary }}>
            Redeem for gift cards, luxury experiences, and exclusive products.
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[4] }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>ACTIVITY</div>
          <div style={{ display: 'flex', gap: spacing[2] }}>
            {['all', 'prive', 'rez', 'branded'].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: `${spacing[2]} ${spacing[4]}`,
                  borderRadius: borderRadius.full,
                  backgroundColor: activeTab === tab ? colors.gold.primary : colors.background.card,
                  border: `1px solid ${activeTab === tab ? colors.gold.primary : colors.border.primary}`,
                  fontSize: '13px',
                  color: activeTab === tab ? '#0A0A0A' : colors.text.secondary,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[6] }}>
          {filteredTransactions.map((tx) => (
            <div key={tx.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[4], backgroundColor: colors.background.card, borderRadius: borderRadius.lg, border: `1px solid ${colors.border.primary}`, marginBottom: spacing[3] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: tx.type === 'earn' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(239, 83, 80, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '18px', color: tx.type === 'earn' ? '#4CAF50' : '#EF5350' }}>
                    {tx.type === 'earn' ? '↓' : '↑'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[1] }}>{tx.description}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{tx.date}</div>
                </div>
              </div>
              <div style={{ fontSize: '17px', color: tx.type === 'earn' ? getCoinColor(tx.coinType) : '#EF5350' }}>
                {tx.type === 'earn' ? '+' : '-'}{tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Redeem Button */}
      <div style={{ position: 'fixed', bottom: '100px', left: 0, right: 0, padding: spacing[5], backgroundColor: colors.background.primary, borderTop: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => navigate('/prive/redeem')} style={{ padding: spacing[4], backgroundColor: colors.gold.primary, borderRadius: borderRadius.xl, textAlign: 'center', fontSize: '17px', color: '#0A0A0A', fontWeight: '600', cursor: 'pointer' }}>
          Redeem Coins
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveWallet;
