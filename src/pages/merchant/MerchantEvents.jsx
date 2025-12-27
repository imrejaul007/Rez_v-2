import React, { useState } from 'react';
import { Calendar, MapPin, Users, Trophy, Zap, Clock, DollarSign, TrendingUp, Plus, Edit, Trash2, Play, Pause, CheckCircle, AlertCircle, Target, Gift, Sparkles } from 'lucide-react';
import MerchantNav from '../../components/MerchantNav';

const MerchantEvents = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock events data
  const mockEvents = [
    {
      id: 'event-001',
      name: 'Weekend Flea Market - Koramangala',
      type: 'flea_market',
      status: 'active',
      startDate: '2024-01-27',
      endDate: '2024-01-28',
      location: 'Koramangala Social',
      expectedFootfall: 500,
      currentVisitors: 123,
      mode: 'rez_only',
      specialPricing: true,
      discountPercent: 15,
      coinsMultiplier: 2.0,
      revenue: 12450,
      transactions: 87,
      avgTicket: 143.10,
      rezUsersOnly: true
    },
    {
      id: 'event-002',
      name: 'College Fest - IIM Bangalore',
      type: 'college_fest',
      status: 'scheduled',
      startDate: '2024-02-05',
      endDate: '2024-02-07',
      location: 'IIM Bangalore Campus',
      expectedFootfall: 2000,
      currentVisitors: 0,
      mode: 'hybrid',
      specialPricing: true,
      discountPercent: 20,
      coinsMultiplier: 3.0,
      revenue: 0,
      transactions: 0,
      avgTicket: 0,
      rezUsersOnly: false
    },
    {
      id: 'event-003',
      name: 'Food Truck Festival - Cubbon Park',
      type: 'festival',
      status: 'completed',
      startDate: '2024-01-20',
      endDate: '2024-01-21',
      location: 'Cubbon Park',
      expectedFootfall: 1000,
      currentVisitors: 876,
      mode: 'rez_preferred',
      specialPricing: true,
      discountPercent: 10,
      coinsMultiplier: 1.5,
      revenue: 45670,
      transactions: 234,
      avgTicket: 195.17,
      rezUsersOnly: false
    }
  ];

  const eventTypes = [
    { id: 'flea_market', name: 'Flea Market', icon: MapPin, color: 'orange' },
    { id: 'college_fest', name: 'College Fest', icon: Trophy, color: 'purple' },
    { id: 'festival', name: 'Festival', icon: Sparkles, color: 'pink' },
    { id: 'popup', name: 'Pop-up Store', icon: Zap, color: 'blue' }
  ];

  const paymentModes = [
    {
      id: 'rez_only',
      name: 'ReZ Only',
      description: 'Only ReZ app payments accepted',
      badge: 'EXCLUSIVE',
      color: 'purple'
    },
    {
      id: 'rez_preferred',
      name: 'ReZ Preferred',
      description: 'Extra benefits for ReZ users',
      badge: 'PREFERRED',
      color: 'blue'
    },
    {
      id: 'hybrid',
      name: 'Hybrid',
      description: 'All payment methods accepted',
      badge: 'FLEXIBLE',
      color: 'green'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getModeColor = (mode) => {
    switch(mode) {
      case 'rez_only': return 'bg-purple-100 text-purple-800';
      case 'rez_preferred': return 'bg-blue-100 text-blue-800';
      case 'hybrid': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const activeEvents = mockEvents.filter(e => e.status === 'active');
  const scheduledEvents = mockEvents.filter(e => e.status === 'scheduled');
  const completedEvents = mockEvents.filter(e => e.status === 'completed');

  const totalRevenue = mockEvents.reduce((sum, e) => sum + e.revenue, 0);
  const totalTransactions = mockEvents.reduce((sum, e) => sum + e.transactions, 0);
  const avgEventRevenue = totalRevenue / mockEvents.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <MerchantNav />

      <div className="lg:ml-64 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">Events & Special Modes</h1>
                  <p className="text-white/90 mt-1">Flea Markets, College Fests, Pop-ups & More</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  SPECIAL EVENTS MODULE
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  ReZ ECOSYSTEM INTEGRATION
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Create Event
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Play className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Active Events</p>
                  <p className="text-2xl font-bold">{activeEvents.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Revenue</p>
                  <p className="text-2xl font-bold">₹{(totalRevenue / 1000).toFixed(1)}K</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Total Transactions</p>
                  <p className="text-2xl font-bold">{totalTransactions}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5" />
                <div>
                  <p className="text-white/80 text-xs">Avg/Event</p>
                  <p className="text-2xl font-bold">₹{(avgEventRevenue / 1000).toFixed(1)}K</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'active'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Active ({activeEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('scheduled')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'scheduled'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Scheduled ({scheduledEvents.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === 'completed'
                ? 'bg-gray-600 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Completed ({completedEvents.length})
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6">
          {mockEvents
            .filter(event => {
              if (activeTab === 'active') return event.status === 'active';
              if (activeTab === 'scheduled') return event.status === 'scheduled';
              if (activeTab === 'completed') return event.status === 'completed';
              return true;
            })
            .map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                          {event.status.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getModeColor(event.mode)}`}>
                          {event.mode.toUpperCase().replace('_', ' ')}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600 mt-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.startDate} to {event.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Expected: {event.expectedFootfall}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit className="w-5 h-5 text-blue-600" />
                      </button>
                      {event.status === 'active' && (
                        <button className="p-2 hover:bg-orange-50 rounded-lg transition-all">
                          <Pause className="w-5 h-5 text-orange-600" />
                        </button>
                      )}
                      {event.status === 'scheduled' && (
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-all">
                          <Play className="w-5 h-5 text-green-600" />
                        </button>
                      )}
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="w-5 h-5 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Event Metrics */}
                  <div className="grid grid-cols-6 gap-4 mt-6 pt-6 border-t">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Revenue</p>
                      <p className="text-lg font-bold text-gray-800">₹{event.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Transactions</p>
                      <p className="text-lg font-bold text-gray-800">{event.transactions}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Avg Ticket</p>
                      <p className="text-lg font-bold text-gray-800">₹{event.avgTicket.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Discount</p>
                      <p className="text-lg font-bold text-orange-600">{event.discountPercent}% OFF</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Coins Multiplier</p>
                      <p className="text-lg font-bold text-purple-600">{event.coinsMultiplier}x</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Current Visitors</p>
                      <p className="text-lg font-bold text-green-600">{event.currentVisitors}</p>
                    </div>
                  </div>

                  {/* Special Features */}
                  {(event.rezUsersOnly || event.specialPricing) && (
                    <div className="flex gap-2 mt-4">
                      {event.rezUsersOnly && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-semibold text-purple-600">ReZ Users Only</span>
                        </div>
                      )}
                      {event.specialPricing && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-orange-50 rounded-lg">
                          <Gift className="w-4 h-4 text-orange-600" />
                          <span className="text-xs font-semibold text-orange-600">Special Event Pricing</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Event Types Guide */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Event Types & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {eventTypes.map(type => (
              <div key={type.id} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`bg-${type.color}-100 p-2 rounded-lg`}>
                    <type.icon className={`w-5 h-5 text-${type.color}-600`} />
                  </div>
                  <h3 className="font-bold text-gray-800">{type.name}</h3>
                </div>
                <p className="text-xs text-gray-600">
                  {type.id === 'flea_market' && 'Perfect for weekend markets, pop-up events, and temporary locations'}
                  {type.id === 'college_fest' && 'Target young audiences at college festivals and campus events'}
                  {type.id === 'festival' && 'Large-scale events like food festivals and cultural celebrations'}
                  {type.id === 'popup' && 'Short-term pop-up stores in malls, offices, or public spaces'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Modes Guide */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Payment Modes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {paymentModes.map(mode => (
              <div key={mode.id} className={`p-4 bg-gradient-to-br from-${mode.color}-50 to-white rounded-xl border-2 border-${mode.color}-200`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">{mode.name}</h3>
                  <span className={`px-2 py-1 bg-${mode.color}-600 text-white text-xs font-bold rounded-full`}>
                    {mode.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantEvents;
