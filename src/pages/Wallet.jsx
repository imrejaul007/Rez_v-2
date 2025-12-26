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
  const { globalMode } = useApp();

  // Determine mode based on context
  // Priority: globalMode from AppContext > wallet context mode
  let mode = globalMode || currentMode || 'nearYou';

  // Render appropriate wallet experience based on globalMode
  if (mode === 'mall') {
    return <WalletModeMall />;
  }

  if (mode === 'cashStore') {
    return <WalletModeCashStore />;
  }

  if (mode === 'prive') {
    return <WalletModePrive />;
  }

  // Default to ReZ mode (nearYou)
  return <WalletModeReZ />;
};

export default Wallet;
