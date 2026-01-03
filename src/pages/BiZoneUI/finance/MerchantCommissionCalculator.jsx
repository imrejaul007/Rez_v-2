import { useState } from 'react';
import { Calculator, DollarSign, Percent, TrendingUp, Users, Award, Plus, Edit } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';

// Backend API: GET /api/merchant/commission/rules
// Backend API: POST /api/merchant/commission/calculate
// Backend API: PUT /api/merchant/commission/rules/:id

export default function MerchantCommissionCalculator() {
  const [salesAmount, setSalesAmount] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [calculatedCommission, setCalculatedCommission] = useState(null);

  const commissionRules = [
    {
      id: 1,
      name: 'Base Commission',
      type: 'percentage',
      value: 5,
      minSales: 0,
      maxSales: 100000,
      description: 'Standard commission for all sales'
    },
    {
      id: 2,
      name: 'High Performer Bonus',
      type: 'percentage',
      value: 8,
      minSales: 100001,
      maxSales: 250000,
      description: 'Enhanced rate for sales above ₹1L'
    },
    {
      id: 3,
      name: 'Top Tier Commission',
      type: 'percentage',
      value: 12,
      minSales: 250001,
      maxSales: null,
      description: 'Premium rate for exceptional performers'
    },
    {
      id: 4,
      name: 'New Product Bonus',
      type: 'fixed',
      value: 500,
      category: 'New Arrivals',
      description: 'Flat bonus per new product sale'
    },
    {
      id: 5,
      name: 'Premium Category',
      type: 'percentage',
      value: 15,
      category: 'Electronics',
      description: 'Higher commission on electronics'
    }
  ];

  const staffMembers = [
    { id: 1, name: 'Amit Sharma', tier: 'Senior', currentSales: 456000 },
    { id: 2, name: 'Priya Patel', tier: 'Associate', currentSales: 378000 },
    { id: 3, name: 'Rahul Singh', tier: 'Executive', currentSales: 312000 },
    { id: 4, name: 'Sneha Gupta', tier: 'Junior', currentSales: 245000 }
  ];

  const recentCalculations = [
    {
      id: 1,
      staff: 'Amit Sharma',
      salesAmount: 45000,
      commission: 5400,
      rate: 12,
      date: '2026-01-02',
      status: 'paid'
    },
    {
      id: 2,
      staff: 'Priya Patel',
      salesAmount: 32000,
      commission: 2560,
      rate: 8,
      date: '2026-01-02',
      status: 'pending'
    },
    {
      id: 3,
      staff: 'Rahul Singh',
      salesAmount: 28000,
      commission: 2240,
      rate: 8,
      date: '2026-01-01',
      status: 'paid'
    }
  ];

  const calculateCommission = () => {
    const amount = parseFloat(salesAmount);
    if (!amount || !selectedStaff) return;

    const staff = staffMembers.find(s => s.id === parseInt(selectedStaff));
    const totalSales = staff.currentSales + amount;

    let rate = 5;
    if (totalSales > 250000) rate = 12;
    else if (totalSales > 100000) rate = 8;

    const commission = (amount * rate) / 100;

    setCalculatedCommission({
      amount,
      rate,
      commission,
      staff: staff.name,
      totalSales
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Commission Calculator</h1>
          <p className="text-green-200">Calculate staff commissions based on sales performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Calculator className="w-6 h-6 text-green-300" />
                </div>
                <h2 className="text-2xl font-bold text-white">Calculate Commission</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-green-200 mb-2">Select Staff Member</label>
                  <select
                    value={selectedStaff}
                    onChange={(e) => setSelectedStaff(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400"
                  >
                    <option value="">Choose staff member</option>
                    {staffMembers.map(staff => (
                      <option key={staff.id} value={staff.id} className="bg-gray-900">
                        {staff.name} - Current Sales: ₹{staff.currentSales.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-200 mb-2">Sales Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-300" />
                    <input
                      type="number"
                      value={salesAmount}
                      onChange={(e) => setSalesAmount(e.target.value)}
                      placeholder="Enter sales amount"
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:border-green-400"
                    />
                  </div>
                </div>

                <button
                  onClick={calculateCommission}
                  disabled={!salesAmount || !selectedStaff}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Commission
                </button>
              </div>

              {/* Result */}
              {calculatedCommission && (
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">Calculation Result</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-green-200 text-sm">Staff Member</p>
                      <p className="text-white font-bold">{calculatedCommission.staff}</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm">Sales Amount</p>
                      <p className="text-white font-bold">₹{calculatedCommission.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm">Commission Rate</p>
                      <p className="text-white font-bold">{calculatedCommission.rate}%</p>
                    </div>
                    <div>
                      <p className="text-green-200 text-sm">Total Sales (New)</p>
                      <p className="text-white font-bold">₹{calculatedCommission.totalSales.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-green-200 text-sm mb-1">Commission Earned</p>
                    <p className="text-4xl font-bold text-white">₹{calculatedCommission.commission.toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Calculations */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">Recent Calculations</h2>

              <div className="space-y-3">
                {recentCalculations.map((calc) => (
                  <div key={calc.id} className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{calc.staff}</p>
                      <p className="text-green-200 text-sm">{calc.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">₹{calc.commission.toLocaleString()}</p>
                      <p className="text-green-200 text-sm">{calc.rate}% on ₹{calc.salesAmount.toLocaleString()}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      calc.status === 'paid' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {calc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commission Rules */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Commission Rules</h2>
                <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {commissionRules.map((rule) => (
                  <div key={rule.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-white font-bold mb-1">{rule.name}</h3>
                        <p className="text-green-200 text-sm">{rule.description}</p>
                      </div>
                      <button className="p-1 text-green-300 hover:text-green-100">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      {rule.type === 'percentage' ? (
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-300 rounded-full">
                          <Percent className="w-4 h-4" />
                          <span className="font-bold">{rule.value}%</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-bold">₹{rule.value}</span>
                        </div>
                      )}

                      {rule.minSales !== undefined && (
                        <span className="text-green-200 text-xs">
                          Sales: ₹{rule.minSales.toLocaleString()}
                          {rule.maxSales && ` - ₹${rule.maxSales.toLocaleString()}`}
                          {!rule.maxSales && '+'}
                        </span>
                      )}
                    </div>

                    {rule.category && (
                      <div className="mt-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          {rule.category}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-bold text-white mb-4">This Month</h2>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-200 text-sm">Total Commissions</span>
                    <span className="text-white font-bold">₹45,670</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '78%'}} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-200 text-sm">Avg Commission Rate</span>
                    <span className="text-white font-bold">9.2%</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-200 text-sm">Top Earner</span>
                    <span className="text-white font-bold">Amit Sharma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
