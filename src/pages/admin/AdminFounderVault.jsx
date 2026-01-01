import React, { useState } from 'react';
import {
  ArrowLeft, Shield, Lock, AlertTriangle, Zap, Power, RefreshCw,
  Globe, DollarSign, Users, Pause, Play, Key, Eye, EyeOff,
  Skull, AlertOctagon, RotateCcw, Settings, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminFounderVault = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [showConfirm, setShowConfirm] = useState(null);
  const [passcode, setPasscode] = useState('');

  const killSwitches = [
    {
      id: 'global_pause',
      name: 'Global Platform Pause',
      description: 'Instantly pause all transactions across all cities',
      severity: 'critical',
      icon: Pause,
      requiresConfirm: true,
      lastUsed: 'Never'
    },
    {
      id: 'region_shutdown',
      name: 'Region Shutdown',
      description: 'Completely shutdown operations in a specific region',
      severity: 'critical',
      icon: Globe,
      requiresConfirm: true,
      lastUsed: 'Never'
    },
    {
      id: 'coin_freeze',
      name: 'Coin System Freeze',
      description: 'Freeze all coin earning, spending, and transfers',
      severity: 'high',
      icon: DollarSign,
      requiresConfirm: true,
      lastUsed: 'Never'
    },
    {
      id: 'coin_reset',
      name: 'Emergency Coin Reset',
      description: 'Reset coin balances to last verified state',
      severity: 'critical',
      icon: RotateCcw,
      requiresConfirm: true,
      lastUsed: 'Never'
    },
    {
      id: 'merchant_lockout',
      name: 'Mass Merchant Lockout',
      description: 'Lock all merchant accounts pending verification',
      severity: 'high',
      icon: Lock,
      requiresConfirm: true,
      lastUsed: 'Never'
    },
    {
      id: 'user_freeze',
      name: 'User Account Freeze',
      description: 'Freeze all user transactions (view only mode)',
      severity: 'high',
      icon: Users,
      requiresConfirm: true,
      lastUsed: 'Never'
    }
  ];

  const emergencyModes = [
    {
      id: 'fraud_emergency',
      name: 'Fraud Emergency Mode',
      description: 'Maximum fraud detection, block suspicious transactions',
      status: 'standby',
      autoTriggers: ['Fraud rate > 5%', 'Unusual transaction patterns']
    },
    {
      id: 'ddos_mode',
      name: 'DDoS Protection Mode',
      description: 'Rate limiting, captcha enforcement, bot blocking',
      status: 'standby',
      autoTriggers: ['Traffic spike > 500%', 'Bot detection triggered']
    },
    {
      id: 'financial_lockdown',
      name: 'Financial Lockdown',
      description: 'Halt all money movement, settlements, payouts',
      status: 'standby',
      autoTriggers: ['Bank API failure', 'Suspicious bulk transfers']
    },
    {
      id: 'data_breach',
      name: 'Data Breach Protocol',
      description: 'Encrypt, isolate, and secure all user data',
      status: 'standby',
      autoTriggers: ['Unauthorized access detected', 'Data exfiltration attempt']
    }
  ];

  const rollbackOptions = [
    {
      name: 'Transaction Rollback',
      description: 'Undo transactions from last X hours',
      options: ['1 hour', '6 hours', '24 hours']
    },
    {
      name: 'Config Rollback',
      description: 'Restore platform settings to previous state',
      options: ['Last known good', 'Yesterday', 'Last week']
    },
    {
      name: 'Deployment Rollback',
      description: 'Revert to previous app version',
      options: ['Previous version', 'Stable release']
    }
  ];

  const auditLog = [
    { action: 'Vault access attempted', by: 'System Admin', time: '2 hours ago', status: 'blocked' },
    { action: 'Founder authentication', by: 'Founder', time: '1 day ago', status: 'success' },
    { action: 'Kill switch test', by: 'Founder', time: '1 week ago', status: 'success' },
    { action: 'Emergency mode drill', by: 'CTO', time: '2 weeks ago', status: 'success' }
  ];

  const handleAuthenticate = () => {
    if (passcode === '000000') { // Demo passcode
      setAuthenticated(true);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={40} className="text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Founder Control Vault</h1>
            <p className="text-gray-400">Ultimate platform control. Founder access only.</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-red-900/50">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle size={24} className="text-red-500 mr-2" />
              <span className="text-red-400 font-bold">RESTRICTED ACCESS</span>
            </div>

            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Founder Passcode</label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter 6-digit passcode"
                className="w-full bg-gray-800 text-white text-center text-2xl tracking-widest p-4 rounded-xl border border-gray-700 focus:border-red-500 outline-none"
                maxLength={6}
              />
            </div>

            <button
              onClick={handleAuthenticate}
              className="w-full bg-red-600 text-white py-4 rounded-xl font-bold flex items-center justify-center"
            >
              <Key size={20} className="mr-2" />
              Authenticate
            </button>

            <p className="text-gray-500 text-xs text-center mt-4">
              All access attempts are logged and monitored
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="w-full text-gray-500 py-4 mt-4"
          >
            ← Back to Admin
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Shield size={24} className="mr-2" />
                Founder Control Vault
              </h1>
              <p className="text-red-300 text-sm">Ultimate platform authority</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm">Authenticated</span>
          </div>
        </div>

        <div className="bg-red-900/50 rounded-xl p-4 border border-red-700">
          <div className="flex items-center">
            <AlertOctagon size={24} className="text-red-400 mr-3" />
            <div>
              <p className="font-bold">Nuclear Option Zone</p>
              <p className="text-red-300 text-sm">Actions here affect the entire platform. Use with extreme caution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kill Switches */}
      <div className="p-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <Skull size={20} className="mr-2 text-red-500" />
          Kill Switches
        </h2>

        <div className="space-y-3">
          {killSwitches.map(sw => {
            const Icon = sw.icon;
            return (
              <div key={sw.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${getSeverityColor(sw.severity)} rounded-lg flex items-center justify-center mr-3`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{sw.name}</h4>
                      <p className="text-gray-400 text-sm">{sw.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-gray-500 text-xs">Last used: {sw.lastUsed}</span>
                  <button
                    onClick={() => setShowConfirm(sw.id)}
                    className={`px-4 py-2 rounded-lg font-bold ${getSeverityColor(sw.severity)} text-white`}
                  >
                    Activate
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Modes */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <Zap size={20} className="mr-2 text-yellow-500" />
          Emergency Modes
        </h2>

        <div className="space-y-3">
          {emergencyModes.map(mode => (
            <div key={mode.id} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{mode.name}</h4>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                  {mode.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{mode.description}</p>
              <div className="flex flex-wrap gap-1">
                {mode.autoTriggers.map((trigger, idx) => (
                  <span key={idx} className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                    Auto: {trigger}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rollback Options */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <RotateCcw size={20} className="mr-2 text-blue-500" />
          Rollback Options
        </h2>

        <div className="space-y-3">
          {rollbackOptions.map((option, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <h4 className="text-white font-bold mb-1">{option.name}</h4>
              <p className="text-gray-400 text-sm mb-3">{option.description}</p>
              <div className="flex flex-wrap gap-2">
                {option.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg text-sm border border-blue-600/30"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Log */}
      <div className="px-4 pb-4">
        <h2 className="text-white font-bold mb-3 flex items-center">
          <Eye size={20} className="mr-2 text-purple-500" />
          Vault Access Log
        </h2>

        <div className="bg-gray-900 rounded-xl border border-gray-800">
          {auditLog.map((log, idx) => (
            <div key={idx} className={`p-4 flex items-center justify-between ${idx !== 0 ? 'border-t border-gray-800' : ''}`}>
              <div>
                <p className="text-white">{log.action}</p>
                <p className="text-gray-500 text-sm">{log.by} • {log.time}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                log.status === 'success' ? 'bg-green-500/20 text-green-400' :
                log.status === 'blocked' ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-red-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Confirm Kill Switch</h3>
              <p className="text-gray-400">
                This action will immediately affect the entire platform. Are you absolutely sure?
              </p>
            </div>

            <div className="bg-red-900/30 rounded-lg p-4 mb-6">
              <p className="text-red-400 text-sm text-center">
                Type "CONFIRM" to proceed
              </p>
              <input
                type="text"
                placeholder="CONFIRM"
                className="w-full bg-gray-800 text-white text-center p-3 rounded-lg mt-2"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirm(null)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold">
                Execute
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminFounderVault;
