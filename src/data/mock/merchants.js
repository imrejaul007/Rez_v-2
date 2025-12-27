export const mockMerchant = {
  id: 'merchant-001',
  businessName: 'Pizza Paradise',
  legalName: 'Pizza Paradise Pvt Ltd',
  ownerName: 'Rajesh Kumar',
  email: 'rajesh@pizzaparadise.com',
  phone: '+91-9876543210',
  category: 'restaurant',
  tier: 'premium',
  gstin: '29ABCDE1234F1Z5',
  pan: 'ABCDE1234F',
  branches: [
    {
      id: 'branch-001',
      name: 'Koramangala Branch',
      address: '123 Main Street, Koramangala, Bangalore - 560034',
      phone: '+91-9876543211',
      isPrimary: true,
      status: 'active',
      openingHours: {
        monday: { open: '10:00', close: '22:00' },
        tuesday: { open: '10:00', close: '22:00' },
        wednesday: { open: '10:00', close: '22:00' },
        thursday: { open: '10:00', close: '22:00' },
        friday: { open: '10:00', close: '23:00' },
        saturday: { open: '10:00', close: '23:00' },
        sunday: { open: '10:00', close: '22:00' }
      }
    },
    {
      id: 'branch-002',
      name: 'Indiranagar Branch',
      address: '456 Park Avenue, Indiranagar, Bangalore - 560038',
      phone: '+91-9876543212',
      isPrimary: false,
      status: 'active',
      openingHours: {
        monday: { open: '11:00', close: '22:00' },
        tuesday: { open: '11:00', close: '22:00' },
        wednesday: { open: '11:00', close: '22:00' },
        thursday: { open: '11:00', close: '22:00' },
        friday: { open: '11:00', close: '23:00' },
        saturday: { open: '11:00', close: '23:00' },
        sunday: { open: '11:00', close: '22:00' }
      }
    }
  ],
  bankDetails: {
    accountHolderName: 'Pizza Paradise Pvt Ltd',
    accountNumber: '1234567890',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    branchName: 'Koramangala Branch'
  },
  settings: {
    acceptsReZCoins: true,
    acceptsPromoCoins: true,
    acceptsBrandedCoins: true,
    taxRate: 5,
    serviceCharge: 10,
    enableInventoryTracking: true,
    lowStockAlertThreshold: 10,
    autoReorderEnabled: false
  },
  subscription: {
    plan: 'premium',
    startDate: '2024-01-01',
    expiryDate: '2024-12-31',
    features: [
      'Advanced Analytics',
      'Multi-branch Management',
      'Inventory Management',
      'Customer CRM',
      'Marketing Campaigns',
      'GST Reporting'
    ]
  },
  status: 'active',
  createdAt: '2024-01-01T00:00:00Z',
  kycStatus: 'verified'
};

export const mockMerchantStats = {
  totalSales: 456789,
  totalOrders: 2345,
  totalCustomers: 1567,
  averageOrderValue: 194.78,
  topSellingProduct: 'Margherita Pizza',
  lowStockItems: 3,
  pendingOrders: 12,
  completedOrders: 2333,
  cancelledOrders: 12
};
