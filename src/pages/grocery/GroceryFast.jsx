import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Zap, Package, Clock, Star, MapPin, Leaf, ShoppingBag, TrendingUp, Rocket } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function GroceryFast() {
  const navigate = useNavigate();

  const fastProducts = [
    {
      id: 1,
      name: 'Fresh Milk (1L)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
      price: 65,
      originalPrice: 75,
      rating: 4.8,
      reviews: 1240,
      deliveryTime: '10 mins',
      inStock: true,
      brand: 'Amul'
    },
    {
      id: 2,
      name: 'Brown Bread',
      category: 'Bakery',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      price: 45,
      originalPrice: 55,
      rating: 4.6,
      reviews: 890,
      deliveryTime: '12 mins',
      inStock: true,
      brand: 'Harvest Gold'
    },
    {
      id: 3,
      name: 'Farm Eggs (6pc)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
      price: 85,
      originalPrice: 100,
      rating: 4.9,
      reviews: 2100,
      deliveryTime: '10 mins',
      inStock: true,
      brand: 'Country Eggs'
    },
    {
      id: 4,
      name: 'Fresh Orange Juice (1L)',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400',
      price: 120,
      originalPrice: 150,
      rating: 4.7,
      reviews: 650,
      deliveryTime: '15 mins',
      inStock: true,
      brand: 'Tropicana'
    },
    {
      id: 5,
      name: 'Paneer (200g)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1631453039733-285cfccd2cd6?w=400',
      price: 95,
      originalPrice: 120,
      rating: 4.8,
      reviews: 1580,
      deliveryTime: '10 mins',
      inStock: true,
      brand: 'Mother Dairy'
    },
    {
      id: 6,
      name: 'Croissants (4pc)',
      category: 'Bakery',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
      price: 140,
      originalPrice: 180,
      rating: 4.6,
      reviews: 430,
      deliveryTime: '12 mins',
      inStock: true,
      brand: 'French Loaf'
    },
    {
      id: 7,
      name: 'Cold Coffee (300ml)',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
      price: 99,
      originalPrice: 130,
      rating: 4.5,
      reviews: 820,
      deliveryTime: '15 mins',
      inStock: true,
      brand: 'Nescafe'
    },
    {
      id: 8,
      name: 'Greek Yogurt (400g)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
      price: 110,
      originalPrice: 140,
      rating: 4.9,
      reviews: 1120,
      deliveryTime: '10 mins',
      inStock: true,
      brand: 'Epigamia'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '⚡', color: 'from-orange-500/20 to-amber-500/20' },
    { id: 'dairy', name: 'Dairy', icon: '🥛', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'bakery', name: 'Bakery', icon: '🍞', color: 'from-amber-500/20 to-yellow-500/20' },
    { id: 'beverages', name: 'Beverages', icon: '🥤', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'snacks', name: 'Snacks', icon: '🍿', color: 'from-red-500/20 to-orange-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Speed-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
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
                <Zap className="w-6 h-6 text-white fill-white" />
                <h1 className="text-2xl font-bold text-white">Fast Delivery</h1>
              </div>
              <p className="text-sm text-white/90">Get essentials in 10-15 minutes</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">10-15</p>
              <p className="text-xs text-white/80">Mins</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-white/80">Products</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-white/80">Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightning Fast Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30">
          <div className="flex items-center gap-3">
            <Rocket className="w-10 h-10 text-orange-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Lightning Fast Delivery!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Daily essentials at your doorstep in minutes</p>
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
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <Package className="w-10 h-10 text-amber-600 dark:text-amber-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Fast Delivery Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 20% cashback + coins on quick orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          {fastProducts.map(product => (
            <div
              key={product.id}
              onClick={() => navigate(`/grocery/product/${product.id}`)}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-rez-navy dark:text-white backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-500 text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {product.deliveryTime}
                  </span>
                </div>
                {product.inStock && (
                  <div className="absolute bottom-2 right-2">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-500 text-white">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Brand */}
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{product.brand}</p>

                {/* Name */}
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium text-rez-navy dark:text-white">{product.rating}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price}</span>
                  <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                </div>

                {/* Cashback */}
                <p className="text-xs text-green-600 dark:text-green-400 mb-3">+ Earn coins & cashback</p>

                {/* CTA */}
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-semibold hover:scale-105 transition-all">
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Become a Fast Delivery Partner</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Join ReZ and deliver ultra-fast to thousands of customers
          </p>
          <Link
            to="/partner/grocery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default GroceryFast;
