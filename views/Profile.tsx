import React, { useState, useEffect } from 'react';
import { UserProfile, Web3Status, GatedContent, NFTItem } from '../types';

// Mock Gated Content
const GATED_CONTENT: GatedContent[] = [
  {
    id: 'gc_1',
    title: 'Midnight Protocol - STEMS',
    description: 'Raw audio stems for remixing. Exclusive to owners of Midnight Protocol.',
    thumbnailUrl: 'https://picsum.photos/300/200?grayscale',
    type: 'download',
    requiredNftId: '1' 
  },
  {
    id: 'gc_2',
    title: 'Backstage Tour - Tokyo',
    description: '15 min behind the scenes video from the Cyber Tokyo sessions.',
    thumbnailUrl: 'https://picsum.photos/300/201?grayscale',
    type: 'video',
    requiredNftId: '4' 
  },
  {
    id: 'gc_3',
    title: 'Secret Verse',
    description: 'Unreleased verse from the Red Horizon sessions.',
    thumbnailUrl: 'https://picsum.photos/300/202?grayscale',
    type: 'audio',
    requiredNftId: '99' 
  }
];

interface ProfileProps {
  web3Status: Web3Status;
  user: UserProfile | null;
  nfts: NFTItem[];
  onUpdateProfile: (updatedUser: UserProfile) => void;
}

const Profile: React.FC<ProfileProps> = ({ web3Status, user, nfts, onUpdateProfile }) => {
  const [activeTab, setActiveTab] = useState<'created' | 'collection' | 'backstage'>('collection');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate Data Fetching
    const timer = setTimeout(() => setLoading(false), 800);
    if (user) {
      setEditForm({ ...user });
    }
    return () => clearTimeout(timer);
  }, [user]);

  // Filter NFTs based on current user ID
  const ownedNFTs = nfts.filter(nft => nft.ownerId === user?.id || nft.ownerId === 'current_user');
  const createdNFTs = nfts.filter(nft => nft.creatorId === user?.id || nft.creatorId === 'current_user');

  const checkAccess = (requiredId: string) => {
    return ownedNFTs.some(nft => nft.id === requiredId);
  };

  const handleSave = () => {
    if (user && editForm) {
      onUpdateProfile({ ...user, ...editForm } as UserProfile);
      setIsEditing(false);
    }
  };

  const handleShareProfile = () => {
      const url = `https://latitude.io/u/${user?.handle.replace('@', '')}`;
      navigator.clipboard.writeText(url);
      alert('Profile Link copied to clipboard!');
  };

  if (!user) return null;

  return (
    <div className="animate-fade-in pb-12">
      {/* Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden border-b border-gray-200 dark:border-latitude-dim group bg-gray-100 dark:bg-black">
         {isEditing ? (
             <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
                 <div className="w-full max-w-md px-4">
                     <label className="text-xs text-latitude-red uppercase font-bold">Banner URL</label>
                     <input 
                       value={editForm.bannerUrl || ''} 
                       onChange={e => setEditForm({...editForm, bannerUrl: e.target.value})}
                       className="w-full bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-2 text-black dark:text-white text-sm mt-1"
                     />
                 </div>
             </div>
         ) : null}
         <img src={isEditing ? editForm.bannerUrl : user.bannerUrl} alt="Banner" className="w-full h-full object-cover opacity-80 dark:opacity-50" />
         <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-latitude-black to-transparent pointer-events-none transition-colors"></div>
         
         {/* Edit/Share Buttons */}
         <div className="absolute top-4 right-4 flex gap-2 z-30">
            {!isEditing ? (
                <>
                <button 
                    onClick={handleShareProfile}
                    className="bg-white/80 dark:bg-black/60 border border-gray-300 dark:border-latitude-dim text-black dark:text-white px-3 py-2 text-xs font-bold uppercase hover:bg-latitude-blue hover:text-white transition-colors"
                >
                    Share
                </button>
                <button 
                    onClick={() => setIsEditing(true)}
                    className="bg-white/80 dark:bg-black/60 border border-gray-300 dark:border-latitude-dim text-black dark:text-white px-4 py-2 text-xs font-bold uppercase hover:bg-latitude-red hover:text-white hover:border-latitude-red transition-all"
                >
                    Edit Profile
                </button>
                </>
            ) : (
                <>
                    <button 
                        onClick={() => setIsEditing(false)}
                        className="bg-white dark:bg-black border border-gray-300 dark:border-gray-600 text-gray-500 px-4 py-2 text-xs font-bold uppercase hover:text-black dark:hover:text-white"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSave}
                        className="bg-latitude-red border border-latitude-red text-white px-4 py-2 text-xs font-bold uppercase hover:bg-red-600"
                    >
                        Save Changes
                    </button>
                </>
            )}
         </div>
      </div>

      {/* User Info Header */}
      <div className="px-4 md:px-8 -mt-16 relative flex flex-col md:flex-row items-start md:items-end gap-6 mb-12 z-20">
         <div className="w-32 h-32 border-2 border-latitude-red bg-white dark:bg-black p-1 relative group shadow-lg">
            <img src={isEditing ? editForm.avatarUrl : user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            {isEditing && (
                 <div className="absolute inset-0 bg-black/90 flex flex-col justify-center px-2">
                    <label className="text-[10px] text-latitude-red uppercase font-bold">Avatar URL</label>
                    <input 
                       value={editForm.avatarUrl || ''} 
                       onChange={e => setEditForm({...editForm, avatarUrl: e.target.value})}
                       className="w-full bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-1 text-black dark:text-white text-xs mt-1"
                     />
                 </div>
            )}
         </div>
         
         <div className="flex-1 mb-2 w-full">
            {isEditing ? (
                <div className="space-y-3 max-w-lg">
                    <div>
                        <label className="text-xs text-gray-500 uppercase">Display Name</label>
                        <input 
                            value={editForm.name || ''} 
                            onChange={e => setEditForm({...editForm, name: e.target.value})}
                            className="w-full bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-2 text-black dark:text-white text-lg font-bold"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 uppercase">Handle</label>
                        <input 
                            value={editForm.handle || ''} 
                            onChange={e => setEditForm({...editForm, handle: e.target.value})}
                            className="w-full bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-2 text-latitude-red font-mono"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 uppercase">Bio</label>
                        <textarea 
                            value={editForm.bio || ''} 
                            onChange={e => setEditForm({...editForm, bio: e.target.value})}
                            className="w-full bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-2 text-gray-700 dark:text-gray-300 text-sm"
                            rows={3}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <h1 className="text-4xl font-bold text-latitude-blue dark:text-white mb-1 transition-colors">{user.name}</h1>
                    <p className="text-latitude-red font-mono text-sm mb-4">{user.handle}</p>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm leading-relaxed transition-colors">{user.bio}</p>
                </>
            )}
         </div>

         <div className="flex flex-col gap-2 w-full md:w-auto">
             {isEditing ? (
                 <div className="flex flex-col gap-2 bg-gray-100 dark:bg-black/50 p-4 border border-gray-200 dark:border-latitude-dim">
                     <p className="text-xs font-bold text-gray-500 mb-1">SOCIAL LINKS</p>
                     <input 
                        placeholder="Twitter Handle"
                        value={editForm.socials?.twitter || ''}
                        onChange={e => setEditForm({...editForm, socials: {...editForm.socials, twitter: e.target.value}})}
                        className="bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-1 text-xs text-black dark:text-white"
                     />
                     <input 
                        placeholder="Instagram Handle"
                        value={editForm.socials?.instagram || ''}
                        onChange={e => setEditForm({...editForm, socials: {...editForm.socials, instagram: e.target.value}})}
                        className="bg-white dark:bg-black border border-gray-300 dark:border-latitude-dim p-1 text-xs text-black dark:text-white"
                     />
                 </div>
             ) : (
                <div className="flex gap-4 mb-3">
                    {user.socials?.twitter && (
                        <a href="#" className="text-gray-500 hover:text-latitude-blue dark:hover:text-white text-xs uppercase border border-gray-300 dark:border-latitude-dim px-3 py-1 bg-white/50 dark:bg-black/50">Twitter</a>
                    )}
                    {user.socials?.instagram && (
                        <a href="#" className="text-gray-500 hover:text-latitude-blue dark:hover:text-white text-xs uppercase border border-gray-300 dark:border-latitude-dim px-3 py-1 bg-white/50 dark:bg-black/50">Instagram</a>
                    )}
                </div>
             )}
         </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 dark:border-latitude-dim mb-8 transition-colors">
         {['collection', 'created', 'backstage'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                 activeTab === tab 
                 ? 'border-latitude-red text-latitude-red bg-red-50 dark:bg-latitude-dim/10' 
                 : 'border-transparent text-gray-500 hover:text-black dark:hover:text-gray-300'
               }`}
             >
               {tab} {tab === 'backstage' && <span className="text-[10px] ml-1 align-top text-white bg-latitude-red px-1 rounded-sm">LOCKED</span>}
             </button>
         ))}
      </div>

      {/* Content Area */}
      <div>
         {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {[1,2,3,4].map(i => <div key={i} className="h-64 bg-gray-100 dark:bg-gray-900 animate-pulse"></div>)}
             </div>
         ) : (
             <>
                 {activeTab === 'collection' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ownedNFTs.length > 0 ? ownedNFTs.map(nft => (
                            <div key={nft.id} className="group border border-gray-200 dark:border-latitude-dim bg-white dark:bg-black/40 hover:border-latitude-blue dark:hover:border-latitude-dim transition-colors shadow-sm">
                                <div className="aspect-square relative overflow-hidden">
                                   <img src={nft.imageUrl} className="w-full h-full object-cover opacity-90 dark:opacity-80" />
                                </div>
                                <div className="p-4">
                                   <h3 className="font-bold truncate text-gray-900 dark:text-white">{nft.title}</h3>
                                   <p className="text-xs text-gray-500">{nft.artist}</p>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full text-center py-20 text-gray-500 border border-dashed border-gray-300 dark:border-latitude-dim">
                                NO ASSETS DETECTED IN WALLET
                            </div>
                        )}
                    </div>
                 )}

                 {activeTab === 'created' && (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {createdNFTs.length > 0 ? createdNFTs.map(nft => (
                            <div key={nft.id} className="group border border-gray-200 dark:border-latitude-dim bg-white dark:bg-black/40 shadow-sm">
                                 <div className="aspect-square relative overflow-hidden">
                                   <img src={nft.imageUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                   <div className="absolute top-2 left-2 bg-latitude-red text-white text-[10px] font-bold px-2 py-1">CREATOR</div>
                                </div>
                                <div className="p-4">
                                   <h3 className="font-bold truncate text-gray-900 dark:text-white">{nft.title}</h3>
                                   <p className="text-xs text-latitude-red">{nft.price} ETH</p>
                                </div>
                            </div>
                        )) : (
                            <div className="col-span-full text-center py-20 text-gray-500 border border-dashed border-gray-300 dark:border-latitude-dim">
                                YOU HAVE NOT MINTED ANY ASSETS YET
                            </div>
                        )}
                     </div>
                 )}

                 {activeTab === 'backstage' && (
                     <div className="space-y-6">
                        <div className="p-4 bg-red-50 dark:bg-latitude-red/10 border-l-4 border-latitude-red mb-6">
                           <h3 className="text-latitude-red font-bold uppercase mb-1">Token Gated Content</h3>
                           <p className="text-xs text-gray-500 dark:text-gray-400">Exclusive resources unlocked by your NFT ownership. Immutable access control.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {GATED_CONTENT.map(content => {
                               const hasAccess = checkAccess(content.requiredNftId);
                               const requiredNFT = nfts.find(n => n.id === content.requiredNftId);

                               return (
                                 <div key={content.id} className={`border transition-colors ${hasAccess ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/10' : 'border-gray-200 bg-white dark:border-latitude-dim dark:bg-black/40'} relative overflow-hidden group shadow-sm`}>
                                     <div className="flex h-full">
                                        <div className="w-1/3 relative">
                                            <img src={content.thumbnailUrl} className={`w-full h-full object-cover ${hasAccess ? '' : 'grayscale opacity-30'}`} />
                                            {!hasAccess && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                                    <div className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center">
                                                        <span className="text-gray-500 text-xs">🔒</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 p-4 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className={`text-[10px] font-bold uppercase px-2 py-1 border ${hasAccess ? 'border-green-600 text-green-600' : 'border-gray-400 text-gray-400'}`}>
                                                        {content.type}
                                                    </span>
                                                    {hasAccess && <span className="text-[10px] text-green-600 dark:text-green-500 animate-pulse">UNLOCKED</span>}
                                                </div>
                                                <h3 className={`font-bold text-lg mb-2 ${hasAccess ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-600'}`}>{content.title}</h3>
                                                <p className="text-xs text-gray-500 mb-4">{content.description}</p>
                                            </div>
                                            
                                            {hasAccess ? (
                                                <button className="w-full py-2 bg-latitude-blue text-white text-xs font-bold uppercase hover:bg-blue-800 transition-colors">
                                                    ACCESS CONTENT
                                                </button>
                                            ) : (
                                                <div className="text-xs text-gray-500 border-t border-gray-200 dark:border-gray-800 pt-2">
                                                    Requires: <span className="text-latitude-red font-bold">{requiredNFT?.title || 'Unknown Asset'}</span>
                                                </div>
                                            )}
                                        </div>
                                     </div>
                                 </div>
                               );
                           })}
                        </div>
                     </div>
                 )}
             </>
         )}
      </div>
    </div>
  );
};

export default Profile;