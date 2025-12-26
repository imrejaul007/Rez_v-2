import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  UserCheck,
  UserPlus,
  CheckCircle,
  Star,
  ShoppingBag,
  Users,
  Instagram,
  Youtube,
  Globe,
  Grid3x3,
  LayoutGrid,
  Image,
  Video,
  Package,
  Heart,
  MessageCircle,
  Play,
  ThumbsUp,
  Briefcase
} from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';
import BottomNav from '../../components/layout/BottomNav';

/**
 * Creator Profile Page
 * View all content from a specific creator
 */
const CreatorProfile = () => {
  const { username } = useParams();
  const {
    getCreatorByUsername,
    getPicksByCreator,
    getCollectionsByCreator,
    getUGCByCreator,
    getProductsByCreator,
    toggleFollow,
    isFollowing
  } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState('picks'); // picks | collections | ugc | products

  const creator = getCreatorByUsername(username);
  const picks = getPicksByCreator(creator?.id);
  const collections = getCollectionsByCreator(creator?.id);
  const ugcContent = getUGCByCreator(creator?.id);
  const creatorProducts = getProductsByCreator(creator?.id);
  const following = isFollowing(creator?.id);

  if (!creator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Creator not found
          </p>
          <Link
            to="/creators"
            className="text-purple-600 dark:text-purple-400 hover:underline mt-4 inline-block"
          >
            Back to Creator Store
          </Link>
        </div>
      </div>
    );
  }

  const handleFollow = () => {
    toggleFollow(creator.id);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pb-24`}>
      {/* Header */}
      <div className={`sticky top-0 z-10 ${
        isDark ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to="/creators"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
          </Link>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            @{creator.username}
          </span>
          <div className="w-9"></div>
        </div>
      </div>

      {/* Creator Header */}
      <div className="px-6 py-6">
        <div className="flex items-start gap-4 mb-6">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            {creator.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          {/* Name & Stats */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {creator.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              @{creator.username}
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-6">
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {creator.stats.followers.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                  followers
                </span>
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {creator.stats.totalPicks}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                  picks
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {creator.stats.avgRating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {creator.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {creator.specialties.map((specialty, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDark
                  ? 'bg-purple-900/30 text-purple-300'
                  : 'bg-purple-100 text-purple-700'
              }`}
            >
              {specialty}
            </span>
          ))}
        </div>

        {/* Social Links */}
        {creator.socialLinks && (
          <div className="flex items-center gap-3 mb-6">
            {creator.socialLinks.instagram && (
              <a
                href={`https://instagram.com/${creator.socialLinks.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            )}
            {creator.socialLinks.youtube && (
              <a
                href={`https://youtube.com/@${creator.socialLinks.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Youtube className="w-5 h-5 text-red-600" />
              </a>
            )}
            {creator.socialLinks.website && (
              <a
                href={`https://${creator.socialLinks.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Globe className="w-5 h-5 text-blue-600" />
              </a>
            )}
          </div>
        )}

        {/* Follow Button */}
        <button
          onClick={handleFollow}
          className={`w-full py-3 rounded-xl font-semibold transition-all ${
            following
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center justify-center gap-2'
          }`}
        >
          {following ? (
            <>
              <UserCheck className="w-5 h-5" />
              Following
            </>
          ) : (
            <>
              <UserPlus className="w-5 h-5" />
              Follow
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} mb-6`}>
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('picks')}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
              activeTab === 'picks'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Grid3x3 className="w-4 h-4" />
              Picks ({picks.length})
            </div>
            {activeTab === 'picks' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
              activeTab === 'collections'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <LayoutGrid className="w-4 h-4" />
              Collections ({collections.length})
            </div>
            {activeTab === 'collections' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('ugc')}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
              activeTab === 'ugc'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Image className="w-4 h-4" />
              UGC ({ugcContent.length})
            </div>
            {activeTab === 'ugc' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
              activeTab === 'products'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Package className="w-4 h-4" />
              Products ({creatorProducts.length})
            </div>
            {activeTab === 'products' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"></div>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        {activeTab === 'picks' && (
          <div className="grid grid-cols-2 gap-4">
            {picks.map(pick => (
              <div
                key={pick.id}
                className={`rounded-xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-md hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={pick.productImage}
                    alt={pick.productName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                    {pick.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    ₹{pick.productPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'collections' && (
          <div className="space-y-4">
            {collections.map(collection => (
              <div
                key={collection.id}
                className={`rounded-2xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-md hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={collection.coverImage}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {collection.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                    <span>{collection.picks.length} products</span>
                    <span>{collection.stats.totalViews.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ugc' && (
          <div className="space-y-4">
            {ugcContent.map(content => (
              <div
                key={content.id}
                className={`rounded-2xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-md hover:shadow-lg transition-all`}
              >
                {content.type === 'photo' && (
                  <>
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        {content.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {content.caption}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{content.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{content.comments}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {content.type === 'video' && (
                  <>
                    <div className="aspect-video relative overflow-hidden bg-gray-200 dark:bg-gray-700">
                      <img
                        src={content.thumbnail}
                        alt={content.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                        {content.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        {content.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        {content.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{(content.views / 1000).toFixed(1)}k</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{content.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {content.type === 'review' && (
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={content.productImage}
                        alt={content.productName}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                          {content.productName}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < content.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      {content.review}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <span>{new Date(content.createdAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{content.helpful} found helpful</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-4">
            {creatorProducts.map(product => (
              <div
                key={product.id}
                className={`rounded-2xl overflow-hidden ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-md hover:shadow-lg transition-all cursor-pointer`}
              >
                <div className="flex gap-4 p-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            product.type === 'product'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                              : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          }`}>
                            {product.type === 'product' ? (
                              <span className="flex items-center gap-1">
                                <Package className="w-3 h-3" />
                                Product
                              </span>
                            ) : (
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-3 h-3" />
                                Service
                              </span>
                            )}
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white mb-1 line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span>{product.rating}</span>
                        </div>
                        <span>•</span>
                        <span>
                          {product.type === 'product'
                            ? `${product.sales} sold`
                            : `${product.bookings} bookings`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default CreatorProfile;
