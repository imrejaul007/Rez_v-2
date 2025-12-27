export const mockAnalytics = {
  today: {
    sales: 45678,
    orders: 123,
    customers: 98,
    avgOrderValue: 371.29,
    growth: {
      sales: 12.5,
      orders: 8.3,
      customers: 15.2,
      avgOrderValue: 4.1
    }
  },
  yesterday: {
    sales: 40567,
    orders: 113,
    customers: 85,
    avgOrderValue: 358.99,
    growth: {
      sales: 8.2,
      orders: 5.1,
      customers: 12.3,
      avgOrderValue: 2.8
    }
  },
  week: {
    sales: 289456,
    orders: 756,
    customers: 589,
    avgOrderValue: 382.90,
    growth: {
      sales: 18.7,
      orders: 14.2,
      customers: 22.5,
      avgOrderValue: 5.3
    }
  },
  month: {
    sales: 1234567,
    orders: 3245,
    customers: 2456,
    avgOrderValue: 380.42,
    growth: {
      sales: 25.3,
      orders: 20.8,
      customers: 28.4,
      avgOrderValue: 3.9
    }
  }
};

export const mockSalesChart = {
  daily: [
    { date: '2024-01-19', sales: 35678, orders: 95 },
    { date: '2024-01-20', sales: 38901, orders: 102 },
    { date: '2024-01-21', sales: 42345, orders: 110 },
    { date: '2024-01-22', sales: 39876, orders: 108 },
    { date: '2024-01-23', sales: 41234, orders: 115 },
    { date: '2024-01-24', sales: 40567, orders: 113 },
    { date: '2024-01-25', sales: 45678, orders: 123 }
  ],
  hourly: [
    { hour: '10:00', sales: 2345, orders: 8 },
    { hour: '11:00', sales: 3456, orders: 12 },
    { hour: '12:00', sales: 5678, orders: 18 },
    { hour: '13:00', sales: 6789, orders: 22 },
    { hour: '14:00', sales: 4567, orders: 15 },
    { hour: '15:00', sales: 3890, orders: 13 },
    { hour: '16:00', sales: 2234, orders: 9 },
    { hour: '17:00', sales: 1890, orders: 7 },
    { hour: '18:00', sales: 3456, orders: 11 },
    { hour: '19:00', sales: 5678, orders: 19 },
    { hour: '20:00', sales: 4890, orders: 16 },
    { hour: '21:00', sales: 3234, orders: 11 }
  ]
};

export const mockTopProducts = [
  {
    id: 'prod-001',
    name: 'Margherita Pizza',
    category: 'pizza',
    soldQty: 456,
    revenue: 136344,
    percentOfTotal: 28.5,
    trend: 'up'
  },
  {
    id: 'prod-002',
    name: 'Pepperoni Pizza',
    category: 'pizza',
    soldQty: 389,
    revenue: 155211,
    percentOfTotal: 25.2,
    trend: 'up'
  },
  {
    id: 'prod-003',
    name: 'Veggie Supreme',
    category: 'pizza',
    soldQty: 234,
    revenue: 81666,
    percentOfTotal: 18.7,
    trend: 'down'
  },
  {
    id: 'prod-006',
    name: 'Chicken Wings',
    category: 'sides',
    soldQty: 178,
    revenue: 35422,
    percentOfTotal: 12.3,
    trend: 'up'
  },
  {
    id: 'prod-005',
    name: 'Garlic Bread',
    category: 'sides',
    soldQty: 145,
    revenue: 14355,
    percentOfTotal: 8.9,
    trend: 'stable'
  }
];

export const mockCustomerInsights = {
  totalCustomers: 2456,
  newCustomers: 234,
  returningCustomers: 2222,
  retentionRate: 90.5,
  avgLifetimeValue: 4567,
  topCustomers: [
    {
      id: 'customer-001',
      name: 'Rajesh Kumar',
      totalOrders: 45,
      totalSpent: 15678,
      avgOrderValue: 348.40,
      lastVisit: '2024-01-25'
    },
    {
      id: 'customer-002',
      name: 'Priya Sharma',
      totalOrders: 38,
      totalSpent: 13456,
      avgOrderValue: 354.11,
      lastVisit: '2024-01-24'
    },
    {
      id: 'customer-003',
      name: 'Amit Patel',
      totalOrders: 32,
      totalSpent: 11234,
      avgOrderValue: 351.06,
      lastVisit: '2024-01-25'
    }
  ]
};

export const mockPaymentBreakdown = [
  { method: 'UPI', transactions: 1456, amount: 567890, percentage: 46.0 },
  { method: 'Card', transactions: 987, amount: 398765, percentage: 32.3 },
  { method: 'Cash', transactions: 543, amount: 189456, percentage: 15.4 },
  { method: 'Wallet', transactions: 259, amount: 78456, percentage: 6.3 }
];

export const mockCoinsAnalytics = {
  promoCoinsRedeemed: {
    count: 456,
    value: 45678,
    topOffers: [
      { name: '10% Off Pizza', redeemed: 156, value: 15678 },
      { name: 'Buy 1 Get 1 Free', redeemed: 98, value: 12345 },
      { name: 'Free Delivery', redeemed: 87, value: 8765 }
    ]
  },
  rezCoinsRedeemed: {
    count: 234,
    value: 23456
  },
  brandedCoinsRedeemed: {
    count: 123,
    value: 12345
  },
  coinsEarned: {
    rez: 5678,
    branded: 2345
  }
};

export const getAnalyticsByTimeframe = (timeframe) => {
  return mockAnalytics[timeframe] || mockAnalytics.today;
};
