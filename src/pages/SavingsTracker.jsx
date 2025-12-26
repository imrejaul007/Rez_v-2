/**
 * Savings Tracker
 * Purpose: Track total savings, goals, and achievements
 * UI: Savings overview, category breakdown, monthly trends, goals
 */

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SavingsTracker = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const savingsData = {
    total: 45750,
    thisMonth: 12450,
    lastMonth: 9800,
    thisYear: 45750,
    streak: 15,
    avgPerMonth: 7625,
  };

  const categoryBreakdown = [
    { category: 'Fashion', amount: 8500, percentage: 68, icon: '👗', color: '#EC4899' },
    { category: 'Electronics', amount: 2200, percentage: 18, icon: '📱', color: '#8B5CF6' },
    { category: 'Food & Dining', amount: 1100, percentage: 9, icon: '🍽️', color: '#F59E0B' },
    { category: 'Beauty', amount: 650, percentage: 5, icon: '💄', color: '#06B6D4' },
  ];

  const monthlyTrends = [
    { month: 'Jul', amount: 6500 },
    { month: 'Aug', amount: 7200 },
    { month: 'Sep', amount: 8900 },
    { month: 'Oct', amount: 10650 },
    { month: 'Nov', amount: 9800 },
    { month: 'Dec', amount: 12450 },
  ];

  const goals = [
    {
      id: 1,
      name: 'Save ₹50,000 this year',
      current: 45750,
      target: 50000,
      daysLeft: 6,
      status: 'on-track',
    },
    {
      id: 2,
      name: 'Save ₹15,000 this month',
      current: 12450,
      target: 15000,
      daysLeft: 6,
      status: 'on-track',
    },
    {
      id: 3,
      name: '30-day saving streak',
      current: 15,
      target: 30,
      daysLeft: 15,
      status: 'in-progress',
    },
  ];

  const achievements = [
    { id: 1, name: 'First ₹1000 saved', icon: '🎯', unlocked: true },
    { id: 2, name: 'First ₹10,000 saved', icon: '💰', unlocked: true },
    { id: 3, name: '7-day streak', icon: '🔥', unlocked: true },
    { id: 4, name: 'Shopping Ninja', icon: '🥷', unlocked: true },
    { id: 5, name: 'Save ₹50,000', icon: '🏆', unlocked: false },
    { id: 6, name: '30-day streak', icon: '⚡', unlocked: false },
  ];

  const maxAmount = Math.max(...monthlyTrends.map(m => m.amount));

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
            Savings Tracker
          </h1>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Total Savings Card */}
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          padding: '24px',
          borderRadius: '16px',
          color: '#FFFFFF',
          marginBottom: '20px',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>
            Total Savings
          </div>
          <div style={{ fontSize: '40px', fontWeight: '700', marginBottom: '4px' }}>
            ₹{savingsData.total.toLocaleString()}
          </div>
          <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '16px' }}>
            {savingsData.streak} day streak 🔥 • ₹{savingsData.avgPerMonth.toLocaleString()} avg/month
          </div>

          {/* Period Selector */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'month', label: 'This Month', value: savingsData.thisMonth },
              { id: 'year', label: 'This Year', value: savingsData.thisYear },
            ].map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: selectedPeriod === period.id ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.1)',
                  border: selectedPeriod === period.id ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: '700' }}>
                  ₹{period.value.toLocaleString()}
                </div>
                <div style={{ fontSize: '11px', opacity: 0.9 }}>
                  {period.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Trend */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Monthly Savings Trend
          </h2>

          <div style={{ display: 'flex', alignItems: 'end', gap: '8px', height: '150px', marginBottom: '8px' }}>
            {monthlyTrends.map((month, index) => (
              <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '100%',
                  height: `${(month.amount / maxAmount) * 130}px`,
                  background: index === monthlyTrends.length - 1
                    ? 'linear-gradient(to top, #10B981, #34D399)'
                    : 'linear-gradient(to top, #D1D5DB, #E5E7EB)',
                  borderRadius: '4px 4px 0 0',
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'center',
                  paddingBottom: '4px',
                  position: 'relative',
                }}>
                  {index === monthlyTrends.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '-24px',
                      fontSize: '11px',
                      fontWeight: '600',
                      color: '#10B981',
                    }}>
                      ₹{(month.amount / 1000).toFixed(1)}k
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>
                  {month.month}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: '12px',
            backgroundColor: '#ECFDF5',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#047857',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span>📈</span>
            <span>You're saving {Math.round(((savingsData.thisMonth - savingsData.lastMonth) / savingsData.lastMonth) * 100)}% more than last month!</span>
          </div>
        </div>

        {/* Category Breakdown */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Savings by Category
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {categoryBreakdown.map((cat, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '20px' }}>{cat.icon}</span>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                      {cat.category}
                    </span>
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: '#10B981' }}>
                    ₹{cat.amount.toLocaleString()}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    flex: 1,
                    height: '8px',
                    backgroundColor: '#F3F4F6',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${cat.percentage}%`,
                      height: '100%',
                      backgroundColor: cat.color,
                      borderRadius: '4px',
                    }} />
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B7280', minWidth: '40px', textAlign: 'right' }}>
                    {cat.percentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Goals */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              Savings Goals
            </h2>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#F0FDF4',
                color: '#047857',
                border: '1px solid #BBF7D0',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              + Add Goal
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {goals.map((goal) => (
              <div
                key={goal.id}
                style={{
                  padding: '16px',
                  backgroundColor: '#F9FAFB',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                    {goal.name}
                  </div>
                  <div style={{
                    padding: '2px 8px',
                    backgroundColor: goal.status === 'on-track' ? '#D1FAE5' : '#FEF3C7',
                    color: goal.status === 'on-track' ? '#047857' : '#92400E',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: '500',
                  }}>
                    {goal.status === 'on-track' ? 'On Track' : 'In Progress'}
                  </div>
                </div>

                <div style={{ marginBottom: '8px' }}>
                  <div style={{
                    height: '8px',
                    backgroundColor: '#E5E7EB',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${(goal.current / goal.target) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #10B981, #34D399)',
                      borderRadius: '4px',
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280' }}>
                  <span>
                    {typeof goal.current === 'number' && goal.current >= 1000
                      ? `₹${goal.current.toLocaleString()}`
                      : goal.current}{' '}
                    / {typeof goal.target === 'number' && goal.target >= 1000
                      ? `₹${goal.target.toLocaleString()}`
                      : goal.target}
                  </span>
                  <span>{goal.daysLeft} days left</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Achievements
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                style={{
                  padding: '16px 12px',
                  backgroundColor: achievement.unlocked ? '#F0FDF4' : '#F9FAFB',
                  border: achievement.unlocked ? '2px solid #BBF7D0' : '1px solid #E5E7EB',
                  borderRadius: '12px',
                  textAlign: 'center',
                  opacity: achievement.unlocked ? 1 : 0.5,
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                  {achievement.icon}
                </div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: achievement.unlocked ? '#047857' : '#6B7280',
                }}>
                  {achievement.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs Section */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Save More & Earn More
          </h2>

          {/* Discover Deals CTA */}
          <Link
            to="/mall"
            style={{
              display: 'block',
              padding: '16px',
              background: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
              borderRadius: '12px',
              marginBottom: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                🛍️
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>
                  Discover Super Deals
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Shop exclusive offers & save up to 80%
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#FFFFFF' }}>
                →
              </div>
            </div>
          </Link>

          {/* Refer & Earn CTA */}
          <Link
            to="/refer"
            style={{
              display: 'block',
              padding: '16px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
              borderRadius: '12px',
              marginBottom: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                👥
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>
                  Refer Friends & Earn
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Get ₹500 for each friend you refer
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#FFFFFF' }}>
                →
              </div>
            </div>
          </Link>

          {/* Creator Store CTA */}
          <Link
            to="/creators"
            style={{
              display: 'block',
              padding: '16px',
              background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
              borderRadius: '12px',
              marginBottom: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                ✨
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>
                  Shop Creator Picks
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Curated products from trusted creators
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#FFFFFF' }}>
                →
              </div>
            </div>
          </Link>

          {/* Play & Win CTA */}
          <Link
            to="/games"
            style={{
              display: 'block',
              padding: '16px',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                🎮
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>
                  Play Games & Win
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  Earn coins and rewards while having fun
                </div>
              </div>
              <div style={{ fontSize: '20px', color: '#FFFFFF' }}>
                →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavingsTracker;
