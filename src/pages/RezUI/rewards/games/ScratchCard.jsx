import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Gift, Coins } from 'lucide-react';
import BottomNavManager from '../../components/layout/BottomNavManager';

const ScratchCard = () => {
  const [scratched, setScratched] = useState(false);
  const [reward, setReward] = useState(null);

  const scratchCard = () => {
    const rewards = [25, 50, 75, 100, 150, 200];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    setReward(randomReward);
    setScratched(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/earn" className="p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all">
            <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
          </Link>
          <div>
            <h1 className="text-h3 font-poppins text-rez-navy dark:text-white">🎫 Scratch Card</h1>
            <p className="text-caption text-rez-gray-600 dark:text-gray-400">Win instant coins!</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="text-center mb-6">
          <p className="text-body text-rez-gray-600 dark:text-gray-400 mb-2">
            You have <span className="font-bold text-rez-green-500">1 card</span> left today!
          </p>
          <p className="text-caption text-rez-gray-500 dark:text-gray-500">
            Resets at midnight
          </p>
        </div>

        {/* Scratch Card */}
        <div className="max-w-sm mx-auto">
          {!scratched ? (
            <button
              onClick={scratchCard}
              className="w-full aspect-[3/2] rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-8 flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform shadow-2xl"
            >
              <Gift className="w-20 h-20 text-white animate-bounce" />
              <p className="text-h3 font-poppins text-white">Tap to Scratch!</p>
              <p className="text-sm text-white/80">Win 25-200 coins</p>
            </button>
          ) : (
            <div className="w-full aspect-[3/2] rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-8 flex flex-col items-center justify-center gap-4 shadow-2xl">
              <Coins className="w-20 h-20 text-white" />
              <p className="text-h1 font-poppins text-white">+{reward}</p>
              <p className="text-h4 text-white">Coins Won!</p>
              <p className="text-sm text-white/80">Added to your wallet</p>
            </div>
          )}
        </div>

        {scratched && (
          <div className="mt-6 text-center">
            <Link
              to="/earn"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-rez-green-500 to-rez-teal-500 text-white font-semibold"
            >
              Continue Earning
            </Link>
          </div>
        )}

        {/* Info */}
        <div className="mt-8 p-4 rounded-2xl bg-rez-gray-50 dark:bg-white/5">
          <h3 className="text-sm font-bold text-rez-navy dark:text-white mb-2">How it works:</h3>
          <ul className="text-sm text-rez-gray-600 dark:text-gray-400 space-y-1">
            <li>• Get 1 free scratch card daily</li>
            <li>• Win between 25-200 coins instantly</li>
            <li>• Earn bonus cards by completing missions</li>
            <li>• Cards reset at midnight</li>
          </ul>
        </div>
      </div>

      <BottomNavManager />
    </div>
  );
};

export default ScratchCard;
