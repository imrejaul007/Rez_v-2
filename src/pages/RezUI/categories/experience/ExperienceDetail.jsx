import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Store,
  TrendingUp,
  Star,
  MapPin,
  Clock,
  Tag,
  Sparkles,
  Gift,
  Coins,
  ChevronRight,
  Heart,
  Share2,
  Filter,
  Search
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceDetail = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const experienceData = {
    'sample-trial': {
      title: 'Sample/Trial Store',
      subtitle: 'Try before you buy',
      icon: '🧪',
      color: 'from-blue-500 to-cyan-500',
      description: 'Experience products before making a purchase. Get free samples and trial offers from top brands.',
      benefits: [
        'Free product samples',
        'Trial period for electronics',
        'Test cosmetics before buying',
        'Money-back guarantee on trials'
      ],
      categories: ['Beauty', 'Electronics', 'Fashion', 'Food'],
      stores: [
        { id: 1, name: 'Nykaa', category: 'Beauty', offer: 'Free makeup samples', rating: 4.5, distance: '1.2 km', image: '💄' },
        { id: 2, name: 'Croma', category: 'Electronics', offer: '7-day trial on headphones', rating: 4.3, distance: '2.5 km', image: '🎧' },
        { id: 3, name: 'Sephora', category: 'Beauty', offer: 'Try 3 perfumes free', rating: 4.7, distance: '0.8 km', image: '🌸' },
        { id: 4, name: 'Decathlon', category: 'Sports', offer: 'Test sports gear', rating: 4.4, distance: '3.2 km', image: '⚽' }
      ]
    },
    '60-min-delivery': {
      title: '60 Min Delivery',
      subtitle: 'Ultra-fast delivery',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      description: 'Get your orders delivered in 60 minutes or less. Perfect for urgent needs and last-minute shopping.',
      benefits: [
        'Guaranteed 60-min delivery',
        'Real-time order tracking',
        'Free delivery on orders ₹500+',
        'Late delivery = coins back'
      ],
      categories: ['Groceries', 'Food', 'Medicine', 'Electronics'],
      stores: [
        { id: 1, name: 'Blinkit', category: 'Groceries', offer: '10% off first order', rating: 4.2, distance: '0.5 km', image: '🛒' },
        { id: 2, name: 'Swiggy Instamart', category: 'Groceries', offer: 'Free delivery today', rating: 4.4, distance: '1.0 km', image: '🥗' },
        { id: 3, name: 'Zepto', category: 'Groceries', offer: '15% cashback', rating: 4.3, distance: '0.7 km', image: '🍎' },
        { id: 4, name: 'Dunzo', category: 'Medicine', offer: 'Express pharma delivery', rating: 4.1, distance: '1.5 km', image: '💊' }
      ]
    },
    'luxury': {
      title: 'Luxury Store',
      subtitle: 'Premium brands',
      icon: '💎',
      color: 'from-purple-500 to-pink-500',
      description: 'Indulge in premium shopping experiences with exclusive luxury brands and VIP treatment.',
      benefits: [
        'Personal shopping assistance',
        'Exclusive brand collections',
        'Premium gift wrapping',
        'VIP lounge access'
      ],
      categories: ['Fashion', 'Jewelry', 'Watches', 'Accessories'],
      stores: [
        { id: 1, name: 'Louis Vuitton', category: 'Fashion', offer: 'New collection preview', rating: 4.9, distance: '5.2 km', image: '👜' },
        { id: 2, name: 'Tiffany & Co', category: 'Jewelry', offer: 'Complimentary engraving', rating: 4.8, distance: '4.8 km', image: '💍' },
        { id: 3, name: 'Rolex', category: 'Watches', offer: 'Exclusive viewing', rating: 4.9, distance: '5.0 km', image: '⌚' },
        { id: 4, name: 'Gucci', category: 'Fashion', offer: 'Limited edition items', rating: 4.7, distance: '4.5 km', image: '👗' }
      ]
    },
    'organic': {
      title: 'Organic Store',
      subtitle: '100% natural',
      icon: '🌿',
      color: 'from-green-500 to-emerald-500',
      description: 'Shop 100% certified organic products. Healthy choices for you and sustainable for the planet.',
      benefits: [
        'Certified organic products',
        'Farm-to-table freshness',
        'Eco-friendly packaging',
        'Sustainability rewards'
      ],
      categories: ['Food', 'Beauty', 'Baby Care', 'Home'],
      stores: [
        { id: 1, name: 'Organic India', category: 'Food', offer: '20% off on first order', rating: 4.6, distance: '2.0 km', image: '🌾' },
        { id: 2, name: 'Nature\'s Basket', category: 'Food', offer: 'Fresh organic produce', rating: 4.5, distance: '1.8 km', image: '🥕' },
        { id: 3, name: 'Forest Essentials', category: 'Beauty', offer: 'Natural skincare', rating: 4.7, distance: '3.0 km', image: '🧴' },
        { id: 4, name: 'Conscious Food', category: 'Food', offer: 'Bulk buy discount', rating: 4.4, distance: '2.5 km', image: '🌻' }
      ]
    },
    'men': {
      title: 'Men Store',
      subtitle: 'For modern men',
      icon: '👔',
      color: 'from-gray-600 to-slate-600',
      description: 'Curated collection of fashion, grooming, and lifestyle products exclusively for men.',
      benefits: [
        'Style consultation',
        'Grooming guides',
        'Exclusive men\'s brands',
        'Loyalty rewards'
      ],
      categories: ['Fashion', 'Grooming', 'Accessories', 'Footwear'],
      stores: [
        { id: 1, name: 'Jack & Jones', category: 'Fashion', offer: '40% off on jeans', rating: 4.3, distance: '1.5 km', image: '👖' },
        { id: 2, name: 'The Man Company', category: 'Grooming', offer: 'Beard kit bundle', rating: 4.5, distance: '2.0 km', image: '🧔' },
        { id: 3, name: 'Nike Men', category: 'Footwear', offer: 'New sneaker drop', rating: 4.6, distance: '3.0 km', image: '👟' },
        { id: 4, name: 'Raymond', category: 'Fashion', offer: 'Suit customization', rating: 4.4, distance: '2.8 km', image: '🤵' }
      ]
    },
    'women': {
      title: 'Women Store',
      subtitle: 'Curated for her',
      icon: '👗',
      color: 'from-pink-500 to-rose-500',
      description: 'Discover the latest in women\'s fashion, beauty, wellness, and lifestyle essentials.',
      benefits: [
        'Personal stylist service',
        'Beauty consultations',
        'Exclusive women\'s brands',
        'Special occasion styling'
      ],
      categories: ['Fashion', 'Beauty', 'Jewelry', 'Wellness'],
      stores: [
        { id: 1, name: 'Zara Women', category: 'Fashion', offer: '50% off summer collection', rating: 4.5, distance: '1.8 km', image: '👚' },
        { id: 2, name: 'MAC Cosmetics', category: 'Beauty', offer: 'Free makeover', rating: 4.7, distance: '2.2 km', image: '💄' },
        { id: 3, name: 'Tanishq', category: 'Jewelry', offer: 'New gold collection', rating: 4.8, distance: '3.5 km', image: '💎' },
        { id: 4, name: 'Lululemon', category: 'Wellness', offer: 'Yoga gear sale', rating: 4.6, distance: '2.5 km', image: '🧘‍♀️' }
      ]
    },
    'children': {
      title: 'Children Store',
      subtitle: 'Kids essentials',
      icon: '🧸',
      color: 'from-yellow-500 to-amber-500',
      description: 'Everything your little ones need - from toys and clothes to educational products.',
      benefits: [
        'Age-appropriate selections',
        'Safety certified products',
        'Educational toys',
        'Parent discounts'
      ],
      categories: ['Toys', 'Clothing', 'Books', 'Baby Care'],
      stores: [
        { id: 1, name: 'Hamleys', category: 'Toys', offer: 'Buy 2 Get 1 free', rating: 4.6, distance: '2.0 km', image: '🎮' },
        { id: 2, name: 'Mothercare', category: 'Baby Care', offer: '30% off baby essentials', rating: 4.5, distance: '1.5 km', image: '👶' },
        { id: 3, name: 'FirstCry', category: 'Clothing', offer: 'Kids fashion sale', rating: 4.4, distance: '2.5 km', image: '👶' },
        { id: 4, name: 'Crossword Kids', category: 'Books', offer: 'Story time bundle', rating: 4.7, distance: '1.8 km', image: '📚' }
      ]
    },
    'rental': {
      title: 'Rental Store',
      subtitle: 'Rent not buy',
      icon: '🔄',
      color: 'from-indigo-500 to-blue-500',
      description: 'Rent high-quality products instead of buying. Perfect for special occasions and temporary needs.',
      benefits: [
        'Flexible rental periods',
        'No maintenance hassle',
        'Try before you buy option',
        'Eco-friendly choice'
      ],
      categories: ['Fashion', 'Electronics', 'Furniture', 'Events'],
      stores: [
        { id: 1, name: 'Rent It Bae', category: 'Fashion', offer: 'Designer outfits', rating: 4.4, distance: '2.0 km', image: '👗' },
        { id: 2, name: 'RentoMojo', category: 'Furniture', offer: 'Monthly packages', rating: 4.3, distance: '3.0 km', image: '🛋️' },
        { id: 3, name: 'Flyrobe', category: 'Fashion', offer: 'Wedding collection', rating: 4.5, distance: '2.5 km', image: '💒' },
        { id: 4, name: 'Furlenco', category: 'Furniture', offer: '3 months free delivery', rating: 4.4, distance: '3.5 km', image: '🏠' }
      ]
    },
    'gifting': {
      title: 'Gifting Store',
      subtitle: 'Perfect presents',
      icon: '🎁',
      color: 'from-red-500 to-pink-500',
      description: 'Find the perfect gift for every occasion. From personalized items to luxury hampers.',
      benefits: [
        'Gift wrapping included',
        'Personalization options',
        'Same-day delivery',
        'Gift cards available'
      ],
      categories: ['Personalized', 'Hampers', 'Experiences', 'Flowers'],
      stores: [
        { id: 1, name: 'Archies', category: 'Personalized', offer: 'Photo gifts 30% off', rating: 4.3, distance: '1.5 km', image: '📸' },
        { id: 2, name: 'Ferns N Petals', category: 'Flowers', offer: 'Fresh flower bouquets', rating: 4.6, distance: '1.0 km', image: '🌹' },
        { id: 3, name: 'IGP', category: 'Hampers', offer: 'Luxury gift boxes', rating: 4.5, distance: '2.0 km', image: '🎀' },
        { id: 4, name: 'OYO Gift Cards', category: 'Experiences', offer: 'Stay vouchers', rating: 4.4, distance: 'Online', image: '🏨' }
      ]
    }
  };

  const experience = experienceData[type] || experienceData['sample-trial'];
  const filters = ['all', ...experience.categories];

  const filteredStores = selectedFilter === 'all'
    ? experience.stores
    : experience.stores.filter(store => store.category === selectedFilter);

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
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{experience.title}</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">{experience.subtitle}</p>
          </div>
          <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
            <Search className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Hero */}
        <div className={`p-6 rounded-rez-xl bg-gradient-to-br ${experience.color} text-white`}>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-5xl">
              {experience.icon}
            </div>
            <h2 className="text-h3 font-poppins mb-2">{experience.title}</h2>
            <p className="text-body-sm opacity-90 mb-4">{experience.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
                <Store className="w-5 h-5 mx-auto mb-1" />
                <p className="text-h5 font-poppins">{experience.stores.length}+</p>
                <p className="text-caption opacity-80">Stores</p>
              </div>
              <div className="p-3 rounded-rez-lg bg-white/10 backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 mx-auto mb-1" />
                <p className="text-h5 font-poppins">50%</p>
                <p className="text-caption opacity-80">Max Savings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Experience Benefits
          </h3>
          <div className="space-y-3">
            {experience.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-body-sm text-rez-navy dark:text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white">Browse Stores</h3>
            <div className="flex items-center gap-1 text-caption text-rez-gray-600 dark:text-gray-400">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-rez-lg whitespace-nowrap transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Stores List */}
        <div className="space-y-4">
          {filteredStores.map((store) => (
            <div
              key={store.id}
              className="p-5 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card hover:shadow-rez-green transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-rez-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-3xl shrink-0">
                  {store.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-h5 font-poppins text-rez-navy dark:text-white truncate">{store.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-xs font-medium text-blue-600 dark:text-blue-400">
                          {store.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                          <span className="text-caption text-rez-gray-600 dark:text-gray-400">{store.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors">
                      <Heart className="w-5 h-5 text-rez-gray-400 dark:text-gray-500" />
                    </button>
                  </div>

                  <div className="p-3 rounded-rez-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 mb-3">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <p className="text-body-sm font-semibold text-emerald-600 dark:text-emerald-400">{store.offer}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{store.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coins className="w-4 h-4 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">Earn coins</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-rez-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-body-sm font-semibold transition-all flex items-center gap-1">
                      <span>Visit</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rewards Banner */}
        <div className="p-6 rounded-rez-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/30 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">Earn Rewards on Every Purchase</h3>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-4">
            Shop at any store in this experience and earn ReZ coins + cashback
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <Coins className="w-5 h-5 text-emerald-500" />
              <span className="text-body-sm font-bold text-emerald-600 dark:text-emerald-400">Up to 500 coins</span>
            </div>
            <div className="w-px h-4 bg-rez-gray-300 dark:bg-white/20" />
            <div className="flex items-center gap-1">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-body-sm font-bold text-blue-600 dark:text-blue-400">Up to 20% cashback</span>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredStores.length === 0 && (
          <div className="py-12 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-rez-gray-100 dark:bg-white/10 flex items-center justify-center">
              <Store className="w-10 h-10 text-rez-gray-400" />
            </div>
            <h3 className="text-h4 font-poppins text-rez-navy dark:text-white mb-2">No stores found</h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceDetail;
