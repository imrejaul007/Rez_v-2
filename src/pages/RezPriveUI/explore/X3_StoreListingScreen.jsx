/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X3 - Privé Store / Brand Listing
 *
 * Purpose: Show all Privé stores under selected scope (category / city).
 * Toggle: Near Me | Online
 * Soft filter: Highest Rewards | New Partner | Recommended
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {
  ScreenContainer,
  Text,
  PriveNavigationHeader,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { ExploreStackParamList } from '../../navigation/types';

type ViewMode = 'nearMe' | 'online';
type FilterOption = 'recommended' | 'highestRewards' | 'newPartner';

interface Store {
  id: string;
  brandName: string;
  brandImage: string;
  rewardRange: string;
  distance?: string;
  deliveryTime?: string;
  isOpen?: boolean;
  isNew?: boolean;
}

const nearMeStores: Store[] = [
  { id: '1', brandName: 'The Grand Café', brandImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=200&fit=crop', rewardRange: 'Up to 35%', distance: '2.1 km', isOpen: true },
  { id: '2', brandName: 'Artisan Gallery', brandImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=200&h=200&fit=crop', rewardRange: 'Up to 40%', distance: '3.5 km', isOpen: true },
  { id: '3', brandName: 'Heritage Boutique', brandImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop', rewardRange: 'Up to 30%', distance: '4.2 km', isOpen: false },
  { id: '4', brandName: 'Maison Luxe', brandImage: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=200&h=200&fit=crop', rewardRange: 'Up to 45%', distance: '1.8 km', isOpen: true, isNew: true },
  { id: '5', brandName: 'The Secret Cellar', brandImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop', rewardRange: 'Up to 50%', distance: '5.0 km', isOpen: true },
];

const onlineStores: Store[] = [
  { id: 'o1', brandName: 'Luxe Online', brandImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop', rewardRange: 'Up to 30%', deliveryTime: '2-3 days' },
  { id: 'o2', brandName: 'Artisan Marketplace', brandImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop', rewardRange: 'Up to 35%', deliveryTime: '3-5 days', isNew: true },
  { id: 'o3', brandName: 'Premium Collections', brandImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=200&fit=crop', rewardRange: 'Up to 40%', deliveryTime: '1-2 days' },
  { id: 'o4', brandName: 'Heritage Crafts', brandImage: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=200&h=200&fit=crop', rewardRange: 'Up to 25%', deliveryTime: '4-6 days' },
];

export const X3_StoreListingScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<ExploreStackParamList, 'X3_StoreListing'>>();

  const [viewMode, setViewMode] = useState<divMode>(route.params?.filter || 'nearMe');
  const [activeFilter, setActiveFilter] = useState<FilterOption>('recommended');

  const filters: { key: FilterOption; label: string }[] = [
    { key: 'recommended', label: 'Recommended' },
    { key: 'highestRewards', label: 'Highest Rewards' },
    { key: 'newPartner', label: 'New Partners' },
  ];

  const stores = viewMode === 'nearMe' ? nearMeStores : onlineStores;

  const renderStoreCard = ({ item }: { item: Store }) => (
    <div
      style={style={{...styles.storeCard}
      onClick={() => navigate('/prive/X4_StoreDetail', { storeId: item.id })}
      onClick={() => {}}
    >
      {/* Brand Logo */}
      <Image
        src={{ uri: item.brandImage }}
        style={style={{...styles.storeLogo}
      />

      {/* Store Info */}
      <div style={style={{...styles.storeInfo}>
        <div style={style={{...styles.storeHeader}>
          <span variant="body" color={colors.text.primary}>
            {item.brandName}
          </span>
          {item.isNew && (
            <div style={style={{...styles.newTag}>
              <span variant="caption" gold>New</span>
            </div>
          )}
        </div>

        <div style={style={{...styles.storeDetails}>
          <span variant="caption" gold>Privé Partner</span>
        </div>

        <span variant="bodySmall" gold>
          {item.rewardRange} Privé Rewards
        </span>

        <div style={style={{...styles.storeFooter}>
          {viewMode === 'nearMe' ? (
            <>
              <span variant="caption" color={colors.text.tertiary}>
                {item.distance}
              </span>
              <span variant="caption" color={colors.text.tertiary}> · </span>
              <Text
                variant="caption"
                color={item.isOpen ? colors.status.success : colors.text.tertiary}
              >
                {item.isOpen ? 'Open now' : 'Closed'}
              </span>
            </>
          ) : (
            <span variant="caption" color={colors.text.tertiary}>
              Delivery: {item.deliveryTime}
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={style={{...styles.storeCta}>
        <span variant="caption" gold>View →</span>
      </div>
    </div>
  );

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title="Privé Stores"
        showBack
        showWallet={false}
      />

      {/* View Mode Toggle */}
      <div style={style={{...styles.toggleContainer}>
        <div
          style={[style={{...styles.toggleOption, viewMode === 'nearMe' && style={{...styles.toggleOptionActive]}
          onClick={() => setViewMode('nearMe')}
        >
          <Text
            variant="body"
            color={viewMode === 'nearMe' ? colors.gold.primary : colors.text.secondary}
          >
            Near Me
          </span>
        </div>
        <div
          style={[style={{...styles.toggleOption, viewMode === 'online' && style={{...styles.toggleOptionActive]}
          onClick={() => setViewMode('online')}
        >
          <Text
            variant="body"
            color={viewMode === 'online' ? colors.gold.primary : colors.text.secondary}
          >
            Online
          </span>
        </div>
      </div>

      {/* Soft Filters */}
      <div
        horizontal
        
        style={style={{...styles.filtersScroll}
        contentContainerStyle={style={{...styles.filtersContent}
      >
        {filters.map((filter) => (
          <div
            key={filter.key}
            style={[style={{...styles.filterChip, activeFilter === filter.key && style={{...styles.filterChipActive]}
            onClick={() => setActiveFilter(filter.key)}
          >
            <Text
              variant="bodySmall"
              color={activeFilter === filter.key ? colors.gold.primary : colors.text.secondary}
            >
              {filter.label}
            </span>
          </div>
        ))}
      </div>

      {/* Store List */}
      <FlatList
        data={stores}
        renderItem={renderStoreCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={style={{...styles.listContent}
        
        ItemSeparatorComponent={() => <div style={style={{...styles.separator} />}
      />
    </ScreenContainer>
  );
};

const styles = {
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[1],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  toggleOption: {
    flex: 1,
    paddingVertical: spacing[3],
    alignItems: 'center',
    borderRadius: borderRadius.lg,
  },
  toggleOptionActive: {
    backgroundColor: colors.transparent.gold10,
  },

  filtersScroll: {
    marginTop: spacing[4],
  },
  filtersContent: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  filterChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    backgroundColor: colors.background.card,
    borderWidth: 1,
    borderColor: colors.border.primary,
    marginRight: spacing[2],
  },
  filterChipActive: {
    backgroundColor: colors.transparent.gold10,
    borderColor: colors.border.goldMuted,
  },

  listContent: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
    paddingBottom: floatingTabBarTotalHeight + spacing[4],
  },
  separator: {
    height: spacing[3],
  },

  storeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  storeLogo: {
    width: 60,
    height: 60,
    borderRadius: borderRadius.lg,
    marginRight: spacing[4],
  },
  storeInfo: {
    flex: 1,
    gap: spacing[1],
  },
  storeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  newTag: {
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    backgroundColor: colors.transparent.gold10,
    borderRadius: borderRadius.sm,
  },
  storeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[1],
  },
  storeCta: {
    paddingLeft: spacing[3],
  },
};

export default X3_StoreListingScreen;
