import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Users, Clock, Search, Filter, RotateCcw,
  AlertTriangle, CheckCircle, XCircle, Edit, Trash2,
  DollarSign, Package, Settings, LogIn, LogOut, Eye,
  ChevronDown, Calendar, Download, Shield, User
} from 'lucide-react';
import BottomNav from '../../components/BottomNav';

const MerchantStaffActivityLog = () => {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState('all');
  const [selectedAction, setSelectedAction] = useState('all');
  const [showUndoModal, setShowUndoModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const staffMembers = [
    { id: 'all', name: 'All Staff' },
    { id: 's1', name: 'Rahul Sharma', role: 'Cashier' },
    { id: 's2', name: 'Amit Kumar', role: 'Manager' },
    { id: 's3', name: 'Priya Singh', role: 'Cashier' },
    { id: 's4', name: 'Vikram Patel', role: 'Inventory' }
  ];

  const actionTypes = [
    { id: 'all', name: 'All Actions' },
    { id: 'sales', name: 'Sales', icon: DollarSign },
    { id: 'inventory', name: 'Inventory', icon: Package },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'auth', name: 'Login/Logout', icon: LogIn }
  ];

  const activities = [
    {
      id: 1,
      staff: 'Rahul Sharma',
      staffId: 's1',
      role: 'Cashier',
      action: 'Voided Bill',
      type: 'sales',
      details: 'Bill #INV-1234 voided - ₹850',
      reason: 'Customer cancelled order',
      timestamp: '10:45 AM',
      date: 'Today',
      canUndo: true,
      severity: 'warning',
      undoWindow: '15 mins left'
    },
    {
      id: 2,
      staff: 'Amit Kumar',
      staffId: 's2',
      role: 'Manager',
      action: 'Price Changed',
      type: 'inventory',
      details: 'Maggi Noodles: ₹14 → ₹12',
      reason: 'Manager override',
      timestamp: '10:30 AM',
      date: 'Today',
      canUndo: true,
      severity: 'info',
      undoWindow: '30 mins left'
    },
    {
      id: 3,
      staff: 'Priya Singh',
      staffId: 's3',
      role: 'Cashier',
      action: 'Refund Issued',
      type: 'sales',
      details: 'Refund ₹450 to customer',
      reason: 'Defective product return',
      timestamp: '10:15 AM',
      date: 'Today',
      canUndo: false,
      severity: 'warning'
    },
    {
      id: 4,
      staff: 'Vikram Patel',
      staffId: 's4',
      role: 'Inventory',
      action: 'Stock Adjusted',
      type: 'inventory',
      details: 'Cola 500ml: 120 → 115 (-5)',
      reason: 'Damaged items written off',
      timestamp: '9:45 AM',
      date: 'Today',
      canUndo: true,
      severity: 'info',
      undoWindow: '45 mins left'
    },
    {
      id: 5,
      staff: 'Rahul Sharma',
      staffId: 's1',
      role: 'Cashier',
      action: 'Discount Applied',
      type: 'sales',
      details: '15% discount on Bill #INV-1228',
      reason: 'Loyalty customer',
      timestamp: '9:30 AM',
      date: 'Today',
      canUndo: false,
      severity: 'success'
    },
    {
      id: 6,
      staff: 'Amit Kumar',
      staffId: 's2',
      role: 'Manager',
      action: 'Cash Drawer Opened',
      type: 'sales',
      details: 'Manual drawer open',
      reason: 'Change request',
      timestamp: '9:00 AM',
      date: 'Today',
      canUndo: false,
      severity: 'info'
    },
    {
      id: 7,
      staff: 'Priya Singh',
      staffId: 's3',
      role: 'Cashier',
      action: 'Login',
      type: 'auth',
      details: 'Shift started',
      timestamp: '8:00 AM',
      date: 'Today',
      canUndo: false,
      severity: 'success'
    }
  ];

  const todayStats = {
    totalActions: 47,
    salesActions: 28,
    inventoryChanges: 12,
    undoableActions: 5,
    flaggedActions: 3
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'warning': return 'text-yellow-400 bg-yellow-500/20';
      case 'success': return 'text-green-400 bg-green-500/20';
      case 'error': return 'text-red-400 bg-red-500/20';
      default: return 'text-blue-400 bg-blue-500/20';
    }
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'sales': return DollarSign;
      case 'inventory': return Package;
      case 'settings': return Settings;
      case 'auth': return LogIn;
      default: return Clock;
    }
  };

  const handleUndo = (activity) => {
    setSelectedActivity(activity);
    setShowUndoModal(true);
  };

  const filteredActivities = activities.filter(a => {
    if (selectedStaff !== 'all' && a.staffId !== selectedStaff) return false;
    if (selectedAction !== 'all' && a.type !== selectedAction) return false;
    return true;
  });

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
              <h1 className="text-lg font-bold text-white">Staff Activity Log</h1>
              <p className="text-xs text-gray-400">Actions & Audit Trail</p>
            </div>
          </div>
          <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
            <Download className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-3 text-center">
            <p className="text-2xl font-bold text-white">{todayStats.totalActions}</p>
            <p className="text-xs text-gray-400">Total Actions</p>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-3 text-center">
            <p className="text-2xl font-bold text-blue-400">{todayStats.undoableActions}</p>
            <p className="text-xs text-gray-400">Can Undo</p>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">{todayStats.flaggedActions}</p>
            <p className="text-xs text-gray-400">Flagged</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <select
            value={selectedStaff}
            onChange={(e) => setSelectedStaff(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm min-w-[140px]"
          >
            {staffMembers.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <select
            value={selectedAction}
            onChange={(e) => setSelectedAction(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm min-w-[120px]"
          >
            {actionTypes.map(a => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search activities..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white"
          />
        </div>

        {/* Activity Timeline */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Today's Activity</h3>
            <span className="text-sm text-gray-400">{filteredActivities.length} actions</span>
          </div>
          <div className="divide-y divide-gray-700">
            {filteredActivities.map(activity => {
              const ActionIcon = getActionIcon(activity.type);
              return (
                <div key={activity.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${getSeverityColor(activity.severity)}`}>
                      <ActionIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium text-white">{activity.action}</p>
                          <p className="text-sm text-gray-400">{activity.details}</p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{activity.timestamp}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 text-gray-500" />
                          <span className="text-xs text-gray-400">{activity.staff}</span>
                        </div>
                        <span className="text-xs text-gray-600">•</span>
                        <span className="text-xs text-gray-500">{activity.role}</span>
                        {activity.reason && (
                          <>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-400">{activity.reason}</span>
                          </>
                        )}
                      </div>
                      {activity.canUndo && (
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-blue-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.undoWindow}
                          </span>
                          <button
                            onClick={() => handleUndo(activity)}
                            className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-500 flex items-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Undo
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Permission Alerts */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white">Flagged Actions Today</h3>
              <ul className="text-sm text-gray-400 mt-2 space-y-1">
                <li>• 2 voided bills above ₹500</li>
                <li>• 1 manual cash drawer open</li>
              </ul>
              <button className="mt-3 text-sm text-yellow-400">View Details →</button>
            </div>
          </div>
        </div>

        {/* Staff Permissions Link */}
        <button
          onClick={() => navigate('/merchant/user-roles')}
          className="w-full p-4 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-between hover:border-gray-600 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="font-medium text-white">Manage Staff Permissions</p>
              <p className="text-sm text-gray-400">Control what each role can do</p>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-500 rotate-[-90deg]" />
        </button>
      </div>

      {/* Undo Modal */}
      {showUndoModal && selectedActivity && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Undo Action</h2>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-4 bg-gray-900 rounded-lg">
                <p className="font-medium text-white">{selectedActivity.action}</p>
                <p className="text-sm text-gray-400 mt-1">{selectedActivity.details}</p>
                <p className="text-xs text-gray-500 mt-2">
                  By {selectedActivity.staff} at {selectedActivity.timestamp}
                </p>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-white font-medium">This will reverse the action</p>
                    <p className="text-xs text-gray-400 mt-1">
                      The undo will be logged in the audit trail with your name.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Reason for Undo (Required)</label>
                <textarea
                  placeholder="Why are you undoing this action?"
                  rows={2}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-700 flex gap-3">
              <button
                onClick={() => setShowUndoModal(false)}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowUndoModal(false);
                }}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Confirm Undo
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default MerchantStaffActivityLog;
