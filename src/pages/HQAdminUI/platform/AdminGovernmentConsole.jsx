import React, { useState } from 'react';
import {
  ArrowLeft, Building2, Shield, FileText, BarChart2, TrendingUp,
  Users, Store, MapPin, Download, Eye, CheckCircle, Clock,
  Globe, Award, Briefcase, IndianRupee, PieChart, Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminGovernmentConsole = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Government Partner Access Levels
  const [partnerAccess, setPartnerAccess] = useState([
    {
      id: 'GOV001',
      name: 'Ministry of MSME',
      type: 'Central Government',
      accessLevel: 'dashboard_only',
      dataAccess: ['MSME growth metrics', 'Regional commerce data', 'Employment impact'],
      lastAccess: '2024-12-28',
      activeReports: 5,
    },
    {
      id: 'GOV002',
      name: 'Karnataka Commerce Dept',
      type: 'State Government',
      accessLevel: 'full_regional',
      dataAccess: ['State commerce data', 'City-wise GMV', 'Merchant KYC status'],
      lastAccess: '2024-12-27',
      activeReports: 8,
    },
    {
      id: 'GOV003',
      name: 'GST Council',
      type: 'Tax Authority',
      accessLevel: 'tax_compliance',
      dataAccess: ['Transaction summaries', 'GST filings', 'Tax compliance rates'],
      lastAccess: '2024-12-26',
      activeReports: 3,
    },
    {
      id: 'GOV004',
      name: 'RBI Digital Payments',
      type: 'Regulator',
      accessLevel: 'compliance_only',
      dataAccess: ['Payment volumes', 'Settlement data', 'KYC compliance'],
      lastAccess: '2024-12-28',
      activeReports: 12,
    },
  ]);

  // MSME Growth Dashboard
  const msmeMetrics = {
    totalMSMEs: 3500,
    newMSMEsThisMonth: 234,
    msmeGMV: 450000000,
    avgMSMEGrowth: 34,
    jobsCreated: 12500,
    womenLedMSMEs: 890,
    digitalFirstMSMEs: 2100,
    formalizedMSMEs: 1800, // MSMEs that formalized because of ReZ
  };

  // Regional Commerce Data
  const regionalData = [
    {
      state: 'Karnataka',
      cities: 12,
      merchants: 3400,
      gmv: 120000000,
      growth: 45,
      digitalAdoption: 78,
      taxCompliance: 92,
    },
    {
      state: 'Maharashtra',
      cities: 15,
      merchants: 2800,
      gmv: 95000000,
      growth: 38,
      digitalAdoption: 72,
      taxCompliance: 89,
    },
    {
      state: 'Tamil Nadu',
      cities: 8,
      merchants: 1800,
      gmv: 65000000,
      growth: 42,
      digitalAdoption: 68,
      taxCompliance: 91,
    },
    {
      state: 'Telangana',
      cities: 6,
      merchants: 1500,
      gmv: 55000000,
      growth: 52,
      digitalAdoption: 75,
      taxCompliance: 88,
    },
  ];

  // Public Good Metrics (GDP Impact)
  const publicGoodMetrics = {
    estimatedGDPContribution: 2500000000, // 250 Cr
    taxRevenueFacilitated: 380000000, // 38 Cr
    formalSectorGrowth: 23, // % MSMEs moved to formal
    digitalPaymentAdoption: 67, // % increase in digital payments
    consumerSavings: 850000000, // 85 Cr saved by consumers
    merchantRevenueGrowth: 1200000000, // 120 Cr additional revenue
    employmentGenerated: 45000, // Direct + indirect jobs
    womenEmpowerment: 12500, // Women entrepreneurs enabled
  };

  // Compliance Reports Available
  const complianceReports = [
    {
      id: 'RPT001',
      name: 'Monthly Transaction Summary',
      frequency: 'Monthly',
      lastGenerated: '2024-12-01',
      format: 'PDF, Excel',
      recipients: ['RBI', 'GST Council'],
      status: 'submitted'
    },
    {
      id: 'RPT002',
      name: 'MSME Growth Report',
      frequency: 'Quarterly',
      lastGenerated: '2024-10-01',
      format: 'PDF',
      recipients: ['Ministry of MSME'],
      status: 'ready'
    },
    {
      id: 'RPT003',
      name: 'Digital Payment Adoption',
      frequency: 'Monthly',
      lastGenerated: '2024-12-01',
      format: 'Excel',
      recipients: ['NPCI', 'MeitY'],
      status: 'submitted'
    },
    {
      id: 'RPT004',
      name: 'State Commerce Dashboard',
      frequency: 'Real-time',
      lastGenerated: 'Live',
      format: 'Dashboard',
      recipients: ['State Govts (opt-in)'],
      status: 'active'
    },
  ];

  // Explainable AI Decisions
  const explainableDecisions = [
    {
      id: 'DEC001',
      type: 'Merchant Suspension',
      merchantId: 'M9012',
      decision: 'Temporarily suspended for fraud investigation',
      factors: [
        { factor: 'Unusual transaction pattern', weight: 40 },
        { factor: 'Multiple customer complaints', weight: 30 },
        { factor: 'Failed verification', weight: 30 },
      ],
      dataPoints: 156,
      appealable: true,
      regulatorVisible: true,
    },
    {
      id: 'DEC002',
      type: 'Commission Rate Change',
      merchantId: 'M001',
      decision: 'Commission reduced from 5% to 2%',
      factors: [
        { factor: 'Perfect refund rate (0%)', weight: 25 },
        { factor: 'High customer satisfaction (4.9)', weight: 25 },
        { factor: 'Volume threshold met', weight: 25 },
        { factor: 'Long tenure (2+ years)', weight: 25 },
      ],
      dataPoints: 890,
      appealable: false,
      regulatorVisible: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Government Partner Console</h1>
              <p className="text-blue-200 text-sm">Regulatory compliance & public good</p>
            </div>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <Building2 size={16} className="mr-1" />
            <span className="text-sm">Official</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{msmeMetrics.totalMSMEs}</p>
            <p className="text-xs text-blue-200">MSMEs</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">₹{(publicGoodMetrics.estimatedGDPContribution / 10000000).toFixed(0)}Cr</p>
            <p className="text-xs text-blue-200">GDP Impact</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{publicGoodMetrics.employmentGenerated.toLocaleString()}</p>
            <p className="text-xs text-blue-200">Jobs Created</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">{partnerAccess.length}</p>
            <p className="text-xs text-blue-200">Gov Partners</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['overview', 'msme', 'regional', 'reports', 'explainable'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Globe size={20} className="text-blue-400 mr-2" />
                <h3 className="text-white font-semibold">Public Good Positioning</h3>
              </div>
              <p className="text-gray-400 text-sm">
                "ReZ increases local GDP" - Regulators protect you instead of attacking
              </p>
            </div>

            {/* Public Good Metrics */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Economic Impact Summary</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-xs">GDP Contribution</p>
                  <p className="text-white font-bold text-xl">₹{(publicGoodMetrics.estimatedGDPContribution / 10000000).toFixed(0)} Cr</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <p className="text-green-400 text-xs">Tax Revenue Facilitated</p>
                  <p className="text-white font-bold text-xl">₹{(publicGoodMetrics.taxRevenueFacilitated / 10000000).toFixed(0)} Cr</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-400 text-xs">Consumer Savings</p>
                  <p className="text-white font-bold text-xl">₹{(publicGoodMetrics.consumerSavings / 10000000).toFixed(0)} Cr</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-blue-400 text-xs">Merchant Revenue Growth</p>
                  <p className="text-white font-bold text-xl">₹{(publicGoodMetrics.merchantRevenueGrowth / 10000000).toFixed(0)} Cr</p>
                </div>
              </div>
            </div>

            {/* Government Partners */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Government Partners</h4>
              <div className="space-y-2">
                {partnerAccess.map(partner => (
                  <div key={partner.id} className="bg-gray-700/50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <Building2 size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{partner.name}</p>
                        <p className="text-gray-400 text-xs">{partner.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 text-sm">{partner.activeReports} reports</p>
                      <p className="text-gray-500 text-xs">Last: {partner.lastAccess}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MSME Tab */}
        {activeTab === 'msme' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border border-orange-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Briefcase size={20} className="text-orange-400 mr-2" />
                <h3 className="text-white font-semibold">MSME Growth Dashboard</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Tracking formalization, growth, and digital adoption of micro businesses
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">MSME Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Total MSMEs on Platform</p>
                  <p className="text-white font-bold text-2xl">{msmeMetrics.totalMSMEs.toLocaleString()}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">New This Month</p>
                  <p className="text-green-400 font-bold text-2xl">+{msmeMetrics.newMSMEsThisMonth}</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">MSME GMV</p>
                  <p className="text-white font-bold text-2xl">₹{(msmeMetrics.msmeGMV / 10000000).toFixed(0)} Cr</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Avg Growth Rate</p>
                  <p className="text-green-400 font-bold text-2xl">+{msmeMetrics.avgMSMEGrowth}%</p>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-medium mb-4">Social Impact</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Users size={18} className="text-blue-400 mr-3" />
                    <span className="text-white">Jobs Created</span>
                  </div>
                  <span className="text-green-400 font-bold">{msmeMetrics.jobsCreated.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Award size={18} className="text-pink-400 mr-3" />
                    <span className="text-white">Women-Led MSMEs</span>
                  </div>
                  <span className="text-pink-400 font-bold">{msmeMetrics.womenLedMSMEs.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Activity size={18} className="text-purple-400 mr-3" />
                    <span className="text-white">Digital-First MSMEs</span>
                  </div>
                  <span className="text-purple-400 font-bold">{msmeMetrics.digitalFirstMSMEs.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-green-400 mr-3" />
                    <span className="text-white">Formalized via ReZ</span>
                  </div>
                  <span className="text-green-400 font-bold">{msmeMetrics.formalizedMSMEs.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regional Tab */}
        {activeTab === 'regional' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <MapPin size={20} className="text-teal-400 mr-2" />
                <h3 className="text-white font-semibold">Regional Commerce Data</h3>
              </div>
              <p className="text-gray-400 text-sm">
                State-wise commerce metrics for government dashboards
              </p>
            </div>

            {regionalData.map(region => (
              <div key={region.state} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{region.state}</h3>
                    <p className="text-gray-400 text-sm">{region.cities} cities • {region.merchants.toLocaleString()} merchants</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">+{region.growth}%</p>
                    <p className="text-gray-500 text-xs">Growth</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">₹{(region.gmv / 10000000).toFixed(0)}Cr</p>
                    <p className="text-gray-400 text-xs">GMV</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-blue-400 font-bold">{region.digitalAdoption}%</p>
                    <p className="text-gray-400 text-xs">Digital</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{region.taxCompliance}%</p>
                    <p className="text-gray-400 text-xs">Tax Compliant</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <FileText size={20} className="text-purple-400 mr-2" />
                <h3 className="text-white font-semibold">Compliance Reports</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Auto-generated reports for regulatory submission
              </p>
            </div>

            {complianceReports.map(report => (
              <div key={report.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-medium">{report.name}</h4>
                    <p className="text-gray-400 text-sm">{report.frequency}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    report.status === 'submitted' ? 'bg-green-600 text-white' :
                    report.status === 'active' ? 'bg-blue-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {report.status}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-400">Last: {report.lastGenerated}</span>
                  <span className="text-gray-400">Format: {report.format}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {report.recipients.map((r, idx) => (
                    <span key={idx} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {r}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Eye size={14} className="mr-1" /> Preview
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm flex items-center justify-center">
                    <Download size={14} className="mr-1" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Explainable AI Tab */}
        {activeTab === 'explainable' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-900/30 to-violet-900/30 border border-indigo-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Shield size={20} className="text-indigo-400 mr-2" />
                <h3 className="text-white font-semibold">Explainable AI Ledger</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Every decision is explainable - regulators can audit anytime
              </p>
            </div>

            {explainableDecisions.map(decision => (
              <div key={decision.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded">
                      {decision.type}
                    </span>
                    <p className="text-white font-medium mt-2">{decision.decision}</p>
                    <p className="text-gray-400 text-sm">{decision.merchantId}</p>
                  </div>
                  {decision.regulatorVisible && (
                    <span className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded">
                      Regulator Visible
                    </span>
                  )}
                </div>

                {/* Decision Factors */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-xs mb-2">Decision Factors ({decision.dataPoints} data points)</p>
                  <div className="space-y-2">
                    {decision.factors.map((factor, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-white text-sm">{factor.factor}</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-600 rounded-full mr-2">
                            <div
                              className="h-full bg-indigo-500 rounded-full"
                              style={{ width: `${factor.weight}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-400 text-xs">{factor.weight}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${decision.appealable ? 'text-yellow-400' : 'text-gray-500'}`}>
                    {decision.appealable ? '⚠️ Appealable' : '✓ Final Decision'}
                  </span>
                  <button className="text-indigo-400 text-sm">
                    View Full Audit Trail →
                  </button>
                </div>
              </div>
            ))}

            {/* Compliance Promise */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <CheckCircle size={18} className="text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Compliance Promise</span>
              </div>
              <p className="text-gray-300 text-sm">
                ReZ commits to full transparency with regulators. Every automated decision
                can be explained, audited, and appealed. This builds trust and ensures
                regulators view ReZ as a compliance partner, not a threat.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGovernmentConsole;
