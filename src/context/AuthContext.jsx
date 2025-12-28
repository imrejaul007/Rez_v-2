import { createContext, useContext, useState, useEffect } from 'react';
import { ADMIN_ROLES, MERCHANT_ROLES } from '../utils/rolePermissions';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user from localStorage or API
    // In production, this would fetch from your backend
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('rez_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        } else {
          // Default demo user - HQ Admin for testing
          const demoUser = {
            id: 'USR-001',
            name: 'Demo User',
            email: 'demo@rez.com',
            type: 'admin', // 'admin' or 'merchant'
            role: ADMIN_ROLES.HQ_ADMIN, // Can be any role from ADMIN_ROLES or MERCHANT_ROLES
            region: 'All India',
            merchantId: null // Only for merchant users
          };
          setUser(demoUser);
          localStorage.setItem('rez_user', JSON.stringify(demoUser));
        }
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('rez_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rez_user');
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('rez_user', JSON.stringify(updatedUser));
  };

  // Switch role for testing (only in development)
  const switchRole = (newRole, type = 'admin') => {
    const updatedUser = {
      ...user,
      role: newRole,
      type: type
    };
    setUser(updatedUser);
    localStorage.setItem('rez_user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    loading,
    login,
    logout,
    updateUser,
    switchRole,
    isAdmin: user?.type === 'admin',
    isMerchant: user?.type === 'merchant',
    userRole: user?.role,
    userType: user?.type
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
