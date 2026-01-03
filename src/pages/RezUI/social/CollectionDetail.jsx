import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  ShoppingCart,
  CheckCircle,
  Star,
  Eye,
  Package
} from 'lucide-react';
import { useCreator } from '../../contexts/CreatorContext';
import { useApp } from '../../contexts/AppContext';
import BottomNav from '../../components/layout/BottomNav';

/**
 * Collection Detail Page
 * View all products in a creator's curated collection
 */
const CollectionDetail = () => {
  const { username, collectionId } = useParams();
  const navigate = useNavigate();
  const {
    getCreatorByUsername,
    getCollection,
    getPicksInCollection
  } = useCreator();
  const { theme } = useApp();
  const isDark = theme === 'dark';

  const collection = getCollection(collectionId);
  const creator = getCreatorByUsername(username);
  const picks = getPicksInCollection(collectionId);

  if (!collection || !creator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Collection not found
          </p>
          <Link
            to="/creators"
            className="text-purple-600 hover:underline mt-4 inline-block"
          >
            Back to Creator Store
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: collection.title,
        text: `Check out "${collection.title}" by ${creator.name}`,
        url: window.location.href
      });
    }
  };

  const handleAddAllToCart = () => {
    alert(`Added all ${picks.length} items from "${collection.title}" to cart!`);
  };

  const totalValue = picks.reduce((sum, pick) => sum + pick.productPrice, 0);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} pb-32`}>
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
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Collection
          </span>
          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Share2 className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="h-64 relative overflow-hidden">
        <img
          src={collection.coverImage}
          alt={collection.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            {collection.title}
          </h1>
          <p className="text-white/90">
            {collection.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Creator Info */}
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
              Curated by @{creator.username}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {creator.stats.avgRating.toFixed(1)}
            </span>
          </div>
        </Link>

        {/* Collection Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Package className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {picks.length}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Products
            </div>
          </div>
          <div className={`p-4 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <Eye className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {(collection.stats.totalViews / 1000).toFixed(1)}k
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Views
            </div>
          </div>
          <div className={`p-4 rounded-xl text-center ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-center gap-1 mb-1">
              <ShoppingCart className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-lg font-bold text-gray-900 dark:text-white">
              {collection.stats.totalPurchases}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Sales
            </div>
          </div>
        </div>

        {/* Total Value */}
        <div className={`p-4 rounded-xl ${
          isDark
            ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30'
            : 'bg-gradient-to-br from-purple-50 to-pink-50'
        } border ${isDark ? 'border-purple-800/30' : 'border-purple-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Total Collection Value
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹{totalValue.toLocaleString()}
              </p>
            </div>
            <button
              onClick={handleAddAllToCart}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium text-sm transition-all"
            >
              Add All
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Products in this Collection
          </h2>
          <div className="space-y-4">
            {picks.map(pick => (
              <Link
                key={pick.id}
                to={`/creators/${creator.username}/pick/${pick.id}`}
                className={`flex gap-4 p-4 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                } hover:shadow-lg transition-all`}
              >
                {/* Product Image */}
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={pick.productImage}
                    alt={pick.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {pick.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                    {pick.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      ₹{pick.productPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {pick.productBrand}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Creator's Note */}
        <div className={`p-6 rounded-2xl ${
          isDark ? 'bg-gray-800' : 'bg-white'
        } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {creator.name}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                About this collection
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            "{collection.description} Each product in this collection has been carefully chosen and personally tested by me."
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CollectionDetail;
