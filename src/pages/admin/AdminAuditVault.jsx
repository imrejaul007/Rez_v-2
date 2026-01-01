import React, { useState } from 'react';
import {
  ArrowLeft, Shield, Lock, FileText, Search, Download, Eye,
  Clock, User, Store, Coins, AlertTriangle, CheckCircle, Filter,
  Calendar, ChevronRight, Database, Key, Fingerprint, Globe,
  Activity, Server, RefreshCw, Hash, BookOpen, Scale, Gavel
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminAuditVault = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('logs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLog, setSelectedLog] = useState(null);

  // Immutable Audit Logs
  const [auditLogs, setAuditLogs] = useState([
    {
      id: 'LOG001',
      timestamp: '2024-12-28 14:32:15.847',
      eventType: 'COIN_CREDIT',
      category: 'financial',
      severity: 'info',
      actor: { type: 'system', id: 'COIN_ENGINE_V2' },
      subject: { type: 'user', id: 'U12345', name: 'Rahul Sharma' },
      action: 'Coin credit for transaction',
      details: {
        transactionId: 'TXN789456',
        merchantId: 'M5678',
        amount: 1250,
        coinsAwarded: 62,
        rule: 'STANDARD_5_PERCENT'
      },
      ipAddress: '103.45.67.89',
      userAgent: 'ReZ-App/2.5.0 (Android 13)',
      hash: 'sha256:abc123def456...',
      previousHash: 'sha256:xyz789...',
      verified: true
    },
    {
      id: 'LOG002',
      timestamp: '2024-12-28 14:30:22.123',
      eventType: 'MERCHANT_SUSPEND',
      category: 'moderation',
      severity: 'warning',
      actor: { type: 'admin', id: 'A001', name: 'Fraud Team' },
      subject: { type: 'merchant', id: 'M9012', name: 'Suspicious Store' },
      action: 'Merchant suspended due to fraud investigation',
      details: {
        reason: 'Multiple fake transaction reports',
        evidence: ['Report #123', 'Report #456'],
        pendingAmount: 45000,
        autoReversal: true
      },
      ipAddress: '10.0.1.50',
      userAgent: 'Admin-Dashboard/1.0',
      hash: 'sha256:def789ghi012...',
      previousHash: 'sha256:abc123def456...',
      verified: true
    },
    {
      id: 'LOG003',
      timestamp: '2024-12-28 14:28:05.456',
      eventType: 'COIN_RULE_CHANGE',
      category: 'config',
      severity: 'critical',
      actor: { type: 'admin', id: 'A002', name: 'Super Admin' },
      subject: { type: 'system', id: 'COIN_RULES' },
      action: 'Global coin earning rate modified',
      details: {
        previousValue: '5%',
        newValue: '4%',
        affectedCategories: ['all'],
        effectiveFrom: '2024-12-29 00:00:00',
        approvedBy: 'Finance Head'
      },
      ipAddress: '10.0.1.100',
      userAgent: 'Admin-Dashboard/1.0',
      hash: 'sha256:ghi345jkl678...',
      previousHash: 'sha256:def789ghi012...',
      verified: true
    },
    {
      id: 'LOG004',
      timestamp: '2024-12-28 14:25:30.789',
      eventType: 'DISPUTE_RESOLUTION',
      category: 'support',
      severity: 'info',
      actor: { type: 'admin', id: 'A003', name: 'Support L2' },
      subject: { type: 'dispute', id: 'DSP001' },
      action: 'Dispute resolved in favor of user',
      details: {
        userId: 'U12345',
        merchantId: 'M5678',
        disputeAmount: 1250,
        coinsAwarded: 75,
        reason: 'System API timeout confirmed',
        compensation: '20% bonus coins'
      },
      ipAddress: '10.0.1.75',
      userAgent: 'Admin-Dashboard/1.0',
      hash: 'sha256:jkl901mno234...',
      previousHash: 'sha256:ghi345jkl678...',
      verified: true
    },
    {
      id: 'LOG005',
      timestamp: '2024-12-28 14:20:00.000',
      eventType: 'GLOBAL_FREEZE',
      category: 'emergency',
      severity: 'critical',
      actor: { type: 'admin', id: 'A001', name: 'Ops Manager' },
      subject: { type: 'system', id: 'COIN_ECONOMY' },
      action: 'Emergency coin freeze activated',
      details: {
        scope: 'city:mumbai',
        reason: 'Suspected abuse cluster detected',
        duration: '2 hours',
        impactedUsers: 15000,
        impactedMerchants: 450
      },
      ipAddress: '10.0.1.50',
      userAgent: 'Admin-Dashboard/1.0',
      hash: 'sha256:mno567pqr890...',
      previousHash: 'sha256:jkl901mno234...',
      verified: true
    },
  ]);

  // Decision Explanations (AI/System decisions)
  const [decisions, setDecisions] = useState([
    {
      id: 'DEC001',
      timestamp: '2024-12-28 14:15:00',
      type: 'TRUST_SCORE_CHANGE',
      subject: { type: 'user', id: 'U78901', name: 'Flagged User' },
      decision: 'Trust score reduced from 65 to 32',
      explanation: {
        summary: 'Multiple abuse indicators detected over 7-day period',
        factors: [
          { factor: 'Duplicate bill uploads', weight: 30, impact: -15 },
          { factor: 'Unusual earning pattern', weight: 25, impact: -10 },
          { factor: 'Multiple device logins', weight: 15, impact: -5 },
          { factor: 'Referral chain anomaly', weight: 30, impact: -3 },
        ],
        dataPoints: 45,
        confidenceScore: 94,
        modelVersion: 'TRUST_V2.3'
      },
      actions: ['Shadow throttle enabled', 'Manual review flagged'],
      appealable: true
    },
    {
      id: 'DEC002',
      timestamp: '2024-12-28 13:45:00',
      type: 'AUTO_DISPUTE_RESOLUTION',
      subject: { type: 'dispute', id: 'DSP045' },
      decision: 'Auto-resolved in favor of user',
      explanation: {
        summary: 'Clear system fault detected, user eligible for compensation',
        factors: [
          { factor: 'System log confirms API timeout', weight: 40, impact: 'FAVOR_USER' },
          { factor: 'User trust score = 85', weight: 20, impact: 'FAVOR_USER' },
          { factor: 'First dispute in 6 months', weight: 20, impact: 'FAVOR_USER' },
          { factor: 'Merchant has no disputes', weight: 20, impact: 'NEUTRAL' },
        ],
        dataPoints: 12,
        confidenceScore: 98,
        modelVersion: 'DISPUTE_V1.5'
      },
      actions: ['75 coins credited', 'Merchant notified'],
      appealable: false
    },
    {
      id: 'DEC003',
      timestamp: '2024-12-28 12:30:00',
      type: 'MERCHANT_TIER_CHANGE',
      subject: { type: 'merchant', id: 'M3456', name: 'Royal Biryani House' },
      decision: 'Upgraded from Gold to Platinum tier',
      explanation: {
        summary: 'Consistent performance excellence over 90 days',
        factors: [
          { factor: '0% refund rate', weight: 25, impact: '+8' },
          { factor: '4.8 avg rating', weight: 25, impact: '+7' },
          { factor: '500+ transactions/month', weight: 25, impact: '+5' },
          { factor: '95% repeat customer rate', weight: 25, impact: '+6' },
        ],
        dataPoints: 1500,
        confidenceScore: 99,
        modelVersion: 'MERCHANT_TIER_V2.0'
      },
      actions: ['Commission reduced to 2%', 'Premium badge enabled'],
      appealable: false
    },
  ]);

  // Regulatory Compliance Reports
  const [complianceReports, setComplianceReports] = useState([
    {
      id: 'RPT001',
      name: 'Monthly Transaction Report - December 2024',
      type: 'RBI Compliance',
      generatedAt: '2024-12-28',
      period: 'Dec 1-28, 2024',
      status: 'ready',
      size: '2.4 MB',
      records: 125000
    },
    {
      id: 'RPT002',
      name: 'GST Transaction Summary - Q3 2024',
      type: 'Tax Compliance',
      generatedAt: '2024-12-25',
      period: 'Oct-Dec 2024',
      status: 'ready',
      size: '5.8 MB',
      records: 450000
    },
    {
      id: 'RPT003',
      name: 'Merchant KYC Status Report',
      type: 'PMLA Compliance',
      generatedAt: '2024-12-20',
      period: 'As of Dec 20, 2024',
      status: 'ready',
      size: '1.2 MB',
      records: 3500
    },
    {
      id: 'RPT004',
      name: 'Suspicious Activity Report',
      type: 'FIU-IND',
      generatedAt: '2024-12-15',
      period: 'Nov 2024',
      status: 'submitted',
      size: '890 KB',
      records: 45
    },
  ]);

  // Data Retention Policies
  const retentionPolicies = [
    { dataType: 'Transaction Logs', retention: '7 years', encrypted: true, location: 'India DC' },
    { dataType: 'User PII', retention: '5 years post-deletion', encrypted: true, location: 'India DC' },
    { dataType: 'Audit Logs', retention: 'Permanent', encrypted: true, location: 'India DC' },
    { dataType: 'Session Data', retention: '90 days', encrypted: true, location: 'India DC' },
    { dataType: 'Analytics', retention: '3 years', encrypted: false, location: 'India DC' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'warning': return 'bg-yellow-600';
      case 'info': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'financial': return Coins;
      case 'moderation': return Shield;
      case 'config': return Settings;
      case 'support': return Scale;
      case 'emergency': return AlertTriangle;
      default: return FileText;
    }
  };

  const Settings = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button onClick={() => navigate(-1)} className="mr-3">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Regulatory Audit Vault</h1>
              <p className="text-slate-300 text-sm">Immutable logs & compliance</p>
            </div>
          </div>
          <div className="flex items-center bg-green-600/20 px-3 py-1 rounded-full">
            <Shield size={16} className="mr-1 text-green-400" />
            <span className="text-green-300 text-sm">Tamper-Proof</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">12.5M</p>
            <p className="text-xs text-slate-300">Total Logs</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold text-green-400">100%</p>
            <p className="text-xs text-slate-300">Verified</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">7</p>
            <p className="text-xs text-slate-300">Reports</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <p className="text-lg font-bold">99.9%</p>
            <p className="text-xs text-slate-300">Uptime</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700 px-4 overflow-x-auto">
        {['logs', 'decisions', 'reports', 'retention'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
              activeTab === tab
                ? 'text-slate-300 border-b-2 border-slate-400'
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Audit Logs Tab */}
        {activeTab === 'logs' && (
          <div className="space-y-4">
            {/* Search & Filters */}
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by ID, user, action..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl"
                />
              </div>
              <button className="bg-gray-800 text-gray-400 p-3 rounded-xl">
                <Filter size={20} />
              </button>
              <button className="bg-gray-800 text-gray-400 p-3 rounded-xl">
                <Calendar size={20} />
              </button>
            </div>

            {/* Log Entries */}
            {auditLogs.map(log => {
              const CategoryIcon = getCategoryIcon(log.category);
              return (
                <div
                  key={log.id}
                  onClick={() => setSelectedLog(log)}
                  className="bg-gray-800 rounded-xl p-4 cursor-pointer hover:bg-gray-750"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${getSeverityColor(log.severity)} rounded-lg flex items-center justify-center mr-3`}>
                        <CategoryIcon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{log.eventType}</p>
                        <p className="text-gray-400 text-sm">{log.action}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {log.verified && (
                        <span className="flex items-center text-green-400 text-xs">
                          <CheckCircle size={12} className="mr-1" /> Verified
                        </span>
                      )}
                      <p className="text-gray-500 text-xs mt-1">{log.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400">
                        <Clock size={12} className="inline mr-1" />
                        {log.timestamp}
                      </span>
                      <span className="text-gray-400">
                        {log.actor.type === 'admin' ? (
                          <><User size={12} className="inline mr-1" />{log.actor.name}</>
                        ) : (
                          <><Server size={12} className="inline mr-1" />{log.actor.id}</>
                        )}
                      </span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </div>

                  {/* Hash Preview */}
                  <div className="mt-2 bg-gray-700/30 rounded-lg px-3 py-2 flex items-center">
                    <Hash size={14} className="text-gray-500 mr-2" />
                    <span className="text-gray-500 text-xs font-mono truncate">{log.hash}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Decision Explanations Tab */}
        {activeTab === 'decisions' && (
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-4 mb-4">
              <div className="flex items-center mb-2">
                <BookOpen size={18} className="text-slate-400 mr-2" />
                <h3 className="text-white font-medium">Decision Transparency</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Every automated decision is logged with full explanation of contributing factors,
                data points used, and confidence scores. Users can appeal flagged decisions.
              </p>
            </div>

            {decisions.map(decision => (
              <div key={decision.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="bg-purple-600/20 text-purple-400 text-xs px-2 py-1 rounded">
                      {decision.type}
                    </span>
                    <h3 className="text-white font-bold mt-2">{decision.decision}</h3>
                    <p className="text-gray-400 text-sm">{decision.subject.name || decision.subject.id}</p>
                  </div>
                  <p className="text-gray-500 text-xs">{decision.timestamp}</p>
                </div>

                {/* Explanation Summary */}
                <div className="bg-gray-700/30 rounded-lg p-3 mb-3">
                  <p className="text-white text-sm mb-3">{decision.explanation.summary}</p>

                  {/* Factors */}
                  <div className="space-y-2">
                    {decision.explanation.factors.map((factor, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                          <span className="text-gray-300">{factor.factor}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2">Weight: {factor.weight}%</span>
                          <span className={`font-medium ${
                            typeof factor.impact === 'number'
                              ? factor.impact < 0 ? 'text-red-400' : 'text-green-400'
                              : factor.impact === 'FAVOR_USER' ? 'text-green-400' : 'text-gray-400'
                          }`}>
                            {typeof factor.impact === 'number'
                              ? (factor.impact > 0 ? '+' : '') + factor.impact
                              : factor.impact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold">{decision.explanation.dataPoints}</p>
                    <p className="text-gray-400 text-xs">Data Points</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-green-400 font-bold">{decision.explanation.confidenceScore}%</p>
                    <p className="text-gray-400 text-xs">Confidence</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-bold text-xs">{decision.explanation.modelVersion}</p>
                    <p className="text-gray-400 text-xs">Model</p>
                  </div>
                </div>

                {/* Actions Taken */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {decision.actions.map((action, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded">
                      {action}
                    </span>
                  ))}
                </div>

                {/* Appeal Option */}
                {decision.appealable && (
                  <button className="w-full bg-orange-600/20 text-orange-400 py-2 rounded-lg text-sm">
                    <Gavel size={14} className="inline mr-1" /> Appeal Available
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Compliance Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">Regulatory Reports</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Generate New
              </button>
            </div>

            {complianceReports.map(report => (
              <div key={report.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center mr-3">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{report.name}</h3>
                      <p className="text-gray-400 text-sm">{report.type}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    report.status === 'ready' ? 'bg-green-600 text-white' :
                    report.status === 'submitted' ? 'bg-blue-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {report.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-medium">{report.period}</p>
                    <p className="text-gray-400 text-xs">Period</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-medium">{report.records.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">Records</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-2 text-center">
                    <p className="text-white font-medium">{report.size}</p>
                    <p className="text-gray-400 text-xs">Size</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Generated: {report.generatedAt}</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm flex items-center">
                      <Eye size={14} className="mr-1" /> View
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm flex items-center">
                      <Download size={14} className="mr-1" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Data Retention Tab */}
        {activeTab === 'retention' && (
          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <Database size={18} className="text-slate-400 mr-2" />
                <h3 className="text-white font-medium">Data Retention Policies</h3>
              </div>
              <p className="text-gray-400 text-sm">
                All data is stored in compliance with RBI, PMLA, and IT Act 2000 requirements.
                Data localization ensures all information resides within Indian borders.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-400 p-4">Data Type</th>
                    <th className="text-left text-gray-400 p-4">Retention</th>
                    <th className="text-center text-gray-400 p-4">Encrypted</th>
                    <th className="text-left text-gray-400 p-4">Location</th>
                  </tr>
                </thead>
                <tbody>
                  {retentionPolicies.map((policy, idx) => (
                    <tr key={idx} className="border-b border-gray-700/50">
                      <td className="p-4 text-white">{policy.dataType}</td>
                      <td className="p-4 text-gray-300">{policy.retention}</td>
                      <td className="p-4 text-center">
                        {policy.encrypted ? (
                          <Lock size={16} className="text-green-400 inline" />
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                      <td className="p-4 text-gray-300 flex items-center">
                        <Globe size={14} className="mr-1 text-blue-400" />
                        {policy.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Certifications */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-medium mb-4">Compliance Certifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'ISO 27001', status: 'Certified', expiry: '2025-06-30' },
                  { name: 'PCI DSS', status: 'Compliant', expiry: '2025-03-15' },
                  { name: 'SOC 2 Type II', status: 'Certified', expiry: '2025-09-20' },
                  { name: 'GDPR Ready', status: 'Compliant', expiry: 'N/A' },
                ].map((cert, idx) => (
                  <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium">{cert.name}</span>
                      <CheckCircle size={16} className="text-green-400" />
                    </div>
                    <p className="text-gray-400 text-xs">{cert.status}</p>
                    {cert.expiry !== 'N/A' && (
                      <p className="text-gray-500 text-xs">Expires: {cert.expiry}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Log Detail Modal */}
      {selectedLog && (
        <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
          <div className="min-h-screen p-4">
            <div className="bg-gray-900 rounded-2xl max-w-lg mx-auto">
              <div className="bg-gray-800 rounded-t-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold">{selectedLog.eventType}</h3>
                  <p className="text-gray-400 text-sm">{selectedLog.id}</p>
                </div>
                <button onClick={() => setSelectedLog(null)}>
                  <span className="text-gray-400 text-2xl">&times;</span>
                </button>
              </div>

              <div className="p-4 space-y-4">
                {/* Timestamp & Actor */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Timestamp</p>
                    <p className="text-white text-sm">{selectedLog.timestamp}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-400 text-xs">Actor</p>
                    <p className="text-white text-sm">{selectedLog.actor.name || selectedLog.actor.id}</p>
                  </div>
                </div>

                {/* Action */}
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-gray-400 text-xs">Action</p>
                  <p className="text-white">{selectedLog.action}</p>
                </div>

                {/* Details */}
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-2">Details</p>
                  <pre className="text-gray-300 text-xs overflow-x-auto">
                    {JSON.stringify(selectedLog.details, null, 2)}
                  </pre>
                </div>

                {/* Hashes */}
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-gray-400 text-xs mb-2">Blockchain Verification</p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-500 text-xs">Current Hash</p>
                      <p className="text-green-400 text-xs font-mono break-all">{selectedLog.hash}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Previous Hash</p>
                      <p className="text-gray-400 text-xs font-mono break-all">{selectedLog.previousHash}</p>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400 text-xs">IP Address</p>
                    <p className="text-white">{selectedLog.ipAddress}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">User Agent</p>
                    <p className="text-white text-xs">{selectedLog.userAgent}</p>
                  </div>
                </div>

                {/* Verification Status */}
                <div className={`flex items-center justify-center p-3 rounded-lg ${
                  selectedLog.verified ? 'bg-green-900/30 border border-green-500/30' : 'bg-red-900/30 border border-red-500/30'
                }`}>
                  {selectedLog.verified ? (
                    <>
                      <CheckCircle size={20} className="text-green-400 mr-2" />
                      <span className="text-green-400">Cryptographically Verified</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={20} className="text-red-400 mr-2" />
                      <span className="text-red-400">Verification Failed</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAuditVault;
