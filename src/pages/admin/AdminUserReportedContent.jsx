import React, { useState } from 'react';
import { Flag, Shield, Eye, Trash2, Ban, CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminUserReportedContent = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const reports = [
    { id: 1, contentType: 'Review', reason: 'Spam', reporter: 'USR-123', content: 'Check out my website for better deals!', reported: 'USR-456', timestamp: '2025-01-20 10:30', status: 'pending', severity: 'medium' },
    { id: 2, contentType: 'UGC Post', reason: 'Inappropriate', reporter: 'USR-789', content: 'Offensive language and harassment', reported: 'USR-321', timestamp: '2025-01-20 09:15', status: 'pending', severity: 'high' },
    { id: 3, contentType: 'Comment', reason: 'Fake', reporter: 'USR-555', content: 'This is clearly a fake review', reported: 'USR-888', timestamp: '2025-01-19 18:45', status: 'resolved', severity: 'low' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Flag className="w-10 h-10 text-orange-400" />
            User Reported Content
          </h1>
          <p className="text-gray-400">Review and manage user reports</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Flag className="w-8 h-8 text-orange-400 mb-2" />
            <div className="text-3xl font-bold text-white">18</div>
            <div className="text-sm text-orange-400">Pending Reports</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <AlertTriangle className="w-8 h-8 text-red-400 mb-2" />
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm text-red-400">High Severity</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
            <div className="text-3xl font-bold text-white">156</div>
            <div className="text-sm text-green-400">Resolved Today</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <Shield className="w-8 h-8 text-blue-400 mb-2" />
            <div className="text-3xl font-bold text-white">92.3%</div>
            <div className="text-sm text-blue-400">Resolution Rate</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          <div className="flex gap-3 mb-6">
            {['all', 'pending', 'resolved', 'high-priority'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-orange-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {filter.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white font-bold">{report.contentType}</span>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        report.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                        report.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {report.severity.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-sm">Reported: {report.timestamp}</span>
                    </div>
                    <p className="text-gray-400 mb-3">Reason: {report.reason}</p>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-3">
                      <p className="text-white">{report.content}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Reporter: {report.reporter}</span>
                      <span>Reported User: {report.reported}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Review
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2">
                      <Ban className="w-4 h-4" />
                      Ban User
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserReportedContent;
