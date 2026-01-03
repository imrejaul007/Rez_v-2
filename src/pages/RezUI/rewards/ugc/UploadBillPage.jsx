import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Camera, FileText, Coins, CheckCircle2, AlertCircle, Image, TrendingUp, Clock } from 'lucide-react';

const UploadBillPage = () => {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [earnedCoins, setEarnedCoins] = useState(0);

  const recentUploads = [
    { id: 1, store: 'Nike Store', amount: 6999, coins: 140, date: '2 days ago', status: 'approved' },
    { id: 2, store: 'Paradise Biryani', amount: 450, coins: 50, date: '5 days ago', status: 'approved' },
    { id: 3, store: 'Starbucks', amount: 280, coins: 25, date: '1 week ago', status: 'pending' },
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!uploadedImage) return;

    setUploading(true);

    // Simulate upload and processing
    setTimeout(() => {
      const coins = Math.floor(Math.random() * 150) + 50; // Random 50-200 coins
      setEarnedCoins(coins);
      setUploading(false);
      setUploadSuccess(true);

      setTimeout(() => {
        setUploadedImage(null);
        setUploadSuccess(false);
        setEarnedCoins(0);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-24 transition-colors">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-rez-gray-200 dark:border-white/10">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-h3 font-poppins text-rez-navy dark:text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-500" />
                Upload Bill
              </h1>
              <p className="text-xs text-rez-gray-600 dark:text-gray-400 mt-0.5">
                Earn ₹50-₹200 per bill
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {uploadSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="p-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl text-center animate-bounce mx-4">
            <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4 fill-white" />
            <h3 className="text-3xl font-bold text-white mb-2">
              +₹{earnedCoins} Earned!
            </h3>
            <p className="text-white/90">
              Bill uploaded successfully!
            </p>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
            <Upload className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              {recentUploads.length}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Bills uploaded</p>
          </div>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
            <Coins className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              ₹{recentUploads.reduce((sum, u) => sum + u.coins, 0)}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Total earned</p>
          </div>
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-center">
            <CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-lg font-bold text-rez-navy dark:text-white">
              {recentUploads.filter(u => u.status === 'approved').length}
            </p>
            <p className="text-[10px] text-rez-gray-600 dark:text-gray-400">Approved</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold text-white">Earn More Coins</h3>
          </div>
          <p className="text-xs text-white/90">
            Upload bills from any store! Clear photos earn more coins. Approved within 24 hours.
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Upload Your Bill
        </h3>

        {uploadedImage ? (
          <div className="relative">
            <img
              src={uploadedImage}
              alt="Uploaded bill"
              className="w-full aspect-[3/4] rounded-2xl object-cover border-2 border-rez-gray-200 dark:border-white/10"
            />
            {!uploading && !uploadSuccess && (
              <button
                onClick={() => setUploadedImage(null)}
                className="absolute top-2 right-2 p-2 bg-red-500 rounded-full text-white"
              >
                ✕
              </button>
            )}
            {uploading && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center rounded-2xl">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-white font-semibold">Processing...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <label className="block">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="p-8 border-2 border-dashed border-rez-gray-300 dark:border-gray-600 rounded-2xl text-center cursor-pointer hover:border-rez-green-500 transition-colors">
                <Image className="w-12 h-12 text-rez-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                  Select Bill Photo
                </h4>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Click to choose from gallery
                </p>
              </div>
            </label>

            <label className="block">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
              />
              <div className="p-8 border-2 border-dashed border-rez-gray-300 dark:border-gray-600 rounded-2xl text-center cursor-pointer hover:border-rez-green-500 transition-colors">
                <Camera className="w-12 h-12 text-rez-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <h4 className="text-sm font-semibold text-rez-navy dark:text-white mb-1">
                  Take Photo
                </h4>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Click to open camera
                </p>
              </div>
            </label>
          </div>
        )}

        {uploadedImage && !uploading && !uploadSuccess && (
          <button
            onClick={handleUpload}
            className="w-full mt-4 py-4 bg-rez-green-500 hover:bg-rez-green-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg"
          >
            Upload & Earn Coins
          </button>
        )}
      </div>

      {/* Tips */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-2">
                Tips for Better Rewards
              </h3>
              <div className="space-y-1 text-xs text-rez-gray-700 dark:text-gray-300">
                <p>• Ensure bill is clearly visible and readable</p>
                <p>• Include store name, date, and amount</p>
                <p>• No blurry or cut-off photos</p>
                <p>• Higher bill amounts earn more coins</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Uploads */}
      <div className="px-4">
        <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
          Recent Uploads
        </h3>
        <div className="space-y-3">
          {recentUploads.map((upload) => (
            <div
              key={upload.id}
              className="p-4 bg-white dark:bg-white/10 border border-rez-gray-200 dark:border-white/10 rounded-2xl"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-4 h-4 text-rez-gray-600 dark:text-gray-400" />
                    <h4 className="text-sm font-semibold text-rez-navy dark:text-white">
                      {upload.store}
                    </h4>
                  </div>
                  <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                    ₹{upload.amount.toLocaleString()} • {upload.date}
                  </p>
                </div>
                <div className="text-right">
                  {upload.status === 'approved' ? (
                    <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-lg">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span className="text-xs font-semibold text-emerald-500">
                        +₹{upload.coins}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded-lg">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-semibold text-amber-500">
                        Pending
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="px-4 py-6">
        <div className="p-4 bg-rez-gray-50 dark:bg-white/5 rounded-2xl">
          <h3 className="text-sm font-semibold text-rez-navy dark:text-white mb-3">
            How It Works
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rez-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                1
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Upload Bill</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Take a clear photo of your bill from any store
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rez-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                2
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">AI Verification</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Our system verifies the bill details automatically
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-rez-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                3
              </div>
              <div>
                <p className="text-sm font-medium text-rez-navy dark:text-white">Get Coins</p>
                <p className="text-xs text-rez-gray-600 dark:text-gray-400">
                  Earn ₹50-₹200 coins within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBillPage;
