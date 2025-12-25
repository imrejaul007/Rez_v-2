/**
 * Contest Hub
 * Purpose: Main page for all contests (Student/Employee of Month, etc.)
 * UI: Active contests, past winners, vote now CTAs
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContestHub = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const activeContests = [
    {
      id: 1,
      title: 'Student of the Month',
      subtitle: 'December 2024',
      type: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 1250,
      nominees: 8,
      prize: '₹5,000 + Badge',
      image: '🎓',
      status: 'voting',
    },
    {
      id: 2,
      title: 'Employee of the Month',
      subtitle: 'December 2024',
      type: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 850,
      nominees: 6,
      prize: '₹10,000 + Recognition',
      image: '💼',
      status: 'voting',
    },
    {
      id: 3,
      title: 'Best Campus Ambassador',
      subtitle: 'Q4 2024',
      type: 'ambassador',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 620,
      nominees: 12,
      prize: '₹15,000 + Trip',
      image: '🏆',
      status: 'voting',
    },
  ];

  const pastWinners = [
    {
      id: 1,
      contest: 'Student of the Month - Nov 2024',
      winner: { name: 'Priya Sharma', college: 'IIT Bangalore', avatar: '👩' },
      votes: 1450,
      prize: '₹5,000',
    },
    {
      id: 2,
      contest: 'Employee of the Month - Nov 2024',
      winner: { name: 'Rahul Verma', company: 'Tech Corp', avatar: '👨' },
      votes: 980,
      prize: '₹10,000',
    },
  ];

  const renderActive = () => (
    <div>
      {/* How Contests Work */}
      <div style={{
        backgroundColor: '#EFF6FF',
        padding: '16px',
        borderRadius: '12px',
        border: '1px solid #DBEAFE',
        marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '24px' }}>ℹ️</span>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1E40AF', margin: 0 }}>
            How Contests Work
          </h3>
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#1E3A8A' }}>
          <li>Nominate yourself or others</li>
          <li>Community votes for nominees</li>
          <li>Winner announced at month end</li>
          <li>Prizes awarded within 7 days</li>
        </ul>
      </div>

      {/* Active Contests */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {activeContests.map((contest) => (
          <div
            key={contest.id}
            onClick={() => navigate(`/contest/${contest.id}`)}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E5E7EB',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              padding: '20px',
              color: '#FFFFFF',
            }}>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                }}>
                  {contest.image}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0' }}>
                    {contest.title}
                  </h3>
                  <div style={{ fontSize: '13px', opacity: 0.9 }}>
                    {contest.subtitle}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
              }}>
                <div style={{
                  padding: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>{contest.nominees}</div>
                  <div style={{ fontSize: '10px', opacity: 0.9 }}>Nominees</div>
                </div>
                <div style={{
                  padding: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>{contest.totalVotes}</div>
                  <div style={{ fontSize: '10px', opacity: 0.9 }}>Votes</div>
                </div>
                <div style={{
                  padding: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>{contest.daysLeft}d</div>
                  <div style={{ fontSize: '10px', opacity: 0.9 }}>Left</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{ padding: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '2px' }}>
                    Prize
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                    {contest.prize}
                  </div>
                </div>
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#10B981',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                >
                  Vote Now →
                </button>
              </div>

              <div style={{
                marginTop: '12px',
                padding: '10px',
                backgroundColor: '#FFFBEB',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#92400E',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span>⏰</span>
                <span>Voting ends on {contest.endDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nominate Yourself */}
      <div style={{
        backgroundColor: '#F0FDF4',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #BBF7D0',
        marginTop: '20px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌟</div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#047857', marginBottom: '8px' }}>
          Think you deserve recognition?
        </h3>
        <p style={{ fontSize: '13px', color: '#065F46', marginBottom: '16px' }}>
          Nominate yourself for next month's contest and let the community decide!
        </p>
        <button
          onClick={() => navigate('/contest/nominate')}
          style={{
            padding: '10px 24px',
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Nominate Now
        </button>
      </div>
    </div>
  );

  const renderPastWinners = () => (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {pastWinners.map((winner) => (
          <div
            key={winner.id}
            style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}
          >
            <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
              {winner.contest}
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
              }}>
                {winner.winner.avatar}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                  {winner.winner.name}
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>
                  {winner.winner.college || winner.winner.company}
                </div>
              </div>

              <div style={{
                padding: '6px 12px',
                backgroundColor: '#FEF3C7',
                color: '#92400E',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
              }}>
                🏆 Winner
              </div>
            </div>

            <div style={{
              padding: '12px',
              backgroundColor: '#F9FAFB',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '2px' }}>
                  Total Votes
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#1F2937' }}>
                  {winner.votes.toLocaleString()}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '2px' }}>
                  Prize Won
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#10B981' }}>
                  {winner.prize}
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
            Contests
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'active', label: 'Active', icon: '🔥' },
            { id: 'winners', label: 'Past Winners', icon: '🏆' },
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
        {activeTab === 'active' && renderActive()}
        {activeTab === 'winners' && renderPastWinners()}
      </div>
    </div>
  );
};

export default ContestHub;
