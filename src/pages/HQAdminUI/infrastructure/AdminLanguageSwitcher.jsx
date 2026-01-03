import React, { useState } from 'react';
import { Globe, Check, Settings, Monitor } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminLanguageSwitcher = () => {
  const [defaultLang, setDefaultLang] = useState('en');

  const languages = [
    { code: 'en', name: 'English', native: 'English', enabled: true, default: true },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी', enabled: true, default: false },
    { code: 'bn', name: 'Bengali', native: 'বাংলা', enabled: true, default: false },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்', enabled: false, default: false },
    { code: 'te', name: 'Telugu', native: 'తెలుగు', enabled: false, default: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Globe className="w-10 h-10 text-indigo-400" />
            Language Settings
          </h1>
          <p className="text-gray-400">Configure app language preferences</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-400" />
            Global Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Default Platform Language</label>
              <select className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-indigo-400">
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name} ({lang.native})</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="auto-detect" defaultChecked className="w-4 h-4" />
              <label htmlFor="auto-detect" className="text-white">Auto-detect user language based on location</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="rtl-support" className="w-4 h-4" />
              <label htmlFor="rtl-support" className="text-white">Enable RTL support for Arabic/Urdu</label>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <h2 className="text-xl font-bold text-white mb-6">Available Languages</h2>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.code} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold text-white">
                    {lang.code.toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{lang.name}</p>
                    <p className="text-gray-400 text-sm">{lang.native}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {lang.default && (
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
                      Default
                    </span>
                  )}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={lang.enabled} className="sr-only peer" readOnly />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLanguageSwitcher;
