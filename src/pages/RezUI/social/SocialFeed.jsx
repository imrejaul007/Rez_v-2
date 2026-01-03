/**
 * Social Feed
 * Purpose: Show friends' activity, savings, and deals
 * UI: Activity feed, leaderboard, share savings
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialFeed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('feed');

  const mockFeed = [
    {
      id: 1,
      user: { name: 'Priya Sharma', avatar: '👩' },
      action: 'saved',
      amount: 450,
      store: 'Zara',
      category: 'Fashion',
      time: '2h ago',
      likes: 12,
      comments: 3,
    },
    {
      id: 2,
      user: { name: 'Rahul Verma', avatar: '👨' },
      action: 'unlocked',
      achievement: 'Super Saver',
      description: 'Saved ₹5,000 this month',
      time: '4h ago',
      likes: 24,
      comments: 5,
    },
    {
      id: 3,
      user: { name: 'Sneha Reddy', avatar: '👩' },
      action: 'purchased',
      item: 'iPhone 15 Pro',
      amount: 1299,
      store: 'Apple Store',
      time: '6h ago',
      likes: 45,
      comments: 12,
    },
    {
      id: 4,
      user: { name: 'Arjun Mehta', avatar: '👨' },
      action: 'reviewed',
      item: 'Noise ColorFit Pro 4',
      rating: 5,
      store: 'Amazon',
      time: '1d ago',
      likes: 8,
      comments: 2,
    },
    {
      id: 5,
      user: { name: 'Anjali Gupta', avatar: '👩' },
      action: 'referred',
      friends: 3,
      earned: 150,
      time: '1d ago',
      likes: 15,
      comments: 4,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'You', avatar: '🎯', totalSaved: 12450, streak: 15, isCurrent: true },
    { rank: 2, name: 'Priya Sharma', avatar: '👩', totalSaved: 11200, streak: 12 },
    { rank: 3, name: 'Rahul Verma', avatar: '👨', totalSaved: 9800, streak: 20 },
    { rank: 4, name: 'Sneha Reddy', avatar: '👩', totalSaved: 8500, streak: 8 },
    { rank: 5, name: 'Arjun Mehta', avatar: '👨', totalSaved: 7300, streak: 10 },
    { rank: 6, name: 'Anjali Gupta', avatar: '👩', totalSaved: 6900, streak: 5 },
  ];

  const renderActivityIcon = (action) => {
    switch (action) {
      case 'saved': return '💰';
      case 'unlocked': return '🏆';
      case 'purchased': return '🛍️';
      case 'reviewed': return '⭐';
      case 'referred': return '👥';
      default: return '📱';
    }
  };

  const renderActivityText = (activity) => {
    switch (activity.action) {
      case 'saved':
        return (
          <span>
            <strong>{activity.user.name}</strong> saved ₹{activity.amount} at <strong>{activity.store}</strong>
          </span>
        );
      case 'unlocked':
        return (
          <span>
            <strong>{activity.user.name}</strong> unlocked {activity.achievement} badge
          </span>
        );
      case 'purchased':
        return (
          <span>
            <strong>{activity.user.name}</strong> purchased {activity.item} and saved ₹{activity.amount}
          </span>
        );
      case 'reviewed':
        return (
          <span>
            <strong>{activity.user.name}</strong> gave {activity.rating}⭐ to {activity.item}
          </span>
        );
      case 'referred':
        return (
          <span>
            <strong>{activity.user.name}</strong> referred {activity.friends} friends and earned ₹{activity.earned}
          </span>
        );
      default:
        return <span>{activity.user.name} did something cool</span>;
    }
  };

  const renderFeed = () => (
    <div>
      {/* My Stats */}
      <div style={{
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        padding: '20px',
        borderRadius: '16px',
        color: '#FFFFFF',
        marginBottom: '20px',
      }}>
        <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>
          Your Savings This Month
        </div>
        <div style={{ fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>
          ₹12,450
        </div>
        <div style={{ fontSize: '13px', opacity: 0.9 }}>
          Rank #1 among your friends • 15 day streak 🔥
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginTop: '16px',
        }}>
          <div style={{
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>24</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Purchases</div>
          </div>
          <div style={{
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>15</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Day Streak</div>
          </div>
          <div style={{
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: '700' }}>8</div>
            <div style={{ fontSize: '11px', opacity: 0.9 }}>Referrals</div>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {mockFeed.map((activity) => (
          <div
            key={activity.id}
            style={{
              backgroundColor: '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}
          >
            {/* User & Action */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '22px',
                backgroundColor: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                flexShrink: 0,
              }}>
                {activity.user.avatar}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', color: '#1F2937', marginBottom: '4px' }}>
                  {renderActivityText(activity)}
                </div>
                <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                  {activity.time}
                </div>
              </div>

              <div style={{ fontSize: '24px' }}>
                {renderActivityIcon(activity.action)}
              </div>
            </div>

            {/* Description */}
            {activity.description && (
              <div style={{
                padding: '12px',
                backgroundColor: '#F9FAFB',
                borderRadius: '8px',
                fontSize: '13px',
                color: '#6B7280',
                marginBottom: '12px',
              }}>
                {activity.description}
              </div>
            )}

            {/* Actions */}
            <div style={{
              display: 'flex',
              gap: '16px',
              paddingTop: '12px',
              borderTop: '1px solid #F3F4F6',
            }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#6B7280',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                  e.currentTarget.style.color = '#10B981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#6B7280';
                }}
              >
                <span>👍</span>
                <span>{activity.likes}</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#6B7280',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                  e.currentTarget.style.color = '#10B981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#6B7280';
                }}
              >
                <span>💬</span>
                <span>{activity.comments}</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#6B7280',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F9FAFB';
                  e.currentTarget.style.color = '#10B981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#6B7280';
                }}
              >
                <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share Your Savings CTA */}
      <div style={{
        backgroundColor: '#EFF6FF',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #DBEAFE',
        marginTop: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '12px' }}>🎉</div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E40AF', marginBottom: '8px' }}>
          Share Your Savings
        </h3>
        <p style={{ fontSize: '13px', color: '#1E3A8A', marginBottom: '16px' }}>
          Let your friends know how much you're saving with ReZ!
        </p>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'My ReZ Savings',
                text: 'I saved ₹12,450 this month using ReZ! Join me and start saving.',
                url: 'https://rez.app',
              });
            }
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Share Now
        </button>
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div>
      <div style={{
        backgroundColor: '#FFFBEB',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid #FDE68A',
        marginBottom: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏆</div>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400E', marginBottom: '4px' }}>
          Top Saver This Month!
        </div>
        <div style={{ fontSize: '12px', color: '#B45309' }}>
          Keep it up! You're saving more than all your friends.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {leaderboard.map((person) => (
          <div
            key={person.rank}
            style={{
              backgroundColor: person.isCurrent ? '#ECFDF5' : '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: person.isCurrent ? '2px solid #10B981' : '1px solid #E5E7EB',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '22px',
                backgroundColor: person.rank <= 3 ? '#FEF3C7' : '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '700',
                color: person.rank <= 3 ? '#D97706' : '#6B7280',
                flexShrink: 0,
              }}>
                {person.rank === 1 && '🥇'}
                {person.rank === 2 && '🥈'}
                {person.rank === 3 && '🥉'}
                {person.rank > 3 && person.rank}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937', marginBottom: '2px' }}>
                  {person.name}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  {person.streak} day streak 🔥
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                  ₹{person.totalSaved.toLocaleString()}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>
                  total saved
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: '#F0FDF4',
        padding: '16px',
        borderRadius: '12px',
        marginTop: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '13px', color: '#047857', marginBottom: '8px' }}>
          💡 Invite friends to compete and save together!
        </div>
        <button
          onClick={() => navigate('/referral')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Invite Friends
        </button>
      </div>
    </div>
  );

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
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
            Friends & Activity
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'feed', label: 'Feed', icon: '📱' },
            { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: activeTab === tab.id ? '#10B981' : '#FFFFFF',
                color: activeTab === tab.id ? '#FFFFFF' : '#6B7280',
                border: activeTab === tab.id ? 'none' : '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        {activeTab === 'feed' && renderFeed()}
        {activeTab === 'leaderboard' && renderLeaderboard()}
      </div>
    </div>
  );
};

export default SocialFeed;
