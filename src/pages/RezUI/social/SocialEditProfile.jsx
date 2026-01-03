import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Camera,
  User,
  Mail,
  MapPin,
  Link as LinkIcon,
  AlignLeft,
  Save,
  X
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialEditProfile = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  // Mock current user data - replace with API call
  const [formData, setFormData] = useState({
    name: 'Sarah Anderson',
    username: 'sarah_saves',
    email: 'sarah@example.com',
    bio: 'Deal hunter & savvy shopper 🛍️ | Sharing the best finds & saving tips | ReZ Power User',
    location: 'Bangalore, India',
    website: 'dealsandsavings.com',
    avatar: '👩‍💼'
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    setIsSaving(true);

    // API: PUT /api/social/profile
    // Body: { name, username, bio, location, website, avatar }
    // TODO: Implement profile update with backend

    setTimeout(() => {
      navigate('/social/profile/me');
    }, 1500);
  };

  const handleAvatarChange = () => {
    // In real app, this would open image picker
    const emojis = ['👨‍💼', '👩‍💼', '🧑‍💻', '👨‍🎨', '👩‍🎨', '🧑‍🔬', '👨‍🚀', '👩‍🚀'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    handleChange('avatar', randomEmoji);
  };

  const canSave = formData.name.trim() && formData.username.trim();

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
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Edit Profile</h1>
          <button
            onClick={handleSave}
            disabled={!canSave || isSaving}
            className={`px-5 py-2 rounded-rez-lg font-semibold transition-all ${
              canSave && !isSaving
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                : 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-5">
        {/* Avatar */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl">
              {formData.avatar}
            </div>
            <button
              onClick={handleAvatarChange}
              className="absolute bottom-0 right-0 p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <p className="text-caption text-rez-gray-600 dark:text-gray-400 mt-2">Tap to change avatar</p>
        </div>

        {/* Name */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <label className="flex items-center gap-3">
            <User className="w-5 h-5 text-rez-gray-400" />
            <div className="flex-1">
              <div className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Full Name</div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Your full name"
                className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </label>
        </div>

        {/* Username */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <label className="flex items-center gap-3">
            <span className="text-rez-gray-400">@</span>
            <div className="flex-1">
              <div className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Username</div>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                placeholder="username"
                className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </label>
          <div className="mt-2 text-caption text-rez-gray-600 dark:text-gray-400">
            Only lowercase letters, numbers, and underscores
          </div>
        </div>

        {/* Email */}
        <div className="p-4 rounded-rez-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10">
          <label className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-rez-gray-400" />
            <div className="flex-1">
              <div className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Email</div>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full bg-transparent text-rez-gray-500 dark:text-gray-500 cursor-not-allowed focus:outline-none"
              />
            </div>
          </label>
          <div className="mt-2 text-caption text-rez-gray-600 dark:text-gray-400">
            Email cannot be changed
          </div>
        </div>

        {/* Bio */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <label>
            <div className="flex items-center gap-2 mb-3">
              <AlignLeft className="w-5 h-5 text-rez-gray-400" />
              <div className="text-caption text-rez-gray-600 dark:text-gray-400">Bio</div>
            </div>
            <textarea
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              placeholder="Tell us about yourself..."
              rows={4}
              maxLength={150}
              className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 resize-none focus:outline-none"
            />
            <div className="text-caption text-rez-gray-600 dark:text-gray-400 text-right mt-2">
              {formData.bio.length}/150
            </div>
          </label>
        </div>

        {/* Location */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <label className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-rez-gray-400" />
            <div className="flex-1">
              <div className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Location</div>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="City, Country"
                className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </label>
        </div>

        {/* Website */}
        <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
          <label className="flex items-center gap-3">
            <LinkIcon className="w-5 h-5 text-rez-gray-400" />
            <div className="flex-1">
              <div className="text-caption text-rez-gray-600 dark:text-gray-400 mb-1">Website</div>
              <input
                type="text"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
                placeholder="yourwebsite.com"
                className="w-full bg-transparent text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </label>
        </div>

        {/* Tips */}
        <div className="p-4 rounded-rez-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
          <h3 className="text-body-sm font-semibold text-rez-navy dark:text-white mb-2">Profile Tips</h3>
          <ul className="space-y-1 text-caption text-rez-gray-600 dark:text-gray-400">
            <li>• Use a clear, friendly profile picture</li>
            <li>• Write a bio that shows your personality</li>
            <li>• Add your location to connect with locals</li>
            <li>• Share your website or blog link</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialEditProfile;
