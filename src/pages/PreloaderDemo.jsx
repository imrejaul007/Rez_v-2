import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import GlobalPreloader from '../components/preloader/GlobalPreloader';
import ModePreloader from '../components/preloader/ModePreloader';

const PreloaderDemo = () => {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState(null);

  const demos = [
    {
      id: 'global',
      name: 'Global App Preloader',
      description: 'First-time app launch experience',
      color: 'from-gray-900 to-black',
    },
    {
      id: 'rez',
      name: 'ReZ Mode',
      description: 'Rewards near you',
      color: 'from-red-500 to-orange-500',
    },
    {
      id: 'mall',
      name: 'Mall Mode',
      description: 'Curated brands',
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 'cash-store',
      name: 'Cash Store Mode',
      description: 'Online cashback',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'prive',
      name: 'Privé Mode',
      description: 'Exclusive access',
      color: 'from-amber-600 to-yellow-600',
    },
  ];

  const playDemo = (demoId) => {
    setActiveDemo(demoId);
    // Auto-reset after demo completes
    setTimeout(() => {
      setActiveDemo(null);
    }, demoId === 'global' ? 2500 : demoId === 'prive' ? 1500 : 1200);
  };

  return (
    <div className="min-h-screen bg-rez-gray-50 dark:bg-dark-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-rez-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-rez-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-h4 font-poppins text-rez-navy dark:text-white">
              Preloader Demo
            </h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">
              Test all preloader animations
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="px-4 py-6">
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20">
          <h3 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">
            How to Test
          </h3>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            Click the "Play" button on any preloader below to see it in action.
            The preloader will display in fullscreen and automatically close when complete.
          </p>
        </div>
      </div>

      {/* Demo Cards */}
      <div className="px-4 pb-6 space-y-4">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700"
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${demo.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl">
                  {demo.id === 'global' && '🚀'}
                  {demo.id === 'rez' && '📍'}
                  {demo.id === 'mall' && '🛍️'}
                  {demo.id === 'cash-store' && '💸'}
                  {demo.id === 'prive' && '👑'}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-1">
                  {demo.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {demo.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => playDemo(demo.id)}
                    disabled={activeDemo !== null}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                      activeDemo !== null
                        ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                        : `bg-gradient-to-r ${demo.color} text-white hover:scale-105`
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    Play Demo
                  </button>

                  {demo.id === 'global' && (
                    <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      ~2.0s duration
                    </span>
                  )}
                  {demo.id === 'rez' && (
                    <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      ~0.8s duration
                    </span>
                  )}
                  {demo.id === 'mall' && (
                    <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      ~0.9s duration
                    </span>
                  )}
                  {demo.id === 'cash-store' && (
                    <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      ~0.9s duration
                    </span>
                  )}
                  {demo.id === 'prive' && (
                    <span className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-xs font-medium text-gray-600 dark:text-gray-400">
                      ~1.2s duration
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Details */}
      <div className="px-4 pb-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-rez-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-bold text-rez-navy dark:text-white mb-4">
            Technical Details
          </h3>
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Animation Library:</span>
              <span className="font-semibold text-rez-navy dark:text-white">framer-motion</span>
            </div>
            <div className="flex justify-between">
              <span>Easing Curve:</span>
              <span className="font-mono text-xs text-rez-navy dark:text-white">cubic-bezier(0.16, 1, 0.3, 1)</span>
            </div>
            <div className="flex justify-between">
              <span>GPU Accelerated:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Yes</span>
            </div>
            <div className="flex justify-between">
              <span>Reduced Motion Support:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Yes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Preloader Overlay */}
      {activeDemo === 'global' && (
        <GlobalPreloader onComplete={() => setActiveDemo(null)} />
      )}
      {activeDemo && activeDemo !== 'global' && (
        <ModePreloader
          mode={activeDemo}
          onComplete={() => setActiveDemo(null)}
        />
      )}
    </div>
  );
};

export default PreloaderDemo;
