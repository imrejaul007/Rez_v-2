/**
 * Payment Gateway
 * Purpose: Complete payment flow with all methods
 * UI: Method selection, payment processing, success/failure
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PaymentMethodSelector from '../components/payment/PaymentMethodSelector';
import UPIPayment from '../components/payment/UPIPayment';
import CardPayment from '../components/payment/CardPayment';

const PaymentGateway = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    amount,
    orderId,
    description,
    coins,
    returnUrl,
  } = location.state || {};

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [step, setStep] = useState('method'); // method, payment, processing, success, failure

  if (!amount || !orderId) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>❌</div>
          <h2 style={{ fontSize: '20px', color: '#1F2937', marginBottom: '8px' }}>
            Invalid Payment Request
          </h2>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
            No payment information found
          </p>
          <button
            onClick={() => navigate('/')}
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
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
    setStep('payment');
  };

  const handlePaymentSuccess = (paymentDetails) => {
    setStep('success');

    // In production: Send to backend
    console.log('Payment successful:', {
      orderId,
      amount,
      method: paymentDetails.method,
      transactionId: paymentDetails.transactionId,
    });

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate(returnUrl || '/', {
        state: {
          paymentSuccess: true,
          orderId,
          transactionId: paymentDetails.transactionId,
        }
      });
    }, 3000);
  };

  const handlePaymentCancel = () => {
    setSelectedMethod(null);
    setStep('method');
  };

  const renderContent = () => {
    switch (step) {
      case 'method':
        return (
          <div style={{ maxWidth: '500px', width: '100%' }}>
            <PaymentMethodSelector
              selectedMethod={selectedMethod}
              onMethodSelect={handleMethodSelect}
            />
          </div>
        );

      case 'payment':
        return (
          <div style={{ maxWidth: '500px', width: '100%' }}>
            {selectedMethod === 'upi' && (
              <UPIPayment
                amount={amount - (coins || 0)}
                onSuccess={handlePaymentSuccess}
                onCancel={handlePaymentCancel}
              />
            )}
            {selectedMethod === 'card' && (
              <CardPayment
                amount={amount - (coins || 0)}
                onSuccess={handlePaymentSuccess}
                onCancel={handlePaymentCancel}
              />
            )}
            {selectedMethod === 'netbanking' && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏦</div>
                <p style={{ fontSize: '15px', color: '#6B7280' }}>
                  Net Banking integration coming soon
                </p>
                <button
                  onClick={handlePaymentCancel}
                  style={{
                    marginTop: '24px',
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
                  Choose Another Method
                </button>
              </div>
            )}
            {selectedMethod === 'wallet' && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>👛</div>
                <p style={{ fontSize: '15px', color: '#6B7280' }}>
                  Wallet integration coming soon
                </p>
                <button
                  onClick={handlePaymentCancel}
                  style={{
                    marginTop: '24px',
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
                  Choose Another Method
                </button>
              </div>
            )}
          </div>
        );

      case 'success':
        return (
          <div style={{
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            padding: '40px 20px',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              backgroundColor: '#D1FAE5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <span style={{ fontSize: '40px' }}>✓</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Payment Successful!
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px' }}>
              Your payment of ₹{amount.toLocaleString()} has been processed successfully
            </p>
            <div style={{
              padding: '16px',
              backgroundColor: '#F9FAFB',
              borderRadius: '8px',
              marginBottom: '24px',
            }}>
              <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '4px' }}>
                Order ID
              </div>
              <div style={{ fontSize: '14px', color: '#1F2937', fontWeight: '500', fontFamily: 'monospace' }}>
                {orderId}
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#9CA3AF' }}>
              Redirecting you back...
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      padding: '20px',
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {step === 'payment' && (
            <button
              onClick={handlePaymentCancel}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '18px' }}>←</span>
            </button>
          )}
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              {step === 'method' && 'Select Payment Method'}
              {step === 'payment' && 'Complete Payment'}
              {step === 'success' && 'Payment Successful'}
            </h1>
            {description && (
              <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0 0' }}>
                {description}
              </p>
            )}
          </div>
        </div>

        {step !== 'success' && (
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '2px' }}>TOTAL</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937' }}>
              ₹{amount.toLocaleString()}
            </div>
            {coins > 0 && (
              <div style={{ fontSize: '11px', color: '#10B981', marginTop: '2px' }}>
                -{coins} coins applied
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}>
        {renderContent()}
      </div>

      {/* Footer */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        textAlign: 'center',
        fontSize: '12px',
        color: '#9CA3AF',
      }}>
        <p>Powered by Razorpay • 100% Secure Payments</p>
      </div>
    </div>
  );
};

export default PaymentGateway;
