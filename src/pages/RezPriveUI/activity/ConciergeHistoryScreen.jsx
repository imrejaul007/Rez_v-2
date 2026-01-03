/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Concierge History Screen
 * Past concierge interactions
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface ConciergeSession {
  id: string;
  date: string;
  topic: string;
  conciergeName: string;
  status: 'completed' | 'cancelled' | 'scheduled';
  summary?: string;
  resolution?: string;
}

interface ConciergeHistoryScreenProps {
  sessions?: ConciergeSession[];
  onBookNew?: () => void;
  onViewSession?: (sessionId: string) => void;
}

export const ConciergeHistoryScreen: React.FC<ConciergeHistoryScreenProps> = ({
  sessions = [
    {
      id: '1',
      date: 'Dec 15, 2025',
      topic: 'Campaign Questions',
      conciergeName: 'Sarah M.',
      status: 'completed',
      summary: 'Discussed Winter Collection campaign requirements and timeline.',
      resolution: 'Deadline extended by 3 days upon request.',
    },
    {
      id: '2',
      date: 'Dec 10, 2025',
      topic: 'Rewards & Wallet',
      conciergeName: 'James K.',
      status: 'completed',
      summary: 'Inquiry about Privé Coin expiration dates and redemption options.',
      resolution: 'Explained coin policies and recommended early redemption.',
    },
    {
      id: '3',
      date: 'Dec 22, 2025',
      topic: 'Content Review',
      conciergeName: 'Emma L.',
      status: 'scheduled',
    },
    {
      id: '4',
      date: 'Dec 5, 2025',
      topic: 'Account Issues',
      conciergeName: 'Sarah M.',
      status: 'cancelled',
    },
  ],
  onBookNew,
  onViewSession,
}) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#22C55E';
      case 'scheduled': return colors.gold.primary;
      case 'cancelled': return colors.text.tertiary;
      default: return colors.text.tertiary;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'COMPLETED';
      case 'scheduled': return 'UPCOMING';
      case 'cancelled': return 'CANCELLED';
      default: return status.toUpperCase();
    }
  };

  const scheduledSessions = sessions.filter(s => s.status === 'scheduled');
  const pastSessions = sessions.filter(s => s.status !== 'scheduled');

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Concierge History
          </span>
          <span variant="body" color={colors.text.secondary}>
            Your past and upcoming sessions
          </span>
        </div>

        {/* Upcoming Sessions */}
        {scheduledSessions.length > 0 && (
          <div style={style={{...styles.section}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Upcoming Sessions
            </span>
            {scheduledSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onViewSession?.(session.id)}
              >
                <Card variant="goldGlow" style={style={{...styles.sessionCard}>
                  <div style={style={{...styles.sessionHeader}>
                    <div>
                      <span variant="bodyLarge" color={colors.text.primary}>
                        {session.topic}
                      </span>
                      <span variant="caption" color={colors.text.tertiary}>
                        with {session.conciergeName}
                      </span>
                    </div>
                    <div style={[style={{...styles.statusBadge, { backgroundColor: getStatusColor(session.status) + '20' }]}>
                      <span variant="caption" style={{ color: getStatusColor(session.status) }}>
                        {getStatusLabel(session.status)}
                      </span>
                    </div>
                  </div>
                  <div style={style={{...styles.sessionDate}>
                    <span style={style={{...styles.calendarIcon}>📅</span>
                    <span variant="body" gold>{session.date}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Past Sessions */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Past Sessions
          </span>
          {pastSessions.length > 0 ? (
            pastSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onViewSession?.(session.id)}
              >
                <Card variant="default" style={style={{...styles.sessionCard}>
                  <div style={style={{...styles.sessionHeader}>
                    <div style={style={{...styles.sessionInfo}>
                      <span variant="body" color={colors.text.primary}>
                        {session.topic}
                      </span>
                      <span variant="caption" color={colors.text.tertiary}>
                        {session.date} • {session.conciergeName}
                      </span>
                    </div>
                    <div style={[style={{...styles.statusBadge, { backgroundColor: getStatusColor(session.status) + '20' }]}>
                      <span variant="caption" style={{ color: getStatusColor(session.status) }}>
                        {getStatusLabel(session.status)}
                      </span>
                    </div>
                  </div>
                  {session.summary && (
                    <span variant="caption" color={colors.text.secondary} numberOfLines={2}>
                      {session.summary}
                    </span>
                  )}
                  {session.resolution && (
                    <div style={style={{...styles.resolutionBadge}>
                      <span style={style={{...styles.resolutionIcon}>✓</span>
                      <span variant="caption" color="#22C55E">
                        {session.resolution}
                      </span>
                    </div>
                  )}
                </Card>
              </div>
            ))
          ) : (
            <Card variant="default" style={style={{...styles.emptyCard}>
              <span variant="body" color={colors.text.tertiary} center>
                No past sessions yet
              </span>
            </Card>
          )}
        </div>

        {/* Stats */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.statsCard}>
            <div style={style={{...styles.statsRow}>
              <div style={style={{...styles.statItem}>
                <span variant="h3" gold>
                  {sessions.filter(s => s.status === 'completed').length}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Completed
                </span>
              </div>
              <div style={style={{...styles.statDivider} />
              <div style={style={{...styles.statItem}>
                <span variant="h3" color={colors.text.primary}>
                  {scheduledSessions.length}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Upcoming
                </span>
              </div>
              <div style={style={{...styles.statDivider} />
              <div style={style={{...styles.statItem}>
                <span variant="h3" color={colors.text.primary}>
                  4.9★
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  Avg Rating
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Book New Session"
            variant="gold"
            onClick={onBookNew}
          />
          <Button
            label="Back"
            variant="outline"
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
    paddingHorizontal: spacing[5],
    paddingTop: spacing[6],
    paddingBottom: spacing[4],
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
  sessionCard: {
    marginBottom: spacing[3],
    gap: spacing[2],
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  sessionInfo: {
    flex: 1,
    gap: spacing[1],
  },
  statusBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: 4,
  },
  sessionDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  calendarIcon: {
    fontSize: 16,
  },
  resolutionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    padding: spacing[2],
    borderRadius: 6,
  },
  resolutionIcon: {
    color: '#22C55E',
    fontWeight: '700',
  },
  emptyCard: {
    paddingVertical: spacing[6],
  },
  statsCard: {
    padding: spacing[4],
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  statDivider: {
    width: 1,
    height: 32,
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

export default ConciergeHistoryScreen;
