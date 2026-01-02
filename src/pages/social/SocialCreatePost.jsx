import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Image,
  Video,
  Smile,
  MapPin,
  Tag,
  Users,
  X,
  Camera,
  Upload
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialCreatePost = () => {
  const navigate = useNavigate();
  const [postText, setPostText] = useState('');
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [location, setLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [privacy, setPrivacy] = useState('public');
  const [isPosting, setIsPosting] = useState(false);

  const suggestedTags = [
    '#Shopping',
    '#Deals',
    '#SaveMoney',
    '#LocalBusiness',
    '#ReZSaves',
    '#Community'
  ];

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const newMedia = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith('video') ? 'video' : 'image'
    }));
    setSelectedMedia([...selectedMedia, ...newMedia]);
  };

  const removeMedia = (id) => {
    setSelectedMedia(selectedMedia.filter(m => m.id !== id));
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePost = async () => {
    if (!postText.trim() && selectedMedia.length === 0) return;

    setIsPosting(true);

    // API: POST /api/social/posts
    // Body: { content, mediaFiles, location, tags, privacy }
    // TODO: Implement post creation with backend

    setTimeout(() => {
      navigate('/social');
    }, 1500);
  };

  const canPost = postText.trim().length > 0 || selectedMedia.length > 0;

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
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Create Post</h1>
          <button
            onClick={handlePost}
            disabled={!canPost || isPosting}
            className={`px-5 py-2 rounded-rez-lg font-semibold transition-all ${
              canPost && !isPosting
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                : 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            {isPosting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-5">
        {/* Text Input */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's on your mind? Share your shopping finds, deals, or experiences..."
            rows={6}
            className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 resize-none focus:outline-none"
          />
          <div className="text-caption text-rez-gray-600 dark:text-gray-400 text-right mt-2">
            {postText.length}/500
          </div>
        </div>

        {/* Media Preview */}
        {selectedMedia.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {selectedMedia.map((media) => (
              <div key={media.id} className="relative aspect-square rounded-rez-lg overflow-hidden">
                {media.type === 'image' ? (
                  <img src={media.preview} alt="Upload preview" className="w-full h-full object-cover" />
                ) : (
                  <video src={media.preview} className="w-full h-full object-cover" />
                )}
                <button
                  onClick={() => removeMedia(media.id)}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Media Upload */}
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center justify-center gap-2 p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleMediaUpload}
              className="hidden"
            />
            <Image className="w-5 h-5 text-blue-500" />
            <span className="text-body-sm font-medium text-blue-600 dark:text-blue-400">Add Photo</span>
          </label>

          <label className="flex items-center justify-center gap-2 p-4 rounded-rez-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors">
            <input
              type="file"
              accept="video/*"
              onChange={handleMediaUpload}
              className="hidden"
            />
            <Video className="w-5 h-5 text-purple-500" />
            <span className="text-body-sm font-medium text-purple-600 dark:text-purple-400">Add Video</span>
          </label>
        </div>

        {/* Location */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Add location (optional)"
              className="flex-1 bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-rez-gray-400" />
            <span className="text-body-sm font-medium text-rez-navy dark:text-white">Add Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestedTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-rez-lg text-caption font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-500 text-white'
                    : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-rez-gray-400" />
            <span className="text-body-sm font-medium text-rez-navy dark:text-white">Privacy</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['public', 'friends', 'private'].map((option) => (
              <button
                key={option}
                onClick={() => setPrivacy(option)}
                className={`px-4 py-2 rounded-rez-lg text-caption font-medium capitalize transition-all ${
                  privacy === option
                    ? 'bg-blue-500 text-white'
                    : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="p-4 rounded-rez-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
          <h3 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2">Tips for Great Posts</h3>
          <ul className="space-y-1 text-caption text-rez-gray-600 dark:text-gray-400">
            <li>• Share your best shopping finds and deals</li>
            <li>• Use relevant hashtags for better reach</li>
            <li>• Tag locations to help the community</li>
            <li>• Add high-quality photos or videos</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialCreatePost;
