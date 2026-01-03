import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import BottomNav from '../../components/BottomNav';

export default function OrderReviewForm() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async () => {
    // Backend API: POST /api/orders/review
    // { orderId: string, rating: number, review: string }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Rate Your Order</h1>

        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <div className="text-center">
            <p className="text-gray-600 mb-3">How satisfied are you?</p>
            <div className="flex justify-center gap-2">
              {[1,2,3,4,5].map(star => (
                <button key={star} onClick={() => setRating(star)}>
                  <Star size={32} fill={star <= rating ? '#fbbf24' : '#e5e7eb'} color={star <= rating ? '#f59e0b' : '#d1d5db'} />
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your experience..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            rows="4"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white py-2 rounded font-semibold flex items-center justify-center gap-2"
          >
            <Send size={18} /> Submit Review
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}