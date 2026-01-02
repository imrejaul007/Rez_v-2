import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Hash,
  TrendingUp,
  Grid,
  List,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Plus
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialHashtag = () => {
  const navigate = useNavigate();
  const { hashtag } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock hashtag data - replace with API call
  const hashtagData = {
    tag: `#${hashtag}`,
    posts: 12340,
    followers: 5678,
    growth: '+234%',
    description: 'Discover the best deals and save money on your favorite products',
    relatedTags: ['#Deals', '#Shopping', '#SaveMoney', '#Discounts']
  };

  // Mock posts - replace with API call
  const posts = [
    {
      id: 1,
      author: {
        id: 101,
        name: 'Tech Deals Hub',
        username: '@techdealshub',
        avatar: '💻'
      },
      content: `🔥 Amazing smartphone deals! Check out these incredible offers! ${hashtagData.tag}`,
      image: '📱',
      likes: 1234,
      comments: 89,
      timestamp: '2h ago'
    },
    {
      id: 2,
      author: {
        id: 102,
        name: 'Fashion Finds',
        username: '@fashionfinds',
        avatar: '👗'
      },
      content: `Fashion sale is live! Up to 70% off on top brands ${hashtagData.tag}`,
      image: '👠',
      likes: 892,
      comments: 45,
      timestamp: '5h ago'
    },
    {
      id: 3,
      author: {
        id: 103,
        name: 'Food Explorer',
        username: '@foodexplorer',
        avatar: '🍕'
      },
      content: `Best food deals this week! ${hashtagData.tag} 🍔🍕`,
      image: '🍜',
      likes: 567,
      comments: 34,
      timestamp: '8h ago'
    },
    {
      id: 4,
      author: {
        id: 104,
        name: 'Home Decor',
        username: '@homedecor',
        avatar: '🏠'
      },
      content: `Transform your home with these amazing deals! ${hashtagData.tag}`,
      image: '🪴',
      likes: 456,
      comments: 23,
      timestamp: '1d ago'
    },
    {
      id: 5,
      author: {
        id: 105,
        name: 'Fitness Guru',
        username: '@fitnessguru',
        avatar: '💪'
      },
      content: `Fitness equipment at half price! ${hashtagData.tag} 🏋️`,
      image: '🏃',
      likes: 678,
      comments: 56,
      timestamp: '1d ago'
    },
    {
      id: 6,
      author: {
        id: 106,
        name: 'Travel Deals',
        username: '@traveldeals',
        avatar: '✈️'
      },
      content: `Book your dream vacation with exclusive deals ${hashtagData.tag}`,
      image: '🏖️',
      likes: 1023,
      comments: 67,
      timestamp: '2d ago'
    }
  ];

  const handleFollowToggle = () => {
    // API: POST /api/social/hashtags/{hashtag}/follow
    // TODO: Implement follow hashtag with backend
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white flex-1 mx-3 truncate">
            {hashtagData.tag}
          </h1>
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            {viewMode === 'grid' ? (
              <List className="w-5 h-5 text-rez-navy dark:text-white" />
            ) : (
              <Grid className="w-5 h-5 text-rez-navy dark:text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Hashtag Info */}
        <div className="px-4 pt-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-rez-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Hash className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">
              {hashtagData.tag}
            </h2>
            <p className="text-body text-rez-gray-600 dark:text-gray-400 max-w-md mx-auto mb-4">
              {hashtagData.description}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 mb-5">
              <div className="text-center">
                <div className="text-h4 font-poppins text-rez-navy dark:text-white">
                  {hashtagData.posts.toLocaleString()}
                </div>
                <div className="text-caption text-rez-gray-600 dark:text-gray-400">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-h4 font-poppins text-rez-navy dark:text-white">
                  {hashtagData.followers.toLocaleString()}
                </div>
                <div className="text-caption text-rez-gray-600 dark:text-gray-400">Followers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-h5 font-poppins text-green-500">{hashtagData.growth}</span>
                </div>
                <div className="text-caption text-rez-gray-600 dark:text-gray-400">Growth</div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleFollowToggle}
                className={`py-3 rounded-rez-xl font-semibold transition-all ${
                  isFollowing
                    ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-rez-gray-200 dark:hover:bg-white/20'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
              <button
                onClick={() => navigate('/social/create-post')}
                className="py-3 rounded-rez-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Post
                </div>
              </button>
            </div>
          </div>

          {/* Related Tags */}
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
            <h3 className="text-body font-semibold text-rez-navy dark:text-white mb-3">Related Hashtags</h3>
            <div className="flex flex-wrap gap-2">
              {hashtagData.relatedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate(`/social/hashtag/${tag.slice(1)}`)}
                  className="px-3 py-1.5 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-body-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="px-4">
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-3 gap-1">
              {posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => navigate(`/social/post/${post.id}`)}
                  className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 hover:opacity-90 transition-opacity group"
                >
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    {post.image}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-caption">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:shadow-rez-card transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <button
                      onClick={() => navigate(`/social/profile/${post.author.id}`)}
                      className="shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                        {post.author.avatar}
                      </div>
                    </button>
                    <div className="flex-1">
                      <h3 className="text-body font-semibold text-rez-navy dark:text-white">
                        {post.author.name}
                      </h3>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">
                        {post.author.username} • {post.timestamp}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors">
                      <Bookmark className="w-5 h-5 text-rez-navy dark:text-white" />
                    </button>
                  </div>

                  <button
                    onClick={() => navigate(`/social/post/${post.id}`)}
                    className="w-full text-left"
                  >
                    <p className="text-body text-rez-navy dark:text-white mb-3">
                      {post.content}
                    </p>

                    {post.image && (
                      <div className="mb-3 h-48 rounded-rez-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                        {post.image}
                      </div>
                    )}

                    <div className="flex items-center gap-6 pt-3 border-t border-rez-gray-200 dark:border-white/10">
                      <div className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400">
                        <Heart className="w-5 h-5" />
                        <span className="text-body-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-body-sm">{post.comments}</span>
                      </div>
                      <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors ml-auto">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialHashtag;
