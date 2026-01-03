import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function MerchantReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Rate Merchant</h1>
        <p className="text-gray-600 mb-6">Share your experience with this seller</p>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="flex items-center gap-3 pb-4 border-b">
            <div className="w-12 h-12 bg-green-200 rounded-full" />
            <div>
              <p className="font-semibold text-gray-900">Fresh Mart</p>
              <p className="text-sm text-gray-600">Grocery Store</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Rating</p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(star => (
                <button key={star} onClick={() => setRating(star)}>
                  <Star size={28} fill={star <= rating ? '#22c55e' : '#e5e7eb'} color={star <= rating ? '#16a34a' : '#d1d5db'} />
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Describe your experience..."
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows="4"
          />

          <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
            <MessageSquare size={18} /> Submit Review
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}