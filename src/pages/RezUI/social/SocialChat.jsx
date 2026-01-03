import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Send,
  Image,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  X,
  Check,
  CheckCheck
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const SocialChat = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Mock user data - replace with API call
  const otherUser = {
    id: userId,
    name: 'John Doe',
    username: '@johnd',
    avatar: '👨‍💼',
    isOnline: true,
    lastSeen: 'Active now'
  };

  // Mock messages - replace with API call
  useEffect(() => {
    // API: GET /api/social/messages/chats/{userId}
    // TODO: Implement fetch messages from backend

    const mockMessages = [
      {
        id: 1,
        text: 'Hey! Did you see that amazing deal on sneakers?',
        sender: 'them',
        timestamp: '10:30 AM',
        status: 'read'
      },
      {
        id: 2,
        text: 'Yes! The one on ReZ? 50% off right?',
        sender: 'me',
        timestamp: '10:32 AM',
        status: 'read'
      },
      {
        id: 3,
        text: 'Exactly! I already grabbed a pair. The discount code is SAVE50',
        sender: 'them',
        timestamp: '10:33 AM',
        status: 'read'
      },
      {
        id: 4,
        text: 'Thanks for sharing! 🎉',
        sender: 'me',
        timestamp: '10:35 AM',
        status: 'read'
      },
      {
        id: 5,
        text: 'No problem! Always happy to share great deals with the community',
        sender: 'them',
        timestamp: '10:36 AM',
        status: 'read'
      }
    ];

    setMessages(mockMessages);
  }, [userId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    // API: POST /api/social/messages/send
    // Body: { recipientId: userId, text: message }
    // TODO: Implement send message with backend

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate message delivery
    setTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-rez-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>

            <button
              onClick={() => navigate(`/social/profile/${userId}`)}
              className="flex items-center gap-3 flex-1 min-w-0"
            >
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl">
                  {otherUser.avatar}
                </div>
                {otherUser.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-black" />
                )}
              </div>

              <div className="flex-1 min-w-0 text-left">
                <h2 className="text-body font-semibold text-rez-navy dark:text-white truncate">
                  {otherUser.name}
                </h2>
                <p className={`text-caption ${
                  otherUser.isOnline
                    ? 'text-green-500'
                    : 'text-rez-gray-600 dark:text-gray-400'
                }`}>
                  {otherUser.lastSeen}
                </p>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
              <Phone className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
              <Video className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors">
              <MoreVertical className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] ${msg.sender === 'me' ? 'order-2' : 'order-1'}`}>
              <div className={`rounded-rez-lg p-3 ${
                msg.sender === 'me'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-rez-gray-100 dark:bg-white/10 text-rez-navy dark:text-white'
              }`}>
                <p className="text-body whitespace-pre-wrap break-words">{msg.text}</p>
              </div>
              <div className={`flex items-center gap-1 mt-1 ${
                msg.sender === 'me' ? 'justify-end' : 'justify-start'
              }`}>
                <span className="text-caption text-rez-gray-500 dark:text-gray-500">
                  {msg.timestamp}
                </span>
                {msg.sender === 'me' && (
                  <span>
                    {msg.status === 'sent' && <Check className="w-3 h-3 text-rez-gray-500" />}
                    {msg.status === 'delivered' && <CheckCheck className="w-3 h-3 text-rez-gray-500" />}
                    {msg.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-500" />}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 bg-white dark:bg-black border-t border-rez-gray-200 dark:border-white/10 p-4">
        <div className="flex items-end gap-2">
          <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors shrink-0">
            <Paperclip className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors shrink-0">
            <Image className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              rows={1}
              className="w-full px-4 py-3 pr-12 rounded-rez-xl bg-rez-gray-50 dark:bg-white/5 border border-rez-gray-200 dark:border-white/10 text-rez-navy dark:text-white placeholder:text-rez-gray-400 dark:placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 max-h-32"
              style={{ minHeight: '48px' }}
            />
            <button className="absolute right-3 bottom-3 p-1 hover:bg-rez-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors">
              <Smile className="w-5 h-5 text-rez-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`p-3 rounded-xl transition-all shrink-0 ${
              message.trim()
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                : 'bg-rez-gray-200 dark:bg-white/10 text-rez-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default SocialChat;
