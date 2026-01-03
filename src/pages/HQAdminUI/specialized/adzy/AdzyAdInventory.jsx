import React, { useState } from 'react';
import {
  Tv, Smartphone, MapPin, Store, Plus, Search, Filter, Edit2, Trash2,
  Eye, ToggleLeft, ToggleRight, ChevronRight, Image, Video, QrCode,
  Monitor, Wifi, WifiOff, Clock, DollarSign, BarChart2, Settings,
  CheckCircle, AlertCircle, Calendar, Upload, Download, RefreshCw
} from 'lucide-react';

const AdzyAdInventory = () => {
  const [activeTab, setActiveTab] = useState('digital');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Digital ad placements
  const digitalPlacements = [
    {
      id: 1,
      name: 'Home Feed Banner',
      type: 'banner',
      app: 'ReZ',
      position: 'Top of feed',
      size: '1080x400',
      impressions: 4567000,
      cpm: 45,
      status: 'active',
      utilization: 95
    },
    {
      id: 2,
      name: 'Explore Page Carousel',
      type: 'carousel',
      app: 'ReZ',
      position: 'Below categories',
      size: '1080x1080',
      impressions: 2345000,
      cpm: 35,
      status: 'active',
      utilization: 88
    },
    {
      id: 3,
      name: 'Deal Store Spotlight',
      type: 'featured',
      app: 'CoinHunt',
      position: 'Featured section',
      size: '1200x600',
      impressions: 1890000,
      cpm: 55,
      status: 'active',
      utilization: 92
    },
    {
      id: 4,
      name: 'Post-Transaction Offer',
      type: 'interstitial',
      app: 'All Apps',
      position: 'After checkout',
      size: 'Fullscreen',
      impressions: 890000,
      cpm: 85,
      status: 'active',
      utilization: 78
    },
    {
      id: 5,
      name: 'Search Results Promoted',
      type: 'native',
      app: 'ReZ',
      position: 'In search results',
      size: 'Native card',
      impressions: 3456000,
      cpm: 40,
      status: 'active',
      utilization: 82
    },
    {
      id: 6,
      name: 'Stories Ad Slot',
      type: 'story',
      app: 'BuzzLoop',
      position: 'Between stories',
      size: '1080x1920',
      impressions: 1234000,
      cpm: 65,
      status: 'paused',
      utilization: 0
    }
  ];

  // Physical ad locations
  const physicalLocations = [
    {
      id: 1,
      name: 'Phoenix Mall - Main Atrium',
      type: 'LED Screen',
      city: 'Mumbai',
      size: '10x6 ft',
      dailyFootfall: 45000,
      cpm: 120,
      status: 'online',
      slots: { total: 48, booked: 42 }
    },
    {
      id: 2,
      name: 'Select Citywalk - Food Court',
      type: 'Digital Display',
      city: 'Delhi',
      size: '8x4 ft',
      dailyFootfall: 32000,
      cpm: 95,
      status: 'online',
      slots: { total: 48, booked: 38 }
    },
    {
      id: 3,
      name: 'Cafe Coffee Day - Brigade Road',
      type: 'Table QR Stand',
      city: 'Bangalore',
      size: 'A5 Stand',
      dailyFootfall: 2500,
      cpm: 25,
      status: 'online',
      slots: { total: 24, booked: 18 }
    },
    {
      id: 4,
      name: 'Gold\'s Gym - Andheri',
      type: 'TV Screen',
      city: 'Mumbai',
      size: '55 inch',
      dailyFootfall: 800,
      cpm: 45,
      status: 'online',
      slots: { total: 36, booked: 28 }
    },
    {
      id: 5,
      name: 'Metro Station - Rajiv Chowk',
      type: 'Digital Billboard',
      city: 'Delhi',
      size: '20x10 ft',
      dailyFootfall: 250000,
      cpm: 200,
      status: 'maintenance',
      slots: { total: 48, booked: 0 }
    },
    {
      id: 6,
      name: 'Reliance Fresh - Multiple',
      type: 'Checkout Screen',
      city: 'Pan India',
      size: '15 inch',
      dailyFootfall: 15000,
      cpm: 35,
      status: 'online',
      slots: { total: 96, booked: 67 }
    }
  ];

  // Partner store screens
  const partnerStores = [
    {
      id: 1,
      partner: 'Chai Point',
      screens: 245,
      cities: 12,
      avgFootfall: 1200,
      status: 'active',
      revenueShare: 30
    },
    {
      id: 2,
      partner: 'Cult.fit',
      screens: 89,
      cities: 8,
      avgFootfall: 450,
      status: 'active',
      revenueShare: 25
    },
    {
      id: 3,
      partner: 'Wow! Momo',
      screens: 156,
      cities: 15,
      avgFootfall: 800,
      status: 'active',
      revenueShare: 35
    },
    {
      id: 4,
      partner: 'Apollo Pharmacy',
      screens: 423,
      cities: 45,
      avgFootfall: 350,
      status: 'active',
      revenueShare: 20
    }
  ];

  const tabs = [
    { id: 'digital', label: 'Digital Placements', icon: Smartphone },
    { id: 'physical', label: 'Physical Screens', icon: Tv },
    { id: 'partners', label: 'Partner Stores', icon: Store }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Ad Inventory</h1>
            <p className="text-purple-100 text-sm">Manage digital & physical ad placements</p>
          </div>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-xl font-medium flex items-center gap-2">
            <Plus size={18} />
            Add Placement
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">2,456</p>
            <p className="text-xs text-purple-100">Total Screens</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">78%</p>
            <p className="text-xs text-purple-100">Utilization</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">₹45L</p>
            <p className="text-xs text-purple-100">Monthly Revenue</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center gap-2 border-b-2 transition-colors
                ${activeTab === tab.id
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500'}`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Search & Filter */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search placements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-200 rounded-xl px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        {/* Digital Placements Tab */}
        {activeTab === 'digital' && (
          <div className="space-y-3">
            {digitalPlacements.map(placement => (
              <div key={placement.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center
                      ${placement.type === 'banner' ? 'bg-blue-100' :
                        placement.type === 'carousel' ? 'bg-purple-100' :
                        placement.type === 'featured' ? 'bg-amber-100' :
                        placement.type === 'interstitial' ? 'bg-red-100' :
                        placement.type === 'native' ? 'bg-green-100' : 'bg-pink-100'}`}>
                      {placement.type === 'banner' && <Image size={24} className="text-blue-600" />}
                      {placement.type === 'carousel' && <Image size={24} className="text-purple-600" />}
                      {placement.type === 'featured' && <Monitor size={24} className="text-amber-600" />}
                      {placement.type === 'interstitial' && <Smartphone size={24} className="text-red-600" />}
                      {placement.type === 'native' && <Image size={24} className="text-green-600" />}
                      {placement.type === 'story' && <Video size={24} className="text-pink-600" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{placement.name}</h3>
                      <p className="text-xs text-gray-500">{placement.app} • {placement.position}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${placement.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {placement.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center bg-gray-50 rounded-xl p-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Size</p>
                    <p className="text-sm font-medium">{placement.size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Impressions</p>
                    <p className="text-sm font-medium">{formatNumber(placement.impressions)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CPM</p>
                    <p className="text-sm font-medium">₹{placement.cpm}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Utilization</p>
                    <p className="text-sm font-medium">{placement.utilization}%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${placement.utilization}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Eye size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Settings size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Physical Screens Tab */}
        {activeTab === 'physical' && (
          <div className="space-y-3">
            {physicalLocations.map(location => (
              <div key={location.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Tv size={24} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{location.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin size={12} />
                        {location.city} • {location.type}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1
                    ${location.status === 'online' ? 'bg-green-100 text-green-700' :
                      location.status === 'maintenance' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    {location.status === 'online' ? <Wifi size={10} /> : <WifiOff size={10} />}
                    {location.status}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center bg-gray-50 rounded-xl p-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Size</p>
                    <p className="text-sm font-medium">{location.size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Footfall/Day</p>
                    <p className="text-sm font-medium">{formatNumber(location.dailyFootfall)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CPM</p>
                    <p className="text-sm font-medium">₹{location.cpm}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Slots</p>
                    <p className="text-sm font-medium">{location.slots.booked}/{location.slots.total}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${(location.slots.booked / location.slots.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Calendar size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit2 size={16} className="text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Settings size={16} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Location */}
            <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-purple-400 hover:bg-purple-50 transition-colors">
              <Plus size={32} className="mx-auto mb-2 text-gray-400" />
              <p className="font-medium text-gray-600">Add Physical Location</p>
              <p className="text-xs text-gray-400">Screens, displays, billboards</p>
            </button>
          </div>
        )}

        {/* Partner Stores Tab */}
        {activeTab === 'partners' && (
          <div className="space-y-4">
            {/* Partner Summary */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
              <h3 className="font-semibold mb-3">Partner Network</h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-bold">913</p>
                  <p className="text-xs text-emerald-100">Total Screens</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-xs text-emerald-100">Cities</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">28%</p>
                  <p className="text-xs text-emerald-100">Avg Rev Share</p>
                </div>
              </div>
            </div>

            {/* Partner List */}
            <div className="space-y-3">
              {partnerStores.map(partner => (
                <div key={partner.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
                        <Store size={24} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{partner.partner}</h3>
                        <p className="text-xs text-gray-500">{partner.cities} cities • {partner.revenueShare}% rev share</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${partner.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {partner.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center bg-gray-50 rounded-xl p-3">
                    <div>
                      <p className="text-xs text-gray-500">Screens</p>
                      <p className="text-lg font-semibold text-purple-600">{partner.screens}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Avg Footfall</p>
                      <p className="text-lg font-semibold text-gray-800">{formatNumber(partner.avgFootfall)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Est. Monthly</p>
                      <p className="text-lg font-semibold text-green-600">₹{(partner.screens * partner.avgFootfall * 0.05).toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 mt-3">
                    <button className="px-3 py-1 text-sm text-purple-600 hover:bg-purple-50 rounded-lg">
                      View Screens
                    </button>
                    <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded-lg">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Partner */}
            <button className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-purple-400 hover:bg-purple-50 transition-colors">
              <Plus size={32} className="mx-auto mb-2 text-gray-400" />
              <p className="font-medium text-gray-600">Add Partner Store Network</p>
              <p className="text-xs text-gray-400">Integrate retail partner screens</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdzyAdInventory;
