/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X2 - Privé Category Explore
 *
 * Purpose: Deep-dive into categories with curated Privé-approved businesses.
 * Premium design with subcategories, filters, featured stores, and rich cards.
 */

import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
// SafeAreaView removed
// LinearGradient will use CSS
import { Text } from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { ExploreStackParamList } from '../../navigation/types';

const CARD_WIDTH = (window.innerWidth - spacing[5] * 2 - spacing[3]) / 2;
const FEATURED_CARD_WIDTH = window.innerWidth * 0.75;

type SortOption = 'recommended' | 'distance' | 'rewards' | 'rating' | 'newest';
type ViewMode = 'grid' | 'list' | 'map';

interface SubCategory {
  id: string;
  name: string;
  count: number;
}

interface CategoryStore {
  id: string;
  brandName: string;
  brandImage: string;
  rewardRange: string;
  distance?: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOpen: boolean;
  openUntil?: string;
  activeOffers: number;
  priceRange: string;
  tags: string[];
  coinReward: {
    min: number;
    max: number;
  };
  ugcCount: number;
}

interface CategoryData {
  id: string;
  name: string;
  description: string;
  icon: string;
  totalStores: number;
  totalOffers: number;
  subcategories: SubCategory[];
  featuredStores: CategoryStore[];
  allStores: CategoryStore[];
}

const defaultCategoryData: CategoryData = {
  id: 'dining',
  name: 'Fine Dining',
  description: 'Curated restaurants with exceptional cuisine and ambiance',
  icon: '🍽️',
  totalStores: 48,
  totalOffers: 127,
  subcategories: [
    { id: 'all', name: 'All', count: 48 },
    { id: 'indian', name: 'Indian', count: 12 },
    { id: 'continental', name: 'Continental', count: 15 },
    { id: 'asian', name: 'Asian', count: 8 },
    { id: 'italian', name: 'Italian', count: 7 },
    { id: 'cafe', name: 'Café & Lounge', count: 6 },
  ],
  featuredStores: [
    {
      id: 'f1',
      brandName: 'The Grand Pavilion',
      brandImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      rewardRange: '35-50%',
      distance: '1.2 km',
      rating: 4.9,
      reviewCount: 342,
      isFeatured: true,
      isOpen: true,
      openUntil: '11:00 PM',
      activeOffers: 5,
      priceRange: '₹₹₹₹',
      tags: ['Romantic', 'Fine Wine', 'Private Dining'],
      coinReward: { min: 350, max: 500 },
      ugcCount: 89,
    },
    {
      id: 'f2',
      brandName: 'Azure Sky Lounge',
      brandImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      rewardRange: '30-45%',
      distance: '2.8 km',
      rating: 4.8,
      reviewCount: 256,
      isFeatured: true,
      isOpen: true,
      openUntil: '1:00 AM',
      activeOffers: 3,
      priceRange: '₹₹₹₹',
      tags: ['Rooftop', 'Cocktails', 'City View'],
      coinReward: { min: 300, max: 450 },
      ugcCount: 124,
    },
  ],
  allStores: [
    {
      id: '1',
      brandName: 'The Grand Café',
      brandImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      rewardRange: '30-45%',
      distance: '1.2 km',
      rating: 4.7,
      reviewCount: 189,
      isOpen: true,
      openUntil: '10:30 PM',
      activeOffers: 3,
      priceRange: '₹₹₹',
      tags: ['Brunch', 'Coffee'],
      coinReward: { min: 150, max: 300 },
      ugcCount: 45,
    },
    {
      id: '2',
      brandName: 'Maison Luxe',
      brandImage: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6',
      rewardRange: '25-40%',
      distance: '2.5 km',
      rating: 4.6,
      reviewCount: 134,
      isNew: true,
      isOpen: true,
      openUntil: '11:00 PM',
      activeOffers: 4,
      priceRange: '₹₹₹₹',
      tags: ['French', 'Wine Bar'],
      coinReward: { min: 200, max: 400 },
      ugcCount: 28,
    },
    {
      id: '3',
      brandName: 'Artisan Table',
      brandImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      rewardRange: '35-50%',
      distance: '3.1 km',
      rating: 4.8,
      reviewCount: 267,
      isOpen: false,
      activeOffers: 2,
      priceRange: '₹₹₹',
      tags: ['Farm to Table', 'Organic'],
      coinReward: { min: 250, max: 450 },
      ugcCount: 67,
    },
    {
      id: '4',
      brandName: 'Heritage Kitchen',
      brandImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c',
      rewardRange: '20-35%',
      distance: '4.0 km',
      rating: 4.5,
      reviewCount: 98,
      isOpen: true,
      openUntil: '9:30 PM',
      activeOffers: 2,
      priceRange: '₹₹',
      tags: ['Traditional', 'Family'],
      coinReward: { min: 100, max: 250 },
      ugcCount: 32,
    },
    {
      id: '5',
      brandName: 'The Secret Garden',
      brandImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
      rewardRange: '40-55%',
      distance: '2.8 km',
      rating: 4.9,
      reviewCount: 312,
      isOpen: true,
      openUntil: '10:00 PM',
      activeOffers: 6,
      priceRange: '₹₹₹₹',
      tags: ['Garden', 'Romantic', 'Vegetarian'],
      coinReward: { min: 300, max: 500 },
      ugcCount: 156,
    },
    {
      id: '6',
      brandName: 'Royal Feast',
      brandImage: 'https://images.unsplash.com/photo-1592861956120-e524fc739696',
      rewardRange: '30-45%',
      distance: '5.2 km',
      rating: 4.6,
      reviewCount: 145,
      isNew: true,
      isOpen: true,
      openUntil: '11:30 PM',
      activeOffers: 4,
      priceRange: '₹₹₹',
      tags: ['Indian', 'Mughlai'],
      coinReward: { min: 200, max: 350 },
      ugcCount: 41,
    },
  ],
};

export const X2_CategoryExploreScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<ExploreStackParamList, 'X2_CategoryExplore'>>();
  const { categoryName = 'Category' } = route.params || {};

  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [viewMode, setViewMode] = useState<divMode>('grid');
  const [showOpenOnly, setShowOpenOnly] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const categoryData = { ...defaultCategoryData, name: categoryName };

  const sortOptions: { key: SortOption; label: string; icon: string }[] = [
    { key: 'recommended', label: 'Recommended', icon: '✦' },
    { key: 'distance', label: 'Nearest', icon: '📍' },
    { key: 'rewards', label: 'Best Rewards', icon: '◈' },
    { key: 'rating', label: 'Top Rated', icon: '★' },
    { key: 'newest', label: 'Newest', icon: '✨' },
  ];

  const filteredStores = categoryData.allStores.filter((store) => {
    if (showOpenOnly && !store.isOpen) return false;
    return true;
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    return '★'.repeat(fullStars) + (hasHalf ? '½' : '');
  };

  const renderFeaturedCard = ({ item }: { item: CategoryStore }) => (
    <div
      style={style={{...styles.featuredCard}
      onClick={() => navigate('/prive/X4_StoreDetail', { storeId: item.id })}
      onClick={() => {}}
    >
      {/* Image with gradient */}
      <div style={style={{...styles.featuredImageContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={style={{...styles.featuredGradient}
        />
        <div style={style={{...styles.featuredImagePlaceholder}>
          <span style={style={{...styles.featuredInitial}>{item.brandName.charAt(0)}</span>
        </div>

        {/* Badges */}
        <div style={style={{...styles.featuredBadges}>
          <div style={style={{...styles.priveFeaturedBadge}>
            <span variant="caption" gold>✦ Featured</span>
          </div>
          {item.isOpen && (
            <div style={style={{...styles.openBadge}>
              <span variant="caption" color="#4CAF50">Open</span>
            </div>
          )}
        </div>

        {/* Bottom Info */}
        <div style={style={{...styles.featuredBottomInfo}>
          <span variant="h3" color="#FFFFFF">{item.brandName}</span>
          <div style={style={{...styles.featuredMeta}>
            <div style={style={{...styles.ratingBadge}>
              <span variant="caption" color="#0A0A0A">★ {item.rating}</span>
            </div>
            <span variant="caption" color="rgba(255,255,255,0.7)">
              {item.reviewCount} reviews
            </span>
            <span variant="caption" color="rgba(255,255,255,0.7)">
              · {item.distance}
            </span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={style={{...styles.featuredInfo}>
        <div style={style={{...styles.featuredInfoRow}>
          <div style={style={{...styles.rewardHighlight}>
            <span variant="caption" color={colors.text.tertiary}>EARN UP TO</span>
            <span variant="bodyLarge" gold>{item.rewardRange}</span>
          </div>
          <div style={style={{...styles.offersHighlight}>
            <span variant="h3" gold>{item.activeOffers}</span>
            <span variant="caption" color={colors.text.tertiary}>Active Offers</span>
          </div>
          <div style={style={{...styles.ugcHighlight}>
            <span variant="body" color={colors.text.primary}>{item.ugcCount}</span>
            <span variant="caption" color={colors.text.tertiary}>Stories</span>
          </div>
        </div>

        {/* Tags */}
        <div style={style={{...styles.featuredTags}>
          {item.tags.slice(0, 3).map((tag, index) => (
            <div key={index} style={style={{...styles.tag}>
              <span variant="caption" color={colors.text.secondary}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStoreCard = ({ item }: { item: CategoryStore }) => (
    <div
      style={style={{...styles.storeCard}
      onClick={() => navigate('/prive/X4_StoreDetail', { storeId: item.id })}
      onClick={() => {}}
    >
      {/* Image */}
      <div style={style={{...styles.storeImageContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.6)']}
          style={style={{...styles.storeImageGradient}
        />
        <div style={style={{...styles.storeImagePlaceholder}>
          <span style={style={{...styles.storeInitial}>{item.brandName.charAt(0)}</span>
        </div>

        {/* Top Badges */}
        <div style={style={{...styles.cardTopBadges}>
          {item.isNew && (
            <div style={style={{...styles.newBadge}>
              <span variant="caption" gold>New</span>
            </div>
          )}
          {!item.isOpen && (
            <div style={style={{...styles.closedBadge}>
              <span variant="caption" color="#FF6B6B">Closed</span>
            </div>
          )}
        </div>

        {/* Bottom Overlay */}
        <div style={style={{...styles.cardImageBottom}>
          <div style={style={{...styles.ratingSmall}>
            <span variant="caption" color="#FFFFFF">★ {item.rating}</span>
          </div>
          <span variant="caption" color="rgba(255,255,255,0.8)">
            {item.distance}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={style={{...styles.storeInfo}>
        <span variant="body" color={colors.text.primary} numberOfLines={1}>
          {item.brandName}
        </span>

        <div style={style={{...styles.storeMetaRow}>
          <span variant="caption" color={colors.text.tertiary}>
            {item.priceRange}
          </span>
          <div style={style={{...styles.dotSeparator} />
          <span variant="caption" color={colors.text.tertiary}>
            {item.reviewCount} reviews
          </span>
        </div>

        {/* Reward Badge */}
        <div style={style={{...styles.rewardBadgeSmall}>
          <span variant="caption" gold>◈ {item.rewardRange}</span>
          <div style={style={{...styles.offerCount}>
            <span variant="caption" color={colors.text.secondary}>
              {item.activeOffers} offers
            </span>
          </div>
        </div>

        {/* Tags */}
        <div style={style={{...styles.storeTags}>
          {item.tags.slice(0, 2).map((tag, index) => (
            <div key={index} style={style={{...styles.tagSmall}>
              <span variant="caption" color={colors.text.tertiary}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListCard = ({ item }: { item: CategoryStore }) => (
    <div
      style={style={{...styles.listCard}
      onClick={() => navigate('/prive/X4_StoreDetail', { storeId: item.id })}
      onClick={() => {}}
    >
      {/* Image */}
      <div style={style={{...styles.listImageContainer}>
        <div style={style={{...styles.listImagePlaceholder}>
          <span style={style={{...styles.listInitial}>{item.brandName.charAt(0)}</span>
        </div>
        {!item.isOpen && (
          <div style={style={{...styles.listClosedOverlay}>
            <span variant="caption" color="#FF6B6B">Closed</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={style={{...styles.listInfo}>
        <div style={style={{...styles.listHeader}>
          <span variant="body" color={colors.text.primary} numberOfLines={1}>
            {item.brandName}
          </span>
          {item.isNew && (
            <div style={style={{...styles.newBadgeSmall}>
              <span variant="caption" gold>New</span>
            </div>
          )}
        </div>

        <div style={style={{...styles.listMeta}>
          <div style={style={{...styles.ratingSmall}>
            <span variant="caption" color="#FFFFFF">★ {item.rating}</span>
          </div>
          <span variant="caption" color={colors.text.tertiary}>
            ({item.reviewCount})
          </span>
          <div style={style={{...styles.dotSeparator} />
          <span variant="caption" color={colors.text.tertiary}>
            {item.priceRange}
          </span>
          <div style={style={{...styles.dotSeparator} />
          <span variant="caption" color={colors.text.tertiary}>
            {item.distance}
          </span>
        </div>

        <div style={style={{...styles.listTags}>
          {item.tags.slice(0, 3).map((tag, index) => (
            <div key={index} style={style={{...styles.tagSmall}>
              <span variant="caption" color={colors.text.tertiary}>{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div style={style={{...styles.listRight}>
        <span variant="bodyLarge" gold>{item.rewardRange}</span>
        <span variant="caption" color={colors.text.tertiary}>rewards</span>
        <div style={style={{...styles.listOfferBadge}>
          <span variant="caption" color={colors.text.secondary}>
            {item.activeOffers} offers
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backBtn} onClick={() => navigate(-1)}>
          <span variant="bodyLarge" color={colors.text.primary}>←</span>
        </div>
        <div style={style={{...styles.headerCenter}>
          <span variant="h3" color={colors.text.primary}>{categoryData.name}</span>
          <span variant="caption" color={colors.text.tertiary}>
            {categoryData.totalStores} Privé Partners · {categoryData.totalOffers} Offers
          </span>
        </div>
        <div
          style={style={{...styles.mapBtn}
          onClick={() => navigate('/prive/X7_MapView', { category: categoryData.name })}
        >
          <span variant="body" color={colors.text.primary}>📍</span>
        </div>
      </div>

      <div
        style={style={{...styles.scrollView}
        
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Category Hero */}
        <div style={style={{...styles.heroSection}>
          <LinearGradient
            colors={['rgba(201, 169, 98, 0.1)', 'transparent']}
            style={style={{...styles.heroGradient}
          />
          <div style={style={{...styles.heroContent}>
            <span style={style={{...styles.heroIcon}>{categoryData.icon}</span>
            <span variant="body" color={colors.text.secondary} center>
              {categoryData.description}
            </span>
          </div>
        </div>

        {/* Subcategory Chips */}
        <div
          horizontal
          
          style={style={{...styles.subcategoryScroll}
          contentContainerStyle={style={{...styles.subcategoryContent}
        >
          {categoryData.subcategories.map((sub) => (
            <div
              key={sub.id}
              style={[
                style={{...styles.subcategoryChip,
                selectedSubcategory === sub.id && style={{...styles.subcategoryChipActive,
              ]}
              onClick={() => setSelectedSubcategory(sub.id)}
            >
              <Text
                variant="body"
                color={selectedSubcategory === sub.id ? colors.gold.primary : colors.text.secondary}
              >
                {sub.name}
              </span>
              <Text
                variant="caption"
                color={selectedSubcategory === sub.id ? colors.gold.primary : colors.text.tertiary}
              >
                {sub.count}
              </span>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div style={style={{...styles.section}>
          <div style={style={{...styles.sectionHeader}>
            <div>
              <span variant="label" color={colors.text.tertiary}>FEATURED</span>
              <span variant="h3" color={colors.text.primary}>Editor's Picks</span>
            </div>
            <div>
              <span variant="body" gold>See All →</span>
            </div>
          </div>

          <FlatList
            data={categoryData.featuredStores}
            renderItem={renderFeaturedCard}
            keyExtractor={(item) => item.id}
            horizontal
            
            contentContainerStyle={style={{...styles.featuredList}
            snapToInterval={FEATURED_CARD_WIDTH + spacing[3]}
            decelerationRate="fast"
          />
        </div>

        {/* Filter & Sort Bar */}
        <div style={style={{...styles.filterBar}>
          <div style={style={{...styles.filterLeft}>
            <div
              style={[style={{...styles.filterChip, showOpenOnly && style={{...styles.filterChipActive]}
              onClick={() => setShowOpenOnly(!showOpenOnly)}
            >
              <Text
                variant="caption"
                color={showOpenOnly ? colors.gold.primary : colors.text.secondary}
              >
                Open Now
              </span>
            </div>
          </div>

          <div style={style={{...styles.viewToggle}>
            <div
              style={[style={{...styles.viewBtn, viewMode === 'grid' && style={{...styles.viewBtnActive]}
              onClick={() => setViewMode('grid')}
            >
              <span variant="caption" color={viewMode === 'grid' ? colors.gold.primary : colors.text.tertiary}>
                ⊞
              </span>
            </div>
            <div
              style={[style={{...styles.viewBtn, viewMode === 'list' && style={{...styles.viewBtnActive]}
              onClick={() => setViewMode('list')}
            >
              <span variant="caption" color={viewMode === 'list' ? colors.gold.primary : colors.text.tertiary}>
                ☰
              </span>
            </div>
          </div>
        </div>

        {/* Sort Options */}
        <div
          horizontal
          
          style={style={{...styles.sortScroll}
          contentContainerStyle={style={{...styles.sortContent}
        >
          {sortOptions.map((option) => (
            <div
              key={option.key}
              style={[style={{...styles.sortOption, sortBy === option.key && style={{...styles.sortOptionActive]}
              onClick={() => setSortBy(option.key)}
            >
              <Text
                variant="caption"
                color={sortBy === option.key ? colors.gold.primary : colors.text.secondary}
              >
                {option.icon} {option.label}
              </span>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div style={style={{...styles.resultsHeader}>
          <span variant="body" color={colors.text.secondary}>
            {filteredStores.length} places found
          </span>
        </div>

        {/* Store Grid or List */}
        {viewMode === 'grid' ? (
          <div style={style={{...styles.gridContainer}>
            {filteredStores.map((item, index) => (
              <div key={item.id} style={index % 2 === 0 ? style={{...styles.gridItemLeft : style={{...styles.gridItemRight}>
                {renderStoreCard({ item })}
              </div>
            ))}
          </div>
        ) : (
          <div style={style={{...styles.listContainer}>
            {filteredStores.map((item) => (
              <div key={item.id}>
                {renderListCard({ item })}
              </div>
            ))}
          </div>
        )}

        {/* Bottom Spacing */}
        <div style={{ height: floatingTabBarTotalHeight + spacing[4] }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    gap: spacing[1],
  },
  mapBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },

  // Hero Section
  heroSection: {
    paddingVertical: spacing[6],
    paddingHorizontal: spacing[5],
    position: 'relative',
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  heroContent: {
    alignItems: 'center',
    gap: spacing[3],
  },
  heroIcon: {
    fontSize: 48,
  },

  // Subcategories
  subcategoryScroll: {
    marginBottom: spacing[4],
  },
  subcategoryContent: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  subcategoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  subcategoryChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Featured Section
  section: {
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
  },
  featuredList: {
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  featuredCard: {
    width: FEATURED_CARD_WIDTH,
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  featuredImageContainer: {
    height: 180,
    position: 'relative',
  },
  featuredGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
  featuredImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2A2A',
  },
  featuredInitial: {
    fontSize: 48,
    color: colors.gold.primary,
    opacity: 0.4,
  },
  featuredBadges: {
    position: 'absolute',
    top: spacing[3],
    left: spacing[3],
    flexDirection: 'row',
    gap: spacing[2],
    zIndex: 2,
  },
  priveFeaturedBadge: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  openBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  featuredBottomInfo: {
    position: 'absolute',
    bottom: spacing[3],
    left: spacing[3],
    right: spacing[3],
    zIndex: 2,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginTop: spacing[2],
  },
  ratingBadge: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  featuredInfo: {
    padding: spacing[4],
  },
  featuredInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[3],
  },
  rewardHighlight: {
    alignItems: 'flex-start',
    gap: spacing[1],
  },
  offersHighlight: {
    alignItems: 'center',
    gap: spacing[1],
  },
  ugcHighlight: {
    alignItems: 'flex-end',
    gap: spacing[1],
  },
  featuredTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  tag: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    backgroundColor: '#2A2A2A',
    borderRadius: borderRadius.full,
  },

  // Filter Bar
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },
  filterLeft: {
    flexDirection: 'row',
    gap: spacing[2],
  },
  filterChip: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  filterChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  viewToggle: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  viewBtn: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  },
  viewBtnActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
  },

  // Sort Options
  sortScroll: {
    marginBottom: spacing[4],
  },
  sortContent: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  sortOption: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: '#181818',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  sortOptionActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Results
  resultsHeader: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
  },

  // Grid
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[5],
  },
  gridItemLeft: {
    width: CARD_WIDTH,
    marginRight: spacing[3],
    marginBottom: spacing[3],
  },
  gridItemRight: {
    width: CARD_WIDTH,
    marginBottom: spacing[3],
  },
  storeCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  storeImageContainer: {
    height: 130,
    position: 'relative',
  },
  storeImageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 1,
  },
  storeImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2A2A',
  },
  storeInitial: {
    fontSize: 36,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  cardTopBadges: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    flexDirection: 'row',
    gap: spacing[1],
    zIndex: 2,
  },
  newBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  closedBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: borderRadius.sm,
  },
  cardImageBottom: {
    position: 'absolute',
    bottom: spacing[2],
    left: spacing[2],
    right: spacing[2],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  ratingSmall: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  storeInfo: {
    padding: spacing[3],
    gap: spacing[2],
  },
  storeMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
  },
  dotSeparator: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.text.tertiary,
  },
  rewardBadgeSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  offerCount: {
    marginLeft: spacing[2],
  },
  storeTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[1],
  },
  tagSmall: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: '#2A2A2A',
    borderRadius: borderRadius.sm,
  },

  // List View
  listContainer: {
    paddingHorizontal: spacing[5],
    gap: spacing[3],
  },
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    padding: spacing[3],
  },
  listImageContainer: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  listImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A2A2A',
  },
  listInitial: {
    fontSize: 28,
    color: colors.gold.primary,
    opacity: 0.3,
  },
  listClosedOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 2,
    alignItems: 'center',
  },
  listInfo: {
    flex: 1,
    marginLeft: spacing[3],
    gap: spacing[1],
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  newBadgeSmall: {
    paddingHorizontal: spacing[2],
    paddingVertical: 1,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  listMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[1],
    flexWrap: 'wrap',
  },
  listTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[1],
    marginTop: spacing[1],
  },
  listRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: spacing[2],
    gap: spacing[1],
  },
  listOfferBadge: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: '#2A2A2A',
    borderRadius: borderRadius.sm,
    marginTop: spacing[1],
  },
};

export default X2_CategoryExploreScreen;
