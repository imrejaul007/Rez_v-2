import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Users,
  Settings,
  Lock,
  Globe,
  Bell,
  BellOff,
  Share2,
  MoreVertical,
  MessageCircle,
  Heart,
  UserPlus,
  Search,
  Image as ImageIcon,
  Pin
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialGroupDetails = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [isJoined, setIsJoined] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');

  // Mock group data - replace with API call
  const group = {
    id: groupId,
    name: 'Deal Hunters United',
    description: 'A community of smart shoppers sharing the best deals, discounts, and money-saving tips. Join us to never miss a great deal again!',
    icon: '🎯',
    cover: '🛍️',
    members: 5234,
    privacy: 'public',
    createdAt: 'Jan 2024',
    rules: [
      'Be respectful to all members',
      'Share genuine deals only',
      'No spam or self-promotion',
      'Stay on topic'
    ],
    admins: [
      { id: 1, name: 'Sarah Admin', avatar: '👩‍💼' },
      { id: 2, name: 'John Mod', avatar: '👨‍💼' }
    ]
  };

  // Mock posts
  const posts = [
    {
      id: 1,
      author: {
        id: 101,
        name: 'Mike Wilson',
        avatar: '👨‍🚀',
        isAdmin: false
      },
      content: '🔥 Amazing deal alert! 70% off on electronics at TechMart. Limited time offer!',
      timestamp: '2h ago',
      likes: 234,
      comments: 45,
      isPinned: true
    },
    {
      id: 2,
      author: {
        id: 102,
        name: 'Emily Chen',
        avatar: '👩‍🎨',
        isAdmin: true
      },
      content: 'Welcome to all new members! Don\'t forget to read the group rules before posting.',
      timestamp: '5h ago',
      likes: 89,
      comments: 12,
      isPinned: false
    },
    {
      id: 3,
      author: {
        id: 103,
        name: 'David Brown',
        avatar: '👨‍🔬',
        isAdmin: false
      },
      content: 'Just saved 50% on groceries using these coupons! Check them out!',
      timestamp: '1d ago',
      likes: 156,
      comments: 28,
      isPinned: false
    }
  ];

  const members = [
    { id: 1, name: 'Sarah Admin', avatar: '👩‍💼', role: 'Admin' },
    { id: 2, name: 'John Mod', avatar: '👨‍💼', role: 'Moderator' },
    { id: 3, name: 'Mike Wilson', avatar: '👨‍🚀', role: 'Member' },
    { id: 4, name: 'Emily Chen', avatar: '👩‍🎨', role: 'Member' },
    { id: 5, name: 'David Brown', avatar: '👨‍🔬', role: 'Member' }
  ];

  const handleJoinToggle = () => {
    // API: POST /api/social/groups/{groupId}/join or /leave
    // TODO: Implement join/leave group with backend
    setIsJoined(!isJoined);
  };

  const handleMuteToggle = () => {
    // API: POST /api/social/groups/{groupId}/mute
    // TODO: Implement mute group with backend
    setIsMuted(!isMuted);
  };

  const handleShare = () => {
    // API: POST /api/social/groups/{groupId}/share
    // TODO: Implement share group with backend
    console.log('Share group');
  };

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
          <h1 className="text-h4 font-poppins text-rez-navy dark:text-white flex-1 mx-3 truncate">
            {group.name}
          </h1>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <Share2 className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Cover & Info */}
        <div className="px-4 pt-6">
          <div className="text-center mb-4">
            <div className="w-24 h-24 mx-auto mb-4 rounded-rez-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl">
              {group.icon}
            </div>
            <h2 className="text-h3 font-poppins text-rez-navy dark:text-white mb-2">{group.name}</h2>
            <div className="flex items-center justify-center gap-3 text-body-sm text-rez-gray-600 dark:text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                {group.privacy === 'private' ? <Lock className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                {group.privacy === 'private' ? 'Private' : 'Public'} Group
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {group.members.toLocaleString()} members
              </div>
            </div>
            <p className="text-body text-rez-navy dark:text-white max-w-2xl mx-auto">
              {group.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleJoinToggle}
              className={`py-3 rounded-rez-xl font-semibold transition-all ${
                isJoined
                  ? 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
              }`}
            >
              {isJoined ? 'Leave Group' : 'Join Group'}
            </button>
            {isJoined && (
              <button
                onClick={handleMuteToggle}
                className="py-3 rounded-rez-xl bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  {isMuted ? <BellOff className="w-5 h-5" /> : <Bell className="w-5 h-5" />}
                  {isMuted ? 'Unmute' : 'Mute'}
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 border-b border-rez-gray-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'posts'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'members'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            Members
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 pb-3 text-body-sm font-medium transition-colors ${
              activeTab === 'about'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-rez-gray-600 dark:text-gray-400'
            }`}
          >
            About
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          {activeTab === 'posts' && (
            <div className="space-y-3">
              {isJoined && (
                <button
                  onClick={() => navigate('/social/create-post')}
                  className="w-full p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                      👤
                    </div>
                    <span className="text-body text-rez-gray-600 dark:text-gray-400">
                      Share something with the group...
                    </span>
                  </div>
                </button>
              )}

              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10"
                >
                  {post.isPinned && (
                    <div className="flex items-center gap-2 mb-3 text-caption text-blue-500">
                      <Pin className="w-4 h-4" />
                      Pinned Post
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                      {post.author.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-body font-semibold text-rez-navy dark:text-white">
                          {post.author.name}
                        </h4>
                        {post.author.isAdmin && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-caption text-blue-600 dark:text-blue-400">
                            Admin
                          </span>
                        )}
                      </div>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">{post.timestamp}</p>
                    </div>
                  </div>

                  <p className="text-body text-rez-navy dark:text-white mb-4">{post.content}</p>

                  <div className="flex items-center gap-6 pt-3 border-t border-rez-gray-200 dark:border-white/10">
                    <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-body-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-body-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-rez-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-3">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-body font-semibold text-rez-navy dark:text-white">{member.name}</h4>
                      <p className="text-caption text-rez-gray-600 dark:text-gray-400">{member.role}</p>
                    </div>
                    <button
                      onClick={() => navigate(`/social/profile/${member.id}`)}
                      className="px-4 py-2 rounded-rez-lg bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white text-body-sm font-semibold hover:bg-rez-gray-200 dark:hover:bg-white/20 transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-4">
              <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">About</h3>
                <p className="text-body text-rez-gray-600 dark:text-gray-400 mb-3">{group.description}</p>
                <div className="text-caption text-rez-gray-500 dark:text-gray-500">
                  Created {group.createdAt}
                </div>
              </div>

              <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Group Rules</h3>
                <ul className="space-y-2">
                  {group.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2 text-body-sm text-rez-gray-600 dark:text-gray-400">
                      <span className="shrink-0 font-semibold">{index + 1}.</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-rez-xl bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10">
                <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-3">Admins & Moderators</h3>
                <div className="space-y-3">
                  {group.admins.map((admin) => (
                    <div key={admin.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                        {admin.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-body font-semibold text-rez-navy dark:text-white">{admin.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialGroupDetails;
