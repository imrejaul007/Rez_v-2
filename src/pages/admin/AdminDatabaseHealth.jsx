import { useState } from 'react';
import { Database, HardDrive, Cpu, Activity } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminDatabaseHealth() {
  const [databases] = useState([
    { name: 'PostgreSQL (Main)', status: 'healthy', connections: 45, maxConnections: 100, storage: '245GB / 500GB', cpu: 35, memory: 68 },
    { name: 'MongoDB (Analytics)', status: 'healthy', connections: 28, maxConnections: 80, storage: '128GB / 300GB', cpu: 22, memory: 54 },
    { name: 'Redis (Cache)', status: 'healthy', connections: 156, maxConnections: 500, storage: '12GB / 50GB', cpu: 18, memory: 42 },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Database Health</h1>
          <p className="text-gray-600">Monitor database performance and status</p>
        </div>

        <div className="space-y-6">
          {databases.map((db, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{db.name}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">{db.status}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Connections</p>
                  <p className="text-2xl font-bold text-gray-900">{db.connections} / {db.maxConnections}</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(db.connections/db.maxConnections)*100}%` }} />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Storage</p>
                  <p className="text-lg font-bold text-gray-900">{db.storage}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">CPU Usage</p>
                  <p className="text-2xl font-bold text-gray-900">{db.cpu}%</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${db.cpu}%` }} />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Memory</p>
                  <p className="text-2xl font-bold text-gray-900">{db.memory}%</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${db.memory}%` }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
