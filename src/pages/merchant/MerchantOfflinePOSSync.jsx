import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Wifi, WifiOff, Cloud, CloudOff, RefreshCw,
  CheckCircle, AlertTriangle, Clock, Database, Upload,
  Download, Zap, Shield, Server, HardDrive, Activity,
  AlertCircle, Settings, Info, ChevronRight, Loader2
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';

const MerchantOfflinePOSSync = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [syncStatus, setSyncStatus] = useState('synced'); // synced, syncing, pending, error
  const [lastSync, setLastSync] = useState(new Date());

  // Simulated offline data
  const [offlineData, setOfflineData] = useState({
    pendingTransactions: 3,
    pendingInventoryUpdates: 7,
    pendingCoinRedemptions: 2,
    pendingOfferClaims: 5,
    totalPendingAmount: 12450,
    localStorageUsed: 45, // MB
    localStorageMax: 500 // MB
  });

  const [syncHistory, setSyncHistory] = useState([
    { id: 1, type: 'transactions', count: 15, status: 'success', time: '2 mins ago', amount: 34500 },
    { id: 2, type: 'inventory', count: 8, status: 'success', time: '5 mins ago' },
    { id: 3, type: 'coins', count: 12, status: 'success', time: '10 mins ago' },
    { id: 4, type: 'offers', count: 3, status: 'warning', time: '15 mins ago', issue: '1 expired offer skipped' },
  ]);

  const [conflicts, setConflicts] = useState([
    {
      id: 1,
      type: 'inventory',
      item: 'Maggi Noodles 2-Min',
      localValue: 45,
      serverValue: 42,
      reason: 'Sold 3 units offline while server updated stock',
      timestamp: '10:30 AM'
    }
  ]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleManualSync = () => {
    if (!isOnline) return;
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('synced');
      setLastSync(new Date());
      setOfflineData(prev => ({
        ...prev,
        pendingTransactions: 0,
        pendingInventoryUpdates: 0,
        pendingCoinRedemptions: 0,
        pendingOfferClaims: 0,
        totalPendingAmount: 0
      }));
    }, 2000);
  };

  const resolveConflict = (conflictId, resolution) => {
    setConflicts(prev => prev.filter(c => c.id !== conflictId));
  };

  const totalPending = offlineData.pendingTransactions + offlineData.pendingInventoryUpdates +
    offlineData.pendingCoinRedemptions + offlineData.pendingOfferClaims;

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/merchant')} className="p-2 hover:bg-gray-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </button>
            <div>
              <h1 className="text-lg font-bold text-white">Offline Sync</h1>
              <p className="text-xs text-gray-400">Local-first POS data management</p>
            </div>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            isOnline ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
            <span className="text-sm font-medium">{isOnline ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Sync Status Banner */}
        <div className={`p-4 rounded-xl border ${
          syncStatus === 'synced' ? 'bg-green-500/10 border-green-500/30' :
          syncStatus === 'syncing' ? 'bg-blue-500/10 border-blue-500/30' :
          syncStatus === 'pending' ? 'bg-yellow-500/10 border-yellow-500/30' :
          'bg-red-500/10 border-red-500/30'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                syncStatus === 'synced' ? 'bg-green-500/20' :
                syncStatus === 'syncing' ? 'bg-blue-500/20' :
                syncStatus === 'pending' ? 'bg-yellow-500/20' :
                'bg-red-500/20'
              }`}>
                {syncStatus === 'syncing' ? (
                  <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />
                ) : syncStatus === 'synced' ? (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                ) : syncStatus === 'pending' ? (
                  <Clock className="w-6 h-6 text-yellow-400" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                )}
              </div>
              <div>
                <p className={`font-semibold ${
                  syncStatus === 'synced' ? 'text-green-400' :
                  syncStatus === 'syncing' ? 'text-blue-400' :
                  syncStatus === 'pending' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {syncStatus === 'synced' ? 'All Data Synced' :
                   syncStatus === 'syncing' ? 'Syncing Data...' :
                   syncStatus === 'pending' ? `${totalPending} Items Pending` :
                   'Sync Error'}
                </p>
                <p className="text-sm text-gray-400">
                  Last sync: {lastSync.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <button
              onClick={handleManualSync}
              disabled={!isOnline || syncStatus === 'syncing'}
              className={`p-3 rounded-xl transition-colors ${
                isOnline && syncStatus !== 'syncing'
                  ? 'bg-blue-600 hover:bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              <RefreshCw className={`w-5 h-5 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Offline Mode Explanation */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Offline-First POS</h3>
              <p className="text-sm text-gray-400 mt-1">
                Your POS works 100% offline. All transactions, inventory, coins, and offers are stored locally and sync automatically when online.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Bills', 'Inventory', 'Coins', 'Offers'].map(item => (
                  <span key={item} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {item} Work Offline
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pending Sync Items */}
        {totalPending > 0 && (
          <div className="bg-gray-800 rounded-xl border border-yellow-500/30 overflow-hidden">
            <div className="p-4 border-b border-gray-700 bg-yellow-500/10">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-yellow-400">Pending Sync</h3>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                  {totalPending} items
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-700">
              {offlineData.pendingTransactions > 0 && (
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Upload className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Transactions</p>
                      <p className="text-sm text-gray-400">
                        {offlineData.pendingTransactions} bills worth ₹{offlineData.totalPendingAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              )}
              {offlineData.pendingInventoryUpdates > 0 && (
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Inventory Updates</p>
                      <p className="text-sm text-gray-400">{offlineData.pendingInventoryUpdates} stock changes</p>
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              )}
              {offlineData.pendingCoinRedemptions > 0 && (
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Coin Redemptions</p>
                      <p className="text-sm text-gray-400">{offlineData.pendingCoinRedemptions} coin uses</p>
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              )}
              {offlineData.pendingOfferClaims > 0 && (
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Gift className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Offer Claims</p>
                      <p className="text-sm text-gray-400">{offlineData.pendingOfferClaims} offers applied</p>
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Conflicts Resolution */}
        {conflicts.length > 0 && (
          <div className="bg-gray-800 rounded-xl border border-red-500/30 overflow-hidden">
            <div className="p-4 border-b border-gray-700 bg-red-500/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h3 className="font-semibold text-red-400">Conflicts to Resolve</h3>
                </div>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                  {conflicts.length} conflicts
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-700">
              {conflicts.map(conflict => (
                <div key={conflict.id} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white font-medium">{conflict.item}</p>
                      <p className="text-sm text-gray-400">{conflict.reason}</p>
                      <p className="text-xs text-gray-500 mt-1">Detected at {conflict.timestamp}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 bg-gray-900 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Your Device</p>
                      <p className="text-xl font-bold text-blue-400">{conflict.localValue}</p>
                    </div>
                    <div className="p-3 bg-gray-900 rounded-lg text-center">
                      <p className="text-xs text-gray-400">Server</p>
                      <p className="text-xl font-bold text-green-400">{conflict.serverValue}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => resolveConflict(conflict.id, 'local')}
                      className="py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500"
                    >
                      Use My Value ({conflict.localValue})
                    </button>
                    <button
                      onClick={() => resolveConflict(conflict.id, 'server')}
                      className="py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-500"
                    >
                      Use Server ({conflict.serverValue})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Storage Status */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-gray-400" />
              <h3 className="font-semibold text-white">Local Storage</h3>
            </div>
            <span className="text-sm text-gray-400">
              {offlineData.localStorageUsed} MB / {offlineData.localStorageMax} MB
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all"
              style={{ width: `${(offlineData.localStorageUsed / offlineData.localStorageMax) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">
            Can store ~{Math.floor((offlineData.localStorageMax - offlineData.localStorageUsed) / 0.5)} more transactions offline
          </p>
        </div>

        {/* Sync History */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold text-white">Recent Sync Activity</h3>
          </div>
          <div className="divide-y divide-gray-700">
            {syncHistory.map(item => (
              <div key={item.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    item.status === 'success' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                  }`}>
                    {item.status === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-white text-sm capitalize">
                      {item.count} {item.type} synced
                      {item.amount && <span className="text-gray-400"> (₹{item.amount.toLocaleString()})</span>}
                    </p>
                    {item.issue && <p className="text-xs text-yellow-400">{item.issue}</p>}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-semibold text-white">Sync Settings</h3>
          </div>
          <div className="divide-y divide-gray-700">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white">Auto-Sync</p>
                <p className="text-sm text-gray-400">Sync when internet available</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white">Sync Interval</p>
                <p className="text-sm text-gray-400">How often to sync when online</p>
              </div>
              <span className="text-blue-400">Every 30 sec</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white">Download Rules Daily</p>
                <p className="text-sm text-gray-400">Offers, coins, inventory rules</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

// Gift icon component since we forgot to import it
const Gift = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12"></polyline>
    <rect x="2" y="7" width="20" height="5"></rect>
    <line x1="12" y1="22" x2="12" y2="7"></line>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

export default MerchantOfflinePOSSync;
