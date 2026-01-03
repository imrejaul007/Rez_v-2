import { useState } from 'react';
import { BarChart3, TrendingUp, Download } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateReports = () => {
  const [reports] = useState([
    { title: 'Monthly Spending', date: 'Jan 2025', icon: '📊' },
    { title: 'Team Activity', date: 'Jan 2025', icon: '👥' },
    { title: 'Budget Report', date: 'Q1 2025', icon: '💰' },
    { title: 'Vendor Performance', date: 'Jan 2025', icon: '⭐' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">Analytics and insights</p>
      </div>

      <div className="px-4 py-6 space-y-2">
        {reports.map((report, i) => (
          <div key={i} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{report.icon}</span>
              <div>
                <p className="font-bold text-rez-navy dark:text-white">{report.title}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{report.date}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded">
              <Download className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateReports;
