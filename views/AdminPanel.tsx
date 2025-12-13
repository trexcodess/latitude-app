
import React, { useState } from 'react';
import { NFTItem, UserTier } from '../types';

interface AdminPanelProps {
  nfts: NFTItem[];
  setNfts: React.Dispatch<React.SetStateAction<NFTItem[]>>;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ nfts, setNfts }) => {
  const [activeTab, setActiveTab] = useState<'accounts' | 'minting' | 'messaging'>('accounts');
  
  // Mock accounts pending activation
  const [pendingAccounts, setPendingAccounts] = useState([
    { id: 'u1', name: 'Rogue Wave', email: 'rogue@wave.io', status: 'PENDING' },
    { id: 'u2', name: 'Cyber Ghost', email: 'ghost@null.net', status: 'PENDING' },
  ]);

  const handleActivate = (id: string) => {
    setPendingAccounts(prev => prev.filter(a => a.id !== id));
    alert(`Account ${id} activated successfully.`);
  };

  const handleFixMint = (id: string) => {
    alert(`Regenerating metadata for NFT ${id}... Fixed!`);
  };

  const sendSystemBroadcast = () => {
    const msg = prompt("Enter system message to broadcast:");
    if (msg) alert(`Broadcasted: "${msg}" to all channels.`);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto animate-fade-in">
      <header className="mb-12 border-b border-latitude-red pb-6">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter">Command <span className="text-latitude-red">Center</span></h1>
        <p className="text-gray-500 font-mono text-sm mt-2">LATITUDE OS v3.0.1 - ROOT ACCESS GRANTED</p>
      </header>

      <div className="flex gap-4 mb-8">
        {['accounts', 'minting', 'messaging'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 text-xs font-bold uppercase border tracking-widest transition-all ${
              activeTab === tab 
              ? 'bg-latitude-red border-latitude-red text-white' 
              : 'border-white/10 text-gray-500 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="glass p-8 rounded-2xl border-white/5">
        {activeTab === 'accounts' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Account Activation Queue</h2>
            {pendingAccounts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-white/10 text-gray-500 uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="pb-4">Name</th>
                      <th className="pb-4">Email</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingAccounts.map(acc => (
                      <tr key={acc.id} className="border-b border-white/5">
                        <td className="py-4 font-bold text-white">{acc.name}</td>
                        <td className="py-4 text-gray-400">{acc.email}</td>
                        <td className="py-4"><span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 text-[10px] font-bold rounded">{acc.status}</span></td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => handleActivate(acc.id)}
                            className="bg-latitude-teal/10 text-latitude-teal border border-latitude-teal text-[10px] px-3 py-1 font-bold uppercase hover:bg-latitude-teal hover:text-black transition-all"
                          >
                            Activate
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 italic">No pending accounts. All systems operational.</p>
            )}
          </div>
        )}

        {activeTab === 'minting' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">NFT Integrity Monitor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nfts.map(nft => (
                <div key={nft.id} className="border border-white/10 p-4 rounded-xl flex items-center justify-between hover:border-latitude-red transition-colors">
                  <div className="flex items-center gap-4">
                    <img src={nft.imageUrl} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <p className="text-sm font-bold text-white">{nft.title}</p>
                      <p className="text-[10px] text-gray-500 uppercase">{nft.id}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleFixMint(nft.id)}
                      className="text-[10px] font-bold uppercase text-latitude-red border border-latitude-red/30 px-3 py-1 hover:bg-latitude-red hover:text-white transition-all"
                    >
                      Repair Metadata
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messaging' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white mb-4">Global Communication System</h2>
            <div className="bg-latitude-red/5 border-l-4 border-latitude-red p-6 rounded">
              <p className="text-sm text-gray-300 mb-4 font-mono leading-relaxed">
                Direct root broadcast capability. Send alerts to all connected users across all chat rooms.
              </p>
              <button 
                onClick={sendSystemBroadcast}
                className="bg-latitude-red text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-red-600 transition-all"
              >
                Trigger System Broadcast
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
               <div className="glass p-4 rounded-xl border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase mb-1">Active Chats</p>
                 <p className="text-2xl font-black text-white">4</p>
               </div>
               <div className="glass p-4 rounded-xl border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase mb-1">Banned Wallets</p>
                 <p className="text-2xl font-black text-white">12</p>
               </div>
               <div className="glass p-4 rounded-xl border-white/5">
                 <p className="text-[10px] text-gray-500 uppercase mb-1">Auto-Mod Log</p>
                 <button className="text-[10px] text-latitude-teal font-bold underline uppercase">View Log</button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
