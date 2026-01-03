import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  Lock,
  Eye,
  Users,
  MessageCircle,
  Heart,
  AtSign,
  Share2,
  Globe,
  Shield,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialSettings = () => {
  const navigate = useNavigate();

  // Mock settings state - replace with API call
  const [settings, setSettings] = useState({
    // Privacy
    profileVisibility: 'public', // public, friends, private
    showFollowers: true,
    showFollowing: true,
    allowTagging: true,
    allowMentions: true,

    // Notifications
    postLikes: true,
    postComments: true,
    newFollowers: true,
    mentions: true,
    messages: true,
    groupActivity: false,
    eventReminders: true,

    // Activity
    showOnlineStatus: true,
    showReadReceipts: true,
    showTypingIndicator: true,

    // Content
    autoplayVideos: true,
    showSensitiveContent: false,
    darkMode: false
  });

  const handleToggle = (key) => {
    // API: PUT /api/social/settings
    // Body: { [key]: !settings[key] }
    // TODO: Implement settings update with backend

    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handlePrivacyChange = (value) => {
    // API: PUT /api/social/settings/privacy
    // TODO: Implement privacy settings update
    setSettings({ ...settings, profileVisibility: value });
  };

  const SettingToggle = ({ icon: Icon, title, description, settingKey, color = 'blue' }) => (
    <div className="flex items-center gap-3 p-4 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
      <div className={`p-2 rounded-lg bg-${color}-50 dark:bg-${color}-500/10 shrink-0`}>
        <Icon className={`w-5 h-5 text-${color}-500`} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-body font-semibold text-rez-navy dark:text-white">{title}</h3>
        <p className="text-caption text-rez-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <button
        onClick={() => handleToggle(settingKey)}
        className={`relative w-12 h-7 rounded-full transition-colors ${
          settings[settingKey]
            ? `bg-${color}-500`
            : 'bg-rez-gray-300 dark:bg-white/20'
        }`}
      >
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
            settings[settingKey] ? 'right-1' : 'left-1'
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Social Settings</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Privacy Settings */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Privacy
          </h2>

          <div className="space-y-3">
            {/* Profile Visibility */}
            <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-500/10">
                  <Eye className="w-5 h-5 text-purple-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-rez-navy dark:text-white">Profile Visibility</h3>
                  <p className="text-caption text-rez-gray-600 dark:text-gray-400">Who can see your profile</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['public', 'friends', 'private'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handlePrivacyChange(option)}
                    className={`px-3 py-2 rounded-rez-lg text-body-sm font-medium capitalize transition-all ${
                      settings.profileVisibility === option
                        ? 'bg-purple-500 text-white'
                        : 'bg-rez-gray-100 dark:bg-white/10 text-rez-gray-600 dark:text-gray-400 hover:bg-rez-gray-200 dark:hover:bg-white/20'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <SettingToggle
              icon={Users}
              title="Show Followers"
              description="Let others see who follows you"
              settingKey="showFollowers"
              color="purple"
            />

            <SettingToggle
              icon={Users}
              title="Show Following"
              description="Let others see who you follow"
              settingKey="showFollowing"
              color="purple"
            />

            <SettingToggle
              icon={AtSign}
              title="Allow Tagging"
              description="Let others tag you in posts"
              settingKey="allowTagging"
              color="purple"
            />

            <SettingToggle
              icon={AtSign}
              title="Allow Mentions"
              description="Let others mention you"
              settingKey="allowMentions"
              color="purple"
            />
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Notifications
          </h2>

          <div className="space-y-3">
            <SettingToggle
              icon={Heart}
              title="Post Likes"
              description="Get notified when someone likes your post"
              settingKey="postLikes"
              color="blue"
            />

            <SettingToggle
              icon={MessageCircle}
              title="Post Comments"
              description="Get notified when someone comments"
              settingKey="postComments"
              color="blue"
            />

            <SettingToggle
              icon={Users}
              title="New Followers"
              description="Get notified when someone follows you"
              settingKey="newFollowers"
              color="blue"
            />

            <SettingToggle
              icon={AtSign}
              title="Mentions"
              description="Get notified when someone mentions you"
              settingKey="mentions"
              color="blue"
            />

            <SettingToggle
              icon={MessageCircle}
              title="Messages"
              description="Get notified for new direct messages"
              settingKey="messages"
              color="blue"
            />

            <SettingToggle
              icon={Users}
              title="Group Activity"
              description="Get notified about group posts"
              settingKey="groupActivity"
              color="blue"
            />

            <SettingToggle
              icon={Bell}
              title="Event Reminders"
              description="Get reminded about upcoming events"
              settingKey="eventReminders"
              color="blue"
            />
          </div>
        </div>

        {/* Activity Settings */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Activity
          </h2>

          <div className="space-y-3">
            <SettingToggle
              icon={Globe}
              title="Show Online Status"
              description="Let others see when you're online"
              settingKey="showOnlineStatus"
              color="green"
            />

            <SettingToggle
              icon={Eye}
              title="Read Receipts"
              description="Let others know when you've read messages"
              settingKey="showReadReceipts"
              color="green"
            />

            <SettingToggle
              icon={MessageCircle}
              title="Typing Indicator"
              description="Show when you're typing a message"
              settingKey="showTypingIndicator"
              color="green"
            />
          </div>
        </div>

        {/* Content Preferences */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Content
          </h2>

          <div className="space-y-3">
            <SettingToggle
              icon={Share2}
              title="Autoplay Videos"
              description="Automatically play videos in feed"
              settingKey="autoplayVideos"
              color="orange"
            />

            <SettingToggle
              icon={Shield}
              title="Show Sensitive Content"
              description="Show posts marked as sensitive"
              settingKey="showSensitiveContent"
              color="orange"
            />

            <SettingToggle
              icon={settings.darkMode ? Moon : Sun}
              title="Dark Mode"
              description="Use dark theme for social features"
              settingKey="darkMode"
              color="orange"
            />
          </div>
        </div>

        {/* Account Actions */}
        <div>
          <h2 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Account
          </h2>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/social/blocked-users')}
              className="w-full flex items-center gap-3 p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
            >
              <div className="p-2 rounded-lg bg-red-50 dark:bg-red-500/10">
                <Shield className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Blocked Users</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Manage blocked accounts</p>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-400" />
            </button>

            <button
              onClick={() => navigate('/social/muted-users')}
              className="w-full flex items-center gap-3 p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
            >
              <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-500/10">
                <Bell className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Muted Users</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Manage muted accounts</p>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-400" />
            </button>

            <button
              onClick={() => navigate('/social/download-data')}
              className="w-full flex items-center gap-3 p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
            >
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10">
                <Share2 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-body font-semibold text-rez-navy dark:text-white">Download Your Data</h3>
                <p className="text-caption text-rez-gray-600 dark:text-gray-400">Get a copy of your social data</p>
              </div>
              <ChevronRight className="w-5 h-5 text-rez-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialSettings;
