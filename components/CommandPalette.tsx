
import React, { useState, useEffect, useCallback } from 'react';
import { ViewState } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  setView: (view: ViewState) => void;
  isAdmin: boolean;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, setView, isAdmin }) => {
  const [query, setQuery] = useState('');

  const actions = [
    { id: ViewState.HOME, label: 'Studio Home', icon: '🏠', description: 'Return to central studio' },
    { id: ViewState.MARKETPLACE, label: 'Marketplace', icon: '🛒', description: 'Browse and collect NFTs' },
    { id: ViewState.CREATE, label: 'Mint Asset', icon: '💎', description: 'Create new music or film NFT' },
    { id: ViewState.SOCIAL, label: 'Social Lounge', icon: '💬', description: 'Connect with other creators' },
    { id: ViewState.PRICING, label: 'Tier Selection', icon: '⚡', description: 'Manage your membership status' },
    { id: ViewState.PROFILE, label: 'Your Profile', icon: '👤', description: 'View your collection and identity' },
    { id: ViewState.HELP, label: 'Help & Docs', icon: '❓', description: 'Phantom setup and platform guide' },
  ];

  if (isAdmin) {
    actions.push({ id: ViewState.ADMIN, label: 'Admin Command Center', icon: '🛠️', description: 'Global system management' });
  }

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md transition-all animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-2xl overflow-hidden animate-slide-up">
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <span className="text-xl">🔍</span>
          <input 
            autoFocus
            type="text"
            placeholder="Search commands or navigate..."
            className="w-full bg-transparent border-none focus:outline-none text-lg text-white font-medium"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd className="hidden md:block bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] text-gray-500 font-mono">ESC</kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2 scrollbar-hide">
          {filteredActions.length > 0 ? (
            filteredActions.map(action => (
              <button
                key={action.id}
                onClick={() => {
                  setView(action.id);
                  onClose();
                  setQuery('');
                }}
                className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors text-left group border border-transparent hover:border-white/5"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg text-xl group-hover:scale-110 transition-transform">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold uppercase tracking-wider text-sm">{action.label}</div>
                  <div className="text-gray-500 text-xs">{action.description}</div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-latitude-red font-mono text-xs">JUMP ↵</div>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500 italic">No commands found for "{query}"</div>
          )}
        </div>

        <div className="p-3 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <div>Latitude Navigation Engine</div>
          <div className="flex gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default CommandPalette;
