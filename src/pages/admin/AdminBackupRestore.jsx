import { useState } from 'react';
import { Download, Upload, Clock, CheckCircle, Play } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminBackupRestore() {
  const [backups] = useState([
    { id: '1', timestamp: '2024-01-20 00:00:00', size: '45.2GB', type: 'Full', status: 'completed', duration: '2h 15m' },
    { id: '2', timestamp: '2024-01-19 00:00:00', size: '44.8GB', type: 'Full', status: 'completed', duration: '2h 12m' },
    { id: '3', timestamp: '2024-01-18 12:00:00', size: '2.4GB', type: 'Incremental', status: 'completed', duration: '18m' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Backup & Restore</h1>
              <p className="text-gray-600">Manage database backups and restore points</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
              <Play className="w-5 h-5" />
              Create Backup
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">3</p>
            <p className="text-sm text-gray-600">Available Backups</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Clock className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">Daily</p>
            <p className="text-sm text-gray-600">Backup Schedule</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <Download className="w-8 h-8 text-purple-500 mb-2" />
            <p className="text-3xl font-bold text-gray-900">92.4GB</p>
            <p className="text-sm text-gray-600">Total Size</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Timestamp</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Duration</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {backups.map(backup => (
                <tr key={backup.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-sm">{backup.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${backup.type === 'Full' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                      {backup.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{backup.size}</td>
                  <td className="px-6 py-4 text-gray-900">{backup.duration}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {backup.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">Restore</button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">Download</button>
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
