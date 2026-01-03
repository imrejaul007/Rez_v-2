/**
 * Ticket Detail
 * Purpose: Display individual ticket with QR code for entry
 * UI: Large QR code, ticket info, download/share options
 */

import { useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const TicketDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticketId } = useParams();
  const { ticket: ticketFromState } = location.state || {};

  const [brightness, setBrightness] = useState(100);

  // Mock ticket data
  const ticket = ticketFromState || {
    id: ticketId,
    eventName: 'Sunburn Arena ft. Alan Walker',
    eventImage: '🎵',
    date: 'Dec 31, 2024',
    time: '8:00 PM',
    venue: 'Phoenix Marketcity, Bangalore',
    venueAddress: 'Whitefield Main Road, Bangalore - 560048',
    ticketType: 'VIP Pass',
    quantity: 2,
    bookingId: 'EVT1234567890',
    qrCode: 'QR_EVT1234567890',
    status: 'confirmed',
    totalAmount: 6998,
    bookedDate: 'Dec 20, 2024',
    attendeeName: 'Rejaul Karim',
    attendeeEmail: 'rejaul@example.com',
    attendeePhone: '+91 9876543210',
  };

  const handleDownload = () => {
    alert('Ticket downloaded to your device');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Ticket for ${ticket.eventName}`,
        text: `Check out my ticket for ${ticket.eventName}!`,
        url: window.location.href,
      });
    } else {
      alert('Sharing not supported on this device');
    }
  };

  const handleAddToCalendar = () => {
    alert('Event added to your calendar');
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      paddingBottom: '100px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
          <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0, flex: 1 }}>
            Ticket Details
          </h1>
          <button
            onClick={handleShare}
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
              fontSize: '18px',
            }}
          >
            ↗
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {/* QR Code Section */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '32px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
          textAlign: 'center',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'inline-block',
              padding: '4px 12px',
              backgroundColor: '#D1FAE5',
              color: '#047857',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500',
              marginBottom: '16px',
            }}>
              ✓ Confirmed
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              {ticket.eventName}
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>
              {ticket.date} • {ticket.time}
            </p>
          </div>

          {/* QR Code */}
          <div style={{
            width: '280px',
            height: '280px',
            margin: '0 auto 20px',
            backgroundColor: '#FFFFFF',
            border: '4px solid #10B981',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            filter: `brightness(${brightness}%)`,
          }}>
            {/* Placeholder QR Code - In production, use qrcode.react or similar */}
            <div style={{
              width: '240px',
              height: '240px',
              background: `
                repeating-linear-gradient(0deg, #000 0px, #000 10px, transparent 10px, transparent 20px),
                repeating-linear-gradient(90deg, #000 0px, #000 10px, transparent 10px, transparent 20px)
              `,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: '#10B981',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
              }}>
                {ticket.eventImage}
              </div>
            </div>
          </div>

          {/* Brightness Control */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              justifyContent: 'center',
            }}>
              <span style={{ fontSize: '14px', color: '#6B7280' }}>☀️</span>
              <input
                type="range"
                min="50"
                max="150"
                value={brightness}
                onChange={(e) => setBrightness(parseInt(e.target.value))}
                style={{ width: '200px' }}
              />
              <span style={{ fontSize: '14px', color: '#6B7280' }}>🔆</span>
            </div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '4px' }}>
              Adjust brightness for better scanning
            </div>
          </div>

          <div style={{
            padding: '16px',
            backgroundColor: '#F0FDF4',
            borderRadius: '12px',
            display: 'flex',
            gap: '12px',
            textAlign: 'left',
          }}>
            <span style={{ fontSize: '24px' }}>📱</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#047857', marginBottom: '4px' }}>
                How to use this ticket
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#065F46' }}>
                <li>Show this QR code at the venue entrance</li>
                <li>Keep screen brightness high for quick scanning</li>
                <li>Valid for {ticket.quantity} person{ticket.quantity > 1 ? 's' : ''}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Event Details
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                📍 Venue
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937', fontWeight: '500' }}>
                {ticket.venue}
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>
                {ticket.venueAddress}
              </div>
              <button
                onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(ticket.venue)}`, '_blank')}
                style={{
                  marginTop: '8px',
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
                Get Directions →
              </button>
            </div>

            <div style={{ height: '1px', backgroundColor: '#E5E7EB' }} />

            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                📅 Date & Time
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937', fontWeight: '500' }}>
                {ticket.date} at {ticket.time}
              </div>
              <button
                onClick={handleAddToCalendar}
                style={{
                  marginTop: '8px',
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
                Add to Calendar
              </button>
            </div>

            <div style={{ height: '1px', backgroundColor: '#E5E7EB' }} />

            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                🎫 Ticket Type
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937', fontWeight: '500' }}>
                {ticket.ticketType} × {ticket.quantity}
              </div>
            </div>
          </div>
        </div>

        {/* Booking Info */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Booking Information
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>Booking ID</span>
              <span style={{ fontSize: '13px', color: '#1F2937', fontWeight: '500', fontFamily: 'monospace' }}>
                {ticket.bookingId}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>Booked On</span>
              <span style={{ fontSize: '13px', color: '#1F2937', fontWeight: '500' }}>
                {ticket.bookedDate}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>Total Amount</span>
              <span style={{ fontSize: '14px', color: '#10B981', fontWeight: '600' }}>
                ₹{ticket.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Attendee Info */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Attendee Details
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                Name
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937' }}>
                {ticket.attendeeName}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                Email
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937' }}>
                {ticket.attendeeEmail}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                Phone
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937' }}>
                {ticket.attendeePhone}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        padding: '16px 20px',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '12px' }}>
          <button
            onClick={handleDownload}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>📥</span>
            Download
          </button>
          <button
            onClick={() => navigate('/help')}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#10B981',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>💬</span>
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
