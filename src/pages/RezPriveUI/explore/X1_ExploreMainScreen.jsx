/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X1 - Privé Explore (Complete Marketplace)
 * All stores, products, services - online & offline
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// Categories
const categories = [
  { id: 'all', name: 'All', icon: '◎' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'fashion', name: 'Fashion', icon: '👔' },
  { id: 'wellness', name: 'Wellness', icon: '🧘' },
  { id: 'luxury', name: 'Luxury', icon: '💎' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'beauty', name: 'Beauty', icon: '💄' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'home', name: 'Home', icon: '🏠' },
  { id: 'experiences', name: 'Experiences', icon: '🎭' },
];

// Featured offers
const featuredOffers = [
  {
    id: 'f1',
    brand: 'The Oberoi',
    title: 'Private Dining Experience',
    subtitle: 'Exclusive 7-course tasting menu',
    coins: 2500,
    coinType: 'prive',
    image: '🏨',
    category: 'dining',
    isLimited: true,
    expiresIn: 3,
  },
  {
    id: 'f2',
    brand: 'Louis Vuitton',
    title: 'Early Collection Access',
    subtitle: 'Pre-launch exclusive for Privé',
    coins: 5000,
    coinType: 'prive',
    image: '👜',
    category: 'luxury',
    isLimited: true,
    expiresIn: 7,
  },
  {
    id: 'f3',
    brand: 'Four Seasons Spa',
    title: 'Ultimate Wellness Day',
    subtitle: 'Full day retreat package',
    coins: 3000,
    coinType: 'prive',
    image: '🧖',
    category: 'wellness',
    isLimited: false,
    expiresIn: 14,
  },
];

// Nearby stores (offline)
const nearbyStores = [
  { id: 's1', name: 'Luxury Café', initial: 'L', category: 'Dining', distance: '0.5 km', rating: 4.8, offers: 3, isOpen: true },
  { id: 's2', name: 'Premium Spa', initial: 'P', category: 'Wellness', distance: '1.2 km', rating: 4.9, offers: 2, isOpen: true },
  { id: 's3', name: 'Artisan Watch Co', initial: 'A', category: 'Luxury', distance: '2.1 km', rating: 4.7, offers: 1, isOpen: false },
  { id: 's4', name: 'Urban Bistro', initial: 'U', category: 'Dining', distance: '0.8 km', rating: 4.6, offers: 2, isOpen: true },
  { id: 's5', name: 'Fashion House', initial: 'F', category: 'Fashion', distance: '1.5 km', rating: 4.5, offers: 4, isOpen: true },
];

// Online stores
const onlineStores = [
  { id: 'o1', name: 'Maison de Luxe', initial: 'M', category: 'Fashion', offers: 8, rating: 4.9, freeShipping: true },
  { id: 'o2', name: 'Tech Elite', initial: 'T', category: 'Electronics', offers: 12, rating: 4.7, freeShipping: true },
  { id: 'o3', name: 'Beauty Luxe', initial: 'B', category: 'Beauty', offers: 6, rating: 4.8, freeShipping: false },
  { id: 'o4', name: 'Home Artisan', initial: 'H', category: 'Home', offers: 5, rating: 4.6, freeShipping: true },
  { id: 'o5', name: 'Gourmet Goods', initial: 'G', category: 'Dining', offers: 4, rating: 4.8, freeShipping: false },
];

// Products
const trendingProducts = [
  { id: 'p1', name: 'Heritage Watch', brand: 'Artisan Watch Co', price: '₹85,000', coins: 4250, category: 'Luxury' },
  { id: 'p2', name: 'Silk Scarf Collection', brand: 'Maison de Luxe', price: '₹12,500', coins: 625, category: 'Fashion' },
  { id: 'p3', name: 'Wellness Hamper', brand: 'Premium Spa', price: '₹8,000', coins: 400, category: 'Wellness' },
  { id: 'p4', name: 'Artisan Coffee Set', brand: 'Gourmet Goods', price: '₹4,500', coins: 225, category: 'Home' },
];

// Services
const popularServices = [
  { id: 'sv1', name: 'Personal Styling', provider: 'Fashion House', duration: '2 hours', coins: 800, rating: 4.9 },
  { id: 'sv2', name: 'Spa Retreat', provider: 'Premium Spa', duration: 'Full day', coins: 1500, rating: 4.8 },
  { id: 'sv3', name: 'Private Chef', provider: 'Luxury Café', duration: '4 hours', coins: 2000, rating: 4.9 },
  { id: 'sv4', name: 'Concierge Travel', provider: 'Privé Concierge', duration: 'Custom', coins: 500, rating: 5.0 },
];

// All offers
const allOffers = [
  { id: 'ao1', brand: 'Luxury Café', title: 'Weekend Brunch', coins: 400, type: 'visit', daysLeft: 11 },
  { id: 'ao2', brand: 'Fashion House', title: '20% Off New Arrivals', coins: 300, type: 'purchase', daysLeft: 5 },
  { id: 'ao3', brand: 'Premium Spa', title: 'Couples Massage', coins: 600, type: 'visit', daysLeft: 21 },
  { id: 'ao4', brand: 'Tech Elite', title: 'Gadget Preview', coins: 250, type: 'content', daysLeft: 8 },
  { id: 'ao5', brand: 'Urban Bistro', title: "Chef's Special", coins: 350, type: 'visit', daysLeft: 14 },
  { id: 'ao6', brand: 'Beauty Luxe', title: 'Skincare Bundle', coins: 450, type: 'purchase', daysLeft: 9 },
];

export const X1_ExploreMainScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCoinColor = (type: string) => {
    switch (type) {
      case 'prive': return '#B8860B';
      case 'branded': return '#8B7355';
      default: return colors.gold.primary;
    }
  };

  return (
    <div style={style={{...styles.container}>
      <div
        style={style={{...styles.scrollView}
        contentContainerStyle={style={{...styles.scrollContent}
        
      >
        {/* Header */}
        <div style={style={{...styles.header}>
          <div>
            <span variant="h2" style={style={{...styles.headerTitle}>Explore</span>
            <span variant="caption" color={colors.text.tertiary}>
              Discover exclusive stores & offers
            </span>
          </div>
          <div
            style={style={{...styles.mapButton}
            onClick={() => navigate('/prive/X7_MapView')}
          >
            <span style={style={{...styles.mapIcon}>🗺️</span>
          </div>
        </div>

        {/* Search Bar */}
        <div style={style={{...styles.searchContainer}>
          <div style={style={{...styles.searchBar}>
            <span style={style={{...styles.searchIcon}>🔍</span>
            <TextInput
              style={style={{...styles.searchInput}
              placeholder="Search stores, products, services..."
              placeholderTextColor={colors.text.tertiary}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </div>
          <div
            style={style={{...styles.aiButton}
            onClick={() => navigate('/prive/X6_CompareDecision')}
          >
            <span style={style={{...styles.aiIcon}>✨</span>
          </div>
        </div>

        {/* Categories */}
        <div
          horizontal
          
          contentContainerStyle={style={{...styles.categoriesScroll}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              style={[
                style={{...styles.categoryChip,
                activeCategory === cat.id && style={{...styles.categoryChipActive,
              ]}
              onClick={() => {
                setActiveCategory(cat.id);
                if (cat.id !== 'all') {
                  navigate('/prive/X2_CategoryExplore', {
                    categoryId: cat.id,
                    categoryName: cat.name,
                  };
                }
              }}
            >
              <span style={style={{...styles.categoryEmoji}>{cat.icon}</span>
              <Text
                variant="caption"
                color={activeCategory === cat.id ? colors.gold.primary : colors.text.secondary}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Offers Carousel */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.featuredIcon}>⭐</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                FEATURED
              </span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.featuredScroll}
          >
            {featuredOffers.map((offer) => (
              <div
                key={offer.id}
                style={style={{...styles.featuredCard}
                onClick={() => navigate('/prive/X5_OfferDetail', { offerId: offer.id })}
                onClick={() => {}}
              >
                <LinearGradient
                  colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)', '#141414']}
                  style={style={{...styles.featuredGradient}
                >
                  <div style={style={{...styles.featuredTop}>
                    <span style={style={{...styles.featuredEmoji}>{offer.image}</span>
                    {offer.isLimited && (
                      <div style={style={{...styles.limitedBadge}>
                        <span style={style={{...styles.limitedText}>{offer.expiresIn}d left</span>
                      </div>
                    )}
                  </div>
                  <span variant="caption" gold>{offer.brand}</span>
                  <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.featuredTitle}>
                    {offer.title}
                  </span>
                  <span variant="caption" color={colors.text.tertiary} numberOfLines={1}>
                    {offer.subtitle}
                  </span>
                  <div style={style={{...styles.featuredFooter}>
                    <span variant="body" style={{ color: getCoinColor(offer.coinType) }}>
                      {offer.coins.toLocaleString()} coins
                    </span>
                  </div>
                </LinearGradient>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Stores */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.locationIcon}>📍</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                NEARBY STORES
              </span>
            </div>
            <div onClick={() => navigate('/prive/X3_StoreListing', { filter: 'nearMe' })}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.storesScroll}
          >
            {nearbyStores.map((store) => (
              <div
                key={store.id}
                style={style={{...styles.storeCard}
                onClick={() => navigate('/prive/X4_StoreDetail', { storeId: store.id })}
              >
                <div style={style={{...styles.storeHeader}>
                  <div style={style={{...styles.storeInitial}>
                    <span style={style={{...styles.storeInitialText}>{store.initial}</span>
                  </div>
                  <div style={[style={{...styles.openBadge, !store.isOpen && style={{...styles.closedBadge]}>
                    <span style={[style={{...styles.openText, !store.isOpen && style={{...styles.closedText]}>
                      {store.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </div>
                </div>
                <span variant="body" color={colors.text.primary} numberOfLines={1}>
                  {store.name}
                </span>
                <span variant="caption" color={colors.text.tertiary}>{store.category}</span>
                <div style={style={{...styles.storeFooter}>
                  <div style={style={{...styles.ratingBadge}>
                    <span style={style={{...styles.starIcon}>★</span>
                    <span variant="caption" color={colors.text.primary}>{store.rating}</span>
                  </div>
                  <span variant="caption" color={colors.text.tertiary}>{store.distance}</span>
                </div>
                <div style={style={{...styles.offersBadge}>
                  <span style={style={{...styles.offersBadgeText}>{store.offers} offers</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Stores */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.onlineIcon}>🌐</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                SHOP ONLINE
              </span>
            </div>
            <div onClick={() => navigate('/prive/X3_StoreListing', { filter: 'online' })}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div style={style={{...styles.onlineStoresGrid}>
            {onlineStores.slice(0, 4).map((store) => (
              <div
                key={store.id}
                style={style={{...styles.onlineStoreCard}
                onClick={() => navigate('/prive/X4_StoreDetail', { storeId: store.id })}
              >
                <div style={style={{...styles.onlineStoreInitial}>
                  <span style={style={{...styles.onlineStoreInitialText}>{store.initial}</span>
                </div>
                <span variant="body" color={colors.text.primary} numberOfLines={1}>
                  {store.name}
                </span>
                <span variant="caption" color={colors.text.tertiary}>{store.category}</span>
                <div style={style={{...styles.onlineStoreFooter}>
                  <span variant="caption" gold>{store.offers} offers</span>
                  {store.freeShipping && (
                    <span style={style={{...styles.freeShipBadge}>Free Ship</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Products */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.productIcon}>🛍️</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                TRENDING PRODUCTS
              </span>
            </div>
            <div onClick={() => navigate('/prive/X3_StoreListing', { filter: 'online' })}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.productsScroll}
          >
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                style={style={{...styles.productCard}
                onClick={() => navigate('/prive/ProductDetail', { productId: product.id })}
              >
                <div style={style={{...styles.productImage}>
                  <span style={style={{...styles.productEmoji}>📦</span>
                </div>
                <div style={style={{...styles.productInfo}>
                  <span variant="caption" color={colors.text.tertiary}>{product.brand}</span>
                  <span variant="body" color={colors.text.primary} numberOfLines={1}>
                    {product.name}
                  </span>
                  <span variant="body" gold>{product.price}</span>
                  <div style={style={{...styles.productEarnings}>
                    <span variant="caption" color="#4CAF50">+{product.coins} coins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.serviceIcon}>✨</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                SERVICES
              </span>
            </div>
            <div onClick={() => navigate('/prive/X3_StoreListing', { filter: 'nearMe' })}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div style={style={{...styles.servicesGrid}>
            {popularServices.map((service) => (
              <div
                key={service.id}
                style={style={{...styles.serviceCard}
                onClick={() => navigate('/prive/ServiceDetail', { serviceId: service.id })}
              >
                <div style={style={{...styles.serviceHeader}>
                  <span variant="body" color={colors.text.primary}>{service.name}</span>
                  <div style={style={{...styles.serviceRating}>
                    <span style={style={{...styles.starIconSmall}>★</span>
                    <span variant="caption" color={colors.text.primary}>{service.rating}</span>
                  </div>
                </div>
                <span variant="caption" color={colors.text.tertiary}>{service.provider}</span>
                <div style={style={{...styles.serviceFooter}>
                  <span variant="caption" color={colors.text.tertiary}>{service.duration}</span>
                  <div style={style={{...styles.serviceCoins}>
                    <span variant="body" gold>{service.coins}</span>
                    <span variant="caption" color={colors.text.tertiary}>coins</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Active Offers */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.offersIcon}>🎁</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                ALL OFFERS
              </span>
            </div>
            <div onClick={() => navigate('/prive/Offers')}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div style={style={{...styles.offersGrid}>
            {allOffers.map((offer) => (
              <div
                key={offer.id}
                style={style={{...styles.offerCard}
                onClick={() => navigate('/prive/X5_OfferDetail', { offerId: offer.id })}
              >
                <div style={style={{...styles.offerHeader}>
                  <span variant="body" color={colors.text.primary} numberOfLines={1}>
                    {offer.brand}
                  </span>
                  <span variant="caption" color={offer.daysLeft <= 7 ? '#FF6B6B' : colors.text.tertiary}>
                    {offer.daysLeft}d
                  </span>
                </div>
                <span variant="caption" color={colors.text.tertiary} numberOfLines={1}>
                  {offer.title}
                </span>
                <div style={style={{...styles.offerFooter}>
                  <div style={style={{...styles.typeBadge}>
                    <span style={style={{...styles.typeBadgeText}>{offer.type}</span>
                  </div>
                  <span variant="body" gold>{offer.coins}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Discovery CTA */}
        <div
          style={style={{...styles.smartCta}
          onClick={() => navigate('/prive/X6_CompareDecision')}
        >
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.12)', 'rgba(201, 169, 98, 0.04)']}
            style={style={{...styles.smartCtaGradient}
          >
            <div style={style={{...styles.smartCtaIcon}>
              <span style={style={{...styles.smartCtaEmoji}>🤖</span>
            </div>
            <div style={style={{...styles.smartCtaContent}>
              <span variant="body" color={colors.text.primary}>AI-Powered Discovery</span>
              <span variant="caption" color={colors.text.tertiary}>
                Tell us what you need, we'll find it
              </span>
            </div>
            <span variant="body" gold>→</span>
          </LinearGradient>
        </div>

        <div style={style={{...styles.bottomSpace} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.text.primary,
  },
  mapButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  mapIcon: {
    fontSize: 20,
  },

  // Search
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing[5],
    marginTop: spacing[4],
    gap: spacing[3],
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing[4],
    height: 48,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing[2],
  },
  searchInput: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 14,
  },
  aiButton: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  aiIcon: {
    fontSize: 20,
  },

  // Categories
  categoriesScroll: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    gap: spacing[2],
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[2],
    gap: spacing[2],
  },
  categoryChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  categoryEmoji: {
    fontSize: 14,
  },

  // Section
  section: {
    marginTop: spacing[5],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  sectionLabel: {
    letterSpacing: 1.5,
  },
  featuredIcon: { fontSize: 14 },
  locationIcon: { fontSize: 14 },
  onlineIcon: { fontSize: 14 },
  productIcon: { fontSize: 14 },
  serviceIcon: { fontSize: 14 },
  offersIcon: { fontSize: 14 },

  // Featured
  featuredScroll: {
    paddingHorizontal: spacing[5],
  },
  featuredCard: {
    width: window.innerWidth * 0.7,
    marginRight: spacing[3],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  featuredGradient: {
    padding: spacing[4],
  },
  featuredTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  featuredEmoji: {
    fontSize: 32,
  },
  limitedBadge: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  limitedText: {
    fontSize: 10,
    color: '#FF6B6B',
  },
  featuredTitle: {
    marginVertical: spacing[1],
  },
  featuredFooter: {
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },

  // Stores
  storesScroll: {
    paddingHorizontal: spacing[5],
  },
  storeCard: {
    width: 140,
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[3],
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  },
  storeInitial: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  storeInitialText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  openBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    borderRadius: borderRadius.sm,
  },
  closedBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  openText: {
    fontSize: 9,
    color: '#4CAF50',
  },
  closedText: {
    color: colors.text.tertiary,
  },
  storeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  starIcon: {
    fontSize: 12,
    color: '#FFD700',
  },
  starIconSmall: {
    fontSize: 10,
    color: '#FFD700',
  },
  offersBadge: {
    marginTop: spacing[2],
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
  },
  offersBadgeText: {
    fontSize: 10,
    color: colors.gold.primary,
  },

  // Online Stores
  onlineStoresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  onlineStoreCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  onlineStoreInitial: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
    marginBottom: spacing[2],
  },
  onlineStoreInitialText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  onlineStoreFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  freeShipBadge: {
    fontSize: 9,
    color: '#4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.15)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },

  // Products
  productsScroll: {
    paddingHorizontal: spacing[5],
  },
  productCard: {
    width: 140,
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[3],
    overflow: 'hidden',
  },
  productImage: {
    height: 100,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productEmoji: {
    fontSize: 32,
  },
  productInfo: {
    padding: spacing[3],
    gap: spacing[1],
  },
  productEarnings: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
    alignSelf: 'flex-start',
    marginTop: spacing[1],
  },

  // Services
  servicesGrid: {
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  serviceCard: {
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  serviceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  serviceCoins: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing[1],
  },

  // Offers Grid
  offersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  offerCard: {
    width: (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2,
    padding: spacing[3],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  offerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  typeBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  typeBadgeText: {
    fontSize: 9,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },

  // Smart CTA
  smartCta: {
    marginHorizontal: spacing[5],
    marginTop: spacing[6],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  smartCtaGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    gap: spacing[3],
  },
  smartCtaIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smartCtaEmoji: {
    fontSize: 24,
  },
  smartCtaContent: {
    flex: 1,
    gap: spacing[1],
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default X1_ExploreMainScreen;
