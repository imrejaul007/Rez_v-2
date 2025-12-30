import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, RefreshCw, Calendar, Sun, CloudRain, Cloud, Heart, Share2, ShoppingBag, ChevronLeft, Zap } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function WardrobeOutfitSuggestions() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('today');
  const [likedOutfits, setLikedOutfits] = useState([]);

  // Mock data
  const suggestions = {
    today: [
      {
        id: 1,
        occasion: 'Work Meeting',
        weather: 'sunny',
        temperature: '24°C',
        items: [
          { name: 'White Linen Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop', owned: true },
          { name: 'Navy Trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=250&fit=crop', owned: true },
          { name: 'Brown Leather Shoes', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=200&h=250&fit=crop', owned: true }
        ],
        matchScore: 95,
        styleNote: 'Perfect for professional meetings'
      },
      {
        id: 2,
        occasion: 'Casual Lunch',
        weather: 'sunny',
        temperature: '24°C',
        items: [
          { name: 'Casual T-Shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=250&fit=crop', owned: true },
          { name: 'Blue Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop', owned: true },
          { name: 'White Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=250&fit=crop', owned: false, price: '₹2,999' }
        ],
        matchScore: 88,
        styleNote: 'Comfortable yet stylish'
      }
    ],
    weekend: [
      {
        id: 3,
        occasion: 'Brunch',
        weather: 'cloudy',
        temperature: '22°C',
        items: [
          { name: 'Printed Shirt', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=200&h=250&fit=crop', owned: true },
          { name: 'Chino Pants', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=200&h=250&fit=crop', owned: true },
          { name: 'Loafers', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=200&h=250&fit=crop', owned: true }
        ],
        matchScore: 92,
        styleNote: 'Weekend vibes'
      }
    ],
    party: [
      {
        id: 4,
        occasion: 'Party Night',
        weather: 'clear',
        temperature: '20°C',
        items: [
          { name: 'Black Shirt', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop', owned: true },
          { name: 'Dark Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=250&fit=crop', owned: true },
          { name: 'Chelsea Boots', image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=200&h=250&fit=crop', owned: false, price: '₹4,999' }
        ],
        matchScore: 90,
        styleNote: 'Party ready look'
      }
    ]
  };

  const filters = [
    { id: 'today', label: 'Today', icon: Sun },
    { id: 'weekend', label: 'Weekend', icon: Calendar },
    { id: 'party', label: 'Party', icon: Sparkles }
  ];

  const weatherIcons = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
    clear: Sparkles
  };

  const toggleLike = (id) => {
    setLikedOutfits(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const currentSuggestions = suggestions[activeFilter] || [];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Outfit Suggestions</h1>
            <button className="p-2 hover:bg-white/20 rounded-full">
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>

          <p className="text-purple-100 text-sm mb-4">
            AI-powered outfit suggestions from your wardrobe
          </p>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? 'bg-white text-purple-600'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Suggestions */}
      <div className="px-4 py-6 space-y-6">
        {currentSuggestions.map((suggestion) => {
          const WeatherIcon = weatherIcons[suggestion.weather];
          const isLiked = likedOutfits.includes(suggestion.id);

          return (
            <div key={suggestion.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              {/* Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{suggestion.occasion}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <WeatherIcon className="w-4 h-4" />
                      <span>{suggestion.temperature}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {suggestion.matchScore}% Match
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{suggestion.styleNote}</p>
              </div>

              {/* Outfit Items */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {suggestion.items.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="aspect-[3/4] rounded-xl overflow-hidden border-2 border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {!item.owned && (
                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          Shop
                        </div>
                      )}
                      <div className="mt-2">
                        <div className="text-xs font-medium text-gray-900 truncate">{item.name}</div>
                        {!item.owned && item.price && (
                          <div className="text-xs text-orange-600 font-semibold">{item.price}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => toggleLike(suggestion.id)}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                      isLiked
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 text-gray-600 hover:border-red-300'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="text-sm font-semibold">Save</span>
                  </button>

                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-gray-400">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">Share</span>
                  </button>

                  <button
                    onClick={() => navigate('/lifestyle/fashion/outfit-calendar')}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-semibold">Plan</span>
                  </button>
                </div>

                {/* Shop Missing Items */}
                {suggestion.items.some(item => !item.owned) && (
                  <button className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Missing Items ({suggestion.items.filter(i => !i.owned).length})
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* AI Tip */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">AI Styling Tip</h3>
              <p className="text-sm text-gray-600">
                Mix and match your wardrobe items to create 100+ unique outfits. Save ₹50,000/year by maximizing what you own!
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
