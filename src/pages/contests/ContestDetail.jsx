/**
 * Contest Detail & Voting
 * Purpose: View nominees and vote
 * UI: Nominee cards, vote button, leaderboard
 */

import { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const ContestDetail = () => {
  const navigate = useNavigate();
  const { contestId } = useParams();
  const location = useLocation();

  const [hasVoted, setHasVoted] = useState(false);
  const [votedFor, setVotedFor] = useState(null);

  // Mock contest data
  const contest = {
    id: contestId,
    title: 'Student of the Month',
    subtitle: 'December 2024',
    endDate: 'Dec 31, 2024',
    daysLeft: 6,
    totalVotes: 1250,
    prize: '₹5,000 + Badge',
    image: '🎓',
    description: 'Recognize the most outstanding student who has shown exceptional academic performance, leadership, and community engagement.',
  };

  const nominees = [
    {
      id: 1,
      name: 'Priya Sharma',
      college: 'IIT Bangalore',
      course: 'B.Tech Computer Science',
      year: '3rd Year',
      avatar: '👩',
      votes: 385,
      percentage: 31,
      achievements: ['Campus Ambassador', 'Hackathon Winner', '7-day Streak'],
      bio: 'Active campus ambassador with 50+ referrals. Won 3 hackathons this semester.',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      college: 'BITS Pilani',
      course: 'B.E. Electronics',
      year: '2nd Year',
      avatar: '👨',
      votes: 320,
      percentage: 26,
      achievements: ['Top Saver', 'Event Organizer'],
      bio: 'Organized 2 major college events. Saved ₹15,000 this month.',
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      college: 'Christ University',
      course: 'BBA',
      year: '1st Year',
      avatar: '👩',
      votes: 275,
      percentage: 22,
      achievements: ['Super Saver', '30+ Referrals'],
      bio: 'Most active freshman. Referred 35 students in 2 months.',
    },
    {
      id: 4,
      name: 'Arjun Mehta',
      college: 'St. Joseph\'s College',
      course: 'B.Com',
      year: '3rd Year',
      avatar: '👨',
      votes: 180,
      percentage: 14,
      achievements: ['Consistent Shopper'],
      bio: 'Regular ReZ user with consistent savings every month.',
    },
    {
      id: 5,
      name: 'Anjali Gupta',
      college: 'Mount Carmel College',
      course: 'B.Sc',
      year: '2nd Year',
      avatar: '👩',
      votes: 90,
      percentage: 7,
      achievements: ['Rising Star'],
      bio: 'New to ReZ but making great progress with savings.',
    },
  ];

  const handleVote = (nomineeId) => {
    if (hasVoted) {
      alert('You have already voted in this contest!');
      return;
    }

    setVotedFor(nomineeId);
    setHasVoted(true);

    // Show success message
    setTimeout(() => {
      alert('Vote submitted successfully! 🎉');
    }, 100);
  };

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
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              {contest.title}
            </h1>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              {contest.subtitle}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Contest Info */}
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          padding: '24px',
          borderRadius: '16px',
          color: '#FFFFFF',
          marginBottom: '20px',
        }}>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '32px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
            }}>
              {contest.image}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>
                {contest.description}
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}>
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{nominees.length}</div>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>Nominees</div>
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{contest.totalVotes}</div>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>Total Votes</div>
            </div>
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '20px', fontWeight: '700' }}>{contest.daysLeft}d</div>
              <div style={{ fontSize: '11px', opacity: 0.9 }}>Days Left</div>
            </div>
          </div>

          <div style={{
            marginTop: '16px',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            fontSize: '13px',
            textAlign: 'center',
          }}>
            🏆 Prize: <strong>{contest.prize}</strong>
          </div>
        </div>

        {/* Vote Status */}
        {hasVoted && (
          <div style={{
            padding: '16px',
            backgroundColor: '#D1FAE5',
            borderRadius: '12px',
            border: '1px solid #BBF7D0',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#047857' }}>
                Vote Submitted!
              </div>
              <div style={{ fontSize: '12px', color: '#065F46' }}>
                Thank you for participating. Results will be announced on {contest.endDate}
              </div>
            </div>
          </div>
        )}

        {/* Nominees */}
        <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
          Vote for Your Favorite
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {nominees.map((nominee, index) => (
            <div
              key={nominee.id}
              style={{
                backgroundColor: votedFor === nominee.id ? '#ECFDF5' : '#FFFFFF',
                padding: '20px',
                borderRadius: '12px',
                border: votedFor === nominee.id ? '2px solid #10B981' : '1px solid #E5E7EB',
                position: 'relative',
              }}
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: index === 0 ? '#FEF3C7' : '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                }}>
                  {index === 0 && '🥇'}
                  {index === 1 && '🥈'}
                  {index === 2 && '🥉'}
                </div>
              )}

              {/* Nominee Info */}
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '32px',
                  backgroundColor: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  flexShrink: 0,
                }}>
                  {nominee.avatar}
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                    {nominee.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '2px' }}>
                    {nominee.college}
                  </div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                    {nominee.course} • {nominee.year}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '12px', lineHeight: '1.5' }}>
                {nominee.bio}
              </p>

              {/* Achievements */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {nominee.achievements.map((achievement, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 10px',
                      backgroundColor: '#F0FDF4',
                      color: '#047857',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '500',
                    }}
                  >
                    {achievement}
                  </span>
                ))}
              </div>

              {/* Vote Progress */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#6B7280',
                  marginBottom: '6px',
                }}>
                  <span>{nominee.votes} votes</span>
                  <span>{nominee.percentage}%</span>
                </div>
                <div style={{
                  height: '6px',
                  backgroundColor: '#E5E7EB',
                  borderRadius: '3px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${nominee.percentage}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #10B981, #34D399)',
                    borderRadius: '3px',
                  }} />
                </div>
              </div>

              {/* Vote Button */}
              <button
                onClick={() => handleVote(nominee.id)}
                disabled={hasVoted}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: hasVoted
                    ? (votedFor === nominee.id ? '#10B981' : '#F3F4F6')
                    : '#10B981',
                  color: hasVoted
                    ? (votedFor === nominee.id ? '#FFFFFF' : '#9CA3AF')
                    : '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: hasVoted ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                {votedFor === nominee.id && '✓ '}
                {hasVoted
                  ? (votedFor === nominee.id ? 'Voted' : 'Already Voted')
                  : `Vote for ${nominee.name.split(' ')[0]}`}
              </button>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div style={{
          backgroundColor: '#FFFBEB',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #FDE68A',
          marginTop: '20px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#92400E', marginBottom: '10px' }}>
            📋 Contest Rules
          </div>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#B45309' }}>
            <li>Each user can vote only once per contest</li>
            <li>Voting closes on {contest.endDate} at 11:59 PM</li>
            <li>Winner announced within 24 hours of contest end</li>
            <li>Prize distributed within 7 business days</li>
            <li>Suspicious voting activity will be investigated</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
