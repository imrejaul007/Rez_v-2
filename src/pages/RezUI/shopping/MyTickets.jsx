/**
 * My Tickets
 * Purpose: Display all user's event tickets (upcoming, past, cancelled)
 * UI: Ticket cards with QR codes, filters, download options
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyTickets = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');

  const mockTickets = {
    upcoming: [
      {
        id: 1,
        eventName: 'Sunburn Arena ft. Alan Walker',
        eventImage: '🎵',
        date: 'Dec 31, 2024',
        time: '8:00 PM',
        venue: 'Phoenix Marketcity, Bangalore',
        ticketType: 'VIP Pass',
        quantity: 2,
        bookingId: 'EVT1234567890',
        qrCode: 'QR_EVT1234567890',
        status: 'confirmed',
        totalAmount: 6998,
      },
      {
        id: 2,
        eventName: 'Stand Up Comedy Night',
        eventImage: '😂',
        date: 'Dec 28, 2024',
        time: '7:30 PM',
        venue: 'The Laugh Factory, Koramangala',
        ticketType: 'General Admission',
        quantity: 1,
        bookingId: 'EVT0987654321',
        qrCode: 'QR_EVT0987654321',
        status: 'confirmed',
        totalAmount: 499,
      },
    ],
    past: [
      {
        id: 3,
        eventName: 'Coldplay Live in Mumbai',
        eventImage: '🎸',
        date: 'Nov 15, 2024',
        time: '6:00 PM',
        venue: 'DY Patil Stadium, Mumbai',
        ticketType: 'Silver',
        quantity: 2,
        bookingId: 'EVT1122334455',
        qrCode: 'QR_EVT1122334455',
        status: 'attended',
        totalAmount: 12000,
      },
    ],
    cancelled: [],
  };

  const getStatusBadge = (status) => {
    const styles = {
      confirmed: { bg: '#D1FAE5', color: '#047857', text: 'Confirmed' },
      attended: { bg: '#E0E7FF', color: '#4338CA', text: 'Attended' },
      cancelled: { bg: '#FEE2E2', color: '#DC2626', text: 'Cancelled' },
    };

    const style = styles[status] || styles.confirmed;

    return (
      <span style={{
        padding: '4px 12px',
        backgroundColor: style.bg,
        color: style.color,
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '500',
      }}>
        {style.text}
      </span>
    );
  };

  const tickets = mockTickets[activeTab] || [];

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
          <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
            My Tickets
          </h1>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {[
            { id: 'upcoming', label: 'Upcoming', count: mockTickets.upcoming.length },
            { id: 'past', label: 'Past', count: mockTickets.past.length },
            { id: 'cancelled', label: 'Cancelled', count: mockTickets.cancelled.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: activeTab === tab.id ? '#10B981' : '#FFFFFF',
                color: activeTab === tab.id ? '#FFFFFF' : '#6B7280',
                border: activeTab === tab.id ? 'none' : '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
              {tab.count > 0 && (
                <span style={{
                  marginLeft: '6px',
                  padding: '2px 6px',
                  backgroundColor: activeTab === tab.id ? 'rgba(255,255,255,0.2)' : '#F3F4F6',
                  borderRadius: '10px',
                  fontSize: '11px',
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tickets List */}
      <div style={{ padding: '20px' }}>
        {tickets.length === 0 ? (
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '60px 20px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎫</div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              No {activeTab} tickets
            </h3>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
              {activeTab === 'upcoming' && "You don't have any upcoming events"}
              {activeTab === 'past' && "No past events to show"}
              {activeTab === 'cancelled' && "No cancelled tickets"}
            </p>
            {activeTab === 'upcoming' && (
              <button
                onClick={() => navigate('/events')}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Browse Events
              </button>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => navigate(`/ticket/${ticket.id}`, { state: { ticket } })}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Event Info */}
                <div style={{ padding: '16px', borderBottom: '1px dashed #E5E7EB' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '10px',
                      backgroundColor: '#F3F4F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                    }}>
                      {ticket.eventImage}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
                          {ticket.eventName}
                        </h3>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
                        📅 {ticket.date} • {ticket.time}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6B7280' }}>
                        📍 {ticket.venue}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Details */}
                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '2px' }}>
                        Ticket Type
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                        {ticket.ticketType} × {ticket.quantity}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '2px' }}>
                        Booking ID
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: '500', color: '#1F2937', fontFamily: 'monospace' }}>
                        {ticket.bookingId}
                      </div>
                    </div>
                  </div>

                  {activeTab === 'upcoming' && (
                    <div style={{
                      padding: '12px',
                      backgroundColor: '#F0FDF4',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ fontSize: '16px' }}>📱</span>
                      <span style={{ fontSize: '13px', color: '#047857', flex: 1 }}>
                        Show QR code at the venue for entry
                      </span>
                      <span style={{ fontSize: '20px' }}>→</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
