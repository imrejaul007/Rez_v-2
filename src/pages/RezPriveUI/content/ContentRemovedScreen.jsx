/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Content Removed Screen
 * Content removed + explanation
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ContentRemovedScreenProps {
  contentType?: string;
  contentDate?: string;
  removalReason?: string;
  removalDetails?: string;
  impact?: string;
  canAppeal?: boolean;
  appealDeadline?: string;
  onAppeal?: () => void;
  onViewGuidelines?: () => void;
}

export const ContentRemovedScreen: React.FC<ContentRemovedScreenProps> = ({
  contentType = 'Instagram Post',
  contentDate = 'Dec 15, 2025',
  removalReason = 'Guideline Violation',
  removalDetails = 'This content was removed for violating our community guidelines regarding misleading claims. Specifically, the content made unverified health claims about a product.',
  impact = 'No reward impact - content was not part of an active campaign.',
  canAppeal = true,
  appealDeadline = 'Dec 25, 2025',
  onAppeal,
  onViewGuidelines,
}) => {
  const navigate = useNavigate();

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div style={style={{...styles.removeIcon}>
            <span style={style={{...styles.removeIconText}>✕</span>
          </div>
          <span variant="h2" color={colors.text.primary} center>
            Content Removed
          </span>
          <span variant="body" color={colors.text.secondary} center>
            This content has been taken down
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
            <span variant="body" color={colors.text.tertiary}>Original Post Date</span>
            <span variant="body" color={colors.text.primary}>{contentDate}</span>
          </div>
          <div style={style={{...styles.contentDivider} />
          <div style={style={{...styles.contentRow}>
            <span variant="body" color={colors.text.tertiary}>Status</span>
            <div style={style={{...styles.statusBadge}>
              <span variant="caption" style={{ color: '#EF4444' }}>REMOVED</span>
            </div>
          </div>
        </Card>

        {/* Removal Reason */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Reason for Removal
          </span>
          <Card variant="default" style={style={{...styles.reasonCard}>
            <div style={style={{...styles.reasonHeader}>
              <div style={style={{...styles.reasonIconContainer}>
                <span style={style={{...styles.reasonIcon}>!</span>
              </div>
              <span variant="bodyLarge" color={colors.text.primary}>{removalReason}</span>
            </div>
            <span variant="body" color={colors.text.secondary}>
              {removalDetails}
            </span>
          </Card>
        </div>

        {/* Impact */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Impact on Your Account
          </span>
          <Card variant="default" style={style={{...styles.impactCard}>
            <span variant="body" color={colors.text.secondary}>
              {impact}
            </span>
          </Card>
        </div>

        {/* What This Means */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What This Means
          </span>
          <Card variant="default" style={style={{...styles.meaningCard}>
            <div style={style={{...styles.meaningItem}>
              <span style={style={{...styles.meaningIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                The content is no longer visible to anyone
              </span>
            </div>
            <div style={style={{...styles.meaningItem}>
              <span style={style={{...styles.meaningIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Any associated campaign tasks are marked incomplete
              </span>
            </div>
            <div style={style={{...styles.meaningItem}>
              <span style={style={{...styles.meaningIcon}>•</span>
              <span variant="body" color={colors.text.secondary}>
                Repeated violations may affect your Privé status
              </span>
            </div>
          </Card>
        </div>

        {/* Appeal Option */}
        {canAppeal && (
          <div style={style={{...styles.section}>
            <Card variant="goldGlow" style={style={{...styles.appealCard}>
              <span variant="bodyLarge" color={colors.text.primary} center>
                Disagree with this decision?
              </span>
              <span variant="body" color={colors.text.secondary} center>
                You can submit an appeal for review within the deadline.
              </span>
              <div style={style={{...styles.appealDeadline}>
                <span variant="caption" color={colors.text.tertiary}>Appeal Deadline: </span>
                <span variant="caption" gold>{appealDeadline}</span>
              </div>
            </Card>
          </div>
        )}

        {/* Prevent Future Removals */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Prevent Future Removals
          </span>
          <Card variant="default" style={style={{...styles.preventCard}>
            <div style={style={{...styles.preventItem}>
              <span style={style={{...styles.preventIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Review content guidelines before posting
              </span>
            </div>
            <div style={style={{...styles.preventItem}>
              <span style={style={{...styles.preventIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                Avoid making unverified claims
              </span>
            </div>
            <div style={style={{...styles.preventItem}>
              <span style={style={{...styles.preventIcon}>✓</span>
              <span variant="body" color={colors.text.secondary}>
                When unsure, contact concierge before posting
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          {canAppeal && (
            <Button
              label="Submit Appeal"
              variant="gold"
              onClick={onAppeal || (() => navigate('/prive/Notifications', { screen: 'Appeal' } as never))}
            />
          )}
          <Button
            label="View Content Guidelines"
            variant="outline"
            onClick={onViewGuidelines || (() => navigate('/prive/Main', { screen: 'Content', params: { screen: 'D5_ContentGuidelines' } } as never))}
          />
          <Button
            label="Back to Content Hub"
            variant="ghost"
            onClick={() => navigate(-1)}
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
  removeIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(239, 68, 68, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  },
  removeIconText: {
    fontSize: 32,
    color: '#EF4444',
  },
  contentCard: {
    marginHorizontal: spacing[5],
    borderColor: 'rgba(239, 68, 68, 0.25)',
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
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
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
    backgroundColor: 'rgba(239, 68, 68, 0.08)',
    borderColor: 'rgba(239, 68, 68, 0.25)',
    gap: spacing[3],
  },
  reasonHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  reasonIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIcon: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  impactCard: {
    backgroundColor: colors.background.tertiary,
  },
  meaningCard: {
    gap: spacing[3],
  },
  meaningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[2],
  },
  meaningIcon: {
    color: colors.text.tertiary,
    fontSize: 16,
    marginTop: 2,
  },
  appealCard: {
    alignItems: 'center',
    gap: spacing[2],
  },
  appealDeadline: {
    flexDirection: 'row',
    marginTop: spacing[2],
  },
  preventCard: {
    gap: spacing[3],
    backgroundColor: 'rgba(34, 197, 94, 0.08)',
    borderColor: 'rgba(34, 197, 94, 0.25)',
  },
  preventItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing[3],
  },
  preventIcon: {
    color: '#22C55E',
    fontSize: 16,
    fontWeight: '700',
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

export default ContentRemovedScreen;
