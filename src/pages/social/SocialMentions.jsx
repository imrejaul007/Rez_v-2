import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  AtSign,
  Heart,
  MessageCircle,
  Share2,
  Filter,
  Check
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialMentions = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock mentions data - replace with API call
  const mentions = [
    {
      id: 1,
      type: 'post',
      author: {
        id: 101,
        name: 'Tech Deals Hub',
        username: '@techdealshub',
        avatar: '💻'
      },
      content: 'Hey @you check out this amazing smartphone deal! 50% off on latest models 📱',
      post: {
        id: 'p1',
        image: '📱',
        likes: 234,
        comments: 45
      },
      timestamp: '2h ago',
      isRead: false
    },
    {
      id: 2,
      type: 'comment',
      author: {
        id: 102,
        name: 'Fashion Finds',
        username: '@fashionfinds',
        avatar: '👗'
      },
      content: '@you thanks for sharing! Just ordered using your code 🎉',
      post: {
        id: 'p2',
        preview: 'Check out these fashion deals...',
        likes: 89,
        comments: 12
      },
      timestamp: '5h ago',
      isRead: false
    },
    {
      id: 3,
      type: 'post',
      author: {
        id: 103,
        name: 'Food Explorer',
        username: '@foodexplorer',
        avatar: '🍕'
      },
      content: '@you you were right about this restaurant! The food is amazing and the discount makes it even better 🍔',
      post: {
        id: 'p3',
        image: '🍜',
        likes: 156,
        comments: 28
      },
      timestamp: '1d ago',
      isRead: true
    },
    {
      id: 4,
      type: 'comment',
      author: {
        id: 104,
        name: 'Smart Shopper',
        username: '@smartshopper',
        avatar: '🛍️'
      },
      content: '@you great find! This deal is incredible',
      post: {
        id: 'p4',
        preview: 'Amazing deals on electronics...',
        likes: 67,
        comments: 15
      },
      timestamp: '2d ago',
      isRead: true
    },
    {
      id: 5,
      type: 'post',
      author: {
        id: 105,
        name: 'Travel Deals',
        username: '@traveldeals',
        avatar: '✈️'
      },
      content: '@you have you seen this travel package? Thought you might be interested! 🏖️',
      post: {
        id: 'p5',
        image: '🏝️',
        likes: 345,
        comments: 42
      },
      timestamp: '3d ago',
      isRead: true
    }
  ];

  const filteredMentions = activeFilter === 'all'
    ? mentions
    : activeFilter === 'unread'
      ? mentions.filter(m => !m.isRead)
      : mentions.filter(m => m.type === activeFilter);

  const markAsRead = (mentionId) => {
    // API: POST /api/social/mentions/{mentionId}/read
    // TODO: Implement mark as read with backend
    console.log('Mark as read:', mentionId);
  };

  const markAllAsRead = () => {
    // API: POST /api/social/mentions/read-all
    // TODO: Implement mark all as read with backend
    console.log('Mark all as read');
  };

  const unreadCount = mentions.filter(m => !m.isRead).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Mentions</h1>
              {unreadCount > 0 && (
                <p className="text-caption text-blue-500">{unreadCount} unread</p>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
              title="Mark all as read"
            >
              <Check className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveFilter('all')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'all'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('unread')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'unread'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </button>
          <button
            onClick={() => setActiveFilter('post')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'post'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveFilter('comment')}
            className={`pb-3 px-3 text-body-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === 'comment'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Comments
          </button>
        </div>
      </div>

      <div className="px-4 py-2 space-y-3">
        {filteredMentions.length > 0 ? (
          filteredMentions.map((mention) => (
            <button
              key={mention.id}
              onClick={() => {
                markAsRead(mention.id);
                navigate(`/social/post/${mention.post.id}`);
              }}
              className={`w-full p-4 rounded-rez-xl border transition-all text-left ${
                !mention.isRead
                  ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30'
                  : 'bg-white dark:bg-bg-card border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Author Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl shrink-0">
                  {mention.author.avatar}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Author Info */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white truncate">
                        {mention.author.name}
                      </h3>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                        {mention.author.username} • {mention.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="px-2 py-1 rounded-rez-lg bg-purple-50 dark:bg-purple-500/10">
                        <span className="text-caption font-medium text-purple-600 dark:text-purple-400">
                          {mention.type === 'post' ? 'Post' : 'Comment'}
                        </span>
                      </div>
                      {!mention.isRead && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-body-sm text-rez-navy dark:text-white mb-3">
                    {mention.content}
                  </p>

                  {/* Post Preview */}
                  <div className="p-3 rounded-rez-lg bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
                    {mention.post.image ? (
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl shrink-0">
                          {mention.post.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {mention.post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {mention.post.comments}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 line-clamp-2 mb-2">
                          {mention.post.preview}
                        </p>
                        <div className="flex items-center gap-4 text-caption text-rez-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {mention.post.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {mention.post.comments}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center py-12">
            <AtSign className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {activeFilter === 'unread' ? 'No unread mentions' : 'No mentions yet'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {activeFilter === 'unread'
                ? 'You\'re all caught up!'
                : 'When someone mentions you, it\'ll appear here'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialMentions;
