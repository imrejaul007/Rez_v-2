import { useState } from 'react';
import { Users, Calendar, Plus, Clock, AlertCircle } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantEmployeeScheduling() {
  const [schedules, setSchedules] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSchedule, setNewSchedule] = useState({ employeeName: '', date: '', shift: '', role: '' });

  return (
    <div className="min-h-screen bg-gray-50">
      <MerchantNav />

      <div className="lg:ml-64">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Employee Scheduling</h1>
              <p className="text-indigo-100">Manage staff schedules and shifts</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Total Staff</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-green-200 p-4">
              <div className="text-sm text-green-600">On Duty</div>
              <div className="text-2xl font-bold text-green-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-yellow-200 p-4">
              <div className="text-sm text-yellow-600">Off Duty</div>
              <div className="text-2xl font-bold text-yellow-900 mt-1">0</div>
            </div>
            <div className="bg-white rounded-lg border border-red-200 p-4">
              <div className="text-sm text-red-600">Absent</div>
              <div className="text-2xl font-bold text-red-900 mt-1">0</div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Staff Schedules</h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-5 h-5" />
              Schedule Employee
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {schedules.length === 0 ? (
              <div className="p-12 text-center">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">No schedules created yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shift</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">{schedule.employeeName}</td>
                      <td className="px-6 py-4">{schedule.date}</td>
                      <td className="px-6 py-4">{schedule.shift}</td>
                      <td className="px-6 py-4">{schedule.role}</td>
                      <td className="px-6 py-4"><span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Scheduled</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-md w-full">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900">Schedule Employee</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employee Name</label>
                    <input
                      type="text"
                      value={newSchedule.employeeName}
                      onChange={(e) => setNewSchedule({...newSchedule, employeeName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input type="date" value={newSchedule.date} onChange={(e) => setNewSchedule({...newSchedule, date: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Shift</label>
                    <select value={newSchedule.shift} onChange={(e) => setNewSchedule({...newSchedule, shift: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                      <option value="">Select shift</option>
                      <option value="Morning">Morning (6 AM - 2 PM)</option>
                      <option value="Afternoon">Afternoon (2 PM - 10 PM)</option>
                      <option value="Night">Night (10 PM - 6 AM)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input type="text" value={newSchedule.role} onChange={(e) => setNewSchedule({...newSchedule, role: e.target.value})} className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Chef, Server, etc." />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                  <button onClick={() => setShowAddModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Schedule</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
