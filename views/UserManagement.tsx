
import React, { useState, useEffect } from 'react';
import { userManagementService, User, UserRole } from '../services/userManagementService';

const UserManagement: React.FC = () => {
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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded-lg">
            <p className="text-lg font-bold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm">Role: {user.role}</p>
            {user.parent && <p className="text-sm">Parent: {user.parent}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
