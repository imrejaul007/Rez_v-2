/**
 * Privé Authority & Reputation - Web Version
 * Purpose: Show how much weight the user's voice carries
 * Trust score, brand confidence, community credibility
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const authority = {
  trustScore: 'Very High',
  brandConfidence: 'High',
  communityCredibility: 'Very High',
};

const getLevelProgress = (level) => {
  switch (level) {
    case 'Elite':
      return 1;
    case 'Very High':
      return 0.85;
    case 'High':
      return 0.7;
    default:
      return 0.5;
  }
};

const PriveAuthority = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <BottomNavManager />

      <div style={styles.scrollView}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.backButton} onClick={() => navigate('/prive/profile')}>
            <span style={styles.backIcon}>←</span>
          </div>
          <h1 style={styles.title}>Authority</h1>
          <div style={styles.headerSpacer} />
        </div>

        {/* Header Statement */}
        <div style={styles.headerCard}>
          <div style={styles.headerContent}>
            <div style={styles.headerIcon}>
              <span style={styles.checkmark}>✓</span>
            </div>
            <p style={styles.headerText}>
              Your recommendations are trusted by brands and users.
            </p>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Authority Metrics */}
        <div style={styles.metricsSection}>
          <p style={styles.sectionLabel}>YOUR AUTHORITY</p>

          {/* Trust Score */}
          <div style={styles.metricCard}>
            <div style={styles.metricHeader}>
              <div style={styles.metricIcon}>
                <span style={{ color: colors.gold.primary }}>★</span>
              </div>
              <div style={styles.metricInfo}>
                <p style={styles.metricTitle}>Trust Score</p>
                <p style={styles.metricDesc}>Based on content authenticity</p>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '600', color: colors.gold.primary }}>
                {authority.trustScore}
              </span>
            </div>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}>
                <div style={{
                  ...styles.progressFill,
                  width: `${getLevelProgress(authority.trustScore) * 100}%`,
                  boxShadow: '0 0 10px rgba(201, 169, 98, 0.5)',
                }} />
              </div>
            </div>
          </div>

          {/* Brand Confidence */}
          <div style={styles.metricCard}>
            <div style={styles.metricHeader}>
              <div style={styles.metricIcon}>
                <span style={{ color: colors.text.secondary }}>☆</span>
              </div>
              <div style={styles.metricInfo}>
                <p style={styles.metricTitle}>Brand Confidence</p>
                <p style={styles.metricDesc}>How brands perceive your influence</p>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
                {authority.brandConfidence}
              </span>
            </div>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${getLevelProgress(authority.brandConfidence) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Community Credibility */}
          <div style={styles.metricCard}>
            <div style={styles.metricHeader}>
              <div style={styles.metricIcon}>
                <span style={{ color: colors.text.secondary }}>♥</span>
              </div>
              <div style={styles.metricInfo}>
                <p style={styles.metricTitle}>Community Credibility</p>
                <p style={styles.metricDesc}>How users respond to your content</p>
              </div>
              <span style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary }}>
                {authority.communityCredibility}
              </span>
            </div>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${getLevelProgress(authority.communityCredibility) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div style={styles.meaningSection}>
          <p style={styles.sectionLabel}>WHAT THIS MEANS</p>
          <div style={styles.meaningCard}>
            <div style={styles.meaningItem}>
              <p style={styles.meaningText}>Brands seek your endorsement</p>
            </div>
            <div style={styles.meaningItem}>
              <p style={styles.meaningText}>Your reviews rank higher</p>
            </div>
            <div style={styles.meaningItem}>
              <p style={styles.meaningText}>Users trust your recommendations</p>
            </div>
          </div>
        </div>

        <div style={{ height: spacing[10] }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0A0A0A',
    paddingBottom: '80px',
  },
  scrollView: {
    padding: `0 ${spacing[5]}px`,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: '#181818',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  backIcon: {
    fontSize: '20px',
    color: colors.text.primary,
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: colors.text.primary,
    margin: 0,
  },
  headerSpacer: {
    width: '40px',
  },
  headerCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.xl,
    padding: spacing[5],
    border: '1px solid rgba(201, 169, 98, 0.2)',
    marginTop: spacing[4],
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '28px',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  checkmark: {
    fontSize: '24px',
    color: colors.gold.primary,
  },
  headerText: {
    fontSize: '18px',
    color: colors.text.primary,
    textAlign: 'center',
    margin: 0,
    padding: `0 ${spacing[2]}px`,
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
    margin: `${spacing[6]}px 0`,
  },
  metricsSection: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    color: colors.text.tertiary,
    marginBottom: spacing[4],
    fontWeight: '600',
  },
  metricCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    border: '1px solid #2A2A2A',
  },
  metricHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  metricIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
    fontSize: '20px',
  },
  metricInfo: {
    flex: 1,
  },
  metricTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: colors.text.primary,
    margin: 0,
    marginBottom: spacing[1],
  },
  metricDesc: {
    fontSize: '13px',
    color: colors.text.tertiary,
    margin: 0,
  },
  progressContainer: {
    marginTop: spacing[2],
  },
  progressBar: {
    height: '6px',
    backgroundColor: '#2A2A2A',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.gold.primary,
    borderRadius: '3px',
    transition: 'width 0.5s ease',
  },
  meaningSection: {
    marginTop: spacing[6],
  },
  meaningCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.lg,
    border: '1px solid rgba(201, 169, 98, 0.2)',
    overflow: 'hidden',
  },
  meaningItem: {
    padding: `${spacing[3]}px ${spacing[4]}px`,
    borderBottom: '1px solid rgba(201, 169, 98, 0.1)',
  },
  meaningText: {
    fontSize: '16px',
    color: colors.text.secondary,
    margin: 0,
  },
};

export default PriveAuthority;
