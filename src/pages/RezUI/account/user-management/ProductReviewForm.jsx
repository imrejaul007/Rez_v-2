import React, { useState } from 'react';
import { Star, Upload } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function ProductReviewForm() {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Review</h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="flex gap-3 pb-4 border-b">
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div>
              <p className="font-semibold text-gray-900">Cotton T-Shirt</p>
              <p className="text-sm text-gray-600">Size M | Blue</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Rating</p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(star => (
                <button key={star} onClick={() => setRating(star)}>
                  <Star size={28} fill={star <= rating ? '#6366f1' : '#e5e7eb'} color={star <= rating ? '#4f46e5' : '#d1d5db'} />
                </button>
              ))}
            </div>
          </div>

          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Review title" className="w-full border border-gray-300 rounded px-3 py-2" />

          <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Your detailed review..." className="w-full border border-gray-300 rounded px-3 py-2" rows="4" />

          <button className="w-full border-2 border-indigo-500 text-indigo-600 py-2 rounded font-semibold flex items-center justify-center gap-2">
            <Upload size={18} /> Add Photos
          </button>

          <button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2 rounded font-semibold">Post Review</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}