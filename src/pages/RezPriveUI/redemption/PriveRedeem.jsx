/**
 * Privé Redemption Home
 * Complete redemption hub with wallet, categories, featured rewards
 */

import { useNavigate } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveRedeem = () => {
  const navigate = useNavigate();

  // Wallet data
  const walletData = {
    rezCoins: 12450,
    priveCoins: 3200,
    brandedCoins: 850,
    totalValue: 16500,
    expiringCoins: 500,
    expiringDays: 14,
  };

  // Categories
  const categories = [
    { id: 'gift-cards', name: 'Gift Cards', icon: '🎁', count: 24 },
    { id: 'experiences', name: 'Experiences', icon: '✨', count: 18 },
    { id: 'privileges', name: 'Partner Access', icon: '🔑', count: 12 },
    { id: 'history', name: 'History', icon: '📋', count: null },
  ];

  // Featured redemptions
  const featuredRedemptions = [
    {
      id: 'fr1',
      type: 'experience',
      title: 'Spa Day Package',
      brand: 'Four Seasons',
      value: 8000,
      coins: 6400,
      discount: 20,
      image: '🧖',
      isPriveExclusive: true,
      expiresIn: 5,
    },
    {
      id: 'fr2',
      type: 'giftcard',
      title: 'Dining Voucher',
      brand: 'The Oberoi',
      value: 5000,
      coins: 4500,
      discount: 10,
      image: '🍽️',
      isPriveExclusive: false,
      expiresIn: 10,
    },
    {
      id: 'fr3',
      type: 'privilege',
      title: 'Airport Lounge',
      brand: 'Priority Pass',
      value: 3500,
      coins: 2800,
      discount: 20,
      image: '✈️',
      isPriveExclusive: true,
      expiresIn: 30,
    },
  ];

  // Popular gift cards
  const popularGiftCards = [
    { id: 'gc1', brand: 'Amazon', value: 1000, coins: 950, logo: 'A' },
    { id: 'gc2', brand: 'Flipkart', value: 1000, coins: 920, logo: 'F' },
    { id: 'gc3', brand: 'Swiggy', value: 500, coins: 475, logo: 'S' },
    { id: 'gc4', brand: 'Zomato', value: 500, coins: 460, logo: 'Z' },
    { id: 'gc5', brand: 'BookMyShow', value: 500, coins: 480, logo: 'B' },
  ];

  // Recent redemptions
  const recentRedemptions = [
    { id: 'rr1', title: 'Starbucks ₹500', date: '2 days ago', status: 'completed', coins: 475 },
    { id: 'rr2', title: 'Spa Treatment', date: '1 week ago', status: 'completed', coins: 3200 },
    { id: 'rr3', title: 'Amazon ₹2000', date: '2 weeks ago', status: 'completed', coins: 1900 },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '120px' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[4]} ${spacing[5]} ${spacing[2]}` }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: '300', color: colors.text.primary }}>Redeem</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Use your coins for exclusive rewards</div>
          </div>
          <div onClick={() => navigate('/prive/history')} style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${colors.border.secondary}`, cursor: 'pointer' }}>
            <div style={{ fontSize: '20px' }}>📋</div>
          </div>
        </div>

        {/* Wallet Card */}
        <div style={{ margin: `${spacing[4]} ${spacing[5]} 0`, borderRadius: borderRadius.xl, overflow: 'hidden', border: '1px solid rgba(201, 169, 98, 0.3)' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', padding: spacing[5] }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>YOUR BALANCE</div>
              <div onClick={() => navigate('/prive/wallet')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>View Wallet →</div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: spacing[4] }}>
              <div style={{ fontSize: '48px', fontWeight: '200', color: colors.gold.primary }}>{walletData.totalValue.toLocaleString()}</div>
              <div style={{ fontSize: '15px', color: colors.text.tertiary }}>total coins</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: spacing[4], marginBottom: spacing[4] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: colors.gold.primary }} />
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{walletData.rezCoins.toLocaleString()} ReZ</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#B8860B' }} />
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{walletData.priveCoins.toLocaleString()} Privé</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#64B5F6' }} />
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{walletData.brandedCoins.toLocaleString()} Brand</div>
              </div>
            </div>

            {walletData.expiringCoins > 0 && (
              <div style={{ marginTop: spacing[4], paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#FFC107' }}>
                  ⚠️ {walletData.expiringCoins} coins expiring in {walletData.expiringDays} days
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div style={{ marginTop: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>CATEGORIES</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3], padding: `0 ${spacing[5]}` }}>
            {categories.map((cat) => (
              <div key={cat.id} onClick={() => navigate(`/prive/redeem/${cat.id}`)} style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2], border: `1px solid ${colors.border.secondary}`, cursor: 'pointer' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '28px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[1] }}>
                  <div style={{ fontSize: '28px' }}>{cat.icon}</div>
                </div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>{cat.name}</div>
                {cat.count && (
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{cat.count} items</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Redemptions */}
        <div style={{ marginTop: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>FEATURED REWARDS</div>
          <div style={{ display: 'flex', overflowX: 'auto', gap: spacing[3], padding: `0 ${spacing[5]}` }}>
            {featuredRedemptions.map((item) => (
              <div key={item.id} onClick={() => navigate(`/prive/reward/${item.id}`)} style={{ minWidth: '65%', backgroundColor: colors.background.card, borderRadius: borderRadius.xl, overflow: 'hidden', border: item.isPriveExclusive ? '1px solid rgba(201, 169, 98, 0.3)' : `1px solid ${colors.border.secondary}`, position: 'relative', cursor: 'pointer' }}>
                {item.isPriveExclusive && (
                  <div style={{ position: 'absolute', top: spacing[3], right: spacing[3], backgroundColor: 'rgba(201, 169, 98, 0.2)', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm, zIndex: 1 }}>
                    <div style={{ fontSize: '13px', color: colors.gold.primary }}>✦ PRIVÉ</div>
                  </div>
                )}

                <div style={{ height: '100px', backgroundColor: '#141414', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '48px' }}>{item.image}</div>
                </div>

                <div style={{ padding: spacing[4] }}>
                  <div style={{ fontSize: '13px', color: colors.gold.primary, marginBottom: spacing[1] }}>{item.brand}</div>
                  <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[2] }}>{item.title}</div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: spacing[2] }}>
                    <div>
                      <div style={{ fontSize: '20px', color: colors.gold.primary }}>{item.coins.toLocaleString()}</div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>coins</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Worth</div>
                      <div style={{ fontSize: '15px', color: colors.text.secondary }}>₹{item.value.toLocaleString()}</div>
                    </div>
                  </div>

                  {item.discount > 0 && (
                    <div style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(76, 175, 80, 0.15)', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm, display: 'inline-block' }}>
                      <div style={{ fontSize: '13px', color: '#4CAF50' }}>{item.discount}% OFF</div>
                    </div>
                  )}
                </div>

                <div style={{ padding: `0 ${spacing[4]} ${spacing[4]}` }}>
                  <div style={{ fontSize: '13px', color: item.expiresIn <= 7 ? '#FF6B6B' : colors.text.tertiary }}>
                    Expires in {item.expiresIn} days
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Gift Cards */}
        <div style={{ marginTop: spacing[6] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>POPULAR GIFT CARDS</div>
            <div onClick={() => navigate('/prive/gift-cards')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>See All →</div>
          </div>
          <div style={{ display: 'flex', overflowX: 'auto', gap: spacing[3], padding: `0 ${spacing[5]}` }}>
            {popularGiftCards.map((gc) => (
              <div key={gc.id} onClick={() => navigate(`/prive/gift-card/${gc.id}`)} style={{ minWidth: '100px', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[3], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[1], border: `1px solid ${colors.border.secondary}`, cursor: 'pointer' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: '#242424', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[1] }}>
                  <div style={{ fontSize: '20px', fontWeight: '600', color: colors.gold.primary }}>{gc.logo}</div>
                </div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>{gc.brand}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>₹{gc.value}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing[1], marginTop: spacing[1] }}>
                  <div style={{ fontSize: '15px', color: colors.gold.primary }}>{gc.coins}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>coins</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Redeem */}
        <div style={{ marginTop: spacing[6] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>QUICK REDEEM</div>
          <div style={{ display: 'flex', gap: spacing[3], padding: `0 ${spacing[5]}` }}>
            <div onClick={() => navigate('/prive/gift-cards')} style={{ flex: 1, borderRadius: borderRadius.lg, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.15), rgba(76, 175, 80, 0.05))', padding: spacing[4], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ fontSize: '32px' }}>🎁</div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>₹500 Gift Card</div>
                <div style={{ fontSize: '13px', color: '#4CAF50' }}>From 475 coins</div>
              </div>
            </div>

            <div onClick={() => navigate('/prive/experiences')} style={{ flex: 1, borderRadius: borderRadius.lg, overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', padding: spacing[4], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing[2] }}>
                <div style={{ fontSize: '32px' }}>☕</div>
                <div style={{ fontSize: '15px', color: colors.text.primary }}>Coffee Treat</div>
                <div style={{ fontSize: '13px', color: colors.gold.primary }}>From 200 coins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Redemptions */}
        {recentRedemptions.length > 0 && (
          <div style={{ marginTop: spacing[6] }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 ${spacing[5]}`, marginBottom: spacing[3] }}>
              <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>RECENT REDEMPTIONS</div>
              <div onClick={() => navigate('/prive/history')} style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>View All →</div>
            </div>
            <div style={{ padding: `0 ${spacing[5]}`, display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
              {recentRedemptions.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], border: `1px solid ${colors.border.secondary}` }}>
                  <div>
                    <div style={{ fontSize: '15px', color: colors.text.primary }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>{item.date}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '15px', color: colors.text.secondary }}>-{item.coins}</div>
                    <div style={{ backgroundColor: item.status === 'completed' ? 'rgba(76, 175, 80, 0.15)' : 'rgba(255, 255, 255, 0.1)', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm, marginTop: spacing[1] }}>
                      <div style={{ fontSize: '13px', color: item.status === 'completed' ? '#4CAF50' : colors.text.tertiary }}>{item.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Card */}
        <div onClick={() => navigate('/prive/help')} style={{ display: 'flex', alignItems: 'center', margin: `${spacing[6]} ${spacing[5]} ${spacing[8]}`, padding: spacing[4], backgroundColor: colors.background.card, borderRadius: borderRadius.lg, border: `1px solid ${colors.border.secondary}`, gap: spacing[3], cursor: 'pointer' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '22px', backgroundColor: 'rgba(201, 169, 98, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '22px' }}>💡</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '15px', color: colors.text.primary }}>How Redemption Works</div>
            <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>
              Learn about coin values, expiry, and best ways to use your rewards
            </div>
          </div>
          <div style={{ fontSize: '15px', color: colors.gold.primary }}>→</div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveRedeem;
