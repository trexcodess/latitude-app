
import React, { useState, useEffect } from 'react';
import { userManagementService, User, UserRole } from '../services/userManagementService';
import { ViewState } from '../types';

const UserManagement: React.FC<{ setView: (view: ViewState) => void }> = ({ setView }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const allUsers = await userManagementService.getUsersByRole(UserRole.RECORD_LABEL);
        const artists = await userManagementService.getUsersByRole(UserRole.ARTIST);
        const movieStudios = await userManagementService.getUsersByRole(UserRole.MOVIE_STUDIO);
        const tvChannels = await userManagementService.getUsersByRole(UserRole.TV_CHANNEL);
        const artStudios = await userManagementService.getUsersByRole(UserRole.ART_STUDIO);
        const nftArtists = await userManagementService.getUsersByRole(UserRole.NFT_ARTIST);

        setUsers([...allUsers, ...artists, ...movieStudios, ...tvChannels, ...artStudios, ...nftArtists]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-4 sm:p-6 md:p-8">
        <button onClick={() => setView(ViewState.ADMIN)} className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-latitude-red transition-colors z-10">Back to Admin</button>
      <h1 className="text-3xl font-bold mb-6 text-white">User Management</h1>
      {loading && <p className="text-white">Loading users...</p>}
      {error && <p className="text-red-500 bg-red-900/20 p-4 rounded-lg">Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map(user => (
          <div key={user.id} className="bg-vst/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 transition-all hover:border-latitude-blue/50">
            <p className="text-xl font-bold text-white">{user.name}</p>
            <p className="text-sm text-gray-400 font-mono mt-1">{user.email}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 uppercase font-black">Role: <span className="text-latitude-blue font-mono lowercase">{user.role}</span></p>
                {user.parent && <p className="text-xs text-gray-500 uppercase font-black mt-2">Parent: <span className="text-latitude-teal font-mono lowercase">{user.parent}</span></p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
