import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, Search, Filter, MapPin, Calendar, Users, Star,
  TrendingUp, Zap, Award, Clock, ChevronRight, Plane, Hotel,
  Car, Compass, Coins, Gift, Sparkles, Info
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CashStoreCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Category configuration
  const categoryConfig = {
    flights: {
      title: 'Flight Bookings',
      icon: Plane,
      emoji: '✈️',
      description: 'Book flights & earn up to 8% cashback',
      color: 'from-blue-500 to-cyan-500'
    },
    hotels: {
      title: 'Hotel Bookings',
      icon: Hotel,
      emoji: '🏨',
      description: 'Book hotels & earn up to 12% cashback',
      color: 'from-purple-500 to-pink-500'
    },
    cabs: {
      title: 'Cab Bookings',
      icon: Car,
      emoji: '🚗',
      description: 'Book rides & earn up to 5% cashback',
      color: 'from-emerald-500 to-teal-500'
    },
    activities: {
      title: 'Activities & Experiences',
      icon: Compass,
      emoji: '🎭',
      description: 'Book activities & earn up to 10% cashback',
      color: 'from-orange-500 to-amber-500'
    }
  };

  const config = categoryConfig[category] || categoryConfig.flights;
  const Icon = config.icon;

  // Category-specific data
  const categoryData = {
    flights: {
      platforms: [
        {
          id: 1,
          name: 'MakeMyTrip',
          logo: 'https://logo.clearbit.com/makemytrip.com',
          cashback: '8%',
          maxCashback: 2000,
          rating: 4.5,
          reviews: '12.5k',
          trending: true,
          features: ['Free cancellation', 'Price alerts', '24/7 support'],
          offer: 'Flat ₹1500 OFF on domestic flights'
        },
        {
          id: 2,
          name: 'Goibibo',
          logo: 'https://logo.clearbit.com/goibibo.com',
          cashback: '7%',
          maxCashback: 1500,
          rating: 4.4,
          reviews: '10.2k',
          popular: true,
          features: ['goCash rewards', 'Easy refunds', 'Best prices'],
          offer: 'Up to ₹2000 OFF + Extra 7% cashback'
        },
        {
          id: 3,
          name: 'Yatra',
          logo: '🌍',
          cashback: '6%',
          maxCashback: 1200,
          rating: 4.3,
          reviews: '8.9k',
          features: ['eCash benefits', 'Instant confirmation', 'Fare calendar'],
          offer: 'Save up to ₹1200 on flights'
        },
        {
          id: 4,
          name: 'EaseMyTrip',
          logo: '🛩️',
          cashback: '5%',
          maxCashback: 1000,
          rating: 4.2,
          reviews: '7.5k',
          trending: true,
          features: ['Zero convenience fee', 'Flexible booking', 'Quick refunds'],
          offer: 'Zero convenience fee + 5% cashback'
        },
        {
          id: 5,
          name: 'Cleartrip',
          logo: 'https://logo.clearbit.com/makemytrip.com',
          cashback: '6.5%',
          maxCashback: 1500,
          rating: 4.4,
          reviews: '9.8k',
          features: ['Express checkout', 'Price guarantee', 'Multi-city search'],
          offer: 'Flat ₹800 OFF on international flights'
        },
        {
          id: 6,
          name: 'AirAsia',
          logo: 'https://logo.clearbit.com/goibibo.com',
          cashback: '4%',
          maxCashback: 800,
          rating: 4.1,
          reviews: '5.2k',
          features: ['Direct booking', 'Lowest fares', 'Flexible dates'],
          offer: 'Book direct & save more'
        }
      ],
      filters: [
        { id: 'all', name: 'All Platforms', count: 15 },
        { id: 'trending', name: 'Trending', count: 6 },
        { id: 'high-cashback', name: 'High Cashback', count: 8 },
        { id: 'popular', name: 'Popular', count: 10 }
      ]
    },
    hotels: {
      platforms: [
        {
          id: 1,
          name: 'MakeMyTrip',
          logo: '🏨',
          cashback: '12%',
          maxCashback: 3000,
          rating: 4.6,
          reviews: '15.2k',
          trending: true,
          popular: true,
          features: ['Free cancellation', '24hr check-in', 'Best price guarantee'],
          offer: 'Up to 60% OFF + 12% cashback'
        },
        {
          id: 2,
          name: 'Booking.com',
          logo: 'https://logo.clearbit.com/booking.com',
          cashback: '10%',
          maxCashback: 2500,
          rating: 4.7,
          reviews: '18.5k',
          trending: true,
          features: ['No booking fees', 'Genius rewards', 'Verified reviews'],
          offer: 'Genius members save 10% or more'
        },
        {
          id: 3,
          name: 'OYO',
          logo: '🏠',
          cashback: '15%',
          maxCashback: 2000,
          rating: 4.3,
          reviews: '25.8k',
          popular: true,
          features: ['OYO Wizard benefits', 'Sanitized stays', 'Flexible booking'],
          offer: 'Flat 50% OFF + 15% cashback'
        },
        {
          id: 4,
          name: 'Goibibo',
          logo: '🏨',
          cashback: '11%',
          maxCashback: 2800,
          rating: 4.5,
          reviews: '12.4k',
          features: ['goCash benefits', 'Pay at hotel', 'Top-rated properties'],
          offer: 'Save up to ₹3000 on hotels'
        },
        {
          id: 5,
          name: 'Agoda',
          logo: '🌟',
          cashback: '9%',
          maxCashback: 2200,
          rating: 4.4,
          reviews: '10.5k',
          trending: true,
          features: ['Secret deals', 'Points & rewards', 'Price match'],
          offer: 'Members save up to 15% extra'
        },
        {
          id: 6,
          name: 'Treebo',
          logo: '🏨',
          cashback: '8%',
          maxCashback: 1500,
          rating: 4.2,
          reviews: '7.8k',
          features: ['Quality assured', 'Free WiFi', 'Best rates'],
          offer: 'Flat 40% OFF on all bookings'
        }
      ],
      filters: [
        { id: 'all', name: 'All Platforms', count: 20 },
        { id: 'trending', name: 'Trending', count: 8 },
        { id: 'high-cashback', name: 'High Cashback', count: 10 },
        { id: 'popular', name: 'Popular', count: 12 }
      ]
    },
    cabs: {
      platforms: [
        {
          id: 1,
          name: 'Uber',
          logo: 'https://logo.clearbit.com/uber.com',
          cashback: '5%',
          maxCashback: 200,
          rating: 4.5,
          reviews: '50.2k',
          trending: true,
          popular: true,
          features: ['Safety features', 'Ride scheduling', '24/7 support'],
          offer: 'Flat 50% OFF on first 3 rides'
        },
        {
          id: 2,
          name: 'Ola',
          logo: 'https://logo.clearbit.com/olacabs.com',
          cashback: '5%',
          maxCashback: 150,
          rating: 4.4,
          reviews: '45.8k',
          popular: true,
          features: ['Ola Money cashback', 'Ride pass', 'Multiple categories'],
          offer: 'Save up to 25% with ride pass'
        },
        {
          id: 3,
          name: 'Rapido',
          logo: '🏍️',
          cashback: '4%',
          maxCashback: 100,
          rating: 4.3,
          reviews: '32.5k',
          trending: true,
          features: ['Bike & auto rides', 'Quick booking', 'Affordable rates'],
          offer: 'Flat ₹50 OFF on bike rides'
        },
        {
          id: 4,
          name: 'Meru',
          logo: '🚖',
          cashback: '3%',
          maxCashback: 120,
          rating: 4.2,
          reviews: '15.4k',
          features: ['Professional drivers', 'Clean cabs', 'Corporate travel'],
          offer: 'Premium rides at best prices'
        },
        {
          id: 5,
          name: 'BluSmart',
          logo: '⚡',
          cashback: '4%',
          maxCashback: 150,
          rating: 4.6,
          reviews: '12.8k',
          trending: true,
          features: ['100% electric', 'Zero surge', 'Clean & safe'],
          offer: 'Eco-friendly rides + 4% cashback'
        }
      ],
      filters: [
        { id: 'all', name: 'All Services', count: 12 },
        { id: 'trending', name: 'Trending', count: 5 },
        { id: 'high-cashback', name: 'High Cashback', count: 6 },
        { id: 'popular', name: 'Popular', count: 8 }
      ]
    },
    activities: {
      platforms: [
        {
          id: 1,
          name: 'BookMyShow',
          logo: '🎬',
          cashback: '10%',
          maxCashback: 500,
          rating: 4.6,
          reviews: '28.5k',
          trending: true,
          popular: true,
          features: ['Movies & events', 'Instant booking', 'Best seats'],
          offer: 'Flat ₹150 OFF on movies'
        },
        {
          id: 2,
          name: 'Insider',
          logo: '🎭',
          cashback: '8%',
          maxCashback: 1000,
          rating: 4.5,
          reviews: '15.2k',
          trending: true,
          features: ['Live events', 'Workshops', 'Comedy shows'],
          offer: 'Up to 30% OFF on experiences'
        },
        {
          id: 3,
          name: 'Headout',
          logo: '🎫',
          cashback: '7%',
          maxCashback: 800,
          rating: 4.4,
          reviews: '12.8k',
          features: ['Last-minute deals', 'Skip-the-line', 'Tours & activities'],
          offer: 'Best-price guarantee + 7% cashback'
        },
        {
          id: 4,
          name: 'Thrillophilia',
          logo: '🏔️',
          cashback: '9%',
          maxCashback: 1500,
          rating: 4.5,
          reviews: '18.4k',
          popular: true,
          features: ['Adventure tours', 'Group packages', 'Expert guides'],
          offer: 'Save up to ₹2000 on packages'
        },
        {
          id: 5,
          name: 'Paytm Insider',
          logo: '🎪',
          cashback: '6%',
          maxCashback: 600,
          rating: 4.3,
          reviews: '10.5k',
          features: ['Concerts & events', 'Sports tickets', 'Comedy shows'],
          offer: 'Flat 20% cashback with Paytm'
        },
        {
          id: 6,
          name: 'Zomato Live',
          logo: '🎵',
          cashback: '5%',
          maxCashback: 400,
          rating: 4.2,
          reviews: '8.2k',
          trending: true,
          features: ['Food festivals', 'Music events', 'Nightlife'],
          offer: 'Exclusive events + 5% cashback'
        }
      ],
      filters: [
        { id: 'all', name: 'All Activities', count: 25 },
        { id: 'trending', name: 'Trending', count: 10 },
        { id: 'high-cashback', name: 'High Cashback', count: 12 },
        { id: 'popular', name: 'Popular', count: 15 }
      ]
    }
  };

  const data = categoryData[category] || categoryData.flights;
  const platforms = data.platforms;
  const filters = data.filters;

  // Filter platforms
  const filteredPlatforms = platforms.filter(platform => {
    if (selectedFilter === 'trending') return platform.trending;
    if (selectedFilter === 'popular') return platform.popular;
    if (selectedFilter === 'high-cashback') return parseFloat(platform.cashback) >= 7;
    return true;
  });

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{config.emoji}</span>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{config.title}</h1>
            </div>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{config.description}</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rez-gray-100 dark:bg-white/5">
            <Search className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${config.title.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-rez-navy dark:text-white placeholder-rez-gray-600 dark:placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="px-4 pb-3 overflow-x-auto hide-scrollbar">
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium shrink-0 transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r ' + config.color + ' text-white'
                    : 'bg-white dark:bg-white/5 text-rez-gray-600 dark:text-gray-400'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top Cashback Banner */}
      <div className="px-4 py-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${config.color}/10 border border-${config.color}/20`}>
          <div className="flex items-start gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${config.color}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-rez-navy dark:text-white mb-1">
                Earn Up To {category === 'hotels' ? '15%' : category === 'flights' ? '8%' : category === 'activities' ? '10%' : '5%'} Cashback
              </h3>
              <p className="text-sm text-rez-gray-600 dark:text-gray-400">
                Book through ReZ Cash Store and earn cashback on every booking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Quick */}
      <div className="px-4 pb-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-blue-500" />
            <h3 className="text-sm font-bold text-rez-navy dark:text-white">How It Works</h3>
          </div>
          <div className="space-y-2 text-sm text-rez-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">1.</span>
              <span>Click on any platform below to visit their website</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">2.</span>
              <span>Complete your booking on their platform</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">3.</span>
              <span>Cashback will be tracked & credited to your ReZ Wallet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms List */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-rez-navy dark:text-white">
            Top Platforms ({filteredPlatforms.length})
          </h2>
        </div>

        <div className="space-y-3">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer"
            >
              {/* Platform Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center text-3xl">
                  {platform.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-rez-navy dark:text-white">{platform.name}</h3>
                    {platform.trending && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-600 dark:text-red-400">
                        🔥 Trending
                      </span>
                    )}
                    {platform.popular && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        ⭐ Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-semibold text-rez-navy dark:text-white">{platform.rating}</span>
                      <span className="text-xs text-rez-gray-600 dark:text-gray-400">({platform.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cashback Info */}
              <div className={`p-3 rounded-xl bg-gradient-to-r ${config.color}/10 border border-${config.color}/20 mb-3`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">Earn Cashback</p>
                      <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {platform.cashback}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-rez-gray-600 dark:text-gray-400">Max Cashback</p>
                    <p className="text-sm font-bold text-rez-navy dark:text-white">₹{platform.maxCashback}</p>
                  </div>
                </div>
              </div>

              {/* Offer */}
              {platform.offer && (
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 mb-3">
                  <div className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {platform.offer}
                    </p>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-3">
                {platform.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-rez-gray-100 dark:bg-white/5 text-rez-gray-600 dark:text-gray-400"
                  >
                    ✓ {feature}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${config.color} text-white font-semibold hover:scale-[1.02] transition-all flex items-center justify-center gap-2`}>
                Book Now & Earn {platform.cashback}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 pb-6">
        <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3">Why Book Through ReZ?</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">Extra Cashback</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">On every booking</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">Best Prices</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Same as platform</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">Auto Tracking</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">No manual upload</p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-bold text-rez-navy dark:text-white mb-1">Quick Credit</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Within 48 hours</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 pb-6">
        <h3 className="text-base font-bold text-rez-navy dark:text-white mb-3">Frequently Asked Questions</h3>
        <div className="space-y-2">
          <details className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <summary className="font-semibold text-sm text-rez-navy dark:text-white cursor-pointer">
              How do I earn cashback?
            </summary>
            <p className="mt-2 text-sm text-rez-gray-600 dark:text-gray-400">
              Click on any platform above, complete your booking, and cashback will be automatically tracked and credited to your ReZ Wallet within 48 hours.
            </p>
          </details>
          <details className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <summary className="font-semibold text-sm text-rez-navy dark:text-white cursor-pointer">
              When will I receive my cashback?
            </summary>
            <p className="mt-2 text-sm text-rez-gray-600 dark:text-gray-400">
              Cashback is credited within 48 hours of successful booking completion. You'll receive a notification once credited.
            </p>
          </details>
          <details className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
            <summary className="font-semibold text-sm text-rez-navy dark:text-white cursor-pointer">
              Can I use coupons with cashback?
            </summary>
            <p className="mt-2 text-sm text-rez-gray-600 dark:text-gray-400">
              Yes! You can use any coupons or offers from the platform along with earning ReZ cashback.
            </p>
          </details>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CashStoreCategory;
