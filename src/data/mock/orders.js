export const mockOrders = [
  {
    id: 'order-001',
    orderNumber: 'ORD-20240125-001',
    type: 'dine_in',
    tableNumber: '12',
    branch: 'branch-001',
    branchName: 'Koramangala Branch',
    customer: {
      id: 'customer-001',
      name: 'Rajesh Kumar',
      phone: '+91-9876543210',
      email: 'rajesh@email.com',
      loyaltyPoints: 1250
    },
    items: [
      {
        productId: 'prod-001',
        name: 'Margherita Pizza',
        variant: 'Medium',
        quantity: 2,
        price: 299,
        total: 598
      },
      {
        productId: 'prod-004',
        name: 'Coca Cola',
        variant: null,
        quantity: 2,
        price: 40,
        total: 80
      },
      {
        productId: 'prod-005',
        name: 'Garlic Bread',
        variant: null,
        quantity: 1,
        price: 99,
        total: 99
      }
    ],
    subtotal: 777,
    tax: 38.85,
    serviceCharge: 77.70,
    discount: 0,
    coinsRedeemed: {
      promo: 50,
      branded: 0,
      rez: 0,
      totalValue: 50
    },
    coinsEarned: {
      rez: 7.77,
      branded: 0
    },
    total: 787.90,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    status: 'completed',
    createdAt: '2024-01-25T14:30:00Z',
    completedAt: '2024-01-25T15:15:00Z',
    preparationTime: 25,
    rating: 5,
    feedback: 'Excellent food and service!'
  },
  {
    id: 'order-002',
    orderNumber: 'ORD-20240125-002',
    type: 'takeaway',
    tableNumber: null,
    branch: 'branch-001',
    branchName: 'Koramangala Branch',
    customer: {
      id: 'customer-002',
      name: 'Priya Sharma',
      phone: '+91-9876543211',
      email: 'priya@email.com',
      loyaltyPoints: 890
    },
    items: [
      {
        productId: 'prod-002',
        name: 'Pepperoni Pizza',
        variant: 'Large',
        quantity: 1,
        price: 499,
        total: 499
      },
      {
        productId: 'prod-006',
        name: 'Chicken Wings',
        variant: null,
        quantity: 1,
        price: 199,
        total: 199
      }
    ],
    subtotal: 698,
    tax: 34.90,
    serviceCharge: 0,
    discount: 69.80,
    coinsRedeemed: {
      promo: 0,
      branded: 100,
      rez: 0,
      totalValue: 100
    },
    coinsEarned: {
      rez: 6.98,
      branded: 0
    },
    total: 563.10,
    paymentMethod: 'card',
    paymentStatus: 'completed',
    status: 'completed',
    createdAt: '2024-01-25T13:15:00Z',
    completedAt: '2024-01-25T13:45:00Z',
    preparationTime: 20,
    rating: 4,
    feedback: 'Good taste, but slightly delayed.'
  },
  {
    id: 'order-003',
    orderNumber: 'ORD-20240125-003',
    type: 'delivery',
    tableNumber: null,
    branch: 'branch-002',
    branchName: 'Indiranagar Branch',
    customer: {
      id: 'customer-003',
      name: 'Amit Patel',
      phone: '+91-9876543212',
      email: 'amit@email.com',
      loyaltyPoints: 2340
    },
    items: [
      {
        productId: 'prod-003',
        name: 'Veggie Supreme',
        variant: 'Medium',
        quantity: 3,
        price: 349,
        total: 1047
      },
      {
        productId: 'prod-004',
        name: 'Coca Cola',
        variant: null,
        quantity: 3,
        price: 40,
        total: 120
      }
    ],
    subtotal: 1167,
    tax: 58.35,
    serviceCharge: 0,
    discount: 0,
    deliveryFee: 40,
    coinsRedeemed: {
      promo: 200,
      branded: 0,
      rez: 50,
      totalValue: 250
    },
    coinsEarned: {
      rez: 11.67,
      branded: 0
    },
    total: 1015.35,
    paymentMethod: 'upi',
    paymentStatus: 'completed',
    status: 'in_transit',
    createdAt: '2024-01-25T12:00:00Z',
    completedAt: null,
    preparationTime: 30,
    estimatedDeliveryTime: '2024-01-25T13:00:00Z',
    deliveryAddress: '789 Green Park, Indiranagar, Bangalore - 560038',
    rating: null,
    feedback: null
  },
  {
    id: 'order-004',
    orderNumber: 'ORD-20240125-004',
    type: 'dine_in',
    tableNumber: '5',
    branch: 'branch-001',
    branchName: 'Koramangala Branch',
    customer: {
      id: 'customer-004',
      name: 'Sneha Reddy',
      phone: '+91-9876543213',
      email: 'sneha@email.com',
      loyaltyPoints: 450
    },
    items: [
      {
        productId: 'prod-001',
        name: 'Margherita Pizza',
        variant: 'Large',
        quantity: 1,
        price: 399,
        total: 399
      },
      {
        productId: 'prod-005',
        name: 'Garlic Bread',
        variant: null,
        quantity: 2,
        price: 99,
        total: 198
      }
    ],
    subtotal: 597,
    tax: 29.85,
    serviceCharge: 59.70,
    discount: 0,
    coinsRedeemed: {
      promo: 0,
      branded: 0,
      rez: 0,
      totalValue: 0
    },
    coinsEarned: {
      rez: 5.97,
      branded: 0
    },
    total: 686.55,
    paymentMethod: 'cash',
    paymentStatus: 'completed',
    status: 'preparing',
    createdAt: '2024-01-25T15:45:00Z',
    completedAt: null,
    preparationTime: null,
    rating: null,
    feedback: null
  },
  {
    id: 'order-005',
    orderNumber: 'ORD-20240125-005',
    type: 'takeaway',
    tableNumber: null,
    branch: 'branch-001',
    branchName: 'Koramangala Branch',
    customer: {
      id: 'customer-005',
      name: 'Vikram Singh',
      phone: '+91-9876543214',
      email: 'vikram@email.com',
      loyaltyPoints: 1780
    },
    items: [
      {
        productId: 'prod-002',
        name: 'Pepperoni Pizza',
        variant: 'Medium',
        quantity: 2,
        price: 399,
        total: 798
      }
    ],
    subtotal: 798,
    tax: 39.90,
    serviceCharge: 0,
    discount: 79.80,
    coinsRedeemed: {
      promo: 150,
      branded: 0,
      rez: 0,
      totalValue: 150
    },
    coinsEarned: {
      rez: 7.98,
      branded: 0
    },
    total: 608.10,
    paymentMethod: 'wallet',
    paymentStatus: 'pending',
    status: 'pending',
    createdAt: '2024-01-25T16:00:00Z',
    completedAt: null,
    preparationTime: null,
    rating: null,
    feedback: null
  }
];

export const getOrdersByStatus = (status) => {
  return mockOrders.filter(order => order.status === status);
};

export const getOrderById = (id) => {
  return mockOrders.find(order => order.id === id);
};

export const getTodaysOrders = () => {
  const today = new Date().toISOString().split('T')[0];
  return mockOrders.filter(order => order.createdAt.startsWith(today));
};

export const getOrderStats = () => {
  return {
    pending: mockOrders.filter(o => o.status === 'pending').length,
    preparing: mockOrders.filter(o => o.status === 'preparing').length,
    completed: mockOrders.filter(o => o.status === 'completed').length,
    cancelled: mockOrders.filter(o => o.status === 'cancelled').length,
    total: mockOrders.length
  };
};
