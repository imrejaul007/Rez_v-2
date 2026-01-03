import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Sparkles, Camera, TrendingUp, Heart, ShoppingBag,
  Shirt, Palette, Calendar, Sun, Cloud, Snowflake, Star, Plus,
  Check, X, Shuffle, Download, Share2, ChevronRight
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIStyleAdvisor = () => {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({
    bodyType: 'athletic',
    skinTone: 'medium',
    stylePreference: 'casual-chic',
    budget: 'mid-range'
  });

  const [todayOutfit, setTodayOutfit] = useState({
    occasion: 'work',
    weather: 'sunny',
    temperature: '28°C',
    outfit: {
      top: { name: 'White Cotton Shirt', brand: 'H&M', price: 1299, image: '👔', color: 'white' },
      bottom: { name: 'Navy Blue Chinos', brand: 'Zara', price: 2499, image: '👖', color: 'navy' },
      shoes: { name: 'Brown Loafers', brand: 'Clarks', price: 3999, image: '👞', color: 'brown' },
      accessories: { name: 'Leather Watch', brand: 'Fossil', price: 4999, image: '⌚', color: 'brown' }
    },
    styleScore: 92,
    matchScore: 95
  });

  const [outfitSuggestions, setOutfitSuggestions] = useState([
    {
      id: 1,
      name: 'Smart Casual',
      occasion: 'casual-outing',
      styleScore: 88,
      items: 4,
      image: '👕',
      colors: ['blue', 'beige', 'white']
    },
    {
      id: 2,
      name: 'Weekend Vibes',
      occasion: 'weekend',
      styleScore: 85,
      items: 3,
      image: '🎽',
      colors: ['black', 'gray', 'white']
    },
    {
      id: 3,
      name: 'Date Night',
      occasion: 'evening',
      styleScore: 91,
      items: 5,
      image: '👗',
      colors: ['red', 'black', 'gold']
    }
  ]);

  const [trendingStyles, setTrendingStyles] = useState([
    { id: 1, name: 'Oversized Blazers', trend: '+45%', image: '🧥', category: 'outerwear' },
    { id: 2, name: 'Earth Tones', trend: '+38%', image: '🎨', category: 'colors' },
    { id: 3, name: 'Minimalist Jewelry', trend: '+52%', image: '💍', category: 'accessories' },
    { id: 4, name: 'Wide Leg Pants', trend: '+30%', image: '👖', category: 'bottoms' }
  ]);

  const [wardrobeInsights, setWardrobeInsights] = useState({
    totalItems: 87,
    mostWorn: 'Blue Denim Jacket',
    leastWorn: 'Green Formal Shirt',
    avgOutfitCost: 3200,
    styleConsistency: 78
  });

  const [colorPalette, setColorPalette] = useState([
    { color: 'navy', name: 'Navy Blue', matches: ['white', 'beige', 'gray'], count: 12 },
    { color: 'white', name: 'White', matches: ['navy', 'black', 'beige'], count: 18 },
    { color: 'black', name: 'Black', matches: ['white', 'red', 'gray'], count: 15 },
    { color: 'beige', name: 'Beige', matches: ['navy', 'white', 'brown'], count: 8 }
  ]);

  const [aiRecommendations, setAiRecommendations] = useState([
    {
      id: 1,
      type: 'purchase',
      title: 'Complete Your Wardrobe',
      description: 'Add a burgundy sweater to match with your existing navy collection',
      image: '🧶',
      action: 'Shop Now',
      color: 'purple'
    },
    {
      id: 2,
      type: 'mix',
      title: 'Try This Combo',
      description: 'Your blue shirt + beige chinos - perfect for tomorrow\'s weather',
      image: '✨',
      action: 'Save Outfit',
      color: 'blue'
    }
  ]);

  // API Comment: POST /api/ai/style/outfit-suggestion
  // Payload: { occasion: string, weather: {}, wardrobe: [], preferences: {} }
  // ML Model: Style recommendation engine with computer vision for color matching
  // Response: { outfits: [], styleScore: number, alternatives: [] }
  const getOutfitSuggestion = async () => {
    // Get AI outfit suggestions
  };

  // API Comment: POST /api/ai/style/analyze-photo
  // Payload: { image: base64, detectColors: true, findSimilar: true }
  // ML Model: Fashion item detection, color extraction, style classification
  // Response: { items: [], colors: [], style: string, similarProducts: [] }
  const analyzeStylePhoto = async () => {
    // Analyze uploaded fashion photo
  };

  // API Comment: GET /api/ai/style/virtual-tryon
  // Payload: { userPhoto: base64, productId: string }
  // ML Model: Virtual try-on using GAN for realistic clothing simulation
  // Response: { compositeImage: base64, fitScore: number }
  const virtualTryOn = async () => {
    // Virtual try-on feature
  };

  // API Comment: GET /api/ai/style/wardrobe-analysis
  // ML Model: Wardrobe gap analysis and purchase recommendations
  // Response: { gaps: [], recommendations: [], utilization: {} }
  const analyzeWardrobe = async () => {
    // Analyze wardrobe and suggest improvements
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'sunny': return <Sun className="w-5 h-5 text-yellow-500" />;
      case 'cloudy': return <Cloud className="w-5 h-5 text-gray-500" />;
      case 'rainy': return <Cloud className="w-5 h-5 text-blue-500" />;
      case 'cold': return <Snowflake className="w-5 h-5 text-cyan-500" />;
      default: return <Sun className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Style Advisor</h1>
            <p className="text-xs text-pink-100">Personalized fashion recommendations</p>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Camera className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Today's Outfit */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <h2 className="font-semibold text-gray-900">Today's AI-Styled Outfit</h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  {getWeatherIcon(todayOutfit.weather)}
                  <span>{todayOutfit.temperature}</span>
                </div>
                <span>•</span>
                <span className="capitalize">{todayOutfit.occasion}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-1">
                <span className="text-xl font-bold text-white">{todayOutfit.styleScore}</span>
              </div>
              <span className="text-xs text-gray-600">Style Score</span>
            </div>
          </div>

          {/* Outfit Items */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {Object.entries(todayOutfit.outfit).map(([key, item]) => (
              <div key={key} className="text-center">
                <div className="bg-white rounded-xl p-3 border border-gray-200 mb-2">
                  <span className="text-3xl">{item.image}</span>
                </div>
                <p className="text-xs text-gray-600 capitalize">{key}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Save Outfit
            </button>
            <button className="flex-1 px-4 py-2 bg-white border border-pink-300 text-pink-600 text-sm font-medium rounded-lg hover:bg-pink-50 flex items-center justify-center gap-2">
              <Shuffle className="w-4 h-4" />
              Try Another
            </button>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-pink-600" />
          <h2 className="font-semibold text-gray-900">AI Recommendations</h2>
        </div>

        <div className="space-y-3">
          {aiRecommendations.map((rec) => (
            <div
              key={rec.id}
              className={`bg-gradient-to-r ${
                rec.color === 'purple'
                  ? 'from-purple-50 to-pink-50 border-purple-200'
                  : 'from-blue-50 to-cyan-50 border-blue-200'
              } rounded-xl p-4 border`}
            >
              <div className="flex gap-3">
                <span className="text-4xl">{rec.image}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{rec.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                  <button
                    className={`px-4 py-2 ${
                      rec.color === 'purple'
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white text-sm font-medium rounded-lg`}
                  >
                    {rec.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outfit Suggestions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">More Outfit Ideas</h2>
          <button className="text-sm text-pink-600 font-medium">View All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {outfitSuggestions.map((outfit) => (
            <div key={outfit.id} className="bg-white rounded-xl border overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-6xl">
                {outfit.image}
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{outfit.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{outfit.styleScore}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2 capitalize">{outfit.occasion}</p>
                <div className="flex gap-1 mb-3">
                  {outfit.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <button className="w-full px-3 py-2 bg-pink-600 text-white text-xs font-medium rounded-lg hover:bg-pink-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Styles */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-pink-600" />
          <h2 className="font-semibold text-gray-900">Trending Now</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {trendingStyles.map((trend) => (
            <div key={trend.id} className="bg-white rounded-xl p-4 border hover:border-pink-300 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{trend.image}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{trend.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{trend.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-600 font-semibold">{trend.trend}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color Palette */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-5 h-5 text-pink-600" />
          <h2 className="font-semibold text-gray-900">Your Color Palette</h2>
        </div>

        <div className="bg-white rounded-xl p-4 border">
          <div className="space-y-3">
            {colorPalette.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.count} items in wardrobe</p>
                </div>
                <button className="text-xs text-pink-600 font-medium">Matches</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wardrobe Insights */}
      <div className="p-4">
        <h2 className="font-semibold text-gray-900 mb-3">Wardrobe Insights</h2>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 border">
            <Shirt className="w-5 h-5 text-pink-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900 mb-1">{wardrobeInsights.totalItems}</p>
            <p className="text-xs text-gray-600">Total Items</p>
          </div>

          <div className="bg-white rounded-xl p-4 border">
            <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
            <p className="text-2xl font-bold text-gray-900 mb-1">{wardrobeInsights.styleConsistency}%</p>
            <p className="text-xs text-gray-600">Style Consistency</p>
          </div>

          <div className="bg-white rounded-xl p-4 border col-span-2">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-xs text-gray-500">Most Worn</span>
            </div>
            <p className="font-semibold text-gray-900">{wardrobeInsights.mostWorn}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-pink-200 rounded-xl hover:border-pink-400 transition-all">
            <Camera className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold text-gray-900">Scan Outfit</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-4 bg-white border border-pink-200 rounded-xl hover:border-pink-400 transition-all">
            <ShoppingBag className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold text-gray-900">Shop Look</span>
          </button>
        </div>
      </div>

      <BottomNavManager currentPage="explore" />
    </div>
  );
};

export default AIStyleAdvisor;
