
import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
  setView: (view: ViewState) => void;
  isLoggedIn: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ setView, isLoggedIn }) => {
  return (
    <nav className="flex items-center justify-between p-6 bg-obsidian-deep border-b border-blood-dim fixed top-0 w-full z-50">
      <div className="logo font-cursive text-xl text-etch-red cursor-pointer" onClick={() => setView(ViewState.HOME)}>Latitude</div>
      <div className="nav-links flex gap-8 font-mono text-sm uppercase tracking-widest text-text-secondary">
        {isLoggedIn ? (
          <>
            <div className='flex gap-2 items-center'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></div>
              <span>System Status: ACTIVE</span>
            </div>
            <button onClick={() => setView(ViewState.PROFILE)} className="hover:text-etch-red transition-colors">Profile</button>
            <button onClick={() => setView(ViewState.MARKETPLACE)} className="hover:text-etch-red transition-colors">Marketplace</button>
            <button onClick={() => setView(ViewState.CREATE)} className="hover:text-etch-red transition-colors">Studio</button>
            <button onClick={() => setView(ViewState.SOCIAL)} className="hover:text-etch-red transition-colors">Social (Ai DJ)</button>
            <button onClick={() => setView(ViewState.BACKSTAGE)} className="hover:text-etch-red transition-colors">Backstage</button>
            <button onClick={() => setView(ViewState.ADMIN)} className="hover:text-etch-red transition-colors">Admin</button>
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
