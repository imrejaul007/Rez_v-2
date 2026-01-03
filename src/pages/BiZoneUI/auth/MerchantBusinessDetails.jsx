/**
 * Merchant Business Details - Steps 3-5
 * Purpose: Complete merchant onboarding with documents, bank details, and store setup
 * UI: Document upload, bank account, pricing tier selection
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MerchantNav from '../../components/merchant/MerchantNav';

const MerchantBusinessDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData: initialData } = location.state || {};

  const [step, setStep] = useState(3); // Steps 3-5
  const [formData, setFormData] = useState({
    ...initialData,
    // Step 3: Documents
    gstNumber: '',
    panNumber: '',
    gstCertificate: null,
    panCard: null,
    businessLicense: null,
    // Step 4: Bank Details
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    // Step 5: Store Setup
    selectedTier: '',
    storeAddress: '',
    storeCity: '',
    storeState: '',
    storePincode: '',
  });

  const pricingTiers = [
    {
      id: 'free',
      name: 'Free',
      commission: '20%',
      features: ['Basic listing', 'Standard support', 'Self-managed offers'],
      price: '₹0/month',
      popular: false,
    },
    {
      id: 'basic',
      name: 'Basic',
      commission: '18%',
      features: ['Priority listing', 'Marketing support', 'Analytics dashboard', 'Customer insights'],
      price: '₹999/month',
      popular: false,
    },
    {
      id: 'golden',
      name: 'Golden',
      commission: '16%',
      features: ['Top placement', 'Dedicated manager', 'Campaign creation', 'Advanced analytics', 'QR codes'],
      price: '₹2,499/month',
      popular: true,
    },
    {
      id: 'diamond',
      name: 'Diamond',
      commission: '15%',
      features: ['Premium placement', 'VIP support', 'Custom campaigns', 'Priority events', 'Full marketing suite', 'API access'],
      price: '₹4,999/month',
      popular: false,
    },
  ];

  const handleFileUpload = (field, file) => {
    setFormData({ ...formData, [field]: file });
  };

  const isStep3Valid = () => {
    return (
      formData.gstNumber.length > 0 &&
      formData.panNumber.length > 0 &&
      formData.gstCertificate &&
      formData.panCard
    );
  };

  const isStep4Valid = () => {
    return (
      formData.accountHolderName.length > 0 &&
      formData.accountNumber.length > 0 &&
      formData.ifscCode.length > 0 &&
      formData.bankName.length > 0
    );
  };

  const isStep5Valid = () => {
    return (
      formData.selectedTier.length > 0 &&
      formData.storeAddress.length > 0 &&
      formData.storeCity.length > 0 &&
      formData.storeState.length > 0 &&
      formData.storePincode.length === 6
    );
  };

  const handleContinue = () => {
    if (step === 3 && isStep3Valid()) {
      setStep(4);
    } else if (step === 4 && isStep4Valid()) {
      setStep(5);
    } else if (step === 5 && isStep5Valid()) {
      navigate('/merchant/success', { state: { formData } });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', paddingBottom: '100px' }}>
      <MerchantNav />
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            onClick={() => step > 3 ? setStep(step - 1) : navigate(-1)}
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
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 20px' }}>
        {step === 3 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Business Documents
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              Upload your business registration documents
            </p>

            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '20px',
            }}>
              {/* GST Number */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  GST Number *
                </label>
                <input
                  type="text"
                  value={formData.gstNumber}
                  onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value.toUpperCase() })}
                  placeholder="22AAAAA0000A1Z5"
                  maxLength="15"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* GST Certificate Upload */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  GST Certificate *
                </label>
                <div style={{
                  border: '2px dashed #D1D5DB',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: formData.gstCertificate ? '#F0FDF4' : '#FAFAFA',
                }}>
                  {formData.gstCertificate ? (
                    <div>
                      <div style={{ fontSize: '32px', marginBottom: '8px' }}>✓</div>
                      <div style={{ fontSize: '14px', color: '#047857', marginBottom: '8px' }}>
                        {formData.gstCertificate.name}
                      </div>
                      <button
                        onClick={() => handleFileUpload('gstCertificate', null)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D1D5DB',
                          borderRadius: '6px',
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '32px', marginBottom: '8px' }}>📄</div>
                      <label style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        backgroundColor: '#10B981',
                        color: '#FFFFFF',
                        borderRadius: '6px',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}>
                        Upload GST Certificate
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('gstCertificate', e.target.files[0])}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px' }}>
                        PDF, JPG or PNG (Max 5MB)
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* PAN Number */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  PAN Number *
                </label>
                <input
                  type="text"
                  value={formData.panNumber}
                  onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                  placeholder="ABCDE1234F"
                  maxLength="10"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* PAN Card Upload */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  PAN Card *
                </label>
                <div style={{
                  border: '2px dashed #D1D5DB',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: formData.panCard ? '#F0FDF4' : '#FAFAFA',
                }}>
                  {formData.panCard ? (
                    <div>
                      <div style={{ fontSize: '32px', marginBottom: '8px' }}>✓</div>
                      <div style={{ fontSize: '14px', color: '#047857', marginBottom: '8px' }}>
                        {formData.panCard.name}
                      </div>
                      <button
                        onClick={() => handleFileUpload('panCard', null)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #D1D5DB',
                          borderRadius: '6px',
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        Change File
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '32px', marginBottom: '8px' }}>📄</div>
                      <label style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        backgroundColor: '#10B981',
                        color: '#FFFFFF',
                        borderRadius: '6px',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}>
                        Upload PAN Card
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileUpload('panCard', e.target.files[0])}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '8px' }}>
                        PDF, JPG or PNG (Max 5MB)
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Bank Account Details
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              For receiving your earnings
            </p>

            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Account Holder Name *
                </label>
                <input
                  type="text"
                  value={formData.accountHolderName}
                  onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
                  placeholder="As per bank records"
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

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Account Number *
                </label>
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData({ ...formData, accountNumber: value });
                  }}
                  placeholder="Enter account number"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  IFSC Code *
                </label>
                <input
                  type="text"
                  value={formData.ifscCode}
                  onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value.toUpperCase() })}
                  placeholder="SBIN0001234"
                  maxLength="11"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Bank Name *
                </label>
                <input
                  type="text"
                  value={formData.bankName}
                  onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                  placeholder="e.g., State Bank of India"
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
            </div>

            <div style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: '#FEF3C7',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#92400E',
            }}>
              🔒 Your bank details are encrypted and secure
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              Choose Your Plan & Setup Store
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
              Select a pricing tier and complete your store information
            </p>

            {/* Pricing Tiers */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
                Select Pricing Tier
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setFormData({ ...formData, selectedTier: tier.id })}
                    style={{
                      position: 'relative',
                      padding: '20px',
                      backgroundColor: formData.selectedTier === tier.id ? '#ECFDF5' : '#FFFFFF',
                      border: formData.selectedTier === tier.id ? '2px solid #10B981' : '1px solid #E5E7EB',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {tier.popular && (
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '20px',
                        padding: '4px 12px',
                        backgroundColor: '#F59E0B',
                        color: '#FFFFFF',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}>
                        MOST POPULAR
                      </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                          {tier.name}
                        </div>
                        <div style={{ fontSize: '13px', color: '#6B7280' }}>
                          Commission: {tier.commission} per transaction
                        </div>
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: '#10B981' }}>
                        {tier.price}
                      </div>
                    </div>

                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#6B7280' }}>
                      {tier.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '4px' }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Address */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
                Store Address
              </h3>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Street Address *
                </label>
                <input
                  type="text"
                  value={formData.storeAddress}
                  onChange={(e) => setFormData({ ...formData, storeAddress: e.target.value })}
                  placeholder="Building number, street name"
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '8px',
                  }}>
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.storeCity}
                    onChange={(e) => setFormData({ ...formData, storeCity: e.target.value })}
                    placeholder="City"
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

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '8px',
                  }}>
                    State *
                  </label>
                  <input
                    type="text"
                    value={formData.storeState}
                    onChange={(e) => setFormData({ ...formData, storeState: e.target.value })}
                    placeholder="State"
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
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  PIN Code *
                </label>
                <input
                  type="text"
                  value={formData.storePincode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
                    setFormData({ ...formData, storePincode: value });
                  }}
                  placeholder="560001"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    fontFamily: 'monospace',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div style={{ marginTop: '32px' }}>
          <button
            onClick={handleContinue}
            disabled={
              (step === 3 && !isStep3Valid()) ||
              (step === 4 && !isStep4Valid()) ||
              (step === 5 && !isStep5Valid())
            }
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor:
                (step === 3 && !isStep3Valid()) ||
                (step === 4 && !isStep4Valid()) ||
                (step === 5 && !isStep5Valid())
                  ? '#D1D5DB'
                  : '#10B981',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#FFFFFF',
              cursor:
                (step === 3 && !isStep3Valid()) ||
                (step === 4 && !isStep4Valid()) ||
                (step === 5 && !isStep5Valid())
                  ? 'not-allowed'
                  : 'pointer',
            }}
          >
            {step === 5 ? 'Complete Setup' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantBusinessDetails;
