import React, { useState } from 'react';
import { Palette, Image, Type, Layout, Eye, Save, RotateCcw } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminBrandCustomization = () => {
  const [primaryColor, setPrimaryColor] = useState('#6366F1');
  const [secondaryColor, setSecondaryColor] = useState('#EC4899');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Palette className="w-10 h-10 text-purple-400" />
            Brand Customization
          </h1>
          <p className="text-gray-400">Customize your brand theme and appearance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6 text-purple-400" />
                Color Scheme
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Primary Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-12 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Secondary Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-16 h-12 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Image className="w-6 h-6 text-purple-400" />
                Logo & Assets
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Logo (Light Theme)</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                    <Image className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Click to upload or drag and drop</p>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Logo (Dark Theme)</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                    <Image className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Click to upload or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Type className="w-6 h-6 text-purple-400" />
                Typography
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Primary Font</label>
                  <select className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white">
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Poppins</option>
                    <option>Montserrat</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Secondary Font</label>
                  <select className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white">
                    <option>Inter</option>
                    <option>Roboto</option>
                    <option>Open Sans</option>
                    <option>Lato</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 sticky top-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-purple-400" />
                Live Preview
              </h3>
              <div className="bg-white rounded-xl p-6 mb-4">
                <div
                  className="h-16 rounded-lg mb-4"
                  style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <button
                    className="w-full py-2 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Primary Button
                  </button>
                  <button
                    className="w-full py-2 rounded-lg text-white font-semibold"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Secondary Button
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                  <Save className="w-5 h-5" />
                  Save
                </button>
                <button className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBrandCustomization;
