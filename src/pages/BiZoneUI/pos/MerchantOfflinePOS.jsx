import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Wifi,
  WifiOff,
  Cloud,
  CloudOff,
  Check,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Database,
  Shield,
  Clock,
  Battery,
  Zap,
  Printer,
  QrCode,
  CreditCard,
  Banknote,
  Receipt,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  Settings,
  HardDrive,
  Smartphone,
  RotateCcw,
  Save,
  FileText,
  Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantOfflinePOS = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('status');

  // ============================================
  // OFFLINE STATUS & INDICATORS
  // ============================================

  const [offlineStatus, setOfflineStatus] = useState({
    isOnline: true,
    lastSync: new Date().toISOString(),
    pendingTransactions: 0,
    localStorageUsed: 45, // MB
    localStorageMax: 500, // MB
    batteryLevel: 85,
    connectionQuality: 'good', // good, fair, poor, offline

    // Safe to Bill Indicator
    safeToSill: true,
    safetyReasons: [],

    // Sync Status
    syncInProgress: false,
    lastSyncSuccess: true,
    conflictsDetected: 0
  });

  // ============================================
  // OFFLINE LEDGER - All transactions stored locally
  // ============================================

  const [offlineLedger, setOfflineLedger] = useState([
    {
      id: 'OFF001',
      billNumber: 'B2024-0156',
      timestamp: '2024-01-15 14:32:00',
      amount: 1250,
      paymentMethod: 'cash',
      items: [
        { name: 'Cappuccino', qty: 2, price: 180, total: 360 },
        { name: 'Sandwich', qty: 1, price: 220, total: 220 },
        { name: 'Brownie', qty: 3, price: 120, total: 360 }
      ],
      tax: { cgst: 56.25, sgst: 56.25, total: 112.50 },
      syncStatus: 'synced',
      createdOffline: false,
      syncedAt: '2024-01-15 14:32:05'
    },
    {
      id: 'OFF002',
      billNumber: 'B2024-0157',
      timestamp: '2024-01-15 14:45:00',
      amount: 890,
      paymentMethod: 'upi',
      items: [
        { name: 'Cold Brew', qty: 2, price: 220, total: 440 },
        { name: 'Muffin', qty: 2, price: 150, total: 300 }
      ],
      tax: { cgst: 40.05, sgst: 40.05, total: 80.10 },
      syncStatus: 'pending',
      createdOffline: true,
      syncedAt: null
    },
    {
      id: 'OFF003',
      billNumber: 'B2024-0158',
      timestamp: '2024-01-15 15:02:00',
      amount: 2100,
      paymentMethod: 'card',
      items: [
        { name: 'Lunch Combo', qty: 3, price: 450, total: 1350 },
        { name: 'Fresh Juice', qty: 3, price: 180, total: 540 }
      ],
      tax: { cgst: 94.50, sgst: 94.50, total: 189 },
      syncStatus: 'pending',
      createdOffline: true,
      syncedAt: null
    }
  ]);

  // ============================================
  // CONFLICT RESOLUTION
  // ============================================

  const [conflicts, setConflicts] = useState([
    {
      id: 'CONF001',
      billNumber: 'B2024-0155',
      type: 'duplicate_bill',
      localVersion: {
        amount: 1500,
        timestamp: '2024-01-15 14:20:00',
        items: 4
      },
      serverVersion: {
        amount: 1450,
        timestamp: '2024-01-15 14:20:02',
        items: 4
      },
      resolution: null, // 'local', 'server', 'merge'
      detectedAt: '2024-01-15 14:25:00'
    }
  ]);

  // ============================================
  // OFFLINE CAPABILITIES
  // ============================================

  const offlineCapabilities = {
    billing: {
      enabled: true,
      description: 'Create bills without internet',
      status: 'full'
    },
    receiptPrinting: {
      enabled: true,
      description: 'Print receipts via Bluetooth/USB',
      status: 'full'
    },
    qrGeneration: {
      enabled: true,
      description: 'Generate static QR for payments',
      status: 'full'
    },
    taxCalculation: {
      enabled: true,
      description: 'Calculate GST/taxes locally',
      status: 'full'
    },
    inventoryCheck: {
      enabled: true,
      description: 'Check stock from local cache',
      status: 'cached', // May be stale
      lastUpdated: '2024-01-15 08:00:00'
    },
    customerLookup: {
      enabled: true,
      description: 'Search customers from local database',
      status: 'cached',
      lastUpdated: '2024-01-15 08:00:00'
    },
    priceCheck: {
      enabled: true,
      description: 'Check prices from local cache',
      status: 'full'
    },
    discountApplication: {
      enabled: true,
      description: 'Apply discounts based on cached rules',
      status: 'cached'
    },
    coinRedemption: {
      enabled: false,
      description: 'Requires online verification',
      status: 'disabled'
    },
    loyaltyEarning: {
      enabled: true,
      description: 'Queue for sync when online',
      status: 'queued'
    }
  };

  // ============================================
  // AUTO-SYNC SETTINGS
  // ============================================

  const [syncSettings, setSyncSettings] = useState({
    autoSyncEnabled: true,
    syncInterval: 30, // seconds when online
    syncOnReconnect: true,
    syncOnBillCreate: true,
    conflictResolution: 'ask', // 'ask', 'prefer_local', 'prefer_server'
    retryAttempts: 3,
    retryDelay: 5000, // ms

    // Data to sync
    syncBills: true,
    syncInventory: true,
    syncCustomers: true,
    syncPrices: true,
    syncOffers: true
  });

  // ============================================
  // OFFLINE RISK INDICATOR
  // ============================================

  const calculateRiskLevel = () => {
    const pendingCount = offlineLedger.filter(t => t.syncStatus === 'pending').length;
    const hasConflicts = conflicts.length > 0;
    const storageUsage = (offlineStatus.localStorageUsed / offlineStatus.localStorageMax) * 100;
    const batteryLow = offlineStatus.batteryLevel < 20;

    if (pendingCount > 50 || storageUsage > 90 || batteryLow) {
      return { level: 'red', message: 'Critical - Sync immediately', color: 'red' };
    }
    if (pendingCount > 20 || hasConflicts || storageUsage > 70) {
      return { level: 'yellow', message: 'Warning - Sync recommended', color: 'yellow' };
    }
    return { level: 'green', message: 'Safe to continue billing', color: 'green' };
  };

  const riskLevel = calculateRiskLevel();

  // ============================================
  // LOCAL DATA CACHE STATUS
  // ============================================

  const [cacheStatus, setCacheStatus] = useState({
    products: { count: 1250, lastSync: '2024-01-15 08:00:00', size: '12 MB' },
    customers: { count: 4500, lastSync: '2024-01-15 08:00:00', size: '8 MB' },
    prices: { count: 1250, lastSync: '2024-01-15 10:00:00', size: '2 MB' },
    offers: { count: 45, lastSync: '2024-01-15 08:00:00', size: '1 MB' },
    taxRules: { count: 12, lastSync: '2024-01-15 08:00:00', size: '0.5 MB' },
    staffPermissions: { count: 8, lastSync: '2024-01-15 08:00:00', size: '0.1 MB' }
  });

  // ============================================
  // SYNC OPERATIONS
  // ============================================

  const triggerSync = async () => {
    setOfflineStatus(prev => ({ ...prev, syncInProgress: true }));
    // Simulate sync
    setTimeout(() => {
      setOfflineStatus(prev => ({
        ...prev,
        syncInProgress: false,
        lastSync: new Date().toISOString(),
        pendingTransactions: 0,
        lastSyncSuccess: true
      }));
      // Update ledger
      setOfflineLedger(prev => prev.map(t => ({
        ...t,
        syncStatus: 'synced',
        syncedAt: new Date().toISOString()
      })));
    }, 2000);
  };

  const resolveConflict = (conflictId, resolution) => {
    setConflicts(prev => prev.map(c =>
      c.id === conflictId ? { ...c, resolution } : c
    ));
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Connection Status */}
      <div className={`${offlineStatus.isOnline ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'bg-gradient-to-r from-orange-600 to-red-600'} text-white p-6`}>
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/merchant')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                {offlineStatus.isOnline ? <Cloud size={32} /> : <CloudOff size={32} />}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Offline-First POS</h1>
                <p className="text-white/80 mt-1">
                  {offlineStatus.isOnline ? 'Connected - All systems operational' : 'Offline Mode - Bills saved locally'}
                </p>
              </div>
            </div>

            {/* Safe to Bill Indicator */}
            <div className={`px-6 py-3 rounded-xl flex items-center gap-3 ${
              riskLevel.level === 'green' ? 'bg-emerald-500/30' :
              riskLevel.level === 'yellow' ? 'bg-yellow-500/30' :
              'bg-red-500/30'
            }`}>
              <div className={`w-4 h-4 rounded-full animate-pulse ${
                riskLevel.level === 'green' ? 'bg-emerald-400' :
                riskLevel.level === 'yellow' ? 'bg-yellow-400' :
                'bg-red-400'
              }`} />
              <div>
                <div className="font-bold">
                  {riskLevel.level === 'green' ? 'SAFE TO BILL' :
                   riskLevel.level === 'yellow' ? 'SYNC RECOMMENDED' :
                   'SYNC REQUIRED'}
                </div>
                <div className="text-sm text-white/70">{riskLevel.message}</div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                {offlineStatus.isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
                <span className="text-sm">Connection</span>
              </div>
              <div className="font-bold mt-1">
                {offlineStatus.isOnline ? 'Online' : 'Offline'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Upload size={16} />
                <span className="text-sm">Pending Sync</span>
              </div>
              <div className="font-bold mt-1">
                {offlineLedger.filter(t => t.syncStatus === 'pending').length} bills
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="text-sm">Last Sync</span>
              </div>
              <div className="font-bold mt-1">
                {formatTime(offlineStatus.lastSync)}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                <HardDrive size={16} />
                <span className="text-sm">Storage</span>
              </div>
              <div className="font-bold mt-1">
                {offlineStatus.localStorageUsed}/{offlineStatus.localStorageMax} MB
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Battery size={16} />
                <span className="text-sm">Battery</span>
              </div>
              <div className="font-bold mt-1">
                {offlineStatus.batteryLevel}%
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} />
                <span className="text-sm">Conflicts</span>
              </div>
              <div className="font-bold mt-1">
                {conflicts.length} pending
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'status', label: 'Sync Status', icon: RefreshCw },
            { id: 'ledger', label: 'Offline Ledger', icon: FileText },
            { id: 'conflicts', label: 'Conflicts', icon: AlertTriangle },
            { id: 'capabilities', label: 'Capabilities', icon: Zap },
            { id: 'cache', label: 'Local Data', icon: Database },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {tab.id === 'conflicts' && conflicts.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {conflicts.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">

        {/* Sync Status Tab */}
        {activeTab === 'status' && (
          <div className="space-y-6">
            {/* Sync Action */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Sync Status</h3>
                  <p className="text-gray-500 mt-1">
                    {offlineStatus.syncInProgress ? 'Syncing...' :
                     `Last synced: ${formatDate(offlineStatus.lastSync)} at ${formatTime(offlineStatus.lastSync)}`}
                  </p>
                </div>
                <button
                  onClick={triggerSync}
                  disabled={offlineStatus.syncInProgress || !offlineStatus.isOnline}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${
                    offlineStatus.syncInProgress
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : offlineStatus.isOnline
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <RefreshCw size={20} className={offlineStatus.syncInProgress ? 'animate-spin' : ''} />
                  {offlineStatus.syncInProgress ? 'Syncing...' : 'Sync Now'}
                </button>
              </div>

              {/* Sync Progress */}
              {offlineStatus.syncInProgress && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Syncing transactions...</span>
                    <span className="text-emerald-600">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[45%] animate-pulse" />
                  </div>
                </div>
              )}
            </div>

            {/* Pending Transactions Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {offlineLedger.filter(t => t.syncStatus === 'synced').length}
                    </div>
                    <div className="text-sm text-gray-500">Synced Bills</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {offlineLedger.filter(t => t.syncStatus === 'pending').length}
                    </div>
                    <div className="text-sm text-gray-500">Pending Sync</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="text-red-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{conflicts.length}</div>
                    <div className="text-sm text-gray-500">Conflicts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offline Mode Explanation */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Info className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-blue-800">How Offline Mode Works</h4>
                  <ul className="mt-2 space-y-2 text-sm text-blue-700">
                    <li>• All bills are saved locally first, then synced to cloud</li>
                    <li>• Receipt printing works via Bluetooth/USB without internet</li>
                    <li>• QR codes are generated locally for payments</li>
                    <li>• Tax calculations use cached GST rules</li>
                    <li>• When connection returns, all pending bills sync automatically</li>
                    <li>• Conflicts are detected and shown for manual resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Offline Ledger Tab */}
        {activeTab === 'ledger' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Offline Transaction Ledger</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                  Export All
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Bill #</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Time</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Payment</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Created</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Sync Status</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {offlineLedger.map(txn => (
                    <tr key={txn.id} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium text-gray-800">{txn.billNumber}</div>
                      </td>
                      <td className="p-4 text-gray-600">{formatTime(txn.timestamp)}</td>
                      <td className="p-4">
                        <div className="font-medium">₹{txn.amount.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">{txn.items.length} items</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          txn.paymentMethod === 'cash' ? 'bg-green-100 text-green-700' :
                          txn.paymentMethod === 'upi' ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {txn.paymentMethod.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-4">
                        {txn.createdOffline ? (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                            Offline
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            Online
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        {txn.syncStatus === 'synced' ? (
                          <span className="flex items-center gap-1 text-emerald-600 text-sm">
                            <CheckCircle size={14} /> Synced
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-yellow-600 text-sm">
                            <Clock size={14} /> Pending
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Conflicts Tab */}
        {activeTab === 'conflicts' && (
          <div className="space-y-6">
            {conflicts.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border p-12 text-center">
                <CheckCircle className="mx-auto text-emerald-500 mb-4" size={48} />
                <h3 className="text-xl font-semibold text-gray-800">No Conflicts</h3>
                <p className="text-gray-500 mt-2">All transactions are in sync</p>
              </div>
            ) : (
              conflicts.map(conflict => (
                <div key={conflict.id} className="bg-white rounded-xl shadow-sm border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-yellow-500" size={20} />
                        <h4 className="font-semibold text-gray-800">Conflict: {conflict.billNumber}</h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Type: {conflict.type.replace('_', ' ')} • Detected: {formatTime(conflict.detectedAt)}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      conflict.resolution ? 'bg-emerald-100 text-emerald-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {conflict.resolution ? 'Resolved' : 'Pending'}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <div className="text-sm font-medium text-blue-800 mb-2">Local Version</div>
                      <div className="space-y-1 text-sm">
                        <div>Amount: ₹{conflict.localVersion.amount}</div>
                        <div>Time: {conflict.localVersion.timestamp}</div>
                        <div>Items: {conflict.localVersion.items}</div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-purple-50">
                      <div className="text-sm font-medium text-purple-800 mb-2">Server Version</div>
                      <div className="space-y-1 text-sm">
                        <div>Amount: ₹{conflict.serverVersion.amount}</div>
                        <div>Time: {conflict.serverVersion.timestamp}</div>
                        <div>Items: {conflict.serverVersion.items}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => resolveConflict(conflict.id, 'local')}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Keep Local
                    </button>
                    <button
                      onClick={() => resolveConflict(conflict.id, 'server')}
                      className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    >
                      Keep Server
                    </button>
                    <button
                      onClick={() => resolveConflict(conflict.id, 'merge')}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Merge (Review)
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Capabilities Tab */}
        {activeTab === 'capabilities' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Offline Capabilities</h3>
              <p className="text-sm text-gray-500 mt-1">What works when you're offline</p>
            </div>
            <div className="p-4 grid md:grid-cols-2 gap-4">
              {Object.entries(offlineCapabilities).map(([key, cap]) => (
                <div key={key} className={`p-4 rounded-lg border ${
                  cap.status === 'full' ? 'bg-emerald-50 border-emerald-200' :
                  cap.status === 'cached' ? 'bg-yellow-50 border-yellow-200' :
                  cap.status === 'queued' ? 'bg-blue-50 border-blue-200' :
                  'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-800 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    {cap.enabled ? (
                      <CheckCircle className={
                        cap.status === 'full' ? 'text-emerald-500' :
                        cap.status === 'cached' ? 'text-yellow-500' :
                        'text-blue-500'
                      } size={20} />
                    ) : (
                      <XCircle className="text-red-500" size={20} />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{cap.description}</p>
                  {cap.lastUpdated && (
                    <p className="text-xs text-gray-400 mt-1">
                      Cache updated: {cap.lastUpdated}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Local Data Cache Tab */}
        {activeTab === 'cache' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">Local Data Cache</h3>
                  <p className="text-sm text-gray-500">Data stored for offline use</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  Refresh All Cache
                </button>
              </div>
              <div className="p-4 space-y-4">
                {Object.entries(cacheStatus).map(([key, cache]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Database className="text-gray-400" size={24} />
                      <div>
                        <div className="font-medium text-gray-800 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {cache.count} records • {cache.size}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        Last sync: {formatTime(cache.lastSync)}
                      </div>
                      <button className="text-blue-600 text-sm hover:underline">
                        Refresh
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage Usage */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Storage Usage</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Used: {offlineStatus.localStorageUsed} MB</span>
                    <span>Total: {offlineStatus.localStorageMax} MB</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-4 rounded-full ${
                        (offlineStatus.localStorageUsed / offlineStatus.localStorageMax) > 0.9 ? 'bg-red-500' :
                        (offlineStatus.localStorageUsed / offlineStatus.localStorageMax) > 0.7 ? 'bg-yellow-500' :
                        'bg-emerald-500'
                      }`}
                      style={{ width: `${(offlineStatus.localStorageUsed / offlineStatus.localStorageMax) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
              <button className="text-red-600 text-sm hover:underline">
                Clear Old Cache Data
              </button>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Sync Settings</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Auto-Sync</div>
                  <div className="text-sm text-gray-500">Automatically sync when online</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={syncSettings.autoSyncEnabled}
                    onChange={(e) => setSyncSettings(prev => ({ ...prev, autoSyncEnabled: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Sync on Reconnect</div>
                  <div className="text-sm text-gray-500">Immediately sync when internet returns</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={syncSettings.syncOnReconnect}
                    onChange={(e) => setSyncSettings(prev => ({ ...prev, syncOnReconnect: e.target.checked }))}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>

              <div>
                <div className="font-medium text-gray-800 mb-2">Conflict Resolution</div>
                <select
                  value={syncSettings.conflictResolution}
                  onChange={(e) => setSyncSettings(prev => ({ ...prev, conflictResolution: e.target.value }))}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="ask">Ask Every Time</option>
                  <option value="prefer_local">Prefer Local Version</option>
                  <option value="prefer_server">Prefer Server Version</option>
                </select>
              </div>

              <div>
                <div className="font-medium text-gray-800 mb-2">Sync Interval (when online)</div>
                <select
                  value={syncSettings.syncInterval}
                  onChange={(e) => setSyncSettings(prev => ({ ...prev, syncInterval: parseInt(e.target.value) }))}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="10">Every 10 seconds</option>
                  <option value="30">Every 30 seconds</option>
                  <option value="60">Every 1 minute</option>
                  <option value="300">Every 5 minutes</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MerchantOfflinePOS;
