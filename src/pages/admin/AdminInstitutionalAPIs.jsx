import React, { useState } from 'react';
import {
  ArrowLeft, Globe, Building2, GraduationCap, Landmark, TrendingUp,
  Database, Key, Shield, Activity, ChevronRight, ExternalLink,
  DollarSign, Users, BarChart3, Lock, CheckCircle, Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminInstitutionalAPIs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('partners');

  const institutionalPartners = [
    {
      id: 1,
      name: 'HDFC Bank',
      type: 'Banking',
      icon: Landmark,
      status: 'active',
      dataAccess: ['Transaction patterns', 'Credit scoring', 'Spending categories'],
      apiCalls: '2.4M/month',
      revenue: '₹18L/month',
      since: 'Jan 2024'
    },
    {
      id: 2,
      name: 'Bangalore Municipal Corporation',
      type: 'Government',
      icon: Building2,
      status: 'active',
      dataAccess: ['Local commerce data', 'Business activity', 'Employment metrics'],
      apiCalls: '450K/month',
      revenue: '₹5L/month',
      since: 'Mar 2024'
    },
    {
      id: 3,
      name: 'IIM Bangalore',
      type: 'Education',
      icon: GraduationCap,
      status: 'active',
      dataAccess: ['Student spending', 'Campus commerce', 'Research data'],
      apiCalls: '120K/month',
      revenue: '₹2L/month',
      since: 'Jun 2024'
    },
    {
      id: 4,
      name: 'Nielsen India',
      type: 'Research',
      icon: BarChart3,
      status: 'pending',
      dataAccess: ['Consumer trends', 'Category insights', 'Price indices'],
      apiCalls: 'Pending',
      revenue: '₹25L/month (proposed)',
      since: 'Negotiating'
    },
    {
      id: 5,
      name: 'ICICI Lombard',
      type: 'Insurance',
      icon: Shield,
      status: 'active',
      dataAccess: ['Health spending', 'Lifestyle patterns', 'Risk indicators'],
      apiCalls: '890K/month',
      revenue: '₹12L/month',
      since: 'Apr 2024'
    }
  ];

  const rezIndex = {
    name: 'ReZ Local Economy Index',
    description: 'Real-time indicator of local economic health',
    subscribers: 45,
    dataPoints: [
      { metric: 'Consumer Spending Index', value: 127.4, change: '+3.2%' },
      { metric: 'Merchant Activity Score', value: 892, change: '+12%' },
      { metric: 'New Business Creation', value: 234, change: '+8%' },
      { metric: 'Employment Indicator', value: 1.24, change: '+0.05' },
      { metric: 'Price Inflation Local', value: 4.2, change: '-0.3%' }
    ]
  };

  const apiProducts = [
    {
      name: 'Credit Scoring API',
      description: 'Alternative credit scoring using transaction history',
      pricing: '₹2 per query',
      clients: 12,
      monthlyRevenue: '₹8.5L'
    },
    {
      name: 'Demand Prediction API',
      description: 'Hyperlocal demand forecasting for any category',
      pricing: '₹5K per zone/month',
      clients: 28,
      monthlyRevenue: '₹14L'
    },
    {
      name: 'Price Intelligence API',
      description: 'Real-time pricing data across categories',
      pricing: '₹10K per category/month',
      clients: 8,
      monthlyRevenue: '₹4.8L'
    },
    {
      name: 'Consumer Insights API',
      description: 'Anonymized consumer behavior patterns',
      pricing: '₹25K per report',
      clients: 15,
      monthlyRevenue: '₹6.2L'
    }
  ];

  const dataExports = {
    total: '₹52L/month',
    byCategory: [
      { name: 'Banking & Finance', amount: '₹30L', percentage: 58 },
      { name: 'Government', amount: '₹8L', percentage: 15 },
      { name: 'Research & Academia', amount: '₹7L', percentage: 13 },
      { name: 'Insurance', amount: '₹5L', percentage: 10 },
      { name: 'Others', amount: '₹2L', percentage: 4 }
    ]
  };

  const pendingRequests = [
    {
      from: 'RBI Financial Stability Unit',
      request: 'Monthly transaction volume data by category',
      status: 'Under review',
      potential: 'Free (regulatory)'
    },
    {
      from: 'Amazon India',
      request: 'Local merchant pricing intelligence',
      status: 'Declined',
      potential: '₹50L/month'
    },
    {
      from: 'NASSCOM',
      request: 'Startup ecosystem spending patterns',
      status: 'Negotiating',
      potential: '₹3L/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold flex items-center">
                <Globe size={24} className="mr-2" />
                Institutional Data APIs
              </h1>
              <p className="text-emerald-200 text-sm">Make institutions depend on ReZ data</p>
            </div>
          </div>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">₹52L</p>
            <p className="text-xs text-emerald-200">Monthly Revenue</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">45</p>
            <p className="text-xs text-emerald-200">Active Partners</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">5.8M</p>
            <p className="text-xs text-emerald-200">API Calls/Month</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-800 border-b border-gray-700">
        {[
          { id: 'partners', label: 'Partners' },
          { id: 'index', label: 'ReZ Index' },
          { id: 'products', label: 'API Products' },
          { id: 'requests', label: 'Requests' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? 'text-emerald-400 border-b-2 border-emerald-400'
                : 'text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'partners' && (
          <div className="space-y-3">
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-emerald-400 font-bold mb-1">Institutional Dependence</h3>
              <p className="text-gray-300 text-sm">
                When banks, governments, and universities depend on your data, you become infrastructure
              </p>
            </div>

            {institutionalPartners.map(partner => {
              const Icon = partner.icon;
              return (
                <div key={partner.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-3">
                        <Icon size={24} className="text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{partner.name}</h4>
                        <p className="text-gray-400 text-sm">{partner.type}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      partner.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {partner.status}
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-gray-500 text-xs mb-1">Data Access:</p>
                    <div className="flex flex-wrap gap-1">
                      {partner.dataAccess.map((access, idx) => (
                        <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {access}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">API Calls</p>
                      <p className="text-white font-medium">{partner.apiCalls}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Revenue</p>
                      <p className="text-green-400 font-medium">{partner.revenue}</p>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-2">
                      <p className="text-gray-400 text-xs">Since</p>
                      <p className="text-white font-medium">{partner.since}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'index' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-4 border border-blue-500/30">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{rezIndex.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{rezIndex.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">{rezIndex.subscribers} institutional subscribers</span>
                <span className="text-green-400 font-bold">₹15L/month</span>
              </div>
            </div>

            <h3 className="text-white font-bold">Live Index Components</h3>
            <div className="space-y-2">
              {rezIndex.dataPoints.map((point, idx) => (
                <div key={idx} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{point.metric}</h4>
                    <p className="text-3xl font-bold text-white">{point.value}</p>
                  </div>
                  <span className={`text-lg font-bold ${
                    point.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {point.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">Revenue by Sector</h3>
              <p className="text-green-400 text-2xl font-bold mb-4">{dataExports.total}</p>
              <div className="space-y-3">
                {dataExports.byCategory.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{cat.name}</span>
                      <span className="text-white font-medium">{cat.amount}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-3">
            {apiProducts.map((product, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-bold">{product.name}</h4>
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                    {product.pricing}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{product.clients} clients</span>
                  <span className="text-green-400 font-medium">{product.monthlyRevenue}/month</span>
                </div>
              </div>
            ))}

            <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">
              + Create New API Product
            </button>
          </div>
        )}

        {activeTab === 'requests' && (
          <div className="space-y-3">
            <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-xl p-4 mb-4">
              <h3 className="text-yellow-400 font-bold mb-1">Pending Data Requests</h3>
              <p className="text-gray-300 text-sm">
                Review and approve institutional data access requests
              </p>
            </div>

            {pendingRequests.map((req, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-bold">{req.from}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    req.status === 'Declined' ? 'bg-red-500/20 text-red-400' :
                    req.status === 'Under review' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {req.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{req.request}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">Potential: {req.potential}</span>
                  {req.status !== 'Declined' && (
                    <button className="text-emerald-400 text-sm">Review →</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInstitutionalAPIs;
