/**
 * Coin History
 * Purpose: Display all coin transactions (earned, redeemed, expired)
 * UI: Transaction list with filters, balance summary, earning tips
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CoinHistory = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const coinBalance = {
    total: 1250,
    expiringSoon: 200,
    expiryDate: 'Dec 31, 2024',
  };

  const mockTransactions = [
    {
      id: 1,
      type: 'earned',
      amount: 150,
      reason: 'Purchase cashback',
      description: 'Fashion purchase at Zara',
      date: 'Dec 22, 2024',
      time: '3:45 PM',
      orderId: 'ORD123456',
    },
    {
      id: 2,
      type: 'redeemed',
      amount: -200,
      reason: 'Coin redemption',
      description: 'Applied on concert ticket booking',
      date: 'Dec 20, 2024',
      time: '7:20 PM',
      orderId: 'EVT987654',
    },
    {
      id: 3,
      type: 'earned',
      amount: 50,
      reason: 'Referral bonus',
      description: 'Friend joined using your code',
      date: 'Dec 18, 2024',
      time: '11:30 AM',
    },
    {
      id: 4,
      type: 'earned',
      amount: 100,
      reason: 'Daily check-in',
      description: '7-day streak completed',
      date: 'Dec 15, 2024',
      time: '9:15 AM',
    },
    {
      id: 5,
      type: 'expired',
      amount: -50,
      reason: 'Coins expired',
      description: 'Coins from Nov 2023 order',
      date: 'Dec 10, 2024',
      time: '12:00 AM',
    },
    {
      id: 6,
      type: 'earned',
      amount: 300,
      reason: 'Purchase cashback',
      description: 'Electronics purchase',
      date: 'Dec 8, 2024',
      time: '5:30 PM',
      orderId: 'ORD789012',
    },
    {
      id: 7,
      type: 'earned',
      amount: 75,
      reason: 'Review bonus',
      description: 'Product review for headphones',
      date: 'Dec 5, 2024',
      time: '2:10 PM',
    },
    {
      id: 8,
      type: 'redeemed',
      amount: -100,
      reason: 'Coin redemption',
      description: 'Applied on food order',
      date: 'Dec 3, 2024',
      time: '8:45 PM',
      orderId: 'ORD345678',
    },
  ];

  const getFilteredTransactions = () => {
    if (activeFilter === 'all') return mockTransactions;
    return mockTransactions.filter(t => t.type === activeFilter);
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'earned': return '⬆️';
      case 'redeemed': return '⬇️';
      case 'expired': return '⏰';
      default: return '🪙';
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'earned': return { bg: '#D1FAE5', text: '#047857' };
      case 'redeemed': return { bg: '#FEE2E2', text: '#DC2626' };
      case 'expired': return { bg: '#F3F4F6', text: '#6B7280' };
      default: return { bg: '#F9FAFB', text: '#1F2937' };
    }
  };

  const filteredTransactions = getFilteredTransactions();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      paddingBottom: '80px',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
          </button>
          <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
            Coin History
          </h1>
        </div>
      </div>

      {/* Coin Balance Summary */}
      <div style={{ padding: '20px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          padding: '24px',
          borderRadius: '16px',
          color: '#FFFFFF',
          marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '40px' }}>🪙</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>
                Available Balance
              </div>
              <div style={{ fontSize: '32px', fontWeight: '700' }}>
                {coinBalance.total.toLocaleString()}
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                coins = ₹{coinBalance.total.toLocaleString()}
              </div>
            </div>
          </div>

          {coinBalance.expiringSoon > 0 && (
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              fontSize: '13px',
            }}>
              ⚠️ {coinBalance.expiringSoon} coins expiring on {coinBalance.expiryDate}
            </div>
          )}
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px',
          overflowX: 'auto',
          paddingBottom: '4px',
        }}>
          {[
            { id: 'all', label: 'All', icon: '📊' },
            { id: 'earned', label: 'Earned', icon: '⬆️' },
            { id: 'redeemed', label: 'Redeemed', icon: '⬇️' },
            { id: 'expired', label: 'Expired', icon: '⏰' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: activeFilter === filter.id ? '#10B981' : '#FFFFFF',
                color: activeFilter === filter.id ? '#FFFFFF' : '#6B7280',
                border: activeFilter === filter.id ? 'none' : '1px solid #E5E7EB',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredTransactions.length === 0 ? (
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '60px 20px',
              borderRadius: '12px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>🪙</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
                No transactions found
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280' }}>
                No {activeFilter} transactions to show
              </p>
            </div>
          ) : (
            filteredTransactions.map((transaction) => {
              const colors = getTransactionColor(transaction.type);
              return (
                <div
                  key={transaction.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: colors.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}>
                      {getTransactionIcon(transaction.type)}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px' }}>
                        <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937' }}>
                          {transaction.reason}
                        </div>
                        <div style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: colors.text,
                          marginLeft: '8px',
                        }}>
                          {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                        </div>
                      </div>

                      <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>
                        {transaction.description}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                          {transaction.date} • {transaction.time}
                        </div>
                        {transaction.orderId && (
                          <div style={{
                            fontSize: '11px',
                            color: '#6B7280',
                            fontFamily: 'monospace',
                            backgroundColor: '#F9FAFB',
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}>
                            {transaction.orderId}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Earn More Coins CTA */}
        <div style={{
          backgroundColor: '#EFF6FF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #DBEAFE',
          marginTop: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '28px' }}>💰</span>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E40AF', margin: 0 }}>
              Earn More Coins
            </h3>
          </div>

          <div style={{ fontSize: '13px', color: '#1E3A8A', marginBottom: '16px' }}>
            Get more coins and save on your purchases!
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <div style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#1F2937',
            }}>
              🛍️ <strong>Shop & Earn:</strong> Get 10% back in coins on every purchase
            </div>
            <div style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#1F2937',
            }}>
              👥 <strong>Refer Friends:</strong> Earn 50 coins for each successful referral
            </div>
            <div style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#1F2937',
            }}>
              ✍️ <strong>Write Reviews:</strong> Get 25 coins for detailed product reviews
            </div>
            <div style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#1F2937',
            }}>
              ✓ <strong>Daily Check-in:</strong> Earn bonus coins for consistent app usage
            </div>
          </div>

          <button
            onClick={() => navigate('/earn')}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Explore Earning Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinHistory;
