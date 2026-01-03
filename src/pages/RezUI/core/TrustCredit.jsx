import React, { useState } from 'react';
import {
  ArrowLeft, Shield, CreditCard, Wallet, TrendingUp, Clock, CheckCircle,
  Star, Zap, Lock, Gift, ChevronRight, AlertCircle, DollarSign, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TrustCredit = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('credit');

  const trustScore = {
    score: 847,
    tier: 'Gold',
    percentile: 92,
    creditLimit: 25000,
    usedCredit: 8500,
    availableCredit: 16500,
    payLaterLimit: 5000,
    trustAge: '2.3 years'
  };

  const creditBenefits = [
    {
      tier: 'Bronze',
      minScore: 500,
      creditLimit: '₹5,000',
      payLater: '₹1,000',
      commission: 'Standard',
      features: ['Basic credit', '7-day pay later']
    },
    {
      tier: 'Silver',
      minScore: 650,
      creditLimit: '₹15,000',
      payLater: '₹3,000',
      commission: '5% lower',
      features: ['Extended credit', '15-day pay later', 'Priority support']
    },
    {
      tier: 'Gold',
      minScore: 800,
      creditLimit: '₹50,000',
      payLater: '₹10,000',
      commission: '10% lower',
      features: ['Premium credit', '30-day pay later', 'Zero deposit', 'Instant refunds'],
      current: true
    },
    {
      tier: 'Platinum',
      minScore: 900,
      creditLimit: '₹1,00,000',
      payLater: '₹25,000',
      commission: '15% lower',
      features: ['Unlimited credit', '45-day pay later', 'Concierge service', 'Exclusive access']
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      merchant: 'Punjabi Tadka',
      amount: 850,
      type: 'pay_later',
      status: 'pending',
      dueDate: '15 Jan 2025',
      daysLeft: 12
    },
    {
      id: 2,
      merchant: 'Zepto Grocery',
      amount: 1240,
      type: 'pay_later',
      status: 'pending',
      dueDate: '18 Jan 2025',
      daysLeft: 15
    },
    {
      id: 3,
      merchant: 'Urban Salon',
      amount: 2500,
      type: 'credit',
      status: 'paid',
      paidDate: '28 Dec 2024'
    },
    {
      id: 4,
      merchant: 'DMart',
      amount: 3200,
      type: 'pay_later',
      status: 'paid',
      paidDate: '25 Dec 2024'
    }
  ];

  const trustActions = [
    {
      action: 'Complete 10 more orders',
      impact: '+15 trust score',
      progress: 7,
      target: 10
    },
    {
      action: 'Pay all dues on time',
      impact: '+20 trust score',
      progress: 1,
      target: 1,
      completed: true
    },
    {
      action: 'Add UPI autopay',
      impact: '+25 trust score',
      progress: 0,
      target: 1
    },
    {
      action: 'Verify Aadhaar',
      impact: '+50 trust score',
      progress: 1,
      target: 1,
      completed: true
    }
  ];

  const merchantBenefits = [
    {
      merchant: 'All Restaurants',
      benefit: 'Pay after eating',
      limit: '₹2,000/order'
    },
    {
      merchant: 'Salons & Spas',
      benefit: 'Zero deposit booking',
      limit: 'Unlimited'
    },
    {
      merchant: 'Grocery Stores',
      benefit: '15-day credit',
      limit: '₹5,000'
    },
    {
      merchant: 'Electronics',
      benefit: 'EMI without card',
      limit: '₹50,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Trust Credit</h1>
              <p className="text-amber-200 text-sm">Your reputation is your currency</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{trustScore.score}</p>
            <p className="text-amber-200 text-sm">Trust Score</p>
          </div>
        </div>

        {/* Trust Tier Card */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <Award size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">{trustScore.tier} Member</p>
                <p className="text-amber-100 text-sm">Top {100 - trustScore.percentile}% of users</p>
              </div>
            </div>
            <Shield size={32} className="text-white/50" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-amber-100 text-xs">Credit Limit</p>
              <p className="text-xl font-bold">₹{trustScore.creditLimit.toLocaleString()}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-amber-100 text-xs">Pay Later Limit</p>
              <p className="text-xl font-bold">₹{trustScore.payLaterLimit.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Usage */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-bold">Credit Usage</h3>
            <span className="text-green-400">₹{trustScore.availableCredit.toLocaleString()} available</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full mb-2">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
              style={{ width: `${(trustScore.usedCredit / trustScore.creditLimit) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Used: ₹{trustScore.usedCredit.toLocaleString()}</span>
            <span>Limit: ₹{trustScore.creditLimit.toLocaleString()}</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-800 rounded-xl p-1 mb-4">
          {[
            { id: 'credit', label: 'My Credit' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'tiers', label: 'Tiers' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white'
                  : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'credit' && (
          <>
            {/* Pay Later Outstanding */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <Clock size={18} className="mr-2 text-amber-400" />
                Pay Later Outstanding
              </h3>
              <div className="space-y-3">
                {recentTransactions.filter(t => t.status === 'pending').map(txn => (
                  <div key={txn.id} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <div>
                      <p className="text-white font-medium">{txn.merchant}</p>
                      <p className="text-gray-400 text-sm">Due: {txn.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">₹{txn.amount}</p>
                      <p className="text-yellow-400 text-sm">{txn.daysLeft} days left</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg mt-3 font-medium">
                Pay All Outstanding (₹2,090)
              </button>
            </div>

            {/* Increase Trust Score */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3 flex items-center">
                <TrendingUp size={18} className="mr-2 text-green-400" />
                Increase Your Credit Limit
              </h3>
              <div className="space-y-3">
                {trustActions.map((action, idx) => (
                  <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {action.completed ? (
                          <CheckCircle size={18} className="text-green-400 mr-2" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-gray-500 rounded-full mr-2" />
                        )}
                        <span className={action.completed ? 'text-gray-400 line-through' : 'text-white'}>
                          {action.action}
                        </span>
                      </div>
                      <span className="text-green-400 text-sm">{action.impact}</span>
                    </div>
                    {!action.completed && (
                      <div className="ml-7">
                        <div className="h-1.5 bg-gray-600 rounded-full">
                          <div
                            className="h-full bg-amber-500 rounded-full"
                            style={{ width: `${(action.progress / action.target) * 100}%` }}
                          />
                        </div>
                        <p className="text-gray-500 text-xs mt-1">{action.progress}/{action.target}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'benefits' && (
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 rounded-xl p-4 border border-amber-500/30 mb-4">
              <h3 className="text-amber-400 font-bold mb-2">Your Trust Unlocks</h3>
              <p className="text-gray-300 text-sm">
                High trust score = Pay later, Zero deposits, Lower prices
              </p>
            </div>

            {merchantBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{benefit.merchant}</h4>
                  <p className="text-amber-400 text-sm">{benefit.benefit}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs">Limit</p>
                  <p className="text-white font-medium">{benefit.limit}</p>
                </div>
              </div>
            ))}

            <div className="bg-gray-800 rounded-xl p-4 mt-4">
              <h3 className="text-white font-bold mb-3">Gold Member Perks</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-2" />
                  <span>10% lower commission for merchants you visit</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-2" />
                  <span>Instant refunds (no waiting period)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-2" />
                  <span>Zero deposit on all bookings</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle size={16} className="text-green-400 mr-2" />
                  <span>Priority dispute resolution</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tiers' && (
          <div className="space-y-3">
            {creditBenefits.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-4 ${
                  tier.current
                    ? 'bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border border-amber-500'
                    : 'bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                      tier.tier === 'Bronze' ? 'bg-orange-700' :
                      tier.tier === 'Silver' ? 'bg-gray-400' :
                      tier.tier === 'Gold' ? 'bg-yellow-500' :
                      'bg-gradient-to-r from-gray-300 to-gray-100'
                    }`}>
                      <Award size={20} className={tier.tier === 'Platinum' ? 'text-gray-800' : 'text-white'} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{tier.tier}</h4>
                      <p className="text-gray-400 text-sm">Score: {tier.minScore}+</p>
                    </div>
                  </div>
                  {tier.current && (
                    <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3 text-center text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Credit</p>
                    <p className="text-white font-medium">{tier.creditLimit}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Pay Later</p>
                    <p className="text-white font-medium">{tier.payLater}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Commission</p>
                    <p className="text-green-400 font-medium">{tier.commission}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {tier.features.map((feature, fIdx) => (
                    <span key={fIdx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustCredit;
