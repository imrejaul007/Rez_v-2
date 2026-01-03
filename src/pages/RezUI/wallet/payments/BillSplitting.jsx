import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BillSplitting = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [splitMode, setSplitMode] = useState('equal'); // equal, items, custom
  const [friends, setFriends] = useState([
    { id: 1, name: 'You', phone: '9876543210', avatar: '😀', isOwner: true, share: 0, items: [], paid: false },
    { id: 2, name: 'Rahul', phone: '9876543211', avatar: '😎', isOwner: false, share: 0, items: [], paid: false },
    { id: 3, name: 'Priya', phone: '9876543212', avatar: '👩', isOwner: false, share: 0, items: [], paid: false }
  ]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showPaymentStatus, setShowPaymentStatus] = useState(false);

  // Mock order data
  const [order] = useState({
    id: orderId || 'ORD-123456',
    merchant: 'The Grand Kitchen',
    merchantLogo: '🍽️',
    items: [
      { id: 1, name: 'Paneer Butter Masala', qty: 1, price: 320 },
      { id: 2, name: 'Dal Makhani', qty: 1, price: 280 },
      { id: 3, name: 'Butter Naan', qty: 4, price: 200 },
      { id: 4, name: 'Jeera Rice', qty: 2, price: 240 },
      { id: 5, name: 'Gulab Jamun', qty: 2, price: 180 },
      { id: 6, name: 'Masala Coke', qty: 3, price: 150 }
    ],
    subtotal: 1370,
    tax: 68.50,
    deliveryFee: 0,
    discount: 137,
    total: 1301.50,
    date: '2024-12-27'
  });

  const calculateShares = () => {
    if (splitMode === 'equal') {
      const equalShare = order.total / friends.length;
      return friends.map(f => ({ ...f, share: equalShare }));
    } else if (splitMode === 'items') {
      return friends.map(f => {
        const itemsTotal = f.items.reduce((sum, itemId) => {
          const item = order.items.find(i => i.id === itemId);
          return sum + (item ? item.price : 0);
        }, 0);
        const proportion = itemsTotal / order.subtotal;
        const share = (order.subtotal * proportion) + (order.tax * proportion) - (order.discount * proportion);
        return { ...f, share: share || 0 };
      });
    } else {
      return friends;
    }
  };

  const updatedFriends = calculateShares();

  const handleItemAssign = (itemId, friendId) => {
    setFriends(prev => prev.map(f => {
      if (f.id === friendId) {
        if (f.items.includes(itemId)) {
          return { ...f, items: f.items.filter(i => i !== itemId) };
        } else {
          return { ...f, items: [...f.items, itemId] };
        }
      } else {
        return { ...f, items: f.items.filter(i => i !== itemId) };
      }
    }));
  };

  const handleCustomShare = (friendId, amount) => {
    setFriends(prev => prev.map(f =>
      f.id === friendId ? { ...f, share: parseFloat(amount) || 0 } : f
    ));
  };

  const handleSendRequest = () => {
    setShowPaymentStatus(true);
  };

  const remainingAmount = order.total - updatedFriends.reduce((sum, f) => sum + f.share, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/20 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold">Split Bill</h1>
        </div>

        {/* Order Summary */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
              {order.merchantLogo}
            </div>
            <div>
              <p className="font-medium">{order.merchant}</p>
              <p className="text-sm text-white/80">Order #{order.id}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/80">Total Bill</span>
            <span className="text-2xl font-bold">₹{order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Split Mode Selector */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold mb-3">How do you want to split?</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setSplitMode('equal')}
            className={`p-3 rounded-xl text-center ${
              splitMode === 'equal'
                ? 'bg-purple-100 border-2 border-purple-500'
                : 'bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="text-2xl mb-1">⚖️</div>
            <p className="text-sm font-medium">Equal Split</p>
          </button>
          <button
            onClick={() => setSplitMode('items')}
            className={`p-3 rounded-xl text-center ${
              splitMode === 'items'
                ? 'bg-purple-100 border-2 border-purple-500'
                : 'bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="text-2xl mb-1">📋</div>
            <p className="text-sm font-medium">By Items</p>
          </button>
          <button
            onClick={() => setSplitMode('custom')}
            className={`p-3 rounded-xl text-center ${
              splitMode === 'custom'
                ? 'bg-purple-100 border-2 border-purple-500'
                : 'bg-gray-100 border-2 border-transparent'
            }`}
          >
            <div className="text-2xl mb-1">✏️</div>
            <p className="text-sm font-medium">Custom</p>
          </button>
        </div>
      </div>

      {/* Friends List */}
      <div className="p-4 bg-white mt-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Split Between ({friends.length})</h3>
          <button
            onClick={() => setShowAddFriend(true)}
            className="text-purple-600 text-sm font-medium flex items-center gap-1"
          >
            <span>+</span> Add Person
          </button>
        </div>

        <div className="space-y-3">
          {updatedFriends.map(friend => (
            <div
              key={friend.id}
              className={`bg-gray-50 rounded-xl p-4 ${
                friend.isOwner ? 'ring-2 ring-purple-200' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                    {friend.avatar}
                  </div>
                  <div>
                    <p className="font-medium">
                      {friend.name}
                      {friend.isOwner && <span className="text-xs text-purple-600 ml-1">(You)</span>}
                    </p>
                    {!friend.isOwner && (
                      <p className="text-xs text-gray-500">{friend.phone}</p>
                    )}
                  </div>
                </div>
                {splitMode === 'custom' ? (
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">₹</span>
                    <input
                      type="number"
                      value={friend.share.toFixed(0)}
                      onChange={(e) => handleCustomShare(friend.id, e.target.value)}
                      className="w-20 border rounded-lg px-2 py-1 text-right font-semibold"
                    />
                  </div>
                ) : (
                  <div className="text-right">
                    <p className="font-bold text-lg">₹{friend.share.toFixed(2)}</p>
                    {splitMode === 'items' && (
                      <p className="text-xs text-gray-500">{friend.items.length} items</p>
                    )}
                  </div>
                )}
              </div>

              {!friend.isOwner && (
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-green-100 text-green-700 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <span>📱</span> WhatsApp
                  </button>
                  <button className="flex-1 bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                    <span>🔗</span> UPI Link
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Item Assignment (for items mode) */}
      {splitMode === 'items' && (
        <div className="p-4 bg-white mt-2">
          <h3 className="font-semibold mb-3">Assign Items to People</h3>
          <div className="space-y-3">
            {order.items.map(item => {
              const assignedTo = friends.find(f => f.items.includes(item.id));
              return (
                <div key={item.id} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">₹{item.price}</p>
                  </div>
                  <div className="flex gap-2">
                    {friends.map(friend => (
                      <button
                        key={friend.id}
                        onClick={() => handleItemAssign(item.id, friend.id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                          assignedTo?.id === friend.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-white border'
                        }`}
                      >
                        {friend.avatar}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bill Breakdown */}
      <div className="p-4 bg-white mt-2">
        <h3 className="font-semibold mb-3">Bill Breakdown</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>₹{order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tax</span>
            <span>₹{order.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{order.discount.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Remaining Balance Warning */}
        {splitMode === 'custom' && Math.abs(remainingAmount) > 0.01 && (
          <div className={`mt-3 p-3 rounded-lg ${
            remainingAmount > 0 ? 'bg-orange-50 text-orange-700' : 'bg-red-50 text-red-700'
          }`}>
            {remainingAmount > 0
              ? `₹${remainingAmount.toFixed(2)} remaining to be assigned`
              : `Assigned amount exceeds total by ₹${Math.abs(remainingAmount).toFixed(2)}`
            }
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex gap-3 mb-3">
          <button
            onClick={handleSendRequest}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold"
          >
            Send Payment Requests
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center">
          Payment links will be sent via WhatsApp and SMS
        </p>
      </div>

      {/* Add Friend Modal */}
      {showAddFriend && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-2xl">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="font-bold">Add Person</h2>
              <button onClick={() => setShowAddFriend(false)} className="text-2xl">&times;</button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-xl p-3"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border rounded-xl p-3"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-500 mb-3">Or select from contacts</p>
                <div className="space-y-2">
                  {['Amit 😀', 'Neha 👩', 'Vikram 🧔'].map((contact, idx) => (
                    <button
                      key={idx}
                      className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100"
                    >
                      <span className="text-2xl">{contact.split(' ')[1]}</span>
                      <span className="font-medium">{contact.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium">
                Add Person
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Status Modal */}
      {showPaymentStatus && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white text-center">
              <div className="text-5xl mb-3">📤</div>
              <h2 className="text-xl font-bold">Requests Sent!</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                {updatedFriends.filter(f => !f.isOwner).map(friend => (
                  <div key={friend.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{friend.avatar}</span>
                      <div>
                        <p className="font-medium">{friend.name}</p>
                        <p className="text-xs text-gray-500">Request sent</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹{friend.share.toFixed(2)}</p>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-purple-700">Your Share</span>
                  <span className="font-bold text-purple-800">
                    ₹{updatedFriends.find(f => f.isOwner)?.share.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium">
                  Pay Your Share Now
                </button>
              </div>

              <button
                onClick={() => {
                  setShowPaymentStatus(false);
                  navigate('/orders');
                }}
                className="w-full border border-gray-200 py-3 rounded-xl font-medium"
              >
                Track Payments
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillSplitting;
