/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * A5 - Privé Rules & Prestige Screen
 * Purpose: Luxury requires discipline
 * Tone: Authoritative, not threatening
 */

import React from 'react';
// React Native imports removed
import {
  ScreenContainer,
  Text,
  Button,
  Card,
  PriveHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

interface A5_RulesScreenProps {
  onAccept?: () => void;
}

export const A5_RulesScreen: React.FC<A5_RulesScreenProps> = ({
  onAccept,
}) => {
  const rules = [
    {
      title: 'Performance-Based Rewards',
      description: 'Privé rewards scale with the quality and impact of your engagement, not just activity volume.',
    },
    {
      title: 'Integrity Matters',
      description: 'Any form of manipulation or abuse leads to review. We protect the value of Privé for everyone.',
    },
    {
      title: 'Quality Over Quantity',
      description: 'Your content and recommendations carry weight. Authenticity is what makes Privé trusted.',
    },
    {
      title: 'Earned, Not Permanent',
      description: 'Privé status reflects ongoing contribution. It can be upgraded through excellence or paused if needed.',
    },
  ];

  return (
    <ScreenContainer>
      <PriveHeader title="Privé Code" />

      <div style={style={{...styles.content}>
        {/* Introduction */}
        <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
          Privé membership comes with privileges and responsibilities. Here's what shapes the Privé experience.
        </span>

        <Divider variant="gold" spacing={spacing[6]} />

        {/* Rules */}
        <div style={style={{...styles.rulesContainer}>
          {rules.map((rule, index) => (
            <div key={index} style={style={{...styles.ruleItem}>
              <div style={style={{...styles.ruleHeader}>
                <div style={style={{...styles.ruleNumber}>
                  <span variant="caption" gold>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                <span variant="h4" color={colors.text.primary} style={style={{...styles.ruleTitle}>
                  {rule.title}
                </span>
              </div>
              <span variant="body" color={colors.text.secondary} style={style={{...styles.ruleDescription}>
                {rule.description}
              </span>
              {index < rules.length - 1 && (
                <Divider variant="light" spacing={spacing[5]} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={style={{...styles.ctaContainer}>
        <Button
          title="I Understand"
          onClick={onAccept || (() => {})}
          variant="primary"
        />
      </div>
    </ScreenContainer>
  );
};

const styles = {
  content: {
    flex: 1,
    paddingTop: spacing[4],
  },
  intro: {
    lineHeight: 24,
  },
  rulesContainer: {
    marginTop: spacing[2],
  },
  ruleItem: {
    marginBottom: spacing[2],
  },
  ruleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  ruleNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  ruleTitle: {
    flex: 1,
  },
  ruleDescription: {
    paddingLeft: spacing[10] + spacing[1],
    lineHeight: 22,
  },
  ctaContainer: {
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
};

export default A5_RulesScreen;
