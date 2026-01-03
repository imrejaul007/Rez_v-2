/**
 * Privé Home/Dashboard - Main entry screen
 * Exact aesthetic from rezprive with luxury dark theme
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';
import ModeSwitcher from '../../components/ModeSwitcher';

const { colors, spacing, borderRadius } = priveTheme;

const PriveHome = () => {
  const navigate = useNavigate();

  const userData = {
    name: 'Rejaul Karim',
    tier: 'Signature',
    tierProgress: 0.72,
    nextTier: 'Elite',
    pointsToNext: 2800,
    totalCoins: 12450,
    rezCoins: 8200,
    priveCoins: 3150,
    brandedCoins: 1100,
    monthlyEarnings: 2840,
    activeCampaigns: 3,
    completedCampaigns: 47,
    memberId: '4829 7156 3842 0917',
    validThru: '12/28',
    totalScore: 74.5,
    accessState: 'active',
    pillars: [
      { id: 'engagement', shortName: 'Engage', score: 78, weight: 0.25, trend: 'up', icon: '📊', color: '#4CAF50' },
      { id: 'trust', shortName: 'Trust', score: 92, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
      { id: 'influence', shortName: 'Influence', score: 65, weight: 0.20, trend: 'up', icon: '📢', color: '#E91E63' },
      { id: 'economic', shortName: 'Economic', score: 70, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
      { id: 'brand_affinity', shortName: 'Brand', score: 60, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
      { id: 'network', shortName: 'Network', score: 55, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
    ],
  };

  const quickActions = [
    { id: 'wallet', label: 'Wallet', icon: '◈', route: '/wallet' },
    { id: 'earnings', label: 'Earnings', icon: '↑', route: '/prive/earnings' },
    { id: 'redeem', label: 'Redeem', icon: '◇', route: '/prive/redeem' },
    { id: 'invite', label: 'Invite', icon: '✦', route: '/prive/invitations' },
  ];

  const featuredOffers = [
    { id: '1', brand: 'Artisan Watch Co', title: 'Private Preview Event', reward: '500 Privé Coins', expiresIn: '2 days', isExclusive: true },
    { id: '2', brand: 'Luxury Café', title: 'Weekend Dining Experience', reward: '300 ReZ Coins', expiresIn: '5 days', isExclusive: false },
    { id: '3', brand: 'Premium Spa', title: 'Wellness Retreat', reward: '750 Privé Coins', expiresIn: '7 days', isExclusive: true },
  ];

  const formatNumber = (num) => num.toLocaleString();

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return { icon: '↑', color: '#4CAF50' };
      case 'down': return { icon: '↓', color: '#F44336' };
      default: return { icon: '→', color: '#9E9E9E' };
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px', overflowX: 'hidden' }}>
      {/* Premium Member Card */}
      <div style={{ padding: spacing[5], paddingTop: spacing[6] }}>
        <div
          onClick={() => navigate('/prive/tier-progress')}
          style={{
            background: 'linear-gradient(135deg, #1A1A1A, #0D0D0D, #1A1A1A)',
            borderRadius: borderRadius['2xl'],
            padding: spacing[5],
            border: `1px solid rgba(201, 169, 98, 0.3)`,
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            aspectRatio: '1.586',
          }}
        >
          {/* Background Pattern */}
          <div style={{ position: 'absolute', top: '-50px', right: '-30px', width: '200px', height: '200px', borderRadius: '100px', backgroundColor: 'rgba(201, 169, 98, 0.03)' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-50px', width: '250px', height: '250px', borderRadius: '125px', backgroundColor: 'rgba(201, 169, 98, 0.02)' }} />

          {/* Card Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing[4], position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
              <div style={{ fontSize: '28px', color: colors.gold.primary }}>◈</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: colors.gold.primary, letterSpacing: '2px' }}>REZ PRIVÉ</div>
                <div style={{ fontSize: '9px', color: colors.text.tertiary, letterSpacing: '1.5px', marginTop: '2px' }}>{userData.tier.toUpperCase()} MEMBER</div>
              </div>
            </div>
            <div style={{ transform: 'rotate(90deg)', fontSize: '16px', color: colors.gold.primary, opacity: 0.7 }}>))))</div>
          </div>

          {/* Chip */}
          <div style={{ width: '45px', height: '35px', borderRadius: '6px', backgroundColor: colors.gold.primary, marginBottom: spacing[4], border: '1px solid rgba(201, 169, 98, 0.5)', position: 'relative', zIndex: 1 }} />

          {/* Card Number */}
          <div style={{ fontSize: '18px', fontWeight: '500', color: colors.text.primary, letterSpacing: '3px', marginBottom: spacing[4], fontFamily: 'monospace', position: 'relative', zIndex: 1 }}>
            {userData.memberId}
          </div>

          {/* Details */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[3], position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ fontSize: '8px', color: colors.text.tertiary }}>MEMBER</div>
              <div style={{ fontSize: '11px', color: colors.text.primary, fontWeight: '500' }}>{userData.name.toUpperCase()}</div>
            </div>
            <div>
              <div style={{ fontSize: '8px', color: colors.text.tertiary }}>VALID THRU</div>
              <div style={{ fontSize: '11px', color: colors.text.primary, fontWeight: '500' }}>{userData.validThru}</div>
            </div>
            <div>
              <div style={{ fontSize: '8px', color: colors.text.tertiary }}>SCORE</div>
              <div style={{ fontSize: '14px', color: colors.gold.primary, fontWeight: '700' }}>{userData.totalScore}</div>
            </div>
          </div>

          {/* Progress */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden', marginBottom: spacing[2] }}>
              <div style={{ height: '100%', width: `${userData.tierProgress * 100}%`, background: `linear-gradient(90deg, ${colors.gold.primary}, ${colors.gold.dark})`, borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: colors.text.tertiary }}>
              <span>{userData.tier}</span>
              <span>{formatNumber(userData.pointsToNext)} pts to {userData.nextTier}</span>
            </div>
          </div>

          {/* Gold Line */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${colors.gold.primary}, transparent)` }} />
        </div>
      </div>

      {/* Welcome */}
      <div style={{ padding: `${spacing[2]} ${spacing[5]}`, fontSize: '15px', color: colors.text.secondary }}>
        Welcome back, <span style={{ color: colors.gold.primary }}>{userData.name.split(' ')[0]}</span>
      </div>

      {/* Balance Card */}
      <div style={{ padding: `0 ${spacing[5]}`, marginTop: spacing[4] }}>
        <div onClick={() => navigate('/wallet')} style={{ background: 'linear-gradient(135deg, #1A1A1A, #141414)', borderRadius: borderRadius.xl, padding: spacing[5], border: '1px solid rgba(201, 169, 98, 0.2)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[2] }}>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>TOTAL BALANCE</div>
            <div style={{ fontSize: '13px', color: colors.gold.primary }}>View Wallet →</div>
          </div>
          <div style={{ fontSize: '42px', fontWeight: '200', color: colors.gold.primary, letterSpacing: '-1px' }}>{formatNumber(userData.totalCoins)}</div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>coins</div>
          <div style={{ display: 'flex', gap: spacing[4], marginTop: spacing[4], paddingTop: spacing[4], borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            {[
              { label: `${formatNumber(userData.rezCoins)} ReZ`, color: colors.gold.primary },
              { label: `${formatNumber(userData.priveCoins)} Privé`, color: '#B8860B' },
              { label: `${formatNumber(userData.brandedCoins)} Branded`, color: '#8B7355' },
            ].map((coin, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: coin.color }} />
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{coin.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing[3], paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>This month</div>
            <div style={{ fontSize: '15px', color: colors.gold.primary }}>+{formatNumber(userData.monthlyEarnings)}</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: spacing[5] }}>
        {quickActions.map((action) => (
          <div key={action.id} onClick={() => navigate(action.route)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2], cursor: 'pointer' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${colors.border.primary}` }}>
              <div style={{ fontSize: '22px', color: colors.gold.primary }}>{action.icon}</div>
            </div>
            <div style={{ fontSize: '13px', color: colors.text.secondary }}>{action.label}</div>
          </div>
        ))}
      </div>

      {/* 6 Pillars */}
      <div style={{ padding: `0 ${spacing[5]}`, marginTop: spacing[6] }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>THE 6 PILLARS</div>
          <div style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>View Details →</div>
        </div>

        {/* Score Card */}
        <div style={{ background: colors.background.secondary, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[3], border: '1px solid rgba(201, 169, 98, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Privé Score</div>
            <div style={{ fontSize: '34px', fontWeight: '600', color: colors.gold.primary }}>{userData.totalScore.toFixed(1)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `${spacing[2]} ${spacing[3]}`, borderRadius: borderRadius.sm, marginBottom: spacing[1] }}>
              <span style={{ fontSize: '12px' }}>◈</span>
              <span style={{ fontSize: '13px', color: colors.gold.primary, marginLeft: spacing[1] }}>Entry</span>
            </div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{(85 - userData.totalScore).toFixed(1)} to Elite</div>
          </div>
        </div>

        {/* Pillar Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing[2] }}>
          {userData.pillars.map((pillar) => {
            const trend = getTrendIcon(pillar.trend);
            return (
              <div key={pillar.id} style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[3], border: `1px solid ${colors.border.primary}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[1] }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '14px', backgroundColor: `${pillar.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '16px' }}>{pillar.icon}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <span style={{ fontSize: '17px', color: colors.text.primary }}>{pillar.score}</span>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: trend.color }}>{trend.icon}</span>
                  </div>
                </div>
                <div style={{ fontSize: '13px', color: colors.text.secondary, marginBottom: spacing[2] }}>{pillar.shortName}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>{(pillar.weight * 100).toFixed(0)}% weight</div>
                <div style={{ height: '4px', backgroundColor: colors.border.primary, borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pillar.score}%`, backgroundColor: pillar.color, borderRadius: '2px' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Offers */}
      <div style={{ padding: `0 ${spacing[5]}`, marginTop: spacing[6] }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[4] }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>CURATED FOR YOU</div>
          <div onClick={() => navigate('/prive/privileges')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>See All →</div>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], overflowX: 'auto', scrollbarWidth: 'none' }}>
          {featuredOffers.map((offer) => (
            <div key={offer.id} onClick={() => navigate(`/prive/offer/${offer.id}`)} style={{ minWidth: '70%', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, cursor: 'pointer', position: 'relative' }}>
              {offer.isExclusive && (
                <div style={{ position: 'absolute', top: spacing[3], right: spacing[3], backgroundColor: 'rgba(201, 169, 98, 0.2)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                  <div style={{ fontSize: '9px', fontWeight: '600', color: colors.gold.primary, letterSpacing: '0.5px' }}>EXCLUSIVE</div>
                </div>
              )}
              <div style={{ fontSize: '13px', color: colors.gold.primary }}>{offer.brand}</div>
              <div style={{ fontSize: '17px', color: colors.text.primary, margin: `${spacing[2]} 0` }}>{offer.title}</div>
              <div style={{ marginTop: spacing[4], paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '15px', color: colors.gold.primary }}>{offer.reward}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Expires in {offer.expiresIn}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Summary */}
      <div style={{ padding: `0 ${spacing[5]}`, marginTop: spacing[6] }}>
        <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>YOUR ACTIVITY</div>
        <div style={{ backgroundColor: colors.background.secondary, borderRadius: borderRadius.lg, padding: spacing[5], border: `1px solid ${colors.border.primary}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: spacing[4] }}>
            {[
              { label: 'Active', value: userData.activeCampaigns },
              { label: 'Completed', value: userData.completedCampaigns },
              { label: 'Avg Rating', value: '4.9' },
            ].map((stat, i, arr) => (
              <div key={i}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>{stat.value}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{stat.label}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.08)', position: 'absolute', right: 0 }} />}
              </div>
            ))}
          </div>
          <div onClick={() => navigate('/prive/activity')} style={{ textAlign: 'center', paddingTop: spacing[4], borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '15px', color: colors.gold.primary, cursor: 'pointer' }}>
            View Full History
          </div>
        </div>
      </div>

      <ModeSwitcher />
      <BottomNavManager />
    </div>
  );
};

export default PriveHome;
