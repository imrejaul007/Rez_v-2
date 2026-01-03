/**
 * Privé Influence Hub - Your Power Center
 * Purpose: Track and grow your influence
 * UI: Dark + gold luxury with performance metrics
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';
import ModeSwitcher from '../../components/ModeSwitcher';

const { colors, spacing, borderRadius } = priveTheme;

const PriveInfluenceHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  // Mock data - in production, fetch from API
  const stats = {
    score: 847,
    level: 'Strong',
    rank: 'Top 15%',
    totalReach: 124500,
    totalEngagement: 8920,
    avgEngagementRate: 7.2,
    totalEarnings: 45600,
    monthlyEarnings: 8400,
    activeCampaigns: 3,
    completedCampaigns: 47,
    pendingReview: 2,
    categoryAuthority: ['Lifestyle', 'Fashion', 'Dining'],
  };

  const mockContent = [
    {
      id: '1',
      brandName: 'Luxury Café',
      brandInitial: 'L',
      title: 'Weekend Brunch Experience',
      contentType: 'post',
      status: 'live',
      rewardPotential: 800,
      reach: 2450,
      engagement: 186,
      submittedDate: 'Dec 15',
    },
    {
      id: '2',
      brandName: 'Summer Collection',
      brandInitial: 'S',
      title: 'New Arrivals Showcase',
      contentType: 'reel',
      status: 'review',
      rewardPotential: 1200,
      submittedDate: 'Dec 18',
    },
    {
      id: '3',
      brandName: 'Premium Spa',
      brandInitial: 'P',
      title: 'Wellness Day Review',
      contentType: 'review',
      status: 'draft',
      rewardPotential: 600,
    },
    {
      id: '4',
      brandName: 'Urban Bistro',
      brandInitial: 'U',
      title: "Chef's Special Review",
      contentType: 'post',
      status: 'approved',
      rewardsEarned: 680,
      reach: 1820,
      engagement: 142,
      approvedDate: 'Dec 10',
    },
    {
      id: '5',
      brandName: 'Artisan Watch',
      brandInitial: 'A',
      title: 'Collection Preview',
      contentType: 'story',
      status: 'approved',
      rewardsEarned: 1500,
      reach: 3200,
      engagement: 245,
      approvedDate: 'Dec 5',
    },
  ];

  const tabs = [
    { key: 'active', label: 'Active' },
    { key: 'pending', label: 'Pending' },
    { key: 'completed', label: 'Completed' },
  ];

  const getStatusConfig = (status) => {
    switch (status) {
      case 'live':
        return { color: '#4CAF50', label: 'Live', icon: '●' };
      case 'review':
        return { color: '#FFC107', label: 'Under Review', icon: '◐' };
      case 'approved':
        return { color: colors.gold.primary, label: 'Approved', icon: '✓' };
      case 'draft':
        return { color: colors.text.tertiary, label: 'Draft', icon: '○' };
      case 'rejected':
        return { color: '#FF6B6B', label: 'Rejected', icon: '✕' };
      default:
        return { color: colors.text.tertiary, label: 'Unknown', icon: '?' };
    }
  };

  const getContentTypeLabel = (type) => {
    switch (type) {
      case 'post': return 'Post';
      case 'reel': return 'Reel';
      case 'story': return 'Story';
      case 'review': return 'Review';
      default: return type;
    }
  };

  const filteredContent = mockContent.filter((item) => {
    switch (activeTab) {
      case 'active':
        return item.status === 'live';
      case 'pending':
        return item.status === 'review' || item.status === 'draft';
      case 'completed':
        return item.status === 'approved';
      default:
        return true;
    }
  });

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ padding: `${spacing[4]}px ${spacing[5]}px ${spacing[2]}px` }}>
        <h1 style={{ fontSize: '28px', fontWeight: '300', color: colors.text.primary, marginBottom: spacing[1] }}>
          Influence
        </h1>
        <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
          Your content performance hub
        </p>
      </div>

      {/* Influence Score Hero */}
      <div
        onClick={() => navigate('/prive/influence-score')}
        style={{
          margin: `${spacing[4]}px ${spacing[5]}px 0`,
          borderRadius: borderRadius.xl,
          overflow: 'hidden',
          border: '1px solid rgba(201, 169, 98, 0.3)',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.12), rgba(201, 169, 98, 0.04), #141414)',
        }}
      >
        <div style={{ padding: spacing[5] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3] }}>
            <span style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>
              INFLUENCE SCORE
            </span>
            <div style={{ padding: `${spacing[1]}px ${spacing[3]}px`, backgroundColor: 'rgba(201, 169, 98, 0.15)', borderRadius: borderRadius.full }}>
              <span style={{ fontSize: '13px', color: colors.gold.primary }}>{stats.rank}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', gap: spacing[4], marginBottom: spacing[4] }}>
            <div style={{ fontSize: '56px', fontWeight: '200', color: colors.gold.primary, lineHeight: '60px' }}>
              {stats.score}
            </div>
            <div style={{ paddingBottom: spacing[2] }}>
              <div style={{ fontSize: '17px', fontWeight: '500', color: colors.gold.primary, marginBottom: '2px' }}>
                {stats.level}
              </div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
                Influence Level
              </div>
            </div>
          </div>

          <div style={{ marginBottom: spacing[3] }}>
            <div style={{ height: '4px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
              <div style={{
                height: '100%',
                width: `${(stats.score / 1000) * 100}%`,
                background: `linear-gradient(90deg, ${colors.gold.primary}, ${colors.gold.light})`,
                boxShadow: `0 0 12px ${colors.gold.primary}80`,
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing[1] }}>
              <span style={{ fontSize: '11px', color: colors.text.tertiary }}>0</span>
              <span style={{ fontSize: '11px', color: colors.text.tertiary }}>1000</span>
            </div>
          </div>

          <div style={{ fontSize: '13px', color: colors.gold.primary, textAlign: 'center' }}>
            View Score Breakdown →
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'flex', padding: `${spacing[4]}px ${spacing[5]}px 0`, gap: spacing[3] }}>
        <div style={{ flex: 1, backgroundColor: '#141414', borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center', border: '1px solid #2A2A2A' }}>
          <div style={{ fontSize: '20px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[1] }}>
            {formatNumber(stats.totalReach)}
          </div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Total Reach</div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#141414', borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center', border: '1px solid #2A2A2A' }}>
          <div style={{ fontSize: '20px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[1] }}>
            {stats.avgEngagementRate}%
          </div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Avg Engagement</div>
        </div>
        <div style={{ flex: 1, backgroundColor: '#141414', borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center', border: '1px solid #2A2A2A' }}>
          <div style={{ fontSize: '20px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[1] }}>
            {stats.completedCampaigns}
          </div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Campaigns</div>
        </div>
      </div>

      {/* Earnings Card */}
      <div style={{
        margin: `${spacing[4]}px ${spacing[5]}px 0`,
        backgroundColor: '#141414',
        borderRadius: borderRadius.lg,
        padding: spacing[4],
        border: '1px solid #2A2A2A',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3] }}>
          <span style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>EARNINGS</span>
          <div onClick={() => navigate('/prive/wallet')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>
            View Wallet →
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '300', color: colors.text.primary, marginBottom: spacing[1] }}>
              {stats.totalEarnings.toLocaleString()}
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Total Coins</div>
          </div>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '300', color: '#4CAF50', marginBottom: spacing[1] }}>
              +{stats.monthlyEarnings.toLocaleString()}
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>This Month</div>
          </div>
        </div>
      </div>

      {/* Category Authority */}
      <div style={{ marginTop: spacing[6] }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 ${spacing[5]}px`, marginBottom: spacing[3] }}>
          <span style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>CATEGORY AUTHORITY</span>
          <div onClick={() => navigate('/prive/category-authority')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>
            Details →
          </div>
        </div>
        <div style={{ display: 'flex', overflowX: 'auto', padding: `0 ${spacing[5]}px`, gap: spacing[3] }}>
          {stats.categoryAuthority.map((category) => (
            <div
              key={category}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing[2],
                padding: `${spacing[3]}px ${spacing[4]}px`,
                backgroundColor: 'rgba(201, 169, 98, 0.08)',
                borderRadius: borderRadius.lg,
                border: '1px solid rgba(201, 169, 98, 0.2)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '12px', color: colors.gold.primary }}>◆</span>
              <span style={{ fontSize: '15px', color: colors.text.primary }}>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <div style={{ marginTop: spacing[6], padding: `0 ${spacing[5]}px` }}>
        <div style={{ display: 'flex', backgroundColor: '#141414', borderRadius: borderRadius.lg, padding: spacing[1] }}>
          {tabs.map((tab) => {
            const count = mockContent.filter((item) => {
              if (tab.key === 'active') return item.status === 'live';
              if (tab.key === 'pending') return item.status === 'review' || item.status === 'draft';
              if (tab.key === 'completed') return item.status === 'approved';
              return false;
            }).length;

            return (
              <div
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: spacing[2],
                  padding: `${spacing[3]}px 0`,
                  borderRadius: borderRadius.md,
                  backgroundColor: activeTab === tab.key ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '15px', color: activeTab === tab.key ? colors.gold.primary : colors.text.secondary }}>
                  {tab.label}
                </span>
                {count > 0 && (
                  <div style={{
                    padding: '2px 8px',
                    backgroundColor: activeTab === tab.key ? 'rgba(201, 169, 98, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: borderRadius.full,
                  }}>
                    <span style={{ fontSize: '11px', color: colors.text.secondary }}>{count}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content List */}
      <div style={{ marginTop: spacing[4], padding: `0 ${spacing[5]}px` }}>
        {filteredContent.length === 0 ? (
          <div style={{ padding: `${spacing[12]}px 0`, textAlign: 'center' }}>
            <div style={{ fontSize: '32px', color: colors.text.tertiary, marginBottom: spacing[2] }}>○</div>
            <p style={{ fontSize: '15px', color: colors.text.tertiary, marginBottom: spacing[1] }}>
              No content in this category
            </p>
            <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
              {activeTab === 'active' && 'Your live content will appear here'}
              {activeTab === 'pending' && 'Content awaiting review will appear here'}
              {activeTab === 'completed' && 'Approved content will appear here'}
            </p>
          </div>
        ) : (
          filteredContent.map((item) => {
            const statusConfig = getStatusConfig(item.status);
            return (
              <div
                key={item.id}
                onClick={() => navigate(`/prive/content/${item.id}`)}
                style={{
                  backgroundColor: '#141414',
                  borderRadius: borderRadius.lg,
                  padding: spacing[4],
                  marginBottom: spacing[3],
                  border: '1px solid #2A2A2A',
                  cursor: 'pointer',
                }}
              >
                {/* Content Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing[3] }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '20px',
                      backgroundColor: 'rgba(201, 169, 98, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(201, 169, 98, 0.2)',
                    }}>
                      <span style={{ fontSize: '16px', fontWeight: '500', color: colors.gold.primary }}>
                        {item.brandInitial}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>
                        {item.brandName}
                      </div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
                        {getContentTypeLabel(item.contentType)}
                      </div>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: spacing[1],
                    padding: `${spacing[1]}px ${spacing[2]}px`,
                    borderRadius: borderRadius.sm,
                    backgroundColor: `${statusConfig.color}15`,
                  }}>
                    <span style={{ fontSize: '10px', color: statusConfig.color }}>{statusConfig.icon}</span>
                    <span style={{ fontSize: '13px', color: statusConfig.color }}>{statusConfig.label}</span>
                  </div>
                </div>

                <div style={{ fontSize: '17px', color: colors.text.primary, marginBottom: spacing[3] }}>
                  {item.title}
                </div>

                {/* Performance Stats (for live/approved) */}
                {(item.status === 'live' || item.status === 'approved') && item.reach && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: `${spacing[3]}px 0`,
                    marginBottom: spacing[2],
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', color: colors.gold.primary, marginBottom: spacing[1] }}>
                        {formatNumber(item.reach)}
                      </div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Reach</div>
                    </div>
                    <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[1] }}>
                        {formatNumber(item.engagement || 0)}
                      </div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Engagement</div>
                    </div>
                    <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[1] }}>
                        {((item.engagement || 0) / (item.reach || 1) * 100).toFixed(1)}%
                      </div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Rate</div>
                    </div>
                  </div>
                )}

                {/* Reward Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {item.rewardsEarned ? (
                      <>
                        <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Earned</span>
                        <span style={{ fontSize: '15px', color: colors.gold.primary, marginLeft: '4px' }}>
                          {item.rewardsEarned.toLocaleString()} coins
                        </span>
                      </>
                    ) : item.rewardPotential ? (
                      <>
                        <span style={{ fontSize: '13px', color: colors.text.tertiary }}>Potential</span>
                        <span style={{ fontSize: '15px', color: colors.text.secondary, marginLeft: '4px' }}>
                          {item.rewardPotential.toLocaleString()} coins
                        </span>
                      </>
                    ) : null}
                  </div>
                  <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
                    {item.approvedDate || item.submittedDate || 'Draft'}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: spacing[6], padding: `0 ${spacing[5]}px`, display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        <div
          onClick={() => navigate('/prive/content-guidelines')}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: spacing[4],
            backgroundColor: '#141414',
            borderRadius: borderRadius.lg,
            border: '1px solid #2A2A2A',
            gap: spacing[3],
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '22px',
            backgroundColor: 'rgba(201, 169, 98, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '20px' }}>📋</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>
              Content Guidelines
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
              Best practices for high-performing content
            </div>
          </div>
          <span style={{ fontSize: '15px', color: colors.gold.primary }}>→</span>
        </div>

        <div
          onClick={() => navigate('/prive/boost-visibility')}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: spacing[4],
            backgroundColor: '#141414',
            borderRadius: borderRadius.lg,
            border: '1px solid #2A2A2A',
            gap: spacing[3],
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '22px',
            backgroundColor: 'rgba(201, 169, 98, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '20px' }}>✨</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: '2px' }}>
              Boost Visibility
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>
              Increase your content reach
            </div>
          </div>
          <span style={{ fontSize: '15px', color: colors.gold.primary }}>→</span>
        </div>
      </div>

      <ModeSwitcher />
      <BottomNavManager />
    </div>
  );
};

export default PriveInfluenceHub;
