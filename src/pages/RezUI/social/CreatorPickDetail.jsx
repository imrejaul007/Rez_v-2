import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  CheckCircle,
  Star,
  Eye,
  ShoppingBag,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';
import BottomNav from '../../components/layout/BottomNav';

/**
 * Creator Pick Detail Page
 * Individual product recommendation from a creator
 */
const CreatorPickDetail = () => {
  const { username, pickId } = useParams();
  const navigate = useNavigate();
  const {
    getCreatorByUsername,
    picks,
    getPicksByCreator,
    toggleSavePick,
    isPickSaved
  } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const [quantity, setQuantity] = useState(1);

  const pick = picks.find(p => p.id === pickId);
  const creator = getCreatorByUsername(username);
  const saved = isPickSaved(pickId);
  const creatorOtherPicks = getPicksByCreator(creator?.id).filter(p => p.id !== pickId).slice(0, 4);

  if (!pick || !creator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">Pick not found</p>
          <Link to="/creators" className="text-purple-600 hover:underline mt-4 inline-block">
            Back to Creator Store
          </Link>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    toggleSavePick(pickId);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pick.title,
        text: `Check out "${pick.title}" recommended by ${creator.name}`,
        url: window.location.href
      });
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic
    alert(`Added ${pick.productName} to cart! (${quantity} item${quantity > 1 ? 's' : ''})`);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pb-24`}>
      {/* Header */}
      <div className={`sticky top-0 z-10 ${
        isDark ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Heart
                className={`w-5 h-5 ${
                  saved ? 'fill-red-500 text-red-500' : 'text-gray-900 dark:text-white'
                }`}
              />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Share2 className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-gray-200 dark:bg-gray-800">
        <img
          src={pick.productImage}
          alt={pick.productName}
          className="w-full h-full object-cover"
        />
        {pick.tags && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {pick.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Creator Attribution */}
        <Link
          to={`/creators/${creator.username}`}
          className={`flex items-center gap-3 p-4 rounded-xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-medium text-gray-900 dark:text-white">
                {creator.name}
              </span>
              {creator.verified && (
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              @{creator.username}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {creator.stats.avgRating.toFixed(1)}
            </span>
          </div>
        </Link>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {pick.title}
          </h1>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ₹{pick.productPrice.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {pick.productBrand}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {pick.productName}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-3 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Eye className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {(pick.stats.views / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Views
            </div>
          </div>
          <div className={`p-3 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <ShoppingBag className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {pick.stats.purchases}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Purchases
            </div>
          </div>
          <div className={`p-3 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <TrendingUp className="w-4 h-4 text-pink-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {pick.stats.conversionRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Conversion
            </div>
          </div>
        </div>

        {/* Creator's Review */}
        <div className={`p-6 rounded-2xl ${
          isDark
            ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30'
            : 'bg-gradient-to-br from-purple-50 to-pink-50'
        } border ${isDark ? 'border-purple-800/30' : 'border-purple-200'}`}>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {creator.name}'s Review
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {pick.description}
          </p>
          <div className={`p-4 rounded-xl ${
            isDark ? 'bg-black/20' : 'bg-white/60'
          }`}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Why I Love It
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {pick.whyILoveIt}
            </p>
          </div>
        </div>

        {/* Tips */}
        {pick.tips && pick.tips.length > 0 && (
          <div className={`p-6 rounded-2xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              💡 {creator.name}'s Tips
            </h2>
            <ul className="space-y-2">
              {pick.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1">
                    •
                  </span>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* More from Creator */}
        {creatorOtherPicks.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                More from {creator.name}
              </h2>
              <Link
                to={`/creators/${creator.username}`}
                className="text-purple-600 dark:text-purple-400 text-sm font-medium hover:underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {creatorOtherPicks.map(otherPick => (
                <Link
                  key={otherPick.id}
                  to={`/creators/${creator.username}/pick/${otherPick.id}`}
                  className={`rounded-xl overflow-hidden ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } shadow-md hover:shadow-lg transition-all`}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={otherPick.productImage}
                      alt={otherPick.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                      {otherPick.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      ₹{otherPick.productPrice.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className={`fixed bottom-0 left-0 right-0 ${
        isDark ? 'bg-gray-900/95' : 'bg-white/95'
      } backdrop-blur-sm border-t ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      } px-6 py-4`}>
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
            isDark ? 'border-gray-700' : 'border-gray-300'
          }`}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-gray-900 dark:text-white"
            >
              -
            </button>
            <span className="text-gray-900 dark:text-white font-medium w-8 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-gray-900 dark:text-white"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CreatorPickDetail;
