import { useState } from 'react';
import { Crown, Star, Users, TrendingUp, Plus } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantExclusivePrograms() {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: 'VIP Gold Members',
      tier: 'gold',
      discount: 20,
      members: 145,
      revenue: 85600,
      status: 'active'
    },
    {
      id: 2,
      name: 'Silver Elite',
      tier: 'silver',
      discount: 15,
      members: 289,
      revenue: 124300,
      status: 'active'
    },
    {
      id: 3,
      name: 'Student Special',
      tier: 'student',
      discount: 10,
      members: 456,
      revenue: 98200,
      status: 'active'
    }
  ]);

  const [stats] = useState({
    totalPrograms: 3,
    totalMembers: 890,
    avgDiscount: 15,
    totalRevenue: 308100
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Crown className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Exclusive Programs</h1>
                <p className="text-purple-100 mt-1">Manage your exclusive member programs</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold">
              <Plus className="w-5 h-5" />
              Create Program
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
              <div className="bg-purple-100 p-3 rounded-lg">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Programs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPrograms}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalMembers}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Discount</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgDiscount}%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Your Exclusive Programs</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {programs.map((program) => (
              <div key={program.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Crown className={`w-6 h-6 ${
                        program.tier === 'gold' ? 'text-yellow-500' :
                        program.tier === 'silver' ? 'text-gray-400' :
                        'text-blue-500'
                      }`} />
                      <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium uppercase">
                        {program.tier}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-gray-500">Discount</p>
                        <p className="text-lg font-bold text-purple-600">{program.discount}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Members</p>
                        <p className="text-lg font-bold text-blue-600">{program.members}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-lg font-bold text-green-600">₹{program.revenue.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {program.status}
                    </span>
                    <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 font-medium">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Star className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">About Exclusive Programs</h3>
              <p className="text-sm text-gray-700">
                Create special programs for VIP customers, students, corporate employees, or any custom segment.
                Offer exclusive discounts and benefits to build loyalty and increase repeat purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
