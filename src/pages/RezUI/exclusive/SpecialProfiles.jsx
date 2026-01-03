import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, ChevronRight, Upload } from 'lucide-react';
import { specialProfilesExtended } from '../../data/exclusiveDeals';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

const SpecialProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [verifiedProfiles, setVerifiedProfiles] = useState([]);

  const profiles = Object.entries(specialProfilesExtended).map(([key, data]) => ({
    id: key,
    ...data
  }));

  const handleVerify = (profileId) => {
    // Mock verification
    setVerifiedProfiles([...verifiedProfiles, profileId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900/20 to-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass">
        <div className="flex items-center gap-4 px-4 py-4">
          <Link to="/deal-store" className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-rez-navy dark:text-white">Special Profiles</h1>
            <p className="text-sm text-rez-gray-600 dark:text-gray-400">Exclusive access for verified members</p>
          </div>
          <div className="text-4xl">🎖️</div>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="mx-4 mt-4 p-6 rounded-3xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-500/20">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/30 flex items-center justify-center">
            <Shield className="w-8 h-8 text-indigo-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-rez-navy dark:text-white">Honoring Our Heroes</h2>
            <p className="text-sm text-rez-gray-700 dark:text-gray-300">Exclusive deals for special community members</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="p-2 rounded-xl bg-rez-gray-50 dark:bg-white/5 text-center"
            >
              <span className="text-2xl">{profile.icon}</span>
              <p className="text-xs text-rez-gray-700 dark:text-gray-300 mt-1">{profile.title.split(' ')[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Cards */}
      <div className="mt-6 px-4 space-y-4">
        {profiles.map((profile) => {
          const isVerified = verifiedProfiles.includes(profile.id);
          const isExpanded = selectedProfile === profile.id;

          return (
            <Card
              key={profile.id}
              className={`overflow-hidden transition-all ${
                isExpanded ? 'ring-2 ring-indigo-500/50' : ''
              }`}
            >
              {/* Profile Header */}
              <button
                onClick={() => setSelectedProfile(isExpanded ? null : profile.id)}
                className={`w-full p-4 bg-gradient-to-r ${profile.color} flex items-center gap-4`}
              >
                <span className="text-4xl">{profile.icon}</span>
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-rez-navy dark:text-white">{profile.title}</h3>
                    {isVerified && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-white/70">{profile.subtitle}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-white/70 transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="p-4 bg-rez-gray-100 dark:bg-[#1C1C1E]">
                  {/* Verification Status */}
                  {!isVerified ? (
                    <div className="p-4 rounded-xl bg-rez-gray-50 dark:bg-white/5 mb-4">
                      <div className="flex items-start gap-3">
                        <Upload className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-rez-navy dark:text-white mb-1">Verification Required</p>
                          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{profile.eligibility}</p>
                        </div>
                        <Button
                          variant="amber"
                          size="sm"
                          onClick={() => handleVerify(profile.id)}
                        >
                          Verify
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-green-400">Verified - Access Granted</span>
                    </div>
                  )}

                  {/* Deals List */}
                  <h4 className="text-sm font-medium text-rez-gray-600 dark:text-gray-400 mb-3">Available Deals</h4>
                  <div className="space-y-2">
                    {profile.deals.map((deal) => (
                      <div
                        key={deal.id}
                        className={`p-3 rounded-xl bg-rez-gray-50 dark:bg-white/5 flex items-center gap-3 ${
                          !isVerified ? 'opacity-50' : ''
                        }`}
                      >
                        {deal.storeLogo && (
                          <img
                            src={deal.storeLogo}
                            alt=""
                            className="w-10 h-10 rounded-lg object-contain bg-white"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-rez-navy dark:text-white text-sm">{deal.store}</p>
                          <p className="text-xs text-rez-gray-600 dark:text-gray-400">{deal.title}</p>
                        </div>
                        <div className="px-2 py-1 rounded-lg bg-indigo-500/20">
                          <span className="text-sm font-bold text-indigo-400">{deal.discount}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!isVerified && (
                    <p className="text-xs text-rez-gray-600 dark:text-gray-500 text-center mt-4">
                      Verify your profile to unlock these exclusive deals
                    </p>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Support Message */}
      <div className="mx-4 mt-6 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5 text-center">
        <p className="text-sm text-rez-gray-600 dark:text-gray-400">
          Don't see your category? <span className="text-indigo-400">Contact us</span> to request special profile verification.
        </p>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-20 left-0 right-0 p-4 glass">
        <Button variant="primary" fullWidth>
          Apply for Special Profile Verification
        </Button>
      </div>
    </div>
  );
};

export default SpecialProfiles;
