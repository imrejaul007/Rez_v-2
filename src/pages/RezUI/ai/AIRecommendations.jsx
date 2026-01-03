import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Sparkles, TrendingUp, Heart, Star, ShoppingBag, Zap,
  Clock, Filter, RefreshCw, ThumbsUp, ThumbsDown, Eye, ChevronRight,
  Tag, Award, Target, Users, Calendar, BarChart3
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIRecommendations = () => {
  const navigate = useNavigate();

  const [recommendationCategories, setRecommendationCategories] = useState([
    {
      id: 1,
      name: 'For You',
      icon: Sparkles,
      count: 24,
      color: 'purple',
      active: true
    },
    {
      id: 2,
      name: 'Trending',
      icon: TrendingUp,
      count: 18,
      color: 'orange',
      active: false
    },
    {
      id: 3,
      name: 'Similar Items',
      icon: Eye,
      count: 32,
      color: 'blue',
      active: false
    },
    {
      id: 4,
      name: 'Wishlist Based',
      icon: Heart,
      count: 15,
      color: 'red',
      active: false
    }
  ]);

  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      brand: 'Sony',
      price: 15999,
      originalPrice: 24999,
      rating: 4.6,
      reviews: 3420,
      image: '🎧',
      reason: 'Based on your recent search for audio products',
      matchScore: 95,
      category: 'Electronics',
      trending: true,
      fastDelivery: true,
      cashback: 800
    },
    {
      id: 2,
      name: 'Organic Honey Gift Set',
      brand: 'Organic India',
      price: 899,
      originalPrice: 1499,
      rating: 4.4,
      reviews: 890,
      image: '🍯',
      reason: 'People who bought groceries also loved this',
      matchScore: 88,
      category: 'Grocery',
      trending: false,
      fastDelivery: true,
      cashback: 45
    },
    {
      id: 3,
      name: 'Premium Yoga Mat',
      brand: 'Decathlon',
      price: 1299,
      originalPrice: 1999,
      rating: 4.5,
      reviews: 1250,
      image: '🧘',
      reason: 'Fits your fitness goals',
      matchScore: 92,
      category: 'Fitness',
      trending: true,
      fastDelivery: false,
      cashback: 65
    },
    {
      id: 4,
      name: 'Smart Watch Series 7',
      brand: 'Apple',
      price: 42999,
      originalPrice: 49999,
      rating: 4.8,
      reviews: 5670,
      image: '⌚',
      reason: 'Complements your tech collection',
      matchScore: 90,
      category: 'Electronics',
      trending: true,
      fastDelivery: true,
      cashback: 2150
    }
  ]);

  const [personalizationFactors, setPersonalizationFactors] = useState([
    { id: 1, factor: 'Purchase History', weight: 35, icon: ShoppingBag },
    { id: 2, factor: 'Browsing Behavior', weight: 25, icon: Eye },
    { id: 3, factor: 'Wishlist Items', weight: 20, icon: Heart },
    { id: 4, factor: 'Price Preferences', weight: 15, icon: Tag },
    { id: 5, factor: 'Trending Products', weight: 5, icon: TrendingUp }
  ]);

  const [insights, setInsights] = useState({
    totalRecommendations: 89,
    avgMatchScore: 91,
    clickedToday: 12,
    purchased: 3,
    savedForLater: 8
  });

  const [userPreferences, setUserPreferences] = useState({
    priceRange: 'mid-range',
    brands: ['Sony', 'Samsung', 'Apple', 'Nike'],
    categories: ['Electronics', 'Fashion', 'Grocery'],
    notifications: true
  });

  // API Comment: GET /api/ai/recommendations/personalized
  // Payload: { userId: string, context: {}, filters: {} }
  // ML Model: Collaborative filtering + Content-based recommendation
  // Response: { recommendations: [], scores: {}, reasons: [] }
  const fetchPersonalizedRecommendations = async () => {
    // Fetch AI-powered recommendations
  };

  // API Comment: POST /api/ai/recommendations/feedback
  // Payload: { productId: string, userId: string, feedback: 'like'|'dislike' }
  // ML Model: Reinforcement learning to improve recommendations
  const provideFeedback = (productId, feedback) => {
    // Update recommendation algorithm with user feedback
  };

  // API Comment: GET /api/ai/recommendations/similar
  // Payload: { productId: string, count: 10 }
  // ML Model: Product embeddings for similarity calculation
  const getSimilarProducts = (productId) => {
    // Get similar product recommendations
  };

  // API Comment: GET /api/ai/recommendations/trending
  // ML Model: Time-series analysis for trend detection
  const getTrendingRecommendations = () => {
    // Get trending product recommendations
  };

  const handleCategorySwitch = (categoryId) => {
    setRecommendationCategories(
      recommendationCategories.map(cat =>
        cat.id === categoryId
          ? { ...cat, active: true }
          : { ...cat, active: false }
      )
    );
  };

  const handleLike = (productId) => {
    provideFeedback(productId, 'like');
  };

  const handleDislike = (productId) => {
    setRecommendations(recommendations.filter(rec => rec.id !== productId));
    provideFeedback(productId, 'dislike');
  };

  const activeCategory = recommendationCategories.find(cat => cat.active);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Recommendations</h1>
            <p className="text-xs text-purple-100">Personalized just for you</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs">Match Score</span>
            </div>
            <p className="text-xl font-bold">{insights.avgMatchScore}%</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Eye className="w-4 h-4" />
              <span className="text-xs">Today</span>
            </div>
            <p className="text-xl font-bold">{insights.clickedToday}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs">Purchased</span>
            </div>
            <p className="text-xl font-bold">{insights.purchased}</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b px-4 py-3 sticky top-[156px] z-40">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {recommendationCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategorySwitch(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  category.active
                    ? `bg-${category.color}-600 text-white`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${category.active && category.color === 'purple' ? 'bg-purple-600' : ''}
                ${category.active && category.color === 'orange' ? 'bg-orange-600' : ''}
                ${category.active && category.color === 'blue' ? 'bg-blue-600' : ''}
                ${category.active && category.color === 'red' ? 'bg-red-600' : ''}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  category.active ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Personalization Info */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">AI-Powered Matching</h3>
              <p className="text-sm text-gray-600 mb-3">
                These recommendations are personalized based on your shopping behavior, preferences, and browsing history.
              </p>
              <button className="text-sm text-purple-600 font-medium flex items-center gap-1">
                How it works
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">
            {activeCategory?.name} ({recommendations.length})
          </h2>
          <button className="flex items-center gap-1 text-sm text-purple-600 font-medium">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>

        <div className="space-y-4">
          {recommendations.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border overflow-hidden">
              {/* Match Score Banner */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">{product.matchScore}% Match</span>
                </div>
                {product.trending && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span className="text-xs text-white font-medium">Trending</span>
                  </div>
                )}
              </div>

              <div className="p-4">
                {/* Product Info */}
                <div className="flex gap-3 mb-3">
                  <div className="text-6xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>

                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews.toLocaleString()})</span>
                      </div>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-purple-600 font-medium">{product.category}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.fastDelivery && (
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          Fast Delivery
                        </span>
                      )}
                      {product.cashback > 0 && (
                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          ₹{product.cashback} cashback
                        </span>
                      )}
                    </div>

                    {/* Reason */}
                    <div className="bg-purple-50 rounded-lg p-2 mb-3">
                      <p className="text-xs text-purple-700 flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        {product.reason}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700">
                        View Details
                      </button>
                      <button
                        onClick={() => handleLike(product.id)}
                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <ThumbsUp className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={() => handleDislike(product.id)}
                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                      >
                        <ThumbsDown className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personalization Factors */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-3">How We Personalize</h3>
        <div className="bg-white rounded-xl border p-4">
          <div className="space-y-3">
            {personalizationFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <div key={factor.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-900">{factor.factor}</span>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">{factor.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      style={{ width: `${factor.weight}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Your Preferences</h3>
          <button className="text-sm text-purple-600 font-medium">Edit</button>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-600 mb-2">Price Range</p>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">
                {userPreferences.priceRange}
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">Favorite Brands</p>
              <div className="flex flex-wrap gap-2">
                {userPreferences.brands.map((brand, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-2">Interested Categories</p>
              <div className="flex flex-wrap gap-2">
                {userPreferences.categories.map((category, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavManager currentPage="home" />
    </div>
  );
};

export default AIRecommendations;
