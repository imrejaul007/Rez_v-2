import React, { useState } from 'react';
import { Mail, Type, Image, Layout, Palette, Eye, Save, Code, Smartphone, Monitor, Trash2 } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminEmailTemplateBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewMode, setPreviewMode] = useState('desktop');
  const [editorMode, setEditorMode] = useState('visual');

  // Mock email templates
  const templates = [
    { id: 1, name: 'Welcome Email', category: 'Onboarding', lastModified: '2025-01-15', thumbnail: '👋', status: 'active' },
    { id: 2, name: 'Order Confirmation', category: 'Transactional', lastModified: '2025-01-14', thumbnail: '✅', status: 'active' },
    { id: 3, name: 'Abandoned Cart', category: 'Marketing', lastModified: '2025-01-13', thumbnail: '🛒', status: 'active' },
    { id: 4, name: 'Password Reset', category: 'Security', lastModified: '2025-01-12', thumbnail: '🔒', status: 'active' },
    { id: 5, name: 'Promotional Sale', category: 'Marketing', lastModified: '2025-01-11', thumbnail: '🔥', status: 'draft' },
    { id: 6, name: 'Weekly Newsletter', category: 'Content', lastModified: '2025-01-10', thumbnail: '📧', status: 'active' }
  ];

  // Mock design elements
  const designElements = [
    { id: 1, type: 'header', label: 'Header with Logo', icon: Layout },
    { id: 2, type: 'hero', label: 'Hero Banner', icon: Image },
    { id: 3, type: 'text', label: 'Text Block', icon: Type },
    { id: 4, type: 'button', label: 'CTA Button', icon: Layout },
    { id: 5, type: 'product', label: 'Product Showcase', icon: Image },
    { id: 6, type: 'footer', label: 'Footer', icon: Layout }
  ];

  // Mock color schemes
  const colorSchemes = [
    { id: 1, name: 'Brand Primary', colors: ['#6366F1', '#8B5CF6', '#EC4899'] },
    { id: 2, name: 'Warm Autumn', colors: ['#F59E0B', '#EF4444', '#DC2626'] },
    { id: 3, name: 'Cool Ocean', colors: ['#3B82F6', '#0EA5E9', '#06B6D4'] },
    { id: 4, name: 'Fresh Green', colors: ['#10B981', '#059669', '#047857'] },
    { id: 5, name: 'Elegant Dark', colors: ['#1F2937', '#374151', '#4B5563'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Mail className="w-10 h-10 text-purple-400" />
            Email Template Builder
          </h1>
          <p className="text-gray-400">Visual email editor with live preview</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Templates List */}
          <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Templates</h3>
              <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all text-sm">
                + New
              </button>
            </div>
            <div className="space-y-2 max-h-[700px] overflow-y-auto">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-pointer border transition-all ${
                    selectedTemplate?.id === template.id ? 'border-purple-400 bg-white/10' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{template.thumbnail}</span>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{template.name}</p>
                      <p className="text-gray-400 text-xs">{template.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{template.lastModified}</span>
                    <span className={`px-2 py-0.5 rounded-full ${
                      template.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {template.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Editor Controls */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditorMode('visual')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      editorMode === 'visual' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Eye className="w-4 h-4 inline mr-2" />
                    Visual
                  </button>
                  <button
                    onClick={() => setEditorMode('code')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      editorMode === 'code' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Code className="w-4 h-4 inline mr-2" />
                    HTML
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`p-2 rounded-lg transition-all ${
                      previewMode === 'desktop' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`p-2 rounded-lg transition-all ${
                      previewMode === 'mobile' ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all">
                    <Save className="w-4 h-4 inline mr-2" />
                    Save
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                    <Eye className="w-4 h-4 inline mr-2" />
                    Test Send
                  </button>
                </div>
              </div>
            </div>

            {/* Canvas */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className={`mx-auto bg-white rounded-lg shadow-2xl ${previewMode === 'mobile' ? 'max-w-md' : 'max-w-2xl'}`}>
                {/* Email Preview */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
                  <h1 className="text-3xl font-bold text-white mb-2">Welcome to ReZ!</h1>
                  <p className="text-purple-100">Your journey to amazing deals starts here</p>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-4">Hi there,</p>
                  <p className="text-gray-700 mb-4">
                    We're excited to have you join our community of smart shoppers! Get ready to discover exclusive deals,
                    earn rewards, and save on everything you love.
                  </p>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-6">
                    <h3 className="font-bold text-purple-900 mb-2">Your Welcome Bonus</h3>
                    <p className="text-purple-700 mb-3">Get 500 ReZ Coins just for signing up!</p>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700">
                      Claim Your Bonus
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 my-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border border-gray-200 rounded-lg p-3">
                        <div className="bg-gray-200 h-24 rounded mb-2"></div>
                        <p className="text-xs text-gray-600">Product {i}</p>
                        <p className="text-sm font-bold text-gray-900">50% OFF</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4">
                    Start exploring now and discover why millions of users trust ReZ for their shopping needs.
                  </p>

                  <p className="text-gray-700">
                    Happy shopping!<br />
                    The ReZ Team
                  </p>
                </div>

                <div className="bg-gray-100 p-6 text-center text-xs text-gray-600">
                  <p className="mb-2">© 2025 ReZ. All rights reserved.</p>
                  <p>123 Commerce Street, City, Country</p>
                  <p className="mt-2">
                    <a href="#" className="text-purple-600 hover:underline">Unsubscribe</a> |
                    <a href="#" className="text-purple-600 hover:underline ml-2">Preferences</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Tools */}
          <div className="lg:col-span-1 space-y-4">
            {/* Elements */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layout className="w-5 h-5 text-purple-400" />
                Elements
              </h3>
              <div className="space-y-2">
                {designElements.map((element) => (
                  <div
                    key={element.id}
                    className="bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-pointer border border-white/10 transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <element.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-white text-sm">{element.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Schemes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                Color Schemes
              </h3>
              <div className="space-y-2">
                {colorSchemes.map((scheme) => (
                  <div
                    key={scheme.id}
                    className="bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-pointer border border-white/10 transition-all"
                  >
                    <p className="text-white text-sm mb-2">{scheme.name}</p>
                    <div className="flex gap-1">
                      {scheme.colors.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Template Settings */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Settings</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Template Name</label>
                  <input
                    type="text"
                    placeholder="Welcome Email"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Category</label>
                  <select className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400">
                    <option>Onboarding</option>
                    <option>Marketing</option>
                    <option>Transactional</option>
                    <option>Security</option>
                    <option>Content</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Status</label>
                  <select className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400">
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Archived</option>
                  </select>
                </div>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                  <Trash2 className="w-4 h-4" />
                  Delete Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEmailTemplateBuilder;
