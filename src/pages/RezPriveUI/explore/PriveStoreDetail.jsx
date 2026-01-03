/**
 * Privé Store Detail
 * Premium store page with offers, products, services, and earnings data
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { priveTheme } from '../../styles/prive-theme';
import BottomNavManager from '../../components/layout/BottomNavManager';

const { colors, spacing, borderRadius } = priveTheme;

const PriveStoreDetail = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('offers');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Mock store data
  const store = {
    id: storeId || '1',
    name: 'The Grand Café',
    category: 'Fine Dining',
    rating: 4.8,
    reviewCount: 324,
    description: 'Established in 1985, The Grand Café has been a cornerstone of fine dining, offering curated experiences that blend tradition with modern gastronomy. Our award-winning chefs create seasonal menus using locally-sourced ingredients.',
    whyPrive: 'Selected for exceptional quality, trusted service, and commitment to the Privé experience.',
    images: ['interior', 'food', 'ambiance', 'chef'],
    distance: '2.1 km',
    address: '42 Park Avenue, Premium District, Mumbai 400001',
    phone: '+91 98765 43210',
    website: 'www.thegrandcafe.com',
    hours: '11:00 AM - 11:00 PM',
    isOpen: true,
    isOnline: false,
    earningsData: {
      avgCashback: '35%',
      maxCashback: '50%',
      totalEarned: 245000,
      membersSaved: 1247,
      priveExclusiveOffers: 3,
    },
    memberPerks: [
      'Priority reservations',
      'Complimentary welcome drink',
      'Early access to seasonal menus',
      'Birthday special: 25% extra coins',
    ],
    offers: [
      { id: 'o1', title: 'Weekend Tasting Menu', rewardPercent: '35%', discountPercent: '20%', conditions: 'Min spend ₹5,000', expiresIn: '5 days', isPriveExclusive: true, coinType: 'prive' },
      { id: 'o2', title: 'Private Dining Room', rewardPercent: '40%', discountPercent: '15%', conditions: '4+ guests', expiresIn: '10 days', isPriveExclusive: true, coinType: 'prive' },
      { id: 'o3', title: 'Wine Pairing Experience', rewardPercent: '30%', expiresIn: '7 days', coinType: 'rez' },
      { id: 'o4', title: "Chef's Table Experience", rewardPercent: '50%', discountPercent: '25%', conditions: 'Advance booking', expiresIn: '3 days', isPriveExclusive: true, coinType: 'prive' },
    ],
    products: [
      { id: 'p1', name: 'Signature Coffee Blend', price: 1200, originalPrice: 1500, category: 'Beverages', coinReward: 180, isPriveExclusive: true },
      { id: 'p2', name: 'Artisan Chocolate Box', price: 2500, category: 'Gifts', coinReward: 375 },
      { id: 'p3', name: 'Premium Tea Collection', price: 1800, category: 'Beverages', coinReward: 270 },
      { id: 'p4', name: 'Gourmet Hamper', price: 5000, originalPrice: 6000, category: 'Gifts', coinReward: 750, isPriveExclusive: true },
    ],
    services: [
      { id: 's1', name: 'Private Dining Experience', duration: '3 hours', price: 15000, coinReward: 2250, isPriveExclusive: true },
      { id: 's2', name: 'Wine Tasting Session', duration: '2 hours', price: 5000, coinReward: 750 },
      { id: 's3', name: 'Cooking Masterclass', duration: '4 hours', price: 8000, coinReward: 1200 },
      { id: 's4', name: 'Birthday Celebration Package', duration: '4 hours', price: 25000, coinReward: 3750, isPriveExclusive: true },
    ],
    ugcVideos: [
      { id: 'v1', creator: 'FoodieRaj', views: '12.5K', duration: '0:45' },
      { id: 'v2', creator: 'MumbaiDiaries', views: '8.2K', duration: '1:20' },
      { id: 'v3', creator: 'TasteExplorer', views: '5.7K', duration: '0:58' },
    ],
    amenities: ['Valet Parking', 'WiFi', 'Live Music', 'Private Rooms', 'Outdoor Seating', 'Wheelchair Accessible'],
    paymentMethods: ['ReZ Coins', 'Privé Coins', 'Cards', 'UPI', 'Cash'],
  };

  const tabs = [
    { id: 'offers', label: 'Offers', count: store.offers.length },
    { id: 'products', label: 'Products', count: store.products.length },
    { id: 'services', label: 'Services', count: store.services.length },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.primary, paddingBottom: '180px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: spacing[5] }}>
        <div onClick={() => navigate(-1)} style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: colors.text.primary, cursor: 'pointer' }}>←</div>
        <div onClick={() => setIsBookmarked(!isBookmarked)} style={{ width: '40px', height: '40px', borderRadius: '20px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: isBookmarked ? colors.gold.primary : colors.text.secondary, cursor: 'pointer' }}>{isBookmarked ? '★' : '☆'}</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Image Gallery */}
        <div style={{ marginBottom: spacing[4] }}>
          <div style={{ width: '100%', height: '250px', backgroundColor: colors.background.card, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(transparent, rgba(10,10,10,0.8))' }} />
            <div style={{ fontSize: '72px', color: colors.gold.primary, opacity: 0.3 }}>{store.name.charAt(0)}</div>
          </div>
          <div style={{ display: 'flex', gap: spacing[2], padding: `${spacing[3]} ${spacing[5]}`, overflowX: 'auto' }}>
            {store.images.map((img, index) => (
              <div key={index} onClick={() => setActiveImageIndex(index)} style={{ width: '60px', height: '60px', borderRadius: borderRadius.md, backgroundColor: '#242424', display: 'flex', alignItems: 'center', justifyContent: 'center', border: activeImageIndex === index ? `2px solid ${colors.gold.primary}` : 'none', cursor: 'pointer', flexShrink: 0 }}>
                <div style={{ color: colors.text.tertiary, fontSize: '16px' }}>{index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Info */}
        <div style={{ padding: `0 ${spacing[5]}` }}>
          <div style={{ marginBottom: spacing[4] }}>
            <div style={{ alignSelf: 'flex-start', padding: `${spacing[1]} ${spacing[3]}`, backgroundColor: 'rgba(201, 169, 98, 0.1)', borderRadius: borderRadius.full, marginBottom: spacing[2], display: 'inline-block' }}>
              <div style={{ fontSize: '13px', color: colors.gold.primary }}>Privé Partner</div>
            </div>
            <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text.primary, marginBottom: spacing[1] }}>{store.name}</div>
            <div style={{ fontSize: '15px', color: colors.text.tertiary }}>{store.category}</div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[4] }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '20px', color: colors.gold.primary, marginBottom: spacing[1] }}>★ {store.rating}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>({store.reviewCount} reviews)</div>
            </div>
            <div style={{ width: '1px', height: '30px', backgroundColor: '#2A2A2A' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '20px', color: colors.text.primary, marginBottom: spacing[1] }}>{store.distance}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>away</div>
            </div>
            <div style={{ width: '1px', height: '30px', backgroundColor: '#2A2A2A' }} />
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontSize: '20px', color: store.isOpen ? '#4CAF50' : '#F44336', marginBottom: spacing[1] }}>{store.isOpen ? 'Open' : 'Closed'}</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{store.hours}</div>
            </div>
          </div>

          {/* Description */}
          <div style={{ fontSize: '15px', color: colors.text.secondary, lineHeight: '24px', marginBottom: spacing[4] }}>{store.description}</div>

          {/* Earnings Highlight Card */}
          <div style={{ borderRadius: borderRadius.xl, overflow: 'hidden', border: '1px solid rgba(201, 169, 98, 0.3)', marginBottom: spacing[4] }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(201, 169, 98, 0.15), rgba(201, 169, 98, 0.05))', padding: spacing[5] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3], marginBottom: spacing[4] }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: 'rgba(201, 169, 98, 0.2)', border: '1px solid rgba(201, 169, 98, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '22px', color: colors.gold.primary }}>◈</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', color: colors.gold.primary, letterSpacing: '1.5px', marginBottom: spacing[1] }}>PRIVÉ MEMBER EARNINGS</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Exclusive rewards at this store</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: spacing[4] }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[1] }}>{store.earningsData.avgCashback}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Avg. Cashback</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '300', color: '#4CAF50', marginBottom: spacing[1] }}>{store.earningsData.maxCashback}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Max Cashback</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '300', color: colors.gold.primary, marginBottom: spacing[1] }}>{store.earningsData.priveExclusiveOffers}</div>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Exclusive Offers</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: spacing[3], borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>Total earned by members</div>
                  <div style={{ fontSize: '15px', color: colors.gold.primary }}>₹{store.earningsData.totalEarned.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>Members saved</div>
                  <div style={{ fontSize: '15px', color: '#4CAF50' }}>{store.earningsData.membersSaved}+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Perks */}
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[4], border: `1px solid ${colors.border.secondary}` }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>PRIVÉ MEMBER PERKS</div>
            {store.memberPerks.map((perk, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: spacing[3], padding: `${spacing[2]} 0` }}>
                <div style={{ fontSize: '14px', color: colors.gold.primary }}>✦</div>
                <div style={{ fontSize: '14px', color: colors.text.secondary }}>{perk}</div>
              </div>
            ))}
          </div>

          {/* Why Privé */}
          <div style={{ backgroundColor: 'rgba(201, 169, 98, 0.1)', borderRadius: borderRadius.lg, padding: spacing[4], border: '1px solid rgba(201, 169, 98, 0.2)', marginBottom: spacing[4] }}>
            <div style={{ fontSize: '11px', color: colors.gold.primary, letterSpacing: '1.5px', marginBottom: spacing[2] }}>WHY THIS STORE IS IN PRIVÉ</div>
            <div style={{ fontSize: '14px', color: colors.text.tertiary }}>{store.whyPrive}</div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[4]} 0` }} />

        {/* Community Videos */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[4] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[3] }}>
            <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px' }}>COMMUNITY VIDEOS</div>
            <div style={{ fontSize: '13px', color: colors.gold.primary, cursor: 'pointer' }}>See All</div>
          </div>

          <div style={{ display: 'flex', gap: spacing[3], overflowX: 'auto' }}>
            {store.ugcVideos.map((video) => (
              <div key={video.id} style={{ minWidth: '140px', cursor: 'pointer' }}>
                <div style={{ width: '140px', height: '180px', backgroundColor: '#242424', borderRadius: borderRadius.lg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[2], position: 'relative' }}>
                  <div style={{ fontSize: '32px', color: colors.text.primary }}>▶</div>
                  <div style={{ position: 'absolute', bottom: spacing[2], right: spacing[2], backgroundColor: 'rgba(0,0,0,0.7)', padding: `${spacing[1]} ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                    <div style={{ fontSize: '13px', color: '#FFFFFF' }}>{video.duration}</div>
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: colors.text.primary, marginBottom: spacing[1] }}>@{video.creator}</div>
                <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{video.views} views</div>
              </div>
            ))}

            <div onClick={() => navigate('/prive/content/submit')} style={{ minWidth: '140px', height: '180px', backgroundColor: colors.background.card, borderRadius: borderRadius.lg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: `1px dashed ${colors.border.goldMuted}`, gap: spacing[2], cursor: 'pointer' }}>
              <div style={{ fontSize: '32px', color: colors.gold.primary }}>+</div>
              <div style={{ fontSize: '14px', color: colors.gold.primary }}>Add Your Video</div>
              <div style={{ fontSize: '13px', color: colors.text.tertiary }}>Earn +100 coins</div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[4]} 0` }} />

        {/* Tabs */}
        <div style={{ display: 'flex', margin: `0 ${spacing[5]} ${spacing[4]}`, backgroundColor: colors.background.card, borderRadius: borderRadius.lg, padding: spacing[1] }}>
          {tabs.map((tab) => (
            <div key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: `${spacing[3]} 0`, gap: spacing[2], borderRadius: borderRadius.md, backgroundColor: activeTab === tab.id ? 'rgba(201, 169, 98, 0.15)' : 'transparent', cursor: 'pointer' }}>
              <div style={{ fontSize: '15px', color: activeTab === tab.id ? colors.gold.primary : colors.text.tertiary }}>{tab.label}</div>
              <div style={{ padding: `2px ${spacing[2]}`, backgroundColor: activeTab === tab.id ? 'rgba(201, 169, 98, 0.2)' : '#242424', borderRadius: borderRadius.full }}>
                <div style={{ fontSize: '13px', color: activeTab === tab.id ? colors.gold.primary : colors.text.tertiary }}>{tab.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: `0 ${spacing[5]}` }}>
          {/* Offers Tab */}
          {activeTab === 'offers' && (
            <div>
              {store.offers.filter(o => o.isPriveExclusive).length > 0 && (
                <div style={{ marginBottom: spacing[3] }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${spacing[2]} ${spacing[3]}`, backgroundColor: 'rgba(201, 169, 98, 0.1)', borderRadius: borderRadius.md, border: '1px solid rgba(201, 169, 98, 0.2)' }}>
                    <div style={{ fontSize: '13px', color: colors.gold.primary }}>✦ PRIVÉ EXCLUSIVE</div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>{store.offers.filter(o => o.isPriveExclusive).length} member-only offers</div>
                  </div>
                </div>
              )}

              {store.offers.map((offer) => (
                <div key={offer.id} onClick={() => navigate(`/prive/offer/${offer.id}`)} style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: offer.isPriveExclusive ? 'rgba(201, 169, 98, 0.05)' : colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[3], border: offer.isPriveExclusive ? '1px solid rgba(201, 169, 98, 0.3)' : `1px solid ${colors.border.secondary}`, cursor: 'pointer', overflow: 'hidden' }}>
                  {offer.isPriveExclusive && (
                    <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(201, 169, 98, 0.2)', padding: `${spacing[1]} ${spacing[2]}`, borderBottomLeftRadius: borderRadius.md }}>
                      <div style={{ fontSize: '13px', color: colors.gold.primary }}>✦ PRIVÉ</div>
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[1] }}>{offer.title}</div>
                    {offer.discountPercent && (
                      <div style={{ alignSelf: 'flex-start', backgroundColor: '#E53935', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm, marginBottom: spacing[1], display: 'inline-block' }}>
                        <div style={{ fontSize: '13px', color: '#FFFFFF' }}>{offer.discountPercent} OFF</div>
                      </div>
                    )}
                    {offer.conditions && (
                      <div style={{ fontSize: '13px', color: colors.text.tertiary, marginTop: spacing[1] }}>{offer.conditions}</div>
                    )}
                    {offer.expiresIn && (
                      <div style={{ fontSize: '13px', color: '#FFC107', marginTop: spacing[1] }}>Expires in {offer.expiresIn}</div>
                    )}
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: `2px ${spacing[2]}`, backgroundColor: offer.coinType === 'prive' ? 'rgba(184, 134, 11, 0.2)' : 'rgba(201, 169, 98, 0.2)', borderRadius: borderRadius.sm, marginBottom: spacing[1] }}>
                      <div style={{ fontSize: '13px', color: offer.coinType === 'prive' ? '#B8860B' : colors.gold.primary }}>{offer.coinType === 'prive' ? 'Privé' : 'ReZ'}</div>
                    </div>
                    <div style={{ fontSize: '28px', fontWeight: '600', color: colors.gold.primary, marginBottom: spacing[1] }}>{offer.rewardPercent}</div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary }}>cashback</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing[3] }}>
              {store.products.map((product) => {
                const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
                return (
                  <div key={product.id} onClick={() => navigate(`/prive/product/${product.id}`)} style={{ backgroundColor: product.isPriveExclusive ? 'rgba(201, 169, 98, 0.03)' : colors.background.card, borderRadius: borderRadius.lg, padding: spacing[3], border: product.isPriveExclusive ? '1px solid rgba(201, 169, 98, 0.3)' : `1px solid ${colors.border.secondary}`, cursor: 'pointer' }}>
                    <div style={{ height: '100px', backgroundColor: '#242424', borderRadius: borderRadius.md, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing[2], position: 'relative' }}>
                      <div style={{ fontSize: '32px', color: colors.gold.primary, opacity: 0.3 }}>{product.name.charAt(0)}</div>
                      {product.isPriveExclusive && (
                        <div style={{ position: 'absolute', top: spacing[2], left: spacing[2], width: '24px', height: '24px', borderRadius: '12px', backgroundColor: 'rgba(201, 169, 98, 0.2)', border: '1px solid rgba(201, 169, 98, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ fontSize: '13px', color: colors.gold.primary }}>✦</div>
                        </div>
                      )}
                      {discount > 0 && (
                        <div style={{ position: 'absolute', top: spacing[2], right: spacing[2], backgroundColor: '#E53935', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                          <div style={{ fontSize: '13px', color: '#FFFFFF' }}>{discount}%</div>
                        </div>
                      )}
                    </div>

                    <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>{product.category}</div>
                    <div style={{ fontSize: '14px', color: colors.text.primary, marginBottom: spacing[2], overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.name}</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[2] }}>
                      <div style={{ fontSize: '15px', color: colors.gold.primary }}>₹{product.price.toLocaleString()}</div>
                      {product.originalPrice && (
                        <div style={{ fontSize: '12px', color: colors.text.tertiary, textDecoration: 'line-through' }}>₹{product.originalPrice.toLocaleString()}</div>
                      )}
                    </div>

                    <div style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm, display: 'inline-block' }}>
                      <div style={{ fontSize: '13px', color: '#4CAF50' }}>+{product.coinReward} coins</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              {store.services.map((service) => (
                <div key={service.id} onClick={() => navigate(`/prive/service/${service.id}`)} style={{ display: 'flex', alignItems: 'center', gap: spacing[3], backgroundColor: service.isPriveExclusive ? 'rgba(201, 169, 98, 0.03)' : colors.background.card, borderRadius: borderRadius.lg, padding: spacing[4], marginBottom: spacing[3], border: service.isPriveExclusive ? '1px solid rgba(201, 169, 98, 0.3)' : `1px solid ${colors.border.secondary}`, cursor: 'pointer' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: service.isPriveExclusive ? 'rgba(201, 169, 98, 0.25)' : 'rgba(201, 169, 98, 0.15)', border: service.isPriveExclusive ? '1px solid rgba(201, 169, 98, 0.4)' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '20px', color: colors.gold.primary }}>{service.isPriveExclusive ? '✦' : '◆'}</div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], flexWrap: 'wrap', marginBottom: spacing[1] }}>
                      <div style={{ fontSize: '15px', color: colors.text.primary }}>{service.name}</div>
                      {service.isPriveExclusive && (
                        <div style={{ backgroundColor: 'rgba(201, 169, 98, 0.15)', padding: `2px ${spacing[2]}`, borderRadius: borderRadius.sm }}>
                          <div style={{ fontSize: '13px', color: colors.gold.primary }}>PRIVÉ</div>
                        </div>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: colors.text.tertiary, marginBottom: spacing[1] }}>{service.duration}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                      <div style={{ fontSize: '13px', color: '#4CAF50' }}>+{service.coinReward} coins</div>
                      <div style={{ fontSize: '13px', color: colors.text.tertiary }}>({Math.round(service.coinReward / service.price * 100)}% back)</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '20px', color: colors.gold.primary, marginBottom: spacing[2] }}>₹{service.price.toLocaleString()}</div>
                    <div style={{ padding: `${spacing[1]} ${spacing[3]}`, borderRadius: borderRadius.md, border: `1px solid ${colors.gold.primary}`, backgroundColor: service.isPriveExclusive ? colors.gold.primary : 'transparent' }}>
                      <div style={{ fontSize: '13px', color: service.isPriveExclusive ? colors.background.primary : colors.gold.primary }}>Book</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[4]} 0` }} />

        {/* Location & Contact */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[4] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>LOCATION & CONTACT</div>
          <div style={{ backgroundColor: colors.background.card, borderRadius: borderRadius.lg, overflow: 'hidden', border: `1px solid ${colors.border.secondary}` }}>
            <div style={{ height: '120px', backgroundColor: '#242424', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '40px' }}>📍</div>
            </div>
            <div style={{ padding: spacing[4] }}>
              <div style={{ fontSize: '15px', color: colors.text.primary, marginBottom: spacing[2] }}>{store.address}</div>
              <div style={{ fontSize: '14px', color: colors.text.secondary, marginBottom: spacing[2] }}>{store.phone}</div>
              <div style={{ fontSize: '14px', color: colors.gold.primary, marginBottom: spacing[3] }}>{store.website}</div>
              <div style={{ display: 'flex', gap: spacing[3] }}>
                <div style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: borderRadius.md, border: `1px solid ${colors.gold.primary}`, fontSize: '14px', color: colors.gold.primary, cursor: 'pointer' }}>Get Directions</div>
                <div style={{ padding: `${spacing[2]} ${spacing[4]}`, borderRadius: borderRadius.md, border: `1px solid ${colors.gold.primary}`, fontSize: '14px', color: colors.gold.primary, cursor: 'pointer' }}>Call</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[4]} 0` }} />

        {/* Amenities */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[4] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>AMENITIES</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
            {store.amenities.map((amenity, index) => (
              <div key={index} style={{ padding: `${spacing[2]} ${spacing[3]}`, backgroundColor: colors.background.card, borderRadius: borderRadius.full, border: `1px solid ${colors.border.secondary}` }}>
                <div style={{ fontSize: '13px', color: colors.text.secondary }}>{amenity}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: colors.border.primary, margin: `${spacing[4]} 0` }} />

        {/* Payment Methods */}
        <div style={{ padding: `0 ${spacing[5]}`, marginBottom: spacing[8] }}>
          <div style={{ fontSize: '11px', color: colors.text.tertiary, letterSpacing: '1.5px', marginBottom: spacing[3] }}>PAYMENT METHODS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
            {store.paymentMethods.map((method, index) => (
              <div key={index} style={{ padding: `${spacing[2]} ${spacing[3]}`, backgroundColor: (method === 'ReZ Coins' || method === 'Privé Coins') ? 'rgba(201, 169, 98, 0.1)' : colors.background.card, borderRadius: borderRadius.full, border: (method === 'ReZ Coins' || method === 'Privé Coins') ? '1px solid rgba(201, 169, 98, 0.2)' : `1px solid ${colors.border.secondary}` }}>
                <div style={{ fontSize: '13px', color: (method === 'ReZ Coins' || method === 'Privé Coins') ? colors.gold.primary : colors.text.secondary }}>{method}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ position: 'fixed', bottom: '100px', left: 0, right: 0, padding: spacing[5], backgroundColor: colors.background.primary, borderTop: `1px solid ${colors.border.primary}` }}>
        <div onClick={() => store.isOnline ? navigate(`/prive/offer/${store.offers[0]?.id}`) : navigate('/prive/visit')} style={{ padding: spacing[4], backgroundColor: colors.gold.primary, borderRadius: borderRadius.xl, textAlign: 'center', fontSize: '20px', color: colors.background.primary, fontWeight: '600', cursor: 'pointer' }}>
          {store.isOnline ? 'Shop Now' : 'Visit & Earn Rewards'}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default PriveStoreDetail;
