import React, { useState } from 'react';
import {
  X, Camera, Image, MapPin, Tag, Users, Gift, ChevronRight,
  Star, Plus, Trash2, Video, Type, Hash, AtSign, Store,
  Sparkles, Coins, Award, CheckCircle
} from 'lucide-react';

// BuzzLoop Create: UGC Content Creation
// Backend API Required: POST /api/buzzloop/posts
// Backend API Required: GET /api/buzzloop/merchants/search
// Backend API Required: POST /api/buzzloop/posts/media

const BuzzLoopCreate = () => {
  const [postType, setPostType] = useState('review');
  const [content, setContent] = useState('');
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [media, setMedia] = useState([]);
  const [showMerchantSearch, setShowMerchantSearch] = useState(false);

  const postTypes = [
    { id: 'review', label: 'Review', icon: Star, description: 'Rate & review a place' },
    { id: 'tip', label: 'Tip', icon: Sparkles, description: 'Share a savings tip' },
    { id: 'haul', label: 'Haul', icon: Gift, description: 'Show your purchases' },
    { id: 'discovery', label: 'Discovery', icon: MapPin, description: 'Found a new spot' }
  ];

  // Recently visited merchants
  const recentMerchants = [
    { id: 1, name: "Pasta Paradise", type: "Italian", visited: "2 days ago", emoji: "🍝" },
    { id: 2, name: "Tech World", type: "Electronics", visited: "5 days ago", emoji: "📱" },
    { id: 3, name: "Green Leaf Spa", type: "Wellness", visited: "1 week ago", emoji: "🧘" }
  ];

  // Suggested tags based on content
  const suggestedTags = [
    "FoodieFind", "BestDeals", "MustTry", "HiddenGem", "WeekendVibes",
    "CoinWin", "SaveSmart", "LocalLove", "TreatYourself", "Recommended"
  ];

  // Coin earning potential
  const coinPotential = {
    base: 20,
    withMedia: 30,
    withMerchant: 40,
    withRating: 50,
    verified: 100
  };

  const calculatePotentialCoins = () => {
    let coins = coinPotential.base;
    if (media.length > 0) coins += 10;
    if (selectedMerchant) coins += 20;
    if (rating > 0) coins += 10;
    if (content.length > 100) coins += 10;
    return coins;
  };

  const handleAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="text-gray-600">
            <X className="w-6 h-6" />
          </button>
          <h1 className="font-semibold text-gray-900">Create Post</h1>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              content.length > 10
                ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}
            disabled={content.length < 10}
          >
            Post
          </button>
        </div>
      </div>

      {/* Post Type Selection */}
      <div className="px-4 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-3">What are you sharing?</h3>
        <div className="grid grid-cols-4 gap-2">
          {postTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setPostType(type.id)}
              className={`p-3 rounded-xl text-center transition-all ${
                postType === type.id
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white'
                  : 'bg-gray-50 text-gray-700'
              }`}
            >
              <type.icon className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Coin Earning Potential */}
      <div className="mx-4 my-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Coins className="w-6 h-6 text-yellow-800" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Earn up to {calculatePotentialCoins()} coins</p>
              <p className="text-sm text-gray-600">Complete your post for more!</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <div className="mt-3 flex gap-2 flex-wrap">
          <span className={`text-xs px-2 py-1 rounded-full ${content.length > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            ✓ Write content
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${media.length > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            Add media
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${selectedMerchant ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            Tag merchant
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${rating > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            Add rating
          </span>
        </div>
      </div>

      {/* Content Input */}
      <div className="px-4 py-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your experience, tip, or discovery..."
          className="w-full h-32 text-gray-900 placeholder-gray-400 outline-none resize-none text-lg"
        />
        <div className="text-right text-sm text-gray-400">
          {content.length} / 500
        </div>
      </div>

      {/* Merchant Tag */}
      <div className="px-4 py-3 border-t border-gray-100">
        <button
          onClick={() => setShowMerchantSearch(true)}
          className="w-full flex items-center gap-3 py-2"
        >
          <Store className="w-5 h-5 text-gray-400" />
          {selectedMerchant ? (
            <div className="flex-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedMerchant.emoji}</span>
                <span className="font-medium text-gray-900">{selectedMerchant.name}</span>
                <span className="text-sm text-gray-500">{selectedMerchant.type}</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); setSelectedMerchant(null); }}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          ) : (
            <span className="flex-1 text-left text-gray-500">Tag a merchant or place</span>
          )}
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Quick merchant selection */}
        {!selectedMerchant && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-2">Recently Visited</p>
            <div className="flex gap-2 overflow-x-auto">
              {recentMerchants.map((merchant) => (
                <button
                  key={merchant.id}
                  onClick={() => setSelectedMerchant(merchant)}
                  className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full whitespace-nowrap"
                >
                  <span>{merchant.emoji}</span>
                  <span className="text-sm text-gray-700">{merchant.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rating (for reviews) */}
      {(postType === 'review' || postType === 'discovery') && (
        <div className="px-4 py-3 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-700 mb-3">Your Rating</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="text-3xl transition-transform hover:scale-110"
              >
                {star <= rating ? '⭐' : '☆'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Media Upload */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-3">Add Photos/Video</p>
        <div className="flex gap-3 overflow-x-auto">
          <button className="w-20 h-20 bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-1 flex-shrink-0 border-2 border-dashed border-gray-200">
            <Camera className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Camera</span>
          </button>
          <button className="w-20 h-20 bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-1 flex-shrink-0 border-2 border-dashed border-gray-200">
            <Image className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Gallery</span>
          </button>
          <button className="w-20 h-20 bg-gray-50 rounded-xl flex flex-col items-center justify-center gap-1 flex-shrink-0 border-2 border-dashed border-gray-200">
            <Video className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500">Video</span>
          </button>
          {media.map((item, idx) => (
            <div key={idx} className="w-20 h-20 bg-gray-200 rounded-xl flex-shrink-0 relative">
              <button className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 py-3 border-t border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-3">Add Tags</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
              >
                #{tag}
                <button onClick={() => handleRemoveTag(tag)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-gray-500 mb-2">Suggested</p>
        <div className="flex flex-wrap gap-2">
          {suggestedTags.filter(t => !tags.includes(t)).slice(0, 6).map((tag) => (
            <button
              key={tag}
              onClick={() => handleAddTag(tag)}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="px-4 py-3 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 py-2">
          <MapPin className="w-5 h-5 text-gray-400" />
          <span className="flex-1 text-left text-gray-500">Add location</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Tag People */}
      <div className="px-4 py-3 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 py-2">
          <Users className="w-5 h-5 text-gray-400" />
          <span className="flex-1 text-left text-gray-500">Tag people</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Guidelines */}
      <div className="px-4 py-4 bg-gray-50 mt-4">
        <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          Earn More Coins
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Add high-quality photos or videos (+10 coins)</li>
          <li>• Tag the merchant you visited (+20 coins)</li>
          <li>• Write detailed reviews 100+ characters (+10 coins)</li>
          <li>• Get verified purchase badge (+50 coins)</li>
        </ul>
      </div>
    </div>
  );
};

export default BuzzLoopCreate;
