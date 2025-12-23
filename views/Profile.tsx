
import React, { useState, useEffect } from 'react';
import { UserProfile, UserTier, NFTItem } from '../types';
import { authService } from '../services/authService';

const Profile: React.FC<{ user: UserProfile | null, nfts: NFTItem[], onUpdateProfile: (u: UserProfile) => void }> = ({ user, nfts, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) setEditForm({ ...user });
  }, [user]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'avatarUrl' | 'bannerUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (user && editForm) {
      setLoading(true);
      try {
        await authService.updateProfile(editForm);
        onUpdateProfile({ ...user, ...editForm } as UserProfile);
        setIsEditing(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  if (!user) return null;

  const userVault = nfts.filter(n => n.ownerId === user.id || n.creatorId === user.id);

  return (
    <div className="animate-fade-in pb-12 w-full max-w-7xl mx-auto px-4 md:px-8 pt-6">
      {/* Banner Section */}
      <div className="relative h-48 md:h-80 w-full overflow-hidden rounded-[40px] border border-white/5 bg-vst group">
         <img src={editForm.bannerUrl || user.bannerUrl} alt="Banner" className="w-full h-full object-cover opacity-50 transition-opacity group-hover:opacity-70" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
         
         {isEditing && (
           <label className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-20">
              <span className="text-white font-black uppercase text-xs tracking-[0.4em] bg-latitude-red px-6 py-3 rounded-full">Change Environment Map</span>
              <input type="file" className="hidden" accept="image/*" onChange={e => handleFileChange(e, 'bannerUrl')} />
           </label>
         )}
         
         <div className="absolute top-6 right-6 z-30 flex gap-2">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="px-5 md:px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-latitude-red transition-all">
                Edit Protocol
              </button>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => setIsEditing(false)} className="px-5 md:px-8 py-3 bg-gray-900 text-white font-black uppercase text-[10px] tracking-widest rounded-xl border border-white/10">Abort</button>
                <button onClick={handleSave} disabled={loading} className="px-5 md:px-8 py-3 bg-latitude-solana text-black font-black uppercase text-[10px] tracking-widest rounded-xl shadow-2xl hover:bg-white transition-all disabled:opacity-50">
                  {loading ? 'SYNCING...' : 'Commit Data'}
                </button>
              </div>
            )}
         </div>
      </div>

      {/* Profile Info Section */}
      <div className="relative z-20 flex flex-col items-center md:items-end md:flex-row gap-6 md:gap-10 -mt-20 md:-mt-28 mb-16 px-4">
         <div className="relative group">
            <div className="w-40 h-40 md:w-52 md:h-52 border-8 border-black bg-vst rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={editForm.avatarUrl || user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                {isEditing && (
                  <label className="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-[10px] font-black uppercase tracking-tighter text-center p-4 bg-latitude-blue/80 rounded-full">Update Signal</span>
                    <input type="file" className="hidden" accept="image/*" onChange={e => handleFileChange(e, 'avatarUrl')} />
                  </label>
                )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-latitude-solana text-black font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                Verified Asset
            </div>
         </div>

         <div className="flex-1 text-center md:text-left pb-4 space-y-2 w-full max-w-xl">
            {isEditing ? (
              <div className="space-y-6">
                <div className="relative">
                  <span className="text-[10px] font-black text-latitude-solana uppercase block mb-2">Display ID</span>
                  <input 
                    className="w-full bg-black border border-white/10 p-4 text-2xl md:text-4xl font-black text-white rounded-2xl focus:border-latitude-solana outline-none transition-all uppercase italic" 
                    value={editForm.name} 
                    onChange={e => setEditForm({...editForm, name: e.target.value})} 
                  />
                </div>
                <div className="relative">
                  <span className="text-[10px] font-black text-latitude-blue uppercase block mb-2">Sovereign Bio</span>
                  <textarea 
                    className="w-full bg-black border border-white/10 p-4 text-sm text-gray-400 rounded-2xl h-24 outline-none focus:border-latitude-blue transition-all" 
                    value={editForm.bio} 
                    onChange={e => setEditForm({...editForm, bio: e.target.value})} 
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none truncate">{user.name}</h1>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <p className="text-latitude-red font-mono text-xl">{user.handle}</p>
                  <div className="h-4 w-px bg-white/10"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-latitude-teal bg-latitude-teal/10 px-3 py-1 rounded-full">
                    Protocol Level: {user.tier}
                  </span>
                </div>
                <p className="text-gray-400 text-sm max-w-2xl mt-4 leading-relaxed italic">"{user.bio}"</p>
              </>
            )}
         </div>
      </div>

      {/* Digital Vault Section */}
      <div className="bg-[#080808] rounded-[40px] border border-white/5 p-8 md:p-12 shadow-2xl">
         <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-6">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">Digital <span className="text-latitude-red">Vault</span></h2>
                <div className="hidden md:block h-10 w-px bg-white/10"></div>
                <div className="flex gap-8">
                   <div className="text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Signals</p>
                      <p className="text-2xl font-mono text-white leading-none">{userVault.length}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Market Val</p>
                      <p className="text-2xl font-mono text-latitude-solana leading-none">4.20 SOL</p>
                   </div>
                </div>
            </div>
            
            <div className="flex gap-2 bg-black p-2 rounded-2xl border border-white/5">
                <button className="px-6 py-2 bg-latitude-red text-white text-[10px] font-black uppercase rounded-xl tracking-widest transition-all">Inventory</button>
                <button className="px-6 py-2 text-gray-500 text-[10px] font-black uppercase rounded-xl tracking-widest hover:text-white transition-colors">History</button>
            </div>
         </header>

         {userVault.length === 0 ? (
           <div className="py-24 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[40px] bg-black/20">
              <span className="text-6xl mb-6 grayscale opacity-20">📡</span>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">No spectral signals detected in your vault.</p>
              <button className="mt-8 text-latitude-red font-black uppercase text-[10px] tracking-[0.4em] hover:scale-105 transition-all bg-latitude-red/10 px-8 py-3 rounded-full border border-latitude-red/20">Deploy New Signal →</button>
           </div>
         ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {userVault.map(n => (
                <div key={n.id} className="group relative">
                   <div className="aspect-square bg-vst border border-white/10 p-2 rounded-[32px] overflow-hidden transition-all group-hover:border-latitude-red group-hover:shadow-[0_0_40px_rgba(255,0,0,0.3)]">
                      <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                         <img src={n.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <button className="w-full py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.4em] rounded-xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">Inspect Asset</button>
                         </div>
                      </div>
                   </div>
                   <div className="mt-5 px-3">
                      <h4 className="text-white font-black text-sm uppercase truncate tracking-widest group-hover:text-latitude-red transition-colors italic">{n.title}</h4>
                      <div className="flex justify-between items-center mt-2 border-t border-white/5 pt-2">
                        <p className="text-gray-500 text-[9px] uppercase font-mono tracking-tighter">{n.artist}</p>
                        <span className="text-latitude-solana font-mono text-[11px] font-bold">{n.price} SOL</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
         )}
      </div>
    </div>
  );
};

export default Profile;
