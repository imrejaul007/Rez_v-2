import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, TrendingUp, Package, Filter, Grid3x3, List } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function GroceryProducts() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const products = [
    {
      id: 1,
      name: 'Fresh Vegetables Mix',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400',
      price: 150,
      originalPrice: 200,
      rating: 4.7,
      reviews: 1240,
      inStock: true,
      unit: '1 kg',
      brand: 'Farm Fresh'
    },
    {
      id: 2,
      name: 'Seasonal Fruits Basket',
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400',
      price: 250,
      originalPrice: 320,
      rating: 4.8,
      reviews: 2100,
      inStock: true,
      unit: '1.5 kg',
      brand: 'Organic Farm'
    },
    {
      id: 3,
      name: 'Whole Milk (1L)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
      price: 65,
      originalPrice: 75,
      rating: 4.9,
      reviews: 3450,
      inStock: true,
      unit: '1 L',
      brand: 'Amul'
    },
    {
      id: 4,
      name: 'Whole Wheat Bread',
      category: 'Bakery',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
      price: 45,
      originalPrice: 55,
      rating: 4.6,
      reviews: 890,
      inStock: true,
      unit: '400 g',
      brand: 'Harvest Gold'
    },
    {
      id: 5,
      name: 'Basmati Rice Premium',
      category: 'Staples',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
      price: 450,
      originalPrice: 550,
      rating: 4.8,
      reviews: 1680,
      inStock: true,
      unit: '5 kg',
      brand: 'India Gate'
    },
    {
      id: 6,
      name: 'Mixed Dry Fruits',
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400',
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      reviews: 1120,
      inStock: true,
      unit: '500 g',
      brand: 'Nutraj'
    },
    {
      id: 7,
      name: 'Green Tea (100 Bags)',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400',
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      reviews: 780,
      inStock: true,
      unit: '100 bags',
      brand: 'Twinings'
    },
    {
      id: 8,
      name: 'Fresh Paneer',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1631453039733-285cfccd2cd6?w=400',
      price: 95,
      originalPrice: 120,
      rating: 4.8,
      reviews: 1450,
      inStock: true,
      unit: '200 g',
      brand: 'Mother Dairy'
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🛒', color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬', color: 'from-green-500/20 to-lime-500/20' },
    { id: 'fruits', name: 'Fruits', icon: '🍎', color: 'from-red-500/20 to-orange-500/20' },
    { id: 'dairy', name: 'Dairy', icon: '🥛', color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'bakery', name: 'Bakery', icon: '🍞', color: 'from-amber-500/20 to-yellow-500/20' },
    { id: 'staples', name: 'Staples', icon: '🌾', color: 'from-orange-500/20 to-amber-500/20' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Product Catalog Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
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
                <ShoppingCart className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">All Products</h1>
              </div>
              <p className="text-sm text-white/90">Shop from 5000+ grocery items</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">5000+</p>
              <p className="text-xs text-white/80">Products</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">100+</p>
              <p className="text-xs text-white/80">Brands</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">4.8</p>
              <p className="text-xs text-white/80">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <div className="flex items-center gap-3">
            <Package className="w-10 h-10 text-green-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Quality Guaranteed!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Fresh products delivered with care</p>
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

      {/* Filter & View Toggle */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-rez-navy dark:text-white border border-gray-200 dark:border-gray-700">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl ${
                viewMode === 'grid'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl ${
                viewMode === 'list'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              onClick={() => navigate(`/grocery/product/${product.id}`)}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
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
                {product.inStock && (
                  <div className="absolute top-2 right-2">
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
                <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1 line-clamp-2">{product.name}</h3>

                {/* Unit */}
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{product.unit}</p>

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

                {/* Add to Cart */}
                <button className="w-full py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">List Your Products</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Partner with ReZ and reach thousands of grocery shoppers
          </p>
          <Link
            to="/partner/grocery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Partner
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default GroceryProducts;
