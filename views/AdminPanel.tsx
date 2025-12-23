
import React, { useState } from 'react';
import { NFTItem, ViewState } from '../types';

const AdminPanel: React.FC<{ nfts: NFTItem[], setView: (view: ViewState) => void }> = ({ nfts, setView }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'tournaments' | 'system'>('overview');

  return (
    <div className="p-4 md:p-12 max-w-7xl mx-auto animate-fade-in pb-32">
      <header className="mb-16 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">Super <span className="text-latitude-red">Admin</span></h1>
          <p className="text-latitude-teal font-mono text-sm mt-4 uppercase tracking-[0.6em]">Global Sovereignty Control • V4.2.0</p>
        </div>
        <div className="bg-vst p-6 rounded-3xl border border-white/10 text-right min-w-[200px] shadow-2xl">
          <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em] mb-2">Network Load Delta</p>
          <p className="text-4xl font-mono text-latitude-solana animate-pulse">0.02 MS</p>
          <div className="h-1 w-full bg-latitude-solana/10 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-latitude-solana w-1/4"></div>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
        {['overview', 'users', 'tournaments', 'system'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-12 py-5 text-xs font-black uppercase tracking-[0.4em] transition-all rounded-2xl border ${
              activeTab === tab 
              ? 'bg-latitude-red border-latitude-red text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] scale-105' 
              : 'bg-vst/40 border-white/5 text-gray-500 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-10">
        {activeTab === 'overview' && (
          <>
            {[
              { label: 'Total Volume', value: '1.2k SOL', sub: '+22% (24h)', color: 'text-latitude-solana' },
              { label: 'Network Nodes', value: '4,096', sub: '99.9% Sync', color: 'text-latitude-blue' },
              { label: 'Asset Depth', value: nfts.length.toString(), sub: 'Minted Signal', color: 'text-latitude-purple' },
              { label: 'Burn Rate', value: '0.005 SOL', sub: 'Per Tx', color: 'text-latitude-red' },
            ].map((stat, i) => (
              <div key={i} className="bg-vst/40 backdrop-blur-md p-10 rounded-[50px] border border-white/5 group hover:border-latitude-red transition-all shadow-xl">
                 <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.3em] mb-6">{stat.label}</p>
                 <p className={`text-5xl font-black uppercase italic tracking-tighter ${stat.color}`}>{stat.value}</p>
                 <p className="text-[10px] text-gray-500 mt-4 font-mono uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </>
        )}

        {activeTab === 'users' && (
          <div className="lg:col-span-4">
            <button
                onClick={() => setView(ViewState.USER_MANAGEMENT)}
                className="w-full bg-vst/40 backdrop-blur-md p-10 rounded-[50px] border border-white/5 group hover:border-latitude-blue transition-all shadow-xl text-left"
            >
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">User Hierarchy</h3>
                <p className="text-gray-500 mt-4 font-mono uppercase text-xs leading-loose tracking-[0.2em]">
                    Manage user roles, permissions, and the relationships between different user types.
                </p>
                <div className="mt-8">
                    <span className="px-10 py-5 bg-latitude-blue text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl group-hover:bg-white group-hover:text-black transition-all">
                        Manage Users
                    </span>
                </div>
            </button>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="lg:col-span-4 space-y-12">
             <div className="bg-vst/40 backdrop-blur-md p-10 rounded-[50px] border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Active Battle <span className="text-latitude-red">Governance</span></h3>
                   <button className="px-6 py-2 bg-latitude-solana text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-white transition-all">Export Protocol Log</button>
                </div>
                
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead className="text-[10px] font-black uppercase text-gray-600 border-b border-white/5">
                         <tr>
                            <th className="pb-6 tracking-[0.3em]">Signal ID</th>
                            <th className="pb-6 tracking-[0.3em]">Competitors</th>
                            <th className="pb-6 tracking-[0.3em]">Prize Pool</th>
                            <th className="pb-6 tracking-[0.3em]">Audit Status</th>
                            <th className="pb-6 tracking-[0.3em]">Actions</th>
                         </tr>
                      </thead>
                      <tbody className="font-mono text-xs">
                         <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                            <td className="py-8 text-latitude-teal font-black">#LAT-B1_SOL</td>
                            <td className="py-8 text-white uppercase">GLITCH_K vs SURFER_S</td>
                            <td className="py-8 text-latitude-solana font-black text-lg">25.5 SOL</td>
                            <td className="py-8">
                               <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                                  <span className="text-green-500 font-black uppercase tracking-widest">CLEAR_SIGNAL</span>
                               </div>
                            </td>
                            <td className="py-8 flex gap-3">
                               <button className="px-5 py-2 bg-white/5 hover:bg-latitude-red text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest">Flag Split</button>
                               <button className="px-5 py-2 bg-white/5 hover:bg-latitude-blue text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest">Adjust Pool</button>
                            </td>
                         </tr>
                         <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                            <td className="py-8 text-latitude-teal font-black">#LAT-B2_SYN</td>
                            <td className="py-8 text-white uppercase">VOID_RUN vs SHADOW_W</td>
                            <td className="py-8 text-latitude-solana font-black text-lg">12.0 SOL</td>
                            <td className="py-8">
                               <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_#eab308]"></span>
                                  <span className="text-yellow-500 font-black uppercase tracking-widest">PENDING_REVIEW</span>
                               </div>
                            </td>
                            <td className="py-8 flex gap-3">
                               <button className="px-5 py-2 bg-latitude-red text-white transition-all rounded-xl uppercase font-black text-[9px] tracking-widest">Review Dispute</button>
                               <button className="px-5 py-2 bg-white/5 hover:bg-latitude-blue text-white transition-all rounded-xl border border-white/10 uppercase font-black text-[9px] tracking-widest">Lock Sync</button>
                            </td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-latitude-blue/5 p-10 border border-latitude-blue/20 rounded-[50px] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-125 transition-transform">💎</div>
                   <h3 className="text-2xl font-black text-latitude-blue uppercase mb-4 italic tracking-tighter">Prize Liquidity Escrow</h3>
                   <p className="text-xs text-gray-500 font-mono mb-8 uppercase leading-relaxed tracking-widest">Audit the smart contract wallets holding tournament prizes. Total locked value across all active rings must exceed 100.0 SOL to maintain network integrity.</p>
                   <div className="flex gap-4">
                      <input className="bg-black/60 border border-white/10 p-5 rounded-2xl flex-1 font-mono text-xs text-latitude-blue focus:outline-none focus:border-latitude-blue" placeholder="Enter Escrow Hash..." />
                      <button className="px-10 py-5 bg-latitude-blue text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-black transition-all">Audit Hub</button>
                   </div>
                </div>

                <div className="bg-latitude-purple/5 p-10 border border-latitude-purple/20 rounded-[50px] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 text-5xl opacity-10 group-hover:scale-125 transition-transform">⚖️</div>
                   <h3 className="text-2xl font-black text-latitude-purple uppercase mb-4 italic tracking-tighter">Global Split Policy</h3>
                   <p className="text-xs text-gray-500 font-mono mb-8 uppercase leading-relaxed tracking-widest">Adjust the default platform cut for high-volume battles. Current global delta is 5.0%. Executives can lower this for Tier 3 partnerships to incentivize adoption.</p>
                   <div className="flex gap-6 items-center">
                      <input type="range" className="flex-1 accent-latitude-purple" min="0" max="10" step="0.5" />
                      <span className="text-2xl font-black text-white font-mono">5.0%</span>
                      <button className="px-8 py-4 bg-latitude-purple text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-xl hover:bg-white hover:text-black transition-all">Set Delta</button>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="lg:col-span-4 space-y-12">
             <div className="bg-latitude-red/5 p-12 border border-latitude-red/20 rounded-[80px] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-latitude-red/5 animate-pulse opacity-50"></div>
                <h3 className="text-5xl font-black text-latitude-red uppercase mb-6 italic tracking-tighter relative z-10">PROTOCOL KILLSWITCH</h3>
                <p className="text-gray-500 mb-10 max-w-2xl mx-auto font-mono uppercase text-xs leading-loose tracking-[0.2em] relative z-10">Permanently disable all NFT deployments, marketplace trades, and battle prizes across the entire Latitude ecosystem. This action requires multisig authorization from 3 root admins and is only for catastrophic system breaches.</p>
                <button className="px-16 py-6 bg-latitude-red text-white font-black uppercase tracking-[0.5em] text-xs rounded-3xl hover:scale-110 active:scale-95 transition-all shadow-2xl relative z-10">INITIATE GLOBAL LOCKDOWN</button>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {[
                   { label: 'Latency Threshold', val: '250ms', color: 'text-latitude-teal' },
                   { label: 'Max Splits', val: '12', color: 'text-latitude-blue' },
                   { label: 'Indexing Speed', val: 'Ultra-Fast', color: 'text-latitude-solana' },
                ].map((conf, i) => (
                   <div key={i} className="bg-vst/60 p-8 rounded-[40px] border border-white/5 text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-4">{conf.label}</p>
                      <p className={`text-2xl font-black uppercase tracking-tighter italic ${conf.color}`}>{conf.val}</p>
                      <button className="mt-6 text-[9px] font-black text-white/40 hover:text-white transition-all uppercase tracking-widest">Adjust Configuration</button>
                   </div>
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
