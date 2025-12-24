import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Share2, ChevronRight, Info, Zap, Award, ShoppingBag, TrendingUp } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNav from '../../components/layout/BottomNav';

const MallBrandDetail = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');

  // Mock brand data - in real app, fetch based on brandId
  const brand = {
    id: brandId || '1',
    name: 'Nykaa',
    logo: '💄',
    description: 'India\'s leading beauty and wellness destination. Curated range of authentic products from 3000+ brands.',
    category: 'Beauty & Personal Care',
    rating: 4.6,
    reviews: 2847,
    badges: ['✅ Verified', '⭐ ReZ Preferred', '👑 Premium'],
    baseCoins: '12% ReZ Coins',
    banner: 'https://via.placeholder.com/800x300',
    story: 'Nykaa was founded to bring beauty to everyone. As a ReZ Mall partner, we ensure every purchase earns you valuable ReZ Coins while delivering authentic products with fast delivery.',
    highlights: [
      '100% Authentic Products',
      'Free Shipping on ₹499+',
      'Easy Returns within 15 days',
      'Expert Beauty Advice'
    ],
    offers: [
      {
        id: 1,
        title: 'Big Beauty Bonanza',
        description: 'Up to 40% off + Extra 500 ReZ Coins',
        validTill: '31 Dec 2025',
        terms: 'Min. purchase ₹1999',
        featured: true
      },
      {
        id: 2,
        title: 'First Purchase Bonus',
        description: 'Extra 300 ReZ Coins on first order',
        validTill: '31 Dec 2025',
        terms: 'For new Nykaa customers via ReZ',
        featured: false
      },
      {
        id: 3,
        title: 'Luxury Skincare Week',
        description: '25% off + Triple ReZ Coins',
        validTill: '25 Dec 2025',
        terms: 'On select luxury brands',
        featured: false
      }
    ],
    products: [
      { id: 1, name: 'Lakme Perfecting Liquid Foundation', price: 475, coins: 57, image: '🧴', rating: 4.4 },
      { id: 2, name: 'Maybelline Colossal Kajal', price: 225, coins: 27, image: '✏️', rating: 4.6 },
      { id: 3, name: 'Neutrogena Deep Clean Facewash', price: 349, coins: 42, image: '🧼', rating: 4.5 },
      { id: 4, name: 'L\'Oreal Paris Hair Serum', price: 599, coins: 72, image: '💆', rating: 4.3 },
      { id: 5, name: 'The Face Shop Sheet Masks (Pack of 5)', price: 495, coins: 59, image: '😌', rating: 4.7 },
      { id: 6, name: 'Nykaa Matte Lipstick - Nude Collection', price: 399, coins: 48, image: '💋', rating: 4.5 }
    ],
    stats: {
      totalProducts: '50,000+',
      coinsEarned: '₹12-40',
      avgDelivery: '2-4 days',
      repeatRate: '78%'
    }
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Brand Header */}
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={() => navigate('/mall')}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
        </button>

        {/* Banner */}
        <div className="h-32 bg-gradient-to-br from-pink-500 to-purple-600"></div>

        {/* Brand Info Card */}
        <div className="px-4 -mt-12">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-800 shadow-xl">
            {/* Logo & Name */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-4xl shadow-lg">
                {brand.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-1">{brand.name}</h1>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">{brand.category}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {brand.badges.map((badge, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 hover:bg-rez-gray-200 dark:hover:bg-dark-600 transition-colors">
                  <Heart className="w-5 h-5 text-rez-navy dark:text-white" />
                </button>
                <button className="p-2 rounded-full bg-rez-gray-100 dark:bg-dark-700 hover:bg-rez-gray-200 dark:hover:bg-dark-600 transition-colors">
                  <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
                </button>
              </div>
            </div>

            {/* Rating & ReZ Coins */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-rez-gray-50 dark:bg-dark-700">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-semibold text-rez-navy dark:text-white">{brand.rating}</span>
                <span className="text-sm text-rez-gray-600 dark:text-gray-400">({brand.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{brand.baseCoins}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              <div className="text-center">
                <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.totalProducts}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{brand.stats.coinsEarned}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Per ₹100</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.avgDelivery}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.repeatRate}</div>
                <div className="text-xs text-rez-gray-600 dark:text-gray-400">Repeat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Story */}
      <div className="px-4 mt-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-bold text-rez-navy dark:text-white">Why {brand.name} on ReZ Mall</h3>
          </div>
          <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {brand.story}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {brand.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-rez-gray-700 dark:text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Offers */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white">🎁 Active Offers</h3>
          <button className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">View All</button>
        </div>
        <div className="space-y-3">
          {brand.offers.map((offer) => (
            <div
              key={offer.id}
              className={`p-4 rounded-2xl ${
                offer.featured
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                  : 'bg-white dark:bg-dark-800'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className={`font-bold mb-1 ${offer.featured ? 'text-white' : 'text-rez-navy dark:text-white'}`}>
                    {offer.title}
                  </h4>
                  <p className={`text-sm mb-2 ${offer.featured ? 'text-white/90' : 'text-rez-gray-600 dark:text-gray-400'}`}>
                    {offer.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className={offer.featured ? 'text-white/80' : 'text-rez-gray-500 dark:text-gray-500'}>
                      Valid till {offer.validTill}
                    </span>
                    <span className={offer.featured ? 'text-white/80' : 'text-rez-gray-500 dark:text-gray-500'}>
                      • {offer.terms}
                    </span>
                  </div>
                </div>
                {offer.featured && (
                  <Award className="w-6 h-6 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-6">
        <div className="flex gap-2 p-1 rounded-2xl bg-white dark:bg-dark-800">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'products'
                ? 'bg-emerald-500 text-white'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('bestsellers')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'bestsellers'
                ? 'bg-emerald-500 text-white'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Bestsellers
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'reviews'
                ? 'bg-emerald-500 text-white'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {activeTab === 'products' && (
        <div className="px-4 mt-6 mb-6">
          <div className="grid grid-cols-2 gap-3">
            {brand.products.map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
              >
                {/* Product Image */}
                <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center text-5xl mb-3">
                  {product.image}
                </div>

                {/* Product Info */}
                <h4 className="text-sm font-medium text-rez-navy dark:text-white mb-2 line-clamp-2">
                  {product.name}
                </h4>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs text-rez-gray-600 dark:text-gray-400">{product.rating}</span>
                </div>

                {/* Price & Coins */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-rez-navy dark:text-white">₹{product.price}</span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/10">
                    <span className="text-emerald-400">🪙</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">+{product.coins}</span>
                  </div>
                </div>

                {/* Shop Button */}
                <button className="w-full py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white text-sm font-medium transition-colors">
                  Shop via ReZ
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          <button className="w-full mt-4 py-3 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 text-rez-navy dark:text-white font-medium hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors">
            Load More Products
          </button>
        </div>
      )}

      {/* Bestsellers Tab */}
      {activeTab === 'bestsellers' && (
        <div className="px-4 mt-6 mb-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <TrendingUp className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
            <p className="text-rez-gray-600 dark:text-gray-400">Bestsellers coming soon...</p>
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="px-4 mt-6 mb-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <Star className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <p className="text-rez-gray-600 dark:text-gray-400">Reviews coming soon...</p>
          </div>
        </div>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 pt-2 bg-gradient-to-t from-rez-gray-50 dark:from-dark-900 via-rez-gray-50 dark:via-dark-900 z-40">
        <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          Shop {brand.name} & Earn ReZ Coins
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default MallBrandDetail;
