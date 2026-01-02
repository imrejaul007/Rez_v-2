import React, { useState } from 'react';
import {
  ArrowLeft, MessageCircle, Phone, Bell, Send, Clock, CheckCircle,
  AlertTriangle, Users, IndianRupee, Calendar, Settings, Filter,
  Smartphone, Mail, RefreshCw, ToggleLeft, ToggleRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantPaymentReminders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [showSettings, setShowSettings] = useState(false);

  const [reminderSettings, setReminderSettings] = useState({
    autoReminder: true,
    reminderDays: [3, 7, 15, 30],
    whatsappEnabled: true,
    smsEnabled: true,
    emailEnabled: false,
    reminderTime: '10:00',
    politeMode: true
  });

  const [pendingReminders, setPendingReminders] = useState([
    {
      id: 1,
      customer: 'Rajesh Kumar',
      phone: '9876543210',
      amount: 12500,
      dueDate: '25 Dec 2024',
      daysPast: 6,
      lastReminder: '2 days ago',
      reminderCount: 2,
      status: 'overdue'
    },
    {
      id: 2,
      customer: 'Sunita Devi',
      phone: '9876543213',
      amount: 28000,
      dueDate: '10 Dec 2024',
      daysPast: 21,
      lastReminder: '1 week ago',
      reminderCount: 4,
      status: 'overdue'
    },
    {
      id: 3,
      customer: 'Priya Sharma',
      phone: '9876543211',
      amount: 4200,
      dueDate: '30 Dec 2024',
      daysPast: -1,
      lastReminder: 'Never',
      reminderCount: 0,
      status: 'due_soon'
    },
    {
      id: 4,
      customer: 'Amit Patel',
      phone: '9876543212',
      amount: 850,
      dueDate: '15 Jan 2025',
      daysPast: -16,
      lastReminder: 'Never',
      reminderCount: 0,
      status: 'upcoming'
    },
  ]);

  const [sentReminders, setSentReminders] = useState([
    { id: 1, customer: 'Rajesh Kumar', amount: 12500, sentVia: 'WhatsApp', sentAt: '2 days ago', status: 'delivered' },
    { id: 2, customer: 'Rajesh Kumar', amount: 12500, sentVia: 'SMS', sentAt: '5 days ago', status: 'delivered' },
    { id: 3, customer: 'Sunita Devi', amount: 28000, sentVia: 'WhatsApp', sentAt: '1 week ago', status: 'read' },
    { id: 4, customer: 'Sunita Devi', amount: 28000, sentVia: 'WhatsApp', sentAt: '2 weeks ago', status: 'read' },
  ]);

  const messageTemplates = {
    polite: {
      first: "Namaste {name} ji, this is a gentle reminder that ₹{amount} is due on {date}. Please pay at your convenience. Thank you! - {business}",
      followup: "Dear {name} ji, hope you're well! Just a reminder about the pending amount of ₹{amount}. We appreciate your business! - {business}",
      overdue: "Respected {name} ji, your payment of ₹{amount} was due on {date}. Kindly clear it when possible. Thank you! - {business}"
    },
    direct: {
      first: "Payment Reminder: ₹{amount} due on {date}. Please pay soon. - {business}",
      followup: "Reminder: ₹{amount} pending. Please clear the dues. - {business}",
      overdue: "URGENT: ₹{amount} overdue since {date}. Please pay immediately. - {business}"
    }
  };

  const stats = {
    totalPending: pendingReminders.reduce((sum, r) => sum + r.amount, 0),
    overdueCount: pendingReminders.filter(r => r.status === 'overdue').length,
    remindersSent: 24,
    collectionRate: 78
  };

  const sendReminder = (reminder, method) => {
    alert(`Reminder sent to ${reminder.customer} via ${method}`);
    // Update reminder count
    setPendingReminders(prev =>
      prev.map(r => r.id === reminder.id ? { ...r, reminderCount: r.reminderCount + 1, lastReminder: 'Just now' } : r)
    );
  };

  const sendBulkReminders = () => {
    const overdueCustomers = pendingReminders.filter(r => r.status === 'overdue');
    alert(`Sending reminders to ${overdueCustomers.length} customers via WhatsApp`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-500';
      case 'due_soon': return 'bg-yellow-500';
      case 'upcoming': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Payment Reminders</h1>
              <p className="text-green-200 text-sm">Auto & Manual Reminders</p>
            </div>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="bg-white/20 p-2 rounded-lg"
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(stats.totalPending/1000).toFixed(0)}K</p>
            <p className="text-xs text-green-200">Pending</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.overdueCount}</p>
            <p className="text-xs text-green-200">Overdue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.remindersSent}</p>
            <p className="text-xs text-green-200">Sent</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{stats.collectionRate}%</p>
            <p className="text-xs text-green-200">Collected</p>
          </div>
        </div>
      </div>

      {/* Auto Reminder Status */}
      <div className="mx-4 mt-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RefreshCw size={20} className="text-green-400 mr-3" />
            <div>
              <p className="text-white font-medium">Auto Reminders</p>
              <p className="text-gray-400 text-sm">Sends at 10:00 AM daily</p>
            </div>
          </div>
          <button
            onClick={() => setReminderSettings(prev => ({ ...prev, autoReminder: !prev.autoReminder }))}
            className="text-green-400"
          >
            {reminderSettings.autoReminder ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700 mt-4">
        <button
          onClick={() => setActiveTab('pending')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'pending' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
          }`}
        >
          Pending ({pendingReminders.length})
        </button>
        <button
          onClick={() => setActiveTab('sent')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'sent' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
          }`}
        >
          Sent ({sentReminders.length})
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'pending' && (
          <>
            {/* Bulk Action */}
            <button
              onClick={sendBulkReminders}
              className="w-full bg-green-600 text-white py-3 rounded-xl mb-4 flex items-center justify-center font-medium"
            >
              <MessageCircle size={18} className="mr-2" />
              Send Reminder to All Overdue ({stats.overdueCount})
            </button>

            {/* Pending List */}
            <div className="space-y-3">
              {pendingReminders.map(reminder => (
                <div key={reminder.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">{reminder.customer[0]}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{reminder.customer}</h3>
                        <p className="text-gray-400 text-sm">{reminder.phone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-red-400 font-bold text-lg">₹{reminder.amount.toLocaleString()}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(reminder.status)} text-white`}>
                        {reminder.status === 'overdue' ? `${reminder.daysPast}d overdue` :
                         reminder.status === 'due_soon' ? 'Due Soon' : 'Upcoming'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3 pb-3 border-b border-gray-700">
                    <span>Due: {reminder.dueDate}</span>
                    <span>Reminders sent: {reminder.reminderCount}</span>
                    <span>Last: {reminder.lastReminder}</span>
                  </div>

                  {/* Send Options */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => sendReminder(reminder, 'WhatsApp')}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                    >
                      <MessageCircle size={16} className="mr-1" /> WhatsApp
                    </button>
                    <button
                      onClick={() => sendReminder(reminder, 'SMS')}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                    >
                      <Smartphone size={16} className="mr-1" /> SMS
                    </button>
                    <button
                      onClick={() => window.open(`tel:${reminder.phone}`)}
                      className="bg-gray-700 text-white p-2 rounded-lg"
                    >
                      <Phone size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'sent' && (
          <div className="space-y-3">
            {sentReminders.map(reminder => (
              <div key={reminder.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    reminder.sentVia === 'WhatsApp' ? 'bg-green-600' : 'bg-blue-600'
                  }`}>
                    {reminder.sentVia === 'WhatsApp' ? <MessageCircle size={18} /> : <Smartphone size={18} />}
                  </div>
                  <div>
                    <p className="text-white font-medium">{reminder.customer}</p>
                    <p className="text-gray-400 text-sm">₹{reminder.amount.toLocaleString()} • {reminder.sentAt}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    reminder.status === 'read' ? 'bg-blue-600' : 'bg-gray-600'
                  } text-white`}>
                    {reminder.status === 'read' ? '✓✓ Read' : '✓ Delivered'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-lg font-bold">Reminder Settings</h3>
              <button onClick={() => setShowSettings(false)}>
                <span className="text-gray-400 text-2xl">&times;</span>
              </button>
            </div>

            {/* Auto Reminder Toggle */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Auto Reminders</p>
                  <p className="text-gray-400 text-sm">Send reminders automatically</p>
                </div>
                <button
                  onClick={() => setReminderSettings(prev => ({ ...prev, autoReminder: !prev.autoReminder }))}
                >
                  {reminderSettings.autoReminder ?
                    <ToggleRight size={32} className="text-green-400" /> :
                    <ToggleLeft size={32} className="text-gray-400" />
                  }
                </button>
              </div>
            </div>

            {/* Reminder Schedule */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <p className="text-white font-medium mb-3">Remind on Days</p>
              <div className="flex flex-wrap gap-2">
                {[1, 3, 7, 15, 30].map(day => (
                  <button
                    key={day}
                    onClick={() => {
                      const days = reminderSettings.reminderDays.includes(day)
                        ? reminderSettings.reminderDays.filter(d => d !== day)
                        : [...reminderSettings.reminderDays, day];
                      setReminderSettings(prev => ({ ...prev, reminderDays: days }));
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      reminderSettings.reminderDays.includes(day)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    Day {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Channels */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <p className="text-white font-medium mb-3">Reminder Channels</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center">
                    <MessageCircle size={18} className="mr-2 text-green-400" /> WhatsApp
                  </span>
                  <button
                    onClick={() => setReminderSettings(prev => ({ ...prev, whatsappEnabled: !prev.whatsappEnabled }))}
                  >
                    {reminderSettings.whatsappEnabled ?
                      <ToggleRight size={28} className="text-green-400" /> :
                      <ToggleLeft size={28} className="text-gray-400" />
                    }
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center">
                    <Smartphone size={18} className="mr-2 text-blue-400" /> SMS
                  </span>
                  <button
                    onClick={() => setReminderSettings(prev => ({ ...prev, smsEnabled: !prev.smsEnabled }))}
                  >
                    {reminderSettings.smsEnabled ?
                      <ToggleRight size={28} className="text-green-400" /> :
                      <ToggleLeft size={28} className="text-gray-400" />
                    }
                  </button>
                </div>
              </div>
            </div>

            {/* Message Tone */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <p className="text-white font-medium mb-3">Message Tone</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setReminderSettings(prev => ({ ...prev, politeMode: true }))}
                  className={`flex-1 py-3 rounded-lg ${
                    reminderSettings.politeMode ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  Polite & Friendly
                </button>
                <button
                  onClick={() => setReminderSettings(prev => ({ ...prev, politeMode: false }))}
                  className={`flex-1 py-3 rounded-lg ${
                    !reminderSettings.politeMode ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  Direct & Formal
                </button>
              </div>
            </div>

            {/* Sample Message Preview */}
            <div className="bg-gray-800 rounded-xl p-4">
              <p className="text-white font-medium mb-2">Message Preview</p>
              <div className="bg-gray-700 rounded-lg p-3">
                <p className="text-gray-300 text-sm">
                  {reminderSettings.politeMode
                    ? "Namaste Customer ji, this is a gentle reminder that ₹5,000 is due on 25 Dec. Please pay at your convenience. Thank you! - Your Business"
                    : "Payment Reminder: ₹5,000 due on 25 Dec. Please pay soon. - Your Business"
                  }
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowSettings(false)}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold mt-6"
            >
              Save Settings
            </button>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantPaymentReminders;
