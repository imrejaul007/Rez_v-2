import React from 'react';
import { Package, Plus, TrendingUp } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantProductBundling = () => {
  const bundles = [
    { id: 1, name: 'Tech Starter Pack', products: 3, price: 25000, discount: 15, sales: 45 },
    { id: 2, name: 'Home Office Bundle', products: 5, price: 45000, discount: 20, sales: 28 },
    { id: 3, name: 'Gaming Essentials', products: 4, price: 65000, discount: 18, sales: 67 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />
      <div className="lg:ml-64 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Package className="w-8 h-8 text-green-600" />
          Product Bundling
        </h1>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Bundles</h2>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Bundle
            </button>
          </div>
          <div className="space-y-4">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{bundle.name}</h3>
                  <p className="text-sm text-gray-600">{bundle.products} products • {bundle.discount}% off</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">₹{bundle.price.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {bundle.sales} sold
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantProductBundling;
