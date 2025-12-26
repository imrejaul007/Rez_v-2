import { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import FirstTimePreloader from './FirstTimePreloader';
import GlobalPreloader from './GlobalPreloader';
import ModePreloader from './ModePreloader';

const PreloaderManager = ({ children }) => {
  const { filters } = useApp();
  const [showFirstTimePreloader, setShowFirstTimePreloader] = useState(false);
  const [showGlobalPreloader, setShowGlobalPreloader] = useState(false);
  const [showModePreloader, setShowModePreloader] = useState(false);
  const [currentMode, setCurrentMode] = useState(null);

  useEffect(() => {
    // Check if user has seen the first-time experience
    const hasSeenFirstTime = localStorage.getItem('rez_has_seen_first_time');
    const hasVisited = localStorage.getItem('rez_has_visited');

    if (!hasSeenFirstTime) {
      // Brand new user - show first-time preloader
      setShowFirstTimePreloader(true);
      localStorage.setItem('rez_has_seen_first_time', 'true');
    } else if (!hasVisited) {
      // Has seen first-time but new session - show global preloader
      setShowGlobalPreloader(true);
      localStorage.setItem('rez_has_visited', 'true');
    } else {
      // Returning user in same session - show mode preloader only
      const mode = determineCurrentMode();
      setCurrentMode(mode);
      setShowModePreloader(true);
    }
  }, []);

  // Determine current mode based on filters or URL
  const determineCurrentMode = () => {
    const path = window.location.pathname;

    // Check URL first
    if (path.startsWith('/mall')) return 'mall';
    if (path.startsWith('/cash-store')) return 'cash-store';
    if (path.startsWith('/prive')) return 'prive';

    // Check active filters
    if (filters?.mall) return 'mall';
    if (filters?.cashStore) return 'cash-store';
    if (filters?.prive) return 'prive';

    // Default to ReZ mode
    return 'rez';
  };

  const handleFirstTimeComplete = () => {
    setShowFirstTimePreloader(false);
    localStorage.setItem('rez_has_visited', 'true');
    // After first-time preloader, show mode preloader
    const mode = determineCurrentMode();
    setCurrentMode(mode);
    setShowModePreloader(true);
  };

  const handleGlobalComplete = () => {
    setShowGlobalPreloader(false);
    // After global preloader, show mode preloader
    const mode = determineCurrentMode();
    setCurrentMode(mode);
    setShowModePreloader(true);
  };

  const handleModeComplete = () => {
    setShowModePreloader(false);
  };

  return (
    <>
      {showFirstTimePreloader && (
        <FirstTimePreloader onComplete={handleFirstTimeComplete} />
      )}

      {showGlobalPreloader && (
        <GlobalPreloader onComplete={handleGlobalComplete} />
      )}

      {showModePreloader && currentMode && (
        <ModePreloader mode={currentMode} onComplete={handleModeComplete} />
      )}

      {/* Show children when all preloaders are done */}
      {!showFirstTimePreloader && !showGlobalPreloader && !showModePreloader && children}
    </>
  );
};

export default PreloaderManager;
