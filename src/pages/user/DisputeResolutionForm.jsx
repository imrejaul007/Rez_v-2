import React, { useState } from 'react';
import { AlertTriangle, Upload } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function DisputeResolutionForm() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <AlertTriangle className="text-red-600" size={28} /> Dispute Resolution
        </h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select category</option>
              <option value="payment">Payment Issue</option>
              <option value="product">Product Quality</option>
              <option value="delivery">Delivery Issue</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your issue..." className="w-full border border-gray-300 rounded px-3 py-2" rows="4" />
          </div>

          <button className="w-full border-2 border-red-500 text-red-600 py-2 rounded font-semibold flex items-center justify-center gap-2">
            <Upload size={18} /> Upload Evidence
          </button>

          <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 rounded font-semibold">Submit Dispute</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}