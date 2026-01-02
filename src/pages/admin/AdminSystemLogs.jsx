import { useState } from 'react';
import { FileText, AlertTriangle, Info, CheckCircle, XCircle, Search, Download } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminSystemLogs() {
  const [filterLevel, setFilterLevel] = useState('all');
  const [logs] = useState([
    { id: '1', timestamp: '2024-01-20 15:30:45', level: 'error', service: 'auth-service', message: 'Failed to authenticate user', userId: 'USR-123' },
    { id: '2', timestamp: '2024-01-20 15:30:42', level: 'warning', service: 'payment-service', message: 'Payment retry attempt 3/3', orderId: 'ORD-789' },
    { id: '3', timestamp: '2024-01-20 15:30:38', level: 'info', service: 'order-service', message: 'Order created successfully', orderId: 'ORD-101' },
  ]);

  const getLevelIcon = (level) => {
    switch(level) {
      case 'error': return <XCircle className="w-5 h-5 text-red-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'info': return <Info className="w-5 h-5 text-blue-600" />;
      default: return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const filteredLogs = filterLevel === 'all' ? logs : logs.filter(l => l.level === filterLevel);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">System Logs</h1>
          <p className="text-gray-600">Monitor system events and errors</p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          {['error', 'warning', 'info', 'success'].map(level => (
            <div key={level} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <p className="text-3xl font-bold text-gray-900">{logs.filter(l => l.level === level).length}</p>
              <p className="text-sm text-gray-600 capitalize">{level}s</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
          <div className="flex gap-2">
            {['all', 'error', 'warning', 'info'].map(level => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-lg font-medium capitalize ${filterLevel === level ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredLogs.map(log => (
            <div key={log.id} className="bg-white rounded-xl border p-4">
              <div className="flex items-start gap-4">
                {getLevelIcon(log.level)}
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-gray-600">{log.timestamp}</span>
                    <span className="font-semibold text-gray-900">{log.service}</span>
                  </div>
                  <p className="text-gray-900">{log.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
