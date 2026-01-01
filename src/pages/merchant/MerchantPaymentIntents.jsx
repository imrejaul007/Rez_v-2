import React, { useState } from 'react';
import {
  ArrowLeft, CreditCard, Clock, CheckCircle, XCircle, AlertCircle,
  RefreshCw, Search, Filter, Eye, TrendingUp, DollarSign,
  Smartphone, Building2, ChevronRight, Copy
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantPaymentIntents = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedIntent, setSelectedIntent] = useState(null);

  const stats = {
    total: 1245,
    succeeded: 1180,
    pending: 35,
    failed: 30,
    successRate: 94.8,
    totalAmount: 4567800
  };

  const paymentIntents = [
    {
      id: 'pi_1234567890abcdef',
      amount: 2450,
      currency: 'INR',
      status: 'succeeded',
      paymentMethod: 'upi',
      customer: 'Rahul Sharma',
      orderId: 'ORD-2024-001',
      created: '2024-01-17 14:30:00',
      captured: '2024-01-17 14:30:45',
      metadata: { items: 3, type: 'food' }
    },
    {
      id: 'pi_2345678901bcdefg',
      amount: 890,
      currency: 'INR',
      status: 'pending',
      paymentMethod: 'card',
      customer: 'Priya Patel',
      orderId: 'ORD-2024-002',
      created: '2024-01-17 14:25:00',
      captured: null,
      metadata: { items: 1, type: 'retail' }
    },
    {
      id: 'pi_3456789012cdefgh',
      amount: 1650,
      currency: 'INR',
      status: 'requires_capture',
      paymentMethod: 'card',
      customer: 'Amit Kumar',
      orderId: 'ORD-2024-003',
      created: '2024-01-17 14:20:00',
      captured: null,
      expiresAt: '2024-01-24 14:20:00',
      metadata: { items: 2, type: 'food' }
    },
    {
      id: 'pi_4567890123defghi',
      amount: 3200,
      currency: 'INR',
      status: 'failed',
      paymentMethod: 'upi',
      customer: 'Sneha Reddy',
      orderId: 'ORD-2024-004',
      created: '2024-01-17 14:15:00',
      captured: null,
      failureReason: 'insufficient_funds',
      metadata: { items: 4, type: 'grocery' }
    },
    {
      id: 'pi_5678901234efghij',
      amount: 5800,
      currency: 'INR',
      status: 'succeeded',
      paymentMethod: 'netbanking',
      customer: 'Vikram Singh',
      orderId: 'ORD-2024-005',
      created: '2024-01-17 14:10:00',
      captured: '2024-01-17 14:11:30',
      metadata: { items: 6, type: 'electronics' }
    },
    {
      id: 'pi_6789012345fghijk',
      amount: 450,
      currency: 'INR',
      status: 'canceled',
      paymentMethod: 'wallet',
      customer: 'Neha Gupta',
      orderId: 'ORD-2024-006',
      created: '2024-01-17 14:05:00',
      captured: null,
      cancelReason: 'customer_request',
      metadata: { items: 1, type: 'food' }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'succeeded': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'requires_capture': return 'bg-blue-500/20 text-blue-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      case 'canceled': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'succeeded': return <CheckCircle size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'requires_capture': return <AlertCircle size={16} />;
      case 'failed': return <XCircle size={16} />;
      case 'canceled': return <XCircle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'upi': return <Smartphone size={16} />;
      case 'card': return <CreditCard size={16} />;
      case 'netbanking': return <Building2 size={16} />;
      default: return <DollarSign size={16} />;
    }
  };

  const filteredIntents = activeTab === 'all'
    ? paymentIntents
    : paymentIntents.filter(pi => pi.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Payment Intents</h1>
              <p className="text-indigo-200 text-sm">Track payment lifecycle</p>
            </div>
          </div>
          <RefreshCw size={24} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.total}</p>
            <p className="text-xs text-indigo-200">Total</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">{stats.succeeded}</p>
            <p className="text-xs text-indigo-200">Succeeded</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-yellow-400">{stats.pending}</p>
            <p className="text-xs text-indigo-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.successRate}%</p>
            <p className="text-xs text-indigo-200">Success</p>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="p-4">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID, customer, order..."
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
            />
          </div>
          <button className="bg-gray-800 text-white px-4 rounded-xl">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {[
            { id: 'all', label: 'All' },
            { id: 'succeeded', label: 'Succeeded' },
            { id: 'pending', label: 'Pending' },
            { id: 'requires_capture', label: 'Requires Capture' },
            { id: 'failed', label: 'Failed' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Intents List */}
      <div className="px-4 space-y-3">
        {filteredIntents.map(intent => (
          <div
            key={intent.id}
            className="bg-gray-800 rounded-xl p-4"
            onClick={() => setSelectedIntent(intent)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  {getPaymentMethodIcon(intent.paymentMethod)}
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="text-white font-bold">₹{intent.amount.toLocaleString()}</p>
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs flex items-center ${getStatusColor(intent.status)}`}>
                      {getStatusIcon(intent.status)}
                      <span className="ml-1">{intent.status.replace('_', ' ')}</span>
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{intent.customer}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">{intent.orderId}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 capitalize">{intent.paymentMethod}</span>
              </div>
              <span className="text-gray-500 text-xs">{intent.created}</span>
            </div>

            {intent.status === 'requires_capture' && (
              <div className="mt-3 flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                  Capture
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm font-medium">
                  Cancel
                </button>
              </div>
            )}

            {intent.status === 'failed' && (
              <div className="mt-3 bg-red-500/10 border border-red-500/20 rounded-lg p-2">
                <p className="text-red-400 text-sm">
                  Failed: {intent.failureReason?.replace('_', ' ')}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Intent Detail Modal */}
      {selectedIntent && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-end">
          <div className="bg-gray-800 rounded-t-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-bold">Payment Intent</h3>
                <button onClick={() => setSelectedIntent(null)} className="text-gray-400">
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Intent ID */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">Intent ID</p>
                <div className="flex items-center justify-between">
                  <code className="text-white font-mono text-sm">{selectedIntent.id}</code>
                  <button className="text-indigo-400">
                    <Copy size={16} />
                  </button>
                </div>
              </div>

              {/* Amount & Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Amount</p>
                  <p className="text-2xl font-bold text-white">₹{selectedIntent.amount.toLocaleString()}</p>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Status</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getStatusColor(selectedIntent.status)}`}>
                    {getStatusIcon(selectedIntent.status)}
                    <span className="ml-1 capitalize">{selectedIntent.status.replace('_', ' ')}</span>
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="bg-gray-700/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer</span>
                  <span className="text-white">{selectedIntent.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Order ID</span>
                  <span className="text-white">{selectedIntent.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Method</span>
                  <span className="text-white capitalize">{selectedIntent.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Created</span>
                  <span className="text-white">{selectedIntent.created}</span>
                </div>
                {selectedIntent.captured && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Captured</span>
                    <span className="text-green-400">{selectedIntent.captured}</span>
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="bg-gray-700/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-2">Metadata</p>
                <pre className="text-gray-300 text-sm font-mono">
                  {JSON.stringify(selectedIntent.metadata, null, 2)}
                </pre>
              </div>

              {/* Actions */}
              {selectedIntent.status === 'requires_capture' && (
                <div className="flex space-x-3">
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold">
                    Capture Payment
                  </button>
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold">
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantPaymentIntents;
