/**
 * Privé Settings
 * App settings and preferences
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveSettings = () => {
  const navigate = useNavigate();

  const settings = [
    {
      category: 'Account',
      items: [
        { id: 'profile', label: 'Edit Profile', path: '/prive/profile/edit', icon: '👤' },
        { id: 'privacy', label: 'Privacy & Visibility', path: '/prive/visibility', icon: '🔒' },
        { id: 'notifications', label: 'Notification Preferences', path: '/prive/notifications/settings', icon: '🔔' },
      ],
    },
    {
      category: 'Privé',
      items: [
        { id: 'tier', label: 'Tier Progress', path: '/prive/tier-progress', icon: '⭐' },
        { id: 'recognition', label: 'Achievements', path: '/prive/recognition', icon: '🏆' },
        { id: 'authority', label: 'Trust & Authority', path: '/prive/authority', icon: '🛡️' },
      ],
    },
    {
      category: 'Support',
      items: [
        { id: 'help', label: 'Help Center', path: '/help', icon: '❓' },
        { id: 'contact', label: 'Contact Support', path: '/support', icon: '💬' },
        { id: 'feedback', label: 'Send Feedback', path: '/feedback', icon: '📝' },
      ],
    },
    {
      category: 'About',
      items: [
        { id: 'terms', label: 'Terms & Conditions', path: '/terms', icon: '📄' },
        { id: 'privacy-policy', label: 'Privacy Policy', path: '/privacy', icon: '🔐' },
        { id: 'about', label: 'About ReZ Privé', path: '/about', icon: 'ℹ️' },
      ],
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '100px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${spacing[3]}px ${spacing[4]}px`,
        borderBottom: '1px solid #1A1A1A',
      }}>
        <div
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: '#181818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '18px', color: colors.text.primary }}>←</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '500', color: colors.text.primary, margin: 0 }}>Settings</h1>
        <div style={{ width: '40px' }} />
      </div>

      <div style={{ padding: spacing[5] }}>
        {settings.map((section) => (
          <div key={section.category} style={{ marginBottom: spacing[6] }}>
            <p style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1px', marginBottom: spacing[3] }}>
              {section.category.toUpperCase()}
            </p>
            <div style={{
              backgroundColor: '#141414',
              borderRadius: borderRadius.lg,
              border: '1px solid #2A2A2A',
              overflow: 'hidden',
            }}>
              {section.items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: spacing[4],
                    borderBottom: index < section.items.length - 1 ? '1px solid #2A2A2A' : 'none',
                    cursor: 'pointer',
                    gap: spacing[3],
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span style={{ flex: 1, fontSize: '15px', color: colors.text.primary }}>{item.label}</span>
                  <span style={{ fontSize: '18px', color: colors.text.tertiary }}>›</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          onClick={() => navigate('/prive/exit')}
          style={{
            padding: spacing[4],
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            borderRadius: borderRadius.lg,
            border: '1px solid rgba(239, 68, 68, 0.2)',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '15px', color: '#EF4444' }}>Exit Privé</span>
        </div>

        <div style={{ textAlign: 'center', marginTop: spacing[6] }}>
          <p style={{ fontSize: '13px', color: colors.text.tertiary }}>ReZ Privé v1.0.0</p>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveSettings;
