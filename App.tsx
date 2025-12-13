import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import GlobeViz from './components/GlobeViz';
import Marketplace from './views/Marketplace';
import Create from './views/Create';
import Social from './views/Social';
import Profile from './views/Profile';
import Auth from './views/Auth';
import Pricing from './views/Pricing';
import Help from './views/Help';
import AdminPanel from './views/AdminPanel';
import ThemeBackground from './components/ThemeBackground';
import LegalModal from './components/LegalModal';
import AIAssistant from './components/AIAssistant';
import CommandPalette from './components/CommandPalette';
import { ViewState, Web3Status, UserProfile, NFTItem, UserTier } from './types';
import { authService } from './services/authService';

const INITIAL_NFTS: NFTItem[] = [
  {
    id: '1',
    title: 'Neon Odyssey',
    artist: 'Sol-Runner',
    price: 1.5,
    type: 'music',
    imageUrl: 'https://picsum.photos/400/400?random=1',
    description: 'A 24-minute ambient journey across the Solana desert.',
    isBackstageUnlocked: true,
    createdAt: Date.now() - 86400000
  },
  {
    id: '2',
    title: 'Protocol Zero',
    artist: 'Shadow Studio',
    price: 4.2,
    type: 'video',
    imageUrl: 'https://picsum.photos/400/400?random=2',
    description: 'Animated short exploring the genesis of the network.',
    createdAt: Date.now() - 172800000
  }
];

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);
  const [web3Status, setWeb3Status] = useState<Web3Status>(Web3Status.DISCONNECTED);
  const [showLegal, setShowLegal] = useState(false);
  const [hasAcceptedLegal, setHasAcceptedLegal] = useState(() => localStorage.getItem('latitude_legal') === 'true');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  const [user, setUser] = useState<UserProfile | null>(authService.getCurrentUser());
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('latitude_dark_mode') !== 'false');
  const [nfts, setNfts] = useState<NFTItem[]>(INITIAL_NFTS);

  useEffect(() => {
    // Subscribe to Firebase Auth changes
    const unsubscribe = authService.subscribeToAuth((u) => {
       if (!u && user?.id !== 'super_admin') setUser(null);
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('latitude_dark_mode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const connectWallet = () => {
    if (!hasAcceptedLegal) {
      setShowLegal(true);
      return;
    }
    setWeb3Status(Web3Status.CONNECTING);
    setTimeout(() => {
      setWeb3Status(Web3Status.CONNECTED);
    }, 1500);
  };

  const handleAcceptLegal = () => {
    localStorage.setItem('latitude_legal', 'true');
    setHasAcceptedLegal(true);
    setShowLegal(false);
    connectWallet();
  };

  const handleUpgrade = (tier: UserTier) => {
    if (user) {
      const updated = { ...user, tier };
      setUser(updated);
      localStorage.setItem('latitude_user', JSON.stringify(updated));
      setView(ViewState.PROFILE);
    } else {
      setView(ViewState.AUTH);
    }
  };

  const handleLogin = (u: UserProfile) => {
    setUser(u);
    if (u.isAdmin) setView(ViewState.ADMIN);
    else setView(ViewState.PROFILE);
  };

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    setView(ViewState.HOME);
  };

  const renderContent = () => {
    const isProtected = [ViewState.CREATE, ViewState.ADMIN, ViewState.PROFILE].includes(currentView);
    if (isProtected && !user) {
      return <Auth onLogin={handleLogin} setView={setView} />;
    }

    switch (currentView) {
      case ViewState.HOME:
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center pb-12 z-10 relative">
             <GlobeViz isDarkMode={isDarkMode} />
             <div className="max-w-4xl mx-auto mt-12 px-4">
               <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase">
                 Creative <span className={isDarkMode ? "text-latitude-red font-cursive lowercase normal-case" : "text-white animate-cloud-logo font-cursive lowercase normal-case"}>Sovereignty</span>
               </h1>
               <p className={`text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-900 font-bold drop-shadow-sm'}`}>
                 The premium decentralized studio for Music, Film, and TV. Built on Solana. Automated splits. Total control.
               </p>
               <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <button 
                   onClick={() => setView(ViewState.MARKETPLACE)}
                   className="px-12 py-5 bg-latitude-red text-white font-black text-lg uppercase hover:scale-105 transition-all tracking-widest shadow-2xl rounded-2xl"
                 >
                   Explore Market
                 </button>
                 <button 
                   onClick={() => setView(ViewState.CREATE)}
                   className={`px-12 py-5 font-black text-lg uppercase hover:scale-105 transition-all tracking-widest rounded-2xl border-2 ${isDarkMode ? 'glass text-white border-white/20' : 'bg-latitude-menuDark text-white border-white/10'}`}
                 >
                   Enter Studio
                 </button>
               </div>
             </div>
          </div>
        );
      case ViewState.MARKETPLACE:
        return <Marketplace items={nfts} user={user} setView={setView} onBuy={(id) => alert('Buying '+id)} />;
      case ViewState.PRICING:
        return <Pricing onUpgrade={handleUpgrade} />;
      case ViewState.HELP:
        return <Help />;
      case ViewState.SOCIAL:
        return <Social />;
      case ViewState.CREATE:
        return <Create userTier={user?.isAdmin ? UserTier.LABEL_EXEC : (user?.tier || UserTier.LISTENER)} walletConnected={web3Status === Web3Status.CONNECTED} onMint={(n) => setNfts([n, ...nfts])} />;
      case ViewState.PROFILE:
        return <Profile user={user} nfts={nfts} web3Status={web3Status} onUpdateProfile={u => setUser(u)} />;
      case ViewState.AUTH:
        return <Auth onLogin={handleLogin} setView={setView} />;
      case ViewState.ADMIN:
        return user?.isAdmin ? <AdminPanel nfts={nfts} setNfts={setNfts} /> : <Auth onLogin={handleLogin} setView={setView} />;
      default:
        return <div className="text-white text-center p-20">COORDINATES UNKNOWN</div>;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      setView={setView}
      web3Status={web3Status}
      connectWallet={connectWallet}
      user={user}
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <ThemeBackground isDarkMode={isDarkMode} />
      
      <div className="relative z-10 h-full px-6 py-8">
        {renderContent()}
      </div>

      <button 
        onClick={() => setIsCommandPaletteOpen(true)}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] border px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white hover:border-latitude-red transition-all shadow-2xl flex items-center gap-3 group ${isDarkMode ? 'glass border-white/10' : 'bg-latitude-menuDark border-white/10'}`}
      >
        <span className="w-2 h-2 bg-latitude-red rounded-full animate-pulse"></span>
        NAVIGATOR
        <kbd className="hidden md:inline-block bg-white/5 border border-white/10 px-2 py-1 rounded text-[8px] text-gray-500 font-mono group-hover:text-white transition-colors">⌘K</kbd>
      </button>

      {user && (
        <button 
          onClick={handleLogout}
          className="fixed top-6 right-6 z-[55] glass px-4 py-2 rounded-lg text-[8px] font-black uppercase tracking-widest text-white bg-latitude-red/20 border border-latitude-red hover:bg-latitude-red hover:text-white transition-all shadow-lg"
        >
          DISCONNECT
        </button>
      )}

      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
        setView={setView} 
        isAdmin={user?.isAdmin || false} 
      />

      <LegalModal isOpen={showLegal} onAccept={handleAcceptLegal} />
      <AIAssistant />
    </Layout>
  );
};

export default App;