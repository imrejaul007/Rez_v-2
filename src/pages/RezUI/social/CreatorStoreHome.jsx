import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
  ShoppingBag
} from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';
import CreatorCard from '../../components/creator/CreatorCard';
import BottomNav from '../../components/layout/BottomNav';

/**
 * Creator Store Home Page
 * Entry point for discovering creators and their picks
 */
const CreatorStoreHome = () => {
  const {
    creators,
    getFeaturedCreators,
    getTrendingPicks,
    getFeaturedCollections,
    searchCreators
  } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const featuredCreators = getFeaturedCreators();
  const trendingPicks = getTrendingPicks().slice(0, 6);
  const featuredCollections = getFeaturedCollections();

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      const results = searchCreators(query);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pb-24`}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 px-6 py-12 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Curated by Experts</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Creator Store
          </h1>
          <p className="text-lg text-purple-100">
            Discover products recommended by trusted creators
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-6 mb-8">
        <div className={`relative ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } rounded-2xl shadow-lg`}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search creators..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className={`w-full pl-12 pr-4 py-4 rounded-2xl ${
              isDark
                ? 'bg-gray-800 text-white placeholder-gray-400'
                : 'bg-white text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
        </div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="px-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Search Results ({searchResults.length})
          </h2>
          {searchResults.length > 0 ? (
            <div className="space-y-3">
              {searchResults.map(creator => (
                <CreatorCard key={creator.id} creator={creator} compact />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">
                No creators found for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      )}

      {/* Main Content - Only show when not searching */}
      {!isSearching && (
        <div className="px-6 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-xl text-center ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {creators.length}+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Creators
              </div>
            </div>
            <div className={`p-4 rounded-xl text-center ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                4.8
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Avg Rating
              </div>
            </div>
            <div className={`p-4 rounded-xl text-center ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <ShoppingBag className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                10k+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Products
              </div>
            </div>
          </div>

          {/* Featured Creators */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Featured Creators
              </h2>
              <Link
                to="/creators/all"
                className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredCreators.map(creator => (
                <CreatorCard key={creator.id} creator={creator} />
              ))}
            </div>
          </div>

          {/* Trending Picks */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-pink-600" />
                Trending Picks
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {trendingPicks.map(pick => (
                <Link
                  key={pick.id}
                  to={`/creators/${pick.creatorId}/pick/${pick.id}`}
                  className={`rounded-xl overflow-hidden ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={pick.productImage}
                      alt={pick.productName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-pink-600" />
                      <span className="text-xs font-medium text-gray-900 dark:text-white">
                        {(pick.stats.views / 1000).toFixed(1)}k views
                      </span>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                      {pick.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      by {creators.find(c => c.id === pick.creatorId)?.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Collections */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-green-600" />
                Curated Collections
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {featuredCollections.map(collection => {
                const creator = creators.find(c => c.id === collection.creatorId);
                return (
                  <Link
                    key={collection.id}
                    to={`/creators/${creator?.username}/collection/${collection.id}`}
                    className={`rounded-2xl overflow-hidden ${
                      isDark ? 'bg-gray-800' : 'bg-white'
                    } shadow-md hover:shadow-lg transition-all`}
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={collection.coverImage}
                        alt={collection.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {collection.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          by {creator?.name}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {collection.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>{collection.picks.length} products</span>
                        <span>{collection.stats.totalViews.toLocaleString()} views</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Creators Grid */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                All Creators
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {creators.map(creator => (
                <CreatorCard key={creator.id} creator={creator} />
              ))}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default CreatorStoreHome;
