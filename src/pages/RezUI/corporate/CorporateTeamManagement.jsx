import { useState } from 'react';
import { Users, Plus, Edit, Trash2 } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const CorporateTeamManagement = () => {
  const [team] = useState([
    { id: 1, name: 'Raj Kumar', role: 'Manager', email: 'raj@company.com', status: 'active' },
    { id: 2, name: 'Priya Singh', role: 'Team Lead', email: 'priya@company.com', status: 'active' },
    { id: 3, name: 'Amit Patel', role: 'Employee', email: 'amit@company.com', status: 'inactive' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Team Management</h1>
          <p className="text-gray-600 dark:text-gray-400">{team.length} members</p>
        </div>
        <button className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 py-6 space-y-2">
        {team.map((member) => (
          <div key={member.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-bold text-rez-navy dark:text-white">{member.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{member.email}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded"><Edit className="w-4 h-4" /></button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded"><Trash2 className="w-4 h-4 text-red-600" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default CorporateTeamManagement;
