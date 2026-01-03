/**
 * Earnings Screen
 * Comprehensive view of all earnings: cashback, invitations, campaigns, content, and more
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveEarnings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const earningSources = [
    { id: 'cashback', label: 'Cashback', icon: '◇', color: colors.gold.primary, total: 4850, pending: 1200 },
    { id: 'invitations', label: 'Invitations', icon: '✦', color: '#64B5F6', total: 2500, pending: 500 },
    { id: 'campaigns', label: 'Campaigns', icon: '★', color: '#4CAF50', total: 3200, pending: 800 },
    { id: 'content', label: 'Content', icon: '◎', color: '#FF9800', total: 1850, pending: 350 },
  ];

  const mockEarnings = [
    {
      id: '1',
      type: 'cashback',
      title: 'Purchase at Maison de Luxe',
      subtitle: 'Artisan Leather Wallet',
      amount: 675,
      coinType: 'prive',
      status: 'pending',
      date: 'Today',
      estimatedDate: 'Dec 22, 2025',
    },
    {
      id: '2',
      type: 'store_visit',
      title: 'Store Visit Reward',
      subtitle: 'The Grand Café',
      amount: 320,
      coinType: 'rez',
      status: 'pending',
      date: 'Today',
      estimatedDate: 'Dec 21, 2025',
    },
    {
      id: '3',
      type: 'cashback',
      title: 'Weekend Dining',
      subtitle: 'Luxury Café',
      amount: 450,
      coinType: 'rez',
      status: 'completed',
      date: 'Dec 15, 2025',
    },
    {
      id: '4',
      type: 'referral',
      title: 'Referral Bonus',
      subtitle: 'Amit Sharma joined Privé',
      amount: 500,
      coinType: 'rez',
      status: 'completed',
      date: 'Dec 10, 2025',
    },
    {
      id: '5',
      type: 'invitation',
      title: 'Campaign Invitation Bonus',
      subtitle: 'Accepted Artisan Watch Co invite',
      amount: 200,
      coinType: 'prive',
      status: 'pending',
      date: 'Dec 18, 2025',
      estimatedDate: 'Dec 25, 2025',
    },
    {
      id: '6',
      type: 'campaign',
      title: 'Campaign Completion',
      subtitle: 'Weekend Dining Experience',
      amount: 1500,
      coinType: 'prive',
      status: 'processing',
      date: 'Dec 12, 2025',
      estimatedDate: 'Dec 25, 2025',
    },
    {
      id: '7',
      type: 'campaign',
      title: 'Campaign Milestone',
      subtitle: 'Luxury Café Holiday Special',
      amount: 800,
      coinType: 'prive',
      status: 'completed',
      date: 'Dec 8, 2025',
    },
    {
      id: '8',
      type: 'content',
      title: 'Social Share Bonus',
      subtitle: 'Instagram Story - 2.5K views',
      amount: 350,
      coinType: 'prive',
      status: 'pending',
      date: 'Yesterday',
      estimatedDate: 'Dec 23, 2025',
    },
    {
      id: '9',
      type: 'content',
      title: 'Review Reward',
      subtitle: 'Premium Spa - Featured Review',
      amount: 250,
      coinType: 'branded',
      status: 'completed',
      date: 'Dec 5, 2025',
    },
    {
      id: '10',
      type: 'bonus',
      title: 'Tier Upgrade Bonus',
      subtitle: 'Reached Privé Signature',
      amount: 1000,
      coinType: 'rez',
      status: 'completed',
      date: 'Nov 28, 2025',
    },
  ];

  const getTypeIcon = (type) => {
    const icons = {
      cashback: '◇',
      store_visit: '◇',
      invitation: '✦',
      referral: '✦',
      campaign: '★',
      content: '◎',
      bonus: '◈',
    };
    return icons[type] || '◇';
  };

  const getTypeColor = (type) => {
    const types = {
      cashback: colors.gold.primary,
      store_visit: colors.gold.primary,
      invitation: '#64B5F6',
      referral: '#64B5F6',
      campaign: '#4CAF50',
      content: '#FF9800',
      bonus: '#9C27B0',
    };
    return types[type] || colors.gold.primary;
  };

  const getCoinColor = (coinType) => {
    const coins = {
      rez: colors.gold.primary,
      prive: '#B8860B',
      branded: '#64B5F6',
    };
    return coins[coinType] || colors.gold.primary;
  };

  const getStatusColor = (status) => {
    const statuses = {
      completed: '#4CAF50',
      pending: '#FFC107',
      processing: '#64B5F6',
    };
    return statuses[status] || colors.text.tertiary;
  };

  // Calculate totals
  const totalEarned = mockEarnings.reduce((sum, e) => sum + e.amount, 0);
  const pendingTotal = mockEarnings
    .filter(e => e.status === 'pending' || e.status === 'processing')
    .reduce((sum, e) => sum + e.amount, 0);
  const completedTotal = mockEarnings
    .filter(e => e.status === 'completed')
    .reduce((sum, e) => sum + e.amount, 0);

  // Filter earnings
  const filteredEarnings = mockEarnings.filter(e => {
    if (activeTab === 'cashback' && e.type !== 'cashback' && e.type !== 'store_visit') return false;
    if (activeTab === 'invitations' && e.type !== 'invitation' && e.type !== 'referral') return false;
    if (activeTab === 'campaigns' && e.type !== 'campaign') return false;
    if (activeTab === 'content' && e.type !== 'content') return false;

    if (statusFilter === 'pending' && e.status !== 'pending' && e.status !== 'processing') return false;
    if (statusFilter === 'completed' && e.status !== 'completed') return false;

    return true;
  });

  const tabs = [
    { id: 'all', label: 'All', icon: '◈' },
    { id: 'cashback', label: 'Cashback', icon: '◇' },
    { id: 'invitations', label: 'Invitations', icon: '✦' },
    { id: 'campaigns', label: 'Campaigns', icon: '★' },
    { id: 'content', label: 'Content', icon: '◎' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${spacing[3]}px ${spacing[4]}px`,
        borderBottom: '1px solid #1A1A1A',
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
          <span style={{ fontSize: '18px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
          My Earnings
        </h1>
        <div style={{ width: '40px' }} />
      </div>

      {/* Total Earnings Hero */}
      <div style={{
        margin: spacing[5],
        borderRadius: borderRadius.xl,
        padding: `${spacing[6]}px`,
        textAlign: 'center',
        border: '1px solid rgba(201, 169, 98, 0.2)',
        background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.2), rgba(201, 169, 98, 0.05))',
      }}>
        <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
          TOTAL EARNED THIS MONTH
        </p>
        <div style={{ fontSize: '48px', fontWeight: '200', color: colors.gold.primary, margin: `${spacing[2]}px 0` }}>
          +{totalEarned.toLocaleString()}
        </div>
        <p style={{ fontSize: '13px', color: colors.text.tertiary }}>coins</p>

        <div style={{ display: 'flex', marginTop: spacing[5], justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}px` }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#4CAF50', margin: '0 auto 4px' }} />
            <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '4px' }}>Received</p>
            <p style={{ fontSize: '17px', fontWeight: '500', color: '#4CAF50' }}>+{completedTotal.toLocaleString()}</p>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(201, 169, 98, 0.3)' }} />
          <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}px` }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#FFC107', margin: '0 auto 4px' }} />
            <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '4px' }}>Pending</p>
            <p style={{ fontSize: '17px', fontWeight: '500', color: '#FFC107' }}>+{pendingTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Earning Sources Breakdown */}
      <div style={{ padding: `0 ${spacing[5]}px`, marginBottom: spacing[5] }}>
        <p style={{ fontSize: '11px', color: colors.text.tertiary, marginBottom: spacing[3] }}>
          EARNINGS BY SOURCE
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
          {earningSources.map((source) => (
            <div
              key={source.id}
              onClick={() => setActiveTab(source.id)}
              style={{
                backgroundColor: activeTab === source.id ? 'rgba(201, 169, 98, 0.05)' : '#181818',
                borderRadius: borderRadius.lg,
                padding: spacing[4],
                textAlign: 'center',
                border: `1px solid ${activeTab === source.id ? 'rgba(201, 169, 98, 0.4)' : '#2A2A2A'}`,
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: source.color + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px',
              }}>
                <span style={{ color: source.color, fontSize: '16px' }}>{source.icon}</span>
              </div>
              <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '4px' }}>{source.label}</p>
              <p style={{ fontSize: '15px', color: source.color, fontWeight: '500', marginBottom: '4px' }}>
                +{source.total.toLocaleString()}
              </p>
              {source.pending > 0 && (
                <p style={{ fontSize: '13px', color: '#FFC107' }}>
                  {source.pending.toLocaleString()} pending
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ overflowX: 'auto', marginBottom: spacing[3], padding: `0 ${spacing[5]}px` }}>
        <div style={{ display: 'flex', gap: spacing[2] }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: `${spacing[2]}px ${spacing[4]}px`,
                borderRadius: borderRadius.full,
                backgroundColor: activeTab === tab.id ? 'rgba(201, 169, 98, 0.15)' : '#181818',
                border: `1px solid ${activeTab === tab.id ? 'rgba(201, 169, 98, 0.3)' : '#2A2A2A'}`,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '13px', color: activeTab === tab.id ? colors.gold.primary : colors.text.tertiary }}>
                {tab.icon} {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div style={{ display: 'flex', gap: spacing[2], padding: `0 ${spacing[5]}px`, marginBottom: spacing[4] }}>
        {['all', 'pending', 'completed'].map((status) => (
          <div
            key={status}
            onClick={() => setStatusFilter(status)}
            style={{
              padding: `${spacing[2]}px ${spacing[4]}px`,
              borderRadius: borderRadius.md,
              backgroundColor: statusFilter === status ? 'rgba(201, 169, 98, 0.1)' : '#181818',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '13px', color: statusFilter === status ? colors.gold.primary : colors.text.tertiary }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        ))}
      </div>

      {/* How to Earn More */}
      <div
        onClick={() => navigate('/prive/explore')}
        style={{
          display: 'flex',
          alignItems: 'center',
          margin: `0 ${spacing[5]}px ${spacing[5]}px`,
          backgroundColor: '#181818',
          borderRadius: borderRadius.lg,
          padding: spacing[4],
          border: '1px solid #2A2A2A',
          gap: spacing[3],
          cursor: 'pointer',
        }}
      >
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '22px',
          backgroundColor: 'rgba(76, 175, 80, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: '20px', color: '#4CAF50' }}>↑</span>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>Earn More Coins</p>
          <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
            Shop, invite friends, complete campaigns, share content
          </p>
        </div>
        <span style={{ fontSize: '15px', color: colors.gold.primary }}>→</span>
      </div>

      {/* Earnings List */}
      <div style={{ padding: `0 ${spacing[5]}px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
          <span style={{ fontSize: '11px', color: colors.text.tertiary }}>
            {activeTab === 'all' ? 'ALL EARNINGS' : activeTab.toUpperCase()}
          </span>
          <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
            {filteredEarnings.length} transactions
          </span>
        </div>

        {filteredEarnings.length === 0 ? (
          <div style={{ padding: `${spacing[8]}px 0`, textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: colors.text.tertiary }}>
              No earnings in this category yet
            </p>
          </div>
        ) : (
          filteredEarnings.map((earning) => (
            <div
              key={earning.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#181818',
                borderRadius: borderRadius.lg,
                padding: spacing[4],
                marginBottom: spacing[3],
                border: '1px solid #2A2A2A',
                gap: spacing[3],
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '22px',
                backgroundColor: getTypeColor(earning.type) + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: getTypeColor(earning.type), fontSize: '16px' }}>
                  {getTypeIcon(earning.type)}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>
                  {earning.title}
                </p>
                <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: '4px' }}>
                  {earning.subtitle}
                </p>
                <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
                  {earning.date}
                  {earning.estimatedDate && ` · Expected: ${earning.estimatedDate}`}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '17px', fontWeight: '500', color: getCoinColor(earning.coinType), marginBottom: spacing[2] }}>
                  +{earning.amount}
                </p>
                <div style={{
                  padding: `${spacing[1]}px ${spacing[2]}px`,
                  borderRadius: borderRadius.sm,
                  backgroundColor: getStatusColor(earning.status) + '20',
                }}>
                  <span style={{ fontSize: '13px', color: getStatusColor(earning.status) }}>
                    {earning.status.charAt(0).toUpperCase() + earning.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveEarnings;
