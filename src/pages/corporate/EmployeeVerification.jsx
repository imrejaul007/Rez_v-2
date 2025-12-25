/**
 * Employee Verification
 * Purpose: Verify corporate employee status for exclusive offers
 * UI: Company selection, email verification, benefits display
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: Company, 3: Verify Email, 4: Success

  const [formData, setFormData] = useState({
    company: '',
    employeeId: '',
    workEmail: '',
    designation: '',
    department: '',
    verificationCode: '',
  });

  const topCompanies = [
    { id: 1, name: 'Infosys', type: 'IT Services', verified: true, employees: '50K+' },
    { id: 2, name: 'TCS', type: 'IT Services', verified: true, employees: '60K+' },
    { id: 3, name: 'Wipro', type: 'IT Services', verified: true, employees: '45K+' },
    { id: 4, name: 'Accenture', type: 'Consulting', verified: true, employees: '30K+' },
    { id: 5, name: 'Google India', type: 'Technology', verified: true, employees: '5K+' },
    { id: 6, name: 'Amazon India', type: 'E-commerce', verified: true, employees: '100K+' },
  ];

  const handleSendCode = () => {
    if (!formData.workEmail.includes('@')) {
      alert('Please enter a valid work email');
      return;
    }
    alert(`Verification code sent to ${formData.workEmail}`);
  };

  const handleVerify = () => {
    if (formData.verificationCode.length === 6) {
      setStep(4);
    } else {
      alert('Please enter the 6-digit verification code');
    }
  };

  if (step === 4) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ maxWidth: '500px', textAlign: 'center' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
          }}>
            <span style={{ fontSize: '40px' }}>✓</span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
            Verification Complete!
          </h2>

          <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px', lineHeight: '1.6' }}>
            Your corporate employee status has been verified. You now have access to exclusive employee benefits!
          </p>

          <div style={{
            backgroundColor: '#EFF6FF',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#1E40AF', marginBottom: '12px' }}>
              Your Benefits
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#1E3A8A' }}>
              <li style={{ marginBottom: '8px' }}>15% extra discount on all purchases</li>
              <li style={{ marginBottom: '8px' }}>Access to corporate-exclusive deals</li>
              <li style={{ marginBottom: '8px' }}>BNPL (Buy Now Pay Later) up to ₹50,000</li>
              <li style={{ marginBottom: '8px' }}>Priority customer support</li>
              <li>Quarterly bonus rewards</li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/exclusive/corporate')}
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
              marginBottom: '12px',
            }}
          >
            Explore Corporate Perks
          </button>

          <button
            onClick={() => navigate('/')}
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
            Go to Home
          </button>
        </div>
      </div>
    );
  }

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
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
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              Employee Verification
            </h1>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '2px 0 0 0' }}>
              Step {step} of 3
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          height: '4px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${(step / 3) * 100}%`,
            height: '100%',
            backgroundColor: '#10B981',
            transition: 'width 0.3s',
          }} />
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {step === 1 && (
          <div>
            {/* Benefits */}
            <div style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',
              padding: '24px',
              borderRadius: '16px',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px' }}>
                💼 Corporate Benefits
              </h2>
              <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>
                Verify your employment and unlock exclusive corporate perks!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  💰 <strong>15% Extra Discount</strong> on all purchases
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  💳 <strong>BNPL Access</strong> up to ₹50,000
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  🎁 <strong>Exclusive Deals</strong> for corporate employees
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  ⚡ <strong>Priority Support</strong> & faster resolutions
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
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
              Start Verification
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Select Your Company
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>
              Choose from our verified corporate partners
            </p>

            {/* Company List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {topCompanies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => {
                    setFormData({ ...formData, company: company.name });
                    setStep(3);
                  }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#10B981';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '24px',
                      backgroundColor: '#F3F4F6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                    }}>
                      🏢
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937', marginBottom: '2px' }}>
                        {company.name}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6B7280' }}>
                        {company.type} • {company.employees} employees
                      </div>
                    </div>
                    {company.verified && (
                      <div style={{
                        padding: '4px 8px',
                        backgroundColor: '#D1FAE5',
                        color: '#047857',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '500',
                      }}>
                        ✓ Verified
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Company Option */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: '1px dashed #D1D5DB',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>
                Don't see your company?
              </div>
              <button
                onClick={() => {
                  const companyName = prompt('Enter your company name:');
                  if (companyName) {
                    setFormData({ ...formData, company: companyName });
                    setStep(3);
                  }
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#F9FAFB',
                  color: '#374151',
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Add Manually
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Verify Work Email
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>
              We'll send a verification code to your corporate email
            </p>

            {/* Selected Company */}
            <div style={{
              backgroundColor: '#ECFDF5',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}>
              <div style={{ fontSize: '12px', color: '#047857', marginBottom: '2px' }}>
                Selected Company
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#065F46' }}>
                {formData.company}
              </div>
            </div>

            {/* Work Email */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '20px',
            }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Work Email Address *
                </label>
                <input
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="your.name@company.com"
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
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>
                  Must be your official corporate email address
                </div>
              </div>

              <button
                onClick={handleSendCode}
                disabled={!formData.workEmail}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: !formData.workEmail ? '#D1D5DB' : '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: !formData.workEmail ? 'not-allowed' : 'pointer',
                  marginBottom: '16px',
                }}
              >
                Send Verification Code
              </button>

              <div style={{ height: '1px', backgroundColor: '#E5E7EB', marginBottom: '16px' }} />

              {/* Verification Code */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Verification Code *
                </label>
                <input
                  type="text"
                  value={formData.verificationCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
                    setFormData({ ...formData, verificationCode: value });
                  }}
                  placeholder="Enter 6-digit code"
                  maxLength="6"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '18px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                    textAlign: 'center',
                    letterSpacing: '8px',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>

            <button
              onClick={handleVerify}
              disabled={formData.verificationCode.length !== 6}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: formData.verificationCode.length !== 6 ? '#D1D5DB' : '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: formData.verificationCode.length !== 6 ? 'not-allowed' : 'pointer',
              }}
            >
              Verify & Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeVerification;
