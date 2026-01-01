import { useState } from 'react';
import {
  Users, Split, DollarSign, CheckCircle, Clock, XCircle, Plus,
  Minus, User, CreditCard, QrCode, Send, Copy, Share2, Percent,
  Receipt, ArrowRight, RefreshCw, Smartphone, Mail, MessageSquare
} from 'lucide-react';

export default function MerchantBillSplitting() {
  const [activeTab, setActiveTab] = useState('active');
  const [splitMethod, setSplitMethod] = useState('equal');
  const [selectedBill, setSelectedBill] = useState(null);

  // Stats
  const stats = {
    totalSplitBills: 234,
    activeSplits: 12,
    avgSplitSize: 3.2,
    completionRate: 94.5,
    avgSettleTime: '8 mins',
    coinsAwarded: 15680
  };

  // Active Split Bills
  const splitBills = [
    {
      id: 'SPLIT_001',
      tableNo: 'T-05',
      orderId: 'ORD_4521',
      totalAmount: 4500,
      tipAmount: 450,
      grandTotal: 4950,
      splitMethod: 'equal',
      participants: [
        { id: 1, name: 'Rahul', phone: '+91 98765 43210', amount: 1650, status: 'paid', paidAt: '2:34 PM', coinsEarned: 165 },
        { id: 2, name: 'Priya', phone: '+91 87654 32109', amount: 1650, status: 'paid', paidAt: '2:36 PM', coinsEarned: 165 },
        { id: 3, name: 'Amit', phone: '+91 76543 21098', amount: 1650, status: 'pending', paidAt: null, coinsEarned: 0 }
      ],
      createdAt: '2:30 PM',
      status: 'partial'
    },
    {
      id: 'SPLIT_002',
      tableNo: 'T-12',
      orderId: 'ORD_4520',
      totalAmount: 6800,
      tipAmount: 680,
      grandTotal: 7480,
      splitMethod: 'by_items',
      participants: [
        { id: 1, name: 'Vikram', phone: '+91 65432 10987', amount: 2890, items: ['Butter Chicken', 'Naan x2', 'Lassi'], status: 'paid', paidAt: '2:15 PM', coinsEarned: 289 },
        { id: 2, name: 'Sneha', phone: '+91 54321 09876', amount: 2340, items: ['Paneer Tikka', 'Roti x3', 'Raita'], status: 'pending', paidAt: null, coinsEarned: 0 },
        { id: 3, name: 'Karan', phone: '+91 43210 98765', amount: 2250, items: ['Dal Makhani', 'Rice', 'Gulab Jamun x2'], status: 'pending', paidAt: null, coinsEarned: 0 }
      ],
      createdAt: '2:00 PM',
      status: 'partial'
    },
    {
      id: 'SPLIT_003',
      tableNo: 'T-08',
      orderId: 'ORD_4519',
      totalAmount: 3200,
      tipAmount: 320,
      grandTotal: 3520,
      splitMethod: 'custom',
      participants: [
        { id: 1, name: 'Meera', phone: '+91 32109 87654', amount: 1760, status: 'paid', paidAt: '1:45 PM', coinsEarned: 176 },
        { id: 2, name: 'Arjun', phone: '+91 21098 76543', amount: 1760, status: 'paid', paidAt: '1:48 PM', coinsEarned: 176 }
      ],
      createdAt: '1:30 PM',
      status: 'completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const getBillStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'partial': return 'bg-yellow-100 text-yellow-700';
      case 'pending': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const getSplitMethodLabel = (method) => {
    switch (method) {
      case 'equal': return 'Split Equally';
      case 'by_items': return 'Split by Items';
      case 'custom': return 'Custom Split';
      default: return method;
    }
  };

  const filteredBills = activeTab === 'active'
    ? splitBills.filter(b => b.status !== 'completed')
    : splitBills.filter(b => b.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bill Splitting</h1>
              <p className="text-gray-600 mt-1">Let diners split bills easily and pay separately</p>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
              <Split className="w-4 h-4" />
              New Split Bill
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Split className="w-4 h-4" />
              <span className="text-sm">Total Split Bills</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalSplitBills}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Active Splits</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{stats.activeSplits}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Avg Split Size</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.avgSplitSize} people</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Completion Rate</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.completionRate}%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Avg Settle Time</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.avgSettleTime}</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <span className="text-yellow-500">🪙</span>
              <span className="text-sm">Coins Awarded</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{stats.coinsAwarded.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-4 py-3 font-medium border-b-2 transition-all ${
              activeTab === 'active'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Active Splits ({splitBills.filter(b => b.status !== 'completed').length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-3 font-medium border-b-2 transition-all ${
              activeTab === 'completed'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Split Bills List */}
      <div className="px-6 py-6">
        <div className="space-y-4">
          {filteredBills.map((bill) => {
            const paidCount = bill.participants.filter(p => p.status === 'paid').length;
            const totalParticipants = bill.participants.length;
            const paidAmount = bill.participants.filter(p => p.status === 'paid').reduce((sum, p) => sum + p.amount, 0);

            return (
              <div key={bill.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Bill Header */}
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-purple-600">{bill.tableNo}</span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-sm text-gray-600">{bill.orderId}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getBillStatusColor(bill.status)}`}>
                          {bill.status === 'completed' ? 'Fully Paid' : `${paidCount}/${totalParticipants} Paid`}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {totalParticipants} people
                        </span>
                        <span className="flex items-center gap-1">
                          <Split className="w-4 h-4" />
                          {getSplitMethodLabel(bill.splitMethod)}
                        </span>
                        <span>Started {bill.createdAt}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Grand Total</div>
                      <div className="text-2xl font-bold text-gray-900">₹{bill.grandTotal.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">(incl. ₹{bill.tipAmount} tip)</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {bill.status !== 'completed' && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Payment Progress</span>
                        <span className="font-medium text-green-600">₹{paidAmount.toLocaleString()} / ₹{bill.grandTotal.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all"
                          style={{ width: `${(paidAmount / bill.grandTotal) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Participants */}
                <div className="divide-y divide-gray-100">
                  {bill.participants.map((participant) => (
                    <div key={participant.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{participant.name}</div>
                          <div className="text-sm text-gray-500">{participant.phone}</div>
                          {participant.items && (
                            <div className="text-xs text-gray-400 mt-1">
                              {participant.items.join(', ')}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-bold text-gray-900">₹{participant.amount.toLocaleString()}</div>
                          {participant.coinsEarned > 0 && (
                            <div className="text-xs text-green-600 flex items-center gap-1 justify-end">
                              <span className="text-yellow-500">🪙</span>
                              +{participant.coinsEarned} coins
                            </div>
                          )}
                        </div>
                        <div className="w-24">
                          {participant.status === 'paid' ? (
                            <div className="flex flex-col items-end">
                              <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                <CheckCircle className="w-4 h-4" />
                                Paid
                              </span>
                              <span className="text-xs text-gray-500">{participant.paidAt}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700" title="Send Payment Link">
                                <Send className="w-4 h-4" />
                              </button>
                              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50" title="Show QR">
                                <QrCode className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                {bill.status !== 'completed' && (
                  <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-white flex items-center gap-1">
                        <Plus className="w-4 h-4" />
                        Add Person
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-white flex items-center gap-1">
                        <RefreshCw className="w-4 h-4" />
                        Recalculate
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-white flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        Share All Links
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        Send Reminders
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Split Method Info Card */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="font-bold text-gray-900 mb-4">Split Methods Available</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Equal Split</span>
              </div>
              <p className="text-sm text-purple-700">Divide the total bill equally among all diners</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Receipt className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Split by Items</span>
              </div>
              <p className="text-sm text-blue-700">Each person pays for their ordered items</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-900">Custom Amount</span>
              </div>
              <p className="text-sm text-green-700">Set custom amounts for each participant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
