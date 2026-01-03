import React, { useState } from 'react';
import {
  ArrowLeft, Truck, Package, MapPin, Clock, CheckCircle,
  XCircle, AlertCircle, Phone, Navigation, RefreshCw, Plus,
  ChevronRight, Eye, Star, Bike, Car, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantDeliveryBridge = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active');

  const stats = {
    activeDeliveries: 12,
    completedToday: 89,
    avgDeliveryTime: '24 min',
    successRate: 98.5
  };

  const deliveryPartners = [
    {
      id: 'dunzo',
      name: 'Dunzo',
      icon: '🚴',
      status: 'active',
      connected: true,
      activeOrders: 5,
      todayDeliveries: 45,
      avgTime: '22 min',
      rating: 4.6,
      costPerKm: 12,
      baseCharge: 25
    },
    {
      id: 'porter',
      name: 'Porter',
      icon: '🚛',
      status: 'active',
      connected: true,
      activeOrders: 2,
      todayDeliveries: 12,
      avgTime: '35 min',
      rating: 4.4,
      costPerKm: 18,
      baseCharge: 50
    },
    {
      id: 'shadowfax',
      name: 'Shadowfax',
      icon: '⚡',
      status: 'active',
      connected: true,
      activeOrders: 3,
      todayDeliveries: 28,
      avgTime: '20 min',
      rating: 4.7,
      costPerKm: 14,
      baseCharge: 30
    },
    {
      id: 'wefast',
      name: 'WeFast',
      icon: '🏃',
      status: 'inactive',
      connected: true,
      activeOrders: 0,
      todayDeliveries: 0,
      avgTime: '-',
      rating: 4.3,
      costPerKm: 10,
      baseCharge: 20
    },
    {
      id: 'borzo',
      name: 'Borzo',
      icon: '📦',
      status: 'available',
      connected: false,
      activeOrders: 0,
      todayDeliveries: 0,
      avgTime: '-',
      rating: 4.5,
      costPerKm: 11,
      baseCharge: 22
    }
  ];

  const activeDeliveries = [
    {
      id: 'DEL-001',
      orderId: 'ORD-2024-0045',
      partner: 'dunzo',
      rider: 'Rajesh K.',
      riderPhone: '+91 98765 43210',
      status: 'picked',
      customer: 'Rahul S.',
      address: '123 MG Road, Koramangala',
      distance: '3.2 km',
      eta: '8 min',
      amount: 456
    },
    {
      id: 'DEL-002',
      orderId: 'ORD-2024-0046',
      partner: 'shadowfax',
      rider: 'Suresh M.',
      riderPhone: '+91 87654 32109',
      status: 'in_transit',
      customer: 'Priya P.',
      address: '456 HSR Layout, Sector 2',
      distance: '4.5 km',
      eta: '12 min',
      amount: 289
    },
    {
      id: 'DEL-003',
      orderId: 'ORD-2024-0047',
      partner: 'dunzo',
      rider: 'Pending',
      riderPhone: null,
      status: 'searching',
      customer: 'Amit K.',
      address: '789 Indiranagar, 12th Main',
      distance: '2.8 km',
      eta: '-',
      amount: 567
    },
    {
      id: 'DEL-004',
      orderId: 'ORD-2024-0048',
      partner: 'porter',
      rider: 'Venkat R.',
      riderPhone: '+91 76543 21098',
      status: 'assigned',
      customer: 'Sneha R.',
      address: '321 Whitefield, Main Road',
      distance: '8.2 km',
      eta: '25 min',
      amount: 1234
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-green-500/20 text-green-400';
      case 'picked':
      case 'in_transit': return 'bg-blue-500/20 text-blue-400';
      case 'assigned': return 'bg-purple-500/20 text-purple-400';
      case 'searching': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPartnerIcon = (partnerId) => {
    return deliveryPartners.find(p => p.id === partnerId)?.icon || '🚚';
  };

  const getPartnerName = (partnerId) => {
    return deliveryPartners.find(p => p.id === partnerId)?.name || 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Truck size={24} className="mr-2" />
                Delivery Bridge
              </h1>
              <p className="text-amber-200 text-sm">Dunzo, Porter, Shadowfax & more</p>
            </div>
          </div>
          <RefreshCw size={20} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeDeliveries}</p>
            <p className="text-xs text-amber-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.completedToday}</p>
            <p className="text-xs text-amber-200">Today</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.avgDeliveryTime}</p>
            <p className="text-xs text-amber-200">Avg Time</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.successRate}%</p>
            <p className="text-xs text-amber-200">Success</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'active', label: 'Active' },
            { id: 'partners', label: 'Partners' },
            { id: 'settings', label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-amber-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab */}
      {activeTab === 'active' && (
        <div className="px-4 space-y-3">
          {activeDeliveries.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <Truck size={48} className="text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No active deliveries</p>
            </div>
          ) : (
            activeDeliveries.map(delivery => (
              <div key={delivery.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{getPartnerIcon(delivery.partner)}</span>
                    <div>
                      <div className="flex items-center">
                        <p className="text-white font-bold">{delivery.orderId}</p>
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(delivery.status)}`}>
                          {delivery.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{getPartnerName(delivery.partner)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">₹{delivery.amount}</p>
                    <p className="text-gray-400 text-sm">{delivery.distance}</p>
                  </div>
                </div>

                {/* Rider Info */}
                {delivery.rider !== 'Pending' && (
                  <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold mr-2">
                          {delivery.rider.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-medium">{delivery.rider}</p>
                          <p className="text-gray-400 text-xs">{delivery.riderPhone}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-green-600 p-2 rounded-lg">
                          <Phone size={16} />
                        </button>
                        <button className="bg-blue-600 p-2 rounded-lg">
                          <Navigation size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {delivery.status === 'searching' && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 mb-3">
                    <div className="flex items-center">
                      <RefreshCw size={16} className="text-yellow-400 mr-2 animate-spin" />
                      <span className="text-yellow-400 text-sm">Searching for delivery partner...</span>
                    </div>
                  </div>
                )}

                {/* Customer & Address */}
                <div className="flex items-start mb-3">
                  <MapPin size={16} className="text-gray-400 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white">{delivery.customer}</p>
                    <p className="text-gray-400 text-sm">{delivery.address}</p>
                  </div>
                </div>

                {/* ETA */}
                {delivery.eta !== '-' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Clock size={14} className="inline mr-1" />
                      ETA: {delivery.eta}
                    </span>
                    <button className="text-amber-400 flex items-center">
                      <Eye size={14} className="mr-1" />
                      Track
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Partners Tab */}
      {activeTab === 'partners' && (
        <div className="px-4 space-y-3">
          {deliveryPartners.map(partner => (
            <div key={partner.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-2xl mr-3">
                    {partner.icon}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{partner.name}</h3>
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        partner.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        partner.status === 'inactive' ? 'bg-gray-500/20 text-gray-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {partner.status}
                      </span>
                    </div>
                    {partner.connected && (
                      <p className="text-gray-400 text-sm flex items-center">
                        <Star size={12} className="text-yellow-400 mr-1" />
                        {partner.rating} rating
                      </p>
                    )}
                  </div>
                </div>
                <Settings size={18} className="text-gray-400" />
              </div>

              {partner.connected && partner.status === 'active' && (
                <>
                  <div className="grid grid-cols-4 gap-2 mb-3 text-center text-sm">
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-white font-bold">{partner.activeOrders}</p>
                      <p className="text-gray-400 text-xs">Active</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-white font-bold">{partner.todayDeliveries}</p>
                      <p className="text-gray-400 text-xs">Today</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-white font-bold">{partner.avgTime}</p>
                      <p className="text-gray-400 text-xs">Avg Time</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-white font-bold">₹{partner.baseCharge}</p>
                      <p className="text-gray-400 text-xs">Base</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">₹{partner.costPerKm}/km</span>
                    <button className="text-red-400">Pause Partner</button>
                  </div>
                </>
              )}

              {partner.connected && partner.status === 'inactive' && (
                <button className="w-full mt-2 bg-amber-600 text-white py-2 rounded-lg text-sm font-medium">
                  Reactivate
                </button>
              )}

              {!partner.connected && (
                <button className="w-full mt-2 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <Plus size={16} className="mr-2" />
                  Connect Partner
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="px-4 space-y-4">
          {/* Auto Assignment */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-bold">Auto Assignment</h3>
                <p className="text-gray-400 text-sm">Automatically assign to best partner</p>
              </div>
              <div className="w-12 h-6 rounded-full p-1 cursor-pointer bg-amber-600">
                <div className="w-4 h-4 rounded-full bg-white transform translate-x-6" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Assignment Priority</span>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>Fastest ETA</option>
                  <option>Lowest Cost</option>
                  <option>Best Rating</option>
                </select>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Max Wait Time</span>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>3 minutes</option>
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                </select>
              </div>
            </div>
          </div>

          {/* Fallback Rules */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Fallback Rules</h3>
            <p className="text-gray-400 text-sm mb-4">
              If primary partner unavailable, try these in order:
            </p>
            <div className="space-y-2">
              {['Dunzo', 'Shadowfax', 'Porter', 'WeFast'].map((partner, idx) => (
                <div key={partner} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs mr-3">
                      {idx + 1}
                    </span>
                    <span className="text-white">{partner}</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Radius */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Delivery Radius</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Max Distance</span>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>5 km</option>
                  <option selected>10 km</option>
                  <option>15 km</option>
                  <option>20 km</option>
                </select>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-300">Free Delivery Under</span>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>3 km</option>
                  <option selected>5 km</option>
                  <option>No Free Delivery</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-bold">
            Save Settings
          </button>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantDeliveryBridge;
