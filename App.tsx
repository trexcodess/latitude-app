
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
import Backstage from './views/Backstage';
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
    const unsubscribe = authService.subscribeToAuth((u) => {
       if (!u && user?.id !== 'super_admin') setUser(null);
       else if (u) setUser(u);
    });
    return () => unsubscribe();
  }, [user?.id]);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('latitude_dark_mode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const connectWallet = () => {
    // Treat connect wallet as Phantom Login
    if (!hasAcceptedLegal) {
      setShowLegal(true);
      return;
    }
    setWeb3Status(Web3Status.CONNECTING);
    setTimeout(() => {
      setWeb3Status(Web3Status.CONNECTED);
      // If not logged in, show auth
      if (!user) setView(ViewState.AUTH);
    }, 1000);
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
      authService.updateProfile({ tier });
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

  const renderContent = () => {
    const isProtected = [ViewState.CREATE, ViewState.ADMIN, ViewState.PROFILE, ViewState.BACKSTAGE].includes(currentView);
    if (isProtected && !user) {
      return <Auth onLogin={handleLogin} setView={setView} />;
    }

    switch (currentView) {
      case ViewState.HOME:
        return (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center pb-12 z-10 relative">
             <GlobeViz isDarkMode={isDarkMode} />
             <div className="max-w-4xl mx-auto mt-12 px-4">
               <h1 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-none ${isDarkMode ? 'text-white' : 'text-black'}`}>
                 Sovereign <span className="text-latitude-red font-cursive lowercase normal-case">Creative</span>
               </h1>
               <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <button onClick={() => setView(ViewState.MARKETPLACE)} className="px-12 py-5 bg-latitude-red text-white font-black text-lg uppercase hover:scale-105 transition-all tracking-widest shadow-2xl rounded-2xl border-b-4 border-red-900">Explore Gallery</button>
                 <button onClick={() => setView(ViewState.BACKSTAGE)} className="px-12 py-5 bg-black dark:bg-white text-white dark:text-black font-black text-lg uppercase hover:scale-105 transition-all tracking-widest shadow-2xl rounded-2xl">Enter Ring</button>
               </div>
             </div>
          </div>
        );
      case ViewState.MARKETPLACE:
        return <Marketplace items={nfts} user={user} setView={setView} onBuy={(id) => alert('Bought NFT Signal '+id)} />;
      case ViewState.PRICING:
        return <Pricing onUpgrade={handleUpgrade} />;
      case ViewState.HELP:
        return <Help />;
      case ViewState.SOCIAL:
        return <Social user={user} />;
      case ViewState.CREATE:
        return <Create user={user} userTier={user?.isAdmin ? UserTier.LABEL_EXEC : (user?.tier || UserTier.LISTENER)} walletConnected={web3Status === Web3Status.CONNECTED} onMint={(n) => setNfts([n, ...nfts])} />;
      case ViewState.PROFILE:
        return <Profile user={user} nfts={nfts} onUpdateProfile={u => setUser(u)} />;
      case ViewState.BACKSTAGE:
        return <Backstage user={user} />;
      case ViewState.AUTH:
        return <Auth onLogin={handleLogin} setView={setView} />;
      case ViewState.ADMIN:
        return user?.isAdmin ? <AdminPanel nfts={nfts} /> : <Auth onLogin={handleLogin} setView={setView} />;
      default:
        return <div className="text-center p-20 font-mono italic">SIGNAL_LOST</div>;
    }
  };

  return (
    <Layout currentView={currentView} setView={setView} web3Status={web3Status} connectWallet={connectWallet} user={user} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <ThemeBackground isDarkMode={isDarkMode} />
      <div className="relative z-10 h-full">
        {renderContent()}
      </div>
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} setView={setView} isAdmin={user?.isAdmin || false} />
      <LegalModal isOpen={showLegal} onAccept={handleAcceptLegal} />
      <AIAssistant />
    </Layout>
  );
};

export default App;
