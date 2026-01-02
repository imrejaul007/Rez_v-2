import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, Mic, Camera, Sparkles, TrendingUp, Clock,
  Star, Tag, Filter, X, Volume2, Loader2, SlidersHorizontal
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AISmartSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([
    'Wireless earbuds under 2000',
    'Organic groceries near me',
    'Trending fashion for summer',
    'Best gaming laptops 2026'
  ]);
  const [recentSearches, setRecentSearches] = useState([
    { id: 1, query: 'Nike running shoes', time: '2 hours ago' },
    { id: 2, query: 'Samsung Galaxy S24', time: '1 day ago' },
    { id: 3, query: 'Protein powder', time: '3 days ago' }
  ]);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    category: 'all',
    rating: 0,
    inStock: false
  });
  const [showFilters, setShowFilters] = useState(false);

  // API Comment: POST /api/ai/voice-search
  // Payload: { audio: base64, language: 'en', context: userPreferences }
  // Response: { transcript: string, intent: string, entities: [] }
  const handleVoiceSearch = async () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('Show me trending wireless earbuds');
      handleSearch('Show me trending wireless earbuds');
    }, 2000);
  };

  // API Comment: POST /api/ai/smart-search
  // Payload: { query: string, filters: {}, userContext: {}, location: {} }
  // ML Model: NLP for intent recognition, product embeddings for semantic search
  // Response: { results: [], suggestions: [], insights: {} }
  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setIsProcessing(true);

    // Simulate AI search
    setTimeout(() => {
      setSearchResults([
        {
          id: 1,
          name: 'Boat Airdopes 141',
          price: 1299,
          originalPrice: 2999,
          rating: 4.3,
          reviews: 15420,
          image: '🎧',
          merchant: 'Amazon',
          aiScore: 95,
          matchReason: 'Trending, Budget-friendly, High ratings'
        },
        {
          id: 2,
          name: 'OnePlus Buds Z2',
          price: 2499,
          originalPrice: 4999,
          rating: 4.5,
          reviews: 8930,
          image: '🎧',
          merchant: 'Flipkart',
          aiScore: 92,
          matchReason: 'Premium quality, Active noise cancellation'
        },
        {
          id: 3,
          name: 'Noise Buds VS104',
          price: 999,
          originalPrice: 2499,
          rating: 4.1,
          reviews: 12500,
          image: '🎧',
          merchant: 'Myntra',
          aiScore: 88,
          matchReason: 'Best value for money, Popular choice'
        }
      ]);
      setIsProcessing(false);
    }, 1500);
  };

  // API Comment: GET /api/ai/search-suggestions
  // Payload: { partial: string, userHistory: [], trending: true }
  // ML Model: Autocomplete with personalization
  const handleInputChange = (value) => {
    setSearchQuery(value);
    // Real-time suggestions would be fetched here
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-semibold">AI Smart Search</h1>
            <p className="text-xs text-purple-100">Voice • Image • Text powered search</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 flex items-center gap-2">
            <Search className="w-5 h-5 ml-3 text-purple-200" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
              placeholder="Try 'Show me budget phones under 15k'"
              className="flex-1 bg-transparent text-white placeholder-purple-200 px-2 py-3 outline-none"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="p-2">
                <X className="w-4 h-4 text-purple-200" />
              </button>
            )}
            <button
              onClick={() => navigate('/ai/image-search')}
              className="p-3 hover:bg-white/10 rounded-lg"
            >
              <Camera className="w-5 h-5" />
            </button>
            <button
              onClick={handleVoiceSearch}
              className={`p-3 rounded-lg ${isListening ? 'bg-red-500 animate-pulse' : 'hover:bg-white/10'}`}
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          {/* Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mt-3 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {Object.values(filters).some(v => v && v !== 'all') && (
              <span className="px-2 py-0.5 bg-yellow-400 text-purple-900 rounded-full text-xs font-medium">
                Active
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              >
                <option value="all">All Prices</option>
                <option value="0-1000">Under ₹1,000</option>
                <option value="1000-5000">₹1,000 - ₹5,000</option>
                <option value="5000-15000">₹5,000 - ₹15,000</option>
                <option value="15000+">Above ₹15,000</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="grocery">Grocery</option>
                <option value="beauty">Beauty</option>
              </select>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm">In Stock Only</span>
            </label>
          </div>
        </div>
      )}

      {/* Processing Indicator */}
      {isProcessing && (
        <div className="flex items-center justify-center gap-3 py-8">
          <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
          <span className="text-gray-600">AI is searching for best results...</span>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">
              AI Matched Results ({searchResults.length})
            </h2>
            <div className="flex items-center gap-1 text-purple-600 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI Ranked</span>
            </div>
          </div>

          <div className="space-y-3">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-300 transition-all"
              >
                <div className="flex gap-3">
                  <div className="text-5xl">{result.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-medium text-gray-900">{result.name}</h3>
                      <div className="flex items-center gap-1 px-2 py-1 bg-purple-50 rounded-lg">
                        <Sparkles className="w-3 h-3 text-purple-600" />
                        <span className="text-xs font-medium text-purple-600">{result.aiScore}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{result.matchReason}</p>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{result.rating}</span>
                        <span className="text-xs text-gray-500">({result.reviews.toLocaleString()})</span>
                      </div>
                      <div className="text-xs text-gray-500">• {result.merchant}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">₹{result.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-400 line-through">₹{result.originalPrice.toLocaleString()}</span>
                        <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
                          {Math.round((1 - result.price / result.originalPrice) * 100)}% OFF
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions Section */}
      {!searchQuery && !isProcessing && searchResults.length === 0 && (
        <div className="p-4 space-y-6">
          {/* Trending Searches */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h2 className="font-semibold text-gray-900">Trending Searches</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    handleSearch(suggestion);
                  }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:border-purple-300 hover:bg-purple-50 transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <h2 className="font-semibold text-gray-900">Recent Searches</h2>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search) => (
                  <button
                    key={search.id}
                    onClick={() => {
                      setSearchQuery(search.query);
                      handleSearch(search.query);
                    }}
                    className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-purple-300 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-gray-400" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">{search.query}</p>
                        <p className="text-xs text-gray-500">{search.time}</p>
                      </div>
                    </div>
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Voice Search Tip */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Mic className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Try Voice Search</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Just tap the mic and say what you're looking for. AI understands natural language!
                </p>
                <button
                  onClick={handleVoiceSearch}
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700"
                >
                  Try Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNavManager currentPage="explore" />
    </div>
  );
};

export default AISmartSearch;
