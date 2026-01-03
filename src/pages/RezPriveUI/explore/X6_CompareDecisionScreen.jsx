/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * X6 - Privé Compare & Decision Page
 *
 * Purpose: Help Privé users choose the best option, intelligently.
 *
 * Shows:
 * - Same product/service across multiple Privé stores
 * - Online vs offline comparison
 * - Reward comparison
 * - Delivery / distance
 * - Smart AI-powered search input
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {
  ScreenContainer,
  Text,
  Card,
  PriveNavigationHeader,
  Divider,
} from '../../components';
import { colors, spacing, borderRadius, floatingTabBarTotalHeight } from '../../theme';
import { ExploreStackParamList } from '../../navigation/types';

interface ComparisonItem {
  id: string;
  storeName: string;
  storeImage: string;
  rewardPercent: string;
  price?: string;
  distance?: string;
  deliveryTime?: string;
  isOnline: boolean;
  rating?: string;
  highlight?: string;
}

const sampleComparisons: ComparisonItem[] = [
  {
    id: '1',
    storeName: 'The Grand Café',
    storeImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&h=150&fit=crop',
    rewardPercent: '35%',
    price: '\u20B95,500',
    distance: '2.1 km',
    isOnline: false,
    rating: '4.8',
    highlight: 'Best Rewards',
  },
  {
    id: '2',
    storeName: 'Artisan Table',
    storeImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=150&fit=crop',
    rewardPercent: '30%',
    price: '\u20B94,800',
    distance: '3.5 km',
    isOnline: false,
    rating: '4.6',
    highlight: 'Closest',
  },
  {
    id: '3',
    storeName: 'Luxe Dining Online',
    storeImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=150&h=150&fit=crop',
    rewardPercent: '25%',
    price: '\u20B94,200',
    deliveryTime: '45 min',
    isOnline: true,
    rating: '4.5',
    highlight: 'Best Price',
  },
];

const suggestedQueries = [
  'Fine dining under \u20B910k',
  'Luxury spa near me',
  'Designer watch stores',
  'Private tasting experience',
];

export const X6_CompareDecisionScreen: React.FC = () => {
  const navigate = useNavigate();
  const route = useRoute<RouteProp<ExploreStackParamList, 'X6_CompareDecision'>>();

  const [searchQuery, setSearchQuery] = useState(route.params?.query || '');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const handleSuggestion = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  return (
    <ScreenContainer scrollable={false} hasFloatingTabBar={false}>
      <PriveNavigationHeader
        title="Find & Compare"
        showBack
        showWallet={false}
      />

      <div
        
        contentContainerStyle={style={{...styles.scrollContent}
      >
        {/* ============================================ */}
        {/* SMART SEARCH INPUT */}
        {/* ============================================ */}
        <div style={style={{...styles.searchSection}>
          <div style={style={{...styles.searchContainer}>
            <div style={style={{...styles.searchIcon}>
              <span style={style={{...styles.searchIconText}>◎</span>
            </div>
            <TextInput
              style={style={{...styles.searchInput}
              placeholder="What are you looking for?"
              placeholderTextColor={colors.text.tertiary}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <div
                style={style={{...styles.clearButton}
                onClick={() => setSearchQuery('')}
              >
                <span variant="caption" color={colors.text.tertiary}>✕</span>
              </div>
            )}
          </div>

          <span variant="caption" color={colors.text.tertiary} style={style={{...styles.searchHint}>
            AI-powered search within Privé partners only
          </span>
        </div>

        {/* ============================================ */}
        {/* SUGGESTIONS (Before Search) */}
        {/* ============================================ */}
        {!hasSearched && (
          <div style={style={{...styles.suggestionsSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Try searching for
            </span>

            <div style={style={{...styles.suggestionsGrid}>
              {suggestedQueries.map((query, index) => (
                <div
                  key={index}
                  style={style={{...styles.suggestionChip}
                  onClick={() => handleSuggestion(query)}
                >
                  <span variant="bodySmall" color={colors.text.secondary}>
                    {query}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================ */}
        {/* COMPARISON RESULTS */}
        {/* ============================================ */}
        {hasSearched && (
          <div style={style={{...styles.resultsSection}>
            <div style={style={{...styles.resultsHeader}>
              <span variant="label" color={colors.text.tertiary}>
                Comparing Options
              </span>
              <span variant="caption" color={colors.text.tertiary}>
                {sampleComparisons.length} Privé partners
              </span>
            </div>

            {sampleComparisons.map((item, index) => (
              <div
                key={item.id}
                style={[
                  style={{...styles.comparisonCard,
                  index === 0 && style={{...styles.comparisonCardBest,
                ]}
                onClick={() => navigate('/prive/X4_StoreDetail', { storeId: item.id })}
                onClick={() => {}}
              >
                {/* Highlight Badge */}
                {item.highlight && (
                  <div style={[
                    style={{...styles.highlightBadge,
                    index === 0 && style={{...styles.highlightBadgeBest,
                  ]}>
                    <Text
                      variant="caption"
                      color={index === 0 ? colors.gold.primary : colors.text.secondary}
                    >
                      {item.highlight}
                    </span>
                  </div>
                )}

                {/* Store Info */}
                <div style={style={{...styles.storeRow}>
                  <Image
                    src={{ uri: item.storeImage }}
                    style={style={{...styles.storeLogo}
                  />
                  <div style={style={{...styles.storeInfo}>
                    <span variant="body" color={colors.text.primary}>
                      {item.storeName}
                    </span>
                    <div style={style={{...styles.storeDetails}>
                      <span variant="caption" gold>Privé</span>
                      {item.rating && (
                        <>
                          <span variant="caption" color={colors.text.tertiary}> · </span>
                          <span variant="caption" color={colors.text.secondary}>
                            ★ {item.rating}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Comparison Data */}
                <div style={style={{...styles.comparisonGrid}>
                  <div style={style={{...styles.comparisonItem}>
                    <span variant="caption" color={colors.text.tertiary}>
                      Rewards
                    </span>
                    <span variant="bodyLarge" gold>
                      {item.rewardPercent}
                    </span>
                  </div>

                  {item.price && (
                    <div style={style={{...styles.comparisonItem}>
                      <span variant="caption" color={colors.text.tertiary}>
                        Price
                      </span>
                      <span variant="body" color={colors.text.primary}>
                        {item.price}
                      </span>
                    </div>
                  )}

                  <div style={style={{...styles.comparisonItem}>
                    <span variant="caption" color={colors.text.tertiary}>
                      {item.isOnline ? 'Delivery' : 'Distance'}
                    </span>
                    <span variant="body" color={colors.text.secondary}>
                      {item.isOnline ? item.deliveryTime : item.distance}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Comparison Note */}
            <span variant="caption" color={colors.text.tertiary} style={style={{...styles.comparisonNote}>
              All options are verified Privé partners with quality assurance
            </span>
          </div>
        )}

        {/* ============================================ */}
        {/* RECENT SEARCHES */}
        {/* ============================================ */}
        {!hasSearched && (
          <div style={style={{...styles.recentSection}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
              Recent Searches
            </span>

            <div style={style={{...styles.recentList}>
              <div
                style={style={{...styles.recentItem}
                onClick={() => handleSuggestion('Weekend brunch')}
              >
                <span variant="body" color={colors.text.secondary}>
                  Weekend brunch
                </span>
                <span variant="caption" color={colors.text.tertiary}>→</span>
              </div>

              <div
                style={style={{...styles.recentItem}
                onClick={() => handleSuggestion('Spa treatment')}
              >
                <span variant="body" color={colors.text.secondary}>
                  Spa treatment
                </span>
                <span variant="caption" color={colors.text.tertiary}>→</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ScreenContainer>
  );
};

const styles = {
  scrollContent: {
    paddingBottom: floatingTabBarTotalHeight + spacing[4],
  },

  searchSection: {
    paddingHorizontal: spacing[5],
    paddingTop: spacing[4],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.card,
    borderRadius: borderRadius['2xl'],
    paddingHorizontal: spacing[4],
    borderWidth: 1,
    borderColor: colors.border.goldMuted,
  },
  searchIcon: {
    marginRight: spacing[3],
  },
  searchIconText: {
    fontSize: 20,
    color: colors.gold.primary,
  },
  searchInput: {
    flex: 1,
    paddingVertical: spacing[4],
    color: colors.text.primary,
    fontSize: 16,
  },
  clearButton: {
    padding: spacing[2],
  },
  searchHint: {
    textAlign: 'center',
    marginTop: spacing[2],
  },

  suggestionsSection: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[8],
  },
  sectionLabel: {
    marginBottom: spacing[3],
  },
  suggestionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  suggestionChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },

  resultsSection: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[6],
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[4],
  },

  comparisonCard: {
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  comparisonCardBest: {
    borderColor: colors.border.goldMuted,
  },

  highlightBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    backgroundColor: colors.background.tertiary,
    borderRadius: borderRadius.sm,
    marginBottom: spacing[3],
  },
  highlightBadgeBest: {
    backgroundColor: colors.transparent.gold10,
  },

  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  storeLogo: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    marginRight: spacing[3],
  },
  storeInfo: {
    flex: 1,
    gap: spacing[1],
  },
  storeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  comparisonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: colors.border.secondary,
  },
  comparisonItem: {
    alignItems: 'center',
    gap: spacing[1],
  },

  comparisonNote: {
    textAlign: 'center',
    marginTop: spacing[4],
    fontStyle: 'italic',
  },

  recentSection: {
    paddingHorizontal: spacing[5],
    marginTop: spacing[8],
  },
  recentList: {
    gap: spacing[2],
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    backgroundColor: colors.background.card,
    borderRadius: borderRadius.lg,
  },
};

export default X6_CompareDecisionScreen;
