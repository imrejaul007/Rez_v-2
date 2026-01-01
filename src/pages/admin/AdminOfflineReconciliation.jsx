import React, { useState } from 'react';
import {
  ArrowLeft, WifiOff, Wifi, Clock, RefreshCw, CheckCircle, XCircle,
  AlertTriangle, IndianRupee, Coins, Store, User, ChevronRight,
  Download, Upload, Database, Shield, Zap, FileText, Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminOfflineReconciliation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');

  // Pending offline transactions
  const [pendingTransactions, setPendingTransactions] = useState([
    {
      id: 'OFF001',
      type: 'payment',
      merchant: 'Spice Garden Restaurant',
      merchantId: 'M001',
      user: 'Rahul Sharma',
      userId: 'U001',
      amount: 850,
      coinsPromised: 85,
      offlineTime: '2024-12-28 14:32:00',
      syncTime: null,
      status: 'pending_sync',
      offlineReason: 'Network outage',
      deviceId: 'DEV-12345',
      verificationHash: 'abc123...'
    },
    {
      id: 'OFF002',
      type: 'payment',
      merchant: 'Fashion Hub',
      merchantId: 'M002',
      user: 'Priya Patel',
      userId: 'U002',
      amount: 2500,
      coinsPromised: 250,
      offlineTime: '2024-12-28 15:10:00',
      syncTime: '2024-12-28 16:30:00',
      status: 'synced_pending_verify',
      offlineReason: 'Merchant POS offline',
      deviceId: 'DEV-67890',
      verificationHash: 'def456...'
    },
    {
      id: 'OFF003',
      type: 'coin_credit',
      merchant: 'Quick Mart',
      merchantId: 'M003',
      user: 'Amit Kumar',
      userId: 'U003',
      amount: 0,
      coinsPromised: 500,
      offlineTime: '2024-12-28 12:00:00',
      syncTime: '2024-12-28 18:00:00',
      status: 'disputed',
      offlineReason: 'User app offline',
      deviceId: 'DEV-11111',
      verificationHash: 'ghi789...',
      disputeReason: 'Merchant claims transaction not completed'
    }
  ]);

  // Pending reward ledger
  const [pendingRewards, setPendingRewards] = useState([
    { id: 'REW001', userId: 'U001', userName: 'Rahul Sharma', coinsPromised: 85, expiresAt: '2024-12-30', status: 'pending', reason: 'Offline transaction at Spice Garden' },
    { id: 'REW002', userId: 'U002', userName: 'Priya Patel', coinsPromised: 250, expiresAt: '2024-12-31', status: 'pending', reason: 'Offline transaction at Fashion Hub' },
    { id: 'REW003', userId: 'U004', userName: 'Sneha Reddy', coinsPromised: 150, expiresAt: '2024-12-29', status: 'expired', reason: 'Bill upload while offline' },
  ]);

  // Reconciliation stats
  const stats = {
    totalPending: 45,
    totalAmount: 125000,
    pendingCoins: 12500,
    avgSyncTime: '4.2 hours',
    disputeRate: 3.2,
    successRate: 94.5
  };

  // Merchant pending trust
  const [merchantTrust, setMerchantTrust] = useState([
    { merchantId: 'M001', name: 'Spice Garden', pendingAmount: 3500, pendingTxns: 5, trustLevel: 'high' },
    { merchantId: 'M002', name: 'Fashion Hub', pendingAmount: 8500, pendingTxns: 3, trustLevel: 'medium' },
    { merchantId: 'M003', name: 'Quick Mart', pendingAmount: 15000, pendingTxns: 12, trustLevel: 'low' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending_sync': return 'bg-yellow-500';
      case 'synced_pending_verify': return 'bg-blue-500';
      case 'verified': return 'bg-green-500';
      case 'disputed': return 'bg-red-500';
      case 'expired': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending_sync': return 'Awaiting Sync';
      case 'synced_pending_verify': return 'Synced - Verifying';
      case 'verified': return 'Verified';
      case 'disputed': return 'Disputed';
      case 'expired': return 'Expired';
      default: return status;
    }
  };

  const getTrustColor = (level) => {
    switch (level) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <WifiOff size={24} className="mr-2" />
                Offline Reconciliation Engine
              </h1>
              <p className="text-gray-300 text-sm">Sync & verify offline transactions</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <RefreshCw size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{stats.totalPending}</p>
            <p className="text-xs text-gray-300">Pending Txns</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">₹{(stats.totalAmount/1000).toFixed(0)}K</p>
            <p className="text-xs text-gray-300">Pending Amount</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{stats.pendingCoins.toLocaleString()}</p>
            <p className="text-xs text-gray-300">Pending Coins</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-700">
        {[
          { id: 'pending', label: 'Pending Sync' },
          { id: 'rewards', label: 'Coin Promises' },
          { id: 'merchants', label: 'Merchant Trust' },
          { id: 'settings', label: 'Settings' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-slate-400 border-b-2 border-slate-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {/* Pending Transactions Tab */}
        {activeTab === 'pending' && (
          <div className="space-y-3">
            {/* Queue Actions */}
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center">
                <RefreshCw size={18} className="mr-2" />
                Force Sync All
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium flex items-center justify-center">
                <Download size={18} className="mr-2" />
                Export Queue
              </button>
            </div>

            {pendingTransactions.map(txn => (
              <div key={txn.id} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${
                txn.status === 'disputed' ? 'border-red-500' :
                txn.status === 'pending_sync' ? 'border-yellow-500' :
                'border-blue-500'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <WifiOff size={20} className="text-gray-400 mr-2" />
                    <span className="text-white font-medium">{txn.id}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded text-white ${getStatusColor(txn.status)}`}>
                    {getStatusLabel(txn.status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Merchant</p>
                    <p className="text-white">{txn.merchant}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">User</p>
                    <p className="text-white">{txn.user}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Amount</p>
                    <p className="text-green-400 font-bold">₹{txn.amount}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2">
                    <p className="text-gray-400 text-xs">Coins Promised</p>
                    <p className="text-yellow-400 font-bold">{txn.coinsPromised}</p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-400">Offline Time</span>
                    <span className="text-white">{txn.offlineTime}</span>
                  </div>
                  {txn.syncTime && (
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-gray-400">Sync Time</span>
                      <span className="text-white">{txn.syncTime}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Reason</span>
                    <span className="text-white">{txn.offlineReason}</span>
                  </div>
                </div>

                {txn.disputeReason && (
                  <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 mb-3">
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertTriangle size={14} className="mr-2" />
                      {txn.disputeReason}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                  {txn.status === 'pending_sync' && (
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm">
                      Force Sync
                    </button>
                  )}
                  {txn.status === 'synced_pending_verify' && (
                    <>
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm">
                        Verify
                      </button>
                      <button className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm">
                        Reject
                      </button>
                    </>
                  )}
                  {txn.status === 'disputed' && (
                    <button className="flex-1 bg-yellow-600 text-white py-2 rounded-lg text-sm">
                      Resolve Dispute
                    </button>
                  )}
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    <FileText size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pending Rewards Tab */}
        {activeTab === 'rewards' && (
          <div className="space-y-4">
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-4">
              <h3 className="text-yellow-400 font-bold flex items-center mb-2">
                <Coins size={20} className="mr-2" />
                Temporary Coin Promises
              </h3>
              <p className="text-gray-400 text-sm">
                Coins promised during offline transactions that haven't been verified yet. These will auto-expire if not reconciled.
              </p>
            </div>

            {pendingRewards.map(reward => (
              <div key={reward.id} className={`bg-gray-800 rounded-xl p-4 ${reward.status === 'expired' ? 'opacity-50' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center mr-3">
                      <Coins size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{reward.userName}</p>
                      <p className="text-gray-400 text-xs">{reward.userId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 font-bold text-xl">{reward.coinsPromised}</p>
                    <p className="text-gray-400 text-xs">coins promised</p>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs mb-1">Reason</p>
                  <p className="text-white text-sm">{reward.reason}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Clock size={14} className="text-gray-400 mr-1" />
                    <span className={reward.status === 'expired' ? 'text-red-400' : 'text-gray-400'}>
                      {reward.status === 'expired' ? 'Expired' : `Expires: ${reward.expiresAt}`}
                    </span>
                  </div>
                  {reward.status !== 'expired' && (
                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                        Credit Now
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
                        Void
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Merchant Trust Tab */}
        {activeTab === 'merchants' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-2">Merchant Pending Trust</h3>
              <p className="text-gray-400 text-sm">
                Merchants with pending offline transactions. High pending amounts affect trust level.
              </p>
            </div>

            {merchantTrust.map(merchant => (
              <div key={merchant.merchantId} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                      <Store size={20} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{merchant.name}</p>
                      <p className="text-gray-400 text-xs">{merchant.merchantId}</p>
                    </div>
                  </div>
                  <span className={`font-bold capitalize ${getTrustColor(merchant.trustLevel)}`}>
                    {merchant.trustLevel}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Pending Amount</p>
                    <p className="text-white font-bold">₹{merchant.pendingAmount.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Pending Transactions</p>
                    <p className="text-white font-bold">{merchant.pendingTxns}</p>
                  </div>
                </div>

                {merchant.trustLevel === 'low' && (
                  <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-3 mt-3">
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertTriangle size={14} className="mr-2" />
                      High pending volume - Offline transactions require manual approval
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-4">Offline Transaction Settings</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">Max Offline Transaction Amount</label>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">₹</span>
                    <input
                      type="number"
                      defaultValue={5000}
                      className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">Max Coins Per Offline Transaction</label>
                  <input
                    type="number"
                    defaultValue={500}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">Promise Expiry (hours)</label>
                  <input
                    type="number"
                    defaultValue={72}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">Auto-Sync Interval (minutes)</label>
                  <input
                    type="number"
                    defaultValue={15}
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg"
                  />
                </div>

                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-4">
                  <div>
                    <p className="text-white font-medium">Auto-Verify Trusted Merchants</p>
                    <p className="text-gray-400 text-xs">Automatically verify offline txns from high-trust merchants</p>
                  </div>
                  <button className="w-12 h-6 rounded-full bg-green-500">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-4">
                  <div>
                    <p className="text-white font-medium">Require Double Verification</p>
                    <p className="text-gray-400 text-xs">Both merchant and user must confirm offline transactions</p>
                  </div>
                  <button className="w-12 h-6 rounded-full bg-gray-600">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full bg-slate-600 text-white py-4 rounded-xl font-bold">
              Save Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOfflineReconciliation;
