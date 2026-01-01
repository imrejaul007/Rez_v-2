import React, { useState } from 'react';
import {
  ArrowLeft,
  Edit3,
  Trash2,
  RotateCcw,
  Calendar,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Eye,
  Lock,
  Unlock,
  RefreshCw,
  Receipt,
  DollarSign,
  User,
  Shield,
  History,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Printer,
  Download,
  MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MerchantBillManagement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bills');
  const [selectedBill, setSelectedBill] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showVoidModal, setShowVoidModal] = useState(false);

  // ============================================
  // BILLS DATABASE
  // ============================================

  const [bills, setBills] = useState([
    {
      id: 'BILL001',
      billNumber: 'B2024-0156',
      date: '2024-01-15',
      time: '14:32:00',
      customer: { name: 'Rahul Sharma', phone: '9876543210' },
      items: [
        { id: 1, name: 'Cappuccino', qty: 2, price: 180, total: 360, tax: 18 },
        { id: 2, name: 'Sandwich', qty: 1, price: 220, total: 220, tax: 5 },
        { id: 3, name: 'Brownie', qty: 3, price: 120, total: 360, tax: 18 }
      ],
      subtotal: 940,
      tax: { cgst: 56.25, sgst: 56.25, total: 112.50 },
      discount: 50,
      total: 1002.50,
      paymentMethod: 'upi',
      paymentStatus: 'paid',
      status: 'closed',
      staff: 'Amit Kumar',
      createdBy: 'Amit Kumar',
      lastModifiedBy: null,
      lastModifiedAt: null,
      isVoided: false,
      voidReason: null,
      voidedBy: null,
      voidedAt: null,
      canEdit: true, // Based on time window
      canVoid: true,
      isLocked: false
    },
    {
      id: 'BILL002',
      billNumber: 'B2024-0157',
      date: '2024-01-15',
      time: '15:45:00',
      customer: { name: 'Walk-in', phone: null },
      items: [
        { id: 1, name: 'Cold Brew', qty: 2, price: 220, total: 440, tax: 18 },
        { id: 2, name: 'Muffin', qty: 2, price: 150, total: 300, tax: 12 }
      ],
      subtotal: 740,
      tax: { cgst: 44.40, sgst: 44.40, total: 88.80 },
      discount: 0,
      total: 828.80,
      paymentMethod: 'cash',
      paymentStatus: 'paid',
      status: 'closed',
      staff: 'Priya Singh',
      createdBy: 'Priya Singh',
      lastModifiedBy: null,
      lastModifiedAt: null,
      isVoided: false,
      voidReason: null,
      voidedBy: null,
      voidedAt: null,
      canEdit: true,
      canVoid: true,
      isLocked: false
    },
    {
      id: 'BILL003',
      billNumber: 'B2024-0155',
      date: '2024-01-15',
      time: '12:20:00',
      customer: { name: 'Meera Patel', phone: '9988776655' },
      items: [
        { id: 1, name: 'Lunch Combo', qty: 2, price: 450, total: 900, tax: 5 }
      ],
      subtotal: 900,
      tax: { cgst: 22.50, sgst: 22.50, total: 45 },
      discount: 100,
      total: 845,
      paymentMethod: 'card',
      paymentStatus: 'paid',
      status: 'closed',
      staff: 'Amit Kumar',
      createdBy: 'Amit Kumar',
      lastModifiedBy: 'Owner',
      lastModifiedAt: '2024-01-15 13:00:00',
      isVoided: false,
      voidReason: null,
      voidedBy: null,
      voidedAt: null,
      canEdit: false, // Too old
      canVoid: true,
      isLocked: true
    }
  ]);

  // ============================================
  // VOID REASON CODES
  // ============================================

  const voidReasonCodes = [
    { code: 'WRONG_ITEM', label: 'Wrong item billed' },
    { code: 'WRONG_QUANTITY', label: 'Wrong quantity' },
    { code: 'WRONG_PRICE', label: 'Wrong price entered' },
    { code: 'CUSTOMER_CANCEL', label: 'Customer cancelled order' },
    { code: 'DUPLICATE_BILL', label: 'Duplicate bill created' },
    { code: 'PAYMENT_FAILED', label: 'Payment failed/reversed' },
    { code: 'FOOD_QUALITY', label: 'Food quality issue' },
    { code: 'SERVICE_ISSUE', label: 'Service complaint' },
    { code: 'TEST_BILL', label: 'Test transaction' },
    { code: 'OTHER', label: 'Other (specify)' }
  ];

  // ============================================
  // AUDIT TRAIL
  // ============================================

  const [auditTrail, setAuditTrail] = useState([
    {
      id: 'AUD001',
      billNumber: 'B2024-0155',
      action: 'EDIT',
      field: 'discount',
      oldValue: '50',
      newValue: '100',
      performedBy: 'Owner',
      performedAt: '2024-01-15 13:00:00',
      reason: 'Customer loyalty discount',
      ipAddress: '192.168.1.100'
    },
    {
      id: 'AUD002',
      billNumber: 'B2024-0154',
      action: 'VOID',
      field: null,
      oldValue: null,
      newValue: null,
      performedBy: 'Amit Kumar',
      performedAt: '2024-01-15 11:30:00',
      reason: 'Duplicate bill created',
      ipAddress: '192.168.1.101'
    },
    {
      id: 'AUD003',
      billNumber: 'B2024-0153',
      action: 'PARTIAL_REFUND',
      field: 'item_removed',
      oldValue: 'Brownie x2 = ₹240',
      newValue: 'Refunded',
      performedBy: 'Owner',
      performedAt: '2024-01-15 10:15:00',
      reason: 'Item not available',
      ipAddress: '192.168.1.100'
    }
  ]);

  // ============================================
  // EDIT BILL STATE
  // ============================================

  const [editForm, setEditForm] = useState({
    field: '',
    newValue: '',
    reason: ''
  });

  // ============================================
  // VOID BILL STATE
  // ============================================

  const [voidForm, setVoidForm] = useState({
    reasonCode: '',
    customReason: '',
    refundMethod: 'original', // 'original', 'cash', 'wallet'
    partialRefund: false,
    refundItems: []
  });

  // ============================================
  // FUNCTIONS
  // ============================================

  const handleEditBill = (bill) => {
    setSelectedBill(bill);
    setShowEditModal(true);
  };

  const handleVoidBill = (bill) => {
    setSelectedBill(bill);
    setShowVoidModal(true);
  };

  const confirmVoid = () => {
    if (!selectedBill || !voidForm.reasonCode) return;

    // Update bill
    setBills(prev => prev.map(b =>
      b.id === selectedBill.id
        ? {
            ...b,
            isVoided: true,
            status: 'voided',
            voidReason: voidForm.reasonCode === 'OTHER' ? voidForm.customReason : voidForm.reasonCode,
            voidedBy: 'Current User',
            voidedAt: new Date().toISOString()
          }
        : b
    ));

    // Add to audit trail
    setAuditTrail(prev => [{
      id: `AUD${Date.now()}`,
      billNumber: selectedBill.billNumber,
      action: 'VOID',
      field: null,
      oldValue: `₹${selectedBill.total}`,
      newValue: 'Voided',
      performedBy: 'Current User',
      performedAt: new Date().toISOString(),
      reason: voidForm.reasonCode === 'OTHER' ? voidForm.customReason : voidReasonCodes.find(r => r.code === voidForm.reasonCode)?.label,
      ipAddress: '192.168.1.100'
    }, ...prev]);

    setShowVoidModal(false);
    setVoidForm({ reasonCode: '', customReason: '', refundMethod: 'original', partialRefund: false, refundItems: [] });
    setSelectedBill(null);
  };

  const reopenBill = (bill) => {
    setBills(prev => prev.map(b =>
      b.id === bill.id ? { ...b, status: 'open', isLocked: false } : b
    ));
  };

  const formatTime = (time) => {
    return new Date(`2024-01-01 ${time}`).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/merchant')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <FileText size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Bill Management</h1>
              <p className="text-white/80 mt-1">Edit, Void, Backdate & Audit Trail</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Today's Bills</div>
              <div className="text-2xl font-bold mt-1">{bills.length}</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Voided Today</div>
              <div className="text-2xl font-bold mt-1">
                {bills.filter(b => b.isVoided).length}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Edited Today</div>
              <div className="text-2xl font-bold mt-1">
                {bills.filter(b => b.lastModifiedBy).length}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Pending Refunds</div>
              <div className="text-2xl font-bold mt-1">0</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-white/70 text-sm">Audit Entries</div>
              <div className="text-2xl font-bold mt-1">{auditTrail.length}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'bills', label: 'All Bills', icon: Receipt },
            { id: 'voided', label: 'Voided Bills', icon: XCircle },
            { id: 'edited', label: 'Edited Bills', icon: Edit3 },
            { id: 'audit', label: 'Audit Trail', icon: History },
            { id: 'refunds', label: 'Refunds', icon: RotateCcw }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-8">

        {/* Bills Tab */}
        {activeTab === 'bills' && (
          <div className="space-y-6">
            {/* Search & Filters */}
            <div className="bg-white rounded-xl shadow-sm border p-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search by bill number, customer..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                <input type="date" className="px-4 py-2 border rounded-lg" />
                <select className="px-4 py-2 border rounded-lg">
                  <option value="">All Status</option>
                  <option value="closed">Closed</option>
                  <option value="voided">Voided</option>
                  <option value="open">Open</option>
                </select>
              </div>
            </div>

            {/* Bills List */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Bill #</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Date & Time</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Customer</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Amount</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Payment</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Staff</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bills.map(bill => (
                      <tr key={bill.id} className={`border-t hover:bg-gray-50 ${bill.isVoided ? 'bg-red-50' : ''}`}>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-800">{bill.billNumber}</span>
                            {bill.isLocked && <Lock size={14} className="text-gray-400" />}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-gray-800">{bill.date}</div>
                          <div className="text-sm text-gray-500">{formatTime(bill.time)}</div>
                        </td>
                        <td className="p-4">
                          <div className="text-gray-800">{bill.customer.name}</div>
                          {bill.customer.phone && (
                            <div className="text-sm text-gray-500">{bill.customer.phone}</div>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="font-medium text-gray-800">₹{bill.total.toFixed(2)}</div>
                          <div className="text-xs text-gray-500">{bill.items.length} items</div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            bill.paymentMethod === 'cash' ? 'bg-green-100 text-green-700' :
                            bill.paymentMethod === 'upi' ? 'bg-purple-100 text-purple-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {bill.paymentMethod.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4">
                          {bill.isVoided ? (
                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                              Voided
                            </span>
                          ) : bill.lastModifiedBy ? (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                              Edited
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                              {bill.status}
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-gray-600">{bill.staff}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedBill(bill)}
                              className="p-2 hover:bg-gray-100 rounded"
                              title="View"
                            >
                              <Eye size={16} className="text-gray-600" />
                            </button>
                            {!bill.isVoided && bill.canEdit && (
                              <button
                                onClick={() => handleEditBill(bill)}
                                className="p-2 hover:bg-blue-100 rounded"
                                title="Edit"
                              >
                                <Edit3 size={16} className="text-blue-600" />
                              </button>
                            )}
                            {!bill.isVoided && bill.canVoid && (
                              <button
                                onClick={() => handleVoidBill(bill)}
                                className="p-2 hover:bg-red-100 rounded"
                                title="Void"
                              >
                                <Trash2 size={16} className="text-red-600" />
                              </button>
                            )}
                            {bill.status === 'closed' && !bill.isVoided && (
                              <button
                                onClick={() => reopenBill(bill)}
                                className="p-2 hover:bg-yellow-100 rounded"
                                title="Reopen"
                              >
                                <Unlock size={16} className="text-yellow-600" />
                              </button>
                            )}
                            <button className="p-2 hover:bg-gray-100 rounded" title="Print">
                              <Printer size={16} className="text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Voided Bills Tab */}
        {activeTab === 'voided' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Voided Bills</h3>
              <p className="text-sm text-gray-500">All voided/cancelled transactions</p>
            </div>
            <div className="p-6">
              {bills.filter(b => b.isVoided).length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-emerald-500 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-800">No Voided Bills</h3>
                  <p className="text-gray-500 mt-2">All transactions are valid</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bills.filter(b => b.isVoided).map(bill => (
                    <div key={bill.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-800">{bill.billNumber}</div>
                          <div className="text-sm text-gray-500">{bill.date} at {formatTime(bill.time)}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-red-600 line-through">₹{bill.total}</div>
                          <div className="text-sm text-gray-500">Voided by {bill.voidedBy}</div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-white rounded border">
                        <div className="text-sm font-medium text-gray-700">Void Reason:</div>
                        <div className="text-sm text-gray-600">{bill.voidReason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Audit Trail Tab */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800">Audit Trail</h3>
                <p className="text-sm text-gray-500">Complete history of all bill modifications</p>
              </div>
              <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2">
                <Download size={16} />
                Export Audit Log
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Timestamp</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Bill #</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Action</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Changes</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Reason</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">By</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">IP</th>
                  </tr>
                </thead>
                <tbody>
                  {auditTrail.map(entry => (
                    <tr key={entry.id} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <div className="text-gray-800">{entry.performedAt.split(' ')[0]}</div>
                        <div className="text-sm text-gray-500">{entry.performedAt.split(' ')[1]}</div>
                      </td>
                      <td className="p-4 font-medium text-gray-800">{entry.billNumber}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          entry.action === 'VOID' ? 'bg-red-100 text-red-700' :
                          entry.action === 'EDIT' ? 'bg-blue-100 text-blue-700' :
                          entry.action === 'PARTIAL_REFUND' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {entry.action}
                        </span>
                      </td>
                      <td className="p-4">
                        {entry.field && (
                          <div className="text-sm">
                            <span className="text-gray-500">{entry.field}:</span>
                            <span className="text-red-500 line-through ml-2">{entry.oldValue}</span>
                            <span className="text-emerald-600 ml-2">→ {entry.newValue}</span>
                          </div>
                        )}
                      </td>
                      <td className="p-4 text-gray-600 text-sm">{entry.reason}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-gray-400" />
                          <span className="text-gray-800">{entry.performedBy}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-500 text-sm font-mono">{entry.ipAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Refunds Tab */}
        {activeTab === 'refunds' && (
          <div className="space-y-6">
            {/* Pending Refunds */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Pending Refunds</h3>
              <div className="text-center py-8 text-gray-500">
                <CheckCircle className="mx-auto text-emerald-500 mb-4" size={48} />
                <p>No pending refunds</p>
              </div>
            </div>

            {/* Refund History */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Refund History</h3>
              </div>
              <div className="p-6">
                {auditTrail.filter(a => a.action === 'PARTIAL_REFUND').map(refund => (
                  <div key={refund.id} className="border rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800">{refund.billNumber}</div>
                        <div className="text-sm text-gray-500">{refund.performedAt}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-orange-600">{refund.oldValue}</div>
                        <div className="text-sm text-gray-500">Refunded</div>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">Reason: {refund.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Edited Bills Tab */}
        {activeTab === 'edited' && (
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-gray-800">Edited Bills</h3>
              <p className="text-sm text-gray-500">Bills that have been modified after creation</p>
            </div>
            <div className="p-6">
              {bills.filter(b => b.lastModifiedBy).map(bill => (
                <div key={bill.id} className="border border-yellow-200 rounded-lg p-4 mb-4 bg-yellow-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-gray-800">{bill.billNumber}</div>
                      <div className="text-sm text-gray-500">Original: {bill.date} at {formatTime(bill.time)}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-800">₹{bill.total}</div>
                      <div className="text-sm text-gray-500">Modified by {bill.lastModifiedBy}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Last modified: {bill.lastModifiedAt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Void Modal */}
      {showVoidModal && selectedBill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md m-4">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Trash2 className="text-red-600" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Void Bill</h3>
                  <p className="text-sm text-gray-500">{selectedBill.billNumber}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">₹{selectedBill.total}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Payment</span>
                  <span className="uppercase">{selectedBill.paymentMethod}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Void Reason *
                </label>
                <select
                  value={voidForm.reasonCode}
                  onChange={(e) => setVoidForm(prev => ({ ...prev, reasonCode: e.target.value }))}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select reason...</option>
                  {voidReasonCodes.map(reason => (
                    <option key={reason.code} value={reason.code}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>

              {voidForm.reasonCode === 'OTHER' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specify Reason *
                  </label>
                  <textarea
                    value={voidForm.customReason}
                    onChange={(e) => setVoidForm(prev => ({ ...prev, customReason: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                    rows={3}
                    placeholder="Enter reason..."
                  />
                </div>
              )}

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-600 mt-0.5" size={20} />
                  <div className="text-sm text-yellow-800">
                    <p className="font-medium">This action will be recorded</p>
                    <p className="mt-1">Your name, timestamp, and IP address will be logged in the audit trail.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t bg-gray-50 flex gap-3">
              <button
                onClick={() => setShowVoidModal(false)}
                className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmVoid}
                disabled={!voidForm.reasonCode || (voidForm.reasonCode === 'OTHER' && !voidForm.customReason)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Void Bill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchantBillManagement;
