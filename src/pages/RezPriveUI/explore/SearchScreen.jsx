/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * Search Screen - Advanced Search & Discovery
 *
 * Premium search experience with:
 * - Real-time search suggestions
 * - Category filters (Stores, Offers, Campaigns, Content)
 * - Recent searches history
 * - Trending searches
 * - Voice search placeholder
 * - Smart filters
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Keyboard,
} from 'react-native';
// SafeAreaView removed
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// ============================================
// TYPES
// ============================================

type SearchCategory = 'all' | 'stores' | 'offers' | 'campaigns' | 'content';

interface SearchResult {
  id: string;
  type: 'store' | 'offer' | 'campaign' | 'content';
  title: string;
  subtitle: string;
  icon: string;
  highlight?: string;
  reward?: string;
}

interface RecentSearch {
  id: string;
  query: string;
  timestamp: string;
}

interface TrendingSearch {
  id: string;
  query: string;
  category: string;
  hot?: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}

// ============================================
// MOCK DATA
// ============================================

const categories: { id: SearchCategory; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: '🔍' },
  { id: 'stores', label: 'Stores', icon: '🏪' },
  { id: 'offers', label: 'Offers', icon: '🎁' },
  { id: 'campaigns', label: 'Campaigns', icon: '📱' },
  { id: 'content', label: 'Content', icon: '📝' },
];

const recentSearches: RecentSearch[] = [
  { id: '1', query: 'luxury dining', timestamp: '2h ago' },
  { id: '2', query: 'The Grand Café', timestamp: '1d ago' },
  { id: '3', query: 'wellness offers', timestamp: '2d ago' },
  { id: '4', query: 'fashion campaign', timestamp: '3d ago' },
];

const trendingSearches: TrendingSearch[] = [
  { id: '1', query: 'Holiday Collections', category: 'Offers', hot: true },
  { id: '2', query: 'Maison Luxe', category: 'Stores' },
  { id: '3', query: 'Lifestyle Campaign', category: 'Campaigns', hot: true },
  { id: '4', query: 'Spa & Wellness', category: 'Stores' },
  { id: '5', query: 'Fine Dining', category: 'Offers' },
  { id: '6', query: 'Fashion Week', category: 'Campaigns' },
];

const mockResults: SearchResult[] = [
  { id: '1', type: 'store', title: 'The Grand Café', subtitle: 'Luxury Dining • 2.1 km', icon: '🍽️', reward: '35%' },
  { id: '2', type: 'store', title: 'Maison Luxe', subtitle: 'Fashion & Lifestyle • 1.8 km', icon: '👗', reward: '45%' },
  { id: '3', type: 'offer', title: 'Holiday Spa Package', subtitle: 'Premium Spa • Ends in 3 days', icon: '🧖', reward: '40%' },
  { id: '4', type: 'offer', title: 'Exclusive Dining Experience', subtitle: 'The Grand Café • Limited', icon: '✨', reward: '50%' },
  { id: '5', type: 'campaign', title: 'Luxury Lifestyle Story', subtitle: 'Fashion Brand • 500 ReZ', icon: '📸', highlight: 'New' },
  { id: '6', type: 'campaign', title: 'Holiday Collection Reveal', subtitle: 'Premium Partner • 750 ReZ', icon: '🎄', highlight: 'Trending' },
  { id: '7', type: 'content', title: 'Style Guide: Winter Edition', subtitle: 'Editorial • 5 min read', icon: '📖' },
  { id: '8', type: 'content', title: 'Exclusive Interview: Designer', subtitle: 'Video • 12 min', icon: '🎬' },
];

const filterOptions: FilterOption[] = [
  { id: 'nearby', label: 'Nearby', icon: '📍', active: false },
  { id: 'rewards', label: 'High Rewards', icon: '💎', active: false },
  { id: 'new', label: 'New', icon: '✨', active: false },
  { id: 'trending', label: 'Trending', icon: '🔥', active: false },
];

// ============================================
// COMPONENT
// ============================================

export const SearchScreen: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState(filterOptions);
  const [showFilters, setShowFilters] = useState(false);

  const inputRef = useRef<TextInput>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    inputRef.current?.focus();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = mockResults.filter(r => {
          const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.subtitle.toLowerCase().includes(query.toLowerCase());
          const matchesCategory = selectedCategory === 'all' || r.type === selectedCategory.slice(0, -1);
          return matchesQuery && matchesCategory;
        };
        setResults(filtered.length > 0 ? filtered : mockResults.slice(0, 4));
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query, selectedCategory]);

  const handleBack = () => navigate(-1);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleClearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleRecentSearch = (search: RecentSearch) => {
    setQuery(search.query);
  };

  const handleTrendingSearch = (search: TrendingSearch) => {
    setQuery(search.query);
  };

  const handleResultPress = (result: SearchResult) => {
    Keyboard.dismiss();
    switch (result.type) {
      case 'store':
        navigate('/prive/X4_StoreDetail', { storeId: result.id };
        break;
      case 'offer':
        navigate('/prive/C2_OfferDetail', { offerId: result.id };
        break;
      case 'campaign':
        navigate('/prive/C3_BrandInvitation', { campaignId: result.id };
        break;
      default:
        break;
    }
  };

  const toggleFilter = (filterId: string) => {
    setFilters(prev => prev.map(f =>
      f.id === filterId ? { ...f, active: !f.active } : f
    ));
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'store': return { bg: '#10B98120', color: '#10B981' };
      case 'offer': return { bg: '#F59E0B20', color: '#F59E0B' };
      case 'campaign': return { bg: '#8B5CF620', color: '#8B5CF6' };
      case 'content': return { bg: '#3B82F620', color: '#3B82F6' };
      default: return { bg: '#6B728020', color: '#6B7280' };
    }
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <div style={style={{...styles.container}>
      <Animated.View style={[style={{...styles.content, { opacity: fadeAnim }]}>
        {/* Search Header */}
        <div style={style={{...styles.searchHeader}>
          <div style={style={{...styles.backButton} onClick={handleBack}>
            <span style={style={{...styles.backIcon}>←</span>
          </div>
          <div style={style={{...styles.searchInputContainer}>
            <span style={style={{...styles.searchIcon}>🔍</span>
            <TextInput
              ref={inputRef}
              style={style={{...styles.searchInput}
              value={query}
              onChangeText={handleSearch}
              placeholder="Search stores, offers, campaigns..."
              placeholderTextColor={colors.text.tertiary}
              returnKeyType="search"
            />
            {query.length > 0 && (
              <div onClick={handleClearSearch} style={style={{...styles.clearButton}>
                <span style={style={{...styles.clearIcon}>×</span>
              </div>
            )}
          </div>
          <div
            style={style={{...styles.filterButton}
            onClick={() => setShowFilters(!showFilters)}
          >
            <span style={style={{...styles.filterIcon}>⚙️</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          horizontal
          
          contentContainerStyle={style={{...styles.categoryScroll}
        >
          {categories.map(cat => (
            <div
              key={cat.id}
              style={[
                style={{...styles.categoryChip,
                selectedCategory === cat.id && style={{...styles.categoryChipActive,
              ]}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span style={style={{...styles.categoryIcon}>{cat.icon}</span>
              <Text
                variant="bodySmall"
                color={selectedCategory === cat.id ? colors.gold.primary : colors.text.secondary}
              >
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div style={style={{...styles.filtersPanel}>
            <span variant="label" color={colors.text.tertiary} style={style={{...styles.filtersLabel}>
              FILTERS
            </span>
            <div style={style={{...styles.filtersRow}>
              {filters.map(filter => (
                <div
                  key={filter.id}
                  style={[style={{...styles.filterChip, filter.active && style={{...styles.filterChipActive]}
                  onClick={() => toggleFilter(filter.id)}
                >
                  <span style={style={{...styles.filterChipIcon}>{filter.icon}</span>
                  <Text
                    variant="caption"
                    color={filter.active ? colors.gold.primary : colors.text.secondary}
                  >
                    {filter.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          style={style={{...styles.scrollView}
          
          keyboardShouldPersistTaps="handled"
        >
          {/* Search Results */}
          {query.length > 0 && (
            <div style={style={{...styles.section}>
              {isSearching ? (
                <div style={style={{...styles.searchingContainer}>
                  <span variant="body" color={colors.text.tertiary}>Searching...</span>
                </div>
              ) : results.length > 0 ? (
                <>
                  <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                    RESULTS ({results.length})
                  </span>
                  {results.map(result => {
                    const iconStyle = getResultIcon(result.type);
                    return (
                      <div
                        key={result.id}
                        style={style={{...styles.resultCard}
                        onClick={() => handleResultPress(result)}
                      >
                        <div style={[style={{...styles.resultIcon, { backgroundColor: iconStyle.bg }]}>
                          <span style={style={{...styles.resultEmoji}>{result.icon}</span>
                        </div>
                        <div style={style={{...styles.resultInfo}>
                          <div style={style={{...styles.resultHeader}>
                            <span variant="body" color={colors.text.primary}>{result.title}</span>
                            {result.highlight && (
                              <div style={style={{...styles.highlightBadge}>
                                <span variant="caption" color={colors.gold.primary}>
                                  {result.highlight}
                                </span>
                              </div>
                            )}
                          </div>
                          <span variant="caption" color={colors.text.tertiary}>{result.subtitle}</span>
                        </div>
                        {result.reward && (
                          <div style={style={{...styles.rewardBadge}>
                            <span variant="bodySmall" gold>{result.reward}</span>
                          </div>
                        )}
                        <span style={style={{...styles.resultArrow}>›</span>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div style={style={{...styles.noResultsContainer}>
                  <span style={style={{...styles.noResultsEmoji}>🔍</span>
                  <span variant="body" color={colors.text.primary}>No results found</span>
                  <span variant="caption" color={colors.text.tertiary}>
                    Try adjusting your search or filters
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div style={style={{...styles.section}>
              <div style={style={{...styles.sectionHeader}>
                <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                  RECENT SEARCHES
                </span>
                <div>
                  <span variant="caption" gold>Clear All</span>
                </div>
              </div>
              {recentSearches.map(search => (
                <div
                  key={search.id}
                  style={style={{...styles.recentItem}
                  onClick={() => handleRecentSearch(search)}
                >
                  <div style={style={{...styles.recentIcon}>
                    <span style={{ fontSize: 14 }}>🕐</span>
                  </div>
                  <span variant="body" color={colors.text.primary} style={style={{...styles.recentQuery}>
                    {search.query}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}>{search.timestamp}</span>
                </div>
              ))}
            </div>
          )}

          {/* Trending Searches */}
          {query.length === 0 && (
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                TRENDING
              </span>
              <div style={style={{...styles.trendingGrid}>
                {trendingSearches.map(search => (
                  <div
                    key={search.id}
                    style={style={{...styles.trendingChip}
                    onClick={() => handleTrendingSearch(search)}
                  >
                    {search.hot && <span style={style={{...styles.hotIcon}>🔥</span>}
                    <span variant="bodySmall" color={colors.text.primary}>
                      {search.query}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Access */}
          {query.length === 0 && (
            <div style={style={{...styles.section}>
              <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
                QUICK ACCESS
              </span>
              <div style={style={{...styles.quickAccessGrid}>
                <div style={style={{...styles.quickAccessCard}>
                  <div style={[style={{...styles.quickAccessIcon, { backgroundColor: '#10B98120' }]}>
                    <span style={{ fontSize: 24 }}>📍</span>
                  </div>
                  <span variant="bodySmall" color={colors.text.primary}>Nearby</span>
                  <span variant="caption" color={colors.text.tertiary}>12 stores</span>
                </div>
                <div style={style={{...styles.quickAccessCard}>
                  <div style={[style={{...styles.quickAccessIcon, { backgroundColor: '#F59E0B20' }]}>
                    <span style={{ fontSize: 24 }}>🎁</span>
                  </div>
                  <span variant="bodySmall" color={colors.text.primary}>New Offers</span>
                  <span variant="caption" color={colors.text.tertiary}>8 available</span>
                </div>
                <div style={style={{...styles.quickAccessCard}>
                  <div style={[style={{...styles.quickAccessIcon, { backgroundColor: '#8B5CF620' }]}>
                    <span style={{ fontSize: 24 }}>📱</span>
                  </div>
                  <span variant="bodySmall" color={colors.text.primary}>Campaigns</span>
                  <span variant="caption" color={colors.text.tertiary}>5 invites</span>
                </div>
                <div style={style={{...styles.quickAccessCard}>
                  <div style={[style={{...styles.quickAccessIcon, { backgroundColor: '#EC489920' }]}>
                    <span style={{ fontSize: 24 }}>⭐</span>
                  </div>
                  <span variant="bodySmall" color={colors.text.primary}>Top Rated</span>
                  <span variant="caption" color={colors.text.tertiary}>Premium</span>
                </div>
              </div>
            </div>
          )}

          <div style={style={{...styles.bottomSpace} />
        </div>
      </Animated.View>
    </div>
  );
};

// ============================================
// STYLES
// ============================================

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  content: {
    flex: 1,
  },

  // Search Header
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    gap: spacing[3],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: colors.text.primary,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing[4],
    height: 44,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: spacing[2],
  },
  searchInput: {
    flex: 1,
    color: colors.text.primary,
    fontSize: 15,
  },
  clearButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearIcon: {
    fontSize: 18,
    color: colors.text.tertiary,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 18,
  },

  // Category Tabs
  categoryScroll: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
    gap: spacing[2],
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    marginRight: spacing[2],
    gap: spacing[2],
  },
  categoryChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  categoryIcon: {
    fontSize: 14,
  },

  // Filters
  filtersPanel: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  filtersLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },
  filtersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.lg,
    gap: spacing[2],
  },
  filterChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  filterChipIcon: {
    fontSize: 12,
  },

  scrollView: {
    flex: 1,
  },

  // Sections
  section: {
    paddingHorizontal: spacing[5],
    marginBottom: spacing[6],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },

  // Search Results
  searchingContainer: {
    paddingVertical: spacing[8],
    alignItems: 'center',
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    marginBottom: spacing[2],
  },
  resultIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  resultEmoji: {
    fontSize: 22,
  },
  resultInfo: {
    flex: 1,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
  },
  highlightBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[2],
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  rewardBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    marginRight: spacing[2],
  },
  resultArrow: {
    fontSize: 20,
    color: colors.text.tertiary,
  },
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: spacing[10],
  },
  noResultsEmoji: {
    fontSize: 48,
    marginBottom: spacing[4],
    opacity: 0.5,
  },

  // Recent Searches
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  recentIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  recentQuery: {
    flex: 1,
  },

  // Trending
  trendingGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[2],
  },
  trendingChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    gap: spacing[2],
  },
  hotIcon: {
    fontSize: 12,
  },

  // Quick Access
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  quickAccessCard: {
    width: '47%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    alignItems: 'center',
    gap: spacing[2],
  },
  quickAccessIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },

  bottomSpace: {
    height: spacing[10],
  },
};

export default SearchScreen;
