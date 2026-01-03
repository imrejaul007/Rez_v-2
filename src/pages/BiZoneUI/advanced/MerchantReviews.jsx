import { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, Search } from 'lucide-react';
import MerchantNav from '../../components/merchant/MerchantNav';

export default function MerchantReviews() {
  const [filterRating, setFilterRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: 'John Doe',
      rating: 5,
      title: 'Amazing food!',
      text: 'Best pizza in town. The crust was perfect and toppings were fresh. Service was excellent too!',
      serviceRating: 5,
      valueRating: 5,
      ambienceRating: 5,
      date: '2024-01-20',
      verified: true,
      helpful: 12,
      images: [],
      merchantResponse: null
    },
    {
      id: 2,
      customer: 'Jane Smith',
      rating: 4,
      title: 'Great experience',
      text: 'Loved the coffee and ambience. Only minor issue was the wait time during peak hours.',
      serviceRating: 4,
      valueRating: 5,
      ambienceRating: 5,
      date: '2024-01-19',
      verified: true,
      helpful: 8,
      images: [],
      merchantResponse: 'Thank you for your feedback! We\'re working on reducing wait times during peak hours.'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      rating: 3,
      title: 'Average',
      text: 'Food was okay but nothing special. Price is a bit high for the portion size.',
      serviceRating: 4,
      valueRating: 2,
      ambienceRating: 4,
      date: '2024-01-18',
      verified: true,
      helpful: 3,
      images: [],
      merchantResponse: null
    },
    {
      id: 4,
      customer: 'Sarah Williams',
      rating: 5,
      title: 'Excellent!',
      text: 'This place never disappoints. The pasta was incredible and the service is always top-notch. Highly recommend!',
      serviceRating: 5,
      valueRating: 5,
      ambienceRating: 5,
      date: '2024-01-17',
      verified: true,
      helpful: 15,
      images: [],
      merchantResponse: 'Thank you so much! We\'re thrilled you enjoyed your meal. See you again soon!'
    },
    {
      id: 5,
      customer: 'David Brown',
      rating: 2,
      title: 'Disappointing',
      text: 'Order was late and food was cold. Not happy with the experience.',
      serviceRating: 2,
      valueRating: 3,
      ambienceRating: 3,
      date: '2024-01-16',
      verified: true,
      helpful: 5,
      images: [],
      merchantResponse: null
    }
  ]);

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating);
    const matchesSearch = review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  const stats = {
    average: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    total: reviews.length,
    distribution: {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length
    },
    responded: reviews.filter(r => r.merchantResponse).length
  };

  const handleRespond = (id) => {
    const response = prompt('Enter your response:');
    if (response) {
      setReviews(prev => prev.map(r =>
        r.id === id ? { ...r, merchantResponse: response } : r
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Reviews & Ratings</h1>
          <p className="text-gray-600 mt-1">Manage customer feedback and build your reputation</p>
        </div>
      </div>

      <MerchantNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Overall Rating</h3>
              <div className="flex items-center gap-1">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-3xl font-bold text-gray-900">{stats.average.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Based on {stats.total} reviews</p>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 w-8">{rating}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(stats.distribution[rating] / stats.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">{stats.distribution[rating]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Response Rate</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="#10b981"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${(stats.responded / stats.total) * 351.86} 351.86`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {Math.round((stats.responded / stats.total) * 100)}%
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              {stats.responded} of {stats.total} reviews responded
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Category Ratings</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Service</span>
                  <span className="text-sm font-medium">4.5</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Value</span>
                  <span className="text-sm font-medium">4.2</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Ambience</span>
                  <span className="text-sm font-medium">4.4</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {review.customer.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{review.customer}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      {review.verified && (
                        <span className="text-xs text-green-600 font-medium">✓ Verified</span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {review.title && (
                <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
              )}
              <p className="text-gray-700 mb-4">{review.text}</p>

              <div className="flex gap-6 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">Service: </span>
                  <span className="font-medium">{review.serviceRating}/5</span>
                </div>
                <div>
                  <span className="text-gray-600">Value: </span>
                  <span className="font-medium">{review.valueRating}/5</span>
                </div>
                <div>
                  <span className="text-gray-600">Ambience: </span>
                  <span className="font-medium">{review.ambienceRating}/5</span>
                </div>
              </div>

              {review.merchantResponse ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-blue-900 mb-1">Your Response:</p>
                  <p className="text-sm text-blue-800">{review.merchantResponse}</p>
                </div>
              ) : (
                <button
                  onClick={() => handleRespond(review.id)}
                  className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 text-sm font-medium mb-4"
                >
                  <MessageSquare className="w-4 h-4" />
                  Respond to Review
                </button>
              )}

              <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t">
                <button className="flex items-center gap-1 hover:text-indigo-600">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
