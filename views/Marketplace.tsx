import React, { useState, useEffect } from 'react';
import { NFTItem, UserProfile, ViewState } from '../types';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

interface MarketplaceProps {
  items: NFTItem[];
  user: UserProfile | null;
  onBuy: (id: string) => void;
  setView: (view: ViewState) => void;
}

const MOCK_STATS = [
  { name: 'Mon', vol: 4000 },
  { name: 'Tue', vol: 3000 },
  { name: 'Wed', vol: 2000 },
  { name: 'Thu', vol: 2780 },
  { name: 'Fri', vol: 1890 },
  { name: 'Sat', vol: 2390 },
  { name: 'Sun', vol: 3490 },
];

const Marketplace: React.FC<MarketplaceProps> = ({ items, user, onBuy, setView }) => {
  const [filter, setFilter] = useState<'all' | 'music' | 'video' | 'art'>('all');
  const [loading, setLoading] = useState(true);
  const [shareOpenId, setShareOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'price_asc' | 'price_desc'>('newest');

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter & Sort Logic
  const filtered = items.filter(n => {
    const matchesType = filter === 'all' || n.type === filter;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  const handleShare = (id: string, platform: 'twitter' | 'facebook' | 'copy') => {
    const url = `https://latitude.io/nft/${id}`;
    const text = "Check out this NFT on Latitude!";
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
    setShareOpenId(null);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      <header className="flex flex-col space-y-6 border-b pb-6 border-gray-200 dark:border-latitude-dim transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-latitude-blue dark:text-white">MARKETPLACE</h2>
            <p className="text-gray-500 max-w-md">Discover rare drops from the decentralized creative sovereignty.</p>
          </div>
          <button 
             onClick={() => setView(ViewState.CREATE)}
             className="mt-4 md:mt-0 bg-latitude-blue text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-latitude-teal hover:text-black transition-all shadow-md text-sm"
          >
             + List Asset
          </button>
        </div>
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between bg-gray-50 dark:bg-black/40 p-4 border border-gray-200 dark:border-latitude-dim rounded-sm">
           {/* Search */}
           <div className="flex-1 relative">
             <input 
               type="text" 
               placeholder="Search artists, tracks, or collections..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-10 pr-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim focus:border-latitude-teal focus:outline-none text-black dark:text-white transition-colors"
             />
             <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>

           <div className="flex flex-col md:flex-row gap-4">
              {/* Filter Tabs */}
              <div className="flex">
                {['all', 'music', 'video', 'art'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider border-y border-r first:border-l transition-colors ${
                      filter === f 
                      ? 'bg-latitude-teal text-black border-latitude-teal' 
                      : 'border-gray-300 dark:border-latitude-dim text-gray-500 hover:text-black dark:hover:text-white bg-white dark:bg-black'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim text-gray-700 dark:text-gray-300 text-sm uppercase focus:outline-none focus:border-latitude-teal cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
           </div>
        </div>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="bg-gray-100 dark:bg-gray-900 h-96 animate-pulse border border-transparent dark:border-latitude-dim rounded-sm"></div>
          ))}
        </div>
      ) : (
        <>
          {/* Market Stats Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 p-6 border transition-colors bg-white dark:bg-black/40 border-gray-200 dark:border-latitude-dim">
              <h3 className="text-xs text-latitude-teal mb-4 uppercase">Volume (24h)</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MOCK_STATS}>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{fill: 'rgba(74, 222, 222, 0.1)'}}
                    />
                    <Bar dataKey="vol" fill="#4ADEDE" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-6 border transition-colors bg-white dark:bg-black/40 border-gray-200 dark:border-latitude-dim flex flex-col justify-center text-center">
                <p className="text-gray-500 text-sm mb-2">TOTAL VOLUME</p>
                <p className="text-4xl font-mono text-latitude-blue dark:text-white">4,291 ETH</p>
                <div className="w-full h-px bg-gray-200 dark:bg-latitude-dim my-4"></div>
                <p className="text-gray-500 text-sm mb-2">ACTIVE WALLETS</p>
                <p className="text-4xl font-mono text-latitude-teal">8,204</p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
               <div className="col-span-full py-20 text-center text-gray-500">
                  <p className="text-lg">No signals found matching your criteria.</p>
               </div>
            ) : filtered.map((nft) => {
              const isOwned = user && (nft.ownerId === user.id);

              return (
              <div key={nft.id} className="group border transition-colors duration-300 relative bg-white dark:bg-black border-gray-200 dark:border-latitude-dim hover:border-latitude-teal dark:hover:border-latitude-teal shadow-sm hover:shadow-lg flex flex-col">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={nft.imageUrl} 
                    alt={nft.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-2 right-2 bg-latitude-blue/80 px-2 py-1 text-xs font-bold text-white border border-white/20">
                    {nft.type.toUpperCase()}
                  </div>
                </div>
                
                <div className="p-4 space-y-2 flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold truncate group-hover:text-latitude-teal text-gray-900 dark:text-white transition-colors">{nft.title}</h3>
                    <span className="text-latitude-blue dark:text-latitude-teal font-mono">{nft.price} ETH</span>
                  </div>
                  <p className="text-sm text-gray-500">{nft.artist}</p>
                  <p className="text-xs text-gray-400 line-clamp-2 h-8">{nft.description}</p>
                  
                  <div className="mt-auto pt-4 flex gap-2">
                    <button 
                      onClick={() => !isOwned && onBuy(nft.id)}
                      disabled={!!isOwned}
                      className={`flex-1 py-2 border text-xs font-bold uppercase transition-colors ${
                        isOwned 
                        ? 'bg-gray-100 dark:bg-gray-900 text-gray-400 border-gray-200 dark:border-gray-800 cursor-not-allowed'
                        : 'border-gray-300 dark:border-latitude-dim text-gray-700 dark:text-gray-300 hover:bg-latitude-teal hover:text-black hover:border-latitude-teal'
                      }`}
                    >
                      {isOwned ? 'Owned' : 'Collect'}
                    </button>
                    
                    <div className="relative">
                      <button 
                        onClick={() => setShareOpenId(shareOpenId === nft.id ? null : nft.id)}
                        className="h-full px-3 border border-gray-300 dark:border-latitude-dim text-gray-500 hover:text-latitude-blue dark:hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.66 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </>
      )}
    </div>
  );
};

export default Marketplace;