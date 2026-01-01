import React, { useState } from 'react';
import {
  ArrowLeft, MapPin, Lock, Store, Crown, Shield, Users,
  TrendingUp, Target, ChevronRight, Settings, Eye, Star,
  Award, Zap, CheckCircle, AlertTriangle, Globe, Layers,
  Map, Building, DollarSign, BarChart2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminCityLockEngine = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('zones');

  // Zone Exclusivity Configuration
  const [zones, setZones] = useState([
    {
      id: 'Z001',
      name: 'Koramangala 5th Block',
      city: 'Bangalore',
      coordinates: { lat: 12.9352, lng: 77.6245 },
      radius: 500, // meters
      categories: [
        {
          category: 'Coffee Shop',
          exclusiveMerchant: 'Third Wave Coffee',
          merchantId: 'M001',
          lockExpiry: '2025-06-30',
          monthlyFee: 15000,
          performance: { footfall: 2340, gmv: 450000 }
        },
        {
          category: 'Restaurant',
          exclusiveMerchant: 'Truffles',
          merchantId: 'M002',
          lockExpiry: '2025-03-31',
          monthlyFee: 25000,
          performance: { footfall: 4560, gmv: 890000 }
        },
        {
          category: 'Salon',
          exclusiveMerchant: null,
          merchantId: null,
          status: 'available',
          potentialFee: 12000
        },
      ],
      totalMerchants: 45,
      lockedMerchants: 12,
      lockRate: 27,
    },
    {
      id: 'Z002',
      name: 'Indiranagar 100ft Road',
      city: 'Bangalore',
      coordinates: { lat: 12.9784, lng: 77.6408 },
      radius: 600,
      categories: [
        {
          category: 'Pub/Bar',
          exclusiveMerchant: 'Toit',
          merchantId: 'M003',
          lockExpiry: '2025-12-31',
          monthlyFee: 35000,
          performance: { footfall: 8900, gmv: 2100000 }
        },
        {
          category: 'Fine Dining',
          exclusiveMerchant: 'Karavalli',
          merchantId: 'M004',
          lockExpiry: '2025-09-30',
          monthlyFee: 40000,
          performance: { footfall: 1200, gmv: 1800000 }
        },
      ],
      totalMerchants: 78,
      lockedMerchants: 23,
      lockRate: 29,
    },
  ]);

  // Local Merchant Councils
  const [councils, setCouncils] = useState([
    {
      id: 'MC001',
      name: 'Koramangala Merchant Council',
      city: 'Bangalore',
      members: 15,
      topMerchants: ['Truffles', 'Third Wave', 'Onesta', 'Meghana Foods'],
      lastMeeting: '2024-12-20',
      decisionsThisMonth: 8,
      upcomingVotes: [
        { topic: 'Festival Week Pricing Strategy', deadline: '2024-12-30' },
        { topic: 'New Member Onboarding Fee', deadline: '2025-01-05' },
      ],
      rezStake: 40, // ReZ has 40% voting power
      merchantStake: 60,
    },
    {
      id: 'MC002',
      name: 'Indiranagar F&B Council',
      city: 'Bangalore',
      members: 22,
      topMerchants: ['Toit', 'Social', 'Communiti', 'Smally\'s'],
      lastMeeting: '2024-12-22',
      decisionsThisMonth: 12,
      upcomingVotes: [
        { topic: 'Late Night Offer Coordination', deadline: '2024-12-28' },
      ],
      rezStake: 35,
      merchantStake: 65,
    },
  ]);

  // Hyperlocal Pricing
  const [pricingZones, setPricingZones] = useState([
    {
      zoneId: 'Z001',
      zoneName: 'Koramangala 5th Block',
      baseMultiplier: 1.0,
      timeBasedPricing: [
        { time: 'Morning Rush (8-10 AM)', multiplier: 1.2 },
        { time: 'Lunch Peak (12-2 PM)', multiplier: 1.3 },
        { time: 'Evening (5-8 PM)', multiplier: 1.1 },
        { time: 'Night (8 PM+)', multiplier: 0.9 },
      ],
      demandBasedPricing: {
        enabled: true,
        minMultiplier: 0.8,
        maxMultiplier: 1.5,
        currentDemand: 'high',
        currentMultiplier: 1.25,
      },
      weatherPricing: {
        enabled: true,
        rainyDayMultiplier: 1.15,
        extremeHeatMultiplier: 1.1,
      },
      eventPricing: {
        enabled: true,
        nearbyEvents: ['Tech Conference @ Forum'],
        eventMultiplier: 1.4,
      },
    },
  ]);

  // City Capture Stats
  const cityCaptureStats = {
    totalCities: 12,
    dominantCities: 5, // >60% market share
    lockingCities: 4,  // 40-60% share
    emergingCities: 3, // <40% share
    totalZones: 456,
    lockedZones: 178,
    exclusivityRevenue: 8500000,
    avgZoneLockRate: 39,
  };

  // City Market Share
  const cityMarketShare = [
    { city: 'Bangalore', share: 72, status: 'dominant', merchants: 3400, gmv: 45000000 },
    { city: 'Mumbai', share: 58, status: 'locking', merchants: 2800, gmv: 38000000 },
    { city: 'Delhi', share: 45, status: 'locking', merchants: 2100, gmv: 28000000 },
    { city: 'Hyderabad', share: 68, status: 'dominant', merchants: 1800, gmv: 22000000 },
    { city: 'Chennai', share: 52, status: 'locking', merchants: 1500, gmv: 18000000 },
    { city: 'Pune', share: 63, status: 'dominant', merchants: 1200, gmv: 15000000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">City Lock Engine</h1>
              <p className="text-cyan-200 text-sm">Zone exclusivity & local monopoly</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Lock size={16} className="mr-1" />
            <span className="text-sm">{cityCaptureStats.dominantCities} Dominant</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{cityCaptureStats.totalCities}</p>
            <p className="text-xs text-cyan-200">Cities</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{cityCaptureStats.lockedZones}</p>
            <p className="text-xs text-cyan-200">Locked Zones</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{cityCaptureStats.avgZoneLockRate}%</p>
            <p className="text-xs text-cyan-200">Lock Rate</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(cityCaptureStats.exclusivityRevenue / 10000000).toFixed(1)}Cr</p>
            <p className="text-xs text-cyan-200">Lock Revenue</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['zones', 'councils', 'pricing', 'cities'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-cyan-400 border-b-2 border-cyan-400'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Zones Tab */}
        {activeTab === 'zones' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <MapPin size={20} className="text-cyan-400 mr-2" />
                <h3 className="text-white font-semibold">Zone Exclusivity</h3>
              </div>
              <p className="text-gray-400 text-sm">
                One merchant per micro-zone per category - competitors cannot get access
              </p>
            </div>

            {zones.map(zone => (
              <div key={zone.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{zone.name}</h3>
                    <p className="text-gray-400 text-sm">{zone.city} • {zone.radius}m radius</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold">{zone.lockRate}% locked</p>
                    <p className="text-gray-500 text-xs">{zone.lockedMerchants}/{zone.totalMerchants}</p>
                  </div>
                </div>

                {/* Category Locks */}
                <div className="space-y-2">
                  {zone.categories.map((cat, idx) => (
                    <div key={idx} className={`rounded-lg p-3 ${
                      cat.exclusiveMerchant
                        ? 'bg-cyan-900/20 border border-cyan-500/30'
                        : 'bg-gray-700/50 border border-dashed border-gray-600'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {cat.exclusiveMerchant ? (
                            <Lock size={16} className="text-cyan-400 mr-2" />
                          ) : (
                            <div className="w-4 h-4 border border-gray-500 rounded mr-2" />
                          )}
                          <div>
                            <p className="text-white font-medium">{cat.category}</p>
                            {cat.exclusiveMerchant ? (
                              <p className="text-cyan-400 text-sm">{cat.exclusiveMerchant}</p>
                            ) : (
                              <p className="text-gray-500 text-sm">Available for ₹{cat.potentialFee?.toLocaleString()}/mo</p>
                            )}
                          </div>
                        </div>
                        {cat.exclusiveMerchant && (
                          <div className="text-right">
                            <p className="text-white font-medium">₹{cat.monthlyFee?.toLocaleString()}/mo</p>
                            <p className="text-gray-500 text-xs">Expires {cat.lockExpiry}</p>
                          </div>
                        )}
                      </div>
                      {cat.performance && (
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-700/50">
                          <span className="text-gray-400 text-xs">{cat.performance.footfall.toLocaleString()} visits</span>
                          <span className="text-green-400 text-xs">₹{(cat.performance.gmv / 100000).toFixed(1)}L GMV</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button className="w-full bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 py-4 rounded-xl font-medium">
              + Create New Zone
            </button>
          </div>
        )}

        {/* Councils Tab */}
        {activeTab === 'councils' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Users size={20} className="text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">Local Merchant Councils</h3>
              </div>
              <p className="text-gray-400 text-sm">
                ReZ + top merchants co-decide local offers and strategies
              </p>
            </div>

            {councils.map(council => (
              <div key={council.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold">{council.name}</h3>
                    <p className="text-gray-400 text-sm">{council.city} • {council.members} members</p>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-bold">{council.decisionsThisMonth} decisions</p>
                    <p className="text-gray-500 text-xs">this month</p>
                  </div>
                </div>

                {/* Voting Power */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-4">
                  <p className="text-gray-400 text-xs mb-2">Voting Power Distribution</p>
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-500"
                      style={{ width: `${council.rezStake}%` }}
                    ></div>
                    <div
                      className="bg-purple-500"
                      style={{ width: `${council.merchantStake}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs">
                    <span className="text-cyan-400">ReZ {council.rezStake}%</span>
                    <span className="text-purple-400">Merchants {council.merchantStake}%</span>
                  </div>
                </div>

                {/* Top Merchants */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {council.topMerchants.map((merchant, idx) => (
                    <span key={idx} className="bg-gray-700 text-white px-2 py-1 rounded text-xs">
                      {merchant}
                    </span>
                  ))}
                </div>

                {/* Upcoming Votes */}
                {council.upcomingVotes.length > 0 && (
                  <div className="bg-purple-900/20 rounded-lg p-3">
                    <p className="text-purple-400 text-xs mb-2">Upcoming Votes</p>
                    {council.upcomingVotes.map((vote, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="text-white">{vote.topic}</span>
                        <span className="text-gray-400">{vote.deadline}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <DollarSign size={20} className="text-green-400 mr-2" />
                <h3 className="text-white font-semibold">Hyperlocal Dynamic Pricing</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Different prices per street, time, demand, weather, and events
              </p>
            </div>

            {pricingZones.map(zone => (
              <div key={zone.zoneId} className="bg-gray-800 rounded-xl p-4">
                <h3 className="text-white font-bold mb-4">{zone.zoneName}</h3>

                {/* Current Multiplier */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-400 text-sm">Current Price Multiplier</p>
                      <p className="text-white font-bold text-2xl">{zone.demandBasedPricing.currentMultiplier}x</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Demand Level</p>
                      <p className="text-green-400 font-bold uppercase">{zone.demandBasedPricing.currentDemand}</p>
                    </div>
                  </div>
                </div>

                {/* Time-Based Pricing */}
                <div className="mb-4">
                  <p className="text-gray-400 text-xs mb-2">Time-Based Pricing</p>
                  <div className="space-y-2">
                    {zone.timeBasedPricing.map((slot, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-2">
                        <span className="text-white text-sm">{slot.time}</span>
                        <span className={`font-medium ${
                          slot.multiplier > 1 ? 'text-red-400' : 'text-green-400'
                        }`}>
                          {slot.multiplier}x
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Pricing */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Weather Pricing</p>
                    <p className="text-white font-medium">Rainy: {zone.weatherPricing.rainyDayMultiplier}x</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Event Nearby</p>
                    <p className="text-yellow-400 font-medium">{zone.eventPricing.eventMultiplier}x active</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cities Tab */}
        {activeTab === 'cities' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Globe size={20} className="text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">City Market Capture</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Competitors can enter cities but cannot get merchants
              </p>
            </div>

            {cityMarketShare.map(city => (
              <div key={city.city} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-3 ${
                      city.status === 'dominant' ? 'bg-green-600' :
                      city.status === 'locking' ? 'bg-yellow-600' :
                      'bg-gray-600'
                    }`}>
                      <Building size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{city.city}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        city.status === 'dominant' ? 'bg-green-600/20 text-green-400' :
                        city.status === 'locking' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {city.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      city.share >= 60 ? 'text-green-400' :
                      city.share >= 40 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {city.share}%
                    </p>
                    <p className="text-gray-500 text-xs">market share</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        city.share >= 60 ? 'bg-green-500' :
                        city.share >= 40 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${city.share}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{city.merchants.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Merchants</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">₹{(city.gmv / 10000000).toFixed(1)}Cr</p>
                    <p className="text-gray-400 text-xs">Monthly GMV</p>
                  </div>
                </div>
              </div>
            ))}

            {/* City Lock Strategy */}
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Target size={18} className="text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">City Lock Strategy</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">
                When ReZ has 60%+ market share, competitors face:
              </p>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• No premium merchants available</li>
                <li>• Zone exclusivity blocks entry</li>
                <li>• Merchant councils aligned with ReZ</li>
                <li>• Dynamic pricing advantages</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCityLockEngine;
