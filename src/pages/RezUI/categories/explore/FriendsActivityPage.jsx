import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Users, Heart, ShoppingBag, TrendingUp, MapPin, Clock } from 'lucide-react';

const friendsActivity = [
  {
    id: 1,
    friend: {
      name: 'Arjun Kumar',
      avatar: '👨',
      mutualFriends: 12
    },
    action: 'purchased',
    item: {
      name: 'Nike Air Max 90',
      store: 'Nike Store BTM',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200',
      price: 6999,
      saved: 2000
    },
    earned: 1260,
    time: '2 hours ago',
    location: '1.2 km from you'
  },
  {
    id: 2,
    friend: {
      name: 'Priya Sharma',
      avatar: '👩',
      mutualFriends: 8
    },
    action: 'saved',
    item: {
      name: 'Spa Package',
      store: 'Wellness Spa',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200',
      price: 1999,
      saved: 1500
    },
    earned: 0,
    time: '5 hours ago',
    location: '2.1 km from you'
  },
  {
    id: 3,
    friend: {
      name: 'Rahul Verma',
      avatar: '👨',
      mutualFriends: 15
    },
    action: 'reviewed',
    item: {
      name: 'Chicken Biryani',
      store: 'Paradise Biryani',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200',
      price: 350,
      saved: 100
    },
    earned: 50,
    time: '1 day ago',
    location: '0.8 km from you',
    rating: 5
  }
];

const FriendsActivityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Friends Activity
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                See what your friends are buying
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <Users className="w-6 h-6 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">23</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Active friends</p>
          </div>
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
            <TrendingUp className="w-6 h-6 text-emerald-500 mb-2" />
            <p className="text-2xl font-bold text-rez-navy dark:text-white">₹12.4k</p>
            <p className="text-xs text-rez-gray-600 dark:text-gray-400">Friends saved</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-4">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
          <h3 className="text-sm font-bold text-white mb-1">Shop with Friends</h3>
          <p className="text-xs text-white/90">
            Your friends trust these stores. Follow their footsteps and save together!
          </p>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="px-4 space-y-4">
        {friendsActivity.map((activity) => (
          <div
            key={activity.id}
            className="bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-sm dark:shadow-none"
          >
            {/* Friend Info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl">
                {activity.friend.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-rez-navy dark:text-white">
                    {activity.friend.name}
                  </h3>
                  <span className="text-xs text-rez-gray-500 dark:text-gray-500">
                    • {activity.mutualFriends} mutual
                  </span>
                </div>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  {activity.action === 'purchased' && '🛍 Purchased from'}
                  {activity.action === 'saved' && '❤️ Saved to wishlist'}
                  {activity.action === 'reviewed' && '⭐ Reviewed'}
                </p>
              </div>
              <div className="text-right">
                <Clock className="w-4 h-4 text-rez-gray-400 dark:text-gray-500 mx-auto mb-1" />
                <p className="text-[10px] text-rez-gray-500 dark:text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>

            {/* Item Card */}
            <Link
              to={`/explore/product/${activity.id}`}
              className="block p-3 bg-rez-gray-50 dark:bg-white/5 rounded-xl hover:bg-rez-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-3">
                <img
                  src={activity.item.image}
                  alt={activity.item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-rez-navy dark:text-white line-clamp-1 mb-1">
                    {activity.item.name}
                  </h4>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400 mb-2">
                    {activity.item.store}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-rez-navy dark:text-white">
                      ₹{activity.item.price.toLocaleString()}
                    </span>
                    {activity.item.saved > 0 && (
                      <span className="text-xs text-emerald-500 font-semibold">
                        Saved ₹{activity.item.saved}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 mt-2 text-rez-gray-600 dark:text-gray-400">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{activity.location}</span>
              </div>

              {/* Earnings (if any) */}
              {activity.earned > 0 && (
                <div className="flex items-center gap-1 mt-2 px-2 py-1 bg-amber-500/10 rounded-lg inline-block">
                  <TrendingUp className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-semibold text-amber-500">
                    {activity.friend.name.split(' ')[0]} earned ₹{activity.earned}
                  </span>
                </div>
              )}

              {/* Rating (if reviewed) */}
              {activity.rating && (
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(activity.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400">⭐</span>
                  ))}
                </div>
              )}
            </Link>

            {/* Action Button */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 bg-rez-green-500 hover:bg-rez-green-600 text-white text-sm font-semibold rounded-xl transition-colors">
                Buy Same Deal
              </button>
              <button className="px-4 py-2 bg-rez-gray-100 dark:bg-white/10 hover:bg-rez-gray-200 dark:hover:bg-white/20 rounded-xl transition-colors">
                <Heart className="w-5 h-5 text-rez-navy dark:text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invite Friends CTA */}
      <div className="px-4 py-6">
        <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-center">
          <Users className="w-8 h-8 text-white mx-auto mb-2" />
          <h3 className="text-sm font-bold text-white mb-1">
            Invite Friends & Earn
          </h3>
          <p className="text-xs text-white/90 mb-3">
            Get ₹200 for each friend who joins ReZ
          </p>
          <button className="px-6 py-2.5 bg-white text-purple-500 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
            Invite Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendsActivityPage;
