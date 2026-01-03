import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RotateCcw, Upload, X } from 'lucide-react';

function ReturnRequest() {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const reasons = ['Defective product', 'Wrong item received', 'Not as described', 'Quality issues', 'Changed mind'];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 5) setImages([...images, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('reason', reason);
    formData.append('description', description);
    images.forEach(img => formData.append('images', img));
    try {
      await fetch('/api/orders/return', { method: 'POST', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }, body: formData });
      navigate('/orders');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"><RotateCcw className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Return Request</h1>
            <p className="text-gray-600">Tell us about the issue</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Return</label>
              <select value={reason} onChange={(e) => setReason(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" required>
                <option value="">Select reason</option>
                {reasons.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" rows="4" placeholder="Please describe the issue..." required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images (Max 5)</label>
              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-purple-500">
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">Click to upload</span>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" />
              </label>
              {images.length > 0 && (
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {images.map((img, i) => (
                    <div key={i} className="relative">
                      <img src={URL.createObjectURL(img)} alt={`preview-${i}`} className="w-full h-16 object-cover rounded" />
                      <button type="button" onClick={() => setImages(images.filter((_, idx) => idx !== i))} className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"><X className="w-3 h-3" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 transition-all">{loading ? 'Submitting...' : 'Submit Return Request'}</button>
            <button type="button" onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Cancel</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ReturnRequest;
