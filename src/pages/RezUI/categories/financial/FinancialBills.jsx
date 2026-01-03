import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Zap, Droplet, Wifi, Phone } from 'lucide-react';

function FinancialBills() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const bills = [
    { id: 1, name: 'Electricity Bill', provider: 'MSEB', icon: Zap, amount: 2500, dueDate: '2024-02-28', color: 'text-yellow-600 dark:text-yellow-400' },
    { id: 2, name: 'Water Bill', provider: 'BMC', icon: Droplet, amount: 450, dueDate: '2024-02-25', color: 'text-blue-600 dark:text-blue-400' },
    { id: 3, name: 'Internet Bill', provider: 'Airtel', icon: Wifi, amount: 799, dueDate: '2024-03-05', color: 'text-red-600 dark:text-red-400' },
    { id: 4, name: 'Mobile Bill', provider: 'Jio', icon: Phone, amount: 399, dueDate: '2024-03-01', color: 'text-indigo-600 dark:text-indigo-400' }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><FileText className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">Pay Bills</h1></div><p className="text-xs text-white/80">All your bills in one place</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {bills.map(bill => (
          <div key={bill.id} onClick={() => navigate(`/financial/pay-bill/${bill.id}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-indigo-500 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center">
                <bill.icon className={`w-6 h-6 ${bill.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white">{bill.name}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{bill.provider}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-rez-navy dark:text-white">₹{bill.amount}</p>
                <p className="text-xs text-red-600 dark:text-red-400">Due {bill.dueDate}</p>
              </div>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg bg-indigo-500 text-white font-bold text-sm">Pay Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialBills;
