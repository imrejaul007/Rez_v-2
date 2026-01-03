import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, TrendingUp, Package, Zap, Award } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

function FitnessStore() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('equipment');

  const products = {
    equipment: [
      {
        id: 1,
        name: 'Adjustable Dumbbells Set',
        brand: 'PowerMax Pro',
        price: 3999,
        mrp: 5999,
        rating: 4.7,
        reviews: 890,
        trending: true,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
        features: ['5-25 kg', 'Space Saving', 'Durable'],
        inStock: true
      },
      {
        id: 2,
        name: 'Premium Yoga Mat',
        brand: 'FitYoga',
        price: 799,
        mrp: 1200,
        rating: 4.8,
        reviews: 1250,
        trending: false,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
        features: ['6mm Thick', 'Non-Slip', 'Eco-Friendly'],
        inStock: true
      },
      {
        id: 3,
        name: 'Resistance Bands Set',
        brand: 'FlexFit',
        price: 599,
        mrp: 999,
        rating: 4.6,
        reviews: 650,
        trending: true,
        image: 'https://images.unsplash.com/photo-1598971861713-54ad16d6d53e?w=400',
        features: ['5 Bands', 'All Levels', 'Portable'],
        inStock: true
      },
      {
        id: 4,
        name: 'Foam Roller',
        brand: 'RecoverPro',
        price: 1299,
        mrp: 1899,
        rating: 4.7,
        reviews: 420,
        trending: false,
        image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400',
        features: ['Deep Tissue', 'High Density', 'Textured'],
        inStock: true
      }
    ],
    supplements: [
      {
        id: 5,
        name: 'Whey Protein Isolate 2kg',
        brand: 'MuscleBlaze',
        price: 2499,
        mrp: 3500,
        rating: 4.6,
        reviews: 2340,
        trending: true,
        image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400',
        features: ['30g Protein', 'Chocolate', 'Lab Tested'],
        inStock: true
      },
      {
        id: 6,
        name: 'BCAA Energy Powder',
        brand: 'Optimum Nutrition',
        price: 1299,
        mrp: 1800,
        rating: 4.5,
        reviews: 980,
        trending: false,
        image: 'https://images.unsplash.com/photo-1608137284897-2e3e1f2e8b7d?w=400',
        features: ['Endurance', 'Recovery', 'Energy'],
        inStock: true
      },
      {
        id: 7,
        name: 'Pre-Workout Booster',
        brand: 'Cellucor C4',
        price: 1599,
        mrp: 2200,
        rating: 4.7,
        reviews: 1450,
        trending: true,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
        features: ['Energy Boost', 'Focus', 'No Crash'],
        inStock: true
      },
      {
        id: 8,
        name: 'Multivitamin Tablets',
        brand: 'HealthKart',
        price: 499,
        mrp: 799,
        rating: 4.4,
        reviews: 720,
        trending: false,
        image: 'https://images.unsplash.com/photo-1550572017-4d934a03fb74?w=400',
        features: ['60 Tablets', 'Daily Health', 'Immunity'],
        inStock: true
      }
    ],
    apparel: [
      {
        id: 9,
        name: 'Dri-FIT Training T-Shirt',
        brand: 'Nike',
        price: 1299,
        mrp: 1999,
        rating: 4.7,
        reviews: 1890,
        trending: false,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
        features: ['Quick Dry', 'Breathable', 'S-XXL'],
        inStock: true
      },
      {
        id: 10,
        name: 'Ultraboost Running Shoes',
        brand: 'Adidas',
        price: 4999,
        mrp: 7999,
        rating: 4.9,
        reviews: 3200,
        trending: true,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        features: ['Boost Tech', 'All Sizes', 'Grippy'],
        inStock: true
      },
      {
        id: 11,
        name: 'Compression Tights',
        brand: 'Under Armour',
        price: 1799,
        mrp: 2799,
        rating: 4.6,
        reviews: 920,
        trending: true,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
        features: ['Compression', 'Recovery', 'Moisture-Wicking'],
        inStock: true
      },
      {
        id: 12,
        name: 'Sports Gym Bag',
        brand: 'Puma',
        price: 899,
        mrp: 1499,
        rating: 4.5,
        reviews: 560,
        trending: false,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
        features: ['30L Capacity', 'Shoe Compartment', 'Durable'],
        inStock: true
      }
    ]
  };

  const currentProducts = products[activeTab] || [];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Store-Themed Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
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
                <ShoppingBag className="w-6 h-6 text-white" />
                <h1 className="text-2xl font-bold text-white">Fitness Store</h1>
              </div>
              <p className="text-sm text-white/90">Equipment, supplements & apparel</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">12+</p>
              <p className="text-xs text-white/80">Products</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">50+</p>
              <p className="text-xs text-white/80">Brands</p>
            </div>
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-center">
              <p className="text-2xl font-bold text-white">40%</p>
              <p className="text-xs text-white/80">Avg Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <div className="flex items-center gap-3">
            <Zap className="w-10 h-10 text-blue-500" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Fast & Free Delivery!</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Free delivery on orders above ₹499</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('equipment')}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'equipment'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            Equipment
          </button>
          <button
            onClick={() => setActiveTab('supplements')}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'supplements'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            Supplements
          </button>
          <button
            onClick={() => setActiveTab('apparel')}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              activeTab === 'apparel'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
            }`}
          >
            Apparel
          </button>
        </div>
      </div>

      {/* Benefit Banner */}
      <div className="px-4 py-4">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
          <div className="flex items-center gap-3">
            <Award className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-1">Shopping Rewards</h3>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400">Get up to 10% cashback + coins on all purchases</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-2">
        <div className="grid grid-cols-2 gap-4">
          {currentProducts.map(product => (
            <div
              key={product.id}
              onClick={() => navigate(`/fitness/product/${product.id}`)}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.trending && (
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-orange-500 text-white flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Hot
                    </span>
                  </div>
                )}
                <div className="absolute bottom-2 left-2">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">
                    -{Math.round((1 - product.price / product.mrp) * 100)}% OFF
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{product.brand}</p>
                <h3 className="font-bold text-sm text-rez-navy dark:text-white mb-2 line-clamp-2">{product.name}</h3>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold text-rez-navy dark:text-white">{product.rating}</span>
                  <span className="text-[10px] text-gray-600 dark:text-gray-400">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price}</span>
                    <span className="text-xs text-gray-500 line-through">₹{product.mrp}</span>
                  </div>
                  {product.inStock && (
                    <Package className="w-4 h-4 text-green-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-4 py-6 space-y-4">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/20 text-center">
          <TrendingUp className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-rez-navy dark:text-white mb-2">Sell on ReZ Fitness Store</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            List your fitness products and reach thousands of fitness enthusiasts
          </p>
          <Link
            to="/seller/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold hover:scale-105 transition-all"
          >
            Become a Seller
          </Link>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
}

export default FitnessStore;
