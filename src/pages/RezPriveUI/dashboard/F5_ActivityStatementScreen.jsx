/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * F5 - Privé Activity Statement
 * Purpose: Monthly statement, not activity feed
 * Tone: Professional, calm, factual
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface StatementData {
  period: string;
  rewardsEarned: string;
  campaignsCompleted: number;
  privilegesUnlocked: number;
  tierChanges?: string;
}

interface F5_ActivityStatementScreenProps {
  statement?: StatementData;
  onBack?: () => void;
}

export const F5_ActivityStatementScreen: React.FC<F5_ActivityStatementScreenProps> = ({
  statement = {
    period: 'December 2025',
    rewardsEarned: '\u20B94,680',
    campaignsCompleted: 5,
    privilegesUnlocked: 2,
    tierChanges: 'Upgraded to Privé Signature',
  },
  onBack,
}) => {
  return (
    <ScreenContainer>
      <PriveHeader title="Statement" showBack onBack={onBack} />

      {/* Period Header */}
      <Card variant="goldGlow" style={style={{...styles.periodCard}>
        <span variant="label" color={colors.text.secondary} center>
          Statement Period
        </span>
        <span variant="h2" gold center style={style={{...styles.periodText}>
          {statement.period}
        </span>
      </Card>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Statement Items */}
      <div style={style={{...styles.statementSection}>
        {/* Rewards Earned */}
        <Card variant="default" style={style={{...styles.statementItem}>
          <div style={style={{...styles.itemContent}>
            <div style={style={{...styles.itemIcon}>
              <span variant="body" gold>
                +
              </span>
            </div>
            <div style={style={{...styles.itemInfo}>
              <span variant="body" color={colors.text.secondary}>
                Rewards Earned
              </span>
              <span variant="h4" gold>
                {statement.rewardsEarned}
              </span>
            </div>
          </div>
        </Card>

        {/* Campaigns Completed */}
        <Card variant="default" style={style={{...styles.statementItem}>
          <div style={style={{...styles.itemContent}>
            <div style={style={{...styles.itemIcon}>
              <span variant="body" color={colors.text.secondary}>
                {'\u2713'}
              </span>
            </div>
            <div style={style={{...styles.itemInfo}>
              <span variant="body" color={colors.text.secondary}>
                Campaigns Completed
              </span>
              <span variant="h4" color={colors.text.primary}>
                {statement.campaignsCompleted}
              </span>
            </div>
          </div>
        </Card>

        {/* Privileges Unlocked */}
        <Card variant="default" style={style={{...styles.statementItem}>
          <div style={style={{...styles.itemContent}>
            <div style={style={{...styles.itemIcon}>
              <span variant="body" color={colors.text.secondary}>
                {'\uD83D\uDD11'}
              </span>
            </div>
            <div style={style={{...styles.itemInfo}>
              <span variant="body" color={colors.text.secondary}>
                Privileges Unlocked
              </span>
              <span variant="h4" color={colors.text.primary}>
                {statement.privilegesUnlocked}
              </span>
            </div>
          </div>
        </Card>

        {/* Tier Changes */}
        {statement.tierChanges && (
          <Card variant="gold" style={style={{...styles.statementItem}>
            <div style={style={{...styles.itemContent}>
              <div style={[style={{...styles.itemIcon, style={{...styles.tierIcon]}>
                <span variant="body" gold>
                  {'\u2191'}
                </span>
              </div>
              <div style={style={{...styles.itemInfo}>
                <span variant="body" color={colors.text.secondary}>
                  Tier Update
                </span>
                <span variant="bodyLarge" gold>
                  {statement.tierChanges}
                </span>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Statement Footer */}
      <div style={style={{...styles.footerSection}>
        <Divider variant="light" spacing={spacing[6]} />
        <span variant="caption" color={colors.text.tertiary} center>
          Statements are generated monthly
        </span>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  periodCard: {
    marginTop: spacing[4],
    paddingVertical: spacing[5],
  },
  periodText: {
    marginTop: spacing[2],
  },
  statementSection: {
    marginTop: spacing[2],
  },
  statementItem: {
    marginBottom: spacing[3],
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  tierIcon: {
    backgroundColor: colors.transparent.gold10,
  },
  itemInfo: {
    flex: 1,
    gap: spacing[1],
  },
  footerSection: {
    marginTop: spacing[4],
  },
};

export default F5_ActivityStatementScreen;
