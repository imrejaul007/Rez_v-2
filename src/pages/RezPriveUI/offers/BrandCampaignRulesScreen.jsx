/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Brand Campaign Rules Screen
 * What brand expects from Privé users
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface CampaignRule {
  id: string;
  category: string;
  rules: string[];
}

interface BrandCampaignRulesScreenProps {
  brandName?: string;
  campaignName?: string;
  rules?: CampaignRule[];
  deadline?: string;
  onAccept?: () => void;
  onDecline?: () => void;
}

export const BrandCampaignRulesScreen: React.FC<BrandCampaignRulesScreenProps> = ({
  brandName = 'Artisan Watch Co',
  campaignName = 'Winter Collection Launch',
  rules = [
    {
      id: '1',
      category: 'Content Requirements',
      rules: [
        'Include product clearly visible in all photos',
        'Minimum 3 photos or 1 video (30+ seconds)',
        'Use provided hashtags: #ArtisanWatches #LuxuryTime',
        'Tag @ArtisanWatchCo in all posts',
      ],
    },
    {
      id: '2',
      category: 'Posting Guidelines',
      rules: [
        'Post within 7 days of product receipt',
        'Keep content live for minimum 30 days',
        'Post during peak hours (6-9 PM recommended)',
        'Share to Stories within 24 hours of main post',
      ],
    },
    {
      id: '3',
      category: 'Brand Voice',
      rules: [
        'Maintain luxury, sophisticated tone',
        'Avoid competitor mentions',
        'No controversial topics in same post',
        'Authentic experience sharing encouraged',
      ],
    },
    {
      id: '4',
      category: 'Disclosure',
      rules: [
        'Include #ad or #sponsored in caption',
        'Comply with FTC/ASA guidelines',
        'Disclose gifted product if applicable',
      ],
    },
  ],
  deadline = 'Jan 15, 2026',
  onAccept,
  onDecline,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="caption" gold>{brandName}</span>
          <span variant="h2" color={colors.text.primary}>
            Campaign Guidelines
          </span>
          <span variant="body" color={colors.text.secondary}>
            {campaignName}
          </span>
        </div>

        {/* Deadline */}
        <Card variant="goldGlow" style={style={{...styles.deadlineCard}>
          <div style={style={{...styles.deadlineContent}>
            <span variant="caption" color={colors.text.tertiary}>
              Submission Deadline
            </span>
            <span variant="h3" gold>{deadline}</span>
          </div>
        </Card>

        {/* Rules Sections */}
        {rules.map((section) => (
          <div key={section.id} style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              {section.category}
            </span>
            <Card variant="default" style={style={{...styles.rulesCard}>
              {section.rules.map((rule, index) => (
                <div key={index} style={style={{...styles.ruleItem}>
                  <div style={style={{...styles.ruleBullet}>
                    <span style={style={{...styles.bulletText}>✓</span>
                  </div>
                  <span variant="body" color={colors.text.secondary} style={style={{...styles.ruleText}>
                    {rule}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        ))}

        {/* Important Notice */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.noticeCard}>
            <span variant="label" color={colors.gold.primary}>
              Important Notice
            </span>
            <span variant="body" color={colors.text.secondary}>
              Failure to comply with these guidelines may result in campaign rejection,
              reward reversal, and potential impact on your Privé standing.
            </span>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="I Accept These Guidelines"
            variant="gold"
            onClick={onAccept}
          />
          <Button
            label="Decline Campaign"
            variant="ghost"
            onClick={onDecline || (() => navigate(-1))}
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
    gap: spacing[1],
  },
  deadlineCard: {
    marginHorizontal: spacing[5],
  },
  deadlineContent: {
    alignItems: 'center',
    gap: spacing[1],
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
  rulesCard: {
    gap: spacing[3],
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  ruleBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulletText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '700',
  },
  ruleText: {
    flex: 1,
    lineHeight: 22,
  },
  noticeCard: {
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    gap: spacing[2],
  },
  actions: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
    gap: spacing[3],
  },
  bottomPadding: {
    height: spacing[8],
  },
};

export default BrandCampaignRulesScreen;
