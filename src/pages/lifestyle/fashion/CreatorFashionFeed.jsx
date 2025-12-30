import { useState } from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, Bookmark, MoreVertical, Verified, TrendingUp } from 'lucide-react';
import BottomNav from '../../../components/lifestyle/BottomNav';

export default function CreatorFashionFeed() {
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

  const creators = [
    {
      id: 1,
      name: 'Priya Sharma',
      username: '@priyastyle',
      avatar: 'https://i.pravatar.cc/150?img=5',
      verified: true,
      followers: '125K',
      tier: 'Elite Creator'
    },
    {
      id: 2,
      name: 'Rahul Menon',
      username: '@rahulfashion',
      avatar: 'https://i.pravatar.cc/150?img=12',
      verified: true,
      followers: '89K',
      tier: 'Rising Star'
    },
    {
      id: 3,
      name: 'Ananya Kapoor',
      username: '@ananyachic',
      avatar: 'https://i.pravatar.cc/150?img=9',
      verified: false,
      followers: '42K',
      tier: 'Verified Creator'
    }
  ];

  const posts = [
    {
      id: 1,
      creator: creators[0],
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=700&fit=crop',
      caption: 'Effortless summer vibes ☀️ This linen set is perfect for brunch dates! Swipe to shop the look 👉',
      likes: 1247,
      comments: 89,
      timestamp: '2 hours ago',
      trending: true,
      products: [
        { id: 1, name: 'Linen Co-ord Set', price: 2499, brand: 'Zara' },
        { id: 2, name: 'Straw Handbag', price: 1299, brand: 'H&M' },
        { id: 3, name: 'White Sneakers', price: 3499, brand: 'Nike' }
      ],
      tags: ['#SummerStyle', '#LinenLove', '#BrunchOutfit']
    },
    {
      id: 2,
      creator: creators[1],
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&h=700&fit=crop',
      caption: 'Street style essentials 🔥 Mixing streetwear with ethnic vibes. Double tap if you love this fusion!',
      likes: 892,
      comments: 54,
      timestamp: '5 hours ago',
      trending: false,
      products: [
        { id: 4, name: 'Oversized Denim Jacket', price: 3999, brand: 'Levis' },
        { id: 5, name: 'Printed Kurta', price: 1899, brand: 'FabIndia' },
        { id: 6, name: 'White Sneakers', price: 4999, brand: 'Adidas' }
      ],
      tags: ['#StreetStyle', '#EthnicFusion', '#OOTD']
    },
    {
      id: 3,
      creator: creators[2],
      image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&h=700&fit=crop',
      caption: 'Wedding season ready ✨ This pastel saree has my heart! Everything linked in bio 💕',
      likes: 2134,
      comments: 156,
      timestamp: '1 day ago',
      trending: true,
      products: [
        { id: 7, name: 'Pastel Silk Saree', price: 8999, brand: 'Raw Mango' },
        { id: 8, name: 'Embroidered Blouse', price: 2499, brand: 'Anita Dongre' },
        { id: 9, name: 'Statement Earrings', price: 1499, brand: 'Amrapali' }
      ],
      tags: ['#WeddingSeason', '#SareeStyle', '#IndianWear']
    },
    {
      id: 4,
      creator: creators[0],
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=700&fit=crop',
      caption: 'Workwear that works 💼 Power dressing done right. Who says formal can\'t be fun?',
      likes: 645,
      comments: 32,
      timestamp: '2 days ago',
      trending: false,
      products: [
        { id: 10, name: 'Blazer Set', price: 5999, brand: 'AND' },
        { id: 11, name: 'Satin Top', price: 1799, brand: 'Marks & Spencer' },
        { id: 12, name: 'Pointed Heels', price: 2999, brand: 'Steve Madden' }
      ],
      tags: ['#Workwear', '#PowerDressing', '#BossBabe']
    }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Creator Feed</h1>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
              Following 12
            </span>
          </div>
        </div>

        {/* Creator Stories */}
        <div className="px-4 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {creators.map((creator) => (
              <button
                key={creator.id}
                className="flex flex-col items-center gap-1 flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-white p-0.5">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-600 max-w-[64px] truncate">
                  {creator.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border-b border-gray-200 mb-2">
            {/* Post Header */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.creator.avatar}
                  alt={post.creator.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900">{post.creator.name}</span>
                    {post.creator.verified && (
                      <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.creator.username}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-600">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt="Post"
                className="w-full aspect-[4/5] object-cover"
              />
              {post.trending && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </div>
              )}
              <button className="absolute bottom-3 right-3 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:bg-gray-50 flex items-center gap-1">
                <ShoppingBag className="w-4 h-4" />
                Shop Look
              </button>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1 group"
                  >
                    <Heart
                      className={`w-6 h-6 transition-all ${
                        likedPosts.has(post.id)
                          ? 'text-red-500 fill-red-500 scale-110'
                          : 'text-gray-700 group-hover:text-red-500'
                      }`}
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-700 hover:text-purple-600">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm font-semibold text-gray-900">{post.comments}</span>
                  </button>
                  <button className="text-gray-700 hover:text-purple-600">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
                <button
                  onClick={() => handleSave(post.id)}
                  className="text-gray-700 hover:text-purple-600"
                >
                  <Bookmark
                    className={`w-6 h-6 ${
                      savedPosts.has(post.id) ? 'fill-purple-600 text-purple-600' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Caption */}
              <div className="mb-3">
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{post.creator.username}</span>{' '}
                  {post.caption}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-purple-600 font-medium hover:underline cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Products */}
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">
                    Products in this look
                  </span>
                  <ShoppingBag className="w-4 h-4 text-purple-600" />
                </div>
                <div className="space-y-2">
                  {post.products.map((product) => (
                    <button
                      key={product.id}
                      className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.brand}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">₹{product.price}</div>
                        <div className="text-xs text-gray-500">View</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="px-4 py-6 text-center">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700">
          Load More Posts
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
