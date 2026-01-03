import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Gift, Star, CreditCard } from 'lucide-react';

function BeautyGift() {
  const navigate = useNavigate();

  const giftCards = [
    { id: 1, amount: 500, bonus: 50, popular: false },
    { id: 2, amount: 1000, bonus: 150, popular: true },
    { id: 3, amount: 2000, bonus: 400, popular: false },
    { id: 4, amount: 5000, bonus: 1200, popular: false }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-400" />
              <h1 className="text-h3 font-poppins text-white">Beauty Gift Cards</h1>
            </div>
            <p className="text-xs text-white/80">Perfect gift for loved ones</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Hero */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-center text-white">
          <Gift className="w-16 h-16 mx-auto mb-3 opacity-90" />
          <h2 className="text-xl font-bold mb-2">Gift Beauty & Wellness</h2>
          <p className="text-sm opacity-90">
            Let them choose their perfect beauty treatment
          </p>
        </div>

        {/* Gift Cards */}
        <div className="space-y-3">
          {giftCards.map(card => (
            <div key={card.id} className={`p-4 rounded-2xl border-2 transition-all ${card.popular ? 'border-amber-500 bg-gradient-to-br from-amber-500/10 to-orange-500/10' : 'border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800'}`}>
              {card.popular && (
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Most Popular</span>
                </div>
              )}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-2xl font-bold text-rez-navy dark:text-white">₹{card.amount.toLocaleString()}</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                    +₹{card.bonus} Bonus
                  </p>
                </div>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
              </div>
              <button className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold">
                Buy Gift Card
              </button>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="font-bold text-rez-navy dark:text-white mb-2">How it Works</h3>
          <ol className="text-sm text-rez-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
            <li>Choose gift card amount</li>
            <li>Recipient gets bonus value</li>
            <li>Valid at all partner salons</li>
            <li>No expiry, flexible use</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BeautyGift;
