import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2, Award } from 'lucide-react';

function FitnessFeed() {
  const navigate = useNavigate();
  const posts = [
    { id: 1, user: 'Rahul Sharma', avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100', workout: 'Completed 10K run', time: '2 hours ago', likes: 245, comments: 32, image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400', achievement: '5K Streak' },
    { id: 2, user: 'Priya Verma', avatar: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=100', workout: 'Yoga Session - 60 mins', time: '4 hours ago', likes: 189, comments: 18, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400', achievement: null }
  ];

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/20"><ArrowLeft className="w-5 h-5 text-white" /></button>
          <h1 className="text-h3 font-poppins text-white">Community Feed</h1>
        </div>
      </div>
      <div className="px-4 py-4 space-y-3">
        {posts.map(post => (
          <div key={post.id} className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-rez-gray-200 dark:border-dark-700">
            <div className="p-4 flex items-center gap-3">
              <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-rez-navy dark:text-white">{post.user}</h3>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">{post.time}</p>
              </div>
              {post.achievement && (
                <div className="px-2 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold flex items-center gap-1">
                  <Award className="w-3 h-3" />{post.achievement}
                </div>
              )}
            </div>
            <img src={post.image} alt={post.workout} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-sm text-rez-navy dark:text-white font-bold mb-3">{post.workout}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-bold">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors ml-auto">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FitnessFeed;
