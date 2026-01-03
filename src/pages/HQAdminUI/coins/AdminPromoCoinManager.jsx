import { useState } from 'react';
import { Ticket, Plus, Calendar, Tag, Store, Package, Percent, Clock, AlertCircle, MapPin, Users, Target, TrendingUp, Zap } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminPromoCoinManager() {
  const [promoCoins, setPromoCoins] = useState([
    {
      id: 1,
      name: 'New User Welcome',
      amount: 500,
      purpose: 'First Purchase Activation',
      validUntil: '2024-12-31',
      maxUsagePercent: 30,
      categoryRestriction: 'All',
      merchantRestriction: 'All',
      issued: 2456,
      used: 1823,
      status: 'active'
    },
    {
      id: 2,
      name: 'College Fest Bonus',
      amount: 200,
      purpose: 'College Event Promotion',
      validUntil: '2024-06-30',
      maxUsagePercent: 20,
      categoryRestriction: 'Food, Fashion',
      merchantRestriction: 'Campus Partners',
      issued: 1234,
      used: 456,
      status: 'active'
    },
    {
      id: 3,
      name: 'Reactivation Bonus',
      amount: 300,
      purpose: 'Dormant User Activation',
      validUntil: '2024-08-15',
      maxUsagePercent: 25,
      categoryRestriction: 'All',
      merchantRestriction: 'All',
      issued: 876,
      used: 234,
      status: 'expired'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPromo, setNewPromo] = useState({
    name: '',
    amount: 100,
    purpose: '',
    validUntil: '',
    maxUsagePercent: 20,
    categoryRestriction: 'All',
    merchantRestriction: 'All',
    targetSegment: 'all',
    geoTargeting: {
      enabled: false,
      cities: [],
      radius: 5
    },
    timeTargeting: {
      enabled: false,
      timeOfDay: 'all_day',
      daysOfWeek: []
    },
    behaviorTargeting: {
      enabled: false,
      minTransactions: 0,
      maxTransactions: 999,
      spendingRange: { min: 0, max: 100000 },
      lastPurchaseDays: 30
    },
    tierTargeting: {
      enabled: false,
      merchantTiers: []
    }
  });

  const [stats] = useState({
    totalIssued: 4566,
    totalUsed: 2513,
    activePromos: 2,
    expiredPromos: 1,
    totalValue: 1283400
  });

  const categories = ['All', 'Food', 'Fashion', 'Electronics', 'Beauty', 'Health', 'Services'];
  const merchantGroups = ['All', 'Campus Partners', 'Premium Partners', 'Select Merchants'];
  const targetSegments = ['all', 'new_users', 'inactive_users', 'students', 'corporate', 'prive_members', 'high_spenders'];
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune'];
  const timeSlots = ['all_day', 'morning', 'afternoon', 'evening', 'night', 'weekend_only'];
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const merchantTiers = ['Free', 'Basic', 'Golden', 'Diamond'];

  const handleCreatePromo = () => {
    const promo = {
      id: promoCoins.length + 1,
      ...newPromo,
      issued: 0,
      used: 0,
      status: 'active'
    };
    setPromoCoins([promo, ...promoCoins]);
    setShowCreateModal(false);
    setNewPromo({
      name: '',
      amount: 100,
      purpose: '',
      validUntil: '',
      maxUsagePercent: 20,
      categoryRestriction: 'All',
      merchantRestriction: 'All',
      targetSegment: 'all',
      geoTargeting: {
        enabled: false,
        cities: [],
        radius: 5
      },
      timeTargeting: {
        enabled: false,
        timeOfDay: 'all_day',
        daysOfWeek: []
      },
      behaviorTargeting: {
        enabled: false,
        minTransactions: 0,
        maxTransactions: 999,
        spendingRange: { min: 0, max: 100000 },
        lastPurchaseDays: 30
      },
      tierTargeting: {
        enabled: false,
        merchantTiers: []
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Ticket className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Promo Coin Manager</h1>
                <p className="text-orange-100 mt-1">Inject and manage promotional coins</p>
              </div>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 font-semibold"
            >
              <Plus className="w-5 h-5" />
              Create Promo
            </button>
          </div>
        </div>
      </div>

      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Issued</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalIssued.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Used</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsed.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Promos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activePromos}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Expired</p>
                <p className="text-2xl font-bold text-gray-900">{stats.expiredPromos}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Ticket className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">₹{stats.totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Promo Coin Rules</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Promo coins are NOT earned - they are injected by ReZ for specific purposes</li>
                <li>• Auto-applied FIRST at checkout (before Branded, ReZ, and Privé coins)</li>
                <li>• Cannot be used for Gift Cards or Vouchers</li>
                <li>• Time-bound with expiry dates and usage restrictions</li>
                <li>• Can be restricted by category, merchant, and max % per bill</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Promo Coins List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Active Promo Campaigns</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {promoCoins.map((promo) => (
              <div key={promo.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{promo.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        promo.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {promo.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{promo.purpose}</p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Ticket className="w-4 h-4" />
                          Coin Amount
                        </div>
                        <p className="text-lg font-bold text-orange-600">{promo.amount}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Percent className="w-4 h-4" />
                          Max Usage
                        </div>
                        <p className="text-lg font-bold text-gray-900">{promo.maxUsagePercent}%</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          Valid Until
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{promo.validUntil}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Package className="w-4 h-4" />
                          Categories
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{promo.categoryRestriction}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <Store className="w-4 h-4" />
                          Merchants
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{promo.merchantRestriction}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-6">
                      <div>
                        <p className="text-xs text-gray-500">Issued</p>
                        <p className="text-lg font-bold text-blue-600">{promo.issued.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Used</p>
                        <p className="text-lg font-bold text-green-600">{promo.used.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Usage Rate</p>
                        <p className="text-lg font-bold text-purple-600">
                          {promo.issued > 0 ? Math.round((promo.used / promo.issued) * 100) : 0}%
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 font-medium">
                      Edit
                    </button>
                    <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                      Inject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create Promo Coin</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Promo Name</label>
                <input
                  type="text"
                  value={newPromo.name}
                  onChange={(e) => setNewPromo({ ...newPromo, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., New User Welcome"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                <input
                  type="text"
                  value={newPromo.purpose}
                  onChange={(e) => setNewPromo({ ...newPromo, purpose: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., First Purchase Activation"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coin Amount</label>
                  <input
                    type="number"
                    value={newPromo.amount}
                    onChange={(e) => setNewPromo({ ...newPromo, amount: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Usage % per Bill</label>
                  <input
                    type="number"
                    value={newPromo.maxUsagePercent}
                    onChange={(e) => setNewPromo({ ...newPromo, maxUsagePercent: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valid Until</label>
                <input
                  type="date"
                  value={newPromo.validUntil}
                  onChange={(e) => setNewPromo({ ...newPromo, validUntil: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Restriction</label>
                <select
                  value={newPromo.categoryRestriction}
                  onChange={(e) => setNewPromo({ ...newPromo, categoryRestriction: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Merchant Restriction</label>
                <select
                  value={newPromo.merchantRestriction}
                  onChange={(e) => setNewPromo({ ...newPromo, merchantRestriction: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  {merchantGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Target Segment</label>
                <select
                  value={newPromo.targetSegment}
                  onChange={(e) => setNewPromo({ ...newPromo, targetSegment: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">All Users</option>
                  <option value="new_users">New Users</option>
                  <option value="inactive_users">Inactive Users (30+ days)</option>
                  <option value="students">Students</option>
                  <option value="corporate">Corporate Employees</option>
                  <option value="prive_members">Privé Members</option>
                  <option value="high_spenders">High Spenders (₹10K+/month)</option>
                </select>
              </div>

              {/* Advanced Targeting Section */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  Advanced Targeting Options
                </h3>

                {/* Geo Targeting */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={newPromo.geoTargeting.enabled}
                      onChange={(e) => setNewPromo({
                        ...newPromo,
                        geoTargeting: { ...newPromo.geoTargeting, enabled: e.target.checked }
                      })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Geographic Targeting</span>
                    </div>
                  </label>

                  {newPromo.geoTargeting.enabled && (
                    <div className="ml-8 space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Target Cities</label>
                        <div className="grid grid-cols-2 gap-2">
                          {cities.map(city => (
                            <label key={city} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={newPromo.geoTargeting.cities.includes(city)}
                                onChange={(e) => {
                                  const updated = e.target.checked
                                    ? [...newPromo.geoTargeting.cities, city]
                                    : newPromo.geoTargeting.cities.filter(c => c !== city);
                                  setNewPromo({
                                    ...newPromo,
                                    geoTargeting: { ...newPromo.geoTargeting, cities: updated }
                                  });
                                }}
                                className="w-4 h-4 text-indigo-600 rounded"
                              />
                              <span className="text-sm text-gray-700">{city}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Radius (km) from user location
                        </label>
                        <input
                          type="number"
                          value={newPromo.geoTargeting.radius}
                          onChange={(e) => setNewPromo({
                            ...newPromo,
                            geoTargeting: { ...newPromo.geoTargeting, radius: parseInt(e.target.value) }
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          min="1"
                          max="50"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Time Targeting */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={newPromo.timeTargeting.enabled}
                      onChange={(e) => setNewPromo({
                        ...newPromo,
                        timeTargeting: { ...newPromo.timeTargeting, enabled: e.target.checked }
                      })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Time-Based Targeting</span>
                    </div>
                  </label>

                  {newPromo.timeTargeting.enabled && (
                    <div className="ml-8 space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Time of Day</label>
                        <select
                          value={newPromo.timeTargeting.timeOfDay}
                          onChange={(e) => setNewPromo({
                            ...newPromo,
                            timeTargeting: { ...newPromo.timeTargeting, timeOfDay: e.target.value }
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        >
                          <option value="all_day">All Day</option>
                          <option value="morning">Morning (6 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                          <option value="evening">Evening (6 PM - 11 PM)</option>
                          <option value="night">Night (11 PM - 6 AM)</option>
                          <option value="weekend_only">Weekend Only</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Days of Week</label>
                        <div className="grid grid-cols-4 gap-2">
                          {daysOfWeek.map(day => (
                            <label key={day} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={newPromo.timeTargeting.daysOfWeek.includes(day)}
                                onChange={(e) => {
                                  const updated = e.target.checked
                                    ? [...newPromo.timeTargeting.daysOfWeek, day]
                                    : newPromo.timeTargeting.daysOfWeek.filter(d => d !== day);
                                  setNewPromo({
                                    ...newPromo,
                                    timeTargeting: { ...newPromo.timeTargeting, daysOfWeek: updated }
                                  });
                                }}
                                className="w-4 h-4 text-indigo-600 rounded"
                              />
                              <span className="text-sm text-gray-700">{day.slice(0, 3)}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Behavior Targeting */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={newPromo.behaviorTargeting.enabled}
                      onChange={(e) => setNewPromo({
                        ...newPromo,
                        behaviorTargeting: { ...newPromo.behaviorTargeting, enabled: e.target.checked }
                      })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Behavior-Based Targeting</span>
                    </div>
                  </label>

                  {newPromo.behaviorTargeting.enabled && (
                    <div className="ml-8 space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Min Transactions</label>
                          <input
                            type="number"
                            value={newPromo.behaviorTargeting.minTransactions}
                            onChange={(e) => setNewPromo({
                              ...newPromo,
                              behaviorTargeting: { ...newPromo.behaviorTargeting, minTransactions: parseInt(e.target.value) }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Max Transactions</label>
                          <input
                            type="number"
                            value={newPromo.behaviorTargeting.maxTransactions}
                            onChange={(e) => setNewPromo({
                              ...newPromo,
                              behaviorTargeting: { ...newPromo.behaviorTargeting, maxTransactions: parseInt(e.target.value) }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            min="0"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Min Spending (₹)</label>
                          <input
                            type="number"
                            value={newPromo.behaviorTargeting.spendingRange.min}
                            onChange={(e) => setNewPromo({
                              ...newPromo,
                              behaviorTargeting: {
                                ...newPromo.behaviorTargeting,
                                spendingRange: { ...newPromo.behaviorTargeting.spendingRange, min: parseInt(e.target.value) }
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Max Spending (₹)</label>
                          <input
                            type="number"
                            value={newPromo.behaviorTargeting.spendingRange.max}
                            onChange={(e) => setNewPromo({
                              ...newPromo,
                              behaviorTargeting: {
                                ...newPromo.behaviorTargeting,
                                spendingRange: { ...newPromo.behaviorTargeting.spendingRange, max: parseInt(e.target.value) }
                              }
                            })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            min="0"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Purchase Within (days)
                        </label>
                        <input
                          type="number"
                          value={newPromo.behaviorTargeting.lastPurchaseDays}
                          onChange={(e) => setNewPromo({
                            ...newPromo,
                            behaviorTargeting: { ...newPromo.behaviorTargeting, lastPurchaseDays: parseInt(e.target.value) }
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          min="1"
                          max="365"
                        />
                        <p className="text-xs text-gray-500 mt-1">Target users who made a purchase within this many days</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Merchant Tier Targeting */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={newPromo.tierTargeting.enabled}
                      onChange={(e) => setNewPromo({
                        ...newPromo,
                        tierTargeting: { ...newPromo.tierTargeting, enabled: e.target.checked }
                      })}
                      className="w-5 h-5 text-indigo-600 rounded"
                    />
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <span className="font-medium text-gray-900">Merchant Tier Targeting</span>
                    </div>
                  </label>

                  {newPromo.tierTargeting.enabled && (
                    <div className="ml-8">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apply to merchants in these tiers
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {merchantTiers.map(tier => (
                          <label key={tier} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={newPromo.tierTargeting.merchantTiers.includes(tier)}
                              onChange={(e) => {
                                const updated = e.target.checked
                                  ? [...newPromo.tierTargeting.merchantTiers, tier]
                                  : newPromo.tierTargeting.merchantTiers.filter(t => t !== tier);
                                setNewPromo({
                                  ...newPromo,
                                  tierTargeting: { ...newPromo.tierTargeting, merchantTiers: updated }
                                });
                              }}
                              className="w-4 h-4 text-indigo-600 rounded"
                            />
                            <span className="text-sm text-gray-700">{tier}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePromo}
                className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold"
              >
                Create Promo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
