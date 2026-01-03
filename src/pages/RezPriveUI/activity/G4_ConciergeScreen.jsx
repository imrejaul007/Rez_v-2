/**
import BottomNavManager from '../../../components/layout/BottomNavManager';
import { priveTheme } from '../../../styles/prive-theme';
import { useNavigate } from 'react-router-dom';
 * G4 - Privé Concierge (White-Glove Support)
 *
 * Premium support experience with:
 * - Smart FAQ with instant answers
 * - Live chat with typing indicators
 * - Request history and tracking
 * - Priority support based on tier
 * - Quick action buttons
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// SafeAreaView removed
// LinearGradient will use CSS
import { useNavigate } from 'react-router-dom';
import { Text } from '../../components';
import { colors, spacing, borderRadius } from '../../theme';

// ============================================
// TYPES
// ============================================

type ViewMode = 'home' | 'chat' | 'history' | 'faq';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'concierge';
  time: string;
  status?: 'sending' | 'sent' | 'read';
  attachments?: string[];
}

interface QuickAction {
  id: string;
  icon: string;
  label: string;
  description: string;
  color: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface SupportRequest {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'resolved';
  date: string;
  priority: 'normal' | 'high' | 'urgent';
  lastMessage: string;
}

// ============================================
// MOCK DATA
// ============================================

const quickActions: QuickAction[] = [
  { id: '1', icon: '🎁', label: 'Reward Issue', description: 'Missing or incorrect rewards', color: '#F59E0B' },
  { id: '2', icon: '📱', label: 'Campaign Help', description: 'Content or submission issues', color: '#8B5CF6' },
  { id: '3', icon: '🔑', label: 'Access Problem', description: 'Login or account access', color: '#10B981' },
  { id: '4', icon: '🏪', label: 'Store Question', description: 'Partner or location queries', color: '#3B82F6' },
  { id: '5', icon: '💳', label: 'Payment Issue', description: 'Transaction or checkout help', color: '#EF4444' },
  { id: '6', icon: '✨', label: 'Feature Request', description: 'Suggestions and feedback', color: '#EC4899' },
];

const faqItems: FAQItem[] = [
  { id: '1', category: 'Rewards', question: 'How long does it take to receive rewards?', answer: 'Most rewards are credited within 24-48 hours after your purchase is verified. For campaign rewards, processing may take 3-5 business days after content approval.' },
  { id: '2', category: 'Rewards', question: 'Can I combine multiple rewards?', answer: 'Yes! You can stack rewards at participating Privé partners. Some exclusions may apply during promotional periods.' },
  { id: '3', category: 'Account', question: 'How is my Privé Score calculated?', answer: 'Your Privé Score is based on 6 pillars: Engagement (25%), Trust (20%), Influence (20%), Economic (15%), Brand Alignment (10%), and Network (10%).' },
  { id: '4', category: 'Account', question: 'What happens if my score drops?', answer: 'If your score drops below the threshold, you enter a 30-day grace period to improve. We\'ll send you tips and reminders to help maintain your status.' },
  { id: '5', category: 'Campaigns', question: 'How do I get invited to campaigns?', answer: 'Brands select members based on their influence score, content quality, and audience alignment. Keep your profile updated and maintain high engagement!' },
  { id: '6', category: 'Campaigns', question: 'What if my content is rejected?', answer: 'You\'ll receive specific feedback on why. You typically have 2 revision attempts to meet the brief requirements.' },
];

const supportHistory: SupportRequest[] = [
  { id: '1', title: 'Missing reward from Grand Café', status: 'resolved', date: '2 days ago', priority: 'normal', lastMessage: 'Your reward has been credited. Thank you for your patience!' },
  { id: '2', title: 'Campaign deadline extension', status: 'in_progress', date: '1 day ago', priority: 'high', lastMessage: 'We\'re checking with the brand team...' },
  { id: '3', title: 'Account verification help', status: 'open', date: '3 hours ago', priority: 'urgent', lastMessage: 'Please upload the required documents.' },
];

// ============================================
// COMPONENT
// ============================================

export const G4_ConciergeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<divMode>('home');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const typingAnim = useRef(new Animated.Value(0)).current;

  // Typing indicator animation
  useEffect(() => {
    if (isTyping) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(typingAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
          Animated.timing(typingAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
        ])
      ).start();
    }
  }, [isTyping]);

  const handleBack = () => {
    if (viewMode === 'home') {
      navigate(-1);
    } else {
      setViewMode('home');
    }
  };

  const handleQuickAction = (action: QuickAction) => {
    setSelectedTopic(action.label);
    const welcomeMessage: Message = {
      id: '1',
      text: `Hello! I understand you need help with "${action.label}". I'm Sarah, your dedicated Privé concierge. How can I assist you today?`,
      sender: 'concierge',
      time: formatTime(new Date()),
    };
    setMessages([welcomeMessage]);
    setViewMode('chat');
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      time: formatTime(new Date()),
      status: 'sending',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate message sent
    setTimeout(() => {
      setMessages(prev =>
        prev.map(m => m.id === userMessage.id ? { ...m, status: 'sent' } : m)
      );
    }, 500);

    // Simulate concierge typing
    setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    // Simulate response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "I understand. Let me look into this for you right away.",
        "Thank you for providing those details. I'm checking our system now.",
        "I've escalated this to our priority team. You should hear back within the hour.",
        "Great question! Let me provide you with the most up-to-date information.",
      ];
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'concierge',
        time: formatTime(new Date()),
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 3000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return '#F59E0B';
      case 'in_progress': return '#3B82F6';
      case 'resolved': return '#10B981';
      default: return colors.text.tertiary;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent': return { color: '#EF4444', label: 'Urgent' };
      case 'high': return { color: '#F59E0B', label: 'High' };
      default: return { color: colors.text.tertiary, label: 'Normal' };
    }
  };

  const faqCategories = ['All', ...new Set(faqItems.map(f => f.category))];
  const filteredFaqs = selectedCategory === 'All'
    ? faqItems
    : faqItems.filter(f => f.category === selectedCategory);

  // ============================================
  // RENDER: HOME
  // ============================================

  const renderHome = () => (
    <div style={style={{...styles.scrollView} >
      {/* Welcome Card */}
      <LinearGradient
        colors={['rgba(201, 169, 98, 0.15)', 'rgba(201, 169, 98, 0.05)']}
        style={style={{...styles.welcomeCard}
      >
        <div style={style={{...styles.welcomeHeader}>
          <div style={style={{...styles.conciergeAvatar}>
            <span style={style={{...styles.avatarEmoji}>👩‍💼</span>
          </div>
          <div style={style={{...styles.welcomeInfo}>
            <span variant="h4" color={colors.text.primary}>Privé Concierge</span>
            <div style={style={{...styles.statusRow}>
              <div style={style={{...styles.onlineIndicator} />
              <span variant="caption" color="#10B981">Online • Avg. response 2 min</span>
            </div>
          </div>
        </div>
        <span variant="body" color={colors.text.secondary} style={style={{...styles.welcomeText}>
          Hello! I'm here to provide white-glove support for all your Privé needs. How may I assist you today?
        </span>
        <div style={style={{...styles.priorityBadge}>
          <span variant="caption" gold>⭐ Priority Member Support</span>
        </div>
      </LinearGradient>

      {/* Quick Actions */}
      <div style={style={{...styles.section}>
        <span variant="label" color={colors.text.tertiary} style={style={{...styles.sectionLabel}>
          QUICK ACTIONS
        </span>
        <div style={style={{...styles.actionsGrid}>
          {quickActions.map(action => (
            <div
              key={action.id}
              style={style={{...styles.actionCard}
              onClick={() => handleQuickAction(action)}
            >
              <div style={[style={{...styles.actionIcon, { backgroundColor: `${action.color}20` }]}>
                <span style={style={{...styles.actionEmoji}>{action.icon}</span>
              </div>
              <span variant="bodySmall" color={colors.text.primary} style={style={{...styles.actionLabel}>
                {action.label}
              </span>
              <span variant="caption" color={colors.text.tertiary} numberOfLines={1}>
                {action.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Options */}
      <div style={style={{...styles.section}>
        <div style={style={{...styles.navOption} onClick={() => setViewMode('faq')}>
          <div style={style={{...styles.navOptionLeft}>
            <div style={style={{...styles.navOptionIcon}>
              <span style={style={{...styles.navEmoji}>❓</span>
            </div>
            <div>
              <span variant="body" color={colors.text.primary}>FAQ & Help Center</span>
              <span variant="caption" color={colors.text.tertiary}>Instant answers to common questions</span>
            </div>
          </div>
          <span style={style={{...styles.navArrow}>›</span>
        </div>

        <div style={style={{...styles.navOption} onClick={() => setViewMode('history')}>
          <div style={style={{...styles.navOptionLeft}>
            <div style={style={{...styles.navOptionIcon}>
              <span style={style={{...styles.navEmoji}>📋</span>
            </div>
            <div>
              <span variant="body" color={colors.text.primary}>Request History</span>
              <span variant="caption" color={colors.text.tertiary}>Track your support requests</span>
            </div>
          </div>
          <div style={style={{...styles.navBadge}>
            <span variant="caption" color={colors.text.primary}>
              {supportHistory.filter(r => r.status !== 'resolved').length}
            </span>
          </div>
        </div>

        <div
          style={style={{...styles.navOption}
          onClick={() => {
            setSelectedTopic(null);
            setMessages([{
              id: '1',
              text: "Hello! I'm your dedicated Privé concierge. How may I assist you today?",
              sender: 'concierge',
              time: formatTime(new Date()),
            }]);
            setViewMode('chat');
          }}
        >
          <div style={style={{...styles.navOptionLeft}>
            <div style={[style={{...styles.navOptionIcon, style={{...styles.navOptionIconGold]}>
              <span style={style={{...styles.navEmoji}>💬</span>
            </div>
            <div>
              <span variant="body" gold>Start New Conversation</span>
              <span variant="caption" color={colors.text.tertiary}>Chat with a live specialist</span>
            </div>
          </div>
          <span style={[style={{...styles.navArrow, { color: colors.gold.primary }]}>›</span>
        </div>
      </div>

      {/* Operating Hours */}
      <div style={style={{...styles.hoursCard}>
        <span variant="bodySmall" color={colors.text.tertiary}>
          🕐 Concierge available 24/7 for Privé members
        </span>
      </div>

      <div style={style={{...styles.bottomSpace} />
    </div>
  );

  // ============================================
  // RENDER: CHAT
  // ============================================

  const renderChat = () => (
    <KeyboardAvoidingView
      style={style={{...styles.chatContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      {/* Chat Header */}
      <div style={style={{...styles.chatHeader}>
        <div style={style={{...styles.chatHeaderInfo}>
          <div style={style={{...styles.smallAvatar}>
            <span style={{ fontSize: 16 }}>👩‍💼</span>
          </div>
          <div>
            <span variant="body" color={colors.text.primary}>Sarah</span>
            <span variant="caption" color="#10B981">Online</span>
          </div>
        </div>
        {selectedTopic && (
          <div style={style={{...styles.topicBadge}>
            <span variant="caption" color={colors.gold.primary}>{selectedTopic}</span>
          </div>
        )}
      </div>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={style={{...styles.messagesList}
        
        renderItem={({ item }) => (
          <div style={[
            style={{...styles.messageBubble,
            item.sender === 'user' ? style={{...styles.userMessage : style={{...styles.conciergeMessage,
          ]}>
            {item.sender === 'concierge' && (
              <div style={style={{...styles.messageSenderIcon}>
                <span style={{ fontSize: 12 }}>👩‍💼</span>
              </div>
            )}
            <div style={[
              style={{...styles.messageContent,
              item.sender === 'user' ? style={{...styles.userMessageContent : style={{...styles.conciergeMessageContent,
            ]}>
              <Text
                variant="body"
                color={item.sender === 'user' ? '#000' : colors.text.primary}
              >
                {item.text}
              </span>
              <div style={style={{...styles.messageFooter}>
                <Text
                  variant="caption"
                  color={item.sender === 'user' ? 'rgba(0,0,0,0.5)' : colors.text.tertiary}
                >
                  {item.time}
                </span>
                {item.sender === 'user' && item.status && (
                  <span variant="caption" color="rgba(0,0,0,0.5)">
                    {item.status === 'read' ? ' ✓✓' : item.status === 'sent' ? ' ✓' : ' ○'}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        ListFooterComponent={
          isTyping ? (
            <div style={style={{...styles.typingIndicator}>
              <div style={style={{...styles.messageSenderIcon}>
                <span style={{ fontSize: 12 }}>👩‍💼</span>
              </div>
              <div style={style={{...styles.typingBubble}>
                <Animated.View style={[style={{...styles.typingDot, { opacity: typingAnim }]} />
                <Animated.View style={[style={{...styles.typingDot, { opacity: typingAnim }]} />
                <Animated.View style={[style={{...styles.typingDot, { opacity: typingAnim }]} />
              </div>
            </div>
          ) : null
        }
      />

      {/* Input Area */}
      <div style={style={{...styles.inputContainer}>
        <div style={style={{...styles.attachButton}>
          <span style={{ fontSize: 20 }}>📎</span>
        </div>
        <TextInput
          style={style={{...styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor={colors.text.tertiary}
          multiline
        />
        <div
          style={[style={{...styles.sendButton, !inputText.trim() && style={{...styles.sendButtonDisabled]}
          onClick={handleSend}
          disabled={!inputText.trim()}
        >
          <span style={{ fontSize: 18, color: inputText.trim() ? '#000' : colors.text.tertiary }}>
            ↑
          </span>
        </div>
      </div>
    </KeyboardAvoidingView>
  );

  // ============================================
  // RENDER: FAQ
  // ============================================

  const renderFaq = () => (
    <div style={style={{...styles.scrollView} >
      {/* Category Filters */}
      <div
        horizontal
        
        contentContainerStyle={style={{...styles.categoryScroll}
      >
        {faqCategories.map(cat => (
          <div
            key={cat}
            style={[style={{...styles.categoryChip, selectedCategory === cat && style={{...styles.categoryChipActive]}
            onClick={() => setSelectedCategory(cat)}
          >
            <Text
              variant="bodySmall"
              color={selectedCategory === cat ? colors.gold.primary : colors.text.secondary}
            >
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* FAQ Items */}
      <div style={style={{...styles.faqList}>
        {filteredFaqs.map(faq => (
          <div
            key={faq.id}
            style={style={{...styles.faqItem}
            onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
          >
            <div style={style={{...styles.faqQuestion}>
              <span variant="body" color={colors.text.primary} style={style={{...styles.faqQuestionText}>
                {faq.question}
              </span>
              <span style={[style={{...styles.faqArrow, expandedFaq === faq.id && style={{...styles.faqArrowExpanded]}>
                ›
              </span>
            </div>
            {expandedFaq === faq.id && (
              <div style={style={{...styles.faqAnswer}>
                <span variant="body" color={colors.text.secondary}>
                  {faq.answer}
                </span>
                <div style={style={{...styles.faqHelpful}>
                  <span variant="caption" color={colors.text.tertiary}>Was this helpful?</span>
                  <div style={style={{...styles.faqButtons}>
                    <div style={style={{...styles.faqButton}>
                      <span variant="caption" color={colors.text.secondary}>👍 Yes</span>
                    </div>
                    <div style={style={{...styles.faqButton}>
                      <span variant="caption" color={colors.text.secondary}>👎 No</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Need Help */}
      <div style={style={{...styles.stillNeedHelp}>
        <span variant="body" color={colors.text.primary}>Still need help?</span>
        <div
          style={style={{...styles.chatNowButton}
          onClick={() => {
            setMessages([{
              id: '1',
              text: "Hello! I see you were browsing our FAQ. How can I help you further?",
              sender: 'concierge',
              time: formatTime(new Date()),
            }]);
            setViewMode('chat');
          }}
        >
          <span variant="body" gold>Chat with Concierge →</span>
        </div>
      </div>

      <div style={style={{...styles.bottomSpace} />
    </div>
  );

  // ============================================
  // RENDER: HISTORY
  // ============================================

  const renderHistory = () => (
    <div style={style={{...styles.scrollView} >
      <div style={style={{...styles.historyList}>
        {supportHistory.map(request => {
          const priorityBadge = getPriorityBadge(request.priority);
          return (
            <div key={request.id} style={style={{...styles.historyCard}>
              <div style={style={{...styles.historyHeader}>
                <div style={style={{...styles.historyTitleRow}>
                  <span variant="body" color={colors.text.primary}>{request.title}</span>
                  {request.priority !== 'normal' && (
                    <div style={[style={{...styles.priorityLabel, { backgroundColor: `${priorityBadge.color}20` }]}>
                      <span variant="caption" style={{ color: priorityBadge.color }}>
                        {priorityBadge.label}
                      </span>
                    </div>
                  )}
                </div>
                <div style={style={{...styles.historyMeta}>
                  <div style={[style={{...styles.statusDot, { backgroundColor: getStatusColor(request.status) }]} />
                  <span variant="caption" style={{ color: getStatusColor(request.status) }}>
                    {request.status.replace('_', ' ').charAt(0).toUpperCase() + request.status.slice(1).replace('_', ' ')}
                  </span>
                  <span variant="caption" color={colors.text.tertiary}> • {request.date}</span>
                </div>
              </div>
              <div style={style={{...styles.historyMessage}>
                <span variant="bodySmall" color={colors.text.secondary} numberOfLines={2}>
                  {request.lastMessage}
                </span>
              </div>
              <div style={style={{...styles.historyActions}>
                <div style={style={{...styles.historyAction}>
                  <span variant="caption" gold>Continue Chat</span>
                </div>
                <div style={style={{...styles.historyAction}>
                  <span variant="caption" color={colors.text.tertiary}>View Details</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* New Request */}
      <div
        style={style={{...styles.newRequestButton}
        onClick={() => setViewMode('home')}
      >
        <span variant="body" gold>+ Start New Request</span>
      </div>

      <div style={style={{...styles.bottomSpace} />
    </div>
  );

  // ============================================
  // MAIN RENDER
  // ============================================

  const getTitle = () => {
    switch (viewMode) {
      case 'faq': return 'FAQ & Help';
      case 'history': return 'Request History';
      case 'chat': return 'Live Chat';
      default: return 'Privé Concierge';
    }
  };

  return (
    <div style={style={{...styles.container}>
      {/* Header */}
      <div style={style={{...styles.header}>
        <div style={style={{...styles.backButton} onClick={handleBack}>
          <span style={style={{...styles.backIcon}>←</span>
        </div>
        <span variant="h3" color={colors.text.primary}>{getTitle()}</span>
        <div style={style={{...styles.headerSpacer} />
      </div>

      {/* Content */}
      {viewMode === 'home' && renderHome()}
      {viewMode === 'chat' && renderChat()}
      {viewMode === 'faq' && renderFaq()}
      {viewMode === 'history' && renderHistory()}
    </div>
  );
};

// ============================================
// STYLES
// ============================================

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  scrollView: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingTop: spacing[2],
    paddingBottom: spacing[4],
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: colors.text.primary,
  },
  headerSpacer: {
    width: 40,
  },

  // Welcome Card
  welcomeCard: {
    marginHorizontal: spacing[5],
    marginBottom: spacing[6],
    borderRadius: borderRadius['2xl'],
    padding: spacing[5],
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.2)',
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  conciergeAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[4],
  },
  avatarEmoji: {
    fontSize: 28,
  },
  welcomeInfo: {
    flex: 1,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[1],
  },
  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: spacing[2],
  },
  welcomeText: {
    marginBottom: spacing[4],
  },
  priorityBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
  },

  // Quick Actions
  section: {
    marginBottom: spacing[6],
    paddingHorizontal: spacing[5],
  },
  sectionLabel: {
    letterSpacing: 1.5,
    marginBottom: spacing[3],
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[3],
  },
  actionCard: {
    width: '31%',
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[3],
    alignItems: 'center',
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[2],
  },
  actionEmoji: {
    fontSize: 20,
  },
  actionLabel: {
    textAlign: 'center',
    marginBottom: spacing[1],
  },

  // Nav Options
  navOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#181818',
    padding: spacing[4],
    borderRadius: borderRadius.xl,
    marginBottom: spacing[2],
  },
  navOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  navOptionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  navOptionIconGold: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
  },
  navEmoji: {
    fontSize: 20,
  },
  navArrow: {
    fontSize: 24,
    color: colors.text.tertiary,
  },
  navBadge: {
    backgroundColor: colors.gold.primary,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },

  // Hours Card
  hoursCard: {
    marginHorizontal: spacing[5],
    padding: spacing[4],
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    alignItems: 'center',
  },

  bottomSpace: {
    height: spacing[10],
  },

  // Chat
  chatContainer: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A1A',
  },
  chatHeaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  topicBadge: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
  },
  messagesList: {
    padding: spacing[5],
    flexGrow: 1,
  },
  messageBubble: {
    flexDirection: 'row',
    marginBottom: spacing[4],
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  conciergeMessage: {
    justifyContent: 'flex-start',
  },
  messageSenderIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(201, 169, 98, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[2],
  },
  messageContent: {
    maxWidth: '75%',
    padding: spacing[3],
    borderRadius: borderRadius.xl,
  },
  userMessageContent: {
    backgroundColor: colors.gold.primary,
    borderBottomRightRadius: spacing[1],
  },
  conciergeMessageContent: {
    backgroundColor: '#181818',
    borderBottomLeftRadius: spacing[1],
  },
  messageFooter: {
    flexDirection: 'row',
    marginTop: spacing[1],
    alignSelf: 'flex-end',
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingBubble: {
    flexDirection: 'row',
    backgroundColor: '#181818',
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.xl,
    gap: spacing[1],
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text.tertiary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: spacing[4],
    paddingHorizontal: spacing[5],
    backgroundColor: '#0A0A0A',
    borderTopWidth: 1,
    borderTopColor: '#1A1A1A',
  },
  attachButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  },
  textInput: {
    flex: 1,
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[3],
    paddingTop: spacing[3],
    color: colors.text.primary,
    fontSize: 15,
    maxHeight: 100,
    marginRight: spacing[3],
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.gold.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#2A2A2A',
  },

  // FAQ
  categoryScroll: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[4],
    gap: spacing[2],
  },
  categoryChip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    backgroundColor: '#181818',
    borderRadius: borderRadius.full,
    marginRight: spacing[2],
  },
  categoryChipActive: {
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
  },
  faqList: {
    paddingHorizontal: spacing[5],
  },
  faqItem: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    marginBottom: spacing[3],
    overflow: 'hidden',
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  faqQuestionText: {
    flex: 1,
    marginRight: spacing[3],
  },
  faqArrow: {
    fontSize: 24,
    color: colors.text.tertiary,
    transform: [{ rotate: '90deg' }],
  },
  faqArrowExpanded: {
    transform: [{ rotate: '-90deg' }],
  },
  faqAnswer: {
    padding: spacing[4],
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  faqHelpful: {
    marginTop: spacing[4],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faqButtons: {
    flexDirection: 'row',
    gap: spacing[3],
  },
  faqButton: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    backgroundColor: '#2A2A2A',
    borderRadius: borderRadius.lg,
  },
  stillNeedHelp: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[5],
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    gap: spacing[3],
  },
  chatNowButton: {
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderRadius: borderRadius.full,
  },

  // History
  historyList: {
    paddingHorizontal: spacing[5],
  },
  historyCard: {
    backgroundColor: '#181818',
    borderRadius: borderRadius.xl,
    padding: spacing[4],
    marginBottom: spacing[3],
  },
  historyHeader: {
    marginBottom: spacing[3],
  },
  historyTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    marginBottom: spacing[2],
  },
  priorityLabel: {
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.sm,
  },
  historyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing[2],
  },
  historyMessage: {
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
    marginBottom: spacing[3],
  },
  historyActions: {
    flexDirection: 'row',
    gap: spacing[4],
  },
  historyAction: {
    paddingVertical: spacing[2],
  },
  newRequestButton: {
    marginHorizontal: spacing[5],
    marginTop: spacing[4],
    padding: spacing[4],
    backgroundColor: 'rgba(201, 169, 98, 0.15)',
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(201, 169, 98, 0.3)',
    borderStyle: 'dashed',
  },
};

export default G4_ConciergeScreen;
