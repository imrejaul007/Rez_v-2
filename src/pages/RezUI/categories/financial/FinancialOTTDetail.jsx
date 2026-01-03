import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Tv, Check } from 'lucide-react';

function FinancialOTTDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedPlan, setSelectedPlan] = useState(0);

  const platform = {
    id: 1,
    name: 'Netflix',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400',
    plans: [
      { name: 'Mobile', price: 149, features: ['480p', '1 Device', 'Phone & Tablet'] },
      { name: 'Basic', price: 199, features: ['720p', '1 Device', 'Any Device'] },
      { name: 'Standard', price: 499, features: ['1080p', '2 Devices', 'HD Quality'] },
      { name: 'Premium', price: 649, features: ['4K+HDR', '4 Devices', 'Ultra HD'] }
    ]
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-24">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div className="flex items-center gap-2"><Tv className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">{platform.name}</h1></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-4">
        <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
          <img src={platform.image} alt={platform.name} className="w-full h-40 object-cover" />
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Select Plan</h3>
          <div className="space-y-3">
            {platform.plans.map((plan, i) => (
              <div key={i} onClick={() => setSelectedPlan(i)} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPlan === i ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20' : 'border-rez-gray-200 dark:border-dark-700'}`}>
                <div className="flex items-start justify-between mb-2">
                  <div><h4 className="font-bold text-rez-navy dark:text-white">{plan.name}</h4><p className="text-2xl font-bold text-pink-600 dark:text-pink-400">₹{plan.price}/mo</p></div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === i ? 'border-pink-500 bg-pink-500' : 'border-rez-gray-300 dark:border-dark-600'}`}>
                    {selectedPlan === i && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <div className="space-y-1">
                  {plan.features.map((feature, j) => (
                    <p key={j} className="text-sm text-rez-gray-600 dark:text-gray-400">✓ {feature}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-800 border-t border-rez-gray-200 dark:border-dark-700">
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default FinancialOTTDetail;
