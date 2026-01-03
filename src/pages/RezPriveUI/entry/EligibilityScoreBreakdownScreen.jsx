/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Eligibility Score Breakdown Screen
 * Shows why user is eligible / in review
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card, ProgressBar } from '../../components';
import { colors, spacing } from '../../theme';

interface ScoreFactor {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  status: 'met' | 'partial' | 'not_met';
  description: string;
}

interface EligibilityScoreBreakdownScreenProps {
  totalScore?: number;
  requiredScore?: number;
  status?: 'eligible' | 'in_review' | 'not_eligible';
  factors?: ScoreFactor[];
  onBack?: () => void;
}

export const EligibilityScoreBreakdownScreen: React.FC<EligibilityScoreBreakdownScreenProps> = ({
  totalScore = 78,
  requiredScore = 70,
  status = 'eligible',
  factors = [
    { id: '1', label: 'Social Influence', score: 25, maxScore: 30, status: 'met', description: 'Strong follower engagement' },
    { id: '2', label: 'Content Quality', score: 20, maxScore: 25, status: 'met', description: 'High-quality posts verified' },
    { id: '3', label: 'Category Authority', score: 18, maxScore: 20, status: 'met', description: 'Recognized in Dining & Travel' },
    { id: '4', label: 'Account Age', score: 10, maxScore: 10, status: 'met', description: 'Account over 2 years old' },
    { id: '5', label: 'Brand Connections', score: 5, maxScore: 15, status: 'partial', description: 'Few brand collaborations' },
  ],
  onBack,
}) => {
  const navigate = useNavigate();

  const getStatusColor = (s: string) => {
    switch (s) {
      case 'met': return '#22C55E';
      case 'partial': return colors.gold.primary;
      case 'not_met': return '#EF4444';
      default: return colors.text.tertiary;
    }
  };

  const getStatusIcon = (s: string) => {
    switch (s) {
      case 'met': return '✓';
      case 'partial': return '◐';
      case 'not_met': return '✗';
      default: return '○';
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Eligibility Score
          </span>
          <span variant="body" color={colors.text.secondary}>
            Your Privé qualification breakdown
          </span>
        </div>

        {/* Overall Score */}
        <Card variant="goldGlow" style={style={{...styles.scoreCard}>
          <div style={style={{...styles.scoreCircle}>
            <span variant="h1" gold>{totalScore}</span>
            <span variant="caption" color={colors.text.tertiary}>/ 100</span>
          </div>
          <div style={style={{...styles.scoreInfo}>
            <span variant="bodyLarge" color={colors.text.primary}>
              {status === 'eligible' ? 'You Qualify!' : status === 'in_review' ? 'Under Review' : 'Not Yet Eligible'}
            </span>
            <span variant="caption" color={colors.text.tertiary}>
              Required: {requiredScore} points
            </span>
          </div>
          <div style={[style={{...styles.statusBadge, { backgroundColor: status === 'eligible' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(201, 169, 98, 0.2)' }]}>
            <span variant="caption" style={{ color: status === 'eligible' ? '#22C55E' : colors.gold.primary }}>
              {status === 'eligible' ? 'ELIGIBLE' : status === 'in_review' ? 'IN REVIEW' : 'PENDING'}
            </span>
          </div>
        </Card>

        {/* Score Factors */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Score Breakdown
          </span>

          {factors.map((factor) => (
            <Card key={factor.id} variant="default" style={style={{...styles.factorCard}>
              <div style={style={{...styles.factorHeader}>
                <div style={style={{...styles.factorTitle}>
                  <div style={[style={{...styles.statusIcon, { backgroundColor: getStatusColor(factor.status) + '20' }]}>
                    <span style={{ color: getStatusColor(factor.status), fontSize: 14 }}>
                      {getStatusIcon(factor.status)}
                    </span>
                  </div>
                  <span variant="body" color={colors.text.primary}>
                    {factor.label}
                  </span>
                </div>
                <span variant="bodyLarge" gold>
                  {factor.score}/{factor.maxScore}
                </span>
              </div>
              <ProgressBar
                progress={factor.score / factor.maxScore}
                color={getStatusColor(factor.status)}
                style={style={{...styles.progressBar}
              />
              <span variant="caption" color={colors.text.tertiary}>
                {factor.description}
              </span>
            </Card>
          ))}
        </div>

        {/* Tips */}
        {status !== 'eligible' && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              How to Improve
            </span>
            <Card variant="default" style={style={{...styles.tipCard}>
              <span variant="body" color={colors.text.secondary}>
                • Increase engagement on your content{'\n'}
                • Build more brand collaborations{'\n'}
                • Maintain consistent posting schedule{'\n'}
                • Grow your follower base organically
              </span>
            </Card>
          </div>
        )}

        {/* Action */}
        <div style={style={{...styles.actions}>
          <Button
            label="Back to Profile"
            variant="outline"
            onClick={onBack || (() => navigate(-1))}
          />
        </div>

        <div style={style={{...styles.bottomPadding} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
  scoreCard: {
    marginHorizontal: spacing[5],
    alignItems: 'center',
    paddingVertical: spacing[6],
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.background.primary,
    borderWidth: 3,
    borderColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  scoreInfo: {
    alignItems: 'center',
    gap: spacing[1],
    marginBottom: spacing[3],
  },
  statusBadge: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: 16,
  },
  section: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  sectionLabel: {
    marginBottom: spacing[3],
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  factorCard: {
    marginBottom: spacing[3],
    gap: spacing[2],
  },
  factorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  factorTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  statusIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    marginVertical: spacing[1],
  },
  tipCard: {
    backgroundColor: colors.background.tertiary,
  },
  actions: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  bottomPadding: {
    height: spacing[8],
  },
};

export default EligibilityScoreBreakdownScreen;
