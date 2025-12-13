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
    { id: ViewState.HELP, label: 'Help' },
  ];

  // Logic for the Logo: Neon Red in dark mode, "Cloud White" in light mode
  const logoClasses = isDarkMode 
    ? "text-latitude-red animate-neon-pulse" 
    : "text-white animate-cloud-logo";

  // Sidebar background: Darker in light mode for readability
  const sidebarClasses = isDarkMode 
    ? "glass border-r border-white/10" 
    : "sidebar-light border-r border-black/20";

  return (
    <div className={`min-h-screen flex flex-col md:flex-row relative overflow-hidden transition-all duration-700`}>
      {/* Sidebar Navigation */}
      <aside className={`w-full md:w-64 z-50 flex flex-col justify-between p-6 h-screen transition-colors duration-500 ${sidebarClasses}`}>
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
                    ? (isDarkMode ? 'bg-latitude-blue text-white shadow-lg' : 'bg-latitude-red text-white shadow-lg')
                    : (isDarkMode ? 'text-gray-400 hover:text-white hover:bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/10')
                }`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">{item.label}</span>
              </button>
            ))}

            {user?.isAdmin && (
              <button
                onClick={() => setView(ViewState.ADMIN)}
                className={`text-left px-4 py-3 rounded-xl transition-all border-2 ${
                  currentView === ViewState.ADMIN
                    ? 'bg-latitude-red border-latitude-red text-white shadow-lg shadow-latitude-red/30'
                    : 'text-latitude-red border-latitude-red/20 hover:bg-latitude-red/10'
                }`}
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">ADMIN</span>
              </button>
            )}
          </nav>
        </div>

        <div className="space-y-4">
           <button 
             onClick={toggleDarkMode}
             className="w-full py-2 flex items-center justify-center gap-2 text-[10px] font-black uppercase border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
           >
             {isDarkMode ? '☀ LIGHT MODE' : '☾ DARK MODE'}
           </button>

           <div className={`p-4 rounded-xl border ${isDarkMode ? 'glass border-white/10' : 'bg-black/30 border-white/10'}`}>
             <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${web3Status === Web3Status.CONNECTED ? 'bg-latitude-teal' : 'bg-red-500'}`}></div>
                <span className="text-[10px] font-bold text-white uppercase">{web3Status}</span>
             </div>
             <button 
               onClick={connectWallet}
               className={`w-full py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                 web3Status === Web3Status.CONNECTED 
                 ? 'bg-latitude-teal/10 text-latitude-teal border border-latitude-teal' 
                 : 'bg-white text-black hover:bg-latitude-teal hover:text-white'
               }`}
             >
               {web3Status === Web3Status.CONNECTED ? 'CONNECTED' : 'CONNECT PHANTOM'}
             </button>
           </div>

           {user ? (
             <div 
                className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-all ${isDarkMode ? 'glass border-white/10' : 'bg-black/30 border-white/10'} ${user.isAdmin ? 'border-latitude-red/40' : 'border-white/20'}`}
                onClick={() => setView(ViewState.PROFILE)}
             >
                <div className={`w-10 h-10 rounded-lg overflow-hidden border ${user.isAdmin ? 'border-latitude-red' : 'border-latitude-teal'}`}>
                  <img src={user.avatarUrl} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold text-white truncate">{user.name}</p>
                  <p className={`text-[9px] font-black uppercase tracking-widest ${user.isAdmin ? 'text-latitude-red' : 'text-latitude-teal'}`}>
                    {user.isAdmin ? 'SUPER ADMIN' : user.tier}
                  </p>
                </div>
             </div>
           ) : (
             <button 
               onClick={() => setView(ViewState.AUTH)}
               className="w-full py-4 bg-latitude-red text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-red-600 transition-all"
             >
               LOGIN / JOIN
             </button>
           )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative z-10 overflow-y-auto h-screen no-scrollbar">
        <div className="max-w-[1600px] mx-auto min-h-full">
           {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;