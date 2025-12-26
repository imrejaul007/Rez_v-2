import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Store, ShoppingBag, Coins, Star } from 'lucide-react';

const FirstTimePreloader = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1500),  // Welcome → Icons
      setTimeout(() => setStage(2), 3500),  // Icons → Merge
      setTimeout(() => setStage(3), 5500),  // Merge → Mode dots
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const icons = [
    { Icon: Store, label: 'Local stores', delay: 0 },
    { Icon: ShoppingBag, label: 'Online brands', delay: 0.2 },
    { Icon: Coins, label: 'Rewards', delay: 0.4 },
    { Icon: Star, label: 'Privileges', delay: 0.6 },
  ];

  const modes = [
    { name: 'ReZ', color: 'bg-red-500' },
    { name: 'Mall', color: 'bg-blue-500' },
    { name: 'Cash', color: 'bg-emerald-500' },
    { name: 'Privé', color: 'bg-amber-600' },
  ];

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        {/* Stage 0: Welcome */}
        <AnimatePresence>
          {stage === 0 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl flex items-center justify-center"
              >
                <span className="text-5xl font-bold text-white">R</span>
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome to ReZ
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 1: Icons */}
        <AnimatePresence>
          {stage === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                One app for all your spending
              </h2>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {icons.map(({ Icon, label, delay }) => (
                  <motion.div
                    key={label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay, duration: 0.4, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 mb-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 2: Merge to Wallet */}
        <AnimatePresence>
          {stage === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-2xl flex items-center justify-center"
              >
                <Coins className="w-16 h-16 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Every payment earns you something back
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stage 3: Mode Selection */}
        <AnimatePresence>
          {stage === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Choose how you shop
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                ReZ adapts.
              </p>

              {/* Mode Dots */}
              <div className="flex justify-center gap-3 mb-8">
                {modes.map((mode, index) => (
                  <motion.div
                    key={mode.name}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                    className={`w-3 h-3 rounded-full ${mode.color}`}
                  />
                ))}
              </div>

              {/* Continue Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                onClick={onComplete}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-lg hover:scale-[1.02] transition-all shadow-lg"
              >
                Continue
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FirstTimePreloader;
