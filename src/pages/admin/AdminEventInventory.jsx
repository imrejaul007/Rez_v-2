import React, { useState } from 'react';
import { Calendar, Users, IndianRupee, TrendingUp, AlertCircle, CheckCircle, XCircle, Clock, Ticket, Package, RefreshCw } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

const AdminEventInventory = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  // Mock data - Event inventory with allocation tracking
  const eventInventory = [
    {
      id: 'EVT-001',
      eventName: 'Diwali Food Festival 2025',
      eventDate: '2025-11-01',
      venue: 'Phoenix Marketcity, Mumbai',
      ticketTypes: [
        {
          type: 'VIP',
          totalCapacity: 100,
          allocated: 85,
          sold: 78,
          blocked: 7,
          available: 15,
          price: 2500,
          dynamicPricing: true,
          currentPrice: 2800,
          priceChange: '+12%'
        },
        {
          type: 'General',
          totalCapacity: 500,
          allocated: 420,
          sold: 398,
          blocked: 22,
          available: 80,
          price: 800,
          dynamicPricing: true,
          currentPrice: 850,
          priceChange: '+6.25%'
        },
        {
          type: 'Early Bird',
          totalCapacity: 200,
          allocated: 200,
          sold: 200,
          blocked: 0,
          available: 0,
          price: 500,
          dynamicPricing: false,
          currentPrice: 500,
          priceChange: '0%',
          status: 'sold_out'
        }
      ],
      totalRevenue: 553600,
      status: 'active',
      sellThroughRate: 84.5
    },
    {
      id: 'EVT-002',
      eventName: 'New Year Gala Night',
      eventDate: '2025-12-31',
      venue: 'Grand Hyatt, Bangalore',
      ticketTypes: [
        {
          type: 'Platinum',
          totalCapacity: 50,
          allocated: 12,
          sold: 10,
          blocked: 2,
          available: 38,
          price: 5000,
          dynamicPricing: true,
          currentPrice: 4500,
          priceChange: '-10%'
        },
        {
          type: 'Gold',
          totalCapacity: 150,
          allocated: 45,
          sold: 38,
          blocked: 7,
          available: 105,
          price: 3000,
          dynamicPricing: true,
          currentPrice: 2700,
          priceChange: '-10%'
        }
      ],
      totalRevenue: 147600,
      status: 'active',
      sellThroughRate: 24.0
    }
  ];

  // Dynamic pricing rules
  const pricingRules = [
    {
      id: 'RULE-001',
      eventId: 'EVT-001',
      eventName: 'Diwali Food Festival 2025',
      strategy: 'Demand-Based',
      rules: [
        { condition: 'Sell-through > 80%', action: 'Increase by 15%', status: 'active' },
        { condition: 'Days to event < 7', action: 'Increase by 10%', status: 'active' },
        { condition: 'Sell-through < 30%', action: 'Decrease by 15%', status: 'inactive' }
      ],
      minPrice: 2000,
      maxPrice: 3500,
      lastUpdated: '2 hours ago'
    },
    {
      id: 'RULE-002',
      eventId: 'EVT-002',
      eventName: 'New Year Gala Night',
      strategy: 'Early Bird Boost',
      rules: [
        { condition: 'Days to event > 30', action: 'Decrease by 10%', status: 'active' },
        { condition: 'Sell-through > 70%', action: 'Increase by 20%', status: 'inactive' },
        { condition: 'Last 48 hours', action: 'Increase by 25%', status: 'inactive' }
      ],
      minPrice: 4000,
      maxPrice: 6000,
      lastUpdated: '5 hours ago'
    }
  ];

  // Refund requests
  const refundRequests = [
    {
      id: 'REF-001',
      ticketId: 'TKT-456789',
      eventName: 'Diwali Food Festival 2025',
      customerName: 'Rajesh Kumar',
      ticketType: 'VIP',
      quantity: 2,
      originalPrice: 5600,
      refundAmount: 5040,
      refundPercentage: 90,
      deduction: 560,
      reason: 'Medical Emergency',
      documents: ['medical_certificate.pdf'],
      requestDate: '2025-10-25',
      daysToEvent: 7,
      status: 'pending',
      priority: 'high'
    },
    {
      id: 'REF-002',
      ticketId: 'TKT-234567',
      eventName: 'New Year Gala Night',
      customerName: 'Priya Sharma',
      ticketType: 'Gold',
      quantity: 3,
      originalPrice: 8100,
      refundAmount: 7290,
      refundPercentage: 90,
      deduction: 810,
      reason: 'Change of Plans',
      documents: [],
      requestDate: '2025-11-15',
      daysToEvent: 46,
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 'REF-003',
      ticketId: 'TKT-987654',
      eventName: 'Diwali Food Festival 2025',
      customerName: 'Amit Patel',
      ticketType: 'General',
      quantity: 4,
      originalPrice: 3400,
      refundAmount: 1700,
      refundPercentage: 50,
      deduction: 1700,
      reason: 'Personal Reasons',
      documents: [],
      requestDate: '2025-10-28',
      daysToEvent: 4,
      status: 'pending',
      priority: 'low'
    }
  ];

  // Allocation management
  const allocationRequests = [
    {
      id: 'ALLOC-001',
      eventName: 'Diwali Food Festival 2025',
      requestedBy: 'Corporate Partner - TCS',
      ticketType: 'VIP',
      quantityRequested: 20,
      purpose: 'Corporate Gift',
      discount: 15,
      specialPrice: 2125,
      totalValue: 42500,
      status: 'pending',
      requestDate: '2025-10-20'
    },
    {
      id: 'ALLOC-002',
      eventName: 'New Year Gala Night',
      requestedBy: 'Influencer - @FoodieMumbai',
      ticketType: 'Platinum',
      quantityRequested: 5,
      purpose: 'Promotional Coverage',
      discount: 100,
      specialPrice: 0,
      totalValue: 0,
      status: 'pending',
      requestDate: '2025-11-10'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'sold_out': return 'text-red-400';
      case 'pending': return 'text-yellow-400';
      case 'approved': return 'text-green-400';
      case 'rejected': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const handleApproveRefund = (refundId) => {
    console.log('Approving refund:', refundId);
    alert(`Refund ${refundId} approved! Amount will be credited in 3-5 business days.`);
  };

  const handleRejectRefund = (refundId) => {
    console.log('Rejecting refund:', refundId);
    alert(`Refund ${refundId} rejected.`);
  };

  const handleApproveAllocation = (allocId) => {
    console.log('Approving allocation:', allocId);
    alert(`Allocation ${allocId} approved! Tickets will be generated.`);
  };

  const handleRejectAllocation = (allocId) => {
    console.log('Rejecting allocation:', allocId);
    alert(`Allocation ${allocId} rejected.`);
  };

  const handleUpdatePricing = (ruleId) => {
    console.log('Updating pricing rule:', ruleId);
    alert(`Pricing rule ${ruleId} updated successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      <AdminNav />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Package className="w-10 h-10 text-purple-400" />
            Event Inventory Management
          </h1>
          <p className="text-gray-400">Manage ticket allocation, dynamic pricing & refunds</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Ticket className="w-8 h-8 text-blue-400" />
              <span className="text-xs text-gray-400">Total Events</span>
            </div>
            <div className="text-3xl font-bold text-white">8</div>
            <div className="text-sm text-blue-400">4 active, 2 upcoming</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Tickets Sold</span>
            </div>
            <div className="text-3xl font-bold text-white">724</div>
            <div className="text-sm text-green-400">↑ 84.5% sell-through</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <IndianRupee className="w-8 h-8 text-yellow-400" />
              <span className="text-xs text-gray-400">Revenue</span>
            </div>
            <div className="text-3xl font-bold text-white">₹7.01L</div>
            <div className="text-sm text-yellow-400">+12% from last month</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-red-400" />
              <span className="text-xs text-gray-400">Pending Actions</span>
            </div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-sm text-red-400">3 refunds, 2 allocations</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {[
            { id: 'inventory', label: 'Inventory', icon: Package },
            { id: 'pricing', label: 'Dynamic Pricing', icon: TrendingUp },
            { id: 'refunds', label: 'Refund Requests', icon: RefreshCw },
            { id: 'allocation', label: 'Bulk Allocation', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6">
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Event Inventory Overview</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all">
                  + Add Event
                </button>
              </div>

              {eventInventory.map((event) => (
                <div key={event.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.eventName}</h3>
                      <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {event.eventDate} • {event.venue}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${getStatusColor(event.status)}`}>
                        {event.status.toUpperCase()}
                      </div>
                      <div className="text-gray-400 text-sm">Sell-through: {event.sellThroughRate}%</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.ticketTypes.map((ticket, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">{ticket.type}</span>
                          {ticket.status === 'sold_out' && (
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                              SOLD OUT
                            </span>
                          )}
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-gray-400">
                            <span>Total Capacity:</span>
                            <span className="text-white">{ticket.totalCapacity}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Sold:</span>
                            <span className="text-green-400">{ticket.sold}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Blocked:</span>
                            <span className="text-yellow-400">{ticket.blocked}</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Available:</span>
                            <span className="text-blue-400">{ticket.available}</span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Base Price:</span>
                            <span className="text-white font-semibold">₹{ticket.price}</span>
                          </div>
                          {ticket.dynamicPricing && (
                            <>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-400 text-sm">Current Price:</span>
                                <span className="text-green-400 font-semibold">₹{ticket.currentPrice}</span>
                              </div>
                              <div className="text-xs text-purple-400 text-right mt-1">
                                {ticket.priceChange}
                              </div>
                            </>
                          )}
                        </div>

                        {/* Progress bar */}
                        <div className="mt-4">
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                              style={{ width: `${(ticket.sold / ticket.totalCapacity) * 100}%` }}
                            />
                          </div>
                          <div className="text-xs text-gray-400 mt-1 text-center">
                            {((ticket.sold / ticket.totalCapacity) * 100).toFixed(1)}% sold
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="text-gray-400">
                      Total Revenue: <span className="text-white font-bold">₹{event.totalRevenue.toLocaleString()}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm">
                      Manage Inventory
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Dynamic Pricing Rules</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all">
                  + Create Rule
                </button>
              </div>

              {pricingRules.map((rule) => (
                <div key={rule.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{rule.eventName}</h3>
                      <p className="text-gray-400 text-sm mt-1">Strategy: {rule.strategy}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Last updated</div>
                      <div className="text-white">{rule.lastUpdated}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {rule.rules.map((r, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-3">
                          {r.status === 'active' ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <Clock className="w-5 h-5 text-gray-500" />
                          )}
                          <div>
                            <div className="text-white font-medium">{r.condition}</div>
                            <div className="text-gray-400 text-sm">Action: {r.action}</div>
                          </div>
                        </div>
                        <div className={`text-xs px-3 py-1 rounded-full ${r.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                          {r.status.toUpperCase()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Minimum Price</div>
                      <div className="text-white font-bold text-lg">₹{rule.minPrice}</div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Maximum Price</div>
                      <div className="text-white font-bold text-lg">₹{rule.maxPrice}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUpdatePricing(rule.id)}
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all"
                  >
                    Update Pricing Rules
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'refunds' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Refund Requests</h2>
                <div className="text-gray-400 text-sm">
                  {refundRequests.filter(r => r.status === 'pending').length} pending requests
                </div>
              </div>

              {refundRequests.map((refund) => (
                <div key={refund.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white">{refund.customerName}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(refund.priority)}`}>
                          {refund.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{refund.eventName}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Requested</div>
                      <div className="text-white">{refund.requestDate}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Ticket Type</div>
                      <div className="text-white font-semibold">{refund.ticketType}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Quantity</div>
                      <div className="text-white font-semibold">{refund.quantity}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Original Price</div>
                      <div className="text-white font-semibold">₹{refund.originalPrice}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Days to Event</div>
                      <div className="text-white font-semibold">{refund.daysToEvent} days</div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">Refund Calculation</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Original Amount:</span>
                        <span>₹{refund.originalPrice}</span>
                      </div>
                      <div className="flex justify-between text-red-400">
                        <span>Deduction ({100 - refund.refundPercentage}%):</span>
                        <span>-₹{refund.deduction}</span>
                      </div>
                      <div className="flex justify-between text-green-400 font-bold text-base pt-2 border-t border-yellow-500/30">
                        <span>Refund Amount:</span>
                        <span>₹{refund.refundAmount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-400 text-sm mb-2">Reason:</div>
                    <div className="text-white">{refund.reason}</div>
                    {refund.documents.length > 0 && (
                      <div className="mt-2 flex gap-2">
                        {refund.documents.map((doc, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            📄 {doc}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApproveRefund(refund.id)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve Refund
                    </button>
                    <button
                      onClick={() => handleRejectRefund(refund.id)}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'allocation' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Bulk Allocation Requests</h2>
                <div className="text-gray-400 text-sm">
                  {allocationRequests.filter(a => a.status === 'pending').length} pending requests
                </div>
              </div>

              {allocationRequests.map((allocation) => (
                <div key={allocation.id} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{allocation.requestedBy}</h3>
                      <p className="text-gray-400 text-sm mt-1">{allocation.eventName}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Requested</div>
                      <div className="text-white">{allocation.requestDate}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Ticket Type</div>
                      <div className="text-white font-semibold">{allocation.ticketType}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Quantity</div>
                      <div className="text-white font-semibold">{allocation.quantityRequested}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Discount</div>
                      <div className="text-yellow-400 font-semibold">{allocation.discount}%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-gray-400 text-sm">Special Price</div>
                      <div className="text-white font-semibold">₹{allocation.specialPrice}</div>
                    </div>
                  </div>

                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Purpose</div>
                        <div className="text-white font-semibold">{allocation.purpose}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-400 text-sm">Total Value</div>
                        <div className="text-purple-400 font-bold text-xl">
                          {allocation.totalValue === 0 ? 'Complimentary' : `₹${allocation.totalValue.toLocaleString()}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApproveAllocation(allocation.id)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve & Generate Tickets
                    </button>
                    <button
                      onClick={() => handleRejectAllocation(allocation.id)}
                      className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEventInventory;
