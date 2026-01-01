import React, { useState } from 'react';
import {
  ArrowLeft, Gift, Cake, Calendar, Heart, Users, Star,
  Bell, Settings, Plus, Edit, Trash2, CheckCircle, Clock,
  MessageSquare, Mail, Smartphone, TrendingUp, Percent
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantBirthdayRewards = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showCreate, setShowCreate] = useState(false);

  const stats = {
    birthdaysThisMonth: 45,
    anniversariesThisMonth: 12,
    rewardsRedeemed: 38,
    redemptionRate: 84,
    avgSpendIncrease: 35
  };

  const upcomingBirthdays = [
    {
      id: 1,
      name: 'Rahul Sharma',
      phone: '9876543210',
      date: '2024-01-20',
      daysAway: 3,
      type: 'birthday',
      visits: 24,
      totalSpent: 12500,
      rewardStatus: 'scheduled',
      reward: '20% off + Free Dessert'
    },
    {
      id: 2,
      name: 'Priya Patel',
      phone: '9876543211',
      date: '2024-01-22',
      daysAway: 5,
      type: 'birthday',
      visits: 18,
      totalSpent: 8900,
      rewardStatus: 'pending',
      reward: null
    },
    {
      id: 3,
      name: 'Amit Kumar',
      phone: '9876543212',
      date: '2024-01-25',
      daysAway: 8,
      type: 'anniversary',
      visits: 36,
      totalSpent: 28500,
      rewardStatus: 'scheduled',
      reward: '25% off on orders above ₹1000'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      phone: '9876543213',
      date: '2024-01-28',
      daysAway: 11,
      type: 'birthday',
      visits: 8,
      totalSpent: 4200,
      rewardStatus: 'pending',
      reward: null
    }
  ];

  const rewardTemplates = [
    {
      id: 1,
      name: 'Birthday Special - Bronze',
      trigger: 'birthday',
      discount: 10,
      type: 'percentage',
      minSpent: 0,
      freeItem: null,
      validity: 7,
      active: true
    },
    {
      id: 2,
      name: 'Birthday Special - Silver',
      trigger: 'birthday',
      discount: 15,
      type: 'percentage',
      minSpent: 5000,
      freeItem: 'Free Dessert',
      validity: 7,
      active: true
    },
    {
      id: 3,
      name: 'Birthday Special - Gold',
      trigger: 'birthday',
      discount: 20,
      type: 'percentage',
      minSpent: 10000,
      freeItem: 'Free Dessert + Drink',
      validity: 7,
      active: true
    },
    {
      id: 4,
      name: 'Anniversary Celebration',
      trigger: 'anniversary',
      discount: 25,
      type: 'percentage',
      minSpent: 0,
      freeItem: 'Complimentary Cake Slice',
      validity: 14,
      active: true
    }
  ];

  const sentRewards = [
    {
      id: 101,
      customer: 'Vikram Singh',
      type: 'birthday',
      sentOn: '2024-01-15',
      reward: '20% off',
      status: 'redeemed',
      orderValue: 2450
    },
    {
      id: 102,
      customer: 'Neha Gupta',
      type: 'birthday',
      sentOn: '2024-01-14',
      reward: '15% off + Free Dessert',
      status: 'redeemed',
      orderValue: 1800
    },
    {
      id: 103,
      customer: 'Rajesh Kumar',
      type: 'anniversary',
      sentOn: '2024-01-12',
      reward: '25% off',
      status: 'expired',
      orderValue: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Birthday & Anniversary</h1>
              <p className="text-pink-200 text-sm">Reward your loyal customers</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Settings size={24} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center mb-1">
              <Cake size={16} className="mr-1" />
              <span className="text-xl font-bold">{stats.birthdaysThisMonth}</span>
            </div>
            <p className="text-xs text-pink-200">Birthdays</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center mb-1">
              <Heart size={16} className="mr-1" />
              <span className="text-xl font-bold">{stats.anniversariesThisMonth}</span>
            </div>
            <p className="text-xs text-pink-200">Anniversaries</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center mb-1">
              <TrendingUp size={16} className="mr-1" />
              <span className="text-xl font-bold">{stats.redemptionRate}%</span>
            </div>
            <p className="text-xs text-pink-200">Redeemed</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'upcoming' ? 'bg-pink-600 text-white' : 'text-gray-400'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'templates' ? 'bg-pink-600 text-white' : 'text-gray-400'
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'history' ? 'bg-pink-600 text-white' : 'text-gray-400'
            }`}
          >
            History
          </button>
        </div>
      </div>

      {/* Upcoming Content */}
      {activeTab === 'upcoming' && (
        <div className="px-4 space-y-3">
          {upcomingBirthdays.map(customer => (
            <div key={customer.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 ${
                    customer.type === 'birthday' ? 'bg-pink-500/20' : 'bg-purple-500/20'
                  }`}>
                    {customer.type === 'birthday' ? (
                      <Cake size={24} className="text-pink-400" />
                    ) : (
                      <Heart size={24} className="text-purple-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-bold">{customer.name}</p>
                    <p className="text-gray-400 text-sm">{customer.phone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    customer.daysAway <= 3 ? 'bg-red-500/20 text-red-400' :
                    customer.daysAway <= 7 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {customer.daysAway === 0 ? 'Today!' : `${customer.daysAway} days`}
                  </span>
                  <p className="text-gray-500 text-xs mt-1">{customer.date}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Total Visits</p>
                  <p className="text-white font-medium">{customer.visits}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Total Spent</p>
                  <p className="text-white font-medium">₹{customer.totalSpent.toLocaleString()}</p>
                </div>
              </div>

              {customer.rewardStatus === 'scheduled' ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-400 mr-2" />
                      <span className="text-green-400 text-sm">Reward Scheduled</span>
                    </div>
                    <button className="text-gray-400">
                      <Edit size={14} />
                    </button>
                  </div>
                  <p className="text-white text-sm mt-1">{customer.reward}</p>
                </div>
              ) : (
                <button className="w-full bg-pink-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <Gift size={16} className="mr-2" />
                  Assign Reward
                </button>
              )}

              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <MessageSquare size={14} className="mr-1" />
                  SMS
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Smartphone size={14} className="mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Templates Content */}
      {activeTab === 'templates' && (
        <div className="px-4 space-y-3">
          <button
            onClick={() => setShowCreate(true)}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
          >
            <Plus size={20} className="mr-2" />
            Create New Template
          </button>

          {rewardTemplates.map(template => (
            <div key={template.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">{template.name}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      template.active ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {template.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm capitalize">{template.trigger}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-blue-400">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-pink-400 font-bold">{template.discount}%</p>
                  <p className="text-gray-400 text-xs">Discount</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">{template.validity}</p>
                  <p className="text-gray-400 text-xs">Days Valid</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                  <p className="text-white font-bold">₹{template.minSpent}</p>
                  <p className="text-gray-400 text-xs">Min Spent</p>
                </div>
              </div>

              {template.freeItem && (
                <div className="mt-3 bg-purple-500/10 border border-purple-500/20 rounded-lg p-2">
                  <p className="text-purple-400 text-sm flex items-center">
                    <Gift size={14} className="mr-2" />
                    {template.freeItem}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* History Content */}
      {activeTab === 'history' && (
        <div className="px-4 space-y-3">
          {sentRewards.map(reward => (
            <div key={reward.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-white font-bold">{reward.customer}</p>
                  <p className="text-gray-400 text-sm capitalize">{reward.type}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  reward.status === 'redeemed' ? 'bg-green-500/20 text-green-400' :
                  reward.status === 'expired' ? 'bg-red-500/20 text-red-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {reward.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Sent: {reward.sentOn}</span>
                <span className="text-pink-400">{reward.reward}</span>
              </div>
              {reward.orderValue && (
                <div className="mt-2 bg-green-500/10 rounded-lg p-2">
                  <p className="text-green-400 text-sm">Order: ₹{reward.orderValue}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Create Template Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Create Reward Template</h3>
                <button onClick={() => setShowCreate(false)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Template Name</label>
                <input
                  type="text"
                  placeholder="e.g., Birthday Special - VIP"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Trigger Event</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-pink-600 text-white p-3 rounded-xl flex items-center justify-center">
                    <Cake size={20} className="mr-2" />
                    Birthday
                  </button>
                  <button className="bg-gray-700 text-gray-300 p-3 rounded-xl flex items-center justify-center">
                    <Heart size={20} className="mr-2" />
                    Anniversary
                  </button>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Discount (%)</label>
                <input
                  type="number"
                  placeholder="20"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">Free Item (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., Free Dessert"
                  className="w-full bg-gray-700 text-white p-3 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Min. Total Spent</label>
                  <input
                    type="number"
                    placeholder="5000"
                    className="w-full bg-gray-700 text-white p-3 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Valid for (days)</label>
                  <input
                    type="number"
                    placeholder="7"
                    className="w-full bg-gray-700 text-white p-3 rounded-xl"
                  />
                </div>
              </div>

              <button className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold">
                Create Template
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantBirthdayRewards;
