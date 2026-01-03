import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

/**
 * CONTACT SUPPORT - Contact Support Form
 *
 * Backend APIs needed:
 * - POST /api/support/contact (submit support ticket)
 * - POST /api/upload/attachment (upload support attachments)
 *
 * Connected to: RTMN_MASTER_DOCUMENTATION/FRONTEND_INVENTORY_TRACKER.md
 * Status: ✅ BUILT (Jan 2, 2026)
 * Priority: MEDIUM - User support
 */

function ContactSupport() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: 'general',
    subject: '',
    message: '',
    orderId: '',
    priority: 'normal'
  });
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'order', label: 'Order Issues' },
    { value: 'payment', label: 'Payment Issues' },
    { value: 'delivery', label: 'Delivery Issues' },
    { value: 'refund', label: 'Refund Request' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      attachments.forEach(file => {
        formDataToSend.append('attachments', file);
      });

      // TODO: Connect to backend API
      const response = await fetch('/api/support/contact', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          category: 'general',
          subject: '',
          message: '',
          orderId: '',
          priority: 'normal'
        });
        setAttachments([]);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to submit ticket');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + attachments.length > 3) {
      setError('Maximum 3 attachments allowed');
      return;
    }
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Support</h1>
            <p className="text-gray-600">We're here to help! Send us a message</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-green-600 font-medium">Ticket submitted successfully!</p>
                <p className="text-green-600 text-sm">We'll respond within 24 hours</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            {formData.category === 'order' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order ID (Optional)</label>
                <input
                  type="text"
                  value={formData.orderId}
                  onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., REZ123456789"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief description of your issue"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows="6"
                placeholder="Describe your issue in detail..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <div className="flex gap-4">
                {['low', 'normal', 'high'].map((priority) => (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => setFormData({ ...formData, priority })}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 font-medium capitalize transition-all ${
                      formData.priority === priority
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Optional, max 3)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                multiple
                accept="image/*,.pdf"
              />
              {attachments.length > 0 && (
                <div className="mt-2 space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 transition-all"
            >
              {loading ? 'Submitting...' : 'Submit Ticket'}
            </button>
          </form>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Other ways to reach us:</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-purple-600" />
                <span>1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-purple-600" />
                <span>support@rezapp.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <button
                  onClick={() => navigate('/chat-support')}
                  className="text-purple-600 hover:underline"
                >
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactSupport;
