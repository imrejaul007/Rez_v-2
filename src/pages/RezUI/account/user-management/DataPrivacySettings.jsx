import React, { useState } from 'react';
import { Shield, Toggle2 } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function DataPrivacySettings() {
  const [settings, setSettings] = useState({
    shareData: true,
    analytics: true,
    marketing: false,
    thirdParty: false,
  });

  const toggleSetting = (key) => {
    setSettings({...settings, [key]: !settings[key]});
  };

  const privacyOptions = [
    { key: 'shareData', label: 'Share Usage Data', desc: 'Help us improve the app' },
    { key: 'analytics', label: 'Analytics', desc: 'Track app performance' },
    { key: 'marketing', label: 'Marketing Emails', desc: 'Get promotional offers' },
    { key: 'thirdParty', label: 'Third Party Sharing', desc: 'Share data with partners' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Shield size={28} /> Data Privacy
        </h1>

        <div className="space-y-3">
          {privacyOptions.map(option => (
            <div key={option.key} className="bg-white rounded-lg p-4 flex items-center justify-between shadow">
              <div>
                <p className="font-semibold text-gray-900">{option.label}</p>
                <p className="text-sm text-gray-600">{option.desc}</p>
              </div>
              <button
                onClick={() => toggleSetting(option.key)}
                className={`w-12 h-6 rounded-full transition ${settings[option.key] ? 'bg-purple-500' : 'bg-gray-300'}`}
              />
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}