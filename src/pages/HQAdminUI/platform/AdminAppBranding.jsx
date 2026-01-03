import React, { useState } from 'react';
import { Smartphone, Monitor, Palette, Image, Save, Eye } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminAppBranding = () => {
  const [previewMode, setPreviewMode] = useState('mobile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Smartphone className="w-10 h-10 text-pink-400" />
            App Branding & Appearance
          </h1>
          <p className="text-gray-400">Configure app visual identity and themes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">App Identity</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">App Name</label>
                  <input
                    type="text"
                    defaultValue="ReZ"
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Tagline</label>
                  <input
                    type="text"
                    defaultValue="Shop Smart, Save More"
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">App Icons</h3>
              <div className="grid grid-cols-3 gap-4">
                {['iOS Icon', 'Android Icon', 'Web Icon'].map((label) => (
                  <div key={label}>
                    <label className="text-gray-400 text-sm mb-2 block">{label}</label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                      <Image className="w-8 h-8 text-gray-500 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Splash Screen</h3>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-12 text-center">
                <Image className="w-16 h-16 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400">Upload splash screen image</p>
                <p className="text-gray-500 text-sm mt-1">Recommended: 1080x1920px</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Theme Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="dark-mode" defaultChecked />
                  <label htmlFor="dark-mode" className="text-white">Enable Dark Mode</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="auto-theme" defaultChecked />
                  <label htmlFor="auto-theme" className="text-white">Auto-detect system theme</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="animations" defaultChecked />
                  <label htmlFor="animations" className="text-white">Enable animations</label>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Preview</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`p-2 rounded-lg ${previewMode === 'mobile' ? 'bg-pink-600 text-white' : 'bg-white/5 text-gray-400'}`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`p-2 rounded-lg ${previewMode === 'desktop' ? 'bg-pink-600 text-white' : 'bg-white/5 text-gray-400'}`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`bg-gray-800 rounded-xl overflow-hidden ${previewMode === 'mobile' ? 'max-w-xs mx-auto' : ''}`}>
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 text-white">
                  <h2 className="text-xl font-bold">ReZ</h2>
                  <p className="text-sm opacity-90">Shop Smart, Save More</p>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-32 bg-gray-700 rounded-lg" />
                  <div className="h-4 bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-700 rounded w-1/2" />
                </div>
              </div>

              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppBranding;
