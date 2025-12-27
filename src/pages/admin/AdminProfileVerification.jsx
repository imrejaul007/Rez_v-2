import { useState } from 'react';
import { UserCheck, GraduationCap, Briefcase, Award, CheckCircle, XCircle } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

export default function AdminProfileVerification() {
  const [verificationQueue] = useState([
    { id: 1, name: 'John Doe', type: 'student', university: 'Delhi University', status: 'pending', documents: 2 },
    { id: 2, name: 'Jane Smith', type: 'corporate', company: 'Tech Corp', status: 'pending', documents: 3 }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <UserCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Profile Verification Queue</h1>
              <p className="text-blue-100 mt-1">Verify special profile applications</p>
            </div>
          </div>
        </div>
      </div>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {verificationQueue.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-sm border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{request.name}</h3>
                    <p className="text-sm text-gray-600">{request.university || request.company}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <CheckCircle className="w-5 h-5 inline mr-2" />
                    Approve
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <XCircle className="w-5 h-5 inline mr-2" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
