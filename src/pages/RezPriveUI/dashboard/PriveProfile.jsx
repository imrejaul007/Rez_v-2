/**
 * Privé Profile - Premium Identity Dashboard
 * Your Privé identity at a glance with 6-pillar scores, achievements, and activity
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';
import ModeSwitcher from '../../components/ModeSwitcher';

const { colors, spacing, borderRadius } = priveTheme;

const PriveProfile = () => {
  const navigate = useNavigate();
  const [showAllPillars, setShowAllPillars] = useState(false);

  const profile = {
    name: 'Rejaul Karim',
    tier: 'entry',
    tierName: 'Privé Signature',
    memberSince: 'Aug 2024',
    memberId: 'PV-2024-08-1247',
    accessState: 'active',
    totalScore: 74.5,
    pillars: [
      { id: 'engagement', name: 'Engagement', shortName: 'Engage', score: 78, trend: 'up', icon: '📊', color: '#4CAF50' },
      { id: 'trust', name: 'Trust & Integrity', shortName: 'Trust', score: 92, trend: 'stable', icon: '🛡️', color: '#2196F3' },
      { id: 'influence', name: 'Influence', shortName: 'Influence', score: 65, trend: 'up', icon: '📢', color: '#E91E63' },
      { id: 'economic', name: 'Economic Value', shortName: 'Economic', score: 70, trend: 'stable', icon: '💰', color: '#9C27B0' },
      { id: 'brand_affinity', name: 'Brand Affinity', shortName: 'Brand', score: 60, trend: 'down', icon: '🎯', color: '#FF9800' },
      { id: 'network', name: 'Network', shortName: 'Network', score: 55, trend: 'stable', icon: '🔗', color: '#00BCD4' },
    ],
    weeklyActivity: [
      { day: 'M', active: true, coins: 45 },
      { day: 'T', active: true, coins: 30 },
      { day: 'W', active: false, coins: 0 },
      { day: 'T', active: true, coins: 60 },
      { day: 'F', active: true, coins: 25 },
      { day: 'S', active: false, coins: 0 },
      { day: 'S', active: true, coins: 50 },
    ],
    achievements: [
      { id: '1', icon: '🏆', name: 'First Transaction', earnedDate: 'Aug 2024', rarity: 'common', earned: true },
      { id: '2', icon: '🔥', name: '7-Day Streak', earnedDate: 'Sep 2024', rarity: 'rare', earned: true },
      { id: '3', icon: '⭐', name: 'Top Reviewer', earnedDate: 'Oct 2024', rarity: 'rare', earned: true },
      { id: '4', icon: '👑', name: 'Elite Status', rarity: 'legendary', earned: false },
    ],
    stats: {
      totalTransactions: 47,
      totalCoinsEarned: 12450,
      campaignsCompleted: 8,
      invitesSent: 5,
      invitesRemaining: 3,
      currentStreak: 5,
    },
  };

  const accessStates = {
    active: { label: 'Active', color: '#10B981', icon: '●' },
    grace: { label: 'Grace Period', color: '#F59E0B', icon: '◐' },
    paused: { label: 'Paused', color: '#6B7280', icon: '○' },
    review: { label: 'Under Review', color: '#EF4444', icon: '◌' },
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return { icon: '↑', color: '#10B981' };
      case 'down': return { icon: '↓', color: '#EF4444' };
      default: return { icon: '→', color: '#6B7280' };
    }
  };

  const getRarityColor = (rarity) => {
    const colors = {
      common: '#9CA3AF',
      rare: '#3B82F6',
      epic: '#8B5CF6',
      legendary: '#F59E0B',
    };
    return colors[rarity] || '#9CA3AF';
  };

  const accessState = accessStates[profile.accessState];
  const weeklyCoins = profile.weeklyActivity.reduce((sum, d) => sum + d.coins, 0);
  const activeDays = profile.weeklyActivity.filter(d => d.active).length;

  const quickActions = [
    { id: 'wallet', icon: '💰', label: 'Wallet', path: '/prive/wallet', badge: null },
    { id: 'invites', icon: '✉️', label: 'Invites', path: '/prive/invites', badge: profile.stats.invitesRemaining },
    { id: 'activity', icon: '📋', label: 'Activity', path: '/prive/activity', badge: null },
    { id: 'settings', icon: '⚙️', label: 'Settings', path: '/prive/settings', badge: null },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: spacing[5] }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[2], paddingBottom: spacing[4] }}>
          <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>Profile</div>
          <div onClick={() => navigate('/prive/profile/edit')} style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: colors.gold.primary, cursor: 'pointer' }}>✎</div>
        </div>

        {/* Identity Card */}
        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], border: '1px solid rgba(201, 169, 98, 0.3)', marginBottom: spacing[4] }}>
          {/* Card Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
              <div style={{ fontSize: '20px', color: colors.gold.primary }}>◈</div>
              <div style={{ fontSize: '13px', color: colors.gold.primary }}>PRIVÉ</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], padding: `${spacing[1]} ${spacing[3]}`, borderRadius: '20px', backgroundColor: `${accessState.color}20` }}>
              <div style={{ fontSize: '8px', color: accessState.color }}>{accessState.icon}</div>
              <div style={{ fontSize: '13px', color: accessState.color }}>{accessState.label}</div>
            </div>
          </div>

          {/* Profile Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[4], marginBottom: spacing[5] }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '36px', backgroundColor: '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '28px', color: colors.gold.primary, fontWeight: '600' }}>{profile.name.charAt(0)}</div>
              </div>
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', borderRadius: '38px', border: `2px solid ${colors.gold.primary}`, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '24px', height: '24px', borderRadius: '12px', backgroundColor: colors.background.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${colors.gold.primary}` }}>
                <div style={{ fontSize: '12px' }}>{profile.tier === 'elite' ? '👑' : '✦'}</div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '24px', fontWeight: '600', color: colors.text.primary, marginBottom: spacing[1] }}>{profile.name}</div>
              <div style={{ fontSize: '15px', color: colors.gold.primary, marginBottom: spacing[1] }}>{profile.tierName}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Member since {profile.memberSince}</div>
            </div>
          </div>

          {/* Score Display */}
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: spacing[4], borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ textAlign: 'center', paddingRight: spacing[5] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[1] }}>PRIVÉ SCORE</div>
              <div style={{ fontSize: '42px', fontWeight: '700', color: colors.gold.primary }}>{profile.totalScore.toFixed(1)}</div>
            </div>
            <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around', paddingLeft: spacing[4] }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>{profile.stats.currentStreak}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Day Streak</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>{profile.stats.campaignsCompleted}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Campaigns</div>
              </div>
            </div>
          </div>

          {/* Member ID */}
          <div style={{ textAlign: 'center', marginTop: spacing[4], paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{profile.memberId}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[5] }}>
          {quickActions.map((action) => (
            <div key={action.id} onClick={() => navigate(action.path)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2], cursor: 'pointer' }}>
              <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '24px', backgroundColor: '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '20px' }}>{action.icon}</div>
                {action.badge && action.badge > 0 && (
                  <div style={{ position: 'absolute', top: '-4px', right: '-4px', minWidth: '18px', height: '18px', borderRadius: '9px', backgroundColor: colors.gold.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>
                    <div style={{ fontSize: '10px', fontWeight: '700', color: colors.background.primary }}>{action.badge}</div>
                  </div>
                )}
              </div>
              <div style={{ fontSize: '13px', color: colors.text.secondary }}>{action.label}</div>
            </div>
          ))}
        </div>

        {/* 6-Pillar Score */}
        <div style={{ marginBottom: spacing[6] }}>
          <div onClick={() => navigate('/prive/tier-progress')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3], cursor: 'pointer' }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>6-PILLAR SCORE</div>
            <div style={{ fontSize: '13px', color: colors.gold.primary }}>View Details →</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
            {(showAllPillars ? profile.pillars : profile.pillars.slice(0, 3)).map((pillar) => {
              const trend = getTrendIcon(pillar.trend);
              return (
                <div key={pillar.id} style={{ display: 'flex', alignItems: 'center', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], gap: spacing[3] }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: `${pillar.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '20px' }}>{pillar.icon}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>{pillar.shortName}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }}>
                      <div style={{ fontSize: '20px', color: colors.text.primary }}>{pillar.score}</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: trend.color }}>{trend.icon}</div>
                    </div>
                  </div>
                  <div style={{ width: '60px' }}>
                    <div style={{ height: '4px', backgroundColor: '#2A2A2A', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ width: `${pillar.score}%`, height: '100%', backgroundColor: pillar.color, borderRadius: '2px' }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!showAllPillars && (
            <div onClick={() => setShowAllPillars(true)} style={{ textAlign: 'center', padding: `${spacing[3]} 0`, marginTop: spacing[2], cursor: 'pointer' }}>
              <div style={{ fontSize: '13px', color: colors.gold.primary }}>Show All 6 Pillars</div>
            </div>
          )}
        </div>

        {/* Weekly Activity */}
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3] }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>THIS WEEK</div>
            <div style={{ fontSize: '13px', color: '#10B981' }}>+{weeklyCoins} coins</div>
          </div>

          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4] }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: spacing[4] }}>
              {profile.weeklyActivity.map((day, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '16px', backgroundColor: day.active ? colors.gold.primary : '#2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {day.active && <div style={{ fontSize: '14px', color: colors.background.primary, fontWeight: '700' }}>✓</div>}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{day.day}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: spacing[4], borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}` }}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.gold.primary }}>{activeDays}/7</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Active Days</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: '#2A2A2A' }} />
              <div style={{ textAlign: 'center', padding: `0 ${spacing[6]}` }}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary }}>{weeklyCoins}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Coins Earned</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: spacing[6] }}>
          <div onClick={() => navigate('/prive/achievements')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3], cursor: 'pointer' }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>ACHIEVEMENTS</div>
            <div style={{ fontSize: '13px', color: colors.gold.primary }}>View All →</div>
          </div>

          <div style={{ display: 'flex', overflowX: 'auto', gap: spacing[3] }}>
            {profile.achievements.filter(a => a.earned).map((achievement) => (
              <div key={achievement.id} style={{ minWidth: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${getRarityColor(achievement.rarity)}` }}>
                  <div style={{ fontSize: '24px' }}>{achievement.icon}</div>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.primary, textAlign: 'center' }}>{achievement.name}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, textAlign: 'center' }}>{achievement.earnedDate}</div>
              </div>
            ))}

            {profile.achievements.filter(a => !a.earned).slice(0, 1).map((achievement) => (
              <div key={achievement.id} style={{ minWidth: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2], opacity: 0.5 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #3A3A3A' }}>
                  <div style={{ fontSize: '24px' }}>🔒</div>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, textAlign: 'center' }}>{achievement.name}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, textAlign: 'center' }}>Locked</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>YOUR JOURNEY</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
            <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: colors.gold.primary, marginBottom: spacing[1] }}>{profile.stats.totalTransactions}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Transactions</div>
            </div>
            <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary, marginBottom: spacing[1] }}>{(profile.stats.totalCoinsEarned / 1000).toFixed(1)}K</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Coins Earned</div>
            </div>
            <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary, marginBottom: spacing[1] }}>{profile.stats.invitesSent}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Friends Invited</div>
            </div>
            <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: colors.gold.primary, marginBottom: spacing[1] }}>{profile.stats.campaignsCompleted}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Campaigns</div>
            </div>
          </div>
        </div>

        {/* Profile Options */}
        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>ACCOUNT</div>

          {[
            { icon: '👤', label: 'Edit Profile', path: '/prive/profile/edit' },
            { icon: '🔐', label: 'Privacy & Visibility', path: '/prive/privacy' },
            { icon: '📊', label: 'Category Authority', path: '/prive/authority' },
            { icon: '📜', label: 'Activity Statement', path: '/prive/activity' },
            { icon: '⚙️', label: 'Settings', path: '/prive/settings' },
            { icon: '❓', label: 'Help & Support', path: '/help' },
          ].map((item, index) => (
            <div key={index} onClick={() => navigate(item.path)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[2], cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <div style={{ fontSize: '20px' }}>{item.icon}</div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>{item.label}</div>
              </div>
              <div style={{ fontSize: '24px', color: colors.text.tertiary }}>›</div>
            </div>
          ))}
        </div>

        {/* Exit Option */}
        <div onClick={() => navigate('/prive/exit')} style={{ textAlign: 'center', padding: `${spacing[4]} 0`, marginTop: spacing[4], cursor: 'pointer' }}>
          <div style={{ fontSize: '15px', color: '#EF4444' }}>Leave Privé</div>
        </div>
      </div>

      <ModeSwitcher />
      <BottomNavManager />
    </div>
  );
};

export default PriveProfile;
