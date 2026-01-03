import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Settings,
  MapPin,
  Calendar,
  Link as LinkIcon,
  Grid,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Users,
  Award,
  Star,
  MoreVertical,
  UserPlus,
  UserMinus,
  Mail
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock user data - replace with API call
  const isOwnProfile = !userId || userId === 'me';

  const userData = {
    id: userId || 'me',
    name: 'Sarah Anderson',
    username: '@sarah_saves',
    avatar: '👩‍💼',
    bio: 'Deal hunter & savvy shopper 🛍️ | Sharing the best finds & saving tips | ReZ Power User',
    location: 'Bangalore, India',
    website: 'dealsandsavings.com',
    joinDate: 'Jan 2024',
    stats: {
      posts: 234,
      followers: 1247,
      following: 389,
      coins: 12450
    },
    badges: [
      { id: 1, icon: '🏆', name: 'Top Contributor' },
      { id: 2, icon: '⭐', name: 'Deal Master' },
      { id: 3, icon: '💎', name: 'Premium Member' }
    ],
    posts: [
      {
        id: 1,
        image: '🛍️',
        type: 'image',
        likes: 234,
        comments: 45
      },
      {
        id: 2,
        image: '👗',
        type: 'image',
        likes: 189,
        comments: 32
      },
      {
        id: 3,
        image: '📱',
        type: 'image',
        likes: 456,
        comments: 67
      },
      {
        id: 4,
        image: '🎮',
        type: 'video',
        likes: 678,
        comments: 89
      },
      {
        id: 5,
        image: '💄',
        type: 'image',
        likes: 345,
        comments: 56
      },
      {
        id: 6,
        image: '👟',
        type: 'image',
        likes: 289,
        comments: 41
      }
    ]
  };

  const handleFollow = () => {
    // API: POST /api/social/users/{userId}/follow
    // TODO: Implement follow/unfollow with backend
    setIsFollowing(!isFollowing);
  };

  const handleMessage = () => {
    navigate(`/social/chat/${userId}`);
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
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">{userData.name}</h1>
          <button
            onClick={() => isOwnProfile ? navigate('/social/settings') : null}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            {isOwnProfile ? (
              <Settings className="w-5 h-5 text-rez-navy dark:text-white" />
            ) : (
              <MoreVertical className="w-5 h-5 text-rez-navy dark:text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Profile Header */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl">
            {userData.avatar}
          </div>
          <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-1">{userData.name}</h2>
          <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-3">{userData.username}</p>

          {/* Bio */}
          <p className="text-body text-rez-navy dark:text-white mb-4 max-w-md mx-auto">
            {userData.bio}
          </p>

          {/* Info */}
          <div className="space-y-2 mb-4">
            {userData.location && (
              <div className="flex items-center justify-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4" />
                {userData.location}
              </div>
            )}
            {userData.website && (
              <div className="flex items-center justify-center gap-2 text-body-sm text-blue-500">
                <LinkIcon className="w-4 h-4" />
                <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer">
                  {userData.website}
                </a>
              </div>
            )}
            <div className="flex items-center justify-center gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              Joined {userData.joinDate}
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-2 mb-5">
            {userData.badges.map((badge) => (
              <div
                key={badge.id}
                className="group relative"
                title={badge.name}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl">
                  {badge.icon}
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-caption rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {badge.name}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          {isOwnProfile ? (
            <button
              onClick={() => navigate('/social/edit-profile')}
              className="w-full py-3 rounded-rez-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleFollow}
                className={`py-3 rounded-rez-xl font-semibold transition-all ${
                  isFollowing
                    ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-rez-gray-200 dark:hover:bg-white/20'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}
              >
                {isFollowing ? (
                  <div className="flex items-center justify-center gap-2">
                    <UserMinus className="w-5 h-5" />
                    Unfollow
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <UserPlus className="w-5 h-5" />
                    Follow
                  </div>
                )}
              </button>
              <button
                onClick={handleMessage}
                className="py-3 rounded-rez-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Message
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center">
            <div className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">
              {userData.stats.posts}
            </div>
            <div className="text-caption text-rez-gray-600 dark:text-gray-400">Posts</div>
          </div>
          <button
            onClick={() => navigate(`/social/followers/${userData.id}`)}
            className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <div className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">
              {userData.stats.followers.toLocaleString()}
            </div>
            <div className="text-caption text-rez-gray-600 dark:text-gray-400">Followers</div>
          </button>
          <button
            onClick={() => navigate(`/social/following/${userData.id}`)}
            className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 text-center hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <div className="text-h4 font-poppins text-rez-navy dark:text-white mb-1">
              {userData.stats.following}
            </div>
            <div className="text-caption text-rez-gray-600 dark:text-gray-400">Following</div>
          </button>
          <div className="p-4 rounded-rez-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white text-center">
            <div className="text-h4 font-poppins mb-1">
              {userData.stats.coins.toLocaleString()}
            </div>
            <div className="text-caption opacity-90">Coins</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-rez-gray-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'posts'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Grid className="w-4 h-4" />
              Posts
            </div>
          </button>
          {isOwnProfile && (
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
                activeTab === 'saved'
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-rez-gray-600 dark:text-gray-400'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Bookmark className="w-4 h-4" />
                Saved
              </div>
            </button>
          )}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {userData.posts.map((post) => (
            <button
              key={post.id}
              onClick={() => navigate(`/social/post/${post.id}`)}
              className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500 hover:opacity-90 transition-opacity"
            >
              <div className="w-full h-full flex items-center justify-center text-4xl">
                {post.image}
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
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

        {userData.posts.length === 0 && (
          <div className="text-center py-12">
            <Grid className="w-16 h-16 mx-auto mb-4 text-rez-gray-300 dark:text-gray-600" />
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">No posts yet</h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400">
              {isOwnProfile ? 'Share your first post!' : 'This user hasn\'t posted yet.'}
            </p>
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialProfile;
