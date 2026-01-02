import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Edit,
  X,
  MoreVertical,
  Trash2,
  Archive,
  Bell,
  BellOff
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialMessages = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Mock chat data - replace with API call
  const chats = [
    {
      id: 1,
      user: {
        id: 101,
        name: 'John Doe',
        username: '@johnd',
        avatar: '👨‍💼'
      },
      lastMessage: {
        text: 'Did you see that amazing deal on sneakers?',
        timestamp: '2m ago',
        isRead: false,
        sender: 'them'
      },
      unreadCount: 2
    },
    {
      id: 2,
      user: {
        id: 102,
        name: 'Emily Chen',
        username: '@emilyc',
        avatar: '👩‍🎨'
      },
      lastMessage: {
        text: 'Thanks for sharing! Just ordered it 🎉',
        timestamp: '1h ago',
        isRead: true,
        sender: 'them'
      },
      unreadCount: 0
    },
    {
      id: 3,
      user: {
        id: 103,
        name: 'Mike Wilson',
        username: '@mikew',
        avatar: '👨‍🚀'
      },
      lastMessage: {
        text: 'You: Check out this discount code!',
        timestamp: '3h ago',
        isRead: true,
        sender: 'me'
      },
      unreadCount: 0
    },
    {
      id: 4,
      user: {
        id: 104,
        name: 'Sarah Kim',
        username: '@sarahk',
        avatar: '👩‍💻'
      },
      lastMessage: {
        text: 'Where did you find that deal? 😍',
        timestamp: '5h ago',
        isRead: false,
        sender: 'them'
      },
      unreadCount: 1
    },
    {
      id: 5,
      user: {
        id: 105,
        name: 'David Brown',
        username: '@davidb',
        avatar: '👨‍🔬'
      },
      lastMessage: {
        text: 'You: The sale ends tonight!',
        timestamp: 'Yesterday',
        isRead: true,
        sender: 'me'
      },
      unreadCount: 0
    }
  ];

  const filteredChats = chats.filter(chat =>
    chat.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChatClick = (chatId, userId) => {
    navigate(`/social/chat/${userId}`);
  };

  const handleDeleteChat = (chatId, e) => {
    e.stopPropagation();
    // API: DELETE /api/social/messages/chats/{chatId}
    // TODO: Implement delete chat with backend
    console.log('Delete chat:', chatId);
    setSelectedChat(null);
  };

  const handleArchiveChat = (chatId, e) => {
    e.stopPropagation();
    // API: POST /api/social/messages/chats/{chatId}/archive
    // TODO: Implement archive chat with backend
    console.log('Archive chat:', chatId);
    setSelectedChat(null);
  };

  const totalUnread = chats.reduce((sum, chat) => sum + chat.unreadCount, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div>
              <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">Messages</h1>
              {totalUnread > 0 && (
                <p className="text-caption text-blue-500">{totalUnread} unread</p>
              )}
            </div>
          </div>
          <button
            onClick={() => navigate('/social/search')}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <Edit className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rez-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages..."
              className="w-full pl-12 pr-10 py-3 rounded-rez-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-rez-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-rez-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-2 space-y-2">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              className="relative group"
            >
              <button
                onClick={() => handleChatClick(chat.id, chat.user.id)}
                className={`w-full p-4 rounded-rez-xl border transition-all text-left ${
                  chat.unreadCount > 0
                    ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30'
                    : 'bg-white dark:bg-bg-card border-rez-gray-200 dark:border-white/10 hover:bg-rez-gray-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                      {chat.user.avatar}
                    </div>
                    {chat.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-caption font-bold text-white">{chat.unreadCount}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`text-body font-semibold truncate ${
                        chat.unreadCount > 0
                          ? 'text-rez-navy dark:text-white'
                          : 'text-rez-navy dark:text-white'
                      }`}>
                        {chat.user.name}
                      </h3>
                      <span className={`text-caption shrink-0 ${
                        chat.unreadCount > 0
                          ? 'text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-rez-gray-500 dark:text-gray-500'
                      }`}>
                        {chat.lastMessage.timestamp}
                      </span>
                    </div>
                    <p className={`text-body-sm truncate ${
                      chat.unreadCount > 0
                        ? 'text-rez-navy dark:text-white font-medium'
                        : 'text-rez-gray-600 dark:text-gray-400'
                    }`}>
                      {chat.lastMessage.text}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedChat(selectedChat === chat.id ? null : chat.id);
                    }}
                    className="shrink-0 p-2 opacity-0 group-hover:opacity-100 hover:bg-rez-gray-200 dark:hover:bg-white/10 rounded-lg transition-all"
                  >
                    <MoreVertical className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </button>

              {/* Action Menu */}
              {selectedChat === chat.id && (
                <div className="absolute right-4 top-16 z-10 w-48 p-2 rounded-rez-lg bg-white dark:bg-bg-card border border-rez-gray-200 dark:border-white/10 shadow-rez-card">
                  <button
                    onClick={(e) => handleArchiveChat(chat.id, e)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-rez-gray-100 dark:hover:bg-white/10 text-rez-navy dark:text-white transition-colors"
                  >
                    <Archive className="w-5 h-5" />
                    <span className="text-body-sm font-medium">Archive</span>
                  </button>
                  <button
                    onClick={(e) => handleDeleteChat(chat.id, e)}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span className="text-body-sm font-medium">Delete</span>
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Edit className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-h5 font-poppins text-rez-navy dark:text-white mb-2">
              {searchQuery ? 'No messages found' : 'No messages yet'}
            </h3>
            <p className="text-body-sm text-rez-gray-600 dark:text-gray-400 mb-6">
              {searchQuery
                ? 'Try searching with different keywords'
                : 'Start a conversation with someone from the community!'}
            </p>
            {!searchQuery && (
              <button
                onClick={() => navigate('/social/search')}
                className="px-6 py-3 rounded-rez-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Find People
              </button>
            )}
          </div>
        )}
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialMessages;
