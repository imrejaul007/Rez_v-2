import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MessageCircle, Send, Sparkles, ShoppingBag, Star,
  TrendingUp, Tag, Heart, Search, Camera, Mic, Clock, Check, X
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIShoppingAssistant = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      content: 'Hi! I\'m your AI Shopping Assistant. I can help you find products, compare prices, and give personalized recommendations. How can I help you today?',
      timestamp: '10:30 AM'
    }
  ]);

  const [quickActions, setQuickActions] = useState([
    { id: 1, text: 'Find best deals', icon: Tag },
    { id: 2, text: 'Gift suggestions', icon: Heart },
    { id: 3, text: 'Compare products', icon: TrendingUp },
    { id: 4, text: 'Track my orders', icon: ShoppingBag }
  ]);

  const [suggestedProducts, setSuggestedProducts] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 1299,
      rating: 4.5,
      image: '🎧',
      relevance: 95
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 3999,
      rating: 4.3,
      image: '⌚',
      relevance: 88
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  // API Comment: POST /api/ai/chat
  // Payload: { message: string, context: {}, userHistory: [], preferences: {} }
  // ML Model: GPT-based conversational AI for shopping assistance
  // Response: { reply: string, products: [], actions: [], confidence: number }
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'assistant',
        content: getAIResponse(message),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // API Comment: GET /api/ai/recommendations
  // Payload: { query: string, context: {}, filters: {} }
  // ML Model: Product recommendation engine with collaborative filtering
  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('deal') || lowerQuery.includes('offer')) {
      return 'I found some amazing deals for you! Here are today\'s top offers: 50% off on electronics, buy 1 get 1 on fashion items, and extra cashback on groceries. Would you like to see specific categories?';
    } else if (lowerQuery.includes('gift')) {
      return 'I\'d love to help you find the perfect gift! Who is it for and what\'s your budget? I can suggest personalized gift ideas based on age, interests, and occasion.';
    } else if (lowerQuery.includes('track') || lowerQuery.includes('order')) {
      return 'I can help you track your orders! Your recent order #ORD12345 (Wireless Earbuds) is out for delivery and will arrive today by 6 PM. Would you like to see all your orders?';
    } else {
      return 'I understand you\'re looking for something specific. Could you tell me more about what you need? For example, the category, your budget, or any specific features you\'re looking for?';
    }
  };

  const handleQuickAction = (action) => {
    setMessage(action.text);
    handleSendMessage();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Shopping Assistant</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-xs text-purple-100">Online • Ready to help</p>
            </div>
          </div>
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.type === 'user'
                  ? 'bg-purple-600 text-white rounded-br-none'
                  : 'bg-white border border-gray-200 rounded-bl-none'
              }`}
            >
              {msg.type === 'assistant' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-xs font-semibold text-purple-600">AI Assistant</span>
                </div>
              )}
              <p className={`text-sm ${msg.type === 'user' ? 'text-white' : 'text-gray-900'}`}>
                {msg.content}
              </p>
              <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suggested Products (shown after certain messages) */}
        {suggestedProducts.length > 0 && messages.length > 2 && (
          <div className="bg-white rounded-xl p-4 border">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-semibold text-gray-900">Recommended for you</h3>
            </div>
            <div className="space-y-2">
              {suggestedProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
                  <span className="text-3xl">{product.image}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-purple-600">₹{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      {messages.length === 1 && (
        <div className="px-4 pb-4">
          <p className="text-xs text-gray-500 mb-3">Quick actions:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    setMessage(action.text);
                    setTimeout(handleSendMessage, 100);
                  }}
                  className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all"
                >
                  <Icon className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-900">{action.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t p-4 sticky bottom-0">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Camera className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Mic className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="w-full px-4 py-3 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-purple-500 pr-12"
            />
            {message && (
              <button
                onClick={() => setMessage('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className={`p-3 rounded-full ${
              message.trim()
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Suggestions */}
        {!message && messages.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => {
                setMessage('Show me trending products');
                setTimeout(handleSendMessage, 100);
              }}
              className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap hover:bg-purple-100"
            >
              Trending products
            </button>
            <button
              onClick={() => {
                setMessage('Best deals today');
                setTimeout(handleSendMessage, 100);
              }}
              className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap hover:bg-purple-100"
            >
              Best deals
            </button>
            <button
              onClick={() => {
                setMessage('Track my order');
                setTimeout(handleSendMessage, 100);
              }}
              className="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full whitespace-nowrap hover:bg-purple-100"
            >
              Track order
            </button>
          </div>
        )}
      </div>

      <BottomNavManager currentPage="home" />
    </div>
  );
};

export default AIShoppingAssistant;
