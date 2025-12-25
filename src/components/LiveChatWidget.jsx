/**
 * Live Chat Support Widget
 * Purpose: Floating chat widget for customer support
 * UI: Chat bubble, expandable chat window, quick replies, file upload
 */

import { useState, useRef, useEffect } from 'react';

const LiveChatWidget = ({ position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! 👋 Welcome to ReZ Support. How can I help you today?',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    { id: 1, text: 'Track my order', icon: '📦' },
    { id: 2, text: 'Cashback not received', icon: '💰' },
    { id: 3, text: 'How to earn coins?', icon: '🪙' },
    { id: 4, text: 'Talk to agent', icon: '👤' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (text) => {
    if (text.includes('order') || text.includes('track')) {
      return 'To track your order, please provide your Order ID. You can find it in Orders section or in your email confirmation.';
    } else if (text.includes('cashback') || text.includes('coins')) {
      return 'Cashback is typically credited within 24-48 hours after order delivery. You can check your wallet for pending and credited amounts.';
    } else if (text.includes('earn') || text.includes('how')) {
      return 'You can earn ReZ Coins by:\n• Shopping through ReZ app\n• Referring friends\n• Daily check-ins\n• Writing reviews\n• Completing missions';
    } else if (text.includes('agent') || text.includes('human') || text.includes('talk')) {
      return 'Connecting you to a live agent... Please wait while we find someone to assist you. ⏱️';
    } else if (text.includes('refund') || text.includes('return')) {
      return 'For refund requests, please go to Orders → Select Order → Request Return/Refund. Our team will review and process it within 2-3 business days.';
    } else {
      return 'I understand your concern. Let me help you with that. Could you provide more details so I can assist you better?';
    }
  };

  const handleQuickReply = (text) => {
    handleSendMessage(text);
  };

  const handleFileUpload = () => {
    alert('File upload feature - In production, this would allow uploading screenshots/documents');
  };

  const positionStyles = {
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
  };

  if (!isOpen) {
    // Chat Bubble
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          ...positionStyles[position],
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          border: 'none',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          zIndex: 999,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
        }}
      >
        💬
        {/* Unread Badge */}
        <div style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '20px',
          height: '20px',
          borderRadius: '10px',
          backgroundColor: '#EF4444',
          color: '#FFFFFF',
          fontSize: '11px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #FFFFFF',
        }}>
          1
        </div>
      </button>
    );
  }

  // Chat Window
  return (
    <div style={{
      position: 'fixed',
      ...positionStyles[position],
      width: '360px',
      maxWidth: 'calc(100vw - 40px)',
      height: '550px',
      maxHeight: 'calc(100vh - 100px)',
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 999,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        padding: '16px 20px',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
          }}>
            👨‍💼
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600' }}>ReZ Support</div>
            <div style={{ fontSize: '11px', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '3px',
                backgroundColor: '#34D399',
              }} />
              Online
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div style={{
              maxWidth: '75%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              <div style={{
                padding: '10px 14px',
                borderRadius: message.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                backgroundColor: message.sender === 'user' ? '#10B981' : '#FFFFFF',
                color: message.sender === 'user' ? '#FFFFFF' : '#1F2937',
                fontSize: '13px',
                lineHeight: '1.5',
                boxShadow: message.sender === 'bot' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                whiteSpace: 'pre-line',
              }}>
                {message.text}
              </div>
              <div style={{
                fontSize: '10px',
                color: '#9CA3AF',
                textAlign: message.sender === 'user' ? 'right' : 'left',
                paddingLeft: message.sender === 'bot' ? '4px' : '0',
                paddingRight: message.sender === 'user' ? '4px' : '0',
              }}>
                {message.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              padding: '10px 14px',
              borderRadius: '12px 12px 12px 0',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              gap: '4px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#D1D5DB',
                animation: 'bounce 1.4s infinite ease-in-out both',
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#D1D5DB',
                animation: 'bounce 1.4s infinite ease-in-out both 0.2s',
              }} />
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: '#D1D5DB',
                animation: 'bounce 1.4s infinite ease-in-out both 0.4s',
              }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length <= 2 && (
        <div style={{
          padding: '12px 16px',
          borderTop: '1px solid #E5E7EB',
          backgroundColor: '#FFFFFF',
        }}>
          <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px' }}>
            Quick Replies
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {quickReplies.map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply.text)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#F3F4F6',
                  border: '1px solid #E5E7EB',
                  borderRadius: '16px',
                  fontSize: '11px',
                  color: '#374151',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>{reply.icon}</span>
                <span>{reply.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid #E5E7EB',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        gap: '8px',
      }}>
        <button
          onClick={handleFileUpload}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: '#F3F4F6',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          📎
        </button>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '10px 12px',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            fontSize: '13px',
            outline: 'none',
          }}
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim()}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: inputText.trim() ? '#10B981' : '#E5E7EB',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            cursor: inputText.trim() ? 'pointer' : 'not-allowed',
          }}
        >
          ➤
        </button>
      </div>

      {/* Typing animation CSS */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LiveChatWidget;
