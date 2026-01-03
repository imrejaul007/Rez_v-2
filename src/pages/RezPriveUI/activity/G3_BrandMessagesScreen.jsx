/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G3 - Privé In-App Brand Messages
 * Purpose: Direct brand-to-member communication without noise
 * Feel: A private note, not a campaign blast
 * UI: Inbox-style, brand logo + name, message preview
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

interface BrandMessage {
  id: string;
  brandName: string;
  brandLogo?: string;
  preview: string;
  time: string;
  isUnread: boolean;
  type: 'campaign' | 'thank_you' | 'invitation';
}

interface G3_BrandMessagesScreenProps {
  messages?: BrandMessage[];
  onMessagePress?: (id: string) => void;
  onBack?: () => void;
}

export const G3_BrandMessagesScreen: React.FC<G3_BrandMessagesScreenProps> = ({
  messages = [
    {
      id: '1',
      brandName: 'Luxury Café',
      preview: 'Thank you for sharing your experience with us...',
      time: '2h ago',
      isUnread: true,
      type: 'thank_you',
    },
    {
      id: '2',
      brandName: 'Summer Collection',
      preview: 'We have a special early access opportunity...',
      time: 'Yesterday',
      isUnread: true,
      type: 'invitation',
    },
    {
      id: '3',
      brandName: 'Premium Spa',
      preview: 'Your campaign details and next steps...',
      time: '3 days ago',
      isUnread: false,
      type: 'campaign',
    },
    {
      id: '4',
      brandName: 'Urban Bistro',
      preview: 'We loved your review and would like to invite you...',
      time: '1 week ago',
      isUnread: false,
      type: 'invitation',
    },
  ],
  onMessagePress,
  onBack,
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'thank_you':
        return '\u2665';
      case 'invitation':
        return '\u2709';
      case 'campaign':
        return '\u2605';
      default:
        return '\u2022';
    }
  };

  return (
    <ScreenContainer>
      <PriveHeader title="Brand Messages" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="bodySmall" color={colors.text.secondary} style={style={{...styles.intro}>
        Direct messages from brands you've collaborated with
      </span>

      <Divider variant="light" spacing={spacing[4]} />

      {/* Messages List */}
      <div style={style={{...styles.messagesList}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              style={[style={{...styles.messageCard, message.isUnread && style={{...styles.messageCardUnread]}
              onClick={() => onMessagePress?.(message.id)}
              onClick={() => {}}
            >
              {/* Unread Indicator */}
              {message.isUnread && <div style={style={{...styles.unreadIndicator} />}

              {/* Brand Logo */}
              {message.brandLogo ? (
                <img src={{ uri: message.brandLogo }} style={style={{...styles.brandLogo} />
              ) : (
                <div style={style={{...styles.brandLogoPlaceholder}>
                  <span variant="body" color={colors.text.secondary}>
                    {message.brandName.charAt(0)}
                  </span>
                </div>
              )}

              {/* Message Content */}
              <div style={style={{...styles.messageContent}>
                <div style={style={{...styles.messageHeader}>
                  <Text
                    variant={message.isUnread ? 'bodyLarge' : 'body'}
                    color={colors.text.primary}
                  >
                    {message.brandName}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {message.time}
                  </span>
                </div>
                <Text
                  variant="bodySmall"
                  color={message.isUnread ? colors.text.secondary : colors.text.tertiary}
                  numberOfLines={1}
                >
                  {message.preview}
                </span>
              </div>

              {/* Type Icon */}
              <div style={style={{...styles.typeIcon}>
                <span variant="bodySmall" gold>
                  {getTypeIcon(message.type)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={style={{...styles.emptyState}>
            <span variant="body" color={colors.text.tertiary} center>
              No messages yet
            </span>
            <span variant="caption" color={colors.text.tertiary} center style={style={{...styles.emptySubtext}>
              Brand messages will appear here after collaborations
            </span>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
  },
  messagesList: {
    marginTop: spacing[2],
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[2],
    position: 'relative',
  },
  messageCardUnread: {
    backgroundColor: colors.background.elevated,
  },
  unreadIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: colors.gold.primary,
    borderTopLeftRadius: borderRadius.lg,
    borderBottomLeftRadius: borderRadius.lg,
  },
  brandLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: spacing[3],
  },
  brandLogoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  messageContent: {
    flex: 1,
    gap: spacing[1],
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing[2],
  },
  emptyState: {
    paddingVertical: spacing[12],
  },
  emptySubtext: {
    marginTop: spacing[2],
  },
};

export default G3_BrandMessagesScreen;
