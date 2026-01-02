import React, { useState } from 'react';
import { Globe, Languages, Check, Edit, Plus, Download, Upload } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminTranslationManagement = () => {
  const languages = [
    { code: 'en', name: 'English', progress: 100, strings: 1234, translators: 5, lastUpdate: '2025-01-20' },
    { code: 'hi', name: 'Hindi', progress: 98, strings: 1210, translators: 8, lastUpdate: '2025-01-19' },
    { code: 'bn', name: 'Bengali', progress: 85, strings: 1049, translators: 4, lastUpdate: '2025-01-18' },
    { code: 'ta', name: 'Tamil', progress: 75, strings: 926, translators: 3, lastUpdate: '2025-01-15' },
    { code: 'te', name: 'Telugu', progress: 70, strings: 864, translators: 2, lastUpdate: '2025-01-12' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Languages className="w-10 h-10 text-green-400" />
            Translation Management
          </h1>
          <p className="text-gray-400">Multi-language content management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Globe className="w-8 h-8 text-green-400 mb-2" />
            <div className="text-3xl font-bold text-white">{languages.length}</div>
            <div className="text-sm text-green-400">Languages Supported</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Languages className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-3xl font-bold text-white">1,234</div>
            <div className="text-sm text-blue-400">Total Strings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Check className="w-8 h-8 text-purple-400 mb-2" />
            <div className="text-3xl font-bold text-white">85.6%</div>
            <div className="text-sm text-purple-400">Avg Completion</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Edit className="w-8 h-8 text-yellow-400 mb-2" />
            <div className="text-3xl font-bold text-white">22</div>
            <div className="text-sm text-yellow-400">Active Translators</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Languages</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Import
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Language
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {languages.map((lang) => (
              <div key={lang.code} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                      {lang.code.toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{lang.name}</h3>
                      <p className="text-gray-400 text-sm">{lang.strings} / 1234 strings translated</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                    <Edit className="w-4 h-4 inline mr-2" />
                    Edit
                  </button>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-400">Translation Progress</span>
                    <span className="text-white font-bold">{lang.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span>{lang.translators} translators</span>
                  <span>Last updated: {lang.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTranslationManagement;
