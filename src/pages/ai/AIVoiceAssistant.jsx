import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Mic, MicOff, Volume2, VolumeX, Sparkles, ShoppingBag,
  Search, Calendar, DollarSign, TrendingUp, Clock, Zap, Settings,
  Play, Pause, SkipForward, RotateCcw, MessageCircle, Check
} from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const AIVoiceAssistant = () => {
  const navigate = useNavigate();

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [volumeEnabled, setVolumeEnabled] = useState(true);
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);

  const [conversationHistory, setConversationHistory] = useState([
    {
      id: 1,
      type: 'user',
      text: 'Show me deals on electronics',
      timestamp: '10:30 AM',
      action: 'search'
    },
    {
      id: 2,
      type: 'assistant',
      text: 'I found 45 deals on electronics. The top deal is 60% off on Samsung Galaxy Buds at ₹1,999. Would you like to see more?',
      timestamp: '10:30 AM',
      action: 'results',
      actionData: { count: 45, topDeal: 'Samsung Galaxy Buds' }
    }
  ]);

  const [quickCommands, setQuickCommands] = useState([
    {
      id: 1,
      command: 'Find best deals',
      icon: TrendingUp,
      category: 'shopping'
    },
    {
      id: 2,
      command: 'Track my order',
      icon: ShoppingBag,
      category: 'orders'
    },
    {
      id: 3,
      command: 'Search for products',
      icon: Search,
      category: 'search'
    },
    {
      id: 4,
      command: 'Check my budget',
      icon: DollarSign,
      category: 'finance'
    },
    {
      id: 5,
      command: 'Show my calendar',
      icon: Calendar,
      category: 'schedule'
    },
    {
      id: 6,
      command: 'What\'s trending',
      icon: Zap,
      category: 'trends'
    }
  ]);

  const [capabilities, setCapabilities] = useState([
    { name: 'Shopping', description: 'Search & compare products', icon: ShoppingBag },
    { name: 'Orders', description: 'Track your deliveries', icon: Search },
    { name: 'Budget', description: 'Financial insights', icon: DollarSign },
    { name: 'Recommendations', description: 'Personalized suggestions', icon: Sparkles }
  ]);

  const [voiceStats, setVoiceStats] = useState({
    totalCommands: 342,
    todayCommands: 12,
    avgResponseTime: '1.2s',
    accuracy: 96
  });

  // API Comment: POST /api/ai/voice/recognize
  // Payload: { audio: base64, language: 'en', context: {} }
  // ML Model: Speech-to-text (Whisper/Google Speech API)
  // Response: { transcript: string, confidence: number, intent: string }
  const startListening = async () => {
    setIsListening(true);
    setTranscript('');

    // Simulate voice recognition
    setTimeout(() => {
      const sampleCommands = [
        'Show me trending fashion deals',
        'What are the best smartphone deals today',
        'Add organic milk to my cart',
        'When will my last order arrive',
        'Find restaurants near me'
      ];
      const randomCommand = sampleCommands[Math.floor(Math.random() * sampleCommands.length)];
      setTranscript(randomCommand);
      setIsListening(false);
      processCommand(randomCommand);
    }, 3000);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  // API Comment: POST /api/ai/voice/process-command
  // Payload: { command: string, userId: string, context: {} }
  // ML Model: NLU (Natural Language Understanding) for intent classification
  // Response: { intent: string, entities: [], action: string, response: string }
  const processCommand = async (command) => {
    // Simulate AI processing
    setTimeout(() => {
      const aiResponse = generateResponse(command);
      setResponse(aiResponse);

      // Add to conversation history
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: command,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        text: aiResponse,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      setConversationHistory([...conversationHistory, userMessage, assistantMessage]);

      if (volumeEnabled) {
        speakResponse(aiResponse);
      }
    }, 1000);
  };

  // API Comment: POST /api/ai/voice/text-to-speech
  // Payload: { text: string, voice: string, speed: number }
  // ML Model: Text-to-speech (Google TTS/Amazon Polly)
  // Response: { audio: base64, duration: number }
  const speakResponse = (text) => {
    setIsSpeaking(true);
    // Simulate speech duration based on text length
    const duration = (text.length / 20) * 1000;
    setTimeout(() => {
      setIsSpeaking(false);
    }, duration);
  };

  const generateResponse = (command) => {
    const lowerCommand = command.toLowerCase();

    if (lowerCommand.includes('deal') || lowerCommand.includes('offer')) {
      return 'I found 23 amazing deals for you. The best one is 50% off on wireless earbuds at ₹1,299. Should I add it to your cart?';
    } else if (lowerCommand.includes('order') || lowerCommand.includes('track')) {
      return 'Your recent order #ORD12345 is out for delivery and will arrive by 6 PM today. Would you like to see the tracking details?';
    } else if (lowerCommand.includes('cart')) {
      return 'I\'ve added organic milk to your cart. Your cart now has 3 items totaling ₹847. Ready to checkout?';
    } else if (lowerCommand.includes('restaurant') || lowerCommand.includes('food')) {
      return 'I found 15 restaurants near you. The top rated is "The Spice Route" with 4.5 stars, 2.3 km away. Shall I book a table?';
    } else {
      return 'I can help you with shopping, tracking orders, managing your budget, and finding deals. What would you like to do?';
    }
  };

  const handleQuickCommand = (command) => {
    setTranscript(command);
    processCommand(command);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-lg">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">AI Voice Assistant</h1>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`} />
              <p className="text-xs text-indigo-100">
                {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Ready'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setVolumeEnabled(!volumeEnabled)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            {volumeEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Voice Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 text-center">
            <p className="text-xs text-indigo-100 mb-1">Today</p>
            <p className="text-lg font-bold">{voiceStats.todayCommands}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 text-center">
            <p className="text-xs text-indigo-100 mb-1">Total</p>
            <p className="text-lg font-bold">{voiceStats.totalCommands}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 text-center">
            <p className="text-xs text-indigo-100 mb-1">Speed</p>
            <p className="text-lg font-bold">{voiceStats.avgResponseTime}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 text-center">
            <p className="text-xs text-indigo-100 mb-1">Accuracy</p>
            <p className="text-lg font-bold">{voiceStats.accuracy}%</p>
          </div>
        </div>
      </div>

      {/* Main Voice Interface */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {!isListening && !isSpeaking && conversationHistory.length <= 2 && (
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Voice Assistant Ready</h2>
            <p className="text-gray-600 text-sm">Tap the mic button and start speaking</p>
          </div>
        )}

        {/* Voice Animation */}
        {(isListening || isSpeaking) && (
          <div className="mb-8">
            <div className="relative w-32 h-32">
              <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full ${
                isListening ? 'animate-pulse' : ''
              }`} />
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                {isListening ? (
                  <Mic className="w-12 h-12 text-indigo-600 animate-pulse" />
                ) : (
                  <Volume2 className="w-12 h-12 text-purple-600 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Transcript Display */}
        {transcript && (
          <div className="w-full max-w-md mb-4">
            <div className="bg-white rounded-xl p-4 border border-indigo-200 shadow-sm">
              <div className="flex items-start gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-indigo-600 mt-1" />
                <p className="text-sm font-semibold text-gray-900">You said:</p>
              </div>
              <p className="text-gray-700">{transcript}</p>
            </div>
          </div>
        )}

        {/* Response Display */}
        {response && (
          <div className="w-full max-w-md mb-4">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
              <div className="flex items-start gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-indigo-600 mt-1" />
                <p className="text-sm font-semibold text-gray-900">Assistant:</p>
              </div>
              <p className="text-gray-700">{response}</p>
            </div>
          </div>
        )}

        {/* Main Mic Button */}
        <button
          onClick={isListening ? stopListening : startListening}
          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all transform ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 scale-110 shadow-lg shadow-red-500/50'
              : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg'
          }`}
        >
          {isListening ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>

        <p className="text-sm text-gray-600 mt-4">
          {isListening ? 'Tap to stop listening' : 'Tap to speak'}
        </p>
      </div>

      {/* Quick Commands */}
      {!isListening && !isSpeaking && (
        <div className="p-4 bg-white border-t">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Commands</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickCommands.slice(0, 4).map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => handleQuickCommand(cmd.command)}
                  className="flex items-center gap-2 p-3 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-all"
                >
                  <Icon className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm text-gray-900">{cmd.command}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Conversation History */}
      {conversationHistory.length > 2 && (
        <div className="p-4 bg-white border-t">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Recent Conversations</h3>
            <button className="text-xs text-indigo-600 font-medium">Clear</button>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {conversationHistory.slice(-4).map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    msg.type === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-xs">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Capabilities */}
      {conversationHistory.length <= 2 && (
        <div className="p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">What I Can Do</h3>
          <div className="grid grid-cols-2 gap-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-3 border">
                  <Icon className="w-5 h-5 text-indigo-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900 mb-1">{capability.name}</p>
                  <p className="text-xs text-gray-600">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Voice Settings */}
      <div className="p-4 bg-white border-t">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-700">Voice Speed</span>
          <span className="text-sm font-semibold text-gray-900">{voiceSpeed}x</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={voiceSpeed}
          onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Slower</span>
          <span>Faster</span>
        </div>
      </div>

      <BottomNavManager currentPage="home" />
    </div>
  );
};

export default AIVoiceAssistant;
