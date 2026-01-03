/**
 * Privé Downgrade / Exit Screen - Web Version
 * Purpose: Even exit must feel respectful
 * Tone: No guilt, no pressure
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveExit = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div style={styles.container}>
      <BottomNavManager />

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.backButton} onClick={() => navigate(-1)}>
          <span style={styles.backIcon}>←</span>
        </div>
        <h1 style={styles.headerTitle}>Status Update</h1>
        <div style={styles.headerSpacer} />
      </div>

      <div style={styles.content}>
        <div style={styles.scrollContent}>
          {/* Icon */}
          <div style={styles.iconContainer}>
            <span style={styles.iconText}>−</span>
          </div>

          {/* Message */}
          <h2 style={styles.title}>Privé Access Update</h2>

          <div style={styles.messageCard}>
            <p style={styles.messagePrimary}>
              Privé access reflects ongoing impact.
            </p>
            <p style={styles.messageSecondary}>
              You may continue enjoying ReZ benefits at any time.
            </p>
          </div>

          {/* What Remains */}
          <div style={styles.remainsSection}>
            <p style={styles.sectionLabel}>WHAT CONTINUES</p>
            <div style={styles.remainsCard}>
              <div style={styles.remainsItem}>
                <span style={styles.checkmark}>✓</span>
                <p style={styles.remainsText}>Full ReZ app access</p>
              </div>
              <div style={styles.remainsItem}>
                <span style={styles.checkmark}>✓</span>
                <p style={styles.remainsText}>ReZ Coins and rewards</p>
              </div>
              <div style={styles.remainsItem}>
                <span style={styles.checkmark}>✓</span>
                <p style={styles.remainsText}>Standard offers and deals</p>
              </div>
            </div>
          </div>

          {/* Re-qualify Note */}
          <p style={styles.requalifyNote}>
            You may re-enter Privé through continued meaningful engagement.
          </p>
        </div>

        {/* CTA */}
        <div style={styles.ctaContainer}>
          <div style={styles.ctaButton} onClick={handleContinue}>
            <span style={styles.ctaText}>Continue with ReZ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0A0A0A',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${spacing[4]}px ${spacing[5]}px`,
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
  headerTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: colors.text.primary,
    margin: 0,
  },
  headerSpacer: {
    width: '40px',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: `0 ${spacing[5]}px`,
    paddingBottom: '100px',
  },
  scrollContent: {
    flex: 1,
    paddingTop: spacing[8],
  },
  iconContainer: {
    width: '72px',
    height: '72px',
    borderRadius: '36px',
    backgroundColor: '#2A2A2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: spacing[6],
  },
  iconText: {
    fontSize: '32px',
    color: colors.text.secondary,
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: colors.text.primary,
    textAlign: 'center',
    margin: 0,
    marginBottom: spacing[4],
  },
  messageCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    marginBottom: spacing[6],
    border: '1px solid #2A2A2A',
    textAlign: 'center',
  },
  messagePrimary: {
    fontSize: '16px',
    color: colors.text.primary,
    margin: 0,
    marginBottom: spacing[2],
  },
  messageSecondary: {
    fontSize: '16px',
    color: colors.text.secondary,
    margin: 0,
  },
  remainsSection: {
    marginBottom: spacing[6],
  },
  sectionLabel: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    color: colors.text.tertiary,
    marginBottom: spacing[3],
    fontWeight: '600',
  },
  remainsCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.lg,
    border: '1px solid rgba(201, 169, 98, 0.2)',
    overflow: 'hidden',
  },
  remainsItem: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[3],
    padding: `${spacing[3]}px ${spacing[4]}px`,
    borderBottom: '1px solid rgba(201, 169, 98, 0.1)',
  },
  checkmark: {
    fontSize: '16px',
    color: colors.gold.primary,
  },
  remainsText: {
    fontSize: '16px',
    color: colors.text.secondary,
    margin: 0,
  },
  requalifyNote: {
    fontSize: '13px',
    color: colors.text.tertiary,
    textAlign: 'center',
    lineHeight: '22px',
    padding: `0 ${spacing[4]}px`,
  },
  ctaContainer: {
    paddingBottom: spacing[8],
  },
  ctaButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: borderRadius.lg,
    padding: `${spacing[4]}px ${spacing[5]}px`,
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid #3A3A3A',
  },
  ctaText: {
    fontSize: '16px',
    fontWeight: '600',
    color: colors.text.primary,
  },
};

export default PriveExit;
