
import React, { useState, useEffect } from 'react';
import { NFTItem, UserProfile, ViewState } from '../types';

interface MarketplaceProps {
  items: NFTItem[];
  user: UserProfile | null;
  onBuy: (id: string) => void;
  setView: (view: ViewState) => void;
}

const SovereignGallery: React.FC<{ items: NFTItem[] }> = ({ items }) => {
  const featured = items.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (featured.length === 0) return null;

  return (
    <section className="mb-24 animate-fade-in pt-8">
      <div className="flex items-center gap-6 mb-12 px-4 md:px-0">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">Sovereign <span className="text-latitude-red">Gallery</span></h2>
        <div className="h-0.5 flex-1 bg-gradient-to-r from-latitude-red to-transparent opacity-20"></div>
        <span className="hidden md:block text-[10px] font-black uppercase text-gray-500 tracking-[0.5em]">Network Apex Signals</span>
      </div>

      <div className="relative h-[600px] md:h-[500px] w-full bg-[#080808] border border-white/5 rounded-[50px] overflow-hidden group shadow-2xl">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,0,0.1)_0%,_transparent_70%)]"></div>
         
         {featured.map((item, i) => (
           <div 
             key={item.id} 
             className={`absolute inset-0 transition-all duration-1000 flex flex-col md:flex-row items-center p-8 md:p-16 gap-10 md:gap-20 ${i === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-40 pointer-events-none'}`}
           >
              <div className="w-full md:w-1/2 aspect-square relative z-10">
                 <div className="absolute -inset-6 bg-latitude-red/20 blur-[80px] rounded-full opacity-40 animate-pulse"></div>
                 <img src={item.imageUrl} className="w-full h-full object-cover rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative border border-white/10" />
                 <div className="absolute -bottom-6 -right-6 bg-latitude-red text-white p-6 rounded-3xl shadow-2xl font-black italic text-3xl">#00{i+1}</div>
              </div>

              <div className="w-full md:w-1/2 space-y-8 relative z-10 text-center md:text-left">
                 <div className="space-y-4">
                    <p className="text-latitude-teal font-mono text-[10px] uppercase tracking-[0.6em]">Premium Metadata Hub</p>
                    <h3 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none truncate">{item.title}</h3>
                    <p className="text-2xl text-gray-400 font-cursive lowercase">curated by {item.artist}</p>
                 </div>
                 
                 <p className="text-gray-500 text-sm max-w-md leading-relaxed font-mono uppercase tracking-widest text-xs">"{item.description}"</p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <div className="bg-black border border-white/10 px-8 py-4 rounded-3xl flex flex-col items-center md:items-start shadow-inner">
                       <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Apex Bid</span>
                       <span className="text-3xl font-mono text-latitude-solana leading-none">{item.price} SOL</span>
                    </div>
                    <button className="px-12 py-5 bg-latitude-red text-white font-black uppercase tracking-[0.4em] rounded-3xl shadow-[0_20px_40px_rgba(255,0,0,0.2)] hover:scale-105 active:scale-95 transition-all text-xs">Collect Signal</button>
                 </div>
              </div>
           </div>
         ))}

         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {featured.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-16 bg-latitude-red shadow-[0_0_10px_#ff0000]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
              />
            ))}
         </div>
      </div>
    </section>
  );
};

const Marketplace: React.FC<MarketplaceProps> = ({ items, user, onBuy, setView }) => {
  const [filter, setFilter] = useState<'all' | 'music' | 'video' | 'art'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'price_asc' | 'price_desc'>('newest');

  const filtered = items.filter(n => {
    const matchesType = filter === 'all' || n.type === filter;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 animate-fade-in pb-32">
      <SovereignGallery items={items} />

      <header className="flex flex-col space-y-10 border-b border-white/10 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-7xl font-black text-white uppercase italic tracking-tighter">Market<span className="text-latitude-red">Place</span></h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.4em]">Decentralized Creative Exchange Protocol</p>
          </div>
          <button onClick={() => setView(ViewState.CREATE)} className="px-12 py-6 bg-latitude-red text-white font-black uppercase tracking-[0.5em] rounded-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-[11px] border-b-4 border-red-900">
             + Deploy High-Fidelity Signal
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 justify-between bg-vst/40 p-8 border border-white/5 rounded-[40px] backdrop-blur-md shadow-inner">
           <div className="flex-1 relative">
             <input 
               type="text" 
               placeholder="Search artists, frequencies, or collections..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-16 pr-6 py-5 bg-black border border-white/10 rounded-2xl focus:border-latitude-red focus:outline-none text-white transition-all font-mono text-sm placeholder:text-gray-800"
             />
             <svg className="w-6 h-6 text-gray-800 absolute left-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>

           <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex p-1.5 bg-black rounded-2xl border border-white/5">
                {['all', 'music', 'video', 'art'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                      filter === f ? 'bg-latitude-red text-white shadow-lg shadow-red-500/20' : 'text-gray-700 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-8 py-3 bg-black border border-white/10 rounded-2xl text-gray-500 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-latitude-red cursor-pointer"
              >
                <option value="newest">Latest Drop</option>
                <option value="price_asc">SOL: Low to High</option>
                <option value="price_desc">SOL: High to Low</option>
              </select>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filtered.map((nft) => {
          const isOwned = user && (nft.ownerId === user.id);
          return (
            <div key={nft.id} className="group flex flex-col animate-slide-up">
              <div className="aspect-square bg-vst border border-white/5 p-2.5 rounded-[50px] overflow-hidden transition-all group-hover:border-latitude-red group-hover:shadow-[0_0_50px_rgba(255,0,0,0.3)] mb-8">
                <div className="w-full h-full rounded-[40px] overflow-hidden relative">
                  <img src={nft.imageUrl} alt={nft.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-xl px-4 py-2 text-[10px] font-black text-white rounded-2xl border border-white/10 uppercase tracking-[0.2em]">{nft.type}</div>
                </div>
              </div>
              
              <div className="px-6 space-y-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter truncate group-hover:text-latitude-red transition-colors leading-none">{nft.title}</h3>
                  <span className="text-latitude-solana font-mono text-xl font-bold leading-none">{nft.price} SOL</span>
                </div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="w-8 h-8 rounded-full bg-latitude-blue/20 flex items-center justify-center text-xs">👤</div>
                  <p className="text-[11px] text-gray-600 font-mono tracking-widest uppercase truncate">{nft.artist}</p>
                </div>
                <div className="mt-auto flex gap-4">
                  <button 
                    onClick={() => !isOwned && onBuy(nft.id)}
                    className={`flex-1 py-5 text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl transition-all border-b-4 ${
                      isOwned ? 'bg-white/5 text-gray-800 border-white/10 cursor-not-allowed' : 'bg-white text-black border-black/20 hover:bg-latitude-red hover:text-white shadow-xl'
                    }`}
                  >
                    {isOwned ? 'SIGNAL_IN_VAULT' : 'COLLECT_SIGNAL'}
                  </button>
                  <button className="w-16 h-16 border border-white/10 rounded-2xl flex items-center justify-center text-gray-700 hover:text-white transition-all group-hover:border-white/20 active:scale-95 shadow-inner">
                     <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.66 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marketplace;
