import React from 'react';
import { Layers, Crown } from 'lucide-react';

export default function MerchantLoyaltyTiers() {
  const [tiers] = React.useState([
    { name: 'Silver', minPoints: 0, benefits: ['5% discount', '10% off birthday'] },
    { name: 'Gold', minPoints: 1000, benefits: ['10% discount', '15% off birthday', 'Free item'] },
    { name: 'Platinum', minPoints: 5000, benefits: ['20% discount', '25% off birthday', 'VIP access'] },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Crown size={28} /> Loyalty Tiers
      </h1>

      <div className="space-y-3">
        {tiers.map((tier, i) => (
          <div key={i} className="bg-white rounded-lg p-4 shadow">
            <p className="font-bold text-lg text-purple-600">{tier.name}</p>
            <p className="text-sm text-gray-600 mt-1">Min {tier.minPoints} points</p>
            <div className="mt-3 space-y-1">
              {tier.benefits.map((benefit, j) => (
                <p key={j} className="text-sm text-gray-700">✓ {benefit}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}