import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Store,
  TrendingUp,
  Star,
  MapPin,
  Tag,
  Filter,
  Search,
  Coins,
  ChevronRight,
  Sparkles,
  Flame,
  Clock,
  Heart,
  Grid3x3,
  List
} from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

const CategoryHub = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categoryData = {
    electronics: {
      title: 'Electronics',
      subtitle: 'Latest gadgets & tech',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      cashback: '10-15%',
      subCategories: [
        { id: 'mobiles', name: 'Mobiles', icon: '📱', path: '/electronics/mobiles' },
        { id: 'laptops', name: 'Laptops', icon: '💻', path: '/electronics/laptops' },
        { id: 'tablets', name: 'Tablets', icon: '📱', path: '/electronics/tablets' },
        { id: 'audio', name: 'Audio', icon: '🎧', path: '/electronics/audio' },
        { id: 'cameras', name: 'Cameras', icon: '📷', path: '/electronics/cameras' },
        { id: 'smart-home', name: 'Smart Home', icon: '🏠', path: '/electronics/smart-home' }
      ],
      stores: [
        { id: 1, name: 'Croma', cashback: '12%', rating: 4.3, distance: '1.2 km', trending: true },
        { id: 2, name: 'Reliance Digital', cashback: '10%', rating: 4.5, distance: '2.0 km', trending: true },
        { id: 3, name: 'Vijay Sales', cashback: '15%', rating: 4.4, distance: '1.8 km', trending: false },
        { id: 4, name: 'Amazon', cashback: '8%', rating: 4.6, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'iPhone 15 Pro', price: 124999, mrp: 134900, discount: 7, coins: 12499 },
        { id: 2, title: 'Samsung Galaxy S24', price: 79999, mrp: 89999, discount: 11, coins: 7999 },
        { id: 3, title: 'MacBook Air M2', price: 99900, mrp: 114900, discount: 13, coins: 9990 }
      ]
    },
    fashion: {
      title: 'Fashion',
      subtitle: 'Trending styles & brands',
      icon: '👗',
      color: 'from-pink-500 to-purple-500',
      cashback: '15-25%',
      subCategories: [
        { id: 'men', name: 'Men', icon: '👔', path: '/fashion/men' },
        { id: 'women', name: 'Women', icon: '👗', path: '/fashion/women' },
        { id: 'kids', name: 'Kids', icon: '🧸', path: '/fashion/kids' },
        { id: 'footwear', name: 'Footwear', icon: '👟', path: '/fashion/footwear' },
        { id: 'accessories', name: 'Accessories', icon: '👜', path: '/fashion/accessories' },
        { id: 'ethnic', name: 'Ethnic Wear', icon: '🥻', path: '/fashion/ethnic' }
      ],
      stores: [
        { id: 1, name: 'Zara', cashback: '20%', rating: 4.6, distance: '1.5 km', trending: true },
        { id: 2, name: 'H&M', cashback: '18%', rating: 4.4, distance: '2.2 km', trending: true },
        { id: 3, name: 'Westside', cashback: '22%', rating: 4.3, distance: '1.0 km', trending: false },
        { id: 4, name: 'Myntra', cashback: '15%', rating: 4.5, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Levi\'s Jeans', price: 1999, mrp: 3499, discount: 43, coins: 199 },
        { id: 2, title: 'Nike Sneakers', price: 4999, mrp: 8999, discount: 44, coins: 499 },
        { id: 3, title: 'Formal Shirt', price: 899, mrp: 1999, discount: 55, coins: 89 }
      ]
    },
    food: {
      title: 'Food & Dining',
      subtitle: 'Restaurants & delivery',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500',
      cashback: '10-20%',
      subCategories: [
        { id: 'restaurants', name: 'Restaurants', icon: '🍴', path: '/food/restaurants' },
        { id: 'cafes', name: 'Cafes', icon: '☕', path: '/food/cafes' },
        { id: 'delivery', name: 'Delivery', icon: '🛵', path: '/food/delivery' },
        { id: 'desserts', name: 'Desserts', icon: '🍰', path: '/food/desserts' },
        { id: 'bakery', name: 'Bakery', icon: '🥐', path: '/food/bakery' },
        { id: 'fine-dining', name: 'Fine Dining', icon: '🍷', path: '/food/fine-dining' }
      ],
      stores: [
        { id: 1, name: 'Domino\'s Pizza', cashback: '15%', rating: 4.2, distance: '0.8 km', trending: true },
        { id: 2, name: 'McDonald\'s', cashback: '12%', rating: 4.1, distance: '1.5 km', trending: true },
        { id: 3, name: 'Starbucks', cashback: '18%', rating: 4.5, distance: '0.5 km', trending: true },
        { id: 4, name: 'Swiggy', cashback: '10%', rating: 4.3, distance: 'Online', trending: false }
      ],
      deals: [
        { id: 1, title: 'Pizza Combo', price: 499, mrp: 899, discount: 44, coins: 49 },
        { id: 2, title: 'Coffee + Cake', price: 299, mrp: 450, discount: 34, coins: 29 },
        { id: 3, title: 'Lunch Buffet', price: 599, mrp: 999, discount: 40, coins: 59 }
      ]
    },
    beauty: {
      title: 'Beauty & Wellness',
      subtitle: 'Salons, spas & products',
      icon: '💄',
      color: 'from-pink-500 to-rose-500',
      cashback: '20-30%',
      subCategories: [
        { id: 'services', name: 'Salon & Spa', icon: '💆', path: '/beauty/services' },
        { id: 'products', name: 'Products', icon: '💄', path: '/beauty/products' },
        { id: 'clinics', name: 'Clinics', icon: '🏥', path: '/beauty/clinics' },
        { id: 'nearby', name: 'Nearby', icon: '📍', path: '/beauty/nearby' },
        { id: 'deals', name: 'Deals', icon: '🏷️', path: '/beauty/deals' },
        { id: 'makeup', name: 'Makeup', icon: '💋', path: '/beauty/makeup' }
      ],
      stores: [
        { id: 1, name: 'Lakme Salon', cashback: '25%', rating: 4.4, distance: '1.0 km', trending: true },
        { id: 2, name: 'Nykaa', cashback: '20%', rating: 4.5, distance: 'Online', trending: true },
        { id: 3, name: 'Glowzy Spa', cashback: '30%', rating: 4.6, distance: '2.0 km', trending: false },
        { id: 4, name: 'Sephora', cashback: '22%', rating: 4.7, distance: '3.0 km', trending: true }
      ],
      deals: [
        { id: 1, title: 'Hair Spa', price: 999, mrp: 1999, discount: 50, coins: 99 },
        { id: 2, title: 'Full Body Massage', price: 1499, mrp: 2499, discount: 40, coins: 149 },
        { id: 3, title: 'Makeup Kit', price: 2499, mrp: 4999, discount: 50, coins: 249 }
      ]
    },
    fitness: {
      title: 'Fitness & Sports',
      subtitle: 'Gyms, studios & gear',
      icon: '💪',
      color: 'from-orange-500 to-red-500',
      cashback: '15-25%',
      subCategories: [
        { id: 'gyms', name: 'Gyms', icon: '🏋️', path: '/fitness/gyms' },
        { id: 'studios', name: 'Studios', icon: '🧘', path: '/fitness/studios' },
        { id: 'trainers', name: 'Trainers', icon: '👨‍🏫', path: '/fitness/trainers' },
        { id: 'store', name: 'Store', icon: '👟', path: '/fitness/store' },
        { id: 'challenges', name: 'Challenges', icon: '🏆', path: '/fitness/challenges' },
        { id: 'nutrition', name: 'Nutrition', icon: '🥗', path: '/fitness/nutrition' }
      ],
      stores: [
        { id: 1, name: 'Gold\'s Gym', cashback: '20%', rating: 4.5, distance: '1.5 km', trending: true },
        { id: 2, name: 'Cult.fit', cashback: '18%', rating: 4.4, distance: '2.0 km', trending: true },
        { id: 3, name: 'Decathlon', cashback: '15%', rating: 4.6, distance: '3.5 km', trending: false },
        { id: 4, name: 'Fitbit Store', cashback: '22%', rating: 4.3, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Gym Membership', price: 4999, mrp: 8999, discount: 44, coins: 499 },
        { id: 2, title: 'Yoga Mat + Blocks', price: 899, mrp: 1499, discount: 40, coins: 89 },
        { id: 3, title: 'Protein Powder', price: 1999, mrp: 2999, discount: 33, coins: 199 }
      ]
    },
    grocery: {
      title: 'Grocery & Essentials',
      subtitle: 'Daily needs delivered fast',
      icon: '🛒',
      color: 'from-green-500 to-teal-500',
      cashback: '5-15%',
      subCategories: [
        { id: 'fast', name: 'Quick Delivery', icon: '⚡', path: '/grocery/fast' },
        { id: 'stores', name: 'Stores', icon: '🏪', path: '/grocery/stores' },
        { id: 'deals', name: 'Deals', icon: '🔥', path: '/grocery/deals' },
        { id: 'compare', name: 'Compare', icon: '⚖️', path: '/grocery/compare' },
        { id: 'products', name: 'Browse', icon: '📦', path: '/grocery/products' },
        { id: 'fresh', name: 'Fresh Produce', icon: '🥬', path: '/grocery/fresh' }
      ],
      stores: [
        { id: 1, name: 'Blinkit', cashback: '10%', rating: 4.2, distance: '0.5 km', trending: true },
        { id: 2, name: 'Big Bazaar', cashback: '12%', rating: 4.1, distance: '2.0 km', trending: false },
        { id: 3, name: 'D-Mart', cashback: '8%', rating: 4.3, distance: '3.0 km', trending: true },
        { id: 4, name: 'BigBasket', cashback: '15%', rating: 4.4, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Monthly Essentials', price: 1999, mrp: 2999, discount: 33, coins: 199 },
        { id: 2, title: 'Fresh Vegetables', price: 299, mrp: 450, discount: 34, coins: 29 },
        { id: 3, title: 'Pantry Combo', price: 899, mrp: 1299, discount: 31, coins: 89 }
      ]
    },
    healthcare: {
      title: 'Healthcare',
      subtitle: 'Doctors, pharmacy & diagnostics',
      icon: '⚕️',
      color: 'from-blue-500 to-indigo-500',
      cashback: '10-25%',
      subCategories: [
        { id: 'doctors', name: 'Doctors', icon: '👨‍⚕️', path: '/healthcare/doctors' },
        { id: 'pharmacy', name: 'Pharmacy', icon: '💊', path: '/healthcare/pharmacy' },
        { id: 'diagnostics', name: 'Lab Tests', icon: '🔬', path: '/healthcare/diagnostics' },
        { id: 'dental', name: 'Dental', icon: '🦷', path: '/healthcare/dental' },
        { id: 'emergency', name: 'Emergency', icon: '🚑', path: '/healthcare/emergency' },
        { id: 'wellness', name: 'Wellness', icon: '🧘', path: '/healthcare/wellness' }
      ],
      stores: [
        { id: 1, name: 'Apollo Pharmacy', cashback: '20%', rating: 4.5, distance: '1.0 km', trending: true },
        { id: 2, name: 'Practo', cashback: '15%', rating: 4.4, distance: 'Online', trending: true },
        { id: 3, name: 'Metropolis Labs', cashback: '25%', rating: 4.6, distance: '2.5 km', trending: false },
        { id: 4, name: '1mg', cashback: '22%', rating: 4.5, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Doctor Consultation', price: 299, mrp: 500, discount: 40, coins: 29 },
        { id: 2, title: 'Full Body Checkup', price: 999, mrp: 1999, discount: 50, coins: 99 },
        { id: 3, title: 'Medicine Combo', price: 499, mrp: 799, discount: 38, coins: 49 }
      ]
    },
    'home-services': {
      title: 'Home Services',
      subtitle: 'Professional help at home',
      icon: '🏠',
      color: 'from-amber-500 to-orange-500',
      cashback: '15-30%',
      subCategories: [
        { id: 'popular', name: 'Repairs', icon: '🔧', path: '/home-services/popular' },
        { id: 'cleaning', name: 'Cleaning', icon: '🧹', path: '/home-services/cleaning' },
        { id: 'painting', name: 'Painting', icon: '🎨', path: '/home-services/painting' },
        { id: 'available-today', name: 'Today', icon: '⚡', path: '/home-services/available-today' },
        { id: 'providers', name: 'Providers', icon: '👨‍🔧', path: '/home-services/providers' },
        { id: 'pest-control', name: 'Pest Control', icon: '🐛', path: '/home-services/pest-control' }
      ],
      stores: [
        { id: 1, name: 'Urban Company', cashback: '25%', rating: 4.4, distance: '1.0 km', trending: true },
        { id: 2, name: 'Housejoy', cashback: '20%', rating: 4.3, distance: '2.0 km', trending: false },
        { id: 3, name: 'UrbanClap', cashback: '22%', rating: 4.5, distance: '1.5 km', trending: true },
        { id: 4, name: 'Justdial', cashback: '18%', rating: 4.2, distance: 'Online', trending: false }
      ],
      deals: [
        { id: 1, title: 'AC Service', price: 599, mrp: 999, discount: 40, coins: 59 },
        { id: 2, title: 'Deep Cleaning', price: 1999, mrp: 2999, discount: 33, coins: 199 },
        { id: 3, title: 'Painting - 1BHK', price: 8999, mrp: 12999, discount: 31, coins: 899 }
      ]
    },
    financial: {
      title: 'Financial Services',
      subtitle: 'Bills, recharge & more',
      icon: '💳',
      color: 'from-indigo-500 to-purple-500',
      cashback: '1-5%',
      subCategories: [
        { id: 'bills', name: 'Pay Bills', icon: '📝', path: '/financial/bills' },
        { id: 'ott', name: 'OTT Plans', icon: '📺', path: '/financial/ott' },
        { id: 'recharge', name: 'Recharge', icon: '📱', path: '/financial/recharge' },
        { id: 'gold', name: 'Gold', icon: '🪙', path: '/financial/gold' },
        { id: 'offers', name: 'Offers', icon: '🎁', path: '/financial/offers' },
        { id: 'insurance', name: 'Insurance', icon: '🛡️', path: '/financial/insurance' }
      ],
      stores: [
        { id: 1, name: 'Paytm', cashback: '5%', rating: 4.2, distance: 'Online', trending: true },
        { id: 2, name: 'PhonePe', cashback: '3%', rating: 4.4, distance: 'Online', trending: true },
        { id: 3, name: 'CRED', cashback: '2%', rating: 4.5, distance: 'Online', trending: false },
        { id: 4, name: 'Amazon Pay', cashback: '4%', rating: 4.3, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Netflix Premium', price: 649, mrp: 799, discount: 19, coins: 64 },
        { id: 2, title: 'Electricity Bill', price: 0, mrp: 0, discount: 0, coins: 50 },
        { id: 3, title: 'DTH Recharge', price: 399, mrp: 399, discount: 0, coins: 39 }
      ]
    },
    travel: {
      title: 'Travel',
      subtitle: 'Flights, hotels & experiences',
      icon: '✈️',
      color: 'from-sky-500 to-blue-500',
      cashback: '5-15%',
      subCategories: [
        { id: 'flights', name: 'Flights', icon: '✈️', path: '/travel/flights' },
        { id: 'hotels', name: 'Hotels', icon: '🏨', path: '/travel/hotels' },
        { id: 'packages', name: 'Packages', icon: '🎒', path: '/travel/packages' },
        { id: 'activities', name: 'Activities', icon: '🎡', path: '/travel/activities' },
        { id: 'visa', name: 'Visa', icon: '📋', path: '/travel/visa' },
        { id: 'insurance', name: 'Insurance', icon: '🛡️', path: '/travel/insurance' }
      ],
      stores: [
        { id: 1, name: 'MakeMyTrip', cashback: '10%', rating: 4.3, distance: 'Online', trending: true },
        { id: 2, name: 'Goibibo', cashback: '12%', rating: 4.2, distance: 'Online', trending: true },
        { id: 3, name: 'Booking.com', cashback: '8%', rating: 4.5, distance: 'Online', trending: false },
        { id: 4, name: 'Airbnb', cashback: '15%', rating: 4.6, distance: 'Online', trending: true }
      ],
      deals: [
        { id: 1, title: 'Goa Package', price: 14999, mrp: 19999, discount: 25, coins: 1499 },
        { id: 2, title: 'Hotel Booking', price: 2999, mrp: 4999, discount: 40, coins: 299 },
        { id: 3, title: 'Flight Tickets', price: 5999, mrp: 7999, discount: 25, coins: 599 }
      ]
    }
  };

  const data = categoryData[category] || categoryData['electronics'];
  const sortOptions = ['popular', 'distance', 'cashback', 'rating'];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{data.title}</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{data.subtitle}</p>
          </div>
          <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Hero */}
        <div className={`p-6 rounded-rez-xl bg-gradient-to-br ${data.color} text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-5xl">
              {data.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-h3 font-poppins mb-1">{data.title}</h2>
              <p className="text-body-sm opacity-90">{data.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
            <Coins className="w-5 h-5" />
            <span className="text-body font-medium">Earn up to {data.cashback} cashback + coins</span>
          </div>
        </div>

        {/* Sub-Categories */}
        <div className="space-y-3">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Browse by Type</h3>
          <div className="grid grid-cols-3 gap-3">
            {data.subCategories.map((sub) => (
              <Link
                key={sub.id}
                to={sub.path}
                className="p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all active:scale-95 text-center"
              >
                <span className="text-3xl mb-2 block">{sub.icon}</span>
                <p className="text-caption font-medium text-rez-navy dark:text-white">{sub.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters & Sort */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                  sortBy === option
                    ? 'bg-emerald-500 text-white'
                    : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors">
            <Filter className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Hot Deals */}
        {data.deals && data.deals.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Hot Deals</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {data.deals.map((deal) => (
                <Link
                  key={deal.id}
                  to={`/product/${deal.id}`}
                  className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-orange-500 dark:hover:border-orange-500 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-body font-semibold text-rez-navy dark:text-white mb-1">{deal.title}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-h5 font-poppins text-rez-navy dark:text-white">₹{deal.price.toLocaleString()}</span>
                        <span className="text-caption text-rez-gray-500 dark:text-gray-500 line-through">₹{deal.mrp.toLocaleString()}</span>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-xs font-bold text-green-600 dark:text-green-400">
                          {deal.discount}% OFF
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-caption text-emerald-600 dark:text-emerald-400">
                        <Coins className="w-4 h-4" />
                        <span className="font-bold">+{deal.coins} coins</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-rez-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Stores */}
        <div className="space-y-3">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Featured Stores</h3>
          <div className="space-y-3">
            {data.stores.map((store) => (
              <Link
                key={store.id}
                to={`/store/${store.id}`}
                className="block p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-body font-semibold text-rez-navy dark:text-white">{store.name}</h4>
                  {store.trending && (
                    <span className="px-2 py-1 rounded-full bg-orange-500/20 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-orange-500" />
                      <span className="text-xs font-bold text-orange-500">Trending</span>
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-caption">
                  <div className="flex items-center gap-3 text-rez-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span>{store.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{store.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                    <Tag className="w-4 h-4" />
                    <span>{store.cashback} cashback</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/30 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-3 text-purple-500" />
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">Earn on Every Purchase</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Shop at any {data.title.toLowerCase()} store and earn ReZ coins + cashback
          </p>
          <button className="px-6 py-3 rounded-rez-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold transition-all">
            Start Shopping
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CategoryHub;
