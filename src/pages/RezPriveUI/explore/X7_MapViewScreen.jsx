/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X7 - Privé Map / Proximity View
 *
 * Purpose: For offline discovery.
 *
 * Shows:
 * - Only Privé stores
 * - Dark map theme
 * - Gold pins
 * - Tap pin → store detail
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigate } from 'react-router-dom';
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';

const { width: window.innerWidth, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface MapStore {
  id: string;
  name: string;
  category: string;
  rewardRange: string;
  distance: string;
  x: number; // percentage position on map
  y: number;
}

const mapStores: MapStore[] = [
  { id: '1', name: 'The Grand Café', category: 'Dining', rewardRange: '35%', distance: '2.1 km', x: 45, y: 35 },
  { id: '2', name: 'Artisan Gallery', category: 'Luxury', rewardRange: '40%', distance: '3.5 km', x: 65, y: 50 },
  { id: '3', name: 'Heritage Boutique', category: 'Fashion', rewardRange: '30%', distance: '4.2 km', x: 30, y: 60 },
  { id: '4', name: 'Maison Luxe', category: 'Luxury', rewardRange: '45%', distance: '1.8 km', x: 55, y: 45 },
  { id: '5', name: 'Premium Spa', category: 'Wellness', rewardRange: '35%', distance: '2.8 km', x: 40, y: 70 },
];

export const X7_MapViewScreen: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStore, setSelectedStore] = useState<MapStore | null>(null);

  const handlePinPress = (store: MapStore) => {
    setSelectedStore(store);
  };

  const handleStoreDetail = () => {
    if (selectedStore) {
      navigate('/prive/X4_StoreDetail', { storeId: selectedStore.id };
    }
  };

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false} padded={false}>
      <div style={style={{...styles.container}>
        {/* Header */}
        <div style={style={{...styles.header}>
          <PriveNavigationHeader
            title="Privé Map"
            showBack
            showWallet={false}
          />
        </div>

        {/* Map Placeholder (Dark Theme) */}
        <div style={style={{...styles.mapContainer}>
          {/* Dark map background with grid */}
          <div style={style={{...styles.mapBackground}>
            {/* Grid lines for visual effect */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                style={[style={{...styles.gridLineH, { top: `${(i + 1) * 15}%` }]}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <div
                key={`v-${i}`}
                style={[style={{...styles.gridLineV, { left: `${(i + 1) * 15}%` }]}
              />
            ))}

            {/* User location */}
            <div style={[style={{...styles.userPin, { left: '50%', top: '50%' }]}>
              <div style={style={{...styles.userPinInner} />
              <div style={style={{...styles.userPinRing} />
            </div>

            {/* Store Pins */}
            {mapStores.map((store) => (
              <div
                key={store.id}
                style={[
                  style={{...styles.storePin,
                  { left: `${store.x}%`, top: `${store.y}%` },
                  selectedStore?.id === store.id && style={{...styles.storePinSelected,
                ]}
                onClick={() => handlePinPress(store)}
              >
                <span variant="caption" gold>◆</span>
              </div>
            ))}
          </div>

          {/* Map Legend */}
          <div style={style={{...styles.legend}>
            <div style={style={{...styles.legendItem}>
              <div style={style={{...styles.legendDotGold} />
              <span variant="caption" color={colors.text.tertiary}>
                Privé Store
              </span>
            </div>
            <div style={style={{...styles.legendItem}>
              <div style={style={{...styles.legendDotBlue} />
              <span variant="caption" color={colors.text.tertiary}>
                You
              </span>
            </div>
          </div>
        </div>

        {/* Store Preview Card (when selected) */}
        {selectedStore && (
          <div
            style={style={{...styles.previewCard}
            onClick={handleStoreDetail}
            onClick={() => {}}
          >
            <div style={style={{...styles.previewContent}>
              <div style={style={{...styles.previewIcon}>
                <span variant="body" color={colors.text.secondary}>
                  {selectedStore.name.charAt(0)}
                </span>
              </div>
              <div style={style={{...styles.previewInfo}>
                <span variant="body" color={colors.text.primary}>
                  {selectedStore.name}
                </span>
                <div style={style={{...styles.previewDetails}>
                  <span variant="caption" gold>Privé</span>
                  <span variant="caption" color={colors.text.tertiary}> · </span>
                  <span variant="caption" color={colors.text.secondary}>
                    {selectedStore.category}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}> · </span>
                  <span variant="caption" color={colors.text.tertiary}>
                    {selectedStore.distance}
                  </span>
                </div>
              </div>
              <div style={style={{...styles.previewReward}>
                <span variant="bodyLarge" gold>
                  {selectedStore.rewardRange}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  rewards
                </span>
              </div>
            </div>
            <div style={style={{...styles.previewCta}>
              <span variant="bodySmall" gold>View Store →</span>
            </div>
          </div>
        )}

        {/* Store List (scrollable at bottom) */}
        <div style={style={{...styles.storeListContainer}>
          <span variant="label" color={colors.text.tertiary} style={style={{...styles.listLabel}>
            Nearby Privé Stores
          </span>
          <div
            horizontal
            
            contentContainerStyle={style={{...styles.storeList}
          >
            {mapStores.map((store) => (
              <div
                key={store.id}
                style={[
                  style={{...styles.storeChip,
                  selectedStore?.id === store.id && style={{...styles.storeChipSelected,
                ]}
                onClick={() => handlePinPress(store)}
              >
                <Text
                  variant="bodySmall"
                  color={selectedStore?.id === store.id ? colors.gold.primary : colors.text.secondary}
                >
                  {store.name}
                </span>
                <span variant="caption" color={colors.text.tertiary}>
                  {store.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: spacing[5],
  },

  mapContainer: {
    flex: 1,
    marginTop: 80,
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    position: 'relative',
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: colors.border.primary,
    opacity: 0.3,
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: colors.border.primary,
    opacity: 0.3,
  },

  userPin: {
    position: 'absolute',
    width: 20,
    height: 20,
    marginLeft: -10,
    marginTop: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPinInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4A90D9',
  },
  userPinRing: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(74, 144, 217, 0.2)',
  },

  storePin: {
    position: 'absolute',
    width: 32,
    height: 32,
    marginLeft: -16,
    marginTop: -16,
    borderRadius: 16,
    backgroundColor: colors.transparent.gold10,
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storePinSelected: {
    backgroundColor: colors.gold.primary,
    transform: [{ scale: 1.2 }],
  },

  legend: {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
    padding: spacing[3],
    gap: spacing[2],
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  legendDotGold: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gold.primary,
  },
  legendDotBlue: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A90D9',
  },

  previewCard: {
    position: 'absolute',
    bottom: floatingTabBarTotalHeight + 100,
    left: spacing[5],
    right: spacing[5],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius['2xl'],
    padding: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  previewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  previewInfo: {
    flex: 1,
    gap: spacing[1],
  },
  previewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewReward: {
    alignItems: 'center',
  },
  previewCta: {
    marginTop: spacing[3],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
    alignItems: 'center',
  },

  storeListContainer: {
    position: 'absolute',
    bottom: floatingTabBarTotalHeight,
    left: 0,
    right: 0,
    backgroundColor: colors.background.primary,
    paddingTop: spacing[4],
    paddingBottom: spacing[4],
    borderTopWidth: 1,
    borderTopColor: colors.border.primary,
  },
  listLabel: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[3],
  },
  storeList: {
    paddingHorizontal: spacing[5],
    gap: spacing[2],
  },
  storeChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    marginRight: spacing[2],
    gap: spacing[1],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  storeChipSelected: {
    backgroundColor: colors.transparent.gold10,
    borderColor: colors.border.goldMuted,
  },
};

export default X7_MapViewScreen;
