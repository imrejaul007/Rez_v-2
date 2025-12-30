import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, MapPin, Star, Clock, Heart, Search, Filter, TrendingUp, Award, Leaf, Wine, Coffee, Flame } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function FoodHub() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: UtensilsCrossed },
    { id: 'fine-dining', name: 'Fine Dining', icon: Wine },
    { id: 'cafes', name: 'Cafes', icon: Coffee },
    { id: 'rooftop', name: 'Rooftop', icon: Star },
    { id: 'healthy', name: 'Healthy', icon: Leaf }
  ];

  const featuredRestaurants = [
    {
      id: 1,
      name: 'Masque',
      category: 'fine-dining',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      cuisine: 'Modern Indian',
      rating: 4.8,
      reviews: 1240,
      priceRange: '₹₹₹₹',
      location: 'Mahalaxmi, Mumbai',
      distance: '2.3 km',
      openNow: true,
      trending: true,
      tags: ['Michelin Guide', 'Farm-to-Table', 'Reservations Required'],
      offers: ['20% off on bill', '2x RezCoins']
    },
    {
      id: 2,
      name: 'Blue Tokai Coffee Roasters',
      category: 'cafes',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      cuisine: 'Cafe, Coffee',
      rating: 4.6,
      reviews: 890,
      priceRange: '₹₹',
      location: 'Champa Gali, Delhi',
      distance: '1.5 km',
      openNow: true,
      trending: false,
      tags: ['Specialty Coffee', 'Vegan Options', 'Laptop Friendly'],
      offers: ['Free dessert on orders above ₹500']
    },
    {
      id: 3,
      name: 'Aer - Four Seasons',
      category: 'rooftop',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
      cuisine: 'Continental, Asian',
      rating: 4.7,
      reviews: 2100,
      priceRange: '₹₹₹₹',
      location: 'Worli, Mumbai',
      distance: '5.2 km',
      openNow: false,
      opensAt: '6:00 PM',
      trending: true,
      tags: ['Rooftop Bar', 'Live DJ', 'City Views'],
      offers: ['Happy Hours 6-8 PM']
    },
    {
      id: 4,
      name: 'Sequel Bistro & Juice Bar',
      category: 'healthy',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
      cuisine: 'Healthy, Organic',
      rating: 4.5,
      reviews: 640,
      priceRange: '₹₹₹',
      location: 'Bandra, Mumbai',
      distance: '3.8 km',
      openNow: true,
      trending: false,
      tags: ['Organic', 'Vegan', 'Gluten-Free'],
      offers: ['15% off on all juices']
    }
  ];

  const quickFilters = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'new', name: 'New Opens', icon: Flame },
    { id: 'awarded', name: 'Awarded', icon: Award },
    { id: 'healthy', name: 'Healthy', icon: Leaf }
  ];

  const collections = [
    {
      id: 1,
      title: 'Best Date Spots',
      count: 24,
      image: 'https://images.unsplash.com/photo-1464979681340-bdd28a61699e?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Sunday Brunch',
      count: 18,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Late Night Eats',
      count: 32,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop'
    }
  ];

  const filteredRestaurants = selectedCategory === 'all'
    ? featuredRestaurants
    : featuredRestaurants.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="px-4 pt-6 pb-4">
          <h1 className="text-2xl font-bold mb-2">Discover Dining</h1>
          <p className="text-orange-100 text-sm">Curated culinary experiences</p>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines..."
              className="flex-1 bg-transparent text-white placeholder-orange-200 outline-none"
            />
            <button className="p-2 bg-white/20 rounded-lg">
              <Filter className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-4 pb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-white text-orange-600'
                      : 'bg-white/20 text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-semibold">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Quick Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickFilters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full whitespace-nowrap hover:border-orange-500 hover:text-orange-600 transition-all"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{filter.name}</span>
              </button>
            );
          })}
        </div>

        {/* Collections */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Curated Collections</h2>
          <div className="grid grid-cols-3 gap-3">
            {collections.map((collection) => (
              <button
                key={collection.id}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="text-white text-xs font-semibold">{collection.title}</div>
                  <div className="text-orange-200 text-xs">{collection.count} places</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Restaurants */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Featured Restaurants</h2>
            <button className="text-sm text-orange-600 font-semibold">See All</button>
          </div>

          <div className="space-y-4">
            {filteredRestaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => navigate(`/lifestyle/food/${restaurant.id}`)}
                className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  {restaurant.trending && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-900">{restaurant.priceRange}</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-green-700 fill-green-700" />
                      <span className="text-sm font-bold text-green-700">{restaurant.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {restaurant.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {restaurant.openNow ? (
                        <span className="text-green-600 font-medium">Open Now</span>
                      ) : (
                        <span className="text-red-600">Opens at {restaurant.opensAt}</span>
                      )}
                    </div>
                  </div>

                  {restaurant.offers && restaurant.offers.length > 0 && (
                    <div className="bg-orange-50 rounded-lg p-3 mb-3">
                      {restaurant.offers.map((offer, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-orange-700 text-sm">
                          <Award className="w-4 h-4 flex-shrink-0" />
                          <span className="font-medium">{offer}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700">
                    Book a Table
                  </button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
