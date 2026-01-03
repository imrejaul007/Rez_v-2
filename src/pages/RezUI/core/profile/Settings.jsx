import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Bell, Lock, Globe, Moon, Sun, CreditCard, MapPin, Heart,
  Shield, HelpCircle, FileText, LogOut, ChevronRight, Smartphone,
  Mail, Phone, Languages, Palette, Eye, EyeOff, Volume2, VolumeX
} from 'lucide-react';
import BottomNavManager from '../components/layout/BottomNavManager';

function Settings() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Information', route: '/profile', description: 'Manage your personal details' },
        { icon: Phone, label: 'Phone Number', route: '/settings/phone', description: '+91 98765 43210' },
        { icon: Mail, label: 'Email Address', route: '/settings/email', description: 'user@example.com' },
        { icon: Lock, label: 'Change Password', route: '/settings/password', description: 'Update your password' }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: darkMode ? Moon : Sun,
          label: 'Dark Mode',
          description: darkMode ? 'Enabled' : 'Disabled',
          toggle: true,
          value: darkMode,
          onChange: toggleDarkMode
        },
        {
          icon: notificationsEnabled ? Bell : Bell,
          label: 'Notifications',
          description: notificationsEnabled ? 'Enabled' : 'Disabled',
          toggle: true,
          value: notificationsEnabled,
          onChange: () => setNotificationsEnabled(!notificationsEnabled)
        },
        {
          icon: soundEnabled ? Volume2 : VolumeX,
          label: 'Sound Effects',
          description: soundEnabled ? 'Enabled' : 'Disabled',
          toggle: true,
          value: soundEnabled,
          onChange: () => setSoundEnabled(!soundEnabled)
        },
        { icon: Languages, label: 'Language', route: '/settings/language', description: 'English (India)' },
        { icon: Globe, label: 'Region', route: '/settings/region', description: 'India (INR)' }
      ]
    },
    {
      title: 'Payment & Wallet',
      items: [
        { icon: CreditCard, label: 'Payment Methods', route: '/settings/payment-methods', description: 'Manage cards & UPI' },
        { icon: CreditCard, label: 'Wallet', route: '/wallet', description: 'ReZ Coins & Cashback' },
        { icon: FileText, label: 'Transaction History', route: '/transactions', description: 'View all transactions' }
      ]
    },
    {
      title: 'Shopping',
      items: [
        { icon: MapPin, label: 'Saved Addresses', route: '/settings/addresses', description: '3 addresses' },
        { icon: Heart, label: 'Wishlist', route: '/wishlist', description: '12 items saved' },
        { icon: FileText, label: 'Order History', route: '/orders', description: 'Track your orders' }
      ]
    },
    {
      title: 'Privacy & Security',
      items: [
        { icon: Shield, label: 'Privacy Policy', route: '/privacy', description: 'How we use your data' },
        { icon: FileText, label: 'Terms of Service', route: '/terms', description: 'Read our terms' },
        { icon: Eye, label: 'Data & Privacy', route: '/settings/privacy', description: 'Manage your data' },
        { icon: Lock, label: 'Security Settings', route: '/settings/security', description: 'Two-factor auth & more' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', route: '/help', description: 'FAQs and support' },
        { icon: Phone, label: 'Contact Us', route: '/contact', description: 'Get in touch' },
        { icon: FileText, label: 'About ReZ', route: '/about', description: 'Learn about our platform' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="px-4 py-4">
          <h1 className="text-h2 font-poppins text-rez-navy dark:text-white">Settings</h1>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-1">Manage your account and preferences</p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-4 py-4 space-y-6">
        {settingsSections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-sm font-semibold text-rez-gray-700 dark:text-gray-300 mb-3 px-2">
              {section.title}
            </h2>
            <div className="rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700 overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  {item.toggle ? (
                    <button
                      onClick={item.onChange}
                      className="w-full px-4 py-4 flex items-center gap-3 hover:bg-rez-gray-50 dark:hover:bg-dark-700 active:bg-rez-gray-100 dark:active:bg-dark-600 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-rez-navy dark:text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-semibold text-rez-navy dark:text-white">{item.label}</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">{item.description}</p>
                      </div>
                      <div className={`w-12 h-6 rounded-full transition-all ${
                        item.value ? 'bg-rez-green-500' : 'bg-rez-gray-300 dark:bg-dark-600'
                      }`}>
                        <div className={`w-5 h-5 rounded-full bg-white m-0.5 transition-all ${
                          item.value ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={item.route}
                      className="px-4 py-4 flex items-center gap-3 hover:bg-rez-gray-50 dark:hover:bg-dark-700 active:bg-rez-gray-100 dark:active:bg-dark-600 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-rez-gray-100 dark:bg-dark-700 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-rez-navy dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-rez-navy dark:text-white">{item.label}</p>
                        <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">{item.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-rez-gray-400 dark:text-gray-500 flex-shrink-0" />
                    </Link>
                  )}
                  {itemIdx < section.items.length - 1 && (
                    <div className="border-t border-rez-gray-100 dark:border-dark-700 ml-16" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="px-4 py-6 text-center">
          <p className="text-xs text-rez-gray-500 dark:text-gray-400 mb-1">ReZ Version</p>
          <p className="text-sm font-semibold text-rez-gray-700 dark:text-gray-300">2.0.0 (Build 2024.01.15)</p>
        </div>

        {/* Logout Button */}
        <div className="px-4 pb-4">
          <button className="w-full py-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-500 font-semibold flex items-center justify-center gap-2 active:scale-98 transition-all">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
      <BottomNavManager />
    </div>
  );
}

export default Settings;
