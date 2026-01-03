import React, { useState } from 'react';
import {
  ArrowLeft, Lock, Truck, Package, Building2, TrendingUp, AlertTriangle,
  CheckCircle, Clock, MapPin, Shield, Zap, DollarSign, Users, ChevronRight,
  BarChart3, Target, Globe, Boxes
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCitySupplyLock = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('bangalore');
  const [activeTab, setActiveTab] = useState('overview');

  const cities = [
    { id: 'bangalore', name: 'Bangalore', locked: 85, distributors: 45, inventory: '₹12Cr' },
    { id: 'mumbai', name: 'Mumbai', locked: 72, distributors: 38, inventory: '₹18Cr' },
    { id: 'delhi', name: 'Delhi NCR', locked: 68, distributors: 52, inventory: '₹15Cr' },
    { id: 'chennai', name: 'Chennai', locked: 45, distributors: 28, inventory: '₹8Cr' },
    { id: 'hyderabad', name: 'Hyderabad', locked: 62, distributors: 32, inventory: '₹9Cr' }
  ];

  const supplyMetrics = {
    totalDistributors: 195,
    exclusiveContracts: 124,
    inventoryValue: '₹62Cr',
    stockCoverage: '18 days',
    preFinanced: '₹28Cr',
    competitorAccess: 'Blocked 72%'
  };

  const distributors = [
    {
      id: 1,
      name: 'Metro Cash & Carry',
      type: 'FMCG Wholesale',
      status: 'exclusive',
      contract: '3 years',
      volume: '₹4.2Cr/month',
      categories: ['Grocery', 'FMCG', 'Beverages'],
      preFinancing: '₹80L',
      coverage: '45% of city FMCG'
    },
    {
      id: 2,
      name: 'Fresh Farm Direct',
      type: 'Produce',
      status: 'exclusive',
      contract: '2 years',
      volume: '₹1.8Cr/month',
      categories: ['Vegetables', 'Fruits', 'Dairy'],
      preFinancing: '₹40L',
      coverage: '28% of city produce'
    },
    {
      id: 3,
      name: 'Electronics Hub',
      type: 'Electronics',
      status: 'preferred',
      contract: '1 year',
      volume: '₹6.5Cr/month',
      categories: ['Mobile', 'Laptops', 'Accessories'],
      preFinancing: '₹1.2Cr',
      coverage: '35% of city electronics'
    },
    {
      id: 4,
      name: 'Fashion Forward',
      type: 'Apparel',
      status: 'negotiating',
      contract: 'Pending',
      volume: '₹2.1Cr/month',
      categories: ['Men', 'Women', 'Kids'],
      preFinancing: 'Proposed ₹60L',
      coverage: '22% of city fashion'
    }
  ];

  const inventoryControl = [
    {
      category: 'Grocery & FMCG',
      rezControl: 68,
      stockDays: 21,
      preFinanced: '₹8Cr',
      exclusiveWindow: '48 hours'
    },
    {
      category: 'Electronics',
      rezControl: 45,
      stockDays: 14,
      preFinanced: '₹12Cr',
      exclusiveWindow: '24 hours'
    },
    {
      category: 'Fashion',
      rezControl: 35,
      stockDays: 30,
      preFinanced: '₹4Cr',
      exclusiveWindow: '72 hours'
    },
    {
      category: 'Fresh Produce',
      rezControl: 82,
      stockDays: 3,
      preFinanced: '₹2Cr',
      exclusiveWindow: 'Same day'
    }
  ];

  const competitorBlocking = [
    {
      competitor: 'Swiggy Instamart',
      blockedCategories: ['Fresh Produce', 'Dairy'],
      blockMethod: 'Exclusive distributor contracts',
      effectiveness: 85
    },
    {
      competitor: 'Zepto',
      blockedCategories: ['Grocery', 'FMCG'],
      blockMethod: 'Pre-financing + volume commitments',
      effectiveness: 72
    },
    {
      competitor: 'BigBasket',
      blockedCategories: ['Organic', 'Premium FMCG'],
      blockMethod: 'Brand exclusivity deals',
      effectiveness: 68
    },
    {
      competitor: 'Amazon Fresh',
      blockedCategories: ['Local brands'],
      blockMethod: 'Regional exclusivity',
      effectiveness: 55
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'exclusive': return 'bg-green-500';
      case 'preferred': return 'bg-blue-500';
      case 'negotiating': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Lock size={24} className="mr-2" />
                City Supply Lock Engine
              </h1>
              <p className="text-red-200 text-sm">Control supply chains, starve competitors</p>
            </div>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Supply Dominance: 68%
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{supplyMetrics.exclusiveContracts}</p>
            <p className="text-xs text-red-200">Exclusive Contracts</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{supplyMetrics.preFinanced}</p>
            <p className="text-xs text-red-200">Pre-Financed</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-300">72%</p>
            <p className="text-xs text-red-200">Competitors Blocked</p>
          </div>
        </div>
      </div>

      {/* City Selector */}
      <div className="p-4 flex overflow-x-auto space-x-2">
        {cities.map(city => (
          <button
            key={city.id}
            onClick={() => setSelectedCity(city.id)}
            className={`flex-shrink-0 px-4 py-3 rounded-xl ${
              selectedCity === city.id
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300'
            }`}
          >
            <p className="font-medium">{city.name}</p>
            <p className="text-xs opacity-70">{city.locked}% locked</p>
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'distributors', label: 'Distributors' },
          { id: 'inventory', label: 'Inventory' },
          { id: 'blocking', label: 'Competitor Block' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-red-400 border-b-2 border-red-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Supply Lock Score */}
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-4 border border-red-500/30">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <Shield size={20} className="mr-2 text-red-400" />
                City Supply Lock Score
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Bangalore</span>
                <span className="text-red-400 font-bold text-2xl">85%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full">
                <div className="h-full w-[85%] bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Competitors can only access 15% of city supply at competitive prices
              </p>
            </div>

            {/* Control Breakdown */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-xl p-4">
                <Truck size={24} className="text-blue-400 mb-2" />
                <p className="text-white font-bold text-xl">{supplyMetrics.totalDistributors}</p>
                <p className="text-gray-400 text-sm">Total Distributors</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <Package size={24} className="text-green-400 mb-2" />
                <p className="text-white font-bold text-xl">{supplyMetrics.inventoryValue}</p>
                <p className="text-gray-400 text-sm">Inventory Value</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <Clock size={24} className="text-yellow-400 mb-2" />
                <p className="text-white font-bold text-xl">{supplyMetrics.stockCoverage}</p>
                <p className="text-gray-400 text-sm">Stock Coverage</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <DollarSign size={24} className="text-purple-400 mb-2" />
                <p className="text-white font-bold text-xl">{supplyMetrics.preFinanced}</p>
                <p className="text-gray-400 text-sm">Pre-Financed Stock</p>
              </div>
            </div>

            {/* Strategic Actions */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">Strategic Actions</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between bg-red-600 text-white p-3 rounded-lg">
                  <span>Activate Emergency Supply Lock</span>
                  <Zap size={20} />
                </button>
                <button className="w-full flex items-center justify-between bg-gray-700 text-white p-3 rounded-lg">
                  <span>Pre-finance New Category</span>
                  <ChevronRight size={20} />
                </button>
                <button className="w-full flex items-center justify-between bg-gray-700 text-white p-3 rounded-lg">
                  <span>Negotiate Exclusive Contract</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'distributors' && (
          <div className="space-y-3">
            {distributors.map(dist => (
              <div key={dist.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold">{dist.name}</h4>
                    <p className="text-gray-400 text-sm">{dist.type}</p>
                  </div>
                  <span className={`${getStatusColor(dist.status)} text-white text-xs px-2 py-1 rounded-full capitalize`}>
                    {dist.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Contract</p>
                    <p className="text-white">{dist.contract}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Volume</p>
                    <p className="text-green-400">{dist.volume}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Pre-Financing</p>
                    <p className="text-purple-400">{dist.preFinancing}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Market Coverage</p>
                    <p className="text-blue-400">{dist.coverage}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {dist.categories.map((cat, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="space-y-3">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-purple-400 font-bold mb-1">Inventory Pre-Financing</h3>
              <p className="text-gray-300 text-sm">
                Pre-finance stock to get exclusive access windows before competitors
              </p>
            </div>

            {inventoryControl.map((inv, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-bold">{inv.category}</h4>
                  <span className="text-green-400 font-bold">{inv.rezControl}% Control</span>
                </div>

                <div className="h-2 bg-gray-700 rounded-full mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${inv.rezControl}%` }}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Stock Days</p>
                    <p className="text-white font-medium">{inv.stockDays}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Pre-Financed</p>
                    <p className="text-purple-400 font-medium">{inv.preFinanced}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Exclusive Window</p>
                    <p className="text-blue-400 font-medium">{inv.exclusiveWindow}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'blocking' && (
          <div className="space-y-3">
            <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-red-400 font-bold mb-1 flex items-center">
                <AlertTriangle size={18} className="mr-2" />
                Competitor Starvation Status
              </h3>
              <p className="text-gray-300 text-sm">
                Block competitors from accessing quality supply at competitive prices
              </p>
            </div>

            {competitorBlocking.map((comp, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-bold">{comp.competitor}</h4>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    comp.effectiveness >= 80 ? 'bg-green-500/20 text-green-400' :
                    comp.effectiveness >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {comp.effectiveness}% Blocked
                  </span>
                </div>

                <div className="h-2 bg-gray-700 rounded-full mb-3">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${comp.effectiveness}%` }}
                  />
                </div>

                <div className="mb-2">
                  <p className="text-gray-400 text-xs mb-1">Blocked Categories:</p>
                  <div className="flex flex-wrap gap-1">
                    {comp.blockedCategories.map((cat, catIdx) => (
                      <span key={catIdx} className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-400 text-sm">
                  <span className="text-gray-500">Method:</span> {comp.blockMethod}
                </p>
              </div>
            ))}

            <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold mt-4">
              Intensify Supply Lock
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCitySupplyLock;
