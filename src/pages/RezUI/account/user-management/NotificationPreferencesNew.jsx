import React, { useState } from 'react';
import { Bell, Zap } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function NotificationPreferencesNew() {
  const [prefs, setPrefs] = useState({
    orders: true,
    coins: true,
    promotions: false,
    support: true,
    push: true,
    email: true,
  });

  const togglePref = (key) => {
    setPrefs({...prefs, [key]: !prefs[key]});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Bell size={28} /> Notifications
        </h1>

        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap size={20} className="text-blue-600" /> Types
            </h3>
            {['orders', 'coins', 'promotions', 'support'].map(type => (
              <div key={type} className="flex items-center justify-between py-2">
                <p className="text-gray-700 capitalize">{type}</p>
                <button
                  onClick={() => togglePref(type)}
                  className={`w-10 h-6 rounded-full transition ${prefs[type] ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Channel</h3>
            {['push', 'email'].map(channel => (
              <div key={channel} className="flex items-center justify-between py-2">
                <p className="text-gray-700 capitalize">{channel} Notifications</p>
                <button
                  onClick={() => togglePref(channel)}
                  className={`w-10 h-6 rounded-full transition ${prefs[channel] ? 'bg-indigo-500' : 'bg-gray-300'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}