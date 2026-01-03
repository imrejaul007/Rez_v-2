import React, { useState } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function AppThemeSelector() {
  const [theme, setTheme] = useState('light');

  const themes = [
    { id: 'light', name: 'Light', icon: Sun, color: 'from-yellow-200 to-yellow-400' },
    { id: 'dark', name: 'Dark', icon: Moon, color: 'from-gray-700 to-gray-900' },
    { id: 'auto', name: 'Auto', icon: Palette, color: 'from-purple-400 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Palette size={28} /> App Theme
        </h1>
        <p className="text-gray-600 mb-6">Choose your preferred theme</p>

        <div className="grid grid-cols-3 gap-3">
          {themes.map(t => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`p-4 rounded-lg border-2 transition ${theme === t.id ? 'border-orange-500' : 'border-gray-300'}`}
              >
                <div className={`w-full h-16 rounded bg-gradient-to-br ${t.color} flex items-center justify-center mb-2`}>
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-sm font-semibold">{t.name}</p>
              </button>
            );
          })}
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-semibold">
          Apply Theme
        </button>
      </div>
      <BottomNav />
    </div>
  );
}