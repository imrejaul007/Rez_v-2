import { useState } from 'react';
import { Shield, CheckCircle, XCircle, AlertTriangle, Eye, FileText, User, Calendar, MapPin, Phone } from 'lucide-react';

export default function AdminKYCCompliance() {
  const [activeTab, setActiveTab] = useState('pending');

  const [stats] = useState({
    pendingKYC: 234,
    pendingAge: 45,
    approvedToday: 156,
    rejectedToday: 23,
    totalVerified: 145678
  });

  const [pendingKYC] = useState([
    {
      id: 'KYC-001',
      name: 'Rajesh Kumar',
      type: 'user',
      submittedDate: '2024-01-25',
      documents: ['Aadhaar', 'PAN'],
      status: 'pending_review',
      age: 28,
      city: 'Mumbai',
      phone: '+91 98765 43210'
    },
    {
      id: 'KYC-002',
      name: 'Pizza Paradise',
      type: 'merchant',
      submittedDate: '2024-01-24',
      documents: ['GSTIN', 'FSSAI', 'Bank Statement'],
      status: 'pending_review',
      city: 'Delhi',
      phone: '+91 98765 43211'
    }
  ]);

  const [ageVerification] = useState([
    {
      id: 'AGE-001',
      name: 'Arjun Patel',
      attemptedCategory: 'Alcohol & Beverages',
      submittedDate: '2024-01-25 14:32',
      docType: 'Aadhaar Card',
      dob: '2005-06-15',
      calculatedAge: 18,
      status: 'pending'
    }
  ]);

  const [restrictedProducts] = useState([
    { category: 'Alcohol', ageLimit: 21, verificationRequired: true, enabledCities: ['Mumbai', 'Bangalore', 'Pune'], hiddenIn: ['Halal Mode', 'Ramadan Mode'] },
    { category: 'Adult Entertainment', ageLimit: 18, verificationRequired: true, enabledCities: ['Mumbai', 'Bangalore'], hiddenIn: ['Family Mode', 'Halal Mode'] },
    { category: 'Tobacco Products', ageLimit: 18, verificationRequired: true, enabledCities: ['All'], hiddenIn: ['None'] }
  ]);

  const getStatusColor = (status) => {
    const colors = {
      pending_review: 'bg-yellow-100 text-yellow-700',
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
      pending: 'bg-blue-100 text-blue-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">KYC & Compliance Dashboard</h1>
            <p className="text-green-100">Identity verification, age checks & regulatory compliance</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.pendingKYC}</div>
            <div className="text-sm text-green-200">Pending KYC</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.pendingAge}</div>
            <div className="text-sm text-green-200">Pending Age Verification</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.approvedToday}</div>
            <div className="text-sm text-green-200">Approved Today</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{stats.rejectedToday}</div>
            <div className="text-sm text-green-200">Rejected Today</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{(stats.totalVerified / 1000).toFixed(0)}K</div>
            <div className="text-sm text-green-200">Total Verified</div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-6 px-6">
          {['pending', 'age', 'products'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium border-b-2 transition-colors capitalize ${
                activeTab === tab ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600'
              }`}
            >
              {tab === 'pending' && `KYC Queue (${stats.pendingKYC})`}
              {tab === 'age' && `Age Verification (${stats.pendingAge})`}
              {tab === 'products' && 'Restricted Products'}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingKYC.map((kyc) => (
              <div key={kyc.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{kyc.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(kyc.status)}`}>
                        {kyc.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${kyc.type === 'merchant' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                        {kyc.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {kyc.submittedDate}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {kyc.city}</span>
                      <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {kyc.phone}</span>
                    </div>
                    <div className="flex gap-2">
                      {kyc.documents.map((doc, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">{doc}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-6">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" /> Approve
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Docs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'age' && (
          <div className="space-y-4">
            {ageVerification.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">AGE VERIFICATION REQUIRED</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span><span className="font-medium">Category:</span> {item.attemptedCategory}</span>
                      <span><span className="font-medium">DOB:</span> {item.dob}</span>
                      <span><span className="font-medium">Age:</span> {item.calculatedAge} years</span>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-yellow-800">Document: {item.docType} submitted on {item.submittedDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-6">
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Verify & Approve</button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Category</th>
                  <th className="text-left py-3 px-4 font-semibold">Age Limit</th>
                  <th className="text-left py-3 px-4 font-semibold">Verification</th>
                  <th className="text-left py-3 px-4 font-semibold">Enabled Cities</th>
                  <th className="text-left py-3 px-4 font-semibold">Hidden In</th>
                </tr>
              </thead>
              <tbody>
                {restrictedProducts.map((product, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-3 px-4 font-medium">{product.category}</td>
                    <td className="py-3 px-4">{product.ageLimit}+</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs ${product.verificationRequired ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                        {product.verificationRequired ? 'REQUIRED' : 'NOT REQUIRED'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{product.enabledCities.join(', ')}</td>
                    <td className="py-3 px-4 text-sm text-gray-600">{product.hiddenIn.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
