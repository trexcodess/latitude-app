import { UserProfile, UserTier } from '../types';
import { auth as firebaseAuth } from './firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

const CURRENT_USER_KEY = 'latitude_current_user';

export const authService = {
  login: async (identifier: string, accessKey: string): Promise<UserProfile> => {
    // 1. Super Admin Bypass (Bypass Firebase for internal debugging)
    if (identifier === 'admin' && accessKey === '3000') {
      const admin: UserProfile = {
        id: 'super_admin',
        name: 'Latitude Architect',
        handle: '@admin',
        email: 'admin@latitude.io',
        bio: 'Root access to the Latitude ecosystem. Managing creative sovereignty.',
        avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=admin',
        bannerUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000',
        tier: UserTier.LABEL_EXEC,
        isAdmin: true,
        socials: { twitter: '@latitude_admin' }
      };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(admin));
      return admin;
    }

    // 2. Real Firebase Login
    try {
      // Assuming identifier is email for Firebase. Handles could be mapped in Firestore later.
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, identifier, accessKey);
      const user = userCredential.user;
      
      const profile: UserProfile = {
        id: user.uid,
        name: user.displayName || identifier.split('@')[0],
        handle: `@${user.uid.substring(0, 5)}`,
        email: user.email || '',
        bio: 'Latitude Citizen.',
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
        bannerUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000',
        tier: UserTier.FAN_CLUB,
        socials: {}
      };
      
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(profile));
      return profile;
    } catch (error: any) {
      console.error("Firebase Login Error:", error);
      throw new Error(error.message || 'Access denied by network security.');
    }
  },

  register: async (data: any): Promise<UserProfile> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, data.email, data.password);
      const user = userCredential.user;

      const newUser: UserProfile = {
        id: user.uid,
        name: data.name,
        handle: data.handle.startsWith('@') ? data.handle : `@${data.handle}`,
        email: data.email,
        bio: 'New explorer of the Latitude network.',
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
        bannerUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000',
        tier: UserTier.FAN_CLUB,
        socials: {}
      };
      
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
      return newUser;
    } catch (error: any) {
      console.error("Firebase Register Error:", error);
      throw new Error(error.message || 'Registration failed protocol.');
    }
  },

  logout: async () => {
    await signOut(firebaseAuth);
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): UserProfile | null => {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  subscribeToAuth: (callback: (user: UserProfile | null) => void) => {
    return onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        // Only clear if it wasn't the hardcoded admin
        const current = localStorage.getItem(CURRENT_USER_KEY);
        if (current && JSON.parse(current).id !== 'super_admin') {
           localStorage.removeItem(CURRENT_USER_KEY);
           callback(null);
        }
      }
    });
  }
};
