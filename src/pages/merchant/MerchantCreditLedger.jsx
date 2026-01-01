import React, { useState } from 'react';
import {
  ArrowLeft, Plus, Search, Filter, User, Phone, Calendar, IndianRupee,
  Send, MessageCircle, Clock, AlertTriangle, CheckCircle, TrendingUp,
  TrendingDown, ChevronRight, Download, Upload, MoreVertical
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';

const MerchantCreditLedger = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('customers');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [showAddEntry, setShowAddEntry] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [entryType, setEntryType] = useState('credit'); // credit or payment

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      phone: '9876543210',
      balance: 12500,
      lastTransaction: '2 days ago',
      transactions: 15,
      status: 'overdue',
      dueDate: '25 Dec 2024'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      phone: '9876543211',
      balance: 4200,
      lastTransaction: '1 week ago',
      transactions: 8,
      status: 'due_soon',
      dueDate: '30 Dec 2024'
    },
    {
      id: 3,
      name: 'Amit Patel',
      phone: '9876543212',
      balance: 850,
      lastTransaction: '3 days ago',
      transactions: 5,
      status: 'normal',
      dueDate: '15 Jan 2025'
    },
    {
      id: 4,
      name: 'Sunita Devi',
      phone: '9876543213',
      balance: 28000,
      lastTransaction: '1 month ago',
      transactions: 22,
      status: 'overdue',
      dueDate: '10 Dec 2024'
    },
    {
      id: 5,
      name: 'Mohammed Ali',
      phone: '9876543214',
      balance: 0,
      lastTransaction: '5 days ago',
      transactions: 12,
      status: 'cleared',
      dueDate: '-'
    },
  ]);

  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'ABC Distributors', phone: '9988776655', balance: -45000, lastTransaction: '1 week ago' },
    { id: 2, name: 'Fresh Vegetables', phone: '9988776656', balance: -12000, lastTransaction: '3 days ago' },
    { id: 3, name: 'Dairy Products Co.', phone: '9988776657', balance: -8500, lastTransaction: '2 days ago' },
  ]);

  const [transactionHistory] = useState([
    { id: 1, customerId: 1, type: 'credit', amount: 2500, date: '28 Dec 2024', note: 'Monthly groceries' },
    { id: 2, customerId: 1, type: 'payment', amount: 1000, date: '26 Dec 2024', note: 'Partial payment - Cash' },
    { id: 3, customerId: 1, type: 'credit', amount: 1800, date: '20 Dec 2024', note: 'Weekly items' },
  ]);

  const totalReceivable = customers.reduce((sum, c) => sum + c.balance, 0);
  const totalPayable = Math.abs(suppliers.reduce((sum, s) => sum + s.balance, 0));
  const overdueAmount = customers.filter(c => c.status === 'overdue').reduce((sum, c) => sum + c.balance, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'text-red-400 bg-red-900/30';
      case 'due_soon': return 'text-yellow-400 bg-yellow-900/30';
      case 'normal': return 'text-blue-400 bg-blue-900/30';
      case 'cleared': return 'text-green-400 bg-green-900/30';
      default: return 'text-gray-400 bg-gray-700';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'overdue': return 'Overdue';
      case 'due_soon': return 'Due Soon';
      case 'normal': return 'Normal';
      case 'cleared': return 'Cleared';
      default: return status;
    }
  };

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.phone.includes(searchQuery);
    const matchesFilter = filterType === 'all' || c.status === filterType;
    return matchesSearch && matchesFilter;
  });

  const sendReminder = (customer, method) => {
    alert(`Reminder sent to ${customer.name} via ${method}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Credit Ledger</h1>
              <p className="text-emerald-200 text-sm">Udhar Khata / उधार खाता</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddEntry(true)}
            className="bg-white/20 p-2 rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-green-300 mb-1">
              <TrendingUp size={14} className="mr-1" />
              <span className="text-xs">To Receive</span>
            </div>
            <p className="text-lg font-bold">₹{(totalReceivable/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-red-300 mb-1">
              <TrendingDown size={14} className="mr-1" />
              <span className="text-xs">To Pay</span>
            </div>
            <p className="text-lg font-bold">₹{(totalPayable/1000).toFixed(1)}K</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center text-yellow-300 mb-1">
              <AlertTriangle size={14} className="mr-1" />
              <span className="text-xs">Overdue</span>
            </div>
            <p className="text-lg font-bold">₹{(overdueAmount/1000).toFixed(1)}K</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('customers')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'customers' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400'
          }`}
        >
          Customers (Receivable)
        </button>
        <button
          onClick={() => setActiveTab('suppliers')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'suppliers' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400'
          }`}
        >
          Suppliers (Payable)
        </button>
      </div>

      {/* Search & Filter */}
      <div className="p-4 space-y-3">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
          />
        </div>

        {activeTab === 'customers' && (
          <div className="flex space-x-2 overflow-x-auto">
            {['all', 'overdue', 'due_soon', 'normal', 'cleared'].map(filter => (
              <button
                key={filter}
                onClick={() => setFilterType(filter)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm capitalize ${
                  filterType === filter ? 'bg-emerald-500 text-white' : 'bg-gray-700 text-gray-300'
                }`}
              >
                {filter === 'all' ? 'All' : getStatusLabel(filter)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Customer/Supplier List */}
      <div className="px-4 space-y-3">
        {activeTab === 'customers' ? (
          filteredCustomers.map(customer => (
            <div
              key={customer.id}
              className="bg-gray-800 rounded-xl p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{customer.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{customer.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Phone size={12} className="mr-1" /> {customer.phone}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${customer.balance > 0 ? 'text-red-400' : 'text-green-400'}`}>
                    ₹{customer.balance.toLocaleString()}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(customer.status)}`}>
                    {getStatusLabel(customer.status)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <span>Last: {customer.lastTransaction}</span>
                <span>Due: {customer.dueDate}</span>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setSelectedCustomer(customer);
                    setEntryType('payment');
                    setShowAddEntry(true);
                  }}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                >
                  <IndianRupee size={14} className="mr-1" /> Got Payment
                </button>
                <button
                  onClick={() => {
                    setSelectedCustomer(customer);
                    setEntryType('credit');
                    setShowAddEntry(true);
                  }}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                >
                  <Plus size={14} className="mr-1" /> Gave Credit
                </button>
                <button
                  onClick={() => sendReminder(customer, 'WhatsApp')}
                  className="bg-green-700 text-white p-2 rounded-lg"
                >
                  <MessageCircle size={18} />
                </button>
              </div>

              {/* View Details */}
              <button
                onClick={() => setSelectedCustomer(selectedCustomer?.id === customer.id ? null : customer)}
                className="w-full mt-3 text-emerald-400 text-sm flex items-center justify-center"
              >
                View History <ChevronRight size={16} />
              </button>

              {/* Transaction History */}
              {selectedCustomer?.id === customer.id && (
                <div className="mt-3 pt-3 border-t border-gray-700">
                  <h4 className="text-gray-400 text-sm mb-2">Recent Transactions</h4>
                  {transactionHistory.filter(t => t.customerId === customer.id).map(txn => (
                    <div key={txn.id} className="flex items-center justify-between py-2 border-b border-gray-700/50">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                          txn.type === 'payment' ? 'bg-green-900' : 'bg-red-900'
                        }`}>
                          {txn.type === 'payment' ? (
                            <TrendingDown size={14} className="text-green-400" />
                          ) : (
                            <TrendingUp size={14} className="text-red-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-white text-sm">{txn.note}</p>
                          <p className="text-gray-500 text-xs">{txn.date}</p>
                        </div>
                      </div>
                      <p className={`font-medium ${txn.type === 'payment' ? 'text-green-400' : 'text-red-400'}`}>
                        {txn.type === 'payment' ? '-' : '+'}₹{txn.amount}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          suppliers.map(supplier => (
            <div key={supplier.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{supplier.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{supplier.name}</h3>
                    <p className="text-gray-400 text-sm">{supplier.phone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-400">
                    ₹{Math.abs(supplier.balance).toLocaleString()}
                  </p>
                  <span className="text-xs text-gray-400">To Pay</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
                Make Payment
              </button>
            </div>
          ))
        )}
      </div>

      {/* Bulk Reminder Button */}
      {activeTab === 'customers' && (
        <div className="fixed bottom-24 right-4">
          <button className="bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center">
            <MessageCircle size={20} className="mr-2" />
            Send All Reminders
          </button>
        </div>
      )}

      {/* Add Entry Modal */}
      {showAddEntry && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">
                {entryType === 'payment' ? 'Record Payment' : 'Add Credit Entry'}
              </h3>
              <button onClick={() => { setShowAddEntry(false); setSelectedCustomer(null); }}>
                <span className="text-gray-400 text-2xl">&times;</span>
              </button>
            </div>

            {/* Entry Type Toggle */}
            <div className="flex bg-gray-800 rounded-xl p-1 mb-4">
              <button
                onClick={() => setEntryType('credit')}
                className={`flex-1 py-2 rounded-lg text-sm ${
                  entryType === 'credit' ? 'bg-red-500 text-white' : 'text-gray-400'
                }`}
              >
                Credit Given (उधार दिया)
              </button>
              <button
                onClick={() => setEntryType('payment')}
                className={`flex-1 py-2 rounded-lg text-sm ${
                  entryType === 'payment' ? 'bg-green-500 text-white' : 'text-gray-400'
                }`}
              >
                Payment Received (पैसा मिला)
              </button>
            </div>

            {/* Customer Select */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Customer</label>
              <select className="w-full bg-gray-800 text-white p-3 rounded-xl">
                <option value="">Select Customer</option>
                {customers.map(c => (
                  <option key={c.id} value={c.id} selected={selectedCustomer?.id === c.id}>
                    {c.name} (₹{c.balance})
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-gray-800 text-white text-2xl font-bold pl-10 pr-4 py-4 rounded-xl"
                />
              </div>
            </div>

            {/* Note */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Note (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Monthly groceries, Partial payment..."
                className="w-full bg-gray-800 text-white p-3 rounded-xl"
              />
            </div>

            {/* Save Button */}
            <button className={`w-full py-4 rounded-xl font-bold text-white ${
              entryType === 'credit' ? 'bg-red-500' : 'bg-green-500'
            }`}>
              {entryType === 'credit' ? 'Add Credit Entry' : 'Record Payment'}
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantCreditLedger;
