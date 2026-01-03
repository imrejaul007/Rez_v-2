import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function WalletFilters() {
  const [filters, setFilters] = useState({ type: '', date: '', amount: '' });

  const coinTypes = ['All', 'Cash Coins', 'Points Coins', 'Bonus Coins'];
  const dateRanges = ['All Time', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Filter size={28} /> Filter Wallet
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Coin Type</h3>
            <div className="flex flex-wrap gap-2">
              {coinTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setFilters({...filters, type})}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filters.type === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Date Range</h3>
            <div className="space-y-2">
              {dateRanges.map(range => (
                <button
                  key={range}
                  onClick={() => setFilters({...filters, date: range})}
                  className={`w-full text-left px-4 py-2 rounded transition ${filters.date === range ? 'bg-blue-100 border-l-4 border-blue-500' : 'bg-gray-100'}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg font-semibold">Apply Filters</button>
            <button onClick={() => setFilters({type: '', date: '', amount: ''})} className="flex-1 bg-gray-300 text-gray-900 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
              <X size={18} /> Reset
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}