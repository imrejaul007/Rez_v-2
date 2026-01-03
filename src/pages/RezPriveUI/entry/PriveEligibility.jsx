/**
 * A1 - Privé Eligibility Screen
 * Shows the 6-pillar Privé Eligibility Engine (PEE) scoring
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveEligibility = () => {
  const navigate = useNavigate();
  const [expandedPillar, setExpandedPillar] = useState(null);

  const eligibility = {
    totalScore: 74.5,
    tier: 'entry',
    pillars: [
      { id: 'engagement', name: 'Engagement', score: 78, weight: 0.25, trend: 'up', icon: '📊', color: '#4CAF50' },
      { id: 'trust', name: 'Trust & Integrity', score: 92, weight: 0.20, trend: 'stable', icon: '🛡️', color: '#2196F3' },
      { id: 'influence', name: 'Influence', score: 65, weight: 0.20, trend: 'up', icon: '📢', color: '#E91E63' },
      { id: 'economic', name: 'Economic Value', score: 70, weight: 0.15, trend: 'stable', icon: '💰', color: '#9C27B0' },
      { id: 'brand_affinity', name: 'Brand Affinity', score: 60, weight: 0.10, trend: 'down', icon: '🎯', color: '#FF9800' },
      { id: 'network', name: 'Network & Community', score: 55, weight: 0.10, trend: 'stable', icon: '🔗', color: '#00BCD4' },
    ],
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return { icon: '↑', color: '#4CAF50' };
      case 'down': return { icon: '↓', color: '#F44336' };
      default: return { icon: '→', color: '#9E9E9E' };
    }
  };

  const pointsToElite = (85 - eligibility.totalScore).toFixed(1);
  const progressToElite = Math.min((eligibility.totalScore / 85) * 100, 100);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '140px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: spacing[5] }}>
        <div onClick={() => navigate(-1)} style={{
          width: '40px',
          height: '40px',
          borderRadius: '20px',
          backgroundColor: colors.background.card,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: '20px', color: colors.text.primary }}>←</div>
        </div>
        <div style={{ fontSize: '20px', color: colors.text.primary }}>Privé Eligibility</div>
        <div onClick={() => navigate('/prive/why-prive')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>Why Privé?</div>
      </div>

      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', borderRadius: borderRadius.xl, padding: spacing[5], marginBottom: spacing[6], border: `1px solid rgba(201, 169, 98, 0.3)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], backgroundColor: 'rgba(201, 169, 98, 0.15)', padding: `${spacing[2]} ${spacing[3]}`, borderRadius: borderRadius.full, alignSelf: 'flex-start', marginBottom: spacing[4] }}>
            <div style={{ fontSize: '14px', color: colors.gold.primary }}>◈</div>
            <div style={{ fontSize: '13px', color: colors.gold.primary, fontWeight: '700', letterSpacing: '1px' }}>PRIVÉ ENTRY</div>
          </div>

          <div style={{ marginBottom: spacing[5] }}>
            <div style={{ fontSize: '28px', color: colors.text.primary, marginBottom: spacing[2] }}>You're Eligible</div>
            <div style={{ fontSize: '15px', color: colors.text.tertiary }}>{pointsToElite} points to Elite</div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[2] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Entry (70)</div>
              <div style={{ fontSize: '11px', color: colors.gold.primary }}>Elite (85)</div>
            </div>
            <div style={{ height: '8px', backgroundColor: colors.border.primary, borderRadius: '4px', position: 'relative' }}>
              <div style={{ height: '100%', width: `${progressToElite}%`, backgroundColor: colors.gold.primary, borderRadius: '4px' }} />
              <div style={{ position: 'absolute', top: '-2px', left: `${(70 / 85) * 100}%`, width: '3px', height: '12px', backgroundColor: '#FFF', borderRadius: '1.5px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing[2] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary }}>Your Score</div>
              <div style={{ fontSize: '17px', color: colors.gold.primary }}>{eligibility.totalScore}</div>
            </div>
          </div>

          <div style={{ marginTop: spacing[4], paddingTop: spacing[4], borderTop: `1px solid rgba(255, 255, 255, 0.1)`, textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: colors.gold.primary, fontStyle: 'italic' }}>
              "Privé is earned through value creation, not app usage alone."
            </div>
          </div>
        </div>

        <div style={{ marginBottom: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>THE 6 PILLARS</div>

          {eligibility.pillars.map((pillar) => {
            const trend = getTrendIcon(pillar.trend);
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                style={{
                  backgroundColor: colors.background.card,
                  borderRadius: borderRadius.lg,
                  padding: spacing[4],
                  marginBottom: spacing[3],
                  border: `1px solid ${isExpanded ? 'rgba(201, 169, 98, 0.3)' : colors.border.primary}`,
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[3] }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: `${pillar.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '20px' }}>{pillar.icon}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                      <div style={{ fontSize: '15px', color: colors.text.primary }}>{pillar.name}</div>
                      <div style={{ backgroundColor: colors.border.primary, padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                        <div style={{ fontSize: '11px', color: colors.text.tertiary }}>{(pillar.weight * 100).toFixed(0)}%</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[1], marginTop: spacing[1] }}>
                      <div style={{ fontSize: '13px', color: pillar.color }}>Score: {pillar.score}</div>
                      <div style={{ fontSize: '12px', fontWeight: 'bold', color: trend.color }}>{trend.icon}</div>
                    </div>
                  </div>
                  <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '17px', color: colors.text.primary }}>{pillar.score}</div>
                  </div>
                </div>

                <div style={{ height: '4px', backgroundColor: colors.border.primary, borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pillar.score}%`, backgroundColor: pillar.color, borderRadius: '2px' }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[6], border: `1px solid ${colors.border.primary}` }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>SCORE THRESHOLDS</div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: colors.text.tertiary }}>&lt;70</div>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Not Eligible</div>
            </div>
            <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary }}>70+</div>
              <div style={{ fontSize: '11px', color: colors.gold.primary, marginTop: spacing[1] }}>Privé Entry</div>
            </div>
            <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '300', color: '#4CAF50' }}>85+</div>
              <div style={{ fontSize: '11px', color: '#4CAF50', marginTop: spacing[1] }}>Privé Elite</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: spacing[5], paddingBottom: spacing[6], backgroundColor: colors.background.primary, borderTop: `1px solid ${colors.border.primary}` }}>
        <div
          onClick={() => navigate('/prive')}
          style={{
            backgroundColor: colors.gold.primary,
            padding: `${spacing[4]} 0`,
            borderRadius: borderRadius.lg,
            textAlign: 'center',
            color: '#0A0A0A',
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          Continue to Privé
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveEligibility;
