/**
 * Privé Score Breakdown
 * Detailed breakdown of 6-pillar scoring system
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveScoreBreakdown = () => {
  const navigate = useNavigate();

  const totalScore = 74.5;
  
  const pillars = [
    {
      id: 'engagement',
      name: 'Engagement',
      score: 78,
      weight: 25,
      icon: '📊',
      color: '#4CAF50',
      description: 'Active participation and interaction frequency',
      metrics: [
        { label: 'Weekly visits', value: '12', target: '15' },
        { label: 'Actions completed', value: '45', target: '50' },
        { label: 'Response rate', value: '92%', target: '95%' },
      ],
    },
    {
      id: 'trust',
      name: 'Trust',
      score: 92,
      weight: 20,
      icon: '🛡️',
      color: '#2196F3',
      description: 'Reliability and authenticity of actions',
      metrics: [
        { label: 'Verified reviews', value: '28', target: '30' },
        { label: 'Report accuracy', value: '96%', target: '95%' },
        { label: 'Account age', value: '8 mo', target: '6 mo' },
      ],
    },
    {
      id: 'influence',
      name: 'Influence',
      score: 65,
      weight: 20,
      icon: '📢',
      color: '#E91E63',
      description: 'Reach and impact of shared content',
      metrics: [
        { label: 'Total reach', value: '12.4K', target: '15K' },
        { label: 'Avg engagement', value: '7.2%', target: '8%' },
        { label: 'Content quality', value: '85%', target: '90%' },
      ],
    },
    {
      id: 'economic',
      name: 'Economic Value',
      score: 70,
      weight: 15,
      icon: '💰',
      color: '#9C27B0',
      description: 'Transaction volume and consistency',
      metrics: [
        { label: 'Monthly spend', value: '₹12.5K', target: '₹15K' },
        { label: 'Transactions', value: '18', target: '20' },
        { label: 'Avg order value', value: '₹695', target: '₹750' },
      ],
    },
    {
      id: 'brand_affinity',
      name: 'Brand Affinity',
      score: 60,
      weight: 10,
      icon: '🎯',
      color: '#FF9800',
      description: 'Loyalty to premium partner brands',
      metrics: [
        { label: 'Partner stores', value: '8', target: '12' },
        { label: 'Repeat purchases', value: '45%', target: '60%' },
        { label: 'Brand campaigns', value: '5', target: '8' },
      ],
    },
    {
      id: 'network',
      name: 'Network',
      score: 55,
      weight: 10,
      icon: '🔗',
      color: '#00BCD4',
      description: 'Referrals and community growth',
      metrics: [
        { label: 'Referrals joined', value: '8', target: '12' },
        { label: 'Network value', value: '₹4K', target: '₹6K' },
        { label: 'Engagement rate', value: '67%', target: '75%' },
      ],
    },
  ];

  const getTrendIcon = (score) => {
    if (score >= 80) return { icon: '↑', color: '#10B981', label: 'Excellent' };
    if (score >= 60) return { icon: '→', color: '#FFC107', label: 'Good' };
    return { icon: '↓', color: '#EF4444', label: 'Needs work' };
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${spacing[3]}px ${spacing[4]}px`,
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#181818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '18px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>
          Score Breakdown
        </h1>
        <div style={{ width: '40px' }} />
      </div>

      <div style={{ padding: spacing[5] }}>
        {/* Total Score Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))',
          borderRadius: borderRadius.xl,
          padding: spacing[6],
          border: '1px solid rgba(201, 169, 98, 0.2)',
          textAlign: 'center',
          marginBottom: spacing[6],
        }}>
          <p style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[2] }}>
            YOUR PRIVÉ SCORE
          </p>
          <div style={{ fontSize: '56px', fontWeight: '200', color: colors.gold.primary, marginBottom: spacing[2] }}>
            {totalScore}
          </div>
          <p style={{ fontSize: '15px', color: colors.text.secondary }}>
            Top 15% of Privé members
          </p>
        </div>

        {/* Info Card */}
        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderRadius: borderRadius.lg,
          padding: spacing[4],
          marginBottom: spacing[6],
          border: '1px solid rgba(59, 130, 246, 0.2)',
        }}>
          <p style={{ fontSize: '14px', color: '#60A5FA', lineHeight: '20px' }}>
            Your score is calculated from 6 pillars, each weighted differently. Focus on lower-scoring pillars to advance faster.
          </p>
        </div>

        {/* Pillars Breakdown */}
        <div>
          <p style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1px', marginBottom: spacing[4] }}>
            6-PILLAR BREAKDOWN
          </p>

          {pillars.map((pillar) => {
            const trend = getTrendIcon(pillar.score);
            const contribution = (pillar.score * pillar.weight / 100).toFixed(1);

            return (
              <div
                key={pillar.id}
                style={{
                  backgroundColor: '#141414',
                  borderRadius: borderRadius.xl,
                  padding: spacing[5],
                  marginBottom: spacing[4],
                  border: '1px solid #2A2A2A',
                }}
              >
                {/* Pillar Header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing[4] }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '24px',
                    backgroundColor: pillar.color + '20',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: spacing[3],
                  }}>
                    <span style={{ fontSize: '24px' }}>{pillar.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '17px', color: colors.text.primary, marginBottom: '4px' }}>
                      {pillar.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: colors.text.tertiary }}>
                      {pillar.weight}% of total score
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '28px', fontWeight: '300', color: pillar.color }}>
                      {pillar.score}
                    </div>
                    <div style={{ fontSize: '11px', color: trend.color }}>
                      {trend.icon} {trend.label}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: spacing[4] }}>
                  <div style={{
                    height: '8px',
                    backgroundColor: '#0A0A0A',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${pillar.score}%`,
                      backgroundColor: pillar.color,
                      borderRadius: '4px',
                    }} />
                  </div>
                  <p style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>
                    Contributes {contribution} points to your total score
                  </p>
                </div>

                {/* Description */}
                <p style={{ fontSize: '14px', color: colors.text.secondary, marginBottom: spacing[4], lineHeight: '20px' }}>
                  {pillar.description}
                </p>

                {/* Metrics */}
                <div style={{
                  backgroundColor: '#0A0A0A',
                  borderRadius: borderRadius.lg,
                  padding: spacing[3],
                }}>
                  {pillar.metrics.map((metric, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: `${spacing[2]}px 0`,
                        borderBottom: index < pillar.metrics.length - 1 ? '1px solid #1A1A1A' : 'none',
                      }}
                    >
                      <span style={{ fontSize: '13px', color: colors.text.tertiary }}>
                        {metric.label}
                      </span>
                      <span style={{ fontSize: '13px', color: colors.text.primary }}>
                        {metric.value} <span style={{ color: colors.text.tertiary }}>/ {metric.target}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Steps */}
        <div style={{
          backgroundColor: '#141414',
          borderRadius: borderRadius.xl,
          padding: spacing[5],
          border: '1px solid rgba(201, 169, 98, 0.2)',
        }}>
          <h3 style={{ fontSize: '17px', color: colors.gold.primary, marginBottom: spacing[3] }}>
            How to Improve Your Score
          </h3>
          <ul style={{ fontSize: '14px', color: colors.text.secondary, lineHeight: '24px', paddingLeft: '20px' }}>
            <li>Focus on your lowest-scoring pillars first</li>
            <li>Complete 2-3 brand campaigns monthly</li>
            <li>Share high-quality content regularly</li>
            <li>Refer friends to grow your network</li>
            <li>Maintain consistent engagement with partners</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveScoreBreakdown;
