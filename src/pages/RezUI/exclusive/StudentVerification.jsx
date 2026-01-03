/**
 * Student Verification
 * Purpose: Verify student status for exclusive offers
 * UI: College selection, ID upload, verification status
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: College, 3: Upload ID, 4: Success

  const [formData, setFormData] = useState({
    college: '',
    studentId: '',
    course: '',
    year: '',
    idCardImage: null,
  });

  const topColleges = [
    { id: 1, name: 'IIT Bangalore', location: 'Bangalore', verified: true },
    { id: 2, name: 'BITS Pilani', location: 'Pilani', verified: true },
    { id: 3, name: 'Christ University', location: 'Bangalore', verified: true },
    { id: 4, name: 'St. Joseph\'s College', location: 'Bangalore', verified: true },
    { id: 5, name: 'Mount Carmel College', location: 'Bangalore', verified: true },
    { id: 6, name: 'Jain University', location: 'Bangalore', verified: true },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, idCardImage: file });
    }
  };

  const handleSubmit = () => {
    if (step === 3) {
      // Submit verification
      setStep(4);
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
            backgroundColor: '#D1FAE5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <span style={{ fontSize: '40px' }}>✓</span>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '12px' }}>
            Verification Submitted!
          </h2>

          <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '24px', lineHeight: '1.6' }}>
            We'll verify your student status within 24-48 hours. You'll receive a notification once approved.
          </p>

          <div style={{
            backgroundColor: '#EFF6FF',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '24px',
            textAlign: 'left',
          }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#1E40AF', marginBottom: '12px' }}>
              What happens next?
            </div>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#1E3A8A' }}>
              <li style={{ marginBottom: '8px' }}>Our team will verify your college ID</li>
              <li style={{ marginBottom: '8px' }}>You'll get a notification once approved</li>
              <li style={{ marginBottom: '8px' }}>Access exclusive student offers & discounts</li>
              <li>Join the campus ambassador program (optional)</li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/exclusive/student')}
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
            Browse Student Zone
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
              Student Verification
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
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              padding: '24px',
              borderRadius: '16px',
              color: '#FFFFFF',
              marginBottom: '24px',
            }}>
              <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px' }}>
                🎓 Student Benefits
              </h2>
              <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>
                Get verified and unlock exclusive perks just for students!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  💰 <strong>Extra 10% off</strong> on all purchases
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  🎉 <strong>Exclusive events</strong> & college fest access
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  👥 <strong>Campus Ambassador</strong> earning opportunities
                </div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}>
                  🎁 <strong>Birthday specials</strong> & semester rewards
                </div>
              </div>
            </div>

            {/* How it works */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '24px',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
                How Verification Works
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '16px',
                    backgroundColor: '#ECFDF5',
                    color: '#047857',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    flexShrink: 0,
                  }}>
                    1
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                      Select Your College
                    </div>
                    <div style={{ fontSize: '13px', color: '#6B7280' }}>
                      Choose from our partner institutions
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '16px',
                    backgroundColor: '#ECFDF5',
                    color: '#047857',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    flexShrink: 0,
                  }}>
                    2
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                      Upload Student ID
                    </div>
                    <div style={{ fontSize: '13px', color: '#6B7280' }}>
                      Clear photo of your college ID card
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '16px',
                    backgroundColor: '#ECFDF5',
                    color: '#047857',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    flexShrink: 0,
                  }}>
                    3
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                      Get Verified
                    </div>
                    <div style={{ fontSize: '13px', color: '#6B7280' }}>
                      Approval within 24-48 hours
                    </div>
                  </div>
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
              Select Your College
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>
              Choose from our verified partner institutions
            </p>

            {/* College List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {topColleges.map((college) => (
                <div
                  key={college.id}
                  onClick={() => {
                    setFormData({ ...formData, college: college.name });
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
                      🎓
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '15px', fontWeight: '600', color: '#1F2937', marginBottom: '2px' }}>
                        {college.name}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6B7280' }}>
                        {college.location}
                      </div>
                    </div>
                    {college.verified && (
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

            {/* Other College Option */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '16px',
              borderRadius: '12px',
              border: '1px dashed #D1D5DB',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '14px', color: '#6B7280', marginBottom: '8px' }}>
                Don't see your college?
              </div>
              <button
                onClick={() => {
                  const collegeName = prompt('Enter your college name:');
                  if (collegeName) {
                    setFormData({ ...formData, college: collegeName });
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
              Upload Student ID
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px' }}>
              Provide a clear photo of your college ID card
            </p>

            {/* Selected College */}
            <div style={{
              backgroundColor: '#ECFDF5',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
            }}>
              <div style={{ fontSize: '12px', color: '#047857', marginBottom: '2px' }}>
                Selected College
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#065F46' }}>
                {formData.college}
              </div>
            </div>

            {/* Upload Area */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '2px dashed #D1D5DB',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              {formData.idCardImage ? (
                <div>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>✓</div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#10B981', marginBottom: '4px' }}>
                    ID Card Uploaded
                  </div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
                    {formData.idCardImage.name}
                  </div>
                  <button
                    onClick={() => setFormData({ ...formData, idCardImage: null })}
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
                    Change Photo
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>📸</div>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '4px' }}>
                    Upload ID Card Photo
                  </div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
                    JPG, PNG or PDF (Max 5MB)
                  </div>
                  <label style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#10B981',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}>
                    Choose File
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
              )}
            </div>

            {/* Guidelines */}
            <div style={{
              backgroundColor: '#EFF6FF',
              padding: '16px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '500', color: '#1E40AF', marginBottom: '8px' }}>
                📋 Photo Guidelines
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#1E3A8A' }}>
                <li>Ensure all details are clearly visible</li>
                <li>Photo should not be blurry or cropped</li>
                <li>ID card should be valid and not expired</li>
                <li>Your name and college logo must be visible</li>
              </ul>
            </div>

            {/* Student Details */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '20px',
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
                Additional Details
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '6px',
                }}>
                  Student ID Number
                </label>
                <input
                  type="text"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  placeholder="Enter your student ID"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    fontSize: '14px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px',
                  }}>
                    Course
                  </label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g., B.Tech"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '14px',
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
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px',
                  }}>
                    Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '14px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <option value="">Select</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="pg">PG</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!formData.idCardImage || !formData.studentId || !formData.course || !formData.year}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: (!formData.idCardImage || !formData.studentId || !formData.course || !formData.year) ? '#D1D5DB' : '#10B981',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                cursor: (!formData.idCardImage || !formData.studentId || !formData.course || !formData.year) ? 'not-allowed' : 'pointer',
              }}
            >
              Submit for Verification
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentVerification;
