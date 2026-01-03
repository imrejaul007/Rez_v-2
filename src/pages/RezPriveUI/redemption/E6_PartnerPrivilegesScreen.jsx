/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * E6 - Privé Partner Privileges Screen
 * Purpose: Give ongoing benefits, not one-time rewards
 * UI: List-style, brand logo, short benefit text
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

interface Privilege {
  id: string;
  brandName: string;
  brandLogo?: string;
  benefit: string;
  category: string;
  isActive: boolean;
}

interface E6_PartnerPrivilegesScreenProps {
  privileges?: Privilege[];
  onBack?: () => void;
}

export const E6_PartnerPrivilegesScreen: React.FC<E6_PartnerPrivilegesScreenProps> = ({
  privileges = [
    { id: '1', brandName: 'Soho Café', benefit: 'Priority seating for Privé members', category: 'Dining', isActive: true },
    { id: '2', brandName: 'Luxury Hotel', benefit: 'Complimentary room upgrade', category: 'Travel', isActive: true },
    { id: '3', brandName: 'Premium Spa', benefit: 'Member-only pricing', category: 'Wellness', isActive: true },
    { id: '4', brandName: 'Fashion House', benefit: 'Private preview access', category: 'Fashion', isActive: true },
    { id: '5', brandName: 'Fine Wines', benefit: 'Exclusive tasting invitations', category: 'Lifestyle', isActive: false },
  ],
  onBack,
}) => {
  const activePrivileges = privileges.filter((p) => p.isActive);
  const upcomingPrivileges = privileges.filter((p) => !p.isActive);

  return (
    <ScreenContainer>
      <PriveHeader title="Partner Privileges" showBack onBack={onBack} />

      {/* Introduction */}
      <span variant="body" color={colors.text.secondary} style={style={{...styles.intro}>
        Ongoing benefits with our partner brands. No points needed.
      </span>

      <Divider variant="gold" spacing={spacing[6]} />

      {/* Active Privileges */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          Your Active Privileges
        </span>

        {activePrivileges.map((privilege) => (
          <Card key={privilege.id} variant="gold" style={style={{...styles.privilegeCard}>
            <div style={style={{...styles.privilegeContent}>
              {privilege.brandLogo ? (
                <img src={{ uri: privilege.brandLogo }} style={style={{...styles.brandLogo} />
              ) : (
                <div style={style={{...styles.brandLogoPlaceholder}>
                  <span variant="body" color={colors.text.secondary}>
                    {privilege.brandName.charAt(0)}
                  </span>
                </div>
              )}
              <div style={style={{...styles.privilegeInfo}>
                <span variant="body" color={colors.text.primary}>
                  {privilege.brandName}
                </span>
                <span variant="bodySmall" color={colors.text.secondary}>
                  {privilege.benefit}
                </span>
              </div>
              <div style={style={{...styles.activeBadge}>
                <span variant="caption" color={colors.status.success}>
                  Active
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming Privileges */}
      {upcomingPrivileges.length > 0 && (
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            Coming Soon
          </span>

          {upcomingPrivileges.map((privilege) => (
            <Card key={privilege.id} variant="default" style={style={{...styles.privilegeCard}>
              <div style={style={{...styles.privilegeContent}>
                <div style={[style={{...styles.brandLogoPlaceholder, style={{...styles.brandLogoDisabled]}>
                  <span variant="body" color={colors.text.tertiary}>
                    {privilege.brandName.charAt(0)}
                  </span>
                </div>
                <div style={style={{...styles.privilegeInfo}>
                  <span variant="body" color={colors.text.secondary}>
                    {privilege.brandName}
                  </span>
                  <span variant="bodySmall" color={colors.text.tertiary}>
                    {privilege.benefit}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Note */}
      <Card variant="default" style={style={{...styles.noteCard}>
        <div style={style={{...styles.noteContent}>
          <div style={style={{...styles.noteIcon}>
            <span variant="bodySmall" gold>
              {'\u2713'}
            </span>
          </div>
          <span variant="bodySmall" color={colors.text.secondary}>
            Privileges are automatically applied when you visit partner locations.
          </span>
        </div>
      </Card>
    </ScreenContainer>
  );
};

const styles = {
  intro: {
    marginTop: spacing[4],
  },
  section: {
    marginTop: spacing[2],
  },
  sectionLabel: {
    marginBottom: spacing[4],
  },
  privilegeCard: {
    marginBottom: spacing[3],
  },
  privilegeContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandLogo: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    marginRight: spacing[3],
  },
  brandLogoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  brandLogoDisabled: {
    opacity: 0.5,
  },
  privilegeInfo: {
    flex: 1,
    gap: spacing[1],
  },
  activeBadge: {
    backgroundColor: colors.transparent.gold10,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  noteCard: {
    marginTop: spacing[6],
  },
  noteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.transparent.gold10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
};

export default E6_PartnerPrivilegesScreen;
