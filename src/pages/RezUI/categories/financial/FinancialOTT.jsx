import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Star } from 'lucide-react';

function FinancialOTT() {
  const navigate = useNavigate();
  const platforms = [
    { id: 1, name: 'Netflix', price: 649, discount: 10, image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400', plans: ['Mobile', 'Basic', 'Standard', 'Premium'] },
    { id: 2, name: 'Amazon Prime', price: 299, discount: 0, image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400', plans: ['Monthly', 'Yearly'] },
    { id: 3, name: 'Disney+ Hotstar', price: 499, discount: 15, image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400', plans: ['Mobile', 'Super', 'Premium'] }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Tv className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">OTT Subscriptions</h1></div><p className="text-xs text-white/80">Recharge with offers</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {platforms.map(platform => (
          <div key={platform.id} onClick={() => navigate(`/financial/ott/${platform.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700 hover:border-pink-500 transition-all cursor-pointer">
            <div className="relative h-32">
              <img src={platform.image} alt={platform.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {platform.discount > 0 && <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-pink-500 text-white text-xs font-bold">{platform.discount}% OFF</div>}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-rez-navy dark:text-white mb-2">{platform.name}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {platform.plans.map((plan, i) => (
                  <span key={i} className="px-2 py-1 rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-bold">{plan}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div><span className="text-xs text-rez-gray-600 dark:text-gray-400">Starting</span><p className="text-lg font-bold text-pink-600 dark:text-pink-400">₹{platform.price}/mo</p></div>
                <button className="px-4 py-2 rounded-lg bg-pink-500 text-white font-bold text-sm">Recharge</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialOTT;
