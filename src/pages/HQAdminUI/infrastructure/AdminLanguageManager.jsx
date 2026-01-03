import React, { useState } from 'react';
import {
  ArrowLeft, Globe, Languages, Plus, Search, Edit2,
  CheckCircle, XCircle, AlertCircle, Download, Upload,
  ChevronRight, Eye, Copy, Trash2, RefreshCw, Settings,
  FileText, Check, X, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLanguageManager = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('languages');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = {
    totalLanguages: 5,
    activeLanguages: 4,
    totalStrings: 2456,
    translatedStrings: 8234,
    pendingReview: 156
  };

  const languages = [
    {
      id: 'en',
      name: 'English',
      nativeName: 'English',
      code: 'en-IN',
      isDefault: true,
      isActive: true,
      progress: 100,
      strings: 2456,
      lastUpdated: '2024-11-01'
    },
    {
      id: 'hi',
      name: 'Hindi',
      nativeName: 'हिन्दी',
      code: 'hi-IN',
      isDefault: false,
      isActive: true,
      progress: 95,
      strings: 2333,
      lastUpdated: '2024-10-28'
    },
    {
      id: 'mr',
      name: 'Marathi',
      nativeName: 'मराठी',
      code: 'mr-IN',
      isDefault: false,
      isActive: true,
      progress: 78,
      strings: 1915,
      lastUpdated: '2024-10-15'
    },
    {
      id: 'ta',
      name: 'Tamil',
      nativeName: 'தமிழ்',
      code: 'ta-IN',
      isDefault: false,
      isActive: true,
      progress: 65,
      strings: 1596,
      lastUpdated: '2024-10-10'
    },
    {
      id: 'te',
      name: 'Telugu',
      nativeName: 'తెలుగు',
      code: 'te-IN',
      isDefault: false,
      isActive: false,
      progress: 45,
      strings: 1105,
      lastUpdated: '2024-09-28'
    }
  ];

  const categories = [
    { id: 'common', name: 'Common', count: 456 },
    { id: 'auth', name: 'Authentication', count: 89 },
    { id: 'merchant', name: 'Merchant App', count: 678 },
    { id: 'admin', name: 'Admin Panel', count: 445 },
    { id: 'user', name: 'User App', count: 534 },
    { id: 'notifications', name: 'Notifications', count: 156 },
    { id: 'errors', name: 'Error Messages', count: 98 }
  ];

  const translationStrings = [
    {
      key: 'common.welcome',
      category: 'common',
      en: 'Welcome to ReZ',
      hi: 'ReZ में आपका स्वागत है',
      mr: 'ReZ मध्ये आपले स्वागत आहे',
      ta: 'ReZ க்கு வரவேற்கிறோம்',
      te: null,
      status: 'complete'
    },
    {
      key: 'common.login',
      category: 'auth',
      en: 'Login',
      hi: 'लॉग इन करें',
      mr: 'लॉग इन करा',
      ta: 'உள்நுழைய',
      te: null,
      status: 'partial'
    },
    {
      key: 'merchant.dashboard',
      category: 'merchant',
      en: 'Dashboard',
      hi: 'डैशबोर्ड',
      mr: null,
      ta: null,
      te: null,
      status: 'partial'
    },
    {
      key: 'merchant.orders',
      category: 'merchant',
      en: 'Orders',
      hi: 'ऑर्डर',
      mr: 'ऑर्डर',
      ta: 'ஆர்டர்கள்',
      te: 'ఆర్డర్లు',
      status: 'complete'
    },
    {
      key: 'notification.order_received',
      category: 'notifications',
      en: 'New order received!',
      hi: 'नया ऑर्डर मिला!',
      mr: null,
      ta: null,
      te: null,
      status: 'partial'
    },
    {
      key: 'error.payment_failed',
      category: 'errors',
      en: 'Payment failed. Please try again.',
      hi: 'भुगतान विफल। कृपया पुनः प्रयास करें।',
      mr: 'पेमेंट अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
      ta: null,
      te: null,
      status: 'partial'
    }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-yellow-500';
    if (progress >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const filteredStrings = translationStrings.filter(str =>
    str.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
    str.en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Globe size={24} className="mr-2" />
                Language Manager
              </h1>
              <p className="text-teal-200 text-sm">Multi-language content management</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-white/20 px-3 py-1.5 rounded-lg text-sm flex items-center"
          >
            <Plus size={16} className="mr-1" />
            Add Language
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.activeLanguages}/{stats.totalLanguages}</p>
            <p className="text-xs text-teal-200">Languages</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{(stats.totalStrings/1000).toFixed(1)}K</p>
            <p className="text-xs text-teal-200">Strings</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-yellow-300">{stats.pendingReview}</p>
            <p className="text-xs text-teal-200">Pending</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          {[
            { id: 'languages', label: 'Languages' },
            { id: 'translations', label: 'Translations' },
            { id: 'import', label: 'Import/Export' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.id ? 'bg-teal-600 text-white' : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Languages Tab */}
      {activeTab === 'languages' && (
        <div className="px-4 space-y-4">
          {languages.map(lang => (
            <div key={lang.id} className={`bg-gray-800 rounded-xl p-4 ${!lang.isActive ? 'opacity-60' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg">{lang.nativeName.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-bold">{lang.name}</h3>
                      {lang.isDefault && (
                        <span className="ml-2 px-2 py-0.5 bg-teal-500/20 text-teal-400 rounded text-xs">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{lang.nativeName} • {lang.code}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`mr-2 text-sm ${lang.isActive ? 'text-green-400' : 'text-gray-500'}`}>
                    {lang.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <div className={`w-12 h-6 rounded-full relative ${lang.isActive ? 'bg-teal-600' : 'bg-gray-600'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full ${lang.isActive ? 'right-1' : 'left-1'}`} />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Translation Progress</span>
                  <span className="text-white">{lang.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(lang.progress)}`}
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  {lang.strings.toLocaleString()} / {stats.totalStrings.toLocaleString()} strings
                </span>
                <span className="text-gray-500">Updated: {lang.lastUpdated}</span>
              </div>

              <div className="flex space-x-2 mt-3">
                <button
                  onClick={() => {
                    setSelectedLanguage(lang.id);
                    setActiveTab('translations');
                  }}
                  className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                >
                  <Edit2 size={14} className="mr-1" />
                  Edit Translations
                </button>
                <button className="p-2 bg-gray-700 rounded-lg">
                  <Download size={16} className="text-gray-400" />
                </button>
                <button className="p-2 bg-gray-700 rounded-lg">
                  <Settings size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Translations Tab */}
      {activeTab === 'translations' && (
        <div className="px-4 space-y-4">
          {/* Language Selector */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {languages.filter(l => l.isActive).map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm ${
                  selectedLanguage === lang.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search translation keys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 rounded-xl pl-10 pr-4 py-3 text-white"
            />
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button className="flex-shrink-0 px-3 py-1 bg-teal-600 text-white rounded-full text-sm">
              All ({stats.totalStrings})
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className="flex-shrink-0 px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Translation Strings */}
          <div className="space-y-3">
            {filteredStrings.map(str => (
              <div key={str.key} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <code className="text-teal-400 text-sm">{str.key}</code>
                    <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                      str.status === 'complete'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {str.status}
                    </span>
                  </div>
                  <button className="text-gray-400">
                    <Edit2 size={16} />
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="w-8 text-gray-500 text-sm">EN</span>
                    <span className="text-white flex-1">{str.en}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-8 text-gray-500 text-sm">
                      {selectedLanguage.toUpperCase()}
                    </span>
                    {str[selectedLanguage] ? (
                      <span className="text-gray-300 flex-1">{str[selectedLanguage]}</span>
                    ) : (
                      <span className="text-red-400 flex-1 italic">Missing translation</span>
                    )}
                  </div>
                </div>

                {!str[selectedLanguage] && (
                  <button
                    onClick={() => setShowTranslateModal(true)}
                    className="mt-2 w-full bg-teal-600/20 text-teal-400 py-2 rounded-lg text-sm"
                  >
                    + Add Translation
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Import/Export Tab */}
      {activeTab === 'import' && (
        <div className="px-4 space-y-4">
          {/* Export Section */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Export Translations</h3>
            <p className="text-gray-400 text-sm mb-4">
              Download translation files for external editing or backup
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                <div className="flex items-center">
                  <FileText size={20} className="text-teal-400 mr-3" />
                  <div>
                    <p className="text-white font-medium">All Languages (JSON)</p>
                    <p className="text-gray-400 text-xs">Complete translation bundle</p>
                  </div>
                </div>
                <button className="text-teal-400">
                  <Download size={20} />
                </button>
              </div>

              {languages.filter(l => l.isActive).map(lang => (
                <div key={lang.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center">
                    <FileText size={20} className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">{lang.name} ({lang.code})</p>
                      <p className="text-gray-400 text-xs">{lang.strings} strings</p>
                    </div>
                  </div>
                  <button className="text-teal-400">
                    <Download size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Import Section */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Import Translations</h3>
            <p className="text-gray-400 text-sm mb-4">
              Upload translation files to update content
            </p>

            <label className="block">
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center cursor-pointer hover:border-teal-500 transition-colors">
                <Upload size={32} className="text-gray-400 mx-auto mb-3" />
                <p className="text-white font-medium">Drop translation file here</p>
                <p className="text-gray-400 text-sm mt-1">Supports JSON, CSV, XLIFF</p>
              </div>
              <input type="file" className="hidden" accept=".json,.csv,.xliff" />
            </label>
          </div>

          {/* Auto-Translate */}
          <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-4">
            <div className="flex items-start">
              <RefreshCw size={20} className="text-teal-400 mr-3 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-teal-400 font-medium">AI Auto-Translate</h4>
                <p className="text-gray-300 text-sm mt-1">
                  Automatically translate missing strings using AI. Requires manual review.
                </p>
                <button className="mt-3 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
                  Translate Missing Strings
                </button>
              </div>
            </div>
          </div>

          {/* Sync Status */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3">Sync Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Last sync</span>
                <span className="text-white">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Pending changes</span>
                <span className="text-yellow-400">23 strings</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">CDN Status</span>
                <span className="text-green-400 flex items-center">
                  <CheckCircle size={14} className="mr-1" />
                  Up to date
                </span>
              </div>
            </div>
            <button className="w-full mt-3 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
              <RefreshCw size={16} className="mr-2" />
              Sync Now
            </button>
          </div>
        </div>
      )}

      {/* Add Language Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Add New Language</h3>

            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm block mb-1">Language</label>
                <select className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white">
                  <option>Select a language...</option>
                  <option value="bn">Bengali (বাংলা)</option>
                  <option value="gu">Gujarati (ગુજરાતી)</option>
                  <option value="kn">Kannada (ಕನ್ನಡ)</option>
                  <option value="ml">Malayalam (മലയാളം)</option>
                  <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">Locale Code</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white"
                  placeholder="e.g., bn-IN"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Set as active</span>
                <div className="w-12 h-6 bg-teal-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Auto-translate from English</span>
                <div className="w-12 h-6 bg-teal-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold">
                Add Language
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Translate Modal */}
      {showTranslateModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="bg-gray-800 w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <h3 className="text-white font-bold text-lg mb-4">Add Translation</h3>

            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-3">
                <p className="text-gray-400 text-sm mb-1">Original (English)</p>
                <p className="text-white">Welcome to ReZ</p>
              </div>

              <div>
                <label className="text-gray-400 text-sm block mb-1">
                  Translation ({languages.find(l => l.id === selectedLanguage)?.nativeName})
                </label>
                <textarea
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 text-white h-24"
                  placeholder="Enter translation..."
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-300">Mark for review</span>
                <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowTranslateModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-bold"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTranslateModal(false)}
                className="flex-1 bg-teal-600 text-white py-3 rounded-xl font-bold"
              >
                Save Translation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLanguageManager;
