import React, { useState } from 'react';
import {
  Settings, Bell, MapPin, Volume2, Vibrate, Smartphone,
  Shield, Lock, HelpCircle, Info, ChevronRight, ToggleLeft,
  ToggleRight, Globe, Battery, Wifi, Database
} from 'lucide-react';

// CoinHunt Settings: App Preferences & Configuration
// Backend API: GET /api/growth/coinhunt/settings
// Backend API: PUT /api/growth/coinhunt/settings
// Backend API: POST /api/growth/coinhunt/settings/reset

const CoinHuntSettings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      nearbyCoin: true,
      rareCoin: true,
      challenges: true,
      rewards: false,
      leaderboard: false
    },
    location: {
      alwaysOn: false,
      highAccuracy: true,
      backgroundTracking: false
    },
    audio: {
      soundEffects: true,
      vibration: true,
      voiceGuidance: false
    },
    ar: {
      arMode: true,
      autoFocus: true,
      lowPowerMode: false
    },
    privacy: {
      shareLocation: true,
      showOnLeaderboard: true,
      shareStats: false
    }
  });

  const toggleSetting = (category, key) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key]
      }
    }));
  };

  const ToggleButton = ({ enabled, onToggle }) => (
    <button onClick={onToggle} className="focus:outline-none">
      {enabled ? (
        <ToggleRight className="w-12 h-6 text-green-500" />
      ) : (
        <ToggleLeft className="w-12 h-6 text-gray-300" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-4 pt-6 pb-8">
        <div className="flex items-center gap-2">
          <Settings className="w-6 h-6 text-white" />
          <h1 className="text-xl font-bold text-white">Settings</h1>
        </div>
        <p className="text-indigo-100 text-sm mt-1">Customize your coin hunting experience</p>
      </div>

      {/* Notifications Settings */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Bell className="w-5 h-5 text-indigo-600" />
          Notifications
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Nearby Coins</p>
              <p className="text-xs text-gray-500">Alert when coins are within 100m</p>
            </div>
            <ToggleButton
              enabled={settings.notifications.nearbyCoin}
              onToggle={() => toggleSetting('notifications', 'nearbyCoin')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Rare Coin Alerts</p>
              <p className="text-xs text-gray-500">Notify for rare coin spawns</p>
            </div>
            <ToggleButton
              enabled={settings.notifications.rareCoin}
              onToggle={() => toggleSetting('notifications', 'rareCoin')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Challenge Updates</p>
              <p className="text-xs text-gray-500">Daily & weekly challenge notifications</p>
            </div>
            <ToggleButton
              enabled={settings.notifications.challenges}
              onToggle={() => toggleSetting('notifications', 'challenges')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Reward Notifications</p>
              <p className="text-xs text-gray-500">Alert for new rewards & offers</p>
            </div>
            <ToggleButton
              enabled={settings.notifications.rewards}
              onToggle={() => toggleSetting('notifications', 'rewards')}
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Leaderboard Updates</p>
              <p className="text-xs text-gray-500">Rank changes & achievements</p>
            </div>
            <ToggleButton
              enabled={settings.notifications.leaderboard}
              onToggle={() => toggleSetting('notifications', 'leaderboard')}
            />
          </div>
        </div>
      </div>

      {/* Location Settings */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-600" />
          Location
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Always-On Location</p>
              <p className="text-xs text-gray-500">Keep location active while hunting</p>
            </div>
            <ToggleButton
              enabled={settings.location.alwaysOn}
              onToggle={() => toggleSetting('location', 'alwaysOn')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">High Accuracy Mode</p>
              <p className="text-xs text-gray-500">Use GPS for precise location</p>
            </div>
            <ToggleButton
              enabled={settings.location.highAccuracy}
              onToggle={() => toggleSetting('location', 'highAccuracy')}
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Background Tracking</p>
              <p className="text-xs text-gray-500">Track coins in background</p>
            </div>
            <ToggleButton
              enabled={settings.location.backgroundTracking}
              onToggle={() => toggleSetting('location', 'backgroundTracking')}
            />
          </div>
        </div>
      </div>

      {/* Audio & Haptics */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-purple-600" />
          Audio & Haptics
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Sound Effects</p>
              <p className="text-xs text-gray-500">Play sounds when collecting coins</p>
            </div>
            <ToggleButton
              enabled={settings.audio.soundEffects}
              onToggle={() => toggleSetting('audio', 'soundEffects')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Vibration</p>
              <p className="text-xs text-gray-500">Haptic feedback on collection</p>
            </div>
            <ToggleButton
              enabled={settings.audio.vibration}
              onToggle={() => toggleSetting('audio', 'vibration')}
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Voice Guidance</p>
              <p className="text-xs text-gray-500">Audio directions to coins</p>
            </div>
            <ToggleButton
              enabled={settings.audio.voiceGuidance}
              onToggle={() => toggleSetting('audio', 'voiceGuidance')}
            />
          </div>
        </div>
      </div>

      {/* AR Settings */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-blue-600" />
          AR Camera
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">AR Mode</p>
              <p className="text-xs text-gray-500">Enable augmented reality view</p>
            </div>
            <ToggleButton
              enabled={settings.ar.arMode}
              onToggle={() => toggleSetting('ar', 'arMode')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Auto Focus</p>
              <p className="text-xs text-gray-500">Automatically focus on coins</p>
            </div>
            <ToggleButton
              enabled={settings.ar.autoFocus}
              onToggle={() => toggleSetting('ar', 'autoFocus')}
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Low Power Mode</p>
              <p className="text-xs text-gray-500">Reduce AR quality to save battery</p>
            </div>
            <ToggleButton
              enabled={settings.ar.lowPowerMode}
              onToggle={() => toggleSetting('ar', 'lowPowerMode')}
            />
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          Privacy
        </h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Share Location</p>
              <p className="text-xs text-gray-500">Show your location to other hunters</p>
            </div>
            <ToggleButton
              enabled={settings.privacy.shareLocation}
              onToggle={() => toggleSetting('privacy', 'shareLocation')}
            />
          </div>

          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <div>
              <p className="font-medium text-gray-800">Show on Leaderboard</p>
              <p className="text-xs text-gray-500">Display your profile publicly</p>
            </div>
            <ToggleButton
              enabled={settings.privacy.showOnLeaderboard}
              onToggle={() => toggleSetting('privacy', 'showOnLeaderboard')}
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Share Stats</p>
              <p className="text-xs text-gray-500">Allow friends to see your progress</p>
            </div>
            <ToggleButton
              enabled={settings.privacy.shareStats}
              onToggle={() => toggleSetting('privacy', 'shareStats')}
            />
          </div>
        </div>
      </div>

      {/* Other Settings */}
      <div className="px-4 mt-6 mb-4">
        <h2 className="font-bold text-gray-800 mb-3">More</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <button className="w-full p-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Help & Support</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">About CoinHunt</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full p-4 flex items-center justify-between border-b border-gray-100 active:bg-gray-50">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Clear Cache</span>
            </div>
            <span className="text-sm text-gray-500">24 MB</span>
          </button>

          <button className="w-full p-4 flex items-center justify-between active:bg-gray-50">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-800">Privacy Policy</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Version Info */}
      <div className="px-4 mb-4">
        <p className="text-center text-sm text-gray-500">
          CoinHunt v2.0.1
        </p>
      </div>
    </div>
  );
};

export default CoinHuntSettings;
