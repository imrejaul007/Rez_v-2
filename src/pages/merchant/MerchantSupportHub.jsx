import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MessageSquare, Phone, Video, HelpCircle,
  Clock, CheckCircle, AlertCircle, ChevronRight, Search,
  Headphones, Zap, Shield, Star, Book, ExternalLink,
  Send, X, User, Bot
} from 'lucide-react';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantSupportHub = () => {
  const navigate = useNavigate();
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackScheduled, setCallbackScheduled] = useState(false);

  const supportOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Support',
      desc: 'Chat with us instantly',
      icon: MessageSquare,
      color: 'green',
      action: 'whatsapp',
      responseTime: 'Instant'
    },
    {
      id: 'callback',
      name: 'Request Callback',
      desc: 'We\'ll call you back',
      icon: Phone,
      color: 'blue',
      action: 'callback',
      responseTime: '< 10 mins'
    },
    {
      id: 'video',
      name: 'Video Support',
      desc: 'Screen share & demo',
      icon: Video,
      color: 'purple',
      action: 'video',
      responseTime: 'Schedule'
    }
  ];

  const quickHelp = [
    { q: 'Printer not working?', link: '/merchant/hardware-diagnostics' },
    { q: 'Sync issues?', link: '/merchant/offline-sync' },
    { q: 'GST setup help?', link: '/merchant/gst-setup' },
    { q: 'How to add products?', link: '/merchant/products' },
    { q: 'Understanding profits?', link: '/merchant/profit-view' },
    { q: 'Staff permissions?', link: '/merchant/user-roles' }
  ];

  const recentTickets = [
    {
      id: 'T001',
      issue: 'Bluetooth printer connection',
      status: 'resolved',
      time: '2 hours ago',
      resolution: 'Firmware updated'
    },
    {
      id: 'T002',
      issue: 'Settlement delay query',
      status: 'in_progress',
      time: 'Yesterday',
      assignee: 'Rahul'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I need help with my ReZ store', '_blank');
  };

  const handleCallback = () => {
    if (!callbackPhone) return;
    setCallbackScheduled(true);
    setTimeout(() => {
      setShowCallbackModal(false);
      setCallbackScheduled(false);
      setCallbackPhone('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/merchant')} className="p-2 hover:bg-gray-700 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-white">Support Hub</h1>
            <p className="text-xs text-gray-400">We're here to help 24/7</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Concierge Banner - First 30 days */}
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl border border-purple-500/30 p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white">Dedicated Concierge</h3>
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                  First 30 Days
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1">
                Rahul is your dedicated support manager. Direct line available.
              </p>
              <button
                onClick={() => window.open('tel:+919876543210')}
                className="mt-3 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-500 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Rahul Now
              </button>
            </div>
          </div>
        </div>

        {/* Quick Support Options */}
        <div className="grid gap-3">
          {supportOptions.map(option => {
            const IconComponent = option.icon;
            const colorClasses = {
              green: 'bg-green-500/20 text-green-400 border-green-500/30',
              blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
              purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
            };
            const bgClasses = {
              green: 'bg-green-500/10',
              blue: 'bg-blue-500/10',
              purple: 'bg-purple-500/10'
            };

            return (
              <button
                key={option.id}
                onClick={() => {
                  if (option.action === 'whatsapp') handleWhatsApp();
                  if (option.action === 'callback') setShowCallbackModal(true);
                  if (option.action === 'video') navigate('/merchant/support/video');
                }}
                className={`w-full p-4 rounded-xl border ${colorClasses[option.color]} ${bgClasses[option.color]} flex items-center gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[option.color]}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">{option.name}</p>
                  <p className="text-sm opacity-75">{option.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-75">{option.responseTime}</p>
                  <ChevronRight className="w-5 h-5 opacity-50 ml-auto" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick Help */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold text-white">Quick Help</h3>
            </div>
          </div>
          <div className="divide-y divide-gray-700">
            {quickHelp.map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.link)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-750 transition-colors"
              >
                <span className="text-gray-300">{item.q}</span>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </button>
            ))}
          </div>
        </div>

        {/* Search Help */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white"
          />
        </div>

        {/* Recent Tickets */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <h3 className="font-semibold text-white">Your Tickets</h3>
            <button className="text-sm text-blue-400">View All</button>
          </div>
          <div className="divide-y divide-gray-700">
            {recentTickets.map(ticket => (
              <div key={ticket.id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white font-medium">{ticket.issue}</p>
                    <p className="text-sm text-gray-400 mt-1">
                      {ticket.id} • {ticket.time}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    ticket.status === 'resolved'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {ticket.status === 'resolved' ? 'Resolved' : 'In Progress'}
                  </span>
                </div>
                {ticket.resolution && (
                  <p className="text-xs text-green-400 mt-2">
                    Resolution: {ticket.resolution}
                  </p>
                )}
                {ticket.assignee && (
                  <p className="text-xs text-gray-500 mt-2">
                    Assigned to: {ticket.assignee}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Help Resources */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
          <h3 className="font-semibold text-white mb-3">Help Resources</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors">
              <Book className="w-5 h-5 text-blue-400 mb-2" />
              <p className="text-sm text-white">User Guide</p>
            </button>
            <button className="p-3 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors">
              <Video className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-white">Video Tutorials</p>
            </button>
            <button className="p-3 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors">
              <HelpCircle className="w-5 h-5 text-yellow-400 mb-2" />
              <p className="text-sm text-white">FAQs</p>
            </button>
            <button className="p-3 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors">
              <ExternalLink className="w-5 h-5 text-green-400 mb-2" />
              <p className="text-sm text-white">Community</p>
            </button>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-white">Critical Issue?</h3>
              <p className="text-sm text-gray-400 mt-1">
                POS down? Payments stuck? Call our emergency line.
              </p>
              <button
                onClick={() => window.open('tel:+911800123456')}
                className="mt-3 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-500 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                1800-123-456 (Toll Free)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Request Callback</h2>
                <button onClick={() => setShowCallbackModal(false)} className="p-2 hover:bg-gray-700 rounded-lg">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {!callbackScheduled ? (
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Your Phone Number</label>
                  <div className="flex">
                    <span className="bg-gray-700 border border-gray-700 rounded-l-lg px-4 py-3 text-gray-400">+91</span>
                    <input
                      type="tel"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="9876543210"
                      maxLength={10}
                      className="flex-1 bg-gray-900 border border-gray-700 rounded-r-lg px-4 py-3 text-white"
                    />
                  </div>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">Expected callback: Within 10 minutes</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Our support team is available 24/7
                  </p>
                </div>

                <button
                  onClick={handleCallback}
                  disabled={callbackPhone.length !== 10}
                  className={`w-full py-4 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                    callbackPhone.length === 10
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                  Request Callback
                </button>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Callback Scheduled!</h3>
                <p className="text-gray-400 mt-2">
                  We'll call you at +91 {callbackPhone} within 10 minutes
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <MerchantNav />
    </div>
  );
};

export default MerchantSupportHub;
