/**
 * Merchant Success
 * Purpose: Onboarding completion confirmation
 * UI: Success message, next steps, dashboard access
 */

import { useNavigate } from 'react-router-dom';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <MerchantNav />
      <div style={{ maxWidth: '600px', width: '100%' }}>
        {/* Success Icon */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
        }}>
          <span style={{ fontSize: '56px' }}>✓</span>
        </div>

        {/* Success Message */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1F2937', marginBottom: '12px' }}>
            Welcome to ReZ! 🎉
          </h1>
          <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
            Your application has been submitted successfully. Our team will review and activate your account within 24-48 hours.
          </p>
        </div>

        {/* What's Next */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          marginBottom: '24px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '20px' }}>
            What happens next?
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                1
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                  Document Verification
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>
                  Our team will verify your business documents
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                2
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                  Account Activation
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>
                  You'll receive an email once your account is activated
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                3
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                  Onboarding Call
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>
                  Schedule a call with your dedicated account manager
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#ECFDF5',
                color: '#047857',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                flexShrink: 0,
              }}>
                4
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                  Start Selling
                </div>
                <div style={{ fontSize: '13px', color: '#6B7280' }}>
                  List your products/services and start accepting orders
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <div style={{
          backgroundColor: '#EFF6FF',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '24px' }}>📚</span>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E40AF', margin: 0 }}>
              While you wait...
            </h3>
          </div>

          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#1E3A8A' }}>
            <li style={{ marginBottom: '8px' }}>Download the ReZ Merchant App</li>
            <li style={{ marginBottom: '8px' }}>Prepare product photos and descriptions</li>
            <li style={{ marginBottom: '8px' }}>Set up your delivery/service area</li>
            <li>Read our merchant success guide</li>
          </ul>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Go to Homepage
          </button>

          <button
            onClick={() => window.open('https://merchant.rez.app/guide', '_blank')}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#FFFFFF',
              color: '#374151',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Read Merchant Guide
          </button>
        </div>

        {/* Support */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#FFFBEB',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '13px', color: '#92400E', marginBottom: '8px' }}>
            Need help? Contact us
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href="mailto:merchants@rez.app"
              style={{ fontSize: '13px', color: '#D97706', textDecoration: 'none', fontWeight: '500' }}
            >
              merchants@rez.app
            </a>
            <span style={{ color: '#D1D5DB' }}>•</span>
            <a
              href="tel:+918800000000"
              style={{ fontSize: '13px', color: '#D97706', textDecoration: 'none', fontWeight: '500' }}
            >
              +91 88000 00000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSuccess;
