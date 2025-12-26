import { useWallet } from '../contexts/WalletContext';
import { useApp } from '../contexts/AppContext';
import WalletModeReZ from '../components/wallet/WalletModeReZ';
import WalletModeMall from '../components/wallet/WalletModeMall';
import WalletModeCashStore from '../components/wallet/WalletModeCashStore';
import WalletModePrive from '../components/wallet/WalletModePrive';

/**
 * Wallet Page - Mode-Aware Wrapper
 *
 * This component conditionally renders the appropriate wallet UI
 * based on the current mode from WalletContext.
 *
 * Modes:
 * - rez: ReZ (Near You) - Light, friendly, savings-focused
 * - mall: ReZ Mall - Clean, premium, brand-focused
 * - cash-store: Cash Store - Finance-style, transparency-focused
 * - prive: ReZ Privé - Dark theme, exclusive, prestige-focused
 */
const Wallet = () => {
  const { currentMode } = useWallet();
  const { currentView } = useApp();

  // Determine mode based on context
  // Priority: wallet context mode > app view
  let mode = currentMode || 'rez';

  // If app view suggests a different mode, use that
  if (currentView === 'mall') mode = 'mall';
  if (currentView === 'cash-store') mode = 'cash-store';
  if (currentView === 'prive') mode = 'prive';

  // Render appropriate wallet experience
  if (mode === 'mall') {
    return <WalletModeMall />;
  }

  if (mode === 'cash-store') {
    return <WalletModeCashStore />;
  }

  if (mode === 'prive') {
    return <WalletModePrive />;
  }

  // Default to ReZ mode
  return <WalletModeReZ />;
};

export default Wallet;
