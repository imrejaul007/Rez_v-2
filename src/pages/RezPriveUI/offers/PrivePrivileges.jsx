/**
 * Privé Privileges Screen (Offers/Campaigns Tab)
 * Curated exclusive privileges for members
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';
import ModeSwitcher from '../../components/ModeSwitcher';

const { colors, spacing, borderRadius } = priveTheme;

const PrivePrivileges = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const offers = [
    { id: '1', brandName: 'Artisan Watch Co', brandInitial: 'A', title: 'Private Preview Event', subtitle: 'Exclusive collection launch for Privé members', rewardCoins: 1500, rewardType: 'prive', daysLeft: 5, isExclusive: true, isInviteOnly: true },
    { id: '2', brandName: 'Luxury Café', brandInitial: 'L', title: 'Weekend Dining Experience', subtitle: 'Complimentary tasting menu for two', rewardCoins: 800, rewardType: 'rez', daysLeft: 11, isExclusive: true, isInviteOnly: false },
    { id: '3', brandName: 'Summer Collection', brandInitial: 'S', title: 'Early Access: New Arrivals', subtitle: 'Shop before public launch', rewardCoins: 600, rewardType: 'branded', daysLeft: 26, isExclusive: false, isInviteOnly: true },
    { id: '4', brandName: 'Premium Spa', brandInitial: 'P', title: 'Wellness Retreat', subtitle: 'Full day spa package with treatments', rewardCoins: 1200, rewardType: 'prive', daysLeft: 41, isExclusive: true, isInviteOnly: false },
    { id: '5', brandName: 'Urban Bistro', brandInitial: 'U', title: "Chef's Table Experience", subtitle: 'Intimate 8-course dinner', rewardCoins: 500, rewardType: 'rez', daysLeft: 21, isExclusive: false, isInviteOnly: false },
    { id: '6', brandName: 'Maison de Luxe', brandInitial: 'M', title: 'VIP Shopping Event', subtitle: 'Private store access with personal stylist', rewardCoins: 2000, rewardType: 'prive', daysLeft: 8, isExclusive: true, isInviteOnly: true },
  ];

  const categories = [
    { id: 'dining', name: 'Dining', icon: '🍽️', count: 8 },
    { id: 'wellness', name: 'Wellness', icon: '🧘', count: 5 },
    { id: 'fashion', name: 'Fashion', icon: '👔', count: 12 },
    { id: 'luxury', name: 'Luxury', icon: '💎', count: 6 },
    { id: 'travel', name: 'Travel', icon: '✈️', count: 4 },
    { id: 'experiences', name: 'Experiences', icon: '🎭', count: 7 },
  ];

  const merchants = [
    { id: 'm1', name: 'Luxury Café', initial: 'L', category: 'Dining', distance: '0.5 km', activeOffers: 3, rating: 4.8 },
    { id: 'm2', name: 'Premium Spa', initial: 'P', category: 'Wellness', distance: '1.2 km', activeOffers: 2, rating: 4.9 },
    { id: 'm3', name: 'Artisan Watch Co', initial: 'A', category: 'Luxury', distance: '2.1 km', activeOffers: 1, rating: 4.7 },
    { id: 'm4', name: 'Urban Bistro', initial: 'U', category: 'Dining', distance: '0.8 km', activeOffers: 2, rating: 4.6 },
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'exclusive', label: 'Exclusive' },
    { key: 'invitations', label: 'Invitations' },
    { key: 'expiring', label: 'Expiring Soon' },
  ];

  const filteredOffers = offers.filter(offer => {
    if (activeFilter === 'exclusive') return offer.isExclusive;
    if (activeFilter === 'invitations') return offer.isInviteOnly;
    if (activeFilter === 'expiring') return offer.daysLeft <= 7;
    return true;
  });

  const invitationCount = offers.filter(o => o.isInviteOnly).length;
  const expiringCount = offers.filter(o => o.daysLeft <= 7).length;

  const getRewardColor = (type) => {
    switch (type) {
      case 'prive': return '#B8860B';
      case 'branded': return '#8B7355';
      default: return colors.gold.primary;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      {/* Header */}
      <div style={{ padding: spacing[5], paddingTop: spacing[6] }}>
        <div style={{ fontSize: '34px', fontWeight: '600', color: colors.text.primary, marginBottom: spacing[1] }}>Privileges</div>
        <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Curated exclusively for you</div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: `0 ${spacing[5]}`, marginBottom: spacing[5] }}>
        {[
          { label: 'Available', value: offers.length },
          { label: 'Invitations', value: invitationCount },
          { label: 'Expiring', value: expiringCount, urgent: expiringCount > 0 },
        ].map((stat, i, arr) => (
          <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: '28px', fontWeight: '300', color: stat.urgent ? '#FF9800' : colors.gold.primary }}>{stat.value}</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{stat.label}</div>
            {i < arr.length - 1 && <div style={{ position: 'absolute', right: '-16px', top: '10px', width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />}
          </div>
        ))}
      </div>

      {/* Categories */}
      <div style={{ marginBottom: spacing[5] }}>
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>
          <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>BROWSE BY CATEGORY</div>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], overflowX: 'auto', padding: `0 ${spacing[5]}`, scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <div key={cat.id} onClick={() => navigate(`/prive/explore?category=${cat.id}`)} style={{ minWidth: '120px', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: spacing[2] }}>{cat.icon}</div>
              <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[1] }}>{cat.name}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{cat.count} offers</div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearby Merchants */}
      <div style={{ marginBottom: spacing[5] }}>
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[3], display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
            <span style={{ fontSize: '16px' }}>📍</span>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>NEARBY MERCHANTS</div>
          </div>
          <div onClick={() => navigate('/prive/explore')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>View Map →</div>
        </div>
        <div style={{ display: 'flex', gap: spacing[3], overflowX: 'auto', padding: `0 ${spacing[5]}`, scrollbarWidth: 'none' }}>
          {merchants.map(m => (
            <div key={m.id} onClick={() => navigate(`/prive/merchant/${m.id}`)} style={{ minWidth: '160px', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, cursor: 'pointer' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[3] }}>
                <div style={{ fontSize: '24px', color: colors.gold.primary }}>{m.initial}</div>
              </div>
              <div style={{ fontSize: '15px', color: colors.text.primary, fontWeight: '500', marginBottom: spacing[1] }}>{m.name}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[2] }}>{m.distance}</div>
              <div style={{ fontSize: '13px', color: colors.gold.primary }}>{m.activeOffers} offers</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[4] }}>
        <div style={{ display: 'flex', gap: spacing[2], overflowX: 'auto', scrollbarWidth: 'none' }}>
          {filters.map(f => (
            <div key={f.key} onClick={() => setActiveFilter(f.key)} style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: borderRadius.full, backgroundColor: activeFilter === f.key ? 'rgba(201, 169, 98, 0.2)' : colors.background.card, border: `1px solid ${activeFilter === f.key ? colors.gold.primary : colors.border.primary}`, fontSize: '13px', color: activeFilter === f.key ? colors.gold.primary : colors.text.secondary, cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {f.label}
            </div>
          ))}
        </div>
      </div>

      {/* Offers List */}
      <div style={{ padding: `0 ${spacing[5]}` }}>
        <div style={{ fontSize: '13px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[4] }}>
          {filteredOffers.length} PRIVILEGES
        </div>
        {filteredOffers.map(offer => (
          <div key={offer.id} onClick={() => navigate(`/prive/offer/${offer.id}`)} style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.primary}`, marginBottom: spacing[3], cursor: 'pointer', position: 'relative' }}>
            {/* Brand Initial */}
            <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[3] }}>
              <div style={{ fontSize: '24px', color: colors.gold.primary }}>{offer.brandInitial}</div>
            </div>

            {/* Badges */}
            <div style={{ position: 'absolute', top: spacing[3], right: spacing[3], display: 'flex', gap: spacing[2] }}>
              {offer.isExclusive && (
                <div style={{ backgroundColor: 'rgba(201, 169, 98, 0.2)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm, fontSize: '9px', fontWeight: '600', color: colors.gold.primary }}>
                  EXCLUSIVE
                </div>
              )}
              {offer.isInviteOnly && (
                <div style={{ backgroundColor: 'rgba(233, 30, 99, 0.2)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm, fontSize: '9px', fontWeight: '600', color: '#E91E63' }}>
                  INVITE ONLY
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ fontSize: '13px', color: colors.gold.primary, marginBottom: spacing[1] }}>{offer.brandName}</div>
            <div style={{ fontSize: '17px', color: colors.text.primary, fontWeight: '500', marginBottom: spacing[1] }}>{offer.title}</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[4] }}>{offer.subtitle}</div>

            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: getRewardColor(offer.rewardType) }} />
                <div style={{ fontSize: '15px', color: getRewardColor(offer.rewardType), fontWeight: '500' }}>
                  {offer.rewardCoins.toLocaleString()} coins
                </div>
              </div>
              <div style={{ fontSize: '13px', color: offer.daysLeft <= 7 ? '#FF9800' : colors.text.tertiary }}>
                {offer.daysLeft} days left
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModeSwitcher />
      <BottomNavManager />
    </div>
  );
};

export default PrivePrivileges;
