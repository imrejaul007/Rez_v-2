import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Scale } from 'lucide-react';

function GroceryCompare() {
  const navigate = useNavigate();
  const comparisons = [
    { product: 'Milk 1L', stores: [
      { name: 'FreshMart', price: 60, distance: 0.5 },
      { name: 'Organic Store', price: 75, distance: 1.2 },
      { name: 'Daily Needs', price: 58, distance: 0.8 }
    ]}
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Scale className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Price Comparison</h1></div><p className="text-xs text-white/80">Best prices near you</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        {comparisons.map((c, i) => (
          <div key={i} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
            <h3 className="font-bold text-rez-navy dark:text-white mb-3">{c.product}</h3>
            <div className="space-y-2">
              {c.stores.map((s, j) => (
                <div key={j} className={`p-3 rounded-xl ${j === 0 ? 'bg-emerald-500/10 border-2 border-emerald-500' : 'bg-rez-gray-50 dark:bg-dark-700'}`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-rez-navy dark:text-white">{s.name}</p>
                      <p className="text-xs text-rez-gray-600 dark:text-gray-400">{s.distance} km</p>
                    </div>
                    <p className="text-xl font-bold text-rez-navy dark:text-white">₹{s.price}</p>
                  </div>
                  {j === 0 && <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">Best Price!</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroceryCompare;
