import { useState } from 'react';
import { MessageSquare, Plus, Edit, Eye } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSMSTemplates() {
  const [templates] = useState([
    { id: '1', name: 'OTP Verification', message: 'Your OTP is {{otp}}. Valid for 10 minutes.', category: 'Authentication', chars: 42, status: 'active' },
    { id: '2', name: 'Order Delivered', message: 'Your order #{{orderNumber}} has been delivered!', category: 'Orders', chars: 48, status: 'active' },
    { id: '3', name: 'Payment Confirmation', message: 'Payment of ₹{{amount}} received. Thank you!', category: 'Payments', chars: 45, status: 'active' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">SMS Templates</h1>
              <p className="text-gray-600">Manage SMS notification templates</p>
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

        <div className="grid grid-cols-1 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{template.name}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{template.category}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded"><Edit className="w-5 h-5 text-gray-600" /></button>
                  <button className="p-2 hover:bg-gray-100 rounded"><Eye className="w-5 h-5 text-gray-600" /></button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-900 font-mono text-sm">{template.message}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Characters: {template.chars}/160</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${template.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                  {template.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
