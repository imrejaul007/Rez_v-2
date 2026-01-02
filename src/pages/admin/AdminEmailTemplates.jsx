import { useState } from 'react';
import { Mail, Plus, Edit, Eye, Copy } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminEmailTemplates() {
  const [templates] = useState([
    { id: '1', name: 'Welcome Email', subject: 'Welcome to RTMN!', category: 'Onboarding', lastModified: '2024-01-15', status: 'active' },
    { id: '2', name: 'Order Confirmation', subject: 'Your order #{{orderNumber}} is confirmed', category: 'Orders', lastModified: '2024-01-10', status: 'active' },
    { id: '3', name: 'Password Reset', subject: 'Reset your password', category: 'Account', lastModified: '2024-01-08', status: 'active' },
    { id: '4', name: 'Promotional Offer', subject: 'Special offer just for you!', category: 'Marketing', lastModified: '2024-01-05', status: 'draft' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Templates</h1>
              <p className="text-gray-600">Manage transactional and marketing email templates</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <Plus className="w-5 h-5" />
              New Template
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{templates.length}</p>
            <p className="text-sm text-gray-600">Total Templates</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{templates.filter(t => t.status === 'active').length}</p>
            <p className="text-sm text-gray-600">Active</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">{templates.filter(t => t.status === 'draft').length}</p>
            <p className="text-sm text-gray-600">Drafts</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-600">Archived</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Template Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Subject</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Last Modified</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {templates.map(template => (
                <tr key={template.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-gray-900">{template.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{template.subject}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{template.category}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{template.lastModified}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${template.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {template.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded"><Edit className="w-4 h-4 text-gray-600" /></button>
                      <button className="p-2 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-gray-600" /></button>
                      <button className="p-2 hover:bg-gray-100 rounded"><Copy className="w-4 h-4 text-gray-600" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
