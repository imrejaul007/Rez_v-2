import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, MapPin, CheckCircle, Phone } from 'lucide-react';

function DeliveryTracking() {
  const navigate = useNavigate();
  const delivery = { orderId: 'ORD987654', status: 'out_for_delivery', estimatedTime: '30 mins', deliveryPerson: { name: 'Raj Kumar', phone: '+91 98765 43210', rating: 4.8 }, address: '123 Main St, City, State - 123456', timeline: [
    { label: 'Order Placed', time: '10:00 AM', completed: true },
    { label: 'Order Confirmed', time: '10:15 AM', completed: true },
    { label: 'Preparing Order', time: '10:30 AM', completed: true },
    { label: 'Picked Up', time: '11:00 AM', completed: true },
    { label: 'Out for Delivery', time: '11:30 AM', completed: true },
    { label: 'Delivered', time: 'Expected 12:00 PM', completed: false }
  ]};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-4"><Truck className="w-8 h-8" /><div><h1 className="text-2xl font-bold">Track Your Order</h1><p className="text-purple-100">Order #{delivery.orderId}</p></div></div>
            <div className="bg-white/20 rounded-lg p-4"><p className="text-sm mb-1">Estimated Arrival</p><p className="text-2xl font-bold">{delivery.estimatedTime}</p></div>
          </div>
          <div className="p-6 space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div><p className="font-bold text-gray-900">Delivery Partner</p><p className="text-gray-600">{delivery.deliveryPerson.name}</p><p className="text-sm text-gray-500">⭐ {delivery.deliveryPerson.rating}</p></div>
                <a href={`tel:${delivery.deliveryPerson.phone}`} className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Phone className="w-5 h-5" /></a>
              </div>
            </div>
            <div><p className="text-sm font-medium text-gray-700 mb-2">Delivery Address</p><div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"><MapPin className="w-5 h-5 text-purple-600" /><p className="text-gray-700">{delivery.address}</p></div></div>
            <div><h3 className="font-bold text-gray-900 mb-4">Order Timeline</h3><div className="space-y-4">{delivery.timeline.map((step, i) => (<div key={i} className="flex items-start gap-4"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.completed ? 'bg-green-100' : 'bg-gray-100'}`}><CheckCircle className={`w-5 h-5 ${step.completed ? 'text-green-600' : 'text-gray-400'}`} /></div><div className="pt-2"><p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>{step.label}</p><p className="text-sm text-gray-500">{step.time}</p></div></div>))}</div></div>
            <button onClick={() => navigate(-1)} className="w-full py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-all">Back</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default DeliveryTracking;
