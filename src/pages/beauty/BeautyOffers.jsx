import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock, TrendingUp } from 'lucide-react';

function BeautyOffers() {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: 'New User Special',
      description: 'Get 50% off on your first beauty service',
      code: 'BEAUTY50',
      discount: 50,
      validUntil: '2024-01-31',
      maxDiscount: 500,
      minPurchase: 1000,
      trending: true
    },
    {
      id: 2,
      title: 'Weekend Glow',
      description: 'Extra 30% off on all facial services',
      code: 'WEEKEND30',
      discount: 30,
      validUntil: '2024-01-21',
      maxDiscount: 300,
      minPurchase: 500,
      trending: false
    },
    {
      id: 3,
      title: 'Spa Luxury',
      description: 'Buy 1 Get 1 on full body massage',
      code: 'SPA2X',
      discount: 'BOGO',
      validUntil: '2024-01-25',
      maxDiscount: 2999,
      minPurchase: 2999,
      trending: true
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Beauty Offers</h1>
            </div>
            <p className="text-xs text-white/80">Exclusive deals & discounts</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {offers.map(offer => (
          <div key={offer.id} className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-rez-gray-200 dark:border-dark-700 hover:border-emerald-500 transition-all">
            {offer.trending && (
              <div className="flex items-center gap-1 mb-2">
                <TrendingUp className="w-4 h-4 text-pink-500" />
                <span className="text-xs font-bold text-pink-600 dark:text-pink-400">Trending</span>
              </div>
            )}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-lg text-rez-navy dark:text-white mb-1">{offer.title}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{offer.description}</p>
              </div>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 ml-3">
                <p className="text-2xl font-bold text-white">{typeof offer.discount === 'number' ? `${offer.discount}%` : offer.discount}</p>
              </div>
            </div>

            {/* Code */}
            <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-dark-700 border-2 border-dashed border-rez-gray-300 dark:border-dark-600 mb-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Coupon Code</p>
                  <p className="text-lg font-bold text-rez-navy dark:text-white tracking-wider">{offer.code}</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm">
                  COPY
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-1 mb-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-rez-gray-600 dark:text-gray-400">Min. Purchase:</span>
                <span className="font-semibold text-rez-navy dark:text-white">₹{offer.minPurchase}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-rez-gray-600 dark:text-gray-400">Max. Discount:</span>
                <span className="font-semibold text-rez-navy dark:text-white">₹{offer.maxDiscount}</span>
              </div>
            </div>

            {/* Expiry */}
            <div className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
              <Clock className="w-3 h-3" />
              <span>Valid until {new Date(offer.validUntil).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeautyOffers;
