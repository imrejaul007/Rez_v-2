/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Content Flagged Notice Screen
 * Content flagged but not removed
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ContentFlaggedNoticeScreenProps {
  contentType?: string;
  contentDate?: string;
  flagReason?: string;
  flagDetails?: string;
  reviewDeadline?: string;
  onEditContent?: () => void;
  onAppeal?: () => void;
  onViewGuidelines?: () => void;
}

export const ContentFlaggedNoticeScreen: React.FC<ContentFlaggedNoticeScreenProps> = ({
  contentType = 'Instagram Post',
  contentDate = 'Dec 15, 2025',
  flagReason = 'Potential guideline violation',
  flagDetails = 'This content has been flagged for review due to potential trademark usage concerns. It remains visible while under review.',
  reviewDeadline = '48 hours',
  onEditContent,
  onAppeal,
  onViewGuidelines,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.flagIcon}>
            <span style={style={{...styles.flagIconText}>⚑</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Content Flagged
          </span>
          <span variant="body" color={colors.text.secondary} center>
            Under review, not removed
          </span>
        </div>

        {/* Content Info */}
        <Card variant="default" style={style={{...styles.contentCard}>
          <div style={style={{...styles.contentRow}>
            <span variant="body" color={colors.text.tertiary}>Content Type</span>
            <span variant="body" color={colors.text.primary}>{contentType}</span>
          </div>
          <div style={style={{...styles.contentDivider} />
          <div style={style={{...styles.contentRow}>
            <span variant="body" color={colors.text.tertiary}>Posted</span>
            <span variant="body" color={colors.text.primary}>{contentDate}</span>
          </div>
          <div style={style={{...styles.contentDivider} />
          <div style={style={{...styles.contentRow}>
            <span variant="body" color={colors.text.tertiary}>Status</span>
            <div style={style={{...styles.statusBadge}>
              <span variant="caption" style={{ color: '#F59E0B' }}>UNDER REVIEW</span>
            </div>
          </div>
        </Card>

        {/* Flag Reason */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Why Flagged
          </span>
          <Card variant="default" style={style={{...styles.reasonCard}>
            <div style={style={{...styles.reasonHeader}>
              <span style={style={{...styles.reasonIcon}>⚠</span>
              <span variant="bodyLarge" color={colors.text.primary}>{flagReason}</span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              {flagDetails}
            </span>
          </Card>
        </div>

        {/* What's Happening */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What's Happening
          </span>
          <Card variant="default" style={style={{...styles.statusCard}>
            <div style={style={{...styles.statusItem}>
              <span style={style={{...styles.checkIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Your content is still live and visible
              </span>
            </div>
            <div style={style={{...styles.statusItem}>
              <span style={style={{...styles.reviewIcon}>⏳</span>
              <span variant="body" color={colors.text.secondary}>
                Our team is reviewing within {reviewDeadline}
              </span>
            </div>
            <div style={style={{...styles.statusItem}>
              <span style={style={{...styles.bellIcon}>🔔</span>
              <span variant="body" color={colors.text.secondary}>
                You'll be notified of the decision
              </span>
            </div>
          </Card>
        </div>

        {/* Possible Outcomes */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Possible Outcomes
          </span>
          <Card variant="default" style={style={{...styles.outcomesCard}>
            <div style={style={{...styles.outcomeItem}>
              <div style={[style={{...styles.outcomeDot, { backgroundColor: '#22C55E' }]} />
              <div style={style={{...styles.outcomeContent}>
                <span variant="body" color={colors.text.primary}>Cleared</span>
                <span variant="caption" color={colors.text.tertiary}>
                  No action needed, flag removed
                </span>
              </div>
            </div>
            <div style={style={{...styles.outcomeDivider} />
            <div style={style={{...styles.outcomeItem}>
              <div style={[style={{...styles.outcomeDot, { backgroundColor: '#F59E0B' }]} />
              <div style={style={{...styles.outcomeContent}>
                <span variant="body" color={colors.text.primary}>Edit Required</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Minor changes needed, you'll get details
                </span>
              </div>
            </div>
            <div style={style={{...styles.outcomeDivider} />
            <div style={style={{...styles.outcomeItem}>
              <div style={[style={{...styles.outcomeDot, { backgroundColor: '#EF4444' }]} />
              <div style={style={{...styles.outcomeContent}>
                <span variant="body" color={colors.text.primary}>Removal</span>
                <span variant="caption" color={colors.text.tertiary}>
                  Content violates guidelines, will be removed
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Edit Content Now"
            variant="gold"
            onClick={onEditContent}
          />
          <Button
            label="View Content Guidelines"
            variant="outline"
            onClick={onViewGuidelines || (() => navigate('/prive/Main', { screen: 'Content', params: { screen: 'D5_ContentGuidelines' } } as never))}
          />
          <Button
            label="Appeal This Flag"
            variant="ghost"
            onClick={onAppeal || (() => navigate('/prive/Notifications', { screen: 'Appeal' } as never))}
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
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
  },
  flagIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(245, 158, 11, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  flagIconText: {
    fontSize: 32,
    color: '#F59E0B',
  },
  contentCard: {
    marginHorizontal: spacing[5],
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
    marginVertical: spacing[3],
  },
  statusBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: 4,
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
  reasonCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.08)',
    borderColor: 'rgba(245, 158, 11, 0.25)',
    gap: spacing[3],
  },
  reasonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  reasonIcon: {
    fontSize: 20,
    color: '#F59E0B',
  },
  statusCard: {
    gap: spacing[3],
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  checkIcon: {
    color: '#22C55E',
    fontSize: 16,
  },
  reviewIcon: {
    fontSize: 16,
  },
  bellIcon: {
    fontSize: 16,
  },
  outcomesCard: {
    gap: spacing[3],
  },
  outcomeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  outcomeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  outcomeContent: {
    flex: 1,
    gap: spacing[1],
  },
  outcomeDivider: {
    height: 1,
    backgroundColor: colors.border.primary,
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

export default ContentFlaggedNoticeScreen;
