/**
 * Referral Dashboard
 * Purpose: User referral system - invite & earn
 * UI: Referral code, share options, tracking, rewards
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReferralDashboard = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Mock user data
  const referralData = {
    code: 'REZ2024XYZ',
    referralLink: 'https://rez.app/r/REZ2024XYZ',
    totalReferrals: 12,
    successfulReferrals: 8,
    pendingReferrals: 4,
    totalEarned: 2400,
    nextMilestone: { target: 20, reward: 500 },
    referrals: [
      { id: 1, name: 'Rahul S.', status: 'completed', reward: 300, date: '2 days ago' },
      { id: 2, name: 'Priya M.', status: 'completed', reward: 300, date: '5 days ago' },
      { id: 3, name: 'Amit K.', status: 'pending', reward: 0, date: '1 week ago' },
      { id: 4, name: 'Sneha R.', status: 'completed', reward: 300, date: '2 weeks ago' },
    ],
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralData.referralLink);
    alert('Link copied!');
  };

  const handleShare = (platform) => {
    const message = encodeURIComponent(
      `Join ReZ and start saving on every purchase! Use my referral code ${referralData.code} and get ₹100 bonus. ${referralData.referralLink}`
    );

    const urls = {
      whatsapp: `https://wa.me/?text=${message}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${referralData.referralLink}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}`,
      telegram: `https://t.me/share/url?url=${referralData.referralLink}&text=${message}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F9FAFB', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
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
            Refer & Earn
          </h1>
        </div>
        <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, paddingLeft: '48px' }}>
          Invite friends and earn rewards together
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 20px' }}>
        {/* Referral Code Card */}
        <div style={{
          background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
          borderRadius: '16px',
          padding: '24px',
          color: '#FFFFFF',
          marginBottom: '24px',
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '8px' }}>
            YOUR REFERRAL CODE
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              letterSpacing: '2px',
              fontFamily: 'monospace',
            }}>
              {referralData.code}
            </div>
            <button
              onClick={handleCopyCode}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              {copied ? '✓ Copied' : 'Copy Code'}
            </button>
          </div>

          <div style={{
            fontSize: '13px',
            opacity: 0.9,
            marginBottom: '4px',
          }}>
            Share this code with friends. When they sign up and complete their first purchase:
          </div>
          <div style={{ fontSize: '15px', fontWeight: '500' }}>
            🎁 They get ₹100 • You get ₹300
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#10B981', marginBottom: '4px' }}>
              {referralData.totalReferrals}
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280' }}>
              Total Referrals
            </div>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#10B981', marginBottom: '4px' }}>
              {referralData.successfulReferrals}
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280' }}>
              Successful
            </div>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
          }}>
            <div style={{ fontSize: '28px', fontWeight: '600', color: '#10B981', marginBottom: '4px' }}>
              ₹{referralData.totalEarned}
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280' }}>
              Total Earned
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        <div style={{
          backgroundColor: '#FFF7ED',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #FDBA74',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '24px' }}>🎯</span>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#9A3412' }}>
                Next Milestone Reward
              </div>
              <div style={{ fontSize: '13px', color: '#C2410C' }}>
                {referralData.totalReferrals}/{referralData.nextMilestone.target} successful referrals
              </div>
            </div>
          </div>
          <div style={{
            height: '8px',
            backgroundColor: '#FED7AA',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '12px',
          }}>
            <div style={{
              width: `${(referralData.totalReferrals / referralData.nextMilestone.target) * 100}%`,
              height: '100%',
              backgroundColor: '#EA580C',
              transition: 'width 0.3s',
            }} />
          </div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#EA580C' }}>
            Earn ₹{referralData.nextMilestone.reward} bonus when you reach {referralData.nextMilestone.target} referrals!
          </div>
        </div>

        {/* Share Options */}
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
          marginBottom: '24px',
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#1F2937', marginBottom: '16px' }}>
            Share with Friends
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <button
              onClick={() => handleShare('whatsapp')}
              style={{
                padding: '12px',
                backgroundColor: '#25D366',
                border: 'none',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>📱</span> WhatsApp
            </button>

            <button
              onClick={() => handleShare('facebook')}
              style={{
                padding: '12px',
                backgroundColor: '#1877F2',
                border: 'none',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>📘</span> Facebook
            </button>

            <button
              onClick={() => handleShare('twitter')}
              style={{
                padding: '12px',
                backgroundColor: '#1DA1F2',
                border: 'none',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>🐦</span> Twitter
            </button>

            <button
              onClick={() => handleShare('telegram')}
              style={{
                padding: '12px',
                backgroundColor: '#0088CC',
                border: 'none',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>✈️</span> Telegram
            </button>
          </div>

          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '12px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
          }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {referralData.referralLink}
            </div>
            <button
              onClick={handleCopyLink}
              style={{
                padding: '4px 12px',
                backgroundColor: '#10B981',
                border: 'none',
                borderRadius: '6px',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Copy
            </button>
          </div>
        </div>

        {/* Referral History */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid #E5E7EB',
        }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#1F2937', margin: 0 }}>
              Recent Referrals
            </h3>
          </div>

          <div>
            {referralData.referrals.map((ref, index) => (
              <div
                key={ref.id}
                style={{
                  padding: '16px 20px',
                  borderBottom: index < referralData.referrals.length - 1 ? '1px solid #F3F4F6' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '20px',
                    backgroundColor: '#F3F4F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#6B7280',
                  }}>
                    {ref.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                      {ref.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                      {ref.date}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  {ref.status === 'completed' ? (
                    <>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#10B981' }}>
                        +₹{ref.reward}
                      </div>
                      <div style={{ fontSize: '11px', color: '#10B981' }}>
                        ✓ Completed
                      </div>
                    </>
                  ) : (
                    <div style={{ fontSize: '12px', color: '#F59E0B' }}>
                      ⏳ Pending
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div style={{
          marginTop: '24px',
          padding: '20px',
          backgroundColor: '#F0F9FF',
          borderRadius: '12px',
        }}>
          <h3 style={{ fontSize: '15px', fontWeight: '500', color: '#0369A1', marginBottom: '12px' }}>
            How it Works
          </h3>
          <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#075985', lineHeight: '1.8' }}>
            <li>Share your unique referral code or link with friends</li>
            <li>They sign up using your code and get ₹100 bonus</li>
            <li>When they complete their first purchase, you earn ₹300</li>
            <li>Reach milestones to unlock bonus rewards</li>
            <li>No limit on how many friends you can refer!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ReferralDashboard;
