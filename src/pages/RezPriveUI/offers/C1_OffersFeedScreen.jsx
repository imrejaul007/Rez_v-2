/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * C1 - Privé Privileges (Luxury Offers Hub)
 * Purpose: Show curated, exclusive privileges for this user
 * UI: Dark + gold luxury aesthetic with premium cards
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
// LinearGradient will use CSS
import { Text, Card } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

type FilterType = 'all' | 'exclusive' | 'invitations' | 'expiring';

interface Offer {
  id: string;
  brandName: string;
  brandInitial: string;
  title: string;
  subtitle: string;
  rewardCoins: number;
  rewardType: 'rez' | 'prive' | 'branded';
  validity: string;
  daysLeft: number;
  campaignType: 'visit' | 'content' | 'purchase' | 'review';
  isExclusive: boolean;
  isInviteOnly: boolean;
  isPremium: boolean;
}

interface C1_OffersFeedScreenProps {
  offers?: Offer[];
  onViewOffer?: (id: string) => void;
}

// Merchant/Store data
interface Merchant {
  id: string;
  name: string;
  initial: string;
  category: string;
  distance: string;
  activeOffers: number;
  rating: number;
  isOnline: boolean;
}

const mockMerchants: Merchant[] = [
  { id: 'm1', name: 'Luxury Café', initial: 'L', category: 'Dining', distance: '0.5 km', activeOffers: 3, rating: 4.8, isOnline: false },
  { id: 'm2', name: 'Premium Spa', initial: 'P', category: 'Wellness', distance: '1.2 km', activeOffers: 2, rating: 4.9, isOnline: false },
  { id: 'm3', name: 'Artisan Watch Co', initial: 'A', category: 'Luxury', distance: '2.1 km', activeOffers: 1, rating: 4.7, isOnline: true },
  { id: 'm4', name: 'Urban Bistro', initial: 'U', category: 'Dining', distance: '0.8 km', activeOffers: 2, rating: 4.6, isOnline: false },
  { id: 'm5', name: 'Maison de Luxe', initial: 'M', category: 'Fashion', distance: '3.0 km', activeOffers: 4, rating: 4.9, isOnline: true },
];

const categories = [
  { id: 'dining', name: 'Dining', icon: '🍽️', count: 8 },
  { id: 'wellness', name: 'Wellness', icon: '🧘', count: 5 },
  { id: 'fashion', name: 'Fashion', icon: '👔', count: 12 },
  { id: 'luxury', name: 'Luxury', icon: '💎', count: 6 },
  { id: 'travel', name: 'Travel', icon: '✈️', count: 4 },
  { id: 'experiences', name: 'Experiences', icon: '🎭', count: 7 },
];

const mockOffers: Offer[] = [
  {
    id: '1',
    brandName: 'Artisan Watch Co',
    brandInitial: 'A',
    title: 'Private Preview Event',
    subtitle: 'Exclusive collection launch for Privé members',
    rewardCoins: 1500,
    rewardType: 'prive',
    validity: 'Dec 25',
    daysLeft: 5,
    campaignType: 'visit',
    isExclusive: true,
    isInviteOnly: true,
    isPremium: true,
  },
  {
    id: '2',
    brandName: 'Luxury Café',
    brandInitial: 'L',
    title: 'Weekend Dining Experience',
    subtitle: 'Complimentary tasting menu for two',
    rewardCoins: 800,
    rewardType: 'rez',
    validity: 'Dec 31',
    daysLeft: 11,
    campaignType: 'visit',
    isExclusive: true,
    isInviteOnly: false,
    isPremium: false,
  },
  {
    id: '3',
    brandName: 'Summer Collection',
    brandInitial: 'S',
    title: 'Early Access: New Arrivals',
    subtitle: 'Shop before public launch',
    rewardCoins: 600,
    rewardType: 'branded',
    validity: 'Jan 15',
    daysLeft: 26,
    campaignType: 'purchase',
    isExclusive: false,
    isInviteOnly: true,
    isPremium: false,
  },
  {
    id: '4',
    brandName: 'Premium Spa',
    brandInitial: 'P',
    title: 'Wellness Retreat',
    subtitle: 'Full day spa package with treatments',
    rewardCoins: 1200,
    rewardType: 'prive',
    validity: 'Jan 30',
    daysLeft: 41,
    campaignType: 'visit',
    isExclusive: true,
    isInviteOnly: false,
    isPremium: true,
  },
  {
    id: '5',
    brandName: 'Urban Bistro',
    brandInitial: 'U',
    title: "Chef's Table Experience",
    subtitle: 'Intimate 8-course dinner',
    rewardCoins: 500,
    rewardType: 'rez',
    validity: 'Jan 10',
    daysLeft: 21,
    campaignType: 'content',
    isExclusive: false,
    isInviteOnly: false,
    isPremium: false,
  },
  {
    id: '6',
    brandName: 'Maison de Luxe',
    brandInitial: 'M',
    title: 'VIP Shopping Event',
    subtitle: 'Private store access with personal stylist',
    rewardCoins: 2000,
    rewardType: 'prive',
    validity: 'Dec 28',
    daysLeft: 8,
    campaignType: 'purchase',
    isExclusive: true,
    isInviteOnly: true,
    isPremium: true,
  },
];

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'exclusive', label: 'Exclusive' },
  { key: 'invitations', label: 'Invitations' },
  { key: 'expiring', label: 'Expiring Soon' },
];

export const C1_OffersFeedScreen: React.FC<C1_OffersFeedScreenProps> = ({
  offers = mockOffers,
  onViewOffer,
}) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleViewOffer = (id: string) => {
    if (onViewOffer) {
      onViewOffer(id);
    } else {
      navigate('/prive/C2_OfferDetail', { offerId: id };
    }
  };

  const filteredOffers = offers.filter((offer) => {
    switch (activeFilter) {
      case 'exclusive':
        return offer.isExclusive;
      case 'invitations':
        return offer.isInviteOnly;
      case 'expiring':
        return offer.daysLeft <= 7;
      default:
        return true;
    }
  };

  const premiumOffers = offers.filter((o) => o.isPremium);
  const expiringCount = offers.filter((o) => o.daysLeft <= 7).length;
  const invitationCount = offers.filter((o) => o.isInviteOnly).length;

  const getCampaignTypeLabel = (type: string) => {
    switch (type) {
      case 'visit': return 'Visit & Earn';
      case 'content': return 'Create Content';
      case 'purchase': return 'Shop & Earn';
      case 'review': return 'Review & Earn';
      default: return type;
    }
  };

  const getRewardColor = (type: string) => {
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
          <span variant="h2" style={style={{...styles.headerTitle}>Privileges</span>
          <span variant="caption" color={colors.text.tertiary}>
            Curated exclusively for you
          </span>
        </div>

        {/* Stats Row */}
        <div style={style={{...styles.statsRow}>
          <div style={style={{...styles.statItem}>
            <span style={style={{...styles.statNumber}>{offers.length}</span>
            <span variant="caption" color={colors.text.tertiary}>Available</span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span style={style={{...styles.statNumber}>{invitationCount}</span>
            <span variant="caption" color={colors.text.tertiary}>Invitations</span>
          </div>
          <div style={style={{...styles.statDivider} />
          <div style={style={{...styles.statItem}>
            <span style={[style={{...styles.statNumber, expiringCount > 0 && style={{...styles.urgentNumber]}>
              {expiringCount}
            </span>
            <span variant="caption" color={colors.text.tertiary}>Expiring</span>
          </div>
        </div>

        {/* Categories */}
        <div style={style={{...styles.categoriesSection}>
          <div style={style={{...styles.sectionHeader}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              BROWSE BY CATEGORY
            </span>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.categoriesScroll}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                style={style={{...styles.categoryCard}
                onClick={() => navigate('/prive/Explore', {
                  screen: 'X2_CategoryExplore',
                  params: { categoryId: category.id, categoryName: category.name }
                })}
              >
                <span style={style={{...styles.categoryIcon}>{category.icon}</span>
                <span variant="body" color={colors.text.primary}>{category.name}</span>
                <span variant="caption" color={colors.text.tertiary}>{category.count} offers</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Merchants */}
        <div style={style={{...styles.merchantsSection}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.locationIcon}>📍</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                NEARBY MERCHANTS
              </span>
            </div>
            <div onClick={() => navigate('/prive/Explore', { screen: 'X7_MapView' })}>
              <span variant="caption" gold>View Map →</span>
            </div>
          </div>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.merchantsScroll}
          >
            {mockMerchants.filter(m => !m.isOnline).map((merchant) => (
              <div
                key={merchant.id}
                style={style={{...styles.merchantCard}
                onClick={() => navigate('/prive/Explore', {
                  screen: 'X4_StoreDetail',
                  params: { storeId: merchant.id }
                })}
              >
                <div style={style={{...styles.merchantHeader}>
                  <div style={style={{...styles.merchantInitial}>
                    <span style={style={{...styles.merchantInitialText}>{merchant.initial}</span>
                  </div>
                  <div style={style={{...styles.merchantRating}>
                    <span style={style={{...styles.starIcon}>★</span>
                    <span variant="caption" color={colors.text.primary}>{merchant.rating}</span>
                  </div>
                </div>
                <span variant="body" color={colors.text.primary} numberOfLines={1}>
                  {merchant.name}
                </span>
                <span variant="caption" color={colors.text.tertiary}>{merchant.category}</span>
                <div style={style={{...styles.merchantFooter}>
                  <span variant="caption" color={colors.text.tertiary}>{merchant.distance}</span>
                  <div style={style={{...styles.offerCountBadge}>
                    <span style={style={{...styles.offerCountText}>{merchant.activeOffers} offers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Merchants */}
        <div style={style={{...styles.onlineMerchantsSection}>
          <div style={style={{...styles.sectionHeader}>
            <div style={style={{...styles.sectionTitleRow}>
              <span style={style={{...styles.onlineIcon}>🌐</span>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                SHOP ONLINE
              </span>
            </div>
            <div onClick={() => navigate('/prive/Explore', {
              screen: 'X3_StoreListing',
              params: { filter: 'online' }
            })}>
              <span variant="caption" gold>See All →</span>
            </div>
          </div>
          <div style={style={{...styles.onlineMerchantsRow}>
            {mockMerchants.filter(m => m.isOnline).map((merchant) => (
              <div
                key={merchant.id}
                style={style={{...styles.onlineMerchantCard}
                onClick={() => navigate('/prive/Explore', {
                  screen: 'X4_StoreDetail',
                  params: { storeId: merchant.id }
                })}
              >
                <div style={style={{...styles.onlineMerchantInitial}>
                  <span style={style={{...styles.onlineMerchantInitialText}>{merchant.initial}</span>
                </div>
                <div style={style={{...styles.onlineMerchantInfo}>
                  <span variant="body" color={colors.text.primary}>{merchant.name}</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {merchant.category} • {merchant.activeOffers} offers
                  </span>
                </div>
                <span variant="body" gold>→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Offers Carousel */}
        {premiumOffers.length > 0 && (
          <div style={style={{...styles.section}>
            <div style={style={{...styles.sectionHeader}>
              <div style={style={{...styles.sectionTitleRow}>
                <span style={style={{...styles.premiumBadge}>◆</span>
                <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                  PREMIUM PRIVILEGES
                </span>
              </div>
            </div>

            <div
              horizontal
              
              contentContainerStyle={style={{...styles.premiumScroll}
            >
              {premiumOffers.map((offer) => (
                <div
                  key={offer.id}
                  style={style={{...styles.premiumCard}
                  onClick={() => handleViewOffer(offer.id)}
                  onClick={() => {}}
                >
                  <LinearGradient
                    colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)', '#141414']}
                    style={style={{...styles.premiumGradient}
                  >
                    <div style={style={{...styles.premiumBadgeRow}>
                      {offer.isInviteOnly && (
                        <div style={style={{...styles.inviteBadge}>
                          <span style={style={{...styles.inviteBadgeText}>INVITED</span>
                        </div>
                      )}
                      <div style={style={{...styles.daysLeftBadge}>
                        <span style={style={{...styles.daysLeftText}>{offer.daysLeft}d left</span>
                      </div>
                    </div>

                    <div style={style={{...styles.premiumBrandRow}>
                      <div style={style={{...styles.brandCircle}>
                        <span style={style={{...styles.brandInitial}>{offer.brandInitial}</span>
                      </div>
                      <span variant="caption" gold>{offer.brandName}</span>
                    </div>

                    <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.premiumTitle}>
                      {offer.title}
                    </span>
                    <span variant="caption" color={colors.text.tertiary} numberOfLines={2}>
                      {offer.subtitle}
                    </span>

                    <div style={style={{...styles.premiumFooter}>
                      <div style={style={{...styles.rewardBadge}>
                        <div style={[style={{...styles.rewardDot, { backgroundColor: getRewardColor(offer.rewardType) }]} />
                        <span variant="body" style={{ color: getRewardColor(offer.rewardType) }}>
                          {offer.rewardCoins.toLocaleString()} coins
                        </span>
                      </div>
                      <span variant="caption" color={colors.text.tertiary}>
                        {getCampaignTypeLabel(offer.campaignType)}
                      </span>
                    </div>
                  </LinearGradient>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div style={style={{...styles.filterSection}>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.filterScroll}
          >
            {filters.map((filter) => (
              <div
                key={filter.key}
                style={[
                  style={{...styles.filterChip,
                  activeFilter === filter.key && style={{...styles.filterChipActive,
                ]}
                onClick={() => setActiveFilter(filter.key)}
              >
                <Text
                  variant="caption"
                  color={activeFilter === filter.key ? colors.gold.primary : colors.text.secondary}
                >
                  {filter.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All Offers */}
        <div style={style={{...styles.offersSection}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
            {activeFilter === 'all' ? 'ALL PRIVILEGES' : filters.find(f => f.key === activeFilter)?.label.toUpperCase()}
          </span>

          {filteredOffers.length === 0 ? (
            <div style={style={{...styles.emptyState}>
              <span variant="body" color={colors.text.tertiary} center>
                No privileges match this filter
              </span>
            </div>
          ) : (
            filteredOffers.map((offer) => (
              <div
                key={offer.id}
                style={style={{...styles.offerCard}
                onClick={() => handleViewOffer(offer.id)}
                onClick={() => {}}
              >
                <div style={style={{...styles.offerCardHeader}>
                  <div style={style={{...styles.offerBrandRow}>
                    <div style={[style={{...styles.brandCircleSmall, offer.isExclusive && style={{...styles.brandCircleExclusive]}>
                      <span style={style={{...styles.brandInitialSmall}>{offer.brandInitial}</span>
                    </div>
                    <div style={style={{...styles.offerBrandInfo}>
                      <span variant="body" color={colors.text.primary}>{offer.brandName}</span>
                      <span variant="caption" color={colors.text.tertiary}>
                        {getCampaignTypeLabel(offer.campaignType)}
                      </span>
                    </div>
                  </div>
                  <div style={style={{...styles.offerBadges}>
                    {offer.isExclusive && (
                      <div style={style={{...styles.exclusiveDot} />
                    )}
                    {offer.isInviteOnly && (
                      <span style={style={{...styles.inviteIcon}>✦</span>
                    )}
                  </div>
                </div>

                <span variant="bodyLarge" color={colors.text.primary} style={style={{...styles.offerTitle}>
                  {offer.title}
                </span>
                <span variant="caption" color={colors.text.tertiary} numberOfLines={1}>
                  {offer.subtitle}
                </span>

                <div style={style={{...styles.offerCardFooter}>
                  <div style={style={{...styles.rewardInfo}>
                    <div style={[style={{...styles.rewardDotSmall, { backgroundColor: getRewardColor(offer.rewardType) }]} />
                    <span variant="body" gold>{offer.rewardCoins.toLocaleString()}</span>
                    <span variant="caption" color={colors.text.tertiary}> coins</span>
                  </div>
                  <div style={style={{...styles.validityInfo}>
                    <span variant="caption" color={offer.daysLeft <= 7 ? '#FF6B6B' : colors.text.tertiary}>
                      {offer.daysLeft <= 7 ? `${offer.daysLeft}d left` : `Valid until ${offer.validity}`}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Note */}
        <div style={style={{...styles.bottomNote}>
          <span variant="caption" color={colors.text.tertiary} center>
            More privileges unlock with higher engagement
          </span>
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
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: spacing[2],
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: colors.text.primary,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  statItem: {
    alignItems: 'center',
    gap: spacing[1],
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.gold.primary,
  },
  urgentNumber: {
    color: '#FF6B6B',
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },

  // Categories
  categoriesSection: {
    marginTop: spacing[6],
  },
  categoriesScroll: {
    paddingHorizontal: spacing[5],
  },
  categoryCard: {
    width: 100,
    alignItems: 'center',
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[3],
    gap: spacing[2],
  },
  categoryIcon: {
    fontSize: 24,
  },

  // Merchants
  merchantsSection: {
    marginTop: spacing[6],
  },
  merchantsScroll: {
    paddingHorizontal: spacing[5],
  },
  merchantCard: {
    width: 140,
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[3],
    gap: spacing[2],
  },
  merchantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  },
  merchantInitial: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  merchantInitialText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  merchantRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  starIcon: {
    fontSize: 12,
    color: '#FFD700',
  },
  merchantFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[2],
  },
  offerCountBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  offerCountText: {
    fontSize: 10,
    color: colors.gold.primary,
  },
  locationIcon: {
    fontSize: 14,
  },

  // Online Merchants
  onlineMerchantsSection: {
    marginTop: spacing[5],
    paddingHorizontal: spacing[5],
  },
  onlineMerchantsRow: {
    gap: spacing[3],
  },
  onlineMerchantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    gap: spacing[3],
  },
  onlineMerchantInitial: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  onlineMerchantInitialText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  onlineMerchantInfo: {
    flex: 1,
    gap: spacing[1],
  },
  onlineIcon: {
    fontSize: 14,
  },

  // Section
  section: {
    marginTop: spacing[6],
  },
  sectionHeader: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[4],
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  premiumBadge: {
    fontSize: 14,
    color: colors.gold.primary,
  },
  sectionLabel: {
    letterSpacing: 1.5,
  },

  // Premium Carousel
  premiumScroll: {
    paddingLeft: spacing[5],
    paddingRight: spacing[5],
  },
  premiumCard: {
    width: window.innerWidth * 0.75,
    marginRight: spacing[3],
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  premiumGradient: {
    padding: spacing[5],
  },
  premiumBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing[3],
  },
  inviteBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  inviteBadgeText: {
    fontSize: 9,
    fontWeight: '600',
    color: colors.gold.primary,
    letterSpacing: 0.5,
  },
  daysLeftBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  daysLeftText: {
    fontSize: 10,
    color: colors.text.secondary,
  },
  premiumBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  brandCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  brandInitial: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gold.primary,
  },
  premiumTitle: {
    marginBottom: spacing[1],
  },
  premiumFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  rewardBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  rewardDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  // Filters
  filterSection: {
    marginTop: spacing[6],
  },
  filterScroll: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  filterChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    marginRight: spacing[2],
  },
  filterChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.1)',
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },

  // Offers List
  offersSection: {
    marginTop: spacing[5],
    paddingHorizontal: spacing[5],
  },
  offerCard: {
    backgroundColor: '#141414',
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    marginTop: spacing[3],
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  offerCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[3],
  },
  offerBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
  },
  brandCircleSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  brandCircleExclusive: {
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  brandInitialSmall: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.secondary,
  },
  offerBrandInfo: {
    gap: spacing[1],
  },
  offerBadges: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  exclusiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gold.primary,
  },
  inviteIcon: {
    fontSize: 14,
    color: colors.gold.primary,
  },
  offerTitle: {
    marginBottom: spacing[1],
  },
  offerCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
  },
  rewardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rewardDotSmall: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: spacing[2],
  },
  validityInfo: {},

  emptyState: {
    paddingVertical: spacing[12],
  },

  bottomNote: {
    marginTop: spacing[6],
    paddingHorizontal: spacing[5],
  },

  bottomSpace: {
    height: spacing[8],
  },
};

export default C1_OffersFeedScreen;
