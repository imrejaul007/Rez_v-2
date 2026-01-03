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
  const [contestType, setContestType] = useState('all'); // all, individual, college, corporate
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInstitution, setSelectedInstitution] = useState('all'); // for filtering by specific college/company

  const activeContests = [
    // College-Specific Individual Contests
    {
      id: 1,
      title: 'Oxford College Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 450,
      nominees: 12,
      prize: '₹3,000 + Certificate',
      image: '🎓',
      status: 'voting',
      scope: 'Oxford College, Bangalore',
      institution: 'Oxford College',
    },
    {
      id: 2,
      title: 'Christ University Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 680,
      nominees: 15,
      prize: '₹5,000 + Badge',
      image: '🎓',
      status: 'voting',
      scope: 'Christ University, Bangalore',
      institution: 'Christ University',
    },
    {
      id: 3,
      title: 'IIT Bangalore Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 920,
      nominees: 10,
      prize: '₹7,500 + Amazon Voucher',
      image: '🎓',
      status: 'voting',
      scope: 'IIT Bangalore',
      institution: 'IIT Bangalore',
    },
    {
      id: 10,
      title: 'St. Joseph\'s College Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 520,
      nominees: 14,
      prize: '₹4,000 + Certificate',
      image: '🎓',
      status: 'voting',
      scope: 'St. Joseph\'s College, Bangalore',
      institution: 'St. Joseph\'s College',
    },
    {
      id: 11,
      title: 'BMS College Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 590,
      nominees: 13,
      prize: '₹4,500 + Swag Kit',
      image: '🎓',
      status: 'voting',
      scope: 'BMS College, Bangalore',
      institution: 'BMS College',
    },
    // National Individual Contests
    {
      id: 12,
      title: 'National Student of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'student',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 1250,
      nominees: 25,
      prize: '₹10,000 + National Recognition',
      image: '🏅',
      status: 'voting',
      scope: 'All India',
    },
    // Company-Specific Employee Contests
    {
      id: 15,
      title: 'Google Employee of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 780,
      nominees: 16,
      prize: '₹8,000 + Google Swag',
      image: '💼',
      status: 'voting',
      scope: 'Google India',
      institution: 'Google',
    },
    {
      id: 16,
      title: 'Flipkart Employee of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 650,
      nominees: 14,
      prize: '₹7,000 + Vouchers',
      image: '💼',
      status: 'voting',
      scope: 'Flipkart',
      institution: 'Flipkart',
    },
    {
      id: 17,
      title: 'Infosys Employee of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 890,
      nominees: 20,
      prize: '₹6,000 + Recognition',
      image: '💼',
      status: 'voting',
      scope: 'Infosys',
      institution: 'Infosys',
    },
    {
      id: 18,
      title: 'TCS Employee of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 1050,
      nominees: 22,
      prize: '₹6,500 + Certificate',
      image: '💼',
      status: 'voting',
      scope: 'TCS',
      institution: 'TCS',
    },
    {
      id: 13,
      title: 'National Employee of the Month',
      subtitle: 'December 2024',
      type: 'individual',
      category: 'employee',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 850,
      nominees: 18,
      prize: '₹15,000 + National Recognition',
      image: '💼',
      status: 'voting',
      scope: 'All India - All Companies',
    },
    {
      id: 14,
      title: 'Best Campus Ambassador',
      subtitle: 'Q4 2024',
      type: 'individual',
      category: 'ambassador',
      endDate: 'Dec 31, 2024',
      daysLeft: 6,
      totalVotes: 620,
      nominees: 12,
      prize: '₹15,000 + Trip',
      image: '🏆',
      status: 'voting',
      scope: 'National',
    },
    // Inter-College Contests
    {
      id: 4,
      title: 'Inter-College Savings Challenge',
      subtitle: 'Bangalore Colleges',
      type: 'college',
      category: 'inter-college',
      endDate: 'Jan 15, 2025',
      daysLeft: 20,
      totalVotes: 2450,
      nominees: 25,
      prize: '₹50,000 to winning college',
      image: '🏫',
      status: 'voting',
      scope: 'Regional - Bangalore',
      participants: ['IIT Bangalore', 'IIIT Bangalore', 'BMS College', 'Christ University', 'St. Joseph\'s'],
    },
    {
      id: 5,
      title: 'North vs South College Battle',
      subtitle: 'Pan India',
      type: 'college',
      category: 'regional',
      endDate: 'Jan 31, 2025',
      daysLeft: 36,
      totalVotes: 5420,
      nominees: 50,
      prize: '₹1,00,000 + Trophy',
      image: '🎯',
      status: 'voting',
      scope: 'All India',
      participants: ['North India Colleges', 'South India Colleges', 'East India Colleges', 'West India Colleges'],
    },
    {
      id: 6,
      title: 'Best College ReZ Community',
      subtitle: 'Mumbai Region',
      type: 'college',
      category: 'community',
      endDate: 'Jan 10, 2025',
      daysLeft: 15,
      totalVotes: 1890,
      nominees: 15,
      prize: '₹30,000 + Swag Kit',
      image: '🌟',
      status: 'voting',
      scope: 'Regional - Mumbai',
      participants: ['IIT Bombay', 'VJTI', 'DJ Sanghvi', 'SP Jain', 'Mumbai University'],
    },
    // Corporate Contests
    {
      id: 7,
      title: 'Tech Companies Savings War',
      subtitle: 'Top Tech Firms',
      type: 'corporate',
      category: 'inter-corporate',
      endDate: 'Feb 15, 2025',
      daysLeft: 51,
      totalVotes: 3250,
      nominees: 30,
      prize: '₹2,00,000 to winning company employees',
      image: '💻',
      status: 'voting',
      scope: 'Bangalore Tech Hub',
      participants: ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'Swiggy', 'Zomato'],
    },
    {
      id: 8,
      title: 'Startup vs MNC Challenge',
      subtitle: 'All India Corporate',
      type: 'corporate',
      category: 'company-battle',
      endDate: 'Feb 28, 2025',
      daysLeft: 64,
      totalVotes: 4890,
      nominees: 45,
      prize: '₹5,00,000 Prize Pool',
      image: '🚀',
      status: 'voting',
      scope: 'Pan India',
      participants: ['Startups (0-500 emp)', 'Mid-size (500-5000)', 'MNC (5000+)'],
    },
    {
      id: 9,
      title: 'Best Corporate ReZ Team',
      subtitle: 'IT Services Sector',
      type: 'corporate',
      category: 'team-challenge',
      endDate: 'Jan 20, 2025',
      daysLeft: 25,
      totalVotes: 2130,
      nominees: 20,
      prize: '₹75,000 + Team Outing',
      image: '👥',
      status: 'voting',
      scope: 'IT Services Companies',
      participants: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra'],
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

  // Get unique institutions for filter dropdown
  const institutions = ['all', ...new Set(activeContests
    .filter(c => c.institution)
    .map(c => c.institution))];

  // Social media sharing function
  const handleShare = (contest, platform) => {
    const contestUrl = `https://rez.app/contest/${contest.id}`;
    const shareText = `Vote for "${contest.title}"! ${contest.prize} prize pool. Ends ${contest.endDate}. #ReZContest`;

    let shareUrl = '';
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(contestUrl)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(contestUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + contestUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(contestUrl)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const renderActive = () => {
    // Filter contests based on type, institution, and search query
    let filteredContests = activeContests;

    // Filter by contest type
    if (contestType !== 'all') {
      filteredContests = filteredContests.filter(c => c.type === contestType);
    }

    // Filter by institution
    if (selectedInstitution !== 'all') {
      filteredContests = filteredContests.filter(c => c.institution === selectedInstitution);
    }

    // Filter by search query
    if (searchQuery) {
      filteredContests = filteredContests.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.institution && c.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (c.scope && c.scope.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return (
    <div>
      {/* Search and Filters */}
      <div style={{ marginBottom: '20px' }}>
        {/* Search Bar */}
        <div style={{ marginBottom: '12px' }}>
          <input
            type="text"
            placeholder="🔍 Search contests by name, college, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        {/* Institution Filter Dropdown */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <label style={{ fontSize: '12px', color: '#6B7280', fontWeight: '500', minWidth: '80px' }}>
            Filter by:
          </label>
          <select
            value={selectedInstitution}
            onChange={(e) => setSelectedInstitution(e.target.value)}
            style={{
              flex: 1,
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="all">All Institutions</option>
            {institutions.slice(1).map((inst) => (
              <option key={inst} value={inst}>{inst}</option>
            ))}
          </select>
          {(searchQuery || selectedInstitution !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedInstitution('all');
              }}
              style={{
                padding: '8px 16px',
                backgroundColor: '#EF4444',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

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

      {/* Results Count */}
      <div style={{ marginBottom: '16px', fontSize: '14px', color: '#6B7280' }}>
        Showing <strong style={{ color: '#1F2937' }}>{filteredContests.length}</strong> {contestType === 'all' ? 'contests' : `${contestType} contest${filteredContests.length !== 1 ? 's' : ''}`}
      </div>

      {/* Active Contests */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredContests.map((contest) => (
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
              {/* Scope Badge - Show for college/corporate contests */}
              {contest.scope && (
                <div style={{
                  marginBottom: '12px',
                  padding: '8px 12px',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '6px',
                  fontSize: '12px',
                  color: '#0369A1',
                  fontWeight: '500',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <span>🌍</span>
                  <span>{contest.scope}</span>
                </div>
              )}

              {/* Participants - Show for college/corporate contests */}
              {contest.participants && contest.participants.length > 0 && (
                <div style={{
                  marginBottom: '12px',
                  padding: '12px',
                  backgroundColor: '#F9FAFB',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                }}>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px', fontWeight: '600' }}>
                    Participating {contest.type === 'college' ? 'Colleges' : 'Companies'}:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {contest.participants.map((participant, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '4px 10px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '12px',
                          fontSize: '11px',
                          color: '#374151',
                          fontWeight: '500',
                        }}
                      >
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Social Share Buttons */}
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px', fontWeight: '600' }}>
                  Share Contest:
                </div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(contest, 'whatsapp');
                    }}
                    style={{
                      flex: 1,
                      padding: '6px',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    📱 WhatsApp
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(contest, 'twitter');
                    }}
                    style={{
                      flex: 1,
                      padding: '6px',
                      backgroundColor: '#1DA1F2',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    🐦 Twitter
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(contest, 'facebook');
                    }}
                    style={{
                      flex: 1,
                      padding: '6px',
                      backgroundColor: '#1877F2',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    📘 Facebook
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(contest, 'linkedin');
                    }}
                    style={{
                      flex: 1,
                      padding: '6px',
                      backgroundColor: '#0A66C2',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    💼 LinkedIn
                  </button>
                </div>
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
  };

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

        {/* Contest Type Filters - Only show for Active tab */}
        {activeTab === 'active' && (
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            {[
              { id: 'all', label: 'All', icon: '🎯' },
              { id: 'individual', label: 'Individual', icon: '👤' },
              { id: 'college', label: 'College', icon: '🏫' },
              { id: 'corporate', label: 'Corporate', icon: '💼' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setContestType(filter.id)}
                style={{
                  flex: 1,
                  padding: '8px',
                  backgroundColor: contestType === filter.id ? '#DBEAFE' : '#FFFFFF',
                  color: contestType === filter.id ? '#1E40AF' : '#6B7280',
                  border: contestType === filter.id ? '1px solid #3B82F6' : '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        )}
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
