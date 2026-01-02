import React from 'react';
import { MessageCircle, Search, Send } from 'lucide-react';

// BuzzLoop Messages: Direct Messages
// Backend API: GET /api/growth/buzzloop/messages
// Backend API: POST /api/growth/buzzloop/messages/send

const BuzzLoopMessages = () => {
  const conversations = [
    { id: 1, user: '@techguru', avatar: '👨‍💻', lastMessage: 'Thanks for the follow!', time: '2h ago', unread: 2 },
    { id: 2, user: '@foodlover', avatar: '👨‍🍳', lastMessage: 'Love your content!', time: '5h ago', unread: 0 },
    { id: 3, user: '@fashionista', avatar: '👗', lastMessage: 'Lets collaborate', time: '1d ago', unread: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Messages</h1>
        <div className="bg-gray-100 rounded-lg px-4 py-2 flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search messages..." className="flex-1 bg-transparent outline-none" />
        </div>
      </div>

      <div className="px-4 mt-4 space-y-2">
        {conversations.map((conv) => (
          <div key={conv.id} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
              {conv.avatar}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{conv.user}</h3>
              <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{conv.time}</p>
              {conv.unread > 0 && (
                <div className="mt-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{conv.unread}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuzzLoopMessages;
