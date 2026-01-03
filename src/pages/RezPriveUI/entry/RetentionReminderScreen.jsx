/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Retention Reminder Screen
 * What to do to retain Privé
 */

import React from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card, ProgressBar } from '../../components';
import { colors, spacing } from '../../theme';

interface RetentionTask {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  unit: string;
  priority: 'high' | 'medium' | 'low';
}

interface RetentionReminderScreenProps {
  overallProgress?: number;
  daysUntilReview?: number;
  tasks?: RetentionTask[];
  onTaskPress?: (taskId: string) => void;
  onDismiss?: () => void;
}

export const RetentionReminderScreen: React.FC<RetentionReminderScreenProps> = ({
  overallProgress = 65,
  daysUntilReview = 7,
  tasks = [
    { id: '1', title: 'Complete Campaigns', description: 'Finish active campaign tasks', progress: 2, target: 3, unit: 'campaigns', priority: 'high' },
    { id: '2', title: 'Content Quality', description: 'Maintain high-quality submissions', progress: 85, target: 90, unit: '%', priority: 'medium' },
    { id: '3', title: 'Engagement Rate', description: 'Keep your audience engaged', progress: 4.2, target: 5, unit: '%', priority: 'medium' },
    { id: '4', title: 'Response Time', description: 'Reply to brand messages quickly', progress: 12, target: 24, unit: 'hrs avg', priority: 'low' },
  ],
  onTaskPress,
  onDismiss,
}) => {
  const navigate = useNavigate();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return colors.gold.primary;
      case 'low': return '#22C55E';
      default: return colors.text.tertiary;
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Retain Your Privé
          </span>
          <span variant="body" color={colors.text.secondary}>
            Complete these tasks to maintain your status
          </span>
        </div>

        {/* Overview Card */}
        <Card variant="goldGlow" style={style={{...styles.overviewCard}>
          <div style={style={{...styles.overviewTop}>
            <div>
              <span variant="caption" color={colors.text.tertiary}>
                Retention Score
              </span>
              <span variant="h2" gold>{overallProgress}%</span>
            </div>
            <div style={style={{...styles.reviewBadge}>
              <span variant="caption" color={colors.text.primary}>
                Review in {daysUntilReview} days
              </span>
            </div>
          </div>
          <ProgressBar
            progress={overallProgress / 100}
            color={overallProgress >= 80 ? '#22C55E' : overallProgress >= 60 ? colors.gold.primary : '#EF4444'}
            style={style={{...styles.overviewProgress}
          />
          <span variant="caption" color={colors.text.tertiary}>
            {overallProgress >= 80 ? 'You\'re on track!' : overallProgress >= 60 ? 'Almost there, keep going!' : 'Action needed to retain status'}
          </span>
        </Card>

        {/* Tasks */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Priority Tasks
          </span>

          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => onTaskPress?.(task.id)}
              onClick={() => {}}
            >
              <Card variant="default" style={style={{...styles.taskCard}>
                <div style={style={{...styles.taskHeader}>
                  <div style={style={{...styles.taskTitle}>
                    <div style={[style={{...styles.priorityDot, { backgroundColor: getPriorityColor(task.priority) }]} />
                    <span variant="body" color={colors.text.primary}>
                      {task.title}
                    </span>
                  </div>
                  <span variant="bodyLarge" gold>
                    {task.progress}/{task.target} {task.unit}
                  </span>
                </div>
                <ProgressBar
                  progress={task.progress / task.target}
                  color={task.progress >= task.target ? '#22C55E' : colors.gold.primary}
                  style={style={{...styles.taskProgress}
                />
                <span variant="caption" color={colors.text.tertiary}>
                  {task.description}
                </span>
              </Card>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Quick Tips
          </span>
          <Card variant="default" style={style={{...styles.tipsCard}>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Focus on high-priority tasks first
              </span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Quality over quantity for content
              </span>
            </div>
            <div style={style={{...styles.tipItem}>
              <span style={style={{...styles.tipIcon}>✦</span>
              <span variant="body" color={colors.text.secondary}>
                Respond to brand messages within 24h
              </span>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="View All Campaigns"
            variant="gold"
            onClick={() => navigate('/prive/Offers' as never)}
          />
          <Button
            label="Dismiss"
            variant="ghost"
            onClick={onDismiss || (() => navigate(-1))}
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
  overviewCard: {
    marginHorizontal: spacing[5],
  },
  overviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[3],
  },
  reviewBadge: {
    backgroundColor: colors.background.primary,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: 12,
  },
  overviewProgress: {
    marginBottom: spacing[2],
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
  taskCard: {
    marginBottom: spacing[3],
    gap: spacing[2],
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  taskProgress: {
    marginVertical: spacing[1],
  },
  tipsCard: {
    gap: spacing[3],
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  tipIcon: {
    color: colors.gold.primary,
    fontSize: 14,
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

export default RetentionReminderScreen;
