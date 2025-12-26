import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Store, Star, MapPin, Tag, TrendingUp, Sparkles, Heart } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function FashionStores() {
  const navigate = useNavigate();

  const stores = [
    {
      id: 1,
      name: 'StyleHub Fashion',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      rating: 4.8,
      reviews: 1250,
      distance: 1.2,
      offers: '20% off on all items',
      categories: ['Women', 'Men', 'Accessories'],
      trending: true,
      openNow: true,
      closingTime: '9:00 PM'
    },
    {
      id: 2,
      name: 'Urban Wardrobe',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      rating: 4.9,
      reviews: 2100,
      distance: 0.8,
      offers: 'Buy 2 Get 1 Free',
      categories: ['Streetwear', 'Casual', 'Sports'],
      trending: true,
      openNow: true,
      closingTime: '10:00 PM'
    },
    {
      id: 3,
      name: 'Chic Boutique',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400',
      rating: 4.7,
      reviews: 890,
      distance: 2.1,
      offers: '30% off seasonal collection',
      categories: ['Designer', 'Formal', 'Evening Wear'],
      trending: false,
      openNow: false,
      closingTime: 'Opens 10 AM'
    },
    {
      id: 4,
      name: 'Trendy Closet',
      image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400',
      rating: 4.6,
      reviews: 650,
      distance: 1.5,
      offers: 'Flash Sale - Up to 50% off',
      categories: ['Women', 'Kids', 'Accessories'],
      trending: false,
      openNow: true,
      closingTime: '8:30 PM'
    },
    {
      id: 5,
      name: 'Denim Paradise',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
      rating: 4.8,
      reviews: 1420,
      distance: 1.8,
      offers: 'Flat ₹500 off on ₹2000',
      categories: ['Jeans', 'Jackets', 'Casual Wear'],
      trending: true,
      openNow: true,
      closingTime: '9:30 PM'
    },
    {
      id: 6,
      name: 'Ethnic Elegance',
      image: 'https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=400',
      rating: 4.9,
      reviews: 1680,
      distance: 2.5,
      offers: '25% off on ethnic wear',
      categories: ['Sarees', 'Kurtas', 'Lehengas'],
      trending: false,
      openNow: true,
      closingTime: '10:00 PM'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Stores', icon: '👔', color: 'from-purple-500/20 to-pink-500/20' },
    { id: 'women', name: 'Women', icon: '👗', color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'men', name: 'Men', icon: '👕', color: 'from-blue-500/20 to-indigo-500/20' },
    { id: 'ethnic', name: 'Ethnic', icon: '🥻', color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'accessories', name: 'Accessories', icon: '👜', color: 'from-purple-500/20 to-indigo-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Fashion-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
        <div className="px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Store className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Fashion Stores</h1>
              </div>
              <p className="text-sm text-white/90">Best clothing stores near you</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">{stores.length}+</p>
              <p className="text-xs text-white/80">Stores</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-xs text-white/80">Brands</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">50%</p>
              <p className="text-xs text-white/80">Max Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30">
          <div className="flex items-center gap-3">
            <Sparkles className="w-10 h-10 text-pink-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Trending This Season!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Discover the latest fashion collections</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full bg-gradient-to-br ${cat.color} border border-white/20 whitespace-nowrap text-sm font-medium text-rez-navy dark:text-white hover:scale-105 transition-all`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
          <div className="flex items-center gap-3">
            <Tag className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Fashion Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 30% cashback + coins on fashion purchases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stores List */}
      <div className="px-4 space-y-4">
        {stores.map(store => (
          <div
            key={store.id}
            onClick={() => navigate(`/fashion/store/${store.id}`)}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              {store.trending && (
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Trending
                  </span>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  store.openNow
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {store.openNow ? `Open • ${store.closingTime}` : store.closingTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white flex-1">{store.name}</h3>
              </div>

              {/* Rating & Distance */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-rez-navy dark:text-white">{store.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({store.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">{store.distance} km</span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Available:</p>
                <div className="flex flex-wrap gap-2">
                  {store.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Offer */}
              <div className="mb-4 p-3 rounded-xl bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800">
                <p className="text-xs font-bold text-pink-700 dark:text-pink-400">
                  🎁 {store.offers}
                </p>
              </div>

              {/* Cashback */}
              <p className="text-xs text-green-600 dark:text-green-400 mb-3">+ Earn coins & cashback on purchases</p>

              {/* CTA */}
              <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all">
                {store.openNow ? 'Shop Now' : 'View Store'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">List Your Fashion Store</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and reach fashion enthusiasts across the city
          </p>
          <Link
            to="/partner/fashion"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default FashionStores;
