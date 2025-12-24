import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock } from 'lucide-react';

function GroceryOffers() {
  const navigate = useNavigate();
  const offers = [
    { id: 1, title: 'Weekend Special', description: '20% off on all vegetables', code: 'VEGGIE20', validUntil: '2024-01-28', minPurchase: 500 },
    { id: 2, title: 'Dairy Delight', description: '15% off on dairy products', code: 'DAIRY15', validUntil: '2024-01-30', minPurchase: 300 }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Tag className="w-5 h-5 text-amber-400" /><h1 className="text-h3 font-poppins text-white">Grocery Offers</h1></div></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {offers.map(offer => (
          <div key={offer.id} className="p-4 rounded-2xl bg-white dark:bg-dark-800 border-2 border-rez-gray-200 dark:border-dark-700">
            <h3 className="font-bold text-lg text-rez-navy dark:text-white mb-1">{offer.title}</h3>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400 mb-3">{offer.description}</p>
            <div className="p-3 rounded-xl bg-rez-gray-50 dark:bg-dark-700 border-2 border-dashed border-rez-gray-300 dark:border-dark-600 mb-3">
              <div className="flex items-center justify-between">
                <div><p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-1">Coupon Code</p><p className="text-lg font-bold text-rez-navy dark:text-white tracking-wider">{offer.code}</p></div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm">COPY</button>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-rez-gray-600 dark:text-gray-400">Min. Purchase: ₹{offer.minPurchase}</span>
              <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400"><Clock className="w-3 h-3" /><span>Valid till {new Date(offer.validUntil).toLocaleDateString()}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryOffers;
