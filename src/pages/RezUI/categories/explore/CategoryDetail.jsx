import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, MapPin, Star, Coins, TrendingUp, Clock } from 'lucide-react';

const categoryData = {
  food: {
    name: 'Food & Dining',
    icon: '🍔',
    avgCashback: '12%',
    totalStores: 234,
    color: 'from-orange-500 to-red-500',
    subcategories: ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Bakeries', 'Street Food'],
    items: [
      {
        id: 1,
        name: 'Chicken Biryani',
        store: 'Paradise Biryani',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400',
        price: 350,
        originalPrice: 450,
        distance: '0.8 km',
        rating: 4.5,
        reviews: 234,
        cashback: '15%',
        coins: 52,
        tags: ['Halal', 'Spicy']
      },
      {
        id: 2,
        name: 'Margherita Pizza',
        store: 'Dominos',
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400',
        price: 299,
        originalPrice: 399,
        distance: '1.2 km',
        rating: 4.3,
        reviews: 456,
        cashback: '10%',
        coins: 30,
        tags: ['Veg']
      },
      {
        id: 3,
        name: 'Butter Chicken',
        store: 'Punjabi Tadka',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400',
        price: 280,
        originalPrice: 350,
        distance: '0.5 km',
        rating: 4.7,
        reviews: 189,
        cashback: '20%',
        coins: 56,
        tags: []
      },
      {
        id: 4,
        name: 'Veg Thali',
        store: 'Annapurna',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
        price: 180,
        originalPrice: 220,
        distance: '1.5 km',
        rating: 4.4,
        reviews: 312,
        cashback: '12%',
        coins: 22,
        tags: ['Veg', 'Healthy']
      }
    ]
  },
  fashion: {
    name: 'Fashion',
    icon: '🛍',
    avgCashback: '15%',
    totalStores: 156,
    color: 'from-pink-500 to-purple-500',
    subcategories: ['Clothing', 'Footwear', 'Accessories', 'Jewelry', 'Ethnic'],
    items: [
      {
        id: 5,
        name: 'Nike Air Max',
        store: 'Nike Store',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
        price: 6999,
        originalPrice: 8999,
        distance: '2.1 km',
        rating: 4.8,
        reviews: 567,
        cashback: '18%',
        coins: 1260,
        tags: ['Sports']
      }
    ]
  },
  electronics: {
    name: 'Electronics',
    icon: '📱',
    avgCashback: '8%',
    totalStores: 89,
    color: 'from-blue-500 to-cyan-500',
    subcategories: ['Mobiles', 'Laptops', 'Audio', 'Cameras', 'Gaming'],
    items: []
  },
  beauty: {
    name: 'Beauty & Wellness',
    icon: '💄',
    avgCashback: '18%',
    totalStores: 178,
    color: 'from-rose-500 to-pink-500',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Spa', 'Salon'],
    items: []
  }
};

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortBy, setSortBy] = useState('distance');

  const category = categoryData[categoryId] || categoryData.food;

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">
                {category.icon} {category.name}
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                {category.totalStores} stores · {category.avgCashback} avg cashback
              </p>
            </div>
            <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all">
              <SlidersHorizontal className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className={`p-6 mx-4 mt-4 rounded-2xl bg-gradient-to-r ${category.color} relative overflow-hidden`}>
        <div className="relative z-10">
          <h2 className="text-h2 font-poppins text-white mb-2">
            Discover {category.name}
          </h2>
          <p className="text-sm text-white/90 mb-4">
            Get up to {category.avgCashback} cashback on your purchases
          </p>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-semibold text-white">
                🪙 Earn on every purchase
              </span>
            </div>
            <div className="px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-sm">
              <span className="text-xs font-semibold text-white">
                🎁 Special offers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setSelectedSubcategory(null)}
            className={`px-4 py-2 rounded-full shrink-0 transition-all ${
              !selectedSubcategory
                ? 'bg-rez-green-500 text-white'
                : 'bg-white dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 border border-rez-gray-200 dark:border-white/10'
            }`}
          >
            All
          </button>
          {category.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubcategory(sub)}
              className={`px-4 py-2 rounded-full shrink-0 transition-all ${
                selectedSubcategory === sub
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-white dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-2 px-4 pb-4">
        <span className="text-xs text-rez-gray-600 dark:text-gray-400">Sort:</span>
        {[
          { id: 'distance', label: 'Nearest', icon: MapPin },
          { id: 'rating', label: 'Top Rated', icon: Star },
          { id: 'cashback', label: 'Best Cashback', icon: TrendingUp },
        ].map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => setSortBy(option.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition-all ${
                sortBy === option.id
                  ? 'bg-rez-green-500 text-white'
                  : 'bg-white dark:bg-white/10 text-rez-gray-700 dark:text-gray-300 border border-rez-gray-200 dark:border-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Items Grid */}
      <div className="px-4 space-y-3">
        {category.items.map((item) => (
          <Link
            key={item.id}
            to={`/explore/product/${item.id}`}
            className="block bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-white/20 transition-all active:scale-[0.98]"
          >
            <div className="flex gap-4 p-4">
              {/* Image */}
              <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-rez-navy dark:text-white">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                  {item.store} · {item.distance}
                </p>

                {/* Tags */}
                {item.tags.length > 0 && (
                  <div className="flex gap-1 mb-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-rez-gray-100 dark:bg-white/10 rounded-full text-[10px] font-medium text-rez-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price & Coins */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-rez-navy dark:text-white">
                      ₹{item.price}
                    </span>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-500 line-through">
                      ₹{item.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Coins className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">₹{item.coins}</span>
                  </div>
                </div>

                {/* Cashback */}
                <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/10 rounded-lg">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-500">
                    {item.cashback} Cashback
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Empty State */}
        {category.items.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
              <span className="text-4xl">{category.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-rez-navy dark:text-white mb-2">
              Coming Soon
            </h3>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">
              We're adding stores in this category. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryDetail;
