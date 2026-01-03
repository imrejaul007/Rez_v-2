/**
 * Campus Ambassador Dashboard
 * Purpose: Track ambassador performance, earnings, and tasks
 * UI: Stats, leaderboard, tasks, earnings, team management
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AmbassadorDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const ambassadorData = {
    name: 'Rejaul Karim',
    college: 'Christ University',
    rank: 3,
    totalAmbassadors: 150,
    level: 'Gold',
    stats: {
      referrals: 45,
      signups: 38,
      totalEarnings: 15750,
      thisMonth: 4200,
      pendingEarnings: 1500,
    },
    progress: {
      current: 38,
      next: 50,
      nextLevel: 'Platinum',
      reward: 2000,
    },
  };

  const tasks = [
    {
      id: 1,
      title: 'Refer 10 new users',
      description: 'Get 10 students from your college to sign up',
      progress: 7,
      total: 10,
      reward: 500,
      deadline: 'Dec 31, 2024',
      status: 'active',
    },
    {
      id: 2,
      title: 'Organize campus event',
      description: 'Host a ReZ awareness session in your college',
      progress: 0,
      total: 1,
      reward: 2000,
      deadline: 'Jan 15, 2025',
      status: 'active',
    },
    {
      id: 3,
      title: 'Social media campaign',
      description: 'Create 5 posts about ReZ on Instagram',
      progress: 3,
      total: 5,
      reward: 300,
      deadline: 'Dec 28, 2024',
      status: 'active',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', college: 'IIT Bangalore', signups: 52, earnings: 22000 },
    { rank: 2, name: 'Rahul Verma', college: 'BITS Pilani', signups: 48, earnings: 19500 },
    { rank: 3, name: 'Rejaul Karim', college: 'Christ University', signups: 38, earnings: 15750, isMe: true },
    { rank: 4, name: 'Sneha Reddy', college: 'St. Joseph\'s', signups: 35, earnings: 14200 },
    { rank: 5, name: 'Arjun Mehta', college: 'Mount Carmel', signups: 32, earnings: 13100 },
  ];

  const renderOverview = () => (
    <div>
      {/* Level Card */}
      <div style={{
        background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        padding: '24px',
        borderRadius: '16px',
        color: '#FFFFFF',
        marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
          <div>
            <div style={{ fontSize: '13px', opacity: 0.9, marginBottom: '4px' }}>
              Campus Ambassador • {ambassadorData.level}
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>
              {ambassadorData.name}
            </h2>
            <div style={{ fontSize: '13px', opacity: 0.9, marginTop: '4px' }}>
              {ambassadorData.college}
            </div>
          </div>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}>
            👑
          </div>
        </div>

        <div style={{
          padding: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '8px',
          fontSize: '13px',
        }}>
          Rank #{ambassadorData.rank} out of {ambassadorData.totalAmbassadors} ambassadors
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
            Total Signups
          </div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>
            {ambassadorData.stats.signups}
          </div>
          <div style={{ fontSize: '11px', color: '#10B981', marginTop: '4px' }}>
            +7 this month
          </div>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
            Total Earnings
          </div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>
            ₹{ambassadorData.stats.totalEarnings.toLocaleString()}
          </div>
          <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>
            ₹{ambassadorData.stats.pendingEarnings} pending
          </div>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
            This Month
          </div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937' }}>
            ₹{ambassadorData.stats.thisMonth.toLocaleString()}
          </div>
        </div>

        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
            Referrals
          </div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937' }}>
            {ambassadorData.stats.referrals}
          </div>
        </div>
      </div>

      {/* Progress to Next Level */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '2px' }}>
              Progress to {ambassadorData.progress.nextLevel}
            </div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              {ambassadorData.progress.current} / {ambassadorData.progress.next} signups
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '2px' }}>
              Reward
            </div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
              ₹{ambassadorData.progress.reward}
            </div>
          </div>
        </div>

        <div style={{
          height: '8px',
          backgroundColor: '#E5E7EB',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${(ambassadorData.progress.current / ambassadorData.progress.next) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)',
          }} />
        </div>

        <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '6px' }}>
          {ambassadorData.progress.next - ambassadorData.progress.current} more signups to unlock {ambassadorData.progress.nextLevel}!
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        <button
          onClick={() => navigate('/referral')}
          style={{
            padding: '16px',
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>📱</div>
          <div>Share Referral</div>
        </button>

        <button
          onClick={() => setActiveTab('tasks')}
          style={{
            padding: '16px',
            backgroundColor: '#FFFFFF',
            color: '#1F2937',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
          <div>View Tasks</div>
        </button>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
        Active Tasks
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              backgroundColor: '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937' }}>
                {task.title}
              </div>
              <div style={{
                padding: '4px 10px',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500',
              }}>
                +₹{task.reward}
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 12px 0' }}>
              {task.description}
            </p>

            <div style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280', marginBottom: '4px' }}>
                <span>Progress</span>
                <span>{task.progress} / {task.total}</span>
              </div>
              <div style={{
                height: '6px',
                backgroundColor: '#E5E7EB',
                borderRadius: '3px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${(task.progress / task.total) * 100}%`,
                  height: '100%',
                  backgroundColor: '#10B981',
                }} />
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
              Deadline: {task.deadline}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
        Top Ambassadors
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {leaderboard.map((person) => (
          <div
            key={person.rank}
            style={{
              backgroundColor: person.isMe ? '#ECFDF5' : '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: person.isMe ? '2px solid #10B981' : '1px solid #E5E7EB',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: person.rank <= 3 ? '#FEF3C7' : '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '700',
                color: person.rank <= 3 ? '#D97706' : '#6B7280',
              }}>
                {person.rank === 1 && '🥇'}
                {person.rank === 2 && '🥈'}
                {person.rank === 3 && '🥉'}
                {person.rank > 3 && person.rank}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937' }}>
                  {person.name} {person.isMe && '(You)'}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  {person.college}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#10B981' }}>
                  ₹{person.earnings.toLocaleString()}
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>
                  {person.signups} signups
                </div>
              </div>
            </div>
          </div>
        ))}
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
            Ambassador Dashboard
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'tasks', label: 'Tasks', icon: '✓' },
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
                fontSize: '13px',
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
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tasks' && renderTasks()}
        {activeTab === 'leaderboard' && renderLeaderboard()}
      </div>
    </div>
  );
};

export default AmbassadorDashboard;
