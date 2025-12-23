
import React, { ReactNode } from 'react';
import { UserProfile, ViewState, Web3Status } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
  web3Status: Web3Status;
  connectWallet: () => void;
  user: UserProfile | null;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, currentView, setView, web3Status, connectWallet, user, isDarkMode, toggleDarkMode 
}) => {
  const navItems = [
    { id: ViewState.HOME, label: 'Studio' },
    { id: ViewState.MARKETPLACE, label: 'Market' },
    { id: ViewState.PRICING, label: 'Tiers' },
    { id: ViewState.CREATE, label: 'Mint' },
    { id: ViewState.SOCIAL, label: 'Social' },
    { id: ViewState.HELP, label: 'Help' },
  ];

  const logoClasses = isDarkMode 
    ? "text-latitude-red" 
    : "text-latitude-black";

  const sidebarClasses = isDarkMode 
    ? "bg-black border-r border-white/10" 
    : "bg-white border-r border-black/10";

  return (
    <div className={`min-h-screen flex flex-col md:flex-row relative overflow-hidden transition-all duration-700 ${isDarkMode ? 'dark text-white' : 'text-black'}`}>
      <aside className={`w-full md:w-64 z-50 flex flex-col justify-between p-6 h-screen transition-all duration-500 ${sidebarClasses}`}>
        <div>
          <div className="flex items-center gap-3 mb-12 cursor-pointer group" onClick={() => setView(ViewState.HOME)}>
             <h1 className={`text-6xl font-cursive ${logoClasses}`}>Latitude</h1>
          </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`text-left px-4 py-3 rounded-xl transition-all ${
                  currentView === item.id
                    ? (isDarkMode ? 'bg-latitude-blue text-white' : 'bg-latitude-red text-white shadow-lg')
                    : (isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-500 hover:text-black hover:bg-black/5')
                }`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">{item.label}</span>
              </button>
            ))}

            {user?.isAdmin && (
              <button
                onClick={() => setView(ViewState.ADMIN)}
                className={`text-left px-4 py-3 rounded-xl transition-all border-2 ${
                  currentView === ViewState.ADMIN ? 'bg-latitude-red text-white border-latitude-red' : (isDarkMode ? 'text-latitude-red border-latitude-red/20' : 'text-latitude-red border-latitude-red/20 hover:bg-latitude-red/5')
                }`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">ADMIN</span>
              </button>
            )}
          </nav>
        </div>

        <div className="space-y-4">
           <button onClick={toggleDarkMode} className={`w-full py-3 flex items-center justify-center gap-2 text-[10px] font-black uppercase border rounded-lg transition-colors ${isDarkMode ? 'border-white/10 text-gray-400 hover:text-white' : 'border-black/10 text-gray-500 hover:text-black'}`}>
             {isDarkMode ? '☀ LIGHT MODE' : '☾ DARK MODE'}
           </button>

           <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${web3Status === Web3Status.CONNECTED ? 'bg-latitude-teal' : 'bg-red-500'}`}></div>
                <span className={`text-[10px] font-bold uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>{web3Status}</span>
             </div>
             <button onClick={connectWallet} className={`w-full py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${isDarkMode ? 'bg-white text-black hover:bg-latitude-teal' : 'bg-black text-white hover:bg-latitude-teal hover:text-black'}`}>
               {web3Status === Web3Status.CONNECTED ? 'CONNECTED' : 'PHANTOM LOGIN'}
             </button>
           </div>

           {user ? (
             <div className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'}`} onClick={() => setView(ViewState.PROFILE)}>
                <img src={user.avatarUrl} className="w-10 h-10 rounded-lg border border-latitude-teal object-cover" />
                <div className="overflow-hidden">
                  <p className={`text-[10px] font-bold truncate ${isDarkMode ? 'text-white' : 'text-black'}`}>{user.name}</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-latitude-teal">{user.tier}</p>
                </div>
             </div>
           ) : (
             <button onClick={() => setView(ViewState.AUTH)} className="w-full py-4 bg-latitude-red text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all shadow-xl">
               LOGIN / JOIN
             </button>
           )}
        </div>
      </aside>
      <main className="flex-1 relative z-10 overflow-y-auto h-screen no-scrollbar">
        <div className="max-w-[1600px] mx-auto min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
