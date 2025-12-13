import React, { useState } from 'react';
import { UserTier, NFTItem, CollaboratorSplit, Web3Status } from '../types';

interface CreateProps {
  userTier: UserTier;
  onMint: (nft: NFTItem) => void;
  walletConnected: boolean;
}

const Create: React.FC<CreateProps> = ({ userTier, onMint, walletConnected }) => {
  const [splits, setSplits] = useState<CollaboratorSplit[]>([
    { address: 'Your Wallet', role: 'Creator', percentage: 95 }
  ]);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    type: 'music' as 'music' | 'video' | 'art',
    price: 0.5,
    description: ''
  });

  const canMint = userTier !== UserTier.LISTENER;

  const addCollaborator = () => {
    setSplits([...splits, { address: '', role: '', percentage: 0 }]);
  };

  const updateSplit = (index: number, field: keyof CollaboratorSplit, value: string | number) => {
    const newSplits = [...splits];
    newSplits[index] = { ...newSplits[index], [field]: value };
    setSplits(newSplits);
  };

  const totalSplit = splits.reduce((sum, s) => sum + Number(s.percentage), 0);

  if (!walletConnected) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-black text-white mb-4">WALLET DISCONNECTED</h2>
        <p className="text-gray-400 mb-8 max-w-md">Connect your Phantom wallet to access the creative suite.</p>
      </div>
    );
  }

  if (!canMint) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-black text-white mb-4">MINTING LOCKED</h2>
        <p className="text-gray-400 mb-8 max-w-md">Upgrade to Fan Club or Label Exec status to mint your own assets.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-12 animate-fade-in">
      <header className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Mint <span className="text-latitude-red">Asset</span></h2>
          <p className="text-gray-500">Deploy your creation to the Solana network.</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest">Platform Fee</span>
          <p className="text-latitude-solana font-mono font-bold">5.00%</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border-dashed border-2 border-white/10 h-64 flex flex-col items-center justify-center cursor-pointer hover:border-latitude-red transition-colors group">
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">📁</span>
            <p className="text-xs text-gray-500 font-bold uppercase">Upload Media (MP3, MP4, PNG)</p>
          </div>
          
          <div className="space-y-4">
            <input 
              placeholder="Asset Title" 
              className="w-full glass p-4 rounded-xl text-white border-none focus:ring-2 ring-latitude-red"
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
            <select 
              className="w-full glass p-4 rounded-xl text-white border-none focus:ring-2 ring-latitude-red appearance-none"
              onChange={e => setFormData({...formData, type: e.target.value as any})}
            >
              <option value="music">Music Track / Album</option>
              <option value="video">Film / TV Clip</option>
              <option value="art">Digital Artwork</option>
            </select>
            <input 
              placeholder="Primary Price (SOL)" 
              type="number"
              className="w-full glass p-4 rounded-xl text-white border-none focus:ring-2 ring-latitude-red"
              onChange={e => setFormData({...formData, price: Number(e.target.value)})}
            />
            <textarea 
              placeholder="Description & Metadata" 
              rows={4}
              className="w-full glass p-4 rounded-xl text-white border-none focus:ring-2 ring-latitude-red"
              onChange={e => setFormData({...formData, description: e.target.value})}
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white uppercase tracking-widest">Revenue Splits</h3>
            <button onClick={addCollaborator} className="text-xs text-latitude-solana hover:underline">+ Add Collaborator</button>
          </div>
          
          <div className="glass p-6 rounded-2xl space-y-4">
            {splits.map((s, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input 
                  placeholder="Wallet Address" 
                  value={s.address}
                  className="flex-1 glass p-2 rounded-lg text-xs text-white"
                  onChange={e => updateSplit(i, 'address', e.target.value)}
                />
                <input 
                  placeholder="Role" 
                  value={s.role}
                  className="w-20 glass p-2 rounded-lg text-xs text-white"
                  onChange={e => updateSplit(i, 'role', e.target.value)}
                />
                <input 
                  type="number"
                  placeholder="%" 
                  value={s.percentage}
                  className="w-16 glass p-2 rounded-lg text-xs text-white text-right"
                  onChange={e => updateSplit(i, 'percentage', Number(e.target.value))}
                />
              </div>
            ))}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 uppercase font-bold">Total Payout</span>
              <span className={`font-mono font-bold ${totalSplit === 95 ? 'text-latitude-solana' : 'text-latitude-red'}`}>
                {totalSplit + 5}% (Incl. 5% Fee)
              </span>
            </div>
          </div>

          <button 
            disabled={totalSplit !== 95}
            className="w-full py-6 bg-latitude-red text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
          >
            Deploy Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;