/**
 * Merchant Signup - Step 1
 * Purpose: Initial merchant registration
 * UI: Business type selection and basic info
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
  });

  const businessTypes = [
    { id: 'retail', name: 'Retail Store', icon: '🏪', description: 'Physical retail shop' },
    { id: 'restaurant', name: 'Restaurant/Café', icon: '🍽️', description: 'Food & dining' },
    { id: 'service', name: 'Service Provider', icon: '🛠️', description: 'Salon, spa, etc.' },
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒', description: 'Online store' },
    { id: 'events', name: 'Events/Entertainment', icon: '🎉', description: 'Event organizer' },
    { id: 'other', name: 'Other', icon: '📦', description: 'Other business type' },
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStep1Valid = () => {
    return formData.businessType !== '';
  };

  const isStep2Valid = () => {
    return (
      formData.businessName.length > 0 &&
      formData.ownerName.length > 0 &&
      formData.email.length > 0 &&
      formData.phone.length === 10
    );
  };

  const handleContinue = () => {
    if (step === 1 && isStep1Valid()) {
      setStep(2);
    } else if (step === 2 && isStep2Valid()) {
      navigate('/merchant/business-details', { state: { formData } });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      <MerchantNav />
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
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
        )}
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
            Become a ReZ Partner
          </h1>
          <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0 0' }}>
            Step {step} of 5
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '0 20px 16px',
        borderBottom: '1px solid #E5E7EB',
      }}>
        <div style={{
          height: '4px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${(step / 5) * 100}%`,
            height: '100%',
            backgroundColor: '#10B981',
            transition: 'width 0.3s',
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '32px 20px',
      }}>
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              What type of business do you have?
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              Select the category that best describes your business
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}>
              {businessTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => handleInputChange('businessType', type.id)}
                  style={{
                    padding: '20px',
                    backgroundColor: formData.businessType === type.id ? '#ECFDF5' : '#FFFFFF',
                    border: formData.businessType === type.id ? '2px solid #10B981' : '1px solid #E5E7EB',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (formData.businessType !== type.id) {
                      e.currentTarget.style.borderColor = '#D1D5DB';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (formData.businessType !== type.id) {
                      e.currentTarget.style.borderColor = '#E5E7EB';
                    }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                  }}>
                    <div style={{ fontSize: '32px' }}>{type.icon}</div>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#1F2937',
                    }}>
                      {type.name}
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6B7280', margin: 0 }}>
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Tell us about your business
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              Basic information to get started
            </p>

            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              {/* Business Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Enter your business name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Owner Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Owner Name *
                </label>
                <input
                  type="text"
                  value={formData.ownerName}
                  onChange={(e) => handleInputChange('ownerName', e.target.value)}
                  placeholder="Enter owner's full name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="business@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Phone Number *
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    padding: '12px 16px',
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: '#6B7280',
                  }}>
                    +91
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                      handleInputChange('phone', value);
                    }}
                    placeholder="9876543210"
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10B981'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div style={{ marginTop: '32px' }}>
          <button
            onClick={handleContinue}
            disabled={(step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid())}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: ((step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid())) ? '#D1D5DB' : '#10B981',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#FFFFFF',
              cursor: ((step === 1 && !isStep1Valid()) || (step === 2 && !isStep2Valid())) ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            Continue
          </button>
        </div>

        {/* Help Text */}
        <div style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#F0F9FF',
          borderRadius: '8px',
          display: 'flex',
          gap: '12px',
        }}>
          <span style={{ fontSize: '20px' }}>💡</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#0369A1', marginBottom: '4px' }}>
              Why join ReZ?
            </div>
            <ul style={{ margin: '8px 0', paddingLeft: '20px', fontSize: '13px', color: '#075985' }}>
              <li>Reach thousands of local customers</li>
              <li>No upfront costs - pay only on success</li>
              <li>Complete marketing support</li>
              <li>Get listed in 24 hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSignup;
