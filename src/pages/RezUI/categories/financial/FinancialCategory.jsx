import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Zap, Phone, Wifi, Tv, Droplet, FileText } from 'lucide-react';

function FinancialCategory() {
  const navigate = useNavigate();
  const { category } = useParams();

  const categoryData = {
    electricity: { name: 'Electricity', icon: Zap, color: 'from-yellow-600 to-orange-600', providers: ['MSEB', 'BEST', 'Adani'] },
    mobile: { name: 'Mobile Recharge', icon: Phone, color: 'from-blue-600 to-indigo-600', providers: ['Jio', 'Airtel', 'Vi'] },
    internet: { name: 'Broadband', icon: Wifi, color: 'from-purple-600 to-pink-600', providers: ['Airtel', 'Jio Fiber', 'ACT'] },
    dth: { name: 'DTH Recharge', icon: Tv, color: 'from-red-600 to-pink-600', providers: ['Tata Play', 'Airtel DTH', 'Dish TV'] },
    water: { name: 'Water Bill', icon: Droplet, color: 'from-cyan-600 to-blue-600', providers: ['BMC', 'MCGM'] }
  };

  const current = categoryData[category] || categoryData.electricity;
  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className={`sticky top-0 z-10 bg-gradient-to-r ${current.color}`}>
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <div><div className="flex items-center gap-2"><Icon className="w-5 h-5 text-white" /><h1 className="text-h3 font-poppins text-white">{current.name}</h1></div><p className="text-xs text-white/80">Select your provider</p></div>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {current.providers.map((provider, i) => (
          <div key={i} onClick={() => navigate(`/financial/pay-bill/${i + 1}`)} className="bg-white dark:bg-dark-800 rounded-2xl p-4 border border-rez-gray-200 dark:border-dark-700 hover:border-indigo-500 transition-all cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center">
                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white">{provider}</h3>
                <p className="text-sm text-rez-gray-600 dark:text-gray-400">{current.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialCategory;
