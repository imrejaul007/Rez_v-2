import { useState } from 'react';
import { ArrowLeft, Download, Filter, Calendar, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';

export default function WalletStatements() {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('thisMonth');
  const [searchQuery, setSearchQuery] = useState('');
  const [transactionType, setTransactionType] = useState('all');

  // Backend API: GET /api/wallet/statements?startDate=&endDate=&type=
  // Response: { transactions: [], summary: { totalCredit, totalDebit, closingBalance } }

  const transactions = [
    { id: '1', date: '2026-01-02', type: 'credit', description: 'Cashback from order #12345', amount: 50, balance: 5420 },
    { id: '2', date: '2026-01-01', type: 'debit', description: 'Transfer to John Doe', amount: -200, balance: 5370 },
    { id: '3', date: '2025-12-31', type: 'credit', description: 'Referral bonus', amount: 100, balance: 5570 },
    { id: '4', date: '2025-12-30', type: 'debit', description: 'Order payment #12344', amount: -850, balance: 5470 },
    { id: '5', date: '2025-12-29', type: 'credit', description: 'Wallet top-up', amount: 1000, balance: 6320 },
  ];

  const downloadStatement = () => {
    // API: GET /api/wallet/statements/download?format=pdf&startDate=&endDate=
    alert('Statement download started');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <button onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Wallet Statement</h1>
        <p className="text-purple-100 mt-1">View and download transaction history</p>
      </div>

      {/* Filters */}
      <div className="p-4 bg-white">
        <div className="space-y-3">
          {/* Date Range */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { value: 'today', label: 'Today' },
              { value: 'thisWeek', label: 'This Week' },
              { value: 'thisMonth', label: 'This Month' },
              { value: 'last3Months', label: 'Last 3 Months' },
              { value: 'custom', label: 'Custom' },
            ].map((range) => (
              <button
                key={range.value}
                onClick={() => setDateRange(range.value)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                  dateRange === range.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Transaction Type Filter */}
          <div className="flex gap-2">
            {[
              { value: 'all', label: 'All' },
              { value: 'credit', label: 'Credit' },
              { value: 'debit', label: 'Debit' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setTransactionType(type.value)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                  transactionType === type.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white mx-4 rounded-xl mb-4">
        <p className="text-sm text-purple-100 mb-2">Summary for {dateRange}</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs opacity-80">Total Credit</p>
            <p className="text-lg font-bold">₹1,150</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Total Debit</p>
            <p className="text-lg font-bold">₹1,050</p>
          </div>
          <div>
            <p className="text-xs opacity-80">Net Balance</p>
            <p className="text-lg font-bold">+₹100</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="px-4 mb-4">
        <button
          onClick={downloadStatement}
          className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-50 transition-all"
        >
          <Download size={20} />
          Download Statement (PDF)
        </button>
      </div>

      {/* Transactions List */}
      <div className="px-4 space-y-3">
        <h2 className="font-bold text-gray-900">Transactions</h2>
        {transactions.map((txn) => (
          <div key={txn.id} className="bg-white p-4 rounded-xl">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{txn.description}</p>
                <p className="text-sm text-gray-500 mt-1">{txn.date}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {txn.type === 'credit' ? '+' : ''}₹{Math.abs(txn.amount)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Balance: ₹{txn.balance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
