import React, { useState } from 'react';
import {
  ArrowLeft, Database, Link2, CheckCircle, XCircle, Clock,
  RefreshCw, Settings, ChevronRight, Download, Upload, Eye,
  FileText, Calendar, AlertCircle, Play, Pause, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantERPConnector = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('connected');
  const [selectedERP, setSelectedERP] = useState(null);

  const erpSystems = [
    {
      id: 'tally',
      name: 'Tally Prime',
      icon: '📊',
      status: 'connected',
      version: 'Tally Prime 3.0',
      lastSync: '10 min ago',
      syncFrequency: 'Every 15 min',
      recordsSynced: 12456,
      pendingSync: 23,
      features: ['Invoices', 'Payments', 'Inventory', 'GST Reports'],
      health: 100
    },
    {
      id: 'zoho',
      name: 'Zoho Books',
      icon: '📗',
      status: 'pending',
      version: null,
      lastSync: null,
      syncFrequency: null,
      recordsSynced: 0,
      pendingSync: 0,
      features: ['Invoices', 'Payments', 'Bank Feeds', 'Reports'],
      health: 0
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks',
      icon: '📒',
      status: 'available',
      version: null,
      lastSync: null,
      syncFrequency: null,
      recordsSynced: 0,
      pendingSync: 0,
      features: ['Invoices', 'Expenses', 'Payroll', 'Reports'],
      health: 0
    },
    {
      id: 'xero',
      name: 'Xero',
      icon: '📘',
      status: 'available',
      version: null,
      lastSync: null,
      syncFrequency: null,
      recordsSynced: 0,
      pendingSync: 0,
      features: ['Invoices', 'Bank Rec', 'Inventory', 'Projects'],
      health: 0
    },
    {
      id: 'busy',
      name: 'Busy Accounting',
      icon: '📙',
      status: 'available',
      version: null,
      lastSync: null,
      syncFrequency: null,
      recordsSynced: 0,
      pendingSync: 0,
      features: ['Invoices', 'GST', 'Inventory', 'MIS'],
      health: 0
    }
  ];

  const syncLogs = [
    {
      id: 1,
      type: 'invoice',
      direction: 'push',
      count: 45,
      status: 'success',
      timestamp: '10 min ago',
      details: '45 invoices synced to Tally'
    },
    {
      id: 2,
      type: 'payment',
      direction: 'push',
      count: 23,
      status: 'success',
      timestamp: '10 min ago',
      details: '23 payments synced to Tally'
    },
    {
      id: 3,
      type: 'inventory',
      direction: 'pull',
      count: 156,
      status: 'success',
      timestamp: '25 min ago',
      details: 'Stock levels updated from Tally'
    },
    {
      id: 4,
      type: 'customer',
      direction: 'push',
      count: 12,
      status: 'partial',
      timestamp: '40 min ago',
      details: '10/12 customers synced, 2 failed'
    },
    {
      id: 5,
      type: 'invoice',
      direction: 'push',
      count: 38,
      status: 'failed',
      timestamp: '1 hour ago',
      details: 'Connection timeout - retrying'
    }
  ];

  const syncSettings = {
    autoSync: true,
    syncFrequency: '15 minutes',
    syncInvoices: true,
    syncPayments: true,
    syncInventory: true,
    syncCustomers: true,
    syncGST: true,
    conflictResolution: 'os-priority'
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'connected':
        return <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs flex items-center"><CheckCircle size={12} className="mr-1" />Connected</span>;
      case 'pending':
        return <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full text-xs flex items-center"><Clock size={12} className="mr-1" />Setup Pending</span>;
      case 'available':
        return <span className="bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full text-xs">Available</span>;
      case 'error':
        return <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full text-xs flex items-center"><XCircle size={12} className="mr-1" />Error</span>;
      default:
        return null;
    }
  };

  const getSyncStatusColor = (status) => {
    switch (status) {
      case 'success': return 'bg-green-500/20 text-green-400';
      case 'partial': return 'bg-yellow-500/20 text-yellow-400';
      case 'failed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Database size={24} className="mr-2" />
                ERP Connector
              </h1>
              <p className="text-purple-200 text-sm">Tally, Zoho, QuickBooks & more</p>
            </div>
          </div>
          <RefreshCw size={20} />
        </div>

        {/* Connected Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">1</p>
            <p className="text-xs text-purple-200">Connected</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">12.4K</p>
            <p className="text-xs text-purple-200">Records Synced</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">100%</p>
            <p className="text-xs text-purple-200">Health</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'connected', label: 'Systems' },
            { id: 'logs', label: 'Sync Logs' },
            { id: 'settings', label: 'Settings' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-purple-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Systems Tab */}
      {activeTab === 'connected' && (
        <div className="px-4 space-y-3">
          {/* SDK Notice */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-3">
            <div className="flex items-start">
              <Link2 size={18} className="text-purple-400 mr-2 mt-0.5" />
              <div>
                <p className="text-purple-400 font-medium text-sm">SDK + Webhooks Integration</p>
                <p className="text-gray-300 text-xs">
                  All external integrations go through SDK & webhooks. No direct DB access.
                </p>
              </div>
            </div>
          </div>

          {erpSystems.map(erp => (
            <div key={erp.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-2xl mr-3">
                    {erp.icon}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{erp.name}</h3>
                      <div className="ml-2">{getStatusBadge(erp.status)}</div>
                    </div>
                    {erp.version && (
                      <p className="text-gray-400 text-sm">{erp.version}</p>
                    )}
                  </div>
                </div>
                <Settings size={18} className="text-gray-400" />
              </div>

              {erp.status === 'connected' && (
                <>
                  <div className="grid grid-cols-3 gap-2 mb-3 text-center text-sm">
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-white font-bold">{erp.recordsSynced.toLocaleString()}</p>
                      <p className="text-gray-400 text-xs">Synced</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-yellow-400 font-bold">{erp.pendingSync}</p>
                      <p className="text-gray-400 text-xs">Pending</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-green-400 font-bold">{erp.health}%</p>
                      <p className="text-gray-400 text-xs">Health</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {erp.features.map((feature, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Clock size={14} className="inline mr-1" />
                      {erp.lastSync} • {erp.syncFrequency}
                    </span>
                    <button className="text-purple-400 flex items-center">
                      <RefreshCw size={14} className="mr-1" />
                      Sync Now
                    </button>
                  </div>
                </>
              )}

              {erp.status === 'pending' && (
                <button className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                  Complete Setup
                </button>
              )}

              {erp.status === 'available' && (
                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {erp.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-700 text-gray-400 px-2 py-0.5 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gray-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                    <Link2 size={16} className="mr-2" />
                    Connect
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Sync Logs Tab */}
      {activeTab === 'logs' && (
        <div className="px-4 space-y-3">
          {/* Filter */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Filter size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl appearance-none">
                <option>All Types</option>
                <option>Invoices</option>
                <option>Payments</option>
                <option>Inventory</option>
                <option>Customers</option>
              </select>
            </div>
            <button className="bg-gray-800 text-white px-4 rounded-xl">
              <Calendar size={20} />
            </button>
          </div>

          {/* Sync Logs */}
          {syncLogs.map(log => (
            <div key={log.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  {log.direction === 'push' ? (
                    <Upload size={18} className="text-blue-400 mr-2" />
                  ) : (
                    <Download size={18} className="text-green-400 mr-2" />
                  )}
                  <div>
                    <p className="text-white font-medium capitalize">{log.type}</p>
                    <p className="text-gray-400 text-sm">{log.count} records</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs ${getSyncStatusColor(log.status)}`}>
                  {log.status}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-2">{log.details}</p>
              <p className="text-gray-500 text-xs">{log.timestamp}</p>
            </div>
          ))}

          <button className="w-full bg-gray-800 text-gray-400 py-3 rounded-xl text-sm">
            Load More Logs
          </button>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="px-4 space-y-4">
          {/* Auto Sync */}
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-bold">Auto Sync</h3>
                <p className="text-gray-400 text-sm">Automatically sync data with ERP</p>
              </div>
              <div className={`w-12 h-6 rounded-full p-1 cursor-pointer ${
                syncSettings.autoSync ? 'bg-purple-600' : 'bg-gray-600'
              }`}>
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                  syncSettings.autoSync ? 'translate-x-6' : ''
                }`} />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-700">
                <span className="text-gray-300">Sync Frequency</span>
                <select className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm">
                  <option>Every 5 min</option>
                  <option selected>Every 15 min</option>
                  <option>Every 30 min</option>
                  <option>Every hour</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sync Entities */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Sync Entities</h3>
            <div className="space-y-3">
              {[
                { key: 'invoices', label: 'Invoices', enabled: syncSettings.syncInvoices },
                { key: 'payments', label: 'Payments', enabled: syncSettings.syncPayments },
                { key: 'inventory', label: 'Inventory', enabled: syncSettings.syncInventory },
                { key: 'customers', label: 'Customers', enabled: syncSettings.syncCustomers },
                { key: 'gst', label: 'GST Reports', enabled: syncSettings.syncGST }
              ].map(entity => (
                <div key={entity.key} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
                  <span className="text-gray-300">{entity.label}</span>
                  <div className={`w-10 h-5 rounded-full p-0.5 cursor-pointer ${
                    entity.enabled ? 'bg-purple-600' : 'bg-gray-600'
                  }`}>
                    <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                      entity.enabled ? 'translate-x-5' : ''
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conflict Resolution */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Conflict Resolution</h3>
            <p className="text-gray-400 text-sm mb-4">
              When data conflicts occur between OS and ERP
            </p>
            <div className="space-y-2">
              <label className="flex items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer">
                <input type="radio" name="conflict" checked className="mr-3" />
                <div>
                  <p className="text-white font-medium">Merchant OS Priority</p>
                  <p className="text-gray-400 text-xs">OS data overwrites ERP (Recommended)</p>
                </div>
              </label>
              <label className="flex items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer">
                <input type="radio" name="conflict" className="mr-3" />
                <div>
                  <p className="text-white font-medium">ERP Priority</p>
                  <p className="text-gray-400 text-xs">ERP data overwrites OS</p>
                </div>
              </label>
              <label className="flex items-center p-3 bg-gray-700/50 rounded-lg cursor-pointer">
                <input type="radio" name="conflict" className="mr-3" />
                <div>
                  <p className="text-white font-medium">Manual Review</p>
                  <p className="text-gray-400 text-xs">Flag conflicts for manual resolution</p>
                </div>
              </label>
            </div>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold">
            Save Settings
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantERPConnector;
