import React, { useState } from 'react';
import {
  ArrowLeft, CreditCard, TrendingUp, Users, Calendar,
  CheckCircle, XCircle, AlertCircle, Clock, ChevronRight,
  ArrowUpRight, ArrowDownRight, RefreshCw, Pause, Play,
  Settings, Filter, Search, Download, Bell, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantSubscriptionPlans = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('plans');
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showMigrationModal, setShowMigrationModal] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

  const stats = {
    activeSubscribers: 456,
    mrr: 125600,
    churnRate: 2.3,
    avgLifetime: 8.5,
    upgrades: 23,
    downgrades: 5
  };

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 199,
      interval: 'monthly',
      features: ['5 Orders/day', 'Basic Analytics', 'Email Support'],
      subscribers: 156,
      color: 'gray'
    },
    {
      id: 2,
      name: 'Pro',
      price: 499,
      interval: 'monthly',
      features: ['50 Orders/day', 'Advanced Analytics', 'Priority Support', 'WhatsApp Integration'],
      subscribers: 234,
      color: 'blue',
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 999,
      interval: 'monthly',
      features: ['Unlimited Orders', 'Custom Reports', '24/7 Support', 'API Access', 'Dedicated Account Manager'],
      subscribers: 66,
      color: 'purple'
    },
    {
      id: 4,
      name: 'Annual Pro',
      price: 4999,
      interval: 'yearly',
      features: ['All Pro features', '2 months free', 'Priority onboarding'],
      subscribers: 45,
      color: 'green'
    }
  ];

  const subscribers = [
    {
      id: 1,
      name: 'Rahul Electronics',
      phone: '+91 98765 43210',
      plan: 'Pro',
      startDate: '2024-03-15',
      nextBilling: '2024-12-15',
      status: 'active',
      amount: 499,
      paymentMethod: 'UPI Auto-pay'
    },
    {
      id: 2,
      name: 'Priya Fashions',
      phone: '+91 87654 32109',
      plan: 'Basic',
      startDate: '2024-06-01',
      nextBilling: '2024-12-01',
      status: 'active',
      amount: 199,
      paymentMethod: 'Card'
    },
    {
      id: 3,
      name: 'Amit Groceries',
      phone: '+91 76543 21098',
      plan: 'Enterprise',
      startDate: '2024-01-01',
      nextBilling: '2024-12-01',
      status: 'payment_due',
      amount: 999,
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 4,
      name: 'Quick Mart',
      phone: '+91 65432 10987',
      plan: 'Pro',
      startDate: '2024-08-15',
      nextBilling: '2024-12-15',
      status: 'paused',
      amount: 499,
      paymentMethod: 'UPI Auto-pay'
    },
    {
      id: 5,
      name: 'City Bazaar',
      phone: '+91 54321 09876',
      plan: 'Annual Pro',
      startDate: '2024-01-01',
      nextBilling: '2025-01-01',
      status: 'active',
      amount: 4999,
      paymentMethod: 'Card'
    }
  ];

  const migrationHistory = [
    {
      id: 1,
      subscriber: 'Tech Solutions',
      from: 'Basic',
      to: 'Pro',
      type: 'upgrade',
      date: '2024-11-01',
      proration: 150,
      status: 'completed'
    },
    {
      id: 2,
      subscriber: 'Small Shop',
      from: 'Pro',
      to: 'Basic',
      type: 'downgrade',
      date: '2024-10-28',
      proration: -200,
      status: 'completed'
    },
    {
      id: 3,
      subscriber: 'Big Store',
      from: 'Pro',
      to: 'Enterprise',
      type: 'upgrade',
      date: '2024-10-25',
      proration: 250,
      status: 'completed'
    }
  ];

  const failedPayments = [
    {
      id: 1,
      subscriber: 'Amit Groceries',
      amount: 999,
      dueDate: '2024-11-01',
      attempts: 3,
      lastError: 'Insufficient funds',
      status: 'pending_retry'
    },
    {
      id: 2,
      subscriber: 'Local Store',
      amount: 499,
      dueDate: '2024-10-28',
      attempts: 2,
      lastError: 'Card expired',
      status: 'action_required'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/20 text-green-400';
      case 'paused':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'payment_due':
        return 'bg-red-500/20 text-red-400';
      case 'cancelled':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <CreditCard size={24} className="mr-2" />
                Subscription Plans
              </h1>
              <p className="text-violet-200 text-sm">Plan management & migrations</p>
            </div>
          </div>
          <button
            onClick={() => setShowPlanModal(true)}
            className="bg-white/20 px-3 py-1.5 rounded-lg text-sm"
          >
            + New Plan
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeSubscribers}</p>
            <p className="text-xs text-violet-200">Active</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.mrr/1000).toFixed(1)}K</p>
            <p className="text-xs text-violet-200">MRR</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-300">{stats.churnRate}%</p>
            <p className="text-xs text-violet-200">Churn</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1 overflow-x-auto">
          {[
            { id: 'plans', label: 'Plans' },
            { id: 'subscribers', label: 'Subscribers' },
            { id: 'migrations', label: 'Migrations' },
            { id: 'failures', label: 'Failed' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-violet-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
              {tab.id === 'failures' && failedPayments.length > 0 && (
                <span className="ml-1 w-4 h-4 bg-red-500 rounded-full text-xs inline-flex items-center justify-center">
                  {failedPayments.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plans Tab */}
      {activeTab === 'plans' && (
        <div className="px-4 space-y-4">
          {plans.map(plan => (
            <div key={plan.id} className={`bg-gray-800 rounded-xl p-4 ${plan.popular ? 'border-2 border-violet-500' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-white font-bold text-lg">{plan.name}</h3>
                    {plan.popular && (
                      <span className="ml-2 px-2 py-0.5 bg-violet-500 text-white rounded text-xs">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {plan.subscribers} subscribers
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">₹{plan.price}</p>
                  <p className="text-gray-400 text-sm">/{plan.interval}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <CheckCircle size={14} className="text-green-400 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                  Edit Plan
                </button>
                <button className="flex-1 bg-violet-600 text-white py-2 rounded-lg text-sm">
                  View Subscribers
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Subscribers Tab */}
      {activeTab === 'subscribers' && (
        <div className="px-4 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search subscribers..."
              className="w-full bg-gray-800 rounded-xl pl-10 pr-4 py-3 text-white"
            />
          </div>

          {subscribers.map(sub => (
            <div key={sub.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold">{sub.name}</h3>
                  <p className="text-gray-400 text-sm">{sub.phone}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs ${getStatusColor(sub.status)}`}>
                  {sub.status.replace('_', ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Plan</p>
                  <p className="text-white font-medium">{sub.plan}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Amount</p>
                  <p className="text-white font-medium">₹{sub.amount}/mo</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Started</p>
                  <p className="text-white font-medium">{sub.startDate}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-2">
                  <p className="text-gray-400 text-xs">Next Billing</p>
                  <p className="text-white font-medium">{sub.nextBilling}</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedSubscriber(sub);
                    setShowMigrationModal(true);
                  }}
                  className="flex-1 bg-violet-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                >
                  <RefreshCw size={14} className="mr-1" />
                  Change Plan
                </button>
                <button className="p-2 bg-gray-700 rounded-lg">
                  {sub.status === 'paused' ? (
                    <Play size={18} className="text-green-400" />
                  ) : (
                    <Pause size={18} className="text-yellow-400" />
                  )}
                </button>
                <button className="p-2 bg-gray-700 rounded-lg">
                  <Settings size={18} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Migrations Tab */}
      {activeTab === 'migrations' && (
        <div className="px-4 space-y-4">
          {/* Migration Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
              <ArrowUpRight size={24} className="text-green-400 mx-auto mb-1" />
              <p className="text-white font-bold text-xl">{stats.upgrades}</p>
              <p className="text-green-400 text-sm">Upgrades this month</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
              <ArrowDownRight size={24} className="text-red-400 mx-auto mb-1" />
              <p className="text-white font-bold text-xl">{stats.downgrades}</p>
              <p className="text-red-400 text-sm">Downgrades this month</p>
            </div>
          </div>

          {/* Migration History */}
          <h3 className="text-white font-bold">Recent Migrations</h3>
          {migrationHistory.map(migration => (
            <div key={migration.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{migration.subscriber}</h4>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  migration.type === 'upgrade' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {migration.type}
                </span>
              </div>

              <div className="flex items-center text-sm mb-2">
                <span className="text-gray-400">{migration.from}</span>
                <ChevronRight size={16} className="text-gray-500 mx-2" />
                <span className="text-white font-medium">{migration.to}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{migration.date}</span>
                <span className={migration.proration > 0 ? 'text-green-400' : 'text-red-400'}>
                  {migration.proration > 0 ? '+' : ''}₹{migration.proration} proration
                </span>
              </div>
            </div>
          ))}

          {/* Proration Info */}
          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
            <h4 className="text-violet-400 font-medium mb-2">Proration Logic</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Upgrades: Charge difference for remaining days</li>
              <li>• Downgrades: Credit difference to next billing</li>
              <li>• Mid-cycle changes: Prorated automatically</li>
            </ul>
          </div>
        </div>
      )}

      {/* Failed Payments Tab */}
      {activeTab === 'failures' && (
        <div className="px-4 space-y-4">
          {failedPayments.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
              <p className="text-white font-medium">No failed payments!</p>
              <p className="text-gray-400 text-sm">All subscriptions are up to date</p>
            </div>
          ) : (
            <>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-start">
                  <AlertCircle size={20} className="text-red-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-medium">{failedPayments.length} Failed Payments</p>
                    <p className="text-gray-300 text-sm">Requires attention to prevent churn</p>
                  </div>
                </div>
              </div>

              {failedPayments.map(payment => (
                <div key={payment.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold">{payment.subscriber}</h3>
                      <p className="text-gray-400 text-sm">Due: {payment.dueDate}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      payment.status === 'action_required' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {payment.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Amount</p>
                      <p className="text-white font-medium">₹{payment.amount}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Attempts</p>
                      <p className="text-white font-medium">{payment.attempts}/5</p>
                    </div>
                  </div>

                  <div className="bg-red-500/10 rounded-lg p-2 mb-3">
                    <p className="text-red-400 text-sm">
                      <XCircle size={14} className="inline mr-1" />
                      {payment.lastError}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm">
                      Send Reminder
                    </button>
                    <button className="flex-1 bg-violet-600 text-white py-2 rounded-lg text-sm">
                      Retry Now
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Plan Migration Modal */}
      {showMigrationModal && selectedSubscriber && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Change Subscription Plan</h3>

            <div className="bg-gray-700 rounded-xl p-4 mb-4">
              <p className="text-gray-400 text-sm">Subscriber</p>
              <p className="text-white font-bold">{selectedSubscriber.name}</p>
              <p className="text-gray-400 text-sm mt-2">Current Plan</p>
              <p className="text-violet-400 font-medium">{selectedSubscriber.plan} - ₹{selectedSubscriber.amount}/mo</p>
            </div>

            <p className="text-gray-400 text-sm mb-3">Select New Plan</p>
            <div className="space-y-3 mb-4">
              {plans.filter(p => p.name !== selectedSubscriber.plan).map(plan => (
                <button
                  key={plan.id}
                  className="w-full bg-gray-700 rounded-xl p-4 text-left border-2 border-transparent hover:border-violet-500"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold">{plan.name}</h4>
                      <p className="text-gray-400 text-sm">₹{plan.price}/{plan.interval}</p>
                    </div>
                    <div className="text-right">
                      {plan.price > selectedSubscriber.amount ? (
                        <span className="text-green-400 text-sm flex items-center">
                          <ArrowUpRight size={14} className="mr-1" />
                          Upgrade
                        </span>
                      ) : (
                        <span className="text-red-400 text-sm flex items-center">
                          <ArrowDownRight size={14} className="mr-1" />
                          Downgrade
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-4">
              <h4 className="text-violet-400 font-medium mb-2">Proration Preview</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Days remaining in cycle</span>
                <span className="text-white">15 days</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-300">Prorated amount</span>
                <span className="text-green-400">+₹250</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowMigrationModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-violet-600 text-white py-3 rounded-xl font-bold">
                Confirm Change
              </button>
            </div>
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantSubscriptionPlans;
