import { useState } from 'react';
import { Bell, Plus, Edit, Eye } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminPushNotificationTemplates() {
  const [templates] = useState([
    { id: '1', name: 'New Order', title: 'New Order Received!', body: 'You have a new order #{{orderNumber}}', category: 'Orders', status: 'active' },
    { id: '2', name: 'Coins Earned', title: 'Congratulations!', body: 'You earned {{coins}} ReZ Coins!', category: 'Rewards', status: 'active' },
    { id: '3', name: 'Flash Sale', title: 'Flash Sale Alert!', body: 'Up to {{discount}}% off on selected items', category: 'Marketing', status: 'active' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Push Notification Templates</h1>
              <p className="text-gray-600">Manage push notification templates</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <Plus className="w-5 h-5" />
              New Template
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{templates.length}</p>
            <p className="text-sm text-gray-600">Total Templates</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{templates.filter(t => t.status === 'active').length}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-600">Sent Today</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-gray-900">{template.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white rounded"><Edit className="w-5 h-5 text-gray-600" /></button>
                    <button className="p-2 hover:bg-white rounded"><Eye className="w-5 h-5 text-gray-600" /></button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Title</p>
                  <p className="font-bold text-gray-900">{template.title}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Body</p>
                  <p className="text-gray-700">{template.body}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{template.category}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${template.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {template.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
