
import { db } from './firebaseConfig';
import { ref, set, get, update } from "firebase/database";
import { UserProfile, UserTier } from '../types';

export enum UserRole {
  RECORD_LABEL = 'RECORD_LABEL',
  ARTIST = 'ARTIST',
  MOVIE_STUDIO = 'MOVIE_STUDIO',
  TV_CHANNEL = 'TV_CHANNEL',
  ART_STUDIO = 'ART_STUDIO',
  NFT_ARTIST = 'NFT_ARTIST',
}

export interface User extends UserProfile {
  role: UserRole;
  parent?: string; // ID of the parent user (e.g., a record label for an artist)
}

export const userManagementService = {
  createUser: async (user: User) => {
    await set(ref(db, 'users/' + user.id), user);
  },

  getUser: async (userId: string): Promise<User | null> => {
    const snapshot = await get(ref(db, 'users/' + userId));
    if (snapshot.exists()) {
      return snapshot.val() as User;
    }
    return null;
  },

  updateUser: async (userId: string, updates: Partial<User>) => {
    await update(ref(db, 'users/' + userId), updates);
  },

  getUsersByRole: async (role: UserRole): Promise<User[]> => {
    const snapshot = await get(ref(db, 'users'));
    const users: User[] = [];
    if (snapshot.exists()) {
      const allUsers = snapshot.val();
      for (const userId in allUsers) {
        if (allUsers[userId].role === role) {
          users.push(allUsers[userId]);
        }
      }
    }
    return users;
  },

  getUsersByParent: async (parentId: string): Promise<User[]> => {
    const snapshot = await get(ref(db, 'users'));
    const users: User[] = [];
    if (snapshot.exists()) {
      const allUsers = snapshot.val();
      for (const userId in allUsers) {
        if (allUsers[userId].parent === parentId) {
          users.push(allUsers[userId]);
        }
      }
    }
    return users;
  },
};
