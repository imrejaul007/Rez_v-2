import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bell, Camera, Mic, Phone, CheckCircle, AlertCircle } from 'lucide-react';

// Backend API: POST /api/user/permissions/update

export default function PermissionRequests() {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    location: null,
    notifications: null,
    camera: null,
    microphone: null,
    contacts: null
  });

  const permissionsList = [
    {
      id: 'location',
      icon: MapPin,
      title: 'Location Access',
      description: 'Find nearby stores, track deliveries, and get local deals',
      required: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Push Notifications',
      description: 'Get updates on orders, offers, and important alerts',
      required: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'camera',
      icon: Camera,
      title: 'Camera Access',
      description: 'Scan QR codes, upload photos, and use AR features',
      required: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'microphone',
      icon: Mic,
      title: 'Microphone Access',
      description: 'Voice search and customer support calls',
      required: false,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'contacts',
      icon: Phone,
      title: 'Contacts Access',
      description: 'Easily invite friends and share deals',
      required: false,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  const requestPermission = async (permissionId) => {
    // Simulated permission request
    const granted = Math.random() > 0.2; // 80% success rate
    setPermissions(prev => ({ ...prev, [permissionId]: granted }));
  };

  const continueToApp = () => {
    const requiredGranted = permissionsList
      .filter(p => p.required)
      .every(p => permissions[p.id] === true);

    if (!requiredGranted) {
      alert('Please grant required permissions to continue');
      return;
    }

    navigate('/home');
  };

  const skipForNow = () => {
    navigate('/home');
  };

  const allRequiredGranted = permissionsList
    .filter(p => p.required)
    .every(p => permissions[p.id] === true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8 mt-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            App Permissions
          </h1>
          <p className="text-gray-600">
            To provide you the best experience, we need a few permissions
          </p>
        </div>

        {/* Permissions List */}
        <div className="space-y-4 mb-8">
          {permissionsList.map((permission) => {
            const Icon = permission.icon;
            const status = permissions[permission.id];

            return (
              <div
                key={permission.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${permission.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{permission.title}</h3>
                      {permission.required && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {permission.description}
                    </p>

                    {status === null && (
                      <button
                        onClick={() => requestPermission(permission.id)}
                        className={`w-full px-4 py-2 bg-gradient-to-r ${permission.color} text-white rounded-lg hover:opacity-90 transition-all font-medium`}
                      >
                        Grant Permission
                      </button>
                    )}

                    {status === true && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Permission Granted</span>
                      </div>
                    )}

                    {status === false && (
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-red-600 text-sm">Permission Denied</span>
                        <button
                          onClick={() => requestPermission(permission.id)}
                          className="ml-auto text-purple-600 hover:text-purple-700 text-sm font-medium"
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={continueToApp}
            disabled={!allRequiredGranted}
            className={`w-full px-6 py-4 rounded-xl font-bold text-lg transition-all ${
              allRequiredGranted
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue to App
          </button>

          <button
            onClick={skipForNow}
            className="w-full px-6 py-3 text-gray-600 hover:text-gray-900 font-medium"
          >
            Skip for Now
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Privacy First</p>
              <p className="text-blue-700">
                Your data is encrypted and we never share your information without your consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
