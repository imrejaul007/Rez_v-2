import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Info, Copy, Check, Zap, TrendingUp, Clock, AlertCircle, Gift, Percent } from 'lucide-react';
import Header from '../../components/layout/Header';
import ModeSwitcher from '../../components/home/ModeSwitcher';
import BottomNav from '../../components/layout/BottomNav';

const CashStoreBrandDetail = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  // Mock brand data - in real app, fetch based on brandId
  const brand = {
    id: brandId || '1',
    name: 'Amazon',
    logo: '📦',
    description: 'India\'s largest online marketplace. Shop everything from electronics to fashion and earn ReZ Coins on every purchase.',
    category: 'E-commerce',
    baseCoins: '12% ReZ Coins',
    featured: true,
    trending: true,
    affiliateUrl: 'https://amazon.in',
    banner: 'https://via.placeholder.com/800x300',
    howItWorks: [
      'Click "Shop Now" button below',
      'You\'ll be redirected to Amazon website',
      'Shop normally - same prices, same products',
      'Complete your purchase',
      'ReZ Coins will be credited within 24-48 hours'
    ],
    stats: {
      avgCoins: '8-12%',
      trackingTime: '24-48 hrs',
      creditTime: '30-45 days',
      usersPaid: '1.2M+'
    },
    offers: [
      {
        id: 1,
        title: 'Extra 5% ReZ Coins',
        description: 'On electronics & gadgets',
        code: 'REZELEC5',
        validTill: '31 Dec 2025',
        terms: 'Min. purchase ₹5000',
        featured: true
      },
      {
        id: 2,
        title: '500 Bonus ReZ Coins',
        description: 'First purchase via Cash Store',
        code: 'REZFIRST',
        validTill: '31 Dec 2025',
        terms: 'Min. purchase ₹2000',
        featured: false
      },
      {
        id: 3,
        title: 'Double ReZ Coins',
        description: 'On fashion & lifestyle products',
        code: 'REZFASHION',
        validTill: '25 Dec 2025',
        terms: 'Max 2000 bonus coins',
        featured: false
      }
    ],
    coupons: [
      { id: 1, code: 'SAVE100', discount: '₹100 OFF', minOrder: '₹999', expires: '31 Dec' },
      { id: 2, code: 'FASHION20', discount: '20% OFF', minOrder: '₹1499', expires: '30 Dec' },
      { id: 3, code: 'ELECTRO10', discount: '10% OFF', minOrder: '₹2999', expires: '28 Dec' }
    ],
    faq: [
      {
        q: 'When will I get my ReZ Coins?',
        a: 'Your purchase is tracked within 24-48 hours. Once confirmed by Amazon (usually 30-45 days), ReZ Coins are credited to your wallet.'
      },
      {
        q: 'Can I use other coupons with this?',
        a: 'Yes! You can stack Amazon coupons with ReZ Coins. Our cashback works on top of any discounts you get.'
      },
      {
        q: 'What if my order is cancelled or returned?',
        a: 'If you cancel or return your order, the pending ReZ Coins will be automatically reversed.'
      }
    ],
    importantNotes: [
      'Always click "Shop Now" from ReZ Cash Store for tracking',
      'Complete purchase in same browser session',
      'Don\'t use ad blockers during shopping',
      'ReZ Coins = Coins (not cash). Cannot be withdrawn to bank.'
    ]
  };

  const copyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      <Header />
      <ModeSwitcher />

      {/* Brand Header */}
      <div className="relative">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cash-store')}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
        </button>

        {/* Banner */}
        <div className="h-32 bg-gradient-to-br from-orange-500 to-red-600"></div>

        {/* Brand Info Card */}
        <div className="px-4 -mt-12">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-800 shadow-xl">
            {/* Logo & Name */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-4xl shadow-lg">
                {brand.logo}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-rez-navy dark:text-white">{brand.name}</h1>
                  {brand.trending && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10">
                      <TrendingUp className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                      <span className="text-xs font-medium text-orange-600 dark:text-orange-400">Hot</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-2">{brand.category}</p>

                {/* Coins Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20">
                  <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{brand.baseCoins}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-rez-gray-700 dark:text-gray-300 leading-relaxed">
              {brand.description}
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="px-4 mt-6">
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-900 dark:text-amber-300 mb-1">
                Cashback = ReZ Coins (not cash)
              </p>
              <p className="text-xs text-amber-800 dark:text-amber-400">
                All cashback is credited as ReZ Coins to your wallet. Use them for shopping across ReZ - cannot be withdrawn to bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-4 gap-3">
          <div className="p-3 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{brand.stats.avgCoins}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Coins Range</div>
          </div>
          <div className="p-3 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.trackingTime}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Tracking</div>
          </div>
          <div className="p-3 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.creditTime}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Credit Time</div>
          </div>
          <div className="p-3 rounded-2xl bg-white dark:bg-dark-800 text-center">
            <div className="text-lg font-bold text-rez-navy dark:text-white">{brand.stats.usersPaid}</div>
            <div className="text-xs text-rez-gray-600 dark:text-gray-400 mt-1">Users Paid</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 mt-6">
        <div className="p-5 rounded-2xl bg-white dark:bg-dark-800">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-bold text-rez-navy dark:text-white">How It Works</h3>
          </div>
          <div className="space-y-3">
            {brand.howItWorks.map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{idx + 1}</span>
                </div>
                <p className="text-sm text-rez-gray-700 dark:text-gray-300 flex-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Offers */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          Active Offers
        </h3>
        <div className="space-y-3">
          {brand.offers.map((offer) => (
            <div
              key={offer.id}
              className={`p-4 rounded-2xl ${
                offer.featured
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                  : 'bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700'
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

                  {/* Coupon Code */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`px-3 py-1.5 rounded-lg font-mono text-sm font-bold ${
                      offer.featured
                        ? 'bg-white/20 text-white'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {offer.code}
                    </div>
                    <button
                      onClick={() => copyCoupon(offer.code)}
                      className={`p-1.5 rounded-lg ${
                        offer.featured
                          ? 'bg-white/20 text-white'
                          : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-navy dark:text-white'
                      }`}
                    >
                      {copiedCoupon === offer.code ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className={offer.featured ? 'text-white/80' : 'text-rez-gray-500 dark:text-gray-500'}>
                      Valid till {offer.validTill}
                    </span>
                    <span className={offer.featured ? 'text-white/80' : 'text-rez-gray-500 dark:text-gray-500'}>
                      • {offer.terms}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coupons */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4 flex items-center gap-2">
          <Percent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          Available Coupons
        </h3>
        <div className="space-y-2">
          {brand.coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="p-4 rounded-2xl bg-white dark:bg-dark-800 border border-dashed border-rez-gray-300 dark:border-dark-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{coupon.discount}</span>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-500">on {coupon.minOrder}+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 rounded bg-rez-gray-100 dark:bg-dark-700 text-xs font-mono font-bold text-rez-navy dark:text-white">
                      {coupon.code}
                    </code>
                    <span className="text-xs text-rez-gray-500 dark:text-gray-500">Expires {coupon.expires}</span>
                  </div>
                </div>
                <button
                  onClick={() => copyCoupon(coupon.code)}
                  className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors ml-3"
                >
                  {copiedCoupon === coupon.code ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="px-4 mt-6">
        <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-blue-900 dark:text-blue-300">Important Notes</h3>
          </div>
          <ul className="space-y-2">
            {brand.importantNotes.map((note, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-blue-800 dark:text-blue-300">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-4 mt-6 mb-6">
        <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {brand.faq.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-dark-800">
              <h4 className="font-bold text-sm text-rez-navy dark:text-white mb-2">{item.q}</h4>
              <p className="text-sm text-rez-gray-700 dark:text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-4 pt-2 bg-gradient-to-t from-rez-gray-50 dark:from-dark-900 via-rez-gray-50 dark:via-dark-900 z-40">
        <button
          onClick={() => window.open(brand.affiliateUrl, '_blank')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Shop Now & Earn {brand.baseCoins}
        </button>
        <p className="text-center text-xs text-rez-gray-500 dark:text-gray-500 mt-2">
          You'll be redirected to {brand.name} • Shop normally • Coins tracked automatically
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default CashStoreBrandDetail;
