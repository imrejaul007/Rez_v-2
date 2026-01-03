import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, History, CheckCircle, Clock } from 'lucide-react';

function FinancialHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const transactions = [
    { id: 1, type: 'Electricity Bill', provider: 'MSEB', amount: 2500, status: 'Success', date: '2024-01-15', cashback: 50 },
    { id: 2, type: 'Mobile Recharge', provider: 'Jio', amount: 399, status: 'Success', date: '2024-01-18', cashback: 20 },
    { id: 3, type: 'Water Bill', provider: 'BMC', amount: 450, status: 'Pending', date: '2024-01-20', cashback: 0 }
  ];

  const filteredTransactions = activeTab === 'all' ? transactions : transactions.filter(t => t.status.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><History className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Transaction History</h1></div><p className="text-xs text-white/80">All your payments</p></div>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-rez-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800">
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('all')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'all' ? 'bg-purple-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>All</button>
          <button onClick={() => setActiveTab('success')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'success' ? 'bg-purple-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Success</button>
          <button onClick={() => setActiveTab('pending')} className={`flex-1 py-2 rounded-lg font-bold text-sm ${activeTab === 'pending' ? 'bg-purple-500 text-white' : 'bg-rez-gray-100 dark:bg-dark-700 text-rez-gray-600 dark:text-gray-400'}`}>Pending</button>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {filteredTransactions.map(transaction => (
          <div key={transaction.id} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white">{transaction.type}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{transaction.provider} • {transaction.date}</p>
              </div>
              <div className={`px-2 py-1 rounded-md text-xs font-bold ${transaction.status === 'Success' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}`}>
                {transaction.status}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-rez-navy dark:text-white">₹{transaction.amount}</span>
              {transaction.cashback > 0 && <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+₹{transaction.cashback} cashback</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialHistory;
