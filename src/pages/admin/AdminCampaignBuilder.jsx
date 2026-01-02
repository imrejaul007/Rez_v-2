import React, { useState } from 'react';
import { Mail, MessageSquare, Bell, Image, Target, Users, Calendar, Clock, Plus, Trash2, Copy, Eye, Save, Send } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminCampaignBuilder = () => {
  const [campaignType, setCampaignType] = useState('email');
  const [draggedItem, setDraggedItem] = useState(null);
  const [canvasBlocks, setCanvasBlocks] = useState([]);

  // Available campaign blocks for drag-drop
  const availableBlocks = {
    email: [
      { id: 'header', label: 'Header', icon: Image, preview: 'Logo & Branding' },
      { id: 'hero', label: 'Hero Banner', icon: Image, preview: 'Large promotional image' },
      { id: 'text', label: 'Text Block', icon: MessageSquare, preview: 'Text content' },
      { id: 'button', label: 'Call to Action', icon: Target, preview: 'CTA Button' },
      { id: 'products', label: 'Product Grid', icon: Image, preview: '3-column product showcase' },
      { id: 'divider', label: 'Divider', icon: Image, preview: 'Visual separator' },
      { id: 'footer', label: 'Footer', icon: Image, preview: 'Contact & social links' }
    ],
    sms: [
      { id: 'greeting', label: 'Greeting', icon: MessageSquare, preview: 'Hi {name},' },
      { id: 'message', label: 'Message', icon: MessageSquare, preview: 'Main message text' },
      { id: 'link', label: 'Short Link', icon: Target, preview: 'Trackable URL' },
      { id: 'code', label: 'Promo Code', icon: Target, preview: 'SAVE20' }
    ],
    push: [
      { id: 'title', label: 'Title', icon: Bell, preview: 'Notification title' },
      { id: 'body', label: 'Body', icon: MessageSquare, preview: 'Notification message' },
      { id: 'image', label: 'Rich Image', icon: Image, preview: 'Push notification image' },
      { id: 'action', label: 'Action Button', icon: Target, preview: 'Deep link button' }
    ]
  };

  // Mock campaign templates
  const templates = [
    { id: 1, name: 'Flash Sale Alert', type: 'email', thumbnail: '🔥', blocks: 7, usage: 234 },
    { id: 2, name: 'Welcome New User', type: 'email', thumbnail: '👋', blocks: 5, usage: 567 },
    { id: 3, name: 'Abandoned Cart', type: 'email', thumbnail: '🛒', blocks: 6, usage: 189 },
    { id: 4, name: 'Weekly Newsletter', type: 'email', thumbnail: '📧', blocks: 8, usage: 445 },
    { id: 5, name: 'Limited Time Offer', type: 'sms', thumbnail: '⏰', blocks: 3, usage: 892 },
    { id: 6, name: 'Order Confirmed', type: 'push', thumbnail: '✅', blocks: 4, usage: 1234 }
  ];

  // Mock audience segments
  const audiences = [
    { id: 1, name: 'All Active Users', count: 45623, description: 'Users active in last 30 days' },
    { id: 2, name: 'High-Value Customers', count: 3456, description: 'LTV > ₹10,000' },
    { id: 3, name: 'Cart Abandoners', count: 1234, description: 'Last 7 days' },
    { id: 4, name: 'Inactive Users', count: 8901, description: '60+ days no activity' },
    { id: 5, name: 'VIP Tier', count: 567, description: 'Premium loyalty tier' },
    { id: 6, name: 'First-Time Buyers', count: 2345, description: 'Purchased once' }
  ];

  const handleDragStart = (block) => {
    setDraggedItem(block);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem) {
      setCanvasBlocks([...canvasBlocks, { ...draggedItem, uniqueId: Date.now() }]);
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeBlock = (uniqueId) => {
    setCanvasBlocks(canvasBlocks.filter(block => block.uniqueId !== uniqueId));
  };

  const duplicateBlock = (block) => {
    const newBlock = { ...block, uniqueId: Date.now() };
    const index = canvasBlocks.findIndex(b => b.uniqueId === block.uniqueId);
    const newBlocks = [...canvasBlocks];
    newBlocks.splice(index + 1, 0, newBlock);
    setCanvasBlocks(newBlocks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Target className="w-10 h-10 text-indigo-400" />
            Marketing Campaign Builder
          </h1>
          <p className="text-gray-400">Create multi-channel campaigns with drag-and-drop editor</p>
        </div>

        {/* Campaign Type Selector */}
        <div className="flex gap-4 mb-6">
          {[
            { id: 'email', label: 'Email Campaign', icon: Mail },
            { id: 'sms', label: 'SMS Campaign', icon: MessageSquare },
            { id: 'push', label: 'Push Notification', icon: Bell }
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setCampaignType(type.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                campaignType === type.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <type.icon className="w-5 h-5" />
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Templates & Blocks Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Templates */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Templates</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {templates.filter(t => t.type === campaignType).map((template) => (
                  <div key={template.id} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-pointer border border-white/10 transition-all">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{template.thumbnail}</span>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{template.name}</p>
                        <p className="text-gray-400 text-xs">{template.blocks} blocks • {template.usage} uses</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Blocks */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Building Blocks</h3>
              <div className="space-y-2">
                {availableBlocks[campaignType].map((block) => (
                  <div
                    key={block.id}
                    draggable
                    onDragStart={() => handleDragStart(block)}
                    className="bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-move border border-white/10 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <block.icon className="w-4 h-4 text-indigo-400" />
                      <span className="text-white font-medium text-sm">{block.label}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{block.preview}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Campaign Canvas</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Draft
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>

              {/* Drop Zone */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={`min-h-[600px] bg-white/5 rounded-xl border-2 border-dashed ${
                  draggedItem ? 'border-indigo-400 bg-indigo-500/10' : 'border-white/20'
                } p-4 space-y-3`}
              >
                {canvasBlocks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <Target className="w-16 h-16 text-gray-500 mb-4" />
                    <p className="text-gray-400 text-lg">Drag blocks here to build your campaign</p>
                    <p className="text-gray-500 text-sm mt-2">Start with a template or build from scratch</p>
                  </div>
                ) : (
                  canvasBlocks.map((block) => (
                    <div key={block.uniqueId} className="bg-white/10 rounded-lg p-4 border border-white/20 group hover:border-indigo-400 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <block.icon className="w-5 h-5 text-indigo-400" />
                          <span className="text-white font-medium">{block.label}</span>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => duplicateBlock(block)}
                            className="p-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeBlock(block.uniqueId)}
                            className="p-1 bg-red-600 text-white rounded hover:bg-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-gray-400 text-sm">{block.preview}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Campaign Settings */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4">Campaign Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Campaign Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Flash Sale - 50% Off"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Subject Line</label>
                  <input
                    type="text"
                    placeholder="Your amazing offer inside..."
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Sender Name</label>
                  <input
                    type="text"
                    placeholder="ReZ Team"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>

            {/* Audience Selection */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                Target Audience
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {audiences.map((audience) => (
                  <label key={audience.id} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 cursor-pointer border border-white/10">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{audience.name}</p>
                      <p className="text-gray-400 text-xs">{audience.description}</p>
                      <p className="text-indigo-400 text-xs mt-1">{audience.count.toLocaleString()} users</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                Schedule
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-white">
                  <input type="radio" name="schedule" defaultChecked />
                  <span className="text-sm">Send immediately</span>
                </label>
                <label className="flex items-center gap-3 text-white">
                  <input type="radio" name="schedule" />
                  <span className="text-sm">Schedule for later</span>
                </label>
                <div className="mt-3 space-y-2">
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-indigo-400"
                  />
                  <input
                    type="time"
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-indigo-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCampaignBuilder;
