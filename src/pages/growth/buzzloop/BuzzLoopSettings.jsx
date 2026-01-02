import React, { useState } from 'react';
import { Settings, Bell, Lock, Eye, HelpCircle, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';

// BuzzLoop Settings: App Settings & Preferences
// Backend API: GET /api/growth/buzzloop/settings
// Backend API: PUT /api/growth/buzzloop/settings

const BuzzLoopSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    autoplay: true,
    dataS aver: false,
    privateAccount: false
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const ToggleButton = ({ enabled, onToggle }) => (
    <button onClick={onToggle}>
      {enabled ? (
        <ToggleRight className="w-12 h-6 text-purple-600" />
      ) : (
        <ToggleLeft className="w-12 h-6 text-gray-300" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Settings
        </h1>
      </div>

      <div className="px-4 mt-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Notifications</span>
            </div>
            <ToggleButton enabled={settings.notifications} onToggle={() => toggleSetting('notifications')} />
          </div>
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Autoplay Videos</span>
            </div>
            <ToggleButton enabled={settings.autoplay} onToggle={() => toggleSetting('autoplay')} />
          </div>
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Private Account</span>
            </div>
            <ToggleButton enabled={settings.privateAccount} onToggle={() => toggleSetting('privateAccount')} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between active:bg-gray-50">
            <span className="font-medium text-gray-800">Privacy Policy</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
          <button className="w-full p-4 flex items-center justify-between border-t border-gray-100 active:bg-gray-50">
            <span className="font-medium text-gray-800">Help & Support</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuzzLoopSettings;
