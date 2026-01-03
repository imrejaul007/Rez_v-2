import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Paperclip, X, Bot, User } from 'lucide-react';

/**
 * CHAT SUPPORT - Live Chat Support
 *
 * Backend APIs needed:
 * - GET /api/support/chat/history (fetch chat history)
 * - POST /api/support/chat/message (send message)
 * - WebSocket /ws/support/chat (real-time chat)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: MEDIUM - User support
 */

function ChatSupport() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! Welcome to ReZ Support. How can I help you today?',
      timestamp: new Date(),
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [agentConnected, setAgentConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Track my order',
    'Refund status',
    'Payment issue',
    'Account help'
  ];

  const handleSendMessage = async (text = inputMessage) => {
    if (!text.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date(),
      isBot: false
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // TODO: Connect to backend API
      const response = await fetch('/api/support/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ message: text })
      });

      if (response.ok) {
        const data = await response.json();

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            sender: 'bot',
            text: data.reply || 'Thank you for your message. An agent will assist you shortly.',
            timestamp: new Date(),
            isBot: true
          }]);
          setIsTyping(false);
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ReZ Support</h1>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${agentConnected ? 'bg-green-500' : 'bg-gray-400'}`} />
                <p className="text-sm text-gray-600">
                  {agentConnected ? 'Agent Online' : 'Bot Assistant'}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </motion.div>

      <div className="flex-1 overflow-hidden flex flex-col max-w-4xl mx-auto w-full">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-start gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isBot ? 'bg-purple-100' : 'bg-blue-100'
              }`}>
                {message.isBot ? (
                  <Bot className="w-5 h-5 text-purple-600" />
                ) : (
                  <User className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div className={`flex flex-col max-w-[70%] ${message.isBot ? '' : 'items-end'}`}>
                <div className={`px-4 py-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 px-2">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-purple-600" />
              </div>
              <div className="px-4 py-3 bg-gray-100 rounded-2xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 1 && (
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-3 text-center">Quick options:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                className="p-3 text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
              >
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSupport;
