import React, { useState } from 'react';
import {
  ArrowLeft, Pause, Play, Clock, ShoppingCart, User, Plus,
  Trash2, Edit, Search, Package, IndianRupee, CheckCircle, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MerchantNav from "../../components/merchant/MerchantNav";

const MerchantBillHold = () => {
  const navigate = useNavigate();
  const [showHoldModal, setShowHoldModal] = useState(false);
  const [selectedHold, setSelectedHold] = useState(null);
  const [holdNote, setHoldNote] = useState('');

  const [heldBills, setHeldBills] = useState([
    {
      id: 1,
      customer: 'Walk-in Customer',
      items: [
        { name: 'Paneer Tikka', qty: 2, price: 280 },
        { name: 'Butter Naan', qty: 4, price: 50 },
        { name: 'Dal Makhani', qty: 1, price: 260 }
      ],
      total: 1020,
      holdTime: '10 min ago',
      note: 'Customer went to ATM',
      table: 'T3'
    },
    {
      id: 2,
      customer: 'Rajesh Kumar',
      phone: '9876543210',
      items: [
        { name: 'Chicken Biryani', qty: 2, price: 320 },
        { name: 'Raita', qty: 2, price: 60 },
        { name: 'Cold Drink', qty: 2, price: 40 }
      ],
      total: 840,
      holdTime: '25 min ago',
      note: 'Waiting for friend',
      table: 'T7'
    },
    {
      id: 3,
      customer: 'Priya Sharma',
      phone: '9876543211',
      items: [
        { name: 'Veg Thali', qty: 3, price: 180 },
        { name: 'Lassi', qty: 3, price: 80 }
      ],
      total: 780,
      holdTime: '45 min ago',
      note: 'Phone call - will return',
      table: 'Counter'
    }
  ]);

  const [currentBill, setCurrentBill] = useState({
    items: [
      { id: 1, name: 'Masala Dosa', qty: 2, price: 120 },
      { id: 2, name: 'Filter Coffee', qty: 2, price: 50 },
    ],
    total: 340,
    customer: ''
  });

  const resumeBill = (bill) => {
    setCurrentBill({
      items: bill.items.map((item, idx) => ({ ...item, id: idx + 1 })),
      total: bill.total,
      customer: bill.customer
    });
    setHeldBills(prev => prev.filter(b => b.id !== bill.id));
    setSelectedHold(null);
  };

  const deleteBill = (billId) => {
    setHeldBills(prev => prev.filter(b => b.id !== billId));
    setSelectedHold(null);
  };

  const holdCurrentBill = () => {
    if (currentBill.items.length === 0) return;

    const newHold = {
      id: Date.now(),
      customer: currentBill.customer || 'Walk-in Customer',
      items: currentBill.items,
      total: currentBill.total,
      holdTime: 'Just now',
      note: holdNote,
      table: 'Counter'
    };

    setHeldBills([newHold, ...heldBills]);
    setCurrentBill({ items: [], total: 0, customer: '' });
    setHoldNote('');
    setShowHoldModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Bill Hold & Resume</h1>
              <p className="text-amber-200 text-sm">Park transactions temporarily</p>
            </div>
          </div>
          <div className="bg-white/20 px-3 py-1 rounded-full">
            <span className="font-bold">{heldBills.length}</span> Held
          </div>
        </div>
      </div>

      {/* Current Bill Section */}
      <div className="p-4">
        <div className="bg-gray-800 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold flex items-center">
              <ShoppingCart size={18} className="mr-2 text-amber-400" />
              Current Bill
            </h3>
            {currentBill.items.length > 0 && (
              <button
                onClick={() => setShowHoldModal(true)}
                className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm flex items-center"
              >
                <Pause size={16} className="mr-1" /> Hold Bill
              </button>
            )}
          </div>

          {currentBill.items.length > 0 ? (
            <>
              <div className="space-y-2 mb-4">
                {currentBill.items.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <span className="text-white">{item.name}</span>
                      <span className="text-gray-400 ml-2">x{item.qty}</span>
                    </div>
                    <span className="text-white font-medium">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                <span className="text-gray-400">Total</span>
                <span className="text-white text-xl font-bold">₹{currentBill.total}</span>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <Package size={48} className="text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No items in current bill</p>
              <p className="text-gray-500 text-sm">Add items from POS to hold</p>
            </div>
          )}
        </div>

        {/* Held Bills */}
        <h3 className="text-white font-semibold mb-3 flex items-center">
          <Clock size={18} className="mr-2 text-amber-400" />
          Held Bills ({heldBills.length})
        </h3>

        {heldBills.length === 0 ? (
          <div className="bg-gray-800 rounded-xl p-8 text-center">
            <Pause size={48} className="text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400">No held bills</p>
            <p className="text-gray-500 text-sm">Hold a bill when customer needs to step away</p>
          </div>
        ) : (
          <div className="space-y-3">
            {heldBills.map(bill => (
              <div
                key={bill.id}
                className="bg-gray-800 rounded-xl p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                        <User size={18} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{bill.customer}</h4>
                        {bill.phone && <p className="text-gray-400 text-sm">{bill.phone}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-400 font-bold text-lg">₹{bill.total}</p>
                    <span className="text-gray-400 text-xs">{bill.holdTime}</span>
                  </div>
                </div>

                {/* Items Preview */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <div className="flex flex-wrap gap-2">
                    {bill.items.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
                        {item.name} x{item.qty}
                      </span>
                    ))}
                    {bill.items.length > 3 && (
                      <span className="text-gray-400 text-sm">+{bill.items.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Note */}
                {bill.note && (
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-2 mb-3">
                    <p className="text-yellow-400 text-sm">{bill.note}</p>
                  </div>
                )}

                {/* Table Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {bill.table}
                  </span>
                  <span className="text-gray-400 text-xs">{bill.items.length} items</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => resumeBill(bill)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm flex items-center justify-center"
                  >
                    <Play size={16} className="mr-1" /> Resume
                  </button>
                  <button
                    onClick={() => setSelectedHold(bill)}
                    className="bg-gray-700 text-white p-2 rounded-lg"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => deleteBill(bill.id)}
                    className="bg-red-600/20 text-red-400 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hold Bill Modal */}
      {showHoldModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-bold flex items-center">
                <Pause size={20} className="mr-2 text-amber-400" />
                Hold Current Bill
              </h3>
              <button onClick={() => setShowHoldModal(false)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Bill Summary */}
            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Items</span>
                <span className="text-white">{currentBill.items.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total</span>
                <span className="text-amber-400 font-bold text-lg">₹{currentBill.total}</span>
              </div>
            </div>

            {/* Customer Name */}
            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-2 block">Customer Name (Optional)</label>
              <input
                type="text"
                placeholder="Walk-in Customer"
                value={currentBill.customer}
                onChange={(e) => setCurrentBill(prev => ({ ...prev, customer: e.target.value }))}
                className="w-full bg-gray-800 text-white p-3 rounded-xl"
              />
            </div>

            {/* Note */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-2 block">Reason / Note</label>
              <input
                type="text"
                placeholder="e.g. Customer went to ATM"
                value={holdNote}
                onChange={(e) => setHoldNote(e.target.value)}
                className="w-full bg-gray-800 text-white p-3 rounded-xl"
              />
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowHoldModal(false)}
                className="flex-1 bg-gray-700 text-white py-3 rounded-xl font-medium"
              >
                Cancel
              </button>
              <button
                onClick={holdCurrentBill}
                className="flex-1 bg-amber-500 text-white py-3 rounded-xl font-medium flex items-center justify-center"
              >
                <Pause size={18} className="mr-2" /> Hold Bill
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Held Bill Details */}
      {selectedHold && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
          <div className="w-full bg-gray-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg font-bold">Held Bill Details</h3>
              <button onClick={() => setSelectedHold(null)}>
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-medium">{selectedHold.customer}</p>
                  <p className="text-gray-400 text-sm">{selectedHold.table} • {selectedHold.holdTime}</p>
                </div>
                <p className="text-amber-400 font-bold text-xl">₹{selectedHold.total}</p>
              </div>

              {selectedHold.note && (
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-2 mb-3">
                  <p className="text-yellow-400 text-sm">{selectedHold.note}</p>
                </div>
              )}
            </div>

            <h4 className="text-white font-medium mb-3">Items</h4>
            <div className="space-y-2 mb-6">
              {selectedHold.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                  <div>
                    <span className="text-white">{item.name}</span>
                    <span className="text-gray-400 ml-2">x{item.qty}</span>
                  </div>
                  <span className="text-white">₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => deleteBill(selectedHold.id)}
                className="flex-1 bg-red-600/20 text-red-400 py-3 rounded-xl font-medium flex items-center justify-center"
              >
                <Trash2 size={18} className="mr-2" /> Delete
              </button>
              <button
                onClick={() => resumeBill(selectedHold)}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center"
              >
                <Play size={18} className="mr-2" /> Resume Bill
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav userType="merchant" />
    </div>
  );
};

export default MerchantBillHold;
