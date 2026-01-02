import React, { useState } from 'react';
import {
  ArrowLeft, AlertTriangle, RefreshCw, CreditCard, Smartphone,
  CheckCircle, XCircle, Clock, TrendingUp, DollarSign, Send,
  MessageSquare, Phone, Mail, ChevronRight, Filter, Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantFailedPayments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedPayment, setSelectedPayment] = useState(null);

  const failedPayments = [
    {
      id: 'PAY-001',
      orderId: 'ORD-2024-1234',
      customer: 'Rahul Sharma',
      phone: '9876543210',
      email: 'rahul@email.com',
      amount: 2450,
      method: 'UPI',
      failureReason: 'Transaction timeout',
      failedAt: '10 mins ago',
      attempts: 1,
      status: 'pending_retry'
    },
    {
      id: 'PAY-002',
      orderId: 'ORD-2024-1235',
      customer: 'Priya Patel',
      phone: '9876543211',
      email: 'priya@email.com',
      amount: 890,
      method: 'Card',
      failureReason: 'Insufficient funds',
      failedAt: '25 mins ago',
      attempts: 2,
      status: 'pending_retry'
    },
    {
      id: 'PAY-003',
      orderId: 'ORD-2024-1236',
      customer: 'Amit Kumar',
      phone: '9876543212',
      email: 'amit@email.com',
      amount: 1650,
      method: 'UPI',
      failureReason: 'Bank server down',
      failedAt: '1 hour ago',
      attempts: 3,
      status: 'escalated'
    },
    {
      id: 'PAY-004',
      orderId: 'ORD-2024-1230',
      customer: 'Sneha Reddy',
      phone: '9876543213',
      email: 'sneha@email.com',
      amount: 3200,
      method: 'Card',
      failureReason: 'Card declined',
      failedAt: '2 hours ago',
      attempts: 2,
      status: 'recovered',
      recoveredVia: 'UPI'
    },
    {
      id: 'PAY-005',
      orderId: 'ORD-2024-1228',
      customer: 'Vikram Singh',
      phone: '9876543214',
      email: 'vikram@email.com',
      amount: 780,
      method: 'UPI',
      failureReason: 'User cancelled',
      failedAt: '3 hours ago',
      attempts: 1,
      status: 'abandoned'
    }
  ];

  const stats = {
    pendingRecovery: 4990,
    recoveredToday: 8450,
    abandonedToday: 2340,
    recoveryRate: 78
  };

  const autoRecoverySettings = {
    enabled: true,
    retryAttempts: 3,
    retryInterval: 15, // minutes
    smsReminder: true,
    whatsappReminder: true,
    emailReminder: false
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending_retry': return 'bg-yellow-500/20 text-yellow-400';
      case 'escalated': return 'bg-orange-500/20 text-orange-400';
      case 'recovered': return 'bg-green-500/20 text-green-400';
      case 'abandoned': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredPayments = activeTab === 'all'
    ? failedPayments
    : failedPayments.filter(p => {
        if (activeTab === 'pending') return ['pending_retry', 'escalated'].includes(p.status);
        return p.status === activeTab;
      });

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Failed Payment Recovery</h1>
              <p className="text-red-200 text-sm">Recover lost revenue automatically</p>
            </div>
          </div>
          <AlertTriangle size={24} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-red-200 text-sm">Pending Recovery</span>
              <Clock size={16} className="text-yellow-400" />
            </div>
            <p className="text-2xl font-bold">₹{stats.pendingRecovery.toLocaleString()}</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-red-200 text-sm">Recovered Today</span>
              <CheckCircle size={16} className="text-green-400" />
            </div>
            <p className="text-2xl font-bold">₹{stats.recoveredToday.toLocaleString()}</p>
          </div>
        </div>

        {/* Recovery Rate */}
        <div className="mt-3 bg-white/10 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-200 text-sm">Recovery Rate</span>
            <span className="text-green-400 font-bold">{stats.recoveryRate}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${stats.recoveryRate}%` }}
            />
          </div>
        </div>
      </div>

      {/* Auto Recovery Toggle */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-bold">Auto Recovery</h3>
              <p className="text-gray-400 text-sm">Automatically retry and remind customers</p>
            </div>
            <div className={`w-12 h-6 rounded-full relative cursor-pointer ${
              autoRecoverySettings.enabled ? 'bg-green-600' : 'bg-gray-600'
            }`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                autoRecoverySettings.enabled ? 'right-1' : 'left-1'
              }`} />
            </div>
          </div>

          {autoRecoverySettings.enabled && (
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-gray-700 rounded-lg p-2">
                <p className="text-white font-medium">{autoRecoverySettings.retryAttempts}x</p>
                <p className="text-gray-400">Retries</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2">
                <p className="text-white font-medium">{autoRecoverySettings.retryInterval}m</p>
                <p className="text-gray-400">Interval</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-2">
                <p className="text-white font-medium">SMS + WA</p>
                <p className="text-gray-400">Reminders</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'pending', label: 'Pending', count: 3 },
            { id: 'recovered', label: 'Recovered', count: 1 },
            { id: 'abandoned', label: 'Abandoned', count: 1 },
            { id: 'all', label: 'All', count: 5 }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Failed Payments List */}
      <div className="px-4 space-y-3">
        {filteredPayments.map(payment => (
          <div key={payment.id} className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center">
                  <p className="text-white font-bold">{payment.customer}</p>
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                    {payment.status === 'pending_retry' ? 'Pending' :
                     payment.status === 'escalated' ? 'Escalated' :
                     payment.status === 'recovered' ? 'Recovered' : 'Abandoned'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{payment.orderId}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">₹{payment.amount.toLocaleString()}</p>
                <p className="text-gray-400 text-xs">{payment.method}</p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 mb-3">
              <p className="text-red-400 text-sm flex items-center">
                <XCircle size={14} className="mr-2" />
                {payment.failureReason}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Failed {payment.failedAt} • {payment.attempts} attempt(s)
              </p>
            </div>

            {payment.status === 'recovered' ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                <p className="text-green-400 text-sm flex items-center">
                  <CheckCircle size={14} className="mr-2" />
                  Recovered via {payment.recoveredVia}
                </p>
              </div>
            ) : payment.status !== 'abandoned' && (
              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                  <RefreshCw size={16} className="mr-1" />
                  Retry Now
                </button>
                <button className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <MessageSquare size={18} />
                </button>
                <button className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <Phone size={18} />
                </button>
                <button className="bg-gray-700 text-white px-3 py-2 rounded-lg">
                  <Send size={18} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recovery Actions */}
      <div className="p-4">
        <h3 className="text-white font-bold mb-3">Bulk Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center">
            <RefreshCw size={24} className="mx-auto mb-2 text-green-400" />
            <p className="text-sm font-medium">Retry All Pending</p>
            <p className="text-gray-400 text-xs">3 payments</p>
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center">
            <MessageSquare size={24} className="mx-auto mb-2 text-blue-400" />
            <p className="text-sm font-medium">Send Reminders</p>
            <p className="text-gray-400 text-xs">SMS + WhatsApp</p>
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center">
            <DollarSign size={24} className="mx-auto mb-2 text-purple-400" />
            <p className="text-sm font-medium">Generate Pay Links</p>
            <p className="text-gray-400 text-xs">Alternative payment</p>
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center">
            <TrendingUp size={24} className="mx-auto mb-2 text-orange-400" />
            <p className="text-sm font-medium">Recovery Report</p>
            <p className="text-gray-400 text-xs">Last 30 days</p>
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="px-4 pb-4">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <h4 className="text-blue-400 font-bold mb-2">Recovery Tips</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <CheckCircle size={14} className="text-blue-400 mr-2 mt-0.5" />
              Send payment link via WhatsApp for 3x higher recovery
            </li>
            <li className="flex items-start">
              <CheckCircle size={14} className="text-blue-400 mr-2 mt-0.5" />
              Offer alternative payment methods (UPI if Card failed)
            </li>
            <li className="flex items-start">
              <CheckCircle size={14} className="text-blue-400 mr-2 mt-0.5" />
              Best recovery window: First 30 minutes after failure
            </li>
          </ul>
        </div>
      </div>

      <MerchantNav />
    </div>
  );
};

export default MerchantFailedPayments;
