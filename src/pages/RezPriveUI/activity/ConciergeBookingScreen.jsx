/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Concierge Booking Screen
 * Schedule concierge help
 */

import React, { useState } from 'react';
// React Native imports removed
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface ConciergeBookingScreenProps {
  onConfirmBooking?: (date: string, time: string, topic: string) => void;
  onBack?: () => void;
}

const topics = [
  { id: 'campaign', label: 'Campaign Questions', icon: '📋' },
  { id: 'rewards', label: 'Rewards & Wallet', icon: '💰' },
  { id: 'account', label: 'Account Issues', icon: '👤' },
  { id: 'content', label: 'Content Review', icon: '📸' },
  { id: 'other', label: 'Other', icon: '💬' },
];

const dates = [
  { id: '1', day: 'Today', date: 'Dec 20' },
  { id: '2', day: 'Tomorrow', date: 'Dec 21' },
  { id: '3', day: 'Sun', date: 'Dec 22' },
  { id: '4', day: 'Mon', date: 'Dec 23' },
];

const timeSlots: TimeSlot[] = [
  { id: '1', time: '10:00 AM', available: true },
  { id: '2', time: '11:00 AM', available: false },
  { id: '3', time: '12:00 PM', available: true },
  { id: '4', time: '2:00 PM', available: true },
  { id: '5', time: '3:00 PM', available: true },
  { id: '6', time: '4:00 PM', available: false },
  { id: '7', time: '5:00 PM', available: true },
];

export const ConciergeBookingScreen: React.FC<ConciergeBookingScreenProps> = ({
  onConfirmBooking,
  onBack,
}) => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const canBook = selectedTopic && selectedDate && selectedTime;

  return (
    <div style={style={{...styles.container}>
      <div >
        {/* Header */}
        <div style={style={{...styles.header}>
          <span variant="h2" color={colors.text.primary}>
            Book Concierge
          </span>
          <span variant="body" color={colors.text.secondary}>
            Schedule a call with your Privé concierge
          </span>
        </div>

        {/* Topic Selection */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            What do you need help with?
          </span>
          <div style={style={{...styles.topicsGrid}>
            {topics.map((topic) => (
              <div
                key={topic.id}
                style={[
                  style={{...styles.topicCard,
                  selectedTopic === topic.id && style={{...styles.topicCardSelected,
                ]}
                onClick={() => setSelectedTopic(topic.id)}
              >
                <span style={style={{...styles.topicIcon}>{topic.icon}</span>
                <Text
                  variant="caption"
                  color={selectedTopic === topic.id ? colors.gold.primary : colors.text.secondary}
                >
                  {topic.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Select a Date
          </span>
          <div
            horizontal
            
            style={style={{...styles.datesScroll}
          >
            {dates.map((date) => (
              <div
                key={date.id}
                style={[
                  style={{...styles.dateCard,
                  selectedDate === date.id && style={{...styles.dateCardSelected,
                ]}
                onClick={() => setSelectedDate(date.id)}
              >
                <Text
                  variant="caption"
                  color={selectedDate === date.id ? colors.gold.primary : colors.text.tertiary}
                >
                  {date.day}
                </span>
                <Text
                  variant="bodyLarge"
                  color={selectedDate === date.id ? colors.gold.primary : colors.text.primary}
                >
                  {date.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Select a Time
          </span>
          <div style={style={{...styles.timesGrid}>
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                style={[
                  style={{...styles.timeCard,
                  selectedTime === slot.id && style={{...styles.timeCardSelected,
                  !slot.available && style={{...styles.timeCardDisabled,
                ]}
                onClick={() => slot.available && setSelectedTime(slot.id)}
                disabled={!slot.available}
              >
                <Text
                  variant="body"
                  color={
                    !slot.available
                      ? colors.text.tertiary
                      : selectedTime === slot.id
                      ? colors.gold.primary
                      : colors.text.secondary
                  }
                >
                  {slot.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div style={style={{...styles.section}>
          <Card variant="default" style={style={{...styles.infoCard}>
            <span variant="label" color={colors.text.tertiary}>
              What to Expect
            </span>
            <div style={style={{...styles.infoList}>
              <div style={style={{...styles.infoItem}>
                <span style={style={{...styles.infoIcon}>📞</span>
                <span variant="body" color={colors.text.secondary}>
                  15-minute call with dedicated concierge
                </span>
              </div>
              <div style={style={{...styles.infoItem}>
                <span style={style={{...styles.infoIcon}>🔔</span>
                <span variant="body" color={colors.text.secondary}>
                  Reminder sent 10 minutes before
                </span>
              </div>
              <div style={style={{...styles.infoItem}>
                <span style={style={{...styles.infoIcon}>✨</span>
                <span variant="body" color={colors.text.secondary}>
                  Personalized help for Privé members
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div style={style={{...styles.actions}>
          <Button
            label="Confirm Booking"
            variant="gold"
            disabled={!canBook}
            onClick={() => {
              if (canBook) {
                const dateInfo = dates.find(d => d.id === selectedDate);
                const timeInfo = timeSlots.find(t => t.id === selectedTime);
                const topicInfo = topics.find(t => t.id === selectedTopic);
                onConfirmBooking?.(
                  dateInfo?.date || '',
                  timeInfo?.time || '',
                  topicInfo?.label || ''
                );
              }
            }}
          />
          <Button
            label="Cancel"
            variant="outline"
            onClick={onBack || (() => navigate(-1))}
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
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  topicCard: {
    width: '30%',
    backgroundColor: colors.background.card,
    borderRadius: 12,
    padding: spacing[3],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  topicCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  topicIcon: {
    fontSize: 24,
  },
  datesScroll: {
    marginHorizontal: -spacing[5],
    paddingHorizontal: spacing[5],
  },
  dateCard: {
    backgroundColor: colors.background.card,
    borderRadius: 12,
    padding: spacing[4],
    alignItems: 'center',
    marginRight: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
    minWidth: 80,
  },
  dateCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  timesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  timeCard: {
    backgroundColor: colors.background.card,
    borderRadius: 8,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  timeCardSelected: {
    borderColor: colors.gold.primary,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },
  timeCardDisabled: {
    opacity: 0.4,
  },
  infoCard: {
    gap: spacing[3],
  },
  infoList: {
    gap: spacing[3],
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  infoIcon: {
    fontSize: 18,
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

export default ConciergeBookingScreen;
