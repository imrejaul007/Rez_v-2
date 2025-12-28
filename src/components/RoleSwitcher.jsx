import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ADMIN_ROLES, MERCHANT_ROLES } from '../utils/rolePermissions';
import { UserCog, ChevronDown, X } from 'lucide-react';

const RoleSwitcher = () => {
  const { user, switchRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const adminRoles = [
    { id: ADMIN_ROLES.HQ_ADMIN, name: 'HQ Admin', color: 'purple' },
    { id: ADMIN_ROLES.REGIONAL_ADMIN, name: 'Regional Admin', color: 'blue' },
    { id: ADMIN_ROLES.FINANCE_ADMIN, name: 'Finance Admin', color: 'green' },
    { id: ADMIN_ROLES.MARKETING_ADMIN, name: 'Marketing Admin', color: 'pink' },
    { id: ADMIN_ROLES.OPERATIONS_ADMIN, name: 'Operations Admin', color: 'orange' },
    { id: ADMIN_ROLES.CONTENT_ADMIN, name: 'Content Admin', color: 'indigo' },
    { id: ADMIN_ROLES.ANALYTICS_ADMIN, name: 'Analytics Admin', color: 'cyan' },
    { id: ADMIN_ROLES.FRAUD_ADMIN, name: 'Fraud Admin', color: 'red' }
  ];

  const merchantRoles = [
    { id: MERCHANT_ROLES.OWNER, name: 'Owner', color: 'purple' },
    { id: MERCHANT_ROLES.MANAGER, name: 'Store Manager', color: 'blue' },
    { id: MERCHANT_ROLES.POS_OPERATOR, name: 'POS Operator', color: 'green' },
    { id: MERCHANT_ROLES.ACCOUNTANT, name: 'Accountant', color: 'orange' },
    { id: MERCHANT_ROLES.MARKETING_MANAGER, name: 'Marketing Manager', color: 'pink' },
    { id: MERCHANT_ROLES.INVENTORY_MANAGER, name: 'Inventory Manager', color: 'cyan' },
    { id: MERCHANT_ROLES.CASHIER, name: 'Cashier', color: 'emerald' },
    { id: MERCHANT_ROLES.SUPPORT_AGENT, name: 'Support Agent', color: 'indigo' }
  ];

  const currentRole = [...adminRoles, ...merchantRoles].find(r => r.id === user?.role);

  const handleRoleSwitch = (roleId, type) => {
    switchRole(roleId, type);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-6 py-3 bg-${currentRole?.color || 'purple'}-500/20 backdrop-blur-lg border border-${currentRole?.color || 'purple'}-500/30 rounded-2xl text-white shadow-lg hover:bg-${currentRole?.color || 'purple'}-500/30 transition-all`}
      >
        <UserCog className="w-5 h-5" />
        <div className="text-left">
          <div className="text-xs text-white/60">Role</div>
          <div className="font-medium">{currentRole?.name || 'Select Role'}</div>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Role Selection Panel */}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div>
              <h3 className="font-bold text-white">Switch Role</h3>
              <p className="text-xs text-white/60">Test different permissions</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {/* Admin Roles */}
            <div className="p-4 border-b border-white/10">
              <div className="text-xs font-medium text-white/60 mb-3">ADMIN ROLES</div>
              <div className="space-y-2">
                {adminRoles.map(role => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSwitch(role.id, 'admin')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      user?.role === role.id
                        ? `bg-${role.color}-500/30 border-2 border-${role.color}-500/50`
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full bg-${role.color}-400`} />
                    <span className="text-white font-medium">{role.name}</span>
                    {user?.role === role.id && (
                      <div className="ml-auto">
                        <div className={`w-2 h-2 rounded-full bg-${role.color}-400 animate-pulse`} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Merchant Roles */}
            <div className="p-4">
              <div className="text-xs font-medium text-white/60 mb-3">MERCHANT ROLES</div>
              <div className="space-y-2">
                {merchantRoles.map(role => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSwitch(role.id, 'merchant')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      user?.role === role.id
                        ? `bg-${role.color}-500/30 border-2 border-${role.color}-500/50`
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full bg-${role.color}-400`} />
                    <span className="text-white font-medium">{role.name}</span>
                    {user?.role === role.id && (
                      <div className="ml-auto">
                        <div className={`w-2 h-2 rounded-full bg-${role.color}-400 animate-pulse`} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="text-xs text-white/60">
              Switch roles to test different navigation permissions
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;
