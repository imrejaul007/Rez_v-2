import { Link } from 'react-router-dom';
import { UserCheck, UserPlus, CheckCircle, Star } from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';

/**
 * CreatorCard Component
 * Displays creator info with follow button
 */
const CreatorCard = ({ creator, compact = false }) => {
  const { toggleFollow, isFollowing } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const following = isFollowing(creator.id);

  const handleFollow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFollow(creator.id);
  };

  if (compact) {
    return (
      <Link
        to={`/creators/${creator.username}`}
        className={`flex items-center gap-3 p-3 rounded-xl ${
          isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
        } border ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-all`}
      >
        <img
          src={creator.avatar}
          alt={creator.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-900 dark:text-white truncate">
              {creator.name}
            </span>
            {creator.verified && (
              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {creator.stats.followers.toLocaleString()} followers
          </p>
        </div>
        <button
          onClick={handleFollow}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            following
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
          }`}
        >
          {following ? 'Following' : 'Follow'}
        </button>
      </Link>
    );
  }

  return (
    <Link
      to={`/creators/${creator.username}`}
      className={`block p-6 rounded-2xl ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } border ${isDark ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-all`}
    >
      {/* Avatar & Verification */}
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {creator.verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        <button
          onClick={handleFollow}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            following
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center gap-2'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white flex items-center gap-2'
          }`}
        >
          {following ? (
            <>
              <UserCheck className="w-4 h-4" />
              Following
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" />
              Follow
            </>
          )}
        </button>
      </div>

      {/* Name & Username */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {creator.name}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          @{creator.username}
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
        {creator.bio}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {creator.stats.followers >= 1000
              ? `${(creator.stats.followers / 1000).toFixed(1)}k`
              : creator.stats.followers}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Followers
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-white">
            {creator.stats.totalPicks}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Picks
          </div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {creator.stats.avgRating.toFixed(1)}
            </span>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Rating
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="flex flex-wrap gap-2">
        {creator.specialties.slice(0, 3).map((specialty, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isDark
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {specialty}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default CreatorCard;
