import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, Mic, Send, ArrowLeft, MoreVertical, Image, MapPin,
  Star, Clock, Wallet, ChevronRight, ThumbsUp, ThumbsDown,
  Copy, Share2, Bookmark, ExternalLink, Bot, User
} from 'lucide-react';

// AI-R Chat: Conversational AI Shopping Assistant
// Backend API Required: POST /api/air/chat/message
// Backend API Required: GET /api/air/chat/history
// Backend API Required: POST /api/air/chat/feedback

const AIRChat = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI shopping assistant. I can help you find the best deals, discover new places, and maximize your coin rewards. What are you looking for today?",
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      type: 'user',
      content: "I want to find a good restaurant for dinner tonight, maybe Italian",
      timestamp: '10:01 AM'
    },
    {
      id: 3,
      type: 'ai',
      content: "Great choice! I found 8 Italian restaurants near you with excellent ratings. Here are the top 3 with the best cashback offers:",
      timestamp: '10:01 AM',
      results: [
        {
          name: "Pasta Paradise",
          type: "Italian",
          rating: 4.8,
          reviews: 342,
          distance: "1.2 km",
          cashback: "20%",
          priceRange: "₹₹₹",
          openUntil: "11:00 PM",
          image: "🍝"
        },
        {
          name: "Little Italy",
          type: "Italian",
          rating: 4.6,
          reviews: 218,
          distance: "2.5 km",
          cashback: "15%",
          priceRange: "₹₹",
          openUntil: "10:30 PM",
          image: "🍕"
        },
        {
          name: "Trattoria Roma",
          type: "Italian Fine Dining",
          rating: 4.9,
          reviews: 156,
          distance: "3.0 km",
          cashback: "12%",
          priceRange: "₹₹₹₹",
          openUntil: "11:30 PM",
          image: "🍷"
        }
      ],
      coinTip: "Use 200 coins at Pasta Paradise to get an extra 5% off!"
    },
    {
      id: 4,
      type: 'user',
      content: "Tell me more about Pasta Paradise",
      timestamp: '10:02 AM'
    },
    {
      id: 5,
      type: 'ai',
      content: "Pasta Paradise is one of the top-rated Italian restaurants in your area. Here's what makes it special:",
      timestamp: '10:02 AM',
      details: {
        name: "Pasta Paradise",
        rating: 4.8,
        reviews: 342,
        highlights: [
          "Award-winning handmade pasta",
          "Romantic ambiance with outdoor seating",
          "Extensive wine selection",
          "Chef's special changes weekly"
        ],
        popularDishes: [
          { name: "Truffle Carbonara", price: "₹650", loves: 89 },
          { name: "Seafood Risotto", price: "₹780", loves: 72 },
          { name: "Tiramisu", price: "₹350", loves: 156 }
        ],
        offers: [
          { text: "20% cashback in ReZ Coins", highlight: true },
          { text: "Free dessert on orders above ₹1500" },
          { text: "Extra 5% off with 200 coins" }
        ],
        address: "123 Food Street, City Center",
        phone: "+91 98765 43210"
      }
    }
  ]);

  // Quick replies for the user
  const quickReplies = [
    "Book a table",
    "Show menu",
    "Get directions",
    "More options"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      // AI would respond here
    }, 1500);
  };

  const renderMessageContent = (msg) => {
    if (msg.type === 'user') {
      return (
        <div className="flex justify-end mb-4">
          <div className="max-w-[80%]">
            <div className="bg-purple-600 text-white rounded-2xl rounded-tr-sm px-4 py-3">
              <p>{msg.content}</p>
            </div>
            <p className="text-xs text-gray-400 text-right mt-1">{msg.timestamp}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 max-w-[85%]">
          <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3">
            <p className="text-gray-800">{msg.content}</p>

            {/* Render restaurant results */}
            {msg.results && (
              <div className="mt-3 space-y-2">
                {msg.results.map((result, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{result.image}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{result.name}</h4>
                        <p className="text-xs text-gray-500">{result.type} • {result.priceRange}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-gray-600">{result.rating} ({result.reviews})</span>
                          <span className="text-xs text-gray-400">• {result.distance}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                            {result.cashback} Cashback
                          </span>
                          <span className="text-xs text-gray-500">
                            <Clock className="w-3 h-3 inline mr-1" />
                            Open till {result.openUntil}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Coin tip */}
            {msg.coinTip && (
              <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-2 flex items-center gap-2">
                <span className="text-xl">🪙</span>
                <p className="text-sm text-yellow-800">{msg.coinTip}</p>
              </div>
            )}

            {/* Restaurant details */}
            {msg.details && (
              <div className="mt-3 space-y-3">
                {/* Highlights */}
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Highlights</h5>
                  <div className="flex flex-wrap gap-2">
                    {msg.details.highlights.map((h, idx) => (
                      <span key={idx} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular dishes */}
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Popular Dishes</h5>
                  <div className="space-y-2">
                    {msg.details.popularDishes.map((dish, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
                        <div>
                          <span className="text-sm text-gray-800">{dish.name}</span>
                          <span className="text-xs text-gray-500 ml-2">{dish.price}</span>
                        </div>
                        <span className="text-xs text-pink-500 flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" /> {dish.loves}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offers */}
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Available Offers</h5>
                  <div className="space-y-1">
                    {msg.details.offers.map((offer, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm ${offer.highlight ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                        <span>✓</span> {offer.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                    Book Table
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <MapPin className="w-4 h-4" /> Directions
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Message actions */}
          <div className="flex items-center gap-3 mt-2 px-2">
            <button className="text-gray-400 hover:text-green-500">
              <ThumbsUp className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-red-500">
              <ThumbsDown className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-purple-500">
              <Copy className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-purple-500">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-purple-500">
              <Bookmark className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-400 ml-auto">{msg.timestamp}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-semibold">AI-R Assistant</h1>
                <p className="text-purple-200 text-xs">Powered by AIRA Engine</p>
              </div>
            </div>
          </div>
          <button className="text-white">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((msg) => renderMessageContent(msg))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 pb-2">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => setMessage(reply)}
              className="bg-white text-purple-600 border border-purple-200 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-purple-50 transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="text-gray-400">
            <Image className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask AI-R anything..."
              className="flex-1 bg-transparent outline-none text-gray-800"
            />
          </div>
          {message ? (
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          ) : (
            <button
              onClick={() => setIsListening(!isListening)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isListening ? 'bg-red-500 animate-pulse' : 'bg-purple-600'
              }`}
            >
              <Mic className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIRChat;
