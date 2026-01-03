import { useState } from 'react';
import { Users, TrendingUp, DollarSign, Check } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateAccount = () => {
  const [account] = useState({
    company: 'Tech Solutions Inc',
    employees: 150,
    spending: 450000,
    tier: 'Enterprise'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Corporate Account</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your business</p>
      </div>

      <div className="px-4 py-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white mb-6">
          <p className="text-sm opacity-90 mb-2">Company</p>
          <p className="text-3xl font-bold mb-4">{account.company}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs opacity-75">Employees</p>
              <p className="text-xl font-bold">{account.employees}</p>
            </div>
            <div>
              <p className="text-xs opacity-75">Tier</p>
              <p className="text-xl font-bold">{account.tier}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Annual Spending</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{(account.spending / 100000).toFixed(1)}L</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="font-bold text-rez-navy dark:text-white mb-3">Benefits</h3>
          <div className="space-y-2">
            {['Bulk discounts', 'Dedicated support', 'Custom billing', 'Analytics dashboard'].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-white dark:bg-dark-800 rounded-lg">
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateAccount;
