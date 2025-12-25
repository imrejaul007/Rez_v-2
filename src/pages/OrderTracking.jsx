/**
 * Order Tracking
 * Purpose: Real-time order tracking with map and timeline
 * UI: Order status, delivery map, timeline, driver info
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderTracking = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const order = {
    id: orderId || 'ORD123456',
    status: 'out_for_delivery',
    placedDate: 'Dec 25, 2024',
    placedTime: '10:30 AM',
    estimatedDelivery: 'Dec 25, 2024',
    estimatedTime: '6:00 PM - 8:00 PM',
    items: [
      { name: 'iPhone 15 Pro Max', quantity: 1, image: '📱' },
      { name: 'AirPods Pro', quantity: 1, image: '🎧' },
    ],
    totalAmount: 145890,
    deliveryAddress: {
      name: 'Rejaul Karim',
      address: '123 MG Road, Koramangala',
      city: 'Bangalore',
      pincode: '560034',
      phone: '+91 9876543210',
    },
    driver: {
      name: 'Rajesh Kumar',
      phone: '+91 9988776655',
      vehicle: 'KA 01 AB 1234',
      rating: 4.8,
    },
    timeline: [
      { status: 'placed', label: 'Order Placed', time: 'Dec 25, 10:30 AM', completed: true },
      { status: 'confirmed', label: 'Order Confirmed', time: 'Dec 25, 10:45 AM', completed: true },
      { status: 'packed', label: 'Packed', time: 'Dec 25, 12:00 PM', completed: true },
      { status: 'shipped', label: 'Shipped', time: 'Dec 25, 2:00 PM', completed: true },
      { status: 'out_for_delivery', label: 'Out for Delivery', time: 'Dec 25, 4:30 PM', completed: true, active: true },
      { status: 'delivered', label: 'Delivered', time: 'Pending', completed: false },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return '#10B981';
      case 'out_for_delivery': return '#F59E0B';
      case 'shipped': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getStatusMessage = (status) => {
    switch (status) {
      case 'placed': return 'Your order has been placed successfully';
      case 'confirmed': return 'Seller has confirmed your order';
      case 'packed': return 'Your order has been packed';
      case 'shipped': return 'Your order is on the way';
      case 'out_for_delivery': return 'Out for delivery - Arriving soon!';
      case 'delivered': return 'Order has been delivered';
      default: return 'Processing your order';
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
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              Track Order
            </h1>
            <div style={{ fontSize: '12px', color: '#6B7280', fontFamily: 'monospace' }}>
              {order.id}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        {/* Status Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '28px',
              background: `linear-gradient(135deg, ${getStatusColor(order.status)} 0%, ${getStatusColor(order.status)}dd 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              🚚
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                {order.timeline.find(t => t.active)?.label || 'Processing'}
              </div>
              <div style={{ fontSize: '13px', color: '#6B7280' }}>
                {getStatusMessage(order.status)}
              </div>
            </div>
          </div>

          <div style={{
            padding: '12px',
            backgroundColor: '#F0FDF4',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#047857',
          }}>
            📦 Expected delivery: <strong>{order.estimatedDelivery}</strong> by <strong>{order.estimatedTime}</strong>
          </div>
        </div>

        {/* Map Placeholder */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '0',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '250px',
            background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '8px' }}>📍</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0369A1', marginBottom: '4px' }}>
              Live Location Tracking
            </div>
            <div style={{ fontSize: '12px', color: '#075985' }}>
              ~8.5 km away from you
            </div>

            {/* Mock route line */}
            <div style={{
              position: 'absolute',
              top: '30%',
              left: '20%',
              right: '20%',
              height: '3px',
              background: 'linear-gradient(90deg, #10B981 0%, #10B981 60%, #D1D5DB 60%, #D1D5DB 100%)',
              borderRadius: '2px',
            }} />
          </div>

          {/* Driver Info */}
          <div style={{ padding: '16px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
              Delivery Partner
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '24px',
                backgroundColor: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}>
                👨
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937', marginBottom: '2px' }}>
                  {order.driver.name}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  {order.driver.vehicle} • {order.driver.rating} ⭐
                </div>
              </div>
              <button
                onClick={() => window.location.href = `tel:${order.driver.phone}`}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>📞</span>
                Call
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '20px' }}>
            Order Timeline
          </h3>

          <div style={{ position: 'relative' }}>
            {order.timeline.map((step, index) => (
              <div
                key={step.status}
                style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: index < order.timeline.length - 1 ? '24px' : 0,
                  position: 'relative',
                }}
              >
                {/* Vertical Line */}
                {index < order.timeline.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '15px',
                    top: '32px',
                    bottom: '-24px',
                    width: '2px',
                    backgroundColor: step.completed ? '#10B981' : '#E5E7EB',
                  }} />
                )}

                {/* Status Icon */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  backgroundColor: step.active ? '#10B981' : step.completed ? '#D1FAE5' : '#F3F4F6',
                  border: step.active ? '3px solid #ECFDF5' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {step.completed ? (
                    <span style={{ fontSize: '14px', color: step.active ? '#FFFFFF' : '#047857' }}>✓</span>
                  ) : (
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '6px',
                      backgroundColor: '#D1D5DB',
                    }} />
                  )}
                </div>

                {/* Status Info */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: step.active ? '600' : '500',
                    color: step.active ? '#10B981' : step.completed ? '#1F2937' : '#9CA3AF',
                    marginBottom: '4px',
                  }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: step.completed ? '#6B7280' : '#9CA3AF',
                  }}>
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Items */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '20px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Order Items ({order.items.length})
          </h3>

          {order.items.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '12px',
                paddingBottom: '12px',
                marginBottom: index < order.items.length - 1 ? '12px' : 0,
                borderBottom: index < order.items.length - 1 ? '1px solid #F3F4F6' : 'none',
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '8px',
                backgroundColor: '#F9FAFB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
              }}>
                {item.image}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  Qty: {item.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Address */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
            Delivery Address
          </h3>

          <div style={{ fontSize: '14px', color: '#1F2937', lineHeight: '1.6' }}>
            <div style={{ fontWeight: '600', marginBottom: '8px' }}>
              {order.deliveryAddress.name}
            </div>
            <div style={{ color: '#6B7280', marginBottom: '4px' }}>
              {order.deliveryAddress.address}
            </div>
            <div style={{ color: '#6B7280', marginBottom: '8px' }}>
              {order.deliveryAddress.city} - {order.deliveryAddress.pincode}
            </div>
            <div style={{ color: '#6B7280' }}>
              📞 {order.deliveryAddress.phone}
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
            onClick={() => navigate('/help')}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#FFFFFF',
              color: '#374151',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Need Help?
          </button>
          <button
            onClick={() => navigate(`/order/${order.id}`)}
            style={{
              flex: 1,
              padding: '14px',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
