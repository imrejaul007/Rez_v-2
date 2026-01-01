import React, { useState } from 'react';
import {
  ArrowLeft, Building2, FileText, Download, TrendingUp,
  Users, DollarSign, MapPin, Calendar, Filter, BarChart3,
  PieChart, Activity, ChevronRight, Eye, CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminMSMEReports = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('Q3-2023');

  const stats = {
    totalMSMEs: 4567,
    activeMSMEs: 4234,
    totalGMV: 2450000000,
    employmentGenerated: 12890,
    avgTransactionValue: 1250,
    digitalPayments: 78
  };

  const cityBreakdown = [
    { city: 'Bangalore', msmes: 1245, gmv: 890000000, employment: 4560, growth: 23 },
    { city: 'Mumbai', msmes: 890, gmv: 650000000, employment: 3200, growth: 18 },
    { city: 'Delhi', msmes: 756, gmv: 480000000, employment: 2450, growth: 15 },
    { city: 'Chennai', msmes: 534, gmv: 280000000, employment: 1560, growth: 21 },
    { city: 'Hyderabad', msmes: 445, gmv: 150000000, employment: 1120, growth: 28 }
  ];

  const sectorBreakdown = [
    { sector: 'Food & Beverages', count: 1245, gmv: 680000000, percentage: 27 },
    { sector: 'Retail Trade', count: 980, gmv: 520000000, percentage: 21 },
    { sector: 'Personal Services', count: 756, gmv: 380000000, percentage: 17 },
    { sector: 'Healthcare', count: 445, gmv: 290000000, percentage: 10 },
    { sector: 'Education', count: 334, gmv: 180000000, percentage: 7 },
    { sector: 'Others', count: 807, gmv: 400000000, percentage: 18 }
  ];

  const governmentReports = [
    {
      id: 1,
      name: 'Quarterly MSME Growth Report',
      agency: 'Ministry of MSME',
      period: 'Q3 2023-24',
      status: 'submitted',
      submittedOn: '2024-01-10'
    },
    {
      id: 2,
      name: 'Digital Payments Adoption',
      agency: 'RBI',
      period: 'Monthly Dec 2023',
      status: 'submitted',
      submittedOn: '2024-01-05'
    },
    {
      id: 3,
      name: 'Employment Generation Report',
      agency: 'Labour Ministry',
      period: 'H2 2023-24',
      status: 'pending',
      dueDate: '2024-01-31'
    },
    {
      id: 4,
      name: 'GST Transaction Summary',
      agency: 'GSTN',
      period: 'Monthly Jan 2024',
      status: 'draft',
      dueDate: '2024-02-10'
    }
  ];

  const complianceMetrics = [
    { metric: 'GST Registered MSMEs', value: 89, target: 95, status: 'warning' },
    { metric: 'Digital Payment Adoption', value: 78, target: 80, status: 'good' },
    { metric: 'Udyam Registration', value: 65, target: 80, status: 'warning' },
    { metric: 'Bank Account Linked', value: 94, target: 95, status: 'good' }
  ];

  const formatCurrency = (amount) => {
    if (amount >= 10000000) return `₹${(amount/10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount/100000).toFixed(1)} L`;
    return `₹${amount}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'bg-green-500/20 text-green-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'draft': return 'bg-blue-500/20 text-blue-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">MSME Reports</h1>
              <p className="text-orange-200 text-sm">Government & regulatory reporting</p>
            </div>
          </div>
          <button className="bg-white/20 p-2 rounded-lg">
            <Download size={24} />
          </button>
        </div>

        {/* Period Selector */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3 mb-4">
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <span>Period:</span>
          </div>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="bg-transparent text-white font-medium"
          >
            <option value="Q4-2023" className="text-black">Q4 FY 2023-24</option>
            <option value="Q3-2023" className="text-black">Q3 FY 2023-24</option>
            <option value="Q2-2023" className="text-black">Q2 FY 2023-24</option>
          </select>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{(stats.totalMSMEs/1000).toFixed(1)}K</p>
            <p className="text-xs text-orange-200">Total MSMEs</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{formatCurrency(stats.totalGMV)}</p>
            <p className="text-xs text-orange-200">Total GMV</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold">{(stats.employmentGenerated/1000).toFixed(1)}K</p>
            <p className="text-xs text-orange-200">Jobs Created</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'overview' ? 'bg-orange-600 text-white' : 'text-gray-400'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'reports' ? 'bg-orange-600 text-white' : 'text-gray-400'
            }`}
          >
            Reports
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium ${
              activeTab === 'compliance' ? 'bg-orange-600 text-white' : 'text-gray-400'
            }`}
          >
            Compliance
          </button>
        </div>
      </div>

      {/* Overview Content */}
      {activeTab === 'overview' && (
        <div className="px-4 space-y-4">
          {/* City Breakdown */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <MapPin size={18} className="mr-2 text-orange-400" />
              City-wise Distribution
            </h3>
            <div className="space-y-3">
              {cityBreakdown.map((city, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{city.city}</span>
                    <span className="text-green-400 text-sm">+{city.growth}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400 text-xs">MSMEs</p>
                      <p className="text-white">{city.msmes}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">GMV</p>
                      <p className="text-white">{formatCurrency(city.gmv)}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Jobs</p>
                      <p className="text-white">{city.employment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sector Breakdown */}
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <PieChart size={18} className="mr-2 text-purple-400" />
              Sector Distribution
            </h3>
            <div className="space-y-3">
              {sectorBreakdown.map((sector, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-300 text-sm">{sector.sector}</span>
                    <span className="text-white font-medium">{sector.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                      style={{ width: `${sector.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{sector.count} businesses</span>
                    <span>{formatCurrency(sector.gmv)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reports Content */}
      {activeTab === 'reports' && (
        <div className="px-4 space-y-3">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-start">
              <FileText size={20} className="text-orange-400 mr-2 mt-0.5" />
              <div>
                <p className="text-orange-400 font-medium">Government Submissions</p>
                <p className="text-gray-300 text-sm">Reports required by regulatory bodies</p>
              </div>
            </div>
          </div>

          {governmentReports.map(report => (
            <div key={report.id} className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-white font-bold">{report.name}</p>
                  <p className="text-gray-400 text-sm">{report.agency}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{report.period}</span>
                {report.status === 'submitted' ? (
                  <span className="text-green-400">Submitted: {report.submittedOn}</span>
                ) : (
                  <span className="text-yellow-400">Due: {report.dueDate}</span>
                )}
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Eye size={16} className="mr-1" />
                  Preview
                </button>
                <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                  <Download size={16} className="mr-1" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Compliance Content */}
      {activeTab === 'compliance' && (
        <div className="px-4 space-y-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-white font-bold mb-4">Compliance Metrics</h3>
            <div className="space-y-4">
              {complianceMetrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{metric.metric}</span>
                    <div className="flex items-center">
                      <span className={`font-bold ${
                        metric.status === 'good' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {metric.value}%
                      </span>
                      <span className="text-gray-500 text-sm ml-2">/ {metric.target}%</span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full">
                    <div
                      className={`h-full rounded-full ${
                        metric.status === 'good' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-800 p-4 rounded-xl text-center">
              <FileText size={24} className="mx-auto mb-2 text-orange-400" />
              <p className="text-white text-sm font-medium">MSME Summary</p>
              <p className="text-gray-400 text-xs">PDF Report</p>
            </button>
            <button className="bg-gray-800 p-4 rounded-xl text-center">
              <BarChart3 size={24} className="mx-auto mb-2 text-blue-400" />
              <p className="text-white text-sm font-medium">Growth Analytics</p>
              <p className="text-gray-400 text-xs">Excel Export</p>
            </button>
            <button className="bg-gray-800 p-4 rounded-xl text-center">
              <Users size={24} className="mx-auto mb-2 text-green-400" />
              <p className="text-white text-sm font-medium">Employment Data</p>
              <p className="text-gray-400 text-xs">CSV Export</p>
            </button>
            <button className="bg-gray-800 p-4 rounded-xl text-center">
              <Activity size={24} className="mx-auto mb-2 text-purple-400" />
              <p className="text-white text-sm font-medium">Transaction Data</p>
              <p className="text-gray-400 text-xs">API Access</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMSMEReports;
