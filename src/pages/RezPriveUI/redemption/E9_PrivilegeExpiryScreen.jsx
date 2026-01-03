/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E9 - Privé Privilege Expiry & Alerts
 * Purpose: Avoid regret, keep dignity
 * UI: Subtle alerts, no countdown stress
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

interface ExpiringItem {
  id: string;
  type: 'reward' | 'privilege' | 'gift_card';
  title: string;
  value?: string;
  expiresIn: string;
  urgency: 'low' | 'medium' | 'high';
}

interface E9_PrivilegeExpiryScreenProps {
  expiringItems?: ExpiringItem[];
  onUseNow?: (id: string) => void;
  onBack?: () => void;
}

export const E9_PrivilegeExpiryScreen: React.FC<E9_PrivilegeExpiryScreenProps> = ({
  expiringItems = [
    { id: '1', type: 'reward', title: 'Privé Rewards', value: '\u20B91,200', expiresIn: '7 days', urgency: 'high' },
    { id: '2', type: 'privilege', title: 'Priority Seating at Soho Café', expiresIn: '15 days', urgency: 'medium' },
    { id: '3', type: 'gift_card', title: 'Taj Gift Card Balance', value: '\u20B92,500', expiresIn: '30 days', urgency: 'low' },
  ],
  onUseNow,
  onBack,
}) => {
  const getUrgencyConfig = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return {
          borderColor: colors.status.warning,
          iconBg: colors.transparent.gold20,
        };
      case 'medium':
        return {
          borderColor: colors.border.goldMuted,
          iconBg: colors.transparent.gold10,
        };
      default:
        return {
          borderColor: colors.border.primary,
          iconBg: colors.background.tertiary,
        };
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reward':
        return '\u2605';
      case 'privilege':
        return '\uD83D\uDD11';
      case 'gift_card':
        return '\uD83C\uDF81';
      default:
        return '\u2022';
    }
  };

  const highUrgencyItems = expiringItems.filter((item) => item.urgency === 'high');
  const otherItems = expiringItems.filter((item) => item.urgency !== 'high');

  return (
    <ScreenContainer>
      <PriveHeader title="Expiring Soon" showBack onBack={onBack} />

      {/* Header Message */}
      <Card variant="gold" style={style={{...styles.headerCard}>
        <div style={style={{...styles.headerContent}>
          <div style={style={{...styles.headerIcon}>
            <span variant="body" gold>
              !
            </span>
          </div>
          <span variant="body" color={colors.text.primary}>
            {expiringItems.length} privilege{expiringItems.length !== 1 ? 's' : ''} expire this month
          </span>
        </div>
      </Card>

      {/* High Urgency Items */}
      {highUrgencyItems.length > 0 && (
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.status.warning} style={style={{...styles.sectionLabel}>
            Expiring Soon
          </span>

          {highUrgencyItems.map((item) => {
            const config = getUrgencyConfig(item.urgency);
            return (
              <Card
                key={item.id}
                variant="default"
                style={[style={{...styles.expiryCard, { borderLeftColor: config.borderColor, borderLeftWidth: 3 }]}
              >
                <div style={style={{...styles.expiryContent}>
                  <div style={[style={{...styles.expiryIcon, { backgroundColor: config.iconBg }]}>
                    <span variant="body" gold>
                      {getTypeIcon(item.type)}
                    </span>
                  </div>
                  <div style={style={{...styles.expiryInfo}>
                    <span variant="body" color={colors.text.primary}>
                      {item.title}
                    </span>
                    <div style={style={{...styles.expiryMeta}>
                      {item.value && (
                        <span variant="bodySmall" gold>
                          {item.value}
                        </span>
                      )}
                      <span variant="caption" color={colors.status.warning}>
                        Expires in {item.expiresIn}
                      </span>
                    </div>
                  </div>
                  <Button
                    title="Use"
                    onClick={() => onUseNow?.(item.id)}
                    variant="secondary"
                    fullWidth={false}
                    style={style={{...styles.useButton}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      )}

      <Divider variant="light" spacing={spacing[6]} />

      {/* Other Expiring Items */}
      {otherItems.length > 0 && (
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Coming Up
          </span>

          {otherItems.map((item) => {
            const config = getUrgencyConfig(item.urgency);
            return (
              <Card key={item.id} variant="default" style={style={{...styles.expiryCard}>
                <div style={style={{...styles.expiryContent}>
                  <div style={[style={{...styles.expiryIcon, { backgroundColor: config.iconBg }]}>
                    <span variant="body" color={colors.text.secondary}>
                      {getTypeIcon(item.type)}
                    </span>
                  </div>
                  <div style={style={{...styles.expiryInfo}>
                    <span variant="body" color={colors.text.primary}>
                      {item.title}
                    </span>
                    <div style={style={{...styles.expiryMeta}>
                      {item.value && (
                        <span variant="bodySmall" color={colors.text.secondary}>
                          {item.value}
                        </span>
                      )}
                      <span variant="caption" color={colors.text.tertiary}>
                        Expires in {item.expiresIn}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Note */}
      <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.note}>
        We'll remind you before privileges expire
      </span>
    </ScreenContainer>
  );
};

const styles = {
  headerCard: {
    marginTop: spacing[4],
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  section: {
    marginTop: spacing[4],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  expiryCard: {
    marginBottom: spacing[3],
  },
  expiryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expiryIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  expiryInfo: {
    flex: 1,
    gap: spacing[1],
  },
  expiryMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  useButton: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
  note: {
    marginTop: spacing[6],
  },
};

export default E9_PrivilegeExpiryScreen;
