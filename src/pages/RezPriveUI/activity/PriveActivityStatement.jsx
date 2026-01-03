/**
 * Privé Activity Statement - Web Version
 * Purpose: Monthly statement, not activity feed
 * Tone: Professional, calm, factual
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const statement = {
  period: 'December 2025',
  rewardsEarned: '₹4,680',
  campaignsCompleted: 5,
  privilegesUnlocked: 2,
  tierChanges: 'Upgraded to Privé Signature',
};

const PriveActivityStatement = () => {
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
          <h1 style={styles.title}>Statement</h1>
          <div style={styles.headerSpacer} />
        </div>

        {/* Period Header */}
        <div style={styles.periodCard}>
          <p style={styles.periodLabel}>Statement Period</p>
          <h2 style={styles.periodText}>{statement.period}</h2>
        </div>

        <div style={styles.divider} />

        {/* Statement Items */}
        <div style={styles.statementSection}>
          {/* Rewards Earned */}
          <div style={styles.statementItem}>
            <div style={styles.itemContent}>
              <div style={styles.itemIcon}>
                <span style={{ color: colors.gold.primary, fontSize: '20px' }}>+</span>
              </div>
              <div style={styles.itemInfo}>
                <p style={styles.itemLabel}>Rewards Earned</p>
                <h4 style={styles.itemValue}>{statement.rewardsEarned}</h4>
              </div>
            </div>
          </div>

          {/* Campaigns Completed */}
          <div style={styles.statementItem}>
            <div style={styles.itemContent}>
              <div style={styles.itemIcon}>
                <span style={{ color: colors.text.secondary, fontSize: '20px' }}>✓</span>
              </div>
              <div style={styles.itemInfo}>
                <p style={styles.itemLabel}>Campaigns Completed</p>
                <h4 style={{ ...styles.itemValue, color: colors.text.primary }}>
                  {statement.campaignsCompleted}
                </h4>
              </div>
            </div>
          </div>

          {/* Privileges Unlocked */}
          <div style={styles.statementItem}>
            <div style={styles.itemContent}>
              <div style={styles.itemIcon}>
                <span style={{ fontSize: '20px' }}>🔑</span>
              </div>
              <div style={styles.itemInfo}>
                <p style={styles.itemLabel}>Privileges Unlocked</p>
                <h4 style={{ ...styles.itemValue, color: colors.text.primary }}>
                  {statement.privilegesUnlocked}
                </h4>
              </div>
            </div>
          </div>

          {/* Tier Changes */}
          {statement.tierChanges && (
            <div style={styles.tierCard}>
              <div style={styles.itemContent}>
                <div style={styles.tierIcon}>
                  <span style={{ color: colors.gold.primary, fontSize: '20px' }}>↑</span>
                </div>
                <div style={styles.itemInfo}>
                  <p style={styles.itemLabel}>Tier Update</p>
                  <p style={styles.tierValue}>{statement.tierChanges}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Statement Footer */}
        <div style={styles.footerSection}>
          <div style={styles.lightDivider} />
          <p style={styles.footerText}>
            Statements are generated monthly
          </p>
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
  periodCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.xl,
    padding: `${spacing[5]}px ${spacing[4]}px`,
    border: '1px solid rgba(201, 169, 98, 0.2)',
    marginTop: spacing[4],
    textAlign: 'center',
  },
  periodLabel: {
    fontSize: '13px',
    color: colors.text.secondary,
    margin: 0,
    marginBottom: spacing[2],
  },
  periodText: {
    fontSize: '28px',
    fontWeight: '600',
    color: colors.gold.primary,
    margin: 0,
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(201, 169, 98, 0.3)',
    margin: `${spacing[6]}px 0`,
  },
  statementSection: {
    marginTop: spacing[2],
  },
  statementItem: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    border: '1px solid #2A2A2A',
  },
  tierCard: {
    background: 'linear-gradient(180deg, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 100%)',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    border: '1px solid rgba(201, 169, 98, 0.2)',
  },
  itemContent: {
    display: 'flex',
    alignItems: 'center',
  },
  itemIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    backgroundColor: '#2A2A2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  tierIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  itemInfo: {
    flex: 1,
  },
  itemLabel: {
    fontSize: '16px',
    color: colors.text.secondary,
    margin: 0,
    marginBottom: spacing[1],
  },
  itemValue: {
    fontSize: '22px',
    fontWeight: '600',
    color: colors.gold.primary,
    margin: 0,
  },
  tierValue: {
    fontSize: '18px',
    fontWeight: '500',
    color: colors.gold.primary,
    margin: 0,
  },
  footerSection: {
    marginTop: spacing[4],
  },
  lightDivider: {
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: spacing[6],
  },
  footerText: {
    fontSize: '12px',
    color: colors.text.tertiary,
    textAlign: 'center',
  },
};

export default PriveActivityStatement;
