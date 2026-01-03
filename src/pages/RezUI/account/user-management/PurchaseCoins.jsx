import React, { useState } from 'react';
import { ShoppingBag, CreditCard } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function PurchaseCoins() {
  const packages = [
    { coins: 500, price: 99, discount: 0 },
    { coins: 1500, price: 249, discount: 10 },
    { coins: 5000, price: 799, discount: 20 },
  ];

  const [selected, setSelected] = useState(null);

  const handlePurchase = async () => {
    // Backend API: POST /api/coins/purchase
    // { packageId: string, paymentMethod: string }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Buy Coins</h1>
        <p className="text-gray-600 mb-6">Get more coins for better rewards</p>

        <div className="space-y-3">
          {packages.map((pkg, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full p-4 rounded-lg border-2 transition ${selected === i ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-xl font-bold text-green-600">{pkg.coins} Coins</p>
                  <p className="text-sm text-gray-600">Rs. {pkg.price}</p>
                </div>
                {pkg.discount > 0 && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                    Save {pkg.discount}%
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handlePurchase}
          disabled={selected === null}
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <CreditCard size={20} /> Proceed to Payment
        </button>
      </div>
      <BottomNav />
    </div>
  );
}