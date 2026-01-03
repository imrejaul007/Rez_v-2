/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X4 - Privé Store Detail
 * Premium store page with highlighted Privé offers, discounts, and earnings
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
// LinearGradient will use CSS
import {
  ScreenContainer,
  Text,
  Card,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { ExploreStackParamList } from '../../navigation/types';

interface StoreOffer {
  id: string;
  title: string;
  rewardPercent: string;
  discountPercent?: string;
  conditions?: string;
  expiresIn?: string;
  isPriveExclusive?: boolean;
  coinType?: 'rez' | 'prive' | 'branded';
}

interface StoreProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  coinReward: number;
  isPriveExclusive?: boolean;
}

interface StoreService {
  id: string;
  name: string;
  duration: string;
  price: number;
  coinReward: number;
  isPriveExclusive?: boolean;
}

interface UGCVideo {
  id: string;
  creator: string;
  thumbnail: string;
  views: string;
  duration: string;
}

interface StoreData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  whyPrive: string;
  images: string[];
  distance?: string;
  address?: string;
  phone?: string;
  website?: string;
  hours: string;
  isOpen: boolean;
  isOnline: boolean;
  deliveryTime?: string;
  offers: StoreOffer[];
  products: StoreProduct[];
  services: StoreService[];
  ugcVideos: UGCVideo[];
  amenities: string[];
  paymentMethods: string[];
  // New earnings data
  earningsData: {
    avgCashback: string;
    maxCashback: string;
    totalEarned: number;
    membersSaved: number;
    priveExclusiveOffers: number;
  };
  memberPerks: string[];
}

const defaultStoreData: StoreData = {
  id: '1',
  name: 'The Grand Café',
  category: 'Fine Dining',
  rating: 4.8,
  reviewCount: 324,
  description: 'Established in 1985, The Grand Café has been a cornerstone of fine dining, offering curated experiences that blend tradition with modern gastronomy. Our award-winning chefs create seasonal menus using locally-sourced ingredients.',
  whyPrive: 'Selected for exceptional quality, trusted service, and commitment to the Privé experience.',
  images: [
    'interior',
    'food',
    'ambiance',
    'chef',
  ],
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
    { id: 'o4', title: 'Chef\'s Table Experience', rewardPercent: '50%', discountPercent: '25%', conditions: 'Advance booking', expiresIn: '3 days', isPriveExclusive: true, coinType: 'prive' },
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
    { id: 'v1', creator: 'FoodieRaj', thumbnail: '', views: '12.5K', duration: '0:45' },
    { id: 'v2', creator: 'MumbaiDiaries', thumbnail: '', views: '8.2K', duration: '1:20' },
    { id: 'v3', creator: 'TasteExplorer', thumbnail: '', views: '5.7K', duration: '0:58' },
  ],
  amenities: ['Valet Parking', 'WiFi', 'Live Music', 'Private Rooms', 'Outdoor Seating', 'Wheelchair Accessible'],
  paymentMethods: ['ReZ Coins', 'Privé Coins', 'Cards', 'UPI', 'Cash'],
};

type TabType = 'offers' | 'products' | 'services';

export const X4_StoreDetailScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<ExploreStackParamList, 'X4_StoreDetail'>>();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('offers');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const store = defaultStoreData;

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'offers', label: 'Offers', count: store.offers.length },
    { id: 'products', label: 'Products', count: store.products.length },
    { id: 'services', label: 'Services', count: store.services.length },
  ];

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div
          style={style={{...styles.headerBtn}
          onClick={() => navigate(-1)}
        >
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>

        <div
          style={style={{...styles.headerBtn}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <span variant="bodyLarge" color={isBookmarked ? colors.gold.primary : colors.text.secondary}>
            {isBookmarked ? '★' : '☆'}
          </span>
        </div>
      </div>

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* IMAGE GALLERY */}
        {/* ============================================ */}
        <div style={style={{...styles.imageGallery}>
          <div style={style={{...styles.mainImage}>
            <LinearGradient
              colors={['transparent', 'rgba(10,10,10,0.8)']}
              style={style={{...styles.imageGradient}
            />
            <span style={style={{...styles.imagePlaceholder}>{store.name.charAt(0)}</span>
          </div>
          <div
            horizontal
            
            style={style={{...styles.thumbnailScroll}
            contentContainerStyle={style={{...styles.thumbnailContainer}
          >
            {store.images.map((img, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.thumbnail,
                  activeImageIndex === index && style={{...styles.thumbnailActive,
                ]}
                onClick={() => setActiveImageIndex(index)}
              >
                <span style={style={{...styles.thumbnailText}>{index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================ */}
        {/* STORE INFO */}
        {/* ============================================ */}
        <div style={style={{...styles.storeInfo}>
          <div style={style={{...styles.storeHeader}>
            <div style={style={{...styles.storeHeaderLeft}>
              <div style={style={{...styles.priveBadge}>
                <span variant="caption" gold>Privé Partner</span>
              </div>
              <span variant="h2" color={colors.text.primary}>{store.name}</span>
              <span variant="body" color={colors.text.tertiary}>{store.category}</span>
            </div>
          </div>

          {/* Rating & Stats */}
          <div style={style={{...styles.statsRow}>
            <div style={style={{...styles.statItem}>
              <span variant="bodyLarge" gold>★ {store.rating}</span>
              <span variant="caption" color={colors.text.tertiary}>({store.reviewCount} reviews)</span>
            </div>
            <div style={style={{...styles.statDivider} />
            <div style={style={{...styles.statItem}>
              <span variant="bodyLarge" color={colors.text.primary}>{store.distance}</span>
              <span variant="caption" color={colors.text.tertiary}>away</span>
            </div>
            <div style={style={{...styles.statDivider} />
            <div style={style={{...styles.statItem}>
              <span variant="bodyLarge" color={store.isOpen ? '#4CAF50' : '#F44336'}>
                {store.isOpen ? 'Open' : 'Closed'}
              </span>
              <span variant="caption" color={colors.text.tertiary}>{store.hours}</span>
            </div>
          </div>

          {/* Description */}
          <span variant="body" color={colors.text.secondary} style={style={{...styles.description}>
            {store.description}
          </span>

          {/* ============================================ */}
          {/* EARNINGS HIGHLIGHT CARD - NEW */}
          {/* ============================================ */}
          <div style={style={{...styles.earningsHighlightCard}>
            <LinearGradient
              colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
              style={style={{...styles.earningsGradient}
            >
              <div style={style={{...styles.earningsHeader}>
                <div style={style={{...styles.earningsIcon}>
                  <span style={style={{...styles.earningsIconText}>◈</span>
                </div>
                <div style={style={{...styles.earningsHeaderText}>
                  <span variant="label" gold>PRIVÉ MEMBER EARNINGS</span>
                  <span variant="caption" color={colors.text.tertiary}>Exclusive rewards at this store</span>
                </div>
              </div>

              <div style={style={{...styles.earningsGrid}>
                <div style={style={{...styles.earningsItem}>
                  <span style={style={{...styles.earningsValue}>{store.earningsData.avgCashback}</span>
                  <span variant="caption" color={colors.text.tertiary}>Avg. Cashback</span>
                </div>
                <div style={style={{...styles.earningsItemDivider} />
                <div style={style={{...styles.earningsItem}>
                  <span style={[style={{...styles.earningsValue, { color: '#4CAF50' }]}>
                    {store.earningsData.maxCashback}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>Max Cashback</span>
                </div>
                <div style={style={{...styles.earningsItemDivider} />
                <div style={style={{...styles.earningsItem}>
                  <span style={style={{...styles.earningsValue}>{store.earningsData.priveExclusiveOffers}</span>
                  <span variant="caption" color={colors.text.tertiary}>Exclusive Offers</span>
                </div>
              </div>

              <div style={style={{...styles.earningsStats}>
                <div style={style={{...styles.earningStat}>
                  <span variant="caption" color={colors.text.tertiary}>Total earned by members</span>
                  <span variant="body" gold>₹{store.earningsData.totalEarned.toLocaleString()}</span>
                </div>
                <div style={style={{...styles.earningStat}>
                  <span variant="caption" color={colors.text.tertiary}>Members saved</span>
                  <span variant="body" color="#4CAF50">{store.earningsData.membersSaved}+</span>
                </div>
              </div>
            </LinearGradient>
          </div>

          {/* ============================================ */}
          {/* MEMBER PERKS - NEW */}
          {/* ============================================ */}
          <div style={style={{...styles.memberPerksCard}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.perksLabel}>
              PRIVÉ MEMBER PERKS
            </span>
            {store.memberPerks.map((perk, index) => (
              <div key={index} style={style={{...styles.perkItem}>
                <span variant="body" gold style={style={{...styles.perkBullet}>✦</span>
                <span variant="bodySmall" color={colors.text.secondary}>{perk}</span>
              </div>
            ))}
          </div>

          {/* Why Privé */}
          <div style={style={{...styles.whyPriveCard}>
            <span variant="caption" gold style={style={{...styles.whyPriveLabel}>WHY THIS STORE IS IN PRIVÉ</span>
            <span variant="bodySmall" color={colors.text.tertiary}>{store.whyPrive}</span>
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* UGC VIDEOS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary}>COMMUNITY VIDEOS</span>
            <div>
              <span variant="caption" gold>See All</span>
            </div>
          </div>

          <div
            horizontal
            
            contentContainerStyle={style={{...styles.ugcScroll}
          >
            {store.ugcVideos.map((video) => (
              <div key={video.id} style={style={{...styles.ugcCard}>
                <div style={style={{...styles.ugcThumbnail}>
                  <span style={style={{...styles.ugcPlayIcon}>▶</span>
                  <div style={style={{...styles.ugcDuration}>
                    <span variant="caption" color="#FFFFFF">{video.duration}</span>
                  </div>
                </div>
                <div style={style={{...styles.ugcInfo}>
                  <span variant="bodySmall" color={colors.text.primary}>@{video.creator}</span>
                  <span variant="caption" color={colors.text.tertiary}>{video.views} views</span>
                </div>
              </div>
            ))}

            {/* Add Your Video CTA */}
            <div
              style={style={{...styles.addVideoCard}
              onClick={() => navigate('/prive/Offers', {
                screen: 'C6_ContentSubmission',
                params: { type: 'video', brandName: store.name }
              })}
            >
              <span style={style={{...styles.addVideoIcon}>+</span>
              <span variant="bodySmall" color={colors.gold.primary}>Add Your Video</span>
              <span variant="caption" color={colors.text.tertiary}>Earn +100 coins</span>
            </div>
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* TABS: OFFERS / PRODUCTS / SERVICES */}
        {/* ============================================ */}
        <div style={style={{...styles.tabsContainer}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={[style={{...styles.tab, activeTab === tab.id && style={{...styles.tabActive]}
              onClick={() => setActiveTab(tab.id)}
            >
              <Text
                variant="body"
                color={activeTab === tab.id ? colors.gold.primary : colors.text.tertiary}
              >
                {tab.label}
              </span>
              <div style={[style={{...styles.tabBadge, activeTab === tab.id && style={{...styles.tabBadgeActive]}>
                <span variant="caption" color={activeTab === tab.id ? colors.gold.primary : colors.text.tertiary}>
                  {tab.count}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OFFERS TAB */}
        {activeTab === 'offers' && (
          <div style={style={{...styles.tabContent}>
            {/* Privé Exclusive Offers First */}
            {store.offers.filter(o => o.isPriveExclusive).length > 0 && (
              <div style={style={{...styles.exclusiveOffersSection}>
                <div style={style={{...styles.exclusiveHeader}>
                  <span variant="caption" gold>✦ PRIVÉ EXCLUSIVE</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {store.offers.filter(o => o.isPriveExclusive).length} member-only offers
                  </span>
                </div>
              </div>
            )}

            {store.offers.map((offer) => (
              <div
                key={offer.id}
                style={[
                  style={{...styles.offerCard,
                  offer.isPriveExclusive && style={{...styles.offerCardExclusive,
                ]}
                onClick={() => navigate('/prive/X5_OfferDetail', { offerId: offer.id })}
              >
                {/* Exclusive Badge */}
                {offer.isPriveExclusive && (
                  <div style={style={{...styles.exclusiveBadge}>
                    <span variant="caption" gold>✦ PRIVÉ</span>
                  </div>
                )}

                <div style={style={{...styles.offerLeft}>
                  <span variant="body" color={colors.text.primary}>{offer.title}</span>

                  {/* Discount Badge - NEW */}
                  {offer.discountPercent && (
                    <div style={style={{...styles.discountBadge}>
                      <span variant="caption" color="#FFFFFF">
                        {offer.discountPercent} OFF
                      </span>
                    </div>
                  )}

                  {offer.conditions && (
                    <span variant="caption" color={colors.text.tertiary}>{offer.conditions}</span>
                  )}
                  {offer.expiresIn && (
                    <span variant="caption" color="#FFC107">Expires in {offer.expiresIn}</span>
                  )}
                </div>

                <div style={style={{...styles.offerRight}>
                  {/* Coin Type Indicator */}
                  <div style={[
                    style={{...styles.coinTypeBadge,
                    { backgroundColor: offer.coinType === 'prive' ? 'rgba(184, 134, 11, 0.2)' : 'rgba(201, 169, 98, 0.2)' }
                  ]}>
                    <Text
                      variant="caption"
                      color={offer.coinType === 'prive' ? '#B8860B' : colors.gold.primary}
                    >
                      {offer.coinType === 'prive' ? 'Privé' : 'ReZ'}
                    </span>
                  </div>
                  <span variant="h3" gold>{offer.rewardPercent}</span>
                  <span variant="caption" color={colors.text.tertiary}>cashback</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div style={style={{...styles.tabContent}>
            <div style={style={{...styles.productsGrid}>
              {store.products.map((product) => {
                const discount = product.originalPrice
                  ? Math.round((1 - product.price / product.originalPrice) * 100)
                  : 0;

                return (
                  <div
                    key={product.id}
                    style={[
                      style={{...styles.productCard,
                      product.isPriveExclusive && style={{...styles.productCardExclusive,
                    ]}
                    onClick={() => navigate('/prive/ProductDetail', { productId: product.id })}
                  >
                    <div style={style={{...styles.productImage}>
                      <span style={style={{...styles.productInitial}>{product.name.charAt(0)}</span>

                      {/* Privé Exclusive Badge */}
                      {product.isPriveExclusive && (
                        <div style={style={{...styles.productExclusiveBadge}>
                          <span variant="caption" gold>✦</span>
                        </div>
                      )}

                      {/* Discount Badge */}
                      {discount > 0 && (
                        <div style={style={{...styles.productDiscountBadge}>
                          <span variant="caption" color="#FFFFFF">{discount}%</span>
                        </div>
                      )}
                    </div>

                    <span variant="caption" color={colors.text.tertiary}>{product.category}</span>
                    <span variant="bodySmall" color={colors.text.primary} numberOfLines={2}>
                      {product.name}
                    </span>

                    <div style={style={{...styles.productPriceRow}>
                      <span variant="body" gold>₹{product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span style={style={{...styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>

                    {/* Earnings Badge */}
                    <div style={style={{...styles.productEarningsBadge}>
                      <span variant="caption" color="#4CAF50">+{product.coinReward} coins</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SERVICES TAB */}
        {activeTab === 'services' && (
          <div style={style={{...styles.tabContent}>
            {store.services.map((service) => (
              <div
                key={service.id}
                style={[
                  style={{...styles.serviceCard,
                  service.isPriveExclusive && style={{...styles.serviceCardExclusive,
                ]}
                onClick={() => navigate('/prive/ServiceDetail', {
                  serviceId: service.id,
                  storeName: store.name,
                })}
              >
                <div style={[
                  style={{...styles.serviceIcon,
                  service.isPriveExclusive && style={{...styles.serviceIconExclusive,
                ]}>
                  <span style={style={{...styles.serviceIconText}>
                    {service.isPriveExclusive ? '✦' : '◆'}
                  </span>
                </div>
                <div style={style={{...styles.serviceInfo}>
                  <div style={style={{...styles.serviceNameRow}>
                    <span variant="body" color={colors.text.primary}>{service.name}</span>
                    {service.isPriveExclusive && (
                      <div style={style={{...styles.serviceExclusiveBadge}>
                        <span variant="caption" gold>PRIVÉ</span>
                      </div>
                    )}
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>{service.duration}</span>
                  {/* Enhanced Earnings Display */}
                  <div style={style={{...styles.serviceEarnings}>
                    <span variant="caption" color="#4CAF50">
                      +{service.coinReward} coins
                    </span>
                    <span variant="caption" color={colors.text.tertiary}>
                      ({Math.round(service.coinReward / service.price * 100)}% back)
                    </span>
                  </div>
                </div>
                <div style={style={{...styles.servicePrice}>
                  <span variant="bodyLarge" gold>₹{service.price.toLocaleString()}</span>
                  <div style={[
                    style={{...styles.bookBtn,
                    service.isPriveExclusive && style={{...styles.bookBtnExclusive,
                  ]}>
                    <span variant="caption" color={service.isPriveExclusive ? '#0A0A0A' : colors.gold.primary}>
                      Book
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* LOCATION & CONTACT */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            LOCATION & CONTACT
          </span>

          <div style={style={{...styles.locationCard}>
            <div style={style={{...styles.locationMap}>
              <span style={style={{...styles.mapPlaceholder}>📍</span>
            </div>
            <div style={style={{...styles.locationDetails}>
              <span variant="body" color={colors.text.primary}>{store.address}</span>
              <span variant="bodySmall" color={colors.text.secondary}>{store.phone}</span>
              <span variant="bodySmall" gold>{store.website}</span>

              <div style={style={{...styles.locationActions}>
                <div style={style={{...styles.locationBtn}>
                  <span variant="bodySmall" gold>Get Directions</span>
                </div>
                <div style={style={{...styles.locationBtn}>
                  <span variant="bodySmall" gold>Call</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* AMENITIES */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            AMENITIES
          </span>
          <div style={style={{...styles.amenitiesGrid}>
            {store.amenities.map((amenity, index) => (
              <div key={index} style={style={{...styles.amenityChip}>
                <span variant="caption" color={colors.text.secondary}>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <Divider variant="light" spacing={spacing[4]} />

        {/* ============================================ */}
        {/* PAYMENT METHODS */}
        {/* ============================================ */}
        <div style={style={{...styles.section}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            PAYMENT METHODS
          </span>
          <div style={style={{...styles.paymentMethods}>
            {store.paymentMethods.map((method, index) => (
              <div
                key={index}
                style={[
                  style={{...styles.paymentChip,
                  (method === 'ReZ Coins' || method === 'Privé Coins') && style={{...styles.paymentChipGold,
                ]}
              >
                <Text
                  variant="caption"
                  color={(method === 'ReZ Coins' || method === 'Privé Coins') ? colors.gold.primary : colors.text.secondary}
                >
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>

      {/* ============================================ */}
      {/* CTA BUTTON */}
      {/* ============================================ */}
      <div style={style={{...styles.ctaContainer}>
        <div
          style={style={{...styles.ctaButton}
          onClick={() => {}}
          onClick={() => {
            if (store.isOnline) {
              navigate('/prive/X5_OfferDetail', { offerId: store.offers[0]?.id || '1' };
            } else {
              navigate('/prive/StoreVisit', { storeId: store.id };
            }
          }}
        >
          <span variant="bodyLarge" color={colors.background.primary}>
            {store.isOnline ? 'Shop Now' : 'Visit & Earn Rewards'}
          </span>
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[2],
    paddingBottom: spacing[2],
  },
  headerBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.background.card,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollContent: {
    paddingBottom: 120,
  },

  // Image Gallery
  imageGallery: {
    marginBottom: spacing[4],
  },
  mainImage: {
    width: window.innerWidth,
    height: 250,
    backgroundColor: '#181818',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  imagePlaceholder: {
    fontSize: 72,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  thumbnailScroll: {
    marginTop: spacing[3],
  },
  thumbnailContainer: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.md,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[2],
  },
  thumbnailActive: {
    borderWidth: 2,
    borderColor: colors.gold.primary,
  },
  thumbnailText: {
    color: colors.text.tertiary,
    fontSize: 16,
  },

  // Store Info
  storeInfo: {
    paddingHorizontal: spacing[5],
  },
  storeHeader: {
    marginBottom: spacing[4],
  },
  storeHeaderLeft: {
    gap: spacing[1],
  },
  priveBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    backgroundColor: colors.transparent.gold10,
    borderRadius: borderRadius.full,
    marginBottom: spacing[2],
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[4],
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#2A2A2A',
  },
  description: {
    lineHeight: 24,
    marginBottom: spacing[4],
  },
  whyPriveCard: {
    backgroundColor: colors.transparent.gold10,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    gap: spacing[2],
  },
  whyPriveLabel: {
    letterSpacing: 1,
  },

  // Earnings Highlight Card - NEW
  earningsHighlightCard: {
    marginTop: spacing[4],
    marginBottom: spacing[4],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  earningsGradient: {
    padding: spacing[5],
  },
  earningsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[4],
  },
  earningsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  earningsIconText: {
    fontSize: 22,
    color: colors.gold.primary,
  },
  earningsHeaderText: {
    flex: 1,
    gap: spacing[1],
  },
  earningsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing[4],
  },
  earningsItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  earningsItemDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  earningsValue: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.gold.primary,
  },
  earningsStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  earningStat: {
    alignItems: 'center',
    gap: spacing[1],
  },

  // Member Perks - NEW
  memberPerksCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[4],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  perksLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },
  perkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[2],
  },
  perkBullet: {
    fontSize: 14,
  },

  // Section
  section: {
    paddingHorizontal: spacing[5],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  sectionLabel: {
    letterSpacing: 1,
    marginBottom: spacing[3],
  },

  // UGC Videos
  ugcScroll: {
    gap: spacing[3],
  },
  ugcCard: {
    width: 140,
  },
  ugcThumbnail: {
    width: 140,
    height: 180,
    backgroundColor: '#242424',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  ugcPlayIcon: {
    fontSize: 32,
    color: colors.text.primary,
  },
  ugcDuration: {
    position: 'absolute',
    bottom: spacing[2],
    right: spacing[2],
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  ugcInfo: {
    gap: spacing[1],
  },
  addVideoCard: {
    width: 140,
    height: 180,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    borderStyle: 'dashed',
    gap: spacing[2],
  },
  addVideoIcon: {
    fontSize: 32,
    color: colors.gold.primary,
  },

  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing[5],
    marginBottom: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[1],
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing[3],
    gap: spacing[2],
    borderRadius: borderRadius.md,
  },
  tabActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
  },
  tabBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: '#242424',
    borderRadius: borderRadius.full,
  },
  tabBadgeActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
  },
  tabContent: {
    paddingHorizontal: spacing[5],
  },

  // Exclusive Offers Section - NEW
  exclusiveOffersSection: {
    marginBottom: spacing[3],
  },
  exclusiveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },

  // Offers
  offerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    position: 'relative',
    overflow: 'hidden',
  },
  offerCardExclusive: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
    backgroundColor: 'rgba(201, 169, 98, 0.05)',
  },
  exclusiveBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderBottomLeftRadius: borderRadius.md,
  },
  discountBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E53935',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    marginTop: spacing[1],
  },
  coinTypeBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    marginBottom: spacing[1],
  },
  offerLeft: {
    flex: 1,
    gap: spacing[1],
  },
  offerRight: {
    alignItems: 'center',
    gap: spacing[1],
  },

  // Products
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  productCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[1],
  },
  productCardExclusive: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
    backgroundColor: 'rgba(201, 169, 98, 0.03)',
  },
  productImage: {
    height: 100,
    backgroundColor: '#242424',
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
    position: 'relative',
  },
  productInitial: {
    fontSize: 32,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  productExclusiveBadge: {
    position: 'absolute',
    top: spacing[2],
    left: spacing[2],
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  productDiscountBadge: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    backgroundColor: '#E53935',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  productPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  originalPrice: {
    fontSize: 12,
    color: colors.text.tertiary,
    textDecorationLine: 'line-through',
  },
  productEarningsBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },

  // Services
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  serviceCardExclusive: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
    backgroundColor: 'rgba(201, 169, 98, 0.03)',
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIconExclusive: {
    backgroundColor: 'rgba(201, 169, 98, 0.25)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.4)',
  },
  serviceIconText: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  serviceInfo: {
    flex: 1,
    gap: spacing[1],
  },
  serviceNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    flexWrap: 'wrap',
  },
  serviceExclusiveBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  serviceEarnings: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  servicePrice: {
    alignItems: 'flex-end',
    gap: spacing[2],
  },
  bookBtn: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },
  bookBtnExclusive: {
    backgroundColor: colors.gold.primary,
    borderColor: colors.gold.primary,
  },

  // Location
  locationCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  locationMap: {
    height: 120,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholder: {
    fontSize: 40,
  },
  locationDetails: {
    padding: spacing[4],
    gap: spacing[2],
  },
  locationActions: {
    flexDirection: 'row',
    gap: spacing[3],
    marginTop: spacing[2],
  },
  locationBtn: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gold.primary,
  },

  // Amenities
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  amenityChip: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },

  // Payment Methods
  paymentMethods: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  paymentChip: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  paymentChipGold: {
    backgroundColor: colors.transparent.gold10,
    borderColor: colors.border.goldMuted,
  },

  bottomSpace: {
    height: spacing[8],
  },

  ctaContainer: {
    position: 'absolute',
    bottom: floatingTabBarTotalHeight,
    left: 0,
    right: 0,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    backgroundColor: colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
  ctaButton: {
    backgroundColor: colors.gold.primary,
    paddingVertical: spacing[4],
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },
};

export default X4_StoreDetailScreen;
