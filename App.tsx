
import React, { useState, useEffect } from 'react';
import Marketplace from './views/Marketplace';
import Create from './views/Create';
import Social from './views/Social';
import Profile from './views/Profile';
import Auth from './views/Auth';
import Help from './views/Help';
import AdminPanel from './views/AdminPanel';
import Backstage from './views/Backstage';
import UserManagement from './views/UserManagement';
import Minting from './views/Minting';
import GoingPlatinum from './views/goingplatinum';
import AIAssistant from './components/AIAssistant';
import CommandPalette from './components/CommandPalette';
import { ViewState, UserProfile, NFTItem, UserTier } from './types';
import { authService } from './services/authService';
import Home from './views/Home';
import NewNavigation from './components/NewNavigation';

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
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  const [user, setUser] = useState<UserProfile | null>(authService.getCurrentUser());
  const [nfts, setNfts] = useState<NFTItem[]>(INITIAL_NFTS);

  useEffect(() => {
    const unsubscribe = authService.subscribeToAuth((u) => {
       if (!u && user?.id !== 'super_admin') setUser(null);
       else if (u) setUser(u);
    });
    return () => unsubscribe();
  }, [user?.id]);

  const handleLogin = (u: UserProfile) => {
    setUser(u);
    setView(ViewState.PROFILE);
  };

  const renderContent = () => {
    const isProtected = [ViewState.CREATE, ViewState.ADMIN, ViewState.PROFILE, ViewState.BACKSTAGE, ViewState.USER_MANAGEMENT, ViewState.MINTING].includes(currentView);
    if (isProtected && !user) {
      return <Auth setView={setView} onLogin={handleLogin} />;
    }

    switch (currentView) {
      case ViewState.HOME:
        return <Home setView={setView} />;
      case ViewState.MARKETPLACE:
        return <Marketplace items={nfts} user={user} setView={setView} onBuy={(id) => alert('Bought NFT Signal '+id)} />;
      case ViewState.HELP:
        return <Help setView={setView}/>;
      case ViewState.SOCIAL:
        return <Social user={user} setView={setView} />;
      case ViewState.CREATE:
        return <Create user={user} userTier={user?.isAdmin ? UserTier.LABEL_EXEC : (user?.tier || UserTier.LISTENER)} walletConnected={true} onMint={(n) => setNfts([n, ...nfts])} setView={setView} />;
      case ViewState.PROFILE:
        return <Profile user={user} nfts={nfts} onUpdateProfile={u => setUser(u)} setView={setView} />;
      case ViewState.BACKSTAGE:
        return <Backstage user={user} setView={setView} />;
      case ViewState.MINTING:
        return <Minting setView={setView} />;
      case ViewState.AUTH:
        return <Auth setView={setView} onLogin={handleLogin} />;
      case ViewState.ADMIN:
        return user?.isAdmin ? <AdminPanel nfts={nfts} setView={setView} /> : <Auth setView={setView} onLogin={handleLogin} />;
      case ViewState.USER_MANAGEMENT:
        return user?.isAdmin ? <UserManagement setView={setView} /> : <Auth setView={setView} onLogin={handleLogin} />;
      case ViewState.GOING_PLATINUM:
        return <GoingPlatinum />;
      default:
        return <div className="text-center p-20 font-mono italic">SIGNAL_LOST</div>;
    }
  };

  return (
    <div className="app-shell">
      <NewNavigation setView={setView} />
      <div className="main-content">
        {renderContent()}
      </div>
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} setView={setView} isAdmin={user?.isAdmin || false} />
      <AIAssistant />
    </div>
  );
};

export default App;
