import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ExperienceReviews = () => {
  const [reviews] = useState([
    { id: 1, author: 'Raj Kumar', rating: 5, text: 'Excellent experience!', likes: 23 },
    { id: 2, author: 'Priya Singh', rating: 4, text: 'Very good, worth it', likes: 15 },
    { id: 3, author: 'Amit Patel', rating: 5, text: 'Amazing! Highly recommended', likes: 42 }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 pb-24">
      <div className="bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 px-4 py-6">
        <h1 className="text-2xl font-bold text-rez-navy dark:text-white mb-2">Reviews</h1>
        <p className="text-gray-600 dark:text-gray-400">What people say</p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-4">
            <div className="flex items-start justify-between mb-2">
              <p className="font-bold text-rez-navy dark:text-white">{review.author}</p>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{review.text}</p>
            <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
              <ThumbsUp className="w-4 h-4" />
              Helpful ({review.likes})
            </button>
          </div>
        ))}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ExperienceReviews;
