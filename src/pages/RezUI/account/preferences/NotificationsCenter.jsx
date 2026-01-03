/**
 * Notifications Center
 * Purpose: All app notifications with filters and actions
 * UI: Notification cards, filters, mark as read, quick actions
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationsCenter = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'price_drop',
      title: 'Price Drop Alert!',
      message: 'iPhone 15 Pro Max is now ₹5,000 cheaper',
      time: '5 min ago',
      icon: '💰',
      read: false,
      action: { label: 'View Product', route: '/product/1' },
    },
    {
      id: 2,
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #ORD123456 has been delivered',
      time: '2 hours ago',
      icon: '📦',
      read: false,
      action: { label: 'View Order', route: '/order/123456' },
    },
    {
      id: 3,
      type: 'coins',
      title: 'Coins Earned!',
      message: 'You earned 150 ReZ Coins from your purchase',
      time: '3 hours ago',
      icon: '🪙',
      read: true,
      action: { label: 'View Balance', route: '/coin-history' },
    },
    {
      id: 4,
      type: 'referral',
      title: 'Referral Successful',
      message: 'Priya joined using your code. You earned ₹50!',
      time: '5 hours ago',
      icon: '👥',
      read: false,
      action: { label: 'View Referrals', route: '/referral' },
    },
    {
      id: 5,
      type: 'offer',
      title: 'Flash Sale Live!',
      message: 'Up to 70% off on Fashion - Limited Time',
      time: '1 day ago',
      icon: '⚡',
      read: true,
      action: { label: 'Shop Now', route: '/fashion' },
    },
    {
      id: 6,
      type: 'contest',
      title: 'Contest Results Announced',
      message: 'Student of the Month winner announced!',
      time: '1 day ago',
      icon: '🏆',
      read: true,
      action: { label: 'View Winner', route: '/contests' },
    },
    {
      id: 7,
      type: 'payment',
      title: 'Payment Successful',
      message: 'Payment of ₹2,499 completed for Event Ticket',
      time: '2 days ago',
      icon: '✓',
      read: true,
      action: { label: 'View Ticket', route: '/my-tickets' },
    },
    {
      id: 8,
      type: 'reward',
      title: 'Achievement Unlocked!',
      message: 'You unlocked "Super Saver" badge 🎖️',
      time: '3 days ago',
      icon: '🎉',
      read: true,
      action: { label: 'View Achievements', route: '/savings-tracker' },
    },
  ];

  const filters = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'unread', label: 'Unread', count: notifications.filter(n => !n.read).length },
    { id: 'price_drop', label: 'Price Alerts', count: notifications.filter(n => n.type === 'price_drop').length },
    { id: 'order', label: 'Orders', count: notifications.filter(n => n.type === 'order').length },
    { id: 'offers', label: 'Offers', count: notifications.filter(n => n.type === 'offer').length },
  ];

  const getFilteredNotifications = () => {
    if (activeFilter === 'all') return notifications;
    if (activeFilter === 'unread') return notifications.filter(n => !n.read);
    if (activeFilter === 'offers') return notifications.filter(n => n.type === 'offer');
    return notifications.filter(n => n.type === activeFilter);
  };

  const filteredNotifications = getFilteredNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    alert('All notifications marked as read');
  };

  const handleNotificationClick = (notification) => {
    if (notification.action) {
      navigate(notification.action.route);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      paddingBottom: '80px',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
          </button>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              Notifications
            </h1>
            {unreadCount > 0 && (
              <div style={{ fontSize: '12px', color: '#10B981' }}>
                {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
              </div>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllRead}
              style={{
                padding: '8px 12px',
                backgroundColor: '#F9FAFB',
                color: '#374151',
                border: '1px solid #E5E7EB',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Mark all read
            </button>
          )}
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none',
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '8px 16px',
                backgroundColor: activeFilter === filter.id ? '#10B981' : '#FFFFFF',
                color: activeFilter === filter.id ? '#FFFFFF' : '#6B7280',
                border: activeFilter === filter.id ? 'none' : '1px solid #E5E7EB',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {filter.label}
              {filter.count > 0 && (
                <span style={{
                  padding: '2px 6px',
                  backgroundColor: activeFilter === filter.id ? 'rgba(255,255,255,0.2)' : '#F3F4F6',
                  borderRadius: '10px',
                  fontSize: '11px',
                }}>
                  {filter.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div style={{ padding: '20px' }}>
        {filteredNotifications.length === 0 ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '60px 20px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🔔</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              No notifications
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              You're all caught up!
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => handleNotificationClick(notification)}
                style={{
                  backgroundColor: notification.read ? '#FFFFFF' : '#F0FDF4',
                  padding: '16px',
                  borderRadius: '12px',
                  border: `1px solid ${notification.read ? '#E5E7EB' : '#BBF7D0'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Unread Indicator */}
                {!notification.read && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '8px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#10B981',
                  }} />
                )}

                <div style={{ display: 'flex', gap: '12px' }}>
                  {/* Icon */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '22px',
                    backgroundColor: notification.read ? '#F3F4F6' : '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    flexShrink: 0,
                  }}>
                    {notification.icon}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '4px',
                    }}>
                      <div style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#1F2937',
                      }}>
                        {notification.title}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#9CA3AF',
                        whiteSpace: 'nowrap',
                        marginLeft: '8px',
                      }}>
                        {notification.time}
                      </div>
                    </div>

                    <div style={{
                      fontSize: '13px',
                      color: '#6B7280',
                      marginBottom: notification.action ? '12px' : 0,
                      lineHeight: '1.5',
                    }}>
                      {notification.message}
                    </div>

                    {/* Action Button */}
                    {notification.action && (
                      <button
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#F0FDF4',
                          color: '#047857',
                          border: '1px solid #BBF7D0',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        {notification.action.label} →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Link */}
        <div style={{
          backgroundColor: '#EFF6FF',
          padding: '16px',
          borderRadius: '12px',
          border: '1px solid #DBEAFE',
          marginTop: '20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '13px', color: '#1E3A8A', marginBottom: '10px' }}>
            Manage your notification preferences
          </div>
          <button
            onClick={() => navigate('/settings')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCenter;
