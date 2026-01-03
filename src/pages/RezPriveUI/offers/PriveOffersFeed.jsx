/**
 * C1 - Privé Privileges (Luxury Offers Hub)
 * Purpose: Show curated, exclusive privileges for this user
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveOffersFeed = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const offers = [
    { id: '1', brand: 'Artisan Watch Co', title: 'Private Preview Event', subtitle: 'Exclusive collection launch for Privé members', reward: 1500, type: 'prive', expires: 5, exclusive: true, invite: true, premium: true },
    { id: '2', brand: 'Luxury Café', title: 'Weekend Dining Experience', subtitle: 'Complimentary tasting menu for two', reward: 800, type: 'rez', expires: 11, exclusive: true, invite: false, premium: false },
    { id: '3', brand: 'Premium Spa', title: 'Wellness Retreat', subtitle: 'Full day spa package', reward: 1200, type: 'prive', expires: 41, exclusive: true, invite: false, premium: true },
  ];

  const categories = [
    { id: 'dining', name: 'Dining', icon: '🍽️', count: 8 },
    { id: 'wellness', name: 'Wellness', icon: '🧘', count: 5 },
    { id: 'fashion', name: 'Fashion', icon: '👔', count: 12 },
    { id: 'luxury', name: 'Luxury', icon: '💎', count: 6 },
  ];

  const filteredOffers = offers.filter(o => {
    if (activeFilter === 'exclusive') return o.exclusive;
    if (activeFilter === 'invitations') return o.invite;
    if (activeFilter === 'expiring') return o.expires <= 7;
    return true;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div style={{ padding: spacing[5] }}>
        <div style={{ marginBottom: spacing[4] }}>
          <div style={{ fontSize: '28px', fontWeight: '300', color: colors.text.primary }}>Privileges</div>
          <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Curated exclusively for you</div>
        </div>

        <div style={{ display: 'flex', backgroundColor: colors.background.secondary, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[6], border: `1px solid ${colors.border.primary}` }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '300', color: colors.gold.primary }}>{offers.length}</div>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Available</div>
          </div>
          <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '300', color: colors.gold.primary }}>{offers.filter(o => o.invite).length}</div>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Invitations</div>
          </div>
          <div style={{ width: '1px', backgroundColor: colors.border.primary }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: '300', color: '#FF6B6B' }}>{offers.filter(o => o.expires <= 7).length}</div>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>Expiring</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>BROWSE BY CATEGORY</div>
          <div style={{ display: 'flex', gap: spacing[3], overflowX: 'auto', marginBottom: spacing[6] }}>
            {categories.map(cat => (
              <div key={cat.id} style={{ minWidth: '100px', backgroundColor: colors.background.secondary, borderRadius: borderRadius.lg, padding: spacing[4], textAlign: 'center', border: `1px solid ${colors.border.primary}` }}>
                <div style={{ fontSize: '24px', marginBottom: spacing[2] }}>{cat.icon}</div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>{cat.name}</div>
                <div style={{ fontSize: '11px', color: colors.text.tertiary, marginTop: spacing[1] }}>{cat.count} offers</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: spacing[2], marginBottom: spacing[5], overflowX: 'auto' }}>
          {['all', 'exclusive', 'invitations', 'expiring'].map(filter => (
            <div
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: `${spacing[2]} ${spacing[4]}`,
                backgroundColor: activeFilter === filter ? 'rgba(201, 169, 98, 0.1)' : colors.background.card,
                borderRadius: borderRadius.full,
                border: `1px solid ${activeFilter === filter ? 'rgba(201, 169, 98, 0.3)' : colors.border.primary}`,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ fontSize: '13px', color: activeFilter === filter ? colors.gold.primary : colors.text.secondary }}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>
          {activeFilter === 'all' ? 'ALL PRIVILEGES' : activeFilter.toUpperCase()}
        </div>

        {filteredOffers.map(offer => (
          <div
            key={offer.id}
            onClick={() => navigate(`/prive/offer/${offer.id}`)}
            style={{
              backgroundColor: colors.background.secondary,
              borderRadius: borderRadius.lg,
              padding: spacing[4],
              marginBottom: spacing[3],
              border: `1px solid ${colors.border.primary}`,
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: spacing[3] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: offer.exclusive ? 'rgba(201, 169, 98, 0.15)' : colors.border.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', border: offer.exclusive ? `1px solid rgba(201, 169, 98, 0.3)` : 'none' }}>
                  <div style={{ fontSize: '16px', color: colors.text.secondary }}>{offer.brand.charAt(0)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '15px', color: colors.text.primary }}>{offer.brand}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Visit & Earn</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                {offer.exclusive && <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: colors.gold.primary }} />}
                {offer.invite && <div style={{ fontSize: '14px', color: colors.gold.primary }}>✦</div>}
              </div>
            </div>

            <div style={{ fontSize: '17px', color: colors.text.primary, marginBottom: spacing[1] }}>{offer.title}</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[4] }}>{offer.subtitle}</div>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: spacing[3], borderTop: `1px solid ${colors.border.primary}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '3px', backgroundColor: colors.gold.primary }} />
                <div style={{ fontSize: '15px', color: colors.gold.primary }}>{offer.reward.toLocaleString()}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>coins</div>
              </div>
              <div style={{ fontSize: '13px', color: offer.expires <= 7 ? '#FF6B6B' : colors.text.tertiary }}>
                {offer.expires <= 7 ? `${offer.expires}d left` : `Expires in ${offer.expires}d`}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveOffersFeed;
