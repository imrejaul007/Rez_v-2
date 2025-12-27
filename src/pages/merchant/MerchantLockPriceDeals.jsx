import { useState } from 'react';
import { Lock, Plus, TrendingUp, Users } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantLockPriceDeals() {
  const [deals, setDeals] = useState([
    {
      id: 1,
      product: 'Margherita Pizza',
      lockPrice: 59,
      finalPrice: 299,
      locked: 45,
      redeemed: 38,
      status: 'active'
    },
    {
      id: 2,
      product: 'Pasta Alfredo',
      lockPrice: 39,
      finalPrice: 199,
      locked: 32,
      redeemed: 25,
      status: 'active'
    }
  ]);

  const [stats] = useState({
    totalDeals: 8,
    activeDeals: 6,
    totalLocked: 234,
    totalRevenue: 125400
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Lock Price Deals</h1>
                <p className="text-amber-100 mt-1">Manage your lock with 10% offers</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-amber-600 rounded-lg hover:bg-gray-100 font-semibold">
              <Plus className="w-5 h-5" />
              Create Deal
            </button>
          </div>
        </div>
      </div>
      <MerchantNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Lock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Deals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDeals}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Deals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeDeals}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Locked</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLocked}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Deals List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Your Lock Price Deals</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {deals.map((deal) => (
              <div key={deal.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{deal.product}</h3>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Lock Price</p>
                        <p className="text-lg font-bold text-amber-600">₹{deal.lockPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Final Price</p>
                        <p className="text-lg font-bold text-gray-900">₹{deal.finalPrice}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Locked</p>
                        <p className="text-lg font-bold text-blue-600">{deal.locked}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Redeemed</p>
                        <p className="text-lg font-bold text-green-600">{deal.redeemed}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {deal.status}
                    </span>
                    <button className="px-4 py-2 text-amber-600 border border-amber-600 rounded-lg hover:bg-amber-50 font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
